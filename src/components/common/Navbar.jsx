"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, MessageCircle, LayoutDashboard } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    // Session o Role-er dummy data
    const session = true;
    const role = "Admin";

    // Ekhon shudhu isAdmin true holei Dashboard dekhabe
    const isAdmin = session && role === "Admin";

    // useMemo bebohar kore conditional routing
    const navLinks = useMemo(() => {
        const links = [
            { name: "Home", href: "/", icon: <Home size={20} /> },
            { name: "Shop", href: "/shop", icon: <ShoppingBag size={20} /> },
            { name: "WhatsApp", href: "/whatsapp", icon: <MessageCircle size={20} /> },
        ];

        if (isAdmin) {
            links.push({
                name: "Dashboard",
                href: "/dashboard",
                icon: <LayoutDashboard size={20} />,
            });
        }

        return links;
    }, [isAdmin]);

    return (
        <>
            {/* =========================================
          Desktop View: Normal Full-Width Header
          (Brand Logo Left, Links Middle, Contact Button Right)
          ========================================= */}

            {/* Announcement */}
            <div className="hidden lg:block bg-[#762D49] px-3 py-2.5 text-center text-[10px] font-medium tracking-[0.12em] text-white sm:text-xs">
                BEAUTY THAT FEELS LIKE YOU
                <span className="mx-2 text-[#EBC9D0]">✦</span>
                CASH ON DELIVERY AVAILABLE
            </div>

            <header className="sticky top-0 z-50 hidden md:flex items-center justify-between px-10 py-5 bg-[#F9F3EF] border-b border-[#EBC9D0]">

                {/* Left Side: Brand Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="bg-[#762D49] text-[#F9F3EF] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg tracking-wide shadow-sm">
                        SR
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#30232B] font-serif font-bold text-xl leading-tight">SR Glow Beauty</span>
                        <span className="text-[#B98A52] text-[10px] font-medium tracking-[0.2em] uppercase">Your Beauty Ritual</span>
                    </div>
                </Link>

                {/* Middle: Routes */}
                <nav className="flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive
                                    ? "text-[#762D49] border-b-2 border-[#762D49] pb-1"
                                    : "text-[#30232B] hover:text-[#762D49]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side: Contact Us Button */}
                <div>
                    <Link
                        href="/contact"
                        className="bg-[#762D49] text-[#F9F3EF] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#30232B] hover:shadow-md transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </header>

            {/* =========================================
          Mobile & Tablet View: Bottom Floating Navbar
          ========================================= */}
            <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
                <nav className="bg-[#F9F3EF] border border-[#EBC9D0] px-6 py-3 rounded-full flex justify-between items-center shadow-lg">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex flex-col items-center gap-1 transition-colors duration-200 ${isActive
                                    ? "text-[#762D49]"
                                    : "text-[#30232B] hover:text-[#762D49]"
                                    }`}
                            >
                                {link.icon}
                                <span className="text-[10px] font-medium">{link.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}