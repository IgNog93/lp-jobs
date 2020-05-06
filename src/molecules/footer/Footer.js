import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <section id='footer'>
                <div className='logo'>
                    <figure></figure>
                </div>
                <div className='about-us'>
                    <p className='title'>Sobre a empresa</p>
                    <p className='text'>Uma startup formada de pessoas com o
                    <br/> sonho grande de tornar a Saúde descomplicada,
                    <br/> humana e eficaz.</p>
                </div>
                <div className='social-media'>
                    <p className='title'>Redes sociais</p>
                    <ScrollAnimation animateIn="slideInRight" duration='.5'>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/oisami.saude/'>
                                <figure></figure>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/company/oisamisaude/'>
                                <figure></figure>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/oisami.saude/'>
                                <figure></figure>
                            </a>
                        </li>
                    </ul>
                    </ScrollAnimation>
                </div>
            </section>
        )
    }
}

export default Footer