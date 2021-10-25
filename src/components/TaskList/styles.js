import styled from 'styled-components';

export const Container = styled.li`
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
  display: ${props => props.hideTask ? 'none' : 'flex'};
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
    .trashIcon {
      width: 1.30rem;
      height: 1.30rem;
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
  }

  @media(max-width: 425px) {
    margin: 0 auto;

    &:first-child {
      margin-top: 2rem;
    }

    width: 19.875rem;
    font-size: 0.90rem;
    margin: 0.75rem auto;

    .left-side {
      .Tasktitle {
        input {
          margin-right: 0.688rem;
        }

        h3 {
          font-size: 1rem;
        }
      }

      .date {
        h4 {
          margin-top: 0.5rem;
          font-size: 0.625rem;
          margin-left: 1.80rem;
        }
      }
    }

    .right-side {
      .trashIcon {
        width: 1.30rem;
        height: 1.30rem;
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
    }
  }
`;

