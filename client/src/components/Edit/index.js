import React from 'react';

import EditNav from '../EditNav';
import EditForm from '../EditForm';

class Edit extends React.Component {
  render() {
    return (
      <React.Fragment>
        <EditNav />
        <EditForm />
      </React.Fragment>
    )
  }
}

export default Edit;