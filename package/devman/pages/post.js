// pages/create-post.js
import Head from "next/head";
import Layout from "../src/layouts/Layout";
import Createpost from "./Create-post";

const CreatePostPage = () => {
  return (
    <Layout>
      <Head>
        <title>Create Post | Omkar</title>
        <link rel="icon" href="img/hero/icon.png" />
      </Head>
      <Createpost />
    </Layout>
  );
};

export default CreatePostPage;
