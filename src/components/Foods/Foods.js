import React, { useEffect, useState } from 'react';

const Foods = () => {
    const [meals , setMeals] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
          .then((res) => res.json())
          .then((data) => console.log(data.meals));
      }, []);
    return (
        <div>
            
        </div>
    );
};

export default Foods;