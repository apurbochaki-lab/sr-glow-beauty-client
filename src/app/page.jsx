import Announcement from '@/components/homepage/Announcement';
import BrandNotes from '@/components/homepage/BrandNotes';
import PopularCategories from '@/components/homepage/PopularCategories';
import TrendingSliderParent from '@/components/homepage/TrendingSlider/TrendingSilderParent';
import React from 'react';

const HomePage = () => {
  return (
    <section>
      <Announcement />

      <TrendingSliderParent />
      <PopularCategories />

      <BrandNotes />
    </section>
  );
};

export default HomePage;