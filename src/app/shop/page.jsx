import ProductCard from "@/components/common/ProductCard";
import { LazyMotion, domAnimation } from "framer-motion";
import { getProducts } from "@/lib/api/products";
import { unstable_noStore } from "next/cache";
import ProductFilter from "@/components/shop-page/ProductFilter";
import Pagination from "@/components/shop-page/Pagination";

export default async function Shop({
    searchParams,
    // products = [],
    title = "Explore Our Collection",
    subtitle = "Discover beauty and essentials made for you.",
    productBasePath = "/shop",
}) {

    const params = await searchParams;
    // console.log("Search :", params)

    const page = params.page || 1
    const search = params.search || ""
    const category = params.category || ""
    const sort = params.sort || ""
    // console.log(category, sort)


    unstable_noStore()
    const response = await getProducts(page, search, category, sort);
    const products = response?.data;
    console.log(response)


    // Array validation
    const productList = Array.isArray(products) ? products : [];

    const basePath = productBasePath.replace(/\/$/, "");
    console.log("Base path : ", basePath)

    return (
        <section className="min-h-screen w-full bg-[#F9F3EF] py-8 sm:pt-10 sm:pb-16 lg:pt-10 lg:pb-20 dark:bg-[#30232B] pb-20">
            <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8">

                {/* Shop Heading */}
                <div className="mb-7 text-center sm:mb-10">

                    <p className="mb-2 font-dm-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B98A52] sm:text-xs">
                        SR Glow Beauty
                    </p>

                    <h2 className="font-playfair text-2xl font-semibold tracking-tight text-[#30232B] dark:text-[#F9F3EF] sm:text-3xl lg:text-4xl">
                        {title}
                    </h2>

                    <p className="mx-auto mt-2 max-w-xl font-dm-sans text-xs leading-6 text-[#30232B]/65 dark:text-[#EBC9D0]/75 sm:text-sm">
                        {subtitle}
                    </p>

                    {/* Minimal Gold Divider */}
                    <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#B98A52]" />
                </div>

                <ProductFilter categories={response.categories} />

                {/* Products Grid */}
                {
                    productList.length > 0 ? (
                        <>
                            <LazyMotion features={domAnimation}>
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:gap-6">
                                    {
                                        productList.map((product, index) => {
                                            const productHref = product.slug
                                                ? `${basePath}/${product.slug}`
                                                : "/shop";

                                            return (
                                                <ProductCard
                                                    key={
                                                        product.slug ||
                                                        product._id ||
                                                        `${product.productName}-${index}`
                                                    }
                                                    product={product}
                                                    productHref={productHref}
                                                    index={index}
                                                    isPriority={index === 0}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            </LazyMotion>

                            <Pagination currentPage={response.currentPage} totalPages={response.totalPages} />
                        </>
                    ) : (
                        <div
                            role="status"
                            className="rounded-2xl border border-[#762D49]/10 bg-white/60 px-5 py-16 text-center dark:border-[#EBC9D0]/15 dark:bg-[#30232B]"
                        >
                            <h3 className="font-playfair text-xl font-semibold text-[#30232B] dark:text-[#F9F3EF]">
                                No Products Found
                            </h3>

                            <p className="mt-2 font-dm-sans text-sm text-[#30232B]/60 dark:text-[#EBC9D0]/70">
                                Products will appear here once they are available.
                            </p>
                        </div>
                    )
                }
            </div>
        </section>
    );
}