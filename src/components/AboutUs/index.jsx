import React from 'react'
import chefPNG from './../../imgs/chef_fog.png'
import chocolatePNG from './../../imgs/chocolate-block.png'

import './AboutUs.scss'

export default function AboutUs() {
    return (
        <div className='about_us main-block'>
            <div className="container">

                <div className="about_us__content">

                    <div className="about_us__content__text">
                        <div className="about_us__content__text__title">
                            <h3>О нас</h3>
                        </div>
                        <div className="about_us__content__text__description">
                            <p>Динамично развивающаяся Торговая Компания “Анда” впервые вышла
                            на рынок в 1992 году и с тех пор успешно занимается поставками
                            сырья и ингредиентов для пищевой промышленности: кондитерской,
                            хлебопекарной, молочной и мясной.</p>

                            <p>Мы доставляем наши товары в любую точку России.
                            С помощью наших ингедиентов и кондитерских принадлежностей
                            Вы сможете готовить вкусно и с легкостью.</p>
                        </div>
                    </div>
                    {/* <div className="wrap"> */}
                        <div className="about_us__content__text__grid">
                            <div className="about_us__content__text__grid__elem">
                                <div className="wrap">
                                    <p>45000 различных ингредиентов и форм для кондитерских изделий</p>

                                </div>
                            </div>
                            <div className="about_us__content__text__grid__elem">
                                <div className="wrap">
                                    <p>Обучаем кондитеров в нашем образовательном центре</p>

                                </div>
                            </div>
                            <div className="about_us__content__text__grid__elem">
                                <div className="wrap">
                                    <p>Имеет собственную базу рецептур кондитерских изделий на любой вкус и цвет</p>

                                </div>
                            </div>
                            <div className="about_us__content__text__grid__elem">
                                <div className="wrap">
                                    <p>Обладатели диплома I степени на выставке НовосибирскПродСиб</p>

                                </div>
                            </div>
                        </div>
                    {/* </div> */}


                    <div className="about_us__content__button">
                        <button className="btn">Смотреть рецепты</button>
                    </div>

                </div>
                {/* <div className="about_us__image">
                    <img src={chefPNG} alt="chefPNG" />
                </div> */}
            </div>
            <img src={chocolatePNG} alt="chocolatePNG"
                className='chocolate' />
        </div>
    )
}
