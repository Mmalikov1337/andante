import React from 'react'
import { NavBar } from './../'
import raspberryPNG from './../../imgs/raspberry.png'
import './Header.scss'

export default function Header() {
    return (
        <header className='header main-block'>
            <div className="container">
                <NavBar />
                <div className="grid">
                    <div className="header__content">
                        <div className="header__content__text">
                            <h1 className='header__content__text__title'>
                                Кондитерское и хлебопекарное сырье
                            </h1>
                            <p className='header__content__text__description'>
                                • Масложировая продукция<br/>
                                • Формы для выпечки<br/>
                                • Красители и ароматизаторы<br/>
                                • Кондитерские украшения<br/>
                                • Какао<br/>
                                • Кондитерские смеси и многое другое
                            </p>
                        </div>
                        <div className="header__content__button-holder">
                            <a href="/catalog" target="_blank" rel="noopener noreferrer">
                                <button className="header__content__button-holder__button btn">
                                    Перейти в каталог
                                </button>
                            </a>
                            {/* <div className="img-holder"> */}
                                <img src={raspberryPNG} alt="raspberry" 
                                className='header__content__button-holder__raspberry' />

                            {/* </div> */}
                            {/* <div className="img-container">
                                <img src={blueberriesPNG} alt="blueberries"
                                    className='header__content__button-holder__blueberries' />
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="header__image">
                        <img src={cakePNG} alt="cake" className='header__image__cake' />
                        <img src={milkPNG} alt="milk" className='header__image__milk' />
                        <img src={strawberryPNG} alt="strawberry" className='header__image__strawberry' />
                    </div> */}
                </div>
            </div>
        </header>
    )
}
