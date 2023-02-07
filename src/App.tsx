import React, {useState} from 'react';
import './App.css';
import {
    getMealByFirstLetters,
    getMealByID,
    getMealRandom,
    getMealsByName,
    getMealsFilteredByMainIngredient
} from "./database/apiCalls";
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

    async function onGetMealByID() {

        let meals = await getMealByID(+mealSearchText);

      console.log(meals)
        setMeals(meals);
        let textAreaText = "";
        meals.forEach(meal => {
            textAreaText = textAreaText + meal.strMeal + ", \n";
        })

        setTextArea(textAreaText);
    }

    async function onGetRandomMeal() {
      let meals = await getMealRandom();

        setMeals(meals);
        let textAreaText = "";
        meals.forEach(meal => {
            textAreaText = textAreaText + meal.strMeal + ", \n";
        })

        setTextArea(textAreaText);
    }

    async function onGetMealsFilteredByMainIngredient() {

        let meals = await getMealsFilteredByMainIngredient(mealSearchText);

        console.log(meals)
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
      <input id="txInput" type={"text"} onChange={event => {setMealSearchText(event.target.value)}}/>
          <button id="btSearchByName" onClick={onSearchMealByNameClick}>Search By Name</button>
          <button id="btSearchByFirstLetter" onClick={onSearchMealbyFirstLetters}>Search By first letters</button>
          <button id="btGetRandomMeal" onClick={onGetRandomMeal}>Get random meal</button>
          <button id="btGetMealById" onClick={onGetMealByID}>Get Meal By ID</button>
          <button id="btGetFilteredMeals" onClick={onGetMealsFilteredByMainIngredient}>Get Meals filtered by main ingredient</button>
          <textarea id="taOutput" readOnly={true} value={textArea}/>

      </div>
    </div>
  );
}

export default App;
