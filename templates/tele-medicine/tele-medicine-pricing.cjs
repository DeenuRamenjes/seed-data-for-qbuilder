/**
 * Telemedicine Template - Pricing Page
 * Primary: #FF3075 | Secondary: #FFEA00 | Accent: #5763FF
 */

const telemedicineHome = require('./tele-medicine-home.cjs');

const telemedicinePricing = {
    // ============================================================================
    // SHARED HEADER
    // ============================================================================
    header: telemedicineHome.header,

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION (StyleHero)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-pricing-hero",
            name: "Longevity Memberships",
            structure: {
                type: "HeroGradient",
                defaultProps: {
                    paddingTop: 80,
                    paddingBottom: 100,
                    backgroundColor: "#1a1a1a"
                },
                props: {
                    badgeText: "REDEFINING LONGEVITY",
                    title: "Invest in Your Ultimate Performance",
                    lead: "Tiered memberships designed for high-performance health, exclusive medical access, and bespoke longevity protocols.",
                    secondaryCtaText: "About Us",
                    secondaryCtaLink: "/about",
                    accentColor: "#FF3075",
                    secondaryColor: "#FFEA00"
                }
            }
        },

        // --------------------------------------------------------------------------
        // PRICING CARDS (PricingCards)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-pricing-cards",
            name: "Plans",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingX: 48,
                    backgroundColor: "#ffffff",
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 10
                },
                columns: [
                    {
                        id: "pricing-header",
                        width: "100%",
                        elements: [
                            { type: "Badge", props: { text: "MEMBERSHIPS", color: "#FF3075", bgColor: "rgba(255, 48, 117, 0.1)", align: "center", marginBottom: 12 } },
                            { type: "Heading", props: { text: "Invest in Your Vitality", tag: "h2", size: "3xl", fontWeight: "800", color: "#1a1a1a", align: "center", marginBottom: 8 } },
                            { type: "Paragraph", props: { text: "Transparent pricing for world-class, uncompromised healthcare.", size: "lg", color: "#64748b", align: "center" } }
                        ]
                    },
                    {
                        id: "pricing-cards-wrapper",
                        width: "100%",
                        elements: [
                            {
                                type: "PricingCards",
                                props: {
                                    plans: [
                                        {
                                            id: "essential",
                                            name: "Essential",
                                            price: "$450",
                                            period: "mo",
                                            description: "The foundation of bio-optimization.",
                                            featured: false,
                                            ctaText: "Get Started",
                                            features: [
                                                { text: "Advanced Biomarkers (Quarterly)", included: true },
                                                { text: "Digital Health Suite Access", included: true },
                                                { text: "Quarterly Physician Review", included: true },
                                                { text: "24/7 Priority Support", included: false }
                                            ]
                                        },
                                        {
                                            id: "elite",
                                            name: "Elite",
                                            price: "$900",
                                            period: "mo",
                                            description: "For the high-performance executive.",
                                            featured: true,
                                            ctaText: "Join Elite",
                                            features: [
                                                { text: "Everything in Essential", included: true },
                                                { text: "Monthly Bio-Optimization Sessions", included: true },
                                                { text: "24/7 Priority Clinical Support", included: true },
                                                { text: "Wearable Data Integration & Coaching", included: true }
                                            ]
                                        },
                                        {
                                            id: "concierge",
                                            name: "Concierge",
                                            price: "$2,500",
                                            period: "mo",
                                            description: "Absolute medical exclusivity.",
                                            featured: false,
                                            ctaText: "Apply Now",
                                            features: [
                                                { text: "Bespoke Longevity Strategy", included: true },
                                                { text: "In-Home Medical Visits & Lab Draws", included: true },
                                                { text: "Dedicated Health Butler", included: true },
                                                { text: "Global Specialist Access", included: true }
                                            ]
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
        // COMPARISON TABLE
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-pricing-compare",
            name: "Compare Plan Benefits",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingTop: 40,
                    paddingBottom: 40,
                    paddingX: 48,
                    backgroundColor: "#ffffff",
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 40
                },
                columns: [
                    {
                        id: "compare-header",
                        width: "100%",
                        elements: [
                            { type: "Heading", props: { text: "Compare Plan Benefits", tag: "h2", size: "3xl", fontWeight: "800", color: "#1a1a1a", align: "center", marginBottom: 8 } },
                            { type: "Paragraph", props: { text: "Find the membership tier that best fits your health and longevity goals.", size: "lg", color: "#64748b", align: "center" } }
                        ]
                    },
                    {
                        id: "compare-table-wrapper",
                        width: "100%",
                        elements: [
                            {
                                type: "ComparisonTable",
                                props: {
                                    columns: ["Medical Feature", "Essential", "Elite", "Concierge"],
                                    rows: [
                                        ["Medical Review", "Quarterly", "Monthly", "Weekly / On-Demand"],
                                        ["Health Coach", "Digital Interface", "1-on-1 Personalized", "Dedicated Individual"],
                                        ["Diagnostic Testing", "Standard Panel", "Advanced Genomics", "Elite Plus Protocols"],
                                        ["Priority Access", "—", "Priority", "VIP / Immediate"],
                                        ["Travel Medicine", "—", "—", "Included Globally"]
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // FAQ (Section + FAQ)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-pricing-faq",
            name: "Pricing FAQ",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f9fafb",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 40
                },
                columns: [
                    {
                        id: "faq-header",
                        width: "100%",
                        elements: [
                            { type: "Heading", props: { text: "Frequently Asked Questions", tag: "h2", size: "3xl", fontWeight: "800", color: "#1a1a1a", align: "center", marginBottom: 8 } },
                            { type: "Paragraph", props: { text: "Everything you need to know about our membership plans.", color: "#64748b", size: "base", align: "center" } }
                        ]
                    },
                    {
                        id: "faq-items",
                        width: "100%",
                        elements: [
                            {
                                type: "FAQ",
                                props: {
                                    layout: "grid",
                                    items: [
                                        { question: "Can I switch plans at any time?", answer: "Yes, you can upgrade or downgrade your membership at any time. Changes take effect at the start of your next billing cycle." },
                                        { question: "Is there a contract or commitment?", answer: "No long-term contracts. All memberships are month-to-month with the flexibility to cancel at any time." },
                                        { question: "What happens during my first consultation?", answer: "Your initial consultation is a comprehensive 60-minute session where we review your complete health history, establish baseline biomarkers, and create your personalized care plan." },
                                        { question: "Are prescriptions included?", answer: "Yes, all plans include e-prescriptions when medically appropriate. Your physician can send prescriptions directly to your preferred pharmacy." },
                                        { question: "How do I access my health records?", answer: "All members have 24/7 access to their complete digital health profile through our secure patient portal and mobile app." },
                                        { question: "Is the Concierge plan available worldwide?", answer: "Yes, our Concierge tier includes global specialist access and travel medicine support, available across 40+ countries." }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    // ============================================================================
    // SHARED FOOTER
    // ============================================================================
    footer: telemedicineHome.footer
};

module.exports = telemedicinePricing;
