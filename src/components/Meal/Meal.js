import React from 'react';
import './Meal.css'

const Meal = (props) => {
    console.log(props.meal);
    const {strMeal, strMealThumb} = props.meal;
    return (
        <div className='meal'>
           <img src={strMealThumb} alt="images" />
           <p className='meal-name'>{strMeal}</p>
        </div>
    );
};

export default Meal;