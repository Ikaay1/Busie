import React from 'react';

const Sector = () => {
    return (
        <div className='flex relative'>
            <div className='w-[50%]'>
                <img
                    className='w-[100%] h-[100%] '
                    src='/assets/scientist.png'
                    alt=''
                />
            </div>
            <div className='w-[50%] px-[6.5rem] pt-[9rem] pb-[11rem] '>
                <div>
                    <div>
                        <img
                            className='inline mr-[.4rem]'
                            src='/assets/line.png'
                            alt=''
                        />
                        <span className='not-italic font-bold text-[36px] text-[#2150FE] '>
                            Sectors
                        </span>
                    </div>
                    <p className='non-italic font-semibold text-[36px] leading-[43px] mt-[.5rem] '>
                        Chemicals, Materials and Resources
                    </p>
                    <div className='w-[80%] mx-auto mt-[1.2rem] '>
                        <div className='text-[16px] text-[#4A4A4A] '>
                            <p className='leading-[17px]'>
                                Intellectual Prperty is generated when a new
                                material is developed by chemical engineers or
                                chemists. The old manufacturing process is
                                advanced and optimized or a new method is
                                discovered for an existing substance.
                            </p>
                            <p className='mt-[.6rem] leading-[17px]'>
                                Throughout the supply-chain, we work with the
                                investors.
                            </p>
                        </div>
                        <div className='mt-[1.1rem] h-[39px] w-[150px] flex justify-center items-center rounded-[20px] text-[14px] font-semibold bg-[#2150FE] text-[#FFFFFF] '>
                            READ MORE
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-[45px] left-[24%] flex'>
                <img src='/assets/city.png' alt='' />
                <div className=' bg-[#2150FE] w-[250px] flex justify-center items-center'>
                    <p className='font-semibold text-[15px] leading-[17.5px] text-white w-[70%]'>
                        Manufacturing, Engineering & Industrial Design
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sector;
