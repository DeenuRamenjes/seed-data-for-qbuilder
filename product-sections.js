/**
 * Product Sections - Comprehensive product showcase templates
 * Fully responsive (mobile 1-col | tablet 2-cols | desktop 3-cols)
 * Theme-aware with comprehensive customization
 */

export const productSectionTemplates = [
    // ============================================================================
    // PRODUCT LISTING - Simple vertical product list
    // ============================================================================
    {
        key: "product-listing",
        type: "Section",
        category: "products",
        name: "Product Listing",
        description: "Vertical product list with descriptions",
        structure: {
            id: "product-listing-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, #ffffff)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "product-listing-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "product-listing-badge",
                            type: "Badge",
                            props: {
                                text: "OUR PRODUCTS",
                                color: "var(--theme-primary, #6366f1)",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "product-listing-heading",
                            type: "Heading",
                            props: {
                                text: "Comprehensive Product Lineup",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "product-listing-desc",
                            type: "Paragraph",
                            props: {
                                text: "Discover our full range of professional solutions",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "product-listing-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "stretch",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 16,
                        maxWidth: "900px",
                    },
                    elements: [
                        {
                            id: "product-list-1",
                            type: "TextBlock",
                            props: {
                                heading: "Professional Suite",
                                content: "Complete toolkit for enterprise teams with advanced analytics and reporting",
                                headingColor: "var(--theme-primary, #6366f1)",
                                contentColor: "var(--theme-text-secondary, #6b7280)",
                            }
                        },
                        {
                            id: "product-list-2",
                            type: "TextBlock",
                            props: {
                                heading: "Starter Bundle",
                                content: "Perfect for growing teams looking to streamline operations and improve efficiency",
                                headingColor: "var(--theme-secondary, #8b5cf6)",
                                contentColor: "var(--theme-text-secondary, #6b7280)",
                            }
                        },
                        {
                            id: "product-list-3",
                            type: "TextBlock",
                            props: {
                                heading: "Enterprise Solution",
                                content: "Dedicated infrastructure with custom integrations and premium 24/7 support",
                                headingColor: "var(--theme-accent, #f59e0b)",
                                contentColor: "var(--theme-text-secondary, #6b7280)",
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // PRODUCT GRID - 3-column responsive grid layout
    // ============================================================================
    {
        key: "product-grid",
        type: "Section",
        category: "products",
        name: "Product Grid",
        description: "Responsive 3-column product grid showcase",
        structure: {
            id: "product-grid-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "product-grid-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "product-grid-heading",
                            type: "Heading",
                            props: {
                                text: "Featured Products",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        }
                    ]
                },
                {
                    id: "product-col-1",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 20,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "product-card-1",
                            type: "ProductCard",
                            props: {
                                image: "https://via.placeholder.com/300x200?text=Product+1",
                                title: "Pro Edition",
                                description: "Advanced features for professionals",
                                price: "$99/month",
                                rating: 4.8,
                                reviews: 256,
                                badge: "BESTSELLER",
                                badgeColor: "var(--theme-primary, #6366f1)",
                                badgeBgColor: "var(--theme-primary-light, #eef2ff)",
                                backgroundColor: "var(--theme-background, #ffffff)",
                                textColor: "var(--theme-text, #1f2937)",
                                priceColor: "var(--theme-primary, #6366f1)",
                                borderRadius: "12",
                                shadow: "md",
                                hoverEffect: true
                            }
                        }
                    ]
                },
                {
                    id: "product-col-2",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 20,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "product-card-2",
                            type: "ProductCard",
                            props: {
                                image: "https://via.placeholder.com/300x200?text=Product+2",
                                title: "Team Pack",
                                description: "Collaborate with your entire team",
                                price: "$199/month",
                                rating: 4.9,
                                reviews: 189,
                                badge: "POPULAR",
                                badgeColor: "var(--theme-secondary, #8b5cf6)",
                                badgeBgColor: "var(--theme-secondary-light, #faf5ff)",
                                backgroundColor: "var(--theme-background, #ffffff)",
                                textColor: "var(--theme-text, #1f2937)",
                                priceColor: "var(--theme-secondary, #8b5cf6)",
                                borderRadius: "12",
                                shadow: "md",
                                hoverEffect: true
                            }
                        }
                    ]
                },
                {
                    id: "product-col-3",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 20,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "product-card-3",
                            type: "ProductCard",
                            props: {
                                image: "https://via.placeholder.com/300x200?text=Product+3",
                                title: "Enterprise",
                                description: "Unlimited features and support",
                                price: "$499/month",
                                rating: 5.0,
                                reviews: 142,
                                badge: "PREMIUM",
                                badgeColor: "var(--theme-accent, #f59e0b)",
                                badgeBgColor: "var(--theme-accent-light, #fffbeb)",
                                backgroundColor: "var(--theme-background, #ffffff)",
                                textColor: "var(--theme-text, #1f2937)",
                                priceColor: "var(--theme-accent, #f59e0b)",
                                borderRadius: "12",
                                shadow: "md",
                                hoverEffect: true
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // PRODUCT HIGHLIGHTS - Key product features
    // ============================================================================
    {
        key: "product-highlights",
        type: "Section",
        category: "products",
        name: "Product Highlights",
        description: "Showcase product highlights with icons",
        structure: {
            id: "product-highlights-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, #ffffff)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "product-highlights-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "product-highlights-heading",
                            type: "Heading",
                            props: {
                                text: "Why Choose Our Products",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        }
                    ]
                },
                {
                    id: "highlight-1",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "highlight-item-1",
                            type: "BenefitItem",
                            props: {
                                icon: "🚀",
                                title: "Fast Performance",
                                description: "Lightning-fast load times and seamless user experience",
                                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                                borderRadius: "12",
                                shadow: "sm",
                                iconBgColor: "var(--theme-primary-light, #eef2ff)",
                                iconSize: "40"
                            }
                        }
                    ]
                },
                {
                    id: "highlight-2",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "highlight-item-2",
                            type: "BenefitItem",
                            props: {
                                icon: "🔒",
                                title: "Secure & Reliable",
                                description: "Enterprise-grade security with 99.99% uptime guarantee",
                                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                                borderRadius: "12",
                                shadow: "sm",
                                iconBgColor: "var(--theme-secondary-light, #faf5ff)",
                                iconSize: "40"
                            }
                        }
                    ]
                },
                {
                    id: "highlight-3",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "highlight-item-3",
                            type: "BenefitItem",
                            props: {
                                icon: "👥",
                                title: "Expert Support",
                                description: "Dedicated support team available 24/7 for assistance",
                                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                                borderRadius: "12",
                                shadow: "sm",
                                iconBgColor: "var(--theme-accent-light, #fffbeb)",
                                iconSize: "40"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // PRODUCT DETAILS - Detailed product information
    // ============================================================================
    {
        key: "product-details",
        type: "Section",
        category: "products",
        name: "Product Details",
        description: "Detailed product information with specifications",
        structure: {
            id: "product-details-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "product-details-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "product-details-heading",
                            type: "Heading",
                            props: {
                                text: "Product Details",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "product-details-desc",
                            type: "Paragraph",
                            props: {
                                text: "In-depth information about our core offering",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "product-details-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "stretch",
                        justifyContent: "flex-start",
                        padding: 32,
                        gap: 24,
                        maxWidth: "1000px",
                    },
                    elements: [
                        {
                            id: "detail-1",
                            type: "HighlightedBox",
                            props: {
                                title: "Core Capabilities",
                                content: "Our product is built with cutting-edge technology to deliver exceptional performance, reliability, and scalability for organizations of all sizes.",
                                backgroundColor: "var(--theme-background, #ffffff)",
                                borderLeftColor: "var(--theme-primary, #6366f1)",
                                titleColor: "var(--theme-text, #1f2937)",
                                textColor: "var(--theme-text-secondary, #6b7280)",
                                borderRadius: "12"
                            }
                        },
                        {
                            id: "detail-2",
                            type: "HighlightedBox",
                            props: {
                                title: "Advanced Features",
                                content: "Packed with powerful features including real-time analytics, custom reporting, API integrations, and advanced security protocols to meet your business needs.",
                                backgroundColor: "var(--theme-background, #ffffff)",
                                borderLeftColor: "var(--theme-secondary, #8b5cf6)",
                                titleColor: "var(--theme-text, #1f2937)",
                                textColor: "var(--theme-text-secondary, #6b7280)",
                                borderRadius: "12"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // PRODUCT SPECIFICATIONS - Technical specs with feature cards
    // ============================================================================
    {
        key: "product-specifications",
        type: "Section",
        category: "products",
        name: "Product Specifications",
        description: "Detailed technical specifications",
        structure: {
            id: "product-specs-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "product-specs-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "product-specs-badge",
                            type: "Badge",
                            props: {
                                text: "SPECIFICATIONS",
                                color: "var(--theme-secondary, #8b5cf6)",
                                bgColor: "var(--theme-secondary-light, #ede9fe)",
                                showPing: false
                            }
                        },
                        {
                            id: "product-specs-heading",
                            type: "Heading",
                            props: {
                                text: "Technical Specifications",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "product-specs-desc",
                            type: "Paragraph",
                            props: {
                                text: "Comprehensive technical details of our product platform",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "product-specs-col-1",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)", padding: 16, gap: 12 },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "spec-card-1",
                            type: "ServiceCard",
                            props: {
                                icon: "⚡",
                                title: "High Performance",
                                description: "Lightning-fast processing",
                                features: ["99.9% Uptime", "Sub-millisecond Response", "Optimized Caching"],
                                backgroundColor: "var(--theme-background, #ffffff)",
                                accentColor: "var(--theme-primary, #6366f1)"
                            }
                        }
                    ]
                },
                {
                    id: "product-specs-col-2",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)", padding: 16, gap: 12 },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "spec-card-2",
                            type: "ServiceCard",
                            props: {
                                icon: "🔒",
                                title: "Enterprise Security",
                                description: "Bank-level protection",
                                features: ["AES-256 Encryption", "SOC 2 Compliant", "Regular Audits"],
                                backgroundColor: "var(--theme-background, #ffffff)",
                                accentColor: "var(--theme-accent, #ec4899)"
                            }
                        }
                    ]
                },
                {
                    id: "product-specs-col-3",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)", padding: 16, gap: 12 },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "spec-card-3",
                            type: "ServiceCard",
                            props: {
                                icon: "📊",
                                title: "Scalability",
                                description: "Grows with your business",
                                features: ["Unlimited Storage", "Auto Scaling", "Load Balancing"],
                                backgroundColor: "var(--theme-background, #ffffff)",
                                accentColor: "var(--theme-secondary, #8b5cf6)"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // PRODUCT GALLERY - Image gallery showcase
    // ============================================================================
    {
        key: "product-gallery",
        type: "Section",
        category: "products",
        name: "Product Gallery",
        description: "Product photo gallery with thumbnails",
        structure: {
            id: "product-gallery-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "product-gallery-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 32,
                        gap: 16,
                        "@media (max-width: 768px)": { padding: 16 }
                    },
                    elements: [
                        {
                            id: "gallery-1",
                            type: "ProductGallery",
                            props: {
                                images: [
                                    "https://via.placeholder.com/800x500?text=Gallery+1",
                                    "https://via.placeholder.com/800x500?text=Gallery+2",
                                    "https://via.placeholder.com/800x500?text=Gallery+3"
                                ],
                                title: "Product Gallery",
                                description: "View our product in action",
                                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                                textColor: "var(--theme-text, #1f2937)",
                                autoPlay: true,
                                autoPlayInterval: 4000
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // PRODUCT COMPARISON - Compare products side-by-side
    // ============================================================================
    {
        key: "product-comparison",
        type: "Section",
        category: "products",
        name: "Product Comparison",
        description: "Compare products and plans side-by-side",
        structure: {
            id: "product-comparison-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, #ffffff)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "product-comparison-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "product-comparison-badge",
                            type: "Badge",
                            props: {
                                text: "COMPARISON",
                                color: "var(--theme-accent, #ec4899)",
                                bgColor: "var(--theme-accent-light, #fce7f3)",
                                showPing: false
                            }
                        },
                        {
                            id: "product-comparison-heading",
                            type: "Heading",
                            props: {
                                text: "Why Choose Our Product",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "product-comparison-subheading",
                            type: "Paragraph",
                            props: {
                                text: "See how we compare to competitors",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "product-comparison-col-a",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "100%", padding: 16, gap: 12 },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "pricing-card-competitor-a",
                            type: "PricingCard",
                            props: {
                                title: "Competitor A",
                                price: "$79",
                                description: "/month",
                                features: ["Basic Support", "10K API Calls", "Single User", "Email Only"],
                                buttonText: "Learn More",
                                highlightBorder: false,
                                highlightColor: "var(--theme-primary, #6366f1)"
                            }
                        }
                    ]
                },
                {
                    id: "product-comparison-col-b",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "100%", padding: 16, gap: 12 },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "pricing-card-ours",
                            type: "PricingCard",
                            props: {
                                title: "Our Product",
                                price: "$99",
                                description: "/month",
                                features: ["24/7 Chat Support", "Unlimited API Calls", "Team Collaboration", "Priority Support"],
                                buttonText: "Get Started",
                                highlightBorder: true,
                                highlightColor: "var(--theme-secondary, #8b5cf6)"
                            }
                        }
                    ]
                },
                {
                    id: "product-comparison-col-c",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "100%", padding: 16, gap: 12 },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "pricing-card-competitor-b",
                            type: "PricingCard",
                            props: {
                                title: "Competitor B",
                                price: "$129",
                                description: "/month",
                                features: ["Phone Support", "Unlimited API", "Multi-user", "Complex Setup"],
                                buttonText: "Learn More",
                                highlightBorder: false,
                                highlightColor: "var(--theme-primary, #6366f1)"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // PRODUCT ROADMAP - Feature roadmap timeline
    // ============================================================================
    {
        key: "product-roadmap",
        type: "Section",
        category: "products",
        name: "Product Roadmap",
        description: "Product development roadmap and upcoming features",
        structure: {
            id: "product-roadmap-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "product-roadmap-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "product-roadmap-heading",
                            type: "Heading",
                            props: {
                                text: "Product Roadmap",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "product-roadmap-desc",
                            type: "Paragraph",
                            props: {
                                text: "See what's coming next in our product development",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "product-roadmap-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 32,
                        gap: 24,
                        maxWidth: "800px",
                        "@media (max-width: 768px)": { padding: 16, gap: 16 }
                    },
                    elements: [
                        {
                            id: "roadmap-timeline",
                            type: "RoadmapTimeline",
                            props: {
                                items: [
                                    {
                                        phase: "Q1 2024",
                                        title: "Foundation",
                                        description: "Core platform launch with essential features",
                                        features: ["User authentication", "Basic analytics", "Email support"]
                                    },
                                    {
                                        phase: "Q2 2024",
                                        title: "Expansion",
                                        description: "API integrations and advanced features",
                                        features: ["Third-party integrations", "Custom reports", "Mobile app"]
                                    },
                                    {
                                        phase: "Q3 2024",
                                        title: "Growth",
                                        description: "Enterprise features and white-label options",
                                        features: ["White-label solution", "Advanced security", "Custom workflows"]
                                    }
                                ],
                                backgroundColor: "var(--theme-background, #ffffff)",
                                textColor: "var(--theme-text, #1f2937)",
                                accentColor: "var(--theme-primary, #6366f1)"
                            }
                        }
                    ]
                }
            ]
        }
    }
];
