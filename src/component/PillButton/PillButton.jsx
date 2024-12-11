import React from 'react'

export default function PillButton({ onClick, children }) {
    return (
        <button onClick={() => onClick(true)} class="relative hover:bg-purple-800 [box-shadow:rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] w-fit h-fit px-5 py-2 text-md text-sm rounded-lg focus:bg-purple-800 bg-purple-800 text-white">
            <p>
                {children}
            </p>
        </button>
    )
}
