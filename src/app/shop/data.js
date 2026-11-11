 
export const data = [
    // 1. COMBO PACKAGE
    {
        productName: "Ultimate Glow Combo",
        slug: "ultimate-glow-combo",
        shortDescription: "Your complete daily skincare essentials in one package.",
        description: "A carefully selected skincare combo featuring essential products for your daily beauty routine.",
        category: "Combo Package",
        images: [
            {
                url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
                alt: "Premium skincare combo collection",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
                alt: "Skincare products collection",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 2500,
            salePrice: 1990
        },
        isAvailableStock: true,
        attributes: {
            brand: "Glow Essentials",
            skinTypes: ["All Skin Types"],
            concerns: ["Dullness", "Dryness"],
            ingredients: ["Vitamin C", "Hyaluronic Acid"],
            volume: "Combo Pack",
            origin: "South Korea"
        },
        usageInstructions: "Use the products according to their individual instructions.",
        tags: ["combo", "skincare", "glow", "beauty"],
        isFeatured: true,
        createdAt: new Date("2026-11-11T08:00:00.000Z"),
        updatedAt: new Date("2026-11-11T08:00:00.000Z")
    },

    // 2. COMBO PACKAGE
    {
        productName: "Everyday Beauty Combo",
        slug: "everyday-beauty-combo",
        shortDescription: "A beautiful collection of everyday beauty essentials.",
        description: "A convenient beauty package designed for your everyday self-care and makeup routine.",
        category: "Combo Package",
        images: [
            {
                url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
                alt: "Everyday beauty cosmetics collection",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
                alt: "Makeup and beauty essentials",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 1800,
            salePrice: 1490
        },
        isAvailableStock: true,
        attributes: {
            brand: "Beauty Essentials",
            skinTypes: ["All Skin Types"],
            concerns: [],
            ingredients: [],
            volume: "Combo Pack",
            origin: "Imported"
        },
        usageInstructions: "Use each product according to its individual instructions.",
        tags: ["beauty-combo", "makeup", "daily-essentials"],
        isFeatured: true,
        createdAt: new Date("2026-11-10T09:00:00.000Z"),
        updatedAt: new Date("2026-11-10T09:00:00.000Z")
    },

    // 3. BEAUTY COSMETIC
    {
        productName: "Rose Matte Lipstick",
        slug: "rose-matte-lipstick",
        shortDescription: "A beautiful rose shade for an elegant everyday look.",
        description: "A stylish matte lipstick with a beautiful rose-inspired shade for everyday makeup and special occasions.",
        category: "Beauty Cosmetic",
        images: [
            {
                url: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
                alt: "Rose matte lipstick",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
                alt: "Beauty makeup collection",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 750,
            salePrice: 590
        },
        isAvailableStock: true,
        attributes: {
            brand: "Rose Beauty",
            skinTypes: [],
            concerns: [],
            ingredients: [],
            volume: "3.5g",
            origin: "Imported"
        },
        usageInstructions: "Apply evenly on clean and dry lips.",
        tags: ["lipstick", "matte", "rose", "makeup"],
        isFeatured: true,
        createdAt: new Date("2026-11-09T10:00:00.000Z"),
        updatedAt: new Date("2026-11-09T10:00:00.000Z")
    },

    // 4. BEAUTY COSMETIC
    {
        productName: "Velvet Makeup Brush Set",
        slug: "velvet-makeup-brush-set",
        shortDescription: "A versatile brush set for your daily makeup routine.",
        description: "A collection of makeup brushes designed for applying and blending different makeup products.",
        category: "Beauty Cosmetic",
        images: [
            {
                url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
                alt: "Makeup brushes and cosmetics",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
                alt: "Makeup essentials",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 1200,
            salePrice: null
        },
        isAvailableStock: true,
        attributes: {
            brand: "Velvet Beauty",
            skinTypes: [],
            concerns: [],
            ingredients: [],
            volume: "12 Pieces",
            origin: "China"
        },
        usageInstructions: "Use the appropriate brush for each makeup application.",
        tags: ["makeup-brush", "brush-set", "beauty-tools"],
        isFeatured: false,
        createdAt: new Date("2026-11-08T11:00:00.000Z"),
        updatedAt: new Date("2026-11-08T11:00:00.000Z")
    },

    // 5. SKIN CARE
    {
        productName: "Vitamin C Glow Serum",
        slug: "vitamin-c-glow-serum",
        shortDescription: "A lightweight serum for your daily skincare routine.",
        description: "A lightweight facial serum formulated with Vitamin C and Hyaluronic Acid. A sample product description for your skincare product page.",
        category: "Skin Care",
        images: [
            {
                url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=85",
                alt: "Vitamin C skincare serum",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
                alt: "Skincare product collection",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 1490,
            salePrice: 1290
        },
        isAvailableStock: true,
        attributes: {
            brand: "Example Beauty",
            skinTypes: ["All Skin Types"],
            concerns: ["Dark Spots", "Dullness"],
            ingredients: ["Vitamin C", "Hyaluronic Acid"],
            volume: "30ml",
            origin: "South Korea"
        },
        usageInstructions: "Apply 2-3 drops to clean skin. Follow the actual product label for usage instructions.",
        tags: ["vitamin-c", "serum", "glow", "skincare"],
        isFeatured: true,
        createdAt: new Date("2026-11-07T08:00:00.000Z"),
        updatedAt: new Date("2026-11-07T08:00:00.000Z")
    },

    // 6. SKIN CARE
    {
        productName: "Hydrating Face Cream",
        slug: "hydrating-face-cream",
        shortDescription: "A daily moisturizing cream for soft and hydrated skin.",
        description: "A sample moisturizing cream listing designed for everyday skincare. Check the actual product ingredients and manufacturer instructions before publishing.",
        category: "Skin Care",
        images: [
            {
                url: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
                alt: "Hydrating face cream",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
                alt: "Face cream skincare product",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 990,
            salePrice: 850
        },
        isAvailableStock: true,
        attributes: {
            brand: "Skin Glow",
            skinTypes: ["Dry Skin", "Normal Skin"],
            concerns: ["Dryness", "Dehydration"],
            ingredients: ["Hyaluronic Acid", "Glycerin"],
            volume: "50g",
            origin: "South Korea"
        },
        usageInstructions: "Apply an appropriate amount to clean skin.",
        tags: ["moisturizer", "face-cream", "hydration"],
        isFeatured: false,
        createdAt: new Date("2026-11-06T09:00:00.000Z"),
        updatedAt: new Date("2026-11-06T09:00:00.000Z")
    },

    // 7. SHOPPING & RETAIL
    {
        productName: "Premium Everyday Tote Bag",
        slug: "premium-everyday-tote-bag",
        shortDescription: "A minimal and elegant tote bag for everyday use.",
        description: "A versatile everyday tote bag with a simple design, suitable for shopping, casual outings and daily essentials.",
        category: "Shopping & Retail",
        images: [
            {
                url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
                alt: "Premium everyday tote bag",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
                alt: "Fashion handbag",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 1500,
            salePrice: 1250
        },
        isAvailableStock: true,
        attributes: {
            brand: "Everyday Collection",
            skinTypes: [],
            concerns: [],
            ingredients: [],
            volume: "Medium Size",
            origin: "China"
        },
        usageInstructions: "Suitable for everyday shopping and casual use.",
        tags: ["tote-bag", "fashion", "shopping", "accessories"],
        isFeatured: false,
        createdAt: new Date("2026-11-05T10:00:00.000Z"),
        updatedAt: new Date("2026-11-05T10:00:00.000Z")
    },

    // 8. JEWELLERY
    {
        productName: "Golden Pearl Necklace",
        slug: "golden-pearl-necklace",
        shortDescription: "A delicate pearl necklace for an elegant look.",
        description: "A stylish pearl-inspired necklace suitable for casual outfits, celebrations and special occasions.",
        category: "Jewellery",
        images: [
            {
                url: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
                alt: "Golden pearl necklace",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
                alt: "Elegant jewellery accessories",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 1100,
            salePrice: 890
        },
        isAvailableStock: true,
        attributes: {
            brand: "Golden Touch",
            skinTypes: [],
            concerns: [],
            ingredients: [],
            volume: "Adjustable",
            origin: "Imported"
        },
        usageInstructions: "Store in a dry jewellery box after use.",
        tags: ["necklace", "pearl", "jewellery", "gold"],
        isFeatured: true,
        createdAt: new Date("2026-11-04T08:00:00.000Z"),
        updatedAt: new Date("2026-11-04T08:00:00.000Z")
    },

    // 9. JEWELLERY
    {
        productName: "Elegant Pearl Earrings",
        slug: "elegant-pearl-earrings",
        shortDescription: "Beautiful pearl earrings for everyday elegance.",
        description: "A classic pearl-inspired earring design that complements both traditional and modern outfits.",
        category: "Jewellery",
        images: [
            {
                url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
                alt: "Elegant pearl earrings",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
                alt: "Jewellery collection",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 850,
            salePrice: null
        },
        isAvailableStock: true,
        attributes: {
            brand: "Pearl Studio",
            skinTypes: [],
            concerns: [],
            ingredients: [],
            volume: "One Pair",
            origin: "Imported"
        },
        usageInstructions: "Keep away from moisture and store safely after use.",
        tags: ["earrings", "pearl", "jewellery", "accessories"],
        isFeatured: false,
        createdAt: new Date("2026-11-03T09:00:00.000Z"),
        updatedAt: new Date("2026-11-03T09:00:00.000Z")
    },

    // 10. WATCH
    {
        productName: "Classic Rose Gold Watch",
        slug: "classic-rose-gold-watch",
        shortDescription: "A timeless rose gold watch for everyday styling.",
        description: "A classic analog wristwatch with a sophisticated appearance, suitable for everyday wear and special occasions.",
        category: "Watch",
        images: [
            {
                url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=85",
                alt: "Classic rose gold wristwatch",
                isPrimary: true
            },
            {
                url: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=85",
                alt: "Elegant wristwatch",
                isPrimary: false
            }
        ],
        pricing: {
            regularPrice: 2200,
            salePrice: 1890
        },
        isAvailableStock: true,
        attributes: {
            brand: "Classic Time",
            skinTypes: [],
            concerns: [],
            ingredients: [],
            volume: "Standard",
            origin: "Imported"
        },
        usageInstructions: "Avoid exposure to water unless the actual watch is rated for water resistance.",
        tags: ["watch", "wristwatch", "rose-gold", "fashion"],
        isFeatured: true,
        createdAt: new Date("2026-11-02T10:00:00.000Z"),
        updatedAt: new Date("2026-11-02T10:00:00.000Z")
    }
];
