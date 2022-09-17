import React from 'react';

const Footer = () => {
    return (
        <div className='flex py-[5rem] justify-center'>
            <div className='w-[75%]'>
                <div className='flex justify-between w-[60%] mx-auto'>
                    <p className='font-semibold text-[21px] leading-[27px] text-[#5A5858] '>
                        About
                    </p>
                    <p className='font-semibold text-[21px] leading-[27px] text-[#5A5858] '>
                        Services
                    </p>
                    <p className='font-semibold text-[21px] leading-[27px] text-[#5A5858] '>
                        Sections
                    </p>
                    <p className='font-semibold text-[21px] leading-[27px] text-[#5A5858] '>
                        Testimonials
                    </p>
                </div>
                <div className='flex justify-between w-[35%] mx-auto mt-[1.5rem]'>
                    <p className='font-semibold text-[21px] leading-[27px] text-[#5A5858] '>
                        Contact
                    </p>
                    <p className='font-semibold text-[21px] leading-[27px] text-[#5A5858] '>
                        FAQ
                    </p>
                    <p className='font-semibold text-[21px] leading-[27px] text-[#5A5858] '>
                        Blog
                    </p>
                </div>
                <div className='flex justify-between w-[21%] mx-auto mt-[1.5rem]'>
                    <img src='/assets/linkedinblue.png' alt='' />
                    <img src='/assets/facebookblue.png' alt='' />
                    <img src='/assets/twitterblue.png' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Footer;
