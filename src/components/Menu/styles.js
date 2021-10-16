import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 4.75rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.contrast};
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 95%;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-side {
      display: flex;
      justify-content: center;
      align-items: center;

      .MenuBurger {
        height: 3rem;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .Add {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.contrast};

        a {
          color: ${({ theme }) => theme.colors.textPrimary};
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            margin: 0 0.625rem 0 1.75rem;
            width: 1rem;
          }
        }
      }
    }

    .right-side {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  img {
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.5rem;
  }

  div {
    text-align: right;

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.textPrimary}
    }

    a {
      display: flex;
      margin-top: 0.125rem;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      span {
        color: ${({ theme }) => theme.colors.textSecundary};
        font-size: 0.75;
        margin-left: 0.375rem;
      }
    }
  }
`

export const BurgerWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  @media (max-width: 425px) {
    width: 100%;
  }

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li:first-child {
      a {
        color: ${({ theme }) => theme.colors.background};
      }
    }

    li {
      margin: 1rem;
      list-style: none;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: 1.5rem;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        text-decoration: none;
        transition: color 0.3s linear;


        @media (max-width: 425px) {
          font-size: 1.5rem;
          text-align: center;
        }

        &:hover {
          color: ${({ theme }) => theme.primaryHover};
        }
      }
    }
  }
`;
