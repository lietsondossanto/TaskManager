import styled from 'styled-components';
import { darken } from 'polished'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  margin: 5.125rem auto;
  width: 62.75rem;
  height: 50rem;

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
`;

export const List = styled.ul`

`
