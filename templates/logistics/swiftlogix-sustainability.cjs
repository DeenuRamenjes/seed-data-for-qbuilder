/**
 * SwiftLogix Template - Sustainability Page
 * Theme: Industrial Logistics / Green Tech
 * Primary Color: #ed2626 (Brand) / #16a34a (Green)
 * Secondary Color: #0f0f0f
 * Fonts: Manrope
 */

const swiftlogixSustainability = {
    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-sustainability-hero",
            name: "Sustainability Hero",
            description: "Industrial hero with gradient overlay and green accents",
            structure: {
                type: "Section",
                defaultProps: {
                    fullWidth: true,
                    paddingY: 0,
                    paddingX: 0,
                    overflow: "hidden"
                },
                columns: [{
                    id: "hero-col",
                    width: "100%",
                    elements: [
                        {
                            type: "IndustrialHero",
                            props: {
                                minHeight: "85vh",
                                backgroundImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80&w=2000",
                                backgroundOverlay: "linear-gradient(to right, rgba(27, 13, 13, 0.8) 0%, rgba(27, 13, 13, 0.6) 50%, rgba(27, 13, 13, 0.2) 100%)",
                                badgeText: "Commitment to Planet",
                                badgeColor: "#ed2626",
                                badgeBackgroundColor: "rgba(22, 163, 74, 0.1)",
                                badgeShowPing: true,
                                badgePingColor: "#ed2626",
                                headlineText: "Sustainable Logistics\nfor a [Greener Future](#ed2626)",
                                headlineTag: "h1",
                                headlineColor: "#FFFFFF",
                                paragraphText: "We are committed to reducing our carbon footprint through eco-friendly fleet management, solar-powered warehousing, and zero-emission delivery solutions.",
                                paddingX: { mobile: "24px", tablet: "60px", desktop: "80px" },
                                paddingY: { mobile: "80px", tablet: "100px", desktop: "140px" },
                                // statusItems: [
                                //     { text: "Net Zero", subtext: "Goal 2040", color: "#ed2626", subtextColor: "rgba(255,255,255,0.6)" },
                                //     { text: "-45%", subtext: "Carbon Reduction", color: "#ed2626", subtextColor: "rgba(255,255,255,0.6)" }
                                // ]
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // STATS SECTION (Greener Logistics)
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-sustainability-stats",
            name: "Impact Stats",
            description: "Grid of stats cards with environmental metrics",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 30,
                    paddingX: 20,
                    backgroundColor: "#f8fafc"
                },
                columns: [
                    {
                        id: "stats-header-col",
                        width: "100%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: 48
                        },
                        elements: [
                            {
                                type: "Heading",
                                props: {
                                    text: "Our Environmental Impact",
                                    tag: "h2",
                                    align: "center",
                                    className: "mb-4"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Measuring our progress towards a sustainable future with real data.",
                                    align: "center",
                                    color: "#64748b",
                                    className: "max-w-2xl mx-auto"
                                }
                            }
                        ]
                    },
                    {
                        id: "stats-grid-col",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 24,
                        elements: [
                            {
                                type: "StatsCard",
                                props: {
                                    icon: "Leaf",
                                    iconColor: "#16a34a",
                                    iconBg: "rgba(22, 163, 74, 0.1)",
                                    badge: "Yearly",
                                    badgeColor: "#16a34a",
                                    badgeBg: "rgba(22, 163, 74, 0.1)",
                                    statLabel: "CO2 Saved",
                                    statValue: "1250T",
                                    statValueColor: "#0f172a",
                                    trend: "12%",
                                    trendLabel: "vs last year",
                                    trendColor: "#16a34a",
                                    hoverEffect: "border-left",
                                    backgroundColor: "#ffffff",
                                    borderColor: "transparent",
                                    borderRadius: "16"
                                }
                            },
                            {
                                type: "StatsCard",
                                props: {
                                    icon: "Sun",
                                    iconColor: "#eab308",
                                    iconBg: "rgba(234, 179, 8, 0.1)",
                                    badge: "Capacity",
                                    badgeColor: "#eab308",
                                    badgeBg: "rgba(234, 179, 8, 0.1)",
                                    statLabel: "Solar Energy",
                                    statValue: "4.5MW",
                                    statValueColor: "#0f172a",
                                    trend: "8%",
                                    trendLabel: "efficiency gain",
                                    trendColor: "#eab308",
                                    hoverEffect: "border-left",
                                    backgroundColor: "#ffffff",
                                    borderColor: "transparent",
                                    borderRadius: "16"
                                }
                            },
                            {
                                type: "StatsCard",
                                props: {
                                    icon: "Recycle",
                                    iconColor: "#0ea5e9",
                                    iconBg: "rgba(14, 165, 233, 0.1)",
                                    badge: "Rate",
                                    badgeColor: "#0ea5e9",
                                    badgeBg: "rgba(14, 165, 233, 0.1)",
                                    statLabel: "Waste Recycled",
                                    statValue: "98%",
                                    statValueColor: "#0f172a",
                                    trend: "2%",
                                    trendLabel: "reduction",
                                    trendColor: "#0ea5e9",
                                    hoverEffect: "border-left",
                                    backgroundColor: "#ffffff",
                                    borderColor: "transparent",
                                    borderRadius: "16"
                                }
                            },
                            {
                                type: "StatsCard",
                                props: {
                                    icon: "TreeDeciduous",
                                    iconColor: "#22c55e",
                                    iconBg: "rgba(34, 197, 94, 0.1)",
                                    badge: "Total",
                                    badgeColor: "#22c55e",
                                    badgeBg: "rgba(34, 197, 94, 0.1)",
                                    statLabel: "Trees Planted",
                                    statValue: "50k+",
                                    statValueColor: "#0f172a",
                                    trend: "15%",
                                    trendLabel: "annual growth",
                                    trendColor: "#22c55e",
                                    hoverEffect: "border-left",
                                    backgroundColor: "#ffffff",
                                    borderColor: "transparent",
                                    borderRadius: "16"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // ROAD TO NET ZERO (Timeline)
        {
            key: "swiftlogix-sustainability-timeline",
            name: "Road to Net Zero",
            description: "Vertical timeline of milestones",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "timeline-col",
                    width: "100%",
                    elements: [{
                        type: "TimelineSection",
                        props: {
                            title: "Road to Net Zero",
                            subtitle: "Our strategic roadmap to carbon neutrality, tracking our journey from humble beginnings to a sustainable future.",
                            backgroundColor: "#ffffff",
                            textColor: "#0f172a",
                            subtitleColor: "#64748b",
                            milestones: [
                                {
                                    year: "2023",
                                    title: "Electric Fleet Initiative",
                                    description: "Replaced 30% of urban delivery vehicles with EVs, reducing city carbon emissions by 40%.",
                                    color: "#16a34a",
                                    image: "https://images.unsplash.com/photo-1594535182308-8ff2409088df?auto=format&fit=crop&q=80&w=800",
                                    imageAlt: "Electric delivery van charging"
                                },
                                {
                                    year: "2025",
                                    title: "Solar Warehousing",
                                    description: "100% renewable energy for all major distribution centers through rooftop solar and grid partnerships.",
                                    color: "#eab308",
                                    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
                                    imageAlt: "Solar panels on warehouse roof"
                                },
                                {
                                    year: "2030",
                                    title: "Carbon Neutral Operations",
                                    description: "Achieving net zero for Scope 1 and 2 emissions across our global footprint.",
                                    color: "#0ea5e9",
                                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
                                    imageAlt: "Global network map"
                                },
                                {
                                    year: "2040",
                                    title: "Value Chain Neutrality",
                                    description: "Complete net zero across all upstream and downstream activities, driven by supplier partnerships.",
                                    color: "#6366f1",
                                    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
                                    imageAlt: "Green logistics partners"
                                }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // ECO PARTNERS
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-sustainability-partners",
            name: "Eco Partners",
            description: "Partner logos grid",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: { mobile: 60, tablet: 60, desktop: 80 },
                    backgroundColor: "#f8fafc"
                },
                columns: [
                    {
                        id: "partners-content-col",
                        width: "100%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        elements: [
                            {
                                type: "Heading",
                                props: {
                                    text: "Sustainability Partners",
                                    tag: "h3",
                                    align: "center",
                                    className: "mb-8 opacity-60"
                                }
                            },
                            {
                                type: "PartnerLogosGrid",
                                props: {
                                    logos: [
                                        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png", title: "Google" },
                                        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png", title: "IBM" },
                                        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png", title: "Volkswagen" },
                                        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png", title: "Sony" },
                                        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png", title: "BMW" }
                                    ],
                                    grayscale: true,
                                    backgroundColor: "transparent",
                                    logoHeight: 50,
                                    showBorders: false
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CTA
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-sustainability-cta",
            name: "Sustainability CTA",
            description: "Call to action with green background",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 100,
                    backgroundColor: "#ed2626",
                    className: "text-center"
                },
                columns: [
                    {
                        id: "cta-content-col",
                        width: "100%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center"
                        },
                        elements: [
                            {
                                type: "Heading",
                                props: {
                                    text: "Join the Green Revolution",
                                    tag: "h2",
                                    align: "center",
                                    color: "#ffffff",
                                    className: "mb-6"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Partner with us to reduce your supply chain emissions today.",
                                    align: "center",
                                    color: "rgba(255,255,255,0.9)",
                                    size: "lg",
                                    className: "mb-8 max-w-2xl mx-auto"
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Request ESG Report",
                                    secondaryText: "Contact Sustainability Team",
                                    primaryBg: "#ffffff",
                                    primaryColor: "#ed2626",
                                    secondaryBg: "rgba(255,255,255,0.2)",
                                    secondaryColor: "#ffffff",
                                    layout: "flex-wrap",
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
    // PAGE METADATA
    // ============================================================================
    metadata: {
        title: "Sustainability | SwiftLogix",
        description: "Our commitment to eco-friendly logistics and carbon neutrality.",
        slug: "sustainability",
        template: "swiftlogix"
    }
};

module.exports = swiftlogixSustainability;
