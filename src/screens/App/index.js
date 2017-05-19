import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../shared/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './screens/Articles';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <div className="App__content">
          <Route path="/" component={Articles} />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
