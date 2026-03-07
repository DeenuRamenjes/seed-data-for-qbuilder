/**
 * Diagnostic Lab Template - Home Page (Helix Research)
 * Theme: Swiss Minimalism / Editorial Diagnostics
 * Primary: #cf24ff (Purple)
 * Secondary: #FF24C1 (Pink)
 * Accent: #6224ff (Deep Purple)
 * Background: #ffffff
 * Font: Space Grotesk / Playfair Display
 */

const diagnosticHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "diagnostic-header",
        name: "Helix Research Header",
        structure: {
            type: "Navbar",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                paddingY: 0,
                paddingX: 0,
                fullWidth: true,
                showBorder: true,
                borderColor: "rgba(207, 36, 255, 0.1)"
            },
            props: {
                logoType: "both",
                logoText: "HELIX",
                logoAccent: "RESEARCH",
                logoTextColor: "#0f172a",
                links: [
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Services", href: "/services" },
                    { label: "Contact", href: "/contact" }
                ],
                showButton: true,
                buttonText: "Inquire",
                buttonLink: "/contact",
                buttonRadius: "0",
                buttonStyle: "solid"
            }
        }
    },

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION — Editorial Minimalism
        // --------------------------------------------------------------------------
        {
            key: "diagnostic-hero",
            name: "Diagnostic Hero",
            structure: {
                type: "GraHero",
                defaultProps: {
                    badgeText: "PIONEERING DIAGNOSTICS",
                    title: "Deciphering the Code of Life",
                    highlightText: "Code of Life",
                    description: "Sophisticated diagnostics at the intersection of nature and technology. Providing clarity through the most advanced molecular insights available.",
                    primaryCtaText: "Explore Research",
                    primaryCtaLink: "/services",
                    secondaryCtaText: "Inquire Now",
                    secondaryCtaLink: "/contact",
                    primaryColor: "#cf24ff",
                    textColor: "#0f172a",
                    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Ix50YQzNKEn32qG5o1yuPFzELCN9fxedCfvzIbAgJNmPMwsTYvNwFmgXs1b-jeXl1XuXMzPD7Zvh6IVDfSajwRwRv9fbs5hDF5GzwxUH2cQqpFH9j8IJ93mEStJweWLUPzlm4lyt8EQz6C7vIi6OqVlyFUyHVQd9DHK59hqutnPVUl6wnrOZCZMmzLtUJHO4PHG74GiqQHKgrgyODmtZP83GshUXoQR7dabhw-28dryVnuB3WWvXNed3Lc1-inyKJlVmVZGzWwXe",
                    floatingImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP2U_qR-pVKegP0I54gy90TJj0u1P2Q8kO_nMkFNWVkdnPK8X3hZyFxrsKrR9IxySoIatPlKqdKP_wPpiwxrDqpKv6ySbty64kWqebVnYsYdIMnDDP1anTZZf9izuzQer5b4FpGZb14r03yowMeucvAircDjOdc8gGZU0LRHD9U4AOzubwGDhg02vV6zJZSTLuYHCQ1Lwtb1cEFLnNCPWRibadWfQMNDxZewyRFrvMQFhTovzkikViyN3fvw-oeX7cddh5WlXKbpj4",
                    floatingTitle: "Precision Analytics",
                    floatingSubtitle: "Diagnostic Excellence",
                    statsText: "99.9% Accuracy"
                }
            }
        },
        // --------------------------------------------------------------------------
        // STATS BAND
        // --------------------------------------------------------------------------
        {
            key: "diagnostic-stats-band",
            name: "Stats Band",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 48,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk",
                    borderBottom: "1px solid rgba(207,36,255,0.08)"
                },
                columns: [
                    {
                        id: "stat-1",
                        width: "25%",
                        elements: [
                            { id: "s1-val", type: "Heading", props: { text: "99.9%", tag: "h3", size: "3xl", color: "#cf24ff", fontWeight: "300", fontFamily: "Space Mono", marginBottom: 4 } },
                            { id: "s1-label", type: "Paragraph", props: { text: "ACCURACY RATE", size: "xs", color: "#94a3b8", fontWeight: "500", letterSpacing: "widest", textTransform: "uppercase" } }
                        ]
                    },
                    {
                        id: "stat-2",
                        width: "25%",
                        elements: [
                            { id: "s2-val", type: "Heading", props: { text: "140k+", tag: "h3", size: "3xl", color: "#cf24ff", fontWeight: "300", fontFamily: "Space Mono", marginBottom: 4 } },
                            { id: "s2-label", type: "Paragraph", props: { text: "SEQUENCES RUN", size: "xs", color: "#94a3b8", fontWeight: "500", letterSpacing: "widest", textTransform: "uppercase" } }
                        ]
                    },
                    {
                        id: "stat-3",
                        width: "25%",
                        elements: [
                            { id: "s3-val", type: "Heading", props: { text: "200+", tag: "h3", size: "3xl", color: "#cf24ff", fontWeight: "300", fontFamily: "Space Mono", marginBottom: 4 } },
                            { id: "s3-label", type: "Paragraph", props: { text: "CERTIFICATIONS", size: "xs", color: "#94a3b8", fontWeight: "500", letterSpacing: "widest", textTransform: "uppercase" } }
                        ]
                    },
                    {
                        id: "stat-4",
                        width: "25%",
                        elements: [
                            { id: "s4-val", type: "Heading", props: { text: "24h", tag: "h3", size: "3xl", color: "#cf24ff", fontWeight: "300", fontFamily: "Space Mono", marginBottom: 4 } },
                            { id: "s4-label", type: "Paragraph", props: { text: "TURNAROUND TIME", size: "xs", color: "#94a3b8", fontWeight: "500", letterSpacing: "widest", textTransform: "uppercase" } }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // IMAGERY FOCUS — MissionSection
        // --------------------------------------------------------------------------
        {
            key: "diagnostic-split",
            name: "Laboratory Showcase",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#0f172a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "split-col",
                        width: "100%",
                        elements: [
                            {
                                type: "MissionCard",
                                props: {
                                    heading: "A Sanctuary for Scientific Discovery",
                                    subtitle: "INTERNAL STANDARDS",
                                    aspectRatio: "16:9",
                                    imageSrc: "https://5.imimg.com/data5/NY/JA/JS/SELLER-84084371/diagnostic-laboratory-services.jpg",
                                    imageAlt: "Modern laboratory equipment",
                                    textBlocks: [
                                        {
                                            text: "Our facilities are designed to foster innovation while maintaining the strictest protocols of bio-privacy and data integrity. Every sample is a life story we handle with reverence.Our facilities are designed to foster innovation while maintaining the strictest protocols of bio-privacy and data integrity. Every sample is a life story we handle with reverence.",
                                            boldPhrases: ["innovation", "bio-privacy and data integrity", "Every sample is a life story"],
                                        }
                                    ],
                                    headingColor: "#cf24ff",
                                    subtitleColor: "rgba(255, 255, 255, 0.6)",
                                    textColor: "#94a3b8",
                                    boldColor: "#ffffff",
                                    cardBgColor: "#1e293b",
                                    cardBorderRadius: 24,
                                    imageBorderRadius: 16,
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // CORE SPECIALIZATIONS
        // --------------------------------------------------------------------------
        {
            key: "diagnostic-specializations",
            name: "Core Specializations",
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
                        id: "spec-header",
                        width: "100%",
                        elements: [
                            { id: "spec-title", type: "Heading", props: { text: "Our Specializations", tag: "h2", size: "4xl", fontWeight: "700", color: "#0f172a", marginBottom: 12, fontFamily: "Playfair Display", fontStyle: "italic" } },
                            { id: "spec-desc", type: "Paragraph", props: { text: "A synthesis of scientific rigor and personalized care, tailored for the most discerning healthcare institutions and private clients.", size: "sm", color: "#64748b", maxWidth: "500px", marginBottom: 48 } }
                        ]
                    },
                    {
                        id: "spec-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 32,
                        elements: [
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "Dna", bgIcon: "Microscope", 
                                    title: "Genomic Insights", 
                                    description: "Comprehensive mapping of individual genetic landscapes to predict and prevent future health complications.", 
                                    price: "$1,250.00", ctaText: "View Details",
                                    primaryIconBgColor: "#f3e8ff", primaryIconColor: "#a855f7"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "Microscope", bgIcon: "Activity", 
                                    title: "Pathology Excellence", 
                                    description: "Gold-standard tissue analysis utilizing AI-enhanced microscopy for absolute precision in diagnosis.", 
                                    price: "$890.00", ctaText: "View Details",
                                    primaryIconBgColor: "#fce7f3", primaryIconColor: "#ec4899"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "ShieldCheck", bgIcon: "HeartPulse", 
                                    title: "Private Screening", 
                                    description: "Bespoke, discreet health monitoring protocols designed for high-performance individuals and families.", 
                                    price: "$2,500.00", ctaText: "View Details",
                                    primaryIconBgColor: "#e0e7ff", primaryIconColor: "#6366f1"
                                }
                            },
                            {
                                type: "EnqCard",
                                props: { 
                                    primaryIcon: "Activity", bgIcon: "FlaskConical", 
                                    title: "Biomarker Analysis", 
                                    description: "Deep molecular profiling to track longevity protocols and overall metabolic health optimizations.", 
                                    price: "$750.00", ctaText: "View Details",
                                    primaryIconBgColor: "#ccfbf1", primaryIconColor: "#14b8a6"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // TESTIMONIAL SECTION
        // --------------------------------------------------------------------------
        {
            key: "diagnostic-testimonial",
            name: "Testimonial Quote",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk"
                },
                columns: [{
                    id: "testimonial-col",
                    width: "100%",
                    props: { align: "center", maxWidth: "800px", marginX: "auto" },
                    elements: [
                        { id: "quote-icon", type: "Paragraph", props: { text: "❝", size: "5xl", color: "rgba(207,36,255,0.3)", align: "center", marginBottom: 32 } },
                        { id: "quote-text", type: "Heading", props: { text: "Helix Research provides a level of molecular detail that has redefined our approach to patient care. Their commitment to precision is unmatched.", tag: "h3", size: "3xl", fontWeight: "400", color: "#0f172a", lineHeight: 1.4, align: "center", marginBottom: 32, fontFamily: "Playfair Display", fontStyle: "italic" } },
                        { id: "quote-author", type: "Paragraph", props: { text: "DR. ALISTAIR VAUGHN", size: "sm", fontWeight: "700", color: "#0f172a", letterSpacing: "widest", align: "center", marginBottom: 4 } },
                        { id: "quote-role", type: "Paragraph", props: { text: "Director of Oncology, St. Jude Medical Group", size: "xs", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "widest", align: "center" } }
                    ]
                }]
            }
        },
    ],

    // ============================================================================
    // FOOTER
    // ============================================================================
    footer: {
        key: "diagnostic-footer",
        name: "Helix Research Footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#0f172a", // Premium dark background
                paddingY: 80,
                paddingX: 40,
                fullWidth: true,
                showBorder: true,
                borderColor: "rgba(255,255,255,0.05)"
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "25%",
                    elements: [
                        {
                            type: "Heading",
                            props: { text: "HELIX RESEARCH", tag: "h4", color: "#ffffff", marginBottom: "16px", fontFamily: "Playfair Display", fontStyle: "italic" }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "Pioneering molecular diagnostics for the global medical community. We decode the complexities of human biology to empower precision healthcare.",
                                color: "#94a3b8",
                                size: "sm",
                                marginBottom: "24px",
                                lineHeight: 1.6
                            }
                        },
                        {
                            type: "SocialLinks",
                            props: {
                                platformNames: ["Twitter", "LinkedIn", "Instagram"],
                                iconColor: "#64748b",
                                hoverColor: "#cf24ff",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-services",
                    width: "25%",
                    elements: [{
                        type: "LinkList",
                        props: {
                            title: "Services",
                            titleColor: "#ffffff",
                            textColor: "#94a3b8",
                            hoverColor: "#cf24ff",
                            items: [
                                { label: "Genomic Sequencing", href: "/services" },
                                { label: "Onco-Pathology", href: "/services" },
                                { label: "Executive Screening", href: "/services" },
                                { label: "Bio-marker Analysis", href: "/services" }
                            ]
                        }
                    }]
                },
                {
                    id: "footer-research",
                    width: "25%",
                    elements: [{
                        type: "LinkList",
                        props: {
                            title: "Research",
                            titleColor: "#ffffff",
                            textColor: "#94a3b8",
                            hoverColor: "#cf24ff",
                            items: [
                                { label: "Clinical Trials", href: "#" },
                                { label: "Publications", href: "#" },
                                { label: "White Papers", href: "#" },
                                { label: "Case Studies", href: "#" }
                            ]
                        }
                    }]
                },
                {
                    id: "footer-contact",
                    width: "25%",
                    elements: [
                        {
                            type: "Heading",
                            props: { text: "Contact Us", tag: "h6", color: "#ffffff", marginBottom: "16px", letterSpacing: "widest", textTransform: "uppercase", size: "xs" }
                        },
                        {
                            type: "FeatureRow",
                            props: { title: "Zürich Science Park, Bldg 4, Zürich, CH", icon: "MapPin", iconColor: "#cf24ff", textColor: "#94a3b8", marginBottom: 16 }
                        },
                        {
                            type: "FeatureRow",
                            props: { title: "+41 44 234 56 78", icon: "Phone", iconColor: "#cf24ff", textColor: "#94a3b8", marginBottom: 16 }
                        },
                        {
                            type: "FeatureRow",
                            props: { title: "contact@helixresearch.com", icon: "Mail", iconColor: "#cf24ff", textColor: "#94a3b8" } }
                    ]
                }
            ]
        }
    }
};

module.exports = diagnosticHome;
