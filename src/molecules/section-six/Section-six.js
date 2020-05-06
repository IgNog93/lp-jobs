import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Section-six.scss'
class SectionSix extends Component {
    render() {
        return (
            <section id='section-six'>
                <div className='left-content'>
                <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" duration='1' delay='500'>
                    <div className='text-wrapper'>
                        <p className='title'>Somos uma startup</p>
                        <p className='text'>Crie uma história e
                        <br/> uma empresa da qual
                        <br/> possa se orgulhar!
                        </p>
                    </div>
                </ScrollAnimation>
                </div>
                <div className='right-content'>
                <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" duration='1' delay='500'>
                    <p className='text'>Estamos construindo do zero com tecnologias que estão
                    <br/> mudando o mundo!</p>
                    <p className='text'>Menos regras e mais mão na massa. Todo mundo fala e
                    <br/> a gente constrói junto.</p>
                    <p className='text'>Trabalhamos perto um do outro, dos fundadores aos
                    <br/> estagiários.</p>
                    <p className='text'>Experimentamos e aprendemos com tentativas, erros e
                    <br/> ajustes rápidos.</p>
                </ScrollAnimation>
                </div>
            </section>
        )
    }
}
export default SectionSix