import React, { useState } from 'react'

import { Wrapper } from './styles'

import { Burger, Menu } from './../../components/index'

function Login() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <Wrapper>

      </Wrapper>
    </>
  )
}

export default Login
