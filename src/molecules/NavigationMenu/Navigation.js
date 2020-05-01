import React, { Component } from 'react';
import './Navigation.scss'

class NavMenu extends Component {
    render() {
        return (
            <nav>
                <div className='logo-wrapper'>
                    <figure></figure>
                </div>
                <ul>
                <li>Quem somos</li>
                <li>Nosso jeito de trabalhar</li>
                <li>
                    <button href='#wehire' >We’re hiring</button>
                </li>
                </ul>

            </nav>
        )
    }
}

export default NavMenu