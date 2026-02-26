/**
 * Feature & Benefit Content Sections
 * Comprehensive feature showcases, comparisons, use cases, benefits, and solutions
 * Fully responsive with mobile-first approach and theme support
 * Grid Layout: Mobile 1-col | Tablet 2-cols | Desktop 3-cols
 */

export const featureSectionTemplates = [
    // ============================================================================
    // FEATURES GRID - Multi-column responsive grid with feature cards
    // Mobile: 1 column | Tablet: 2 columns | Desktop: 3 columns
    // ============================================================================
    {
        key: "features-grid",
        type: "Section",
        category: "features",
        name: "Features Grid",
        description: "Responsive 3-column feature grid with rich feature cards",
        structure: {
            id: "features-grid-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "features-grid-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "features-badge",
                            type: "Badge",
                            props: {
                                text: "OUR FEATURES",
                                color: "var(--theme-primary, var(--theme-primary))",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "features-heading",
                            type: "Heading",
                            props: {
                                text: "Powerful Features for Modern Teams",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "features-desc",
                            type: "Paragraph",
                            props: {
                                text: "Everything you need to collaborate, create, and scale your business effortlessly",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "feature-1",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 20,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "feature-1",
                            type: "FeatureCard",
                            props: {
                                icon: "⚡",
                                title: "Lightning Speed",
                                description: "Optimized for performance with sub-100ms load times, real-time sync, and zero lag interactions across all devices",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderColor: "var(--theme-border, var(--theme-border))",
                                accentColor: "var(--theme-primary, var(--theme-primary))",
                                borderRadius: "12",
                                shadow: "md"
                            }
                        }
                    ]
                },
                {
                    id: "feature-2",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 20,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "feature-2",
                            type: "FeatureCard",
                            props: {
                                icon: "🔒",
                                title: "Enterprise Security",
                                description: "Bank-level encryption, SOC 2 certified, GDPR compliant with 99.99% uptime SLA and automatic disaster recovery",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderColor: "var(--theme-border, var(--theme-border))",
                                accentColor: "var(--theme-secondary, var(--theme-primary))",
                                borderRadius: "12",
                                shadow: "md"
                            }
                        }
                    ]
                },
                {
                    id: "feature-3",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 20,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "feature-3",
                            type: "FeatureCard",
                            props: {
                                icon: "🎨",
                                title: "Total Customization",
                                description: "White-label design system with 500+ components, custom themes, branded widgets, and pixel-perfect control over every element",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderColor: "var(--theme-border, var(--theme-border))",
                                accentColor: "var(--theme-accent, var(--theme-primary))",
                                borderRadius: "12",
                                shadow: "md"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // FEATURE LIST - Vertical checklist with descriptions
    // ============================================================================
    {
        key: "features-list",
        type: "Section",
        category: "features",
        name: "Feature List",
        description: "Vertical feature list with checkmarks and descriptions",
        structure: {
            id: "features-list-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "features-list-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "features-list-heading",
                            type: "Heading",
                            props: {
                                text: "Everything You Need",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        }
                    ]
                },
                {
                    id: "features-list-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: 32,
                        gap: 20,
                        maxWidth: "800px",
                    },
                    elements: [
                        {
                            id: "feature-item-1",
                            type: "TextBlock",
                            props: {
                                heading: "✓ Intuitive Interface",
                                content: "Easy to use dashboard designed for all skill levels",
                                headingColor: "var(--theme-primary, var(--theme-primary))",
                                contentColor: "var(--theme-text-secondary, #6b7280)",
                            }
                        },
                        {
                            id: "feature-item-2",
                            type: "TextBlock",
                            props: {
                                heading: "✓ Real-time Analytics",
                                content: "Track performance with live dashboards and detailed reports",
                                headingColor: "var(--theme-primary, var(--theme-primary))",
                                contentColor: "var(--theme-text-secondary, #6b7280)",
                            }
                        },
                        {
                            id: "feature-item-3",
                            type: "TextBlock",
                            props: {
                                heading: "✓ API Integration",
                                content: "Connect with 500+ popular apps and services",
                                headingColor: "var(--theme-primary, var(--theme-primary))",
                                contentColor: "var(--theme-text-secondary, #6b7280)",
                            }
                        },
                        {
                            id: "feature-item-4",
                            type: "TextBlock",
                            props: {
                                heading: "✓ 24/7 Support",
                                content: "Dedicated support team ready to help anytime",
                                headingColor: "var(--theme-primary, var(--theme-primary))",
                                contentColor: "var(--theme-text-secondary, #6b7280)",
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // USE CASES - Industry-specific solutions
    // Mobile: 1 col | Tablet: 2 columns | Desktop: 3 columns
    // ============================================================================
    {
        key: "use-cases",
        type: "Section",
        category: "features",
        name: "Use Cases",
        description: "Industry-specific solutions with 3-column responsive grid",
        structure: {
            id: "use-cases-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "use-cases-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "use-cases-badge",
                            type: "Badge",
                            props: {
                                text: "PROVEN USE CASES",
                                color: "var(--theme-secondary, var(--theme-primary))",
                                bgColor: "var(--theme-secondary-light, var(--theme-background))",
                                showPing: false
                            }
                        },
                        {
                            id: "use-cases-heading",
                            type: "Heading",
                            props: {
                                text: "Solutions Built for Every Industry",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "use-cases-desc",
                            type: "Paragraph",
                            props: {
                                text: "See how leading companies across industries accelerate growth and reduce operational complexity",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "use-case-1",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 16,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "use-case-1",
                            type: "UseCaseCard",
                            props: {
                                title: "E-Commerce & Retail",
                                description: "Multi-channel inventory sync, real-time order tracking, customer analytics dashboards, and automated fulfillment workflows across all sales channels",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderLeftColor: "var(--theme-primary, var(--theme-primary))",
                                borderLeftWidth: "4",
                                titleColor: "var(--theme-primary, var(--theme-primary))",
                                textColor: "var(--theme-text-secondary, #6b7280)",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "use-case-2",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 16,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "use-case-2",
                            type: "UseCaseCard",
                            props: {
                                title: "SaaS Platforms",
                                description: "Subscription billing automation, usage-based metering, customer lifecycle management, churn prediction, and revenue analytics dashboards",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderLeftColor: "var(--theme-secondary, var(--theme-primary))",
                                borderLeftWidth: "4",
                                titleColor: "var(--theme-secondary, var(--theme-primary))",
                                textColor: "var(--theme-text-secondary, #6b7280)",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "use-case-3",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 16,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "use-case-3",
                            type: "UseCaseCard",
                            props: {
                                title: "Enterprise Growth",
                                description: "Distributed team collaboration, global compliance management, multi-region deployment, white-label solutions, and dedicated infrastructure",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderLeftColor: "var(--theme-accent, var(--theme-primary))",
                                borderLeftWidth: "4",
                                titleColor: "var(--theme-accent, var(--theme-primary))",
                                textColor: "var(--theme-text-secondary, #6b7280)",
                                borderRadius: "12"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // BENEFITS SECTION - Key benefits grid
    // Mobile: 1 col | Tablet: 2 columns | Desktop: 3 columns
    // ============================================================================
    {
        key: "benefits-section",
        type: "Section",
        category: "features",
        name: "Benefits Section",
        description: "Key benefits showcase with icons and descriptions",
        structure: {
            id: "benefits-section-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "benefits-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "benefits-badge",
                            type: "Badge",
                            props: {
                                text: "KEY BENEFITS",
                                color: "var(--theme-accent, var(--theme-primary))",
                                bgColor: "var(--theme-accent-light, #fffbeb)",
                                showPing: true
                            }
                        },
                        {
                            id: "benefits-heading",
                            type: "Heading",
                            props: {
                                text: "Measurable Impact on Your Business",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "benefits-desc",
                            type: "Paragraph",
                            props: {
                                text: "Transform your operations with proven results and real ROI",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "benefit-1",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "benefit-1",
                            type: "BenefitItem",
                            props: {
                                icon: "💰",
                                title: "70% Cost Reduction",
                                description: "Save significant operational expenses with automation, reduced staffing needs, and optimized resource allocation",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                borderRadius: "12",
                                shadow: "sm",
                                iconBgColor: "var(--theme-accent-light, #fffbeb)",
                                iconSize: "40"
                            }
                        }
                    ]
                },
                {
                    id: "benefit-2",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "benefit-2",
                            type: "BenefitItem",
                            props: {
                                icon: "⚡",
                                title: "3x Faster Deployment",
                                description: "Go live in days instead of months with pre-built workflows, templates, and intelligent automation that adapts to your needs",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                borderRadius: "12",
                                shadow: "sm",
                                iconBgColor: "var(--theme-primary-light, #eef2ff)",
                                iconSize: "40"
                            }
                        }
                    ]
                },
                {
                    id: "benefit-3",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "benefit-3",
                            type: "BenefitItem",
                            props: {
                                icon: "🌍",
                                title: "Global 24/7 Support",
                                description: "Access our expert team round-the-clock across all time zones with 15-minute response times and dedicated account managers",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                borderRadius: "12",
                                shadow: "sm",
                                iconBgColor: "var(--theme-secondary-light, var(--theme-background))",
                                iconSize: "40"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // CAPABILITIES SECTION - What we can do
    // ============================================================================
    {
        key: "capabilities-section",
        type: "Section",
        category: "features",
        name: "Capabilities Section",
        description: "Comprehensive capabilities and technical features",
        structure: {
            id: "capabilities-section-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "capabilities-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "capabilities-badge",
                            type: "Badge",
                            props: {
                                text: "ENTERPRISE CAPABILITIES",
                                color: "var(--theme-primary, var(--theme-primary))",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "capabilities-heading",
                            type: "Heading",
                            props: {
                                text: "Powerful Tools at Your Fingertips",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "capabilities-desc",
                            type: "Paragraph",
                            props: {
                                text: "Everything required to build, scale, and manage your operations",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "capability-col-1",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: 28,
                        gap: 16,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "capability-1",
                            type: "CapabilityItem",
                            props: {
                                title: "Advanced Analytics",
                                features: "Real-time dashboards • Custom reports • Predictive AI models • Geospatial analysis • Export to any format",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderLeftColor: "var(--theme-primary, var(--theme-primary))",
                                borderLeftWidth: "3",
                                titleColor: "var(--theme-primary, var(--theme-primary))",
                                textColor: "var(--theme-text-secondary, #6b7280)",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "capability-col-2",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: 28,
                        gap: 16,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "capability-2",
                            type: "CapabilityItem",
                            props: {
                                title: "Security & Compliance",
                                features: "End-to-end AES-256 encryption • GDPR/CCPA compliant • SOC 2 Type II • HIPAA ready • Role-based access control",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderLeftColor: "var(--theme-secondary, var(--theme-primary))",
                                borderLeftWidth: "3",
                                titleColor: "var(--theme-secondary, var(--theme-primary))",
                                textColor: "var(--theme-text-secondary, #6b7280)",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "capability-col-3",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: 28,
                        gap: 16,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "capability-3",
                            type: "CapabilityItem",
                            props: {
                                title: "Integration & API",
                                features: "500+ pre-built integrations • GraphQL & REST APIs • Webhooks & real-time sync • SDKs for all platforms • Developer console",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderLeftColor: "var(--theme-accent, var(--theme-primary))",
                                borderLeftWidth: "3",
                                titleColor: "var(--theme-accent, var(--theme-primary))",
                                textColor: "var(--theme-text-secondary, #6b7280)",
                                borderRadius: "12"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // SOLUTIONS SECTION - Problem-solution approach
    // ============================================================================
    {
        key: "solutions-section",
        type: "Section",
        category: "features",
        name: "Solutions Section",
        description: "Solutions to common business problems",
        structure: {
            id: "solutions-section-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "solutions-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "solutions-heading",
                            type: "Heading",
                            props: {
                                text: "Solutions for Every Challenge",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        }
                    ]
                },
                {
                    id: "solution-1",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 28,
                        gap: 16,
                        "@media (max-width: 768px)": { display: "none" }
                    },
                    elements: [
                        {
                            id: "solution-1",
                            type: "SolutionBox",
                            props: {
                                problem: "Manual Workflows",
                                solution: "Full Automation",
                                description: "Eliminate repetitive tasks and focus on strategic work",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                problemColor: "var(--theme-text, var(--theme-text))",
                                solutionColor: "var(--theme-primary, var(--theme-primary))",
                                arrowColor: "var(--theme-primary, var(--theme-primary))",
                                shadow: "md",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "solution-2",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 28,
                        gap: 16,
                        "@media (max-width: 768px)": { display: "none" }
                    },
                    elements: [
                        {
                            id: "solution-2",
                            type: "SolutionBox",
                            props: {
                                problem: "Data Silos",
                                solution: "Unified Platform",
                                description: "Single source of truth for all your business data",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                problemColor: "var(--theme-text, var(--theme-text))",
                                solutionColor: "var(--theme-secondary, var(--theme-primary))",
                                arrowColor: "var(--theme-secondary, var(--theme-primary))",
                                shadow: "md",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "solution-3",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 28,
                        gap: 16,
                        "@media (max-width: 768px)": { display: "none" }
                    },
                    elements: [
                        {
                            id: "solution-3",
                            type: "SolutionBox",
                            props: {
                                problem: "Limited Scalability",
                                solution: "Cloud Infrastructure",
                                description: "Grow without limits with elastic, cloud-native architecture",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                problemColor: "var(--theme-text, var(--theme-text))",
                                solutionColor: "var(--theme-accent, var(--theme-primary))",
                                arrowColor: "var(--theme-accent, var(--theme-primary))",
                                shadow: "md",
                                borderRadius: "12"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // INDUSTRY SOLUTIONS - Industry-specific offerings
    // Mobile: 1 col | Tablet: 2 columns | Desktop: 3 columns
    // ============================================================================
    {
        key: "industry-solutions",
        type: "Section",
        category: "features",
        name: "Industry Solutions",
        description: "Tailored solutions for 6 key industries with 3-column grid",
        structure: {
            id: "industry-solutions-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "industry-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "industry-badge",
                            type: "Badge",
                            props: {
                                text: "INDUSTRY SOLUTIONS",
                                color: "var(--theme-secondary, var(--theme-primary))",
                                bgColor: "var(--theme-secondary-light, var(--theme-background))",
                                showPing: false
                            }
                        },
                        {
                            id: "industry-heading",
                            type: "Heading",
                            props: {
                                text: "Purpose-Built for Your Industry",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "industry-desc",
                            type: "Paragraph",
                            props: {
                                text: "Accelerate digital transformation with industry-specific workflows and best practices",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "industry-1",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "industry-1",
                            type: "IndustrySolution",
                            props: {
                                icon: "🛒",
                                industry: "Retail & E-Commerce",
                                description: "Omnichannel management, inventory sync, POS integration, customer loyalty programs, and unified analytics",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                descColor: "var(--theme-text-secondary, #6b7280)",
                                iconSize: "40",
                                borderRadius: "12",
                                shadow: "none"
                            }
                        }
                    ]
                },
                {
                    id: "industry-2",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "industry-2",
                            type: "IndustrySolution",
                            props: {
                                icon: "🏥",
                                industry: "Healthcare",
                                description: "HIPAA-compliant patient records, EHR integration, telehealth scheduling, clinical workflows, and secure data analytics",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                descColor: "var(--theme-text-secondary, #6b7280)",
                                iconSize: "40",
                                borderRadius: "12",
                                shadow: "none"
                            }
                        }
                    ]
                },
                {
                    id: "industry-3",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "industry-3",
                            type: "IndustrySolution",
                            props: {
                                icon: "🏦",
                                industry: "Finance",
                                description: "PCI-DSS payments, real-time reconciliation, compliance reporting, fraud detection, and transaction analytics",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                descColor: "var(--theme-text-secondary, #6b7280)",
                                iconSize: "40",
                                borderRadius: "12",
                                shadow: "none"
                            }
                        }
                    ]
                },
                {
                    id: "industry-4",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "industry-4",
                            type: "IndustrySolution",
                            props: {
                                icon: "🎓",
                                industry: "Education",
                                description: "Learning management system, student engagement tracking, grade management, parent portals, and institutional reporting",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                descColor: "var(--theme-text-secondary, #6b7280)",
                                iconSize: "40",
                                borderRadius: "12",
                                shadow: "none"
                            }
                        }
                    ]
                },
                {
                    id: "industry-5",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "industry-5",
                            type: "IndustrySolution",
                            props: {
                                icon: "🏭",
                                industry: "Manufacturing",
                                description: "Production planning, supply chain visibility, equipment tracking, maintenance scheduling, and quality assurance workflows",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                descColor: "var(--theme-text-secondary, #6b7280)",
                                iconSize: "40",
                                borderRadius: "12",
                                shadow: "none"
                            }
                        }
                    ]
                },
                {
                    id: "industry-6",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 12,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "industry-6",
                            type: "IndustrySolution",
                            props: {
                                icon: "🏨",
                                industry: "Hospitality",
                                description: "Guest management, booking system integration, POS integration, housekeeping workflows, and customer loyalty programs",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                descColor: "var(--theme-text-secondary, #6b7280)",
                                iconSize: "40",
                                borderRadius: "12",
                                shadow: "none"
                            }
                        }
                    ]
                }
            ]
        }
    }
];
