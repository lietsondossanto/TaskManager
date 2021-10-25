import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Burger, Menu, TaskList } from './../../components/index'
import api from './../../services/api'

import { Wrapper, Container, List, Footer } from './styles'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [allTasks, setAllTasks] = useState([])

  let TaskSearch = []

  useEffect(() => {
    api.get('/task')
      .then((response) => {
        const { data } = response
        setAllTasks(data)
      }).catch((error) => console.log(error))
  }, [])

  const handlerSearchInput = (value) => {
    allTasks.map(item => {
      if(item.title.toLowerCase() === value.toLowerCase()){
        TaskSearch.push(item)
        return TaskSearch
      }
    })
  }

  const handlerClickButtonSearch = () => {
    setAllTasks(TaskSearch)
  }
  return (
    <>
      <nav>
        <Burger open={open} setOpen={setOpen} />
        <Menu showIconAdd={true} open={open} setOpen={setOpen} />
      </nav>

      <Wrapper>
        <Container>
          <header>
            <article>
              <h1>My Tasks</h1>
              <h2>Register your tasks and have a better <span>monitoring</span> of your activities</h2>
            </article>

            <div className="searchInput">
              <button
                type="button"
                className="iconSearch"
                onClick={() => handlerClickButtonSearch()}>
                <AiOutlineSearch />
              </button>
              <input
                type="text"
                name="search"
                id="search"
                min="1"
                max="100"
                placeholder="Find of tasks"
                onChange={(e) => handlerSearchInput(e.target.value)}
              />
            </div>
          </header>

          <List>
            {allTasks.map(item => (
              <TaskList
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.data}
              />
            ))}
          </List>
        </Container>
      </Wrapper>

      <Footer>
        <div>
          <Link to="/add">
            <button type="button"><BsPlusLg /></button>
          </Link>
        </div>
      </Footer>
    </>
  )
}

export default Dashboard
