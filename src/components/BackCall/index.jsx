import React from 'react'

import './BckCall.scss'

export default function BackCall() {
    return (
        <div className='backcall'>
            {/* <div className="container"> */}
            <div className="wrap">

                <div className="backcall__form">
                    <div className="backcall__form__text">
                        <h3 className='backcall__form__text__title'>
                            Закажите обратный звонок
                        </h3>
                        <p className='backcall__form__text__description'>
                            Заполнить форму для заказа.
                            Мы свяжемся с Вами в течении 20 минут
                        </p>
                    </div>
                    <div className="backcall__form__input">
                        <input type="text" name="" id=""
                         placeholder = 'Введите Ваш номер телефона'
                         className = 'backcall__form__input__number'/>
                        <button className = 'backcall__form__input__button btn'>
                            Заказать
                        </button>
                    </div>
                </div>
            </div>

            {/* </div> */}
        </div>
    )
}
