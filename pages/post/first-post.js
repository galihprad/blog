import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../component/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>hhoooo</title>
      </Head>
      <div>
        <Link href="/">
          <a>s</a>
        </Link>
        OIIII
      </div>
    </Layout>
  );
}
