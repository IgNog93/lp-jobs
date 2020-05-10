import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Footer.scss'
class Footer extends Component {
    render() {
        return (
            <section id='footer'>
            <ScrollAnimation animateIn="fadeIn" duration='1'>
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
                    <ul>
                        <li>
                            <a rel='noopener noreferrer' target="_blank" href='https://www.facebook.com/oisami.saude/'>
                                <figure></figure>
                            </a>
                        </li>
                        <li>
                            <a rel='noopener noreferrer' target="_blank" href='https://www.linkedin.com/company/oisamisaude/'>
                                <figure></figure>
                            </a>
                        </li>
                        <li>
                            <a rel='noopener noreferrer' target="_blank" href='https://www.instagram.com/oisami.saude/'>
                                <figure></figure>
                            </a>
                        </li>
                    </ul>
                </div>
                </ScrollAnimation>
            </section>
        )
    }
}
export default Footer