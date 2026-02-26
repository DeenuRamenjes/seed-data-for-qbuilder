/**
 * AgriEcosystem - Supply Chain Page
 * Theme: Organic Agriculture, Sustainable Practices, Regenerative Farming
 * Primary Color: #32a850 (Bright Green)
 * Dark Mode: Supported (#102215 background)
 * Fonts: Space Grotesk
 */

const agriEcosystemSupplyChain = {
    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION: NON-LINEAR LAYOUT
        // --------------------------------------------------------------------------
        {
            key: "supply-chain-hero",
            name: "Supply Chain Hero Section",
            description: "Asymmetric hero with text left and image right with overlay card",
            structure: {
                type: "Hero",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    paddingY: 80,
                    paddingX: 80,
                    fullWidth: true,
                    layoutType: "asymmetric",
                    flexDirection: "row",
                    alignItems: "stretch",
                    justifyContent: "space-between",
                    gap: 48,
                    minHeight: "600px"
                },
                columns: [
                    {
                        id: "hero-left-col",
                        width: "45%",
                        props: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            gap: 24
                        },
                        elements: [
                            {
                                id: "hero-badge",
                                type: "Badge",
                                props: {
                                    text: "Certified Supply Chain",
                                    backgroundColor: "#32a850",
                                    backgroundOpacity: 0.1,
                                    textColor: "#32a850",
                                    borderColor: "#32a850",
                                    borderWidth: 1,
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    letterSpacing: 1.5,
                                    paddingX: 12,
                                    paddingY: 6,
                                    borderRadius: 24,
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "hero-heading",
                                type: "Heading",
                                props: {
                                    text: "From Soil to Seaport.",
                                    tag: "h1",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 56,
                                    fontWeight: "bold",
                                    lineHeight: 1.1,
                                    letterSpacing: -0.02,
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Sophisticated end-to-end logistics infrastructure ensuring nature's best reaches the global market with technical precision and carbon-neutral protocols.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    fontSize: 18,
                                    lineHeight: 1.8,
                                    maxWidth: "500px",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "hero-stats-container",
                                type: "Heading",
                                props: {
                                    text: "142+ Global Hubs     <     4hr Farm to Hub",
                                    tag: "div",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    marginTop: 32,
                                    marginBottom: 0
                                }
                            }
                        ]
                    },
                    {
                        id: "hero-right-col",
                        width: "55%",
                        props: {
                            flexDirection: "column",
                            alignItems: "stretch",
                            justifyContent: "center"
                        },
                        elements: [
                            {
                                id: "hero-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6NQwtmTG4-_wZ2VttyijxBxxhbu78KeZKOeGgilRIHNjzqvuO3AAGXVpca7k_knvDN_7t9aDWLQFH3CIrTzige6PMio17BgkAIPYcG5JDXGPyrQUz8S3VsXkznvLcApooQnzoGPucBJddDcy0EKzuaAMCBU1jmEtcHcmQXA4iClshqCd21Dy6_Ot57d762xBy4s3EGmzHUHl7OoRKulw1zkZpYft6gBF1ucaENSR-P_BLl0XNDfHZwN_l5dBy3zqMGL2fkpa0iHM",
                                    alt: "Professional cargo ship at a modern port terminal",
                                    aspectRatio: "16/10",
                                    objectFit: "cover",
                                    borderRadius: 16,
                                    borderColor: "#e9f1eb",
                                    borderWidth: 1,
                                    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // GLOBAL EXPORT NETWORK SECTION
        // --------------------------------------------------------------------------
        {
            key: "global-export-network",
            name: "Global Export Network",
            description: "World map visualization with distribution hubs",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "network-col",
                        width: "100%",
                        elements: [
                            {
                                id: "network-header",
                                type: "Heading",
                                props: {
                                    text: "Global Export Network",
                                    tag: "h2",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 36,
                                    fontWeight: "bold",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "network-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Live trade routes and distribution nodes across 4 continents.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    fontSize: 16,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "network-map-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt5U0Om2LSKahwd1wGGPKPekPL43m45isuK4p-0emueLjJmxTZnjN7gvJYCIh_PpD1p5xnB1R3wkuRC74-sIHmw2vn8FuynUPy9pD6JBadgPDbxNCVU5rl0c5S2Q3mp-JLtt1uR931fHkGYcT15h0jzkLlBs5HTKo3_UD939oCiNBXBqX2frrcf9UjOHlUf37-InoJ0ornRqX4ljPyi5mK-REQR-JS4HGzcRXiib8pZ5DPOPH9yXvppE_21Ebi5CiEaTWT7BZJbKU",
                                    alt: "Simplified world map with glowing green logistics routes",
                                    aspectRatio: "21/9",
                                    objectFit: "contain",
                                    borderRadius: 16,
                                    borderColor: "#32a850",
                                    borderWidth: 1,
                                    borderOpacity: 0.2,
                                    backgroundColor: "#f9f8f6",
                                    darkBackgroundColor: "#0c1a10"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // INNOVATION PILLARS: FEATURE CARDS GRID
        // --------------------------------------------------------------------------
        {
            key: "innovation-pillars",
            name: "Innovation Pillars Grid",
            description: "Three-column grid showcasing key supply chain innovations",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: true,
                    layout: "grid",
                    columns: 3,
                    gap: 24,
                    alignItems: "stretch"
                },
                columns: [
                    {
                        id: "pillar-cold-chain",
                        width: "33.33%",
                        elements: [
                            {
                                id: "cold-chain-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Precision Cold-Chain",
                                    description: "IoT-integrated reefers maintain constant temperatures within 0.5°C of target. Real-time atmospheric monitoring prevents spoilage.",
                                    icon: "ac_unit",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.8)",
                                    darkDescriptionColor: "rgba(255,255,255,0.8)",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 16,
                                    borderWidth: 0,
                                    minHeight: "320px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    },
                    {
                        id: "pillar-quality",
                        width: "33.33%",
                        elements: [
                            {
                                id: "quality-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Quality QA Protocols",
                                    description: "Mandatory 5-step vetting process including spectroscopic analysis and organic certification at every transit hub.",
                                    icon: "verified_user",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.8)",
                                    darkDescriptionColor: "rgba(255,255,255,0.8)",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 16,
                                    borderWidth: 0,
                                    minHeight: "320px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    },
                    {
                        id: "pillar-tracking",
                        width: "33.33%",
                        elements: [
                            {
                                id: "tracking-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Real-Time Tracking",
                                    description: "GPS and RFID integration provides continuous visibility across the global supply chain with sub-meter accuracy.",
                                    icon: "location_on",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.8)",
                                    darkDescriptionColor: "rgba(255,255,255,0.8)",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 16,
                                    borderWidth: 0,
                                    minHeight: "320px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    },
                    {
                        id: "pillar-blockchain",
                        width: "33.33%",
                        elements: [
                            {
                                id: "blockchain-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Blockchain Transparency",
                                    description: "Immutable ledger records every transaction, ensuring complete traceability from farm to consumer.",
                                    icon: "security",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.8)",
                                    darkDescriptionColor: "rgba(255,255,255,0.8)",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 16,
                                    borderWidth: 0,
                                    minHeight: "320px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    },
                    {
                        id: "pillar-sustainability",
                        width: "33.33%",
                        elements: [
                            {
                                id: "sustainability-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Sustainability Analytics",
                                    description: "Carbon footprint tracking and emissions analysis for every shipment. Commitment to net-zero logistics by 2030.",
                                    icon: "eco",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.8)",
                                    darkDescriptionColor: "rgba(255,255,255,0.8)",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 16,
                                    borderWidth: 0,
                                    minHeight: "320px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    },
                    {
                        id: "pillar-routing",
                        width: "33.33%",
                        elements: [
                            {
                                id: "routing-card",
                                type: "FeatureCard",
                                props: {
                                    title: "Smart Route Optimization",
                                    description: "AI-powered logistics algorithms minimize transit time and cost while prioritizing freshness and sustainability metrics.",
                                    icon: "route",
                                    iconColor: "#ffffff",
                                    backgroundColor: "#32a850",
                                    darkBackgroundColor: "#32a850",
                                    titleColor: "#ffffff",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "rgba(255,255,255,0.8)",
                                    darkDescriptionColor: "rgba(255,255,255,0.8)",
                                    layout: "vertical",
                                    padding: 32,
                                    borderRadius: 16,
                                    borderWidth: 0,
                                    minHeight: "320px",
                                    justifyContent: "space-between"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TRANSPARENCY LEDGER: DATA TABLE
        // --------------------------------------------------------------------------
        {
            key: "transparency-ledger",
            name: "Transparency Ledger",
            description: "Public ledger of active shipments with real-time tracking",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "ledger-col",
                        width: "100%",
                        elements: [
                            {
                                id: "ledger-header",
                                type: "Heading",
                                props: {
                                    text: "Transparency Ledger",
                                    tag: "h2",
                                    color: "#1b4332",
                                    darkColor: "#ffffff",
                                    fontSize: 36,
                                    fontWeight: "bold",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "ledger-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Public ledger of shipments, origin batches, and sustainability scores.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    fontSize: 16,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "tracking-table",
                                type: "TrackingTable",
                                props: {
                                    title: "Live Shipment Tracking",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#0a0a0c",
                                    textColor: "#1b4332",
                                    darkTextColor: "#ffffff",
                                    headerBgColor: "#f9f8f6",
                                    darkHeaderBgColor: "#0a0a0c",
                                    borderColor: "#e9f1eb",
                                    darkBorderColor: "#1a1a1c",
                                    shipments: [
                                        {
                                            id: "GH-9023-X1",
                                            origin: "Andean Orchards, Peru",
                                            destination: "Rotterdam Terminal",
                                            status: "transit",
                                            temperature: 4.2,
                                            temperatureTarget: 4.0,
                                            eta: "Oct 14, 2023",
                                            mode: "directions_boat",
                                            sustainabilityScore: "A+"
                                        },
                                        {
                                            id: "GH-8812-B2",
                                            origin: "Victoria Plains, Australia",
                                            destination: "Tokyo Logistics Hub",
                                            status: "departed",
                                            temperature: 3.8,
                                            temperatureTarget: 4.0,
                                            eta: "Oct 12, 2023",
                                            mode: "flight_takeoff",
                                            sustainabilityScore: "A"
                                        },
                                        {
                                            id: "GH-7230-M0",
                                            origin: "Nile Delta Hub, Egypt",
                                            destination: "European Hub",
                                            status: "customs",
                                            temperature: 5.1,
                                            temperatureTarget: 4.0,
                                            eta: "Oct 18, 2023",
                                            mode: "local_shipping",
                                            sustainabilityScore: "B+"
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
        // FINAL CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "supply-chain-cta",
            name: "Supply Chain Partnership CTA",
            description: "Call-to-action for partnerships",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 80,
                    paddingX: 24,
                    backgroundColor: "#1b4332",
                    darkBackgroundColor: "#0a0a0a",
                    fullWidth: true,
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
                                    text: "Integrate Our Supply Chain.",
                                    tag: "h2",
                                    color: "#ffffff",
                                    darkColor: "#ffffff",
                                    fontSize: 40,
                                    fontWeight: "bold",
                                    align: "center",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "cta-description",
                                type: "Paragraph",
                                props: {
                                    text: "Whether you are a retail chain or a global distributor, GreenHarvest provides the data API and logistics muscle to power your fresh produce requirements.",
                                    color: "#b0b8c4",
                                    darkColor: "#b0b8c4",
                                    fontSize: 18,
                                    lineHeight: 1.8,
                                    maxWidth: "700px",
                                    align: "center",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "cta-buttons",
                                type: "ButtonGroup",
                                props: {
                                    buttons: [
                                        {
                                            text: "Request Partnership",
                                            href: "#partnership",
                                            variant: "solid",
                                            backgroundColor: "#32a850",
                                            textColor: "#1b4332",
                                            hoverBackgroundColor: "#2a9340"
                                        },
                                        {
                                            text: "Download Network Map (PDF)",
                                            href: "#download",
                                            variant: "outline",
                                            borderColor: "rgba(255,255,255,0.2)",
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
    ],

};

module.exports = { agriEcosystemSupplyChain };
