const novaAcademyHome = require('./nova-academy-home.cjs');

const novaAcademyServices = {
    header: novaAcademyHome.header,

    sections: [
        // --------------------------------------------------------------------------
        // HEADER / HERO
        // --------------------------------------------------------------------------
        {
            key: "nova-services-hero",
            name: "Services Hero",
            structure: {
                type: "IndustrialHero",
                props: {
                    badgeText: "PROFESSIONAL TRACKS",
                    headlineText: "Master Your [Future](var(--theme-accent)",
                    paragraphText: "A sophisticated curriculum directory for elite career paths, designed for those who demand excellence in technical mastery and creative leadership.",
                    backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800", // High-end architecture
                    statusItems: [
                        { text: "98%", subtext: "GRADUATE SUCCESS", color: "#FFFFFF" },
                        { text: "ELITE", subtext: "ACADEMIC FACULTY", color: "#FFFFFF" }
                    ]
                }
            }
        },

        // --------------------------------------------------------------------------
        // TRACKS DIRECTORY HEADER
        // --------------------------------------------------------------------------
        {
            key: "nova-services-tracks-header",
            name: "Tracks Header",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-background)",
                    paddingY: 64,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "tracks-header-col",
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "Advanced Professional Tracks",
                                    tag: "h2",
                                    size: "5xl",
                                    color: "#0f172a",
                                    fontWeight: "black",
                                    align: "center",
                                    className: "tracking-tighter uppercase mb-4"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Elite curriculum designed for those who seek mastery in technical, financial, and creative leadership.",
                                    color: "#334155",
                                    size: "xl",
                                    align: "center",
                                    fontWeight: "medium",
                                    className: "max-w-2xl mx-auto"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // TRACK 1: FINTECH ENGINEERING
        // --------------------------------------------------------------------------

        {
            key: "nova-services-featured",
            name: "Featured - ItemList",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-background)",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "featured-col",
                        width: "100%",
                        elements: [
                            {
                                type: "ItemList",
                                props: {
                                    badgeText: "EXECUTIVE LEVEL",
                                    headline: "FinTech Engineering",
                                    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhUaI5rOkgjOmFOs4u1O9qg1up6Kw2OpLON-_IMs5Z9jIn2lJ-zNPZJA6JiZbI56KDxvRUKDB017_RyppVeFk6tV6pkqrMWX68aZ3m50hUC7AcLkOiLcdPTTX2NE4uf7v-AoXb0qmMl0E5APiER4VnUWJJaCp2JVw9JDdMpeUVhbVTiAuoM6tET-UyypnqV5TV9659l7F425R2MEccyVe-w3D0Fl_AmyaQbBOr2LOqMuQ3-Lrkwe4ILl0RqZgkVmtPpSuH-r9oNXWd",
                                    sectionTitle: "THE CURRICULUM",
                                    description: "Bridges the gap between traditional finance and modern software architecture. Focuses on high-frequency systems and blockchain integration.",
                                    infoItems: [
                                        { label: "DURATION", value: "10 Months" },
                                        { label: "NEXT COHORT", value: "Jan 2025" }
                                    ],
                                    skills: ["RUST", "SOLIDITY", "QUANTS"],
                                    ctaText: "REGISTER INTEREST",
                                    ctaLink: "/contact"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TRACK 2: DATA SCIENCE
        // --------------------------------------------------------------------------
        {
            key: "nova-services-track-1",
            name: "Track - Data Science",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-background)",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "track-1-col",
                        width: "100%",
                        elements: [
                            {
                                type: "ItemList",
                                props: {
                                    badgeText: "ADVANCED LEVEL",
                                    headline: "Data Science Mastery",
                                    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxFQ206zSlTLx4N40UTngkei2bMQvWnpParGu555ps9o2rf6TwSeWSVJCWRifbWPITiwVJozsfZ7paQi1Ot6md6-6rh13CAuqK19e0oYeya0ttX5DRpzcVsu0mugfJhFguHHaF84qwUaIMdxtnkkV9Bk4DhVKjJkFicev5MIat8p22JrLSycQl91uWaMWK7ulK5WF4c7Caxe9JeI5tVjlMLUoks2r8PxVOjl166G_DsKu19Z-vlnyastyQyBCZyfZOdsmjUo2sMrm5",
                                    sectionTitle: "THE CURRICULUM",
                                    description: "Master advanced statistical modeling, machine learning, and data engineering in an intensive editorial-style curriculum designed for industry veterans.",
                                    infoItems: [
                                        { label: "DURATION", value: "12 Months" },
                                        { label: "NEXT COHORT", value: "Sept 2024" }
                                    ],
                                    skills: ["PYTORCH", "BIG DATA", "ML OPS"],
                                    ctaText: "REGISTER INTEREST",
                                    ctaLink: "/contact"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TRACK 3: CREATIVE LEADERSHIP
        // --------------------------------------------------------------------------
        {
            key: "nova-services-track-2",
            name: "Track - Creative Leadership",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-background)",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "track-2-col",
                        width: "100%",
                        elements: [
                            {
                                type: "ItemList",
                                props: {
                                    badgeText: "DESIGN DIRECTION",
                                    headline: "Creative Leadership",
                                    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPjTYvkaEEqHyuh4C0qsZ1NKTaVvxeFsK8AbSRu0yxf-8c1waMqf2htK8Ra71hQ1wlFDOMyNt8AgKMTv5ZkVfrkNL8D3UE29VkZ-JtjWMSKJ-NW65wKrN_4HexoPMKrZks-IkZzNWv0FwSP-xQqiYHhyxCTf8zyuxlzMx3ywVCXFtjJcFivtaUXslO6BF5qIu7XTHsnCoNp7xBmYeSuAGXtGV-5pVy8xA-vp-YdpE1OvcpO9VXUcSykw6oRw-bSvpbqQFTZLs-2e-3",
                                    sectionTitle: "THE CURRICULUM",
                                    description: "For creative directors transitioning into strategic roles. Focus on brand architecture, consumer psychology, and global design systems.",
                                    infoItems: [
                                        { label: "DURATION", value: "8 Months" },
                                        { label: "NEXT COHORT", value: "Oct 2024" }
                                    ],
                                    skills: ["STRATEGY", "SYSTEMS", "ETHICS"],
                                    ctaText: "REGISTER INTEREST",
                                    ctaLink: "/contact"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TRACK 4: STRATEGIC FORESIGHT
        // --------------------------------------------------------------------------
        {
            key: "nova-services-track-3",
            name: "Track - Strategic Foresight",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-background)",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "track-3-col",
                        width: "100%",
                        elements: [
                            {
                                type: "ItemList",
                                props: {
                                    badgeText: "FORWARD INTELLIGENCE",
                                    headline: "Strategic Foresight",
                                    mainImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
                                    sectionTitle: "THE CURRICULUM",
                                    description: "Master the art of long-term planning and scenario analysis to anticipate market shifts and outmaneuver competition in a volatile global economy.",
                                    infoItems: [
                                        { label: "DURATION", value: "6 Months" },
                                        { label: "NEXT COHORT", value: "Nov 2024" }
                                    ],
                                    skills: ["SCENARIO PT", "RISK MGMT", "GAME THEORY"],
                                    ctaText: "REGISTER INTEREST",
                                    ctaLink: "/contact"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    footer: novaAcademyHome.footer
};

module.exports = novaAcademyServices;
