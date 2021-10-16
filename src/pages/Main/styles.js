import styled from 'styled-components'

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
