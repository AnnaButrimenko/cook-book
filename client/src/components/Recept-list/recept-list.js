import React, {useEffect, useState} from 'react';
import getRecipes from '../../services/recipes'
import RecipeItem from '../Recipe-item/recept-item';

const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getRecipes()
      .then((recipes) => {
        setRecipeList(recipes)
      })
  }, []);
  
  const renderRecipes = (recipeList) => (
    recipeList.map((recipe) => (
      <RecipeItem
        key={recipe._id}
        recipe={recipe}
      />
    ))
  );
  return (
    <>
      {renderRecipes(recipeList)}
    </>
  )
};

export default RecipeList;