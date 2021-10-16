import React from 'react'

import { Wrapper } from './styles'

import { Menu } from './../../components/index'

function Main() {
  return (
    <>
      <header>
        <Menu />
      </header>

      <Wrapper>
        <h1>Main</h1>
      </Wrapper>
    </>
  )
}

export default Main
