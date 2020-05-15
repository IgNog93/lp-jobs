import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Section-two.scss'
class SectionTwo extends Component {
    render() {
        return (
            <section id='section-two'>
                <div className='left-content'>
                <ScrollAnimation animateIn="slideInLeft" duration='1'>
                    <p className='title'>Somos a SAMI</p>
                    <p className='text'>Uma startup formada de
                    <br/>pessoas com o sonho grande de
                    <br/>tornar a Saúde descomplicada,
                    <br/> humana e eficaz.</p>
                </ScrollAnimation>
                </div>
                <div className='right-content'>
                <ScrollAnimation animateIn="slideInRight" duration='1'>
                    <p className='text'>Estamos reunindo as melhores práticas da Medicina,
                    repensando conceitos antigos e investindo em bastante
                    tecnologia. E com muita, mas muita humildade e humanidade.
                    <span id='our-way'></span>
                    &nbsp;Vamos oferecer um serviço de ponta e uma experiência
                    marcante com menor investimento para que mais pessoas
                    tenham acesso à Saúde.</p>
                </ScrollAnimation>
                </div>
            </section>
        )
    }
}
export default SectionTwo