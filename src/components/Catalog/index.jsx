import React, { useState } from 'react'
import springformPNG from './../../imgs/springform_flachboden_zenker_creativestudio.png'
import donutCaramelPNG from './../../imgs/donut_caramel.png'
import chocolatePNG from './../../imgs/chocolate.png'
import raspberryCatalogPNG from './../../imgs/raspberry_catalog.png'
import TEMORARY_PNG from './../../imgs/TEMORARY.png'
import arrowLeft1SVG from './../../imgs/arrowLeft1.svg'
import arrowRight1svg from './../../imgs/arrowRight1.svg'

import './Catalog.scss'


let tempSliderInfo = [
    {
        image: springformPNG,
        title: "Форма для выпечки",
        description: "Форма выпечки разъем антипригарное покрытие",
        options: {
            "Диаметр": "26 см",
            "Высота": "8,6 см"
        }
    }, {
        image: donutCaramelPNG,
        title: "Глазурь желейная",
        description: "Гель для придания глянца кондитерским изделиям и глазирования поверхостней тортов и пирожных со свежими фруктами",
        options: [],
    }, {
        image: chocolatePNG,
        title: "Какао порошок",
        description: "Какао-порошок - является ценным сырьем для производства кондитерских изделий, мороженого, молочных продуктов и какао-напитков",
        options: [],
    }, {
        image: TEMORARY_PNG,
        title: "[TEMP_TITLE_1]",
        description: "[TEMP_DESCRIPTION_1]",
        options: [],
    }, {
        image: TEMORARY_PNG,
        title: "[TEMP_TITLE_2]",
        description: "[TEMP_DESCRIPTION_2]",
        options: [],
    },
]

export default function Catalog() {
    const activeTabsNumber = 3;
    const tabsQuontity = tempSliderInfo.length - 1;
    const [state, setstate] = useState([0, 3]);//

    function next() {
        if (state[1] > tabsQuontity) {
            setstate([0, 3]);
            console.log('next if', state);

        } else {
            console.log('next else', state);

            setstate([state[0] + 1, state[1] + 1]);
            console.log('next else', state);

        }
    }
    function prew() {
        if (state[0] <= 0) {
            setstate([tabsQuontity + 1 - activeTabsNumber, tabsQuontity + 1]);
            console.log('prew if', state);
        } else {
            setstate([state[0] - 1, state[1] - 1]);
            console.log('prew else', state);
        }
    }
    return (
        <div className='catalog main-block'>
            <img src={raspberryCatalogPNG} alt="raspberryCatalogPNG" className='catalog__raspberry' />
            <div className="container">
                <div className="catalog__text">
                    <h3 className='catalog__text__title'>
                        Смотреть каталог
                    </h3>
                    <p className='catalog__text__description'>
                        Выбери способ заказа
                    </p>
                </div>

                <div className="catalog__slider">
                    <div className="button-left" onClick={prew}>
                        <img src={arrowLeft1SVG} alt="arrowLeft" />
                        <img src={arrowLeft1SVG} alt="arrowLeft" />
                    </div>
                    <div className="catalog__slider__elements">
                        {
                            tempSliderInfo.slice(state[0], state[1]).map((item, index) => (
                                <div className="catalog__slider__elements__element" key={index}>
                                    <img src={item.image} alt="png" className='catalog__slider__elements__element__image' />
                                    <h4 className='catalog__slider__elements__element__title'>{item.title}</h4>
                                    <p className='catalog__slider__elements__element__description'>{item.description}

                                        {item.options &&
                                            Object.entries(item.options).map((key, index) => (
                                                <span className='options' key={index}><span className='key'>{key[0]} - </span>{key[1]}</span>
                                            ), item.options)
                                        }
                                    </p>
                                    <button className="catalog__slider__elements__element__button btn">
                                        В корзину
                                    </button>
                                </div>
                            ))
                        }

                    </div>
                    <div className="button-right" onClick={next}>
                        <img src={arrowRight1svg} alt="arrowRight1svg" />
                        <img src={arrowRight1svg} alt="arrowRight1svg" />
                    </div>
                </div>

            </div>
        </div>
    )
}
