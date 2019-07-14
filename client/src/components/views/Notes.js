import React from 'react';

import Layout from '../Layout';
import Filter from '../Filter';
import Notes from '../Notes';

const NotesView = () => {
  return (
    <Layout>
      <Filter />
      <Notes />
    </Layout>
  )
}

export default NotesView;