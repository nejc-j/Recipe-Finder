import React from 'react';

const Navbar = ({ onShowFavorites, showFavorites, favoritesCount }) => {
  return (
    <nav className='bg-transparent p-4 text-black-text'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex justify-end flex-grow'>
          <button
            onClick={onShowFavorites}
            className={`px-5 py-2 text-md font-bold rounded-full shadow-lg ${
              showFavorites
                ? 'bg-white text-brown-dark'
                : 'bg-brown-dark text-white'
            }`}
            style={{ marginRight: '20px', height: '40px' }}
          >
            {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
            {favoritesCount > 0 && (
              <span
                className={`ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full ${
                  showFavorites
                    ? 'bg-brown-dark text-white'
                    : 'bg-white text-brown-dark'
                }`}
                style={{ minWidth: '24px', minHeight: '24px' }}
              >
                {favoritesCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
