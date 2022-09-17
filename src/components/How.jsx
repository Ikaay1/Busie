import React from 'react';
import {data} from '../data';

const display = (num, heading, para, pos, width) => {
    return (
        <div className={`mr-[4rem] ${width}`}>
            <p
                className={
                    `rounded-[50%] mb-[1.3rem] font-medium text-[22px] text-[#2150FE] w-[40px] h-[40px] flex justify-center items-center ` +
                    pos +
                    ` border-[#2150FE] `
                }
            >
                0{num}
            </p>
            <p className='text-[20px] mb-[1.1rem] leading-[24px] font-semibold '>
                {heading}
            </p>
            <p className='font-medium text-[15px] leading-[16.5px] w-[195px] '>
                {para}
            </p>
        </div>
    );
};

const How = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div>
                    <div>
                        <img
                            className='inline mr-[.4rem]'
                            src='/assets/line.png'
                            alt=''
                        />
                        <span className='not-italic font-bold text-[36px] text-[#2150FE] '>
                            How we do it?
                        </span>
                    </div>
                    <p className='non-italic w-[300px] font-semibold text-[36px] leading-[43px] mt-[.5rem] '>
                        Patent business Lawyer in Asia
                    </p>
                </div>
                <img src='/assets/globe.png' alt='' />
            </div>
            <div className='flex pl-[6.2rem] mt-[1.7rem]'>
                {data.map((detail) => (
                    <div key={detail.num}>
                        {display(
                            detail.num,
                            detail.heading,
                            detail.para,
                            detail.pos,
                            detail.width,
                        )}
                    </div>
                ))}
            </div>
            <div className='ml-[6.2rem] mt-[1.1rem] h-[39px] w-[150px] flex justify-center items-center rounded-[20px] text-[14px] font-semibold bg-[#2150FE] text-[#FFFFFF] '>
                READ MORE
            </div>
        </div>
    );
};

export default How;
