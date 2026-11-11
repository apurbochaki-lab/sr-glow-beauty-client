"use client";

import Link from "next/link";
import {
    ArrowRight,
    MessageCircle,
    ShieldCheck,
    Truck
} from "lucide-react";

const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // Replace with your WhatsApp Business number



export default function BrandNotes() {

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hello SR Glow Beauty! I would like to know more about your products."
    )}`;

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#F9F3EF] text-[#30232B] dark:bg-[#171117] dark:text-[#F9F3EF]">
            {/* Announcement */}
            {/* <div className="block lg:hidden bg-[#762D49] px-3 py-2.5 text-center text-[10px] font-medium tracking-[0.12em] text-white sm:text-xs">
                BEAUTY THAT FEELS LIKE YOU
                <span className="mx-2 text-[#EBC9D0]">✦</span>
                CASH ON DELIVERY AVAILABLE
            </div> */}


            {/* Brand story */}
            <section
                id="our-story"
                className="relative overflow-hidden bg-[#762D49] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8"
            >
                <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10 sm:h-96 sm:w-96" />
                <div className="absolute -right-2 -top-10 h-44 w-44 rounded-full border border-white/10 sm:h-72 sm:w-72" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
                    <div>
                        <p className="text-[10px] font-semibold tracking-[0.24em] text-[#EBC9D0]">
                            A NOTE FROM SR GLOW BEAUTY
                        </p>
                        <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight sm:text-5xl">
                            Beauty is personal.
                            <br />
                            Make it yours.
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                            Your routine should feel good, work for your lifestyle and
                            reflect who you are. Discover your favourites with SR Glow
                            Beauty, and get in touch whenever you need help with an order.
                        </p>

                        <Link
                            href="/products"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F9F3EF] px-6 py-3.5 text-sm font-semibold text-[#762D49] transition hover:bg-[#EBC9D0]"
                        >
                            Discover your favourites <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust information */}
            <section className="border-b border-[#762D49]/10 bg-white/50 dark:border-white/10 dark:bg-white/2">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-9 sm:grid-cols-3 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EBC9D0]/60 text-[#762D49] dark:bg-[#762D49]/40 dark:text-[#EBC9D0]">
                            <Truck size={20} />
                        </span>
                        <div>
                            <p className="text-sm font-semibold">Cash on Delivery</p>
                            <p className="mt-1 text-xs text-[#75616B] dark:text-[#CFBDC7]">
                                Pay when your order arrives
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EBC9D0]/60 text-[#762D49] dark:bg-[#762D49]/40 dark:text-[#EBC9D0]">
                            <MessageCircle size={20} />
                        </span>
                        <div>
                            <p className="text-sm font-semibold">Order Assistance</p>
                            <p className="mt-1 text-xs text-[#75616B] dark:text-[#CFBDC7]">
                                We&apos;re here to help on WhatsApp
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EBC9D0]/60 text-[#762D49] dark:bg-[#762D49]/40 dark:text-[#EBC9D0]">
                            <ShieldCheck size={20} />
                        </span>
                        <div>
                            <p className="text-sm font-semibold">Clear Order Details</p>
                            <p className="mt-1 text-xs text-[#75616B] dark:text-[#CFBDC7]">
                                Confirm prices and delivery before dispatch
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
