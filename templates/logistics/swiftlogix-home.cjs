/**
 * SwiftLogix Template - Logistics Home Page
 * Theme: Bold Industrial / Logistics / Transportation
 * Primary Color: #ed2626 (Red)
 * Secondary Color: #0f0f0f (Dark)
 * Background: #ffffff / #0f0f0f
 * Fonts: Manrope (All)
 */

const swiftlogixHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "swiftlogix-header",
        type: "Navbar",
        category: "header",
        name: "SwiftLogix Header",
        description: "Bold logistics header with tracking CTA",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(8px)",
                paddingY: 0,
                paddingX: 0,
                fullWidth: true
            },
            columns: [{
                id: "header-col",
                width: "100%",
                elements: [{
                    id: "swiftlogix-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "both",
                        logoText: "SwiftLogix",
                        logoIcon: "Package",
                        logoTextColor: "#0f0f0f",
                        accentColor: "#ed2626",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        linkColor: "#0f0f0f",
                        linkHoverColor: "#ed2626",
                        links: [
                            { label: "Solutions", href: "#solutions" },
                            { label: "Network", href: "#network" },
                            { label: "Technology", href: "#technology" },
                            { label: "Company", href: "#company" }
                        ],
                        showButton: true,
                        buttonText: "Get Started",
                        buttonLink: "#contact",
                        buttonRadius: "0",
                        buttonStyle: "solid",
                        sticky: true
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
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-hero",
            name: "Industrial Hero",
            description: "Bold full-width background hero with tracking input",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
                    backgroundOverlay: "rgba(15, 15, 15, 0.8)",
                    paddingY: 160,
                    paddingX: 80,
                    maxWidth: "100%",
                    minHeight: "100vh",
                    layout: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    overflow: "hidden"
                },
                columns: [
                    // Centered Content
                    {
                        id: "hero-content-col",
                        width: "100%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        elements: [
                            {
                                id: "hero-badge",
                                type: "Badge",
                                props: {
                                    text: "EST. 1998 • GLOBAL PRIDE",
                                    color: "#ed2626",
                                    backgroundColor: "rgba(237,38,38,0.1)",
                                    borderRadius: 4,
                                    marginBottom: "24px"
                                }
                            },
                            {
                                id: "hero-headline",
                                type: "Headline",
                                props: {
                                    tag: "h1",
                                    text: "Logistics\n[Reimagined.](linear-gradient(0deg, #ed2626, #ed2626)",
                                    fontSize: { desktop: "6.5rem", tablet: "4rem", mobile: "2.5rem" },
                                    fontWeight: "700",
                                    color: "#ffffff",
                                    lineHeight: "0.85",
                                    letterSpacing: "-0.04em",
                                    align: "center",
                                    marginBottom: "24px"
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Precision tracking, automated warehousing, and intelligent routing built for the speed of modern commerce.",
                                    color: "rgba(255,255,255,0.7)",
                                    size: "lg",
                                    align: "center",
                                    maxWidth: "600px",
                                    marginBottom: "24px"
                                }
                            },
                            {
                                id: "hero-tracking",
                                type: "TrackingInput",
                                props: {
                                    placeholder: "ENTER TRACKING ID",
                                    buttonText: "TRACK SHIPMENT",
                                    accentColor: "#ed2626",
                                    textColor: "#ffffff",
                                    align: "center"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // STATS SECTION
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-stats",
            name: "Operational Performance",
            description: "Industrial grid with performance bars",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#000000",
                    paddingY: 0,
                    paddingX: 0,
                    borderY: "1px solid rgba(255,255,255,0.1)",
                    layout: {
                        type: "grid",
                        columns: { desktop: 4, tablet: 2, mobile: 1 },
                        gap: 0
                    }
                },
                columns: [
                    {
                        id: "stat-1-col",
                        width: "25%",
                        props: { padding: 60, borderRight: "1px solid rgba(255,255,255,0.1)" },
                        elements: [
                            { id: "stat-1-val", type: "Heading", props: { text: "99.8%", color: "#ffffff", fontSize: "4.5rem", fontWeight: "900", marginBottom: "8px" } },
                            { id: "stat-1-lbl", type: "Paragraph", props: { text: "Route Efficiency", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontWeight: "black", letterSpacing: "0.1em", size: "xs", marginBottom: "24px" } },
                            { id: "stat-1-bar", type: "ProgressBar", props: { value: 99.8, color: "#ed2626", height: "2px" } }
                        ]
                    },
                    {
                        id: "stat-2-col",
                        width: "25%",
                        props: { padding: 60, borderRight: "1px solid rgba(255,255,255,0.1)" },
                        elements: [
                            { id: "stat-2-val", type: "Heading", props: { text: "04.2s", color: "#ffffff", fontSize: "4.5rem", fontWeight: "900", marginBottom: "8px" } },
                            { id: "stat-2-lbl", type: "Paragraph", props: { text: "Network Latency", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontWeight: "black", letterSpacing: "0.1em", size: "xs", marginBottom: "24px" } },
                            { id: "stat-2-bar", type: "ProgressBar", props: { value: 95, color: "#ed2626", height: "2px" } }
                        ]
                    },
                    {
                        id: "stat-3-col",
                        width: "25%",
                        props: { padding: 60, borderRight: "1px solid rgba(255,255,255,0.1)" },
                        elements: [
                            { id: "stat-3-val", type: "Heading", props: { text: "2.4M", color: "#ffffff", fontSize: "4.5rem", fontWeight: "900", marginBottom: "8px" } },
                            { id: "stat-3-lbl", type: "Paragraph", props: { text: "Daily Freight", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontWeight: "black", letterSpacing: "0.1em", size: "xs", marginBottom: "24px" } },
                            { id: "stat-3-bar", type: "ProgressBar", props: { value: 85, color: "#ed2626", height: "2px" } }
                        ]
                    },
                    {
                        id: "stat-4-col",
                        width: "25%",
                        props: { padding: 60 },
                        elements: [
                            { id: "stat-4-val", type: "Heading", props: { text: "0.02%", color: "#ffffff", fontSize: "4.5rem", fontWeight: "900", marginBottom: "8px" } },
                            { id: "stat-4-lbl", type: "Paragraph", props: { text: "System Errors", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontWeight: "black", letterSpacing: "0.1em", size: "xs", marginBottom: "24px" } },
                            { id: "stat-4-bar", type: "ProgressBar", props: { value: 98, color: "#ed2626", height: "2px" } }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // SERVICES SECTION
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-services",
            name: "Industrial Offerings",
            description: "Core logistics services grid",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 120,
                    paddingX: 80,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "services-header",
                        width: "100%",
                        elements: [
                            {
                                id: "services-title",
                                type: "Heading",
                                props: {
                                    text: "End-to-End Solutions",
                                    tag: "h2",
                                    align: "center",
                                    color: "#0F172A",
                                    fontSize: "3rem",
                                    fontWeight: "700",
                                    letterSpacing: "-0.02em"
                                }
                            },
                            {
                                id: "services-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Precision logistics powered by real-time intelligence and global infrastructure.",
                                    align: "center",
                                    color: "#64748B",
                                    marginTop: "16px",
                                    fontSize: "1.1rem"
                                }
                            }
                        ]
                    },
                    {
                        id: "services-grid",
                        width: "100%",
                        layout: {
                            type: "grid",
                            columns: { desktop: 3, tablet: 2, mobile: 1 },
                            gap: 32
                        },
                        elements: [
                            {
                                id: "service-air",
                                type: "ServiceCard",
                                props: {
                                    icon: "Plane",
                                    iconColor: "#ed2626",
                                    iconBg: "rgba(237, 38, 38, 0.05)",
                                    title: "Air Freight",
                                    description: "Time-critical delivery solutions with guaranteed uplift and direct global network access.",
                                    showLink: true,
                                    linkText: "TRACK AIR SHIPMENTS",
                                    align: "left"
                                }
                            },
                            {
                                id: "service-ocean",
                                type: "ServiceCard",
                                props: {
                                    icon: "Ship",
                                    iconColor: "#ed2626",
                                    iconBg: "rgba(237, 38, 38, 0.05)",
                                    title: "Ocean Freight",
                                    description: "Cost-optimized maritime logistics with full-container (FCL) and consolidated (LCL) options.",
                                    showLink: true,
                                    linkText: "SCHEDULE CONTAINERS",
                                    align: "left"
                                }
                            },
                            {
                                id: "service-cold",
                                type: "ServiceCard",
                                props: {
                                    icon: "Thermometer",
                                    iconColor: "#ed2626",
                                    iconBg: "rgba(237, 38, 38, 0.05)",
                                    title: "Cold Chain",
                                    description: "Temperature-controlled distribution for pharmaceuticals and perishables with IoT monitoring.",
                                    showLink: true,
                                    linkText: "MONITOR LIVE SENSORS",
                                    align: "left"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // COMPLIANCE SECTION
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-compliance",
            name: "Operational Standards",
            description: "Compliance and safety comparison (CarePlus Model)",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F8FAFC",
                    paddingY: 120,
                    paddingX: 80,
                    maxWidth: "1280px",
                    layout: "flex",
                    flexDirection: "column",
                    gap: 64
                },
                columns: [
                    // Header Column
                    {
                        id: "compliance-header-col",
                        width: "100%",
                        elements: [
                            {
                                id: "compliance-title",
                                type: "Heading",
                                props: {
                                    text: "Safety & Compliance",
                                    tag: "h2",
                                    align: "center",
                                    color: "#0F172A",
                                    fontSize: "3rem",
                                    fontWeight: "700"
                                }
                            },
                            {
                                id: "compliance-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Precision logistics backed by rigorous global standards and real-time monitoring.",
                                    align: "center",
                                    color: "#64748B",
                                    maxWidth: "600px",
                                    marginTop: "16px"
                                }
                            }
                        ]
                    },
                    // Grid Column
                    {
                        id: "compliance-grid-col",
                        width: "100%",
                        layout: "grid",
                        columns: 2,
                        gap: 32,
                        elements: [
                            {
                                id: "comp-standard",
                                type: "ComparisonCard",
                                props: {
                                    title: "Standard Logistics",
                                    titleColor: "#64748B",
                                    backgroundColor: "#ffffff",
                                    padding: "40px",
                                    borderRadius: 0,
                                    shadow: "sm",
                                    borderTopWidth: 8,
                                    borderTopColor: "#94A3B8",
                                    features: [
                                        {
                                            icon: "AlertTriangle",
                                            iconColor: "#94A3B8",
                                            title: "Ad-hoc Reporting",
                                            description: "Manual updates once daily or upon shipment milestone."
                                        },
                                        {
                                            icon: "AlertTriangle",
                                            iconColor: "#94A3B8",
                                            title: "Reactive Support",
                                            description: "Issue resolution typically begins 4-8 hours after notification."
                                        }
                                    ]
                                }
                            },
                            {
                                id: "comp-swiftlogix",
                                type: "ComparisonCard",
                                props: {
                                    title: "The SwiftLogix Standard",
                                    titleColor: "#ed2626",
                                    backgroundColor: "#ffffff",
                                    padding: "40px",
                                    borderRadius: 0,
                                    shadow: "xl",
                                    borderTopWidth: 8,
                                    borderTopColor: "#ed2626",
                                    features: [
                                        {
                                            icon: "Zap",
                                            iconColor: "#ed2626",
                                            title: "Live GPS Telemetry",
                                            description: "Real-time coordinate tracking with 10-second refresh intervals."
                                        },
                                        {
                                            icon: "Zap",
                                            iconColor: "#ed2626",
                                            title: "Proactive Intercept",
                                            description: "AI predicts delays and reroutes shipments before bottlenecks occur."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // CTA SECTION (Partner With Excellence)
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-cta",
            name: "Partnership CTA",
            description: "Red banner CTA with blur effects",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ed2626",
                    paddingY: 120,
                    paddingX: 80,
                    maxWidth: "1200px",
                    margin: "0 auto 100px auto"
                },
                columns: [{
                    id: "cta-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center"
                    },
                    elements: [
                        {
                            id: "cta-heading",
                            type: "Heading",
                            props: {
                                text: "PARTNER WITH EXCELLENCE",
                                tag: "h2",
                                align: "center",
                                color: "#ffffff",
                                size: "4xl",
                                fontWeight: "bold"
                            }
                        },
                        {
                            id: "cta-description",
                            type: "Paragraph",
                            props: {
                                text: "Ready to optimize your global supply chain? Join forces with SwiftLogix for world-class transportation and warehousing solutions.",
                                align: "center",
                                color: "rgba(255,255,255,0.9)",
                                size: "lg",
                                maxWidth: "600px",
                                marginBottom: "48px"
                            }
                        },
                        {
                            id: "cta-buttons",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Become a Partner",
                                primaryBg: "#000000",
                                primaryColor: "#ffffff",
                                primaryBorderRadius: 4,
                                secondaryText: "Inquiry Form",
                                secondaryBg: "transparent",
                                secondaryColor: "#ffffff",
                                secondaryBorder: "2px solid #ffffff",
                                secondaryBorderRadius: 4,
                                gap: "gap-4",
                                layout: "horizontal",
                                justifyContent: "center"
                            }
                        }
                    ]
                }]
            }
        }
    ],

    // ============================================================================
    // FOOTER
    // ============================================================================
    footer: {
        key: "swiftlogix-footer",
        type: "Footer",
        category: "footer",
        name: "SwiftLogix Footer",
        description: "Dark logistics footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#0f0f0f",
                paddingY: 80,
                paddingX: 80,
                fullWidth: true
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "50%",
                    elements: [
                        {
                            id: "footer-logo",
                            type: "Heading",
                            props: {
                                text: "SwiftLogix",
                                tag: "h3",
                                color: "#ffffff",
                                marginBottom: "24px"
                            }
                        },
                        {
                            id: "footer-desc",
                            type: "Paragraph",
                            props: {
                                text: "Leading the global transition to high-velocity, tech-enabled supply chains. Our network spans every major trade lane, ensuring your cargo moves at the speed of light.",
                                color: "#71717a",
                                maxWidth: "400px",
                                marginBottom: "32px"
                            }
                        }
                    ]
                },
                {
                    id: "footer-offices",
                    width: "25%",
                    elements: [
                        {
                            id: "links-offices",
                            type: "LinkList",
                            props: {
                                title: "Global Offices",
                                titleColor: "#ed2626",
                                textColor: "#a1a1aa",
                                hoverColor: "#ffffff",
                                items: [
                                    { label: "Chicago, USA", href: "#" },
                                    { label: "Rotterdam, NL", href: "#" },
                                    { label: "Singapore", href: "#" },
                                    { label: "Dubai, UAE", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-connect",
                    width: "25%",
                    elements: [
                        {
                            id: "links-connect",
                            type: "LinkList",
                            props: {
                                title: "Connect",
                                titleColor: "#ed2626",
                                textColor: "#a1a1aa",
                                hoverColor: "#ffffff",
                                items: [
                                    { label: "Careers", href: "#" },
                                    { label: "Partnerships", href: "#" },
                                    { label: "Support", href: "#" },
                                    { label: "Sustainability", href: "#" }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // METADATA
    // ============================================================================
    metadata: {
        title: "SwiftLogix | Logistics Reimagined",
        description: "Leading the global transition to high-velocity, tech-enabled supply chains.",
        slug: "/",
        template: "swiftlogix"
    }
};

module.exports = swiftlogixHome;
