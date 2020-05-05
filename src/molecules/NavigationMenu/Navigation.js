import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollAnimation from '../../services/Animations'
import './Navigation.scss'

class NavMenu extends Component {

    componentDidMount(){
        setTimeout(() => {
            const loaded = document.querySelector('#loading')
            const scroll = document.querySelector('body')

            loaded.classList.add('loaded')
            scroll.classList.add('scroll')
            ScrollAnimation.navMenu()
        }, 2000)
    }

    render() {
        return (
            <section id='nav'>
                <nav>
                    <div className='loading-wrapper'></div>
                    <div id='loading' className=''>
                        <div className='loader-img'></div>
                    </div>
                    <div className='bkgd'>
                        <figure className='background'></figure>
                        <figure className='background-people'></figure>
                    </div>
                    <div className='logo-wrapper'>
                        <figure></figure>
                    </div>
                    <ul>
                    <Link to='#section-two'>
                        <li href='#wehire'>Quem somos</li>
                    </Link>
                    <Link to='#section-three'>
                        <li href='#wehire'>Nosso jeito de trabalhar</li>
                    </Link>
                    <li>
                        <Link to='#section-five'>
                        <button className='hiring-btn' href='#wehire' >We’re hiring</button>
                        </Link>
                    </li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default NavMenu