import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/views/Home';
import Edit from './components/views/Edit';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id" component={Edit} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;