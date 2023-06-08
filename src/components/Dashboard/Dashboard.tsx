import React from 'react';
import Backlog from '../Backlog/Backlog';
import Finished from '../Finished/Finished';
import Progress from '../Progress/Progress';
import Ready from '../Ready/Ready';

const Dashboard = () => {
  return (
    <main className=' py-[25px] px-[19px] h-full grid grid-cols-1 gap-6 lg:grid-cols-4'>
      <Backlog />
      <Progress />
      <Ready />
      <Finished />
    </main>
  );
};

export default Dashboard;
