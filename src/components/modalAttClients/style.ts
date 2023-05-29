import styled from "styled-components";

export const ModalAttClient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  position: fixed;
  inset: 0;
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    display: flex;
    flex-direction: column;

    width: 500px;
    height: auto;

    padding: 10px;

    background: var(--color-gray-900);

    color: var(--color-gray-100);
    border-radius: 4px;
  }

  .titleModal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  .titleModal h2 {
    font-size: 30px;
    margin-left: 15px;
  }
  .titleModal button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 35px;
    height: 35px;

    background: var(--color-gray-800);
    border-radius: 4px;
    border: 4px transparent;

    color: var(--color-gray-100);
  }
  .titleModal button:hover {
    font-size: 20px;
    background: var(--color-gray-700);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 12px;
  }

  form div {
    display: flex;
    flex-direction: column;
  }

  form label {
    font-size: 18px;
    margin-left: 9px;
  }
  form input {
    height: 35px;
    border-radius: 4px;
    border: 4px transparent;
    padding: 10px;
  }

  .attClient {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: row;

    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 100%;
    height: 50px;

    background: var(--color-gray-800);
    border-radius: 4px;
    border: 4px transparent;

    font-size: 20px;
    color: var(--color-gray-100);
    text-decoration: none;
  }
  .attClient:hover {
    font-size: 21px;
    background: var(--color-gray-700);
  }

  @media (max-width: 1024px) {
    .modal {
      width: 60%;
    }
  }
  @media (max-width: 768px) {
    .modal {
      width: 60%;
    }
  }

  @media (max-width: 425px) {
    .modal {
      width: 90%;
    }
  }
`;
