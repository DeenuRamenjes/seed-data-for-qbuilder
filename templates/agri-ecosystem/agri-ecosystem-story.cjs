/**
 * AgriEcosystem - Story/Company Page
 * Theme: Organic Agriculture, Sustainable Practices, Regenerative Farming
 * Primary Color: #32a850 (Bright Green)
 * Dark Mode: Supported
 * Fonts: Space Grotesk
 */

const agriEcosystemStory = {
    sections: [
        // --------------------------------------------------------------------------
        // SPLIT-SCREEN NARRATIVE HERO
        // --------------------------------------------------------------------------
        {
            key: "split-screen-narrative-hero",
            name: "Split-Screen Narrative Hero",
            description: "Two-column legacy vs future hero section with background images",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundImage: "https://media.istockphoto.com/id/1410255764/vector/summer-rural-landscape-with-village.jpg?s=612x612&w=0&k=20&c=gl-E9_vzaEe2IlzLtFFtm0JVJDYVSlxGIqkNA40QPAE=",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    gap: 0,
                    alignItems: "center",
                    minHeight: "600px"
                },
                columns: [
                    {
                        id: "legacy-column",
                        width: "50%",
                        props: {
                            backgroundOpacity: 0.1,
                            paddingY: 80,
                            paddingX: 48,
                            darkBackgroundColor: "#1a1f1b"
                        },
                        elements: [
                            {
                                id: "legacy-badge",
                                type: "Badge",
                                props: {
                                    text: "Our Roots (2004)",
                                    backgroundColor: "#c5d5cb",
                                    textColor: "#1b4332",
                                    fontSize: 11,
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    letterSpacing: 1.2,
                                    paddingX: 16,
                                    paddingY: 6,
                                    borderRadius: 20,
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "legacy-heading",
                                type: "Heading",
                                props: {
                                    text: "The Legacy of Earth.",
                                    tag: "h1",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 56,
                                    fontWeight: "bold",
                                    lineHeight: 1.1,
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "legacy-description",
                                type: "Paragraph",
                                props: {
                                    text: "Founded on the principles of regenerative biology, we've spent two decades healing soils across three continents. Our journey began with a simple shovel and a radical vision for soil health.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    fontSize: 16,
                                    lineHeight: 1.7,
                                    maxWidth: "450px",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "legacy-button",
                                type: "Button",
                                props: {
                                    text: "Explore Our History",
                                    href: "#history",
                                    variant: "link",
                                    backgroundColor: "transparent",
                                    textColor: "#1b4332",
                                    darkTextColor: "#32a850",
                                    fontSize: 14,
                                    fontWeight: "bold",
                                    icon: "history",
                                    iconPosition: "left"
                                }
                            }
                        ]
                    },
                ]
            }
        },

        // --------------------------------------------------------------------------
        // FOUNDER'S VISION: ASYMMETRIC LAYOUT
        // --------------------------------------------------------------------------
        {
            key: "founders-vision",
            name: "Founder's Vision Section",
            description: "Asymmetric layout with founder image and vision statement",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "founder-image-col",
                        width: "40%",
                        elements: [
                            {
                                id: "founder-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQhRVOLnpyF_TvZxK_stuI8Hqrs-6DoadXIoPbRqFpzv9rH9Kq0MdFhk7PauU03Hu2Y1fOKseNl6l5XJWsx8i9sNH2mYWo6HceHg_mdsu2eU-R0rKN3hqlrD6uBV7tvBUVBMK-jdWAhm2aOcnttkIDwl7yEdvBqeOBvFqYtGpTinl_iyw5HmOCwXhOWdqy_-zaGxYHdER0GOJjhafXREJRMzDFiis3Isq41WngWSsIcfFPEpRKdDkzvzywGFGWTsBZYsLmqxKYjjY",
                                    alt: "Dr. Aris Thorne, Founder of GreenHarvest",
                                    aspectRatio: "1/1",
                                    objectFit: "cover",
                                    borderRadius: 20,
                                    borderColor: "#ffffff",
                                    borderWidth: 8,
                                    boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                                }
                            }
                        ]
                    },
                    {
                        id: "founder-text-col",
                        width: "60%",
                        elements: [
                            {
                                id: "vision-label",
                                type: "Badge",
                                props: {
                                    text: "Founder's Vision",
                                    backgroundColor: "transparent",
                                    textColor: "#32a850",
                                    fontSize: 11,
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    letterSpacing: 3,
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "vision-heading",
                                type: "Heading",
                                props: {
                                    text: "Pioneering a regenerative revolution through technical excellence.",
                                    tag: "h2",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 44,
                                    fontWeight: "bold",
                                    lineHeight: 1.3,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "vision-intro",
                                type: "Paragraph",
                                props: {
                                    text: "Established in 2004 by Dr. Aris Thorne, GreenHarvest began as a small laboratory dedicated to microbial soil mapping. Dr. Thorne's belief was simple: the technology of the future must serve the ecology of the past.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    marginBottom: 20
                                }
                            },
                            {
                                id: "vision-conclusion",
                                type: "Paragraph",
                                props: {
                                    text: "Today, that vision has scaled into an international standard for sustainable agriculture, blending deep biology with high-precision engineering to create farms that are carbon-negative and biodiversity-positive.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "vision-quote",
                                type: "Quote",
                                props: {
                                    text: "Nature doesn't need us to innovate, it needs us to listen.",
                                    author: "Dr. Aris Thorne",
                                    backgroundColor: "#32a850",
                                    textColor: "#ffffff",
                                    authorColor: "#ffffff",
                                    borderColor: "#32a850",
                                    padding: 24,
                                    borderRadius: 12,
                                    borderWidth: 0,
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    fontStyle: "italic"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // THE GREENHARVEST METHOD: PROCESS STEPS
        // --------------------------------------------------------------------------
        {
            key: "greenharvest-method",
            name: "The GreenHarvest Method",
            description: "Five-step methodology grid with process cards",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#1b2e24",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: true,
                    layout: "grid",
                    columns: 5,
                    gap: 16,
                    alignItems: "stretch"
                },
                columns: [
                    {
                        id: "method-header",
                        width: "100%",
                        props: {
                            gridColumn: "1 / -1"
                        },
                        elements: [
                            {
                                id: "method-section-label",
                                type: "Badge",
                                props: {
                                    text: "How We Grow",
                                    backgroundColor: "transparent",
                                    textColor: "#32a850",
                                    fontSize: 11,
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    letterSpacing: 3,
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "method-title",
                                type: "Heading",
                                props: {
                                    text: "The GreenHarvest Method",
                                    tag: "h2",
                                    color: "#ffffff",
                                    darkColor: "#ffffff",
                                    fontSize: 48,
                                    fontWeight: "bold",
                                    marginBottom: 64,
                                    textAlign: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "step-1-col",
                        width: "19%",
                        elements: [
                            {
                                id: "step-1",
                                type: "FeatureCard",
                                props: {
                                    title: "01. Soil Analysis",
                                    description: "Deep-layer nutrient mapping and microbial health profiling using LiDAR sensors.",
                                    icon: "biotech",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.85)",
                                    darkDescriptionColor: "rgba(255,255,255,0.85)",
                                    layout: "vertical",
                                    padding: 28,
                                    borderRadius: 12,
                                    borderWidth: 0,
                                    minHeight: "260px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    },
                    {
                        id: "step-2-col",
                        width: "19%",
                        elements: [
                            {
                                id: "step-2",
                                type: "FeatureCard",
                                props: {
                                    title: "02. Precision Seeding",
                                    description: "Autonomous drone swarms deploying seeds at calculated depths for 98% germination.",
                                    icon: "grid_view",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.85)",
                                    darkDescriptionColor: "rgba(255,255,255,0.85)",
                                    layout: "vertical",
                                    padding: 28,
                                    borderRadius: 12,
                                    borderWidth: 0,
                                    minHeight: "260px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    },
                    {
                        id: "step-3-col",
                        width: "19%",
                        elements: [
                            {
                                id: "step-3",
                                type: "FeatureCard",
                                props: {
                                    title: "03. AI Irrigation",
                                    description: "Real-time hydration sensing that reduces water waste by 65% across all crop types.",
                                    icon: "water_drop",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.85)",
                                    darkDescriptionColor: "rgba(255,255,255,0.85)",
                                    layout: "vertical",
                                    padding: 28,
                                    borderRadius: 12,
                                    borderWidth: 0,
                                    minHeight: "260px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    },
                    {
                        id: "step-4-col",
                        width: "19%",
                        elements: [
                            {
                                id: "step-4",
                                type: "FeatureCard",
                                props: {
                                    title: "04. Smart Harvest",
                                    description: "Robotic harvesting systems that minimize soil compaction and plant stress.",
                                    icon: "precision_manufacturing",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.85)",
                                    darkDescriptionColor: "rgba(255,255,255,0.85)",
                                    layout: "vertical",
                                    padding: 28,
                                    borderRadius: 12,
                                    borderWidth: 0,
                                    minHeight: "260px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    },
                    {
                        id: "step-5-col",
                        width: "19%",
                        elements: [
                            {
                                id: "step-5",
                                type: "FeatureCard",
                                props: {
                                    title: "05. Sequestration",
                                    description: "Post-harvest soil treatment that locks carbon into the earth, verified by blockchain.",
                                    icon: "eco",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.85)",
                                    darkDescriptionColor: "rgba(255,255,255,0.85)",
                                    layout: "vertical",
                                    padding: 28,
                                    borderRadius: 12,
                                    borderWidth: 0,
                                    minHeight: "260px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // INVESTOR RELATIONS: METRICS DASHBOARD
        // --------------------------------------------------------------------------
        {
            key: "investor-relations",
            name: "Investor Relations Dashboard",
            description: "Key metrics and growth statistics with progress visualization",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#f9f8f6",
                    darkBackgroundColor: "#0a0a0a",
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "investor-text-col",
                        width: "50%",
                        elements: [
                            {
                                id: "investor-heading",
                                type: "Heading",
                                props: {
                                    text: "Invest in the Regenerative Economy.",
                                    tag: "h2",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 44,
                                    fontWeight: "bold",
                                    lineHeight: 1.3,
                                    marginBottom: 20
                                }
                            },
                            {
                                id: "investor-description",
                                type: "Paragraph",
                                props: {
                                    text: "We've delivered 140% YOY growth while simultaneously sequestering over 500k tons of CO2. Join our pool of institutional and private partners building the future of food.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    fontSize: 18,
                                    lineHeight: 1.8,
                                    maxWidth: "500px",
                                    marginBottom: 40
                                }
                            },
                            {
                                id: "investor-buttons",
                                type: "ButtonGroup",
                                props: {
                                    buttons: [
                                        {
                                            text: "Download Investor Deck",
                                            href: "#investor-deck",
                                            variant: "solid",
                                            backgroundColor: "#1b4332",
                                            textColor: "#ffffff",
                                            hoverBackgroundColor: "#0f2818"
                                        },
                                        {
                                            text: "2023 Impact Report",
                                            href: "#impact-report",
                                            variant: "outline",
                                            borderColor: "#1b4332",
                                            textColor: "#1b4332",
                                            darkTextColor: "#ffffff",
                                            darkBorderColor: "#ffffff"
                                        }
                                    ],
                                    gap: "gap-4",
                                    layout: "horizontal"
                                }
                            }
                        ]
                    },
                    {
                        id: "investor-metrics-col",
                        width: "50%",
                        props: {
                            layout: "grid",
                            columns: 2,
                            gap: 24
                        },
                        elements: [
                            {
                                id: "metric-acreage",
                                type: "BigNumberCard",
                                props: {
                                    label: "Active Acreage",
                                    value: "2.4M",
                                    icon: "landscape",
                                    iconColor: "#32a850",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1a1a1c",
                                    labelColor: "#4b5563",
                                    darkLabelColor: "#b0b8c4",
                                    valueColor: "#1b4332",
                                    darkValueColor: "#ffffff",
                                    padding: 32,
                                    borderRadius: 16,
                                    borderColor: "#e9f1eb",
                                    darkBorderColor: "#2a2a2c",
                                    borderWidth: 1
                                }
                            },
                            {
                                id: "metric-carbon",
                                type: "CircularStatCard",
                                props: {
                                    label: "Carbon Sequestration",
                                    value: "520k",
                                    unit: "tons",
                                    percentage: 50,
                                    icon: "eco",
                                    iconColor: "#32a850",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1a1a1c",
                                    labelColor: "#4b5563",
                                    darkLabelColor: "#b0b8c4",
                                    valueColor: "#1b4332",
                                    darkValueColor: "#ffffff",
                                    progressColor: "#32a850",
                                    padding: 32,
                                    borderRadius: 16,
                                    borderColor: "#e9f1eb",
                                    darkBorderColor: "#2a2a2c",
                                    borderWidth: 1
                                }
                            }
                        ]
                    }
                ]
            }
        },
        
        // --------------------------------------------------------------------------
        // FINAL CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "story-cta",
            name: "Story Page CTA",
            description: "Call-to-action for partnerships and careers",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 80,
                    paddingX: 40,
                    backgroundColor: "#32a850",
                    darkBackgroundColor: "#32a850",
                    fullWidth: true,
                    textAlign: "center"
                },
                columns: [
                    {
                        id: "cta-col",
                        width: "100%",
                        elements: [
                            {
                                id: "cta-heading",
                                type: "Heading",
                                props: {
                                    text: "Ready to sow the seeds of a better future?",
                                    tag: "h2",
                                    color: "#ffffff",
                                    darkColor: "#ffffff",
                                    fontSize: 48,
                                    fontWeight: "bold",
                                    align: "center",
                                    marginBottom: 32,
                                    maxWidth: "700px"
                                }
                            },
                            {
                                id: "cta-buttons",
                                type: "ButtonGroup",
                                props: {
                                    buttons: [
                                        {
                                            text: "Contact Partnership Desk",
                                            href: "#contact",
                                            variant: "solid",
                                            backgroundColor: "#1b4332",
                                            textColor: "#ffffff",
                                            hoverBackgroundColor: "#0f2818"
                                        },
                                        {
                                            text: "Join the Team",
                                            href: "#careers",
                                            variant: "outline",
                                            borderColor: "#ffffff",
                                            textColor: "#ffffff",
                                            hoverBackgroundColor: "rgba(255,255,255,0.1)"
                                        }
                                    ],
                                    gap: "gap-4",
                                    justifyContent: "center",
                                    layout: "horizontal"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = { agriEcosystemStory };
