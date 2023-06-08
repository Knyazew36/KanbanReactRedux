import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Task from '../components/Taks/Task';

const RouteApp = () => {
  return (
    <Routes>
      <Route index path='/' element={<Dashboard />} />
      <Route index path='/task/:id' element={<Task />} />
    </Routes>
  );
};

export default RouteApp;
