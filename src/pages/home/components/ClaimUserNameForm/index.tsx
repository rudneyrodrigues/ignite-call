import { ArrowRight } from 'phosphor-react'
import { Button, TextInput } from '@ignite-ui/react'

import { Form } from './styles'

export function ClaimUserNameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}