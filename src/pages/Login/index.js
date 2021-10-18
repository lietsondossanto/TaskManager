import React from 'react'
import { Link } from 'react-router-dom'

import { useFormik } from "formik"
import * as Yup from 'yup'
import axios from 'axios'

import {useHistory} from 'react-router-dom';

import { Wrapper, Form } from './styles'

import { AiOutlineGoogle, AiOutlineArrowLeft } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'

function Login() {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email("E-mail inválido.")
        .required("O campo é obrigatório."),
      password: Yup
        .string()
        .required("O campo é obrigatório.")
        .min(8, 'No mínimo 8 caracteres.')
    }),
    onSubmit: (values) => {

      axios.get(`https://tlzora.deta.dev/account?email=${values.email}&password=${values.password}`)
        .then((response) => {
          localStorage.setItem('login', 'yes')
          history.push("/dashboard")
        })
        .catch((error) => console.log(error))
      },
  })

  return (
    <>
      <Wrapper>
        <header>
          <nav>
            <Link to="/">
              <a target="_self"><AiOutlineArrowLeft /></a>
            </Link>
          </nav>
        </header>

        <main>
          <h1>TASK<span>Manager</span></h1>

          <div className="socialConnect">
            <Link to="/">
              <a>
                <div className="google">
                  <div><AiOutlineGoogle /></div>
                  <span>Google</span>
                </div>
              </a>
            </Link>

            <Link to="/">
              <a>
                <div className="facebook">
                  <div><GrFacebookOption /></div>
                  <span>Facebook</span>
                </div>
              </a>
            </Link>
          </div>

          <Form onSubmit={formik.handleSubmit}>
            <div className="email">
              <label for="email">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Pleace insert your e-mail adress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>

            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <div className="password">
              <label for="password">Your password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Pleace insert your password adress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>

            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <button type="submit">Sign in</button>
          </Form>
        </main>
      </Wrapper>
    </>
  )
}

export default Login
