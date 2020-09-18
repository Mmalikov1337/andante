import React from 'react'
import './Recipe.scss'
import cross from './../../imgs/cross.png'

export default function Recipe(props) {
    let recipe = props.recipe

    return (
        <div className='recipe-wrapper' id="academy">
            <div className='recipe' id="academy">
                <div className="cart__top__close">
                    <img src={cross} alt="cross" onClick = {props.closeCart}/>
                        {/* <button onClick = {closeCart}>+</button> */}
                </div>
                <table className='recipe__table'>
                    <thead>
                        <tr className='recipe__table__head'>
                            <td><p className="recipe__table__head_text">Наименование сырья</p></td>
                            <td><p className="recipe__table__head_text">Расход в граммах</p></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipe.ingredients.map((item, index) => (
                                <tr className='recipe__table__row' key={index}>
                                    <td className='recipe__table__row__col'>
                                        <p className="recipe__table__row__col_text">{item.name}</p>
                                    </td>

                                    <td className='recipe__table__row__col'>
                                    <p className="recipe__table__row__col_text">{item.weight}</p>
                                    </td>
                                </tr>
                            ))
                            
                        }
                        <tr className='recipe__table__row'>
                            <td className='recipe__table__row__col'>
                                <p className="recipe__table__row__col_text"><b>Вcего массы</b></p>
                            </td>

                            <td className='recipe__table__row__col'>
                                <p className="recipe__table__row__col_text"><b>{recipe.weight}</b></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
