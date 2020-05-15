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
                    <p className='text'>Uma startup formada de pessoas com o sonho grande de tornar a Saúde descomplicada, humana e eficaz.</p>
                </ScrollAnimation>
                </div>
                <div className='right-content'>
                <ScrollAnimation animateIn="slideInRight" duration='1'>
                    <p className='text'>Estamos reunindo as melhores práticas da Medicina,
                    <br/> repensando conceitos ultrapassados e investindo em bastante
                    <br/> tecnologia. E com muita, mas muita humildade e humanidade,
                    <span id='our-way'></span>
                    <br/> vamos oferecer um serviço de ponta e uma experiência
                    <br/> marcante com menor investimento para que mais pessoas
                    <br/> tenham acesso à Saúde.</p>
                </ScrollAnimation>
                </div>
            </section>
        )
    }
}
export default SectionTwo