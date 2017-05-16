import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './screens/Articles';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <div className="App__content">
        <Route path="/" component={Articles} />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
