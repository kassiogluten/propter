import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Blog } from "../components/Blog";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { VideoHistory } from "../components/History";
import { OurMission } from "../components/OurMission";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Trajectory } from "../components/Trajectory";
import { Why } from "../components/Why";

import { getApolloClient } from "../lib/apollo-client";
import { gql } from "@apollo/client";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Propter | Gestão contábil</title>
      </Head>
      <Header />
      <Banner />
      <Why />
      <OurMission />
      <Trajectory />
      <VideoHistory />
      <Services />
      <Testimonials bg="cinza" color="white" />
      <Blog posts={posts} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        generalSettings {
          title
          description
        }
        posts(first: 10000, where: { categoryName: "Propter" }) {
          edges {
            node {
              id
              excerpt
              title
              slug
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    `,
  });

  const posts = data?.data.posts.edges
    .map(({ node }) => node)
    .map((post) => {
      return {
        ...post,
        path: `/blog/${post.slug}`,
      };
    });

  const page = {
    ...data?.data.generalSettings,
  };

  return {
    props: {
      page,
      posts,
    },
  };
}
