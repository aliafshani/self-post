import { FaLocationDot, FaLocationCrosshairs, FaWeightScale } from "react-icons/fa6";
import { LuLuggage } from "react-icons/lu";


import React, { useState } from 'react'
import Select from '../Inputs/Select'
import TimeModal from "../TimeModal/TimeModal";
import { createPortal } from "react-dom";

export default function FilterBox() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='w-10/12 flex bg-white mt-20 pt-4 flex-wrap justify-center mx-auto h-max pb-20 rounded-md [box-shadow:rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px]'>
            <div className='w-4/12 mx-4' >
                <Select name={"مبدا"} firstOption={"آمریکا"} icon={<FaLocationDot />} />
            </div>
            <div className='w-4/12 mx-4' >
                <Select name={"مقصد"} firstOption={"اتخاب کنید"} icon={<FaLocationCrosshairs />} />
            </div>
            <div className='w-4/12 mx-4' >
                <Select name={"وزن محموله"} firstOption={"وزن را وارد کنید"} icon={<LuLuggage />} type={"input"} />
            </div>
            <div className='w-4/12 mx-4' >
                <Select name={"مبدا"} firstOption={"آمریکا"} icon={<FaWeightScale />} />
            </div>
            <div className='w-4/12 mx-4' >
                <button
                    onClick={() => setShowModal(true)}
                    type="button"
                    data-modal-target="timepicker-modal"
                    data-modal-toggle="timepicker-modal"
                    className="bg-purple-800 text-white rounded-lg flex px-8 py-2"
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
            <div className='w-4/12 mx-4' >
                <button
                    className="bg-purple-800 text-white rounded-lg flex px-8 py-2"
                >
                    جست و جو
                </button>
            </div>
        </div>

    )
}
