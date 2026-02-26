/**
 * Academiq Certifications Page
 * Theme: Professional Education / EdTech
 * Primary Color: #0048B3 (Deep Blue)
 * Secondary Colors: Red (#dc2626), Slate (#64748b)
 * Background: #F8FAFC (Light)
 * Fonts: Inter (Body), Plus Jakarta Sans (Display)
 */

const academiqCertifications = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION - "CERTIFICATION TRACKS"
        // --------------------------------------------------------------------------
        {
            key: "academiq-cert-hero",
            name: "Certification Hero Section",
            description: "Hero section with badge, title, and description",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    "@media (max-width: 768px)": {
                        paddingY: 48,
                        paddingX: 20
                    },
                    "@media (max-width: 1024px)": {
                        paddingY: 80,
                        paddingX: 40
                    }
                },
                columns: [
                    {
                        id: "cert-hero-col",
                        width: "100%",
                        props: {
                            maxWidth: "900px"
                        },
                        elements: [
                            // Badge
                            {
                                id: "cert-hero-badge",
                                type: "Badge",
                                props: {
                                    text: "Official Partnerships",
                                    color: "#0048B3",
                                    backgroundColor: "#dbeafe",
                                    borderRadius: 24,
                                    marginBottom: 24,
                                    fontSize: "xs",
                                    fontWeight: "bold",
                                    paddingX: 16,
                                    paddingY: 8
                                }
                            },
                            // Heading
                            {
                                id: "cert-hero-heading",
                                type: "Heading",
                                props: {
                                    text: "Certification Tracks",
                                    tag: "h1",
                                    color: "#0f172a",
                                    size: "5xl",
                                    fontWeight: "black",
                                    lineHeight: 1.2,
                                    marginBottom: 24,
                                    "@media (max-width: 768px)": {
                                        size: "3xl",
                                        marginBottom: 16
                                    }
                                }
                            },
                            // Description
                            {
                                id: "cert-hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Accelerate your professional growth with industry-recognized certifications. Follow our curated tracks to go from novice to certified expert with official exam vouchers.",
                                    color: "#64748b",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    maxWidth: "700px",
                                    marginBottom: 0,
                                    "@media (max-width: 768px)": {
                                        size: "base"
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CERTIFICATION TRACK 1 - CLOUD ARCHITECTURE SPECIALIST
        // --------------------------------------------------------------------------
        {
            key: "academiq-cert-track-1",
            name: "Cloud Architecture Track",
            description: "Cloud Architecture Specialist certification track",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "row",
                    gap: 64,
                    alignItems: "center",
                    "@media (max-width: 1024px)": {
                        flexDirection: "column",
                        gap: 48,
                        paddingY: 80,
                        paddingX: 40
                    },
                    "@media (max-width: 768px)": {
                        paddingY: 48,
                        paddingX: 20
                    }
                },
                columns: [
                    // Left Column - Content
                    {
                        id: "cert-track-1-left",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 24,
                            justifyContent: "center",
                            "@media (max-width: 1024px)": {
                                width: "100%",
                                alignItems: "center",
                                textAlign: "center"
                            }
                        },
                        elements: [
                            // Partner Logo
                            {
                                id: "cert-track-1-logo",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABBvyS4rqb_EGV_gh7eU5UQ9lGya80jYIBg85-Ex2D7ADaNPSAuZdo4wJJJ0fw5DbMXi31CuMsQsvEt-Zmz13jYvBuZKB6O59hyJ2zh7YvBLg0cDSOvvwYM7v5WrdWP4aCsHrt92epxehShMLJMG4zBv9rWqTfxAeI_a3_h3jZMlijzhsIE3OfttPYbvP0MEsbrdPdo3D3uinOQYe0W10bRTqv2q6XJ7jXyQFotZC-RFJmhw",
                                    alt: "Cloud Partner Logo",
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "contain",
                                    marginBottom: 24
                                }
                            },
                            // Title
                            {
                                id: "cert-track-1-title",
                                type: "Heading",
                                props: {
                                    text: "Cloud Architecture Specialist",
                                    tag: "h2",
                                    color: "#0f172a",
                                    size: "3xl",
                                    fontWeight: "bold",
                                    lineHeight: 1.3,
                                    marginBottom: 16,
                                    "@media (max-width: 768px)": {
                                        size: "2xl"
                                    }
                                }
                            },
                            // Description
                            {
                                id: "cert-track-1-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Master the foundations of cloud computing, security, and infrastructure management. This track prepares you for the world's most sought-after cloud engineering roles through a rigorous curriculum.",
                                    color: "#64748b",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    marginBottom: 24,
                                    "@media (max-width: 768px)": {
                                        size: "base"
                                    }
                                }
                            },
                            // Tags
                            {
                                id: "cert-track-1-tags",
                                type: "Badge",
                                props: {
                                    text: "9 Courses • Exam Included",
                                    color: "#0048B3",
                                    backgroundColor: "#dbeafe",
                                    borderRadius: 20,
                                    paddingX: 16,
                                    paddingY: 10,
                                    fontSize: "sm",
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    },
                    // Right Column - Voucher Card
                    {
                        id: "cert-track-1-right",
                        width: "50%",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "cert-track-1-card",
                                type: "CertificationTrackCard",
                                props: {
                                    cardTitle: "Voucher Package",
                                    benefits: [
                                        "Official Exam Retake Policy",
                                        "Premium Practice Tests",
                                        "12 Months Validity"
                                    ],
                                    buttonText: "Claim Official Voucher →",
                                    buttonLink: "#",
                                    buttonColor: "#0048B3",
                                    buttonHoverColor: "#003399",
                                    titleColor: "#0f172a",
                                    textColor: "#0f172a",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e2e8f0",
                                    shadowIntensity: "medium"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CERTIFICATION TRACK 2 - CREATIVE DESIGN EXPERT
        // --------------------------------------------------------------------------
        {
            key: "academiq-cert-track-2",
            name: "Creative Design Track",
            description: "Creative Design Expert certification track",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8fafc",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "row-reverse",
                    gap: 64,
                    alignItems: "center",
                    "@media (max-width: 1024px)": {
                        flexDirection: "column",
                        gap: 48,
                        paddingY: 80,
                        paddingX: 40
                    },
                    "@media (max-width: 768px)": {
                        paddingY: 48,
                        paddingX: 20
                    }
                },
                columns: [
                    // Left Column - Content
                    {
                        id: "cert-track-2-left",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 24,
                            justifyContent: "center",
                            "@media (max-width: 1024px)": {
                                width: "100%",
                                alignItems: "center",
                                textAlign: "center"
                            }
                        },
                        elements: [
                            // Partner Logo
                            {
                                id: "cert-track-2-logo",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBye4-eQ1HExprSQdkUbUWd4WmP2ZlzBLd0Uh6aeVaQNeC_pN2fPgNSic9GC5a7E8ext6T_GVsRxuD2k3ceWjwUpKDS3R6rM7YIyF-GIwL4M-KjNBoVOZDptX0zGLrsNK9UpNQthXwo7AqAwJS6A34LU7JuDoQctzNHRUZlZtvtDv1kxY-F1kBmMIeEkSr5Z4Fmg8U6TtxEEkqiRbmM3UKnjdMspylrUWcObuYJqVXZFoG0CuuHcOmf2vD6uuGigAfq8Wxr-kkBDJzD",
                                    alt: "Creative Design Partner Logo",
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "contain",
                                    marginBottom: 24
                                }
                            },
                            // Title
                            {
                                id: "cert-track-2-title",
                                type: "Heading",
                                props: {
                                    text: "Creative Design Expert",
                                    tag: "h2",
                                    color: "#0f172a",
                                    size: "3xl",
                                    fontWeight: "bold",
                                    lineHeight: 1.3,
                                    marginBottom: 16,
                                    "@media (max-width: 768px)": {
                                        size: "2xl"
                                    }
                                }
                            },
                            // Description
                            {
                                id: "cert-track-2-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Unlock your creative potential by mastering the industry-standard suite for visual communication. From digital imaging to motion graphics, this track validates your professional expertise.",
                                    color: "#64748b",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    marginBottom: 24,
                                    "@media (max-width: 768px)": {
                                        size: "base"
                                    }
                                }
                            },
                            // Tags
                            {
                                id: "cert-track-2-tags",
                                type: "Badge",
                                props: {
                                    text: "12 Courses • Portfolio Review",
                                    color: "#dc2626",
                                    backgroundColor: "#fee2e2",
                                    borderRadius: 20,
                                    paddingX: 16,
                                    paddingY: 10,
                                    fontSize: "sm",
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    },
                    // Right Column - Voucher Card
                    {
                        id: "cert-track-2-right",
                        width: "50%",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "cert-track-2-card",
                                type: "CertificationTrackCard",
                                props: {
                                    cardTitle: "Certification Pack",
                                    benefits: [
                                        "Professional Credential Badge",
                                        "Creative Cloud Access",
                                        "Mentorship Session"
                                    ],
                                    buttonText: "Claim Official Voucher →",
                                    buttonLink: "#",
                                    buttonColor: "#dc2626",
                                    buttonHoverColor: "#b91c1c",
                                    titleColor: "#0f172a",
                                    textColor: "#0f172a",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e2e8f0",
                                    shadowIntensity: "medium"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CERTIFICATION TRACK 3 - CYBERSECURITY ARCHITECT
        // --------------------------------------------------------------------------
        {
            key: "academiq-cert-track-3",
            name: "Cybersecurity Track",
            description: "Cybersecurity Architect certification track",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "row",
                    gap: 64,
                    alignItems: "center",
                    "@media (max-width: 1024px)": {
                        flexDirection: "column",
                        gap: 48,
                        paddingY: 80,
                        paddingX: 40
                    },
                    "@media (max-width: 768px)": {
                        paddingY: 48,
                        paddingX: 20
                    }
                },
                columns: [
                    // Left Column - Content
                    {
                        id: "cert-track-3-left",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 24,
                            justifyContent: "center",
                            "@media (max-width: 1024px)": {
                                width: "100%",
                                alignItems: "center",
                                textAlign: "center"
                            }
                        },
                        elements: [
                            // Partner Logo
                            {
                                id: "cert-track-3-logo",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCWszad3yeFavqhwCbi-n3AoexnIeAOrDtS_qJYRLwdjiPcRrKSyzGcBGl-82Z8qNEsSRKVhRXVrpy30DyghDb96qg7xD311mEVRA4mOOeIMGmqbOQn2SJiJyJrFwfueOrkGuWYaytmxqZGrWS6lmb_P1U4E3WXg9clJUxabfey3g7HkU9IrQrnjXaD6LfR9DdZ5UbYIfGBT90eCbrFnzQdgWHT_KzB4M7CQzC61yuxbZb5w8YIzphQ8-KX0qR4hPdI3n5maZbYLqd",
                                    alt: "Cybersecurity Partner Logo",
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "contain",
                                    marginBottom: 24
                                }
                            },
                            // Title
                            {
                                id: "cert-track-3-title",
                                type: "Heading",
                                props: {
                                    text: "Cybersecurity Architect",
                                    tag: "h2",
                                    color: "#0f172a",
                                    size: "3xl",
                                    fontWeight: "bold",
                                    lineHeight: 1.3,
                                    marginBottom: 16,
                                    "@media (max-width: 768px)": {
                                        size: "2xl"
                                    }
                                }
                            },
                            // Description
                            {
                                id: "cert-track-3-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Protect digital assets and build resilient systems. This track covers threat intelligence, ethical hacking, and risk management for modern enterprise environments.",
                                    color: "#64748b",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    marginBottom: 24,
                                    "@media (max-width: 768px)": {
                                        size: "base"
                                    }
                                }
                            },
                            // Tags
                            {
                                id: "cert-track-3-tags",
                                type: "Badge",
                                props: {
                                    text: "15 Labs • Global Certification",
                                    color: "#64748b",
                                    backgroundColor: "#f1f5f9",
                                    borderRadius: 20,
                                    paddingX: 16,
                                    paddingY: 10,
                                    fontSize: "sm",
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    },
                    // Right Column - Voucher Card
                    {
                        id: "cert-track-3-right",
                        width: "50%",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "cert-track-3-card",
                                type: "CertificationTrackCard",
                                props: {
                                    cardTitle: "Security Voucher",
                                    benefits: [
                                        "Advanced Simulation Sandbox",
                                        "Official Exam Guide",
                                        "Priority Lab Support"
                                    ],
                                    buttonText: "Claim Official Voucher →",
                                    buttonLink: "#",
                                    buttonColor: "#0048B3",
                                    buttonHoverColor: "#003399",
                                    titleColor: "#0f172a",
                                    textColor: "#0f172a",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e2e8f0",
                                    shadowIntensity: "medium"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CTA SECTION - "NOT SURE WHICH TRACK?"
        // --------------------------------------------------------------------------
        {
            key: "academiq-cert-cta",
            name: "Certification CTA Section",
            description: "Call-to-action section with consultation booking and brochure download",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#0048B3",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    "@media (max-width: 768px)": {
                        paddingY: 48,
                        paddingX: 20
                    },
                    "@media (max-width: 1024px)": {
                        paddingY: 80,
                        paddingX: 40
                    }
                },
                columns: [
                    {
                        id: "cert-cta-col",
                        width: "100%",
                        props: {
                            maxWidth: "800px"
                        },
                        elements: [
                            // Heading
                            {
                                id: "cert-cta-heading",
                                type: "Heading",
                                props: {
                                    text: "Not sure which track to choose?",
                                    tag: "h2",
                                    color: "#ffffff",
                                    size: "4xl",
                                    fontWeight: "black",
                                    lineHeight: 1.2,
                                    marginBottom: 24,
                                    "@media (max-width: 768px)": {
                                        size: "2xl",
                                        marginBottom: 16
                                    }
                                }
                            },
                            // Description
                            {
                                id: "cert-cta-description",
                                type: "Paragraph",
                                props: {
                                    text: "Our career counselors are ready to help you map out your professional journey based on your goals and experience.",
                                    color: "#bfdbfe",
                                    size: "lg",
                                    lineHeight: 1.6,
                                    marginBottom: 48,
                                    "@media (max-width: 768px)": {
                                        size: "base",
                                        marginBottom: 32
                                    }
                                }
                            },
                            // Button Group
                            {
                                id: "cert-cta-buttons",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Book Free Consultation",
                                    secondaryText: "Download Brochure",
                                    primaryBg: "#ffffff",
                                    primaryColor: "#0048B3",
                                    secondaryBg: "transparent",
                                    secondaryBorder: "#ffffff",
                                    secondaryColor: "#ffffff",
                                    gap: "gap-4",
                                    layout: "row",
                                    "@media (max-width: 768px)": {
                                        layout: "column",
                                        gap: 12
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = academiqCertifications;
