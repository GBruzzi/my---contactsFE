import GlobalStyles from "../../assets/styles/global";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../assets/styles/themes/default.js";
import { BrowserRouter } from "react-router-dom";

import { Container } from "./styles.js";

import Header from "../Header/index.js";
import Routes from "../../Routes.js";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
