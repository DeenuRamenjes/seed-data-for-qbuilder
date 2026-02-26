/**
 * TechNova Solutions - Modern AI Tech Company Template
 * Theme: Futuristic Tech/AI Solutions with Dark Mode
 * Primary Color: #6366f1 (Indigo)
 * Secondary: #a855f7 (Purple)
 * Dark Mode: Supported (#0a0a0c background)
 * Fonts: Plus Jakarta Sans
 */

const techNova = {
    // ============================================================================
    // HEADER - NAVBAR
    // ============================================================================
    header: {
        key: "tech-nova-header",
        type: "Navbar",
        category: "header",
        name: "TechNova Header",
        description: "Tech header with navigation and CTA",
        structure: {
            type: "Header",
            defaultProps: {
                fullWidth: true,
                backgroundColor: "#ffffff",
                backdropFilter: "blur(8px)"
            },
            columns: [{
                id: "header-col",
                width: "100%",
                elements: [{
                    id: "nova-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "TechNova",
                        logoTextColor: "#1f2937",
                        accentColor: "#6366f1",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        sticky: true,
                        linkColor: "#4b5563",
                        linkHoverColor: "#6366f1",
                        links: [
                            { label: "Solutions", href: "#solutions" },
                            { label: "Innovation Lab", href: "#lab" },
                            { label: "Projects", href: "#projects" },
                            { label: "About", href: "#about" }
                        ],
                        showButton: true,
                        buttonText: "Start Project",
                        buttonLink: "#contact",
                        buttonRadius: "full",
                        buttonStyle: "solid",
                        buttonColor: "#ffffff",
                        buttonBgColor: "#6366f1"
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
        // HERO SECTION - Main hero with heading, description, buttons, metrics card
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-hero",
            name: "Hero Section",
            description: "Hero section with large heading, description, CTA buttons and AI metrics card",
            structure: {
                type: "Section",
                defaultProps: {
                    // backgroundColor: "#ffffff",
                    backgroundImage:"https://images.unsplash.com/photo-1707209856575-a80b9dff5524?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D",
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
                        width: "45%",
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
                                    text: "Scalable. [Innovative.](linear-gradient(90deg, #6366f1, #6366f1) TechNova.",
                                    tag: "h1",
                                    color: "#000000",
                                    darkColor: "#ffffff",
                                    fontSize: {
                                        mobile: "36px",
                                        tablet: "56px",
                                        desktop: "72px"
                                    },
                                    fontWeight: "900",
                                    lineHeight: 0.9,
                                    marginBottom: 32,
                                    align: "left"
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Architecting digital futures through bespoke software ecosystems and AI-driven intelligence. We don't just build; we evolve.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "lg",
                                    lineHeight: 1.6,
                                    maxWidth: "550px",
                                    marginBottom: 40
                                }
                            },
                            {
                                id: "hero-buttons",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Explore Labs",
                                    secondaryText: "Our Methodology",
                                    primaryLink: "#labs",
                                    secondaryLink: "#methodology",
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
                                    flexWrap: "flex-wrap"
                                }
                            }
                        ]
                    },
                    {
                        id: "hero-metrics-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "metrics-card",
                                type: "MetricsCard",
                                props: {
                                    backgroundColor: "#fafafa",
                                    borderColor: "#ffffff",
                                    border: "0px solid",
                                    borderRadius: 24,
                                    padding: 32,
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                                    title: "LIVE PULSE",
                                    titleColor: "#6366f1",
                                    subtitle: "AI Metrics",
                                    subtitleColor: "#1f2937",
                                    subtitleDarkColor: "#ffffff",
                                    progressBars: [
                                        {
                                            label: "System Efficiency",
                                            value: 94,
                                            percentage: 94,
                                            progressColor: "#6366f1"
                                        },
                                        {
                                            label: "Neural Responses",
                                            value: 78,
                                            percentage: 78,
                                            progressColor: "#818cf8"
                                        }
                                    ],
                                    teamName: "Sarah Jenkins",
                                    teamRole: "Head of Innovation",
                                    teamImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdy4gw2PNXT1m0iB_eSvAiuBilyqGGHtapBDb5w7Gy9lNrpvc_PZYcj8Mvi55OeHheyxovAfZAfPGicLJLWgn7PJKx3Z8qK5KDPM9KkvmUokzeG45OX4HGNccN-l66VuatPQzSKcO3xxigUopg382p24ZSjJhaYktxHogOulIirULKWo3NaTzJ08FkRG4e6jJ5pXnoEDpOrp4de0BLhvmUUnlWuJBk_c6eDG43V4bqTKJbE19xlMsN48P31IFRum1pfjzXfiOlQQ8"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // FEATURES SECTION - Interactive Ecosystem Services
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-features",
            name: "Features Section",
            description: "Interactive ecosystem services with numbered feature cards",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f8f6",
                    darkBackgroundColor: "#0f0f12",
                    paddingY: 120,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
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
                        id: "features-right",
                        width: "45%",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "ecosystem-diagram",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3DY4WrNGrmZDkDVyekvcu8tXnICK25SUI65yjgX5YpLmk_XoUW-xvZHr26Tpl5gO3Pu6v7Eep9FmFfIgYDu5vXC1hTeiuFmeUv7hz_NcSr1hvLSrDnH8Vdvax_6ZgzK1CroKL_pgGuH_U4WVhyuGObVq6u-LeLRa7_0ZBqUJB1XWN0DgJnZst2lTSbC05LbeUU55WqARL4rAEnLUVwRF_hLU92QOiRAqqON_VE2qfgQrSmd0RrnqAexA7J0-1Iie7kGgCohVCmzc",
                                    alt: "Ecosystem Services Diagram",
                                    aspectRatio: "1/1",
                                    borderRadius: 24,
                                    maxWidth: "100%"
                                }
                            }
                        ]
                    },
                    {
                        id: "features-left",
                        width: "50%",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "features-heading",
                                type: "Headline",
                                props: {
                                    text: "Interactive [Ecosystem Services](linear-gradient(90deg, #6366f1, #6366f1)",
                                    tag: "h2",
                                    color: "#1f2937",
                                    darkColor: "#ffffff",
                                    fontSize: {
                                        mobile: "28px",
                                        tablet: "40px",
                                        desktop: "48px"
                                    },
                                    fontWeight: "900",
                                    lineHeight: 1.2,
                                    marginBottom: 48,
                                    align: "left"
                                }
                            },
                            {
                                id: "feature-1-number",
                                type: "Heading",
                                props: {
                                    text: "01",
                                    tag: "h4",
                                    color: "#6366f1",
                                    fontSize: "32px",
                                    fontWeight: "700",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "feature-1-title",
                                type: "Heading",
                                props: {
                                    text: "Cloud Architecture",
                                    tag: "h4",
                                    color: "#1f2937",
                                    darkColor: "#ffffff",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "feature-1-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Scalable infrastructure designed for 99.9% uptime and global reach.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "base",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "feature-2-number",
                                type: "Heading",
                                props: {
                                    text: "02",
                                    tag: "h4",
                                    color: "#6366f1",
                                    fontSize: "32px",
                                    fontWeight: "700",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "feature-2-title",
                                type: "Heading",
                                props: {
                                    text: "Generative AI Integration",
                                    tag: "h4",
                                    color: "#1f2937",
                                    darkColor: "#ffffff",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "feature-2-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Custom LLM training and neural network deployment for enterprise.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "base",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "feature-3-number",
                                type: "Heading",
                                props: {
                                    text: "03",
                                    tag: "h4",
                                    color: "#6366f1",
                                    fontSize: "32px",
                                    fontWeight: "700",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "feature-3-title",
                                type: "Heading",
                                props: {
                                    text: "Cyber Resilience",
                                    tag: "h4",
                                    color: "#1f2937",
                                    darkColor: "#ffffff",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "feature-3-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Military-grade encryption and real-time threat detection systems.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "base"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // PORTFOLIO SECTION - Engineering the Impossible (Dark)
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-portfolio",
            name: "Portfolio Section",
            description: "Dark portfolio section with project showcase cards",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#0a0a0c",
                    paddingY: 120,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 60,
                    "@media (max-width: 1024px)": {
                        paddingY: 80,
                        paddingX: 40
                    },
                    "@media (max-width: 768px)": {
                        paddingY: 60,
                        paddingX: 20,
                        gap: 40
                    }
                },
                columns: [
                    {
                        id: "portfolio-header",
                        width: "100%",
                        elements: [
                            {
                                id: "portfolio-title",
                                type: "Heading",
                                props: {
                                    text: "Engineering the Impossible",
                                    tag: "h2",
                                    color: "#ffffff",
                                    fontSize: {
                                        mobile: "32px",
                                        tablet: "44px",
                                        desktop: "52px"
                                    },
                                    fontWeight: "900",
                                    marginBottom: 16,
                                    align: "center"
                                }
                            },
                            {
                                id: "portfolio-description",
                                type: "Paragraph",
                                props: {
                                    text: "Explore our portfolio of industry-disrupting solutions and technical milestones.",
                                    color: "#999999",
                                    size: "lg",
                                    lineHeight: 1.6,
                                    align: "center",
                                    maxWidth: "600px",
                                    marginBottom: 48
                                }
                            }
                        ]
                    },
                    {
                        id: "portfolio-cards-col",
                        width: "100%",
                        layout: {
                            type: "grid",
                            columns: { desktop: 3, tablet: 2, mobile: 1 },
                            gap: "gap-4"
                        },
                        elements: [
                                {
                                    id: "project-card-1",
                                    type: "CaseStudyCard",
                                    props: {
                                        title: "Quantum Shield",
                                        industry: "Security",
                                        description: "Post-quantum cryptography implementation for banking leader.",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3DY4WrNGrmZDkDVyekvcu8tXnICK25SUI65yjgX5YpLmk_XoUW-xvZHr26Tpl5gO3Pu6v7Eep9FmFfIgYDu5vXC1hTeiuFmeUv7hz_NcSr1hvLSrDnH8Vdvax_6ZgzK1CroKL_pgGuH_U4WVhyuGObVq6u-LeLRa7_0ZBqUJB1XWN0DgJnZst2lTSbC05LbeUU55WqARL4rAEnLUVwRF_hLU92QOiRAqqON_VE2qfgQrSmd0RrnqAexA7J0-1Iie7kGgCohVCmzc",
                                        accentColor: "#6366f1",
                                        textColor: "#ffffff",
                                        backgroundColor: "rgba(15, 15, 18, 1)"
                                    }
                                },
                                {
                                    id: "project-card-2",
                                    type: "CaseStudyCard",
                                    props: {
                                        title: "NovaCore AI",
                                        industry: "Artificial Intelligence",
                                        description: "Self-learning logistical engine reducing carbon footprint by 40%.",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnveSpb0Tk67q5es3zLF8JqBZfqlAFjstcYRabJx5zWoWeh8kLYswcmYvlQ88LabaHSYGxwO4sniLBQRhdoiBHkDoi64HMSpVbGvE52TCNV5ds9uTpZXJD4nWnoXW84TDLsG4BESSCqfXDZLwEPASsH8CYdi4AQGj7hbYrx8PeCbcB1rB239nHd9r401wAao0cd36z5cb60K1pwqhetMMP7P2LyOTr5Icl7CWxtdNEkKE_uu5jDaM1nIt5Ts-bOIlSOMHNQ9zAH9Q",
                                        accentColor: "#6366f1",
                                        textColor: "#ffffff",
                                        backgroundColor: "rgba(15, 15, 18, 1)"
                                    }
                                },
                                {
                                    id: "project-card-3",
                                    type: "CaseStudyCard",
                                    props: {
                                        title: "SkyGraph Mesh",
                                        industry: "Cloud Native",
                                        description: "Decentralized edge computing network for IoT automation.",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmZzArZn3RyGqO9OyVXwYpo4W7tsLasK5LFeYKpGTokuQAvp0Q2Uei9bY0szH0A2LuPYEth-cHmqwiVDFUtlG388S9kLfPzBoaSYCBfqyUcud6ihuFimH3FPdZj2-9uwAL18XMxD7VGihFt683scqL_g9DJY6MOcHLeZ3Xo-FhZfFVs4UKQxgcUNKna7eWlyNxRRBtVjC4vd99-Z0lv-iwXWeTSFKZUaqFb3-m1VTWH_b6Yq57km3qgTnQ6H1t0STy9arxrRin7FI",
                                        accentColor: "#6366f1",
                                        textColor: "#ffffff",
                                        backgroundColor: "rgba(15, 15, 18, 1)"
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
        key: "tech-nova-footer",
        name: "Footer",
        description: "Footer with company info, links, and social icons",
        structure: {
            type: "Section",
            defaultProps: {
                backgroundColor: "#0a0a0c",
                fullWidth: false,
                borderTopColor: "#1f2937",
                borderTopWidth: 1
            },
            columns: [{
                id: "footer-col",
                width: "100%",
                elements: [
                    {
                        id: "footer-content",
                        type: "MinimalFooter",
                        props: {
                            companyName: "TechNova Solutions",
                            tagline: "Redefining the boundaries of technological potential through relentless innovation and elite engineering.",
                            columns: [
                                {
                                    title: "Expertise",
                                    links: [
                                        { label: "SaaS Development", href: "#" },
                                        { label: "AI & ML Ops", href: "#" },
                                        { label: "Cloud Migration", href: "#" },
                                        { label: "Blockchain", href: "#" }
                                    ]
                                },
                                {
                                    title: "Company",
                                    links: [
                                        { label: "Our Story", href: "#" },
                                        { label: "Process", href: "#" },
                                        { label: "Careers", href: "#" },
                                        { label: "Contact", href: "#" }
                                    ]
                                }
                            ],
                            socialLinks: [
                                { icon: "public", href: "#", label: "Website" },
                                { icon: "share", href: "#", label: "Share" },
                                { icon: "email", href: "#", label: "Email" }
                            ],
                            copyrightText: "© 2024 TechNova Solutions. All rights reserved.",
                            footerLinks: [
                                { label: "Privacy Policy", href: "#" },
                                { label: "Terms of Service", href: "#" }
                            ],
                            textColor: "#999999",
                            headingColor: "#ffffff",
                            linkColor: "#999999",
                            linkHoverColor: "#6366f1",
                            darkMode: true
                        }
                    }
                ]
            }]
        }
    }
};

module.exports = techNova;
