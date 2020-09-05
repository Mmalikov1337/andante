import React from 'react'
import CloseSVG from './../../../imgs/close-menu.svg'
import CallSVG from './../../../imgs/call-burger.svg'
import call from './../../../imgs/call.png'

import './Menu.scss'
export default function BurgerMenu({ close, menuElements }) {
    return (
        <div className='menu'>
            <div className="container">
                <div className="menu__top">
                    <div className="menu__top__phone">
                        <img src={CallSVG} alt="callSVG" />
                        <p>
                            Телефон для связи:
                            <span>
                                8 (3812) 58-05-44
                            </span>
                        </p>
                    </div>
                    <div className="menu__top__close" onClick={() => { close() }}>
                        <img src={CloseSVG} alt="CloseSVG" />
                    </div>
                </div>
                <div className="menu__links">
                    <ul className="menu__links__list">
                        {
                            menuElements.map((item, index) => (
                                <li className='menu__links__list__link' key = {index} onClick = {close}>
                                    <a className="menu__links__list__link_item" rel="stylesheet" href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className="menu__button-container">
                    <a href="#backcall">
                        <button className="menu__button-container__button btn" onClick = {close}>
                        <img src={call} alt="call" />
                        <span>
                            Заказать обратный звонок
                    </span>
                    </button>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
