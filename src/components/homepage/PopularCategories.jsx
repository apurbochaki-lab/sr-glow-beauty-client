"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Palette, Droplets, ShoppingBag, Gem, Watch } from "lucide-react";

const categories = [
    { name: "Combo Package", desc: "Best value bundles", icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Beauty Cosmetic", desc: "Makeup essentials", icon: <Palette className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Skin Care", desc: "Glow & hydrate", icon: <Droplets className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Shopping & Retail", desc: "Everyday essentials", icon: <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Jewellery", desc: "Elegant accessories", icon: <Gem className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Watch", desc: "Timeless pieces", icon: <Watch className="w-6 h-6 md:w-8 md:h-8" /> },
];

// ─── Reusable Animation Variants ────────────────────────────────────────────
const sectionFadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const cardFadeUp = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function PopularCategories() {
    return (
        <section className="py-6 md:py-20 bg-[#F9F3EF] dark:bg-[#30232B]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                {/* হেডিং সেকশন */}
                <motion.div
                    className="text-left container mx-auto mb-5 md:mb-8"
                    variants={sectionFadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-left text-2xl md:text-4xl font-bold text-[#30232B] dark:text-[#F9F3EF] mb-3 md:mb-4 font-dm-sans">
                        Categories
                    </h2>
                    {/* <p className="text-[#30232B]/70 dark:text-[#F9F3EF]/70 text-sm md:text-lg font-dm-sans">
                        Explore our premium collections tailored for your beauty and lifestyle needs.
                    </p> */}
                </motion.div>

                {/* গ্রিড কন্টেইনার: মোবাইলে ৩ কলাম (grid-cols-3), ডেস্কটপে ৬ বা ৩ কলাম */}
                <motion.div
                    className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {categories.map((cat, i) => (
                        <motion.div key={i} variants={cardFadeUp}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-full">
                                <Link
                                    href={`/shop?category=${cat.name.replace(' ', '+')}`}
                                    className="group h-full p-3 md:p-5 bg-[#EBC9D0]/30 dark:bg-[#EBC9D0]/10 border border-[#EBC9D0] rounded-xl md:rounded-2xl hover:border-[#762D49] dark:hover:border-[#B98A52] hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 md:gap-3"
                                >
                                    {/* আইকন কন্টেইনার */}
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white dark:bg-[#30232B] rounded-full shadow-sm flex items-center justify-center text-[#762D49] dark:text-[#B98A52] group-hover:scale-110 transition-transform duration-300">
                                        {cat.icon}
                                    </div>

                                    {/* টেক্সট */}
                                    <div>
                                        <h3 className="text-xs md:text-base font-semibold text-[#30232B] dark:text-[#F9F3EF] group-hover:text-[#762D49] dark:group-hover:text-[#B98A52] transition-colors font-dm-sans leading-tight">
                                            {cat.name}
                                        </h3>
                                        {/* মোবাইলে ডেসক্রিপশন হাইড করা হয়েছে যাতে সুন্দর দেখায় */}
                                        <p className="hidden md:block text-xs text-[#30232B]/60 dark:text-[#F9F3EF]/60 mt-1 font-dm-sans">
                                            {cat.desc}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}