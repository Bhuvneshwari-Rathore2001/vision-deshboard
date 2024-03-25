import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div
      style={{ background: "url('/assets/vision-bg.svg')" }}
      className='flex gap-8 h-screen !bg-no-repeat !bg-cover'
    >
      <Sidebar />
      <div className='text-white'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
