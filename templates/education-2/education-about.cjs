/**
 * Education Template - About Page
 * Standardized using QBuilder Renderer Master Guidelines
 */

const educationAbout = {
    sections: [
        // --------------------------------------------------------------------------
        // ABOUT HERO
        // --------------------------------------------------------------------------
        {
            key: "education-about-hero",
            name: "About Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "edu-about-hero-col",
                    width: "100%",
                    elements: [
                        {
                            type: "Headline", // Tier 1
                            props: {
                                text: "WE CRAFT\n [LEGACY ](linear-gradient(90deg, #FF4500, #ff8c00ff)",
                                tag: "h1",
                                size: "6xl",
                                align: "left",
                            }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "A premium institution dedicated to the pursuit of knowledge, architectural preservation, and the cultivation of future global leaders. architectural preservation, and the cultivation of future global leaders. architectural preservation, and the cultivation of future global leaders.", // Using gradient syntax for highlight
                                tag: "h6",
                                size: "xl",
                                align: "left",
                                marginTop: 25
                            }
                        },
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // FOUNDING STORY
        // --------------------------------------------------------------------------
        {
            key: "education-founding-story",
            name: "Founding Story",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    gap: 12
                },
                columns: [
                    {
                        id: "edu-founding-text",
                        width: "50%",
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "01. Our Heritage", color: "#FF4500", bgColor: "transparent", marginTop: 25 }
                            },
                            {
                                type: "Heading",
                                props: { text: "Founding Story", tag: "h2", size: "4xl", className: "mb-6" }
                            },
                            {
                                type: "TextBlock", // Tier 1 (Rich text content)
                                props: {
                                    content: "Established in 1990, EduHeritage began as a small collective of visionaries who believed that education should be as enduring as the architecture that houses it.\n\nOur founders sought to bridge the gap between traditional rigorous study and modern innovation.Established in 1990, EduHeritage began as a small collective of visionaries who believed that education should be as enduring as the architecture that houses it.\n\nOur founders sought to bridge the gap between traditional rigorous study and modern innovation.",
                                    format: "markdown",
                                    marginBottom: 24
                                }
                            },
                            {
                                type: "TextBlock", // Tier 1 (Rich text content)
                                props: {
                                    content: "Established in 1990, EduHeritage began as a small collective of visionaries who believed that education should be as enduring as the architecture that houses it.\n\nOur founders sought to bridge the gap between traditional rigorous study and modern innovation.Established in 1990, EduHeritage began as a small collective of visionaries who believed that education should be as enduring as the architecture that houses it.\n\nOur founders sought to bridge the gap between traditional rigorous study and modern innovation.",
                                    format: "markdown",
                                    marginBottom: 24
                                }
                            },
                            {
                                type: "TextBlock", // Tier 1 (Rich text content)
                                props: {
                                    content: "Established in 1990, EduHeritage began as a small collective of visionaries who believed that education should be as enduring as the architecture that houses it.\n\nOur founders sought to bridge the gap between traditional rigorous study and modern innovation.Established in 1990, EduHeritage began as a small collective of visionaries who believed that education should be as enduring as the architecture that houses it.\n\nOur founders sought to bridge the gap between traditional rigorous study and modern innovation.",
                                    format: "markdown",
                                    marginBottom: 24
                                }
                            },
                        ]
                    },
                    {
                        id: "edu-founding-image",
                        width: "50%",
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ8dzq7Pq5FjC4gAC1mdj0phpxfkY4nCdlOP5bQgN9Eads5VrBV4wyq0TBP70z-qYWcfihoX5QIvVgY-v3Y30MHFNfuKeLUkQ6G-aPQyjeqj7qrV2TLQSq-PcNojBxbByDRPbHwpnvzOB-TiODAKPi_Fkwj76PVDXdsgLRYrIsnkOcGUXN9Xw3VsCE4sCvxEGXdVtNAkemJPnHMOycYEr-IokwRLiEbStY1b-WKMW4BNCUHg7KUMSm3MgojWOwEQaH8SoQb5aM57w",
                                    aspectRatio: "1/1",
                                    borderRadius: "md"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CORE PRINCIPLES
        // --------------------------------------------------------------------------
        {
            key: "education-core-principles",
            name: "Core Principles",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#000000",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 12,
                    "@media (max-width: 1024px)": {
                        columns: 1,
                        paddingY: 64,
                        paddingX: 32
                    },
                    "@media (max-width: 768px)": {
                        columns: 1,
                        paddingY: 48,
                        paddingX: 20,
                        gap: 8
                    }
                },
                columns: [
                    {
                        id: "edu-principles-list",
                        width: "50%",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "02. Our Philosophy", color: "#FF4500", bgColor: "transparent" }
                            },
                            {
                                type: "Heading",
                                props: { text: "Core Principles", tag: "h2", color: "#ffffff", size: "4xl", className: "mb-12" }
                            },
                            // Using FeatureRow for list items
                            {
                                type: "FeatureRow", // Tier 1
                                props: {
                                    title: "I. Our Mission",
                                    description: "We maintain the highest standards of academic rigor.We maintain the highest standards of academic rigor.We maintain the highest standards of academic rigor.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.",
                                    icon: "verified", // Material icon name
                                    iconColor: "#FF4500",
                                    textColor: "#ffffff",
                                    marginBottom: 24
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: {
                                    title: "II. Our Vision",
                                    description: "Education is borderless. We cultivate minds ready to lead.Education is borderless. We cultivate minds ready to lead.Education is borderless. We cultivate minds ready to lead.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.",
                                    icon: "public",
                                    iconColor: "#FF4500",
                                    textColor: "#ffffff",
                                    marginBottom: 24
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: {
                                    title: "III. Our Values",
                                    description: "Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.Building for tomorrow means acting responsibly today.",
                                    icon: "eco",
                                    iconColor: "#FF4500",
                                    textColor: "#ffffff",
                                    marginBottom: 24
                                }
                            }
                        ]
                    },
                    {
                        id: "edu-principles-image",
                        width: "50%",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSFtVJekYueeheNFE3z-EZxICTuI7sc-GrxQ8vkZ6V3CjAcj39_vTARBe9JyLkwvZoD-99NJfw02z6ND2KiDuswZiyBhXNLY12Cn1IKy3MKBNNolaGvnspqSCTSJiW4oNzU8YgVIB9wTHhm4UmAwi_ow21BsshsLm-ySNq9AJaQJDd8bwPMd6WXFJAqkCngrMnKZWObqRYqW5qvUfeCVwCE8QOwcLKzBCTISZGHasqkFQxL1of1GOz7QyYnC7TQbKWXBX4-kaJYC0",
                                    aspectRatio: "1/1",
                                    borderRadius: "15px",
                                    width: "700px",
                                    height: "600px",
                                    "@media (max-width: 1024px)": {
                                        width: "100%",
                                        height: "auto"
                                    },
                                    "@media (max-width: 768px)": {
                                        width: "100%",
                                        height: "auto"
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // LEADERSHIP (ACADEMIC BOARD)
        // --------------------------------------------------------------------------
        {
            key: "education-leadership",
            name: "Academic Board",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    "@media (max-width: 1024px)": {
                        paddingY: 80,
                        paddingX: 32
                    },
                    "@media (max-width: 768px)": {
                        paddingY: 60,
                        paddingX: 20
                    }
                },
                columns: [
                    {
                        id: "edu-leadership-header",
                        width: "100%",
                        props: {
                            textAlign: "center",
                            marginBottom: 48
                        },
                        elements: [
                            { 
                                type: "Badge", 
                                props: { 
                                    text: "03. The Leadership", 
                                    color: "#FF4500",
                                    align: "center"
                                } 
                            },
                            { 
                                type: "Heading", 
                                props: { 
                                    text: "ACADEMIC BOARD", 
                                    tag: "h2", 
                                    size: "4xl",
                                    align: "center"
                                } 
                            },
                            { 
                                type: "Paragraph", 
                                props: { 
                                    text: "Our leadership team comprises world-renowned researchers and diplomats.", 
                                    align: "center",
                                    marginBottom: 24
                                } 
                            }
                        ]
                    },
                    {
                        id: "edu-leadership-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 14,
                        props: {
                            "@media (max-width: 1024px)": {
                                columns: 2,
                                gap: 4
                            },
                            "@media (max-width: 768px)": {
                                columns: 1,
                                gap: 8
                            }
                        },
                        elements: [
                            {
                                type: "TeamMember",
                                props: {
                                    name: "Dr. Alistair Vance",
                                    title: "Chancellor",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbsQRGmrH9trfK-Yl83kO7cZ4gLY9ZYRNzpX_8oLY70cKjMJdS1bSA-JD1kIsV31naC2yN-yvK3GXCqSouZ0xn7EO0FsJoegNBz7qOLsB-MbVVvLm7oH9qyL3f2Fb0pSx_Xs9p5V2ndAWd2QSQI5KNZTVBZhhV0xq5dN1-jmlzIAd5DgQsG_hIkGMVt6zK3OsG8m0XukIlxONXAaXxbvL2E8qLzFJKG9pg1Xq8DK_Gk2e8uXvO4HXF1WeX53tmZEVt3yEnFZk6y-E",
                                    socialLinks: [],
                                    textAlign: "center"
                                }
                            },
                            {
                                type: "TeamMember",
                                props: {
                                    name: "Sarah Kensington",
                                    title: "Dean of Faculty",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPU7hZd15K7LNvVUxFLUzTwpR53iwCPo5k5TeMNJBWtkT-LpaDkCnfeTxk5JnDHI33CpAbHLOFlQBD32ZgVsoHZzlebGZTlz1tH07xF8IhlMnOnKu5qySG8zoHO3bOLiL8T0tQ5C3AOFRfCu_HN_eXNA-6sfSDa2qGN_ZY9wR5zhwNjjgF6vBRT8Ah1thhEBQRZpP3fwkub73q1CdiWr8OyV6xaYkXGXsWQdtCJrMkpzgYHloh2IBm5h4g0UpRPoa77cm8nFjIZic",
                                    socialLinks: [],
                                    textAlign: "center"
                                }
                            },
                            {
                                type: "TeamMember",
                                props: {
                                    name: "Marcus Thorne",
                                    title: "Director of Research",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATHQO6BTibZkxQl6TXT8kiDYbHh-rWl8PCMicFCt0hA9hsjZGHjMfMixk493UnhVs2CcTTJFjfqg17JkqIw_fED36OeFEyif_nTvgF0l2zY7ipR5Ay6TEqTbZAOvAa8o6FTc1EhQOcB9YMm4HfgiX0nWElBaH1k-7tspToI54el6peofkhnPkwEKc4GKkk-yNl1a2OMwbxs9ywb6pDn1dfgevosn1x5BbN_JxHG0mWEeysLdo3iEO7tGwOYzFeybxPmB3XDQ8tRyM",
                                    socialLinks: [],
                                    textAlign: "center"
                                }
                            },
                            {
                                type: "TeamMember",
                                props: {
                                    name: "Elena Rossi",
                                    title: "Global Relations",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_9HSwFaTsKllkNMCa05FN0Pl-loeFiO1SrmEoC3dcyWq9BnSm0YkMQslSlNaUOtfI1Ars28i06sJ11YCBcGuIZD84nsmE2jtGqZZbxfxCWLdb8lNBqPoKmlXdhWJjahtpJYHC3zGy2StKcUDh4lXvdeZX8Fcgk2oEZJ4vp4FmTo3JyARTKmUTXy-Ih4Xh8K5i-yYxZ_tKfRJp730Ch0Od327tMVyJzWoGRM5DVPTSiDzhhNnCWPE0fb2T6-iQ4kTHNgZUx2fWv94",
                                    socialLinks: [],
                                    textAlign: "center"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = educationAbout;
