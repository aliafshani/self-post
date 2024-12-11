import React from 'react'

export default function AboutUs() {
    return (
        <div>
            <div className="flex w-10/12 mx-auto rounded-2xl flex-col py-10 mt-20 [box-shadow:rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] px-20 bg-white">
                <div className="flex">
                    <div className="w-7/12">
                        <p className='text-black font-extrabold text-3xl pb-5'>درباره ما</p>
                        <p className=' text-gray-500 text-justify leading-8'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                        <button className='px-10 py-2 rounded-xl mt-5 text-white bg-purple-600'>بیشتر ...</button>
                    </div>
                    <div className="w-5/12">
                        <img className='w-9/12 mx-auto rounded-lg' src="./public/airport-man.png" alt="" /></div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    <div className="w-7/12"></div>
                    <div className="w-5/12"></div>
                </div>
            </div>
        </div>
    )
}
