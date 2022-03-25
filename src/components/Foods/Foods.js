import React, { useEffect, useState } from 'react';
import './Foods.css'

const Foods = () => {
    const [meals , setMeals] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
          .then(res => res.json())
          .then(data => setMeals(data.meals));
      }, []);
    return (
        <div className='foods-container'>
            <div className="meals-container">
               <h2>Fooods : {meals.length}</h2>
                
            </div>

            <div className="cart-container">
                    <h4>Orders summery</h4>
                </div>
        </div>
    );
};

export default Foods;