import React, { useState } from 'react'

import { Burger, Menu } from './../../components/index'

import {
  Wrapper,
  Container,
  Profile,
  Data,
  Button
} from './styles'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

import photo from './../../assets/img/photo.jpg'

function Login() {
  const [open, setOpen] = useState(false);

  const History = window.history

  return (
    <>
      <nav>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </nav>

      <Wrapper>
        <Container>
          <div className="top">
            <button type="button" className="btnBack" onClick={() => History.back()}><AiOutlineArrowLeft /></button>
            <div className="description">
              <h1>My profile</h1>
              <h3>Preview my informations</h3>
            </div>
          </div>

          <Profile>
            <img src={photo} alt="photo user" />
            <div>
              <h2><strong>Lietson Dos Santos</strong></h2>
              <p>My account</p>
            </div>
          </Profile>

          <Data>
            <div className="right-side">
              <div className="name">
                <h3>Display name</h3>
                <h2>Lietson Dos Santos</h2>
              </div>

              <div className="email">
                <h3>Email</h3>
                <h2>lietsondossanto@gmail.com</h2>
              </div>
            </div>

            <div className="left-side">
              <span><BiUser /></span>
            </div>
          </Data>

          <Button>
            <button type="button">Sign out</button>
          </Button>
        </Container>
      </Wrapper>
    </>
  )
}

export default Login
