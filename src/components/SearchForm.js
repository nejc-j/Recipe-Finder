import React, { useState } from 'react';

function SearchForm({ onSearch, onDietSelection, diet }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, diet });
  };

  const handleDietSelection = (option) => {
    const dietOption = option.toLowerCase().replace(' ', '');
    if (diet === dietOption) {
      onDietSelection('');
    } else {
      onDietSelection(dietOption);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center gap-4 w-full'
    >
      <div className='flex w-full max-w-4xl sm:max-w-xl sm:w-180'>
        <input
          type='text'
          placeholder='Start typing recipe ingredients...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='form-input rounded-l-full pl-4 pr-10 py-2 border-2 border-r-0 border-gray-300 focus:border-orange-300 focus:outline-none focus:ring-0 flex-grow shadow-xl w-full sm:w-90%'
        />
        <button
          type='submit'
          className='px-4 rounded-r-full bg-brown-dark text-white hover:bg-dark-brown focus:outline-none focus:border-transparent focus:ring-0 shadow-xl'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='25'
            height='25'
            viewBox='0,0,256,256'
          >
            <g
              fill='#ffffff'
              fillRule='nonzero'
              stroke='none'
              strokeWidth='1'
              strokeLinecap='butt'
              strokeLinejoin='miter'
              strokeMiterlimit='10'
              strokeDasharray=''
              strokeDashoffset='0'
              fontFamily='none'
              fontWeight='none'
              fontSize='none'
              textAnchor='none'
            >
              <g transform='scale(5.12,5.12)'>
                <path d='M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z'></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className='grid grid-cols-2 gap-3 mb-8 sm:grid-cols-4'>
        {['Vegetarian', 'Vegan', 'Gluten Free', 'Ketogenic'].map((option) => (
          <button
            key={option}
            type='button'
            onClick={() => handleDietSelection(option)}
            className={`px-2 py-1.5 text-sm rounded-full shadow-xl ${
              diet === option.toLowerCase().replace(' ', '')
                ? 'bg-orange-bright text-white'
                : 'bg-white text-gray-800'
            } hover:bg-orange-bright focus:outline-none focus:border-transparent`}
          >
            {option}
          </button>
        ))}
      </div>
    </form>
  );
}

export default SearchForm;
