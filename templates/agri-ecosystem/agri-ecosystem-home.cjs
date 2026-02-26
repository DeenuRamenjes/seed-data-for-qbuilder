/**
 * AgriEcosystem - Home Page
 * Theme: Organic Agriculture, Sustainable Practices, Regenerative Farming
 * Primary Color: #32a850 (Bright Green)
 * Dark Mode: Supported (#102215 background)
 * Fonts: Space Grotesk
 */

const agriEcosystemHome = {
    // ============================================================================
    // HEADER - NAVBAR
    // ============================================================================
    header: {
        key: "agri-ecosystem-header",
        type: "Navbar",
        category: "header",
        name: "AgriEcosystem Header",
        description: "Agriculture header with navigation and CTA",
        structure: {
            type: "Header",
            defaultProps: {
                fullWidth: true,
                backgroundColor: "rgba(246, 248, 246, 0.8)",
                backdropFilter: "blur(12px)",
                borderBottomColor: "rgba(27, 67, 50, 0.1)",
                borderBottomWidth: 1
            },
            columns: [{
                id: "header-col",
                width: "100%",
                elements: [{
                    id: "ecosystem-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "icon",
                        logoIcon: "eco",
                        logoText: "GreenHarvest",
                        logoTextColor: "#1b4332",
                        logoIconColor: "#32a850",
                        accentColor: "#32a850",
                        backgroundColor: "rgba(246, 248, 246, 0.95)",
                        darkBackgroundColor: "rgba(16, 34, 21, 0.95)",
                        sticky: true,
                        linkColor: "#1b4332",
                        darkLinkColor: "#f4f1ea",
                        linkHoverColor: "#32a850",
                        links: [
                            { label: "Philosophy", href: "#philosophy" },
                            { label: "Supply Chain", href: "#supply-chain" },
                            { label: "Impact", href: "#impact" },
                            { label: "Calendar", href: "#calendar" }
                        ],
                        showButton: true,
                        buttonText: "Partner With Us",
                        buttonLink: "#contact",
                        buttonRadius: "full",
                        buttonStyle: "solid",
                        buttonColor: "#1b4332",
                        buttonBgColor: "#32a850"
                    }
                }]
            }]
        }
    },

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // SPLIT HERO SECTION - Mission & Macro Photography
        // --------------------------------------------------------------------------
        {
            key: "agri-ecosystem-hero",
            name: "Ecosystem Hero Section",
            description: "Split layout with mission statement on left, featured image on right",
            structure: {
                type: "Hero",
                defaultProps: {
                    backgroundImage: "https://img.freepik.com/free-photo/tractor-working-green-field_23-2151983626.jpg?semt=ais_hybrid&w=740&q=80",
                    paddingY: 80,
                    paddingX: 80,
                    fullWidth: true,
                    layoutType: "asymmetric",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 64,
                    minHeight: "600px"
                },
                columns: [
                    {
                        id: "hero-left-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            gap: 24
                        },
                        elements: [
                            {
                                id: "hero-heading",
                                type: "Headline",
                                props: {
                                    text: "Cultivating the Future of Organic",
                                    tag: "h1",
                                    color: "#ffffff",
                                    fontSize: 72,
                                    fontWeight: "700",
                                    lineHeight: 0.9,
                                    letterSpacing: "-0.02em",
                                    align: "left"
                                }
                            },
                            {
                                id: "hero-accent-line",
                                type: "Divider",
                                props: {
                                    color: "rgba(19, 236, 73, 0.5)",
                                    width: "96px",
                                    thickness: 4
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Beyond sustainable. We are building a regenerative ecosystem where every seed planted enriches the soil and every harvest empowers the community.",
                                    color: "#ffffff",
                                    size: "lg",
                                    lineHeight: 1.6,
                                    maxWidth: "350px",
                                    align: "left"
                                }
                            },
                             {
                                id: "hero-accent-line",
                                type: "Divider",
                                props: {
                                    color: "rgba(19, 236, 73, 0.5)",
                                    width: "96px",
                                    thickness: 4
                                }
                            },
                            {
                                id: "hero-button",
                                type: "Button",
                                props: {
                                    text: "Explore Our Mission",
                                    variant: "primary",
                                    backgroundColor: "#32a850",
                                    color: "#1b4332",
                                    fontSize: "base",
                                    fontWeight: "700",
                                    borderRadius: 12
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // THREE-COLUMN FEATURES SECTION - Organic Mastery, Supply Chain, Impact
        // --------------------------------------------------------------------------
        {
            key: "agri-ecosystem-features",
            name: "Ecosystem Features Section",
            description: "Three-column feature cards with icons, descriptions, and links",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0a",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 48
                },
                columns: [
                    {
                        id: "features-cards-col",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                id: "feature-card-1",
                                type: "FeatureCard",
                                props: {
                                    icon: "psychology",
                                    title: "Organic Mastery",
                                    description: "Our philosophy centers on soil biology as the foundation of nutrition. We utilize non-GMO heirloom seeds and advanced composting techniques to exceed global organic standards.",
                                    backgroundColor: "rgba(31, 41, 55, 0.03)",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.03)",
                                    textColor: "#1b4332",
                                    darkTextColor: "#f4f1ea",
                                    borderRadius: 24,
                                    padding: 40,
                                    iconColor: "#32a850",
                                    iconBackgroundColor: "#1b4332",
                                    border: "1px solid rgba(19, 236, 73, 0.1)",
                                    features: [
                                        "Zero-Chemical Infrastructure",
                                        "Heirloom Seed Preservation",
                                        "Micro-biome Soil Analysis"
                                    ],
                                    link: "#learn-soil",
                                    linkText: "Learn Soil Science"
                                }
                            },
                            {
                                id: "feature-card-2",
                                type: "FeatureCard",
                                props: {
                                    icon: "airport_shuttle",
                                    title: "Global Supply Chain",
                                    description: "Complete transparency from field to fork. Our proprietary cold-chain logistics network minimizes food waste and ensures peak freshness across continents.",
                                    backgroundColor: "rgba(19, 236, 73, 0.1)",
                                    darkBackgroundColor: "rgba(19, 236, 73, 0.05)",
                                    textColor: "#1b4332",
                                    darkTextColor: "#f4f1ea",
                                    borderRadius: 24,
                                    padding: 40,
                                    iconColor: "#32a850",
                                    iconBackgroundColor: "#1b4332",
                                    border: "1px solid rgba(19, 236, 73, 0.2)",
                                    link: "#logistics",
                                    linkText: "View Logistics Hub"
                                }
                            },
                            {
                                id: "feature-card-3",
                                type: "FeatureCard",
                                props: {
                                    icon: "bar_chart",
                                    title: "Sustainable Impact",
                                    description: "Data-driven regeneration. We measure every ton of carbon sequestered and every gallon of water saved through our network of 50,000+ acres.",
                                    backgroundColor: "#1b4332",
                                    textColor: "#ffffff",
                                    titleColor: "#ffffff",
                                    descriptionColor: "#ffffff",
                                    borderRadius: 24,
                                    padding: 40,
                                    iconColor: "#32a850"
                                }
                            }
                        ]
                    }
                ]
            }
        },

               // --------------------------------------------------------------------------
        // GLOBAL FOOTPRINT SECTION - Stats with Background Image
        // --------------------------------------------------------------------------
        {
            key: "agri-ecosystem-footprint",
            name: "Global Footprint Section",
            description: "Large stats display with background image and overlay",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#1b4332",
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjoUoe1W1Y_SOZ-yIHa8JYVORKZGgEZViRiN9X5LvRPSj9VSvtAtnBRt9Llkb8-7WolhHPWrSeZFosUU5lm28p2lT2QijRKO7rfY_5YFUhYw-reLRENNG-qRzthRg8BgW9MDcPDkFqBla4i5pphf4Z_tqzpezjHreirinbn9_rCYbta-01DRS8U4XixUheKwPZtHK-sEO90pblSwxa1T7YgNFBjkrVMQ1adNF3ZIneBQrjb52hufVEKRco0AauOEuZ5scuUVv84Pg",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOpacity: 0.4,
                    fullWidth: true,
                    minHeight: "500px",
                    layout: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end"
                },
                columns: [
                    {
                        id: "footprint-content-col",
                        width: "100%",
                        layout: "flex",
                        flexDirection: "column",
                        gap: 48,
                        elements: [
                            {
                                id: "footprint-stats",
                                type: "StatsSection",
                                props: {
                                    backgroundColor: "transparent",
                                    textColor: "#ffffff",
                                    accentColor: "#32a850",
                                    gap: 32,
                                    stats: [
                                        {
                                            number: "50",
                                            label: "Managed Acres",
                                            format: "k"
                                        },
                                        {
                                            number: "12",
                                            label: "Regional Hubs",
                                            format: "default"
                                        },
                                        {
                                            number: "4.2",
                                            label: "Partner Farmers",
                                            format: "k"
                                        },
                                        {
                                            number: "100",
                                            label: "Traceability",
                                            format: "default"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // HARVEST CALENDAR SECTION - Interactive 6-Month Calendar Grid
        // --------------------------------------------------------------------------
        {
            key: "agri-ecosystem-calendar",
            name: "Harvest Calendar Section",
            description: "Six-month harvest calendar with seasonal produce information",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "rgba(31, 41, 55, 0.02)",
                    darkBackgroundColor: "rgba(16, 34, 21, 0.5)",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 48
                },
                columns: [
                    {
                        id: "calendar-header-col",
                        width: "100%",
                        elements: [
                            {
                                id: "calendar-badge",
                                type: "Badge",
                                props: {
                                    text: "Seasonality Guide",
                                    backgroundColor: "transparent",
                                    textColor: "#32a850",
                                    fontSize: "xs",
                                    fontWeight: "700",
                                    letterSpacing: "0.2em",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "calendar-heading",
                                type: "Heading",
                                props: {
                                    text: "Interactive Harvest Calendar",
                                    tag: "h2",
                                    color: "#1b4332",
                                    darkColor: "#f4f1ea",
                                    fontSize: 52,
                                    fontWeight: "700",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.01em",
                                    marginBottom: 48
                                }
                            }
                        ]
                    },
                    {
                        id: "calendar-grid-col",
                        width: "100%",
                        layout: "grid",
                        columns: 6,
                        gap: 1,
                        elements: [
                            {
                                id: "calendar-jan",
                                type: "FeatureCard",
                                props: {
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: 0,
                                    padding: 32,
                                    textAlign: "center",
                                    month: "January",
                                    icon: "potted_plant",
                                    iconColor: "#32a850",
                                    title: "Root Crops",
                                    subtitle: "Carrots, Beets, Potatoes"
                                }
                            },
                            {
                                id: "calendar-feb",
                                type: "FeatureCard",
                                props: {
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: 0,
                                    padding: 32,
                                    textAlign: "center",
                                    month: "February",
                                    icon: "potted_plant",
                                    iconColor: "#32a850",
                                    title: "Winter Greens",
                                    subtitle: "Kale, Swiss Chard"
                                }
                            },
                            {
                                id: "calendar-mar",
                                type: "FeatureCard",
                                props: {
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: 0,
                                    padding: 32,
                                    textAlign: "center",
                                    month: "March",
                                    icon: "eco",
                                    iconColor: "#32a850",
                                    title: "Early Legumes",
                                    subtitle: "Peas, Fava Beans"
                                }
                            },
                            {
                                id: "calendar-apr",
                                type: "FeatureCard",
                                props: {
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: 0,
                                    padding: 32,
                                    textAlign: "center",
                                    month: "April",
                                    icon: "local_florist",
                                    iconColor: "#32a850",
                                    title: "Brassicas",
                                    subtitle: "Broccoli, Cauliflower"
                                }
                            },
                            {
                                id: "calendar-may",
                                type: "FeatureCard",
                                props: {
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: 0,
                                    padding: 32,
                                    textAlign: "center",
                                    month: "May",
                                    icon: "nutrition",
                                    iconColor: "#32a850",
                                    title: "Stone Fruits",
                                    subtitle: "Cherries, Apricots"
                                }
                            },
                            {
                                id: "calendar-jun",
                                type: "FeatureCard",
                                props: {
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: 0,
                                    padding: 32,
                                    textAlign: "center",
                                    month: "June",
                                    icon: "sunny",
                                    iconColor: "#32a850",
                                    title: "Summer Berries",
                                    subtitle: "Strawberries, Raspberries"
                                }
                            }
                        ]
                    },
                    {
                        id: "newsletter-section",
                        width: "100%",
                        props: {
                            marginTop: 32
                        },
                        elements: [
                            {
                                id: "newsletter-box",
                                type: "CreateAccount",
                                props: {
                                    backgroundColor: "#1b4332",
                                    darkBackgroundColor: "#1b4332",
                                    borderRadius: 16,
                                    paddingY: 32,
                                    paddingX: 32,
                                    title: "Receive Harvest Alerts",
                                    description: "Be the first to know when your favorite crops are at peak nutrition.",
                                    titleColor: "#ffffff",
                                    descriptionColor: "rgba(255, 255, 255, 0.6)",
                                    inputPlaceholder: "Email Address",
                                    inputBackgroundColor: "rgba(255, 255, 255, 0.1)",
                                    inputTextColor: "#ffffff",
                                    inputBorderColor: "rgba(255, 255, 255, 0.2)",
                                    buttonText: "Subscribe",
                                    buttonBackgroundColor: "#32a850",
                                    buttonTextColor: "#1b4332"
                                }
                            }
                        ]
                    }
                ]
            }
        },

 
    ],

    // ============================================================================
    // FOOTER
    // ============================================================================
    footer: {
        key: "agri-ecosystem-footer",
        type: "Footer",
        category: "footer",
        name: "AgriEcosystem Footer",
        description: "Multi-column footer with company info, links, and contact information",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#f4f1ea",
                darkBackgroundColor: "#0a0a0a",
                paddingY: 80,
                paddingX: 80,
                fullWidth: true,
                borderTopColor: "rgba(27, 67, 50, 0.1)",
                borderTopWidth: 1
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "35%",
                    elements: [
                        {
                            id: "footer-logo",
                            type: "Heading",
                            props: {
                                text: "AgriEcosystem",
                                tag: "h4",
                                color: "#32a850",
                                darkColor: "#32a850",
                                marginBottom: 24
                            }
                        },
                        {
                            id: "footer-desc",
                            type: "Paragraph",
                            props: {
                                text: "Innovating the agricultural landscape through radical transparency and regenerative stewardship.",
                                color: "#4b5563",
                                darkColor: "#b0b8c4",
                                maxWidth: "400px",
                                marginBottom: 32
                            }
                        },
                        {
                            id: "footer-social",
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { icon: "public", href: "#", label: "Website" },
                                    { icon: "share", href: "#", label: "Share" },
                                    { icon: "play_circle", href: "#", label: "Video" }
                                ],
                                iconColor: "#32a850",
                                darkIconColor: "#32a850",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-ecosystem",
                    width: "18%",
                    elements: [
                        {
                            id: "links-ecosystem",
                            type: "LinkList",
                            props: {
                                title: "Ecosystem",
                                titleColor: "#1b4332",
                                darkTitleColor: "#ffffff",
                                textColor: "#4b5563",
                                darkTextColor: "#b0b8c4",
                                hoverColor: "#32a850",
                                darkHoverColor: "#32a850",
                                items: [
                                    { label: "Philosophy", href: "#" },
                                    { label: "Our Farms", href: "#" },
                                    { label: "Soil Lab", href: "#" },
                                    { label: "Supply Chain", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-resources",
                    width: "18%",
                    elements: [
                        {
                            id: "links-resources",
                            type: "LinkList",
                            props: {
                                title: "Resources",
                                titleColor: "#1b4332",
                                darkTitleColor: "#ffffff",
                                textColor: "#4b5563",
                                darkTextColor: "#b0b8c4",
                                hoverColor: "#32a850",
                                darkHoverColor: "#32a850",
                                items: [
                                    { label: "Impact Data", href: "#" },
                                    { label: "Certifications", href: "#" },
                                    { label: "Annual Report", href: "#" },
                                    { label: "Investor Relations", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-contact",
                    width: "18%",
                    elements: [
                        {
                            id: "links-contact",
                            type: "LinkList",
                            props: {
                                title: "Connect",
                                titleColor: "#1b4332",
                                darkTitleColor: "#ffffff",
                                textColor: "#4b5563",
                                darkTextColor: "#b0b8c4",
                                hoverColor: "#32a850",
                                darkHoverColor: "#32a850",
                                items: [
                                    { label: "1200 Regenerative Way", href: "#" },
                                    { label: "Salinas Valley, CA 93901", href: "#" },
                                    { label: "contact@agrieco.farm", href: "#" },
                                    { label: "+1 (800) AGRI-01", href: "#" }
                                ]
                            }
                        }
                    ]
                }
            ],
            footerBottom: {
                copyrightText: "© 2024 AgriEcosystem. All rights reserved.",
                links: [
                    { label: "Privacy Policy", href: "#" },
                    { label: "Terms of Service", href: "#" }
                ],
                textColor: "#4b5563",
                darkTextColor: "#b0b8c4",
                linkColor: "#4b5563",
                darkLinkColor: "#b0b8c4",
                linkHoverColor: "#32a850",
                darkLinkHoverColor: "#32a850"
            }
        }
    }
};

module.exports = { agriEcosystemHome };
