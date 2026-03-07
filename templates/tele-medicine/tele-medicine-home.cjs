/**
 * Telemedicine Template - Home Page (Ethos Health)
 * Theme: Space Grotesk / Premium Telemedicine
 * Primary: #FF3075
 * Secondary: #FFEA00
 * Accent: #5763FF
 * Background: #ffffff
 */

const telemedicineHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "telemedicine-header",
        name: "Ethos Health Header",
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
                borderColor: "#f3f4f6"
            },
            props: {
                logoType: "both",
                logoText: "ETHOS",
                logoAccent: "",
                logoTextColor: "#1a1a1a",
                logoIcon: "Circle",
                logoIconColor: "#FF3075",
                links: [
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/about" },
                    { label: "Specialists", href: "/specialists" },
                    { label: "Pricing", href: "/pricing" }
                ],
                showButton: true,
                buttonText: "Begin Consultation",
                buttonLink: "/pricing",
                buttonRadius: "9999px",
                buttonStyle: "solid",
                buttonColor: "#1a1a1a",
                buttonTextColor: "#ffffff"
            }
        }
    },

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION (StyleHero)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-hero",
            name: "Telemedicine Hero",
            structure: {
                type: "StyleHero",
                defaultProps: {
                    paddingY: 100,
                    backgroundColor: "#ffffff",
                    textColor: "#1a1a1a"
                },
                props: {
                    headingLine1: "ETHOS",
                    headingLine2: "HEALTH",
                    subheading: "Where medicine meets intention. A private telemedicine practice for those who refuse to compromise on care.",
                    description: "Board-certified specialists. Military-grade encryption. 24/7 concierge access. Your health, elevated beyond the ordinary.",
                    readMoreText: "Discover Our Philosophy →",
                    readMoreLink: "/about",
                    ctaText: "APPLY FOR MEMBERSHIP",
                    ctaLink: "/pricing",
                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOF2zZt9iAWatMAfnPAT3x8L8FAS66pJ5k3xjLVo1jcrlwZr1a6Ho16eQH6JSfcVzxEJCtqrogmI5B-eoyzqQ6CypnZy7M_vZM5YbEk__ezWeRdcnrIRaYrbNrRLyoy-nss_GXh9egk49MtUIPbLO5aYlCPvBPXeBlE7P7lyKYclceC0rGN2nqzMA7FFvQ731dWMw9P9DbHZ2Uk5GMpnu1HrDiBtDCBSlazNuhq08t9uQuxkncItTgd5GPV1mijFMiVRTI6zXp4mr0",
                    accentColor: "#FF3075",
                    textColor: "#0f172a",
                    subTextColor: "#64748b",
                    bgColor: "#ffffff",
                    buttonBgColor: "#0f172a",
                    buttonTextColor: "#ffffff"
                }
            }
        },

        // --------------------------------------------------------------------------
        // PHILOSOPHY (Section + EnqCard grid)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-philosophy",
            name: "Our Philosophy",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f9fafb",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 48
                },
                columns: [
                    {
                        id: "philosophy-header",
                        width: "100%",
                        elements: [
                            { type: "Badge", props: { text: "OUR PHILOSOPHY", color: "#FF3075", bgColor: "rgba(255, 48, 117, 0.1)", align: "center" } },
                            { type: "Heading", props: { text: "Medicine is not just a service. It is a dialogue between science and the self.", tag: "h2", size: "3xl", fontWeight: "800", color: "#1a1a1a", align: "center" } }
                        ]
                    },
                    {
                        id: "philosophy-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 24,
                        elements: [
                            {
                                type: "StyleCard",
                                props: {
                                    icon: "Shield",
                                    label: "PHILOSOPHY 01",
                                    title: "Radical Privacy",
                                    description: "Discretion is the foundation of our care. We utilize military-grade encryption for all interactions.",
                                    accentColor: "var(--theme-primary)"
                                }
                            },
                            {
                                type: "StyleCard",
                                props: {
                                    icon: "Star",
                                    label: "PHILOSOPHY 02",
                                    title: "Curated Access",
                                    description: "Direct communication with top specialists, eliminating wait times and administrative layers.",
                                    accentColor: "var(--theme-accent)"
                                }
                            },
                            {
                                type: "StyleCard",
                                props: {
                                    icon: "Eye",
                                    label: "PHILOSOPHY 03",
                                    title: "Holistic Vision",
                                    description: "We look beyond the symptoms to understand the biological, environmental, and emotional context.",
                                    accentColor: "var(--theme-primary)"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CURATED SPECIALISTS (Section + FeaCard grid)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-specialists-home",
            name: "Curated Specialists",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f9fafb",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 40
                },
                columns: [
                    {
                        id: "specialists-header",
                        width: "100%",
                        elements: [
                            { type: "Heading", props: { text: "Curated Specialists", tag: "h2", size: "3xl", fontWeight: "800", color: "#0f172a", align: "center", marginBottom: 4 } },
                            { type: "Paragraph", props: { text: "Access our exclusive network of board-certified leaders in their respective fields.", color: "#64748b", size: "lg", align: "center" } }
                        ]
                    },
                    {
                        id: "specialists-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 24,
                        elements: [
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAauqNDr73RLnVeWMlJo7nUYASm_5c4HvR3oSUmzADy1tJjTMqbwarPFJkove20jYZBw_9hQeiucVxH4DrS7OHmLQlUK6QVKAuQxjw8XRBvZFVDwYfUqdZFA7Qr8DQJV44Z7iiyJJh6F586MO1Xsq9to8xSNH_hLDiwkKRnGKoMdTftlw9vD5ysAh9rSv46BO1OMfhjjaiAyiH848Vwf-0SaIT-mISZL38UqaLtNDUnC-5RZIDmarU_I7949ootq3jfsiabP7HuKtYO",
                                    rating: "4.9",
                                    reviewCount: "120+",
                                    specialtyTag: "NEUROSCIENCE",
                                    name: "Dr. Julianne Voss",
                                    description: "Neuroscience & performance optimization specialist with 15+ years of clinical experience.",
                                    availabilityText: "Tomorrow, 10:00 AM",
                                    ctaText: "Book Appointment",
                                    ctaLink: "/contact",
                                    accentColor: "#FF3075",
                                    tagColor: "#FF3075",
                                    ctaBgColor: "#FF3075"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWmag0Hb0RogBTS7SNvX3-TicLFBYTLeCzV3bS5Xkap8AeVc9GMYdwXav0qo7kHyQHWWjDtLTVX-b3unXz828PqKaavjJX7cK3tJSoRZXZIJMAdNFWFAhOxpRw49kDXT8G2ZiLp_-h9T39Cp_oFGOxipESlCqXQEQ48_JC8BLZKIAL-Os0UB8AE6tTwouxL-yW1wtrRQDN33YILbzANesytEO3ZR9074xOmghwbeUOE6qeIxzYnR-VV-TNYjy9b3D2cOb365_b9oeV",
                                    rating: "4.8",
                                    reviewCount: "95+",
                                    specialtyTag: "ENDOCRINOLOGY",
                                    name: "Dr. Aris Thorne",
                                    description: "Integrative endocrinology expert specializing in hormone optimization and metabolic health.",
                                    availabilityText: "Today, 4:30 PM",
                                    ctaText: "Book Appointment",
                                    ctaLink: "/contact",
                                    accentColor: "#5763FF",
                                    tagColor: "#5763FF",
                                    ctaBgColor: "#5763FF"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_7bgQcL1cYDPGGrgJ_HyywlkFLmapFYKbKMCA0hNtZ61OUS-tS3D3wEFXdo_v0EwhHOfYFdUbI7VFRh-gpvWhtEHHDGf7xZBp8LyjqFeicwmGs7qrftzn9rYYYvVVDsO2XIx2zRD9Lxwe8XJVV3qOzVtOBmwjhhHUBrQcsQG199QVZKTIhxWiIfr7FRSmgRY1TnQohS3qJw4-_OEFCxKVN1QELfnRVa1Gan0JxrCE1o89psEMNTPtmfqC-k6s4lawrP25CpK7Uc0Y",
                                    rating: "4.9",
                                    reviewCount: "200+",
                                    specialtyTag: "LONGEVITY",
                                    name: "Dr. Elena Moretti",
                                    description: "Preventative longevity pioneer focused on evidence-based anti-aging protocols.",
                                    availabilityText: "Wed, 9:00 AM",
                                    ctaText: "Book Appointment",
                                    ctaLink: "/contact",
                                    accentColor: "#FF3075",
                                    tagColor: "#FF3075",
                                    ctaBgColor: "#FF3075"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPVar809Zq5e1c80534leXcnoSAWAyBeqYWLfLgcUhj2x_mDgMj1mqonrPu27hGqTlqnqKQFfUIBNj-z2N25-fjFCo6oevGRGmvJFAl1jhzveB4eTeMmXbGelyH7Mih4K8ApCNjw1D73lYRghw9tpPiMVbEIIVOzRmf8knF_jAOUwglT9LyMhbf4yi0MHmWtwofkHJBTlXCp_Y_vN1diWZeut5mVZILbTeHuNTmdl7jD0q4_k1-CEjb3a1tJqeWfNUBatOBqY3Psnq",
                                    rating: "4.7",
                                    reviewCount: "85+",
                                    specialtyTag: "PSYCHOLOGY",
                                    name: "Dr. Marcus Chen",
                                    description: "Psychological health specialist combining cognitive therapy with performance coaching.",
                                    availabilityText: "Today, 2:00 PM",
                                    ctaText: "Book Appointment",
                                    ctaLink: "/contact",
                                    accentColor: "#5763FF",
                                    tagColor: "#5763FF",
                                    ctaBgColor: "#5763FF"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // STATS / TRUST SIGNALS (Section + BigNumberCard)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-stats",
            name: "Trust Stats",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#1a1a1a",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "grid",
                    columns: 1,
                    gap: 40
                },
                columns: [
                    {
                        id: "stats-header",
                        width: "100%",
                        elements: [
                            { type: "Heading", props: { text: "The Ethos Standard", tag: "h2", size: "3xl", fontWeight: "800", color: "#ffffff", align: "center", marginBottom: 8 } },
                            { type: "Paragraph", props: { text: "Measurable outcomes that define our commitment to clinical excellence.", color: "rgba(255,255,255,0.6)", size: "base", align: "center", marginBottom: 32 } }
                        ]
                    },
                    {
                        id: "stats-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 24,
                        elements: [
                            { type: "BigNumberCard", props: { value: "98%", title: "Patient Satisfaction", description: "Across all consultations", accentColor: "#FF3075" } },
                            { type: "BigNumberCard", props: { value: "500+", title: "Board-Certified Specialists", description: "Across 30+ specialties", accentColor: "#FFEA00" } },
                            { type: "BigNumberCard", props: { value: "24/7", title: "Concierge Availability", description: "Round-the-clock care", accentColor: "#5763FF" } },
                            { type: "BigNumberCard", props: { value: "15min", title: "Average Wait Time", description: "For priority members", accentColor: "#FF3075" } }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // FINAL CTA (Section with heading + button)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-cta-home",
            name: "Final CTA",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FF3075",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 24
                },
                columns: [
                    {
                        id: "cta-content",
                        width: "100%",
                        elements: [
                            { type: "Heading", props: { text: "Ready for a different standard?", tag: "h2", size: "3xl", fontWeight: "800", color: "#ffffff", align: "center", marginBottom: 8 } },
                            { type: "Paragraph", props: { text: "Experience healthcare without compromises. Membership starts with a singular conversation.", color: "rgba(255,255,255,0.9)", size: "lg", align: "center", marginBottom: 24 } },
                            { 
                                type: "ButtonGroup", 
                                props: { 
                                    justifyContent: "center", 
                                    primaryText: "Get Started", 
                                    primaryLink: "/pricing", 
                                    primaryBg: "var(--theme-primary)",
                                    primaryColor: "#ffffff",
                                    secondaryText: "Live Demo",
                                    secondaryLink: "/specialists",
                                    secondaryBg: "var(--theme-background)",
                                    secondaryColor: "var(--theme-primary)"
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
        key: "telemedicine-footer",
        name: "Ethos Footer",
        structure: {
            type: "MinimalFooter",
            defaultProps: {
                backgroundColor: "#ffffff",
                textColor: "#1a1a1a"
            },
            props: {
                logoType: "text",
                logoText: "ETHOS HEALTH",
                description: "The future of medicine is personalized, preventative, and private. Join the Ethos community.",
                copyrightPattern: "© 2023 [site]. All rights reserved.",
                columns: [
                    {
                        title: "Platforms",
                        links: [
                            { label: "Telemedicine", href: "#" },
                            { label: "Lab Analysis", href: "#" },
                            { label: "Concierge App", href: "#" }
                        ]
                    },
                    {
                        title: "Legal",
                        links: [
                            { label: "Privacy Policy", href: "#" },
                            { label: "Terms of Service", href: "#" },
                            { label: "Patient HIPAA", href: "#" }
                        ]
                    }
                ],
                socialLinks: [
                    { platform: "Instagram", href: "#" },
                    { platform: "LinkedIn", href: "#" }
                ]
            }
        }
    }
};

module.exports = telemedicineHome;
