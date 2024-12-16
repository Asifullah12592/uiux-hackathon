import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white w-[1312px] h-[480px] border border-white  m-auto  '>
            <div className='flex justify-between   m-20'>
                <div className=' m-8 mt-8'>
                    <h1 className='text-[44px] font-bold text-primary500'>MORENT</h1>
                    <p className='w-[292px] mt-2 text-[14px]'>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                {/* right  About */}
                <div className='w-[500px] flex justify-between items-center'>
                    <div className=' m-5 '>
                        <div className='w-[162px]'>
                            <p><strong>About</strong></p>
                        </div>
                        <div className='w-[152px]'>
                            <p className='text-[12px] mt-5'>How it works</p>
                            <p className='text-[12px] mt-4'>Featured</p>
                            <p className='text-[12px] mt-4'>Partnership</p>
                            <p className='text-[12px] mt-4'>Bussiness Relation</p>
                        </div>

                    </div>

                    <div className=' m-5 '>
                        <div className='w-[162px]'>
                            <p><strong>Community</strong></p>
                        </div>
                        <div className='w-[152px]'>
                            <p className='text-[12px] mt-5'>Events</p>
                            <p className='text-[12px] mt-4'>Blog</p>
                            <p className='text-[12px] mt-4'>Podcast</p>
                            <p className='text-[12px] mt-4'>Invite a friend</p>
                        </div>

                    </div>

                    <div className='m-5 '>
                        <div className='w-[162px]'>
                            <p><strong>Socials</strong></p>
                        </div>
                        <div className='w-[152px]'>
                            <p className='text-[12px] mt-5'>Discord</p>
                            <p className='text-[12px] mt-4'>Instagram</p>
                            <p className='text-[12px] mt-4'>Twitter</p>
                            <p className='text-[12px] mt-4'>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center m-12  border-t-2'>
                <div><h1>©2024 MORENT. All rights reserved</h1></div>
                <div className='flex justify-between items-center mt-12 p-5'>
                    <p className='text-[14px] m-5'>Privacy & Policy</p>
                    <p className='text-[14px] m-5'>Terms & Condition</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
