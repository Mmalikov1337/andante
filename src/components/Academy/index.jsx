import React from 'react'
import pEggPNG from './../../imgs/pEgg.png'
import maffinPNG from './../../imgs/maffin.png'
import keksPNG from './../../imgs/keks.png'
import orangePNG from './../../imgs/orange.png'
import playPNG from './../../imgs/play.png'

import './Academy.scss'

const tempRows = [
    {
        image: orangePNG,
        text: 'Апельсин - морковь'
    }, {
        image: keksPNG,
        text: 'КЕКС МАНГО'
    }, {
        image: maffinPNG,
        text: 'МАФФИН'
    }, {
        image: pEggPNG,
        text: 'ПАСХАЛЬНОЕ ЯЙЦО'
    },
]

export default function Academy() {
    return (
        <div className='academy main-block'>
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
                                            <img src={item.image} alt="item.image" />
                                            <p>{item.text}</p>
                                        </div>
                                    </td>

                                    <td className='academy__table__row__col'>
                                        <div className="button-holder">
                                            <button className='academy__table__row__col__button btn-o'>
                                                Читать рецепт
                                            </button>
                                            <button className='academy__table__row__col__button btn'>
                                                Добавить в корзину
                                            </button>
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


        </div>
    )
}
