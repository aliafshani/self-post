import React from 'react'
import SwiperSlider from '../../../../component/Swiper/SwiperSlider'

export default function LatestBlogs() {
    return (
        <div className='flex flex-col-reverse md:flex-row mt-20'>
            <div className='w-full md:w-5/12 flex justify-center mt-5'>
                <SwiperSlider />
            </div>
            <div className='w-full text-center md:w-7/12 md:text-justify leading-8 px-4'>
                <h3 className='text-purple-800 text-3xl font-bold'>
                    آخرین مقاله های منتشر شده
                </h3>
                <p className='text-white mt-5'>
                    کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>


        </div>
    )
}
