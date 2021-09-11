import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>nexter</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Header />
    </div>
  );
}
