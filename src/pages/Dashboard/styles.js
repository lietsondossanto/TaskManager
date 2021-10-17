import styled from 'styled-components';

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

    input {
      width: 62.75rem;
      height: 3.75rem;
      background-color: ${({ theme }) => theme.colors.contrast};
      border-style: none;
      border-radius: 12px;
      padding: 1rem;
      color: ${({ theme }) => theme.colors.textSecundary};
      margin-top: 2rem;
      font-size: 0.90rem;
    }
  }
`;

export const List = styled.ul`

`
