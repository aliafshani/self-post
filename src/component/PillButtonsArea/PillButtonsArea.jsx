import React from 'react'
import PillButton from '../PillButton/PillButton'

export default function PillButtonsArea({ setShowFilterBOx }) {
    return (
        <div className='bg-white [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px] flex flex-row justify-around items-center w-11/12 md:w-6/12 rounded-sm mx-auto mt-10 h-16'>
            <div className='w-7/12 mx-auto flex justify-between items-center '>
                <PillButton onClick={setShowFilterBOx}>مرسولات</PillButton>
                <PillButton onClick={setShowFilterBOx}>مسافرین</PillButton></div>
        </div>
    )
}
