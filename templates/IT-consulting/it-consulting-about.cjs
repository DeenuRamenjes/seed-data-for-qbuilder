/**
 * IT Consulting Template - About Page
 * Sections: Hero w/ background image, Narrative, Timeline, Values, CTA
 */

const itConsultingAbout = {
    sections: [
        // ==================================================================
        // HERO - Full-width background image with overlay
        // ==================================================================
        {
            key: "it-about-hero",
            structure: {
                id: "it-about-hero-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#0f172a",
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwTCsSMz6oIZ9pw4ptszRNxOisGuT3YOtkbUfgIcvjpi5-jY3Ol2XOq_wuPqWaTw7fsTK4nqKZ5Os1ktUEYrKekxUhR0JeNmpWybUnHYVkpNYe_TKLLiOkaUtX73t7hU0vjwnSKE7wJTFN8jHMEYX5hcL6jF3jdnFnvMgq-zPA8vGkiEsRUJM-3gWV_c3S-WClkBhSR4F3PxQcDz1R1PbtTbQB7M0lD_O0Durb-ajScZENvjIl8REUfV9SHFdyZNs5LEVddiwokrM",
                    backgroundOverlay: "rgba(15, 23, 42, 0.65)",
                    paddingY: 120,
                    paddingX: 48,
                    fullWidth: true,
                    minHeight: 500,
                },
                columns: [{
                    id: "it-about-hero-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20
                    },
                    elements: [
                        {
                            id: "it-about-hero-badge",
                            type: "Badge",
                            props: {
                                text: "Our Legacy",
                                align: "center",
                                textAlign: "center",
                                marginBottom: 20,
                                color: "#05B3AA",
                                bgColor: "rgba(5, 179, 170, 0.2)",
                                showPing: false
                            }
                        },
                        {
                            id: "it-about-hero-title",
                            type: "Headline",
                            props: {
                                text: "Engineering Excellence Since 2005",
                                tag: "h1",
                                align: "center",
                                color: "#ffffff",
                                marginBottom: 10,
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-about-hero-desc",
                            type: "Paragraph",
                            props: {
                                text: "A journey of two decades, transforming global enterprises through the lens of human-centric technology.",
                                align: "center",
                                color: "rgba(255,255,255,0.8)",
                                size: "xl"
                            }
                        }
                    ]
                }]
            }
        },

        // ==================================================================
        // NARRATIVE - Two column: Text + Stats | Image
        // ==================================================================
        {
            key: "it-about-narrative",
            structure: {
                id: "it-about-narrative-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 40,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "it-about-text-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            gap: 20,
                            padding: 20
                        },
                        elements: [
                            {
                                id: "it-about-narr-title",
                                type: "Headline",
                                props: {
                                    text: "Our DNA is Digital",
                                    tag: "h2",
                                    align: "left",
                                    color: "#0f172a",
                                    marginTop: 30,
                                    marginBottom: 30,
                                    fontWeight: "800"
                                }
                            },
                            {
                                id: "it-about-narr-desc",
                                type: "Paragraph",
                                props: {
                                    text: "EliteIT was founded on a singular principle: that technology should be an enabler of business vision, not a barrier to it. In an era where complexity often stifles innovation, we provide the clarity required to move forward. EliteIT was founded on a singular principle: that technology should be an enabler of business vision",
                                    align: "left",
                                    color: "#475569",
                                    size: "lg"
                                }
                            },
                            {
                                id: "it-about-stats",
                                type: "StatsSection",
                                props: {
                                    stats: [
                                        { number: 500, label: "Global Clients", format: "+" },
                                        { number: 15, label: "Offices Worldwide", format: "+" },
                                        { number: 99, label: "Success Rate", format: "%" }
                                    ],
                                    backgroundColor: "transparent",
                                    textColor: "#0f172a",
                                    accentColor: "#0559b3"
                                }
                            }
                        ]
                    },
                    {
                        id: "it-about-img-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 20
                        },
                        elements: [
                            {
                                id: "it-about-narr-img",
                                type: "Image",
                                props: {
                                    aspectRatio: "4/3",
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCKP-MStJhE3zTCB5PqaBy_VxoHV2PdPsxzV1bxmGvf9pyuSgdEr2ItT2dPUK5Y3HpveIjScqTnQ_Ma9hbEWHcBNA8LiZcbItJeZJ-eIX5hbWZ-udFEuk305XdBZCR6gh-8Uv-WSWasELDKyKxMctLiY3vEMeWMof7u1HoiNeUPBuXOX8_qvtmmJ5iCARAVzm4De-U96jYbLxK7JkV7GfDXdfFI3qnI9LCHJyHkPSoioW_qIS363XDjcwgm3rZPm6DMZSRKcFn9eI",
                                    alt: "Collaborative team working in a creative space",
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
        // TIMELINE - Company milestones
        // ==================================================================
        {
            key: "it-about-timeline",
            structure: {
                id: "it-about-timeline-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 60,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-about-timeline-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    elements: [
                        {
                            id: "it-about-timeline-badge",
                            type: "Badge",
                            props: {
                                text: "Our Journey",
                                align: "center",
                                color: "#0559b3",
                                marginBottom: 20,
                                bgColor: "rgba(5, 89, 179, 0.1)",
                                showPing: false
                            }
                        },
                        {
                            id: "it-about-timeline",
                            type: "InteractiveTimeline",
                            props: {
                                title: "Our milestone",
                                description: "journey of Our success",
                                items: [
                                    {
                                        year: "2005",
                                        title: "The Inception",
                                        description: "EliteIT opens its doors in Manhattan. Starting as a boutique infrastructure firm, we quickly gained reputation for tackling the projects others deemed 'impossible'.",
                                        icon: "Rocket"
                                    },
                                    {
                                        year: "2012",
                                        title: "Crossing Borders",
                                        description: "Expansion into London and Singapore. We transformed from a local specialist into a global consultancy, supporting Fortune 500 companies across three continents.",
                                        icon: "Globe"
                                    },
                                    {
                                        year: "2018",
                                        title: "Cloud Pioneer Era",
                                        description: "At the dawn of the cloud revolution, we partnered with AWS and Azure to lead massive digital transformations, migrating legacy systems into agile, scalable environments.",
                                        icon: "Cloud"
                                    },
                                    {
                                        year: "2024",
                                        title: "AI & Ethical Tech",
                                        description: "Today, we are at the forefront of the AI frontier. Our focus is on building responsible, ethical, and highly-performant AI solutions that drive real-world value.",
                                        icon: "Cpu"
                                    }
                                ],
                                accentColor: "#0559b3",
                                secondaryColor: "#05B3AA"
                            }
                        }
                    ]
                }]
            }
        },

        // ==================================================================
        // VALUES - 3 Feature Cards
        // ==================================================================
        {
            key: "it-about-values-header",
            structure: {
                id: "it-about-values-header-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#f8fafc",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-about-values-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 16
                    },
                    elements: [{
                        id: "it-about-values-title",
                        type: "Headline",
                        props: {
                            text: "The Values That Drive Us",
                            tag: "h2",
                            align: "center",
                            color: "#0f172a",
                            fontWeight: "900"
                        }
                    }]
                }]
            }
        },
        {
            key: "it-about-values-cards",
            structure: {
                id: "it-about-values-cards-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#f8fafc",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "it-value-col-1",
                        width: "calc(100% / 4)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-value-integrity",
                            type: "ServiceCard",
                            props: {
                                title: "Integrity First",
                                cardAlignment: "center",
                                description: "We provide honest, transparent advice, even when it's not what people want to hear.",
                                iconName: "ShieldCheck",
                            }
                        }]
                    },
                    {
                        id: "it-value-col-2",
                        width: "calc(100% / 4)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-value-innovation",
                            type: "ServiceCard",
                            props: {
                                title: "Radical Innovation",
                                cardAlignment: "center",
                                description: "We don't just follow trends; we create them. Our R&D labs are constantly testing new frontiers.",
                                iconName: "Lightbulb",
                            }
                        }]
                    },
                    {
                        id: "it-value-col-3",
                        width: "calc(100% / 4)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-value-human",
                            type: "ServiceCard",
                            props: {
                                title: "Human Centric",
                                cardAlignment: "center",
                                description: "Technology is a tool for people. We design every solution with the end-user's experience at the core.",
                                iconName: "Users",
                            }
                        }]
                    },
                    {
                        id: "it-value-col-4",
                        width: "calc(100% / 4)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-value-excellence",
                            type: "ServiceCard",
                            props: {
                                title: "Continuous Excellence",
                                cardAlignment: "center",
                                description: "We pursue relentless improvement, setting higher benchmarks with every project we deliver.",
                                iconName: "Award",
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // CTA - Gradient accent section
        // ==================================================================
        {
            key: "it-about-cta",
            structure: {
                id: "it-about-cta-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-about-cta-col",
                    width: "100%",
                    props: {
                        padding: 60,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#0559b3",
                        borderRadius: 32,
                        gap: 24
                    },
                    elements: [
                        {
                            id: "it-about-cta-title",
                            type: "Headline",
                            props: {
                                text: "Ready to write your next chapter?",
                                tag: "h2",
                                align: "center",
                                color: "#ffffff",
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-about-cta-desc",
                            type: "Paragraph",
                            props: {
                                text: "Join the hundreds of market leaders who have chosen EliteIT as their strategic partner for digital excellence.",
                                align: "center",
                                color: "rgba(255,255,255,0.8)",
                                size: "lg"
                            }
                        },
                        {
                            id: "it-about-cta-btns",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Work With Us",
                                secondaryText: "View Careers",
                                primaryBg: "#ffffff",
                                primaryColor: "#0559b3",
                                secondaryBg: "rgba(255,255,255,0.15)",
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

module.exports = itConsultingAbout;
