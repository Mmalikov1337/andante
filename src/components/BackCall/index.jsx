import React from 'react'

import './BckCall.scss'

export default function BackCall() {
    return (
        <div className='backcall' id = 'backcall'>
            
            {/* <div className="backcall__imag">
                <img src={purepngPNG} alt="purepngPNG"
                    className='purepng' />
            </div> */}
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
                    <form className="backcall__form__input">
                        <input type="number" name="number" id="number" formMethod = 'POST'
                            placeholder='Введите Ваш номер телефона'
                            className='backcall__form__input__number' />
                        <button className='backcall__form__input__button btn'>
                            Заказать
                        </button>
                    </form>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
