import React from 'react'
import './Footer.scss'
const MenuItem = (props) => {
    // console.log('menu item')
    return (
        <li className='footer__menu__list__element'>
            <a className="footer__menu__list__element_item" rel="stylesheet" href={props.href}>
                {props.name}
            </a>
        </li>
    )
}

const Menu = (props) => {
    // console.log('menu')
    return (
        <ul className="footer__menu__list">
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

export default function Footer() {
    return (
        <footer className='footer' id="footer">
            {/* <div className="container"> */}
            {/* <div className="wrap"> */}
            <div className="test">
                <div className="footer__menu">
                    <p className='footer__menu__title'>
                        Меню:
                    </p>

                    {/* <ul className="footer__menu__list">
                        <li className="footer__menu__list__element">О нас</li>
                        <li className="footer__menu__list__element">Ассортимент</li>
                        <li className="footer__menu__list__element">Отзывы</li>
                        <li className="footer__menu__list__element">Доставка</li>
                        <li className="footer__menu__list__element">Политика конфиденциальности</li>
                    </ul> */}
                    <Menu items = {MenuItems}/>
                </div>

                <div className="footer__contacts">
                    <p className='footer__contacts__title'>
                        Контакты:
                        </p>
                    <p className="footer__contacts__mail">
                        Почта для продажи:
                            <span>
                            office@an-da.ru
                            </span>
                    </p>
                    <p className="footer__contacts__phone">
                        Телефон для связи:
                            <span>
                            8 (3812) 58-05-44
                            </span>
                    </p>
                </div>
            </div>
            <div className="footer__link">
                <a href="/catalog" target="_blank" rel="noopener noreferrer">
                    <button className="footer__link__button btn-o">
                        ПЕРЕЙТИ В КАТАЛОГ
                            </button>
                </a>
            </div>
            {/* </div> */}

            {/* </div> */}
        </footer>
    )
}
