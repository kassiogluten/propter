import Head from "next/head";
import { BlogSlider } from "../components/blog/BlogSlider";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Blog as BlogHome } from "../components/Blog";

import { getApolloClient } from "../lib/apollo-client";
import { gql } from "@apollo/client";

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog | Propter</title>
      </Head>
      <Header />
      <BlogSlider posts={posts} />
      <BlogHome posts={posts} />
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
