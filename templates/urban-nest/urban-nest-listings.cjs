/**
 * UrbanNest - Property Listings & Showcase Page
 * Theme: Luxury Real Estate Property Showcase
 * Primary Color: #ecb613 (Gold)
 * Dark Mode: Supported
 * Fonts: Space Grotesk
 */

const urbanNestListings = {
    // ============================================================================
    // FEATURED PROPERTIES CAROUSEL
    // ============================================================================
    sections: [
        {
            key: "featured-properties-carousel",
            name: "Featured Properties Carousel",
            description: "Horizontal scrolling carousel showcasing flagship property listings",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 0,
                    paddingX: 0,
                    backgroundColor: "#1a1410",
                    darkBackgroundColor: "#1a1410",
                    fullWidth: true,
                    minHeight: "100vh"
                },
                columns: [
                    {
                        id: "carousel-container",
                        width: "100%",
                        elements: [
                            {
                                id: "featured-carousel",
                                type: "HorizontalCarouselRenderer",
                                props: {
                                    title: "",
                                    primaryColor: "#ecb613",
                                    textColor: "#ffffff",
                                    darkTextColor: "#ffffff",
                                    subtextColor: "#b0b0a0",
                                    darkSubtextColor: "#b0b0a0",
                                    showNavigation: true,
                                    navigationColor: "#ecb613",
                                    items: [
                                        {
                                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXxnjhroPLUdDBGebKsxjVe9bjT31msZxzGo9-mZM-o45xCe9rpHBciaUdjOWYp0qw412PTPqFZbuAQDVfiGX4vj8hS2Gfh2GYo76AWHZnWtHA3fJz6H6yvuvEyBoBbcDPxLAnlVv3pX15IXUEDH12usVpgl09BQHaeSgowHrPqptN9q-k9epqtn7EGuLFkYLV80JJA2CDc0v-Jc6MteChICaBYxEjsgSCzkxksgTU0NLfMc_jMEMrVmTxOx-d11nQI32DXGPiuNA",
                                            label: "Central District",
                                            title: "The Skyline Penthouse",
                                            description: "An architectural masterpiece suspended 60 stories above the city, blending organic materials with hyper-connected intelligence."
                                        },
                                        {
                                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWajDLQbVso9d0PuwR2TlS3l0mQCM53iZd7VVSallNSeLJwaFOKZwIXW07oK36CK5jQFZg3kACMig8A_0Okpe64VmtIx4dlRL8ibOVg-nuoFyjVEdevL2AfTZXFXW0ws-61M_1bMfsy-eHXESBJFJz52DGYtVJgIhb2N3D_3PDEX7KHUjFe-tj5iwDT8t4ipcFcUFe2HYTJmYe3S_pZJbxHrd4-FBbak13Po-35s789tDvSeapIsOy6TRmaL1vhiAlCEkHmyJ5Ons",
                                            label: "Waterfront District",
                                            title: "The Oasis Villa",
                                            description: "A serene sanctuary featuring minimalist design, zero-edge infinity pools, and seamless indoor-outdoor living."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // PROPERTY DETAILS SECTION
        // --------------------------------------------------------------------------
        {
            key: "property-details-section",
            name: "Property Details & Specifications",
            description: "Comprehensive property information with blueprint and material details",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#1a1410",
                    darkBackgroundColor: "#1a1410",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "details-left-col",
                        width: "60%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 48
                        },
                        elements: [
                            // Blueprint Section
                            {
                                id: "blueprint-section",
                                type: "Heading",
                                props: {
                                    text: "The Blueprint",
                                    tag: "h3",
                                    fontSize: 36,
                                    fontWeight: "bold",
                                    color: "#ecb613",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "blueprint-heading",
                                type: "Heading",
                                props: {
                                    text: "Architectural Configuration",
                                    tag: "h2",
                                    fontSize: 48,
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "blueprint-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6uO-EA23euNkde83yBcUcVAuSLTdrVbf0Iyq6hSNirWz6fFvUKGsr2PNiHdrTgt3n5jsbLGhrwrQGbdrphjRitoGDQgXQmgMZHqDy2aAz2B-YcDy6Qeug79K0a3aRkNvIurLNAkbtTIrE6PlqB1tl05J1OrGrN4iOhFuHVTMd8ts5jg52vzKoaOp48tP5PX_Inv1ztQTKIc4J_DuXZJ7kOf0jU21IalpoBWgRqgN205h691weQwO97kIa3ivvjvDt7bo8Vi81LU8",
                                    alt: "Architectural floor plan",
                                    borderRadius: 24,
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    height: "400px",
                                    marginBottom: 32
                                }
                            }
                        ]
                    },
                    {
                        id: "details-right-col",
                        width: "40%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 32
                        },
                        elements: [
                            {
                                id: "smart-tech-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Smart Tech Integration",
                                    iconName: "Zap",
                                    iconColor: "#ecb613",
                                    description: "Climate Intelligence with AI-driven temperature control, biometric security, circadian lighting, and integrated whole-home voice automation.",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    titleColor: "#ffffff",
                                    descriptionColor: "#b0b0a0",
                                    padding: 32,
                                    borderRadius: 16,
                                    marginBottom: "32px"
                                }
                            },
                            {
                                id: "concierge-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Concierge Services",
                                    iconName: "Sparkles",
                                    iconColor: "#ecb613",
                                    description: "24/7 dedicated support with private jet catering, on-site sommelier, and comprehensive wellness & spa management.",
                                    backgroundColor: "rgba(236, 182, 19, 0.1)",
                                    titleColor: "#ffffff",
                                    descriptionColor: "#b0b0a0",
                                    padding: 32,
                                    borderRadius: 16
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // NEIGHBORHOOD ANALYTICS SECTION
        // --------------------------------------------------------------------------
        {
            key: "neighborhood-analytics",
            name: "Neighborhood Analytics",
            description: "Location data, commute scores, and neighborhood insights",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#0f172a",
                    darkBackgroundColor: "#0f172a",
                    fullWidth: true,
                    borderTopColor: "rgba(255, 255, 255, 0.05)",
                    borderTopWidth: 1,
                    layout: "grid",
                    columns: 12,
                    gap: 24,
                    alignItems: "stretch"
                },
                columns: [
                    {
                        id: "analytics-header",
                        width: "100%",
                        defaultProps: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            marginBottom: 80,
                            gap: 32
                        },
                        elements: [
                            {
                                id: "analytics-title-group",
                                type: "Paragraph",
                                props: {
                                    text: "Neighborhood Analytics",
                                    fontSize: 48,
                                    fontWeight: "bold",
                                    color: "#ffffff"
                                }
                            },
                            {
                                id: "analytics-filters",
                                type: "Paragraph",
                                props: {
                                    text: "Amenities • Growth Trends • Commute",
                                    fontSize: 14,
                                    fontWeight: "600",
                                    color: "#ecb613",
                                    display: "flex",
                                    gap: 16
                                }
                            }
                        ]
                    },
                    {
                        id: "card-commute-score",
                        width: "23.5%",
                        elements: [
                            {
                                type: "BigNumberCard",
                                props: {
                                    label: "Commute Score",
                                    value: "98/100",
                                    description: "3 minutes to Central Metro Station. 12 minutes to International Airport.",
                                    icon: "train",
                                    iconColor: "#ecb613",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    labelColor: "#4b5563",
                                    darkLabelColor: "#b0b0a0",
                                    valueColor: "#1e293b",
                                    darkValueColor: "#ffffff",
                                    padding: 32,
                                    borderRadius: 16,
                                    border: "1px solid rgba(255, 255, 255, 0.1)"
                                }
                            }
                        ]
                    },
                    {
                        id: "card-growth",
                        width: "23.5%",
                        elements: [
                            {
                                type: "BigNumberCard",
                                props: {
                                    label: "5-Year Growth",
                                    value: "+24.8%",
                                    description: "Outperforming district average by 8.2% annually.",
                                    icon: "trending_up",
                                    iconColor: "#10b981",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    labelColor: "#4b5563",
                                    darkLabelColor: "#b0b0a0",
                                    valueColor: "#1e293b",
                                    darkValueColor: "#ffffff",
                                    padding: 32,
                                    borderRadius: 16,
                                    border: "1px solid rgba(255, 255, 255, 0.1)"
                                }
                            }
                        ]
                    },
                    {
                        id: "card-greenery",
                        width: "23.5%",
                        elements: [
                            {
                                type: "BigNumberCard",
                                props: {
                                    label: "Greenery Index",
                                    value: "A+",
                                    description: "Proximity to Central Park and private garden access.",
                                    icon: "park",
                                    iconColor: "#ecb613",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    labelColor: "#4b5563",
                                    darkLabelColor: "#b0b0a0",
                                    valueColor: "#1e293b",
                                    darkValueColor: "#ffffff",
                                    padding: 32,
                                    borderRadius: 16,
                                    border: "1px solid rgba(255, 255, 255, 0.1)"
                                }
                            }
                        ]
                    },
                    {
                        id: "card-walkability",
                        width: "23.5%",
                        elements: [
                            {
                                type: "BigNumberCard",
                                props: {
                                    label: "Walkability Score",
                                    value: "94",
                                    description: "Michelin-star dining and luxury retail within 500m.",
                                    icon: "directions_walk",
                                    iconColor: "#ecb613",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "rgba(255, 255, 255, 0.05)",
                                    labelColor: "#4b5563",
                                    darkLabelColor: "#b0b0a0",
                                    valueColor: "#1e293b",
                                    darkValueColor: "#ffffff",
                                    padding: 32,
                                    borderRadius: 16,
                                    border: "1px solid rgba(255, 255, 255, 0.1)"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = { urbanNestListings };
