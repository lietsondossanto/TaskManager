import React, { useState } from 'react'
import * as yup from 'yup'
import { Form, Formik, ErrorMessage, Field } from 'formik'

import { Wrapper } from './styles'

import { Burger, Menu } from './../../components/index'
import api from './../../services/api'

import { AiOutlineArrowLeft } from 'react-icons/ai'

function Add() {
  const [open, setOpen] = useState(false)

  const History = window.history
  
  const handleSubmit = (values) => {
    api.post("/task", values)
    .then((response) => {
      alert('cadastrado')
    })
    .catch((error) => console.log(error))
  }

  const validations = yup.object({
    title: yup
      .string()
      .max(25)
      .required('O campo é obrigatório.'),
    data: yup
      .date()
      .min(new Date(), 'Não é possível incluir uma data passada')
    })
    
  return (
    <>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu showIconAdd={false} open={open} setOpen={setOpen} />
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

          <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
            <Form className="formWrapper">
              <div className="task">
                <label for="title">Task title</label>
                <Field
                  type="text"
                  name="title"
                  id="title"
                  className="Form-Field"
                  placeholder="Insert your task"
                />
                <ErrorMessage component="span" name="title" className="Form-error" />
              </div>

              <div className="date">
                <label htmlFor="data">Date</label>
                <Field
                  type="date"
                  name="data"
                  id="data"
                  className="Form-Field"
                />
                <ErrorMessage component="span" name="data" className="Form-error" />
              </div>

              <div className="btn">
                <button type="submit">create task</button>
                <button type="submit">Sign in</button>
              </div>
            </Form>
          </Formik>
        </main>
      </Wrapper>
    </>
  )
}

export default Add
