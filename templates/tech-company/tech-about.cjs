/**
 * Tech Company About Page Template
 * Theme: Modern Tech/IT Solutions - Company Story
 * Primary Color: #328CE6 (Blue)
 * Dark Mode: Supported
 * Fonts: Plus Jakarta Sans
 */

const techAbout = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION - OUR STORY
        // --------------------------------------------------------------------------
        {
            key: "tech-about-hero",
            name: "About Hero Section",
            description: "Hero section with company story and mission",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 24,
                    layout: "flex",

                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 64,
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 40,
                        paddingY: 48
                    }
                },
                columns: [
                    // Left Column - Text
                    {
                        id: "hero-text",
                        width: "calc(70% - 32px)",
                        props: {
                            maxWidth: "600px",
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "hero-badge",
                                type: "Badge",
                                props: {
                                    text: "Our Story",
                                    color: "#328CE6",
                                    backgroundColor: "#F0F4F8",
                                    darkBackgroundColor: "#1A1A2E",
                                    borderRadius: 20,
                                    marginBottom: 24,
                                    fontSize: "xs",
                                    fontWeight: "bold",
                                    paddingX: 16,
                                    paddingY: 8,
                                    display: "inline-block"
                                }
                            },
                            {
                                id: "hero-title",
                                type: "Heading",
                                props: {
                                    text: "Crafting the future of digital intelligence.",
                                    tag: "h1",
                                    color: "#000000",
                                    darkColor: "#FFFFFF",
                                    size: "5xl",
                                    fontWeight: "black",
                                    lineHeight: 1.2,
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "hero-desc",
                                type: "Paragraph",
                                props: {
                                    text: "What began as a small research project in a garage has evolved into a global powerhouse for IT excellence. We don't just build software; we architect the digital backbone of tomorrow.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "hero-button",
                                type: "Button",
                                props: {
                                    text: "View our journey ↓",
                                    backgroundColor: "#000000",
                                    textColor: "#FFFFFF",
                                    darkBackgroundColor: "#FFFFFF",
                                    darkTextColor: "#000000",
                                    size: "lg",
                                    borderRadius: 12,
                                    fontWeight: "bold",
                                    paddingX: 32,
                                    paddingY: 16
                                }
                            }
                        ]
                    },
                    // Right Column - Image
                    {
                        id: "hero-image",
                        width: "calc(30% - 32px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "hero-img",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm0q6t36eaYWgRGYhJY5xYN3UhKCgSU9lZAL3XbTO1pc1O0kpHfYCY3oseGdq0q1K6E1Py4ivO3Av3CWvgX2bWBxwXaAkrJL43Ku8CPJ_CVLMydySub3Y0heR1YPgvvOjtma0WFTvGtkyG3IIrQh2IV5-m5xLgiqptOrTkH2mtbetH2nE0CI3AXlsbrFINmT30IZJRNkgpjzx7TXlV1jaBkTOB_UOqfRgle1ySRYf5eahJA22LPdKacSAQxmxgszy0YOmQ9hWYZOqy",
                                    alt: "Abstract isometric IT graphic",
                                    aspectRatio: "1/1",
                                    objectFit: "cover",
                                    borderRadius: 48,
                                    backgroundColor: "#F0F4F8",
                                    darkBackgroundColor: "#1A1A2E",
                                    borderWidth: 1,
                                    borderColor: "#E5E7EB",
                                    darkBorderColor: "#333333",
                                    padding: 24,
                                    maxWidth: "400px"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TIMELINE SECTION - THE EVOLUTION
        // --------------------------------------------------------------------------
        {
            key: "tech-about-timeline",
            name: "Evolution Timeline",
            description: "Company milestones and journey timeline",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                },
                columns: [{
                    id: "timeline-col",
                    width: "100%",
                    props: {
                        maxWidth: "1200px",
                        marginX: "auto"
                    },
                    elements: [
                        {
                            id: "timeline-items",
                            type: "TimelineSection",
                            props: {
                                milestones: [
                                    {
                                        year: "2018",
                                        title: "Foundation",
                                        description: "Tech IT was founded with a focus on bridging the gap between academic theory and industry practice in software engineering.",
                                        color: "#328CE6"
                                    },
                                    {
                                        year: "2020",
                                        title: "Going Global",
                                        description: "Expansion into 5 new international markets and the launch of our proprietary AI-driven learning platform.",
                                        color: "#328CE6"
                                    },
                                    {
                                        year: "2022",
                                        title: "Enterprise Solutions",
                                        description: "Partnered with Fortune 500 companies to deliver custom digital transformation strategies and high-end talent pipelines.",
                                        color: "#328CE6"
                                    },
                                    {
                                        year: "Today",
                                        title: "Future-Proofing",
                                        description: "Pioneering the integration of Web3 and ethical AI into corporate ecosystems worldwide.",
                                        color: "#328CE6"
                                    }
                                ],
                                backgroundColor: "#FFFFFF",
                                textColor: "#000000",
                                subtitleColor: "#666666"
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PHILOSOPHY SECTION - STATS
        // --------------------------------------------------------------------------
        {
            key: "tech-about-philosophy",
            name: "Philosophy & Stats",
            description: "Company philosophy with key statistics",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F5F5F5",
                    darkBackgroundColor: "#1A1A2E",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 24,
                    borderTopWidth: 1,
                    borderTopColor: "#E5E7EB",
                    darkBorderTopColor: "#333333",
                    borderBottomWidth: 1,
                    borderBottomColor: "#E5E7EB",
                    darkBorderBottomColor: "#333333",
                    layout: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 24,
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 24,
                        paddingY: 48
                    }
                },
                columns: [
                    {
                        id: "philosophy-header",
                        width: "100%",
                        props: {
                            maxWidth: "1200px",
                            marginX: "auto"
                        },
                        elements: [
                            {
                                id: "philosophy-title",
                                type: "Heading",
                                props: {
                                    text: "Our Philosophy",
                                    tag: "h2",
                                    color: "#000000",
                                    darkColor: "#FFFFFF",
                                    size: "4xl",
                                    fontWeight: "bold",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "philosophy-desc",
                                type: "Paragraph",
                                props: {
                                    text: "We believe that technology shouldn't be a barrier, but a bridge. Our approach combines rigorous technical excellence with a human-centric design philosophy.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    maxWidth: "700px",
                                    marginBottom: 64
                                }
                            }
                        ]
                    },
                    {
                        id: "stat-1",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "stat-1-number",
                                type: "Heading",
                                props: {
                                    text: "10k+",
                                    tag: "h3",
                                    color: "#328CE6",
                                    size: "5xl",
                                    fontWeight: "black",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "stat-1-label",
                                type: "Paragraph",
                                props: {
                                    text: "Students graduated from our specialized IT tracks.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "base",
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    },
                    {
                        id: "stat-2",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "stat-2-number",
                                type: "Heading",
                                props: {
                                    text: "250+",
                                    tag: "h3",
                                    color: "#328CE6",
                                    size: "5xl",
                                    fontWeight: "black",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "stat-2-label",
                                type: "Paragraph",
                                props: {
                                    text: "Enterprise solutions deployed across 15 countries.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "base",
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    },
                    {
                        id: "stat-3",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "stat-3-number",
                                type: "Heading",
                                props: {
                                    text: "98%",
                                    tag: "h3",
                                    color: "#328CE6",
                                    size: "5xl",
                                    fontWeight: "black",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "stat-3-label",
                                type: "Paragraph",
                                props: {
                                    text: "Placement rate for our advanced bootcamp alumni.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "base",
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // GLOBAL REACH SECTION
        // --------------------------------------------------------------------------
        {
            key: "tech-about-global",
            name: "Global Reach Section",
            description: "Company global presence and operations",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "row",
                    gap: 64,
                    alignItems: "center",
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 40
                    }
                },
                columns: [
                    // Left Column - Text
                    {
                        id: "global-text",
                        width: "calc(33% - 32px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "global-title",
                                type: "Heading",
                                props: {
                                    text: "Global Reach",
                                    tag: "h2",
                                    color: "#000000",
                                    darkColor: "#FFFFFF",
                                    size: "4xl",
                                    fontWeight: "bold",
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "global-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Operating across continents, our network of partners and consultants ensures we stay at the forefront of local and global tech trends.",
                                    color: "#666666",
                                    darkColor: "#999999",
                                    size: "base",
                                    lineHeight: 1.7,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "hq-item",
                                type: "Paragraph",
                                props: {
                                    text: "● Headquarters: San Francisco, CA",
                                    color: "#000000",
                                    darkColor: "#FFFFFF",
                                    size: "sm",
                                    fontWeight: "bold",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "regional-item",
                                type: "Paragraph",
                                props: {
                                    text: "● Regional Hubs: London, Berlin, Singapore",
                                    color: "#000000",
                                    darkColor: "#FFFFFF",
                                    size: "sm",
                                    fontWeight: "bold",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "partners-item",
                                type: "Paragraph",
                                props: {
                                    text: "● 20+ Partner Locations Worldwide",
                                    color: "#000000",
                                    darkColor: "#FFFFFF",
                                    size: "sm",
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    },
                    // Right Column - Image
                    {
                        id: "global-visual",
                        width: "calc(67% - 32px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "global-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm0q6t36eaYWgRGYhJY5xYN3UhKCgSU9lZAL3XbTO1pc1O0kpHfYCY3oseGdq0q1K6E1Py4ivO3Av3CWvgX2bWBxwXaAkrJL43Ku8CPJ_CVLMydySub3Y0heR1YPgvvOjtma0WFTvGtkyG3IIrQh2IV5-m5xLgiqptOrTkH2mtbetH2nE0CI3AXlsbrFINmT30IZJRNkgpjzx7TXlV1jaBkTOB_UOqfRgle1ySRYf5eahJA22LPdKacSAQxmxgszy0YOmQ9hWYZOqy",
                                    alt: "Global operations map",
                                    aspectRatio: "16/9",
                                    objectFit: "cover",
                                    borderRadius: 32,
                                    backgroundColor: "#F5F5F5",
                                    darkBackgroundColor: "#1A1A2E",
                                    borderWidth: 1,
                                    borderColor: "#E5E7EB",
                                    darkBorderColor: "#333333"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TEAM SECTION - LEADERSHIP
        // --------------------------------------------------------------------------
        {
            key: "tech-about-team",
            name: "Leadership Team",
            description: "Meet the company leadership",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 24,
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 24,
                        paddingY: 48
                    }
                },
                columns: [
                    {
                        id: "team-header",
                        width: "100%",
                        props: {
                            maxWidth: "1200px",
                            marginX: "auto"
                        },
                        elements: [
                            {
                                id: "team-title",
                                type: "Heading",
                                props: {
                                    text: "Meet the Visionaries",
                                    tag: "h2",
                                    color: "#000000",
                                    darkColor: "#FFFFFF",
                                    size: "4xl",
                                    fontWeight: "bold",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "team-desc",
                                type: "Paragraph",
                                props: {
                                    text: "A leadership team blending decades of experience in silicon valley and global education.",
                                    color: "#999999",
                                    size: "base"
                                }
                            }
                        ]
                    },
                    {
                        id: "member-1",
                        width: "calc(25% - 24px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "member-1-card",
                                type: "LeadershipCard",
                                props: {
                                    name: "Alex Rivera",
                                    title: "Founder & CEO",
                                    level: "Executive",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH7emjnRyQ1xHYnTJ_xhntQpnCVhD4DJQ437NoQaY9rv7DzsjO-e-rynbt13lfv6LuwKKTbdzK0B4N4ziGqWMZr3y4uEd0NP5gPOWRuZxe4MybuerV9SYUuV6eegPsn-s-tAWIt1x51BmuJLeQMUztFMicgcGq5754AckWc00yDkeFV2o2CSrZ2R8ak8PRuqFcrOVBwRdGlkppltbT7a2yWQOKrRwN-qzd1oVIEo8u2MZgosoBTWyuJWfNAovl4pJHS7kEPWR14zlW",
                                    department: "Leadership",
                                    bgColor: "#FFFFFF",
                                    borderColor: "#383838",
                                    levelBgColor: "#328CE6",
                                    levelTextColor: "#000000"
                                }
                            }
                        ]
                    },
                    {
                        id: "member-2",
                        width: "calc(25% - 24px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "member-2-card",
                                type: "LeadershipCard",
                                props: {
                                    name: "Sarah Chen",
                                    title: "CTO",
                                    level: "Executive",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByxBdxL6_Hf9l9kKrTedm_5oUmEQJJmpkXJdqrCFs2CNXsp9pt2csK4Jgpx3yXM9Ad08aTOTMi82vqQrqUMRwW9lBymZVRMUFdMvykAiWFT45-Yx9mWO8IeaIbnixqhyfNqoph_LLRJLBXLhalcGl8IfVdPfDujBhx0jaL5uzLkjeotqJMa_yS731GA2x2K9BsNJQ4CKwUT6FMz8ZhKUE88q3G3i1yrakEFuKtxTRf16IywiKQnlDQ-lq-mu4uYMjw4mihrw_ExHLM",
                                    department: "Technology",
                                    bgColor: "#FFFFFF",
                                    borderColor: "#383838",
                                    levelBgColor: "#328CE6",
                                    levelTextColor: "#000000"
                                }
                            }
                        ]
                    },
                    {
                        id: "member-3",
                        width: "calc(25% - 24px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "member-3-card",
                                type: "LeadershipCard",
                                props: {
                                    name: "Marcus Bell",
                                    title: "Head of Curriculum",
                                    level: "Director",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW2DaXxm5nH6jD1yIJVGL-dHJkXyHIRR3LLY5DHQM0vR4jTktnORhbZro8n4rjLiFuPmdf2bW7I-WHL2yZTEA2_6ZL9i1hahlBgBe52XWzWIGGlZEs_qthl-h62D4CFG1q_YtQLPIvMlQJ5BNQ1PkZIEqU9Bmuis1bBbevcoHPsCJLEUvf-MG7d48e_LpOLQHtD0YfCN22K4RUq0qwYGFHrTfTpW3j1uxwxLnTAZ2rRbsloHXx6F25xrbwT8gcoBy62W2N0H0FEgkl",
                                    department: "Education",
                                    bgColor: "#FFFFFF",
                                    borderColor: "#383838",
                                    levelBgColor: "#328CE6",
                                    levelTextColor: "#000000"
                                }
                            }
                        ]
                    },
                    {
                        id: "member-4",
                        width: "calc(25% - 24px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "member-4-card",
                                type: "LeadershipCard",
                                props: {
                                    name: "Elena Gomez",
                                    title: "Lead Product Designer",
                                    level: "Director",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbtaFKjY8aMSb0jrC4C5tBqpG-dhJU2ECOcBnYjAp6fdNnGVrl1nd3JbxMyVpak_ZylhHCIXuexiHmotIMbSwelMN0DzKlRqj-vFqyLOcKCLsH30HFnN0JVDZ3ALvPBhoJDUFsTce5Ekv5j9KH0i-u7h7d8n1s7Kky2tF6szYzEStCjvfKYosDLS7HogLZI_nYi_5OzdDPVJAaG8WKGoBPgG4IIzkjGuNBizSAQOiIngOW-LWbD4rdUAvnDvy9A1qWFEK0Q9p53Jvw",
                                    department: "Design",
                                    bgColor: "#FFFFFF",
                                    borderColor: "#383838",
                                    levelBgColor: "#328CE6",
                                    levelTextColor: "#000000"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CORE VALUES SECTION
        // --------------------------------------------------------------------------
        {
            key: "tech-about-values",
            name: "Core Values Section",
            description: "Company core values and principles",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 24,
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 24,
                        paddingY: 48
                    }
                },
                columns: [
                    {
                        id: "values-header",
                        width: "100%",
                        props: {
                            maxWidth: "1200px",
                            marginX: "auto",
                            textAlign: "center"
                        },
                        elements: [
                            {
                                id: "values-heading",
                                type: "Heading",
                                props: {
                                    text: "Core Values",
                                    tag: "h2",
                                    color: "#000000",
                                    darkColor: "#FFFFFF",
                                    size: "4xl",
                                    fontWeight: "bold",
                                    marginBottom: 16,
                                    textAlign: "center"
                                }
                            },
                            {
                                id: "values-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "The principles that drive our everyday innovation.",
                                    color: "#999999",
                                    size: "lg",
                                    marginBottom: 0,
                                    textAlign: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "value-1",
                        width: "calc(25% - 24px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "value-1-card",
                                type: "CultureValue",
                                props: {
                                    title: "Transparency",
                                    description: "Open communication in everything we do, from internal processes to student feedback.",
                                    iconName: "check_circle",
                                    bgColor: "#FFFFFF",
                                    borderColor: "#E5E7EB",
                                    accentColor: "#328CE6"
                                }
                            }
                        ]
                    },
                    {
                        id: "value-2",
                        width: "calc(25% - 24px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "value-2-card",
                                type: "CultureValue",
                                props: {
                                    title: "Innovation",
                                    description: "Constantly pushing boundaries and exploring the latest in AI and development.",
                                    iconName: "lightbulb",
                                    bgColor: "#FFFFFF",
                                    borderColor: "#E5E7EB",
                                    accentColor: "#328CE6"
                                }
                            }
                        ]
                    },
                    {
                        id: "value-3",
                        width: "calc(25% - 24px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "value-3-card",
                                type: "CultureValue",
                                props: {
                                    title: "Community",
                                    description: "Building a supportive ecosystem where tech enthusiasts can thrive together.",
                                    iconName: "people",
                                    bgColor: "#FFFFFF",
                                    borderColor: "#E5E7EB",
                                    accentColor: "#328CE6"
                                }
                            }
                        ]
                    },
                    {
                        id: "value-4",
                        width: "calc(25% - 24px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "value-4-card",
                                type: "CultureValue",
                                props: {
                                    title: "Excellence",
                                    description: "Striving for the highest quality in every module and line of code we deliver.",
                                    iconName: "star",
                                    bgColor: "#FFFFFF",
                                    borderColor: "#E5E7EB",
                                    accentColor: "#328CE6"
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
            key: "tech-about-cta",
            name: "Final CTA Section",
            description: "Call to action to start the journey",
            structure: {
                type: "Section",
                defaultProps: {
                    // backgroundColor: "#",
                    // darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 24
                },
                columns: [{
                    id: "cta-col",
                    width: "100%",
                    props: {
                        maxWidth: "900px",
                        marginX: "auto",
                        textAlign: "center"
                    },
                    elements: [
                        {
                            id: "cta-heading",
                            type: "Heading",
                            props: {
                                text: "Ready to start your journey?",
                                tag: "h2",
                                color: "#000000",
                                size: "4xl",
                                fontWeight: "bold",
                                marginBottom: 24,
                                align: "center"
                            }
                        },
                        {
                            id: "cta-desc",
                            type: "Paragraph",
                            props: {
                                text: "Join thousands of others who are transforming their careers through our IT programs.",
                                color: "#666666",
                                size: "lg",
                                lineHeight: 1.6,
                                marginBottom: 40,
                                align: "center"
                            }
                        },
                        {
                            id: "cta-buttons",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Explore courses",
                                primaryBg: "#328CE6",
                                primaryTextColor: "#FFFFFF",
                                secondaryText: "Contact sales",
                                secondaryBg: "transparent",
                                secondaryBorder: "#666666",
                                secondaryTextColor: "#FFFFFF",
                                gap: "gap-4",
                                layout: "center",
                                justifyContent: "center",
                                 alignItems: "center"
                            }
                        }
                    ]
                }]
            }
        }
    ]
};

module.exports = techAbout;
