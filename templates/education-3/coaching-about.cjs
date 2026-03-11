const coachingHome = require('./coaching-home.cjs');

const coachingAbout = {
    header: coachingHome.header,

    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "about-hero",
            name: "About Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f7f5",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        width: "100%",
                        elements: [
                            {
                                type: "MultiImage",
                                props: {
                                    heading: "WE ARE THE\n SPARK.",
                                    description: "Founded on the belief that human potential is an untapped energy source, The Catalyst is where limits are dismantled and futures are forged.",
                                    primaryButtonText: "Our Courses",
                                    primaryButtonLink: "/courses",
                                    showSecondaryButton: false,
                                    headingColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.8)",
                                    backgroundColor: "transparent",
                                    accentColor: "#e68600",
                                    statValueColor: "#121E6D",
                                    statLabelColor: "rgba(18, 30, 109, 0.7)",
                                    showResourcesIcon: false,
                                    stats: [
                                        { value: "15+", label: "Years Experience" },
                                        { value: "500+", label: "Executives Coached" }
                                    ],
                                    images: [
                                        { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600", alt: "Executive Coaching Session", bgColor: "#121E6D" },
                                        { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600", alt: "Leadership Discussion", bgColor: "#e68600" },
                                        { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600", alt: "Corporate Seminar", bgColor: "#590094" }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // WHY CHOOSE US
        // --------------------------------------------------------------------------
        {
            key: "about-why-choose",
            name: "Why Choose The Catalyst",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#590094",
                    paddingY: 128,
                    paddingX: 24,
                    fullWidth: false,
                    layout: "grid",
                    columns: 2,
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "why-text",
                        width: "50%",
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "THE CATALYST ADVANTAGE", color: "#D3E600", bgColor: "rgba(211, 230, 0, 0.1)" }
                            },
                            {
                                type: "Heading",
                                props: { text: "Redefining Leadership Excellence", tag: "h2", size: "4xl", color: "#ffffff", fontWeight: "900" }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "We combine psychological insights with high-performance strategies. Our coaching is designed to dismantle limits and forge leaders who can navigate any challenge.",
                                    size: "lg",
                                    color: "rgba(255, 255, 255, 0.8)",
                                    marginTop: 16,
                                    marginBottom: 32
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: {
                                    title: "Neuro-Performance Strategies",
                                    icon: "Brain",
                                    iconColor: "#D3E600",
                                    textColor: "#ffffff",
                                    marginBottom: 16
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: {
                                    title: "Radical Growth Mindset",
                                    icon: "Activity",
                                    iconColor: "#D3E600",
                                    textColor: "#ffffff",
                                    marginBottom: 16
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: {
                                    title: "Elite Masterminds & Peer Networks",
                                    icon: "Network",
                                    iconColor: "#D3E600",
                                    textColor: "#ffffff",
                                    marginBottom: 32
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Start Your Transformation",
                                    primaryLink: "/courses",
                                    primaryBg: "#D3E600",
                                    primaryColor: "#121E6D",
                                    primaryBorderRadius: 12,
                                    layout: "horizontal"
                                }
                            }
                        ]
                    },
                    {
                        id: "why-features",
                        width: "50%",
                        layout: "grid",
                        columns: 2,
                        gap: 16,
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "Target",
                                    iconColor: "#D3E600",
                                    iconBg: "rgba(211, 230, 0, 0.1)",
                                    title: "Precision Focus",
                                    description: "Mastering the flow state for intense, uninterrupted productivity.",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    textColor: "#ffffff",
                                    accentColor: "#D3E600",
                                    showLink: false,
                                    style: "card",
                                    borderRadius: 24
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "Zap",
                                    iconColor: "#e68600",
                                    iconBg: "rgba(230, 134, 0, 0.1)",
                                    title: "Rapid Execution",
                                    description: "Turning ambitious strategies into immediate, decisive action.",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    textColor: "#ffffff",
                                    accentColor: "#e68600",
                                    showLink: false,
                                    style: "card",
                                    borderRadius: 24
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "Shield",
                                    iconColor: "#00c9e3",
                                    iconBg: "rgba(0, 201, 227, 0.1)",
                                    title: "Resilience",
                                    description: "Building mental fortitude to thrive under high pressure.",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    textColor: "#ffffff",
                                    accentColor: "#00c9e3",
                                    showLink: false,
                                    style: "card",
                                    borderRadius: 24
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "TrendingUp",
                                    iconColor: "#ff4d4d",
                                    iconBg: "rgba(255, 77, 77, 0.1)",
                                    title: "Scalable Growth",
                                    description: "Strategies for unconstrained personal and professional expansion.",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    textColor: "#ffffff",
                                    accentColor: "#ff4d4d",
                                    showLink: false,
                                    style: "card",
                                    borderRadius: 24
                                }
                            }
                        ]
                    },
                ]
            }
        },

        // --------------------------------------------------------------------------
        // MEET THE COACHES
        // --------------------------------------------------------------------------
        {
            key: "about-coaches",
            name: "Meet the Coaches",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 20,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "coaches-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "THE ARCHITECTS OF\n TRANSFORMATION.",
                                    tag: "h2",
                                    size: "6xl",
                                    color: "#121E6D",
                                    fontWeight: "black",
                                    className: "tracking-tighter italic uppercase mb-4"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Our coaches aren't theorists. They are battle-tested leaders, elite athletes, and master psychologists who live what they teach.",
                                    size: "lg",
                                    color: "rgba(18, 30, 109, 0.6)",
                                    className: "max-w-2xl mb-16"
                                }
                            }
                        ]
                    },
                    {
                        id: "coaches-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                type: "FeatureCard",
                                props: {
                                    title: "Marcus Thorne",
                                    description: "CEO Performance Coach",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLNOujjMyDvUGTx1GpyvDEV_DIrH6VlHjT9Knfg3P6sh-ooz-doF4j9B1pfFRZ3sKqWm47XAhBagstc7yUWxlZxUOUxf7RH5Wv_ZR07lUMp3h55hGLt80q0MmR67tdP2Ts8PfaLVKPUMpvlrgB3ZTqqtJgZxAm9ESQh3Cs96FrEVQxMSdtAeDIX8S7kZj4Zfz1j1pDLeRlWbgkmkhwjOloMrwYSGpaTOzFdaaaBbXpzPeNKbNOkK2rWUJ5Vul9AlS6oAiBbzuvjFT-",
                                    backgroundColor: "#590094",
                                    titleColor: "#ffffff",
                                    descriptionColor: "#D3E600",
                                    borderRadius: "16px",
                                    padding: "5px",
                                    textAlign: "center"
                                }
                            },
                            {
                                type: "FeatureCard",
                                props: {
                                    title: "Elena Rodriguez",
                                    description: "Flow State Specialist",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaL1kKmWMqQZN15EikT47N3TxLyYe16U3o6dUznhI2CmF8FaS7NgIk_MgmgTjb6tqpeuFgI_SYyXUNl3hPIvUt1YS-KdsM2u8WevEUKyIU7izQZzZ5XD8eWVrwWUdxYfemLBEoqkPPjmt55vQscPl8CH6exrPjXYN6eP8_mYE-4OcdhlrUCHJ-NleH9sQUia-Oik71NjcM5Qfpc1eIT4pAt2BPX4Jmy6E-czWTS2G7Qqqo30Z2FyjdmglH0zCMJzBlA626ZK2c-9Cn",
                                    backgroundColor: "#e68600",
                                    titleColor: "#ffffff",
                                    descriptionColor: "#D3E600",
                                    borderRadius: "16px",
                                    padding: "5px",
                                    textAlign: "center"
                                }
                            },
                            {
                                type: "FeatureCard",
                                props: {
                                    title: "Dr. Julian Vance",
                                    description: "Cognitive Psychologist",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASF4HjtbRShHwJVKjkOmaFI7h9Zr7cp47ky41dDFyKMlKk-BANSBNND3StEb2KJjx92WOjsKVpxFNiPByQX7nw5ClL156jhV-0eYbtltCIZwVv5JuLrZ9JjllKrgQ9VlSsHUz5vmh3hvaawPQMNvHotIE8tA0vhklOeFgOc2GmTDBZ8PZxhCDnI0HbYO3Qqvk5WlMUZHB9tvKT47yjCoUFE_4e0IDskqHaAB0AqhASwRbcpFVGWD1UQU0FweqicBmEGwQCimSbTsUo",
                                    backgroundColor: "#590094",
                                    titleColor: "#ffffff",
                                    descriptionColor: "#D3E600",
                                    borderRadius: "16px",
                                    padding: "5px",
                                    textAlign: "center"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // VALUE PROPOSITION
        // --------------------------------------------------------------------------
        {
            key: "about-value",
            name: "Value Proposition",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#D3E600",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 32
                },
                columns: [
                    {
                        id: "value-content",
                        width: "100%",
                        layout: {
                            type: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "Not your average\n coaching circle.",
                                    tag: "h2",
                                    size: "5xl",
                                    color: "#121E6D",
                                    fontWeight: "black",
                                    className: "italic uppercase mb-6 leading-tight text-center",
                                    align: "center"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "We combine ancient wisdom with neuro-science to create the fastest path to peak human performance.",
                                    size: "xl",
                                    color: "#121E6D",
                                    fontWeight: "bold",
                                    className: "mb-8 text-center",
                                    align: "center"
                                }
                            },
                            {
                                type: "Headline",
                                props: {
                                    text: "READY?",
                                    tag: "h3",
                                    size: "6xl",
                                    color: "#121E6D",
                                    fontWeight: "black",
                                    className: "mb-4 text-center",
                                    align: "center"
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Join the Catalyst",
                                    primaryLink: "/contact",
                                    primaryBg: "#121E6D",
                                    primaryColor: "#ffffff",
                                    primaryBorderRadius: "0.75rem",
                                    className: "uppercase tracking-widest text-xl font-black py-4 shadow-xl hover:bg-white hover:text-[#121E6D]",
                                    justifyContent: "center"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    footer: coachingHome.footer
};

module.exports = coachingAbout;
