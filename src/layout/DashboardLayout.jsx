import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div
      style={{ background: "url('/assets/vision-bg.svg')" }}
      className='flex h-screen !bg-no-repeat !bg-cover font-outfit'
    >
      <Sidebar />
      <div className='text-white w-full px-8'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
