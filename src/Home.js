import React from 'react';
import NavMenu from '../src/molecules/NavigationMenu/Navigation'
import SectionOne from '../src/molecules/section-one/Section-one'
import SectionTwo from '../src/molecules/section-two/Section-two'
import SectionThree from '../src/molecules/section-three/Section-three'
import SectionFour from '../src/molecules/section-four/Section-four'
import SectionFive from '../src/molecules/section-five/Section-five'
import SectionSix from '../src/molecules/section-six/Section-six'
import SectionSeven from '../src/molecules/section-seven/Section-seven'
import Footer from '../src/molecules/footer/Footer'

import './pages/home/Home.scss'

function Home() {
  return (
    <>
    <NavMenu />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <Footer />
    </>
  )
}

export default Home;
