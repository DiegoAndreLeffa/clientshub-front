import styled from "styled-components";

export const StyledDashboard = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  gap: 10px;

  body {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 45px;
  }

  .buttonVoltar {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding-top: 20px;
    padding-right: 20px;
  }

  .buttonVoltar a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    width: 80px;
    height: 35px;

    color: var(--color-gray-100);

    background: var(--color-gray-800);
    border-radius: 5px;
    border: 4px transparent;
  }

  .buttonVoltar a:hover {
    font-size: 17px;
    background: var(--color-gray-700);
  }

  .sectionClient {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 80%;
    height: 160px;
    padding: 15px;

    gap: 20px;

    border-radius: 10px;

    color: var(--color-gray-900);

    background-color: var(--color-gray-300);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;

    margin-right: 10px;
  }

  .iconClient {
    width: 80px;
    height: 80px;
  }

  .client {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }

  .divButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .divButtons div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .divButtons div button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    width: 80px;
    height: 35px;

    color: var(--color-gray-100);

    background: var(--color-gray-800);
    border-radius: 5px;
    border: 4px transparent;
  }

  .divButtons div button:hover {
    font-size: 17px;
    background: var(--color-gray-700);
  }

  .infoClient {
    display: flex;
    justify-content: flex-start;
    gap: 25px;
    width: 100%;
  }

  .name {
    width: 300px;
  }
  .email {
    width: 215px;
  }
  .phone {
    width: 205px;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    width: 90%;
  }

  .contacts h2 {
    font-size: 35px;
  }

  .contacts button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    width: 170px;
    height: 50px;

    color: var(--color-gray-100);
    font-size: 20px;

    background: var(--color-gray-800);
    border-radius: 5px;
    border: 4px transparent;
  }
  .contacts button:hover {
    font-size: 21px;
    background: var(--color-gray-700);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    height: 45%;

    padding: 20px;

    background: rgba(217, 217, 217, 0.1);
    border-radius: 12px;
  }

  .listContacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    gap: 10px;

    list-style: none;

    overflow: auto;
  }

  .liContacts {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 99%;

    padding: 10px;
    border-radius: 10px;

    color: var(--color-gray-900);

    background-color: var(--color-gray-300);
  }

  .iconContact {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 65px;
    height: 65px;

    margin-right: 10px;

    border-radius: 50px;
    background-color: var(--color-gray-900);
  }
  .iconContactPhone {
    width: 35px;
    height: 35px;
    color: var(--color-gray-100);
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    width: 90%;
  }

  .infoContact {
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    width: 100%;
  }

  .fullName {
    width: 260px;
  }

  .pdf {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 120px;
    height: 35px;
    color: var(--color-gray-100);
    background: var(--color-gray-800);
    border-radius: 5px;
    border: 4px transparent;
  }

  .buttonPdf {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    width: 80px;
    height: 35px;

    color: var(--color-gray-100);

    background: var(--color-gray-800);
    border-radius: 5px;
    border: 4px transparent;
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
    h1 {
      font-size: 42px;
    }

    .sectionClient {
      width: 80%;
    }

    .client {
      width: 85%;
      gap: 20px;
    }

    .divButtons div {
      flex-direction: row;
      gap: 20px;
    }

    .divButtons div button {
      width: 140px;
      height: 40px;
    }

    .name {
      width: 300px;
    }
    .email {
      width: 215px;
    }
    .phone {
      width: 205px;
    }

    .container {
      width: 80%;
    }

    .contacts h2 {
      font-size: 35px;
    }

    .contacts button {
      width: 170px;
      height: 50px;
    }

    .liContacts {
      width: 99%;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }

    .sectionClient {
      width: 90%;
    }

    .divButtons div {
      gap: 15px;
    }

    .divButtons div button {
      width: 120px;
      height: 35px;
    }

    .name {
      width: 100%;
    }
    .email {
      width: 100%;
    }
    .phone {
      width: 100%;
    }

    .container {
      width: 90%;
    }

    .contact {
      gap: 10px;
    }

    .contacts h2 {
      font-size: 32px;
    }

    .contacts button {
      width: 150px;
      height: 45px;
    }

    .liContacts {
      width: 99%;
    }
    .iconContact {
      height: 60px;
    }
  }

  @media (max-width: 425px) {
    width: 100%;

    gap: 10px;

    h1 {
      font-size: 35px;
    }

    .sectionClient {
      width: 90%;
      height: auto;

      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    .client {
      width: 100%;
      gap: 10px;
    }

    .divButtons {
      flex-direction: column;
      gap: 10px;
    }

    .divButtons div {
      gap: 10px;
    }

    .divButtons div button {
      width: 115px;
      height: 30px;
    }

    .infoClient {
      flex-direction: column;
    }

    .name {
      width: 100%;
    }
    .email {
      width: 100%;
    }
    .phone {
      width: 100%;
    }

    .container {
      width: 90%;
      height: 70%;
      padding: 10px;
    }

    .contacts h2 {
      font-size: 30px;
    }

    .contacts button {
      width: 130px;
      height: 40px;
    }

    .liContacts {
      width: 99%;
      flex-direction: column;
      gap: 10px;
    }

    .infoContact {
      flex-direction: column;
      gap: 10px;
    }
  }
`;
