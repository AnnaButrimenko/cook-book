import React, {useEffect, useState} from 'react';
import getRecipes from '../../services/recipes'
import RecepteItem from '../Recept-item/recept-item';

const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getRecipes()
      .then((recipes) => {
        setRecipeList(recipes)
      })
  }, []);

  console.log(recipeList);
  return (
    <>
      <div>
        <RecepteItem/>
      </div>
    </>
  )
};

export default RecipeList;