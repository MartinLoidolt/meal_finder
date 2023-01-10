import {Meal} from "../Utils/Interfaces";

export async function getMealsByName(name: string): Promise<Meal[]> {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name, {
        method: 'GET',
    });

    if(resp.status === 200) {

        let meals = (await resp.json()).meals;

        return meals ? meals : [];
    }

    return [];

}