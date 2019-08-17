import React from 'react';
import classes from './styles.module.css'

import Actions from '../common/Actions';
import Container from '../common/Container';

class Filter extends React.Component {
  render(){
    return (
      <Actions>
        <Container>
          <input 
            className={classes.input}
            placeholder="Filter notes"
          />
          <select className={classes.select}>
            <option>Sort by last edited</option>
            <option>Sort by recently created</option>
            <option>Sort by alphabetically</option>
          </select>
        </Container>
      </Actions>
    )
  }
}

export default Filter;