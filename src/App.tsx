import React, {useState} from 'react';
import './App.css';
import {getMealsByName} from "./Database/apiCalls";
import {Meal} from "./Utils/Interfaces";

function App() {

    const [mealSearchText, setMealSearchText] = useState<string>("");
    const [meals, setMeals] = useState<Meal[]>([]);
    const [textArea, setTextArea] = useState<string>("");

  async function onSearchMealClick() {

      let meals = await getMealsByName(mealSearchText);

      setMeals(meals);
      let textAreaText = "";
      meals.forEach(meal => {
          textAreaText = textAreaText + meal.strMeal + ", \n";
      })

      setTextArea(textAreaText);
  }

  return (
    <div className="App">
      <div className="App-body">
      <p>Name of Meal: </p>
      <input type={"text"} onChange={event => {setMealSearchText(event.target.value)}}/>
      <button onClick={onSearchMealClick}>Search</button>
      <textarea readOnly={true} value={textArea}/>
      </div>
    </div>
  );
}

export default App;
