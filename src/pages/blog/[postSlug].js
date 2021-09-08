import Head from "next/head";
import { gql } from "@apollo/client";

import { getApolloClient } from "../../lib/apollo-client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Content } from "../../components/blog/Content";
import { Text } from "@chakra-ui/react";

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Blog Propter</title>
        <meta property="og:title" content={post.title + " | Blog Propter"} />
        <meta name="description" content={post.adicionais?.subtitulo || null} />
        <meta
          property="og:description"
          content={post.adicionais?.subtitulo || null}
        />
        <meta
          property="og:image"
          content={post.featuredImage?.node.mediaItemUrl}
          key="ogimage"
        />
      </Head>
      <Header />

      <Content post={post} html={post.content} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { postSlug } = params;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      query PostBySlug($slug: String!) {
        generalSettings {
          title
        }
        postBy(slug: $slug) {
          id
          content
          title
          slug
          adicionais {
            conclusao
            subtitulo
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    `,
    variables: {
      slug: postSlug,
    },
  });

  const post = data?.data.postBy;

  const site = {
    ...data?.data.generalSettings,
  };
  return {
    props: {
      post,
      site,
    },
  };
}

export async function getStaticPaths() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        posts(first: 10000, where: { categoryName: "Propter" }) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `,
  });

  const posts = data?.data.posts.edges.map(({ node }) => node);

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          postSlug: slug,
        },
      };
    }),
    fallback: false,
  };
}
