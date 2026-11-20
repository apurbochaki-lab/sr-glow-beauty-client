export default function Loading() {
    // মেইন গ্রিডের মতো ৮টি কার্ডের স্কেলেটন তৈরি করা হচ্ছে
    const skeletonCards = Array.from({ length: 8 });

    return (
        <section className="min-h-screen w-full bg-[#F9F3EF] py-8 sm:py-10 lg:py-10 dark:bg-[#30232B]">
            <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8">

                {/* ১. হেডিং সেকশন স্কেলেটন */}
                <div className="mb-7 flex flex-col items-center sm:mb-10 animate-pulse">
                    {/* ছোট টেক্সট (SR Glow Beauty) */}
                    <div className="mb-3 h-3 w-28 rounded-full bg-[#EBC9D0] dark:bg-[#EBC9D0]/20 sm:h-4 sm:w-32" />

                    {/* মেইন হেডিং (Explore Our Collection) */}
                    <div className="h-7 w-64 rounded-lg bg-[#EBC9D0] dark:bg-[#EBC9D0]/20 sm:h-9 sm:w-80 lg:h-10 lg:w-96" />

                    {/* সাব-হেডিং (Subtitle) */}
                    <div className="mt-3 h-3 w-48 rounded-md bg-[#EBC9D0]/60 dark:bg-[#EBC9D0]/10 sm:h-4 sm:w-64" />

                    {/* গোল্ডেন ডিভাইডার */}
                    <div className="mt-4 h-[2px] w-12 rounded-full bg-[#B98A52]/30" />
                </div>

                {/* ২. প্রোডাক্ট গ্রিড স্কেলেটন */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:gap-6">
                    {skeletonCards.map((_, index) => (
                        <div
                            key={index}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#762D49]/10 bg-white shadow-[0_4px_20px_rgba(48,35,43,0.04)] dark:border-[#EBC9D0]/15 dark:bg-[#30232B]"
                        >
                            {/* ইমেজ বক্স (aspect-square) */}
                            <div className="relative aspect-square w-full bg-[#F9F3EF] p-4 dark:bg-[#493540]/40 sm:p-6 animate-pulse">
                                {/* ক্যাটাগরি ব্যাজ প্লেসহোল্ডার */}
                                <div className="absolute left-3 top-3 h-6 w-20 rounded-full bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/10" />

                                {/* মেইন ইমেজ প্লেসহোল্ডার */}
                                <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#EBC9D0]/30 dark:bg-[#EBC9D0]/5" />
                            </div>

                            {/* কন্টেন্ট এরিয়া */}
                            <div className="flex flex-1 flex-col p-4 sm:p-5 animate-pulse">

                                {/* টাইটেল (Title) */}
                                <div className="mb-1">
                                    <div className="h-5 w-full rounded-md bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/10 sm:h-6" />
                                    <div className="mt-2 h-5 w-2/3 rounded-md bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/10 sm:h-6" />
                                </div>

                                {/* ডেসক্রিপশন (Description) */}
                                <div className="mb-3 mt-2 space-y-2">
                                    <div className="h-3 w-full rounded-md bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10 sm:h-4" />
                                    <div className="h-3 w-4/5 rounded-md bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10 sm:h-4" />
                                </div>

                                {/* আপডেট ডেট (Updated Date) */}
                                <div className="mb-3 h-2 w-24 rounded-md bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10 sm:h-3" />

                                {/* প্রাইস এবং বাটন এরিয়া (নিচে ফিক্সড থাকবে) */}
                                <div className="mt-auto border-t border-[#762D49]/10 pt-3 dark:border-[#EBC9D0]/10">
                                    <div className="flex flex-col gap-3">
                                        {/* প্রাইস */}
                                        <div className="h-6 w-20 rounded-md bg-[#EBC9D0]/60 dark:bg-[#EBC9D0]/20 sm:h-7" />

                                        {/* বাটন */}
                                        <div className="h-10 w-full rounded-lg bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}