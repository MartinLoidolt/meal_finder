import React, {useState} from 'react';
import './App.css';
import {getMealByFirstLetters, getMealsByName} from "./Database/apiCalls";
import {Meal} from "./Utils/Interfaces";

function App() {

    const [mealSearchText, setMealSearchText] = useState<string>("");
    const [meals, setMeals] = useState<Meal[]>([]);
    const [textArea, setTextArea] = useState<string>("");

  async function onSearchMealByNameClick() {

      let meals = await getMealsByName(mealSearchText);

      setMeals(meals);
      let textAreaText = "";
      meals.forEach(meal => {
          textAreaText = textAreaText + meal.strMeal + ", \n";
      })

      setTextArea(textAreaText);
  }

    async function onSearchMealbyFirstLetters() {

        let meals = await getMealByFirstLetters(mealSearchText);

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
      <p>Meal Finder</p>
      <input type={"text"} onChange={event => {setMealSearchText(event.target.value)}}/>
      <button onClick={onSearchMealByNameClick}>Search By Name</button>
          <button onClick={onSearchMealbyFirstLetters}>Search By first letters</button>

          <textarea readOnly={true} value={textArea}/>
      </div>
    </div>
  );
}

export default App;
