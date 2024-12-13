import React from 'react'
import { FaLocationDot, FaWeightScale } from 'react-icons/fa6'

export default function AdCard({ name, loc, weight }) {
    return (
        <div className='w-10/12 md:w-3/12 border-2 mx-auto md:mx-2 flex bg-white cursor-pointer hover:[box-shadow:rgba(0,_0,_0,_0.25)_0px_14px_28px,_rgba(0,_0,_0,_0.22)_0px_10px_10px] delay-200 ease-in-out transition-all rounded-sm mt-10 m-2 '>
            <img className='w-6/12 rounded-sm' src="./public/mahanAir.png" alt="" />
            <div className='flex flex-col pr-3 pt-5'>
                <p className='text-black text-lg font-bold py-1'>{name}</p>
                <p className='text-gray-500 py-1 flex'> <FaLocationDot className='mt-1 ml-3' /> {loc}</p>
                <p className='text-gray-500 py-1 flex'>  <FaWeightScale className='mt-1 ml-3' />{weight}</p>
            </div>

        </div>
    )
}
