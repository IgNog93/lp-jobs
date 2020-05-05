import React, { Component } from 'react';
import './Section-one.scss'

class SectionOne extends Component {
    render() {
        return (
            <section id='section-one'>
                <div className='img-wrapper'>
                    <figure></figure>
                </div>
                <div className='content'>
                    <p className='title'>A Sami escutou você!</p>
                    <p className='text'>Você espera há muito tempo alguém que esteja junto,
                    <br/> alguém que ouça você ao cuidar da sua saúde.
                    <span id='anchor-1'></span>
                    <br/> Você espera qualidade que possa pagar para se
                    <br/> manter saudável. Você quer orientação para decidir o
                    <br/> que é melhor, e não que decidam por você.</p>
                </div>
            </section>
        )
    }
}

export default SectionOne