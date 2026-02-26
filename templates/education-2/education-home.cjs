/**
 * Education Template - Home Page
 * Theme: EduPremium - Elite, High-Contrast, Brutalist.
 * Visuals: International Orange (#FF4500), Black, White, Sharp Edges.
 */

const educationHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "education-header",
        name: "Education Header",
        structure: {
            type: "Navbar",
            defaultProps: {
                sticky: true,
                backgroundColor: "#ffffff",
                paddingY: 0,
                paddingX: 0,
                showBorder: true,
                borderColor: "#000000",
                height: "80px"
            },
            props: {
                logo: {
                    text: "EDUPREMIUM",
                    logoColor: "#000000",
                    fontWeight: "black",
                    letterSpacing: "tighter",
                    className: "uppercase text-xl"
                },
                links: [
                    { label: "EXPERTISE", href: "#expertise", className: "text-xs font-bold uppercase tracking-widest hover:text-[#FF4500]" },
                    { label: "PROGRAMS", href: "#programs", className: "text-xs font-bold uppercase tracking-widest hover:text-[#FF4500]" },
                    { label: "TESTIMONIALS", href: "#testimonials", className: "text-xs font-bold uppercase tracking-widest hover:text-[#FF4500]" }
                ],
                ctaButton: {
                    text: "ENROLL NOW",
                    href: "/contact",
                    variant: "primary",
                    backgroundColor: "#000000",
                    textColor: "#ffffff",
                    borderRadius: 0,
                    height: "80px",
                    className: "px-8 text-xs font-bold uppercase tracking-widest hover:bg-[#FF4500] transition-all"
                }
            }
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
            key: "education-hero",
            name: "Hero Banner",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundImage: "https://img.freepik.com/free-photo/harvard-university-cambridge-usa_1268-14363.jpg?semt=ais_hybrid&w=740&q=80",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOverlay: "rgba(0, 0, 0, 0.77)",
                    paddingY: 120,
                    paddingX: 40,
                    fullWidth: true,
                    minHeight: "600px",
                    className: "relative"
                },
                columns: [{
                    id: "edu-hero-col",
                    width: "100%",
                    elements: [
                        {
                            type: "Headline",
                            props: {
                                text: "WE CRAFT YOUR\n [LEGACY](linear-gradient(90deg, #FF4500, #ff8c00ff)",
                                tag: "h1",
                                size: "6xl",
                                align: "center",
                                color: "#ffffff"
                            }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "A premium institution dedicated to the pursuit of knowledge, architectural preservation, and the cultivation of future global leaders.",
                                size: "2xl",
                                align: "center",
                                color: "#ffffff",
                                marginTop: 25,
                                className: "max-w-[800px] opacity-90"
                            }
                        },
                        {
                            type: "Spacer", props: { height: "md" }
                        },
                        {
                            type: "ButtonGroup",
                            props: {
                                layout: "flex-wrap",
                                justifyContent: "center",
                                alignItems: "center",
                                primaryText: "Inquire Now",
                                primaryLink: "/contact",
                                primaryBg: "#FF4500",
                                primaryColor: "#ffffff",
                                secondaryText: "Our Campus",
                                secondaryLink: "/courses",
                                secondaryBg: "#ffffff",
                                secondaryColor: "#000000",
                                showPrimaryIcon: true,
                                showSecondaryIcon: false
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // EXPERTISE SECTION
        // --------------------------------------------------------------------------
        {
            key: "tech-services",
            name: "Services Section",
            description: "Four service cards with icons and features",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#000",
                    darkBackgroundColor: "#0F0F0F",
                    paddingY: 96,
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
                    // Services Header
                    {
                        id: "tech-services-header",
                        width: "100%",
                        props: {
                            textAlign: "center",
                            marginBottom: 16,
                            maxWidth: "800px",
                        },
                        elements: [
                            {
                                id: "tech-services-title",
                                type: "Headline",
                            props: {
                                text: "Our [Achievements](linear-gradient(90deg, #FF4500, #ff8c00ff)",
                                tag: "h6",
                                size: "2xl",
                                align: "center",
                                color: "#ffffff"
                            }
                            },
                            {
                                id: "tech-services-subtitle",
                                type: "Paragraph",
                            props: {
                                text: "A premium institution dedicated to the pursuit of knowledge, architectural preservation, and the cultivation of future global leaders.",
                                size: "2xl",
                                align: "center",
                                color: "#ffffff",
                                marginTop: 25,
                                className: "max-w-[800px] opacity-90"
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
                        borderRadius: 12,
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
                                    iconBg: "#FF4500",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#000000",
                                    accentColor: "#FF4500",
                                    showLink: false,
                                    style: "card",
                                    align: "center",
                                    borderRadius: 14,
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
                                    title: "Cybersecurity",
                                    description: "Comprehensive security assessments and compliance frameworks to protect your enterprise data.",
                                    iconColor: "#ffffff",
                                    iconBg: "#FF4500",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#000000",
                                    accentColor: "#FF4500",
                                    showLink: false,
                                    style: "card",
                                    align: "center",
                                    borderRadius: 14,
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
                                    iconBg: "#FF4500",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#000000",
                                    accentColor: "#FF4500",
                                    showLink: false,
                                    style: "card",
                                    align: "center",
                                    borderRadius: 14,
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
                                    iconBg: "#FF4500",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#000000",
                                    accentColor: "#FF4500",
                                    showLink: false,
                                    style: "card",
                                    align: "center",
                                    borderRadius: 14,
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
        },

        // --------------------------------------------------------------------------
        // FEATURED PROGRAMS
        // --------------------------------------------------------------------------
        {
            key: "sustainability-roadmap-section",
            name: "Sustainability Roadmap",
            structure: {
                id: "roadmap-section-wrapper",
                type: "Section",
                props: {
                    backgroundColor: "#000000ff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "roadmap-col",
                    width: "100%",
                    elements: [{
                        id: "roadmap-section",
                        type: "TimelineSection",
                        props: {
                            title: "Our Roadmap",
                            subtitle: "Our strategic vision for a regenerative future, outlined through measurable milestones.",
                            backgroundColor: "#000",
                            textColor: "#FF4500",
                            subtitleColor: "#64748b",
                            milestones: [
                                {
                                    year: "2024",
                                    title: "Regenerative Shift",
                                    description: "Implementation of no-till practices across 80% of partner farms to enhance soil carbon sequestration.",
                                    color: "#FF4500",
                                    image: "https://dravidianuniversity.ac.in/treasury/landing/images/library.jpg",
                                    imageAlt: "Microscopic view of healthy soil nutrients"
                                },
                                {
                                    year: "2026",
                                    title: "Net Zero Operations",
                                    description: "Transitioning all regional distribution centers to 100% renewable solar and wind energy sources.",
                                    color: "#FF4500",
                                    image: "https://www.collinsdictionary.com/images/full/university_304402367.jpg",
                                    imageAlt: "Vast solar panel farm in rural landscape"
                                },
                                {
                                    year: "2030",
                                    title: "Global Restoration",
                                    description: "Achieving our goal of restoring 5 million hectares of degraded land into productive, biodiverse ecosystems.",
                                    color: "#FF4500",
                                    image: "https://www.immerse.education/wp-content/uploads/2022/01/Article-Images-11-scaled-1.png",
                                    imageAlt: "Lush reforestation area with young trees"
                                }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // TESTIMONIALS SECTION
        // --------------------------------------------------------------------------
        {
            key: "careplus-programs-grid",
            name: "Clinical Programs",
            description: "3-column grid of program cards with features",
            structure: {
                type: "Section",
                defaultProps: {
                    title: "Testimonials",
                    description: "What our patients say about our care programs",
                    textColor: "#FF4500",
                    titleColor: "#FFFFFF",
                    descriptionColor: "#FFFFFF",
                    backgroundColor: "#000000ff",
                    paddingY: 80,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    // Section Header
                    {
                        id: "programs-header-col",
                        width: "100%",
                        props: {
                            textAlign: "center",
                            marginBottom: 48,
                            maxWidth: "800px",
                        },
                        elements: [
                            {
                                id: "programs-title",
                                type: "Headline",
                                props: {
                                    text: "Our [Testimonials](linear-gradient(90deg, #FF4500, #ff8c00ff)",
                                    tag: "h2",
                                    size: "2xl",
                                    align: "center",
                                    color: "#ffffff"
                                }
                            },
                            {
                                id: "programs-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Specialized programs designed to transform lives through evidence-based protocols and personalized care.",
                                    size: "xl",
                                    align: "center",
                                    color: "#ffffff",
                                    marginTop: 16,
                                    className: "max-w-[700px] opacity-80"
                                }
                            }
                        ]
                    },
                    // Programs Grid
                    {
                        id: "programs-grid-col",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            // Program Card 1: Diabetes Reversal
                            {
                                id: "program-diabetes",
                                type: "ServiceCard",
                                props: {
                                    icon: "Star",
                                    align: "center",
                                    title: "Diabetes Reversal",
                                    description: "A comprehensive clinical protocol aimed at restoring insulin sensitivity and eliminating medication dependency.",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#0F172A",
                                    accentColor: "#FF4500",
                                    borderRadius: "16",
                                    shadow: "sm",
                                    showLink: false
                                }
                            },
                            // Program Card 2: Cardiac Wellness
                            {
                                id: "program-cardiac",
                                type: "ServiceCard",
                                props: {
                                    icon: "Star",
                                    align: "center",
                                    title: "Cardiac Wellness",
                                    description: "Advanced cardiovascular care focused on inflammation reduction and plaque stabilization for longevity.",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#0F172A",
                                    accentColor: "#FF4500",
                                    borderRadius: "16",
                                    shadow: "sm",
                                    showLink: false
                                }
                            },
                            // Program Card 3: Longevity & Vitality
                            {
                                id: "program-longevity",
                                type: "ServiceCard",
                                props: {
                                    icon: "Star",
                                    align: "center",
                                    title: "Longevity & Vitality",
                                    description: "Optimizing metabolic health and hormonal balance to enhance quality of life and healthspan.",
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#0F172A",
                                    accentColor: "#FF4500",
                                    borderRadius: "16",
                                    shadow: "sm",
                                    showLink: false
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // FINAL CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "careplus-programs-cta",
            name: "Programs CTA",
            description: "Full-width CTA with gradient background",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ff4500",
                    paddingY: 64,
                    paddingX: 48,
                    fullWidth: false,
                    // borderRadius: 32,
                    maxWidth: "900px",
                    margin: "0 auto 96px auto"
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
                                text: "Start Your Journey Today",
                                tag: "h2",
                                align: "center",
                                color: "#FFFFFF",
                                size: "3xl",
                                fontWeight: "bold"
                            }
                        },
                        {
                            id: "cta-description",
                            type: "Paragraph",
                            props: {
                                text: "Take the first step towards a healthier, longer life. Schedule your free discovery call with our clinical team.",
                                align: "center",
                                color: "rgba(255,255,255,0.8)",
                                size: "md"
                            }
                        },
                        {
                            id: "cta-buttons",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Schedule Discovery Call",
                                primaryBg: "#000000ff",
                                primaryTextColor: "#000000ff",
                                primaryBorderRadius: 24,
                                secondaryText: "View Success Stories",
                                secondaryBg: "#ffffff",
                                secondaryTextColor: "#000000ff",
                                secondaryBorder: "1px solid #ffffff",
                                secondaryBorderRadius: 24,
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
        key: "careplus-footer",
        type: "Footer",
        category: "footer",
        name: "CarePlus Footer",
        description: "Dark footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#000000ff", // Slate 900
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
                                color: "#ff4500",
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
                                hoverColor: "#ff4500",
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
                                buttonBg: "#ff4500",
                                buttonTextColor: "#ffffff",
                                inputBg: "#ffffffff",
                                description: "Stay updated with latest health insights.",
                                descriptionColor: "#ffffffff"
                            }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = educationHome;
