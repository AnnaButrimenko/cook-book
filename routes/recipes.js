const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/', async (reg, res) => {
   try {
        const recipes = await Recipe.find();
        res.json(recipes);
   }catch (err) {
     res.json({ message: err })
   }
  }
);

router.post('/', async (reg, res) => {
    const recipe = new Recipe({
      title: reg.body.title,
      description: reg.body.description
    });
    try {
        const savedRecipe = await recipe.save();
        res.json(savedRecipe);
    }catch (err) {
        res.json({ message: err })
    }
  }
);

router.get('/:recipeId', async (reg, res) => {
  try {
      const recipe = await Recipe.findById(reg.params.recipeId);
      res.json(recipe);
  }catch (err) {
    res.json({ message: err })
  }
});

//DELETE RECIPE
router.delete('/:recipeId', async (reg, res) => {
  try {
    const removedRecipe = await Recipe.remove({ _id: reg.params.recipeId});
    res.json(removedRecipe);
  }catch (err) {
    res.json({ message: err })
  }
});

//UPDATE A RECIPE
router.patch('/:recipeId', async (reg, res) => {
  try {
    const updatedRecipe = await Recipe.updateOne({ _id: reg.params.recipeId},
      {$set: {title: reg.body.title,
              description: reg.body.description}});
    res.json(updatedRecipe);
  }catch (err) {
    res.json({ message: err })
  }
});



module.exports = router;