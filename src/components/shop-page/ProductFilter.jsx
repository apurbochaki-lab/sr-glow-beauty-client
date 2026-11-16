"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

export default function ProductFilter({ categories = [] }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // URL থেকে বর্তমান ভ্যালুগুলো নেওয়া
    const currentSearch = searchParams.get("search") || "";
    const currentCategory = searchParams.get("category") || "";
    const currentSort = searchParams.get("sort") || "";

    // সার্চ ইনপুটের জন্য স্টেট
    const [searchValue, setSearchValue] = useState(currentSearch);

    // URL পরিবর্তন হলে সার্চ ভ্যালু সিঙ্ক করা
    useEffect(() => {
        setSearchValue(currentSearch);
    }, [currentSearch]);

    // কুয়েরি আপডেট করার ফাংশন
    const updateQuery = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", "1"); // ফিল্টার চেঞ্জ হলে সবসময় ১ নম্বর পেজে ফিরে যাবে

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    // সার্চ সাবমিট হ্যান্ডলার (বাটনে ক্লিক বা Enter চাপলে)
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        updateQuery("search", searchValue);
    };

    // সার্চ ক্লিয়ার হ্যান্ডলার
    const handleClearSearch = () => {
        setSearchValue("");
        updateQuery("search", "");
    };

    return (
        <div className="w-full mb-8 flex flex-col lg:flex-row items-center justify-between gap-4 p-4 bg-white/60 dark:bg-[#30232B]/60 border border-[#762D49]/10 dark:border-[#EBC9D0]/15 rounded-2xl backdrop-blur-sm">

            {/* Search Box & Button */}
            <form onSubmit={handleSearchSubmit} className="w-full lg:max-w-md flex items-center gap-2">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-full border border-[#EBC9D0] bg-[#F9F3EF] text-[#30232B] px-4 py-2.5 pl-10 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#762D49] focus:border-transparent shadow-sm placeholder-[#30232B]/50 transition-all font-dm-sans text-sm dark:bg-[#493540]/40 dark:text-[#F9F3EF] dark:border-[#EBC9D0]/20"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#762D49]/50 w-4 h-4 dark:text-[#EBC9D0]/50" />

                    {searchValue && (
                        <button
                            type="button"
                            onClick={handleClearSearch}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#762D49]/50 hover:text-[#762D49] dark:text-[#EBC9D0]/50 dark:hover:text-[#EBC9D0] transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
                <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#762D49] text-[#F9F3EF] text-sm font-semibold rounded-xl hover:bg-[#5E2139] transition-colors shadow-sm font-dm-sans"
                >
                    Search
                </button>
            </form>

            {/* Dropdowns (Category & Sort) */}
            <div className="w-full lg:w-auto flex sm:flex-row items-center gap-3">

                {/* Category */}
                <select
                    value={currentCategory}
                    onChange={(e) => updateQuery("category", e.target.value)}
                    className="w-full sm:w-auto border border-[#EBC9D0] bg-[#F9F3EF] text-[#30232B] px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#762D49] focus:border-transparent shadow-sm cursor-pointer transition-all font-dm-sans text-sm dark:bg-[#493540]/40 dark:text-[#F9F3EF] dark:border-[#EBC9D0]/20"
                >
                    <option value="">All Categories</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                {/* Sort */}
                <select
                    value={currentSort}
                    onChange={(e) => updateQuery("sort", e.target.value)}
                    className="w-full sm:w-auto border border-[#EBC9D0] bg-[#F9F3EF] text-[#30232B] px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#762D49] focus:border-transparent shadow-sm cursor-pointer transition-all font-dm-sans text-sm dark:bg-[#493540]/40 dark:text-[#F9F3EF] dark:border-[#EBC9D0]/20"
                >
                    <option value="">Default Sort</option>
                    <option value="latest">Latest</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
}