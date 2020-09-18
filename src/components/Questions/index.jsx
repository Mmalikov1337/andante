import React, { useState } from 'react'
import plusSVG from './../../imgs/plus.svg'
import minusSVG from './../../imgs/minus.svg'
import './Questions.scss'

const question = [
    {
        title: ' Как попасть в академию?',
        description: `С программой мастер-классов можете ознакомиться по телефону 58-05-44`
    }, {
        title: ' Как получить товар который я заказал(а)?',
        description: `Выбрав из нашего каталога необходимые вам товары, нужно добавить их в корзину, после чего ввести контактные данные и нажать кнопку «Оформить». В течении 30 минут наш менеджер свяжется с вами, уточнит детали заказа и через час все товары будут у вас дом!`
    }, {
        title: ' Можно ли совершить заказ если я нахожусь не в городе Омск?',
        description: `Конечно можно! Оформляете заказ, мы вам перезваниваем, уточняем все ньюансы и в течении 3х дней вы получаете свой заказ.`
    }, {
        title: ' Могу ли я совершить самовывоз товара?',
        description: `Да, конечно. Наш магазин находится по адресу г. Омсе, ул. Производственная 2-я, 2Б/1. Часы работы Пн-Пт с 10:00 до 16:30`
    }, {
        title: ' Как лучше приобретать продукцию на сайте или на месте?',
        description: `При личной встрече контакт всегда продуктивнее. А в целом заявки принимаются любым удобным для Вас способом, либо по телефону 58-05-44, либо в каталоге нашего интернет магазина, либо при личной встрече в магазине по адресу г. Омсе, ул. Производственная 2-я, 2Б/1`
    }, 
]



export default function Questions() {
    const [activeIndex, setActiveIndex] = useState(4)
    const toggle = (index) => {
        console.log('index', index);
        if (activeIndex === index) {
            setActiveIndex(null)
        }
        else {
            setActiveIndex(index);
        }
    }
    return (
        <div className='questions'>
            <div className="container">

                <h3 className="questions__title">
                    Часто задаваемые вопросы
            </h3>
                <div className="questions__table">
                    {
                        question.map((item, index) => (
                            <div className="questions__table__item"
                                onClick={() => toggle(index)}
                                key={index}>
                                {
                                    index === activeIndex ?
                                        <img src={minusSVG} alt="minusSVG" 
                                        className = 'minus'/> :
                                        <img src={plusSVG} alt="plusSVG" />
                                }
                                <p className='title'>{item.title}
                                {
                                    index === activeIndex &&
                                    <span className="description">
                                        {
                                            item.description
                                        }
                                    </span>
                                }
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
