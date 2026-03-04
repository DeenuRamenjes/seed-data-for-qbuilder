/**
 * NexaSupport - Tech Support & Managed Services Template
 * About Page
 * Uses unused renderers: InteractiveTimeline, TeamProfile, ProgressBar,
 * TrustSignal, Documentation, Roadmap
 */

const techSupportAbout = {
    sections: [
        // ==================================================================
        // ABOUT HERO — Company mission
        // ==================================================================
        {
            key: "ts-about-hero",
            name: "About Hero",
            description: "About page hero with company mission",
            structure: {
                id: "ts-about-hero-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 60,
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        paddingY: 40,
                        paddingX: 20,
                        gap: 32
                    }
                },
                columns: [
                    {
                        id: "ts-about-hero-left",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            gap: 20,
                            "@media (max-width: 768px)": { width: "100%" }
                        },
                        elements: [
                            {
                                id: "ts-about-badge",
                                type: "Badge",
                                props: {
                                    text: "About NexaSupport",
                                    color: "#8100B8",
                                    bgColor: "rgba(129, 0, 184, 0.1)",
                                    showPing: false,
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "ts-about-title",
                                type: "Headline",
                                props: {
                                    text: "Built by Engineers, [For Engineers.](linear-gradient(90deg, #60F21D, #8100B8)",
                                    tag: "h1",
                                    align: "left",
                                    color: "#000000",
                                    fontWeight: "900",
                                    fontSize: {
                                        mobile: "36px",
                                        tablet: "48px",
                                        desktop: "56px"
                                    },
                                    lineHeight: 1.1,
                                    marginBottom: 20
                                }
                            },
                            {
                                id: "ts-about-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Founded in 2018, NexaSupport was born from a simple belief: businesses deserve IT support that actually works. Our team of 200+ certified engineers serves over 500 companies across 12 countries.",
                                    align: "left",
                                    color: "#555555",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    maxWidth: "520px"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-about-hero-right",
                        width: "45%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            "@media (max-width: 768px)": { width: "100%" }
                        },
                        elements: [{
                            id: "ts-about-img",
                            type: "Image",
                            props: {
                                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnveSpb0Tk67q5es3zLF8JqBZfqlAFjstcYRabJx5zWoWeh8kLYswcmYvlQ88LabaHSYGxwO4sniLBQRhdoiBHkDoi64HMSpVbGvE52TCNV5ds9uTpZXJD4nWnoXW84TDLsG4BESSCqfXDZLwEPASsH8CYdi4AQGj7hbYrx8PeCbcB1rB239nHd9r401wAao0cd36z5cb60K1pwqhetMMP7P2LyOTr5Icl7CWxtdNEkKE_uu5jDaM1nIt5Ts-bOIlSOMHNQ9zAH9Q",
                                alt: "NexaSupport team in the operations center",
                                borderRadius: "24",
                                shadow: "2xl"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // COMPANY MILESTONES — Application renderer
        // ==================================================================
        {
            key: "ts-timeline",
            name: "Company Timeline",
            description: "Company milestones using Application renderer",
            structure: {
                id: "ts-timeline-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#fafafa",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "ts-timeline-col",
                        width: "100%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-app-renderer",
                            type: "Application",
                            props: {
                                title: "Our Journey",
                                subtitle: "From a small team of 5 to a global force of 200+ engineers serving 500+ companies.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnveSpb0Tk67q5es3zLF8JqBZfqlAFjstcYRabJx5zWoWeh8kLYswcmYvlQ88LabaHSYGxwO4sniLBQRhdoiBHkDoi64HMSpVbGvE52TCNV5ds9uTpZXJD4nWnoXW84TDLsG4BESSCqfXDZLwEPASsH8CYdi4AQGj7hbYrx8PeCbcB1rB239nHd9r401wAao0cd36z5cb60K1pwqhetMMP7P2LyOTr5Icl7CWxtdNEkKE_uu5jDaM1nIt5Ts-bOIlSOMHNQ9zAH9Q",
                                imageAlt: "NexaSupport team in the operations center",
                                imageBorderRadius: 20,
                                steps: [
                                    {
                                        icon: "Rocket",
                                        title: "2018 — Founded",
                                        description: "NexaSupport launched with 5 engineers and a vision to revolutionize IT support."
                                    },
                                    {
                                        icon: "Users",
                                        title: "2020 — 100 Clients",
                                        description: "Reached 100 enterprise clients and opened our first 24/7 operations center."
                                    },
                                    {
                                        icon: "Globe",
                                        title: "2022 — Global Expansion",
                                        description: "Expanded to 8 countries with 150+ engineers and SOC 2 Type II certification."
                                    },
                                    {
                                        icon: "BrainCircuit",
                                        title: "2024 — AI-Powered Support",
                                        description: "Launched AI-driven diagnostics engine, reducing resolution times by 60%."
                                    },
                                    {
                                        icon: "Trophy",
                                        title: "2026 — 500+ Clients",
                                        description: "Serving 500+ companies across 12 countries with 200+ certified engineers."
                                    }
                                ],
                                showStoreButtons: false,
                                accentColor: "#60F21D",
                                accentGradient: "linear-gradient(135deg, #60F21D, #8100B8)",
                                iconBorderColor: "#8100B8",
                                titleColor: "#000000",
                                stepTitleColor: "#000000",
                                descriptionColor: "#555555",
                                connectorColor: "#8100B8",
                                backgroundColor: "#fafafa"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // TEAM PROFILES — leadership (unused renderer)
        // ==================================================================
        {
            key: "ts-team-profiles",
            name: "Leadership Team",
            description: "Team profiles with detailed info",
            structure: {
                id: "ts-team-section",
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
                        id: "ts-team-heading-col",
                        width: "100%",
                        props: { padding: 8, paddingBottom: 32, textAlign: "center" },
                        elements: [
                            {
                                id: "ts-team-label",
                                type: "Heading",
                                props: {
                                    text: "LEADERSHIP",
                                    tag: "h6",
                                    color: "#8100B8",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    letterSpacing: 3,
                                    align: "center",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "ts-team-title",
                                type: "Headline",
                                props: {
                                    text: "Meet the Team",
                                    tag: "h2",
                                    align: "center",
                                    color: "#000000",
                                    fontWeight: "900"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-team-col-1",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "ts-team-1",
                            type: "TeamProfile",
                            props: {
                                name: "Alex Morrison",
                                role: "CEO & Co-Founder",
                                bio: "Former VP of Infrastructure at AWS. 20+ years building enterprise-grade systems. Passionate about making technology accessible to every business.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr2W4ADRM51zGyT0xOYoUsSsErERYmnzIZ9jEi_eoO7S4Rlx7qTEVNxgVv4pS9QZdWwCPQ0eOK2nP3bxnaKihWUVrvB3uFU_RL8C5YZvDBc7UQgG6TgKMh6gYdwAYN6aKlCyok69KhidceEJnAJ0ImTWqn9xlBa2ig1OBcp7q9RyxnvjvjnlIZFcuoJGsvYqOn2Mj-pFBltDE8i6xyCcG93Bgzgaed7KwcixFzRVMmVmOEKRquFsfNdHuqNn-se8yTlqY-vWGm9Upu",
                                accentColor: "#60F21D",
                                socialLinks: [
                                    { platform: "linkedin", url: "#" },
                                    { platform: "twitter", url: "#" }
                                ]
                            }
                        }]
                    },
                    {
                        id: "ts-team-col-2",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "ts-team-2",
                            type: "TeamProfile",
                            props: {
                                name: "Priya Patel",
                                role: "CTO",
                                bio: "Cybersecurity expert with CISSP and CISM certifications. Previously led the security operations center at a Fortune 100 healthcare company.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALFkrYvJQQW19Jx5-qnE8XaIFtiwqwM6M3D5sWNE6lQrI1HshIAO6MFd7vrjaH-HFcgyIir8RcAGtv9bBOfKeFeUlhlqSInPobIq6RS8qO3WdXTa_i6JVFh4WnohFEQf5fMOkwQrd73thLB70SDzEkd4fBpdxB1Uqjl55txU3Zggp4D_NZnFhyRu9iByXqCbcNXa31443z7AhAF6o7TTjI3I6W9hWPRsoYx_ZAbhh6LH7RpnYuyxJLW7a1ywR4GSiIndTcAKO3QJs",
                                accentColor: "#8100B8",
                                socialLinks: [
                                    { platform: "linkedin", url: "#" }
                                ]
                            }
                        }]
                    },
                    {
                        id: "ts-team-col-3",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "ts-team-3",
                            type: "TeamProfile",
                            props: {
                                name: "Marcus Johnson",
                                role: "VP of Operations",
                                bio: "ITIL Master certified with deep expertise in service delivery and operational excellence. Manages our global 24/7 operations centers across 4 continents.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpT-6OgMXISh3zFc2PT6VowUKQyaxVA0Ffc9u88Cum7az03__qkHvQkYlcm7_Ouw5wH7jOdJSPa2rjbMZK8WRcCfJcD8Fj6fpRk5fcfUZnXX2tSQajv3Jlz_vccYovo_gLAzRgjGgbzE112Ar3-MmcI2T6ko4Xt-L-Wes1PZot4bnp94JhDMBvlAZ-33AS4Qopg0U0xospFBdwOUKce-VwEqkCyj9iPCOVIX-lT6hxY8izC_QbqqtpWXMZA2ecCXUgjDdDlzCnpVI",
                                accentColor: "#60F21D",
                                socialLinks: [
                                    { platform: "linkedin", url: "#" },
                                    { platform: "twitter", url: "#" }
                                ]
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // SLA METRICS — progress bars (unused renderer)
        // ==================================================================
        {
            key: "ts-sla-metrics",
            name: "SLA Metrics",
            description: "SLA performance metrics with progress bars",
            structure: {
                id: "ts-sla-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#000000",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "ts-sla-heading-col",
                        width: "100%",
                        props: { padding: 8, paddingBottom: 32, textAlign: "center" },
                        elements: [
                            {
                                id: "ts-sla-label",
                                type: "Heading",
                                props: {
                                    text: "PERFORMANCE",
                                    tag: "h6",
                                    color: "#60F21D",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    letterSpacing: 3,
                                    align: "center",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "ts-sla-title",
                                type: "Headline",
                                props: {
                                    text: "Our SLA Commitments",
                                    tag: "h2",
                                    align: "center",
                                    color: "#ffffff",
                                    fontWeight: "900"
                                }
                            },
                            {
                                id: "ts-sla-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Real metrics from our live operations — updated monthly.",
                                    align: "center",
                                    color: "#999999",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-sla-col-1",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "ts-sla-1",
                            type: "ProgressBar",
                            props: {
                                label: "Infrastructure Uptime",
                                value: 99.99,
                                maxValue: 100,
                                suffix: "%",
                                color: "#60F21D",
                                bgColor: "rgba(255,255,255,0.1)",
                                textColor: "#ffffff"
                            }
                        }]
                    },
                    {
                        id: "ts-sla-col-2",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "ts-sla-2",
                            type: "ProgressBar",
                            props: {
                                label: "First Contact Resolution",
                                value: 87,
                                maxValue: 100,
                                suffix: "%",
                                color: "#8100B8",
                                bgColor: "rgba(255,255,255,0.1)",
                                textColor: "#ffffff"
                            }
                        }]
                    },
                    {
                        id: "ts-sla-col-3",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "ts-sla-3",
                            type: "ProgressBar",
                            props: {
                                label: "Client Satisfaction (CSAT)",
                                value: 97,
                                maxValue: 100,
                                suffix: "%",
                                color: "#60F21D",
                                bgColor: "rgba(255,255,255,0.1)",
                                textColor: "#ffffff"
                            }
                        }]
                    }
                ]
            }
        },
        // ==================================================================
        // DOCUMENTATION — process docs (unused renderer)
        // ==================================================================
        {
            key: "ts-documentation",
            name: "Our Process",
            description: "Documentation cards describing our methodology",
            structure: {
                id: "ts-docs-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#fafafa",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "ts-docs-heading-col",
                        width: "100%",
                        props: { padding: 8, paddingBottom: 32, textAlign: "center" },
                        elements: [
                            {
                                id: "ts-docs-label",
                                type: "Heading",
                                props: {
                                    text: "METHODOLOGY",
                                    tag: "h6",
                                    color: "#60F21D",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    letterSpacing: 3,
                                    align: "center",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "ts-docs-title",
                                type: "Headline",
                                props: {
                                    text: "How We Work",
                                    tag: "h2",
                                    align: "center",
                                    color: "#000000",
                                    fontWeight: "900"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-docs-col-1",
                        width: "calc(100% / 3)",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-doc-1",
                            type: "Documentation",
                            props: {
                                title: "Onboarding & Discovery",
                                content: "We start with a comprehensive infrastructure assessment, documenting your entire technology stack, pain points, and business objectives to build a tailored support strategy.",
                                icon: "🔍",
                                accentColor: "#60F21D",
                                bgColor: "#ffffff",
                                textColor: "#000000"
                            }
                        }]
                    },
                    {
                        id: "ts-docs-col-2",
                        width: "calc(100% / 3)",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-doc-2",
                            type: "Documentation",
                            props: {
                                title: "Implementation & Migration",
                                content: "Our engineers deploy monitoring agents, security tools, and management platforms with zero downtime. We handle data migration and system integration seamlessly.",
                                icon: "🚀",
                                accentColor: "#8100B8",
                                bgColor: "#ffffff",
                                textColor: "#000000"
                            }
                        }]
                    },
                    {
                        id: "ts-docs-col-3",
                        width: "calc(100% / 3)",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-doc-3",
                            type: "Documentation",
                            props: {
                                title: "Continuous Optimization",
                                content: "Monthly business reviews, quarterly security audits, and annual infrastructure assessments ensure your environment is always performing at peak efficiency.",
                                icon: "📊",
                                accentColor: "#60F21D",
                                bgColor: "#ffffff",
                                textColor: "#000000"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // TECHNOLOGY ROADMAP (unused renderer)
        // ==================================================================
        {
            key: "ts-roadmap",
            name: "Technology Roadmap",
            description: "Future technology roadmap",
            structure: {
                id: "ts-roadmap-section",
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
                        id: "ts-roadmap-heading-col",
                        width: "100%",
                        props: { padding: 8, paddingBottom: 32, textAlign: "center" },
                        elements: [
                            {
                                id: "ts-roadmap-label",
                                type: "Heading",
                                props: {
                                    text: "WHAT'S NEXT",
                                    tag: "h6",
                                    color: "#8100B8",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    letterSpacing: 3,
                                    align: "center",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "ts-roadmap-title",
                                type: "Headline",
                                props: {
                                    text: "Our Technology Roadmap",
                                    tag: "h2",
                                    align: "center",
                                    color: "#000000",
                                    fontWeight: "900"
                                }
                            },
                            {
                                id: "ts-roadmap-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "See what innovations we're building to keep you ahead of the curve.",
                                    align: "center",
                                    color: "#555555",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-roadmap-col-1",
                        width: "50%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-roadmap-1",
                            type: "Roadmap",
                            props: {
                                quarter: "Q1 2026",
                                status: "In Progress",
                                items: [
                                    "AI Auto-Remediation Engine",
                                    "ML models for auto-diagnosis",
                                    "Self-healing infrastructure"
                                ],
                                accentColor: "#60F21D",
                                textColor: "#000000"
                            }
                        }]
                    },
                    {
                        id: "ts-roadmap-col-2",
                        width: "50%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-roadmap-2",
                            type: "Roadmap",
                            props: {
                                quarter: "Q2 2026",
                                status: "Planned",
                                items: [
                                    "Predictive Analytics Dashboard",
                                    "Hardware failure prediction",
                                    "Capacity planning automation"
                                ],
                                accentColor: "#8100B8",
                                textColor: "#000000"
                            }
                        }]
                    },
                    {
                        id: "ts-roadmap-col-3",
                        width: "50%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-roadmap-3",
                            type: "Roadmap",
                            props: {
                                quarter: "Q3 2026",
                                status: "Planned",
                                items: [
                                    "Zero Trust Network Platform",
                                    "Micro-segmentation rollout",
                                    "Continuous authentication"
                                ],
                                accentColor: "#60F21D",
                                textColor: "#000000"
                            }
                        }]
                    },
                    {
                        id: "ts-roadmap-col-4",
                        width: "50%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-roadmap-4",
                            type: "Roadmap",
                            props: {
                                quarter: "Q4 2026",
                                status: "Planned",
                                items: [
                                    "Unified XDR Platform",
                                    "Combined endpoint + cloud security",
                                    "Single-pane-of-glass monitoring"
                                ],
                                accentColor: "#8100B8",
                                textColor: "#000000"
                            }
                        }]
                    }
                ]
            }
        }
    ]
};

module.exports = techSupportAbout;
