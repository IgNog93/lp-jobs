import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Section-three.scss'
import ScrollAnimation from 'react-animate-on-scroll';
class SectionThree extends Component {
    render() {
        return (
            <section id='section-three'>
                <div className='content'>
                <ScrollAnimation animateIn="fadeIn">
                <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
                    <div className='title-wrapper'>
                        <p className='title'>nosso jeito de trabalhar</p>
                        <p className='slogan'>Gente boa, gente amiga e
                        <br/> que vai junta à batalha. #TMJ</p>
                    </div>
                    <div className='text'>
                        <p>O time Sami tem uma missão muito clara: <span>cuidar das pessoas, começando pela saúde, para ajudá-
                            <br/>las a alcançarem seus objetivos de vida.</span> A gente cuida um do outro para cuidar bem do cliente.
                            <br/> Cuidar um do outro é deixar o ego de lado para construir junto. É agir para resolver em vez de
                            <br/> reclamar. É aceitar que erros fazem parte, são bons e nos ensinam muito.</p>
                    </div>
                    <div className='watermark-wrapper'>
                        <p className='watermark'>nosso jeito de trabalhar</p>
                    </div>
                </Parallax>
                </ScrollAnimation>
                </div>
            </section>
        )
    }
}
export default SectionThree