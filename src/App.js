import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';

import Home from "./pages";

import LocaleProvider from './context/LocaleContext';
function App() {
  return (
    <LocaleProvider>
    <Router>
      <Home />
    </Router>
    </LocaleProvider>
  );
}

export default App;
