/**
 * UrbanNest - Home Page
 * Theme: Architectural Excellence & Smart Living
 * Primary Color: #ecb613 (Gold)
 * Dark Mode: Supported
 * Fonts: Space Grotesk
 */

const urbanNestHome = {
    // ============================================================================
    // HEADER - NAVBAR
    // ============================================================================
    header: {
        key: "urban-nest-header",
        type: "Navbar",
        category: "header",
        name: "UrbanNest Header",
        description: "Architectural navigation header with consultation CTA",
        structure: {
            type: "Header",
            defaultProps: {
                fullWidth: true,
                backgroundColor: "rgba(248, 248, 246, 0.8)",
                backdropFilter: "blur(12px)",
                borderBottomColor: "rgba(30, 41, 59, 0.1)",
                borderBottomWidth: 1
            },
            columns: [{
                id: "header-col",
                width: "100%",
                elements: [{
                    id: "urban-nest-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "icon",
                        logoIcon: "apartment",
                        logoText: "UrbanNest",
                        logoTextColor: "#1e293b",
                        logoIconColor: "#ecb613",
                        accentColor: "#ecb613",
                        backgroundColor: "rgba(248, 248, 246, 0.95)",
                        darkBackgroundColor: "rgba(26, 20, 16, 0.95)",
                        sticky: true,
                        linkColor: "#1e293b",
                        darkLinkColor: "#f8f8f6",
                        linkHoverColor: "#ecb613",
                        links: [
                            { label: "Developments", href: "#developments" },
                            { label: "Sustainability", href: "#sustainability" },
                            { label: "Smart Tech", href: "#smart-tech" },
                            { label: "Investors", href: "#investors" }
                        ],
                        showButton: true,
                        buttonText: "Consultation",
                        buttonLink: "#contact",
                        buttonRadius: "full",
                        buttonStyle: "solid",
                        buttonColor: "#1e293b",
                        buttonBgColor: "#ecb613"
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
        // HERO: ARCHITECTURAL MASTERPIECE
        // --------------------------------------------------------------------------
        {
            key: "hero-architectural",
            name: "Hero: Architectural Masterpiece",
            description: "Split layout hero with heading, description, buttons and feature image",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 120,
                    paddingX: 24,
                    backgroundColor: "#f8f8f6",
                    darkBackgroundColor: "#1a1410",
                    fullWidth: true,
                    minHeight: "90vh"
                },
                columns: [
                    {
                        id: "hero-text-col",
                        width: "50%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: 32
                        },
                        elements: [
                            {
                                id: "hero-badge",
                                type: "Badge",
                                props: {
                                    text: "Engineering Excellence",
                                    backgroundColor: "rgba(236, 182, 19, 0.1)",
                                    borderColor: "#ecb613",
                                    textColor: "#ecb613",
                                    fontSize: 10,
                                    fontWeight: "bold",
                                    padding: 8,
                                    paddingX: 12,
                                    borderRadius: 24,
                                    letterSpacing: "0.02em"
                                }
                            },
                            {
                                id: "hero-heading",
                                type: "Heading",
                                props: {
                                    text: "Visionary Living, Engineered Perfection",
                                    tag: "h1",
                                    fontSize: 72,
                                    fontWeight: "900",
                                    color: "#1e293b",
                                    darkColor: "#f8f8f6",
                                    lineHeight: 0.9,
                                    letterSpacing: "-0.02em"
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Redefining urban landscapes through the intersection of architectural precision, luxury aesthetics, and multi-layered sustainable design.",
                                    fontSize: 18,
                                    color: "#4b5563",
                                    darkColor: "#b0b0a0",
                                    lineHeight: 1.6,
                                    maxWidth: "500px"
                                }
                            },
                            {
                                id: "hero-buttons",
                                type: "ButtonGroup",
                                props: {
                                    buttons: [
                                        {
                                            text: "Explore Projects",
                                            backgroundColor: "#ecb613",
                                            textColor: "#1e293b",
                                            fontWeight: "bold",
                                            fontSize: 14,
                                            padding: 16,
                                            paddingX: 32,
                                            borderRadius: 8
                                        },
                                        {
                                            text: "Technical Specs",
                                            backgroundColor: "#ffffff",
                                            textColor: "#1e293b",
                                            borderColor: "#e5e5e0",
                                            borderWidth: 1,
                                            fontWeight: "bold",
                                            fontSize: 14,
                                            padding: 16,
                                            paddingX: 32,
                                            borderRadius: 8,
                                            darkBackgroundColor: "#2a2415",
                                            darkTextColor: "#f8f8f6",
                                            darkBorderColor: "#3a3520"
                                        }
                                    ],
                                    gap: "gap-4",
                                    layout: "horizontal"
                                }
                            }
                        ]
                    },
                    {
                        id: "hero-image-col",
                        width: "50%",
                        defaultProps: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        elements: [
                            {
                                id: "hero-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7wmQInDkWdpT1h8YJ4nElxKJxTcGXrbx1u7KakuQpnOiMc6KDJDewBFJKCZqUz8UNh1Ef0PY9ZXBM8KDIgpJj8j9MWuqIWJIbxUVTX1O-tkNLGvqFgeFAZYtYpyfPmp6WSp08ThPPRod08CltgoxEbgxx7RJ3W3Y157f1wWUbTehakU-bEUBL6gdq71vFQ3KSN443vvjs_fKY7QvMZyiIMksy0X8OrQidDT4RySPEWtacVHgwBX5YspYwkigxB7-t9BhiocO6yeY",
                                    alt: "Modern glass skyscraper architecture",
                                    borderRadius: 12,
                                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                                    height: "600px",
                                    objectFit: "cover"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CONSTRUCTION PROGRESS TICKER
        // --------------------------------------------------------------------------
        {
            key: "construction-ticker",
            name: "Construction Progress Ticker",
            description: "Animated marquee showing active construction updates",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 16,
                    paddingX: 24,
                    backgroundColor: "#1e293b",
                    darkBackgroundColor: "#1e293b",
                    fullWidth: true,
                    borderTop: "1px solid #334155",
                    borderBottom: "1px solid #334155",
                    textAlign: "center",
                    overflow: "hidden"
                },
                columns: [
                    {
                        id: "ticker-content",
                        width: "100%",
                        elements: [
                            {
                                id: "ticker-text",
                                type: "Paragraph",
                                props: {
                                    text: "● SITE ALPHA: ZENITH TOWER - 82% CONCRETE POUR COMPLETE  •  ● SITE BETA: ECHO VALLEY - HVAC INSTALLATION PHASE 4  •  ● GLOBAL: 1,240,000 SQ FT UNDER MANAGEMENT  •  ● TECH: SMART GRID SYNC AT 99.8% EFFICIENCY",
                                    fontSize: 11,
                                    fontWeight: "600",
                                    color: "#94a3b8",
                                    fontFamily: "monospace",
                                    letterSpacing: "0.05em",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // THE URBAN GRID: FEATURED DEVELOPMENTS
        // --------------------------------------------------------------------------
        {
            key: "urban-grid-section",
            name: "Urban Grid: Featured Developments",
            description: "Staggered card grid showcasing flagship projects",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#f8f8f6",
                    darkBackgroundColor: "#1a1410",
                    fullWidth: true,
                    layout: "grid",
                    columns: 12,
                    gap: 24,
                    alignItems: "stretch"
                },
                columns: [
                    {
                        id: "grid-header",
                        width: "100%",
                        elements: [
                            {
                                id: "grid-heading",
                                type: "Heading",
                                props: {
                                    text: "The Urban Grid",
                                    tag: "h2",
                                    fontSize: 48,
                                    fontWeight: "bold",
                                    color: "#1e293b",
                                    darkColor: "#f8f8f6",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "grid-description",
                                type: "Paragraph",
                                props: {
                                    text: "Our flagship developments are categorized into unique operational zones, each optimized for specific lifestyle and sustainability metrics.",
                                    fontSize: 16,
                                    color: "#4b5563",
                                    darkColor: "#b0b0a0",
                                    maxWidth: "600px",
                                    lineHeight: 1.6
                                }
                            }
                        ]
                    },
                    {
                        id: "grid-stats",
                        width: "100%",
                        elements: [
                            {
                                id: "stat-assets",
                                type: "Badge",
                                props: {
                                    text: "Total Assets: 2.4M Sq Ft",
                                    backgroundColor: "#f0f0eb",
                                    borderColor: "#ecb613",
                                    borderWidth: 2,
                                    textColor: "#1e293b",
                                    fontSize: 13,
                                    fontWeight: "bold",
                                    padding: 20,
                                    paddingX: 24,
                                    borderRadius: 8,
                                    darkBackgroundColor: "#2a2415",
                                    darkTextColor: "#f8f8f6",
                                    darkBorderColor: "#ecb613",
                                    marginRight: 16
                                }
                            },
                            {
                                id: "stat-sites",
                                type: "Badge",
                                props: {
                                    text: "Active Sites: 18 Global",
                                    backgroundColor: "#f0f0eb",
                                    borderColor: "#ecb613",
                                    borderWidth: 2,
                                    textColor: "#1e293b",
                                    fontSize: 13,
                                    fontWeight: "bold",
                                    padding: 20,
                                    paddingX: 24,
                                    borderRadius: 8,
                                    darkBackgroundColor: "#2a2415",
                                    darkTextColor: "#f8f8f6",
                                    darkBorderColor: "#ecb613"
                                }
                            }
                        ]
                    },
                    {
                        id: "card-zenith-large",
                        width: "32%",
                        elements: [
                            {
                                id: "zenith-card",
                                type: "FeatureCard",
                                props: {
                                    title: "The Zenith Tower",
                                    description: "Zone 01 / Luxury High-Rise",
                                    icon: "apartment",
                                    iconColor: "#ecb613",
                                    backgroundColor: "#333333",
                                    titleColor: "#ffffff",
                                    descriptionColor: "#ecb613",
                                    layout: "vertical",
                                    padding: 40,
                                    borderRadius: 12,
                                    minHeight: "500px",
                                    textAlign: "left",
                                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7wmQInDkWdpT1h8YJ4nElxKJxTcGXrbx1u7KakuQpnOiMc6KDJDewBFJKCZqUz8UNh1Ef0PY9ZXBM8KDIgpJj8j9MWuqIWJIbxUVTX1O-tkNLGvqFgeFAZYtYpyfPmp6WSp08ThPPRod08CltgoxEbgxx7RJ3W3Y157f1wWUbTehakU-bEUBL6gdq71vFQ3KSN443vvjs_fKY7QvMZyiIMksy0X8OrQidDT4RySPEWtacVHgwBX5YspYwkigxB7-t9BhiocO6yeY",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "card-echo-valley",
                        width: "32%",
                        elements: [
                            {
                                id: "echo-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Echo Valley Villas",
                                    description: "Sustainable low-density living",
                                    icon: "villa",
                                    iconColor: "#1e293b",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#2a2415",
                                    titleColor: "#1e293b",
                                    darkTitleColor: "#f8f8f6",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 12,
                                    minHeight: "240px",
                                    border: "1px solid #e5e5e0",
                                    darkBorder: "1px solid #3a3520"
                                }
                            }
                        ]
                    },
                    {
                        id: "card-nexus-hub",
                        width: "32%",
                        elements: [
                            {
                                id: "nexus-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Nexus Hub: The Smart Workplace",
                                    description: "Where innovation meets productivity",
                                    icon: "work_spaces",
                                    iconColor: "#1e293b",
                                    backgroundColor: "#ecb613",
                                    titleColor: "#1e293b",
                                    descriptionColor: "rgba(30, 41, 59, 0.7)",
                                    layout: "vertical",
                                    padding: 40,
                                    borderRadius: 12,
                                    minHeight: "240px",
                                    textAlign: "left"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SMART HOME ECOSYSTEM
        // --------------------------------------------------------------------------
        {
            key: "smart-ecosystem-section",
            name: "Smart Home Ecosystem",
            description: "Technical deep-dive into integrated smart systems",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#1e293b",
                    darkBackgroundColor: "#1e293b",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "ecosystem-left",
                        width: "50%",
                        defaultProps: {
                            display: "flex",
                            alignItems: "center"
                        },
                        elements: [
                            {
                                id: "ecosystem-blueprint",
                                type: "Image",
                                props: {
                                    src: "https://www.transparenttextures.com/patterns/carbon-fibre.png",
                                    alt: "Smart home blueprint visualization",
                                    borderRadius: 16,
                                    border: "1px solid #475569",
                                    backgroundColor: "#0f172a",
                                    height: "500px",
                                    minHeight: "500px"
                                }
                            }
                        ]
                    },
                    {
                        id: "ecosystem-right",
                        width: "50%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            paddingX: 40,
                            gap: 32
                        },
                        elements: [
                            {
                                id: "ecosystem-heading",
                                type: "Heading",
                                props: {
                                    text: "Smart Home Ecosystem",
                                    tag: "h2",
                                    fontSize: 48,
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                    lineHeight: 1.2,
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "ecosystem-description",
                                type: "Paragraph",
                                props: {
                                    text: "Every UrbanNest development is equipped with a centralized AI operating system. We don't just build walls; we engineer living systems that learn from your habits and optimize resource consumption in real-time.",
                                    fontSize: 16,
                                    color: "#cbd5e1",
                                    lineHeight: 1.8
                                }
                            },
                            {
                                id: "ecosystem-features",
                                type: "FeatureCard",
                                props: {
                                    features: [
                                        {
                                            icon: "bolt",
                                            title: "Energy Sync",
                                            description: "Real-time balancing of renewable loads across the community grid."
                                        },
                                        {
                                            icon: "shield_with_heart",
                                            title: "Bio-Security",
                                            description: "HEPA-13 air filtration with integrated thermal mapping."
                                        }
                                    ],
                                    iconColor: "#ecb613",
                                    titleColor: "#ffffff",
                                    descriptionColor: "#cbd5e1"
                                }
                            },
                            {
                                id: "ecosystem-link",
                                type: "Paragraph",
                                props: {
                                    text: "Download Ecosystem Whitepaper →",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    color: "#ecb613",
                                    marginTop: 24
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SUSTAINABLE INFRASTRUCTURE
        // --------------------------------------------------------------------------
        {
            key: "sustainable-infra-section",
            name: "Sustainable Infrastructure",
            description: "Technical sustainability metrics and achievements",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#f8f8f6",
                    darkBackgroundColor: "#1a1410",
                    fullWidth: true,
                    textAlign: "center"
                },
                columns: [
                    {
                        id: "infra-header",
                        width: "100%",
                        defaultProps: {
                            marginBottom: 80
                        },
                        elements: [
                            {
                                id: "infra-heading",
                                type: "Heading",
                                props: {
                                    text: "Sustainable Infrastructure",
                                    tag: "h2",
                                    fontSize: 48,
                                    fontWeight: "bold",
                                    color: "#1e293b",
                                    darkColor: "#f8f8f6",
                                    marginBottom: 20
                                }
                            },
                            {
                                id: "infra-meta",
                                type: "Paragraph",
                                props: {
                                    text: "Environmental Impact  •  Carbon Offset  •  LEED Platinum",
                                    fontSize: 11,
                                    fontWeight: "bold",
                                    color: "#94a3b8",
                                    letterSpacing: "0.05em"
                                }
                            }
                        ]
                    },
                    {
                        id: "infra-cards-grid",
                        width: "100%",
                        defaultProps: {
                            layout: "grid",
                            columns: 3,
                            gap: 32
                        },
                        elements: [
                            {
                                id: "infra-card-carbon",
                                type: "FeatureCard",
                                props: {
                                    title: "Embodied Carbon Reduction",
                                    description: "Our proprietary Green-Crete mix reduces lifecycle carbon footprint by 42% compared to standard structural builds.",
                                    icon: "eco",
                                    iconColor: "#ecb613",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#2a2415",
                                    titleColor: "#1e293b",
                                    darkTitleColor: "#f8f8f6",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 12,
                                    border: "1px solid #e5e5e0",
                                    darkBorder: "1px solid #3a3520",
                                    extraText: "42% REDUCTION",
                                    extraTextColor: "#ecb613",
                                    fontSize: 11,
                                    fontWeight: "bold"
                                }
                            },
                            {
                                id: "infra-card-water",
                                type: "FeatureCard",
                                props: {
                                    title: "Greywater Micro-Grids",
                                    description: "Individual unit recycling systems providing 100% of non-potable requirements for landscaping and cooling.",
                                    icon: "water_drop",
                                    iconColor: "#ecb613",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#2a2415",
                                    titleColor: "#1e293b",
                                    darkTitleColor: "#f8f8f6",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 12,
                                    border: "1px solid #e5e5e0",
                                    darkBorder: "1px solid #3a3520",
                                    extraText: "88% RECLAIMED",
                                    extraTextColor: "#ecb613",
                                    fontSize: 11,
                                    fontWeight: "bold"
                                }
                            },
                            {
                                id: "infra-card-energy",
                                type: "FeatureCard",
                                props: {
                                    title: "Photovoltaic Skin Integration",
                                    description: "Transparent solar collection panels integrated directly into building glass, generating 12MW of clean power annually.",
                                    icon: "solar_power",
                                    iconColor: "#ecb613",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#2a2415",
                                    titleColor: "#1e293b",
                                    darkTitleColor: "#f8f8f6",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 12,
                                    border: "1px solid #e5e5e0",
                                    darkBorder: "1px solid #3a3520",
                                    extraText: "12MW TARGET",
                                    extraTextColor: "#ecb613",
                                    fontSize: 11,
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CTA: GLOBAL PRESENCE
        // --------------------------------------------------------------------------
        {
            key: "global-cta-section",
            name: "Global Presence CTA",
            description: "Call-to-action for investors and clients",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#ecb613",
                    darkBackgroundColor: "#ecb613",
                    fullWidth: true,
                    textAlign: "center"
                },
                columns: [
                    {
                        id: "cta-content",
                        width: "100%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 32
                        },
                        elements: [
                            {
                                id: "cta-heading",
                                type: "Heading",
                                props: {
                                    text: "Ready to secure your piece of the Future?",
                                    tag: "h2",
                                    fontSize: 72,
                                    fontWeight: "900",
                                    color: "#1e293b",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.02em",
                                    maxWidth: "800px"
                                }
                            },
                            {
                                id: "cta-buttons",
                                type: "ButtonGroup",
                                props: {
                                    buttons: [
                                        {
                                            text: "Contact Developers",
                                            backgroundColor: "#1e293b",
                                            textColor: "#ffffff",
                                            fontWeight: "bold",
                                            fontSize: 16,
                                            padding: 20,
                                            paddingX: 48,
                                            borderRadius: 8
                                        },
                                        {
                                            text: "Investor Relations",
                                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                                            textColor: "#1e293b",
                                            borderColor: "rgba(255, 255, 255, 0.4)",
                                            borderWidth: 1,
                                            fontWeight: "bold",
                                            fontSize: 16,
                                            padding: 20,
                                            paddingX: 48,
                                            borderRadius: 8
                                        }
                                    ],
                                    gap: "gap-6",
                                    layout: "horizontal",
                                    justifyContent: "center"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    // ============================================================================
    // FOOTER
    // ============================================================================
    footer: {
        key: "urban-nest-footer",
        type: "Footer",
        category: "footer",
        name: "UrbanNest Footer",
        description: "Multi-column footer with company info, links, and contact information",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#f8f8f6",
                darkBackgroundColor: "#1a1410",
                paddingY: 80,
                paddingX: 80,
                fullWidth: true,
                borderTopColor: "rgba(30, 41, 59, 0.1)",
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
                                text: "UrbanNest",
                                tag: "h4",
                                color: "#ecb613",
                                darkColor: "#ecb613",
                                marginBottom: 24
                            }
                        },
                        {
                            id: "footer-desc",
                            type: "Paragraph",
                            props: {
                                text: "Engineering visionary living spaces through architectural precision, sustainable innovation, and smart-living ecosystems.",
                                color: "#4b5563",
                                darkColor: "#b0b0a0",
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
                                iconColor: "#ecb613",
                                darkIconColor: "#ecb613",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-developments",
                    width: "18%",
                    elements: [
                        {
                            id: "links-developments",
                            type: "LinkList",
                            props: {
                                title: "Developments",
                                titleColor: "#1e293b",
                                darkTitleColor: "#f8f8f6",
                                textColor: "#4b5563",
                                darkTextColor: "#b0b0a0",
                                hoverColor: "#ecb613",
                                darkHoverColor: "#ecb613",
                                items: [
                                    { label: "Zenith Tower", href: "#" },
                                    { label: "Echo Valley Villas", href: "#" },
                                    { label: "Nexus Hub", href: "#" },
                                    { label: "Portfolio", href: "#" }
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
                                titleColor: "#1e293b",
                                darkTitleColor: "#f8f8f6",
                                textColor: "#4b5563",
                                darkTextColor: "#b0b0a0",
                                hoverColor: "#ecb613",
                                darkHoverColor: "#ecb613",
                                items: [
                                    { label: "Sustainability", href: "#" },
                                    { label: "Technical Specs", href: "#" },
                                    { label: "Investor Relations", href: "#" },
                                    { label: "Press Kit", href: "#" }
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
                                title: "Contact",
                                titleColor: "#1e293b",
                                darkTitleColor: "#f8f8f6",
                                textColor: "#4b5563",
                                darkTextColor: "#b0b0a0",
                                hoverColor: "#ecb613",
                                darkHoverColor: "#ecb613",
                                items: [
                                    { label: "Level 84, The Zenith Tower", href: "#" },
                                    { label: "Urban Grid District 01", href: "#" },
                                    { label: "Singapore, 049317", href: "#" },
                                    { label: "+65 4820 9931", href: "#" }
                                ]
                            }
                        }
                    ]
                }
            ],
            footerBottom: {
                copyrightText: "© 2024 UrbanNest Developers. All rights reserved.",
                links: [
                    { label: "Privacy Policy", href: "#" },
                    { label: "Terms of Service", href: "#" }
                ],
                textColor: "#4b5563",
                darkTextColor: "#b0b0a0",
                linkColor: "#4b5563",
                darkLinkColor: "#b0b0a0",
                linkHoverColor: "#ecb613",
                darkLinkHoverColor: "#ecb613"
            }
        }
    }
};

module.exports = { urbanNestHome };
