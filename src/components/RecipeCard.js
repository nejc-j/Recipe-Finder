import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

function RecipeCard({ recipe }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.id === recipe.id);
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div className='recipe-card relative'>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <svg
        onClick={toggleFavorite}
        fill={isFavorite ? 'red' : 'white'}
        stroke={isFavorite ? 'red' : 'currentColor'}
        className='bi bi-heart-fill absolute'
        style={{
          top: '15px',
          right: '15px',
          cursor: 'pointer',
          width: '3em',
          height: '3em',
          userSelect: 'none',
        }}
        viewBox='0 0 32 32'
      >
        <path d='M23.5,5C20.4,5,18,7.5,18,7.5S15.6,5,12.5,5C9.2,5,7,7.3,7,10.8c0,5.1,5.5,9.2,10.3,14.5l0.7,0.7l0.7-0.7c4.8-5.3,10.3-9.4,10.3-14.5C29,7.3,26.8,5,23.5,5z' />
      </svg>
      <button onClick={toggleFavorite} className='hidden'>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default RecipeCard;
