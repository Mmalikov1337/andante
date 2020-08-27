import React from 'react'
import Slider from './../Slider/'
import springformPNG from './../../imgs/springform_flachboden_zenker_creativestudio.png'

import './Assortment.scss'

const tempSliderInfo = [
    {
        image: springformPNG,
        title: "Форма для выпечки",
        description: "Форма выпечки разъем антипригарное покрытие",
        options: {
            "Диаметр": "26 см",
            "Высота": "8,6 см"
        },
        price: '1800 руб'
    }, {
        image: springformPNG,
        title: "Форма для торта",
        description: "Текст 1 2 3 4",
        options: {
            "Диаметр": "26 см",
            "Высота": "8,6 см"
        },
        price: '1800 руб'
    }, {
        image: springformPNG,
        title: "Форма для кота",
        description: "Форма тест тест",
        options: {
            "Диаметр": "26 см",
            "Высота": "8,6 см"
        },
        price: '1800 руб'
    },
]

export default function Assortment() {
    return (
        <div className='assortment main-block' id='assortment'>
            {/* <img src={chocolatePNG} alt="chocolatePNG"
                className='assortment__chocolate' /> */}

            <div className="container">
                <div className="assortment__text">
                    <h3 className='assortment__text__title'>
                        У нас в ассортименте
                    </h3>
                    <p className='assortment__text__description'>
                        Вы найдете большой выбор различных ингредиентов,
                        форм и приспособлений для кондитерских изделий любого типа
                    </p>
                </div>
                <Slider SliderInfo={tempSliderInfo} button={false} />
                {/* <div className="assortment__button-holder">
                    <button className="assortment__button-holder__button btn">Перейти в каталог</button>
                </div> */}
            </div>

        </div>
    )
}
