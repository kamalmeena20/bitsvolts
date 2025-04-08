/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../images/logo.jpg'

export default function NavBar() {
    return (
        <>
            <div className="flex justify-between items-center px-12 py-4 font-grotesk">


                <div className="flex items-center px-40 ">
                    <img className="w-40 bg-red-800" src={logo} alt="image loading..." />
                </div>


                <div className="flex items-center gap-12 pr-40">
                    <a href="#" className="font-space-grotesk text-xl">About us</a>
                    <a href="#" className="font-space-grotesk text-xl">Services</a>
                    <a href="#" className="font-space-grotesk text-xl">Use Cases</a>
                    <a href="#" className="font-space-grotesk text-xl">Pricing</a>
                    <a href="#" className="font-space-grotesk text-xl">Blog</a>

                    <a href="#" className="text-black text-lg py-3 px-5 rounded-xl border-2 border-black">
                        Request a quote
                    </a>
                </div>

            </div>

        </>
    )
}
