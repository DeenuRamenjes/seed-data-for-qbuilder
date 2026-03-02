/**
 * IT Consulting Template - Home Page
 * Theme: Professional Blue/Teal for IT consulting firms
 * Industry: IT Consulting / Digital Transformation
 * Color Scheme:
 *   - Primary: #0559b3 (Blue)
 *   - Accent: #05B3AA (Teal)
 *   - Background: #ffffff (White)
 *   - Dark: #0f1923
 *   - Text: #0f172a (Slate 900)
 */

const itConsultingHome = {
    // ========================================================================
    // HEADER
    // ========================================================================
    header: {
        key: "it-consulting-header",
        type: "Header",
        category: "header",
        name: "IT Consulting Header",
        description: "Clean professional header with search and CTA",
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
                id: "it-header-col",
                width: "100%",
                elements: [{
                    id: "it-header-nav",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "TECHCONSULT",
                        logoAccent: "ELITE",
                        logoTextColor: "#0f172a",
                        accentColor: "#0559b3",
                        backgroundColor: "#ffffff",
                        linkColor: "#475569",
                        linkHoverColor: "#0559b3",
                        showButton: true,
                        buttonText: "Get a Quote",
                        buttonStyle: "solid",
                        buttonLink: "/contact",
                        buttonRadius: "md",
                        links: [
                            { label: "Home", href: "/" },
                            { label: "About us", href: "/about" },
                            { label: "Services", href: "/services" },
                            { label: "Contact", href: "/contact" }
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
        key: "it-consulting-footer",
        type: "Footer",
        category: "footer",
        name: "IT Consulting Footer",
        description: "Minimal professional footer with links and copyright",
        structure: {
            type: "Footer",
            defaultProps: {
                fontFamily: "Manrope",
                backgroundColor: "#ffffff",
                paddingY: 40,
                paddingX: 48,
                fullWidth: true,
                borderTopColor: "rgba(0,0,0,0.05)",
                borderTopWidth: "1px"
            },
            columns: [{
                id: "it-footer-col",
                width: "100%",
                elements: [{
                    id: "it-footer-content",
                    type: "MinimalFooter",
                    props: {
                        brandName: "TechConsult Elite",
                        badgeText: "T",
                        badgeColor: "#0559b3",
                        links: [
                            { label: "Privacy Policy", url: "#" },
                            { label: "Terms of Service", url: "#" },
                            { label: "Global Locations", url: "#" }
                        ],
                        copyright: "© 2024 TechConsult Elite. All rights reserved.",
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(0,0,0,0.05)",
                        textColor: "#94a3b8"
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
        // HERO SECTION - Two column asymmetric layout
        // ==================================================================
        {
            key: "it-consulting-hero",
            structure: {
                id: "it-hero-section",
                type: "Hero",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    minHeight: "85vh",
                    decorativeElements: [
                        { type: "blob", top: "-10%", left: "80%", width: "400px", height: "400px", opacity: 0.08 },
                        { type: "blob", top: "90%", left: "10%", width: "400px", height: "400px", opacity: 0.06 }
                    ],
                },
                columns: [
                    {
                        id: "it-hero-left",
                        width: "60%",
                        props: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            gap: 24,
                            padding: 20
                        },
                        elements: [
                            {
                                id: "it-hero-badge",
                                type: "Badge",
                                props: {
                                    text: "Leaders in Digital Transformation",
                                    color: "#05B3AA",
                                    marginBottom: 20,
                                    bgColor: "rgba(5, 179, 170, 0.1)",
                                    showPing: true
                                }
                            },
                            {
                                id: "it-hero-title",
                                type: "Headline",
                                props: {
                                    text: "Engineering the Future of Enterprise IT",
                                    tag: "h1",
                                    align: "left",
                                    color: "#0f172a",
                                    fontWeight: "900"
                                }
                            },
                            {
                                id: "it-hero-desc",
                                type: "Paragraph",
                                props: {
                                    text: "We bridge the gap between complex technology and business outcomes. Partner with elite consultants to architect, secure, and scale your digital infrastructure.",
                                    align: "left",
                                    color: "#475569",
                                    size: "lg"
                                }
                            },
                            {
                                id: "it-hero-btns",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Explore Services",
                                    primaryLink: "/services",
                                    secondaryText: "Book Consultation",
                                    secondaryLink: "/contact",
                                    primaryBg: "#0559b3",
                                    primaryColor: "#ffffff",
                                    secondaryBg: "#ffffff",
                                    secondaryColor: "#0f172a",
                                    showPrimaryIcon: true
                                }
                            },
                        ]
                    },
                    {
                        id: "it-hero-right",
                        width: "40%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 20
                        },
                        elements: [
                            {
                                id: "it-hero-img",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARAdxFh5uEonwMZV5QevwIGSuy3RAIqbeiGCQcORULf-CHJDaDKXK9DdNWt2LECdsKGmtBvduFSzQJFA8qz4YliAcRkIqkUU1wK_E5d5ZfMW2Ob0V64g7WC5hR508m5wqA9SYogPNM1qnTp3v_X039Svtf5KcYznxGhlTK2ZGg30fPFdeAjX5y8gmS8zq4u67afdlUKSDsruxTkKK66jn9khQvuG4BBmVoECdSOwTC59-9BWBTqwKLgCEAjS7p2kq-9bYyZ5f5_BI",
                                    alt: "Modern server room with blue lighting",
                                    borderRadius: "16",
                                    shadow: "2xl"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ==================================================================
        // EXPERTISE SECTION - Header + 3 Service Cards
        // ==================================================================
        {
            key: "it-consulting-expertise-header",
            structure: {
                id: "it-expertise-header",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#f8fafc",
                    paddingY: 40,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-expertise-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16
                    },
                    elements: [
                        {
                            id: "it-expertise-label",
                            type: "Badge",
                            props: {
                                text: "Core Expertise",
                                color: "#0559b3",
                                align: "center",
                                marginBottom: 20,
                                textAlign: "center",
                                bgColor: "rgba(5, 89, 179, 0.1)",
                                showPing: false
                            }
                        },
                        {
                            id: "it-expertise-title",
                            type: "Headline",
                            props: {
                                text: "Tailored IT Strategies",
                                tag: "h2",
                                align: "center",
                                color: "#0f172a",
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-expertise-desc",
                            type: "Paragraph",
                            props: {
                                text: "Specialized solutions designed for high-growth enterprises and global firms requiring uncompromising performance.",
                                align: "center",
                                color: "#475569",
                                size: "lg"
                            }
                        }
                    ]
                }]
            }
        },
        {
            key: "it-consulting-expertise-cards",
            structure: {
                id: "it-expertise-cards",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#f8fafc",
                    paddingY: 40,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "it-expertise-col-1",
                        width: "calc(100% / 3)",
                        props: {
                            flexDirection: "column",
                            gap: 16
                        },
                        elements: [
                            {
                                id: "it-card-cloud",
                                type: "ServiceCard",
                                props: {
                                    title: "Cloud Infrastructure",
                                    description: "Scalable, secure, and cost-efficient cloud architectures optimized for global performance and high availability.",
                                    iconName: "Cloud",
                                }
                            }
                        ]
                    },
                    {
                        id: "it-expertise-col-2",
                        width: "calc(100% / 3)",
                        props: {
                            flexDirection: "column",
                            gap: 16
                        },
                        elements: [
                            {
                                id: "it-card-security",
                                type: "ServiceCard",
                                props: {
                                    title: "Cybersecurity Audit",
                                    description: "Comprehensive risk assessment and threat mitigation protocols designed to protect sensitive corporate assets and data.",
                                    iconName: "Shield",
                                }
                            }
                        ]
                    },
                    {
                        id: "it-expertise-col-3",
                        width: "calc(100% / 3)",
                        props: {
                            flexDirection: "column",
                            gap: 16
                        },
                        elements: [
                            {
                                id: "it-card-ai",
                                type: "ServiceCard",
                                props: {
                                    title: "AI Integration",
                                    description: "Leveraging advanced machine learning to automate complex workflows and drive intelligent, data-driven decisions.",
                                    iconName: "Cpu",
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ==================================================================
        // SUCCESS STORIES - 2 Case Study Cards
        // ==================================================================
        {
            key: "it-consulting-success-header",
            structure: {
                id: "it-success-header",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-success-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 16
                    },
                    elements: [
                        {
                            id: "it-success-label",
                            type: "Badge",
                            props: {
                                text: "Client Success",
                                color: "#05B3AA",
                                marginBottom: 20,
                                bgColor: "rgba(5, 179, 170, 0.1)",
                                showPing: false
                            }
                        },
                        {
                            id: "it-success-title",
                            type: "Headline",
                            props: {
                                text: "Proven Impact at Scale",
                                tag: "h2",
                                align: "left",
                                color: "#0f172a",
                                fontWeight: "900"
                            }
                        }
                    ]
                }]
            }
        },
        {
            key: "it-consulting-case-studies",
            structure: {
                id: "it-case-studies",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "it-cases-col-1",
                        width: "calc(100% / 3)",
                        props: {
                            flexDirection: "column",
                            gap: 16
                        },
                        elements: [
                            {
                                id: "it-case-1",
                                type: "FeatureCard",
                                props: {
                                    title: "Global Banking Cloud Migration",
                                    description: "How we helped a Fortune 500 bank migrate 4,000+ legacy applications to a secure hybrid cloud environment, reducing operational costs by 35%.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7Vbb7UDVBDoFxbV3xlzHvR3G4-2HzNIuYWyj-QjwBe2LpQ1OqEOp0HJIY6B-Y6ZZ7XJbD-wNGI9YmlUHzNMPDkhtvNScFjejYUJsEFNUfd0uJccJ0nb-9q6CB6POkr-eWNAt7R7PtQ9y2rm6aIRuJEcHepCt47t5Q-OhYDQdBpQJxMJtsBX8gOAETFoOETx6zqeEmUXAuNYX0e_H8871fpfbPOAua0h6Q3YlxE_gN1DyI6JBDQHuQsvEdBcq0Gb9h8UXVb-1OtG8",
                                    imageAspectRatio: "16/9",
                                    titleColor: "#0f172a",
                                    descriptionColor: "#475569",
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    padding: "16px",
                                    textAlign: "left",
                                    titleSize: "xl",
                                    fontFamily: "Manrope"
                                }
                            }
                        ]
                    },
                    {
                        id: "it-cases-col-2",
                        width: "calc(100% / 3)",
                        props: {
                            flexDirection: "column",
                            gap: 16
                        },
                        elements: [
                            {
                                id: "it-case-2",
                                type: "FeatureCard",
                                props: {
                                    title: "AI-Driven Supply Chain Optimization",
                                    description: "Implementing custom AI algorithms for a global manufacturer, resulting in a 22% increase in logistics efficiency and real-time inventory tracking.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlWA-LVNAYkU-_NUJQr4BYInGVxSP4IbHVidyXINfeLpCfjxB2zL9nF6z4hpHI8Hbk1yET1ou0jrAFMcGmQgvE0Mg9etC9vj65j3MNUCtNxsZTE3fJRZefjlNE39bmH7akB0QsguuqBSF1TIi_ut_q1Dnz6kLyNFltlez7INkhAHqtnrG7YuyoCQ-VD0sT9Ehkn7GDMgSz6ZN6SzuPfHdpYfGfIwYuLRcvFdimc261tZ8A8eSM27muM445sEUQHpfifd-yT4zSUE4",
                                    imageAspectRatio: "16/9",
                                    titleColor: "#0f172a",
                                    descriptionColor: "#475569",
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    padding: "16px",
                                    textAlign: "left",
                                    titleSize: "xl",
                                    fontFamily: "Manrope"
                                }
                            }
                        ]
                    },
                    {
                        id: "it-cases-col-3",
                        width: "calc(100% / 3)",
                        props: {
                            flexDirection: "column",
                            gap: 16
                        },
                        elements: [
                            {
                                id: "it-case-3",
                                type: "FeatureCard",
                                props: {
                                    title: "Enterprise Cybersecurity Overhaul",
                                    description: "Designed and deployed a zero-trust security framework for a healthcare conglomerate, achieving 99.9% threat detection and full regulatory compliance.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQHC2Dkv65jB6k22-qxZ1dDK-tOlyo94rg5rL9UP1qCrfQH6KMXt2vTyGv5QuXDbJUETte6Q-J7xT4Ya9fo4CPz97Q1puHcPwYbYRKmzeT_BRGZryABqW8_pV3SNz4tkGQtH8h9DQf4agBROimxqpO_TmcSO76k2-az_e7N3New9gfdiMlQI95vyZ1AgO6chFYSjGntNZfUuGAeU95Bs6hiHijxS48GaiblqKuagveAjTyP39bqcTiSk9vIsdRL7sISRpvWza9VoA",
                                    imageAspectRatio: "16/9",
                                    titleColor: "#0f172a",
                                    descriptionColor: "#475569",
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    padding: "16px",
                                    textAlign: "left",
                                    titleSize: "xl",
                                    fontFamily: "Manrope"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // Client Logos
        {
            key: "it-consulting-logos",
            structure: {
                id: "it-client-logos",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 60,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-logos-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    elements: [
                        {
                            id: "it-logos-heading",
                            type: "Paragraph",
                            props: {
                                text: "Trusted by Industry Leaders",
                                align: "center",
                                color: "#94a3b8",
                                size: "sm",
                                fontWeight: "600",
                                letterSpacing: 4,
                                marginBottom: 24
                            }
                        },
                        {
                            id: "it-logos-grid",
                            type: "ClientLogosGrid",
                            props: {
                                layout: "flex",
                                logos: [
                                    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWmbyfOVJm7UTKhcRaVGu_9_0azB1_9NGyDYB0VQXNlc8DQhHQycAKCPe3rOOIFJJld7NtHoImP7sV3n29wJMLbIuE3tUJVbqAgd2DCVEgLl02Drl5JOqGdBsCqOup6RTlOYDdkcvK8v4umHFxaegqrKiRCvuMHJD2Lpwip0DjBP4L-k3RvZwDCdZRVXnAFFLnHpN1_RVCT0IJYgLNu7V7DJTSCBUbONupomBg2MCOqlaGS7IvmrYKJOPmlOchLlI-sk83ByemQtI", alt: "Tech company logo" },
                                    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpPmR1Vy-3xIXVA9cZwQ7Z-KjhLPr6Q29ysGWB-xriil0eeI0S5uBtBmYDt6slheaH75yAg54gghC6gMxm129Gv85_Bs9S-F1J4JQfqUw1ZNjpvGGUSr276Qnxn8wobD1PmxRK925ea8_2m4-L8wWZLEQRfZtNsiaLMIUThrA0pnZYPXatOPMQEhtFLTGZjJBnBvcK4tWJ25K6DXaeY2epLmeTOGnc2uh6Lj_INGWA0og4zNMAQstMTHz6w_M9gWQho9tNxxmSr54", alt: "Logistics firm logo" },
                                    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQHC2Dkv65jB6k22-qxZ1dDK-tOlyo94rg5rL9UP1qCrfQH6KMXt2vTyGv5QuXDbJUETte6Q-J7xT4Ya9fo4CPz97Q1puHcPwYbYRKmzeT_BRGZryABqW8_pV3SNz4tkGQtH8h9DQf4agBROimxqpO_TmcSO76k2-az_e7N3New9gfdiMlQI95vyZ1AgO6chFYSjGntNZfUuGAeU95Bs6hiHijxS48GaiblqKuagveAjTyP39bqcTiSk9vIsdRL7sISRpvWza9VoA", alt: "Financial institution logo" },
                                    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABj_aA4T7OQdCv48PdU9U8YcdbSnd3a_DNOgydLZqeZ_6fg56W11vqrPSlWzCOYkXeE9IRPnB3EKZV25odb9R4bkLnJiV30LSHSHX5TZt4Kt0BGKduofkkNftyg6oglmXbf5ooJ9ob0ngXkY9hZsGw__gm5SvBROm-JyWWbl9L4P4-8FU5aWpyfPyxXY-46BpMrIdMP0hA8YTL6L1KMqCpKvAA2feY6h3dlxMz5vfBzxN9FbE0cbLqjp47xKXk--o8sEkIcNadeJA", alt: "Manufacturing giant logo" },
                                    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_tJyGYluUl5bDrmmWt0WEtC4WyOMCl1ioBJHZ4KMEqmFrd-etoMmzrfD8OuE5PiMihZm73NurgpUktSKmi2_GfERuILcOSPSXnyzkpq7gNJd9WAbeu729SlRVkDOypeH_ABZgap_El_yqLyXIir6nZksL2FdTzKW_qedb4XTWLHe5IRoW6XmjlK-qxSN7ztnDwc0QCYzja-SbEsI-cR8qrLLUO4uC_6YjaUX_2UFdskfum_wSHLQ4fEelUBmvaUXNYTkD1W4Cygg", alt: "Healthcare provider logo" }
                                ],
                                grayscale: true,
                                opacity: 0.5
                            }
                        }
                    ]
                }]
            }
        },

        // ==================================================================
        // CTA SECTION - Dark box with gradient blobs
        // ==================================================================
        {
            key: "it-consulting-cta",
            structure: {
                id: "it-cta-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 60,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-cta-col",
                    width: "100%",
                    props: {
                        padding: 60,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#0f172a",
                        borderRadius: 40,
                        gap: 24
                    },
                    elements: [
                        {
                            id: "it-cta-title",
                            type: "Headline",
                            props: {
                                text: "Ready to modernize your infrastructure?",
                                tag: "h2",
                                align: "center",
                                color: "#ffffff",
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-cta-desc",
                            type: "Paragraph",
                            props: {
                                text: "Schedule a 30-minute consultation with our senior architects to discuss your digital transformation roadmap.",
                                align: "center",
                                color: "#94a3b8",
                                size: "lg"
                            }
                        },
                        {
                            id: "it-cta-btns",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Book Your Strategy Call",
                                secondaryText: "Contact Sales",
                                primaryBg: "#ffffff",
                                primaryColor: "#0f172a",
                                secondaryBg: "rgba(255,255,255,0.1)",
                                secondaryColor: "#ffffff",
                                justifyContent: "center"
                            }
                        }
                    ]
                }]
            }
        }
    ]
};

module.exports = itConsultingHome;
