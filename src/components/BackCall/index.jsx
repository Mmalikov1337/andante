import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './BckCall.scss'

export default function BackCall() {
    const [number, setNumber] = useState([])

    const onChangeNumber = (event) => {
        console.log(number)
        setNumber(event.target.value)
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        if (number) {       
            await axios.post('https://admin.andante55.ru/api/backcall', {
                tel:  number
              })
              .then(function (response) {
                alert('Мы скоро с Вами свяжемся!')
                setNumber('')
              })
              .catch(function (error) {
                alert('Ошибка при отправке запроса!')
                console.log(error);
              });
        } else {
            alert('При формировании заказа произошла ошибка!')
            // console.log('данные не норм')
        }
    }

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
                    <form className="backcall__form__input" onSubmit={handleSubmit}>
                        <input value={number} onChange={onChangeNumber} type="number" name="tel" id="number" required patern="[0-9]{3} [0-9]{3} [0-9]{4}" formMethod = 'POST'
                            placeholder='Введите Ваш номер телефона'
                            className='backcall__form__input__number' />
                        <button type="submit" className='backcall__form__input__button btn'>
                            Заказать
                        </button>
                    </form>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
