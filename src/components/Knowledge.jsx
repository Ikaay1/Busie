import React from 'react';

const data = ['/assets/person1.png', '/assets/person 2.png'];

const display = (imageUrl) => {
    return (
        <div className='h-[100%] w-[220px] mr-[1.7rem]'>
            <img src={imageUrl} alt='' />
            <p className='text-[15px] leading-[16.5px] font-medium mt-[1.7rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                amet praesent tellus nunc.
            </p>
            <img className='mt-[2.5rem]' src='/assets/rightblue.png' alt='' />
        </div>
    );
};

const Knowledge = () => {
    return (
        <div className='py-[3.5rem] px-[6.5rem] flex justify-between knowledge'>
            <div>
                <div>
                    <img
                        className='inline mr-[.4rem]'
                        src='/assets/line.png'
                        alt=''
                    />
                    <span className='not-italic font-bold text-[36px] text-[#2150FE] '>
                        Knowledge
                    </span>
                </div>
                <p className='non-italic w-[300px] font-semibold text-[36px] leading-[43px] mt-[.5rem] '>
                    Patent Attorney in India
                </p>
                <div className='mr-[1rem] mt-[1.7rem] bg-[#2150fe] w-[160px] h-[54px] flex justify-center items-center rounded-[25px] text-white font-semibold '>
                    PARENTS
                </div>
            </div>
            <div className='flex'>
                {data.map((detail) => (
                    <div key={detail}>{display(detail)}</div>
                ))}
                <div className='h-[100%] w-[220px] mr-[2rem]'>
                    <img src='/assets/person 3.png' alt='' />
                    <p className='text-[15px] leading-[16.5px] font-medium mt-[1.7rem]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna amet praesent tellus nunc.
                    </p>
                    <img
                        className='mt-[2.5rem]'
                        src='/assets/rightblue.png'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default Knowledge;
