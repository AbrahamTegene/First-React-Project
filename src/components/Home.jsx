/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { Carousel } from 'flowbite-react';
import React from 'react'
import banner1 from '../assets/banner01.png';
 
const Home = () => {
    return(
        <div className='bg-neutralSilver' id='home'> 
          <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                 {/*Image 1 */}
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                   <div>
                       <img src={banner1} alt="" className='-'/>
                   </div>

                   {/*HERE TEXT*/}
                   <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey
                     md:w-3/4 leading-snug'>Leassons and Insight
                         <span className='text-brandPrimary leading-snug'> from 8 year</span></h1>
                         <p className='text-neutralGrey text-base mb-8'>Where to grow your bussiness as a photographer:site or social media ?</p>
                         <button className="btn-primary">Register</button>
                   </div>
                </div> 

                {/*Image 2 */}
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                   <div>
                       <img src={banner1} alt="" className='-'/>
                   </div>

                   {/*HERE TEXT*/}
                   <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey
                     md:w-3/4 leading-snug'>Leassons and Insight
                         <span className='text-brandPrimary leading-snug'> from 8 year</span></h1>
                         <p className='text-neutralGrey text-base mb-8'>Where to grow your bussiness as a photographer:site or social media ?</p>
                         <button className="btn-primary">Register</button>
                   </div>
                </div> 

                {/*Image 3 */}
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                   <div>
                       <img src={banner1} alt="" className='-'/>
                   </div>

                   {/*HERE TEXT*/}
                   <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey
                     md:w-3/4 leading-snug'>Leassons and Insight
                         <span className='text-brandPrimary leading-snug'> from 8 year</span></h1>
                         <p className='text-neutralGrey text-base mb-8'>Where to grow your bussiness as a photographer:site or social media ?</p>
                         <button className="btn-primary">Register</button>
                   </div>
                </div> 
                

                
            </Carousel>
          </div>
        </div>
    )
};

export default Home;
