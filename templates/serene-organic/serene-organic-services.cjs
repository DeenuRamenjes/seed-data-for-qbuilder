const sereneOrganicServices = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-services-hero",
            name: "Services Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 80,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    fullWidth: false,
                    display: "flex",
                    flexDirection: "row",
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "hero-content",
                        width: "50%", // 7/12
                        elements: [
                            {
                                type: "Badge",
                                props: {
                                    text: "OUR RITUALS",
                                    variant: "outline",
                                    color: "#7bb16b",
                                    backgroundColor: "rgba(123, 177, 107, 0.1)",
                                    marginBottom: 24
                                }
                            },
                            {
                                type: "Heading",
                                props: {
                                    text: "Nurture Your Soul in <i>Nature's</i> Embrace",
                                    tag: "h1",
                                    size: "6xl",
                                    fontWeight: "800",
                                    color: "#50652e",
                                    marginBottom: 24
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Our treatments are inspired by the rhythm of the seasons and the healing wisdom of the earth. Experience organic luxury designed to ground and restore.",
                                    size: "lg",
                                    color: "rgba(80, 101, 46, 0.8)",
                                    marginBottom: 40,
                                    maxWidth: "540px"
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Book an Experience",
                                    primaryLink: "/contact",
                                    primaryBg: "#7bb16b",
                                    primaryColor: "#ffffff",
                                    primaryBorderRadius: "9999",
                                    secondaryText: "Explore Menu",
                                    secondaryLink: "#treatments",
                                    secondaryBg: "transparent",
                                    secondaryColor: "#50652e",
                                    secondaryBorderRadius: "9999",
                                    gap: "gap-4",
                                    showPrimaryIcon: false,
                                    showSecondaryIcon: false
                                }
                            }
                        ]
                    },
                    {
                        id: "hero-image",
                        width: "50%", // 5/12
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE-6vwZopBZprIvEndTgHYq_hRZv-p3kUWkNNDLrkFdWMkUXIiB-wh2iFBebMD6OycA2flZVDXuL9JZCQmUZCD3tSlChYeI-pZKCVU58a0houJTsD9n3qBszjzybxQVlgTV21YWnIbc2eapYnJYaVFx0p1wLqjMP6VbSYQc5vG5AHUKnLKCUJjXSMkh1UMjW4U62daAcFHf6o31Ln7dIHkrMmq7-yWwvt6XbSrlStvDC0lRtVrnRxgF_RJN3hK5rluTzx_9tJJ5-yT",
                                    alt: "Spa Ritual",
                                    borderRadius: 24,
                                    aspectRatio: "16/9"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SIGNATURE HOLISTIC THERAPIES
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-holistic-therapies",
            name: "Signature Therapies",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "rgba(123, 177, 107, 0.03)",
                    fullWidth: false,
                    layout: "grid",
                    columns: 12,
                    gap: 32
                },
                columns: [
                    {
                        id: "therapies-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Heading",
                                props: {
                                    text: "Signature Holistic Therapies",
                                    tag: "h2",
                                    size: "4xl",
                                    fontWeight: "700",
                                    color: "#50652e",
                                    align: "center",
                                    marginBottom: 16
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Hand-crafted rituals using wild-harvested botanicals and ancient techniques.",
                                    size: "lg",
                                    color: "rgba(80, 101, 46, 0.7)",
                                    align: "center",
                                    maxWidth: "600px",
                                    margin: "0 auto",
                                    marginBottom: 64
                                }
                            }
                        ]
                    },
                    {
                        id: "therapy-1",
                        width: "25%",
                        elements: [
                            {
                                type: "EnqCard",
                                props: {
                                    title: "Forest Facial",
                                    price: "$145",
                                    description: "A deep oxygenating treatment using pine-infused oils and moss extracts.",
                                    primaryIcon: "Sprouts",
                                    ctaLink: "/contact",
                                    ctaText: "Learn Ritual",
                                    cardBorderRadius: 20
                                }
                            }
                        ]
                    },
                    {
                        id: "therapy-2",
                        width: "25%",
                        elements: [
                            {
                                type: "EnqCard",
                                props: {
                                    title: "Meadow Bath",
                                    price: "$120",
                                    description: "Immerse in a copper tub filled with wildflower petals, chamomile, and salts.",
                                    primaryIcon: "Droplets",
                                    ctaLink: "/contact",
                                    ctaText: "Learn Ritual",
                                    cardBorderRadius: 20
                                }
                            }
                        ]
                    },
                    {
                        id: "therapy-3",
                        width: "25%",
                        elements: [
                            {
                                type: "EnqCard",
                                props: {
                                    title: "Earth Stone",
                                    price: "$180",
                                    description: "Volcanic basalt stones and cold river rocks used to balance energy centers.",
                                    primaryIcon: "Trees",
                                    ctaLink: "/contact",
                                    ctaText: "Learn Ritual",
                                    cardBorderRadius: 20
                                }
                            }
                        ]
                    },
                    {
                        id: "therapy-4",
                        width: "25%",
                        elements: [
                            {
                                type: "EnqCard",
                                props: {
                                    title: "Sound Healing",
                                    price: "$160",
                                    description: "Tibetan singing bowls and crystal chimes to restore cellular harmony.",
                                    primaryIcon: "Music",
                                    ctaLink: "/contact",
                                    ctaText: "Learn Ritual",
                                    cardBorderRadius: 20
                                }
                            }
                        ]
                    },
                    {
                        id: "therapy-5",
                        width: "25%",
                        elements: [
                            {
                                type: "EnqCard",
                                props: {
                                    title: "Botanical Wrap",
                                    price: "$195",
                                    description: "Detoxifying wrap with wild-harvested kelp and warming ginger mud.",
                                    primaryIcon: "Leaf",
                                    ctaLink: "/contact",
                                    ctaText: "Learn Ritual",
                                    cardBorderRadius: 20
                                }
                            }
                        ]
                    },
                    {
                        id: "therapy-6",
                        width: "25%",
                        elements: [
                            {
                                type: "EnqCard",
                                props: {
                                    title: "Zen Meditation",
                                    price: "$90",
                                    description: "Guided breathwork and stillness practice in our sacred cedar grove.",
                                    primaryIcon: "Wind",
                                    ctaLink: "/contact",
                                    ctaText: "Learn Ritual",
                                    cardBorderRadius: 20
                                }
                            }
                        ]
                    },
                    {
                        id: "therapy-7",
                        width: "25%",
                        elements: [
                            {
                                type: "EnqCard",
                                props: {
                                    title: "Scalp Treatment",
                                    price: "$75",
                                    description: "Nourishing oils and acupressure to release cranial tension.",
                                    primaryIcon: "Sun",
                                    ctaLink: "/contact",
                                    ctaText: "Learn Ritual",
                                    cardBorderRadius: 20
                                }
                            }
                        ]
                    },
                    {
                        id: "therapy-8",
                        width: "25%",
                        elements: [
                            {
                                type: "EnqCard",
                                props: {
                                    title: "Moon Ritual",
                                    price: "$210",
                                    description: "A midnight therapy designed to align your rhythms with the lunar cycle.",
                                    primaryIcon: "Moon",
                                    ctaLink: "/contact",
                                    ctaText: "Learn Ritual",
                                    cardBorderRadius: 20
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // RITUAL JOURNEY
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-ritual-journey",
            name: "Your Journey to Serenity",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 120,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    fullWidth: false,
                    layout: "grid",
                    columns: 12,
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "journey-images",
                        width: "50%", // 5/12
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaizMEMW8dSH03qdLhsKX_2h8z5c3aP1etmjQ7xxiOOMLTlNf3jM0xTBdAy5k_sHXkRxB-vTDme6rNxxX6meGZUj6VQUm4uzvTKF_v8QBwx-2r8VbqlliFk1qZjBMsFOxmsbQOlmXgmTxRvWRw0OO8p99hforO_xJ5OygselTJHkTEIAvzMpl2TeRSr4YTbgQ5OpQu-CgnoZBMvXTqiUmlHNs90NmXgaAQS9K_yEKTXi3MEcQZdtwUf7rE196lf10a2HtV7-dXDFyK",
                                    alt: "Ritual Elements",
                                    borderRadius: 24,
                                    aspectRatio: "square"
                                }
                            }
                        ]
                    },
                    {
                        id: "journey-steps",
                        width: "50%", // 7/12
                        elements: [
                            {
                                type: "Heading",
                                props: {
                                    text: "Your Journey to Serenity",
                                    tag: "h2",
                                    size: "4xl",
                                    fontWeight: "700",
                                    color: "#50652e",
                                    marginBottom: 32
                                }
                            },
                            {
                                type: "ProcessStepCard",
                                props: {
                                    stepNumber: "1",
                                    title: "Aromatic Welcome",
                                    description: "Settle in with a seasonal herbal tonic and a warm botanical foot soak.",
                                    backgroundColor: "transparent"
                                }
                            },
                            {
                                type: "ProcessStepCard",
                                props: {
                                    stepNumber: "2",
                                    title: "The Main Ritual",
                                    description: "Your chosen treatment, tailored by our therapists to your current needs.",
                                    backgroundColor: "transparent"
                                }
                            },
                            {
                                type: "ProcessStepCard",
                                props: {
                                    stepNumber: "3",
                                    title: "Earth Centering",
                                    description: "Post-treatment relaxation in our sky-lit meadow room with organic snacks.",
                                    backgroundColor: "transparent"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SENSORY QUOTE
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-sensory-quote",
            name: "Sensory Quote",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 120,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 32
                },
                columns: [
                    {
                        id: "quote-content",
                        width: "100%",
                        elements: [
                            {
                                type: "Heading",
                                props: {
                                    text: '"The earth has music for those who listen. Our rituals are the quiet conversation between your skin and the ancient forest."',
                                    tag: "h3",
                                    size: "4xl",
                                    fontWeight: "400",
                                    color: "#50652e",
                                    align: "center",
                                    fontStyle: "italic",
                                    maxWidth: "800px",
                                    margin: "0 auto",
                                    lineHeight: "1.5"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "— ELARA WILDER, FOUNDER",
                                    size: "sm",
                                    fontWeight: "800",
                                    color: "#7bb16b",
                                    align: "center",
                                    marginTop: 32,
                                    letterSpacing: "0.2em"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = sereneOrganicServices;
