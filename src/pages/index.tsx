import Head from "next/head";
import Auth from "./auth";

export default function Home() {
  return (
    <>
      <Head>
        <title>AIS-DX Platform</title>
        <meta property="og:image" content="/background.png" />
        {/* <ButtonLogin/> */}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Auth />
      </main>
    </>
  );
}
