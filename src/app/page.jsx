import BrandNotes from '@/components/homepage/BrandNotes';
import TrendingSlider from '@/components/homepage/TrendingSilder';
import React from 'react';

const HomePage = () => {
  return (
    <section>
      <TrendingSlider />

      <BrandNotes />
    </section>
  );
};

export default HomePage;