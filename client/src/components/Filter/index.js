import React from 'react';
import classes from './Filter.module.css';

import Container from '../../common/container';
import Label from '../../common/label';

class Filter extends React.Component {
  render() {
    return (
      <Container>
        <div className={`container d-flex`}>
          <div className={`form-group ${classes.relative}`}>
            <input className={classes.input} id="filter" type="text" autoComplete="off" />
            <Label 
              htmlFor="filter"
              title="Filter Notes"
            />
          </div>
          <div className="form-group">
            <select className={classes.select}>
              <option>Sort by last edited</option>
              <option>Sort by recently created</option>
              <option>Sort alphabetically</option>
            </select>
          </div>
        </div>
      </Container>
    )
  }
}

export default Filter;