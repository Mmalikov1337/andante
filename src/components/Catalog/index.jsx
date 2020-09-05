import React from 'react'
import springformPNG from './../../imgs/springform_flachboden_zenker_creativestudio.png'
import donutCaramelPNG from './../../imgs/donut_caramel.png'
import chocolatePNG from './../../imgs/chocolate.png'
import TEMORARY_PNG from './../../imgs/TEMORARY.png'

import Slider from './../Slider'

import './Catalog.scss'


let tempSliderInfo = [
    {
        image: springformPNG,
        title: "Форма для выпечки",
        description: "Форма выпечки разъем антипригарное покрытие",
        options: {
            "Диаметр": "26 см",
            "Высота": "8,6 см"
        },
        price: null
    }, {
        image: donutCaramelPNG,
        title: "Глазурь желейная",
        description: "Гель для придания глянца кондитерским изделиям и глазирования поверхостней тортов и пирожных со свежими фруктами",
        options: [],
        price: null
    }, {
        image: chocolatePNG,
        title: "Какао порошок",
        description: "Какао-порошок - является ценным сырьем для производства кондитерских изделий, мороженого, молочных продуктов и какао-напитков",
        options: [],
        price: null
    }, {
        image: TEMORARY_PNG,
        title: "[TEMP_TITLE_1]",
        description: "[TEMP_DESCRIPTION_1]",
        options: [],
        price: null
    }, {
        image: TEMORARY_PNG,
        title: "[TEMP_TITLE_2]",
        description: "[TEMP_DESCRIPTION_2]",
        options: [],
        price: null
    },
]

export default function Catalog() {
    
    return (
        <div className='catalog main-block'>
            <div className="container">
                <div className="catalog__text">
                    <h3 className='catalog__text__title'
                    >
                        Смотреть каталог
                    </h3>
                    <p className='catalog__text__description'>
                        Выбери способ заказа
                    </p>
                </div>
                <Slider SliderInfo={tempSliderInfo} button={true} />
            </div>
        </div>
    )
}
