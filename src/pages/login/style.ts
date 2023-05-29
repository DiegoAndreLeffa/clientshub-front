import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 425px;
  }

  .titleSite {
    display: flex;
    justify-content: center;

    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  form div {
    display: flex;
    flex-direction: column;
  }

  form label {
    font-size: 18px;
    margin-left: 6px;
  }

  form input {
    height: 35px;
    border-radius: 4px;
    border: 4px transparent;
    padding: 10px;
  }

  .buttonLogin {
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

    color: var(--color-gray-100);
    text-decoration: none;
  }

  .buttonLogin:hover {
    font-size: 18px;
    background: var(--color-gray-700);
  }

  .buttonRegister {
    width: 425px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 204px;
    height: 50px;

    background: var(--color-gray-800);
    border-radius: 4px;
    color: var(--color-gray-100);
    text-decoration: none;
  }
  a:hover {
    font-size: 18px;
    background: var(--color-gray-700);
  }

  @media (max-width: 1024px) {
    .container {
      width: 60%;
    }

    form input {
      height: 34px;
      padding: 10px;
    }

    .buttonLogin {
      height: 50px;
    }

    .buttonRegister {
      width: 100%;
    }

    a {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 70%;
    }

    form input {
      height: 32px;
      padding: 9px;
    }

    .buttonLogin {
      height: 48px;
    }

    .buttonRegister {
      width: 100%;
    }

    a {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    .container {
      width: 90%;
    }

    form input {
      height: 30px;
      padding: 8px;
    }

    .buttonLogin {
      height: 45px;
    }

    .buttonRegister {
      width: 100%;
    }

    a {
      width: 100%;
    }
  }
`;
