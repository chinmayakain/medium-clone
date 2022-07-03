import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";

import Navbar from "../components/Navbar";
import Trending from "../components/Trending";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Trending />
      <div className="border-solid border-b border-inherit" />
    </div>
  );
};

export default Home;
