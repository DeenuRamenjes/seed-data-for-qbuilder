/**
 * UrbanNest - Methodology & Construction Quality Page
 * Theme: Luxury Real Estate, Quality Craftsmanship, Transparent Process
 * Primary Color: #ecb613 (Gold)
 * Dark Mode: Supported (#0f172a background)
 * Fonts: Space Grotesk
 */

const urbanNestMethodology = {
    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // EDITORIAL HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "methodology-hero",
            name: "Editorial Hero",
            description: "Philosophy introduction with large typography",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0f172a",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "hero-content",
                        width: "100%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 32,
                            maxWidth: "900px"
                        },
                        elements: [
                            {
                                id: "hero-badge",
                                type: "Badge",
                                props: {
                                    text: "Our Philosophy",
                                    backgroundColor: "#ecb613",
                                    backgroundOpacity: 0.15,
                                    textColor: "#ecb613",
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    letterSpacing: 2,
                                    paddingX: 16,
                                    paddingY: 8,
                                    borderRadius: 4
                                }
                            },
                            {
                                id: "hero-title",
                                type: "Heading",
                                props: {
                                    text: "The Method & Quality.",
                                    tag: "h1",
                                    fontSize: 72,
                                    fontWeight: "black",
                                    color: "#1a1410",
                                    darkColor: "#ffffff",
                                    lineHeight: 0.9,
                                    letterSpacing: -1.5,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "A meticulous breakdown of the architectural lifecycle, from the raw earth of land acquisition to the precise digital pulse of smart-home handoff.",
                                    fontSize: 20,
                                    color: "#4b5563",
                                    darkColor: "#b0b0a0",
                                    fontWeight: "500",
                                    lineHeight: 1.7,
                                    maxWidth: "800px"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CONSTRUCTION LIFECYCLE TIMELINE
        // --------------------------------------------------------------------------
        {
            key: "construction-lifecycle",
            name: "6-Phase Construction Timeline",
            description: "Grid layout of 6 phase cards with images and descriptions",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#f8f8f6",
                    darkBackgroundColor: "#1a1410",
                    fullWidth: true,
                    borderTopColor: "rgba(0, 0, 0, 0.05)",
                    darkBorderTopColor: "rgba(255, 255, 255, 0.05)",
                    borderTopWidth: 1
                },
                columns: [
                    {
                        id: "timeline-header",
                        width: "100%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            gap: 32,
                            marginBottom: 80
                        },
                        elements: [
                            {
                                id: "timeline-title-group",
                                type: "Heading",
                                props: {
                                    text: "The UrbanNest Blueprint",
                                    tag: "h2",
                                    fontSize: 48,
                                    fontWeight: "black",
                                    color: "#1a1410",
                                    darkColor: "#ffffff",
                                    letterSpacing: -0.5,
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "timeline-description",
                                type: "Paragraph",
                                props: {
                                    text: "Our 6-phase construction lifecycle ensuring uncompromising quality at every square foot. We don't just build; we orchestrate.",
                                    fontSize: 16,
                                    color: "#4b5563",
                                    darkColor: "#b0b0a0",
                                    lineHeight: 1.6,
                                    maxWidth: "500px"
                                }
                            },
                            {
                                id: "timeline-established",
                                type: "Heading",
                                props: {
                                    text: "EST. 2012",
                                    tag: "div",
                                    fontSize: 56,
                                    fontWeight: "black",
                                    color: "#ecb613",
                                    darkColor: "#ecb613",
                                    opacity: 0.1
                                }
                            }
                        ]
                    },
                    {
                        id: "phase-1-card",
                        width: "33.33%",
                        elements: [
                            {
                                id: "phase-1",
                                type: "FeatureCard",
                                props: {
                                    title: "Land Acquisition",
                                    iconName: "MapPin",
                                    iconColor: "#ecb613",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVQMfR2veNLr_vagT7M1zIowR3X51itx15LncY9pQgUCVff7of_X9oJSNUzewuX_Toi2RjVY3TvgwaAdfXDlietQwTxjDBu3I5XilIL-CBXELA4d2y4Yn8iXqlY3soQiqDhcbgliaEZxFmViPfqPx2NkRzzkDIUqF2IWbQH6oJvuPG8ovhlFEXnslwhc8oIBWuqolY9AKdLo0C4_knRWIrVnUxe8oABK7OOEVHRFkEo3X1vrErr78fuR8UAOFYPtDWWqOEy_Benv4",
                                    imageAspectRatio: "16/9",
                                    description: "Sourcing geological stability and urban connectivity. Every project begins with an intensive 40-point environmental survey.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e293b",
                                    titleColor: "#1a1410",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "left"
                                }
                            }
                        ]
                    },
                    {
                        id: "phase-2-card",
                        width: "33.33%",
                        elements: [
                            {
                                id: "phase-2",
                                type: "FeatureCard",
                                props: {
                                    title: "Architectural Design",
                                    iconName: "PenTool",
                                    iconColor: "#ecb613",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-7h8CPQu4wP1SlI2Skr0dZcWrENcw8vFpPPVrpvcKJRK-8wZW3l-YiNvA7s0aB-tj3ARLr2hu2tYNeQdiQH7WLdxC4nl34OpzQYg0TdOk3hOePhOnU2j9QqUGkufxpcMwEouH4v8qZNWjeHWfACzg4jDkJMuzq9rMsWtA32rdyeaVp-SzuAmMRWPjniZ_bBzkr-CN-voyRou2mLDT-0nxz0MlWGSLkRQarTMaDt8y8iDEMIb7yyXi5iNSExTOExneH19gvnpoQdc",
                                    imageAspectRatio: "16/9",
                                    description: "Form follows function, but elegance is mandatory. We collaborate with world-class visionaries to define the urban silhouette.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e293b",
                                    titleColor: "#1a1410",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "left"
                                }
                            }
                        ]
                    },
                    {
                        id: "phase-3-card",
                        width: "33.33%",
                        elements: [
                            {
                                id: "phase-3",
                                type: "FeatureCard",
                                props: {
                                    title: "Foundation Integrity",
                                    iconName: "Home",
                                    iconColor: "#ecb613",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdj30ao-ExeWw_kp7yUl5Ycwy-25Fk4xtvmYapl2baP_9sgXt8Pkqlb8EQfceAPWJMNcxDjjhiYpJ-mgg90aNopgOMTSGQ7mXwxL6KebtjozmACyjuGHmuUeiCc172YtgTlP8XaDjlMbX6Gq6aNNaOeE92VH71OxakOQi2T6IqmC29lH8Gw7kk7xzwcsKOaU43OCueABVWPD38mkkyggZYOglGTRTwonkTgMlIhp5dJ7GhD6_Zz2nQOxpaq1ezOww3tykMcl8rCOw",
                                    imageAspectRatio: "16/9",
                                    description: "Deep-soil testing and seismic resilience. Our foundations exceed municipal requirements by a minimum factor of 1.5x.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e293b",
                                    titleColor: "#1a1410",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "left"
                                }
                            }
                        ]
                    },
                    {
                        id: "phase-4-card",
                        width: "33.33%",
                        elements: [
                            {
                                id: "phase-4",
                                type: "FeatureCard",
                                props: {
                                    title: "Structural Framework",
                                    iconName: "Building2",
                                    iconColor: "#ecb613",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI-zpri_rncAfSLL9joNJ6INEroqPb5i6N4LPZsCpzRDWC4Xb0rs2Ct9QzgZrUjZNJh6OYzV2uTvcVReGVARiSO141Hj4V_A0YyasfVDVvv1tUhL9WWBbu2DobmdCacROIXc81Ft8wOgVenHU1IBkAfS3pronNYKDMMsy0JfmEIemrBYLn-RqnxkA2cxRE2_AylA55sCDLbqkyXvu1uttb8Jy3OsknbZhFo9uuNytfD-7LCSXx5TgYwy2QktGuUv99O_D2YqV6bzA",
                                    imageAspectRatio: "16/9",
                                    description: "Precision-engineered steel and glass. We utilize low-carbon concrete mixes to reduce environmental footprint without sacrificing strength.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e293b",
                                    titleColor: "#1a1410",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "left"
                                }
                            }
                        ]
                    },
                    {
                        id: "phase-5-card",
                        width: "33.33%",
                        elements: [
                            {
                                id: "phase-5",
                                type: "FeatureCard",
                                props: {
                                    title: "Tech Integration",
                                    iconName: "Zap",
                                    iconColor: "#ecb613",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtn41dXF57P7wAJsfOrsIs0txR6PB23KnwU40AE0_6SFdQij2vqYiAQQuw7e4egUOmjhptm_IchRQT1VGBckIQBm3fM3Jq28_ZI5f4kwaD6VtL5gm0rf_xTj9Yp2VfN1_s4yktLCPMRlxy_nqpZPXFhud-UYwgN2hhW9XnjIjoOspyFgEOIfzqwWt1bOMFSZLdMaVTYg8327UPA2g6nM5Cm2s1V3rcGxEdLQGTXnZ1ueB0nwt-wHf4tK49RZ7qEvYQbdq-BKVBz4s",
                                    imageAspectRatio: "16/9",
                                    description: "The central nervous system. Fiber-optic backbones and AI-driven climate control systems integrated into the core walls.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e293b",
                                    titleColor: "#1a1410",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "left"
                                }
                            }
                        ]
                    },
                    {
                        id: "phase-6-card",
                        width: "33.33%",
                        elements: [
                            {
                                id: "phase-6",
                                type: "FeatureCard",
                                props: {
                                    title: "Smart-Home Handoff",
                                    iconName: "Key",
                                    iconColor: "#ecb613",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUL4HHdHYT7eYoXsOoIUTuld8yLVN3wzy9H8GMfFe2RZT66wILoktpCEpKTCB_Wz8UT1XI-I9XFCULCj_fCUxYofzhsdwdgdPoOL1QXmBOxxQFxuSIIGP0Z44UlfzOCtP5EYwn14r8rWT9-fNausmIHyZwA9D_0kkxcFPdzPbETGPUSDY9C2lhwD1OYUWejdbHAJTrvjodIBifGX5X4VECMoPXDhKIs-MQT6-zCxyZRCjHxrGWMYuqlv42rLMxjfZ_lJEpoKWCX9E",
                                    imageAspectRatio: "16/9",
                                    description: "Personalized onboarding. Every resident receives a digital twin of their unit for maintenance and smart control.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e293b",
                                    titleColor: "#1a1410",
                                    darkTitleColor: "#ffffff",
                                    descriptionColor: "#4b5563",
                                    darkDescriptionColor: "#b0b0a0",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "left"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TRANSPARENCY VAULT - QUALITY METRICS TABLE
        // --------------------------------------------------------------------------
        {
            key: "transparency-vault",
            name: "Quality Metrics Transparency Table",
            description: "Data table showing material specifications and certifications",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0f172a",
                    fullWidth: true,
                    borderRadius: 32
                },
                columns: [
                    {
                        id: "vault-header",
                        width: "100%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 24,
                            marginBottom: 48
                        },
                        elements: [
                            {
                                id: "vault-heading",
                                type: "Heading",
                                props: {
                                    text: "The Transparency Vault",
                                    tag: "h2",
                                    fontSize: 48,
                                    fontWeight: "black",
                                    color: "#1a1410",
                                    darkColor: "#ffffff",
                                    letterSpacing: -0.5,
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "vault-subheading",
                                type: "Paragraph",
                                props: {
                                    text: "Real-time quality metrics and material provenance data.",
                                    fontSize: 16,
                                    color: "#4b5563",
                                    darkColor: "#b0b0a0",
                                    fontWeight: "500"
                                }
                            }
                        ]
                    },
                    {
                        id: "vault-table",
                        width: "100%",
                        elements: [
                            {
                                id: "quality-metrics-table",
                                type: "DataTableRenderer",
                                props: {
                                    title: "",
                                    columns: [
                                        { key: "metric", header: "Quality Metric" },
                                        { key: "specification", header: "Specification" },
                                        { key: "source", header: "Source / Origin" },
                                        { key: "status", header: "Safety Status" },
                                        { key: "certification", header: "Certification" }
                                    ],
                                    data: [
                                        {
                                            metric: "Reinforcement Steel",
                                            specification: "Grade 60 (ASTM A615)",
                                            source: "Duisburg, Germany",
                                            status: "Pass",
                                            certification: "ISO 9001:2015"
                                        },
                                        {
                                            metric: "Concrete Compression",
                                            specification: "8,500 PSI (Avg)",
                                            source: "Local Sustainable Mix",
                                            status: "Pass",
                                            certification: "ASTM C39"
                                        },
                                        {
                                            metric: "Glazing Thermal U-Value",
                                            specification: "0.24 (Triple Glazed)",
                                            source: "Saint-Gobain, France",
                                            status: "Pass",
                                            certification: "ENERGY STAR v7"
                                        },
                                        {
                                            metric: "Smart Integration Bus",
                                            specification: "KNX Standard v3",
                                            source: "Zurich, Switzerland",
                                            status: "Pass",
                                            certification: "IEC 14543-3"
                                        },
                                        {
                                            metric: "Operational Safety Hours",
                                            specification: "450,000+",
                                            source: "Global HQ Reporting",
                                            status: "0 Incident",
                                            certification: "OSHA VPP"
                                        }
                                    ],
                                    primaryColor: "#ecb613",
                                    showExportButton: true
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // GLOBAL SUPPLY CHAIN SECTION
        // --------------------------------------------------------------------------
        {
            key: "global-supply-chain",
            name: "Global Supply Chain Overview",
            description: "Supply chain map and sourcing statistics",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#f8f8f6",
                    darkBackgroundColor: "#1a1410",
                    fullWidth: true,
                    layout: "grid",
                    columns: 12,
                    gap: 48,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "supply-chain-map",
                        width: "50%",
                        elements: [
                            {
                                id: "supply-map-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVQMfR2veNLr_vagT7M1zIowR3X51itx15LncY9pQgUCVff7of_X9oJSNUzewuX_Toi2RjVY3TvgwaAdfXDlietQwTxjDBu3I5XilIL-CBXELA4d2y4Yn8iXqlY3soQiqDhcbgliaEZxFmViPfqPx2NkRzzkDIUqF2IWbQH6oJvuPG8ovhlFEXnslwhc8oIBWuqolY9AKdLo0C4_knRWIrVnUxe8oABK7OOEVHRFkEo3X1vrErr78fuR8UAOFYPtDWWqOEy_Benv4",
                                    alt: "Global supply chain map",
                                    borderRadius: 24,
                                    height: "500px",
                                    shadowBlur: 32,
                                    shadowOpacity: 0.2
                                }
                            }
                        ]
                    },
                    {
                        id: "supply-chain-content",
                        width: "50%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 32
                        },
                        elements: [
                            {
                                id: "supply-title",
                                type: "Heading",
                                props: {
                                    text: "A Global Supply Chain.",
                                    tag: "h2",
                                    fontSize: 48,
                                    fontWeight: "black",
                                    color: "#1a1410",
                                    darkColor: "#ffffff",
                                    letterSpacing: -0.5,
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "supply-description",
                                type: "Paragraph",
                                props: {
                                    text: "We travel the world to find materials that meet our exact standards. From the quarries of Carrara to the high-tech laboratories of Tokyo, our supply chain is as transparent as it is prestigious.",
                                    fontSize: 18,
                                    color: "#4b5563",
                                    darkColor: "#b0b0a0",
                                    lineHeight: 1.7
                                }
                            },
                            {
                                id: "supply-stats",
                                type: "Heading",
                                props: {
                                    text: "14 Countries • 82 Global Partners",
                                    tag: "div",
                                    fontSize: 24,
                                    fontWeight: "bold",
                                    color: "#ecb613",
                                    darkColor: "#ecb613",
                                    marginTop: 24
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
            key: "methodology-cta",
            name: "Whitepaper + Site Tour CTA",
            description: "Call-to-action for whitepaper download and site tour booking",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 96,
                    paddingX: 24,
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0f172a",
                    fullWidth: true,
                    borderTopColor: "rgba(0, 0, 0, 0.05)",
                    darkBorderTopColor: "rgba(255, 255, 255, 0.05)",
                    borderTopWidth: 1
                },
                columns: [
                    {
                        id: "cta-content",
                        width: "100%",
                        defaultProps: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 32,
                            textAlign: "center"
                        },
                        elements: [
                            {
                                id: "cta-title",
                                type: "Heading",
                                props: {
                                    text: "Ready for a deeper dive?",
                                    tag: "h2",
                                    fontSize: 64,
                                    fontWeight: "black",
                                    color: "#1a1410",
                                    darkColor: "#ffffff",
                                    letterSpacing: -1,
                                    lineHeight: 1.0,
                                    maxWidth: "900px"
                                }
                            },
                            {
                                id: "cta-description",
                                type: "Paragraph",
                                props: {
                                    text: "Download our Technical Specification Whitepaper for a complete breakdown of our building standards and sustainability commitments.",
                                    fontSize: 18,
                                    color: "#4b5563",
                                    darkColor: "#b0b0a0",
                                    lineHeight: 1.7,
                                    maxWidth: "700px"
                                }
                            },
                            {
                                id: "cta-buttons",
                                type: "Heading",
                                props: {
                                    text: "Download Whitepaper | Book a Site Tour",
                                    tag: "div",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#ecb613",
                                    darkColor: "#ecb613",
                                    marginTop: 24
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = { urbanNestMethodology };
