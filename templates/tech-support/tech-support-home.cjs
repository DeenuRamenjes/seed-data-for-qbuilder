/**
 * NexaSupport - Tech Support & Managed Services Template
 * Theme: Modern Tech Support / Managed IT Services
 * Color Scheme:
 *   - Background: #ffffff (White)
 *   - Accent: #60F21D (Vibrant Green)
 *   - Text: #000000 (Black)
 *   - Secondary: #8100B8 (Purple)
 *   - Font: Manrope
 */

const techSupportHome = {
    // ========================================================================
    // HEADER
    // ========================================================================
    header: {
        key: "tech-support-header",
        type: "Header",
        category: "header",
        name: "NexaSupport Header",
        description: "Clean professional header with navigation and CTA",
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
                id: "ts-header-col",
                width: "100%",
                elements: [{
                    id: "ts-header-nav",
                    type: "FloatingNavbar",
                    props: {
                        logoType: "text",
                        logoText: "NexaSupport",
                        logoTextColor: "#000000",
                        accentColor: "#60F21D",
                        backgroundColor: "#ffffff",
                        linkColor: "#000000",
                        linkHoverColor: "#60F21D",
                        showButton: true,
                        buttonText: "Get Support",
                        buttonStyle: "solid",
                        buttonBg: "#60F21D",
                        buttonColor: "#000000",
                        buttonLink: "/contact",
                        links: [
                            { label: "Home", url: "/" },
                            { label: "Services", url: "/services" },
                            { label: "About", url: "/about" },
                            { label: "Contact", url: "/contact" }
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
        key: "tech-support-footer",
        type: "Footer",
        category: "footer",
        name: "NexaSupport Footer",
        description: "Professional footer with support links and social",
        structure: {
            type: "Footer",
            defaultProps: {
                fontFamily: "Manrope",
                backgroundColor: "#000000",
                textColor: "#999999",
                paddingY: 40,
                paddingX: 48,
                fullWidth: true,
            },
            columns: [{
                id: "ts-footer-col",
                width: "100%",
                elements: [{
                    id: "ts-footer",
                    type: "Footer",
                    props: {
                        companyName: "NexaSupport",
                        tagline: "Enterprise-grade tech support and managed IT services. Keeping your systems running 24/7/365.",
                        copyright: "© 2026 NexaSupport Inc. All rights reserved.",
                        backgroundColor: "#000000",
                        textColor: "#999999",
                        headingColor: "#ffffff",
                        linkColor: "#999999",
                        linkHoverColor: "#60F21D",
                        socialLinks: [
                            { platform: "twitter", url: "#" },
                            { platform: "linkedin", url: "#" },
                            { platform: "github", url: "#" }
                        ],
                        columns: [
                            {
                                title: "Services",
                                links: [
                                    { label: "Help Desk", url: "/services" },
                                    { label: "Managed IT", url: "/services" },
                                    { label: "Cloud Services", url: "/services" },
                                    { label: "Cybersecurity", url: "/services" }
                                ]
                            },
                            {
                                title: "Resources",
                                links: [
                                    { label: "Knowledge Base", url: "#" },
                                    { label: "System Status", url: "#" },
                                    { label: "Documentation", url: "#" },
                                    { label: "API Reference", url: "#" }
                                ]
                            },
                            {
                                title: "Company",
                                links: [
                                    { label: "About Us", url: "/about" },
                                    { label: "Careers", url: "#" },
                                    { label: "Privacy Policy", url: "#" },
                                    { label: "Contact", url: "/contact" }
                                ]
                            }
                        ]
                    }
                }]
            }]
        }
    },

    // ========================================================================
    // PAGE SECTIONS
    // ========================================================================
    sections: [
        // ==================================================================
        // HERO SECTION — Full-bleed ModernHero with background image
        // ==================================================================
        {
            key: "ts-hero",
            name: "Hero Section",
            description: "Full-bleed modern hero with background image and CTAs",
            structure: {
                id: "ts-hero-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#000000",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "ts-hero-col",
                    width: "100%",
                    props: { padding: 0 },
                    elements: [{
                        id: "ts-modern-hero",
                        type: "ModernHero",
                        props: {
                            heading: "NEXASUPPORT",
                            headingSuffix: "24/7",
                            description: "From help desk tickets to fully managed infrastructure, NexaSupport delivers enterprise-grade IT solutions that keep your business running flawlessly — around the clock.",
                            backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuARAdxFh5uEonwMZV5QevwIGSuy3RAIqbeiGCQcORULf-CHJDaDKXK9DdNWt2LECdsKGmtBvduFSzQJFA8qz4YliAcRkIqkUU1wK_E5d5ZfMW2Ob0V64g7WC5hR508m5wqA9SYogPNM1qnTp3v_X039Svtf5KcYznxGhlTK2ZGg30fPFdeAjX5y8gmS8zq4u67afdlUKSDsruxTkKK66jn9khQvuG4BBmVoECdSOwTC59-9BWBTqwKLgCEAjS7p2kq-9bYyZ5f5_BI",
                            overlayOpacity: 0.45,
                            overlayColor: "#000000",
                            primaryButtonText: "Submit a Ticket",
                            primaryButtonLink: "/contact",
                            secondaryButtonText: "View Services",
                            secondaryButtonLink: "/services",
                            textColor: "#ffffff",
                            accentColor: "#60F21D",
                            buttonTextColor: "#000000",
                            buttonBorderRadius: 12,
                            contentAlign: "left",
                            minHeight: "85vh"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // SERVICES OVERVIEW — 3 service cards
        // ==================================================================
        {
            key: "ts-services-overview",
            name: "Services Overview",
            description: "Three service highlight cards",
            structure: {
                id: "ts-services-section",
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
                        id: "ts-services-heading-col",
                        width: "100%",
                        props: { padding: 8, paddingBottom: 32, textAlign: "center" },
                        elements: [
                            {
                                id: "ts-services-label",
                                type: "Heading",
                                props: {
                                    text: "OUR SERVICES",
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
                                id: "ts-services-title",
                                type: "Headline",
                                props: {
                                    text: "Complete IT Support Solutions",
                                    tag: "h2",
                                    align: "center",
                                    color: "#000000",
                                    fontWeight: "900"
                                }
                            },
                            {
                                id: "ts-services-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "From reactive support to proactive managed services — we cover every aspect of your IT infrastructure.",
                                    align: "center",
                                    color: "#555555",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-service-col-1",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "ts-service-helpdesk",
                            type: "ServiceCard",
                            props: {
                                title: "Help Desk Support",
                                description: "24/7 multi-channel support via phone, email, chat, and remote access. Fast resolution for all technical issues with guaranteed SLA response times.",
                                iconName: "Headphones",
                                accentColor: "#60F21D",
                                backgroundColor: "#ffffff"
                            }
                        }]
                    },
                    {
                        id: "ts-service-col-2",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "ts-service-managed",
                            type: "ServiceCard",
                            props: {
                                title: "Managed IT Services",
                                description: "Comprehensive infrastructure management including monitoring, patch management, backup, disaster recovery, and strategic IT planning.",
                                iconName: "Server",
                                accentColor: "#8100B8",
                                backgroundColor: "#ffffff"
                            }
                        }]
                    },
                    {
                        id: "ts-service-col-3",
                        width: "calc(100% / 3)",
                        props: { padding: 12 },
                        elements: [{
                            id: "ts-service-security",
                            type: "ServiceCard",
                            props: {
                                title: "Cybersecurity",
                                description: "Advanced threat detection, endpoint protection, security audits, compliance management, and incident response to keep your data safe.",
                                iconName: "ShieldCheck",
                                accentColor: "#60F21D",
                                backgroundColor: "#ffffff"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // DATA MARQUEE — scrolling stats (unused renderer)
        // ==================================================================
        {
            key: "ts-data-marquee",
            name: "Stats Marquee",
            description: "Scrolling data marquee with key metrics",
            structure: {
                id: "ts-marquee-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#000000",
                    paddingY: 24,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "ts-marquee-col",
                    width: "100%",
                    elements: [{
                        id: "ts-marquee",
                        type: "DataMarquee",
                        props: {
                            items: [
                                { label: "Tickets Resolved", value: "1.2M+" },
                                { label: "Avg Response Time", value: "< 4 min" },
                                { label: "Client Satisfaction", value: "99.4%" },
                                { label: "Uptime Guarantee", value: "99.99%" },
                                { label: "Endpoints Managed", value: "50,000+" },
                                { label: "Security Incidents Blocked", value: "2.8M" }
                            ],
                            speed: 40,
                            textColor: "#ffffff",
                            accentColor: "#60F21D",
                            backgroundColor: "#000000",
                            separator: "●"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // KNOWLEDGE BASE — help articles grid (unused renderer)
        // ==================================================================
        {
            key: "ts-knowledge-base",
            name: "Knowledge Base",
            description: "Grid of self-help knowledge base articles",
            structure: {
                id: "ts-kb-section",
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
                        id: "ts-kb-heading-col",
                        width: "100%",
                        props: { padding: 8, paddingBottom: 32, textAlign: "center" },
                        elements: [
                            {
                                id: "ts-kb-label",
                                type: "Heading",
                                props: {
                                    text: "SELF SERVICE",
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
                                id: "ts-kb-title",
                                type: "Headline",
                                props: {
                                    text: "Knowledge Base",
                                    tag: "h2",
                                    align: "center",
                                    color: "#000000",
                                    fontWeight: "900"
                                }
                            },
                            {
                                id: "ts-kb-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Find answers instantly with our comprehensive library of guides, tutorials, and troubleshooting articles.",
                                    align: "center",
                                    color: "#555555",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-kb-col-1",
                        width: "25%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-kb-1",
                            type: "KnowledgeBase",
                            props: {
                                title: "Setting Up Multi-Factor Authentication",
                                description: "Step-by-step guide to enabling MFA across all your company accounts for enhanced security.",
                                difficulty: "Beginner",
                                views: "12.4k",
                                helpful: "98%",
                                bgColor: "#ffffff",
                                textColor: "#000000"
                            }
                        }]
                    },
                    {
                        id: "ts-kb-col-2",
                        width: "25%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-kb-2",
                            type: "KnowledgeBase",
                            props: {
                                title: "VPN Configuration for Remote Workers",
                                description: "Configure secure VPN access for your remote team with our recommended settings and protocols.",
                                difficulty: "Intermediate",
                                views: "8.7k",
                                helpful: "95%",
                                bgColor: "#ffffff",
                                textColor: "#000000"
                            }
                        }]
                    },
                    {
                        id: "ts-kb-col-3",
                        width: "25%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-kb-3",
                            type: "KnowledgeBase",
                            props: {
                                title: "Email Migration to Microsoft 365",
                                description: "Complete walkthrough for migrating your existing email infrastructure to Microsoft 365 cloud.",
                                difficulty: "Advanced",
                                views: "6.2k",
                                helpful: "92%",
                                bgColor: "#ffffff",
                                textColor: "#000000"
                            }
                        }]
                    },
                    {
                        id: "ts-kb-col-4",
                        width: "25%",
                        props: { padding: 8 },
                        elements: [{
                            id: "ts-kb-4",
                            type: "KnowledgeBase",
                            props: {
                                title: "Network Troubleshooting Checklist",
                                description: "A systematic approach to diagnosing and resolving common network connectivity issues.",
                                difficulty: "Beginner",
                                views: "15.1k",
                                helpful: "97%",
                                bgColor: "#ffffff",
                                textColor: "#000000"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // FAQ / FEATURES SECTION — redesigned with Feature renderer
        // ==================================================================
        {
            key: "ts-faq",
            name: "FAQ Features",
            description: "Support FAQs presented as feature cards",
            structure: {
                id: "ts-faq-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#fafafa",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "ts-faq-col",
                    width: "100%",
                    props: { padding: 0 },
                    elements: [{
                        id: "ts-faq-feature",
                        type: "Feature",
                        props: {
                            badge: "FAQ",
                            heading: "Common Questions",
                            description: "Everything you need to know about NexaSupport's services, response times, and support coverage.",
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARAdxFh5uEonwMZV5QevwIGSuy3RAIqbeiGCQcORULf-CHJDaDKXK9DdNWt2LECdsKGmtBvduFSzQJFA8qz4YliAcRkIqkUU1wK_E5d5ZfMW2Ob0V64g7WC5hR508m5wqA9SYogPNM1qnTp3v_X039Svtf5KcYznxGhlTK2ZGg30fPFdeAjX5y8gmS8zq4u67afdlUKSDsruxTkKK66jn9khQvuG4BBmVoECdSOwTC59-9BWBTqwKLgCEAjS7p2kq-9bYyZ5f5_BI",
                            imageAlt: "NexaSupport team at work",
                            features: [
                                {
                                    icon: "Clock",
                                    title: "24/7 Support Hours",
                                    description: "NexaSupport operates 24/7/365. Our Tier 1 help desk is always available, and our specialized engineers are on-call around the clock for critical issues.",
                                    buttonText: "Learn More",
                                    buttonLink: "/services"
                                },
                                {
                                    icon: "Zap",
                                    title: "Under 4-Min Response",
                                    description: "Our average initial response time is under 4 minutes. Critical (P1) issues receive immediate response with a guaranteed 15-minute escalation.",
                                    buttonText: "View SLA",
                                    buttonLink: "/services"
                                },
                                {
                                    icon: "MapPin",
                                    title: "On-Site & Remote Support",
                                    description: "Most issues are resolved remotely, but our Managed Services plans include scheduled on-site visits and emergency dispatch within 2 hours for critical hardware issues.",
                                    buttonText: "Get Support",
                                    buttonLink: "/contact"
                                },
                                {
                                    icon: "ShieldCheck",
                                    title: "Multi-Industry Compliance",
                                    description: "We serve healthcare, finance, legal, manufacturing, retail, and technology companies with HIPAA, SOC 2, and PCI-DSS certified engineers.",
                                    buttonText: "Read More",
                                    buttonLink: "/about"
                                }
                            ],
                            accentColor: "#60F21D",
                            headingColor: "#000000",
                            descriptionColor: "#555555",
                            badgeColor: "#8100B8",
                            cardBgColor: "#60F21D",
                            cardTitleColor: "#000000",
                            cardDescColor: "#1a1a2e",
                            buttonBg: "#000000",
                            buttonTextColor: "#ffffff",
                            buttonBorderRadius: 12,
                            imageBorderRadius: 16,
                            iconBgColor: "#000000",
                            iconColor: "#60F21D",
                            accentBarColor: "#60F21D",
                            backgroundColor: "#fafafa"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // CTA SECTION — dark CTA with accent green
        // ==================================================================
        {
            key: "ts-cta",
            name: "Call to Action",
            description: "Dark CTA section encouraging contact",
            structure: {
                id: "ts-cta-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 60,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "ts-cta-col",
                    width: "100%",
                    props: {
                        padding: 60,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#000000",
                        borderRadius: 40,
                        gap: 24
                    },
                    elements: [
                        {
                            id: "ts-cta-title",
                            type: "Headline",
                            props: {
                                text: "Ready to Eliminate IT Headaches?",
                                tag: "h2",
                                align: "center",
                                color: "#ffffff",
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "ts-cta-desc",
                            type: "Paragraph",
                            props: {
                                text: "Join 500+ businesses that trust NexaSupport for their mission-critical IT infrastructure. Get a free consultation today.",
                                align: "center",
                                color: "#999999",
                                size: "lg"
                            }
                        },
                        {
                            id: "ts-cta-btns",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Schedule Consultation",
                                secondaryText: "Call Us Now",
                                primaryBg: "#60F21D",
                                primaryColor: "#000000",
                                primaryLink: "/contact",
                                secondaryBg: "rgba(255,255,255,0.1)",
                                secondaryColor: "#ffffff",
                                secondaryLink: "/contact",
                                justifyContent: "center"
                            }
                        }
                    ]
                }]
            }
        }
    ]
};

module.exports = techSupportHome;
