import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import RecipeList from './components/Recipe-list/recipe-list';
import Header from './components/Header/header';

function App () {
  return (
    <>
      <CssBaseline />
      <Header />
      <RecipeList />
    </>
  );
}

export default App;
