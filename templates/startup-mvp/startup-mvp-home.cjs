/**
 * Startup MVP Template - Home Page (Redesigned)
 * Uses specialized renderers: HeroGradient, StatsCard, ProcessStepCard,
 * Testimonial, BigNumberCard — distinct from IT-consulting's basic approach
 */

const startupMvpHome = {
    // ========================================================================
    // HEADER
    // ========================================================================
    header: {
        key: "startup-mvp-header",
        type: "Header",
        category: "header",
        name: "Startup MVP Header",
        description: "Floating navbar with gradient branding",
        structure: {
            type: "Header",
            defaultProps: {
                fontFamily: "Manrope",
                sticky: true,
                glassmorphism: true,
                fullWidth: true,
                backgroundColor: "#ffffff",
                paddingY: 0,
            },
            columns: [{
                id: "smvp-header-col",
                width: "100%",
                elements: [{
                    id: "smvp-header-nav",
                    type: "FloatingNavbar",
                    props: {
                        logoType: "text",
                        logoText: "TechFlow",
                        logoTextColor: "#000000",
                        accentColor: "#902EFF",
                        backgroundColor: "#ffffff",
                        linkColor: "#000000",
                        linkHoverColor: "#902EFF",
                        showButton: true,
                        buttonText: "Get Started",
                        buttonStyle: "solid",
                        buttonBg: "#000000",
                        buttonColor: "#ffffff",
                        links: [
                            { label: "Product", url: "/" },
                            { label: "Features", url: "/" },
                            { label: "Pricing", url: "/pricing" },
                            { label: "About", url: "/about" }
                        ]
                    }
                }]
            }]
        }
    },

    // ========================================================================
    // FOOTER
    // ========================================================================
    footer: {
        key: "startup-mvp-footer",
        type: "Footer",
        category: "footer",
        name: "Startup MVP Footer",
        description: "Minimal footer with social links",
        structure: {
            type: "Footer",
            defaultProps: {
                fontFamily: "Manrope",
                backgroundColor: "#ffffff",
                textColor: "#6b7280",
                paddingY: 40,
                paddingX: 48,
                fullWidth: true,
            },
            columns: [{
                id: "smvp-footer-col",
                width: "100%",
                elements: [{
                    id: "smvp-footer",
                    type: "MinimalFooter",
                    props: {
                        companyName: "TechFlow Inc.",
                        tagline: "Empowering technical teams with high-performance tools and seamless workflows since 2024.",
                        copyright: "© 2024 TechFlow Inc. All rights reserved.",
                        socialLinks: [
                            { platform: "twitter", url: "#" },
                            { platform: "github", url: "#" },
                            { platform: "linkedin", url: "#" }
                        ],
                        columns: [
                            {
                                title: "Product",
                                links: [
                                    { label: "Features", url: "#" },
                                    { label: "Integrations", url: "#" },
                                    { label: "Enterprise", url: "#" },
                                    { label: "Solutions", url: "#" }
                                ]
                            },
                            {
                                title: "Resources",
                                links: [
                                    { label: "Documentation", url: "#" },
                                    { label: "API Reference", url: "#" },
                                    { label: "Community", url: "#" },
                                    { label: "Guides", url: "#" }
                                ]
                            },
                            {
                                title: "Company",
                                links: [
                                    { label: "About Us", url: "/about" },
                                    { label: "Careers", url: "#" },
                                    { label: "Privacy", url: "#" },
                                    { label: "Contact", url: "/pricing" }
                                ]
                            }
                        ]
                    }
                }]
            }]
        }
    },

    // ========================================================================
    // SECTIONS
    // ========================================================================
    sections: [
        // ==================================================================
        // HERO — uses HeroGradient (full section renderer with badge+title)
        // ==================================================================
        {
            key: "smvp-hero",
            name: "Gradient Hero",
            description: "Dark hero with gradient badge and title",
            structure: {
                id: "smvp-hero-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-hero-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-hero-gradient",
                        type: "HeroGradient",
                        props: {
                            badgeText: "LAUNCH FASTER",
                            title: "Supercharge your Future Workflow",
                            lead: "We've built the ultimate platform for technical excellence. Streamline your operations with our high-performance toolset designed for modern teams.",
                            accentColor: "#902EFF",
                            secondaryColor: "#FF2EA4",
                            backgroundColor: "#0a0a0a",
                            paddingTop: 80,
                            paddingBottom: 30
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // STATS ROW — 4 x StatsCard (icon, badge, value, trend)
        // ==================================================================
        {
            key: "smvp-stats",
            name: "Performance Metrics",
            description: "4 stats cards with icons, badges, and trend indicators",
            structure: {
                id: "smvp-stats-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 60,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "smvp-stats-heading-col", width: "100%", props: { padding: 8, paddingBottom: 24, textAlign: "center" },
                        elements: [
                            {
                                id: "smvp-stats-badge",
                                type: "Heading",
                                props: {
                                    text: "METRICS",
                                    level: "h6",
                                    color: "#902EFF",
                                    fontSize: 13,
                                    fontWeight: "700",
                                    letterSpacing: 2,
                                    align: "center",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "smvp-stats-title",
                                type: "Heading",
                                props: {
                                    text: "Performance That Speaks for Itself",
                                    level: "h2",
                                    color: "#111827",
                                    fontSize: 36,
                                    fontWeight: "800",
                                    align: "center",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "smvp-stats-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Real-time numbers from our production infrastructure — no vanity metrics.",
                                    color: "#6B7280",
                                    fontSize: 17,
                                    align: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "smvp-stat1-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "smvp-stat1",
                            type: "StatsCard",
                            props: {
                                icon: "Users",
                                badge: "Growth",
                                statLabel: "Active Teams",
                                statValue: "500+",
                                trend: "+24%",
                                trendLabel: "vs last quarter",
                                trendColor: "#22C55E",
                                trendIcon: "TrendingUp",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-stat2-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "smvp-stat2",
                            type: "StatsCard",
                            props: {
                                icon: "Zap",
                                badge: "Speed",
                                statLabel: "Avg Latency",
                                statValue: "<40ms",
                                trend: "-15%",
                                trendLabel: "from baseline",
                                trendColor: "#22C55E",
                                trendIcon: "TrendingDown",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-stat3-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "smvp-stat3",
                            type: "StatsCard",
                            props: {
                                icon: "ShieldCheck",
                                badge: "Reliable",
                                statLabel: "Uptime SLA",
                                statValue: "99.99%",
                                trend: "Enterprise",
                                trendLabel: "grade",
                                trendColor: "#902EFF",
                                trendIcon: "Award",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-stat4-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "smvp-stat4",
                            type: "StatsCard",
                            props: {
                                icon: "Globe",
                                badge: "Scale",
                                statLabel: "Global CDN",
                                statValue: "42",
                                trend: "regions",
                                trendLabel: "worldwide",
                                trendColor: "#FF2EA4",
                                trendIcon: "MapPin",
                                borderRadius: 16
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // MISSION SECTION — image + text + embedded stats
        // ==================================================================
        {
            key: "smvp-mission",
            name: "Why TechFlow",
            description: "Image + text + stats mission section",
            structure: {
                id: "smvp-mission-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-mission-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-mission-element",
                        type: "MissionSection",
                        props: {
                            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0ofpVT52mOQyKXmydf6VaQ6WCwQ1HKwo3cvYaZVcr0X5YDaL3Er1noLaw5vCAXBQmhwcFFZGoHBb4SFhL7ZvhusfECnI2_ej3eGV5hBKVPntiDbZ96-hMNpU4z4TcCCR7voUmrwWRWzAOQFfLFvQRWt_4RreuaIdkojACg3UhfGsfTJhN8ZpXP4yRuQVuBr4ENuREs3PiLT6gveTmCXyxNtndfxigKmW2np1MzBv3rF4DkTQvirNe_WaYkxpvgkYjF_sMkJ9D31Gh",
                            title: "Why TechFlow?",
                            description: "Our proprietary engine handles millions of operations per second with sub-millisecond latency. Never let your tools be the bottleneck of your creativity again.",
                            description2: "Connect to 100+ platforms instantly. From GitHub to Slack, we've built native integrations that keep your data synchronized and your team updated in real-time.",
                            stat1Value: "12k",
                            stat1Label: "Requests/sec",
                            stat2Value: "100+",
                            stat2Label: "Integrations",
                            accentColor: "#902EFF"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // HOW IT WORKS — 3 x ProcessStepCard
        // ==================================================================
        {
            key: "smvp-how-it-works",
            name: "How It Works",
            description: "3-step process with numbered cards",
            structure: {
                id: "smvp-how-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "smvp-how-heading-col", width: "100%", props: { padding: 8, paddingBottom: 24, textAlign: "center" },
                        elements: [
                            {
                                id: "smvp-how-badge",
                                type: "Heading",
                                props: {
                                    text: "HOW IT WORKS",
                                    level: "h6",
                                    color: "#902EFF",
                                    fontSize: 13,
                                    fontWeight: "700",
                                    letterSpacing: 2,
                                    align: "center",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "smvp-how-title",
                                type: "Heading",
                                props: {
                                    text: "Three Steps to Production",
                                    level: "h2",
                                    color: "#111827",
                                    fontSize: 36,
                                    fontWeight: "800",
                                    align: "center",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "smvp-how-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Get up and running in minutes — not months. Our streamlined workflow removes the complexity.",
                                    color: "#6B7280",
                                    fontSize: 17,
                                    align: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "smvp-how-step1-col", width: "calc(100% / 3)", props: { padding: 20 },
                        elements: [{
                            id: "smvp-step1",
                            type: "ProcessStepCard",
                            props: {
                                stepNumber: "1",
                                title: "Connect Sources",
                                description: "Securely link your databases, cloud storage, or API endpoints with our one-click connectors.",
                                accentColor: "#902EFF"
                            }
                        }]
                    },
                    {
                        id: "smvp-how-step2-col", width: "calc(100% / 3)", props: { padding: 20 },
                        elements: [{
                            id: "smvp-step2",
                            type: "ProcessStepCard",
                            props: {
                                stepNumber: "2",
                                title: "Configure Flows",
                                description: "Use our visual drag-and-drop builder to define logic, filters, and transformation rules for your data.",
                                accentColor: "#FF2EA4"
                            }
                        }]
                    },
                    {
                        id: "smvp-how-step3-col", width: "calc(100% / 3)", props: { padding: 20 },
                        elements: [{
                            id: "smvp-step3",
                            type: "ProcessStepCard",
                            props: {
                                stepNumber: "3",
                                title: "Deploy & Monitor",
                                description: "Push to production instantly. Track performance metrics and logs with our built-in observability suite.",
                                accentColor: "#902EFF"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // TESTIMONIAL — social proof quote
        // ==================================================================
        {
            key: "smvp-testimonial",
            name: "Social Proof",
            description: "Testimonial quote with avatar and rating",
            structure: {
                id: "smvp-testimonial-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#f9fafb",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "smvp-testimonial-heading-col", width: "100%", props: { padding: 8, paddingBottom: 24, textAlign: "center" },
                        elements: [
                            {
                                id: "smvp-testimonial-badge",
                                type: "Heading",
                                props: {
                                    text: "TESTIMONIALS",
                                    level: "h6",
                                    color: "#902EFF",
                                    fontSize: 13,
                                    fontWeight: "700",
                                    letterSpacing: 2,
                                    align: "center",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "smvp-testimonial-title",
                                type: "Heading",
                                props: {
                                    text: "Loved by Engineering Teams",
                                    level: "h2",
                                    color: "#111827",
                                    fontSize: 36,
                                    fontWeight: "800",
                                    align: "center",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "smvp-testimonial-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "See what industry leaders are saying about how TechFlow transformed their workflows.",
                                    color: "#6B7280",
                                    fontSize: 17,
                                    align: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "smvp-testimonial-col1",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "smvp-testimonial-1",
                            type: "Testimonial",
                            props: {
                                quote: "TechFlow reduced our deployment time from days to minutes. It's the backbone of our entire engineering workflow now.",
                                authorName: "Sarah Chen",
                                authorTitle: "CTO, NovaTech",
                                authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr2W4ADRM51zGyT0xOYoUsSsErERYmnzIZ9jEi_eoO7S4Rlx7qTEVNxgVv4pS9QZdWwCPQ0eOK2nP3bxnaKihWUVrvB3uFU_RL8C5YZvDBc7UQgG6TgKMh6gYdwAYN6aKlCyok69KhidceEJnAJ0ImTWqn9xlBa2ig1OBcp7q9RyxnvjvjnlIZFcuoJGsvYqOn2Mj-pFBltDE8i6xyCcG93Bgzgaed7KwcixFzRVMmVmOEKRquFsfNdHuqNn-se8yTlqY-vWGm9Upu",
                                rating: 5,
                                border: "none",
                                accentColor: "#902EFF"
                            }
                        }]
                    },
                    {
                        id: "smvp-testimonial-col2",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "smvp-testimonial-2",
                            type: "Testimonial",
                            props: {
                                quote: "We scaled from 10 to 500 engineers without a single infrastructure hiccup. TechFlow's automation handles it all seamlessly.",
                                authorName: "Marcus Rivera",
                                authorTitle: "VP Engineering, ScaleUp",
                                authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpT-6OgMXISh3zFc2PT6VowUKQyaxVA0Ffc9u88Cum7az03__qkHvQkYlcm7_Ouw5wH7jOdJSPa2rjbMZK8WRcCfJcD8Fj6fpRk5fcfUZnXX2tSQajv3Jlz_vccYovo_gLAzRgjGgbzE112Ar3-MmcI2T6ko4Xt-L-Wes1PZot4bnp94JhDMBvlAZ-33AS4Qopg0U0xospFBdwOUKce-VwEqkCyj9iPCOVIX-lT6hxY8izC_QbqqtpWXMZA2ecCXUgjDdDlzCnpVI",
                                rating: 5,
                                border: "none",
                                accentColor: "#FF2EA4"
                            }
                        }]
                    },
                    {
                        id: "smvp-testimonial-col3",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "smvp-testimonial-3",
                            type: "Testimonial",
                            props: {
                                quote: "The real-time analytics alone paid for the entire platform in the first month. Our team can't imagine working without it.",
                                authorName: "Emily Nakamura",
                                authorTitle: "Head of Product, Datawise",
                                authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuALFkrYvJQQW19Jx5-qnE8XaIFtiwqwM6M3D5sWNE6lQrI1HshIAO6MFd7vrjaH-HFcgyIir8RcAGtv9bBOfKeFeUlhlqSInPobIq6RS8qO3WdXTa_i6JVFh4WnohFEQf5fMOkwQrd73thLB70SDzEkd4fBpdxB1Uqjl55txU3Zggp4D_NZnFhyRu9iByXqCbcNXa31443z7AhAF6o7TTjI3I6W9hWPRsoYx_ZAbhh6LH7RpnYuyxJLW7a1ywR4GSiIndTcAKO3QJs",
                                rating: 5,
                                border: "none",
                                accentColor: "#902EFF"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // CTA — HeroGradient styled dark CTA
        // ==================================================================
        {
            key: "smvp-cta",
            name: "Call to Action",
            description: "Dark CTA section with gradient accents and buttons",
            structure: {
                id: "smvp-cta-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-cta-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-cta-hero",
                        type: "HeroGradient",
                        props: {
                            badgeText: "START TODAY",
                            title: "Ready to Transform Your Tech Stack?",
                            lead: "Join 500+ engineering teams already scaling with TechFlow. Start your 14-day unlimited trial today.",
                            accentColor: "#FF2EA4",
                            secondaryColor: "#902EFF",
                            backgroundColor: "#0a0a0a",
                            paddingTop: 20,
                            paddingBottom: 20,
                            primaryCtaText: "Start Free Trial",
                            primaryCtaLink: "#",
                            secondaryCtaText: "Schedule a Demo →",
                            secondaryCtaLink: "#"
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = startupMvpHome;
