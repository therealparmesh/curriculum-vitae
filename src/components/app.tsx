import { h } from 'preact';
import { Router, Route } from 'preact-router';
import Home from '../routes/home';

export default () => (
  <div id="app">
    <Router>
      <Route path="/" component={Home} />
    </Router>
  </div>
);
