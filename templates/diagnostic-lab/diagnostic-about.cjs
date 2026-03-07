/**
 * Diagnostic Lab Template - About Page (Pulse Diagnostics)
 * Theme: Swiss Precision / Grid-based
 * Primary: #cf24ff (Purple)
 * Secondary: #FF24C1 (Pink)
 * Accent: #6224ff (Deep Purple)
 * Background: #f8f5f8
 * Font: Space Grotesk
 */

const diagnosticHome = require('./diagnostic-home.cjs');

const diagnosticAbout = {
    // ============================================================================
    // HEADER (shared)
    // ============================================================================
    header: diagnosticHome.header,

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // ABOUT IMAGE + TEXT
        // --------------------------------------------------------------------------
        {
            key: "about-image-text",
            name: "About Image Panel",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f5f8",
                    paddingY: 48,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk",
                    gap: 48,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "about-img-col",
                        width: "50%",
                        elements: [{
                            type: "Image",
                            props: {
                                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP2U_qR-pVKegP0I54gy90TJj0u1P2Q8kO_nMkFNWVkdnPK8X3hZyFxrsKrR9IxySoIatPlKqdKP_wPpiwxrDqpKv6ySbty64kWqebVnYsYdIMnDDP1anTZZf9izuzQer5b4FpGZb14r03yowMeucvAircDjOdc8gGZU0LRHD9U4AOzubwGDhg02vV6zJZSTLuYHCQ1Lwtb1cEFLnNCPWRibadWfQMNDxZewyRFrvMQFhTovzkikViyN3fvw-oeX7cddh5WlXKbpj4",
                                alt: "Modern laboratory with high-tech equipment",
                                borderRadius: "12",
                                aspectRatio: "4/3",
                                objectFit: "cover"
                            }
                        }]
                    },
                    {
                        id: "about-text-col",
                        width: "50%",
                        elements: [
                            { id: "about-badge", type: "Paragraph", props: { text: "SWISS PRECISION STANDARDS", color: "#cf24ff", size: "xs", fontWeight: "700", letterSpacing: "widest", textTransform: "uppercase", marginBottom: 12 } },
                            { id: "about-h2", type: "Heading", props: { text: "The Future of Health Intelligence", tag: "h1", size: "5xl", fontWeight: "800", color: "#0f172a", lineHeight: 0.95, marginBottom: 24, letterSpacing: "tighter" } },
                            { id: "about-p", type: "Paragraph", props: { text: "Advanced diagnostic solutions powered by precision engineering and state-of-the-art laboratory technology.", color: "#64748b", size: "xl", lineHeight: 1.7, marginBottom: 32 } },
                            {
                                id: "about-btns",
                                type: "Button",
                                props: {
                                    layout: "horizontal",
                                    buttons: [
                                        { text: "Explore Panels", size: "lg", variant: "primary", backgroundColor: "#cf24ff", textColor: "#ffffff", borderRadius: "lg", padding: "16px 32px", fontWeight: "700" },
                                        { text: "Our Methodology", size: "lg", variant: "secondary", backgroundColor: "transparent", textColor: "#0f172a", borderRadius: "lg", padding: "16px 32px", fontWeight: "700", border: "2px solid #0f172a" }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // ENGINEERED FOR ACCURACY — 3 Service Cards
        // --------------------------------------------------------------------------
        {
            key: "about-services-grid",
            name: "Engineered for Accuracy",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk",
                    gap: 32
                },
                columns: [
                    {
                        id: "svc-header",
                        width: "100%",
                        elements: [
                            { id: "svc-h2", type: "Heading", props: { text: "Engineered for Accuracy", tag: "h2", size: "4xl", fontWeight: "800", color: "#0f172a", marginBottom: 12, letterSpacing: "tight" } },
                            { id: "svc-desc", type: "Paragraph", props: { text: "Experience the pinnacle of medical accuracy with our structured laboratory services and specialized screening protocols.", size: "lg", color: "#64748b", maxWidth: "600px", marginBottom: 48 } }
                        ]
                    },
                    {
                        id: "svc-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 0,
                        elements: [
                            {
                                type: "StyleCard",
                                props: { icon: "Dna", label: "Research", title: "Specialized Panels", description: "Comprehensive genomic and metabolic screening panels designed for precision medicine and longevity.", accentColor: "#cf24ff" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "Building2", label: "Enterprise", title: "Corporate Wellness", description: "Scalable health monitoring solutions for high-performance organizations and leadership teams.", accentColor: "#cf24ff" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "ShieldCheck", label: "Security", title: "Rapid Result Portal", description: "Instant access to encrypted diagnostic data and longitudinal health tracking via our secure API.", accentColor: "#cf24ff" }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // SWISS STANDARDS — Image + Features
        // --------------------------------------------------------------------------
        {
            key: "about-standards",
            name: "Swiss Medical Standards",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f5f8",
                    paddingY: 40,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk",
                    gap: 48,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "standards-img",
                        width: "50%",
                        elements: [{
                            type: "Image",
                            props: {
                                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMv6AahzcSP4HLzFgPrm9LwTBgbyXHG66DL--Ea9LrppqJatGusbp0J_t7lZwp5KNDAzTXC4faScBnKZrUrVmwsjw3TZSaWncJHR6pZJ3wrYEX46TGGiDDKv2CvWxKfTv4JIfaN-xEBJo8KQ8xe7DYRd6-mmOeakLPaMPCJAx5bQtNm2V-GSWi9HtsrfrAQB2ASLo9KZ2bUGX46utYRVaW5GbEchAH3wcJnsajTfIiE3szJ5nqu0R9fW5XysMxf8Oo5RfvPVpjIjDF",
                                alt: "Microscopic view of cellular structure",
                                objectFit: "cover",
                                aspectRatio: "16/9",
                                borderRadius: "0"
                            }
                        }]
                    },
                    {
                        id: "standards-text",
                        width: "50%",
                        elements: [
                            { id: "std-h2", type: "Heading", props: { text: "Pioneering Swiss Medical Standards", tag: "h2", size: "4xl", fontWeight: "800", color: "#0f172a", marginBottom: 24, letterSpacing: "tight" } },
                            { id: "std-p", type: "Paragraph", props: { text: "Our laboratory infrastructure is built on the pillars of rigorous quality control and technical excellence. Every sample is processed with the highest level of scrutiny, ensuring that your data is not just a number, but a tool for life-saving decisions.", color: "#475569", size: "lg", lineHeight: 1.7, marginBottom: 32 } },
                            { id: "std-f1", type: "FeatureRow", props: { title: "ISO 15189:2022 Certified Facilities", icon: "ShieldCheck", iconColor: "#cf24ff", textColor: "#0f172a", marginBottom: 16 } },
                            { id: "std-f2", type: "FeatureRow", props: { title: "AI-Powered Pattern Recognition", icon: "ShieldCheck", iconColor: "#cf24ff", textColor: "#0f172a", marginBottom: 16 } },
                            { id: "std-f3", type: "FeatureRow", props: { title: "End-to-End Encrypted Data Chain", icon: "ShieldCheck", iconColor: "#cf24ff", textColor: "#0f172a" } }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // TESTIMONIALS GRID SECTION
        // --------------------------------------------------------------------------
        {
            key: "about-testimonials-grid",
            name: "Testimonials Grid",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk",
                    gap: 32,
                    layout: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    "@media (max-width: 768px)": {
                        paddingY: 64,
                        gap: 16
                    }
                },
                columns: [
                    {
                        id: "testim-title-col",
                        width: "100%",
                        elements: [
                            { id: "testim-h2", type: "Heading", props: { text: "What Our Partners Say", tag: "h2", size: "4xl", fontWeight: "800", color: "#0f172a", marginBottom: 48, letterSpacing: "tight", align: "center" } }
                        ]
                    },
                    {
                        id: "testimonial-1",
                        width: "calc(33.33% - 22px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "testimonial-card-1",
                                type: "Testimonial",
                                props: {
                                    text: "The accuracy and speed of their diagnostic processing have thoroughly transformed our clinical workflows. Their meticulous Swiss standards are evident in every report.",
                                    author: "Dr. Elena Rostova",
                                    role: "Chief Medical Officer",
                                    company: "Alpine Health Clinics",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXT4E7SL0D_diiWHs8WW3sspT2K_s5z1wWsLnj7sSrFcpYmiXW3ODozd2DVzIx0JXc2AjSLdeT6Wv99aJRUO6f7MeKhiQrw0fWkn8OUlkNFBez6sice4k67QjOo_tbnbp6UXT22PrrjXXE-W_YJ1gJdb1JQGY_ykOUY5ZUvteZy_POLTFjia_VVMDaYS3Wf1lfvZmG4MKtyR-t52trtwuZoxdJveAEu4kC1myDLDMy6NxnDSJRbQ6aueVRfCEZrEAQ1dBh2MpbPoQi",
                                    rating: 5,
                                    backgroundColor: "#f8f5f8",
                                    textColor: "#0f172a",
                                    accentColor: "#cf24ff"
                                }
                            }
                        ]
                    },
                    {
                        id: "testimonial-2",
                        width: "calc(33.33% - 22px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "testimonial-card-2",
                                type: "Testimonial",
                                props: {
                                    text: "Helix Research provides a level of molecular detail that has redefined our approach to patient care. Their commitment to precision is unmatched in the industry.",
                                    author: "Dr. Alistair Vaughn",
                                    role: "Director of Oncology",
                                    company: "St. Jude Medical Group",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQgmS3CLtaKC0WLC3-WE2jE-SMnBnPfrLN_DlMkjquReA2rM_QS86VSYdhvFzmxDk6EOwXID4mDLKsug-QOImbAt6Y-NLfifHJww_9TJYzBWvqUmGdB0h7qjg-sVPU93n_YKezlHWxWlSt6_iyXBiWTw2jRX15BO9T8CmqtZGyF9ou7atbzxvo3DJ1KEKTeHDX6kI6VKCWSF2CqfKDqP2EHIYjY7bg3ag5KfSdpSdWciAfHLkzJwRmCqbsYFTxv_E99QnFMITbCzcs",
                                    rating: 5,
                                    backgroundColor: "#f8f5f8",
                                    textColor: "#0f172a",
                                    accentColor: "#cf24ff"
                                }
                            }
                        ]
                    },
                    {
                        id: "testimonial-3",
                        width: "calc(33.33% - 22px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 16px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "testimonial-card-3",
                                type: "Testimonial",
                                props: {
                                    text: "The integration of their API was seamless. We now have instant access to encrypted diagnostic data, which is crucial for our fast-paced corporate wellness programs.",
                                    author: "Sarah Jenkins",
                                    role: "VP of Health",
                                    company: "Tech Corp Wellness",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANHcuDWPXpuGC0GEgYh3PzAtZbvcEWo3B1_53Kc_9aqizplbLqlcdx4xkY_4-ukaz-3AzdutTkJADmnRJehEzXdHq7sNqy-F_qguunId9CiLzxv2a5JiXjTub-m-cW3seEPijqI_lNXA8ffrqTmpIHacMwTu2B8iNG6FxZNZ5inGXEFoxNKk4S4Gm9eGgUWsxacU2pNTl1j5QqwZ6hQlrCT9jksTazIFnNZWhYdcNGf1YaRD9M69Qn487Ntq5qutBLBi1EKfb4G3vk",
                                    rating: 5,
                                    backgroundColor: "#f8f5f8",
                                    textColor: "#0f172a",
                                    accentColor: "#cf24ff"
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
    footer: diagnosticHome.footer
};

module.exports = diagnosticAbout;
