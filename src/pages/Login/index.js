import React from 'react'
import { Link } from 'react-router-dom'

import { useFormik } from "formik"
import * as Yup from 'yup'
import axios from 'axios'

import {useHistory} from 'react-router-dom';

import { firebase } from './../../Firebase/firebase'

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

  const handleOnClick = async (provider) => {
    if(provider === 'google') {
      const googleProvider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(googleProvider)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }else if(provider === 'facebook') {
      const facebookProvider = new firebase.auth.FacebookAuthProvider()

      firebase.auth().signInWithPopup(facebookProvider)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
  }

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
                <button type="button" className="google" onClick={() => handleOnClick('google')}>
                  <span className="icon"><AiOutlineGoogle /></span>
                  <span>Google</span>
                </button>

                <button type="button" className="facebook" onClick={() => handleOnClick('facebook')}>
                  <span className="icon"><GrFacebookOption /></span>
                  <span>Facebook</span>
                </button>
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
