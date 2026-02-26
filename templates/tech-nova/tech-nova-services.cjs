/**
 * TechNova Solutions - Services Page
 * Theme: Core Nodes, System Architecture, and Latest Projects
 * Primary Color: #6366f1 (Indigo)
 * Dark Mode: Supported (#0a0a0c background)
 */

const techNovaServices = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION - Main hero with heading, description, buttons and metrics card
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-hero",
            name: "Hero Section",
            description: "Hero section with dual-column layout, heading, description, CTA buttons and AI metrics card",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundImage: "https://images.unsplash.com/photo-1707209856575-a80b9dff5524?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingY: 120,
                    paddingX: 80,
                    gap: 80,
                    "@media (max-width: 1024px)": {
                        paddingY: 80,
                        paddingX: 40,
                        gap: 48
                    },
                    "@media (max-width: 768px)": {
                        paddingY: 60,
                        paddingX: 20,
                        flexDirection: "column",
                        gap: 32
                    }
                },
                columns: [
                    {
                        id: "hero-text-col",
                        width: "100%",
                        props: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "hero-heading",
                                type: "Headline",
                                props: {
                                    text: "Engineering [Intelligence.](linear-gradient(90deg, #6366f1, #818cf8)",
                                    tag: "h1",
                                    color: "#0f0f12",
                                    darkColor: "#ffffff",
                                    fontSize: {
                                        mobile: "36px",
                                        tablet: "56px",
                                        desktop: "72px"
                                    },
                                    fontWeight: "900",
                                    lineHeight: 0.9,
                                    marginBottom: 32,
                                    align: "center",
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "We bridge the gap between complex infrastructure and seamless human interaction through non-linear architectural patterns.",
                                    color: "#333333",
                                    darkColor: "#cccccc",
                                    size: "lg",
                                    lineHeight: 1.6,
                                    maxWidth: "550px",
                                    marginBottom: 40,
                                    align: "center",
                                }
                            },
                            {
                                id: "hero-buttons",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Explore Services",
                                    secondaryText: "Get in Touch",
                                    primaryLink: "#services",
                                    secondaryLink: "#contact",
                                    primaryBg: "#6366f1",
                                    primaryColor: "#ffffff",
                                    secondaryBg: "transparent",
                                    secondaryColor: "#1f2937",
                                    darkSecondaryColor: "#ffffff",
                                    secondaryBorder: "1px solid #e5e7eb",
                                    fontSize: "lg",
                                    fontWeight: "700",
                                    gap: "gap-4",
                                    layout: "flex-row",
                                    flexWrap: "flex-wrap",
                                    justifyContent: "center",
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CORE NODES SECTION - Service nodes with sidebar layout
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-core-nodes",
            name: "Core Nodes Section",
            description: "Service nodes with sticky sidebar and expandable panels",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: false
                },
                columns: [{
                    id: "core-nodes-col",
                    width: "100%",
                    elements: [{
                        id: "tech-nova-service-nodes",
                        type: "SidebarCardsRenderer",
                        props: {
                            sidebarTitle: "Core Nodes",
                            sidebarDescription: "Hover over each technical node to reveal our operational specializations. Each path represents a core pillar of our technology stack.",
                            sidebarImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNNo0Y6HBxzZWKBzsieba-t0Jv490xpO86Ub8moKdoWrlWax0Rc516qjqvZ4pUE69LAG8N18Yd6Qzv9RxOfJe3CAw6qiAFgfi8PG_FE8GpCTR09ppyNMeIQ1ehOJRZdGvlKAZfpSMGg7Rmw2MfHpavm3YeShfCN5aNMHwP2FlZWhFB5A_2bRIw38MNuDyFfdTpaWLIGGIbVk29WX2bVHGkq9P1RfR3BLpFSEeNd-U3s_1Yv0U1kBTU_zFdx6wdC-LleyfgW7yLBFA",
                            primaryColor: "#6366f1",
                            textColor: "#000000",
                            darkTextColor: "#000000",
                            subtextColor: "#333333",
                            darkSubtextColor: "#cccccc",
                            cards: [
                                {
                                    label: "NODE 01",
                                    title: "Artificial Intelligence",
                                    description: "Deep learning systems tailored for predictive analytics, natural language processing, and computer vision ecosystems.",
                                    features: [
                                        "Large Language Models",
                                        "Predictive Modeling",
                                        "Neural Architecture Search"
                                    ]
                                },
                                {
                                    label: "NODE 02",
                                    title: "Cloud Orchestration",
                                    description: "Multi-cloud strategies and serverless architectures designed for elastic scaling and high availability.",
                                    features: [
                                        "Kubernetes Management",
                                        "Zero-Trust Security",
                                        "Edge Computing"
                                    ]
                                },
                                {
                                    label: "NODE 03",
                                    title: "Software Engineering",
                                    description: "Building robust, maintainable, and high-performance software systems across the full stack.",
                                    features: [
                                        "Microservices Design",
                                        "Reactive Programming",
                                        "Distributed Databases"
                                    ]
                                }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // SYSTEM ARCHITECTURE SECTION - 2-column layout with image and features
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-architecture",
            name: "System Architecture Section",
            description: "2-column layout with architecture image and feature list",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f8f6",
                    darkBackgroundColor: "#0f0f12",
                    fullWidth: false
                },
                columns: [{
                    id: "architecture-col",
                    width: "100%",
                    elements: [{
                        id: "tech-nova-architecture",
                        type: "ImageWithFeaturesRenderer",
                        props: {
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu6Rq3RAYCYqefOU3E85JlwSjDEbzkDDEhd3f6du6gazvDTU9YIADlx4jAFVBEboGq42_qhB6t9KVSww0nFoeOm0tkNlwFRlpEUmReBSd_SA7lJvsyvccBBocdXX80-e10HE3Oow8IeTobPSJsfz3a5XlXpymVPzLVrzj791MHY7_Q1DvLhJwdJsTqD0jXR947PpfdeM8rRDpGfRU7IpXmWlIFf3R-3FbSR_4r3pnetPP3yOtCiDkW3_qwgL3wU-vFOg2GIhY6VbU",
                            title: "System",
                            titleHighlight: "Architecture",
                            description: "We don't just build software; we architect ecosystems. Our infrastructure is designed using modular fractals that allow for infinite vertical and horizontal scalability without service interruption.",
                            primaryColor: "#6366f1",
                            accentLightColor: "rgba(99, 102, 241, 0.1)",
                            textColor: "#000000",
                            darkTextColor: "#000000",
                            subtextColor: "#333333",
                            darkSubtextColor: "#cccccc",
                            features: [
                                {
                                    title: "Layered Redundancy",
                                    description: "Quad-failover systems across multiple geographic regions ensures 99.999% uptime."
                                },
                                {
                                    title: "Self-Healing Protocols",
                                    description: "Autonomous agents monitor system health and automatically resolve resource bottlenecks."
                                }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PROJECTS CAROUSEL SECTION - Horizontal scrolling project cards
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-projects",
            name: "Projects Carousel Section",
            description: "Horizontal scrolling carousel of featured projects",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: false
                },
                columns: [{
                    id: "projects-carousel-col",
                    width: "100%",
                    elements: [{
                        id: "tech-nova-projects-carousel",
                        type: "HorizontalCarouselRenderer",
                        props: {
                            title: "Latest Projects",
                            primaryColor: "#6366f1",
                            textColor: "#000000",
                            darkTextColor: "#000000",
                            items: [
                                {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpT-6OgMXISh3zFc2PT6VowUKQyaxVA0Ffc9u88Cum7az03__qkHvQkYlcm7_Ouw5wH7jOdJSPa2rjbMZK8WRcCfJcD8Fj6fpRk5fcfUZnXX2tSQajv3Jlz_vccYovo_gLAzRgjGgbzE112Ar3-MmcI2T6ko4Xt-L-Wes1PZot4bnp94JhDMBvlAZ-33AS4Qopg0U0xospFBdwOUKce-VwEqkCyj9iPCOVIX-lT6hxY8izC_QbqqtpWXMZA2ecCXUgjDdDlzCnpVI",
                                    label: "Deep Space",
                                    title: "Orbital Data Network",
                                    description: "Low-latency communication protocols for planetary-scale observation networks."
                                },
                                {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu4jtZqnl3DyaChpUIw3h7A5ipmBsxKmBntvNdbmtQh-YL7JcoSjr7LxTcShDvrj6UCtWelgiFLUaw_QRkZclbusm5K4fXTgeEOpIgcq0abmUu8fkXsfGlg8t4vKK9Uvk3bYsMzUgnvoVVFyNTwT6M51_HjZg5k49MXm56H5DbZBT1PYrOQVgt89HWKP1vOAIGBgLEMyXsShB9R_1GI7N6O0Hq6XpHg2BDI_R-KbsY6LLfKdeqRVzGQ3bsdSjR7wy_JzBx29Ay910",
                                    label: "Security",
                                    title: "Neural Firewall",
                                    description: "AI-driven threat detection that evolves in real-time to counter zero-day exploits."
                                },
                                {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALFkrYvJQQW19Jx5-qnE8XaIFtiwqwM6M3D5sWNE6lQrI1HshIAO6MFd7vrjaH-HFcgyIir8RcAGtv9bBOfKeFeUlhlqSInPobIq6RS8qO3WdXTa_i6JVFh4WnohFEQf5fMOkwQrd73thLB70SDzEkd4fBpdxB1Uqjl55txU3Zggp4D_NZnFhyRu9iByXqCbcNXa31443z7AhAF6o7TTjI3I6W9hWPRsoYx_ZAbhh6LH7RpnYuyxJLW7a1ywR4GSiIndTcAKO3QJs",
                                    label: "Fintech",
                                    title: "Quantum Ledger",
                                    description: "High-frequency transaction processing engine with sub-millisecond finality."
                                }
                            ]
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = techNovaServices;

