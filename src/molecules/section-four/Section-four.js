import React, { Component } from 'react';
import './Section-four.scss'

class SectionFour extends Component {
    render() {
        return (
            <section id='section-four'>
                    <div className='title-wrapper'>
                        <p className='title'>o que realmente importa</p>
                        <p className='title-bold'>No que acreditamos?</p>
                    </div>
                    <div className='dots-wrapper'>
                        <ul className='dots'>
                            <li className='dot'>
                                <div>
                                    <figure></figure>
                                </div>
                                <p>Dados são mais importantes que opiniões</p>
                            </li>
                            <span></span>
                            <li className='dot'>
                                <div>
                                    <figure></figure>
                                </div>
                                <p>Pessoas são capazes de mudar de ideia, e isso é bom</p>
                            </li>
                            <span></span>
                            <li className='dot'>
                                <div>
                                    <figure></figure>
                                </div>
                                <p>Esforço e comprometimento são mais úteis que talento.</p>
                            </li>
                            <span></span>
                            <li className='dot'>
                                <div>
                                    <figure></figure>
                                </div>
                                <p>Ter muita vontade de aprender é inegociável.</p>
                            </li>
                            <span></span>
                            <li className='dot'>
                                <div>
                                    <figure></figure>
                                </div>
                                <p>Compartilhar conhecimento é fundamental.</p>
                            </li>
                        </ul>
                    </div>
                    <p className='bottom-text'>Nós acreditamos nas pessoas!</p>
            </section>
        )
    }
}

export default SectionFour