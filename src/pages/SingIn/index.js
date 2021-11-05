import React from 'react'
import Cookies from 'universal-cookie'
import * as yup from 'yup'
import { Link, useHistory } from 'react-router-dom'
import { Form, Formik, ErrorMessage, Field } from 'formik'

import { firebase } from './../../config/firebase'
import api from './../../services/api'

import { Wrapper } from './styles'

import { AiOutlineGoogle, AiOutlineArrowLeft } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'

function SingIn() {
  const history = useHistory()
  const cookies = new Cookies()

  const handleSubmitForm = (values) => {
    api.get(`/account?email=${values.email}&password=${values.password}`)
      .then((response) => {
        const { data } = response

        if(data.length){
          localStorage.setItem('idToken', 'yes')
          localStorage.setItem('providerId', 'form')

          cookies.set('name', `${data[0].name}`, { path: '/' })
          cookies.set('email', `${data[0].email}`, { path: '/' })
          cookies.set('photo', `${data[0].photo}`, { path: '/' })

          history.push("/dashboard")
        }else{
          console.log('usuário inválido')
        }
      }).catch((error) => console.log(error))
  }

  const validations = yup.object({
    email: yup
      .string()
      .email('Email inválido')
      .required('O campo é obrigatório.'),
    password: yup
      .string()
      .min(5, 'No mínimo 5 caracteres.')
      .required('O campo é obrigatório.')
    })

  const handleOnClickConnectSocialMedia = async (provider) => {
    if (provider === 'google') {
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

    } else if (provider === 'facebook') {
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
            <Link to="/"><AiOutlineArrowLeft /></Link>
          </nav>
        </header>

        <main>
          <h1>TASK<span>Manager</span></h1>

          <div className="connectSocialMedia">
            <button type="button" className="google" onClick={() => handleOnClickConnectSocialMedia('google')}>
              <span className="icon"><AiOutlineGoogle /></span>
              <span>Google</span>
            </button>

            <button type="button" className="facebook" onClick={() => handleOnClickConnectSocialMedia('facebook')}>
              <span className="icon"><GrFacebookOption /></span>
              <span>Facebook</span>
            </button>
          </div>

          <Formik initialValues={{}} onSubmit={handleSubmitForm} validationSchema={validations}>
            <Form className="formWrapper">
              <div className="email">
                <label htmlFor="E-mail">Your E-mail</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="Form-Field"
                  placeholder="Pleace insert your e-mail adress"
                />
                <ErrorMessage component="span" name="email" className="Form-error" />
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
                <ErrorMessage component="span" name="password" className="Form-error" />
              </div>

              <Link to="/SingUp">
                create an account.
              </Link>

              <button type="submit">Sign in</button>
            </Form>
          </Formik>
        </main>
      </Wrapper>
    </>
  )
}

export default SingIn
