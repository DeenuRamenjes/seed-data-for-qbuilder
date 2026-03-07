/**
 * Diagnostic Lab Template - Services Page (Genova Labs)
 * Theme: Fluid Glass / Modern Diagnostics
 * Primary: #cf24ff (Purple)
 * Secondary: #FF24C1 (Pink)
 * Accent: #6224ff (Deep Purple)
 * Background: #ffffff
 * Font: Space Grotesk
 */

const diagnosticHome = require('./diagnostic-home.cjs');

const diagnosticServices = {
    // ============================================================================
    // HEADER (shared)
    // ============================================================================
    header: diagnosticHome.header,

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO — Services Overview
        // --------------------------------------------------------------------------
        {
            key: "services-hero",
            name: "Services Hero",
            structure: {
                type: "HeroGradient",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingTop: 120,
                    paddingBottom: 60
                },
                props: {
                    badgeText: "Diagnostic Intelligence",
                    title: "Decoding the Human Blueprint",
                    lead: "Next-generation diagnostic testing powered by fluid biotechnology and personalized genomics. We transform complex data into actionable health insights.",
                    accentColor: "#cf24ff",
                    secondaryColor: "#6224ff"
                }
            }
        },
        // --------------------------------------------------------------------------
        // TEST PANELS — Featured Cards
        // --------------------------------------------------------------------------
        {
            key: "services-panels",
            name: "Featured Test Panels",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 48,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk",
                    gap: 32
                },
                columns: [
                    {
                        id: "panels-header",
                        width: "100%",
                        elements: [
                            { id: "panels-h2", type: "Heading", props: { text: "Featured Test Panels", tag: "h2", size: "3xl", fontWeight: "800", color: "#0f172a", marginBottom: 12, letterSpacing: "tight" } },
                            { id: "panels-desc", type: "Paragraph", props: { text: "Explore our comprehensive range of diagnostic panels, each designed with precision to deliver actionable insights.", size: "base", color: "#64748b", maxWidth: "600px", marginBottom: 48 } }
                        ]
                    },
                    {
                        id: "panels-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "GI Effects® Comprehensive",
                                    description: "An advanced stool test providing immediate insights into digestive function and intestinal inflammation.",
                                    icon: "HeartPulse",
                                    iconColor: "#cf24ff",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMv6AahzcSP4HLzFgPrm9LwTBgbyXHG66DL--Ea9LrppqJatGusbp0J_t7lZwp5KNDAzTXC4faScBnKZrUrVmwsjw3TZSaWncJHR6pZJ3wrYEX46TGGiDDKv2CvWxKfTv4JIfaN-xEBJo8KQ8xe7DYRd6-mmOeakLPaMPCJAx5bQtNm2V-GSWi9HtsrfrAQB2ASLo9KZ2bUGX46utYRVaW5GbEchAH3wcJnsajTfIiE3szJ5nqu0R9fW5XysMxf8Oo5RfvPVpjIjDF"
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "NeuroAdvanced™ Profile",
                                    description: "Comprehensive assessment of neurotransmitters and their metabolites to evaluate mood and sleep concerns.",
                                    icon: "Brain",
                                    iconColor: "#6224ff",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP2U_qR-pVKegP0I54gy90TJj0u1P2Q8kO_nMkFNWVkdnPK8X3hZyFxrsKrR9IxySoIatPlKqdKP_wPpiwxrDqpKv6ySbty64kWqebVnYsYdIMnDDP1anTZZf9izuzQer5b4FpGZb14r03yowMeucvAircDjOdc8gGZU0LRHD9U4AOzubwGDhg02vV6zJZSTLuYHCQ1Lwtb1cEFLnNCPWRibadWfQMNDxZewyRFrvMQFhTovzkikViyN3fvw-oeX7cddh5WlXKbpj4"
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "NutrEval® FMV",
                                    description: "A specialized profile evaluating organic acids, amino acids, and essential fatty acids for metabolic balance.",
                                    icon: "Droplets",
                                    iconColor: "#FF24C1",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Ix50YQzNKEn32qG5o1yuPFzELCN9fxedCfvzIbAgJNmPMwsTYvNwFmgXs1b-jeXl1XuXMzPD7Zvh6IVDfSajwRwRv9fbs5hDF5GzwxUH2cQqpFH9j8IJ93mEStJweWLUPzlm4lyt8EQz6C7vIi6OqVlyFUyHVQd9DHK59hqutnPVUl6wnrOZCZMmzLtUJHO4PHG74GiqQHKgrgyODmtZP83GshUXoQR7dabhw-28dryVnuB3WWvXNed3Lc1-inyKJlVmVZGzWwXe"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // ADDITIONAL PANELS — More Tests
        // --------------------------------------------------------------------------
        {
            key: "services-more-panels",
            name: "Additional Test Panels",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#fafafa",
                    paddingY: 96,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk",
                    gap: 32
                },
                columns: [
                    {
                        id: "more-header",
                        width: "100%",
                        elements: [
                            { id: "more-h2", type: "Heading", props: { text: "Specialized Diagnostics", tag: "h2", size: "3xl", fontWeight: "800", color: "#0f172a", marginBottom: 12, letterSpacing: "tight" } },
                            { id: "more-desc", type: "Paragraph", props: { text: "Cutting-edge testing methodologies for advanced clinical requirements.", size: "base", color: "#64748b", maxWidth: "500px", marginBottom: 48 } }
                        ]
                    },
                    {
                        id: "more-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 24,
                        elements: [
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "Activity", bgIcon: "Activity", 
                                    title: "Metabolic Panel", 
                                    description: "Comprehensive evaluation of metabolic pathways and energy production markers.", 
                                    price: "$350.00", ctaText: "View Details",
                                    primaryIconBgColor: "#f3e8ff", primaryIconColor: "#a855f7"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "TestTubes", bgIcon: "Microscope", 
                                    title: "Gut Intelligence", 
                                    description: "Advanced microbiome sequencing to assess digestive health and immune function.", 
                                    price: "$450.00", ctaText: "View Details",
                                    primaryIconBgColor: "#e0e7ff", primaryIconColor: "#6366f1"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "Stethoscope", bgIcon: "Activity", 
                                    title: "Hormone Profile", 
                                    description: "Full hormonal panel including thyroid, adrenal, and reproductive markers.", 
                                    price: "$280.00", ctaText: "View Details",
                                    primaryIconBgColor: "#fce7f3", primaryIconColor: "#ec4899"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "Heart", bgIcon: "HeartPulse", 
                                    title: "Cardiac Risk", 
                                    description: "Advanced cardiovascular biomarker assessment for early detection of heart disease.", 
                                    price: "$400.00", ctaText: "View Details",
                                    primaryIconBgColor: "#ccfbf1", primaryIconColor: "#14b8a6"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "Brain", bgIcon: "Activity", 
                                    title: "Neuro-Cognitive", 
                                    description: "Analysis of neurotransmitters and markers associated with cognitive health.", 
                                    price: "$600.00", ctaText: "View Details",
                                    primaryIconBgColor: "#fef3c7", primaryIconColor: "#f59e0b"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "ShieldCheck", bgIcon: "Activity", 
                                    title: "Immune Function", 
                                    description: "Detailed profiling of immune cells and inflammatory markers for systemic resilience.", 
                                    price: "$320.00", ctaText: "View Details",
                                    primaryIconBgColor: "#e0f2fe", primaryIconColor: "#0ea5e9"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "Dna", bgIcon: "Microscope", 
                                    title: "Pharmacogenomics", 
                                    description: "Genetic testing to determine your precise individual response to medications.", 
                                    price: "$850.00", ctaText: "View Details",
                                    primaryIconBgColor: "#fae8ff", primaryIconColor: "#d946ef"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "FlaskConical", bgIcon: "Activity", 
                                    title: "Toxin Screening", 
                                    description: "Screening for environmental toxins and heavy metal accumulation affecting health.", 
                                    price: "$450.00", ctaText: "View Details",
                                    primaryIconBgColor: "#dcfce7", primaryIconColor: "#22c55e"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // CTA — Full-width gradient
        // --------------------------------------------------------------------------
        {
            key: "services-cta",
            name: "Services CTA",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#cf24ff",
                    backgroundGradient: "linear-gradient(135deg, #6224ff 0%, #cf24ff 50%, #FF24C1 100%)",
                    paddingY: 120,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk"
                },
                columns: [{
                    id: "cta-col",
                    width: "100%",
                    props: { align: "center", maxWidth: "700px", marginX: "auto" },
                    elements: [
                        { id: "cta-h2", type: "Heading", props: { text: "Ready to personalize your healthcare journey?", tag: "h2", size: "4xl", fontWeight: "900", color: "#ffffff", align: "center", marginBottom: 16 } },
                        { id: "cta-p", type: "Paragraph", props: { text: "Connect with a certified provider today and unlock the data hidden within your biology.", color: "rgba(255,255,255,0.8)", size: "lg", align: "center", marginBottom: 40 } },
                        {
                            id: "cta-btns",
                            type: "Button",
                            props: {
                                layout: "horizontal",
                                align: "center",
                                justifyContent: "center",
                                buttons: [
                                    { text: "Find a Practitioner", size: "lg", variant: "primary", backgroundColor: "#ffffff", textColor: "#cf24ff", borderRadius: "full", padding: "16px 40px", fontWeight: "700" },
                                    { text: "Request Lab Kit", size: "lg", variant: "secondary", backgroundColor: "rgba(255,255,255,0.15)", textColor: "#ffffff", borderRadius: "full", padding: "16px 40px", fontWeight: "700", border: "1px solid rgba(255,255,255,0.3)" }
                                ]
                            }
                        }
                    ]
                }]
            }
        }
    ],

    // ============================================================================
    // FOOTER (shared)
    // ============================================================================
    footer: diagnosticHome.footer
};

module.exports = diagnosticServices;
