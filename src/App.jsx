import './App.css';
import DashboardLayout from './layout/DashboardLayout';
import Home from './pages/dashboard/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tables from './pages/dashboard/tables';
import Billing from './pages/dashboard/billing';
import Profile from './pages/dashboard/profile';
import { PATH_DASHBOARD } from './routes';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH_DASHBOARD.root} element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path='tables' element={<Tables />} />
          <Route path='billing' element={<Billing />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
