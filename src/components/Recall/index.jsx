import React, { useState } from 'react'
import recallCakePNG from './../../imgs/recall-cake.png'
import recallArrowSVG from './../../imgs/recallArow.svg'

import './Recall.scss'

const tempReviews = [{
    name: 'Анастасия Иванова',
    text: `Качественный товар, всегда разнообразие такое.
        Но! В преддверии крупных праздников старайтесь закупаться
        заранее, меньше очередей и есть возможность спокойно рассматривать
        и выбирать. И ещё очень приятно, что компания проводит розыгрыши
        с нужными подарками, прям ПЛЮЮЮС))`
}, {
    name: 'Алибек Абдыгапаров',
    text: `Отличная парковка и очень внимательный продавец`
}, {
    name: 'marina00081',
    text: `Отличный магазин с умеренными ценами.Знаю этот магазин уже давно,
        когда вместо светлого павильона был небольшой вагончик. Бессменный его
        продавец Светлана отлично ориентируется в товаре, всегда в курсе новинок, 
        готовая в любой момент вам ответить на все вопросы.Обслуживание быстрое 
        и четкое. Светлана очень внимательна, вежлива и профессиональна. Помнит
        все наизусть, всегда предупредит о поступлении нужного товара. Большое
        спасибо Светлане за помощь и быстрое обслуживание, с удовольствием
        посещаю этот магазин !`
}
]

export default function Recall() {
    const [reviewNumber, setReviewNumber] = useState(0);
    const rewsLen = tempReviews.length;
    const increaseReviewNumber = () => {
        console.log("increaseReviewNumber", reviewNumber, rewsLen);
        if (reviewNumber < rewsLen-1) setReviewNumber(reviewNumber + 1);
        else setReviewNumber(0);
    }
    const decreaseReviewNumber = () => {
        console.log("decreaseReviewNumber", reviewNumber, rewsLen);

        if (reviewNumber > 0) setReviewNumber(reviewNumber - 1);
        else setReviewNumber(rewsLen-1);
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

                        <div className="recall__wrapper__block__text" >
                            <h3 className='recall__wrapper__block__text__title'>
                                {tempReviews[reviewNumber].name}
                            </h3>
                            <p className="recall__wrapper__block__text__description">
                                {tempReviews[reviewNumber].text}
                            </p>
                        </div>
                        <div className="wrap">
                            <img src={recallArrowSVG} alt="recallArrowSVG"
                                className="recall__wrapper__block__arrow"
                                onClick={increaseReviewNumber} />
                            <img src={recallArrowSVG} alt="recallArrowSVG"
                                className="recall__wrapper__block__arrow-back"
                                onClick={decreaseReviewNumber} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
