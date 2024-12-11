import { useState } from "react";


import Datepicker from "react-tailwindcss-datepicker";

const NEXT_MONTH = new Date();

NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);
export default function TimeModal({ onClose }) {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: NEXT_MONTH
    });


    return (
        <div className={"model-parent active"}>
            <div className="w-full md:w-5/12 mx-auto h-52 pt-10 rounded-lg bg-white">
                <div className="w-full  md:w-6/12 mx-auto">
                    <h1 className="text-xl text-purple-800 font-bold mb-5">لطفا بازه سفر خود را انتخاب کنید !</h1>
                    <Datepicker
                        primaryColor={"purple"}
                        value={value}
                        onChange={newValue => setValue(newValue)}
                        showShortcuts={true}

                    />
                    <button onClick={() => onClose()} className="px-4 py-2 rounded-lg mt-5 bg-purple-800 text-white ">Submit</button>

                </div>
            </div>
        </div>
    );
}

