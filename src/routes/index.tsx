import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';
import Details from '../pages/Details/Details'
import Home from '../pages/home/Home'

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};