/**
 * CarePlus Template - Hospital Home Page
 * Theme: Modern Healthcare / Medical / Hospital
 * Primary Color: #008080 (Teal)
 * Secondary Color: #004D4D
 * Background: #FFFFFF / #0F172A
 * Fonts: Plus Jakarta Sans (Headings), Inter (Body)
 */

const careplusHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "careplus-header",
        type: "Navbar",
        category: "header",
        name: "CarePlus Header",
        description: "Medical header with portal button",
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
                    id: "careplus-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "both",
                        logoText: "CAREPLUS",
                        logoIcon: "MedicalServices", // closest material/lucide match
                        // logoAccent: "#008080",
                        logoTextColor: "#008080",
                        accentColor: "#008080",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        linkColor: "#0F172A",
                        linkHoverColor: "#008080",
                        links: [
                            { label: "Our Approach", href: "#approach" },
                            { label: "Specialties", href: "#specialties" },
                            { label: "Patient Stories", href: "#stories" },
                            { label: "Resources", href: "#resources" }
                        ],
                        showButton: true,
                        buttonText: "Patient Portal",
                        buttonLink: "#portal",
                        buttonRadius: "full",
                        buttonStyle: "solid", // primary
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
            key: "careplus-hero",
            name: "CarePlus Hero",
            description: "Hero with background image overlay",
            structure: {
                type: "Hero", // Using Hero renderer for easy background/layout management
                defaultProps: {
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_37k3cfK9_dRaGIKBJhKovIKmLOkygPwKIUtcmogEI6eyXKIhVG5c7uonqCxXTYy3vEpljcv1Ku9jV-dDJnx2jy5B6ZMuzKfRpX6SXctk73s2Yw39OjvsNiE3j32lmZZ-gEzr0NabhTmK5GYRpqOlMraU_nfIaVbT0gQeA2TuNU7K9LWLtqSyK3L0NBNUTyLs04KsNzV6VyCx280tIt1FPyus7lI_sM-tqgWHXD8Ap47qCpNbt2DBG-WqmZriR3qd0mIszJJWOg",
                    backgroundOverlay: "rgba(255,255,255,0.8)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: "90vh",
                    paddingY: 120,
                    paddingX: 80,
                    alignItems: "flex-start", // Left align content
                    layout: "flex" // Single column layout for content
                },
                columns: [{
                    id: "hero-content-col",
                    width: "100%",
                    elements: [
                        {
                            id: "hero-badge",
                            type: "Badge",
                            props: {
                                text: "Verified World Class Medical Care",
                                color: "#008080",
                                bgColor: "rgba(0, 128, 128, 0.1)",
                                icon: "VerifiedUser",
                                showPing: false,
                                borderRadius: "full"
                            }
                        },
                        {
                            id: "hero-headline",
                            type: "Headline",
                            props: {
                                text: "Redefining Your [Health Journey](linear-gradient(90deg, #008080, #004D4D)",
                                tag: "h2",
                                align: "left",
                                color: "#0F172A",
                                size: "6xl"
                            }
                        },
                        {
                            id: "hero-description",
                            type: "Paragraph",
                            props: {
                                text: "Experience a revolutionary approach to wellness that combines clinical excellence with personalized attention. We don't just treat symptoms; we empower your vitality.",
                                align: "left",
                                color: "#475569",
                                size: "xl",
                                maxWidth: "600px"
                            }
                        },
                        {
                            id: "hero-buttons",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Book Appointment",
                                primaryBg: "#008080",
                                primaryTextColor: "#ffffff",
                                primaryBorderRadius: "full",
                                secondaryText: "Our Approach",
                                secondaryBg: "#ffffff",
                                secondaryTextColor: "#0F172A",
                                secondaryBorderColor: "#E2E8F0",
                                secondaryBorderRadius: "full",
                                secondaryIcon: "PlayCircle",
                                gap: "gap-4",
                                layout: "horizontal",
                                marginTop: "32px"
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // STATS BAR
        // --------------------------------------------------------------------------
        {
            key: "careplus-stats",
            name: "Key Metrics",
            description: "Teal stats bar",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#008080",
                    paddingY: 48,
                    paddingX: 80,
                    fullWidth: true,
                    layout: "grid",
                    columns: 4,
                    gap: 32
                },
                columns: [
                    {
                        id: "stat-1",
                        width: "25%",
                        elements: [{
                            id: "stat-success",
                            type: "Stats",
                            props: {
                                number: "99.2%",
                                label: "Success Rate",
                                textColor: "#ffffff",
                                secondaryTextColor: "rgba(255, 255, 255, 0.8)",
                                align: "center"
                            }
                        }]
                    },
                    {
                        id: "stat-2",
                        width: "25%",
                        elements: [{
                            id: "stat-patients",
                            type: "Stats",
                            props: {
                                number: "24k+",
                                label: "Patients Satisfied",
                                textColor: "#ffffff",
                                secondaryTextColor: "rgba(255, 255, 255, 0.8)",
                                align: "center"
                            }
                        }]
                    },
                    {
                        id: "stat-3",
                        width: "25%",
                        elements: [{
                            id: "stat-consults",
                            type: "Stats",
                            props: {
                                number: "150+",
                                label: "Digital Consults Daily",
                                textColor: "#ffffff",
                                secondaryTextColor: "rgba(255, 255, 255, 0.8)",
                                align: "center"
                            }
                        }]
                    },
                    {
                        id: "stat-4",
                        width: "25%",
                        elements: [{
                            id: "stat-awards",
                            type: "Stats",
                            props: {
                                number: "12+",
                                label: "Global Awards",
                                textColor: "#ffffff",
                                secondaryTextColor: "rgba(255, 255, 255, 0.8)",
                                align: "center"
                            }
                        }]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // COMPARISON SECTION
        // --------------------------------------------------------------------------
        {
            key: "careplus-comparison",
            name: "Comparison",
            description: "Traditional vs CarePlus model",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F0F9F9",
                    paddingY: 96,
                    paddingX: 80,
                    maxWidth: "1280px",
                    layout: "flex",
                    flexDirection: "column",
                    gap: 64
                },
                columns: [
                    // Header
                    {
                        id: "comp-header-col",
                        width: "100%",
                        elements: [
                            {
                                id: "comp-heading",
                                type: "Heading",
                                props: {
                                    text: "A Choice For Your Future",
                                    tag: "h2",
                                    align: "center",
                                    color: "#0F172A",
                                    fontWeight: "bold"
                                }
                            },
                            {
                                id: "comp-desc",
                                type: "Paragraph",
                                props: {
                                    text: "See why patients are switching from traditional models to the CarePlus experience.",
                                    align: "center",
                                    color: "#475569",
                                    maxWidth: "600px",
                                    marginTop: "16px"
                                }
                            }
                        ]
                    },
                    // Grid
                    {
                        id: "comp-grid-col",
                        width: "100%",
                        layout: "grid",
                        columns: 2,
                        gap: 32,
                        elements: [
                            // Traditional Card
                            {
                                id: "comp-traditional",
                                type: "ComparisonCard",
                                props: {
                                    title: "Traditional Care Models",
                                    titleColor: "#64748B",
                                    backgroundColor: "#ffffff",
                                    padding: "40px",
                                    borderRadius: 24,
                                    shadow: "sm",
                                    borderTopWidth: 4,
                                    borderTopColor: "#EF4444", // Red
                                    features: [
                                        {
                                            icon: "XCircle",
                                            iconColor: "#EF4444",
                                            title: "Reactive Treatment",
                                            description: "Waiting for symptoms before addressing health concerns."
                                        },
                                        {
                                            icon: "XCircle",
                                            iconColor: "#EF4444",
                                            title: "Short Consultation Times",
                                            description: "Average of 7 minutes spent per patient visit."
                                        },
                                        {
                                            icon: "XCircle",
                                            iconColor: "#EF4444",
                                            title: "Fragmented Records",
                                            description: "Data siloed across multiple clinics and platforms."
                                        }
                                    ]
                                }
                            },
                            // CarePlus Card
                            {
                                id: "comp-careplus",
                                type: "ComparisonCard",
                                props: {
                                    title: "The CarePlus Model",
                                    titleColor: "#008080",
                                    backgroundColor: "#ffffff",
                                    padding: "40px",
                                    borderRadius: 24,
                                    shadow: "xl",
                                    borderTopWidth: 4,
                                    borderTopColor: "#008080", // Teal primary
                                    features: [
                                        {
                                            icon: "CheckCircle",
                                            iconColor: "#008080",
                                            title: "Predictive & Preventative",
                                            description: "Early intervention using genetic and data screening."
                                        },
                                        {
                                            icon: "CheckCircle",
                                            iconColor: "#008080",
                                            title: "Extended Care Windows",
                                            description: "Comprehensive appointments with dedicated health coaches."
                                        },
                                        {
                                            icon: "CheckCircle",
                                            iconColor: "#008080",
                                            title: "Unified Health Cloud",
                                            description: "One secure dashboard for all your health data and labs."
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
        // CORE PROGRAMS
        // --------------------------------------------------------------------------
        {
            key: "careplus-programs",
            name: "Core Programs",
            description: "Service cards",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 80,
                    maxWidth: "1280px",
                    layout: "flex",
                    flexDirection: "column",
                    gap: 64
                },
                columns: [
                    {
                        id: "programs-header",
                        width: "100%",
                        elements: [
                            {
                                id: "prog-title",
                                type: "Heading",
                                props: {
                                    text: "Our Core Programs",
                                    tag: "h2",
                                    align: "center",
                                    color: "#0F172A",
                                    fontWeight: "bold"
                                }
                            },
                            {
                                id: "prog-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Tailored solutions for every stage of your life.",
                                    align: "center",
                                    color: "#475569",
                                    marginTop: "16px"
                                }
                            }
                        ]
                    },
                    {
                        id: "programs-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                id: "prog-1",
                                type: "ServiceCard",
                                props: {
                                    icon: "Heart",
                                    iconColor: "#008080",
                                    iconBg: "#F0F9F9",
                                    title: "Preventative Care",
                                    description: "Comprehensive wellness screenings and lifestyle protocols designed to catch issues before they arise.",
                                    showLink: true,
                                    linkText: "Learn More",
                                    linkHref: "#",
                                    align: "left",
                                    style: "card"
                                }
                            },
                            {
                                id: "prog-2",
                                type: "ServiceCard",
                                props: {
                                    icon: "TestTube", // Biotech map
                                    iconColor: "#008080",
                                    iconBg: "#F0F9F9",
                                    title: "Diagnostic Excellence",
                                    description: "Advanced imaging and metabolic testing using state-of-the-art laboratory technology and AI analysis.",
                                    showLink: true,
                                    linkText: "Learn More",
                                    linkHref: "#",
                                    align: "left",
                                    style: "card"
                                }
                            },
                            {
                                id: "prog-3",
                                type: "ServiceCard",
                                props: {
                                    icon: "Laptop", // Devices/Digital map
                                    iconColor: "#008080",
                                    iconBg: "#F0F9F9",
                                    title: "Digital Health",
                                    description: "Seamless telehealth, remote monitoring, and real-time health tracking through our patient ecosystem.",
                                    showLink: true,
                                    linkText: "Learn More",
                                    linkHref: "#",
                                    align: "left",
                                    style: "card"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // 8-PILLAR APPROACH
        // --------------------------------------------------------------------------
        // Implementation Note: The circular CSS diagram is replaced by a representative image/placeholder
        // to ensure builder compatibility without custom renderers.
        {
            key: "careplus-approach",
            name: "8-Pillar Approach",
            description: "Approach section",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F8FAFC",
                    paddingY: 96,
                    paddingX: 80,
                    maxWidth: "1280px",
                    layout: "grid",
                    columns: 2,
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "approach-text",
                        width: "50%",
                        elements: [
                            {
                                id: "appr-title",
                                type: "Heading",
                                props: {
                                    text: "The CarePlus 8-Pillar Approach",
                                    tag: "h2",
                                    color: "#0F172A",
                                    marginBottom: "24px",
                                    fontWeight: "bold"
                                }
                            },
                            {
                                id: "appr-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Our proprietary methodology addresses health through a holistic 360-degree lens, ensuring no aspect of your wellbeing is overlooked.",
                                    color: "#475569",
                                    marginBottom: "32px",
                                    size: "lg"
                                }
                            },
                            {
                                id: "appr-list-1",
                                type: "Box", // Simple list item styling
                                props: {
                                    backgroundColor: "#ffffff",
                                    padding: "16px",
                                    borderRadius: "12px",
                                    shadow: "sm",
                                    marginBottom: "16px",
                                    display: "flex", // Note: Box renderer might not support display props directly, falling back to simple box
                                    className: "flex items-center gap-4" // Tailwind if passed mostly works
                                },
                                elements: [
                                    {
                                        id: "appr-item-1",
                                        type: "Heading",
                                        props: {
                                            text: "1. Metabolic Balance",
                                            tag: "h6",
                                            color: "#0F172A",
                                            margin: "0" // Remove default margin
                                        }
                                    }
                                ]
                            },
                            {
                                id: "appr-list-2",
                                type: "Box",
                                props: {
                                    backgroundColor: "#ffffff",
                                    padding: "16px",
                                    borderRadius: "12px",
                                    shadow: "sm",
                                    marginBottom: "16px"
                                },
                                elements: [
                                    {
                                        id: "appr-item-2",
                                        type: "Heading",
                                        props: {
                                            text: "2. Neurological Resilience",
                                            tag: "h6",
                                            color: "#0F172A",
                                            margin: "0"
                                        }
                                    }
                                ]
                            },
                            {
                                id: "appr-list-3",
                                type: "Box",
                                props: {
                                    backgroundColor: "#ffffff",
                                    padding: "16px",
                                    borderRadius: "12px",
                                    shadow: "sm"
                                },
                                elements: [
                                    {
                                        id: "appr-item-3",
                                        type: "Heading",
                                        props: {
                                            text: "3. Cellular Regeneration",
                                            tag: "h6",
                                            color: "#0F172A",
                                            margin: "0"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "approach-image",
                        width: "50%",
                        elements: [
                            // Using a placeholder image for the circular diagram
                            {
                                id: "diagram-img",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9y3H9rB8c3WjQ2V5Xz7pM4nL6Kq1T8sR9vU0YxW3Z_A2bC5dE4fG7hI1jJkL9mN8oO6pP3qR5sT2uV1wXyZ4aB7cD9eF8gH0iK3lM6nO9pQ2rS5tU8vW4xY1zC7bE3fH6gI9jJ2kL5mN8oO6pP3qR5sT2uV1wXyZ4aB7cD9eF8gH0iK3lM6nO9pQ2rS5tU8vW4xY1zC7bE3fH6gI9jJ2kL5mN8oO6pP3qR5sT2u", // Generic placeholder or we use a related medical diagram
                                    alt: "8-Pillar Approach Diagram",
                                    aspectRatio: "1/1",
                                    objectFit: "contain"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // PATIENT STORIES
        // --------------------------------------------------------------------------
        {
            key: "careplus-stories",
            name: "Success Stories",
            description: "Testimonials",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 80,
                    maxWidth: "1280px",
                    layout: "flex",
                    flexDirection: "column",
                    gap: 64
                },
                columns: [
                    {
                        id: "stories-header",
                        width: "100%",
                        elements: [
                            {
                                id: "st-title",
                                type: "Heading",
                                props: {
                                    text: "Patient Success Stories",
                                    tag: "h2",
                                    align: "center",
                                    color: "#0F172A",
                                    fontWeight: "bold"
                                }
                            },
                            {
                                id: "st-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Real journeys from our CarePlus community.",
                                    align: "center",
                                    color: "#475569",
                                    marginTop: "16px"
                                }
                            }
                        ]
                    },
                    {
                        id: "stories-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 2,
                        gap: 32,
                        elements: [
                            {
                                id: "story-1",
                                type: "Testimonial", // Standard Testimonial
                                props: {
                                    quote: "After years of struggling with chronic fatigue, CarePlus's diagnostic team finally found the root cause. I have my life back.",
                                    author: "Sarah J.",
                                    role: "Age 42",
                                    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgmuLcbcJO7nG0H8LZUWxh4kdZGqD_9rW0xsiobpzHJCPbg4Kgw504pCPgBxeU1tc4DQAiTlYMESNSbOEQ_heQUasOeRD5_fksFvJsYC56b3XiVidgVDrb4LakKEQmHjrHHVMBeWu1Ol6Wbw4ZRDPTOKqCx1kK19t0VuLfQDYveIXAPkxRiE2qCV2UfPdAIxVQpxxc26AJ7CchxdxIRVJmZwZ0b4nV5HEd73AvRJNn67lOnMl4N31oA99NjrNPQl8rvW_Amz-BUQ",
                                    rating: 5,
                                    starColor: "#008080",
                                    backgroundColor: "#ffffff",
                                    boxShadow: "sm",
                                    borderColor: "#F1F5F9"
                                }
                            },
                            {
                                id: "story-2",
                                type: "Testimonial",
                                props: {
                                    quote: "The digital health dashboard makes managing my vitals so simple. I feel more in control of my health than ever before.",
                                    author: "Mark T.",
                                    role: "Age 55",
                                    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1EDXtXVP-Mkem6QHbYkqH2jVfIwMTdSmpe8rMo9Pmv3ArYhzwxipeJj2Pfe3UledC2nXOYozZVgL1ktOlaipojQO0_XTSfkybfyDcvJwTZGP_NGlK5WekhAD_RbBrqdscHygryYINFArBsrhoFWRtN1aOXoqvseB3UaiE0_92qUDeP_OXJ-Q3a75Bps3TgE1cEIVVfDXFrgerroXWODSvjgZNRuYV1ujnkfM_1qfrC4aDuMMTbTxp2Wy0B7twntRLfJC8ga35qQ",
                                    rating: 5,
                                    starColor: "#008080",
                                    backgroundColor: "#ffffff",
                                    boxShadow: "sm",
                                    borderColor: "#F1F5F9"
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
        key: "careplus-footer",
        type: "Footer",
        category: "footer",
        name: "CarePlus Footer",
        description: "Dark footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#0F172A", // Slate 900
                paddingY: 80,
                paddingX: 80,
                fullWidth: true
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "50%", // 2 cols span
                    elements: [
                        {
                            id: "footer-logo",
                            type: "Heading",
                            props: {
                                text: "CAREPLUS",
                                tag: "h4",
                                color: "#ffffff",
                                marginBottom: "24px"
                            }
                        },
                        {
                            id: "footer-desc",
                            type: "Paragraph",
                            props: {
                                text: "Redefining modern healthcare through technology, empathy, and evidence-based protocols. Join the future of wellness.",
                                color: "#94A3B8", // Slate 400
                                maxWidth: "400px",
                                marginBottom: "32px"
                            }
                        },
                        {
                            id: "footer-social",
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "facebook", url: "#" },
                                    { platform: "instagram", url: "#" }, // Mapping camera_alt
                                    { platform: "twitter", url: "#" } // Mapping public/web
                                ],
                                iconColor: "#ffffff",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-services",
                    width: "25%",
                    elements: [
                        {
                            id: "links-services",
                            type: "LinkList",
                            props: {
                                title: "Services",
                                titleColor: "#ffffff",
                                textColor: "#94A3B8",
                                hoverColor: "#008080",
                                items: [
                                    { label: "Diagnostics", href: "#" },
                                    { label: "Preventative Care", href: "#" },
                                    { label: "Digital Health", href: "#" },
                                    { label: "Lab Results", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-newsletter",
                    width: "25%",
                    elements: [
                        {
                            id: "news-signup",
                            type: "NewsletterSignup",
                            props: {
                                title: "Newsletter",
                                titleColor: "#ffffff",
                                placeholder: "Your Email",
                                buttonText: "Send",
                                buttonBg: "#008080",
                                buttonTextColor: "#ffffff",
                                inputBg: "#1E293B",
                                description: "Stay updated with latest health insights.",
                                descriptionColor: "#94A3B8"
                            }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = careplusHome;
