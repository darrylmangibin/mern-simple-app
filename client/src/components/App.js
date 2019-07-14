import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';

import NotesView from './views/Notes';
import EditPage from '../components/views/Edit';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={NotesView} />
          <Route path="/:id" exact component={EditPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;