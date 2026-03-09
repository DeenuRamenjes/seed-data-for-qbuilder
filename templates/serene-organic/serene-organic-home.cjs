const sereneOrganicHome = {
    header: {
        structure: {
            type: "Navbar",
            defaultProps: {},
            props: {
                logoText: "Serene Organic",
                logoIcon: "spa",
                logoIconColor: "#7bb16b",
                links: [
                    { label: "Home", href: "/" },
                    { label: "Journey", href: "/journey" },
                    { label: "Treatments", href: "/treatments" },
                    { label: "Contact", href: "/contact" }
                ],
                showButton: true,
                buttonText: "Book Now",
                buttonLink: "/contact",
                buttonRadius: "9999px",
                buttonStyle: "solid",
                buttonColor: "#ffffff",
                buttonBgColor: "#7bb16b",
                align: "center",
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                textColor: "#50652e"
            }
        }
    },
    sections: [
        // --------------------------------------------------------------------------
        // HERO
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-hero",
            name: "Home Hero",
            structure: {
                type: "SimpleHero",
                defaultProps: {},
                props: {
                    title: "SERENE ORGANIC: HOLISTIC WELLNESS FOR YOUR MIND & BODY",
                    highlightWords: "SERENE ORGANIC, WELLNESS",
                    description: "Experience the perfect harmony of nature and science with our curated organic treatments and wellness programs designed for your complete rejuvenation.",
                    ctaText: "BOOK AN APPOINTMENT",
                    ctaLink: "/contact",
                    primaryColor: "#7bb16b",
                    highlightColor: "#50652e",
                    backgroundColor: "#fdfbf4",
                    rightImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqnld_utpOMlAHW60mezY7TgMveXHcj81Awzrso4OerxbTZn21v6repRUXPx9DFsAACElng7rnoO_AJRWVJbkDSHYL0DQddWzJqF2rQgg1uF8OIsoxICXYRRn8-aCtNaiGFC_WoIhpdlo8A5qTiUAGZ4yhpBgK3K0TCBuwKZIKq1IfhzRI_HJSEbgpY7-jS7QlYC3RXXNMsccxp8HPYlXKnSX2-UfifNsszZkUd50SjdHK3DgmEJeGcPw5w_SMllDDBVYKj8hMFFid"
                }
            }
        },

        // --------------------------------------------------------------------------
        // OUR PHILOSOPHY (THREE PILLARS)
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-philosophy",
            name: "Three Pillars",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "rgba(123, 177, 107, 0.05)",
                    paddingY: 20,
                    paddingX: 24,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 64
                },
                columns: [
                    {
                        id: "philosophy-header",
                        width: "100%",
                        elements: [
                            { type: "Heading", props: { text: "Our Three Pillars", tag: "h2", size: "4xl", fontWeight: "700", color: "#50652e", align: "center", marginBottom: 16 } },
                            { type: "Paragraph", props: { text: "We believe in a three-dimensional approach to wellness that connects your physical form with your inner light.", size: "lg", color: "rgba(80, 101, 46, 0.7)", align: "center", maxWidth: "800px", margin: "0 auto" } }
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
                                type: "BusinessCard",
                                props: {
                                    numberText: "01",
                                    iconName: "Brain",
                                    title: "Mind",
                                    description: "Cultivate mental clarity and inner peace through guided meditation and cranial-sacral therapies.",
                                    buttonText: "Explore More",
                                    buttonLink: "/treatments",
                                    primaryColor: "#7bb16b",
                                    topBorderColor: "#7bb16b",
                                    backgroundColor: "#ffffff",
                                    textColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                }
                            },
                            {
                                type: "BusinessCard",
                                props: {
                                    numberText: "02",
                                    iconName: "Heart",
                                    title: "Body",
                                    description: "Nourish your physical form with organic plant-based oils and ancient manual techniques.",
                                    buttonText: "Explore More",
                                    buttonLink: "/treatments",
                                    primaryColor: "#7bb16b",
                                    topBorderColor: "#7bb16b",
                                    backgroundColor: "#ffffff",
                                    textColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                }
                            },
                            {
                                type: "BusinessCard",
                                props: {
                                    numberText: "03",
                                    iconName: "Sparkles",
                                    title: "Spirit",
                                    description: "Reconnect with your essence through energy work and nature-immersion sensory rituals.",
                                    buttonText: "Explore More",
                                    buttonLink: "/treatments",
                                    primaryColor: "#7bb16b",
                                    topBorderColor: "#7bb16b",
                                    backgroundColor: "#ffffff",
                                    textColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SIGNATURE TREATMENTS
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-treatments",
            name: "Signature Treatments",
            structure: {
                type: "AboutCard",
                defaultProps: {
                    paddingX: 24,
                    paddingY: 96,
                    image1Src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsPKlTETnjblVhxyYZ24UIe0V612HigmaVIPgDCdSTOrtzfFu_WyenVMD73SQbc8qibmCpR99HcWSzLUTMxSmhXdmswyitmLIqNW6mWJCXMw9FRc6d_tfVPX644RU5vz2LDfEpMy5k_nutsyvB107EnmE2Sc3PEiT0qkZqf9yEAlRJ-qv1ylNGNKBMnI3FD5jX1r3vJYzbqMkHxECmmHGBemjKPor6Z0pFoTpp04U4Be7BL7p210jptKjR5UNuRXg0_aQ6bTq9UAq3",
                    image1Alt: "Forest Flora Facial",
                    image2Src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhp-guNYI6WcUadaHvCHLy0FTwaSY0N4QTIcQtzm-grp6vlf727IkUKp8nf_UqDJDOc8fs3_mryh8b-VDxlRy6lSCLT963PD1NXHVjD2PErxjPfDRVoQoYTc-VNL9qc3Bc7xk88jgjaVbqk8JHY5wf2Iwlv3hbqYpCldQluG7U5EFDj6hBlUYrWS7w8cpykFVwKmoR9GB1A5ayePqLOaDqI1ZwAYk0hfL1aPmZ0vM1T2beWi-QMkIiTadtmYMcx77qFNeg2uXWlbg2",
                    image2Alt: "Earth Stone Ritual",
                    experienceNumber: "15+",
                    experienceText: "Years of Healing",
                    label: "SIGNATURE TREATMENTS",
                    title: "Discover our most beloved therapeutic experiences.",
                    description: "Our signature treatments are carefully crafted to provide deep release and profound relaxation. Each session is a unique journey utilizing nature's most potent elements and ancient restorative techniques.",
                    bulletPoints: "Forest Flora Facial (90 Mins),Earth Stone Ritual (75 Mins),Wild Meadow Bath (60 Mins),Customized Organic Blends,Guided Sensory Therapy",
                    ctaText: "See More",
                    ctaLink: "/journey",
                    cardBgColor: "#ffffff",
                    labelColor: "#50652e",
                    titleColor: "#50652e",
                    textColor: "rgba(80, 101, 46, 0.8)",
                    bulletIconColor: "#7bb16b",
                    buttonBgColor: "#7bb16b",
                    buttonTextColor: "#ffffff",
                    experienceBgColor: "#7bb16b",
                    experienceTextColor: "#ffffff"
                }
            }
        },

        // --------------------------------------------------------------------------
        // MEDIA SECTION (REPLACES JOURNAL PREVIEW)
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-journal-preview",
            name: "Nature's Wisdom Journal",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 64
                },
                columns: [
                    {
                        id: "journal-header",
                        width: "100%",
                        elements: [
                            { type: "Heading", props: { text: "Nature's Wisdom Journal", tag: "h2", size: "4xl", fontWeight: "700", color: "#50652e", align: "center", marginBottom: 16 } },
                            { type: "Paragraph", props: { text: "Insights, rituals, and seasonal guidance for maintaining your inner sanctuary in a busy world.", size: "lg", color: "rgba(80, 101, 46, 0.7)", align: "center", maxWidth: "800px", margin: "0 auto" } }
                        ]
                    },
                    {
                        id: "journal-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                type: "ModernCard",
                                props: {
                                    icon: "Leaf",
                                    title: "The Art of Morning Stillness",
                                    description: "5 rituals to center yourself before the day begins...",
                                    buttonText: "Read Article",
                                    buttonLink: "/journey",
                                    backgroundColor: "#fdfbf4",
                                    iconBgColor: "rgba(123, 177, 107, 0.1)",
                                    iconColor: "#7bb16b",
                                    titleColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                    buttonBgColor: "#7bb16b",
                                    buttonTextColor: "#ffffff"
                                }
                            },
                            {
                                type: "ModernCard",
                                props: {
                                    icon: "Coffee",
                                    title: "Botanical Brews for Sleep",
                                    description: "Our favorite seasonal herbs for deep restoration...",
                                    buttonText: "Read Article",
                                    buttonLink: "/journey",
                                    backgroundColor: "#fdfbf4",
                                    iconBgColor: "rgba(123, 177, 107, 0.1)",
                                    iconColor: "#7bb16b",
                                    titleColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                    buttonBgColor: "#7bb16b",
                                    buttonTextColor: "#ffffff"
                                }
                            },
                            {
                                type: "ModernCard",
                                props: {
                                    icon: "Sprout",
                                    title: "100% Organic Products",
                                    description: "Locally sourced and sustainably packaged for our planet.",
                                    buttonText: "Read Article",
                                    buttonLink: "/journey",
                                    backgroundColor: "#fdfbf4",
                                    iconBgColor: "rgba(123, 177, 107, 0.1)",
                                    iconColor: "#7bb16b",
                                    titleColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                    buttonBgColor: "#7bb16b",
                                    buttonTextColor: "#ffffff"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // NEWSLETTER CALL TO ACTION
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-newsletter",
            name: "Join Our Community",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#fdfbf4",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "newsletter-col",
                        width: "100%",
                        layout: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 24,
                        elements: [
                            { 
                                type: "Badge", 
                                props: { text: "STAY CONNECTED", color: "#7bb16b", bgColor: "rgba(123, 177, 107, 0.1)", align: "center" } 
                            },
                            { 
                                type: "Heading", 
                                props: { text: "Join Our Community", tag: "h2", size: "4xl", fontWeight: "700", color: "#50652e", align: "center", margin: 0 } 
                            },
                            { 
                                type: "Paragraph", 
                                props: { text: "Receive seasonal wellness tips, early access to new treatments, and special sanctuary updates.", size: "lg", color: "rgba(80, 101, 46, 0.7)", align: "center", maxWidth: "600px", margin: "0 auto" } 
                            },
                            { 
                                type: "NewsletterSignup", 
                                props: { title: "", buttonText: "Subscribe",align: "center", titleColor: "rgba(80, 101, 46, 0.7)" } 
                            }
                        ]
                    }
                ]
            }
        }
    ],

    footer: {
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "rgba(123, 177, 107, 0.05)",
            },
            props: {
                logoText: "Serene Organic",
                logoIcon: "spa",
                logoIconColor: "#7bb16b",
                description: "Crafting moments of peace and rejuvenation through the power of nature and human touch.",
                companyName: "Serene Organic Wellness",
                socialLinks: [
                    { icon: "camera", url: "#" },
                    { icon: "link", url: "#" },
                    { icon: "mail", url: "#" }
                ],
                columns: [
                    {
                        title: "Experience",
                        links: [
                            { label: "Treatments", url: "/treatments" },
                            { label: "Packages", url: "/treatments" },
                            { label: "Retreats", url: "#" },
                            { label: "Gift Cards", url: "#" }
                        ]
                    },
                    {
                        title: "About",
                        links: [
                            { label: "Philosophy", url: "/journey" },
                            { label: "Our Story", url: "/journey" },
                            { label: "Journal", url: "#" },
                            { label: "Sustainability", url: "#" }
                        ]
                    },
                    {
                        title: "Sanctuary",
                        links: [
                            { label: "123 Willow Lane, Ojai, CA", url: "#" },
                            { label: "+1 (555) 012-3456", url: "#" },
                            { label: "Tue-Sun: 9am - 7pm", url: "#" }
                        ]
                    }
                ],
                textColor: "#50652e"
            }
        }
    }
};

module.exports = sereneOrganicHome;
