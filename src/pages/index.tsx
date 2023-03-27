import Head from "next/head";
import { type NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <h1>Ola mundo</h1>
    </>
  )
}

export default Home;