/**
 * NexaSupport - Tech Support & Managed Services Template
 * Services Page
 * Uses unused renderers: Tabs, Accordion, ComparisonMatrix, ComparisonTable
 */

const techSupportServices = {
    sections: [
        // ==================================================================
        // PAGE HERO — Services overview
        // ==================================================================
        {
            key: "ts-services-hero",
            name: "Services Hero",
            description: "Services page hero with headline",
            structure: {
                id: "ts-services-hero-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "ts-services-hero-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20
                    },
                    elements: [
                        {
                            id: "ts-services-hero-badge",
                            type: "Badge",
                            props: {
                                text: "Comprehensive IT Solutions",
                                color: "#8100B8",
                                bgColor: "rgba(129, 0, 184, 0.1)",
                                showPing: false,
                                marginBottom: 8
                            }
                        },
                        {
                            id: "ts-services-hero-title",
                            type: "Headline",
                            props: {
                                text: "Our [Services](linear-gradient(90deg, #60F21D, #8100B8)",
                                tag: "h1",
                                align: "center",
                                color: "#000000",
                                fontWeight: "900",
                                fontSize: {
                                    mobile: "36px",
                                    tablet: "52px",
                                    desktop: "60px"
                                },
                                marginBottom: 16
                            }
                        },
                        {
                            id: "ts-services-hero-desc",
                            type: "Paragraph",
                            props: {
                                text: "Tailored IT support packages designed for businesses of every size. From break-fix to fully managed infrastructure, we have you covered.",
                                align: "center",
                                color: "#555555",
                                size: "lg",
                                maxWidth: "680px"
                            }
                        }
                    ]
                }]
            }
        },

        // ==================================================================
        // SERVICE TABS — tabbed service categories (60/40 split with image)
        // ==================================================================
        {
            key: "ts-service-tabs",
            name: "Service Categories",
            description: "Tabbed service categories with image on the right",
            structure: {
                id: "ts-tabs-section",
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
                        id: "ts-tabs-left-col",
                        width: "60%",
                        props: { padding: 8 },
                        elements: [
                            {
                                id: "ts-tabs-label",
                                type: "Heading",
                                props: {
                                    text: "SERVICE AREAS",
                                    tag: "h6",
                                    color: "#60F21D",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    letterSpacing: 3,
                                    align: "left",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "ts-tabs-title",
                                type: "Headline",
                                props: {
                                    text: "Explore Our Capabilities",
                                    tag: "h2",
                                    align: "left",
                                    color: "#000000",
                                    fontWeight: "900",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "ts-tabs-renderer",
                                type: "Tabs",
                                props: {
                                    tabs: [
                                        {
                                            label: "🖥️ Help Desk",
                                            content: "Multi-tier help desk support with L1, L2, and L3 escalation paths. We handle everything from password resets to complex server configurations. Our average resolution time is under 30 minutes for standard issues."
                                        },
                                        {
                                            label: "🔧 Managed IT",
                                            content: "Proactive monitoring, maintenance, and management of your entire IT infrastructure. Includes server management, network monitoring, patch management, and strategic IT planning with quarterly business reviews."
                                        },
                                        {
                                            label: "☁️ Cloud Services",
                                            content: "Cloud migration, management, and optimization across AWS, Azure, and Google Cloud. We handle architecture design, cost optimization, security hardening, and 24/7 monitoring of your cloud workloads."
                                        },
                                        {
                                            label: "🛡️ Security",
                                            content: "Comprehensive cybersecurity services including threat detection, endpoint protection, SIEM monitoring, vulnerability assessments, penetration testing, and security awareness training for your team."
                                        }
                                    ],
                                    accentColor: "#60F21D",
                                    textColor: "#000000"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-tabs-right-col",
                        width: "40%",
                        props: { padding: 8, display: "flex", alignItems: "center", justifyContent: "center" },
                        elements: [
                            {
                                id: "ts-tabs-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARAdxFh5uEonwMZV5QevwIGSuy3RAIqbeiGCQcORULf-CHJDaDKXK9DdNWt2LECdsKGmtBvduFSzQJFA8qz4YliAcRkIqkUU1wK_E5d5ZfMW2Ob0V64g7WC5hR508m5wqA9SYogPNM1qnTp3v_X039Svtf5KcYznxGhlTK2ZGg30fPFdeAjX5y8gmS8zq4u67afdlUKSDsruxTkKK66jn9khQvuG4BBmVoECdSOwTC59-9BWBTqwKLgCEAjS7p2kq-9bYyZ5f5_BI",
                                    alt: "IT Services Illustration",
                                    width: "100%",
                                    aspectRatio: "16/9",
                                    borderRadius: 20,
                                    objectFit: "cover"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ==================================================================
        // SERVICE DETAILS — bento grid cards (GridCards renderer)
        // ==================================================================
        {
            key: "ts-service-details",
            name: "Service Details Grid",
            description: "Bento grid showcasing detailed service inclusions",
            structure: {
                id: "ts-accordion-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "ts-details-col",
                    width: "100%",
                    props: { padding: 0 },
                    elements: [{
                        id: "ts-details-grid",
                        type: "GridCards",
                        props: {
                            heading: "What's Included in Each Plan",
                            description: "A detailed breakdown of our core service capabilities — from remote support to vendor management, every plan is built to keep your business running.",
                            cards: [
                                {
                                    title: "Remote Desktop Support",
                                    description: "Instant remote access to diagnose and resolve software issues, configure settings, install applications, and provide real-time guidance to your team members.",
                                    icon: "Monitor",
                                    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&q=80",
                                    bgColor: "#60F21D",
                                    textColor: "#000000",
                                    linkText: "Learn More",
                                    linkUrl: "/contact",
                                    span: "normal"
                                },
                                {
                                    title: "Network Monitoring & Management",
                                    description: "24/7 network monitoring with automated alerting, bandwidth analysis, switch/router management, WiFi optimization, and proactive issue resolution.",
                                    icon: "Wifi",
                                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&q=80",
                                    bgColor: "#1a1a2e",
                                    textColor: "#ffffff",
                                    linkText: "Explore",
                                    linkUrl: "/contact",
                                    span: "wide"
                                },
                                {
                                    title: "Backup & Disaster Recovery",
                                    description: "Automated daily backups with versioning, off-site replication, and tested disaster recovery procedures. RPO of 1 hour and RTO of 4 hours guaranteed.",
                                    icon: "ShieldCheck",
                                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&q=80",
                                    bgColor: "#8100B8",
                                    textColor: "#ffffff",
                                    linkText: "View SLA",
                                    linkUrl: "/contact",
                                    span: "wide"
                                },
                                {
                                    title: "Vendor Management",
                                    description: "We manage all your IT vendor relationships including ISPs, software licenses, hardware warranties, and cloud service providers — saving you time and money.",
                                    icon: "Handshake",
                                    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80",
                                    bgColor: "#000000",
                                    textColor: "#ffffff",
                                    linkText: "Get Started",
                                    linkUrl: "/contact",
                                    span: "normal"
                                }
                            ],
                            headingColor: "#000000",
                            descriptionColor: "#555555",
                            backgroundColor: "#ffffff",
                            cardBorderRadius: 20,
                            gridGap: 16
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // SERVICE CAPABILITIES — 3-column service cards (ServiceProvider)
        // ==================================================================
        {
            key: "ts-comparison-matrix",
            name: "Service Capabilities",
            description: "Service capability cards in a 3-column grid",
            structure: {
                id: "ts-matrix-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#fafafa",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "ts-capabilities-col",
                    width: "100%",
                    props: { padding: 0 },
                    elements: [{
                        id: "ts-capabilities-grid",
                        type: "ServiceProvider",
                        props: {
                            badge: "Compare Plans",
                            heading: "Choose Your Support Level",
                            watermarkText: "SUPPORT",
                            services: [
                                {
                                    icon: "Headphones",
                                    title: "Help Desk Support",
                                    description: "Multi-tier help desk from business hours to 24/7 dedicated support. Our team handles everything from password resets to complex server issues.",
                                    linkText: "Learn more",
                                    linkUrl: "/contact"
                                },
                                {
                                    icon: "Clock",
                                    title: "Response Time SLA",
                                    description: "Guaranteed response times from under 2 hours (Essential) to under 10 minutes (Enterprise). Critical issues receive immediate escalation.",
                                    linkText: "View SLA",
                                    linkUrl: "/contact"
                                },
                                {
                                    icon: "Wifi",
                                    title: "Network Monitoring",
                                    description: "24/7 network monitoring with automated alerting, bandwidth analysis, and proactive issue resolution for Professional and Enterprise plans.",
                                    linkText: "Learn more",
                                    linkUrl: "/contact"
                                },
                                {
                                    icon: "ShieldCheck",
                                    title: "Cybersecurity Suite",
                                    description: "From basic antivirus to full SOC operations — endpoint protection, EDR, SIEM monitoring, and comprehensive threat detection across all tiers.",
                                    linkText: "Learn more",
                                    linkUrl: "/contact"
                                },
                                {
                                    icon: "DatabaseBackup",
                                    title: "Disaster Recovery",
                                    description: "Cloud backup solutions for Professional plans and full DR with regular testing for Enterprise. RPO of 1 hour, RTO of 4 hours guaranteed.",
                                    linkText: "View plans",
                                    linkUrl: "/contact"
                                },
                                {
                                    icon: "Users",
                                    title: "Dedicated Account Team",
                                    description: "Enterprise clients receive a dedicated account manager and solutions architect for strategic IT planning and quarterly business reviews.",
                                    linkText: "Contact sales",
                                    linkUrl: "/contact"
                                }
                            ],
                            accentColor: "#60F21D",
                            headingColor: "#000000",
                            descriptionColor: "#555555",
                            backgroundColor: "#fafafa",
                            cardBgColor: "#ffffff",
                            iconBgColor: "#f0f0f0",
                            iconColor: "#60F21D",
                            cardBorderRadius: 16,
                            columns: 3
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // COMPARISON TABLE — full tier comparison (unused renderer)
        // ==================================================================
        {
            key: "ts-comparison-table",
            name: "Pricing Comparison Table",
            description: "Detailed comparison table for service tiers",
            structure: {
                id: "ts-comptable-section",
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
                        id: "ts-comptable-heading-col",
                        width: "100%",
                        props: { padding: 8, paddingBottom: 32, textAlign: "center" },
                        elements: [
                            {
                                id: "ts-comptable-title",
                                type: "Headline",
                                props: {
                                    text: "Detailed Plan Comparison",
                                    tag: "h2",
                                    align: "center",
                                    color: "#000000",
                                    fontWeight: "900"
                                }
                            },
                            {
                                id: "ts-comptable-desc",
                                type: "Paragraph",
                                props: {
                                    text: "A comprehensive breakdown of every feature across all support tiers so you can make an informed decision.",
                                    align: "center",
                                    color: "#555555",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-comptable-col",
                        width: "100%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-comptable-renderer",
                            type: "ComparisonTable",
                            props: {
                                columns: ["Feature", "Essential", "Professional", "Enterprise"],
                                rows: [
                                    ["Support Channels", "Email, Portal", "Email, Phone, Chat", "All + Dedicated Slack"],
                                    ["Support Hours", "Mon–Fri 8–6", "24/7", "24/7 + VIP Queue"],
                                    ["Monthly Endpoints", "Up to 25", "Up to 100", "Unlimited"],
                                    ["On-Site Visits", "✕", "2/month", "Unlimited"],
                                    ["Patch Management", "Manual", "Automated", "Automated + Tested"],
                                    ["vCIO Consulting", "✕", "Quarterly", "Monthly"],
                                    ["Security Training", "✕", "Annual", "Quarterly"],
                                    ["Compliance Reporting", "✕", "SOC 2", "SOC 2, HIPAA, PCI"]
                                ],
                                accentColor: "#60F21D",
                                headerBgColor: "#000000",
                                headerTextColor: "#ffffff"
                            }
                        }]
                    }
                ]
            }
        }
    ]
};

module.exports = techSupportServices;
