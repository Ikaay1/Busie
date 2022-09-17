import React from 'react';

const style = 'not-italic text-[16px]';

const Hero = () => {
    return (
        <>
            <div className='flex'>
                <div className='pl-[5.5rem] pr-[3rem] pt-[1.1rem] pb-[4rem] w-[50%]'>
                    <nav>
                        <div className='flex px-[1rem] justify-between'>
                            <div>
                                <img src='/assets/logo.png' alt='' />
                            </div>

                            <div className='flex uppercase'>
                                <p className={`mr-[1.9rem] ${style}`}>About</p>
                                <p className={`mr-[1.9rem] ${style}`}>
                                    Services
                                </p>
                                <p className={`mr-[1.9rem] ${style}`}>
                                    Sections
                                </p>
                                <p>
                                    <span
                                        className={`inline mr-[0.06rem] ${style}`}
                                    >
                                        More
                                    </span>
                                    <img
                                        className='inline'
                                        src='/assets/menu.png'
                                        alt=''
                                    />
                                </p>
                            </div>
                        </div>
                    </nav>

                    <div className='mt-[3rem] w-[70%]'>
                        <div className='font-bold text-[60px] non-italic leading-[71px]'>
                            International Intellectual Property &{' '}
                            <span className='text-[#2150FE]'>
                                Corporate Lawyers
                            </span>
                        </div>
                        <p className='mt-[1.1rem] non-italic text-[#5a5858] text-[16px] leading-[18px] '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sit feugiat eget parturient tincidunt. Elit
                            viverra varius justo enim pellentesque vestibulum.
                            Urna, adipiscing at eget morbi justo, ultrices
                            sapien ut .
                        </p>
                        <div className='flex flex-wrap mt-[1.5rem]'>
                            <div className='mr-[1rem] bg-[#2150fe] w-[160px] h-[54px] flex justify-center items-center rounded-[25px] text-white font-semibold '>
                                ABOUT US
                            </div>
                            <div className='border-[1px] border-[#2150fe] w-[154px] h-[54px] flex justify-center items-center rounded-[25px] text-[#2150fe] font-semibold '>
                                SIGN IN
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-[14rem]'>
                        <img
                            className='mr-[2.5rem]'
                            src='/assets/birdeye.png'
                            alt=''
                        />
                        <img
                            className='mr-[2.5rem]'
                            src='/assets/nesco.png'
                            alt=''
                        />
                        <img src='/assets/trc.png' alt='' />
                    </div>
                </div>

                {/* Hero partner */}
                <div className='w-[50%] relative'>
                    <img
                        className='h-[100%] w-[100%]'
                        src='/assets/flower.png'
                        alt=''
                    />
                    <div className='absolute top-[35px] left-[55px]'>
                        <img
                            className='mr-[.6rem] inline'
                            src='/assets/linkedin.png'
                            alt=''
                        />
                        <img
                            className='mr-[.6rem] inline'
                            src='/assets/facebook.png'
                            alt=''
                        />
                        <img
                            className='inline'
                            src='/assets/twitter.png'
                            alt=''
                        />
                    </div>
                    <div className='text-[#2150FE] bg-white rounded-[20px] flex justify-center items-center h-[37px] w-[145px] absolute top-[35px] right-[65px] text-[14px] '>
                        CONTACT US
                    </div>
                    <div className='absolute left-[75px] bottom-[75px]'>
                        <img
                            className='inline mr-[1rem]'
                            src='/assets/right.png'
                            alt=''
                        />
                        <img className='inline' src='/assets/left.png' alt='' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
