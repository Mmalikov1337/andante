import React, { useState, useLayoutEffect } from 'react'
import arrowLeft1SVG from './../../imgs/arrowLeft1.svg'
import arrowRight1svg from './../../imgs/arrowRight1.svg'

import './Slider.scss'

export default function Slider({ SliderInfo, button }) {

    const [activeTabs, setActiveTabs] = useState(window.innerWidth < 1000 ? 1 : 3);
    const [state, setstate] = useState([0, useWindowSize()]);//

    function useWindowSize() {

        useLayoutEffect(() => {
            const updateSize = () => {
                if (Number(window.innerWidth) < 1000) {
                    setActiveTabs(1);
                    console.log('actTabs IF', activeTabs, window.innerWidth);
                }
                else {
                    setActiveTabs(3);
                    console.log('actTabs ELSE', activeTabs, window.innerWidth);
                }

                setstate([0, activeTabs]);
                console.log(activeTabs, Number(window.innerWidth));
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
            console.log('next if', state);

        } else {
            console.log('next else', state);

            setstate([state[0] + 1, state[1] + 1]);
            console.log('next else', state);

        }
    }

    function prew() {
        if (state[0] <= 0) {
            setstate([tabsQuontity + 1 - activeTabs, tabsQuontity + 1]);
            console.log('prew if', state);
        } else {
            setstate([state[0] - 1, state[1] - 1]);
            console.log('prew else', state);
        }
    }
    // useWindowSize();

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
                            <img src={item.image} alt="png" className='slider__elements__element__image' />
                            <h4 className='slider__elements__element__title'>{item.title}</h4>
                            <p className='slider__elements__element__description'>{item.description}
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
                                        {item.price}
                                    </span>
                                }

                            </p>
                            {
                                button &&
                                <button className="slider__elements__element__button btn">
                                    В корзину
                                </button>
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
