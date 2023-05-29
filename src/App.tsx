import { Provider } from "./pages/providers/authProvider";
import { RoutesMain } from "./routes";
import Globalstyle from "./styles/Globalstyle";

export const App = () => {
  return (
    <>
      <Globalstyle />
      <Provider>
        <RoutesMain />
      </Provider>
    </>
  );
};

export default App;
