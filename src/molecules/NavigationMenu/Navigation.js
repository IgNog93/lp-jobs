import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.scss'

class NavMenu extends Component {

    componentDidMount(){
        setTimeout(() => {
            const load = document.querySelector('#root')

            load.classList.remove('loading')
        }, 500)
    }

    render() {
        return (
            <nav>
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
                    <button href='#wehire' >We’re hiring</button>
                    </Link>
                </li>
                </ul>
            </nav>
        )
    }
}

export default NavMenu