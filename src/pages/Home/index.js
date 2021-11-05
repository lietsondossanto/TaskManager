import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Wrapper, Menu, Content } from './styles'

function Home() {
  const history = useHistory()

  const handleClickRedirectSingUp = () => {
    if (!!localStorage.getItem('idToken')) {
      history.push("/dashboard")
    } else {
      history.push("/SingUp")
    }
  }
  
  const handleClickRedirectSingIn = () => {
    if (!!localStorage.getItem('idToken')) {
      history.push("/dashboard")
    } else {
      history.push("/SingIn")
    }
  }

  return (
    <>
      <Menu>
        <nav>
          <h1><Link to="/">TASK<span>Manager</span></Link></h1>
          <ul>
            <li><Link to="/">About US</Link></li>
            <li><Link to="/">Cases</Link></li>
            <li><Link to="/">Resources</Link></li>
          </ul>
          <div className="btn">
            <button type="button" onClick={() => handleClickRedirectSingUp()}>Sign up</button>
            <button type="button" onClick={() => handleClickRedirectSingIn()}>Sign in</button>
          </div>
        </nav>
      </Menu>

      <Wrapper>
        <Content>
          <article className="left-side">
            <h1>
              <span className="destaque">Creative Digital</span> Design Agency<br />
              is looking for new talen
            </h1>

            <h2>Creative Digital Design Agency is looking for new talent</h2>

            <button type="button" onClick={() => handleClickRedirectSingIn()}>Get started</button>
          </article>
          <div className="right-side"></div>
        </Content>
      </Wrapper>
    </>
  )
}

export default Home
