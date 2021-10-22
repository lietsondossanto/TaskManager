import styled from 'styled-components';
import { darken } from 'polished'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  margin: 5.125rem auto;
  width: 62.75rem;
  height: 100%;

  header {
    h1 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    h2 {
      color: ${({ theme }) => theme.colors.textSecundary};
      font-size: 1.125rem;
    }

    .searchInput {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;

      button {
        width: 4rem;
        height: 3.75rem;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.textPrimary};
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        transition: 60ms;
        border-style: none;

        &:hover {
          background-color: ${({ theme }) => darken(0.06, `${theme.colors.primary}`)};
        }
      }

      input {
        width: 62.75rem;
        height: 3.75rem;
        background-color: ${({ theme }) => theme.colors.contrast};
        border-style: none;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        padding: 1rem;
        color: ${({ theme }) => theme.colors.textSecundary};
        font-size: 0.90rem;
      }
    }
  }

  @media(max-width: 425px) {
    margin: 2.5rem auto;
    width: 100%;
    height: 100%;

    header {
      width: 100%;
      margin: 0 auto;

      article {
        width: 87%;
        display: flex;
        justify-content: flex-start;
        margin: 0 auto;
        flex-direction: column;

        h1 {
          font-size: 1.5rem;
        }

        h2 {
          font-size: 0.875rem;
          word-wrap: break-word;
          width: 19rem;
          line-height: 1rem;
          margin-top: 1rem;
        }
      }

      .searchInput {
        margin-top: 1.25rem;

        button {
          width: 4rem;
          height: 3.75rem;
          border-top-left-radius: 12px;
          border-bottom-left-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          transition: 60ms;
          border-style: none;
        }

        input {
          width: 15.875rem;
          font-size: 0.75rem;
        }
      }
    }
  }
`;

export const List = styled.ul`
  width: 100%;
`
export const Footer = styled.footer`
  display: none;

  @media(max-width: 427px){
    display: flex;
    margin-top: 6rem;

    div {
      width: 100%;
      height: 5rem;
      position: fixed;
      bottom: 0;
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({theme}) => theme.colors.background};

      button {
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 12px;
        border-style: none;
        background-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.background};
        font-size: 1rem;
      }
    }
  }
`
