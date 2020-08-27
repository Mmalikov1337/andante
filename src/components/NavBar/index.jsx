import React from 'react'

import ANDA_logo from './../../imgs/ADNA_logo.png'
import call from './../../imgs/call.png'
import burgerSVG from './../../imgs/burger-btn.svg'

import './NavBar.scss'

const MenuItem = (props) => {
    console.log('menu item')
    return (
        <li className='navbar__links__link'>
            <a className="navbar__links__link_item" rel="stylesheet" href={props.href}> 
                {props.name}
            </a>
      </li>
    )
  }
  
  const Menu = (props) => {
    console.log('menu')
    return (
        <ul className="navbar__links">
          {props.items.map((item, index) => 
            <MenuItem name={item.name} href={item.href} key={index} />
          )}
        </ul>
    )
  }
  
  const MenuItems = [
    {
      name: 'О нас',
      href: '#aboutUs'
    },
    {
      name: 'Ассортимент',
      href: '#assortment'
    },
    {
      name: 'Отзывы',
      href: '#recall'
    },
    {
      name: 'Доставка',
      href: '#delivery'
    },
    {
      name: 'Контакты',
      href: '#footer'
    },
  ]


export default function NavBar() {
    return (
        <nav className='navbar'>

            <div className="navbar__logo-container">
                <img src={ANDA_logo} alt="logo" />
            </div>
            <Menu items={MenuItems} />
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
