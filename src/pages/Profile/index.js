import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'

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

function Login() {
  const [open, setOpen] = useState(false)

  const History = window.history
  const history = useHistory()
  const cookies = new Cookies()

  const handleClickLogout = () => {
    localStorage.clear()
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault()
      cookies.remove('name')
      cookies.remove('photo')
      cookies.remove('email')
    })
    history.push('/')
  }

  const name = cookies.get('name')
  const photo = cookies.get('photo')
  const email = cookies.get('email')

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
            <img src={photo} alt="user photo" />
            <div>
              <h2><strong>{name}</strong></h2>
              <p>My account</p>
            </div>
          </Profile>

          <Data>
            <div className="right-side">
              <div className="name">
                <h3>Display name</h3>
                <h2>{name}</h2>
              </div>

              <div className="email">
                <h3>Email</h3>
                <h2>{email}</h2>
              </div>
            </div>

            <div className="left-side">
              <span><BiUser /></span>
            </div>
          </Data>

          <Button>
            <button type="button" onClick={() => handleClickLogout()}>Sign out</button>
          </Button>
        </Container>
      </Wrapper>
    </>
  )
}

export default Login
