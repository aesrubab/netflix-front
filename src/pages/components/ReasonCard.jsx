import React from 'react';

const ReasonCard = ({ item }) => {
    return (
        <div className='w-[274px] h-80 min-h-[268px] text-white gap-4 rounded-[16px] relative bg-gradient-to-br from-[#d291e4] via-[#873b8b] to-[#2a0335] p-6 flex flex-col justify-between mb-6'>  {/* mb-6 ilə kartlar arasında məsafə əlavə edilir */}
            <div className='flex flex-col justify-center flex-grow'>
                <h3 className='font-bold text-[24px] mt-[20px] mb-[16px] text-white text-center'>{item.title}</h3>
                <p className='font-semibold text-[16px] text-gray-400 text-center'>{item.desc}</p>
            </div>
            <img className='w-[72px] h-[72px] absolute bottom-4 right-4' src={item.img} alt="" />
        </div>
    );
};

export default ReasonCard;
