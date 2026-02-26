/**
 * CarePlus Template - Clinical Programs Page
 * Theme: Modern Healthcare / Medical / Hospital
 * Primary Color: #008080 (Teal)
 * Secondary Color: #004D4D
 * Background: #FFFFFF / #F8FAFC
 * Fonts: Plus Jakarta Sans (Headings), Inter (Body)
 */

const careplusPrograms = {
    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "careplus-programs-hero",
            name: "Programs Hero",
            description: "Simple centered hero with title and description",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F8FAFC",
                    paddingY: 80,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [{
                    id: "hero-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        maxWidth: "900px",
                        margin: "0 auto"
                    },
                    elements: [
                        {
                            id: "hero-heading",
                            type: "Heading",
                            props: {
                                text: "Our Clinical Programs",
                                tag: "h1",
                                align: "center",
                                color: "#0F172A",
                                size: "5xl",
                                fontWeight: "bold"
                            }
                        },
                        {
                            id: "hero-description",
                            type: "Paragraph",
                            props: {
                                text: "Science-backed health optimization protocols designed to reverse chronic conditions and unlock your peak physiological potential.",
                                align: "center",
                                color: "#64748B",
                                size: "lg"
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CLINICAL PROGRAMS GRID SECTION
        // --------------------------------------------------------------------------
        {
            key: "careplus-programs-grid",
            name: "Clinical Programs",
            description: "3-column grid of program cards with features",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    paddingY: 80,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [{
                    id: "programs-grid-col",
                    width: "100%",
                    layout: "grid",
                    columns: 3,
                    gap: 32,
                    elements: [
                        // Program Card 1: Diabetes Reversal
                        {
                            id: "program-diabetes",
                            type: "ServiceCard",
                            props: {
                                icon: "FlaskConical",
                                title: "Diabetes Reversal",
                                description: "A comprehensive clinical protocol aimed at restoring insulin sensitivity and eliminating medication dependency.",
                                features: [
                                    "HbA1c reduction & stabilization",
                                    "Continuous Glucose Monitoring (CGM)",
                                    "Personalized nutritional therapy"
                                ],
                                backgroundColor: "#FFFFFF",
                                textColor: "#0F172A",
                                accentColor: "#008080",
                                borderRadius: "16",
                                shadow: "sm",
                                ctaText: "Learn More",
                                ctaVariant: "outline"
                            }
                        },
                        // Program Card 2: Cardiac Wellness
                        {
                            id: "program-cardiac",
                            type: "ServiceCard",
                            props: {
                                icon: "Heart",
                                title: "Cardiac Wellness",
                                description: "Advanced cardiovascular care focused on inflammation reduction and plaque stabilization for longevity.",
                                features: [
                                    "Advanced lipid profiling (ApoB, Lp(a))",
                                    "Blood pressure management",
                                    "Cardiac endurance training"
                                ],
                                backgroundColor: "#FFFFFF",
                                textColor: "#0F172A",
                                accentColor: "#008080",
                                borderRadius: "16",
                                shadow: "sm",
                                ctaText: "Learn More",
                                ctaVariant: "outline"
                            }
                        },
                        // Program Card 3: Longevity & Vitality
                        {
                            id: "program-longevity",
                            type: "ServiceCard",
                            props: {
                                icon: "Zap",
                                title: "Longevity & Vitality",
                                description: "Optimizing metabolic health and hormonal balance to enhance quality of life and healthspan.",
                                features: [
                                    "Hormonal optimization & HRT",
                                    "Mitochondrial health support",
                                    "Sleep & stress resilience protocols"
                                ],
                                backgroundColor: "#FFFFFF",
                                textColor: "#0F172A",
                                accentColor: "#008080",
                                borderRadius: "16",
                                shadow: "sm",
                                ctaText: "Learn More",
                                ctaVariant: "outline"
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // HOW IT WORKS SECTION (3-step process)
        // --------------------------------------------------------------------------
        {
            key: "careplus-how-it-works",
            name: "How it Works",
            description: "3-step process with numbered circles",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F8FAFC",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    // Header
                    {
                        id: "hiw-header-col",
                        width: "100%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: 64
                        },
                        elements: [
                            {
                                id: "hiw-heading",
                                type: "Heading",
                                props: {
                                    text: "How it Works",
                                    tag: "h2",
                                    align: "center",
                                    color: "#0F172A",
                                    size: "4xl",
                                    fontWeight: "bold"
                                }
                            },
                            {
                                id: "hiw-description",
                                type: "Paragraph",
                                props: {
                                    text: "Our structured 3-step approach to lasting health transformation.",
                                    align: "center",
                                    color: "#64748B",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    // Steps Grid
                    {
                        id: "hiw-steps-col",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 48,
                        elements: [
                            // Step 1
                            {
                                id: "step-1",
                                type: "ProcessStepCard",
                                props: {
                                    stepNumber: "1",
                                    title: "Deep Assessment",
                                    description: "Comprehensive blood work, lifestyle analysis, and genetic screening to understand your unique biology.",
                                    accentColor: "#008080",
                                    textColor: "#0F172A",
                                    subtitleColor: "#64748B"
                                }
                            },
                            // Step 2
                            {
                                id: "step-2",
                                type: "ProcessStepCard",
                                props: {
                                    stepNumber: "2",
                                    title: "Personalized Plan",
                                    description: "Customized nutritional, supplemental, and movement protocols tailored to your specific clinical markers.",
                                    accentColor: "#008080",
                                    textColor: "#0F172A",
                                    subtitleColor: "#64748B"
                                }
                            },
                            // Step 3
                            {
                                id: "step-3",
                                type: "ProcessStepCard",
                                props: {
                                    stepNumber: "3",
                                    title: "Continuous Support",
                                    description: "Real-time coaching, monthly lab reviews, and adjustments to ensure you hit and maintain your goals.",
                                    accentColor: "#008080",
                                    textColor: "#0F172A",
                                    subtitleColor: "#64748B"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // ENROLLMENT PLANS SECTION (Comparison Table)
        // --------------------------------------------------------------------------
        {
            key: "careplus-enrollment-plans",
            name: "Enrollment Plans",
            description: "Pricing comparison table with features",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    // Header
                    {
                        id: "plans-header-col",
                        width: "100%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: 64
                        },
                        elements: [
                            {
                                id: "plans-heading",
                                type: "Heading",
                                props: {
                                    text: "Enrollment Plans",
                                    tag: "h2",
                                    align: "center",
                                    color: "#0F172A",
                                    size: "4xl",
                                    fontWeight: "bold"
                                }
                            },
                            {
                                id: "plans-description",
                                type: "Paragraph",
                                props: {
                                    text: "Select the level of care that matches your health goals.",
                                    align: "center",
                                    color: "#64748B",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    // Comparison Table
                    {
                        id: "plans-table-col",
                        width: "100%",
                        elements: [
                            {
                                id: "plans-table",
                                type: "ComparisonTable",
                                props: {
                                    accentColor: "#008080",
                                    textColor: "#0F172A",
                                    backgroundColor: "#FFFFFF",
                                    features: [
                                        "Monthly Lab Panels",
                                        "Personalized Nutrition Plan",
                                        "Bi-weekly Health Coaching",
                                        "Genetic Analysis (WGS)",
                                        "Wearable Data Integration"
                                    ],
                                    items: [
                                        {
                                            name: "Essential Care",
                                            "Monthly Lab Panels": true,
                                            "Personalized Nutrition Plan": true,
                                            "Bi-weekly Health Coaching": false,
                                            "Genetic Analysis (WGS)": false,
                                            "Wearable Data Integration": false
                                        },
                                        {
                                            name: "Advanced Protocol",
                                            "Monthly Lab Panels": true,
                                            "Personalized Nutrition Plan": true,
                                            "Bi-weekly Health Coaching": true,
                                            "Genetic Analysis (WGS)": false,
                                            "Wearable Data Integration": true
                                        },
                                        {
                                            name: "Executive Health",
                                            "Monthly Lab Panels": true,
                                            "Personalized Nutrition Plan": true,
                                            "Bi-weekly Health Coaching": true,
                                            "Genetic Analysis (WGS)": true,
                                            "Wearable Data Integration": true
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
        // CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "careplus-programs-cta",
            name: "Programs CTA",
            description: "Full-width CTA with gradient background",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#008080",
                    paddingY: 64,
                    paddingX: 48,
                    fullWidth: false,
                    // borderRadius: 32,
                    maxWidth: "900px",
                    margin: "0 auto 96px auto"
                },
                columns: [{
                    id: "cta-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center"
                    },
                    elements: [
                        {
                            id: "cta-decorator",
                            type: "Badge",
                            props: {
                                text: "◆",
                                bgColor: "transparent",
                                color: "rgba(255,255,255,0.6)",
                                size: "sm"
                            }
                        },
                        {
                            id: "cta-heading",
                            type: "Heading",
                            props: {
                                text: "Start Your Journey Today",
                                tag: "h2",
                                align: "center",
                                color: "#FFFFFF",
                                size: "3xl",
                                fontWeight: "bold"
                            }
                        },
                        {
                            id: "cta-description",
                            type: "Paragraph",
                            props: {
                                text: "Take the first step towards a healthier, longer life. Schedule your free discovery call with our clinical team.",
                                align: "center",
                                color: "rgba(255,255,255,0.8)",
                                size: "md"
                            }
                        },
                        {
                            id: "cta-buttons",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Schedule Discovery Call",
                                primaryBg: "#000000ff",
                                primaryTextColor: "#000000ff",
                                primaryBorderRadius: 24,
                                secondaryText: "View Success Stories",
                                secondaryBg: "transparent",
                                secondaryTextColor: "#FFFFFF",
                                secondaryBorder: "1px solid rgba(255,255,255,0.5)",
                                secondaryBorderRadius: 24,
                                gap: "gap-4",
                                layout: "horizontal",
                                justifyContent: "center"
                            }
                        }
                    ]
                }]
            }
        }
    ],

    // ============================================================================
    // PAGE METADATA
    // ============================================================================
    metadata: {
        title: "Clinical Programs | CarePlus",
        description: "Science-backed health optimization protocols for diabetes reversal, cardiac wellness, and longevity.",
        slug: "programs",
        template: "careplus"
    }
};

module.exports = careplusPrograms;
