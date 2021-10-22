import React, { useState } from 'react'
import axios from 'axios'

import { Wrapper, Form } from './styles'

import { Burger, Menu } from './../../components/index'

import { AiOutlineArrowLeft } from 'react-icons/ai'

function Add() {

  const date = new Date()
  var day = date.getDate()
  var year = date.getFullYear()
  var month = date.getMonth()

  if (day <= 9) {
    day = `0${day}`
  }

  if (month <= 9) {
    month = `0${month}`
  }

  const [open, setOpen] = useState(false)
  const [taskTitle, setTaskTitle] = useState('New Task')
  const [taskDate, setTaskDate] = useState(`${year}-${month}-${day}`)

  const History = window.history

  function handleTitleInputChange(e) {
    const inputValue = e.target.value
    setTaskTitle(inputValue)
  }

  function handleDateInputChange(e) {
    const inputValue = e.target.value
    setTaskDate(inputValue)
  }

  // const json = JSON.stringify({})
  const a = {title: 'lietson', data: '1999-04-30'}

  const handleClickCreatNewTask = () => {
    axios.post("http://102.131.41.4/task?text=lietsondossanto&date=1981-05-20")
    .then((response) => {
      console.log(response)
      alert('cadastrado')
    }).catch((error) => console.log(error))
  }

  return (
    <>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu addIcon="false" open={open} setOpen={setOpen} />
      </div>

      <Wrapper>
        <main>
          <div className="top">
            <button
              type="button"
              className="btnBack"
              onClick={() => History.back()}>
                <AiOutlineArrowLeft />
            </button>
            <div className="description">
              <h1>Add Task</h1>
              <h2>Add your tasks to be registered.</h2>
            </div>
          </div>

          <Form>
            <div className="task">
              <label for="text">Title task</label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Insert your task"
                min="1"
                max="100"
                onChange={((e) => handleTitleInputChange(e))}
              />
            </div>

            <div className="date">
              <label for="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                onChange={((e) => handleDateInputChange(e))}/>
            </div>

            <div className="btn">
              <button
                type="submit"
                onClick={() => handleClickCreatNewTask()}>
                  create task
              </button>
              <button type="submit">Sign in</button>
            </div>
          </Form>
        </main>
      </Wrapper>
    </>
  )
}

export default Add
