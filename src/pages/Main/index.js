import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Menu, Content } from './styles'

function Main() {
  return (
    <>
      <Menu>
        <nav>
          <h1><Link to="/"><a target="_self">TASK<span>Manager</span></a></Link></h1>

          <ul>
            <li><Link to="/"><a target="_self" href="#">About US</a></Link></li>
            <li><Link to="/"><a target="_self" href="#">Cases</a></Link></li>
            <li><Link to="/"><a target="_self" href="#">Resources</a></Link></li>
          </ul>

          <Link to="/login"><a target="_self"><button type="button">Sign in</button></a></Link>
        </nav>
      </Menu>

      <Wrapper>
        <Content>
          <article className="left-side">
            <h1>
              <span>Creative Digital</span> Design Agency<br />
              is looking for new talen
            </h1>

            <h2>Creative Digital Design Agency is looking for new talent</h2>

            <button type="button">Get started</button>
          </article>

          <div className="right-side"></div>
        </Content>
      </Wrapper>
    </>
  )
}

export default Main
