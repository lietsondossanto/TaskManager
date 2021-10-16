import styled from 'styled-components'

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

    .socialConnect {
      display: flex;
      flex-direction: column;

      a {
        color: ${({ theme }) => theme.colors.contrast};
      }

      .google {
        width: 23.813rem;
        height: 3.75rem;
        background-color: ${({ theme }) => theme.colors.contrast};
        display: flex;
        border-radius: 6px;
        margin-top: 2.625rem;

        span {
          display: flex;
          align-items: center;
          margin-left: 1rem;
          color: ${({ theme }) => theme.colors.textPrimary};
          font-size: 1rem;
        }

        div {
          width: 4rem;
          height: 3.75rem;
          background-color: ${({ theme }) => theme.colors.primary};
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
      }

      .facebook {
        width: 23.813rem;
        height: 3.75rem;
        background-color: ${({ theme }) => theme.colors.contrast};
        display: flex;
        border-radius: 6px;
        margin-top: 0.75rem;

        span {
          display: flex;
          align-items: center;
          margin-left: 1rem;
          color: ${({ theme }) => theme.colors.textPrimary};
          font-size: 1rem;
        }

        div {
          width: 4rem;
          height: 3.75rem;
          background-color: ${({ theme }) => theme.colors.primary};
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
      }
    }
  }
`
export const Form = styled.form`
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

  .password {
    margin-top: 1.313rem;
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
    transition: 1s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.textSecundary};
    }
  }
`
