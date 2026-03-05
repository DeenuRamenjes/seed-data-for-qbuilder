/**
 * DoctorProfile Template - Home Page (Elite Private Clinic)
 * Theme: Premium Healthcare / Blue & Cyan-Green
 * Primary: #1FFFC0 (Mint Green)
 * Secondary: #1F5EFF (Royal Blue)
 * Accent: #1FCEFF (Cyan)
 * Background: #ffffff
 * Font: Public Sans / Playfair Display
 */

const eliteHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "elite-header",
        name: "Elite Clinic Header",
        structure: {
            type: "Navbar",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                paddingY: 0,
                paddingX: 0,
                fullWidth: true,
                showBorder: true,
                borderColor: "#f1f5f9"
            },
            props: {
                logoType: "both",
                logoText: "ELITE",
                logoAccent: "CLINIC",
                logoTextColor: "#0f172a",
                links: [
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Services", href: "/services" },
                    { label: "Contact", href: "/contact" }
                ],
                showButton: true,
                buttonText: "Book Consultation",
                buttonLink: "/contact",
                buttonRadius: "full",
                buttonStyle: "solid"
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
            key: "elite-hero",
            name: "Elite Hero",
            structure: {
                type: "Hero",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "hero-text",
                        width: "50%",
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "World-Class Healthcare", color: "#0f172a", marginBottom: 20, bgColor: "rgba(31, 255, 192, 0.2)" }
                            },
                            {
                                type: "Heading",
                                props: {
                                    text: "Redefining Medical Excellence",
                                    tag: "h1",
                                    size: "6xl",
                                    color: "#0f172a",
                                    fontWeight: "700"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Experience a new standard of personalized medicine. Our clinic combines cutting-edge technology with the world's leading specialists to ensure your optimal well-being.",
                                    size: "lg",
                                    color: "#475569",
                                    marginTop: 8,
                                    marginBottom: 32
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Schedule an Appointment",
                                    primaryLink: "/contact",
                                    secondaryText: "View Virtual Tour",
                                    secondaryLink: "#tour",
                                    primaryBg: "#1F5EFF",
                                    primaryTextColor: "#ffffff",
                                    secondaryBg: "#ffffff",
                                    secondaryTextColor: "#0f172a",
                                    borderRadius: "12"
                                }
                            }
                        ]
                    },
                    {
                        id: "hero-image",
                        width: "50%",
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJSOsvxx-f5F9Tjy5rD0ZbjE2Khccm_99odzL724QTfqcYwCQZMgl7Q3HMgiSem9l9CjYvY4sGJVjtxqa4dyv33kGS8P05nsGo4TIR7n4cFqHigXvXTGcFnqXfkL6T2cavFWUZf1OnYetjeL8tcOTwUC0PhYur3FTa2x8Le8CkqEhbMPzprOMEiuiwLQNMtSw9y2KquieKZW98U9k6OQ0Ya4EAy6qvL5VIEb9HcbvLCIsVgvzhto5UA01YhuFOWkDZ6TXDWLCzpHmc",
                                    alt: "Modern Medical Facility",
                                    borderRadius: "24",
                                    aspectRatio: "4/3",
                                    objectFit: "cover"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // PHILOSOPHY SECTION
        // --------------------------------------------------------------------------
        {
            key: "elite-philosophy",
            name: "Philosophy",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "rgba(31, 255, 192, 0.05)",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 32,
                    flexDirection: "col"
                },
                columns: [
                    {
                        id: "philosophy-header",
                        width: "100%",
                        props: { textAlign: "center" },
                        elements: [
                            {
                                type: "Heading",
                                props: { text: "A Patient-Centric Legacy", tag: "h2", size: "4xl", color: "#0f172a", fontWeight: "700", align: "center" }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "We believe that true healing begins with a deep human connection. Our philosophy blends empathetic care with technological precision.",
                                    size: "lg",
                                    color: "#475569",
                                    align: "center",
                                    marginTop: 16
                                }
                            }
                        ]
                    },
                    {
                        id: "philosophy-cards",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "Holistic Wellness",
                                    description: "Treating the whole person, not just the symptoms, through integrated medical practices.",
                                    icon: "Brain",
                                    iconColor: "#0f172a",
                                    borderRadius: "24"
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "Advanced Tech",
                                    description: "Investing in the latest diagnostic and robotic surgical tools available in modern medicine.",
                                    icon: "Cpu",
                                    iconColor: "#0f172a",
                                    borderRadius: "24"
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "Personal Advocacy",
                                    description: "Each patient is assigned a dedicated health concierge to navigate their journey with us.",
                                    icon: "Handshake",
                                    iconColor: "#0f172a",
                                    borderRadius: "24"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SPECIALISTS SECTION
        // --------------------------------------------------------------------------
        {
            key: "elite-specialists",
            name: "Specialists",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 32,
                    flexDirection: "col"
                },
                columns: [
                    {
                        id: "specialists-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "Our Faculty", color: "#1F5EFF", marginBottom: 20, bgColor: "transparent" }
                            },
                            {
                                type: "Heading",
                                props: { text: "World-Renowned Specialists", tag: "h2", size: "4xl", color: "#0f172a", fontWeight: "700" }
                            }
                        ]
                    },
                    {
                        id: "specialists-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 32,
                        elements: [
                            {
                                type: "TeamMember",
                                props: {
                                    name: "Dr. Sarah Jenkins",
                                    role: "Chief of Cardiology",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAILKFkrnFADnb5twLi4qsNkExNliusifOG_yGKcvuz1SqkoeHH6bAtXf_cPzqxP6BfZa3DWU95lFAfhAdAPuHoAdZmqjoY3UciqL0I16eFwxo8lWZFwZUv6TZ63KTO0b3l0g_f2yjFVVfkpxh9szbCnxT0VON_Z6PxOVL_NEIzggTtWPImaK21nwwnw2asdjhSbo5X8ZiG5c6dUnXY6ZJ_KPSgwaM3BZeUj25jC7oyeJcSeSxMwqupLwcsAiLFN-B306E8pcyrkqBS",
                                    bio: "Harvard Medical School Alumna"
                                }
                            },
                            {
                                type: "TeamMember",
                                props: {
                                    name: "Dr. Michael Chen",
                                    role: "Neurosurgeon Specialist",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxRNI-dsT77KbEQpGaGan7NCvM-A5LKaZS5WpY6ujYzDQ_UrEehaVNO_dvT4LR9S_Ue3jlYzVXBEFXsKbI1bFHnMUbnnIcrS69JQ2wgFbuIe9M6ibiJGgmS7WpIjeZYwryz0quqwuUL8lmYQw-tQOHDC1XDeKSCcBf85zBYZYUlvdLjlUrWJ2UiEVK9WBILcQp09_5YoK8nmi0VdeQytzMD_pF4JPYzDlGZ59J8WyooViT71a1PBginNZmlF-TrPXv-kqcOGue9Eea",
                                    bio: "Johns Hopkins Fellowship"
                                }
                            },
                            {
                                type: "TeamMember",
                                props: {
                                    name: "Dr. Elena Rodriguez",
                                    role: "Medical Oncology",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA27f0SuM9rdgeYP3PCc6Vt0l7N5B2cYtUwQljD13EIM7XwU6MvrI5pVhE89A6RSaLV8vb-Qq2stfbHJA5Jv8fRePFqjuv7G_3FPvLQxKCTQLT4fiUQEe1LQEJUcp__ruPZRaJ8a4helx7pkCAME2-wQO-fvdGQ0ykooklEvph2uVaqDaH5C3nnQp72dUHbr1qp8ygs4LyinVGUjSJsp5yDgRo0GJrNoUqsyi3ptivLoI-Fs_r44v-YdZqeWpkKYDo7ZTSRMJCnM5KV",
                                    bio: "Oncology Research Lead"
                                }
                            },
                            {
                                type: "TeamMember",
                                props: {
                                    name: "Dr. James Wilson",
                                    role: "Internal Medicine",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABZga6QrKSZawvHZlxfmv8d-mA7TWjN0xkMhxlQDlyoyIGJrccqvPNSp0wuebWcDhu6wna5_mBJ-E5CzSqok3Fz8dZeA76dsbmCqt-cQQvhCW7PZ341YvTbvcQ7fd8JAurGQMKKJ_BS1j2F2Rw-_-pOTUpkE7aMRDwZKNlViYAEEBkU5_Va6UHbq-6Iv6_VzbXK0F3EaWtRgmYQvounYvPVSAI4vZRMn4KI2aybo6sf_v-_kzDXE2DM-2YtcCkdLrkTSaMo3tTaA87",
                                    bio: "Genetic Diagnostics Expert"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SERVICES SECTION (Dark BG)
        // --------------------------------------------------------------------------
        {
            key: "elite-services",
            name: "Specialized Services",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#0f172a",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 48,
                    flexDirection: "col"
                },
                columns: [
                    {
                        id: "services-header",
                        width: "100%",
                        props: { textAlign: "center" },
                        elements: [
                            {
                                type: "Heading",
                                props: { text: "Specialized Services", tag: "h2", size: "4xl", color: "#ffffff", fontWeight: "700", align: "center" }
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
                                type: "ModernCard",
                                props: { title: "Diagnostic Imaging", description: "State-of-the-art MRI, CT, and PET scanning with same-day results and expert consultation.", icon: "ScanLine", backgroundColor: "#1e293b", iconBgColor: "rgba(31, 206, 255, 0.15)", iconColor: "#1FCEFF", titleColor: "#ffffff", descriptionColor: "#94a3b8", buttonText: "Learn More", buttonLink: "#", buttonBgColor: "#1FCEFF", buttonTextColor: "#0f172a" }
                            },
                            {
                                type: "ModernCard",
                                props: { title: "Precision Surgery", description: "Minimally invasive robotic procedures that ensure faster recovery times and better clinical outcomes.", icon: "Microscope", backgroundColor: "#1e293b", iconBgColor: "rgba(31, 206, 255, 0.15)", iconColor: "#1FCEFF", titleColor: "#ffffff", descriptionColor: "#94a3b8", buttonText: "Learn More", buttonLink: "#", buttonBgColor: "#1FCEFF", buttonTextColor: "#0f172a" }
                            },
                            {
                                type: "ModernCard",
                                props: { title: "Genomic Health", description: "Personalized health screenings based on your unique genetic profile for preventive longevity.", icon: "Dna", backgroundColor: "#1e293b", iconBgColor: "rgba(31, 206, 255, 0.15)", iconColor: "#1FCEFF", titleColor: "#ffffff", descriptionColor: "#94a3b8", buttonText: "Learn More", buttonLink: "#", buttonBgColor: "#1FCEFF", buttonTextColor: "#0f172a" }
                            },
                            {
                                type: "ModernCard",
                                props: { title: "Executive Checkups", description: "Comprehensive health evaluations designed for busy professionals in a single day.", icon: "HeartPulse", backgroundColor: "#1e293b", iconBgColor: "rgba(31, 206, 255, 0.15)", iconColor: "#1FCEFF", titleColor: "#ffffff", descriptionColor: "#94a3b8", buttonText: "Learn More", buttonLink: "#", buttonBgColor: "#1FCEFF", buttonTextColor: "#0f172a" }
                            },
                            {
                                type: "ModernCard",
                                props: { title: "Regenerative Medicine", description: "Harnessing your body's own power to heal through advanced stem cell and PRP therapies.", icon: "Sparkles", backgroundColor: "#1e293b", iconBgColor: "rgba(31, 206, 255, 0.15)", iconColor: "#1FCEFF", titleColor: "#ffffff", descriptionColor: "#94a3b8", buttonText: "Learn More", buttonLink: "#", buttonBgColor: "#1FCEFF", buttonTextColor: "#0f172a" }
                            },
                            {
                                type: "ModernCard",
                                props: { title: "Family Health", description: "Continuous care for all generations, focused on long-term wellness and disease prevention.", icon: "Users", backgroundColor: "#1e293b", iconBgColor: "rgba(31, 206, 255, 0.15)", iconColor: "#1FCEFF", titleColor: "#ffffff", descriptionColor: "#94a3b8", buttonText: "Learn More", buttonLink: "#", buttonBgColor: "#1FCEFF", buttonTextColor: "#0f172a" }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TESTIMONIALS SECTION
        // --------------------------------------------------------------------------
        {
            key: "elite-testimonials",
            name: "Patient Stories",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 80,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "testimonial-text",
                        width: "50%",
                        elements: [
                            {
                                type: "Heading",
                                props: { text: "Patient Stories", tag: "h2", size: "4xl", color: "#0f172a", fontWeight: "700", marginBottom: 32 }
                            },
                            {
                                type: "Quote",
                                props: {
                                    text: "The level of care I received at Elite Clinic was beyond anything I've experienced. From the concierge service to the precision of the medical team, every detail was perfect. They didn't just treat my condition; they restored my quality of life.",
                                    authorName: "Julian Vandervort",
                                    authorTitle: "Global Tech CEO",
                                    authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7JXKKda8KJMVzIows36ef9jTXDOHHKBQnoP641a0BTQ_MHIppdklaeK8nUeuiYQjQzrXStwgaNehQ61LMLxUikOX7I_y8oSUOWoqj8lAGpvIV37L5J3C9gDngDa-vXzFEfkViCm5rnp63IHEbm9TWy0oCLCUwPMCrjfs7bMDFHeMr42iPqbJ8r6qcyi0YbtfsuhDdFxgTaPoUb_UF4XkxpuxISm9rknZxF7p_sKN__NZlB4ZzxxwwhnEHWhHaulKiNScbTrtF8sQw",
                                    quoteColor: "rgba(31, 255, 192, 0.3)"
                                }
                            }
                        ]
                    },
                    {
                        id: "testimonial-image",
                        width: "50%",
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQNQCoNcjCSCVmmdT75-nPrlpuYnOcgf4LXiLvuJYxVeQuZLwz191xQcskwsVocKiV4Qf94ogCpYFqgUsKW1R2zE0vGyT-3G4Gi3QWX4CfYSArXJKyHWov5XiQEFFSYxoxUCIeuElrc88aD6_Eh5BiUAf-o2bNRsHqki0ZCE7JdWXVrCZ4T_E1HaAl7E4xONzllFiJoPsF-vuFLlMxSNgviTf_ydsgm-6FuMti-0MQtOL5-Nno0g0IwbQVwGM4oPUwGlARW1cNMstO",
                                    alt: "Luxury Clinic Interior",
                                    borderRadius: "24",
                                    objectFit: "cover"
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
        key: "elite-footer",
        name: "Elite Footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#f8fafc",
                paddingY: 80,
                paddingX: 40,
                fullWidth: true,
                gap: 48,
                showBorder: true,
                borderColor: "#f1f5f9"
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "25%",
                    elements: [
                        {
                            type: "Heading",
                            props: { text: "ELITECLINIC", tag: "h4", color: "#0f172a", marginBottom: "16px" }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "Setting the global benchmark for private medical excellence and patient luxury since 1994.",
                                size: "sm",
                                color: "#64748b",
                                marginBottom: "24px"
                            }
                        },
                        {
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "facebook", url: "#" },
                                    { platform: "twitter", url: "#" },
                                    { platform: "instagram", url: "#" }
                                ],
                                iconColor: "#64748b",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-links",
                    width: "25%",
                    elements: [{
                        type: "LinkList",
                        props: {
                            title: "Quick Links",
                            titleColor: "#0f172a",
                            textColor: "#64748b",
                            hoverColor: "#1F5EFF",
                            items: [
                                { label: "Our Specialists", href: "/about" },
                                { label: "Inpatient Services", href: "/services" },
                                { label: "Insurance Partners", href: "#" },
                                { label: "Patient Portal", href: "#" },
                                { label: "News & Ethics", href: "#" }
                            ]
                        }
                    }]
                },
                {
                    id: "footer-departments",
                    width: "25%",
                    elements: [{
                        type: "LinkList",
                        props: {
                            title: "Our Departments",
                            titleColor: "#0f172a",
                            textColor: "#64748b",
                            hoverColor: "#1F5EFF",
                            items: [
                                { label: "Cardiology", href: "#" },
                                { label: "Neurology", href: "#" },
                                { label: "Orthopedics", href: "#" },
                                { label: "Oncology", href: "#" }
                            ]
                        }
                    }]
                },
                {
                    id: "footer-contact",
                    width: "25%",
                    elements: [
                        {
                            type: "Heading",
                            props: { text: "Contact Us", tag: "h6", color: "#0f172a", marginBottom: "16px" }
                        },
                        {
                            type: "FeatureRow",
                            props: { title: "1200 Medical Plaza, Suite 400, Beverly Hills, CA 90210", icon: "MapPin", iconColor: "#1F5EFF", textColor: "#64748b", marginBottom: 16 }
                        },
                        {
                            type: "FeatureRow",
                            props: { title: "+1 (800) ELITE-MED", icon: "Phone", iconColor: "#1F5EFF", textColor: "#64748b", marginBottom: 16 }
                        },
                        {
                            type: "FeatureRow",
                            props: { title: "concierge@eliteclinic.com", icon: "Mail", iconColor: "#1F5EFF", textColor: "#64748b" }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = eliteHome;
