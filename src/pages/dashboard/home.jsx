import { analyticsData } from '../../apidata';
import CartIcon from '../../assets/CartIcon';
import FileIcon from '../../assets/FileIcon';
import GlobeIcon from '../../assets/GlobeIcon';
import WalletIcon from '../../assets/WalletIcon';
import AnalyticsCard from '../../components/AnalyticsCard';
import Header from '../../components/Header';
import WelcomeCard from '../../components/WelcomeCard';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-4 gap-6 mt-7'>
        <AnalyticsCard analyticsData={analyticsData[0]} icon={<WalletIcon />} />
        <AnalyticsCard analyticsData={analyticsData[1]} icon={<GlobeIcon />} />
        <AnalyticsCard analyticsData={analyticsData[2]} icon={<FileIcon />} />
        <AnalyticsCard analyticsData={analyticsData[3]} icon={<CartIcon />} />
      </div>
      <WelcomeCard />
    </div>
  );
};

export default Home;
