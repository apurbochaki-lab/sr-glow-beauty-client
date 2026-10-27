
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Heart,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // Replace with your WhatsApp Business number

const categories = [
  {
    name: "Skincare",
    subtitle: "Your daily glow ritual",
    slug: "skincare",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Makeup",
    subtitle: "Express your beauty",
    slug: "makeup",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Haircare",
    subtitle: "Love every strand",
    slug: "haircare",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85",
  },
];

const products = [
  {
    id: "p101",
    slug: "daily-glow-serum",
    name: "Daily Glow Serum",
    category: "Skincare",
    price: 1290,
    previousPrice: 1490,
    tag: "GLOW ESSENTIAL",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "p102",
    slug: "skin-barrier-cream",
    name: "Skin Barrier Cream",
    category: "Skincare",
    price: 890,
    previousPrice: null,
    tag: "DAILY CARE",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "p103",
    slug: "rose-lip-color",
    name: "Rose Lip Color",
    category: "Makeup",
    price: 590,
    previousPrice: 690,
    tag: "BEAUTY PICK",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: "p104",
    slug: "daily-face-care",
    name: "Daily Face Care",
    category: "Skincare",
    price: 750,
    previousPrice: null,
    tag: "SELF-CARE",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=85",
  },
];

// Product card component 
function ProductCard({ product }) {
  // console.log("PRODUCT", product)
  return (
    <article className="group min-w-0">
      <Link
        href={`/products/${product.slug}`}
        className="relative block overflow-hidden rounded-2xl bg-[#F0E5E2] dark:bg-[#30232B]"
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-[#F9F3EF]/95 px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] text-[#762D49]">
          {product.tag}
        </span>
      </Link>

      <div className="space-y-2 pt-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#8B6F7B] dark:text-[#D5B9C5]">
          {product.category}
        </p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-sm text-[#30232B] transition hover:text-[#762D49] dark:text-[#F9F3EF] dark:hover:text-[#EBC9D0] sm:text-base">
            {product.name}
          </h3>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-sm text-[#762D49] dark:text-[#EBC9D0]">
            ৳{product.price.toLocaleString("en-BD")}
          </span>
          {product.previousPrice && (
            <span className="text-xs text-stone-500 line-through">
              ৳{product.previousPrice.toLocaleString("en-BD")}
            </span>
          )}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[#762D49]/25 py-2.5 text-xs font-semibold text-[#762D49] transition hover:bg-[#762D49] hover:text-white dark:border-[#EBC9D0]/30 dark:text-[#EBC9D0] dark:hover:bg-[#762D49] dark:hover:text-white"
        >
          Order Now <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello SR Glow Beauty! I would like to know more about your products."
  )}`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F9F3EF] text-[#30232B] dark:bg-[#171117] dark:text-[#F9F3EF]">
      {/* Announcement */}
      <div className="block lg:hidden bg-[#762D49] px-3 py-2.5 text-center text-[10px] font-medium tracking-[0.12em] text-white sm:text-xs">
        BEAUTY THAT FEELS LIKE YOU
        <span className="mx-2 text-[#EBC9D0]">✦</span>
        CASH ON DELIVERY AVAILABLE
      </div>

      {/* Header */}
      {/* <header className="sticky top-0 z-40 border-b border-[#762D49]/10 bg-[#F9F3EF]/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#171117]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#762D49] font-serif text-lg text-white shadow-sm">
              SR
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg font-semibold tracking-tight text-[#762D49] dark:text-[#F0CAD8] sm:text-xl">
                SR Glow Beauty
              </span>
              <span className="block text-[8px] tracking-[0.25em] text-[#8B6F7B] dark:text-[#D5B9C5]">
                YOUR BEAUTY RITUAL
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-[#55434D] dark:text-[#E9DDE3] lg:flex">
            <Link className="hover:text-[#762D49] dark:hover:text-[#EBC9D0]" href="/products">
              Shop All
            </Link>
            <Link className="hover:text-[#762D49] dark:hover:text-[#EBC9D0]" href="/products?category=skincare">
              Skincare
            </Link>
            <Link className="hover:text-[#762D49] dark:hover:text-[#EBC9D0]" href="/products?category=makeup">
              Makeup
            </Link>
            <Link className="hover:text-[#762D49] dark:hover:text-[#EBC9D0]" href="/products?category=haircare">
              Haircare
            </Link>
            <a className="hover:text-[#762D49] dark:hover:text-[#EBC9D0]" href="#our-story">
              Our Story
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/products"
              aria-label="Browse products"
              className="rounded-full p-2.5 transition hover:bg-[#EBC9D0]/40 dark:hover:bg-white/10"
            >
              <Search size={19} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact us on WhatsApp"
              className="hidden items-center gap-2 rounded-full bg-[#762D49] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#5B2038] sm:flex"
            >
              <MessageCircle size={15} />
              Contact Us
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full p-2.5 hover:bg-[#EBC9D0]/40 dark:hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="space-y-1 border-t border-[#762D49]/10 px-4 py-4 dark:border-white/10 lg:hidden">
            {[
              ["Shop All", "/products"],
              ["Skincare", "/products?category=skincare"],
              ["Makeup", "/products?category=makeup"],
              ["Haircare", "/products?category=haircare"],
              ["Our Story", "#our-story"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm hover:bg-[#EBC9D0]/30 dark:hover:bg-white/5"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header> */}

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-2 md:gap-12 md:py-20 lg:px-8">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#762D49]/15 bg-white/60 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-[#762D49] dark:border-[#EBC9D0]/20 dark:bg-white/5 dark:text-[#EBC9D0]">
            <Sparkles size={14} />
            YOUR BEAUTY, YOUR RITUAL
          </div>

          <h1 className="font-serif text-5xl font-medium leading-[1.08] tracking-tight text-[#30232B] dark:text-[#F9F3EF] sm:text-6xl lg:text-7xl">
            A little glow.
            <br />
            <span className="italic text-[#762D49] dark:text-[#EBC9D0]">
              A lot of you.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#75616B] dark:text-[#CFBDC7] sm:text-base">
            Discover beauty essentials that fit your routine, celebrate your
            individuality and make every self-care moment feel special.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 rounded-full bg-[#762D49] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#762D49]/15 transition hover:-translate-y-0.5 hover:bg-[#5B2038] dark:bg-[#EBC9D0] dark:text-[#30232B] dark:hover:bg-[#F5DDE3]"
            >
              Explore Collection <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#762D49]/20 px-5 py-3.5 text-sm font-semibold text-[#762D49] transition hover:bg-[#EBC9D0]/30 dark:border-white/15 dark:text-[#EBC9D0] dark:hover:bg-white/5"
            >
              <MessageCircle size={16} /> Talk to Us
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#75616B] dark:text-[#CFBDC7]">
            <span className="flex items-center gap-2">
              <Check size={15} className="text-[#762D49] dark:text-[#EBC9D0]" />
              Cash on Delivery
            </span>
            <span className="flex items-center gap-2">
              <Check size={15} className="text-[#762D49] dark:text-[#EBC9D0]" />
              Personal Order Support
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-3 -top-3 h-24 w-24 rounded-full bg-[#EBC9D0]/70 blur-2xl sm:-left-6 sm:-top-6 sm:h-40 sm:w-40" />
          <div className="absolute -bottom-5 -right-3 h-28 w-28 rounded-full bg-[#B98A52]/20 blur-2xl sm:-right-5 sm:h-48 sm:w-48" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#EBC9D0] shadow-2xl shadow-[#762D49]/10">
            <div className="aspect-[4/4.5] sm:aspect-[4/4.2]">
              <img
                src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1400&q=90"
                alt="Beauty and skincare products in a soft, neutral setting"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#30232B]/80 via-[#30232B]/30 to-transparent p-5 pt-24 sm:p-8 sm:pt-32">
              <div className="flex items-end justify-between gap-4 text-white">
                <div>
                  <p className="text-[9px] font-medium tracking-[0.22em] text-[#F0CAD8] sm:text-xs">
                    A MOMENT FOR YOURSELF
                  </p>
                  <p className="mt-2 font-serif text-2xl sm:text-3xl">
                    Your daily glow ritual
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                  <Sparkles size={19} />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 left-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-[#F9F3EF] p-3 shadow-xl shadow-[#30232B]/10 dark:border-white/10 dark:bg-[#30232B] sm:bottom-8 sm:-left-8 sm:p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBC9D0] text-[#762D49]">
              <Heart size={19} />
            </div>
            <div>
              <p className="text-xs font-semibold">Made for your routine</p>
              <p className="mt-1 text-[10px] text-[#8B6F7B] dark:text-[#D5B9C5]">
                Beauty, your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="border-y border-[#762D49]/10 bg-white/50 py-14 dark:border-white/10 dark:bg-white/[0.02] sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.22em] text-[#762D49] dark:text-[#EBC9D0]">
                FIND YOUR FAVOURITES
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                Shop by category
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden items-center gap-2 text-sm font-semibold text-[#762D49] hover:underline dark:text-[#EBC9D0] sm:flex"
            >
              View all <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-[#EBC9D0]"
              >
                <div className="aspect-[5/3] overflow-hidden sm:aspect-[4/5]">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div
                  className={`absolute inset-0 ${index === 1
                    ? "bg-gradient-to-t from-[#30232B]/80 via-[#30232B]/15 to-transparent"
                    : "bg-gradient-to-t from-[#30232B]/80 via-[#30232B]/10 to-transparent"
                    }`}
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-6">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/85">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/10 transition group-hover:bg-white group-hover:text-[#762D49]">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#762D49] dark:text-[#EBC9D0]">
              A LITTLE SOMETHING SPECIAL
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Beauty favourites
            </h2>
            <p className="mt-3 max-w-md text-sm text-[#75616B] dark:text-[#CFBDC7]">
              Find the essentials that make your everyday routine feel like you.
            </p>
          </div>

          <Link
            href="/products"
            className="hidden items-center gap-2 text-sm font-semibold text-[#762D49] hover:underline dark:text-[#EBC9D0] sm:flex"
          >
            Shop all <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-9 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-[#762D49]/25 px-6 py-3 text-sm font-semibold text-[#762D49] dark:border-[#EBC9D0]/25 dark:text-[#EBC9D0]"
          >
            View all products <ArrowRight size={15} />
          </Link>
        </div>
      </section>

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
      <section className="border-b border-[#762D49]/10 bg-white/50 dark:border-white/10 dark:bg-white/[0.02]">
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
                We're here to help on WhatsApp
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
