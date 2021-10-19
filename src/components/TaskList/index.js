import React, { useState } from 'react'

import { Contianer } from './styles'

import { BiTrash } from 'react-icons/bi'

const TaskList = () => {
  const [checked, setChecked] = useState(false)

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

  return (
    <>
      <Contianer>
        <div className="left-side">
          <div className="Tasktitle">
            <div className="checkbox">
              <input type="checkbox" name="done" id="done" onChange={() => setChecked(!checked)} />
              <span className="check"></span>
            </div>
            <h3 style={style.scratchTitle}> Solve computer logic problems</h3>
          </div>

          <span className="date">
            <h4>Today</h4>
          </span>
        </div>

        <div className="right-side">
          <BiTrash style={style.icon}/>
        </div>
      </Contianer>
    </>
  )
}

export default TaskList
