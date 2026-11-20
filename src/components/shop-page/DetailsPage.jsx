"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Framer Motion ইম্পোর্ট
import { ChevronLeft, ShoppingBag, MessageCircle, CheckCircle2, XCircle, ShieldCheck, Truck, Sparkles } from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────
const smoothEase = [0.22, 1, 0.36, 1];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEase } }
};

const slideLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: smoothEase } }
};

const slideRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: smoothEase } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function DetailsPage({ product }) {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState(
        product.images?.find(img => img.isPrimary)?.url || product.images?.[0]?.url
    );

    // প্রাইস ক্যালকুলেশন
    const regularPrice = Number(product.pricing?.regularPrice);
    const salePrice = Number(product.pricing?.salePrice);

    const hasDiscount = salePrice && salePrice < regularPrice;
    const currentPrice = hasDiscount ? salePrice : regularPrice;
    const discountPercentage = hasDiscount ? Math.round(((regularPrice - salePrice) / regularPrice) * 100) : 0;

    // ওয়াটসঅ্যাপ মেসেজ জেনারেটর
    const handleWhatsAppOrder = () => {
        const phoneNumber = "8801853253943";
        const message = encodeURIComponent(
            `Hello SR Glow Beauty,\n\nI want to order this product:\n\n*Product:* ${product.productName}\n*Price:* ৳${currentPrice}\n*Link:* ${window.location.href}\n\nPlease confirm my order.`
        );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    // অ্যাট্রিবিউটস টেবিলের জন্য ডেটা ফরম্যাট
    const attributeLabels = {
        brand: "Brand",
        skinTypes: "Skin Types",
        concerns: "Concerns",
        ingredients: "Ingredients",
        volume: "Volume",
        origin: "Origin"
    };

    return (
        <section className="min-h-screen w-full bg-[#F9F3EF] py-6 md:py-12 dark:bg-[#30232B] relative overflow-hidden">

            {/* Background Subtle Glow (Premium Touch) */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#EBC9D0]/20 to-transparent dark:from-[#EBC9D0]/5 dark:to-transparent -z-10"></div>

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <motion.button
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    onClick={() => router.back()}
                    className="group mb-6 inline-flex items-center gap-2 bg-white/60 dark:bg-[#493540]/40 backdrop-blur-md px-4 py-2 rounded-full border border-[#B98A52]/20 text-[#762D49] hover:bg-white dark:text-[#EBC9D0] dark:hover:bg-[#493540]/60 transition-all font-dm-sans text-sm font-semibold shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Shop
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                    {/* ─── Left Side: Image Gallery ─── */}
                    <motion.div
                        className="flex flex-col gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={slideLeft}
                    >
                        {/* Main Image */}
                        <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-gradient-to-tr from-white to-[#F9F3EF] dark:from-[#493540]/40 dark:to-[#30232B] border border-[#EBC9D0]/60 dark:border-[#EBC9D0]/10 shadow-[0_8px_30px_rgba(118,45,73,0.06)] group">
                            <Image
                                src={selectedImage}
                                alt={product.productName}
                                fill
                                priority
                                className="object-contain p-6 md:p-10 transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Premium Discount Badge */}
                            {hasDiscount && (
                                <div className="absolute top-5 left-5 bg-gradient-to-r from-[#762D49] to-[#5E2139] text-[#F9F3EF] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10 border border-[#B98A52]/30">
                                    <Sparkles className="w-3 h-3 text-[#B98A52]" />
                                    {discountPercentage}% OFF
                                </div>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {product.images?.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1">
                                {product.images.map((img, idx) => (
                                    <motion.button
                                        key={idx}
                                        onClick={() => setSelectedImage(img.url)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === img.url
                                            ? "border-[#762D49] shadow-md dark:border-[#EBC9D0]"
                                            : "border-transparent bg-white/40 hover:border-[#B98A52]/50 dark:bg-[#493540]/20 opacity-70 hover:opacity-100"
                                            }`}
                                    >
                                        <Image src={img.url} alt={img.alt} fill className="object-contain p-2" />
                                    </motion.button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* ─── Right Side: Product Info ─── */}
                    <motion.div
                        className="flex flex-col"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >

                        {/* Category & Stock */}
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-[#EBC9D0]/30 text-[#762D49] dark:bg-[#EBC9D0]/10 dark:text-[#EBC9D0] text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#762D49]/10 dark:border-[#EBC9D0]/20">
                                {product.category}
                            </span>
                            {product.isAvailableStock ? (
                                <span className="flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full dark:text-green-400 dark:bg-green-900/20">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
                                </span>
                            ) : (
                                <span className="flex items-center gap-1.5 text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full dark:text-red-400 dark:bg-red-900/20">
                                    <XCircle className="w-3.5 h-3.5" /> Out of Stock
                                </span>
                            )}
                        </motion.div>

                        {/* Title & Short Description */}
                        <motion.h1 variants={fadeUp} className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-[#30232B] dark:text-[#F9F3EF] leading-[1.2] mb-3">
                            {product.productName}
                        </motion.h1>

                        <motion.p variants={fadeUp} className="font-dm-sans text-[#30232B]/60 dark:text-[#EBC9D0]/70 text-sm md:text-base mb-6 leading-relaxed">
                            {product.shortDescription}
                        </motion.p>

                        {/* Premium Pricing */}
                        <motion.div variants={fadeUp} className="mb-8">
                            <div className="flex items-baseline gap-3">
                                <span className="font-dm-sans text-3xl md:text-4xl font-extrabold text-[#762D49] dark:text-[#EBC9D0]">
                                    ৳{currentPrice}
                                </span>
                                {Boolean(hasDiscount) && (
                                    <span className="font-dm-sans text-base md:text-lg font-medium text-[#30232B]/40 line-through dark:text-[#EBC9D0]/40">
                                        ৳{regularPrice}
                                    </span>
                                )}
                            </div>
                            <p className="text-[10px] md:text-xs text-[#30232B]/50 dark:text-[#EBC9D0]/50 mt-1 font-dm-sans tracking-wide">Inclusive of all taxes</p>
                        </motion.div>

                        {/* Elegant Divider */}
                        <motion.div variants={fadeUp} className="h-px w-full bg-gradient-to-r from-transparent via-[#EBC9D0] to-transparent dark:via-[#EBC9D0]/20 my-6"></motion.div>

                        {/* Buttons (Tablet & Desktop) */}
                        <motion.div variants={fadeUp} className="hidden md:flex flex-col sm:flex-row gap-4 mb-8">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={!product.isAvailableStock}
                                onClick={() => router.push(`/checkout?product=${product.slug}`)}
                                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#762D49] to-[#5E2139] text-[#F9F3EF] px-6 py-4 rounded-2xl font-dm-sans font-bold text-base hover:shadow-[0_8px_20px_rgba(118,45,73,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
                            >
                                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Order Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleWhatsAppOrder}
                                className="flex-1 flex items-center justify-center gap-2 bg-[#1FA855] text-white px-6 py-4 rounded-2xl font-dm-sans font-bold text-base hover:bg-[#158040] hover:shadow-[0_8px_20px_rgba(31,168,85,0.2)] transition-all group cursor-pointer"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Order from WhatsApp
                            </motion.button>
                        </motion.div>

                        {/* Trust Badges - Animate on Scroll */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                            className="grid grid-cols-2 gap-3 mb-8"
                        >
                            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-3 bg-white/50 dark:bg-[#493540]/20 p-4 rounded-2xl border border-[#B98A52]/20 shadow-sm backdrop-blur-sm">
                                <ShieldCheck className="w-7 h-7 text-[#B98A52] shrink-0" />
                                <div>
                                    <h4 className="font-dm-sans text-xs md:text-sm font-bold text-[#30232B] dark:text-[#F9F3EF]">100% Authentic</h4>
                                    <p className="text-[10px] text-[#30232B]/60 dark:text-[#EBC9D0]/60 mt-0.5">Direct from brand</p>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-3 bg-white/50 dark:bg-[#493540]/20 p-4 rounded-2xl border border-[#B98A52]/20 shadow-sm backdrop-blur-sm">
                                <Truck className="w-7 h-7 text-[#B98A52] shrink-0" />
                                <div>
                                    <h4 className="font-dm-sans text-xs md:text-sm font-bold text-[#30232B] dark:text-[#F9F3EF]">Fast Delivery</h4>
                                    <p className="text-[10px] text-[#30232B]/60 dark:text-[#EBC9D0]/60 mt-0.5">Inside Dhaka 24h</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Description & Details - Animate on Scroll */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            className="border-t border-[#EBC9D0]/50 dark:border-[#EBC9D0]/10 pt-8"
                        >
                            <h3 className="font-playfair text-2xl font-semibold text-[#30232B] dark:text-[#F9F3EF] mb-4">Description</h3>
                            <p className="font-dm-sans text-sm text-[#30232B]/70 dark:text-[#EBC9D0]/80 leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Premium Attributes Table */}
                            {product.attributes && Object.keys(product.attributes).length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: smoothEase }}
                                    className="mb-8"
                                >
                                    <h3 className="font-playfair text-2xl font-semibold text-[#30232B] dark:text-[#F9F3EF] mb-4">Specifications</h3>
                                    <div className="overflow-hidden rounded-2xl border border-[#EBC9D0]/60 dark:border-[#EBC9D0]/15 bg-white/40 dark:bg-[#493540]/10 backdrop-blur-sm">
                                        <table className="w-full text-left font-dm-sans text-sm">
                                            <tbody>
                                                {Object.entries(product.attributes).map(([key, value], index) => {
                                                    if (!value || (Array.isArray(value) && value.length === 0)) return null;

                                                    const formattedValue = Array.isArray(value) ? value.join(", ") : value;

                                                    return (
                                                        <tr key={key} className={index % 2 === 0 ? "bg-transparent" : "bg-[#F9F3EF]/50 dark:bg-[#493540]/20"}>
                                                            <td className="px-5 py-3.5 font-semibold text-[#762D49] dark:text-[#EBC9D0] w-1/3 border-r border-[#EBC9D0]/40 dark:border-[#EBC9D0]/10">
                                                                {attributeLabels[key] || key}
                                                            </td>
                                                            <td className="px-5 py-3.5 text-[#30232B]/80 dark:text-[#F9F3EF]/80">
                                                                {formattedValue}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            )}

                            {/* Usage Instructions */}
                            {product.usageInstructions && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, ease: smoothEase }}
                                    className="bg-[#EBC9D0]/20 dark:bg-[#EBC9D0]/5 p-5 rounded-2xl border border-[#762D49]/10 dark:border-[#EBC9D0]/15 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#B98A52]"></div>
                                    <h4 className="font-dm-sans font-bold text-[#30232B] dark:text-[#F9F3EF] mb-2 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-[#B98A52]" /> How to use
                                    </h4>
                                    <p className="font-dm-sans text-sm text-[#30232B]/70 dark:text-[#EBC9D0]/80 leading-relaxed">
                                        {product.usageInstructions}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Sticky Mobile Buttons (Bottom) - Animate Slide up */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                className="md:hidden fixed bottom-20 left-0 right-0 bg-white/80 dark:bg-[#30232B]/80 backdrop-blur-xl border-t border-[#EBC9D0]/50 dark:border-[#EBC9D0]/10 p-3 flex gap-3 z-40 shadow-[0_-10px_40px_rgba(48,35,43,0.08)]"
            >
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(`/checkout?product=${product.slug}`)}
                    disabled={!product.isAvailableStock}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#762D49] to-[#5E2139] text-[#F9F3EF] px-4 py-3.5 rounded-xl font-dm-sans font-bold text-sm disabled:opacity-50"
                >
                    <ShoppingBag className="w-4 h-4" /> Order Now
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsAppOrder}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1FA855] text-white px-4 py-3.5 rounded-xl font-dm-sans font-bold text-sm"
                >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                </motion.button>
            </motion.div>

            {/* Mobile Button Padding Bottom */}
            <div className="h-32 md:hidden"></div>
        </section>
    );
}