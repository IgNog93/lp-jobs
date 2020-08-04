import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollAnimation from 'react-animate-on-scroll';
import './Section-five.scss'
class SectionFive extends Component {
    render() {
        return (
            <section id='section-five'>
                <span id='we-hiring'></span>
                <ScrollAnimation animateIn="fadeInDown" duration='1' delay='200'>
                <div className='title-wrapper'>
                    <p className='title'>vem pra sami</p>
                        <p className='title-bold'>We’re hiring!</p>
                </div>
                </ScrollAnimation>
                <div className='text'>
                <ScrollAnimation animateIn="fadeIn" delay='200'>
                    <p>Estamos formando <span>um dos melhores times do Brasil</span> para democratizar o acesso à
                    <br/> Saúde e torná-la mais humana e simples para todos. Se você tem paixão pela vida e
                    <br/> pelo trabalho, gosta de atuar em ambientes em constantes mudanças e se importa
                    <br/> realmente com pessoas, você veio ao lugar certo.
                    </p>
                </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeInUp" duration='1' delay='200'>
                    <div className='btn-wrapper'>
                        <a href='https://oisami.gupy.io/'>
                            <button>Nossas vagas</button>
                        </a>
                    </div>
                </ScrollAnimation>
            </section>
        )
    }
}
export default SectionFive