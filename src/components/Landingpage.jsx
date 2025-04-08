/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import landingPageImage from '../images/landingimage.jpg'

export default function Landingpage() {
    return (
        <>
            <div className="flex  justify-around py-16 gap-10 font-grotesk md:flex-row flex-col">

                <div className="flex flex-col justify-center gap-10 ml-[130px]">
                    <h1 className="text-7xl w-[640px] leading-[80px] text-left">
                        Navigating the digital landspace for success
                    </h1>

                    <p className="text-2xl text-black  w-[600px] text-left" >
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>

                    <button className="bg-black text-lg text-white py-4 px-9 rounded-xl w-fit">
                        Book a Consultation
                    </button>
                </div>

                <div className='w-full'>
                    <img
                        src={landingPageImage}
                        alt="Landing Page Image"
                        className="w-[700px]"
                    />
                </div>


            </div>
        </>
    )
}
