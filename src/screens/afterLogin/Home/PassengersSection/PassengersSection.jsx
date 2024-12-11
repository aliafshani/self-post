import React from 'react'
import AdCard from '../../../../component/AdCard/AdCard'

export default function PassengersSection() {
    return (
        <div className='flex w-full justify-center flex-row flex-wrap'>
            <h1 className='text-purple-800 font-extrabold mt-10 text-3xl'> لیست بار ها</h1>
            <div className='mt-10 flex flex-wrap justify-center flex-row w-full'>
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
                <AdCard name={"ابزارالات قهوه"} loc={"تهران به تورنتو"} weight={"3 K"} />
            </div>
        </div>
    )
}
