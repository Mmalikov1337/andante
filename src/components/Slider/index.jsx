import React, { useState, useLayoutEffect } from 'react'
import arrowLeft1SVG from './../../imgs/arrowLeft1.svg'
import arrowRight1svg from './../../imgs/arrowRight1.svg'
import tempImage from './../../imgs/ADNA_logo.png'

import './Slider.scss'

const handleBrokenImage = e => (e.target.src = 'https://firebasestorage.googleapis.com/v0/b/andante-cae72.appspot.com/o/ADNA_logo.png?alt=media&token=59d4d7e8-770a-4039-8ac3-0c77eed6dc0b');

export default function Slider({ SliderInfo, button }) {

    const [activeTabs, setActiveTabs] = useState(window.innerWidth < 1000 ? 1 : 3);
    const [state, setstate] = useState([0, useWindowSize()]);//

    function useWindowSize() {

        useLayoutEffect(() => {
            const updateSize = () => {
                if (Number(window.innerWidth) <= 1080) {
                    setActiveTabs(1);
                    // console.log('actTabs IF', activeTabs, window.innerWidth);
                } else if (Number(window.innerWidth) <= 1400) {
                    setActiveTabs(2);
                    // console.log('actTabs IF', activeTabs, window.innerWidth);
                } else {
                    setActiveTabs(3);
                    // console.log('actTabs ELSE', activeTabs, window.innerWidth);
                }

                setstate([0, activeTabs]);
                // console.log(activeTabs, Number(window.innerWidth));
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, [activeTabs]);
        return activeTabs;
    }
    const tabsQuontity = SliderInfo.length - 1;

    function next() {
        if (state[1] > tabsQuontity) {
            setstate([0, activeTabs]);
            // console.log('next if', state);

        } else {
            // console.log('next else', state);

            setstate([state[0] + 1, state[1] + 1]);
            // console.log('next else', state);

        }
    }

    function prew() {
        if (state[0] <= 0) {
            setstate([tabsQuontity + 1 - activeTabs, tabsQuontity + 1]);
            // console.log('prew if', state);
        } else {
            setstate([state[0] - 1, state[1] - 1]);
            // console.log('prew else', state);
        }
    }
    // useWindowSize();

    const checkImgSrc = src => {
        const img = new Image();
        img.onload = function () { console.log(`valid src: ${src}`); }
        img.onerror = function () { console.log(`unvalid src: ${src}`); }
        img.src = src;
    }

    const handleClick = (props) => {
        console.log(props)
    }

    const trimText = (str) => {
        var sliced = str.slice(0, 85);
        if (sliced.length < str.length) {
            sliced += '...';
        }
        console.log(sliced)
        return sliced
    }

    // let bungSize = {
    //     width: `${getOptimalWidth(205, 105)}px`,
    //     height: `auto`
    // };

    return (
        <div className="slider">
            <div className="button-left" onClick={prew}>
                <img src={arrowLeft1SVG} alt="arrowLeft" />
                <img src={arrowLeft1SVG} alt="arrowLeft" />
            </div>
            <div className={`slider__elements `}>
                {
                    state &&
                    SliderInfo.slice(state[0], state[1]).map((item, index) => (
                        <div className={`slider__elements__element ${button ? ' ' : 'no-button'}`} key={index}>
                             <img src={item.picture.src ? item.picture.src : tempImage} alt="png" onError={handleBrokenImage} className='slider__elements__element__image' />
                            <h4 className='slider__elements__element__title'>{item.name ? item.name : 'Название отсутствует :с'}</h4>
                            <p className='slider__elements__element__description'>{item.description ? trimText(item.description) : 'Описание отсутствует :с'}
                                {
                                    item.options &&
                                    Object.entries(item.options).map((key, index) => (
                                        <span className='options' key={index}>
                                            <span className='key'>
                                                {key[0]} -
                                            </span>
                                            {key[1]}
                                        </span>
                                    ), item.options)
                                }

                                {
                                    item.price &&
                                    <span className='price'>
                                        {item.price} ₽
                                    </span>
                                }

                            </p>
                            {
                                button &&
                                <a href="/catalog" className="slider__elements__element_link" target="_blank" rel="noopener noreferrer" onClick={handleClick(item.id)}>
                                    <button className="slider__elements__element__button btn">
                                        В корзину
                                    </button>
                                </a>
                            }
                        </div>
                    ))
                }

            </div>
            <div className="button-right" onClick={next}>
                <img src={arrowRight1svg} alt="arrowRight1svg" />
                <img src={arrowRight1svg} alt="arrowRight1svg" />
            </div>
        </div>
    )
}
