import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Roulete from '../pages/Cassino/Roulete';
import Slots from '../pages/Cassino/Slots';
import Crash from '../pages/Official/Crash';
import Dice from '../pages/Official/Dice';
import LeagueOfLegends from '../pages/Sports/LeagueOfLegends';
import CounterStriker from '../pages/Official/Dice';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/official/crash" element={<MainLayout><Crash /></MainLayout>} />
      <Route path="/official/dice" element={<MainLayout><Dice /></MainLayout>} />
      <Route path="/cassino/slots" element={<MainLayout><Slots /></MainLayout>} />
      <Route path="/cassino/roulete" element={<MainLayout><Roulete /></MainLayout>} />
      <Route path="/cassino/slots" element={<MainLayout><Slots /></MainLayout>} />
      <Route path="/sports/leagueoflegends" element={<MainLayout><LeagueOfLegends /></MainLayout>} />
     <Route path="/sports/counterstriker" element={<MainLayout><CounterStriker /></MainLayout>} />
      
    </Routes>
  );
};

export default AppRoutes;
