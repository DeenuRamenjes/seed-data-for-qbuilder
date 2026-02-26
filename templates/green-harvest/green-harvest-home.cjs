/**
 * GreenHarvest Template - Home Page
 * Theme: Professional Agriculture / Agri-Tech / Export
 * Industry: Agriculture, Sustainable Farming, Supply Chain
 * Color Scheme:
 *   - Primary: #16a34a (Green-600)
 *   - Background Light: #ffffff
 *   - Background Dark: #0a0a0a
 *   - Text: #101912
 *   - Border: #e9f1eb
 */

const greenHarvestHome = {
    // ============================================================================
    // HEADER - Global Navbar using standard NavbarRenderer
    // ============================================================================
    header: {
        key: "green-harvest-header",
        type: "Navbar",
        category: "header",
        name: "GreenHarvest Header",
        description: "Sticky header with glassmorphism effect",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                paddingY: 0,
                paddingX: 0,
                fullWidth: true
            },
            columns: [{
                id: "green-harvest-header-col",
                width: "100%",
                elements: [{
                    id: "green-harvest-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "both",
                        logoText: "GreenHarvest",
                        logoAccent: "",
                        logoImage: "",
                        logoImageWidth: 24,
                        logoTextColor: "#101912",
                        accentColor: "#16a34a",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        linkColor: "#101912",
                        linkHoverColor: "#16a34a",
                        links: [
                            { label: "Our Farms", href: "#farms", isMegaMenu: false },
                            { label: "Supply Chain", href: "#supply-chain", isMegaMenu: false },
                            { label: "Sustainability", href: "#sustainability", isMegaMenu: false },
                            { label: "Export", href: "#export", isMegaMenu: false },
                            { label: "Contact", href: "#contact", isMegaMenu: false }
                        ],
                        showButton: true,
                        buttonText: "Get Started",
                        buttonLink: "#contact",
                        buttonRadius: "md",
                        buttonStyle: "solid",
                        sticky: true,
                        glassmorphism: true
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
        // HERO SECTION - Atomic composition: Section > 2 Columns > Elements
        // Following RENDERER_GUIDELINES: "Centered hero → Section (flex-col) + Headline + Paragraph + ButtonGroup"
        // --------------------------------------------------------------------------
        {
            key: "green-harvest-hero-section",
            name: "GreenHarvest Hero",
            description: "Two-column hero with decorative image frame",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 80,
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    gap: 48,
                    alignItems: "center"
                },
                columns: [
                    // LEFT COLUMN - Content
                    {
                        id: "hero-content-col",
                        width: "50%",
                        elements: [
                            {
                                id: "hero-accent-bar",
                                type: "Divider",
                                props: {
                                    style: "solid",
                                    color: "#16a34a",
                                    thickness: 6,
                                    width: "64px",
                                    marginBottom: "8px"
                                }
                            },
                            {
                                id: "hero-headline",
                                type: "Headline",
                                props: {
                                    text: "Cultivating a [Sustainable](linear-gradient(90deg, #16a34a, #22c55e)) Future",
                                    tag: "h2",
                                    align: "left",
                                    color: "#101912"
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Advanced professional agriculture solutions for global growth. Integrated Agri-Tech ecosystems designed for the modern world.",
                                    align: "left",
                                    color: "rgba(16, 25, 18, 0.7)",
                                    size: "lg"
                                }
                            },
                            {
                                id: "hero-buttons",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Start Growing",
                                    primaryBg: "#16a34a",
                                    primaryTextColor: "#ffffff",
                                    secondaryText: "Learn More",
                                    secondaryBg: "transparent",
                                    secondaryTextColor: "#101912",
                                    secondaryBorderColor: "#101912",
                                    gap: "gap-3",
                                    layout: "horizontal"
                                }
                            }
                        ]
                    },
                    // RIGHT COLUMN - Image with decorative frame
                    {
                        id: "hero-image-col",
                        width: "50%",
                        elements: [
                            {
                                id: "hero-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH7zdjehmxfOOPlhIQSabAXm-smHssZ21Con_VP1Ikerg3N9-1s-vO-W0eqCbVhemxC3EXmWxmlm2Hya4xAUQJAAgrp13VfV7s5mKmF-AE3HHhFwPVE9l4hp_8oo5uo3P1xaF--RuLvWdO_9DOJgRZNU_YaSy_PM32-D7d99iHmalvutDDxwb5Tm2aOL31L6hGb2ogZe8NQaRrFhVawvTwhEb2v2PospSnl6R1oNTd5gWsKGYtvDODptAieJU8v3cYAJc3CsoxYXE",
                                    alt: "High-tech modern glass greenhouse exterior with automated ventilation",
                                    aspectRatio: "4/3",
                                    objectFit: "cover",
                                    borderRadius: "16px",
                                    borderWidth: 4,
                                    borderColor: "#16a34a",
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SUPPLY CHAIN TICKER - Using universal DataMarquee renderer
        // --------------------------------------------------------------------------
        {
            key: "green-harvest-ticker-section",
            name: "Supply Chain Ticker",
            description: "Scrolling metrics ticker",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ticker-col",
                    width: "100%",
                    elements: [{
                        id: "ticker-marquee",
                        type: "DataMarquee",
                        props: {
                            title: "LIVE SUPPLY CHAIN:",
                            titleIcon: "BarChart3",
                            items: [
                                { label: "EU Region", value: "+14.2% Growth" },
                                { label: "NA Logistics", value: "On Schedule" },
                                { label: "Global Supply", value: "1.2M Tons Peak" },
                                { label: "Carbon Offset", value: "98.4% Efficiency" },
                                { label: "APAC Export", value: "+8.5% Index" }
                            ],
                            backgroundColor: "#ffffff",
                            textColor: "#101912",
                            labelColor: "rgba(16, 25, 18, 0.4)",
                            accentColor: "#16a34a",
                            borderColor: "#e9f1eb",
                            speed: 25,
                            direction: "left",
                            showBorder: true
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // STATS SECTION - Atomic composition: Section (grid) > 4x Box
        // RENDERER_GUIDELINES: "StatsCard → Yes: Box + Heading (number) + Paragraph (label)"
        // --------------------------------------------------------------------------
        // SECTION: Stats Section (4-column grid using Stats component)
        // --------------------------------------------------------------------------
        {
            key: "green-harvest-stats-section",
            name: "Stats Section",
            description: "4-column stats grid",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f7faf8",
                    paddingY: 64,
                    paddingX: 80,
                    fullWidth: false,
                    maxWidth: "1280px",
                    layout: "grid",
                    columns: 4,
                    gap: 24
                },
                columns: [
                    {
                        id: "stat-1-col",
                        width: "25%",
                        elements: [{
                            id: "stat-1",
                            type: "Stats",
                            props: {
                                number: "1.2M Tons",
                                label: "Export Volume",
                                icon: "📦",
                                bgColor: "#ffffff",
                                accentColor: "#16a34a",
                                textColor: "#101912",
                                secondaryTextColor: "rgba(16, 25, 18, 0.6)"
                            }
                        }]
                    },
                    {
                        id: "stat-2-col",
                        width: "25%",
                        elements: [{
                            id: "stat-2",
                            type: "Stats",
                            props: {
                                number: "450+",
                                label: "Active Farms",
                                icon: "🌾",
                                bgColor: "#ffffff",
                                accentColor: "#16a34a",
                                textColor: "#101912",
                                secondaryTextColor: "rgba(16, 25, 18, 0.6)"
                            }
                        }]
                    },
                    {
                        id: "stat-3-col",
                        width: "25%",
                        elements: [{
                            id: "stat-3",
                            type: "Stats",
                            props: {
                                number: "98%",
                                label: "Sustainability",
                                icon: "🌿",
                                bgColor: "#ffffff",
                                accentColor: "#16a34a",
                                textColor: "#101912",
                                secondaryTextColor: "rgba(16, 25, 18, 0.6)"
                            }
                        }]
                    },
                    {
                        id: "stat-4-col",
                        width: "25%",
                        elements: [{
                            id: "stat-4",
                            type: "Stats",
                            props: {
                                number: "120 Nodes",
                                label: "Supply Chain",
                                icon: "🔗",
                                bgColor: "#ffffff",
                                accentColor: "#16a34a",
                                textColor: "#101912",
                                secondaryTextColor: "rgba(16, 25, 18, 0.6)"
                            }
                        }]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // FEATURES SECTION - Atomic composition: Section > Heading + Grid of Cards
        // RENDERER_GUIDELINES: "3-column feature grid → Section (grid-cols-3) + 3x (Box + icon + Heading + Paragraph)"
        // --------------------------------------------------------------------------
        {
            key: "green-harvest-features-section",
            name: "Elite Agri-Tech Solutions",
            description: "Feature cards with images",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 80,
                    fullWidth: false,
                    maxWidth: "1280px",
                    layout: "flex",
                    flexDirection: "column",
                    gap: 48
                },
                columns: [
                    // Header Row
                    {
                        id: "features-header-col",
                        width: "100%",
                        elements: [
                            {
                                id: "features-headline",
                                type: "Headline",
                                props: {
                                    text: "Elite Agri-Tech [Solutions](linear-gradient(90deg, #16a34a, #22c55e))",
                                    tag: "h2",
                                    align: "left",
                                    color: "#101912"
                                }
                            },
                            {
                                id: "features-description",
                                type: "Paragraph",
                                props: {
                                    text: "GreenHarvest Agro Corp leverages cutting-edge technology to optimize every stage of the agricultural supply chain.",
                                    align: "left",
                                    color: "rgba(16, 25, 18, 0.7)",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    // Feature Cards Row (3 columns)
                    {
                        id: "features-grid-col",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                id: "feature-1",
                                type: "FeatureCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBfV-RzXX_mnIinEfJAhAgRGuqs4eARmGkY3IpYvW5wU1lZwU9EvCW0sjjJmK7Sm09Up42EN_GZhQf-CPfeSW9jp71Xpida8BoklAkR7J1G1q65wxGxo4dxkA0CFC9bEO76tUQ4w9WZezhNZcX5xUIAnLsBAWNk7kBlCthiMFtkV8CsqRbcZcLiOeFOE4ZXD3eK39KDghPOtyWgmhGfTLRNNuAIBqIzewCzb_Y0WU0V7PNmj81dUAQhmwQgj5YpVt2TXLc7BrOrfU",
                                    title: "Precision Farming",
                                    description: "Real-time monitoring and architectural grid management for maximum yield optimization.",
                                    imageAspectRatio: "16/9",
                                    titleColor: "#101912",
                                    descriptionColor: "rgba(16, 25, 18, 0.6)"
                                }
                            },
                            {
                                id: "feature-2",
                                type: "FeatureCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcu7UCW-PJwxOZPlBDZKqImhjjIpCNPs7nTpi5-mf6eErqCisdF5Ds2KZCJo_7vctLIVPY4s4xP8EkzgwS_dyEbpoGqZNwf6XFc6NOI1jVCTiIwL4RSkl_8PBx7PN7haxx9hB7raeNCacoGbGPTNsr7wB2mr_tedHJdd8Xi8wJCglVe-GxfEuKYRHt7sThMc6LDufXr6kupXw_JT5rqT_bP3BXFAxqmDV-LtkQVXHBQUWs2cbDNMHTpdWkdO3myIti2I84pzSOO0E",
                                    title: "Global Logistics",
                                    description: "Seamless export metrics and real-time tracking across international shipping lanes.",
                                    imageAspectRatio: "16/9",
                                    titleColor: "#101912",
                                    descriptionColor: "rgba(16, 25, 18, 0.6)"
                                }
                            },
                            {
                                id: "feature-3",
                                type: "FeatureCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdSB5bKnnOGq1TkAR0CKBk5WEk-BAT1InuHToxBzPMuBSEwm_vgJ1kT7XkwRrPhUo6lC6YqBftAsAf9nV6BBhuRUh3Ko20-3zOmuoARLHAmJA-ZPKAbP4ly1vtMRLAQ9sztmm6kvNGwF6TKCvkabo4x8kU8riTCNQ7X1ncK3S106rqsDQhHQqVA-etCFNR61tAI-0r0A6-i31-HN5pFDJFmdE-Rre_yq8nkHdtzivX8wkXunFTLt29qb9QRQvRXAwQp5sciiscikc",
                                    title: "Green Energy",
                                    description: "100% renewable power infrastructure for all greenhouse and processing operations.",
                                    imageAspectRatio: "16/9",
                                    titleColor: "#101912",
                                    descriptionColor: "rgba(16, 25, 18, 0.6)"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            id: "growth-cycle-section",
            type: "Section",
            props: {
                paddingY: 100,
                backgroundColor: "#ffffff",
                borderTopWidth: 1,
                borderTopColor: "#e7f3e7"
            },
            structure: {
                type: "Section",
                columns: [
                    {
                        id: "timeline-col",
                        width: "100%",
                        elements: [
                            {
                                id: "growth-timeline",
                                type: "InteractiveTimeline",
                                props: {
                                    title: "Farm-to-Fork: The Growth Cycle",
                                    description: "Trace the journey of our Organic Vine Tomatoes from the initial seedling to your kitchen table.",
                                    accentColor: "#4c9a4c",
                                    items: [
                                        {
                                            icon: "Leaf",
                                            title: "Seed Selection",
                                            description: "Careful selection of heirloom, non-GMO seeds adapted to our local climate.",
                                            label: "Week 0"
                                        },
                                        {
                                            icon: "Sprout",
                                            title: "Germination",
                                            description: "Controlled greenhouse environment with nutrient-rich compost tea.",
                                            label: "Week 3"
                                        },
                                        {
                                            icon: "Trees",
                                            title: "Soil Integration",
                                            description: "Transplanting to our mineral-rich open fields for natural sunlight exposure.",
                                            label: "Week 8"
                                        },
                                        {
                                            icon: "ShoppingBasket",
                                            title: "Hand Harvest",
                                            description: "Picked at the peak of ripeness and delivered within 24 hours.",
                                            label: "Week 14"
                                        }

                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    // ============================================================================
    // FOOTER - Atomic composition per RENDERER_GUIDELINES
    // "Footer → Section (grid) + Logo + LinkList columns + SocialLinks"
    // ============================================================================
    footer: {
        key: "green-harvest-footer",
        type: "Footer",
        category: "footer",
        name: "GreenHarvest Footer",
        description: "4-column footer with newsletter",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#ffffff",
                paddingY: 80,
                paddingX: 80,
                fullWidth: true,
                borderTopWidth: 1,
                borderTopColor: "#e9f1eb"
            },
            columns: [
                // Column 1: Logo & Tagline
                {
                    id: "footer-logo-col",
                    width: "25%",
                    elements: [
                        {
                            id: "footer-logo",
                            type: "Heading",
                            props: {
                                text: "GreenHarvest",
                                tag: "h5",
                                color: "#101912",
                                fontWeight: "bold"
                            }
                        },
                        {
                            id: "footer-tagline",
                            type: "Paragraph",
                            props: {
                                text: "Leading the revolution in sustainable agri-tech for a better tomorrow.",
                                size: "sm",
                                color: "rgba(16, 25, 18, 0.6)"
                            }
                        }
                    ]
                },
                // Column 2: Quick Links
                {
                    id: "footer-links-col",
                    width: "25%",
                    elements: [{
                        id: "footer-links",
                        type: "LinkList",
                        props: {
                            title: "QUICK LINKS",
                            titleColor: "#101912",
                            textColor: "rgba(16, 25, 18, 0.6)",
                            hoverColor: "#16a34a",
                            items: [
                                { label: "Our Farms", href: "#farms" },
                                { label: "Technology", href: "#tech" },
                                { label: "Sustainability Report", href: "#sustainability" }
                            ]
                        }
                    }]
                },
                // Column 3: Legal
                {
                    id: "footer-legal-col",
                    width: "25%",
                    elements: [{
                        id: "footer-legal",
                        type: "LinkList",
                        props: {
                            title: "LEGAL",
                            titleColor: "#101912",
                            textColor: "rgba(16, 25, 18, 0.6)",
                            hoverColor: "#16a34a",
                            items: [
                                { label: "Privacy Policy", href: "#privacy" },
                                { label: "Export Terms", href: "#terms" },
                                { label: "Cookie Policy", href: "#cookies" }
                            ]
                        }
                    }]
                },
                // Column 4: Newsletter
                {
                    id: "footer-newsletter-col",
                    width: "25%",
                    elements: [{
                        id: "footer-newsletter",
                        type: "NewsletterSignup",
                        props: {
                            title: "STAY UPDATED",
                            titleColor: "#101912",
                            placeholder: "Email address",
                            buttonText: "→",
                            buttonBg: "#16a34a",
                            buttonTextColor: "#ffffff",
                            inputBg: "#f0f4f1"
                        }
                    }]
                }
            ]
        }
    }
};

module.exports = greenHarvestHome;
