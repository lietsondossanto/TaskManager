import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Menu } from './styles'

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
        <h1>Main</h1>
      </Wrapper>
    </>
  )
}

export default Main
