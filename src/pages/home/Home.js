import React from 'react';
import NavMenu from '../../molecules/NavigationMenu/Navigation'
import SectionOne from '../../molecules/section-one/Section-one'
import SectionTwo from '../../molecules/section-two/Section-two'
import SectionThree from '../../molecules/section-three/Section-three'
import SectionFour from '../../molecules/section-four/Section-four'
import SectionFive from '../../molecules/section-five/Section-five'
import SectionSix from '../../molecules/section-six/Section-six'
import SectionSeven from '../../molecules/section-seven/Section-seven'
import Footer from '../../molecules/footer/Footer'
import './Home.scss'
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
