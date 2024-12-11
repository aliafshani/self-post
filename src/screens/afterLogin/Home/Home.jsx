import React, { useState } from 'react'
import Navbar from '../../../component/Navbar/Navbar'
import NavbarImg from '../../../component/NavbarImg/NavbarImg'
import PillButtonsArea from '../../../component/PillButtonsArea/PillButtonsArea'
import FilterBox from '../../../component/FilterBox/FilterBox'
import PassengersSection from './PassengersSection/PassengersSection'
import AboutUs from './AboutsUs/AboutUs'

export default function Home() {
    const [showFilterBox, setShowFilterBOx] = useState(false)
    return (
        <Navbar >
            <NavbarImg SRC={"./public/homeImg.png"} />
            <PillButtonsArea setShowFilterBOx={setShowFilterBOx} />
            {showFilterBox && <FilterBox setShowFilterBOx={setShowFilterBOx} />}
            <PassengersSection />
            <AboutUs />
        </Navbar>
    )
}
