import styled from "styled-components";

export const CardsClints = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 99%;

  padding: 10px;
  border-radius: 10px;

  color: var(--color-gray-900);

  background-color: var(--color-gray-300);

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70px;

    margin-right: 10px;
  }

  .iconClient {
    width: 65px;
    height: 65px;
  }

  .client {
    display: flex;
    flex-direction: column;

    gap: 10px;

    width: 90%;
  }
  .infoClient {
    display: flex;
    justify-content: flex-start;
    gap: 60px;
    width: 100%;
  }

  .fullName {
    width: 260px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 8px;

    gap: 10px;

    .client {
      flex-direction: column;
      width: 100%;
    }
    .infoClient {
      flex-direction: column;
      gap: 10px;
    }
  }
  @media (max-width: 425px) {
    width: 99%;
    padding: 10px;

    flex-direction: column;
    gap: 10px;

    .client {
      flex-direction: column;
      width: 100%;
    }
    .infoClient {
      flex-direction: column;
      gap: 10px;
    }

    .fullName {
      width: auto;
    }
  }
`;
