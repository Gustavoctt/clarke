import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  max-width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.25rem;
  margin-top: 1.5rem;
  overflow: scroll;

  tbody {
    tr {
      td {
        img {
          max-width: 6rem;
        }
      }
    }
  }

  td {
    padding: 1.25rem 2rem;
    background: #ededed;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  gap: 0.5rem;

  background: #00d084;
  color: #ffffff;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  img {
    max-width: 20rem;
  }
`;
