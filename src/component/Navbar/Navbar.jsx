import React from 'react';
import Logo from "./../Logo/Logo"
import { Link, NavLink } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineTextSnippet } from "react-icons/md";
import { MdOutlineHeadphones } from "react-icons/md";


export default function Navbar({ children }) {
    return (
        <div className='relative '>

            <div
                className='navbar md:w-full md:flex md:flex-row md:h-16 md:justify-evenly md:bg-inherit md:relative w-2/12 h-dvh fixed flex flex-col top-0 bg-purple-800'>
                <div className='flex w-8/12 justify-start'>
                    <ul className=' md:flex md:flex-row md:align-middle md:pt-0 md:mt-0 md:justify-evenly flex flex-col mt-5'>
                        <li className='pt-5 flex justify-start align-middle items-center hover:text-purple-700 transition md:w-2/12 w-10/12 text-white my-2 mr-2 md:mr-2 md:my-0 '>
                            <p className='text-3xl  inline-block md:hidden  my-automx-2 mx-2'><GrAppsRounded /></p>
                            <Logo className={"w-10/12 md:w-full mx-auto mb-6 md:mx-5 "} />
                        </li>

                        <li className='pt-5 flex justify-start align-middle  hover:text-purple-700 transition text-white my-2 mr-2 md:mr-2 md:my-0 '>
                            <p className='text-3xl inline-block md:hidden  my-automx-2 mx-2'><IoHomeOutline /></p>
                            <Link className={"mx-2"} to={'/'}>خانه</Link>
                        </li>
                        <li className='pt-5 flex justify-start align-middle hover:text-purple-700 transition text-white my-2 mr-2 md:mr-2 md:my-0 '>
                            <p className='text-3xl  inline-block md:hidden my-auto mx-2'><FaRegHandshake /></p>
                            <Link className={"mx-2"} to={'/connect'}>خدمات</Link>

                        </li>

                        <li className='pt-5 flex justify-start align-middle hover:text-purple-700 transition text-white my-2 mr-2 md:mr-2 md:my-0 '>
                            <p className='text-3xl inline-block md:hidden  my-auto mx-2'><MdOutlineTextSnippet /></p>
                            <Link className={"mx-2"} to={'/blogs'}>مقالات</Link>
                        </li>

                        <li className='pt-5 flex justify-start align-middle hover:text-purple-700 transiion text-white my-2 mr-2 md:mr-2 md:my-0 '>
                            <p className='text-3xl inline-block md:hidden  my-auto mx-2'><MdOutlineHeadphones /></p>
                            <Link className={"mx-2"} to={'/about-us'}>درباره ما</Link>

                        </li>

                    </ul>
                </div>

                <div className='hidden mx-7 md:flex justify-end w-6/12'>
                    <NavLink className='pt-2 mx-2 h-2/3 mt-3 border-2 px-3 rounded-sm text-white align-middle'>
                        داشبورد
                    </NavLink>
                    <NavLink to={"/login"} className='pt-3 px-4 mx-2 h-2/3 mt-3 w-12  text-white flex'>
                        <FiLogIn className='font-xl w-full' />
                    </NavLink>
                </div>
            </div>
            {/* body of site */}
            <div className='w-10/12 md:w-full mr-16 md:mr-0'>{children}</div>
        </div>
    )
}
