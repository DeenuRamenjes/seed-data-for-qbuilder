/**
 * DoctorProfile Template - Our Works / Services Page
 * Theme: Premium Healthcare / Blue & Cyan-Green
 * Primary: #1F5EFF (Royal Blue)
 * Accent: #1FFFC0 (Mint Green)
 * Background: #f8f6f6
 * Font: Public Sans / Playfair Display
 */

const eliteHome = require('./elite-home.cjs');

const eliteServices = {
    // ============================================================================
    // HEADER (shared)
    // ============================================================================
    header: eliteHome.header,

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO HEADER
        // --------------------------------------------------------------------------
        {
            key: "services-hero",
            name: "Services Hero",
            structure: {
                type: "HeroGradient",
                defaultProps: {
                    backgroundColor: "#1F5EFF",
                    paddingTop: 120,
                    paddingBottom: 80
                },
                props: {
                    badgeText: "Excellence in Care",
                    title: "Our Specializations",
                    lead: "Where advanced medical science meets personalized luxury. We provide the most sophisticated surgical and regenerative procedures available globally.",
                    accentColor: "#1FFFC0",
                    secondaryColor: "#1FCEFF"
                }
            }
        },
        // --------------------------------------------------------------------------
        // TECHNOLOGY & INNOVATION
        // --------------------------------------------------------------------------
        {
            key: "services-tech",
            name: "Technology & Innovation",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 48,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 48,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "tech-image",
                        width: "50%",
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA35wJecKjpSOImtq3py_93W9nAbCYNCdcheSlsyH_psDXJPkTRQFCJ3K8f5hqoh04mQ578dLC7OTvhNl_vnbKV6HJtMCN6IwJ2eWiR-vzOP3jkxLtjXYhrMv-puUcXUbbicDfYVjFAwf4sWpoLnpvsVLIIrF98ZDL33RtGittbN0Pqo7Q2TBRarPKBZIDuNJUEUn2yHBBnnuivWCNeIdIh-vzY-XbYBeETqIzLRGFZ4bvJJ65kzFU0fWuyfpTECJoCXjNow69tMAIf",
                                    alt: "High-tech surgical robot operating system",
                                    borderRadius: "16",
                                    objectFit: "cover"
                                }
                            }
                        ]
                    },
                    {
                        id: "tech-text",
                        width: "50%",
                        elements: [
                            {
                                type: "Heading",
                                props: { text: "Technology & Innovation", tag: "h2", size: "4xl", color: "#0f172a", fontWeight: "700", marginBottom: 24 }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Our facility is equipped with the world's most advanced medical technology, ensuring procedures that are safer, faster, and more precise than traditional methods.",
                                    size: "lg",
                                    color: "#475569",
                                    marginBottom: 32
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: { title: "8K Spectral CT Scanning — Unprecedented clarity with 90% less radiation.", icon: "Check", iconColor: "#1F5EFF", textColor: "#0f172a", marginBottom: 16 }
                            },
                            {
                                type: "FeatureRow",
                                props: { title: "AI-Enhanced Diagnostics — Real-time pathology analysis powered by neural networks.", icon: "Check", iconColor: "#1F5EFF", textColor: "#0f172a", marginBottom: 16 }
                            },
                            {
                                type: "FeatureRow",
                                props: { title: "Quantum Cellular Sequencing — Molecular-level analysis for personalized treatments.", icon: "Check", iconColor: "#1F5EFF", textColor: "#0f172a" }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // SPECIALIZED CARE UNITS
        // --------------------------------------------------------------------------
        {
            key: "services-units",
            name: "Specialized Care Units",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "rgba(31, 94, 255, 0.05)",
                    paddingY: 48,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 48,
                    flexDirection: "col"
                },
                columns: [
                    {
                        id: "units-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Heading",
                                props: { text: "Specialized Care Units", tag: "h2", size: "3xl", color: "#1F5EFF", fontWeight: "700" }
                            }
                        ]
                    },
                    {
                        id: "units-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 24,
                        elements: [
                            {
                                type: "StyleCard",
                                props: { icon: "Brain", label: "Neuroscience", title: "Neuro-Innovation", description: "Non-invasive brain stimulation and advanced neurological mapping.", accentColor: "#1F5EFF" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "Heart", label: "Cardiac Care", title: "Cardiovascular", description: "Robotic heart surgery and genomic cardiac risk assessment.", accentColor: "#1F5EFF" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "Dna", label: "Genomics", title: "Precision Oncology", description: "Targeted molecular therapy tailored to your unique genetic profile.", accentColor: "#1F5EFF" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "Sparkles", label: "Wellness", title: "Longevity Clinic", description: "Bio-identical hormone replacement and metabolic optimization.", accentColor: "#1F5EFF" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "Bone", label: "Orthopedics", title: "Joint Restoration", description: "Minimally invasive robotic joint replacement and sports injury recovery.", accentColor: "#1FCEFF" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "Eye", label: "Ophthalmology", title: "Vision Sciences", description: "Laser-assisted vision correction and retinal microsurgery expertise.", accentColor: "#1FCEFF" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "Baby", label: "Pediatrics", title: "Child Health", description: "Comprehensive pediatric care from neonatal to adolescent medicine.", accentColor: "#1FCEFF" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "ShieldCheck", label: "Immunology", title: "Immune Defense", description: "Advanced autoimmune diagnostics and personalized immunotherapy programs.", accentColor: "#1FCEFF" }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // SERVICE CARDS GRID (3 large image cards)
        // --------------------------------------------------------------------------
        {
            key: "services-showcase",
            name: "Services Showcase",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 48,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 32
                },
                columns: [
                    {
                        id: "svc-card-1",
                        width: "33.33%",
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "Aesthetic Surgery",
                                    description: "Precision facial reconstruction and body sculpting using minimal incision techniques.",
                                    icon: "Sparkles",
                                    iconColor: "#1FFFC0",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxKj1GUOZRUcAmQEnSLtWBTE8kOrOBOzF6dlhX0pECy6w3y0XGYTUQe-msSUhW9ZLriEKL8Q-iCFz8guiDh8POEOvu8-psGMyeekY1KIBwAG5SrMU4M7dDCtuvAHUO_IzFZyEloeXk7afqwjIZCrzWESVbRv0QWcKEWuN3SrYfsbBwYecX3lGbILtaJBU-HvS_B0fOltTN-8cMN493OvyexcSkMOcQMLzowG4dyvb5beFP7e2g9PtRM1Q7Si097QpA2Jd9DT5MNZeF"
                                }
                            }
                        ]
                    },
                    {
                        id: "svc-card-2",
                        width: "33.33%",
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "Regenerative Medicine",
                                    description: "Cutting-edge stem cell therapies and biological tissue engineering for organ repair.",
                                    icon: "HeartPulse",
                                    iconColor: "#1FFFC0",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMrAC3jXQjKUpHPTcP-8QUe-ioC4L8o70340vK4YTgzjPdtu1ZhXMYfrTsLoc2Y93luDPdwaD_nRKzZf6jgsKkD0FV7n4aO0dI1X6bvka4LIu0OjE5of_6TVKpe3G3YdzfkYIiUSGXLGgt7e0li7tbGGw5yZzgO7rVCiT0L_JYt5z7KGL7VeWh1n7XCygXOxtCUItnXmn8tSHh_GGO8PT27rF33LjU3J6gLWMxf4xWYebNmqWxEr3ePsCeoeWsoHQJDvVUZDW1-bQN"
                                }
                            }
                        ]
                    },
                    {
                        id: "svc-card-3",
                        width: "33.33%",
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "Diagnostic Imaging",
                                    description: "Ultra-high-definition 8K imaging and molecular scanning for early detection.",
                                    icon: "ScanLine",
                                    iconColor: "#1FFFC0",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7VQUPZcMW83Ajndwu4nClT2e59Pv1QSeaNoTTIUPIaCl5WvYF9BQt36RkSlRyz48hbW6UyWKEh5FwNwiIBlLxCOnec9Xhm6ioivxHobrwfxZmZU68QpBNVuqztk7c06A4mjw7yO9u0u2oPhlag2NJbIXYgidXP93Ozpi9nEXkebhn63WDfFKPUozdjKvomgTNAzwVyLcKWbqcI_4Rt3C6TOzjtk8DLO4HSxj93X-l_nh0DmfBNTdURpeC1gCF3kpG_JsvY5T-aXKc"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // FOOTER CTA
        // --------------------------------------------------------------------------
        {
            key: "services-footer-cta",
            name: "Services CTA",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 48,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 32,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "cta-text",
                        width: "60%",
                        elements: [
                            {
                                type: "Heading",
                                props: { text: "Ready to transform your health?", tag: "h3", size: "2xl", color: "#0f172a", fontWeight: "700" }
                            },
                            {
                                type: "Paragraph",
                                props: { text: "Book a private consultation with our specialists.", size: "base", color: "#64748b" }
                            }
                        ]
                    },
                    {
                        id: "cta-buttons",
                        width: "40%",
                        elements: [
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Schedule Consultation",
                                    primaryLink: "/contact",
                                    primaryBg: "#1F5EFF",
                                    primaryTextColor: "#ffffff",
                                    secondaryText: "Download Brochure",
                                    secondaryLink: "#",
                                    secondaryBg: "transparent",
                                    secondaryTextColor: "#1F5EFF",
                                    borderRadius: "12"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    // ============================================================================
    // FOOTER (shared)
    // ============================================================================
    footer: eliteHome.footer
};

module.exports = eliteServices;
