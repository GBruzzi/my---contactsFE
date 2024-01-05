import GlobalStyles from '../../assets/styles/global';
import {ThemeProvider} from 'styled-components';
import  defaultTheme  from '../../assets/styles/themes/default.js';

import { Container } from './styles.js';

import Header from '../Header/index.js';
import ContactsList from '../ContactsList/index.js';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header/>
        <ContactsList/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
