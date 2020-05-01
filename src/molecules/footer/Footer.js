import React, { Component } from 'react';
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
                    <ul>
                        <li>
                            <figure></figure>
                        </li>
                        <li>
                            <figure></figure>
                        </li>
                        <li>
                            <figure></figure>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Footer