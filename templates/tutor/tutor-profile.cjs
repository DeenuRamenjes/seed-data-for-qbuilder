const tutorProfile = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "tutor-header",
        name: "Tutor Header",
        structure: {
            type: "Navbar",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                showBorder: true,
                borderColor: "rgba(0, 156, 118, 0.1)",
                height: "80px",
                className: "backdrop-blur-md z-50 fixed top-0 w-full"
            },
            props: {
                logo: {
                    text: "V&V ACADEMY",
                    logoColor: "#009C76",
                    fontWeight: "black",
                    letterSpacing: "tighter",
                    className: "italic text-2xl flex items-center gap-2"
                },
                links: [
                    { label: "Mission", href: "#mission", className: "text-sm font-bold uppercase tracking-widest hover:text-[#009C76] transition-colors" },
                    { label: "Services", href: "#services", className: "text-sm font-bold uppercase tracking-widest hover:text-[#009C76] transition-colors" },
                    { label: "Results", href: "#results", className: "text-sm font-bold uppercase tracking-widest hover:text-[#009C76] transition-colors" },
                    { label: "Contact", href: "#contact", className: "text-sm font-bold uppercase tracking-widest hover:text-[#009C76] transition-colors" }
                ],
                ctaButton: {
                    text: "JOIN NOW",
                    href: "#contact",
                    variant: "primary",
                    backgroundColor: "#009C76",
                    textColor: "#ffffff",
                    borderRadius: "0px",
                    height: "44px",
                    className: "px-8 font-bold uppercase tracking-widest text-sm hover:bg-[#005E4E] transition-all"
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
            key: "tutor-hero",
            name: "Tutor Hero",
            structure: {
                type: "PolygonHero",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    minHeight: "90vh"
                },
                props: {
                    heading1: "ACADEMIC",
                    heading2: "EVOLUTION",
                    description: "High-energy academic coaching designed to accelerate your results and redefine your intellectual limits. Transform your potential into performance.",
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkMYsmRVuPAsEBfSye-4o6yB48RIRIqF5tmm_1p4AQeb0CR0vx_d4hx1Dj0AhNZjAv2IOHmYXhteH0zyxsdz4wObh75WSG_b9PaB7AXOSh47R77fus_xMuH5SaOu1huM-wjrexiwuRlAcqyvHrrN5okUaKu4TJIzS0h2M-_TqgRqQXBM7UFDAVsHpKlPFjT_p2rYfE_0CX387V4HX4qtBPDIEj48AonAhO9QdBP8_rV3x5GDiXYwcbIowt0f75uW7Z2XAlbUZpM28s",
                    primaryButtonText: "START NOW",
                    primaryButtonLink: "#contact",
                    secondaryButtonText: "EXPLORE MISSION",
                    secondaryButtonLink: "#mission",
                    primaryColor: "#009C76",
                    secondaryColor: "#60FF54",
                    textColor: "#005E4E"
                }
            }
        },

        // --------------------------------------------------------------------------
        // DATA MARQUEE
        // --------------------------------------------------------------------------
        {
            key: "tutor-marquee",
            name: "Stats Marquee",
            structure: {
                id: "tutor-marquee-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#005E4E",
                    paddingY: 24,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "tutor-marquee-col",
                    width: "100%",
                    props: { padding: 0 },
                    elements: [{
                        id: "tutor-data-marquee",
                        type: "DataMarquee",
                        props: {
                            items: [
                                { label: "Students Transformed", value: "500+" },
                                { label: "Success Rate", value: "98%" },
                                { label: "Years Experience", value: "15+" },
                                { label: "Average Grade", value: "A*" },
                                { label: "Top University Placements", value: "150+" }
                            ],
                            speed: 40,
                            textColor: "#ffffff",
                            accentColor: "#60FF54",
                            backgroundColor: "#005E4E",
                            separator: "✦"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PHILOSOPHY SECTION
        // --------------------------------------------------------------------------
        {
            key: "tutor-philosophy",
            name: "Philosophy",
            structure: {
                type: "ModernMission",
                props: {
                    title: "BEYOND THE TEXTBOOK",
                    description: "We don't just solve problems; we build potential. V&V Academy was born from a passion for data-driven academic performance and explosive intellectual growth. Whether you're a student or a lifelong learner, we build the engine that drives your success.",
                    mainImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
                    statValue: "15+",
                    statLabel: "YEARS OF ACADEMIC EXCELLENCE & STUDENT PERFORMANCE",
                    features: [
                        {
                            icon: "Database",
                            title: "Data-Driven Approach",
                            description: "Strategic methodology powered by performance analytics and neuro-learning metrics."
                        },
                        {
                            icon: "Brain",
                            title: "Intellectual Explosion",
                            description: "Accelerated learning techniques designed to maximize cognitive throughput and retention."
                        }
                    ],
                    backgroundColor: "#005E4E", // Deep Green
                    accentColor: "#60FF54", // Neon Green
                    textColor: "#ffffff"
                }
            },
            id: "mission"
        },

        // --------------------------------------------------------------------------
        // SERVICES GRID
        // --------------------------------------------------------------------------
        {
            key: "tutor-services",
            name: "Services",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f9fafb",
                    paddingY: 30,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "services-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "OUR LEARNING PROTOCOLS",
                                    tag: "h2",
                                    size: "4xl",
                                    color: "#005E4E",
                                    fontWeight: 600,
                                    fontStyle: "Italic",
                                    align: "center",
                                    marginBottom: "48px"
                                }
                            }
                        ]
                    },
                    {
                        id: "services-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 48,
                        elements: [
                            {
                                type: "PhilosophyCard",
                                props: {
                                    iconName: "BookOpen",
                                    title: "STEM Mastery",
                                    description: "Build deep conceptual understanding and explosive problem-solving skills through science-backed learning protocols.",
                                    variant: "solid",
                                    primaryColor: "#009C76",
                                    backgroundColor: "#ffffff",
                                    textColor: "#ffffff",
                                    descriptionColor: "rgba(255, 255, 255, 0.9)",
                                    iconColor: "#ffffff"
                                }
                            },
                            {
                                type: "PhilosophyCard",
                                props: {
                                    iconName: "Zap",
                                    title: "Velocity Prep",
                                    description: "High-intensity academic conditioning designed to torch exam anxiety and increase cognitive output.",
                                    variant: "outlined",
                                    primaryColor: "#0056AD",
                                    backgroundColor: "#ffffff",
                                    textColor: "#0056AD",
                                    descriptionColor: "#4B5563",
                                    iconColor: "#0056AD"
                                }
                            },
                            {
                                type: "PhilosophyCard",
                                props: {
                                    iconName: "Brain",
                                    title: "Cognitive Strategy",
                                    description: "Performance-fueling learning plans that fit your schedule without sacrificing academic excellence.",
                                    variant: "solid",
                                    primaryColor: "#60FF54",
                                    backgroundColor: "#ffffff",
                                    textColor: "#005E4E",
                                    descriptionColor: "rgba(0, 94, 78, 0.8)",
                                    iconColor: "#005E4E"
                                }
                            }
                        ]
                    }
                ],
                id: "services"
            }
        },
        // --------------------------------------------------------------------------
        // SIGN SECTION
        // --------------------------------------------------------------------------
        {
            key: "tutor-sign",
            name: "Sign Section",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f5fbf9", // Light subtle background 
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        width: "100%",
                        elements: [
                            {
                                type: "SignSection",
                                props: {
                                    subHeadline: "Dedicated Tutors,",
                                    headline: "Exceptional Results.",
                                    description1: "Our team consists of highly experienced and passionate educators who believe in personalized learning. Every student we work with receives a bespoke curriculum designed to maximize their potential.",
                                    description2: "With a culture of collaboration and a roster of top-tier academic talent, we are endlessly dedicated to intellectual growth, next-generation learning strategies, and celebrating the victories of our students.",
                                    image1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                    image2: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                    signatureImage: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Signature_of_John_Hancock.svg",
                                    backgroundColor: "transparent",
                                    textColor: "#374151",
                                    headingColor: "#005E4E",
                                    subHeadingColor: "#6B7280"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // RESULTS SECTION
        // --------------------------------------------------------------------------
        {
            key: "tutor-results",
            name: "Results",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f0fdf4", // Light green background to match the theme
                    paddingY: 30,
                    paddingX: 24,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "results-title",
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "THE PROOF IS IN THE NUMBERS",
                                    tag: "h2",
                                    size: "4xl",
                                    color: "#005E4E",
                                    fontWeight: 600,
                                    fontStyle: "Italic",
                                    align: "center",
                                    marginBottom: "48px"
                                }
                            }
                        ]
                    },
                    {
                        id: "results-stats-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 0,
                        elements: [
                            {
                                type: "CircleStats",
                                props: {
                                    percentage: 95,
                                    label: "Student Improvement",
                                    primaryColor: "#009C76",
                                    labelColor: "#005E4E"
                                }
                            },
                            {
                                type: "CircleStats",
                                props: {
                                    percentage: 98,
                                    label: "Success Rate",
                                    primaryColor: "#0056AD",
                                    labelColor: "#005E4E"
                                }
                            },
                            {
                                type: "CircleStats",
                                props: {
                                    percentage: 100,
                                    label: "Curriculum Mastery",
                                    primaryColor: "#009C76",
                                    labelColor: "#005E4E"
                                }
                            },
                            {
                                type: "CircleStats",
                                props: {
                                    percentage: 85,
                                    label: "Top Grade Attainment",
                                    primaryColor: "#60FF54",
                                    labelColor: "#005E4E"
                                }
                            }
                        ]
                    }
                ],
                id: "results"
            }
        },
        // --------------------------------------------------------------------------
        // PROCESS SECTION
        // --------------------------------------------------------------------------
        {
            key: "tutor-process",
            name: "Process",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "3 STEPS TO EXCELLENCE",
                                    tag: "h2",
                                    size: "5xl",
                                    color: "#005E4E",
                                    fontWeight: "black",
                                    className: "text-center mb-16"
                                }
                            }
                        ]
                    },
                    {
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                type: "BusinessCard",
                                props: {
                                    numberText: "1",
                                    title: "AUDIT",
                                    description: "Deep dive into your current knowledge, learning style, and academic goals.",
                                    primaryColor: "#009C76",
                                    backgroundColor: "#ffffff",
                                    textColor: "#005E4E",
                                    accentColor: "#60FF54",
                                    className: "text-center shadow-lg p-8"
                                }
                            },
                            {
                                type: "BusinessCard",
                                props: {
                                    numberText: "2",
                                    title: "ARCHITECT",
                                    description: "Bespoke learning architecture and cognitive strategy tailored to your needs.",
                                    primaryColor: "#0056AD",
                                    backgroundColor: "#ffffff",
                                    textColor: "#005E4E",
                                    accentColor: "#60FF54",
                                    className: "text-center shadow-lg p-8"
                                }
                            },
                            {
                                type: "BusinessCard",
                                props: {
                                    numberText: "3",
                                    title: "ACHIEVE",
                                    description: "Relentless pursuit of your academic peak with constant expert support.",
                                    primaryColor: "#005E4E",
                                    backgroundColor: "#ffffff",
                                    textColor: "#005E4E",
                                    accentColor: "#60FF54",
                                    className: "text-center shadow-lg p-8"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CONTACT SECTION
        // --------------------------------------------------------------------------
        {
            key: "tutor-contact",
            name: "Contact",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#005E4E",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: true
                },
                columns: [
                    {
                        width: "50%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "START YOUR \n TRANSFORMATION",
                                    tag: "h2",
                                    size: "7xl",
                                    color: "#ffffff",
                                    fontWeight: "black",
                                    className: "leading-none mb-8 italic"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Ready to break your plateau? Fill out the form below and we'll reach out within 24 hours to schedule your strategy session.",
                                    color: "rgba(255, 255, 255, 0.7)",
                                    size: "xl",
                                    className: "mb-12"
                                }
                            }
                        ]
                    },
                    {
                        width: "50%",
                        elements: [
                            {
                                type: "NewsletterSignup",
                                props: {
                                    title: "SUBMIT APPLICATION",
                                    titleColor: "#005E4E",
                                    placeholder: "Enter Your Email",
                                    buttonText: "START NOW",
                                    buttonBg: "#009C76",
                                    buttonTextColor: "#ffffff",
                                    inputBg: "#f3f4f6",
                                    description: "Schedule your free academic strategy session.",
                                    descriptionColor: "rgba(0, 94, 78, 0.6)",
                                    backgroundColor: "#ffffff",
                                    className: "p-12 shadow-2xl"
                                }
                            }
                        ]
                    }
                ],
                id: "contact"
            }
        }
    ],

    // ============================================================================
    // FOOTER
    // ============================================================================
    footer: {
        key: "tutor-footer",
        type: "Footer",
        category: "footer",
        name: "Tutor Footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#ffffff",
                paddingY: 64,
                paddingX: 24,
                fullWidth: true
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "50%",
                    elements: [
                        {
                            type: "Headline",
                            props: {
                                text: "V&V ACADEMY",
                                tag: "h4",
                                color: "#009C76",
                                className: "font-black text-3xl mb-4 italic"
                            }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "© 2024 V&V Academy. No limits, just velocity.",
                                color: "rgba(0, 94, 78, 0.4)",
                                size: "sm"
                            }
                        }
                    ]
                },
                {
                    id: "footer-socials",
                    width: "50%",
                    elements: [
                        {
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "instagram", url: "#" },
                                    { platform: "youtube", url: "#" },
                                    { platform: "linkedin", url: "#" }
                                ],
                                iconColor: "#005E4E",
                                size: "lg",
                                className: "justify-end"
                            }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = tutorProfile;
