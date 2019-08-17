import React from 'react';
import { NavLink } from 'react-router-dom';
import timeStamp from '../../actions/timeStamp'

import Actions from '../common/Actions';
import Container from '../common/Container';

const Navmenu = (props) => {
  console.log(props)
  return (
    <Actions>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem' }}>
          <NavLink
            to="/"
          >Home</NavLink>
          <p>
            {!props.note ? 'LOADING' : timeStamp(props.note.updatedAt)}
          </p>
        </div>
      </Container>
    </Actions>
  )
}

export default Navmenu;