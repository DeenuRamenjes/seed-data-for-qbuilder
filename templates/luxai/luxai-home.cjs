/**
 * LuxAI Portfolio Template - Home Page
 * Theme: Premium Gold + Deep Blue Enterprise AI
 * UNIQUE RENDERERS: Section(bg image), Badge, Headline, ButtonGroup, SocialProof,
 *                   Dashboard, StatsSection, MissionSection, CaseStudyCard,
 *                   HighlightedBox, NumericalRating, HeroGradient
 */

const luxaiHome = {
    // ========================================================================
    // HEADER
    // ========================================================================
    header: {
        key: "luxai-header",
        type: "Header",
        category: "header",
        name: "LuxAI Header",
        description: "Professional header with CTA",
        structure: {
            type: "Header",
            defaultProps: {
                fontFamily: "Space Grotesk",
                sticky: true,
                glassmorphism: true,
                fullWidth: true,
                backgroundColor: "#ffffff",
                paddingY: 0,
            },
            columns: [{
                id: "luxai-header-col",
                width: "100%",
                elements: [{
                    id: "luxai-header-nav",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "LuxAI",
                        logoTextColor: "#0f172a",
                        accentColor: "#ffae00",
                        backgroundColor: "#ffffff",
                        linkColor: "#475569",
                        linkHoverColor: "#ffae00",
                        showButton: true,
                        buttonText: "Contact Us",
                        buttonStyle: "solid",
                        buttonLink: "/contact",
                        buttonRadius: "md",
                        links: [
                            { label: "Home", href: "/" },
                            { label: "About", href: "/about" },
                            { label: "Case Studies", href: "/case-studies" },
                            { label: "Contact", href: "/contact" }
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
        key: "luxai-footer",
        type: "Footer",
        category: "footer",
        name: "LuxAI Footer",
        description: "Dark footer with links",
        structure: {
            type: "Footer",
            defaultProps: {
                fontFamily: "Space Grotesk",
                backgroundColor: "#0f172a",
                textColor: "#94a3b8",
                paddingY: 40,
                paddingX: 48,
                fullWidth: true,
            },
            columns: [{
                id: "luxai-footer-col",
                width: "100%",
                elements: [{
                    id: "luxai-footer-content",
                    type: "MinimalFooter",
                    props: {
                        companyName: "LuxAI Portfolio",
                        tagline: "The pinnacle of machine learning for global enterprise leaders.",
                        copyright: "© 2024 LuxAI Portfolio. All rights reserved.",
                        socialLinks: [
                            { platform: "twitter", url: "#" },
                            { platform: "linkedin", url: "#" },
                            { platform: "github", url: "#" }
                        ],
                        columns: [
                            {
                                title: "Solutions",
                                links: [
                                    { label: "Neural Architectures", url: "#" },
                                    { label: "Predictive Analytics", url: "#" },
                                    { label: "Computer Vision", url: "#" }
                                ]
                            },
                            {
                                title: "Company",
                                links: [
                                    { label: "About", url: "/about" },
                                    { label: "Case Studies", url: "/case-studies" },
                                    { label: "Contact", url: "/contact" }
                                ]
                            },
                            {
                                title: "Legal",
                                links: [
                                    { label: "Privacy Policy", url: "#" },
                                    { label: "Terms of Service", url: "#" }
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
        // HERO — IndustrialHero
        // ==================================================================
        {
            key: "luxai-hero",
            name: "Enterprise Hero",
            description: "Full-width industrial hero with background image and status box",
            structure: {
                id: "luxai-hero-section",
                type: "IndustrialHero",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvFP0rAe21kUwXOZJ279UcN5L5mGT6KHW8aojhkDL78WQqWs-Slld2Qt4v8yi2f9ArMymXn3VhRXF8WCbxu1OXAv6EEE_oeqNcG8NoPbsNRufmHt5Zulis0Kvlr64WJQuTvMWL0m1MMpCGJNiar-MLHob97pgLgBaAa4WA9DAtvpk4IfVQXDLQ3pWjC53nSMp5wPZi4kJzdPeuKDbgzoGOiZfk5HUSSWq-0RaJ-eWCaDJ0wrSKsa8M-OoiCXJ7FEtewsLiRXVz9Wr2",
                    backgroundOverlay: "rgba(0, 24, 133, 0.80)",
                    minHeight: "85vh",
                    badgeText: "Enterprise Excellence",
                    badgeShowPing: true,
                    headlineText: "Powering Global Intelligence",
                    headlineTag: "h1",
                    paragraphText: "Discover how our bespoke machine learning architectures drive measurable impact for the world's leading luxury and enterprise brands.",
                    paragraphColor: "rgba(255,255,255,0.85)",
                    paragraphSize: "xl",
                    statusItems: [
                        { text: "200+ Enterprise Clients", size: "xs", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.2em" },
                        { text: "35% Avg. Revenue Growth", size: "xs", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.2em" },
                        { text: "99.9% Data Accuracy", size: "xs", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.2em" }
                    ]
                },
                columns: []
            }
        },

        // ==================================================================
        // STATS — StatsSection renderer
        // ==================================================================
        {
            key: "luxai-stats",
            name: "Global Impact Stats",
            description: "Compact stats bar using StatsSection",
            structure: {
                id: "luxai-stats-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#ffffff",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "luxai-stats-heading-col", width: "100%", props: { padding: 8, paddingBottom: 24 },
                        elements: [
                            {
                                id: "luxai-stats-badge",
                                type: "Badge",
                                props: { text: "Proven Impact", color: "#ffae00", marginBottom: 12, bgColor: "rgba(255, 174, 0, 0.1)", showPing: false }
                            },
                            {
                                id: "luxai-stats-title",
                                type: "Headline",
                                props: { text: "Global Impact by the Numbers", tag: "h2", align: "left", color: "#0f172a", fontWeight: "800" }
                            },
                            {
                                id: "luxai-stats-divider",
                                type: "Divider",
                                props: { color: "#ffae00", width: "96px", height: "6px", borderRadius: "full" }
                            }
                        ]
                    },
                    {
                        id: "luxai-stats-content-col", width: "100%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-stats-section-element",
                            type: "StatsSection",
                            props: {
                                stats: [
                                    { number: 35, label: "Revenue Growth", format: "+%" },
                                    { number: 90, label: "Process Speed", format: "%" },
                                    { number: 99.9, label: "Data Accuracy", format: "%" },
                                    { number: 2, label: "Weeks to Value", format: "" }
                                ],
                                backgroundColor: "transparent",
                                textColor: "#0f172a",
                                accentColor: "#ffae00"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // DASHBOARD — Dashboard widget (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-dashboard",
            name: "Analytics Dashboard",
            description: "Live SaaS-style dashboard visualization",
            structure: {
                id: "luxai-dashboard-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#0a0a0a",
                    paddingY: 40,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "luxai-dashboard-text-col", width: "40%",
                        props: { flexDirection: "column", justifyContent: "center", gap: 16, padding: 20 },
                        elements: [
                            { id: "luxai-dashboard-badge", type: "Badge", props: { text: "Live Platform", marginBottom: 20, color: "#ffae00", bgColor: "rgba(255,174,0,0.15)", showPing: true } },
                            { id: "luxai-dashboard-title", type: "Headline", props: { text: "Enterprise Intelligence at Scale", tag: "h2", align: "left", color: "#ffffff", fontWeight: "800" } },
                            { id: "luxai-dashboard-desc", type: "Paragraph", props: { text: "Our neural orchestration platform processes millions of inferences daily across global infrastructure — with real-time visibility into every node.", align: "left", color: "rgba(255,255,255,0.7)", size: "lg" } }
                        ]
                    },
                    {
                        id: "luxai-dashboard-widget-col", width: "60%", props: { padding: 20 },
                        elements: [{
                            id: "luxai-dashboard-element",
                            type: "Dashboard",
                            props: {
                                title: "LuxAI Neural Engine v4.2",
                                accentColor: "#ffae00",
                                secondaryColor: "#001885",
                                align: "center"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // FEATURED CASE — MissionSection
        // ==================================================================
        {
            key: "luxai-featured-case",
            name: "Featured Success",
            description: "Featured case study with image and embedded stats",
            structure: {
                id: "luxai-featured-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#001885",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "luxai-featured-col",
                    width: "100%",
                    elements: [{
                        id: "luxai-featured-mission",
                        type: "MissionSection",
                        props: {
                            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvFP0rAe21kUwXOZJ279UcN5L5mGT6KHW8aojhkDL78WQqWs-Slld2Qt4v8yi2f9ArMymXn3VhRXF8WCbxu1OXAv6EEE_oeqNcG8NoPbsNRufmHt5Zulis0Kvlr64WJQuTvMWL0m1MMpCGJNiar-MLHob97pgLgBaAa4WA9DAtvpk4IfVQXDLQ3pWjC53nSMp5wPZi4kJzdPeuKDbgzoGOiZfk5HUSSWq-0RaJ-eWCaDJ0wrSKsa8M-OoiCXJ7FEtewsLiRXVz9Wr2",
                            title: "Optimizing Global Supply Chains with Predictive AI",
                            description: "How a Fortune 100 logistics leader leveraged our custom neural networks to reduce carbon footprint by 22% while increasing delivery speed by 40%.",
                            description2: "Real-time demand prediction across 120 countries with dynamic infrastructure adjustments.",
                            stat1Value: "-22%",
                            stat1Label: "Carbon Footprint",
                            stat2Value: "+40%",
                            stat2Label: "Delivery Speed",
                            accentColor: "#ffae00"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // HIGHLIGHTED INSIGHT — HighlightedBox (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-highlight",
            name: "Industry Insight",
            description: "Highlighted callout box with key insight",
            structure: {
                id: "luxai-highlight-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#ffffff",
                    paddingY: 60,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "luxai-highlight-col", width: "60%", props: { padding: 12 },
                        elements: [{
                            id: "luxai-highlight-box",
                            type: "HighlightedBox",
                            props: {
                                text: "<strong>McKinsey Global Institute (2024):</strong> Companies that deploy bespoke AI architectures see <strong>3.5x higher ROI</strong> compared to off-the-shelf solutions. LuxAI clients consistently exceed this benchmark — averaging <strong>4.2x return</strong> within the first 12 months of deployment.",
                                accentColor: "#ffae00",
                                borderColor: "#ffae00",
                                backgroundColor: "rgba(255, 174, 0, 0.05)",
                                showLeftAccent: true,
                                padding: 32,
                                borderRadius: "12"
                            }
                        }]
                    },
                    {
                        id: "luxai-rating-col", width: "40%", props: { padding: 12 },
                        elements: [{
                            id: "luxai-rating-element",
                            type: "NumericalRating",
                            props: {
                                rating: "4.9",
                                totalReviews: "200+",
                                ratingColor: "#ffae00",
                                breakdownVisible: true
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // RECENT CASES — CaseStudyCard renderer
        // ==================================================================
        {
            key: "luxai-recent-cases",
            name: "Recent Implementations",
            description: "2-column case study cards with images and tags",
            structure: {
                id: "luxai-recent-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#f8f7f5",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "luxai-recent-heading-col", width: "100%", props: { padding: 8, paddingBottom: 24, flexDirection: "column", gap: 12 },
                        elements: [
                            { id: "luxai-recent-badge", type: "Badge", props: { text: "Case Studies", marginBottom: 20, color: "#ffae00", bgColor: "rgba(255,174,0,0.1)", showPing: false } },
                            { id: "luxai-recent-title", type: "Headline", props: { text: "Recent Implementations", tag: "h2", align: "left", color: "#0f172a", fontWeight: "800" } }
                        ]
                    },
                    {
                        id: "luxai-case1-col", width: "50%", props: { padding: 12 },
                        elements: [{
                            id: "luxai-case1",
                            type: "CaseStudyCard",
                            props: {
                                title: "Algorithmic Risk Mitigation for Swiss Banking",
                                description: "Real-time risk assessment engine reducing exposure by 15% without impacting trade velocity.",
                                tags: ["FinTech", "Risk AI", "Banking"],
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA08AjeoLd6WD2NBr1X151aR8uFSz73A6jpJDIwU_BOCY_qhgK5-k3S4IQ1hOokl45zH_-vaHzoeAcV0iQNG8M4bJ54IO1qT5oJw_owiP4vcB6ZwyQ_JSXJw8Pz1fxRXFI_lygxaGVU6B2mLA_-xByPNEvdy4JvLjjeOXswsVkpkynVMLRC4E-0a71ZX-7_FfRr15Rf77Ghdw3YJFOZG1aa59C3KNZqdEGu0htVFC1FZlsXmuwxj6Ge1VUUMXBZp6ocSidyNdoXnv-e",
                                accentColor: "#ffae00",
                                ctaText: "Explore Solution →",
                                ctaLink: "#"
                            }
                        }]
                    },
                    {
                        id: "luxai-case2-col", width: "50%", props: { padding: 12 },
                        elements: [{
                            id: "luxai-case2",
                            type: "CaseStudyCard",
                            props: {
                                title: "Clinical Trial Optimization using LLMs",
                                description: "Analyzing patient datasets to accelerate time-to-market for life-saving drugs by 18 months.",
                                tags: ["Healthcare", "LLM", "BioPharma"],
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYRcUZctpG1WIGfe4Kgc9U9dYS0N5W3YLLPTMVYaJuCSMIx46ExP0-5EI7G4EjKNgJQiCMoFYIlJJEYeeeOfuuMA80SbPcszHXtijXlBfjuX8BxGSoBQco5NxyhHOj-ypn9NfNSFZLtgDroApjirG0lS0lcnqvB0rOG6VIxAzabviA6cmAE2R-2ws-Fz2V4JENJc-8s-pBvEQ9GePq7vwN-HZHA5Ofw_2s1Jso6Aag5UpmqAvdztsnnFBbT4T0gomKoLFmsKfTkvBw",
                                accentColor: "#ffae00",
                                ctaText: "Explore Solution →",
                                ctaLink: "#"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // CTA — HeroGradient
        // ==================================================================
        {
            key: "luxai-cta",
            name: "Call to Action",
            description: "Dark CTA with gradient badge",
            structure: {
                id: "luxai-cta-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "luxai-cta-col",
                    width: "100%",
                    elements: [{
                        id: "luxai-cta-hero",
                        type: "HeroGradient",
                        props: {
                            badgeText: "GET STARTED",
                            title: "Ready to Transform Your Enterprise?",
                            lead: "Join the ranks of elite enterprises utilizing LuxAI's bespoke machine learning solutions to define the future of their industries.",
                            accentColor: "#ffae00",
                            secondaryColor: "#001885",
                            backgroundColor: "#0a0a0a",
                            paddingTop: 40,
                            paddingBottom: 40,
                            primaryCtaText: "Book a Consultation",
                            primaryCtaLink: "/contact",
                            secondaryCtaText: "Download Capabilities Deck →",
                            secondaryCtaLink: "#"
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = luxaiHome;
