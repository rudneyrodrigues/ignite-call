import Head from 'next/head'
import { type NextPage } from 'next'
import { getCssText, Heading } from '@ignite-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

        <meta name="description" content="Ignite Call" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>

      <Heading as="h1">Ola mundo</Heading>
    </>
  )
}

export default Home
