import styled from 'styled-components'

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
        }
      }
    }

    button {
      height: 50px;
      width: 136px;

      font-size: 1.125rem;
      background-color: ${({ theme }) => theme.colors.primary};
      border-style: none;
      box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.contrast};
      border-radius: 6px;
      transition: 1s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.contrast};
        color: ${({ theme }) => theme.colors.primary};
        border: 0.5px solid ${({ theme }) => theme.colors.textSecundary};;
        cursor: pointer;
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
      transition: 1s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.contrast};
        color: ${({ theme }) => theme.colors.primary};
        border: 0.5px solid ${({ theme }) => theme.colors.textSecundary};;
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
`
