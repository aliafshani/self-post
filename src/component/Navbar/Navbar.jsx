import React from 'react';
import Logo from "./../Logo/Logo"
import { Link } from 'react-router-dom';


export default function Navbar({ children }) {
    return (
        <div className='relative '>

            <div className=' md:w-full md:flex md:flex-row  md:h-16 md:justify-evenly md:bg-inherit md:relative w-16 h-dvh fixed flex flex-col top-0 bg-purple-800'>
                <div className='flex w-6/12 justify-start'>
                    <ul className=' md:flex md:flex-row md:align-middle md:pt-3 md:mt-0 md:justify-evenly flex flex-col mt-5'>
                        <li className='w-full md:w-2/12'>
                            <Logo className={"w-5/6 mx-auto md:mx-5"} />
                        </li>

                        <li className='pt-3 text-sm font-medium hover:text-purple-700 transition text-white my-2 mr-2 md:mr-2 md:text-black md:my-0 '>
                            <Link to={'/'}>Home</Link>
                        </li>

                        <li className='pt-3 text-sm font-medium hover:text-purple-700 transition text-white my-2 mr-2 md:mr-2 md:text-black md:my-0 '>
                            <Link to={'/blogs'}>Blogs</Link>
                        </li>

                        <li className='pt-3 text-sm font-medium hover:text-purple-700 transition text-white my-2 mr-2 md:mr-2 md:text-black md:my-0 '>
                            <Link to={'/about-us'}>AboutUs</Link>

                        </li>

                        <li className='pt-3 text-sm font-medium hover:text-purple-700 transition text-white my-2 mr-2 md:mr-2 md:text-black md:my-0 '>
                            <Link to={'/connect'}>Connect</Link>

                        </li>
                    </ul>
                </div>

                <div className='hidden  md:flex justify-end w-6/12'>
                    <button className='bg-purple-900 px-6 mx-7 h-2/3 mt-3 rounded-lg transition-all ease-in-out delay-200 hover:bg-purple-500 text-white'>login / signup</button>
                </div>
            </div>
            {/* body of site */}
            <div className='mr-16 md:mr-0'>{children}</div>
        </div>
    )
}
