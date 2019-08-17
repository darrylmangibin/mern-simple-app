import React from 'react';

import Layout from '../../Layout';
import Filter from '../../Filter';
import Notes from '../../Notes';

const Home = () => {
  return (
    <Layout>
      <Filter />
      <Notes />
    </Layout>
  )
}

export default Home;