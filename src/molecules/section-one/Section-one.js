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
                <p class="title">A Sami escutou você!</p>
                <p class="text">Você sempre quis ter alguém que te ouça de verdade
                na hora de cuidar da sua saúde. Você sempre quis qualidade
                que possa pagar para se manter saudável.</p>
                <p class="text">Você quer orientação para decidir o que é melhor, e não que decidam por você.
                A Sami sabe que cuidar de pessoas vai muito além da medicina.
                É mais do que dar o remédio, é entender o que machuca. É ouvir antes de falar.</p>
                </div>
            </section>
        )
    }
}
export default SectionOne