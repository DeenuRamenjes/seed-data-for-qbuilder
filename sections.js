import { heroTemplates } from "./heroes.js";
import { textualSectionTemplates } from "./textual-sections.js";
import { mediaSectionTemplates } from "./media-sections.js";
import { featureSectionTemplates } from "./feature-sections.js";

export const sectionTemplates = [
    ...heroTemplates,
    ...textualSectionTemplates,
    ...mediaSectionTemplates,
    ...featureSectionTemplates,
    {
        key: "standard-header",
        type: "Header",
        category: "navigation",
        name: "Standard Header",
        description: "Standard navigation header with logo and menu",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                glassmorphism: true,
                fullWidth: true,
                backgroundColor: "#ffffff",
                paddingY: 0,
            },
            columns: [
                {
                    id: "header-col-1",
                    width: "100%",
                    elements: [
                        {
                            id: "navbar-element-1",
                            type: "Navbar",
                            props: {
                                logoType: "text",
                                logoText: "Brand",
                                logoAccent: "Hub",
                                links: [
                                    { label: "Home", href: "/", isMegaMenu: false },
                                    { label: "Solutions", href: "#", isMegaMenu: true, megaMenuType: "sections" },
                                    { label: "Pricing", href: "/pricing", isMegaMenu: false },
                                    { label: "Company", href: "#", isMegaMenu: true, megaMenuType: "simple" }
                                ],
                                accentColor: "#ef4444"
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        key: "mega-menu-3-cols",
        type: "MegaMenuSection",
        category: "navigation",
        name: "3-Column Links Grid",
        description: "A clean 3-column grid of link lists for mega menus",
        structure: {
            type: "Custom",
            defaultProps: {
                paddingTop: 24,
                paddingBottom: 24,
                backgroundColor: "transparent",
            },
            columns: [
                {
                    id: "mega-col-1",
                    width: "33.33%",
                    elements: [
                        {
                            id: "mega-links-1",
                            type: "LinkList",
                            props: {
                                title: "Products",
                                items: [
                                    { label: "Features", href: "/features" },
                                    { label: "Integrations", href: "/integrations" },
                                    { label: "Marketplace", href: "/marketplace" },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "mega-col-2",
                    width: "33.33%",
                    elements: [
                        {
                            id: "mega-links-2",
                            type: "LinkList",
                            props: {
                                title: "Resources",
                                items: [
                                    { label: "Documentation", href: "/docs" },
                                    { label: "Tutorials", href: "/tutorials" },
                                    { label: "Guides", href: "/guides" },
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "mega-col-3",
                    width: "33.33%",
                    elements: [
                        {
                            id: "mega-links-3",
                            type: "LinkList",
                            props: {
                                title: "Company",
                                items: [
                                    { label: "About Us", href: "/about" },
                                    { label: "Careers", href: "/careers" },
                                    { label: "Press", href: "/press" },
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        key: "pro-footer",
        type: "Footer",
        category: "navigation",
        name: "Professional Footer",
        description: "Modern 4-column footer with social links and bottom bar",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#f9fafb",
                paddingTop: 64,
                paddingBottom: 32,
            },
            columns: [
                {
                    id: "footer-col-1",
                    width: "30%",
                    elements: [
                        {
                            id: "footer-logo",
                            type: "Logo",
                            props: {
                                text: "Brand",
                                accent: "Hub",
                                size: "lg"
                            }
                        },
                        {
                            id: "footer-desc",
                            type: "Paragraph",
                            props: {
                                text: "Building the future of web design with AI-powered building blocks and enterprise-grade performance.",
                                size: "sm",
                                color: "#6b7280"
                            }
                        },
                        {
                            id: "footer-socials",
                            type: "SocialLinks",
                            props: {
                                links: "twitter:https://twitter.com:Twitter,linkedin:https://linkedin.com:LinkedIn,github:https://github.com:GitHub",
                                iconSize: 18,
                                iconColor: "#9ca3af",
                                iconHoverColor: "#ef4444"
                            }
                        }
                    ]
                },
                {
                    id: "footer-col-2",
                    width: "20%",
                    elements: [
                        {
                            id: "footer-links-1",
                            type: "LinkList",
                            props: {
                                title: "Products",
                                items: [
                                    { label: "Website Builder", href: "#" },
                                    { label: "AI Architect", href: "#" },
                                    { label: "Templates", href: "#" },
                                    { label: "Pricing", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-col-3",
                    width: "20%",
                    elements: [
                        {
                            id: "footer-links-2",
                            type: "LinkList",
                            props: {
                                title: "Company",
                                items: [
                                    { label: "About Us", href: "#" },
                                    { label: "Careers", href: "#" },
                                    { label: "Press Kit", href: "#" },
                                    { label: "Contact", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-col-4",
                    width: "20%",
                    elements: [
                        {
                            id: "footer-links-3",
                            type: "LinkList",
                            props: {
                                title: "Resources",
                                items: [
                                    { label: "Documentation", href: "#" },
                                    { label: "API Reference", href: "#" },
                                    { label: "Community", href: "#" },
                                    { label: "Status", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-bottom-col",
                    width: "100%",
                    elements: [
                        {
                            id: "footer-divider",
                            type: "Divider",
                            props: {
                                color: "#e5e7eb",
                                spacing: "sm"
                            }
                        },
                        {
                            id: "footer-copyright",
                            type: "Paragraph",
                            props: {
                                text: "© 2026 BrandHub Inc. All rights reserved.",
                                size: "sm",
                                color: "#9ca3af",
                                align: "center"
                            }
                        }
                    ]
                }
            ]
        }
    },
    // --- 5 NEW HEADER TEMPLATES ---
    {
        key: "header-minimal",
        type: "Header",
        category: "navigation",
        name: "Minimal Header",
        description: "Clean white header with bold typography",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                glassmorphism: false,
                fullWidth: true,
                backgroundColor: "#ffffff",
                paddingY: 0,
            },
            columns: [{
                id: "h-min-col",
                width: "100%",
                elements: [{
                    id: "h-min-nav",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "MINIMAL.",
                        logoTextColor: "#111827", // Gray 900
                        links: [
                            { label: "Work", href: "/work" },
                            { label: "Studio", href: "/studio" },
                            { label: "Contact", href: "/contact" }
                        ],
                        linkColor: "#374151", // Gray 700
                        linkHoverColor: "#000000",
                        backgroundColor: "#ffffff",
                        accentColor: "#000000",
                        showButton: false
                    }
                }]
            }]
        }
    },
    {
        key: "header-dark-tech",
        type: "Header",
        category: "navigation",
        name: "Dark Tech Header",
        description: "Professional dark theme with pill button",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                glassmorphism: true,
                fullWidth: true,
                backgroundColor: "#0f172a", // Slate 900
                paddingY: 0,
            },
            columns: [{
                id: "h-dark-col",
                width: "100%",
                elements: [{
                    id: "h-dark-nav",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "NEXUS",
                        logoAccent: "IO",
                        logoTextColor: "#f1f5f9", // Slate 100
                        logoAccentColor: "#38bdf8", // Sky 400
                        links: [
                            { label: "Platform", href: "/platform", isMegaMenu: true, megaMenuType: "sections" },
                            { label: "Developers", href: "/devs" },
                            { label: "Pricing", href: "/pricing" }
                        ],
                        linkColor: "#cbd5e1", // Slate 300
                        linkHoverColor: "#f8fafc", // Slate 50
                        backgroundColor: "#0f172a",
                        accentColor: "#38bdf8",
                        megaMenuBgColor: "#1e293b",
                        megaMenuTextColor: "#e2e8f0",
                        showButton: true,
                        buttonText: "Get Access",
                        buttonStyle: "solid",
                        buttonRadius: "full"
                    }
                }]
            }]
        }
    },
    {
        key: "header-centered",
        type: "Header",
        category: "navigation",
        name: "Centered Warm",
        description: "Warm tones with soft styling",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: false,
                glassmorphism: false,
                fullWidth: true,
                backgroundColor: "#fffbeb", // Amber 50
                paddingY: 0,
            },
            columns: [{
                id: "h-center-col",
                width: "100%",
                elements: [{
                    id: "h-center-nav",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "Artisan",
                        logoTextColor: "#78350f", // Amber 900
                        links: [
                            { label: "Shop", href: "/shop" },
                            { label: "About", href: "/about" },
                            { label: "Journal", href: "/journal" }
                        ],
                        linkColor: "#92400e", // Amber 700
                        linkHoverColor: "#b45309",
                        backgroundColor: "transparent",
                        accentColor: "#d97706",
                        showButton: true,
                        buttonText: "Shop Now",
                        buttonStyle: "outline",
                        buttonRadius: "md"
                    }
                }]
            }]
        }
    },
    {
        key: "header-gradient",
        type: "Header",
        category: "navigation",
        name: "Gradient Header",
        description: "Vibrant gradient with square button",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                glassmorphism: true,
                fullWidth: true,
                backgroundColor: "linear-gradient(to right, #4f46e5, #9333ea)", // Indigo to Purple
                paddingY: 0,
            },
            columns: [{
                id: "h-grad-col",
                width: "100%",
                elements: [{
                    id: "h-grad-nav",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "VIBE",
                        logoTextColor: "#000000ff", // Violet 50
                        links: [
                            { label: "Explore", href: "/explore" },
                            { label: "Create", href: "/create" },
                            { label: "Community", href: "/community" }
                        ],
                        linkColor: "#000000ff", // Violet 100
                        linkHoverColor: "#000000ff",
                        backgroundColor: "transparent",
                        accentColor: "#000000ff",
                        showButton: true,
                        buttonText: "Join",
                        buttonStyle: "outline",
                        buttonRadius: "none"
                    }
                }]
            }]
        }
    },
    {
        key: "header-corporate",
        type: "Header",
        category: "navigation",
        name: "Corporate Blue",
        description: "Enterprise blue with rounded button",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                glassmorphism: false,
                fullWidth: true,
                backgroundColor: "#1e3a8a", // Blue 900
                paddingY: 0,
            },
            columns: [{
                id: "h-corp-col",
                width: "100%",
                elements: [{
                    id: "h-corp-nav",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "GlobalCorp",
                        logoTextColor: "#eff6ff", // Blue 50
                        links: [
                            { label: "Services", href: "/services" },
                            { label: "Industries", href: "/industries" },
                            { label: "Insights", href: "/insights" }
                        ],
                        linkColor: "#bfdbfe", // Blue 200
                        linkHoverColor: "#ffffff",
                        backgroundColor: "#1e3a8a",
                        accentColor: "#60a5fa",
                        showButton: true,
                        buttonText: "Contact Us",
                        buttonStyle: "solid",
                        buttonRadius: "sm"
                    }
                }]
            }]
        }
    },
    // --- 5 NEW FOOTER TEMPLATES ---
    {
        key: "footer-minimal",
        type: "Footer",
        category: "navigation",
        name: "Minimal Footer",
        description: "Simple centered footer with copyright",
        structure: {
            type: "Footer",
            defaultProps: {
                paddingTop: 40,
                paddingBottom: 40,
                backgroundColor: "#ffffff",
            },
            columns: [{
                id: "f-min-col",
                width: "100%",
                elements: [{
                    id: "f-min-social",
                    type: "SocialLinks",
                    props: {
                        facebook: "https://facebook.com",
                        twitter: "https://twitter.com",
                        instagram: "https://instagram.com",
                        align: "center",
                        iconStyle: "outline",
                        iconColor: "#374151"
                    }
                }, {
                    id: "f-min-copy",
                    type: "Paragraph",
                    props: {
                        text: "© 2026 Minimal Footer. All rights reserved.",
                        size: "sm",
                        align: "center",
                        color: "#4b5563"
                    }
                }]
            }]
        }
    },
    {
        key: "footer-mega-dark",
        type: "Footer",
        category: "navigation",
        name: "Mega Dark Footer",
        description: "Dark high-density footer for large sites",
        structure: {
            type: "Footer",
            defaultProps: {
                paddingTop: 64,
                paddingBottom: 24,
                backgroundColor: "#111827", // Gray 900
            },
            columns: [
                {
                    id: "f-md-col1", width: "25%",
                    elements: [{
                        id: "f-md-logo", type: "Logo",
                        props: { logoType: "text", text: "MEGA", accent: "HUB", size: "lg", color: "#f9fafb", accentColor: "#f59e0b" }
                    }, {
                        id: "f-md-desc", type: "Paragraph",
                        props: { text: "Building the future of web design, one pixel at a time.", color: "#d1d5db", size: "sm" }
                    }]
                },
                {
                    id: "f-md-col2", width: "25%",
                    elements: [{
                        id: "f-md-links1", type: "LinkList",
                        props: { title: "Product", textColor: "#d1d5db", titleColor: "#9ca3af", items: [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }, { label: "Releases", href: "#" }] }
                    }]
                },
                {
                    id: "f-md-col3", width: "25%",
                    elements: [{
                        id: "f-md-links2", type: "LinkList",
                        props: { title: "Company", textColor: "#d1d5db", titleColor: "#9ca3af", items: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }, { label: "Legal", href: "#" }] }
                    }]
                },
                {
                    id: "f-md-col4", width: "25%",
                    elements: [{
                        id: "f-md-social", type: "SocialLinks",
                        props: { align: "left", iconColor: "#9ca3af", facebook: "#", twitter: "#", github: "#" }
                    }]
                }
            ]
        }
    },
    {
        key: "footer-newsletter",
        type: "Footer",
        category: "navigation",
        name: "Newsletter Footer",
        description: "Footer with prominent newsletter cta",
        structure: {
            type: "Footer",
            defaultProps: {
                paddingTop: 80,
                paddingBottom: 40,
                backgroundColor: "#f3f4f6", // Gray 100
            },
            columns: [
                {
                    id: "f-news-col1", width: "40%",
                    elements: [{
                        id: "f-news-head", type: "Paragraph",
                        props: { text: "Stay updated", size: "lg", align: "left", color: "#111827" }
                    }, {
                        id: "f-news-desc", type: "Paragraph",
                        props: { text: "Join 10,000+ designers getting our weekly insights.", size: "sm", color: "#374151" }
                    }]
                },
                {
                    id: "f-news-col2", width: "60%",
                    elements: [{
                        id: "f-news-social", type: "SocialLinks",
                        props: { align: "right", iconStyle: "solid", iconColor: "#4f46e5", twitter: "#", linkedin: "#" }
                    }, {
                        id: "f-news-copy", type: "Paragraph",
                        props: { text: "© 2026 Newsletter Inc.", align: "right", size: "xs", color: "#6b7280" }
                    }]
                }
            ]
        }
    },
    {
        key: "footer-gradient",
        type: "Footer",
        category: "navigation",
        name: "Gradient Footer",
        description: "Stylish footer with gradient background",
        structure: {
            type: "Footer",
            defaultProps: {
                paddingTop: 60,
                paddingBottom: 60,
                backgroundColor: "linear-gradient(to right, #ec4899, #8b5cf6)", // Pink to Violet
            },
            columns: [{
                id: "f-grad-col", width: "100%",
                elements: [{
                    id: "f-grad-logo", type: "Logo",
                    props: { logoType: "text", text: "CREATIVE", accent: "", color: "#fdf2f8", size: "xl" }
                }, {
                    id: "f-grad-social", type: "SocialLinks",
                    props: { align: "center", iconColor: "#fdf2f8", instagram: "#", dribbble: "#" }
                }, {
                    id: "f-grad-div", type: "Divider",
                    props: { color: "rgba(255,255,255,0.3)", width: "50%", margin: "my-8" }
                }, {
                    id: "f-grad-copy", type: "Paragraph",
                    props: { text: "Made with love in San Francisco.", align: "center", color: "#fbcfe8" }
                }]
            }]
        }
    },
    {
        key: "footer-agency",
        type: "Footer",
        category: "navigation",
        name: "Agency Big Footer",
        description: "Bold typography for design agencies",
        structure: {
            type: "Footer",
            defaultProps: {
                paddingTop: 100,
                paddingBottom: 40,
                backgroundColor: "#000000",
            },
            columns: [
                {
                    id: "f-ag-col1", width: "60%",
                    elements: [{
                        id: "f-ag-cta", type: "Paragraph",
                        props: { text: "LET'S WORK TOGETHER.", size: "xl", color: "#f3f4f6" }
                    }, {
                        id: "f-ag-mail", type: "Paragraph",
                        props: { text: "hello@agency.design", size: "lg", color: "#d1d5db" }
                    }]
                },
                {
                    id: "f-ag-col2", width: "20%",
                    elements: [{
                        id: "f-ag-links", type: "LinkList",
                        props: { title: "Sitemap", items: [{ label: "Home", href: "/" }, { label: "Work", href: "/work" }], textColor: "#d1d5db", titleColor: "#9ca3af" }
                    }]
                },
                {
                    id: "f-ag-col3", width: "20%",
                    elements: [{
                        id: "f-ag-social", type: "SocialLinks",
                        props: { title: "Socials", align: "left", iconColor: "#f3f4f6", instagram: "#", behance: "#" }
                    }]
                }
            ]
        }
    }
];
