"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

const priceFormatter = new Intl.NumberFormat("en-BD", {
    maximumFractionDigits: 0,
});

function formatPrice(price) {
    const amount = Number(price);
    if (!Number.isFinite(amount)) return null;
    return `৳ ${priceFormatter.format(amount)}`;
}

function formatUpdatedDate(value) {
    if (!value) return null;
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    const parts = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "Asia/Dhaka",
    }).formatToParts(date);
    const day = parts.find((part) => part.type === "day")?.value;
    const month = parts.find((part) => part.type === "month")?.value;
    const year = parts.find((part) => part.type === "year")?.value;
    return {
        label: `${day} ${month}, ${year}`,
        iso: date.toISOString(),
    };
}

export default function ProductCard({
    product,
    productHref = "/shop",
    index = 0,
    isPriority = false,
}) {
    const prefersReducedMotion = useReducedMotion();
    const {
        productName,
        shortDescription,
        category,
        images = [],
        pricing = {},
        updatedAt,
    } = product;

    const primaryImage = images.find((image) => image.isPrimary === true) || images[0];
    const imageUrl = primaryImage?.url;
    const imageAlt = primaryImage?.alt || productName || "Product image";

    const regularPrice = Number(pricing.regularPrice);
    const salePrice = pricing.salePrice === null || pricing.salePrice === undefined ? null : Number(pricing.salePrice);
    const currentPrice = salePrice !== null && Number.isFinite(salePrice) ? salePrice : regularPrice;
    const hasDiscount = salePrice !== null && Number.isFinite(salePrice) && Number.isFinite(regularPrice) && salePrice < regularPrice;

    const formattedCurrentPrice = formatPrice(currentPrice);
    const formattedRegularPrice = formatPrice(regularPrice);
    const formattedDate = formatUpdatedDate(updatedAt);

    return (
        <m.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.28, delay: Math.min(index * 0.035, 0.18), ease: "easeOut" }}
            className="
                group flex h-full flex-col overflow-hidden
                rounded-2xl border border-[#762D49]/10
                bg-white
                shadow-[0_4px_20px_rgba(48,35,43,0.04)]
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[#B98A52]/40
                hover:shadow-[0_12px_32px_rgba(48,35,43,0.08)]
                dark:border-[#EBC9D0]/15
                dark:bg-[#30232B]
                dark:shadow-black/20
                motion-reduce:transform-none
                motion-reduce:transition-none
            "
        >
            {/* Product Image Area */}
            {/* aspect-square দেওয়া হয়েছে যাতে কার্ড লম্বা না হয় এবং প্রোডাক্ট সুন্দর দেখায় */}
            <div className="relative aspect-square w-full overflow-hidden bg-[#F9F3EF] dark:bg-[#493540]/40 p-4 sm:p-6">

                {/* Category Badge - Glassmorphism style */}
                {category && (
                    <span className="
                        absolute left-3 top-3 z-10
                        rounded-full bg-white/90 px-3 py-1
                        text-[10px] font-bold uppercase tracking-wider text-[#762D49]
                        shadow-sm backdrop-blur-md
                        dark:bg-[#30232B]/80 dark:text-[#EBC9D0]
                        sm:text-xs
                    ">
                        {category}
                    </span>
                )}

                <Link href={productHref} aria-label={`View ${productName}`} className="block h-full w-full relative">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={imageAlt}
                            fill
                            priority={isPriority}
                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                            // object-contain এবং hover এ ZOOM effect
                            className="
                                object-contain 
                                transition-transform duration-500 ease-out
                                group-hover:scale-110
                                motion-reduce:transition-none
                            "
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center text-xs text-[#30232B]/60 dark:text-[#F9F3EF]/60">
                            Image unavailable
                        </div>
                    )}
                </Link>
            </div>

            {/* Product Information Area */}
            <div className="flex flex-1 flex-col p-4 sm:p-5">

                {/* Title - আরও বড় এবং বোল্ড করা হয়েছে */}
                <Link href={productHref} className="mb-1">
                    <h3 className="
                        line-clamp-2 min-h-[3rem]
                        font-dm-sans text-base font-bold leading-snug
                        text-[#30232B]
                        transition-colors
                        group-hover:text-[#762D49]
                        dark:text-[#F9F3EF]
                        dark:group-hover:text-[#EBC9D0]
                        sm:text-lg
                    ">
                        {productName}
                    </h3>
                </Link>

                {/* Short Description */}
                {shortDescription && (
                    <p className="
                        mb-3 line-clamp-2 min-h-[2.5rem]
                        font-dm-sans text-xs leading-relaxed
                        text-[#30232B]/60
                        dark:text-[#EBC9D0]/70
                        sm:text-sm
                    ">
                        {shortDescription}
                    </p>
                )}

                {/* Updated Date - একদম নিচে সাটলি রাখা হয়েছে */}
                {formattedDate && (
                    <time dateTime={formattedDate.iso} className="
                        mb-3 block font-dm-sans
                        text-[10px] font-medium text-[#30232B]/40
                        dark:text-[#EBC9D0]/50
                    ">
                        Updated: {formattedDate.label}
                    </time>
                )}

                {/* Price and Button Section */}
                <div className="mt-auto pt-3 border-t border-[#762D49]/10 dark:border-[#EBC9D0]/10">
                    <div className="flex flex-col gap-3">

                        {/* Pricing */}
                        <div className="flex items-baseline gap-2">
                            {formattedCurrentPrice && (
                                <span className="font-dm-sans text-xl font-extrabold tracking-tight text-[#762D49] dark:text-[#EBC9D0] sm:text-2xl">
                                    {formattedCurrentPrice}
                                </span>
                            )}
                            {hasDiscount && formattedRegularPrice && (
                                <span className="font-dm-sans text-xs font-medium text-[#30232B]/40 line-through dark:text-[#EBC9D0]/50 sm:text-sm">
                                    {formattedRegularPrice}
                                </span>
                            )}
                        </div>

                        {/* Buy Now Button */}
                        <Link
                            href={productHref}
                            className="
                                flex w-full items-center justify-center 
                                rounded-lg bg-[#762D49] px-4 py-2.5
                                font-dm-sans text-sm font-semibold tracking-wide text-[#F9F3EF]
                                shadow-sm transition-all duration-300
                                hover:bg-[#5E2139] hover:shadow-md
                                active:scale-[0.98]
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98A52] focus-visible:ring-offset-2
                                dark:focus-visible:ring-offset-[#30232B]
                            "
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </m.article>
    );
}