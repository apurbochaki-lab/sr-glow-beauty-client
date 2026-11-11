import Announcement from '@/components/homepage/Announcement';
import BrandNotes from '@/components/homepage/BrandNotes';
import PopularCategories from '@/components/homepage/PopularCategories';
import TrendingSlider from '@/components/homepage/TrendingSilder';
import React from 'react';

const HomePage = () => {
  return (
    <section>
      <Announcement />

      <TrendingSlider />
      <PopularCategories />

      <BrandNotes />
    </section>
  );
};

export default HomePage;