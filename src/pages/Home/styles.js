import styled from 'styled-components'
import { darken } from 'polished'

import image from './../../assets/img/Reading_list-cuate.svg'

export const Wrapper = styled.main`
  height: 100%;
  width: 100%;
`

export const Menu = styled.header`
  width: 100%;
  height: 7rem;
  padding: 1rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
      font-size: 2rem;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};

        span {
          color: ${({ theme }) => theme.colors.textSecundary};
        }
      }
    }

    ul {
      display: flex;

      li:nth-child(1) {
        a {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      li {
        margin: 1rem;
        list-style: none;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.textSecundary};
          font-size: 1.125rem;
          transition: 0.60s;

          &:hover {
            color: ${({ theme }) => darken(0.07, `${theme.colors.primary}`)};
          }
        }
      }
    }

    .btn {
      button {
        height: 50px;
        width: 136px;
  
        font-size: 1.125rem;
        background-color: ${({ theme }) => theme.colors.primary};
        border-style: none;
        box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.contrast};
        border-radius: 6px;
        transition: 0.60s;

        :first-child {
          margin-right: 1rem;
          background-color: ${({ theme }) => theme.colors.contrast};
          color: ${({ theme }) => theme.colors.primary};

          &:hover {
            background-color: ${({ theme }) => darken(0.06, `${theme.colors.contrast}`)};
            box-shadow: none;
          }
        }
  
        &:hover {
          background-color: ${({ theme }) => darken(0.06, `${theme.colors.primary}`)};
          cursor: pointer;
        }
      }
    }
  }

  @media(max-width: 768px) {
    nav {
      h1 {
        width: 40%;
        display: flex;
        justify-content: flex-start;
      }

      ul {
        display: flex;
      }

      button {
        display: none;
      }
    }
  }

  @media(max-width: 425px) {
    height: 2rem;

    nav {
      h1 {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        font-size: 1.50rem;
      }

      ul {
        display: none;
      }

      button {
        display: none;
      }
    }
  }
`

export const Content = styled.div`
  width: 77vw;
  height: 80vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  .left-side {
    display: flex;

    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 2.75rem;
      line-height: 3.151rem;
      color: ${({ theme }) => theme.colors.textPrimary};

      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    h2 {
      margin-top: 2rem;
      font-size: 1.125rem;
      line-height: 1.289rem;
      color: ${({ theme }) => theme.colors.textSecundary};
    }

    button {
      width: 11.5rem;
      height: 3.125rem;
      margin-top: 2rem;
      border-radius: 6px;
      border-style: none;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
      font-size: 1.125rem;
      transition: 0.60s;

      &:hover {
        background-color: ${({ theme }) => darken(0.06, `${theme.colors.primary}`)};
        cursor: pointer;
      }
    }
  }

  .right-side {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    width: 36.5rem;
    height: 36.5rem;
    background: transparent url(${image}) no-repeat right;
  }

  @media(max-width: 1440px) {
    .left-side {
      width: 100%;
    }

    .right-side {
      width: 80%;
      background-size: 30rem;
    }
  }

  @media(max-width: 1024px) {
    width: 90%;

    .left-side {
      width: 50%;
      margin: 0;
    }

    .right-side {
      width: 50%;
      background-size: 25rem;
    }
  }

  @media(max-width: 768px) {
    width: 90%;

    .left-side {
      width: 40%;
      h1 {
        font-size: 2rem;
      }
    }

    .right-side {
      width: 70%;
      background-size: 25rem;
    }
  }

  @media(max-width: 425px) {
    margin-top: 3.813rem !important;
    display: flex;
    flex-direction: column;

    .left-side {
      display: flex;
      flex-direction: column;
      width: 100%;

      h1 {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 1.5rem;
        line-height: 2.30rem;
      }

      h2 {
        margin-top: 0.75rem;
      }

      button {
        width: 9.25rem;
        height: 2.514rem;
        font-size: 0.875rem;
        margin-top: 1.25rem;
      }
    }

    .right-side {
      width: 100%;
      height: 21.625rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      background: transparent url(${image}) no-repeat left;
      background-size: 18rem;
    }
  }
`
