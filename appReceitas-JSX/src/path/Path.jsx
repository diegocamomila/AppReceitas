import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

function Path() {
    return (
        <Routes>
            {/* <Route  path="/favorite-recipes" element={ FavoriteRecipes } /> */}
            {/* <Route  path="/done-recipes" element={ DoneRecipes } /> */}
            {/* <Route  path="/profile" element={ Profile } /> */}
            {/* <Route  path="/explore/foods/nationalities" element={ ExpFoodsNationalities } /> */}
            {/* <Route  path="/explore/drinks/ingredients" element={ ExpDrinksIngredient } /> */}
            {/* <Route  path="/explore/foods/ingredients" element={ ExpFoodsIngredient } /> */}
            {/* <Route  path="/explore/drinks" element={ ExploreDrinks } /> */}
            {/* <Route  path="/explore/foods" element={ ExploreFoods } /> */}
            {/* <Route  path="/explore" element={ Explore } /> */}
            {/* <Route  path="/drinks" element={ Drinks } /> */}
            {/* <Route  path="/foods" element={ Foods } /> */}
            <Route path="/" element={ <Login /> } />
            <Route  path="*" element={ <NotFound /> } />
        </Routes>
    );
}

export default Path;
