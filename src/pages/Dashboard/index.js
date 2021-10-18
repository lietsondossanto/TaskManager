import React, { useState } from 'react'

import {Burger, Menu} from './../../components/index'

import { Wrapper, Container, List } from './styles'

import { AiOutlineSearch } from 'react-icons/ai'

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </nav>

      <Wrapper>
        <Container>
          <header>
            <h1>My Tasks</h1>
            <h2>Register your tasks and have a better monitoring of your activities</h2>

            <div className="searchInput">
              <button type="button" className="iconSearch"><AiOutlineSearch /></button>
              <input type="text" name="search" id="search" min="1" max="100" placeholder="Find of tasks"/>
            </div>
          </header>

          <List>

          </List>
        </Container>
      </Wrapper>
    </>
  );
}

export default Dashboard
