import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useFormik } from "formik"
import * as Yup from 'yup'
import Cookies from 'universal-cookie'

import { firebase } from './../../config/firebase'
import api from './../../services/api'

import { Wrapper, Form } from './styles'

import { AiOutlineGoogle, AiOutlineArrowLeft } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'

function Login() {
  const history = useHistory()
  const cookies = new Cookies()

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
      api.get()
        .then((response) => {
          const { data } = response

          localStorage.setItem('idToken', 'yes')
          localStorage.setItem('providerId', 'form')

          cookies.set('name', `${data[0].name}`, { path: '/' })
          cookies.set('email', `${data[0].email}`, { path: '/' })
          cookies.set('photo', `${data[0].photo}`, { path: '/' })

          history.push("/dashboard")
        }).catch((error) => console.log(error))
      },
  })

  const handleOnClick = async (provider) => {
    if(provider === 'google') {
      const googleProvider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(googleProvider)
        .then((response) => {
          const { credential } = response
          const { profile } = response.additionalUserInfo

          localStorage.setItem('idToken', credential.idToken)
          localStorage.setItem('providerId', credential.providerId)

          cookies.set('name', `${profile.name}`, { path: '/' })
          cookies.set('email', `${profile.email}`, { path: '/' })
          cookies.set('photo', `${profile.picture}`, { path: '/' })


          history.push('/dashboard')
        }).catch((error) => console.log(error))

    }else if(provider === 'facebook') {
      const facebookProvider = new firebase.auth.FacebookAuthProvider()

      firebase.auth().signInWithPopup(facebookProvider)
        .then((response) => {
          const { credential } = response
          const { profile } = response.additionalUserInfo
          const { data } = profile.picture

          localStorage.setItem('idToken', credential.idToken)
          localStorage.setItem('providerId', credential.providerId)

          cookies.set('name', `${profile.name}`, { path: '/' })
          cookies.set('email', 'E-mail unavailable', { path: '/' })
          cookies.set('photo', `${data.url}`, { path: '/' })

          history.push('/dashboard')
        }).catch((error) => console.log(error))
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
