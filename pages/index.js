import Head from "next/head";
import Features from "../components/Features";
import Header from "../components/Header";
import Story from "../components/Story";

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
        <Story />
      </main>
    </div>
  );
}
