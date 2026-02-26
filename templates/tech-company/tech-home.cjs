/**
 * Tech Company Home Page Template
 * Theme: Modern Tech/IT Solutions
 * Primary Color: #328CE6 (Lime)
 * Dark Mode: Supported (#0F0F0F background)
 * Fonts: Plus Jakarta Sans
 */

const techHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "tech-header",
        type: "FloatingNavbar",
        category: "header",
        name: "Tech Company Header",
        description: "Floating tech company header with navigation",
        structure: {
            type: "Header",
            defaultProps: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                paddingY: 0,
                paddingX: 0,
                fullWidth: true
            },
            columns: [{
                id: "header-col",
                width: "100%",
                elements: [{
                    id: "tech-navbar",
                    type: "FloatingNavbar",
                    props: {
                        logoType: "text",
                        logoText: "TECH",
                        logoAccent: "",
                        logoTextColor: "#000000",
                        accentColor: "#328CE6",
                        backgroundColor: "#FFFFFF",
                        floatingPadding: 24,
                        borderRadius: 16,
                        backdropBlur: true,
                        shadow: true,
                        linkColor: "#0F0F0F",
                        linkHoverColor: "#328CE6",
                        links: [
                            { label: "Services", href: "#services" },
                            { label: "Solutions", href: "#solutions" },
                            { label: "Company", href: "#company" },
                            { label: "Contact", href: "#contact" }
                        ],
                        showButton: true,
                        buttonText: "Get Started",
                        buttonLink: "#contact",
                        buttonRadius: "full",
                        buttonStyle: "solid",
                        buttonColor: "#FFFFFF",
                        buttonBgColor: "#328CE6"
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
        // HERO SECTION - "Digital solutions for the modern enterprise"
        // --------------------------------------------------------------------------
        {
            key: "tech-hero",
            name: "Hero Section",
            description: "Main hero section with heading, description, CTA buttons and illustration",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F8F8F6",
                    darkBackgroundColor: "#0F0F0F",
                    paddingY: 120,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 48,
                    "@media (max-width: 1024px)": {
                        paddingY: 80,
                        paddingX: 40
                    },
                    "@media (max-width: 768px)": {
                        paddingY: 60,
                        paddingX: 20
                    }
                },
                columns: [
                    // Content Column
                    {
                        id: "tech-hero-content",
                        width: "100%",
                        props: {
                            maxWidth: "900px",
                            flexDirection: "column",
                            gap: 24,
                            alignItems: "flex-start"
                        },
                        elements: [
                            // Main Heading - Line 1
                            {
                                id: "tech-hero-heading-1",
                                type: "Headline",
                                props: {
                                    text: "Digital [solutions](linear-gradient(90deg, #328CE6, #328CE6)",
                                    tag: "h1",
                                    color: "#000000",
                                    fontSize: {
                                        mobile: "32px",
                                        tablet: "48px",
                                        desktop: "64px"
                                    },
                                    fontWeight: "900",
                                    lineHeight: 1.1,
                                    marginBottom: 8,
                                    align: "center"
                                }
                            },
                            // Main Heading - Line 2
                            {
                                id: "tech-hero-heading-2",
                                type: "Headline",
                                props: {
                                    text: "for the modern [enterprise](linear-gradient(90deg, #328CE6, #328CE6)",
                                    tag: "h1",
                                    color: "#000000",
                                    fontSize: {
                                        mobile: "32px",
                                        tablet: "48px",
                                        desktop: "64px"
                                    },
                                    fontWeight: "900",
                                    lineHeight: 1.1,
                                    marginBottom: 24,
                                    align: "center"
                                }
                            },
                            // Description
                            {
                                id: "tech-hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Scale your infrastructure and secure your digital assets with our cutting-edge IT consulting and managed services.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "lg",
                                    lineHeight: 1.6,
                                    maxWidth: "600px",
                                    marginBottom: 32,
                                    align: "center"
                                }
                            },
                            // CTA Buttons Group
                            {
                                id: "tech-hero-buttons",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Start your journey",
                                    secondaryText: "View services",
                                    primaryBg: "#000000",
                                    primaryColor: "#ffffff",
                                    secondaryBg: "#ffffff",
                                    secondaryColor: "#000000",
                                    primaryBorderRadius: "16",
                                    secondaryBorderRadius: "16",
                                    fontSize: "base",
                                    fontWeight: "700",
                                    gap: "gap-4",
                                    align: "center",
                                    justifyContent: "center",
                                    layout: "flex-nowrap",
                                    showPrimaryIcon: false,
                                    showSecondaryIcon: false
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TRUSTED BY SECTION - Company logos/brands (DataMarquee)
        // --------------------------------------------------------------------------
        {
            key: "tech-trusted-by",
            name: "Trusted By Section",
            description: "Client logos or brand indicators section with marquee scroll",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#1A1A1A",
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    // gap: 32,
                    borderTopColor: "#F0F0F0",
                    darkBorderTopColor: "#333333",
                    borderBottomColor: "#F0F0F0",
                    darkBorderBottomColor: "#333333",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    "@media (max-width: 768px)": {
                        // paddingY: 32,
                        paddingX: 20
                    }
                },
                columns: [
                    {
                        id: "tech-trusted-header",
                        width: "100%",
                        props: {
                            maxWidth: "900px"
                        },
                        elements: [
                            {
                                id: "tech-trusted-title",
                                type: "Paragraph",
                                props: {
                                    text: "TRUSTED BY LEADING COMPANIES",
                                    color: "#C9C9C9",
                                    darkColor: "#999999",
                                    marginLeft: { mobile: 16, tablet: 48, desktop: 88 },
                                    marginRight: 8,
                                    darkColor: "#FFFFFF",
                                    size: { mobile: "lg", tablet: "xl", desktop: "xl" },
                                    fontWeight: "bold"

                                }
                            }
                        ]
                    },
                    {
                        id: "tech-trusted-marquee",
                        width: "100%",
                        elements: [
                            {
                                id: "tech-trusted-marquee-item",
                                type: "DataMarquee",
                                props: {
                                    showTitle: false,
                                    title: "Trusted by global innovators",
                                    titleIcon: "shield_check",
                                    backgroundColor: "#FFFFFF",
                                    darkBackgroundColor: "#1A1A1A",
                                    textColor: "#000000",
                                    darkTextColor: "#FFFFFF",
                                    labelColor: "#999999",
                                    darkLabelColor: "#999999",
                                    accentColor: "#328CE6",
                                    borderColor: "#F0F0F0",
                                    darkBorderColor: "#333333",
                                    speed: 40,
                                    direction: "left",
                                    showBorder: false,
                                    items: [
                                        { label: "AETHER", value: "", icon: "Cloud" },
                                        { label: "NOVA", value: "", icon: "Shield" },
                                        { label: "NEXUS", value: "", icon: "Network" },
                                        { label: "ORACLE", value: "", icon: "Database" },
                                        { label: "VERTEX", value: "", icon: "Box" }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SERVICES SECTION - "Excellence in every detail"
        // --------------------------------------------------------------------------
        {
            key: "tech-services",
            name: "Services Section",
            description: "Four service cards with icons and features",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F8F8F6",
                    darkBackgroundColor: "#0F0F0F",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 48,
                    "@media (max-width: 1024px)": {
                        paddingY: 80,
                        paddingX: 40
                    },
                    "@media (max-width: 768px)": {
                        paddingY: 60,
                        paddingX: 20
                    }
                },
                columns: [
                    // Services Header
                    {
                        id: "tech-services-header",
                        width: "100%",
                        props: {
                            textAlign: "center",
                            marginBottom: 16,
                            maxWidth: "800px"
                        },
                        elements: [
                            {
                                id: "tech-services-title",
                                type: "Heading",
                                props: {
                                    text: "Excellence in every detail",
                                    tag: "h2",
                                    color: "#000000",
                                    darkColor: "#FFFFFF",
                                    size: "4xl",
                                    fontWeight: "bold",
                                    marginBottom: 16,
                                    "@media (max-width: 768px)": {
                                        size: "2xl",
                                        marginBottom: 12
                                    }
                                }
                            },
                            {
                                id: "tech-services-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "We don't just provide services; we engineer solutions that propel your business forward in an ever-changing digital landscape.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "base",
                                    lineHeight: 1.6,
                                    maxWidth: "600px",
                                    marginBottom: 0
                                }
                            }
                        ]
                    },
                    // Services Grid with Service Cards
                    {
                        id: "tech-services-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 24,
                        props: {
                            "@media (max-width: 1024px)": {
                                columns: 2,
                                gap: 20
                            },
                            "@media (max-width: 768px)": {
                                columns: 1,
                                gap: 16
                            }
                        },
                        elements: [
                            // Service 1 - Cloud Migration
                            {
                                id: "tech-service-1",
                                type: "ServiceCard",
                                props: {
                                    icon: "CloudSync",
                                    title: "Cloud Migration",
                                    description: "Scale your infrastructure and secure your digital assets with our cutting-edge cloud solutions.",
                                    iconColor: "#ffffff",
                                    iconBg: "#328CE6",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#000000",
                                    accentColor: "#328CE6",
                                    showLink: false,
                                    style: "card",
                                    align: "left",
                                    features: [
                                        "Legacy system assessment",
                                        "Zero-downtime transition",
                                        "Multi-cloud architecture"
                                    ]
                                }
                            },
                            // Service 2 - Cybersecurity
                            {
                                id: "tech-service-2",
                                type: "ServiceCard",
                                props: {
                                    icon: "Shield",
                                    title: "Cybersecurity Audits",
                                    description: "Comprehensive security assessments and compliance frameworks to protect your enterprise data.",
                                    iconColor: "#ffffff",
                                    iconBg: "#328CE6",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#000000",
                                    accentColor: "#328CE6",
                                    showLink: false,
                                    style: "card",
                                    align: "left",
                                    features: [
                                        "Penetration testing",
                                        "Compliance frameworks",
                                        "Risk mitigation plans"
                                    ]
                                }
                            },
                            // Service 3 - Managed IT
                            {
                                id: "tech-service-3",
                                type: "ServiceCard",
                                props: {
                                    icon: "Settings",
                                    title: "Managed IT",
                                    description: "24/7 proactive monitoring and incident response to keep your systems running smoothly.",
                                    iconColor: "#ffffff",
                                    iconBg: "#328CE6",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#000000",
                                    accentColor: "#328CE6",
                                    showLink: false,
                                    style: "card",
                                    align: "left",
                                    features: [
                                        "24/7 proactive monitoring",
                                        "Incident response team",
                                        "Asset management"
                                    ]
                                }
                            },
                            // Service 4 - Data Analytics
                            {
                                id: "tech-service-4",
                                type: "ServiceCard",
                                props: {
                                    icon: "BarChart3",
                                    title: "Data Analytics",
                                    description: "Transform your business with actionable insights and intelligent data-driven decision making.",
                                    iconColor: "#ffffff",
                                    iconBg: "#328CE6",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#000000",
                                    accentColor: "#328CE6",
                                    showLink: false,
                                    style: "card",
                                    align: "left",
                                    features: [
                                        "BI dashboards",
                                        "Predictive modeling",
                                        "Big data strategy"
                                    ]
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
        key: "tech-footer",
        type: "Footer",
        category: "footer",
        name: "Tech Company Footer",
        description: "Tech company footer with links and company information",
        structure: {    
            type: "Footer",
            defaultProps: {
                backgroundColor: "#0F0F0F",
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
                                text: "TECH",
                                tag: "h4",
                                color: "#328CE6",
                                marginBottom: "24px"
                            }
                        },
                        {
                            id: "footer-desc",
                            type: "Paragraph",
                            props: {
                                text: "Digital solutions for the modern enterprise. We engineer cutting-edge technology to transform your business and secure your digital future.",
                                color: "#999999",
                                maxWidth: "400px",
                                marginBottom: "32px"
                            }
                        },
                        {
                            id: "footer-social",
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "linkedin", url: "#" },
                                    { platform: "twitter", url: "#" },
                                    { platform: "github", url: "#" }
                                ],
                                iconColor: "#328CE6",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-solutions",
                    width: "25%",
                    elements: [
                        {
                            id: "links-solutions",
                            type: "LinkList",
                            props: {
                                title: "Solutions",
                                titleColor: "#328CE6",
                                textColor: "#999999",
                                hoverColor: "#328CE6",
                                items: [
                                    { label: "Cloud Migration", href: "#" },
                                    { label: "Cybersecurity", href: "#" },
                                    { label: "Managed IT", href: "#" },
                                    { label: "Data Analytics", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-company",
                    width: "25%",
                    elements: [
                        {
                            id: "links-company",
                            type: "LinkList",
                            props: {
                                title: "Company",
                                titleColor: "#328CE6",
                                textColor: "#999999",
                                hoverColor: "#328CE6",
                                items: [
                                    { label: "About Us", href: "#" },
                                    { label: "Careers", href: "#" },
                                    { label: "Privacy Policy", href: "#" },
                                    { label: "Contact Us", href: "#" }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = techHome;
