import { Snackbar } from "./hooks";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Snackbar.Provider>
        <Home />
        <GlobalStyle />
      </Snackbar.Provider>
    </>
  );
}

export default App;
