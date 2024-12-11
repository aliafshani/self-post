import React from 'react'

export default function Select({ name = "", firstOption, icon, type = "" }) {
    return (
        <>
            <label for="small" class="block mb-2 text-sm font-medium  text-gray-500 ">
                <div className='flex'>
                    {icon && <p className='p-1'>{icon}</p>}
                    <p >{name}</p>
                </div>
            </label>
            {
                type
                    ? (
                        <input placeholder={firstOption} class="block w-full p-2 mb-6 text-sm rounded-lg bg-gray-300 focus:outline-none text-gray-600 " type="number" />
                    )
                    : (
                        <select id="small" class="block w-full p-2 mb-6 text-sm rounded-lg bg-gray-300 focus:outline-none text-gray-600 ">
                            <option className='rounded-xl' selected>{firstOption}</option>
                            <option className='rounded-xl' value="US">United States</option>
                        </select>
                    )
            }
        </>

    )
}
