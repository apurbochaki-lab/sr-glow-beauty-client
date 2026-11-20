import DetailsPage from '@/components/shop-page/DetailsPage';
import { getProductBySlug } from '@/lib/api/products';
import { ChevronLeft, PackageSearch } from 'lucide-react';
import Link from 'next/link';

const Page = async ({ params }) => {

    const { slug } = await params

    const product = await getProductBySlug(slug)
    console.log(product)

    if (!product) {
        return (
            <section className="min-h-screen w-full bg-[#F9F3EF] py-10 flex items-center justify-center dark:bg-[#30232B]">
                <div className="mx-auto w-full max-w-lg px-6 text-center">

                    {/* প্রিমিয়াম আইকন কন্টেইনার */}
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#EBC9D0]/30 border border-[#B98A52]/30 dark:bg-[#EBC9D0]/10">
                        <PackageSearch className="h-10 w-10 text-[#762D49] dark:text-[#EBC9D0]" />
                    </div>

                    {/* হেডিং */}
                    <h2 className="font-playfair text-3xl font-semibold text-[#30232B] dark:text-[#F9F3EF] mb-3">
                        No Product Information Found
                    </h2>

                    {/* সাব-হেডিং */}
                    <p className="font-dm-sans text-sm text-[#30232B]/60 dark:text-[#EBC9D0]/70 mb-8 leading-relaxed">
                        We couldn&apos;t find the product you are looking for. It might have been removed, or the link is incorrect. Please check our shop to explore our beautiful collections.
                    </p>

                    {/* ব্যাক টু শপ বাটন */}
                    <Link
                        href="/shop"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#762D49] px-6 py-3.5 font-dm-sans text-sm font-semibold text-[#F9F3EF] shadow-sm transition-all duration-300 hover:bg-[#5E2139] hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B98A52] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#30232B]"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to Shop
                    </Link>

                </div>
            </section>
        );
    }

    return <DetailsPage product={product} />;
};

export default Page;