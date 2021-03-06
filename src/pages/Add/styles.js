import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.main`
  height: 100%;
  width: 100%;

  main {
    width: 33%;
    height: 70%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    .top {
      display: flex;
      margin-top: 9.125rem;

      .btnBack {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        margin-right: 1.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.contrast};
        color: ${({ theme }) => theme.colors.textSecundary};
        font-size: 1.5rem;
        cursor: pointer;
        border-style: none;
        transition: 90ms;

        &:hover {
          background-color: ${({ theme }) => darken(0.10, `${theme.colors.primary}`)};
        }
      }

      .description {
        h1 {
          font-size: 2rem;
          text-decoration: none;
          color: ${({ theme }) => theme.colors.textPrimary};
        }

        h2 {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  form {
    margin-top: 3.625rem;
  
    input {
      width: 37.688rem;
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
  
    .date {
      margin-top: 1.375rem;
    }
  
    .btn {
      button:nth-child(2) {
        background-color: ${({ theme }) => theme.colors.contrast};
        color: ${({ theme }) => theme.colors.textSecundary};
        margin-top: 0.5rem;
  
        &:hover {
          background-color: ${({ theme }) => darken(0.02, `${theme.colors.contrast}`)};
        }
      }
  
      button {
        width: 37.688rem;
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
        transition: 1s;
  
        &:hover {
          background-color: ${({ theme }) => darken(0.06, `${theme.colors.primary}`)};
          cursor: pointer;
        }
      }
    }
  }

  @media(max-width: 1440px){
    main {
      width: 44%;
      margin: 0 auto;
    }
  }

  @media(max-width: 1024px) {
    main {
      width: 62%;
      margin: 0 auto;
    }
  }

  @media(max-width: 768px) {
    main {
      width: 62%;
      margin: 0 auto;

      form {
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 3.625rem;

        input {
          width: 25rem;
          font-size: 1rem;
        }

        .date {
          margin-top: 1rem;
        }

        .btn {
          button {
            width: 25rem;
            font-size: 1rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }

  @media(max-width: 425px) {
    main {
      width:100%;
      height: 50%;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;

      .top {
        display: flex;
        margin-top: 2.375rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .btnBack {
          width: 2.625rem;
          height: 2.625rem;
          margin-right: 0.875rem;
          font-size: 1rem;
        }

        .description {
          h1 {
            font-size: 1.5rem;
          }

          h2 {
            font-size: 0.875rem;
          }
        }
      }
      
      form {
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 3.625rem;

        input {
          width: 19.875rem;
          font-size: 0.75rem;
        }

        .date {
          margin-top: 1rem;
        }

        .btn {
          button {
            width: 19.875rem;
            font-size: 0.875rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }
`
