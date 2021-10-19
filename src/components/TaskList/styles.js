import styled from 'styled-components';
import { darken } from 'polished'

export const Contianer = styled.li`
  &:first-child {
    margin-top: 2rem;
  }

  width: 62.75rem;
  height: 3.75rem;
  background-color: ${({ theme }) => theme.colors.contrast};
  border-style: none;
  border-radius: 12px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.textSecundary};
  font-size: 0.90rem;
  margin: 0.75rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side {
    .Tasktitle {
      display: flex;

      input {
        margin-right: 0.75rem;
        border-style: none;
        background-color: ${({ theme }) => theme.colors.contrast};
        border-radius: 6px;
        border: 2px solid ${({ theme }) => theme.colors.primary};
        width: 1.125rem;
        height: 1.125rem;
      }

      h3 {
        font-size: 1.125rem;
      }
    }

    .date {
      h4 {
        margin-top: 0.5rem;
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.primary};
        margin-left: 2rem;
      }
    }
  }

  .right-side {
    width: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    justify-content: center;
    transition: 0.5s;

    &:hover {
      color: #F52F41;
      cursor: pointer;
    }
  }
`;

