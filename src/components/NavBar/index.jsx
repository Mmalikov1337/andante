import React from 'react'

import ANDA_logo from './../../imgs/ADNA_logo.png'
import call from './../../imgs/call.png'
import burgerSVG from './../../imgs/burger-btn.svg'

import './NavBar.scss'

export default function NavBar() {
    return (
        <nav className='navbar'>

            <div className="navbar__logo-container">
                <img src={ANDA_logo} alt="logo" />
            </div>
            <ul className="navbar__links">
                <li className='navbar__links__link'>О нас</li>
                <li className='navbar__links__link'>Ассортимент</li>
                <li className='navbar__links__link'>Отзывы</li>
                <li className='navbar__links__link'>Доставка</li>
                <li className='navbar__links__link'>Контакты</li>
            </ul>

            <div className="navbar__button-container">
                <div className="navbar__button-container__burger">
                    <img src={burgerSVG} alt="burgerSVG" />
                </div>
                <button className="navbar__button-container__button btn">
                    <img src={call} alt="" />
                    <span>
                        Заказать обратный звонок
                    </span>
                </button>
                <p className="navbar__button-container__phone">
                    8 (800) 800-80-80
                </p>
            </div>


        </nav>
    )
}
