import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { PATH_DASHBOARD } from '../routes';

const Header = () => {
  return (
    <div className='flex w-full justify-between items-center mt-10'>
      <div className='flex flex-col gap-1'>
        <Breadcrumbs className='bg-transparent [&_li]:text-white p-0 [&_li]:hover:text-white'>
          <Link to={PATH_DASHBOARD.root} className='text-[#A0AEC0]'>
            Pages
          </Link>
          <Link to={PATH_DASHBOARD.root}>Dashboard</Link>
        </Breadcrumbs>
        <div className='text-sm font-medium'>Dashboard</div>
      </div>
    </div>
  );
};

export default Header;
