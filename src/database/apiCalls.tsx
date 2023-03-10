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

export async function getMealByFirstLetters(firstLetters: string): Promise<Meal[]> {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + firstLetters, {
        method: 'GET',
    });

    if(resp.status === 200) {
        let meals = (await resp.json()).meals;
        return meals ? meals : [];
    }
    return [];
}

export async function getMealRandom(): Promise<Meal[]> {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
        method: 'GET',
    });

    if(resp.status === 200) {
        let meals = (await resp.json()).meals;
        return meals ? meals : [];
    }
    return [];
}

export async function getMealByID(id: number): Promise<Meal[]> {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id, {
        method: 'GET',
    });

    if(resp.status === 200) {
        let meals = (await resp.json()).meals;
        return meals ? meals : [];
    }
    return [];
}

export async function getMealsFilteredByMainIngredient(ingredient: string): Promise<Meal[]> {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient, {
        method: 'GET',
    });

    if(resp.status === 200) {
        let meals = (await resp.json()).meals;
        return meals ? meals : [];
    }
    return [];
}