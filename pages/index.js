import Head from "next/head";
import Features from "../components/Features";
import Header from "../components/Header";
import Homes from "../components/Homes";
import Story from "../components/Story";
import { homes } from "../utils/homes";

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
        <div className="py-24 space-y-10 sm:space-y-0 px-10 md:grid md:grid-cols-2 lg:grid-cols-3 sm:gap-16">
          {homes.map((home) => (
            <Homes key={home.id} data={home} />
          ))}
        </div>
      </main>
    </div>
  );
}
