import React, {useState} from 'react';
import RecipeList from './components/Recipe-list/recipe-list';
import AddRecipe from './components/Add-recipe/add-recipe';
import AddRecipeBtn from './components/Add-recipe-btn/add-recipe-btn'

function App () {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false)
  };
  return (
    <>
      <RecipeList />
      <AddRecipe
        open={modal}
        onModalClose={closeModal}
      />
      <AddRecipeBtn
        handleClick={() => {
          setModal(true)
        }}
      />
    </>
  );
}

export default App;
