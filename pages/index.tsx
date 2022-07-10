import type { NextPage } from "next";
import Head from "next/head";

import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import { sanityClient } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Trending props={posts} />
      <div className="border-solid border-b border-inherit" />
      <BlogSection props={posts} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    body,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug,
    publishedAt
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
