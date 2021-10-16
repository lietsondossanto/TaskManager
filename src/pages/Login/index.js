import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Form } from './styles'

import { AiOutlineGoogle, AiOutlineArrowLeft } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'

function Login() {
  return (
    <>
      <Wrapper>

        <header>
          <nav>
            <Link to="/">
              <a target="_self"><AiOutlineArrowLeft /></a>
            </Link>
          </nav>
        </header>


        <main>
          <h1>TASK<span>Manager</span></h1>

          <div className="socialConnect">
            <Link to="/">
              <a>
                <div className="google">
                  <div><AiOutlineGoogle /></div>
                  <span>Google</span>
                </div>
              </a>
            </Link>

            <Link to="/">
              <a>
                <div className="facebook">
                  <div><GrFacebookOption /></div>
                  <span>Facebook</span>
                </div>
              </a>
            </Link>
          </div>

          <Form>
            <div className="email">
              <label for="email">Your email</label>
              <input type="email" name="email" id="email" placeholder="Pleace insert your e-mail adress" />
            </div>

            <div className="password">
              <label for="password">Your password</label>
              <input type="password" name="password" id="password" placeholder="Pleace insert your password adress" />
            </div>

            <button type="submit">Sign in</button>
          </Form>
        </main>
      </Wrapper>
    </>
  )
}

export default Login
