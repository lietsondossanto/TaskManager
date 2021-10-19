import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {Burger, Menu, TaskList} from './../../components/index'

import { Wrapper, Container, List } from './styles'

import { AiOutlineSearch } from 'react-icons/ai'

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [allTasks, setAllTasks] = useState([])

  useEffect(() => {
    axios.get('http://102.131.41.4/task')
      .then((response) => {
        const { data } = response
        setAllTasks(data)
      })
      .catch((error) => console.log(error))
  }, [])

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
            {allTasks.map(todo => (
              <TaskList key={todo.id} id={todo.id} title={todo.title} date={todo.data} />
            ))}
          </List>
        </Container>
      </Wrapper>
    </>
  );
}

export default Dashboard
