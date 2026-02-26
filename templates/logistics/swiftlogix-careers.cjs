/**
 * SwiftLogix Template - Careers / Culture Page
 * Theme: Bold Industrial / Logistics / Transportation
 * Primary Color: #ed2626 (Red)
 * Secondary Color: #0f0f0f (Dark)
 * Background: #ffffff / #0f0f0f
 * Fonts: Manrope (All)
 */

const swiftlogixCareers = {
    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // CULTURE HERO SECTION WITH STATS & GALLERY
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-culture-hero",
            name: "Culture Hero with Gallery",
            description: "Culture hero section with stats cards and image gallery",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column"
                },
                columns: [
                    // Hero Header with Stats - Left Column (Heading)
                    {
                        id: "culture-heading-col",
                        width: "60%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "center"
                        },
                        elements: [
                            {
                                id: "culture-main-heading",
                                type: "Heading",
                                props: {
                                    text: "Built by People, Driven by Purpose",
                                    tag: "h2",
                                    color: "#0f0f0f",
                                    size: "5xl",
                                    fontWeight: "black",
                                    align: "left",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "culture-description",
                                type: "Paragraph",
                                props: {
                                    text: "At SwiftLogix, we don't just move freight; we move the world. Join a diverse team of visionaries redefining the logistics landscape.",
                                    color: "#64748b",
                                    size: "lg",
                                    align: "left",
                                    marginTop: 0
                                }
                            }
                        ]
                    },
                    // Hero Header with Stats - Right Column (Stats Cards)
                    {
                        id: "culture-stats-col",
                        width: "40%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap: 16
                        },
                        elements: [
                            {
                                id: "stat-nationalities",
                                type: "Box",
                                props: {
                                    backgroundColor: "#f4f4f5",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "center",
                                    border: "1px solid #e4e4e7"
                                },
                                columns: [{
                                    id: "stat-nat-inner",
                                    width: "100%",
                                    elements: [
                                        {
                                            id: "stat-nat-value",
                                            type: "Heading",
                                            props: {
                                                text: "24+",
                                                tag: "h3",
                                                color: "#ed2626",
                                                size: "3xl",
                                                fontWeight: "black",
                                                align: "center",
                                                marginBottom: 8
                                            }
                                        },
                                        {
                                            id: "stat-nat-label",
                                            type: "Paragraph",
                                            props: {
                                                text: "Nationalities",
                                                color: "#a1a1a1",
                                                size: "xs",
                                                fontWeight: "bold",
                                                align: "center",
                                                textTransform: "uppercase"
                                            }
                                        }
                                    ]
                                }]
                            },
                            {
                                id: "stat-offices",
                                type: "Box",
                                props: {
                                    backgroundColor: "#f4f4f5",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "center",
                                    border: "1px solid #e4e4e7"
                                },
                                columns: [{
                                    id: "stat-off-inner",
                                    width: "100%",
                                    elements: [
                                        {
                                            id: "stat-off-value",
                                            type: "Heading",
                                            props: {
                                                text: "12",
                                                tag: "h3",
                                                color: "#ed2626",
                                                size: "3xl",
                                                fontWeight: "black",
                                                align: "center",
                                                marginBottom: 8
                                            }
                                        },
                                        {
                                            id: "stat-off-label",
                                            type: "Paragraph",
                                            props: {
                                                text: "Global Offices",
                                                color: "#a1a1a1",
                                                size: "xs",
                                                fontWeight: "bold",
                                                align: "center",
                                                textTransform: "uppercase"
                                            }
                                        }
                                    ]
                                }]
                            }
                        ]
                    },
                    // Spacer
                    {
                        id: "spacer-after-header",
                        width: "100%",
                        elements: [
                            {
                                id: "spacer",
                                type: "Spacer",
                                props: {
                                    height: "lg"
                                }
                            }
                        ]
                    },
                    // Culture Gallery
                    {
                        id: "gallery-col-1",
                        width: "calc(33.333% - 16px)",
                        elements: [
                            {
                                id: "gallery-operations",
                                type: "CultureGalleryCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIQirL0lnzBfps7TxiD_6u1MnzJoaNJNBdrqpFmsF3MQ1O8pLCLUMSsGcyxrO9Wvqkr-UNAmXslq-VuaCE4R2m9m1c4CNe93qzaRDP1Yjc7zJVWcz5LohB_fsk37EglEt1W_zqCPuMVZ4o5ND7O5ACfSz6phJJej0KMcET-wuC3nbna5xJhCrB0gDyVfdmh8T8vr2K3qs4bKLm-8gF6LVfEwyXiaPOp9PNgnCygV4XdHTaTx6dPVUxyh2IAJZ8zYiG4Qe9WCKZ-Q",
                                    imageAlt: "SwiftLogix Team Collaboration",
                                    category: "Operations",
                                    title: "Innovation in Motion",
                                    buttonText: "Join Us",
                                    buttonLink: "#careers"
                                }
                            }
                        ]
                    },
                    {
                        id: "gallery-col-2",
                        width: "calc(33.333% - 16px)",
                        elements: [
                            {
                                id: "gallery-technology",
                                type: "CultureGalleryCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmHppV11SnSw2esfSxSZdJfLw-4GuXHhMipOM6o5XqWHeHCgSARpsW2j9B69ri_YQhcwIDJgKHWn24RWCzOOob5lOYbKdptSBQi7Mz5dIyF1Xf6QKSXx-IUos6ujYIDCnN7mDg_ljjCX_hJoHeohWQ243pcFp6XHiO8PAsH3Zug3ZxAwZ1XHEirta0dbysVIQtERQKDbiSXUh3lMEPeWByr4dIV1vTHNRyxFh2M2mzHjfDWbTCNp3nJQdcECeGMFagvuBO23fF5g",
                                    imageAlt: "Logistics Technology Experts",
                                    category: "Technology",
                                    title: "Engineering the Future",
                                    buttonText: "Join Us",
                                    buttonLink: "#careers",
                                    marginTop: 48
                                }
                            }
                        ]
                    },
                    {
                        id: "gallery-col-3",
                        width: "calc(33.333% - 16px)",
                        elements: [
                            {
                                id: "gallery-success",
                                type: "CultureGalleryCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbmb0H-6I0fIVwNxoNvco1f7q46zs9Ugx9kAcbzaLYdtLkSn8SOfl-F378D_z3DPotZaWHO4M1DVIAHHtMBctcB8xuhMr3BaIG3UXZpUT356gv9x2m_viYfZvA4Bs41CftCWVN9n-mwfgYnhvVk70GfuLuSxfJNmPvBfchFw_rWmb8k3SHhdZ_wATiVKeXMMyKJ1xZVvOGFuVX2AKxLaaPq9sunCWwfIVBSvJzrSYYXGdRL2BBIWESDEAgjGyVFDTcgKz3tkicRA",
                                    imageAlt: "Customer Success Team",
                                    category: "Client Success",
                                    title: "Global Relationships",
                                    buttonText: "Join Us",
                                    buttonLink: "#careers"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // JOB OPENINGS SECTION
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-job-openings",
            name: "Job Openings",
            description: "List of current job opportunities",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f4f4f5",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                columns: [
                    // Header
                    {
                        id: "jobs-header-col",
                        width: "100%",
                        props: {
                            textAlign: "center",
                            marginBottom: 48,
                            maxWidth: "800px"
                        },
                        elements: [
                            {
                                id: "jobs-title",
                                type: "Heading",
                                props: {
                                    text: "Opportunities Awaiting",
                                    tag: "h3",
                                    color: "#0f0f0f",
                                    size: "4xl",
                                    fontWeight: "black",
                                    align: "center",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "jobs-description",
                                type: "Paragraph",
                                props: {
                                    text: "Find your next career milestone in our growing ecosystem.",
                                    color: "#64748b",
                                    size: "lg",
                                    align: "center"
                                }
                            }
                        ]
                    },
                    // Job Listings
                    {
                        id: "jobs-list-col",
                        width: "100%",
                        props: {
                            flexDirection: "column",
                            gap: 16
                        },
                        elements: [
                            {
                                id: "job-1",
                                type: "JobOpeningCard",
                                props: {
                                    jobType: "Full-Time",
                                    location: "Remote / London",
                                    title: "Senior Supply Chain Architect",
                                    buttonText: "Apply Now"
                                }
                            },
                            {
                                id: "job-2",
                                type: "JobOpeningCard",
                                props: {
                                    jobType: "Contract",
                                    location: "Singapore",
                                    title: "Global Logistics Coordinator",
                                    buttonText: "Apply Now"
                                }
                            },
                            {
                                id: "job-3",
                                type: "JobOpeningCard",
                                props: {
                                    jobType: "Full-Time",
                                    location: "Chicago, IL",
                                    title: "Warehouse Operations Lead",
                                    buttonText: "Apply Now"
                                }
                            },
                            {
                                id: "job-4",
                                type: "JobOpeningCard",
                                props: {
                                    jobType: "Full-Time",
                                    location: "Frankfurt",
                                    title: "Safety & Compliance Manager",
                                    buttonText: "Apply Now"
                                }
                            }
                        ]
                    },
                    // View All Link
                    {
                        id: "jobs-footer-col",
                        width: "100%",
                        props: {
                            textAlign: "center",
                            marginTop: 48
                        },
                        elements: [
                            {
                                id: "view-all-jobs",
                                type: "Button",
                                props: {
                                    text: "View all 15+ openings",
                                    variant: "text",
                                    size: "sm",
                                    textColor: "#64748b",
                                    link: "#careers"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // WHY SWIFTLOGIX SECTION
        // --------------------------------------------------------------------------
        {
            key: "swiftlogix-why-section",
            name: "Why SwiftLogix Culture",
            description: "Culture and benefits section with testimonial",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "row",
                    gap: 80,
                    alignItems: "center"
                },
                columns: [
                    // Left Content
                    {
                        id: "why-content-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "center"
                        },
                        elements: [
                            {
                                id: "why-label",
                                type: "Badge",
                                props: {
                                    text: "Why SwiftLogix?",
                                    color: "#ed2626",
                                    bgColor: "transparent",
                                    size: "sm",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "why-heading",
                                type: "Heading",
                                props: {
                                    text: "Culture of Excellence and Care",
                                    tag: "h2",
                                    color: "#0f0f0f",
                                    size: "4xl",
                                    fontWeight: "black",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "why-description",
                                type: "Paragraph",
                                props: {
                                    text: "We don't just follow industry standards—we set them. Our workplace is built on foundations of radical transparency, rapid innovation, and unwavering support for every team member.",
                                    color: "#64748b",
                                    size: "lg",
                                    marginBottom: 40,
                                    lineHeight: "relaxed"
                                }
                            },
                            {
                                id: "benefits-list",
                                type: "Box",
                                props: {
                                    backgroundColor: "transparent",
                                    gap: 24
                                },
                                columns: [{
                                    id: "benefits-inner",
                                    width: "100%",
                                    elements: [
                                        {
                                            id: "benefit-1",
                                            type: "BenefitItem",
                                            props: {
                                                icon: "globe",
                                                title: "Global Mobility Programs",
                                                description: "Opportunities to rotate across our international facilities in Asia, Europe, and America."
                                            }
                                        },
                                        {
                                            id: "benefit-2",
                                            type: "BenefitItem",
                                            props: {
                                                icon: "heart",
                                                title: "Industry-Leading Benefits",
                                                description: "Comprehensive healthcare, wellness stipends, and performance-based equity programs."
                                            }
                                        },
                                        {
                                            id: "benefit-3",
                                            type: "BenefitItem",
                                            props: {
                                                icon: "lightbulb",
                                                title: "Innovation Lab Access",
                                                description: "Direct input into our R&D cycle for AI-driven logistics and green energy initiatives."
                                            }
                                        }
                                    ]
                                }]
                            }
                        ]
                    },
                    // Right Image with Quote
                    {
                        id: "why-image-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "center",
                            position: "relative",
                            alignItems: "center"
                        },
                        elements: [
                            {
                                id: "why-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF-3uxC7FS6gaLgmswPVDcbESJrh-z1-JujTQDy4ktgmrtFQkZ4yjAP2wL8uczMufSz0ifqB5a9jh75Ocqp9XrU_2ugaiFucDFw8Ci8Eq-8nFT9vAdIlMhdAQSmZrfukQtQmUOv3kmLbpfHZWivZ-xdSc8I3uA0cKgZ2bOiHF1ILpg-PhDMPJWzYfObKJAODmtB7kUBZv07rM0IjeaXhCdp2fLs2iB-pXehMvvdrs20k-idx0IbaBc9KZMXIqeiHcumOrHyMVplA",
                                    alt: "Team culture and values",
                                    borderRadius: 24,
                                    aspectRatio: "1/1",
                                    objectFit: "cover",
                                    maxWidth: "100%",
                                    height: "auto"
                                }
                            },
                            {
                                id: "why-quote",
                                type: "Box",
                                props: {
                                    backgroundColor: "#ed2626",
                                    padding: 24,
                                    borderRadius: 16,
                                    marginTop: -60,
                                    marginLeft: 40,
                                    maxWidth: "80%",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                                },
                                columns: [{
                                    id: "quote-inner",
                                    width: "100%",
                                    elements: [
                                        {
                                            id: "quote-text",
                                            type: "Paragraph",
                                            props: {
                                                text: "The autonomy here is unmatched. We are encouraged to break barriers every day.",
                                                color: "#ffffff",
                                                fontWeight: "bold",
                                                size: "base",
                                                lineHeight: "relaxed",
                                                marginBottom: 12
                                            }
                                        },
                                        {
                                            id: "quote-author",
                                            type: "Paragraph",
                                            props: {
                                                text: "— Sarah Chen, Operations Lead",
                                                color: "#ffb3b3",
                                                size: "xs",
                                                fontWeight: "bold",
                                                textTransform: "uppercase"
                                            }
                                        }
                                    ]
                                }]
                            }
                        ]
                    }
                ]
            }
        }
    ],

};

module.exports = swiftlogixCareers;
