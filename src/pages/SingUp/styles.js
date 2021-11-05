import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.main`
  height: 100%;
  width: 100%;

  header {
    width: 100%;
    height: 7rem;

    nav {
      padding: 2rem;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: 2rem;
      }
    }
  }

  main {
    width: 21.5%;
    height: 70%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    h1 {
      font-size: 2rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};

      span {
        color: ${({ theme }) => theme.colors.textSecundary};
      }
    }
  }

  .formWrapper {
    margin-top: 4.25rem;

    input {
      width: 23.813rem;
      height: 3.75rem;
      background-color: ${({ theme }) => theme.colors.contrast};
      color: ${({ theme }) => theme.colors.textPrimary};
      display: flex;
      border-radius: 6px;
      border-style: none;
      padding: 1rem;
      font-size: 1rem;
      margin-top: 0.5rem;
    }

    label {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1rem;
    }

    .username {
      margin-bottom: 1.313rem;
    }

    .password {
      margin-top: 1.313rem;
      margin-bottom: 1.313rem;
    }

    .confirmPassword {
      margin-bottom: 1rem;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      transition: 0.50s;

      &:hover {
        color: ${({ theme }) => darken(0.07, `${theme.colors.primary}`)};
        text-decoration: underline;
      }
    }

    button {
      width: 23.813rem;
      height: 3.75rem;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      border-style: none;
      padding: 1rem;
      font-size: 1.125rem;
      margin-top: 1.125rem;
      box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.contrast};
      transition: 60ms;

      &:hover {
        background-color: ${({ theme }) => darken(0.06, `${theme.colors.primary}`)};
      }
    }
  }

  @media (max-width: 1024px) {
    main {
      width: 40%;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    main {
      width: 55%;
      margin: 0 auto;
    }
  }

  @media(max-width: 425px) {
    header {
      display: none;
    }

    main {
      width: 100%;
      height: 70%;
      padding: 1rem;

      h1 {
        display: flex;
        justify-content: flex-start;
        margin-left: 3rem;
      }
    }

    .formWrapper {
      margin: 2.625rem auto;

      input {
        width: 19.511rem;
        font-size: 0.75rem;
        margin-top: 0.5rem;
      }

      .password {
        margin-top: 1.313rem;
      }

      button {
        width: 19.511rem;
        font-size: 1.125rem;
      }
    }
  }
`
