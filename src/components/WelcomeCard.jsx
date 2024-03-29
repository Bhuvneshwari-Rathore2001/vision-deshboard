import RightArrowIcon from '../assets/RightArrowIcon';

const WelcomeCard = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(-88.74deg, rgba(14, 13, 57, 0) 25.82%, #1A1F37 51%, #1A1F37 51%), url('/assets/welcome-bg.svg')",
      }}
      className='drop-shadow-welcome px-8 py-9 h-72 !bg-no-repeat flex flex-col justify-between rounded-3xl mt-6 w-1/3 !bg-cover'
    >
      <div className='flex flex-col'>
        <div className='text-sm text-[#A0AEC0]'>Welcome back,</div>
        <div className='text-3xl font-bold text-[#FFFFFF]'>Mark Johnson</div>
        <div className='text-base text-[#A0AEC0] mt-5'>
          Glad to see you again! <br /> Ask me anything.
        </div>
      </div>
      <div className='flex gap-1 items-center'>
        <span>Tap to record</span>
        <RightArrowIcon />
      </div>
    </div>
  );
};

export default WelcomeCard;
