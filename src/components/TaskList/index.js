import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from './../../services/api'

import { Container } from './styles'

import { BiTrash, BiPencil } from 'react-icons/bi'

const TaskList = ({title, date, id}) => {
  const history = useHistory()

  const [checked, setChecked] = useState(false)
  const [deleteTask, setDeleteTask] = useState(false)

  const showTrash = (checked) => {
    return checked ? 'flex' : 'none'
  }

  const strikeOut = (checked) => {
    return checked ? 'line-through' : 'none'
  }

  const handleClickEdite = () => {
    history.push('/add')
    //Editar A task(Implementar funcionabilidade)
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

  const validateTheDate = (value) => {
    const date = new Date()
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const yesterday = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 1}`
    const tomorrow = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`
    let day = ''
    
    if(today == value){
      day = 'Today'
    }else if(yesterday == value) {
      day = 'yesterday'
    }else if(tomorrow == value){
      day = 'tomorrow'
    }else {
      day = value
    }

    return day
  }

  validateTheDate()
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
            <h4>{validateTheDate(date)}</h4>
          </span>
        </div>

        <div className="right-side">
          <BiTrash
            className="trashIcon icons"
            style={style.icon}
            onClick={() => handleClickDelete(id)}
          />
          <BiPencil 
            className="pencil icons" 
            onClick={() => handleClickEdite()}
          />
        </div>
      </Container>
    </>
  )
}

export default TaskList
