import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

import RecipeCard from './RecipeCard';

SwiperCore.use([Navigation, Pagination]);

function RecipeList({ recipes, showFavorites }) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className='border-2 border-black text-center mt-10 text-xl bg-white/75 p-2 rounded-xl'>
        {showFavorites ? (
          <>
            You have no items in your <strong>favorites</strong>.
          </>
        ) : (
          <>
            Try typing some <strong>recipe ingredients</strong> and find
            inspiration for your next meal!
          </>
        )}
      </div>
    );
  }

  const swiperKey = JSON.stringify(recipes.map((recipe) => recipe.id));

  return (
    <div className='recipe-list'>
      <Swiper
        key={swiperKey}
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className='mySwiper'
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2.5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3.5,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4.5,
          },
        }}
      >
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id} className='flex justify-center'>
            <RecipeCard recipe={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecipeList;
