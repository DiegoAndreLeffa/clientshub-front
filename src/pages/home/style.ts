import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  gap: 20px;

  body {
    display: flex;
    align-items: center;
  }

  .buttonSair {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding-top: 20px;
    padding-right: 20px;
  }

  .buttonSair button {
    width: 80px;
    height: 35px;

    color: var(--color-gray-100);

    background: var(--color-gray-800);
    border-radius: 5px;
    border: 4px transparent;
  }

  .buttonSair button:hover {
    font-size: 17px;
    background: var(--color-gray-700);
  }

  .clients {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50%;
    gap: 20px;
  }

  .clients h1 {
    font-size: 45px;
  }

  .clientbutton {
    width: 140px;
    height: 45px;

    color: var(--color-gray-100);

    background: var(--color-gray-800);
    border-radius: 5px;
    border: 4px transparent;
  }

  .clientbutton:hover {
    background: var(--color-gray-700);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    height: 70%;

    padding: 20px;

    background: rgba(217, 217, 217, 0.1);
    border-radius: 12px;
  }

  .listClients {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    gap: 10px;

    list-style: none;

    overflow: auto;
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--color-gray-900) rgba(0, 0, 0, 0.1);
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--color-gray-900) rgba(0, 0, 0, 0.1);
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--color-gray-900) rgba(0, 0, 0, 0.1);
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-900);
    border-radius: 6px;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    .clients h1 {
      font-size: 44px;
    }

    .clients {
      width: 60%;
    }

    .clientbutton {
      width: 140px;
      height: 50px;
    }

    .container {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    .clients h1 {
      font-size: 42px;
    }

    .clients {
      width: 70%;
    }

    .clientbutton {
      width: 130px;
      height: 45px;
    }

    .container {
      width: 90%;
    }
  }

  @media (max-width: 425px) {
    .clients h1 {
      font-size: 40px;
    }

    .clients {
      width: 80%;
    }

    .clientbutton {
      width: 120px;
      height: 40px;
    }

    .container {
      width: 90%;
    }
  }
`;
