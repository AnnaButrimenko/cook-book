import React from 'react';

export default function RecipeItem ({ recipe }) {
  const {
    title,
    description
  } = recipe;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}
