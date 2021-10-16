import styled from 'styled-components'

export const Wrapper = styled.main`
  height: 100%;
  width: 100%;
`

export const Container = styled.section`
  margin: 9rem auto;
  width: 37.688rem;
  height: 35rem;

  .top {
    display: flex;

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
    }

    .description {
      h1 {
        font-size: 2rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textPrimary};
      }

      h3 {
        font-size: 1rem;
        margin-top: 0.75rem;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.125rem;
      }
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.5rem;
  }

  div {
    text-align: right;

    h2 {
      strong {
        display: block;
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: 1.5rem;
      }
    }

    p {
      display: flex;
      margin-top: 0.375rem;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }
`
export const Data = styled.div`
  width: 90%;
  margin-top: 1.875rem;
  display: flex;
  justify-content: space-between;

  .right-side {
    h3 {
      color: ${({ theme }) => theme.colors.primary};
    }

    h2 {
      margin-top: 0.30rem;
      font-size: 1.20rem;
    }

    .email {
      margin-top: 2rem;
    }
  }

  .left-side {
    margin-top: 1.30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 8rem;

    span {
      font-size: 13rem;
      color: ${({ theme }) => theme.colors.textSecundary};
    }
  }
`
export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.188rem;

  button {
    width: 23.813rem;
    height: 3.75rem;
    background-color: ${({ theme }) => theme.colors.contrast};
    color: ${({ theme }) => theme.colors.textSecundary};
    border-style: none;
    border-radius: 6px;
    transition: 1s;
    font-size: 1.125rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.contrast};
    }
  }
`
