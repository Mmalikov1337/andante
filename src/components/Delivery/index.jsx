import React from 'react'
import EllipseBig from './../../imgs/EllipseBig.png'
import EllipseSmall from './../../imgs/EllipseSmall.png'
import Bugday from './../../imgs/Bugday.png'
import computer from './../../imgs/computer.png'
import watch from './../../imgs/watch.png'
import car from './../../imgs/car.png'
import nuts from './../../imgs/nuts.png'
import cassata_slice from './../../imgs/cassata_slice.png'

import './Delivery.scss'

export default function Delivery() {
    return (
        <div className='delivery main-block' id="delivery">
            {/* <img src={nuts} alt="nuts" className='delivery__nuts' /> */}
            {/* <div className="container"> */}
                <h3 className='delivery__title'>Доставка</h3>
                {/* <div className="title_wrapper"> */}
                <div className="delivery__tablets">
                    <div className="delivery__tablets__tablet">
                        <img src={watch} alt="watch" />
                        <p>Служба доставки работает с 12:00 до 22:00</p>
                    </div>

                    <div className="delivery__tablets__eclipse">
                        <div className="wrapper">
                            <img src={EllipseSmall} alt="EllipseSmall" />
                            <img src={EllipseBig} alt="EllipseBig" />
                            <img src={EllipseSmall} alt="EllipseSmall" />
                        </div>
                    </div>

                    <div className="delivery__tablets__tablet">
                        <img src={computer} alt="computer" />
                        <p>Остаивть свой заказ Вы сможете через сайт и по телефону 8(800)800-80-80</p>
                    </div>

                    <div className="delivery__tablets__eclipse">
                        <div className="wrapper">
                            <img src={EllipseSmall} alt="EllipseSmall" />
                            <img src={EllipseBig} alt="EllipseBig" />
                            <img src={EllipseSmall} alt="EllipseSmall" />
                        </div>
                    </div>

                    <div className="delivery__tablets__tablet">
                        <img src={Bugday} alt="Bugday" />
                        <p>Доставка бесплатная для тортов весом от 3 кг</p>
                    </div>

                    <div className="delivery__tablets__eclipse">
                        <div className="wrapper">
                            <img src={EllipseSmall} alt="EllipseSmall" />
                            <img src={EllipseBig} alt="EllipseBig" />
                            <img src={EllipseSmall} alt="EllipseSmall" />
                        </div>
                    </div>

                    <div className="delivery__tablets__tablet">
                        <img src={car} alt="car" />
                        <p>Доставка по всему Омску и по всей России в течении 3х суток</p>
                    </div>
                </div>

                <div className="delivery__orders">
                    <div className="delivery__orders__order">
                        <span className='delivery__orders__order__step'>
                            Шаг 01
                        </span>
                        <h4 className='delivery__orders__order__title'>
                            Заказ
                        </h4>
                        <p className='delivery__orders__order__description'>
                            Оставляете заявку на сайте или закажите по телефону
                        </p>
                    </div>
                    <div className="delivery__orders__order">
                        <span className='delivery__orders__order__step'>
                            Шаг 02
                        </span>
                        <h4 className='delivery__orders__order__title'>
                            Детали
                        </h4>
                        <p className='delivery__orders__order__description'>
                            Наш менеджер свяжется с Вами и обсуит все ньюансы
                        </p>
                    </div>
                    <div className="delivery__orders__order">
                        <span className='delivery__orders__order__step'>
                            Шаг 03
                        </span>
                        <h4 className='delivery__orders__order__title'>
                            Доставка
                        </h4>
                        <p className='delivery__orders__order__description'>
                            Мы доставим Вам заказ или Вы сможете забрать его сами
                        </p>
                    </div>
                </div>
            {/* </div> */}

            {/* </div> */}
            <img src={cassata_slice} alt="cassata_slice" className='delivery__cassata_slice' />
        </div>
    )
}
