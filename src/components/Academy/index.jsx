import React, { useState } from 'react'
import Recipe from '../Recipe'
import pEggPNG from './../../imgs/pEgg.png'
import maffinPNG from './../../imgs/maffin.png'
import keksPNG from './../../imgs/keks.jpg'
import kruasJPG from './../../imgs/kruas.jpg'
import playPNG from './../../imgs/play.png'

import './Academy.scss'

const tempRows = [
    {
        image: kruasJPG,
        text: 'КРУАССАН',
        recipe: {
            weight: '16.700',
            ingredients: [
                {
                    name: 'Пшеничная мука',
                    weight: '10.000'
                },
                {
                    name: 'Вода',
                    weight: '4.500'
                },
                {
                    name: 'Дрожжи',
                    weight: '500'
                },
                {
                    name: 'Соль',
                    weight: '150'
                },
                {
                    name: 'Сахар',
                    weight: '800'
                },
                {
                    name: 'Бейкер Микс',
                    weight: '250'
                },
                {
                    name: 'Маргарин',
                    weight: '500'
                },
            ]
        }
    }, 
    {
        image: keksPNG,
        text: 'КЕКС МАНГО',
        recipe: {
            weight: '1150',
                ingredients: [
                {
                    name: 'Пшеничная мука',
                    weight: '250'
                },
                {
                    name: 'Смесь "Фа Бисквит" Ванильный',
                    weight: '33'
                },
                {
                    name: 'Сахар-песок',
                    weight: '200'
                },
                {
                    name: 'Яйцо',
                    weight: '200'
                },
                {
                    name: 'Маргарин',
                    weight: '236'
                },
                {
                    name: 'Соль',
                    weight: '3.5'
                },
                {
                    name: 'Фа Ваниль (Ванилин)',
                    weight: '8'
                },
                {
                    name: 'Новинка Твист со вкусом "манго"',
                    weight: '230'
                },
            ]
        }
    }, {
        image: maffinPNG,
        text: 'МАФФИН',
        recipe: {
            weight: '5000',
                ingredients: [
                {
                    name: 'Смесь мучная кондитерская "РУСКОНД" "Маффин классик"',
                    weight: '250'
                },
                {
                    name: 'Мука пшеничная хлебопекарная в/с',
                    weight: '1025'
                },
                {
                    name: 'Сахар-песок',
                    weight: '1425'
                },
                {
                    name: 'Яйцо куриное',
                    weight: '950'
                },
                {
                    name: 'Масло подсолнечное',
                    weight: '900'
                },
                {
                    name: 'Вода питьевая',
                    weight: '400'
                },
                {
                    name: 'Фа Ваниль (Ванилин)',
                    weight: '8'
                },
                {
                    name: 'Новинка Твист со вкусом "манго"',
                    weight: '230'
                },
            ]
        }
    }, {
        image: pEggPNG,
        text: 'ПАСХАЛЬНОЕ ЯЙЦО',
        recipe: {
            weight: '19400',
            ingredients: [
                {
                    name: 'Пшеничная мука',
                    weight: '10000'
                },
                {
                    name: 'Бейкер микс',
                    weight: '250'
                },
                {
                    name: 'Молоко',
                    weight: '4500'
                },
                {
                    name: 'Яйцо',
                    weight: '1000'
                },
                {
                    name: 'Дрожжи',
                    weight: '500'
                },
                {
                    name: 'Сахар',
                    weight: '1000'
                },
                {
                    name: 'Соль',
                    weight: '150'
                },
                {
                    name: 'Сливочное масло',
                    weight: '2000'
                },
            ]
        }
    },
]

export default function Academy() {
    const [visibleRecipe, setVisibleRecipe] = useState(false)
    const [selectedRecipe, setSelectedRecipe] = useState(false)
    let handleClick = (index) => {
        console.log('recipe click')
        setSelectedRecipe(index)
        setVisibleRecipe(true)
    }

    let closeCart = () => {
        setVisibleRecipe(false)
    }
    return (
        <div className='academy main-block' id="academy">
            <div className="container">
                <div className="academy__text">
                    <h3 className="academy__text__title">
                        Академия Анданте
                    </h3>
                    <p className='academy__text__description'>
                        Хочешь научиться готовить вкусные
                        изделия вместе с нашими кондитерами?
                    </p>
                </div>


                <table className='academy__table'>
                    <thead>
                        <tr className='academy__table__head'>
                            <td>изделие</td>
                            <td>рецепт</td>
                            <td>видео</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tempRows.map((item, index) => (
                                <tr className='academy__table__row' key={index}>
                                    <td className='academy__table__row__col'>
                                        <div className='image-holder'>
                                            <img src={item.image} alt="item" />
                                            <p>{item.text}</p>
                                        </div>
                                    </td>

                                    <td className='academy__table__row__col'>
                                        <div className="button-holder">
                                                <button onClick={() => handleClick(index)} className='academy__table__row__col__button btn-o'>
                                                    Читать рецепт
                                                </button>
                                            <a href="/catalog" target="_blank" rel="noopener noreferrer">
                                                <button className='academy__table__row__col__button btn'>
                                                    Выбрать в каталоге
                                                </button>
                                            </a>
                                        </div>
                                    </td>

                                    <td className='academy__table__row__col'>
                                        <div className="video-holder">
                                            <img src={playPNG} alt="playSVG"
                                                className='academy__table__row__col__play' />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {visibleRecipe && <Recipe recipe={tempRows[selectedRecipe].recipe} closeCart={closeCart}/>}
        </div>
    )
}
