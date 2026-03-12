const novaAcademyHome = require('./nova-academy-home.cjs');

const novaAcademyAbout = {
    header: novaAcademyHome.header,

    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "nova-about-hero",
            name: "About Hero",
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
                        id: "nova-about-col",
                        width: "100%",
                        elements: [
                            {
                                type: "MultiImage",
                                props: {
                                    heading: "A new paradigm\nin global strategy",
                                    description: "Nova Academy empowers the next generation of leaders with world-class foresight, strategic architecture, and ethical philosophy.",
                                    primaryButtonText: "Explore Programs",
                                    primaryButtonLink: "/services",
                                    secondaryButtonText: "Contact Admissions",
                                    secondaryButtonLink: "/contact",
                                    showPrimaryButton: true,
                                    showSecondaryButton: true,
                                    stats: [
                                        { value: "50+", label: "Global Partners" },
                                        { value: "40+", label: "Nations Represented" }
                                    ],
                                    images: [
                                        { 
                                            src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800", 
                                            alt: "Campus", 
                                            bgColor: "#f8fafc" 
                                        },
                                        { 
                                            src: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=400", 
                                            alt: "Discussions", 
                                            bgColor: "#f1f5f9" 
                                        },
                                        { 
                                            src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800", 
                                            alt: "Students", 
                                            bgColor: "#e2e8f0" 
                                        }
                                    ],
                                    headingColor: "#0f172a",
                                    descriptionColor: "#475569",
                                    accentColor: "#facc15",
                                    buttonBorderRadius: 8,
                                    backgroundColor: "#ffffff",
                                    statValueColor: "#0f172a",
                                    statLabelColor: "#64748b",
                                    showResourcesIcon: false
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SERVICES / FEATURES SECTION
        // --------------------------------------------------------------------------
        {
            key: "nova-about-features",
            name: "Nova Pillars",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "transparent",
                    paddingY: 30,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "nova-feat-col",
                        width: "100%",
                        elements: [
                            {
                                type: "ServiceProvider",
                                props: {
                                    badge: "Our Curriculum Pillars",
                                    heading: "Academic Excellence",
                                    watermarkText: "ACADEMY",
                                    columns: 3,
                                    accentColor: "#facc15", // yellow-400
                                    headingColor: "#0f172a", // slate-900
                                    descriptionColor: "#475569", // slate-600
                                    backgroundColor: "#f8fafc", // slate-50
                                    cardBgColor: "#ffffff",
                                    iconBgColor: "#0f172a",
                                    iconColor: "#ffffff",
                                    cardBorderRadius: 16,
                                    services: [
                                        {
                                            icon: "MessageCircle",
                                            title: "Dialectic Seminars",
                                            description: "Engage in rigorous, Socratic debate to sharpen critical thinking and articulate complex viewpoints clearly.",
                                            linkText: "Learn more",
                                            linkUrl: "#"
                                        },
                                        {
                                            icon: "Globe",
                                            title: "Global Strategists",
                                            description: "Learn from visiting diplomats, industry titans, and thought leaders who shape international policy.",
                                            linkText: "Learn more",
                                            linkUrl: "#"
                                        },
                                        {
                                            icon: "Network",
                                            title: "Elite Alumni Network",
                                            description: "Join an exclusive community of change-makers and innovators leading organizations worldwide.",
                                            linkText: "Learn more",
                                            linkUrl: "#"
                                        },
                                        {
                                            icon: "Landmark",
                                            title: "Policy Simulation",
                                            description: "Participate in high-stakes war games and international relations simulations to test theoretical knowledge.",
                                            linkText: "Learn more",
                                            linkUrl: "#"
                                        },
                                        {
                                            icon: "Scale",
                                            title: "Ethics & Philosophy",
                                            description: "Build a strong moral foundation necessary for navigating advanced technological and societal dilemmas.",
                                            linkText: "Learn more",
                                            linkUrl: "#"
                                        },
                                        {
                                            icon: "Database",
                                            title: "Data Architecture",
                                            description: "Master the intersection of big data, AI, and strategic forecasting to stay ahead of the curve.",
                                            linkText: "Learn more",
                                            linkUrl: "#"
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
        // ADMISSION PROCESS (Application Section)
        // --------------------------------------------------------------------------
        {
            key: "nova-about-admission",
            name: "Admission Process",
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
                        id: "nova-admission-col",
                        width: "100%",
                        elements: [
                            {
                                type: "Application",
                                props: {
                                    title: "Your Journey to Nova Academy",
                                    subtitle: "Our rigorous admission process is designed to identify individuals with the intellectual depth and strategic potential to lead.",
                                    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800", // Image of a formal application/consultation
                                    imageAlt: "Admission Interview",
                                    showStoreButtons: false,
                                    accentColor: "#facc15", // yellow-400
                                    accentGradient: "linear-gradient(135deg, #facc15 0%, #ca8a04 100%)",
                                    steps: [
                                        {
                                            icon: "UserPlus",
                                            title: "Strategic Consultation",
                                            description: "Begin with a 1-on-1 session to align your personal career trajectory with our advanced curriculum."
                                        },
                                        {
                                            icon: "FileSignature",
                                            title: "The Portfolio Review",
                                            description: "Submit a comprehensive dossier of previous achievements and a thesis on future global challenges."
                                        },
                                        {
                                            icon: "Gavel",
                                            title: "The Dialectic Interview",
                                            description: "A final panel defense where candidates demonstrate their ethical framework and strategic foresight."
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
        // CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "nova-about-cta",
            name: "Lumina CTA",
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
                        id: "lumina-cta-col",
                        width: "100%",
                        props: {
                            className: "max-w-7xl mx-auto rounded-[3rem] p-12 md:p-24 text-center",
                            style: { background: "linear-gradient(135deg, #ff3d6a 0%, #872897 100%)" }
                        },
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "Stay Ahead of the Strategic Curve",
                                    tag: "h2",
                                    size: "6xl",
                                    color: "#ffffff",
                                    fontWeight: "black",
                                    align: "center",
                                    className: "max-w-3xl mx-auto mb-8"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Get exclusive insights on global trends, policy analysis, and upcoming dialectic seminars delivered to your inbox.",
                                    color: "rgba(255,255,255,0.8)",
                                    size: "xl",
                                    align: "center",
                                    fontWeight: "medium",
                                    className: "max-w-xl mx-auto mb-10"
                                }
                            },
                            {
                                type: "NewsletterSignup",
                                props: {
                                    title: "Subscribe to the Nova Brief",
                                    buttonText: "Subscribe",
                                    align: "center",
                                    titleColor: "#ffffff"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    footer: novaAcademyHome.footer
};

module.exports = novaAcademyAbout;
