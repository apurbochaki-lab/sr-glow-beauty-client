import { ChevronLeft } from "lucide-react";

export default function Loading() {
    return (
        <section className="min-h-screen w-full bg-[#F9F3EF] py-6 md:py-12 dark:bg-[#30232B] relative overflow-hidden">

            {/* Background Subtle Glow (Matches DetailsPage) */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#EBC9D0]/20 to-transparent dark:from-[#EBC9D0]/5 dark:to-transparent -z-10"></div>

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Back Button Skeleton */}
                <div className="mb-6 inline-flex items-center gap-2 bg-white/60 dark:bg-[#493540]/40 px-4 py-2 rounded-full border border-[#B98A52]/20 animate-pulse">
                    <ChevronLeft className="w-4 h-4 text-[#762D49]/30 dark:text-[#EBC9D0]/30" />
                    <div className="h-4 w-24 bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/20 rounded-md"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 animate-pulse">

                    {/* ─── Left Side: Image Gallery Skeleton ─── */}
                    <div className="flex flex-col gap-4">
                        {/* Main Image Box */}
                        <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-white/60 dark:bg-[#493540]/30 border border-[#EBC9D0]/60 dark:border-[#EBC9D0]/10 shadow-sm flex items-center justify-center">
                            <div className="w-1/2 h-1/2 bg-[#EBC9D0]/30 dark:bg-[#EBC9D0]/10 rounded-full blur-2xl"></div>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-3 overflow-hidden px-1">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl bg-white/60 dark:bg-[#493540]/30 border border-transparent"
                                />
                            ))}
                        </div>
                    </div>

                    {/* ─── Right Side: Product Info Skeleton ─── */}
                    <div className="flex flex-col">

                        {/* Category & Stock */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-6 w-24 rounded-full bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/20"></div>
                            <div className="h-6 w-20 rounded-full bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/15"></div>
                        </div>

                        {/* Title & Short Description */}
                        <div className="mb-6 space-y-3">
                            <div className="h-9 md:h-12 w-3/4 rounded-xl bg-[#EBC9D0]/60 dark:bg-[#EBC9D0]/20"></div>
                            <div className="h-9 md:h-12 w-1/2 rounded-xl bg-[#EBC9D0]/60 dark:bg-[#EBC9D0]/20"></div>
                            <div className="h-4 w-full rounded-md bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10 mt-4"></div>
                            <div className="h-4 w-5/6 rounded-md bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10"></div>
                        </div>

                        {/* Premium Pricing */}
                        <div className="mb-8 space-y-2">
                            <div className="h-10 md:h-12 w-40 rounded-xl bg-[#EBC9D0]/60 dark:bg-[#EBC9D0]/20"></div>
                            <div className="h-3 w-32 rounded-md bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10"></div>
                        </div>

                        {/* Elegant Divider */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EBC9D0]/60 to-transparent dark:via-[#EBC9D0]/20 my-6"></div>

                        {/* Buttons (Desktop/Tablet) */}
                        <div className="hidden md:flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex-1 h-14 rounded-2xl bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/20"></div>
                            <div className="flex-1 h-14 rounded-2xl bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/20"></div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/50 dark:bg-[#493540]/20 p-4 rounded-2xl border border-[#B98A52]/10">
                                    <div className="w-7 h-7 rounded-full bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/20 shrink-0"></div>
                                    <div className="space-y-2 w-full">
                                        <div className="h-3 w-20 rounded-md bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/20"></div>
                                        <div className="h-2 w-16 rounded-md bg-[#EBC9D0]/30 dark:bg-[#EBC9D0]/10"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Description & Details */}
                        <div className="border-t border-[#EBC9D0]/50 dark:border-[#EBC9D0]/10 pt-8 space-y-8">

                            {/* Description */}
                            <div className="space-y-3">
                                <div className="h-6 w-32 rounded-md bg-[#EBC9D0]/60 dark:bg-[#EBC9D0]/20"></div>
                                <div className="h-4 w-full rounded-md bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10"></div>
                                <div className="h-4 w-full rounded-md bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10"></div>
                                <div className="h-4 w-4/5 rounded-md bg-[#EBC9D0]/40 dark:bg-[#EBC9D0]/10"></div>
                            </div>

                            {/* Attributes Table */}
                            <div className="space-y-4">
                                <div className="h-6 w-40 rounded-md bg-[#EBC9D0]/60 dark:bg-[#EBC9D0]/20"></div>
                                <div className="rounded-2xl border border-[#EBC9D0]/40 dark:border-[#EBC9D0]/10 overflow-hidden">
                                    {[1, 2, 3].map((row) => (
                                        <div key={row} className={`flex w-full p-4 ${row % 2 === 0 ? "bg-[#F9F3EF]/50 dark:bg-[#493540]/20" : "bg-transparent"}`}>
                                            <div className="w-1/3 h-4 rounded-md bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/15"></div>
                                            <div className="w-2/3 h-4 rounded-md bg-[#EBC9D0]/30 dark:bg-[#EBC9D0]/10"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Usage Instructions Box */}
                            <div className="h-24 w-full rounded-2xl bg-[#EBC9D0]/20 dark:bg-[#EBC9D0]/5 border border-[#762D49]/5 dark:border-[#EBC9D0]/10"></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Sticky Mobile Buttons Skeleton */}
            <div className="md:hidden fixed bottom-20 left-0 right-0 bg-white/80 dark:bg-[#30232B]/80 backdrop-blur-xl border-t border-[#EBC9D0]/50 dark:border-[#EBC9D0]/10 p-3 flex gap-3 z-40 shadow-sm animate-pulse">
                <div className="flex-1 h-12 rounded-xl bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/20"></div>
                <div className="flex-1 h-12 rounded-xl bg-[#EBC9D0]/50 dark:bg-[#EBC9D0]/20"></div>
            </div>

            <div className="h-32 md:hidden"></div>
        </section>
    );
}