import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import RecipeList from './components/Recipe-list/recipe-list';
import Header from './components/Header/header';

function App () {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false)
  };
  return (
    <>
      <CssBaseline />
      <Header
        setModal={setModal}
      />
      <RecipeList
        modal={modal}
        closeModal={closeModal}/>
    </>
  );
}

export default App;
