/**
 * CarePlus Template - Diagnostics / Methodology Page
 * Theme: Modern Healthcare / Medical / Hospital
 * Primary Color: #008080 (Teal)
 * Secondary Color: #004D4D
 * Background: #FFFFFF / #0F172A
 * Fonts: Plus Jakarta Sans (Headings), Inter (Body)
 */

const careplusDiagnostics = {
    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // DIAGNOSTIC JOURNEY SECTION (Timeline)
        // --------------------------------------------------------------------------
        {
            key: "careplus-diagnostic-journey",
            name: "Diagnostic Journey",
            description: "Timeline showcasing the multi-stage diagnostic framework",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: false
                },
                columns: [{
                    id: "journey-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "journey-timeline",
                            type: "TimelineSection",
                            props: {
                                title: "Our Diagnostic Journey",
                                subtitle: "We move beyond symptomatic treatment to uncover the root causes of dysfunction through a multi-stage clinical framework.",
                                backgroundColor: "#FFFFFF",
                                textColor: "#0F172A",
                                subtitleColor: "#64748B",
                                milestones: [
                                    {
                                        year: "01",
                                        title: "Molecular Profiling",
                                        description: "Advanced genomic and proteomic testing to understand your unique biological blueprint and predisposition to chronic conditions.",
                                        color: "#008080",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCknZKgOYvrDwofhc66jsPT3M9wQbaz0Zk8F2fqw0fUVSdCH5-gfPiQPRkUczqcLDvMt8R2OPsnrCvWT6oVxsnIBe5WKNY8nq9yEF_NvnD8qTBVmfKZKvx4Lv6cTknZDSmyEh7XzehHQdPNK03QQe3jwslTtp7KrKDOVFfsqfgvn7svMqBIPxPUMzW4uVGVPwG480S2GlxMjG1eZQFZulknT_q-11n4bL40_AqPbbBYSwn_NIX8Q4pfc3tRz8Eszn--TUSzEHcNGw",
                                        imageAlt: "Molecular profiling visualization"
                                    },
                                    {
                                        year: "02",
                                        title: "Data Synthesis",
                                        description: "Our proprietary AI engines correlate your bio-data with clinical research to identify specific metabolic dysfunctions and inflammatory markers.",
                                        color: "#008080",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE0dfMAXIHBOSRNPpX9MOHOsthZtxdFA7aW4RS-U4knxIbqf7XvCnytVoTngaVmrxc-gx50h3GR_DtFMRDqb20cGnOxqs_MFAc3nnuCbibPN1U-tSXyhlyWlO-8gDVEB2dNwFC3yxFhDThvVkXuc-JN_8pAh4gku0hjC1WuXVLjaGCx-yQF03OR7V3ltI9i5WK95InrUVlvSlCQe4fyXgXcL7WF3_BZQtcITDUqmI8DrzvF9WEvMKJdh7zh9OWRBnoppJ6GHRbFA",
                                        imageAlt: "Data analysis visualization"
                                    },
                                    {
                                        year: "03",
                                        title: "Clinical Strategy",
                                        description: "A multidisciplinary team of doctors and nutritionists designs a 12-dimensional intervention plan tailored to your results.",
                                        color: "#008080",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE4TP4QGKcU54og5_pnXdSOdTtyBDHppLkGNrJXW8vFw-nH74VYFQVY7CkoAtcrS8hdFlg879FnckwFNPkmNPr8JLkjuJlgL6jqopB3PZsRgIGEIXybx1G7NLrUtnudWV3UKdr6eWBG9JzBKCR29bE7KII3J0Hgw1dVwLCXbI0k6nU3K16hcCyXniJafPtttR8ny5zzTut8_Kgk7R7KFm5swa0THyuNiRXofV06c70fVnJT5J8k39V1Nd6ny5Ti2YtyWjACDsMSg",
                                        imageAlt: "Clinical strategy meeting"
                                    }
                                ]
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // MEASURED IMPACT SECTION (Stats)
        // --------------------------------------------------------------------------
        {
            key: "careplus-measured-impact",
            name: "Measured Impact",
            description: "Clinical outcome statistics and data visualization",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F8FAFC",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false
                },
                columns: [
                    // Header
                    {
                        id: "impact-header-col",
                        width: "100%",
                        props: {
                            alignItems: "center",
                            textAlign: "center",
                            marginBottom: 64
                        },
                        elements: [
                            {
                                id: "impact-heading",
                                type: "Heading",
                                props: {
                                    text: "Measured Impact",
                                    tag: "h2",
                                    align: "center",
                                    color: "#0F172A",
                                    size: "4xl",
                                    fontWeight: "bold"
                                }
                            },
                            {
                                id: "impact-description",
                                type: "Paragraph",
                                props: {
                                    text: "Real-world data showing clinical outcomes across our patient base.",
                                    align: "center",
                                    color: "#64748B",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    // Stats Grid
                    {
                        id: "impact-stats-col",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 32,
                        elements: [
                            // Stat 1: HbA1c Reduction (Circular Progress)
                            {
                                id: "stat-hba1c",
                                type: "CircularStatCard",
                                props: {
                                    value: "90%",
                                    progress: 90,
                                    title: "HbA1c Reduction",
                                    description: "Average reduction in glycemic markers within 6 months.",
                                    accentColor: "#008080",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: 24,
                                    shadow: "sm"
                                }
                            },
                            // Stat 2: Inflammatory Response (Progress Bars)
                            {
                                id: "stat-inflammatory",
                                type: "ProgressStatCard",
                                props: {
                                    title: "Inflammatory Response",
                                    description: "CRP level reduction trends.",
                                    accentColor: "#008080",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: 24,
                                    shadow: "sm",
                                    progressBars: [
                                        { label: "Month 0", value: 100, color: "#94A3B8" },
                                        { label: "Month 3", value: 42, color: "#008080" },
                                        { label: "Month 6", value: 18, color: "#008080" }
                                    ]
                                }
                            },
                            // Stat 3: Patient Retention
                            {
                                id: "stat-retention",
                                type: "BigNumberCard",
                                props: {
                                    value: "8.4x",
                                    title: "Patient Retention",
                                    description: "Higher engagement compared to standard primary care models.",
                                    accentColor: "#008080",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: 24,
                                    shadow: "sm"
                                }
                            },
                            // Stat 4: Markers Tracked
                            {
                                id: "stat-markers",
                                type: "BigNumberCard",
                                props: {
                                    value: "12k+",
                                    title: "Markers Tracked",
                                    description: "Individual health data points analyzed per patient per year.",
                                    accentColor: "#008080",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: 24,
                                    shadow: "sm"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // RESEARCH BOARD SECTION (Team)
        // --------------------------------------------------------------------------
        {
            key: "careplus-research-board",
            name: "Research Board",
            description: "Team section showcasing research leadership",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false
                },
                columns: [
                    // Header with CTA
                    {
                        id: "research-header-col",
                        width: "100%",
                        props: {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            flexWrap: "wrap",
                            gap: 24,
                            marginBottom: 48
                        },
                        elements: [
                            {
                                id: "research-header-text",
                                type: "Box",
                                props: {
                                    maxWidth: "600px"
                                },
                                elements: [
                                    {
                                        id: "research-heading",
                                        type: "Heading",
                                        props: {
                                            text: "Meet the Research Board",
                                            tag: "h2",
                                            align: "left",
                                            color: "#0F172A",
                                            size: "4xl",
                                            fontWeight: "bold"
                                        }
                                    },
                                    {
                                        id: "research-description",
                                        type: "Paragraph",
                                        props: {
                                            text: "Our methodology is overseen by global experts in functional medicine, endocrinology, and longevity science.",
                                            align: "left",
                                            color: "#64748B",
                                            size: "lg"
                                        }
                                    }
                                ]
                            },
                            {
                                id: "research-cta",
                                type: "Button",
                                props: {
                                    text: "Full Scientific Committee →",
                                    variant: "ghost",
                                    textColor: "#008080",
                                    size: "md"
                                }
                            }
                        ]
                    },
                    // Team Grid
                    {
                        id: "research-team-col",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 32,
                        elements: [
                            // Team Member 1
                            {
                                id: "team-member-1",
                                type: "TeamMember",
                                props: {
                                    name: "Dr. Sarah Jenkins",
                                    role: "Director of Clinical Research",
                                    bio: "PhD in Nutritional Genomics, Harvard Medical.",
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn3N8ZuOSuRAQoEAuvQK8Qd6I9825adjsr5RCFN4vOKKeSt_lmN6QRmyERMNZzH0Dn_yjb3oh2GS9yopOJ9Q5lPK7I99XlD0CdJpma3Ijg80XiRUViGWrbhfqjf8kmMMSyUQV5pLgUtz0LLSA1sdikOGBKVK0g-Q0GBf3_bMQ5VR83fl1Zlzo2F9DKyTYeaxxmTxvORp3BsnqD4-LHetA_z0CRan8UN2oPobkHphFvdwsl_J_o5V9IktV-AFrUFAEQRP5EbZAB7A",
                                    accentColor: "#008080",
                                    aspectRatio: "4/5",
                                    showHoverOverlay: true,
                                    hoverButtonText: "View Research"
                                }
                            },
                            // Team Member 2
                            {
                                id: "team-member-2",
                                type: "TeamMember",
                                props: {
                                    name: "Dr. Michael Chen",
                                    role: "Endocrinology Specialist",
                                    bio: "Specializing in metabolic syndrome reversal.",
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJyir5nB5DBTXrKJ7_kEgfCMJm6dYu46ov4rJuokPOz-PzpQbVGcKGrR60hogqR7luZIGruLh9FAqL4SPqi_qn75mMmHx0mReKLFv0p-GS_aagRSYm9nJuKO7vAi86tfeHMiES6TORu7ETBfPDZ_s8od522Mar5B8Wcl9WGkJDcHSH8FhrNMsPyHfexwbXcZilfWNnwsrAlu1IquoA0nBALB5wr9zQSi1FttEEoS-Xr7F365gN2Lw5ct9_G0ZhltLyP0QldMAsAQ",
                                    accentColor: "#008080",
                                    aspectRatio: "4/5",
                                    showHoverOverlay: true,
                                    hoverButtonText: "View Research"
                                }
                            },
                            // Team Member 3
                            {
                                id: "team-member-3",
                                type: "TeamMember",
                                props: {
                                    name: "Dr. Elena Rodriguez",
                                    role: "Functional Immunology",
                                    bio: "Expert in autoimmune condition management.",
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvRfN_WHC_QNPLLP5jxJfGJrIFuBioCNweseYgL7ehk-WVwl50KQ3fnntYf9xyniWgMLs0lEqU6MQpngfm5jJfDR7WMryoCb6OFChaGFQKrFFPyWUOwlWN-GGE78EqtjenIh3pPoLA8fLG9G6R5h0c_QgKZN4QkMM8btRLgJsSe8tX6jE0MdWkG19Gc2kSO_Kx29RbE4RLfwNz79bIayFrRL6R-5gUsVN-1jGto6kYy0Q4qL9moP9D8G50lsaJ9QI6j3jZ2Wno-A",
                                    accentColor: "#008080",
                                    aspectRatio: "4/5",
                                    showHoverOverlay: true,
                                    hoverButtonText: "View Research"
                                }
                            },
                            // Team Member 4
                            {
                                id: "team-member-4",
                                type: "TeamMember",
                                props: {
                                    name: "Dr. James Wilson",
                                    role: "Data Science Lead",
                                    bio: "Pioneer in AI-driven health optimization field.",
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8IbWM0JJut6t4nsieTdG8-edRO54AAsKUM9JZvBrpBAiPlEL0lFr4ngi30gndgQSJdgrUI7MHg3h7tVzakz8jjb_7787E8aHq4VWTXHsk4P8OlQ40K9t4eVdUR1Miy2k9wzbZIq2B_4vyoGajwN1CFLE4-Gm_wwYJFlew2Ru2ntHHIIGQ3LZ3nA7T6wOCScu-Gh7B9kyBx7ZhqZ8I5gsR8daSQWld85AxMfczimcLEcTLC7Um6NmwDu_Z72CIl4CFoH_MdMD49A",
                                    accentColor: "#008080",
                                    aspectRatio: "4/5",
                                    showHoverOverlay: true,
                                    hoverButtonText: "View Research"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // ACCREDITATIONS SECTION (Logo Cloud)
        // --------------------------------------------------------------------------
        {
            key: "careplus-accreditations",
            name: "Accreditations",
            description: "Certification and accreditation logos",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F8FAFC",
                    paddingY: 64,
                    paddingX: 80,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "accreditations-col",
                        width: "100%",
                        props: {
                            alignItems: "center",
                            textAlign: "center"
                        },
                        elements: [
                            {
                                id: "accreditations-heading",
                                type: "Heading",
                                props: {
                                    text: "Accredited By Global Medical Boards",
                                    tag: "h4",
                                    align: "center",
                                    color: "#94A3B8",
                                    size: "xs",
                                    fontWeight: "bold",
                                    letterSpacing: "widest",
                                    textTransform: "uppercase"
                                }
                            },
                            {
                                id: "accreditations-logos",
                                type: "AccreditationLogos",
                                props: {
                                    logos: [
                                        { icon: "ShieldCheck", text: "IFM CERTIFIED" },
                                        { icon: "FileCheck", text: "ABMS BOARD" },
                                        { icon: "FlaskConical", text: "LONGEVITY INST." },
                                        { icon: "HeartPulse", text: "CLIA LABS" },
                                        { icon: "Award", text: "JCI ACCREDITED" }
                                    ],
                                    iconColor: "#64748B",
                                    textColor: "#0F172A",
                                    gap: 48,
                                    grayscale: true,
                                    hoverEffect: true
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    // ============================================================================
    // PAGE METADATA
    // ============================================================================
    metadata: {
        title: "Our Methodology | CarePlus",
        description: "Discover CarePlus's multi-stage diagnostic framework and clinical methodology.",
        slug: "methodology",
        template: "careplus"
    }
};

module.exports = careplusDiagnostics;
