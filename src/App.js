import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';

import Home from "./pages";


import LanguageProvider from './context/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <Home />
    </Router>
    </LanguageProvider>
  );
}

export default App;
