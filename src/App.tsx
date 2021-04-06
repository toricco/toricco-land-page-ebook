import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';

const App = (): JSX.Element => (
  <Router>
    <GlobalStyles />
    <Routes />
  </Router>
);

export default App;
