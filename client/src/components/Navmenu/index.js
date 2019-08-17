import React from 'react';
import { NavLink } from 'react-router-dom';

import Actions from '../common/Actions';
import Container from '../common/Container';

const Navmenu = () => {
  return (
    <Actions>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem' }}>
          <NavLink
            to="/"
          >Home</NavLink>
          <p>
            Last edited a few seconds ago
          </p>
        </div>
      </Container>
    </Actions>
  )
}

export default Navmenu;