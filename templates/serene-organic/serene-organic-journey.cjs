const sereneOrganicJourney = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-journey-hero",
            name: "Journey Hero",
            structure: {
                type: "CenterHero",
                defaultProps: {
                    backgroundColor: "#fcfaf5",
                },
                props: {
                    badgeText: "ARTISAN WELLNESS",
                    title: "Elevate Your Well-being",
                    lead: "A curated sanctuary for the modern soul. Discover the poetry of minimalist healing through our artisan collection.",
                    primaryCtaText: "EXPLORE THE COLLECTION",
                    primaryCtaLink: "/treatments",
                    secondaryCtaText: "OUR PHILOSOPHY",
                    secondaryCtaLink: "/about",
                    accentColor: "#7bb16b",
                    textColor: "#50652e",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_qVUpd1uOHix_TO8Ae0Lge15LgB0ZrH6wp084vOQJVw6SxEi5RCvu5oxgUWQOx3rtkmDbVOyflB2fIpHYbNyoWzuiJbIKuTDeXvuGCKTnFx57wPWXBOAid_31NhPDVC4yXhmsc5NKCyOerlRSmseYqSY8wrrCmJ8ulpTa_6YzhrItNQ5rtenyvuZcKCV4qcXkYSQFE4jc2h4VFCQz0bWXRgxBpVpNZW4AS2x8JfhzG7jOAVmd8Dd6dI0wbRefqJIRa9eZranGlaO9",
                    imageWidth: "800px"
                }
            }
        },

        // --------------------------------------------------------------------------
        // THE HEALING JOURNEY (Features Grid mapping to timeline)
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-healing-journey",
            name: "The Healing Journey",
            structure: {
                type: "Application",
                defaultProps: {
                    paddingY: 96,
                    backgroundColor: "#ffffff",
                },
                props: {
                    title: "The Healing Journey",
                    subtitle: "Harmonizing body and mind with bespoke ritual treatments and artisanal essences.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6YHb2kQRzSVsv3s9CMYfdJQnF5G3XCP8RojdVrzZJsh0Q4ts_BrPhV2zJr4W4QiSHg4m1bkQOgTaH5UUE9zIo6C8ZhUTkuZ5mlHF1R-dTRcBrM1sm076hbEPRu2NClXURdaI52UUyb3fdICS_dGJIIv57uyjGislXIU3_gAQjnGV_1yuAj9qNyzjFO6stL89-zDD7QUlZgMANIGUGkMGOMFHi8cCpFhqVUMH7eeBPKDkDogNLat0t2OSa0ZzY0a6TVOlic0UkTTV9",
                    imageAlt: "The Healing Journey",
                    showStoreButtons: false,
                    steps: [
                        {
                            icon: "Leaf",
                            title: "01 Discovery",
                            description: "Identifying your inner needs through mindful consultation and elemental analysis."
                        },
                        {
                            icon: "Sun",
                            title: "02 Alignment",
                            description: "Harmonizing body and mind with bespoke ritual treatments and artisanal essences."
                        },
                        {
                            icon: "Sparkles",
                            title: "03 Transformation",
                            description: "Embrace a renewed state of being as you integrate wellness into your daily cadence."
                        }
                    ],
                    accentColor: "#7bb16b",
                    titleColor: "#50652e",
                    stepTitleColor: "#50652e",
                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                    connectorColor: "rgba(123, 177, 107, 0.3)"
                }
            }
        },

        // --------------------------------------------------------------------------
        // SANCTUARY ATTRIBUTES (FEATURE CARDS)
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-attributes",
            name: "Sanctuary Attributes",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#fcfaf5",
                    fullWidth: false,
                    layout: "grid",
                    columns: 12,
                    gap: 20,
                    alignItems: "stretch"
                },
                columns: [
                    {
                        id: "attributes-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Heading",
                                props: {
                                    text: "Elements of the Sanctuary",
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
                                    text: "Every detail has been thoughtfully curated to elevate your restorative healing experience.",
                                    size: "lg",
                                    color: "rgba(80, 101, 46, 0.7)",
                                    align: "center",
                                    maxWidth: "600px",
                                    margin: "0 auto",
                                    marginBottom: 48
                                }
                            }
                        ]
                    },
                    {
                        id: "attr-card-1",
                        width: "25%",
                        elements: [
                            {
                                type: "FeatureCard",
                                props: {
                                    image: "https://holistichair.co.nz/cdn/shop/files/Website_banner_1800x1000_5_1600x.jpg?v=1738306483",
                                    imageAspectRatio: "4/3",
                                    title: "Organic Linens",
                                    description: "Rest upon sustainably sourced, cloud-soft linens that breathe with your skin.",
                                    icon: "Feather",
                                    iconColor: "#7bb16b",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                    layout: "vertical",
                                    padding: 16,
                                    borderRadius: 12,
                                    border: "1px solid rgba(123, 177, 107, 0.15)"
                                }
                            }
                        ]
                    },
                    {
                        id: "attr-card-2",
                        width: "25%",
                        elements: [
                            {
                                type: "FeatureCard",
                                props: {
                                    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
                                    imageAspectRatio: "4/3",
                                    title: "Botanical Infusions",
                                    description: "Inhale handcrafted essential oil blends from native flora to ground your spirit.",
                                    icon: "Leaf",
                                    iconColor: "#7bb16b",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                    layout: "vertical",
                                    padding: 16,
                                    borderRadius: 12,
                                    border: "1px solid rgba(123, 177, 107, 0.15)"
                                }
                            }
                        ]
                    },
                    {
                        id: "attr-card-3",
                        width: "25%",
                        elements: [
                            {
                                type: "FeatureCard",
                                props: {
                                    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
                                    imageAspectRatio: "4/3",
                                    title: "Soundscapes",
                                    description: "Drift away to subtle acoustic frequencies mapped to natural brainwave rhythms.",
                                    icon: "Music",
                                    iconColor: "#7bb16b",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                    layout: "vertical",
                                    padding: 16,
                                    borderRadius: 12,
                                    border: "1px solid rgba(123, 177, 107, 0.15)"
                                }
                            }
                        ]
                    },
                    {
                        id: "attr-card-4",
                        width: "25%",
                        elements: [
                            {
                                type: "FeatureCard",
                                props: {
                                    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
                                    imageAspectRatio: "4/3",
                                    title: "Ambient Lighting",
                                    description: "Bespoke luminous environments designed to synchronize with your circadian rhythm.",
                                    icon: "Sun",
                                    iconColor: "#7bb16b",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#50652e",
                                    descriptionColor: "rgba(80, 101, 46, 0.8)",
                                    layout: "vertical",
                                    padding: 16,
                                    borderRadius: 12,
                                    border: "1px solid rgba(123, 177, 107, 0.15)"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // JOIN THE CIRCLE (CTA)
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-join-circle",
            name: "Join the Circle",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#fcfaf5",
                    fullWidth: false,
                    layout: "grid",
                    columns: 12,
                    gap: 32,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "cta-content",
                        width: "100%",
                        elements: [
                            {
                                type: "Heading",
                                props: {
                                    text: "Join the Circle",
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
                                    text: "Subscribe to receive curated wellness musings, collection previews, and seasonal rituals directly to your sanctuary.",
                                    size: "lg",
                                    color: "rgba(80, 101, 46, 0.7)",
                                    align: "center",
                                    maxWidth: "600px",
                                    margin: "0 auto",
                                    marginBottom: 40
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Subscribe",
                                    primaryLink: "#",
                                    primaryBg: "#7bb16b",
                                    primaryColor: "#ffffff",
                                    primaryBorderRadius: "9999",
                                    secondaryText: "Our Philosophy",
                                    secondaryLink: "#philosophy",
                                    secondaryBg: "transparent",
                                    secondaryColor: "#50652e",
                                    secondaryBorderRadius: "9999",
                                    gap: "gap-4",
                                    justifyContent: "center",
                                    showPrimaryIcon: false,
                                    showSecondaryIcon: false
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = sereneOrganicJourney;
