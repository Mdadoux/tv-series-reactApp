import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import 'whatwg-fetch';
import Series from '../Series/Series';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleSeries from '../SignleSeries/SingleSeries';
import Content from '../Content/Content';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Nav />


          <Switch>
            <Route exact path='/' component={Series} />
            <Route path="/series/:id" component={SingleSeries} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

