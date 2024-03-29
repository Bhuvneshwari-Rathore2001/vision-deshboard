import CardIcon from '../assets/CardIcon';
import ChartIcon from '../assets/ChartIcon';
import HomeIcon from '../assets/HomeIcon';
import { Link, useLocation } from 'react-router-dom';
import { PATH_DASHBOARD } from '../routes';
import classNames from 'classnames';
import ProfileIcon from '../assets/ProfileIcon';

const Sidebar = () => {
  const location = useLocation();

  const sidebarOptions = [
    {
      id: 1,
      name: 'Dashboard',
      img: (
        <HomeIcon
          color={
            location.pathname === PATH_DASHBOARD.root ? 'white' : '#0075FF'
          }
        />
      ),
      link: PATH_DASHBOARD.root,
    },
    {
      id: 2,
      name: 'Tables',
      img: (
        <ChartIcon
          color={
            location.pathname === PATH_DASHBOARD.tables ? 'white' : '#0075FF'
          }
        />
      ),
      link: PATH_DASHBOARD.tables,
    },
    {
      id: 3,
      name: 'Billing',
      img: (
        <CardIcon
          color={
            location.pathname === PATH_DASHBOARD.billing ? 'white' : '#0075FF'
          }
        />
      ),
      link: PATH_DASHBOARD.billing,
    },
    {
      id: 4,
      header: 'ACCOUNT PAGE',
    },
    {
      id: 5,
      name: 'Profile',
      img: (
        <ProfileIcon
          color={
            location.pathname === PATH_DASHBOARD.profile ? 'white' : '#0075FF'
          }
        />
      ),
      link: PATH_DASHBOARD.profile,
    },
  ];

  return (
    <div className='min-w-72 bg-sidebarTexture backdrop-blur-[120px] rounded-3xl mt-3 ml-3 text-white'>
      <div className='text-base text-center font-medium bg-sidebarTitleTexture bg-clip-text text-transparent py-9 px-16'>
        Vision Dashboard
      </div>
      <div className='h-[1px] bg-sidebarLineTexture mx-6' />
      <div className='flex flex-col mt-6 px-6'>
        {sidebarOptions.map((opt) =>
          opt.header ? (
            <div className='text-xs font-medium py-3 px-4'>{opt.header}</div>
          ) : (
            <Link
              to={opt.link}
              key={opt.id}
              className={classNames(
                'flex items-center gap-4 py-3 px-4 rounded-2xl',
                {
                  'bg-[#1A1F37]': opt.link === location.pathname,
                }
              )}
            >
              <div
                className={classNames(
                  'rounded-full p-2 flex items-center justify-center bg-[#1A1F37]',
                  {
                    '!bg-[#0075FF]': opt.link === location.pathname,
                  }
                )}
              >
                {opt.img}
              </div>
              <div>{opt.name}</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
