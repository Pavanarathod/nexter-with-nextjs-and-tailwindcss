import Head from "next/head";
import Features from "../components/Features";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>nexter</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto">
        <Features />
      </main>
    </div>
  );
}
