/**
 * Service Sections - Comprehensive service offering templates
 * Fully responsive (mobile 1-col | tablet 2-cols | desktop 3-cols)
 * Theme-aware with comprehensive customization
 */

export const serviceSectionTemplates = [
    // ============================================================================
    // SERVICES OVERVIEW - Introduction to services
    // ============================================================================
    {
        key: "services-overview",
        type: "Section",
        category: "services",
        name: "Services Overview",
        description: "Overview of service offerings",
        structure: {
            id: "services-overview-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "services-overview-header",
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
                            id: "services-overview-badge",
                            type: "Badge",
                            props: {
                                text: "OUR SERVICES",
                                color: "var(--theme-secondary, var(--theme-primary))",
                                bgColor: "var(--theme-secondary-light, var(--theme-background))",
                                showPing: false
                            }
                        },
                        {
                            id: "services-overview-heading",
                            type: "Heading",
                            props: {
                                text: "Professional Services for Your Success",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "services-overview-desc",
                            type: "Paragraph",
                            props: {
                                text: "Comprehensive solutions tailored to your business needs",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "services-overview-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 32,
                        gap: 16,
                        maxWidth: "900px",
                    },
                    elements: [
                        {
                            id: "overview-desc",
                            type: "Paragraph",
                            props: {
                                text: "We provide end-to-end professional services including implementation, training, customization, and ongoing support to ensure your success.",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // SERVICE CARDS - 3-column responsive grid
    // ============================================================================
    {
        key: "service-cards",
        type: "Section",
        category: "services",
        name: "Service Cards",
        description: "Responsive 3-column service showcase",
        structure: {
            id: "service-cards-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "service-cards-header",
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
                            id: "service-cards-heading",
                            type: "Heading",
                            props: {
                                text: "Our Service Offerings",
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
                    id: "service-col-1",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 16,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "service-card-1",
                            type: "ServiceCard",
                            props: {
                                icon: "🔧",
                                title: "Implementation",
                                description: "End-to-end implementation services with expert guidance",
                                features: ["Setup and configuration", "Data migration", "Team training"],
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                accentColor: "var(--theme-primary, var(--theme-primary))",
                                borderRadius: "12",
                                shadow: "md"
                            }
                        }
                    ]
                },
                {
                    id: "service-col-2",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 16,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "service-card-2",
                            type: "ServiceCard",
                            props: {
                                icon: "📊",
                                title: "Consulting",
                                description: "Strategic consulting to optimize your operations",
                                features: ["Process analysis", "Best practices", "Custom solutions"],
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                accentColor: "var(--theme-secondary, var(--theme-primary))",
                                borderRadius: "12",
                                shadow: "md"
                            }
                        }
                    ]
                },
                {
                    id: "service-col-3",
                    width: "calc(100% / 3)",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: 24,
                        gap: 16,
                        "@media (max-width: 1024px)": { width: "calc(100% / 2)" },
                        "@media (max-width: 768px)": { width: "100%", padding: 12, gap: 8 }
                    },
                    elements: [
                        {
                            id: "service-card-3",
                            type: "ServiceCard",
                            props: {
                                icon: "🎓",
                                title: "Training",
                                description: "Comprehensive training programs for your team",
                                features: ["Online courses", "Workshops", "Certification"],
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
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
    // SERVICE DETAILS - Detailed service information
    // ============================================================================
    {
        key: "service-details",
        type: "Section",
        category: "services",
        name: "Service Details",
        description: "Detailed information about each service",
        structure: {
            id: "service-details-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "service-details-header",
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
                            id: "service-details-heading",
                            type: "Heading",
                            props: {
                                text: "Detailed Service Descriptions",
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
                    id: "service-details-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "stretch",
                        justifyContent: "flex-start",
                        padding: 32,
                        gap: 24,
                        maxWidth: "1000px",
                    },
                    elements: [
                        {
                            id: "detail-1",
                            type: "HighlightedBox",
                            props: {
                                title: "Premium Support",
                                content: "24/7 technical support with dedicated account managers, priority response times, and proactive monitoring to ensure smooth operations.",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderLeftColor: "var(--theme-primary, var(--theme-primary))",
                                titleColor: "var(--theme-text, var(--theme-text))",
                                textColor: "var(--theme-text-secondary, #6b7280)",
                                borderRadius: "12"
                            }
                        },
                        {
                            id: "detail-2",
                            type: "HighlightedBox",
                            props: {
                                title: "Custom Development",
                                content: "Tailored development services to extend functionality, integrate with your existing systems, and build custom solutions for unique requirements.",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderLeftColor: "var(--theme-secondary, var(--theme-primary))",
                                titleColor: "var(--theme-text, var(--theme-text))",
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
    // PRICING PER SERVICE - Service pricing options
    // ============================================================================
    {
        key: "pricing-per-service",
        type: "Section",
        category: "services",
        name: "Pricing per Service",
        description: "Service pricing and packages",
        structure: {
            id: "pricing-per-service-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "pricing-service-header",
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
                            id: "pricing-service-heading",
                            type: "Heading",
                            props: {
                                text: "Service Pricing",
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
                    id: "pricing-col-1",
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
                            id: "pricing-card-1",
                            type: "PricingCard",
                            props: {
                                title: "Starter",
                                price: "$1,999",
                                description: "Perfect for small teams",
                                features: ["Basic setup", "Email support", "2 hours training", "30-day onboarding"],
                                buttonText: "Get Started",
                                buttonColor: "white",
                                buttonBgColor: "var(--theme-primary, var(--theme-primary))",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                highlightBorder: false,
                                highlightColor: "var(--theme-primary, var(--theme-primary))",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "pricing-col-2",
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
                            id: "pricing-card-2",
                            type: "PricingCard",
                            props: {
                                title: "Professional",
                                price: "$4,999",
                                description: "For growing organizations",
                                features: ["Full implementation", "Priority support", "8 hours training", "Custom configuration"],
                                buttonText: "Choose Plan",
                                buttonColor: "white",
                                buttonBgColor: "var(--theme-secondary, var(--theme-primary))",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                highlightBorder: true,
                                highlightColor: "var(--theme-secondary, var(--theme-primary))",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "pricing-col-3",
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
                            id: "pricing-card-3",
                            type: "PricingCard",
                            props: {
                                title: "Enterprise",
                                price: "Custom",
                                description: "Dedicated support",
                                features: ["Full customization", "24/7 support", "Unlimited training", "Dedicated manager"],
                                buttonText: "Contact Sales",
                                buttonColor: "white",
                                buttonBgColor: "var(--theme-accent, var(--theme-primary))",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                highlightBorder: false,
                                highlightColor: "var(--theme-accent, var(--theme-primary))",
                                borderRadius: "12"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // CONSULTING SECTION - Consulting services
    // ============================================================================
    {
        key: "consulting-section",
        type: "Section",
        category: "services",
        name: "Consulting Section",
        description: "Professional consulting services",
        structure: {
            id: "consulting-section-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "consulting-header",
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
                            id: "consulting-badge",
                            type: "Badge",
                            props: {
                                text: "CONSULTING",
                                color: "var(--theme-primary, var(--theme-primary))",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "consulting-heading",
                            type: "Heading",
                            props: {
                                text: "Strategic Business Consulting",
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
                    id: "consulting-col-1",
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
                            id: "consulting-item-1",
                            type: "BenefitItem",
                            props: {
                                icon: "🎯",
                                title: "Strategy",
                                description: "Develop data-driven strategies for digital transformation",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderRadius: "12",
                                shadow: "sm",
                                iconBgColor: "var(--theme-primary-light, #eef2ff)",
                                iconSize: "40"
                            }
                        }
                    ]
                },
                {
                    id: "consulting-col-2",
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
                            id: "consulting-item-2",
                            type: "BenefitItem",
                            props: {
                                icon: "📈",
                                title: "Optimization",
                                description: "Improve processes and maximize operational efficiency",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderRadius: "12",
                                shadow: "sm",
                                iconBgColor: "var(--theme-secondary-light, var(--theme-background))",
                                iconSize: "40"
                            }
                        }
                    ]
                },
                {
                    id: "consulting-col-3",
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
                            id: "consulting-item-3",
                            type: "BenefitItem",
                            props: {
                                icon: "🚀",
                                title: "Growth",
                                description: "Accelerate growth with proven frameworks and tactics",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                borderRadius: "12",
                                shadow: "sm",
                                iconBgColor: "var(--theme-accent-light, #fffbeb)",
                                iconSize: "40"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // SUPPORT SERVICES - Technical support services
    // ============================================================================
    {
        key: "support-services",
        type: "Section",
        category: "services",
        name: "Support Services",
        description: "Comprehensive technical support offerings",
        structure: {
            id: "support-services-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "support-services-header",
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
                            id: "support-services-heading",
                            type: "Heading",
                            props: {
                                text: "Support Services",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "support-services-desc",
                            type: "Paragraph",
                            props: {
                                text: "Always available technical support from our expert team",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "support-col-1",
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
                            id: "support-card-1",
                            type: "CapabilityItem",
                            props: {
                                title: "Incident Management",
                                features: "24/7 monitoring • Rapid response • Issue tracking • Resolution reporting",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
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
                    id: "support-col-2",
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
                            id: "support-card-2",
                            type: "CapabilityItem",
                            props: {
                                title: "Technical Support",
                                features: "Expert guidance • Troubleshooting • Configuration help • Best practices",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
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
                    id: "support-col-3",
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
                            id: "support-card-3",
                            type: "CapabilityItem",
                            props: {
                                title: "Preventive Support",
                                features: "Performance monitoring • Health checks • Preventive maintenance • Upgrades",
                                backgroundColor: "var(--theme-background, var(--theme-background))",
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
    // MAINTENANCE PLANS - Service and maintenance packages
    // ============================================================================
    {
        key: "maintenance-plans",
        type: "Section",
        category: "services",
        name: "Maintenance Plans",
        description: "Maintenance and service package options",
        structure: {
            id: "maintenance-plans-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "maintenance-header",
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
                            id: "maintenance-badge",
                            type: "Badge",
                            props: {
                                text: "MAINTENANCE",
                                color: "var(--theme-secondary, var(--theme-primary))",
                                bgColor: "var(--theme-secondary-light, var(--theme-background))",
                                showPing: false
                            }
                        },
                        {
                            id: "maintenance-heading",
                            type: "Heading",
                            props: {
                                text: "Maintenance & Support Plans",
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
                    id: "maintenance-col-1",
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
                            id: "maintenance-plan-1",
                            type: "PricingCard",
                            props: {
                                title: "Standard",
                                price: "$299/mo",
                                description: "Essential maintenance",
                                features: ["Monthly updates", "Security patches", "Performance tuning", "Email support"],
                                buttonText: "Select Plan",
                                buttonColor: "white",
                                buttonBgColor: "var(--theme-primary, var(--theme-primary))",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                highlightBorder: false,
                                highlightColor: "var(--theme-primary, var(--theme-primary))",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "maintenance-col-2",
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
                            id: "maintenance-plan-2",
                            type: "PricingCard",
                            props: {
                                title: "Premium",
                                price: "$599/mo",
                                description: "Advanced maintenance",
                                features: ["Weekly updates", "24/7 monitoring", "Priority response", "Phone support"],
                                buttonText: "Select Plan",
                                buttonColor: "white",
                                buttonBgColor: "var(--theme-secondary, var(--theme-primary))",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                highlightBorder: true,
                                highlightColor: "var(--theme-secondary, var(--theme-primary))",
                                borderRadius: "12"
                            }
                        }
                    ]
                },
                {
                    id: "maintenance-col-3",
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
                            id: "maintenance-plan-3",
                            type: "PricingCard",
                            props: {
                                title: "Enterprise",
                                price: "$999/mo",
                                description: "Complete protection",
                                features: ["Continuous updates", "Dedicated engineer", "Custom reports", "SLA guarantee"],
                                buttonText: "Select Plan",
                                buttonColor: "white",
                                buttonBgColor: "var(--theme-accent, var(--theme-primary))",
                                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                                textColor: "var(--theme-text, var(--theme-text))",
                                highlightBorder: false,
                                highlightColor: "var(--theme-accent, var(--theme-primary))",
                                borderRadius: "12"
                            }
                        }
                    ]
                }
            ]
        }
    }
];
