import { Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('div', {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$20',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 700px)': {
      fontSize: '$6xl',
      textAlign: 'center',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
    '@media(max-width: 700px)': {
      textAlign: 'center',
    },
  },

  '@media(max-width: 700px)': {
    // maxWidth: 'none',
    padding: '$4',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 700px)': {
    display: 'none',
  },
})
