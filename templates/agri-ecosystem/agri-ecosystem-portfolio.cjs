/**
 * AgriEcosystem - Portfolio Page
 * Theme: Organic Agriculture, Sustainable Practices, Regenerative Farming
 * Primary Color: #32a850 (Bright Green)
 * Dark Mode: Supported (#102215 background)
 * Fonts: Space Grotesk
 */

const agriEcosystemPortfolio = {
    // ============================================================================
    // HEADER - NAVBAR
    // ============================================================================
    header: {
        key: "agri-ecosystem-portfolio-header",
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
        // PORTFOLIO DEEP-DIVE CAROUSEL SECTION
        // --------------------------------------------------------------------------
        {
            key: "portfolio-carousel",
            name: "Portfolio Deep-Dive Carousel",
            description: "Horizontal carousel showing product categories with tech specs",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "carousel-col",
                        width: "100%",
                        elements: [
                            {
                                id: "portfolio-carousel-section",
                                type: "HorizontalCarouselRenderer",
                                props: {
                                    title: "The Farm-to-Table Experience",
                                    primaryColor: "#32a850",
                                    textColor: "#1b4332",
                                    darkTextColor: "#f4f1ea",
                                    subtextColor: "#4b5563",
                                    darkSubtextColor: "#b0b8c4",
                                    showNavigation: true,
                                    items: [
                                        {
                                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZR-eP0O9yliJc6v9K1RI_9DYS6h_R5LYT1IMJRlJZ4Vi4BxGnA1ONtr9VDtHBOq2tu0WKiutv3kK6T_Njzg7dMYMDxl7Osdeipbyy3a6qIvJ16Z-Qwh-cYu-roIQZ9qPssbhOxqseQaa_X0Ze9pDuQ6iG7shV9wZOKVyEXgBCK55r7iCvCYJdJTcz_EGyHQP6NnxRk-yTiDzLIH_K-RhYKXxnykOdSSlYeEWFL-rxRKzHWrJR13lHf5P-FpZYZaOjJWHlyXCW4Tc",
                                            label: "01. CATEGORY",
                                            title: "Regenerative Grains",
                                            description: "Ancient varieties grown with zero-till techniques to preserve subterranean microbial life."
                                        },
                                        {
                                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_TFsrEBY5jjTtoSZUaDNOyfrnEsV7oqSKdY75hkzOuBtfu3ssiwHGWAzaFvnLnp-9eCLrhCEcMBB9goQs725OGBsd8y53dUe57TT-n31QVGbwVA_zRhekfXA-srP5YzCom6msZxpNu_oWNJJsWx7QZ6F9coD-VUA1Hsmt6s539bf1MQNZ13W4DgntubZb5vPIC1vgrxjz5zM6lXkFAOE9pUJVJhlPDe8rdPNtmcbnkO_2ndscBLmzHxnA5T84G_WSFrhabOjerFI",
                                            label: "02. CATEGORY",
                                            title: "Orchard Fruits",
                                            description: "Pollinator-friendly orchards producing high-antioxidant fruits without synthetic pesticides."
                                        },
                                        {
                                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7CXYy0Hp_V5LIw5l_MV2D7kgTENDaAUb4TuVACjNOeulhOLpW7Aws2xn3oMpphEzL4u0VLnCc3KlwqY4yNlO6BKMZ9Gu849DOtNOjFZ_dS0ZmBYlAijIFBy6pZ6XtkyoWC5ZRMjnqHeEtoCd_Ec3FoI40fJXwWTFHAQ0SvTlmpe8KJQC177DX1vIGzf_G99zmIuqwepwnyZbzASsUwI4h23KgZ2YJQYfozVhHO3TImRaFyFpb1mNxlU3813oyV5As7LgiP0FRoHo",
                                            label: "03. CATEGORY",
                                            title: "Bio-Dynamic Nutrients",
                                            description: "Proprietary soil additives crafted from farm-waste fermentation and mineral deposits."
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
        // GROWTH JOURNEY TIMELINE SECTION
        // --------------------------------------------------------------------------
        {
            key: "growth-journey-timeline",
            name: "Growth Journey Timeline",
            description: "Vertical timeline showing the growth journey from seed to harvest",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "timeline-col",
                        width: "100%",
                        elements: [
                            {
                                id: "growth-journey-timeline",
                                type: "TimelineSection",
                                props: {
                                    title: "The Growth Journey",
                                    subtitle: "Traceability",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#0a0a0c",
                                    textColor: "#1b4332",
                                    subtitleColor: "#32a850",
                                    milestones: [
                                        {
                                            year: "Day 1",
                                            title: "1. Seed Selection",
                                            description: "Non-GMO, heirloom genetics sourced for climate resilience.",
                                            color: "#32a850"
                                        },
                                        {
                                            year: "Day 45",
                                            title: "2. Precision Growth",
                                            description: "IoT-monitored hydration and soil nutrition management.",
                                            color: "#32a850"
                                        },
                                        {
                                            year: "Day 90",
                                            title: "3. Peak Maturity",
                                            description: "Natural ripening under optimized sun-cycle tracking.",
                                            color: "#32a850"
                                        },
                                        {
                                            year: "Day 105",
                                            title: "4. Rapid Harvest",
                                            description: "Cold-chain logistics ensuring 12-hour field-to-storage.",
                                            color: "#32a850"
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
        // SOIL SCIENCE SECTION - TWO COLUMN LAYOUT
        // --------------------------------------------------------------------------
        {
            key: "soil-science-section",
            name: "Soil Science Content Section",
            description: "Two-column section with analysis and features",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    gap: 64,
                    alignItems: "flex-start"
                },
                columns: [
                    {
                        id: "soil-science-left",
                        width: "50%",
                        elements: [
                            {
                                id: "soil-image-features",
                                type: "ImageWithFeaturesRenderer",
                                props: {
                                    title: "Soil Horizons Analysis",
                                    subtitle: "The Science Lab",
                                    description: "Our 'Soil First' philosophy utilizes advanced microbiology to restore depleted lands.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7CXYy0Hp_V5LIw5l_MV2D7kgTENDaAUb4TuVACjNOeulhOLpW7Aws2xn3oMpphEzL4u0VLnCc3KlwqY4yNlO6BKMZ9Gu849DOtNOjFZ_dS0ZmBYlAijIFBy6pZ6XtkyoWC5ZRMjnqHeEtoCd_Ec3FoI40fJXwWTFHAQ0SvTlmpe8KJQC177DX1vIGzf_G99zmIuqwepwnyZbzASsUwI4h23KgZ2YJQYfozVhHO3TImRaFyFpb1mNxlU3813oyV5As7LgiP0FRoHo",
                                    imageAlt: "Soil analysis",
                                    textColor: "#1b4332",
                                    darkTextColor: "#ffffff",
                                    subtitleColor: "#32a850",
                                    features: [
                                        {
                                            title: "O-Horizon (Organic)",
                                            description: "Decomposing plant matter, rich in humus and vital fungi.",
                                            icon: "science"
                                        },
                                        {
                                            title: "A-Horizon (Topsoil)",
                                            description: "Mineral particles mixed with organic material.",
                                            icon: "science"
                                        },
                                        {
                                            title: "B-Horizon (Subsoil)",
                                            description: "Accumulated minerals and root network foundations.",
                                            icon: "science"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        id: "soil-science-right",
                        width: "50%",
                        elements: [
                            {
                                id: "science-badge",
                                type: "Badge",
                                props: {
                                    text: "The Science Lab",
                                    backgroundColor: "transparent",
                                    textColor: "#32a850",
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    letterSpacing: 1.5,
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "regenerative-heading",
                                type: "Heading",
                                props: {
                                    text: "Regenerative Precision",
                                    tag: "h2",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 36,
                                    fontWeight: "bold",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "science-description",
                                type: "Paragraph",
                                props: {
                                    text: "By focusing on mycorrhizal fungal networks, we've increased crop resilience by 40% against extreme drought.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    fontSize: 18,
                                    lineHeight: 1.8,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "feature-1",
                                type: "Paragraph",
                                props: {
                                    text: "Zero-Tillage: Preserving soil structure and carbon density.",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 16,
                                    fontWeight: 600,
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "feature-2",
                                type: "Paragraph",
                                props: {
                                    text: "Cover Cropping: Preventing erosion while fixing natural nitrogen.",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 16,
                                    fontWeight: 600,
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "feature-3",
                                type: "Paragraph",
                                props: {
                                    text: "Integrated Pest Management: Using nature's own predators.",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 16,
                                    fontWeight: 600,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "co2-stat",
                                type: "Heading",
                                props: {
                                    text: "4.8t CO2 Sequestered / Acre",
                                    tag: "h3",
                                    color: "#32a850",
                                    darkColor: "#32a850",
                                    fontSize: 24,
                                    fontWeight: "bold",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "regenerative-stat",
                                type: "Heading",
                                props: {
                                    text: "100% Regenerative Practice",
                                    tag: "h3",
                                    color: "#32a850",
                                    darkColor: "#32a850",
                                    fontSize: 24,
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CERTIFICATION GALLERY SECTION
        // --------------------------------------------------------------------------
        {
            key: "certification-gallery",
            name: "Certification Gallery",
            description: "Grid of certification logos and labels",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f9f8f6",
                    darkBackgroundColor: "#0a0a0a",
                    borderTopColor: "rgba(27, 67, 50, 0.1)",
                    borderTopWidth: 1,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "certification-col",
                        width: "100%",
                        elements: [
                            {
                                id: "certifications-grid",
                                type: "ClientLogosGrid",
                                props: {
                                    columns: "6",
                                    gap: 32,
                                    showTitles: true,
                                    logoHeight: 80,
                                    hoverEffect: true,
                                    backgroundColor: "transparent",
                                    logos: [
                                        {
                                            url: "https://www.svgrepo.com/show/403434/verified-badge.svg",
                                            title: "USDA Organic"
                                        },
                                        {
                                            url: "https://www.svgrepo.com/show/98265/world-globe.svg",
                                            title: "Fair Trade"
                                        },
                                        {
                                            url: "https://www.svgrepo.com/show/377976/leaf-eco.svg",
                                            title: "Carbon Neutral"
                                        },
                                        {
                                            url: "https://www.svgrepo.com/show/283260/people-group.svg",
                                            title: "B Corp Certified"
                                        },
                                        {
                                            url: "https://www.svgrepo.com/show/408456/spa-zen.svg",
                                            title: "Biodynamic"
                                        },
                                        {
                                            url: "https://www.svgrepo.com/show/69580/water-drop.svg",
                                            title: "Water Wise"
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
    // FOOTER
    // ============================================================================
    footer: {
        key: "agri-ecosystem-portfolio-footer",
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

module.exports = { agriEcosystemPortfolio };
