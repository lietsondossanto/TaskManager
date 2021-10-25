import React, { useState } from 'react'

import api from './../../services/api'

import { Container } from './styles'

import { BiTrash } from 'react-icons/bi'

const TaskList = ({title, date, id}) => {
  const [checked, setChecked] = useState(false)
  const [deleteTask, setDeleteTask] = useState(false)

  function showTrash (checked) {
    return checked ? 'flex' : 'none'
  }

  function strikeOut (checked) {
    return checked ? 'line-through' : 'none'
  }

  const style = {
    scratchTitle: {
      textDecoration: strikeOut(checked)
    },
    icon: {
      display: showTrash(checked)
    }
  }

  const handleClickDelete = (id) => {
    api.delete(`/task/${id}`)
      .then((response) => {
        setDeleteTask(true)
        console.log(response.data.message)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <Container hideTask={deleteTask}>
        <div className="left-side">
          <div className="Tasktitle">
            <div className="checkbox">
              <input type="checkbox" name="done" id="done" onChange={() => setChecked(!checked)} />
              <span className="check"></span>
            </div>
            <h3 style={style.scratchTitle}>{title}</h3>
          </div>

          <span className="date">
            <h4>{date}</h4>
          </span>
        </div>

        <div className="right-side">
          <BiTrash
            className="trashIcon"
            style={style.icon}
            onClick={() => handleClickDelete(id)}
          />
        </div>
      </Container>
    </>
  )
}

export default TaskList
