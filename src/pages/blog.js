import Head from "next/head";
import { BlogSlider } from "../components/blog/BlogSlider";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Blog as BlogHome } from "../components/Blog";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog | Propter</title>
      </Head>
      <Header />
      <BlogSlider />
      <BlogHome />
      <Footer />
    </div>
  );
}
