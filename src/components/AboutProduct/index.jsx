import React from 'react'
// import aboutBgPNG from './../../imgs/aboutBg.png'
// import povarPNG from './../../imgs/povar.png'
import dairyPNG from './../../imgs/dairy.png'
import trayPNG from './../../imgs/tray.png'
import moneyPNG from './../../imgs/money.png'
import gazelPNG from './../../imgs/gazel.png'
// import fogPNG from './../../imgs/fog.png'

import './AboutProduct.scss'

export default function AboutProduct() {
    return (
        <div className='about main-block'>
            <h3 className='about__title'>О нашей продукции</h3>
            <div className="about__images">
                <div className="container">

                    <div className="left">
                        <div className="about__images__item">
                            <img src={gazelPNG} alt="gazel" />
                            <p>Быстрая доставка</p>
                        </div>
                        <div className="about__images__item">
                            <img src={moneyPNG} alt="money" />
                            <p>Приемлемая цена</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="about__images__item">
                            <img src={trayPNG} alt="tray" />
                            <p>Качественные изделия</p>
                        </div>
                        <div className="about__images__item">
                            <img src={dairyPNG} alt="dairy" />
                            <p>Лучшие ингредиенты</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
