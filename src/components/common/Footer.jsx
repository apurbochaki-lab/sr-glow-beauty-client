import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {

    const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // Replace with your WhatsApp Business number

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hello SR Glow Beauty! I would like to know more about your products."
    )}`;

    return (
        <div>
            {/* Footer */}
            < footer className="bg-[#F2E7E4] dark:bg-[#201720]" >
                <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#762D49] font-serif text-base text-white">
                                SR
                            </span>
                            <span className="font-serif text-lg font-semibold text-[#762D49] dark:text-[#F0CAD8]">
                                SR Glow Beauty
                            </span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-[#75616B] dark:text-[#CFBDC7]">
                            A little glow, a lot of you. Find your beauty favourites and
                            make every routine your own.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:justify-items-end">
                        <div className="space-y-3">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.16em]">
                                Explore
                            </h3>
                            <Link className="block text-sm text-[#75616B] hover:text-[#762D49] dark:text-[#CFBDC7] dark:hover:text-[#EBC9D0]" href="/products">
                                All Products
                            </Link>
                            <Link className="block text-sm text-[#75616B] hover:text-[#762D49] dark:text-[#CFBDC7] dark:hover:text-[#EBC9D0]" href="/products?category=skincare">
                                Skincare
                            </Link>
                            <Link className="block text-sm text-[#75616B] hover:text-[#762D49] dark:text-[#CFBDC7] dark:hover:text-[#EBC9D0]" href="/products?category=makeup">
                                Makeup
                            </Link>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.16em]">
                                Get in touch
                            </h3>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-[#75616B] hover:text-[#762D49] dark:text-[#CFBDC7] dark:hover:text-[#EBC9D0]"
                            >
                                <MessageCircle size={15} /> WhatsApp
                            </a>
                            <a
                                href="#our-story"
                                className="block text-sm text-[#75616B] hover:text-[#762D49] dark:text-[#CFBDC7] dark:hover:text-[#EBC9D0]"
                            >
                                Our Story
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#762D49]/10 px-4 py-5 text-center text-[10px] text-[#8B6F7B] dark:border-white/10 dark:text-[#CFBDC7]">
                    © 2026 SR Glow Beauty. All rights reserved.
                </div>
            </footer >
        </div >
    );
};

export default Footer;