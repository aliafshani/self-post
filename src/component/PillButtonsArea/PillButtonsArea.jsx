import React from 'react'
import PillButton from '../PillButton/PillButton'

export default function PillButtonsArea({ setShowFilterBOx }) {
    return (
        <div className='bg-white [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px] flex flex-row justify-around items-center w-10/12 rounded-full mx-auto mt-10 h-16'>
            <PillButton onClick={setShowFilterBOx}>transforms</PillButton>
            <PillButton onClick={setShowFilterBOx}>transforms</PillButton>
            <PillButton onClick={setShowFilterBOx}>transforms</PillButton>
        </div>
    )
}
