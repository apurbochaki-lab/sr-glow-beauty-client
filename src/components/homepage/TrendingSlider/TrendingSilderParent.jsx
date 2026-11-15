import React, { Suspense } from 'react';
import TrendingSlider from './TrendingSilder';

const TrendingSliderParent = ({ timestamp }) => {
    return (
        <div>


            <Suspense fallback={<time>…</time>}>
                <TrendingSlider timestamp={timestamp} />
            </Suspense>
        </div>
    );
};

export default TrendingSliderParent;