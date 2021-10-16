import React, { useState } from 'react'

import { Wrapper, Form } from './styles'

import { Burger, Menu } from './../../components/index'

import { AiOutlineArrowLeft } from 'react-icons/ai'

function Login() {
  const [open, setOpen] = useState(false)

  const History = window.history

  return (
    <>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu addIcon="false" open={open} setOpen={setOpen} />
      </div>

      <Wrapper>
        <main>
          <div className="top">
            <button type="button" className="btnBack" onClick={() => History.back()}><AiOutlineArrowLeft /></button>
            <div className="description">
              <h1>Add Task</h1>
              <h2>Add your tasks to be registered.</h2>
            </div>
          </div>

          <Form>
            <div className="task">
              <label for="text">Title task</label>
              <input type="text" name="text" id="text" placeholder="Insert your task" min="1" max="100"/>
            </div>

            <div className="date">
              <label for="date">Date</label>
              <input type="date" name="date" id="date" />
            </div>

            <div className="btn">
              <button type="submit">create task</button>
              <button type="submit">Sign in</button>
            </div>
          </Form>
        </main>
      </Wrapper>
    </>
  )
}

export default Login
