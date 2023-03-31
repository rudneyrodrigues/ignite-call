import Head from 'next/head'
import { NextPage } from 'next'
import { Heading, Text } from '@ignite-ui/react'

import { Container, Hero, Preview } from './styles'

import previewImg from '@/assets/app-preview.png'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />

        <meta name="description" content="Ignite Call" />
      </Head>

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>

          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo
          </Text>
        </Hero>

        <Preview>
          <Image
            src={previewImg}
            alt="Calendário exemplificando a aplicação"
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </>
  )
}

export default Home
