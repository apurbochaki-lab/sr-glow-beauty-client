"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // যদি ১ পেজ বা তার কম থাকে, পেজিনেশন দেখানোর দরকার নেই
    if (totalPages <= 1) return null;

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    // পেজ নাম্বার জেনারেট করার লজিক (যেমন: 1, 2, 3 ...)
    const generatePageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-10 md:mt-14 font-dm-sans">
            {/* Previous Button */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#EBC9D0] bg-white text-[#30232B] hover:bg-[#EBC9D0] hover:text-[#762D49] disabled:opacity-50 disabled:cursor-not-allowed transition-all dark:bg-[#30232B] dark:border-[#EBC9D0]/20 dark:text-[#F9F3EF] dark:hover:bg-[#762D49]"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            {generatePageNumbers().map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-semibold transition-all ${currentPage === page
                            ? "bg-[#762D49] text-[#F9F3EF] border border-[#762D49] shadow-md"
                            : "bg-white text-[#30232B] border border-[#EBC9D0] hover:bg-[#EBC9D0]/50 dark:bg-[#30232B] dark:border-[#EBC9D0]/20 dark:text-[#F9F3EF] dark:hover:bg-[#EBC9D0]/10"
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#EBC9D0] bg-white text-[#30232B] hover:bg-[#EBC9D0] hover:text-[#762D49] disabled:opacity-50 disabled:cursor-not-allowed transition-all dark:bg-[#30232B] dark:border-[#EBC9D0]/20 dark:text-[#F9F3EF] dark:hover:bg-[#762D49]"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}