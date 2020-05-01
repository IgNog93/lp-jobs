import React, { Component } from 'react';
import './Section-five.scss'

class SectionFive extends Component {
    render() {
        return (
            <section id='section-five'>
                <div className='title-wrapper'>
                    <p className='title'>vem pra sami</p>
                    <p className='title-bold'>We’re hiring!</p>
                </div>
                <div className='text'>
                    <p>Estamos formando <span>um dos melhores times do Brasil</span> para democratizar o acesso à
                    <br/> Saúde e torná-la mais humana e simples para todos. Se você tem paixão pela vida e
                    <br/> pelo trabalho, gosta de atuar em ambientes em constantes mudanças e se importa
                    <br/> realmente com pessoas, você veio ao lugar certo.
                    </p>
                </div>
                <div className='btn-wrapper'>
                    <button>Nossas vagas</button>
                </div>
            </section>
        )
    }
}

export default SectionFive