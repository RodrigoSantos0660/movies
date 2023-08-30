import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from'styled-components';
import GlobalStyles from './Styles/global';
import theme from './Styles/theme';
import { Create  } from './pages/Create';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={ theme }>
     <GlobalStyles />
      < Create  />
    </ThemeProvider>
  </React.StrictMode>,
)
