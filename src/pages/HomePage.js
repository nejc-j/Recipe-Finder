import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import RecipeList from '../components/RecipeList';
import { searchRecipes } from '../api';
import { useFavorites } from '../context/FavoritesContext';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const { favorites } = useFavorites();
  const [diet, setDiet] = useState('');

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
    setDiet(''); // Reset diet when toggling favorites
  };

  const handleSearch = async (searchParams) => {
    setShowFavorites(false); // Exit favorites view on new search
    try {
      const results = await searchRecipes(searchParams);
      setRecipes(results);
      setError('');
    } catch (error) {
      setError(error.message);
      setRecipes([]);
    }
  };

  const handleDietSelection = (dietOption) => {
    setShowFavorites(false); // Exit favorites view on diet selection
    setDiet(dietOption); // Update diet state
    handleSearch({ query: '', diet: dietOption });
  };

  return (
    <div
      className='flex flex-col min-h-screen bg-hero-background'
      style={{ position: 'relative', zIndex: '0' }}
    >
      <Navbar
        onShowFavorites={handleShowFavorites}
        showFavorites={showFavorites}
        favoritesCount={favorites.length}
      />
      <div className='flex flex-col flex-grow items-center justify-start pt-10'>
        <h1 className='text-5xl font-title font-bold text-black-text mb-10'>
          Recipe Finder
        </h1>
        <div className='background-image'></div>
        <SearchForm
          onSearch={handleSearch}
          onDietSelection={handleDietSelection}
          diet={diet}
        />
        <RecipeList
          recipes={showFavorites ? favorites : recipes}
          showFavorites={showFavorites}
        />
        {error && (
          <div className='text-red-500 bg-white px-2 font-bold text-center mt-10'>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
