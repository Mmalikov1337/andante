import React, { useState } from 'react'
import recallCakePNG from './../../imgs/recall-cake.png'
import recallArrowSVG from './../../imgs/recallArow.svg'

import './Recall.scss'

export default function Recall() {
    const [reviewNumber, setReviewNumber] = useState(0)
    
    const handleClick = () => {
        
    }
    return (
        <div className='recall main-block' id="recall">
            {/* <img src={berryPNG} alt="berryPNG"
                className='recall__berry' /> */}
            <div className="container">
                <h3 className='recall__title'>Отзывы</h3>
                <div className="recall__wrapper">
                    <img src={recallCakePNG} alt="recallCakePNG" className="recall__wrapper__image" />
                    <div className="recall__wrapper__block">
                        <div className="recall__wrapper__block__text">
                            <h3 className='recall__wrapper__block__text__title'>
                                Иван Иванов
                            </h3>
                            <p className="recall__wrapper__block__text__description">
                                Я приобрела у магазина Анданте несколько формочек для выпечки,
                                смесь пряничный микс и кучу другого, приготовила много печенек
                                для всей семьи. Редко готовлю что либо из теста и мне всегда очень
                                не нравилось ходить по магазину и выискивать целую кучу ингредиентов.
                                Решила заказать онлайн и поняла, что это очень удобно, просто четко
                                по рецепту выбираете товары которые нужны,
                                заказываете и через час весь заказ дома! Всем советую!
                            </p>
                        </div>
                        <img src={recallArrowSVG} alt="recallArrowSVG" 
                        className="recall__wrapper__block__arrow"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
