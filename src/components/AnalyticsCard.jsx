import classNames from 'classnames';

const AnalyticsCard = ({ analyticsData, icon }) => {
  return (
    <div className='flex justify-between p-4 bg-analyticsCardGradient rounded-3xl'>
      <div className='flex flex-col gap-1'>
        <div className='text-[#A0AEC0] text-xs font-normal'>
          {analyticsData.name}
        </div>
        <div className='flex gap-1 items-center'>
          <div className='text-lg font-bold '>{analyticsData.value}</div>
          <div
            className={classNames('text-sm font-bold ', {
              'text-[#01B574]': analyticsData.percent.slice(0, 1) === '+',
              'text-[#E31A1A]': analyticsData.percent.slice(0, 1) === '-',
            })}
          >
            {analyticsData.percent}
          </div>
        </div>
      </div>
      <div className='p-3 rounded-xl bg-[#0075FF]'>{icon}</div>
    </div>
  );
};

export default AnalyticsCard;
