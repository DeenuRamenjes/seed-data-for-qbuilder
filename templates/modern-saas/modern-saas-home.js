/**
 * Modern SaaS Template - Complete Full Page Template
 * Theme: Vibrant Blue/Purple gradient with dark backgrounds
 * Industry: SaaS/Tech Product Companies
 * Color Scheme: 
 *   - Primary: #3B82F6 (Bright Blue)
 *   - Secondary: #A855F7 (Purple)
 *   - Accent: #EC4899 (Pink)
 *   - Background: #030712 (Dark Navy)
 *   - Text: #FFFFFF (White)
 */

export const modernSaaSTemplate = {
    // ============================================================================
    // HEADER - Vibrant SaaS Navigation
    // ============================================================================
    header: {
        key: "modern-saas-header",
        type: "Header",
        category: "header",
        name: "Modern SaaS Header",
        description: "Sleek dark navigation with blue/purple accent - matches vibrant SaaS hero",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                glassmorphism: true,
                fullWidth: true,
                backgroundColor: "#030712",
                paddingY: 0,
            },
            columns: [{
                id: "saas-header-col",
                width: "100%",
                elements: [{
                    id: "saas-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "Scale",
                        logoAccent: "AI",
                        logoTextColor: "#FFFFFF",
                        accentColor: "#3B82F6",
                        links: [
                            { 
                                label: "Features", 
                                href: "#features",
                                isMegaMenu: true,
                                megaMenuType: "sections",
                                megaMenuTitle: "Product Features",
                                megaMenuDescription: "Everything you need to scale",
                                columnsData: [
                                    {
                                        title: "ANALYTICS",
                                        items: [
                                            { label: "Real-time Dashboard", href: "#" },
                                            { label: "Advanced Reports", href: "#" },
                                            { label: "Custom Metrics", href: "#" }
                                        ]
                                    },
                                    {
                                        title: "INTEGRATIONS",
                                        items: [
                                            { label: "Slack", href: "#" },
                                            { label: "Webhooks", href: "#" },
                                            { label: "API Access", href: "#" }
                                        ]
                                    },
                                    {
                                        title: "AUTOMATION",
                                        items: [
                                            { label: "Workflows", href: "#" },
                                            { label: "Triggers", href: "#" },
                                            { label: "Templates", href: "#" }
                                        ]
                                    }
                                ]
                            },
                            { 
                                label: "Pricing", 
                                href: "#pricing" 
                            },
                            { 
                                label: "About", 
                                href: "#about" 
                            },
                            { 
                                label: "Blog", 
                                href: "#blog" 
                            }
                        ],
                        linkColor: "#94A3B8",
                        linkHoverColor: "#FFFFFF",
                        backgroundColor: "#030712",
                        showButton: true,
                        buttonText: "Start Free",
                        buttonLink: "/signup",
                        buttonStyle: "solid",
                        buttonRadius: "md",
                        megaMenuBgColor: "#0F172A",
                        megaMenuTextColor: "#E2E8F0",
                        megaMenuHeadingColor: "#3B82F6",
                        megaMenuDividerColor: "rgba(59, 130, 246, 0.1)"
                    }
                }]
            }]
        }
    },

    // ============================================================================
    // HERO - Vibrant Tech SaaS (from heroes.js)
    // ============================================================================
    hero: {
        key: "hero-vibrant-saas",
        type: "Hero",
        category: "hero",
        name: "Vibrant Tech SaaS",
        description: "Modern, high-energy SaaS hero with dashboards and social proof",
        structure: {
            id: "hero-vsaas-1",
            type: "Hero",
            props: {
                paddingTop: 50,
                paddingBottom: 50,
                backgroundColor: "#030712",
                layoutType: "asymmetric",
                fullWidth: true,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                decorativeElements: [
                    { type: "mesh", size: "40px 40px" },
                    { type: "blob", color: "#3B82F6", width: "600px", height: "600px", top: "20%", left: "10%", opacity: 0.15 },
                    { type: "blob", color: "#A855F7", width: "500px", height: "500px", top: "80%", left: "90%", opacity: 0.15 }
                ]
            },
            columns: [
                {
                    id: "vsaas-col-1",
                    width: "50%",
                    props: {
                        padding: 40,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "vsaas-badge",
                            type: "Badge",
                            props: {
                                text: "v4.0 IS HERE",
                                color: "#3B82F6",
                                backgroundColor: "rgba(59, 130, 246, 0.1)",
                                borderRadius: 20
                            }
                        },
                        {
                            id: "vsaas-title",
                            type: "Headline",
                            props: {
                                text: "SCALE FASTER THAN EVER",
                                tag: "h2",
                                align: "left",
                                color: "#ffffff",
                                fontWeight: "900",
                                fontSize: "72"
                            }
                        },
                        {
                            id: "vsaas-para",
                            type: "Paragraph",
                            props: {
                                text: "The next-generation analytics engine designed for hyper-growth teams. Experience the speed of thought with our real-time processing layer.",
                                align: "left",
                                color: "rgba(255, 255, 255, 0.7)",
                                size: "xl"
                            }
                        },
                        {
                            id: "vsaas-btns",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Get Started Free",
                                secondaryText: "Live Demo",
                                primaryBg: "linear-gradient(to right, #3B82F6, #A855F7)",
                                primaryColor: "#FFFFFF",
                                secondaryBg: "rgba(255, 255, 255, 0.1)",
                                secondaryColor: "#FFFFFF",
                                gap: "gap-4"
                            }
                        },
                        {
                            id: "vsaas-proof",
                            type: "SocialProof",
                            props: {
                                text: "Trusted by 2,000+ top-tier engineering teams"
                            }
                        }
                    ]
                },
                {
                    id: "vsaas-col-2",
                    width: "50%",
                    props: {
                        padding: 20,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "vsaas-dashboard",
                            type: "Dashboard",
                            props: {
                                title: "Production Cluster Alpha",
                                accentColor: "#3B82F6",
                                secondaryColor: "#A855F7",
                                align: "center"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // FEATURES - Our Capabilities Section
    // ============================================================================
    features: {
        key: "modern-saas-features",
        type: "SectionTemplate",
        category: "saas",
        name: "Features - Our Capabilities",
        description: "Showcase core features with centered heading and description",
        structure: {
            type: "Section",
            defaultProps: {
                backgroundColor: "#030712",
                paddingY: 120,
                fullWidth: true,
            },
            columns: [{
                id: "features-header-col",
                width: "100%",
                props: {
                    padding: 40,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 24
                },
                elements: [
                    {
                        id: "features-badge",
                        type: "Badge",
                        props: {
                            text: "Our Capabilities",
                            color: "#06B6D4",
                            bgColor: "rgba(6, 182, 212, 0.1)",
                            showPing: false
                        }
                    },
                    {
                        id: "features-title",
                        type: "Headline",
                        props: {
                            text: "Powerful tools for Modern Infrastructure",
                            tag: "h2",
                            align: "center",
                            color: "#ffffff",
                            fontWeight: "900"
                        }
                    },
                    {
                        id: "features-desc",
                        type: "Paragraph",
                        props: {
                            text: "Everything you need to build, scale, and monitor your global applications in one unified ecosystem.",
                            align: "center",
                            color: "rgba(255, 255, 255, 0.6)",
                            size: "lg"
                        }
                    }
                ]
            }]
        }
    },

    // Features Grid with Service Cards
    featuresGrid: {
        key: "modern-saas-features-grid",
        type: "SectionTemplate",
        category: "saas",
        name: "Features Grid - Service Cards",
        description: "4-feature grid layout using service cards",
        structure: {
            type: "Section",
            defaultProps: {
                backgroundColor: "#030712",
                paddingY: 60,
                paddingX: 40,
                fullWidth: true,
            },
            columns: [{
                id: "features-grid-col",
                width: "100%",
                props: {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 24
                },
                elements: [
                    {
                        id: "feature-card-1",
                        type: "ServiceCard",
                        props: {
                            title: "Global Edge Network",
                            description: "Deploy your code to 300+ locations with sub-30ms latency for all users.",
                            iconName: "Globe",
                            linkText: "Learn More",
                            link: "#"
                        }
                    },
                    {
                        id: "feature-card-2",
                        type: "ServiceCard",
                        props: {
                            title: "Advanced Security",
                            description: "Military-grade encryption, automated DDoS protection, isolated runtime environments.",
                            iconName: "Shield",
                            linkText: "Learn More",
                            link: "#"
                        }
                    },
                    {
                        id: "feature-card-3",
                        type: "ServiceCard",
                        props: {
                            title: "Auto-Scaling",
                            description: "Scale from zero to millions of requests without manual intervention.",
                            iconName: "TrendingUp",
                            linkText: "Learn More",
                            link: "#"
                        }
                    },
                    {
                        id: "feature-card-4",
                        type: "ServiceCard",
                        props: {
                            title: "Developer First",
                            description: "Comprehensive CLI, SDKs for every language, seamless CI/CD integration.",
                            iconName: "BarChart3",
                            linkText: "Learn More",
                            link: "#"
                        }
                    }
                ]
            }]
        }
    },

    // ============================================================================
    // STATS - Key Metrics Section
    // ============================================================================
    stats: {
        key: "modern-saas-stats",
        type: "SectionTemplate",
        category: "saas",
        name: "Stats - Key Metrics",
        description: "Showcase impressive statistics with animated counter",
        structure: {
            type: "Section",
            defaultProps: {
                backgroundColor: "#030712",
                paddingY: 80,
                paddingX: 40,
                fullWidth: true,
            },
            columns: [{
                id: "stats-container-col",
                width: "100%",
                props: {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                elements: [
                    {
                        id: "stats-section",
                        type: "StatsSection",
                        props: {
                            stats: [
                                { number: 10, label: "Projects", format: "default" },
                                { number: 4, label: "Industries worked", format: "default" },
                                { number: 1000, label: "Leads in last 6 months", format: "k" },
                                { number: 20000000, label: "Revenue Generated to clients", format: "cr" }
                            ],
                            backgroundColor: "#030712",
                            paddingY: 40,
                            paddingX: 40,
                            textColor: "#FFFFFF",
                            accentColor: "#3B82F6"
                        }
                    }
                ]
            }]
        }
    },

    // ============================================================================
    // SERVICES - Our Services Section
    // ============================================================================
    services: {
        key: "modern-saas-services",
        type: "SectionTemplate",
        category: "services",
        name: "Services - What We Offer",
        description: "Comprehensive services and solutions",
        structure: {
            type: "Section",
            defaultProps: {
                backgroundColor: "#030712",
                paddingY: 80,
                paddingX: 40,
                fullWidth: true,
            },
            columns: [{
                id: "services-header-col",
                width: "100%",
                props: {
                    padding: 40,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 24,
                    marginBottom: 60
                },
                elements: [
                    {
                        id: "services-badge",
                        type: "Badge",
                        props: {
                            text: "OUR SERVICES",
                            color: "#A855F7",
                            bgColor: "rgba(168, 85, 247, 0.1)",
                            showPing: false
                        }
                    },
                    {
                        id: "services-title",
                        type: "Headline",
                        props: {
                            text: "Everything You Need to Succeed",
                            tag: "h2",
                            align: "center",
                            color: "#ffffff",
                            fontWeight: "900"
                        }
                    },
                    {
                        id: "services-desc",
                        type: "Paragraph",
                        props: {
                            text: "From deployment to monitoring, we provide comprehensive solutions for modern teams.",
                            align: "center",
                            color: "rgba(255, 255, 255, 0.6)",
                            size: "lg"
                        }
                    }
                ]
            },
            {
                id: "services-section-col",
                width: "100%",
                props: {
                    padding: 0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                elements: [
                    {
                        id: "services-section",
                        type: "ServicesSection",
                        props: {
                            cards: [
                                { cardSrc: "", iconSrc: "", title: "Cloud Deployment", redirect: "#" },
                                { cardSrc: "", iconSrc: "", title: "Real-time Monitoring", redirect: "#" },
                                { cardSrc: "", iconSrc: "", title: "API Management", redirect: "#" },
                                { cardSrc: "", iconSrc: "", title: "CI/CD Pipeline", redirect: "#" },
                                { cardSrc: "", iconSrc: "", title: "Database Hosting", redirect: "#" },
                                { cardSrc: "", iconSrc: "", title: "24/7 Support", redirect: "#" }
                            ],
                            backgroundColor: "#030712",
                            paddingY: 40,
                            paddingX: 40,
                            textColor: "#FFFFFF",
                            accentColor: "#3B82F6"
                        }
                    }
                ]
            }]
        }
    },

    // ============================================================================
    // CTA - Call to Action Section
    // ============================================================================
    cta: {
        key: "modern-saas-cta",
        type: "SectionTemplate",
        category: "cta",
        name: "CTA - Ready to Transform",
        description: "Call to action section with headline and centered button group",
        structure: {
            type: "Section",
            defaultProps: {
                backgroundColor: "#030712",
                paddingY: 80,
                paddingX: 40,
                fullWidth: true,
            },
            columns: [{
                id: "cta-col",
                width: "100%",
                props: {
                    padding: 48,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
                    borderRadius: 48,
                    gap: 32
                },
                elements: [
                    {
                        id: "cta-title",
                        type: "Headline",
                        props: {
                            text: "Ready to transform your tech stack?",
                            tag: "h2",
                            align: "center",
                            color: "#ffffff",
                            fontWeight: "900"
                        }
                    },
                    {
                        id: "cta-btn-group",
                        type: "ButtonGroup",
                        props: {
                            primaryText: "Start Building Now",
                            secondaryText: "Talk to Sales",
                            primaryBg: "#3B82F6",
                            primaryColor: "#FFFFFF",
                            secondaryBg: "rgba(255, 255, 255, 0.1)",
                            secondaryColor: "#FFFFFF",
                            gap: "gap-4",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }
                ]
            }]
        }
    },

    // ============================================================================
    // ============================================================================
    // FOOTER - Minimal with Logo, Links & Copyright
    // ============================================================================
    footer: {
        key: "modern-saas-footer",
        type: "Footer",
        category: "footer",
        name: "Modern SaaS Footer",
        description: "Minimal responsive footer with logo, status/links, and copyright",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#030712",
                paddingY: 40,
                paddingX: 40,
                fullWidth: true,
                borderTopColor: "rgba(255, 255, 255, 0.05)",
                borderTopWidth: "1px"
            },
            columns: [{
                id: "footer-col",
                width: "100%",
                elements: [
                    {
                        id: "footer-content",
                        type: "MinimalFooter",
                        props: {
                            brandName: "Vibrant.io",
                            badgeText: "V",
                            badgeColor: "#3B82F6",
                            links: [
                                { label: "Status: 99.9%", url: "#" },
                                { label: "Privacy", url: "#" },
                                { label: "Terms", url: "#" }
                            ],
                            copyright: "© 2024 Systems Inc.",
                            backgroundColor: "#030712",
                            borderColor: "rgba(255, 255, 255, 0.05)",
                            textColor: "rgba(148, 163, 184, 0.8)"
                        }
                    }
                ]
            }]
        }
    }
};

