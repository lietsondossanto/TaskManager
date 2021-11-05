import React from "react"
import * as yup from "yup"
import { Link, useHistory } from "react-router-dom"
import { Form, Formik, ErrorMessage, Field } from "formik"

import api from "./../../services/api"

import { Wrapper } from "./styles"

import { AiOutlineArrowLeft } from "react-icons/ai"

function SingUp() {
  const history = useHistory()

  const handleSubmitForm = (values) => {
    console.log(values)
  }

  const validations = yup.object({
    username: yup.string().max(50).min(5).required("O campo é obrigatório."),
    email: yup
      .string()
      .email("Email inválido")
      .required("O campo é obrigatório."),
    password: yup
      .string()
      .min(5, "No mínimo 5 caracteres.")
      .max(50, "No maximo 50 caracteres.")
      .required("O campo é obrigatório."),
    confirmPassword: yup
      .string()
      .min(5, "No mínimo 5 caracteres.")
      .max(50, "No maximo 50 caracteres.")
      .required("O campo é obrigatório."),
  })

  return (
    <>
      <Wrapper>
        <header>
          <nav>
            <Link to="/">
              <AiOutlineArrowLeft />
            </Link>
          </nav>
        </header>

        <main>
          <h1>
            TASK<span>Manager</span>
          </h1>

          <Formik
            initialValues={{}}
            onSubmit={handleSubmitForm}
            validationSchema={validations}
          >
            <Form className="formWrapper">
              <div className="username">
                <label htmlFor="username">Your User Name</label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className="Form-Field"
                  placeholder="Pleace insert your user name"
                />
                <ErrorMessage
                  component="span"
                  name="username"
                  className="Form-error"
                />
              </div>
              <div className="email">
                <label htmlFor="E-mail">Your E-mail</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="Form-Field"
                  placeholder="Pleace insert your e-mail adress"
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="Form-error"
                />
              </div>

              <div className="password">
                <label htmlFor="password">Your password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="Form-Field"
                  placeholder="Pleace insert your password"
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="Form-error"
                />
              </div>

              <div className="confirmPassword">
                <label htmlFor="confirmPassword">Confirm your password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="Form-Field"
                  placeholder="Pleace confirm your password"
                />
                <ErrorMessage
                  component="span"
                  name="confirmPassword"
                  className="Form-error"
                />
              </div>

              <Link to="/SingIn">I already have an account.</Link>

              <button type="submit">Sign up</button>
            </Form>
          </Formik>
        </main>
      </Wrapper>
    </>
  )
}

export default SingUp
