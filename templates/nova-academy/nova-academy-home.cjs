const novaAcademyHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "nova-header",
        name: "Nova Header",
        structure: {
            type: "Navbar",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 254, 224, 0.95)", // #FFFEE0
                showBorder: true,
                borderColor: "#e2e8f0",
                height: "80px",
                className: "backdrop-blur"
            },
            props: {
                logo: {
                    text: "NOVA ACADEMY",
                    logoColor: "#0f172a", // slate-900
                    icon: "account_balance",
                    iconColor: "#ff3d6a", // primary
                    fontWeight: "extrabold",
                    letterSpacing: "tight",
                    className: "uppercase text-xl flex items-center gap-3"
                },
                links: [
                    { label: "Home", href: "/", className: "text-sm font-bold uppercase tracking-widest hover:text-[#ff3d6a] transition-colors" },
                    { label: "About", href: "/about", className: "text-sm font-bold uppercase tracking-widest hover:text-[#ff3d6a] transition-colors" },
                    { label: "Services", href: "/services", className: "text-sm font-bold uppercase tracking-widest hover:text-[#ff3d6a] transition-colors" },
                    { label: "Contact", href: "/contact", className: "text-sm font-bold uppercase tracking-widest hover:text-[#ff3d6a] transition-colors" }
                ],
                ctaButton: {
                    text: "Get Started",
                    href: "/contact",
                    variant: "primary",
                    backgroundColor: "#ff3d6a",
                    textColor: "#ffffff",
                    borderRadius: "0.5rem",
                    height: "44px",
                    className: "px-6 font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all"
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
            key: "nova-hero",
            name: "Nova Hero",
            structure: {
                type: "EduHeroSection",
                props: {
                    headlineTop: "NOVA",
                    headlineBottom: "ACADEMY",
                    buttonText: "APPLY NOW",
                    buttonLink: "#apply",
                    subHeadline: "EXCELLENCE IN ACTION",
                    phoneLabel: "Admissions Office",
                    phoneNumber: "+1 (800) 123-4567",
                    emailLabel: "Email Admissions",
                    emailAddress: "admissions@nova.edu",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiPYNgf9ZyIhXapbApwJGxSbgK3XLRi0iFX67qQUGxIDZzPRdMJ8h7qb9urpYRHYD4Z8cJVAuevqAnVZoLVwXYJ6j44Rvb89wHmCMsOSOc2JXy2q4V9cRyE4Dknlqf085N-5GF3TIclGxu6n3DVcyC1GJOLQfhfJr0CX-lkN5-dEEfa5Asq4bWdPs-DQHBUm1FrmzNHHj0PoM-z3xNfNx723zZhOZ5SGZDP9-ty3rLXHHHHMMyVZiJ5MKPFyM_1C1BB-Ir5BN5wcDG",
                    primaryColor: "#FFC900",
                    secondaryColor: "#1d0c10",
                    textColor: "#ffffff",
                    backgroundColor: "#FFC900"
                }
            }
        },

        // --------------------------------------------------------------------------
        // MISSION STATEMENT
        // --------------------------------------------------------------------------
        {
            key: "nova-mission",
            name: "Nova Mission",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#872897",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "nova-mission-col",
                        width: "100%",
                        props: { className: "max-w-5xl mx-auto text-center flex flex-col items-center" },
                        elements: [
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Our Core Mandate",
                                    color: "rgba(255,255,255,0.6)",
                                    size: "base",
                                    fontWeight: "bold",
                                    marginBottom:"20px",
                                    className: "uppercase tracking-widest mb-8 block",
                                    align: "center"
                                }
                            },
                            {
                                type: "Headline",
                                props: {
                                    text: "\"To cultivate elite leaders through structured philosophical inquiry and rigorous character development.\"",
                                    tag: "h2",
                                    size: "6xl",
                                    color: "#ffffff",
                                    fontWeight: "black",
                                    className: "leading-tight italic text-4xl md:text-6xl",
                                    align: "center"
                                }
                            },
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // ACADEMIC PILLARS (GRID CARDS)
        // --------------------------------------------------------------------------
        {
            key: "nova-pillars",
            name: "Academic Pillars",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFEE0",
                    paddingY: 30,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "nova-pillars-col",
                        width: "100%",
                        elements: [
                            {
                                type: "GridCards",
                                props: {
                                    heading: "Pillars of Excellence",
                                    description: "Our curriculum is engineered to forge visionary leaders capable of navigating and shaping the future of global industries.",
                                    headingColor: "#0f172a",
                                    descriptionColor: "#475569",
                                    backgroundColor: "transparent",
                                    cardBorderRadius: 16,
                                    gridGap: 24,
                                    cardImageSize: 220,
                                    cards: [
                                        {
                                            title: "Strategic Foresight",
                                            description: "Master the art of long-term planning and scenario analysis to anticipate market shifts and outmaneuver competition.",
                                            icon: "Eye",
                                            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600",
                                            bgColor: "#f8fafc",
                                            textColor: "#0f172a",
                                            linkText: "Explore Curriculum",
                                            linkUrl: "#",
                                            span: "wide"
                                        },
                                        {
                                            title: "Ethical Leadership",
                                            description: "Develop a robust moral framework to guide complex decision-making in high-stakes environments.",
                                            icon: "Scale",
                                            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600",
                                            bgColor: "#f8fafc",
                                            textColor: "#0f172a",
                                            linkText: "Learn More",
                                            linkUrl: "#",
                                            span: "normal"
                                        },
                                        {
                                            title: "Global Dynamics",
                                            description: "Understand the intricate web of socio-economic and geopolitical forces shaping the modern world.",
                                            icon: "Globe",
                                            image: "https://images.unsplash.com/photo-1529400971008-f566de0e6ba5?q=80&w=600",
                                            bgColor: "#f8fafc",
                                            textColor: "#0f172a",
                                            linkText: "Discover",
                                            linkUrl: "#",
                                            span: "normal"
                                        },
                                        {
                                            title: "Innovation Architecture",
                                            description: "Design and implement scalable systems that foster continuous organizational innovation and adaptability.",
                                            icon: "Zap",
                                            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600",
                                            bgColor: "#f8fafc",
                                            textColor: "#0f172a",
                                            linkText: "View Program",
                                            linkUrl: "#",
                                            span: "wide"
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
        // LEADERSHIP GALLERY
        // --------------------------------------------------------------------------
        {
            key: "nova-leadership",
            name: "Leadership Gallery",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8fafc", // slate-50
                    paddingY: 30,
                    paddingX: 24,
                    fullWidth: false,
                    className: "border-y border-slate-200"
                },
                columns: [
                    {
                        id: "nova-lead-col1",
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "Academic Leadership",
                                    tag: "h2",
                                    size: "4xl",
                                    color: "#0f172a",
                                    fontWeight: "black",
                                    align: "center",
                                    className: "mb-4"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Guided by the world's leading strategists and philosophers.",
                                    color: "#64748b", // slate-500
                                    size: "lg",
                                    align: "center",
                                    className: "max-w-2xl mx-auto mb-16"
                                }
                            }
                        ]
                    },
                    {
                        id: "nova-lead-col2",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 32,
                        elements: [
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFoSQKDiXR2ZZBhSnWRueH5aGsbkCRNZNjKjDE1CAZFA_i1uQ81K7nm2DvpVZoFTuUONCXczPcTbqg9S16S8G7r7BMNpfIsqPcsvJCEdWDtMexDbhzSkNUO1ifK_Qm8I0amfl0qJ8yQODKKwAjho8XURfim8ZddiX9numVumOWw8MFw-sKOa2sGy6ghSPFanJoroAOC_mAVIKHPIfhWZyXRWqoc_AqSVDqkrwu55rFIp9vdPYiYVC22Kr_dXQdtkUT8DBtuFblusJA",
                                    imageAlt: "Dr. Alistair Vance",
                                    name: "Dr. Alistair Vance",
                                    specialtyTag: "DEAN OF PHILOSOPHY",
                                    description: "Pioneering research in ethical frameworks and strategic foresight.",
                                    rating: "A",
                                    reviewCount: "Board",
                                    availabilityText: "Accepting Advisees",
                                    ctaText: "View Profile",
                                    ctaLink: "#",
                                    accentColor: "#facc15",
                                    tagColor: "#facc15",
                                    nameColor: "#0f172a",
                                    descriptionColor: "#64748b",
                                    cardBgColor: "#ffffff",
                                    cardBorderRadius: 16,
                                    ctaBgColor: "#0f172a",
                                    ctaTextColor: "#ffffff"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4bI-Jsm5nzkF5_YlNbaHafUZDEIqJCaIHzS1oXzs9-IKSvfw-TlEYM4aRwQoO28QgUGnp7AW-lW7RSSlWzEajOe-Y8POm87kT--v_CWhZDkN0l8RMxnAC2aRSIIZfS22-_C9rqNSmf-t_vJDtsS4WPnGaGQS3CJkYasc-vZQIFNkfmgB-A5np6kh21glkNh3aV7aWs82WRyMzAwXLqrbgT7COJQADJ5fU9R-YDg-UrN6R4Q7nlxCZuVyIDveSp6izgYqqu3wC06ij",
                                    imageAlt: "Sarah Ellington",
                                    name: "Sarah Ellington",
                                    specialtyTag: "DIRECTOR OF STRATEGY",
                                    description: "Former Fortune 500 consultant specializing in organizational transformation.",
                                    rating: "S",
                                    reviewCount: "Exec",
                                    availabilityText: "Seminars Only",
                                    ctaText: "View Profile",
                                    ctaLink: "#",
                                    accentColor: "#facc15",
                                    tagColor: "#facc15",
                                    nameColor: "#0f172a",
                                    descriptionColor: "#64748b",
                                    cardBgColor: "#ffffff",
                                    cardBorderRadius: 16,
                                    ctaBgColor: "#0f172a",
                                    ctaTextColor: "#ffffff"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcok1hlW0d9x6H-yWpASZSvcLQU7BSmtLvrShk1z9BFoJ5RV4qzN1o9hKNfcl5wTgeLohcsSE8IivnAlkdaGDpoRPNbnPON4tWjvzCN-kFFQKxF7KW0RAyrET8j3j82AF9DBpS2kwPXGhPyNSH7cEXjE5ojdTRXF75sDQxg2qsSXnKzvPoxyJJFpOIGqNrYA0-RHKzzHBHl0Yvztgjukec3aecCXOhPyUIP3ntAIoHknG-MPCO2hXimcgrtIiVPv2JtLkMnNQBds_5",
                                    imageAlt: "Marcus Thorne",
                                    name: "Marcus Thorne",
                                    specialtyTag: "ETHICS CHAIR",
                                    description: "Leading voice on corporate responsibility and global governance.",
                                    rating: "E",
                                    reviewCount: "Chair",
                                    availabilityText: "Guest Lectures",
                                    ctaText: "View Profile",
                                    ctaLink: "#",
                                    accentColor: "#facc15",
                                    tagColor: "#facc15",
                                    nameColor: "#0f172a",
                                    descriptionColor: "#64748b",
                                    cardBgColor: "#ffffff",
                                    cardBorderRadius: 16,
                                    ctaBgColor: "#0f172a",
                                    ctaTextColor: "#ffffff"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCICYv-u2mvoo3B2lSTt2tG9EXjT4OwCZyC9J4ae-kQFN0wxPDHG-9w_3bazn630kbZJ805QrsvSo8PMZ1ibDoDPakCGMlClVmmwXZUf8YuFymrbAkCVjUXI37BGsU6juU2o39F9j_M-hxZ3ltEe-EZbmLZTaEXFWDdDYd8MkvxxLJ6dk4S2XLkUsBq-3llPVclHgJik7iJnDzE520fnp3PlqT1EpFfc9d0oGF_fM4_Ig6XMn-FWIUgE_ShIXtuQ3r18RRgJkPyVAOB",
                                    imageAlt: "Dr. Elena Rossi",
                                    name: "Dr. Elena Rossi",
                                    specialtyTag: "PROVOST",
                                    description: "Architect of the Nova Academy multidisciplinary approach.",
                                    rating: "P",
                                    reviewCount: "Admin",
                                    availabilityText: "Not Available",
                                    ctaText: "View Profile",
                                    ctaLink: "#",
                                    accentColor: "#facc15",
                                    tagColor: "#facc15",
                                    nameColor: "#0f172a",
                                    descriptionColor: "#64748b",
                                    cardBgColor: "#ffffff",
                                    cardBorderRadius: 16,
                                    ctaBgColor: "#0f172a",
                                    ctaTextColor: "#ffffff"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // MODERN CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "nova-cta",
            name: "Modern CTA",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "transparent",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "nova-cta-col",
                        width: "100%",
                        elements: [
                            {
                                type: "ModernCtaSection",
                                props: {
                                    headline: "Shape the future with Nova Academy",
                                    subHeadline: "Join the next generation of global leaders, strategists, and innovators.",
                                    primaryButtonText: "Apply Now",
                                    primaryButtonLink: "/services",
                                    secondaryButtonText: "View More",
                                    secondaryButtonLink: "/about",
                                    footerText: "Admissions for Fall 2026 are now open.",
                                    backgroundColor: "#0f172a", // slate-900
                                    primaryButtonColor: "#facc15", // yellow-400
                                    secondaryButtonColor: "#334155", // slate-700
                                    textColor: "#ffffff"
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
        key: "nova-footer",
        type: "Footer",
        category: "footer",
        name: "Nova Footer",
        description: "Dark footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#0f172a", // slate-900
                paddingY: 80,
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
                                text: "NOVA ACADEMY",
                                tag: "h4",
                                color: "#ffffff",
                                marginBottom: "24px",
                                className: "font-black tracking-tighter text-2xl"
                            }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "The premier institution for those dedicated to the mastery of thought and the excellence of leadership.",
                                color: "#94a3b8", // slate-400
                                maxWidth: "400px",
                                marginBottom: "32px",
                                size: "base"
                            }
                        },
                        {
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "twitter", url: "#" },
                                    { platform: "mail", url: "#" }
                                ],
                                iconColor: "#ffffff",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-academy",
                    width: "25%",
                    elements: [
                        {
                            type: "LinkList",
                            props: {
                                title: "ACADEMY",
                                titleColor: "#ff3d6a",
                                titleClass: "uppercase tracking-widest text-sm font-bold",
                                textColor: "#94a3b8",
                                hoverColor: "#ffffff",
                                items: [
                                    { label: "Academic Calendar", href: "#" },
                                    { label: "Library & Archives", href: "#" },
                                    { label: "Research Papers", href: "#" },
                                    { label: "Global Campuses", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-inquiry",
                    width: "25%",
                    elements: [
                        {
                            type: "LinkList",
                            props: {
                                title: "INQUIRY",
                                titleColor: "#ff3d6a",
                                titleClass: "uppercase tracking-widest text-sm font-bold",
                                textColor: "#94a3b8",
                                hoverColor: "#ffffff",
                                items: [
                                    { label: "Admissions Process", href: "/services" },
                                    { label: "Scholarships", href: "#" },
                                    { label: "Alumni Network", href: "#" },
                                    { label: "Corporate Partners", href: "#" }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = novaAcademyHome;
