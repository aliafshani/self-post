import { FaLocationDot, FaLocationCrosshairs, FaWeightScale } from "react-icons/fa6";
import { LuLuggage } from "react-icons/lu";


import React, { useState } from 'react'
import Select from '../Inputs/Select'
import TimeModal from "../TimeModal/TimeModal";
import { createPortal } from "react-dom";

export default function FilterBox() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='w-10/12 flex flex-col md:flex-row bg-white mt-0 flex-wrap justify-center mx-auto h-max py-20 rounded-sm [box-shadow:rgba(0,_0,_0,_0.1)_0px_10px_15px_-3px,_rgba(0,_0,_0,_0.05)_0px_4px_6px_-2px]'>
            <div className='w-11/12 md:w-4/12 mx-4' >
                <Select name={"مبدا"} firstOption={"آمریکا"} icon={<FaLocationDot />} />

            </div>
            <div className='w-11/12 md:w-4/12 mx-4' >
                <Select name={"مقصد"} firstOption={"اتخاب کنید"} icon={<FaLocationCrosshairs />} />
            </div>
            <div className='w-11/12 md:w-4/12 mx-4' >
                <Select name={"وزن محموله"} firstOption={"وزن را وارد کنید"} icon={<FaWeightScale />} type={"input"} />
            </div>
            <div className='w-11/12 md:w-4/12 mx-4' >
                <Select name={"نوع کالا"} firstOption={"سایر"} icon={<LuLuggage />} />
            </div>
            <div className='w-11/12 md:w-4/12 mx-4' >
                <button
                    onClick={() => setShowModal(true)}
                    type="button"
                    data-modal-target="timepicker-modal"
                    data-modal-toggle="timepicker-modal"
                    className="bg-purple-800 w-full md:w-auto text-white rounded-sm flex px-8 py-2"
                >
                    <svg
                        className="w4 h-4 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    انتخاب بازه سفر
                </button>

                {
                    showModal
                    && createPortal(<TimeModal onClose={() => setShowModal(false)} />, document.getElementById("modals-parent"))}
            </div>
            <div className='w-11/12 mx-auto md:w-auto md:mx-0 text-center' >
                <button
                    className="bg-purple-800 w-full mx-auto md:w-auto md:mx-0 mt-3 md:mt-0 text-white rounded-sm flex text-center py-2"
                >
                    جست و جو
                </button>
            </div>
        </div>

    )
}
