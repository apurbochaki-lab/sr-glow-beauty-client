"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        id: 1,
        title: "Glow Serum Collection",
        image: "/images/trending-1.jpg",
        alt: "Glow serum collection banner with skincare bottles",
        link: "/shop/serum-collection",
    },
    {
        id: 2,
        title: "Matte Lipstick Edit",
        image: "/images/trending-2.jpg",
        alt: "Matte lipstick collection in berry plum shades",
        link: "/shop/matte-lipstick",
    },
    {
        id: 3,
        title: "Skincare Essentials",
        image: "/images/trending-3.jpg",
        alt: "Skincare essentials banner with moisturizer and serum",
        link: "/shop/skincare-essentials",
    },
    {
        id: 4,
        title: "Festive Beauty Box",
        image: "/images/trending-4.jpg",
        alt: "Limited edition festive beauty box with cosmetics",
        link: "/shop/festive-beauty-box",
    },
];

export default function TrendingSlider() {
    return (
        <section
            className="w-full bg-[#F9F3EF] py-10 md:py-10 dark:bg-[#30232B]"
            aria-labelledby="trending-heading"
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h2
                    id="trending-heading"
                    className="mb-6 text-2xl font-semibold text-[#30232B] md:mb-8 md:text-3xl dark:text-[#F9F3EF]"
                >
                    Trending Now
                </h2>

                {/* 
          suppressHydrationWarning={true} যোগ করা হয়েছে। 
          এটি Next.js-কে বলে যে এই কম্পোনেন্টের ভেতরে ছোটখাটো টাইম ডিফারেন্স এরর থাকলে সেটা ইগনোর করে রেন্ডার করতে।
        */}
                <div suppressHydrationWarning={true} className="w-full">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation, A11y]}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        a11y={{
                            enabled: true,
                            prevSlideMessage: "Previous banner",
                            nextSlideMessage: "Next banner",
                            paginationBulletMessage: "Go to slide {{index}}",
                            containerRoleDescriptionMessage: "Trending products carousel",
                        }}
                        // নিচের স্টাইলটি নিশ্চিত করবে যে Swiper ঠিকমতো জায়গা নিচ্ছে
                        style={{ width: "100%", height: "auto" }}
                        className="trending-swiper rounded-2xl overflow-hidden"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <Link
                                    href={slide.link}
                                    className="block w-full aspect-video relative bg-[#EBC9D0] dark:bg-[#30232B] overflow-hidden group"
                                    aria-label={`View ${slide.title}`}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        fill
                                        // object-contain দিলে ছবি কাটবে না
                                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 1280px) 100vw, 1280px"
                                        // priority দিলে লোড হতে দেরি হবে না
                                        priority={slide.id === 1}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}