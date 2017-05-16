import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import request from '../../shared/request';
import { ARTICLES_QUERY } from '../../shared/queries';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import './App.css';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <ArticleList articles={this.state.articles} /> } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
