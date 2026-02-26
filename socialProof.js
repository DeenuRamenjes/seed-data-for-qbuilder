// Social Proof & Testimonials Section Templates
// COMPLETELY REDESIGNED: 12 UNIQUE sections with different layouts, components, and designs

export const socialProofSections = [
    // ============================================================================
    // 1. NUMERICAL RATING SHOWCASE - Large numeric display with breakdown
    // ============================================================================
    {
        key: "rating-showcase",
        type: "RatingShowcase",
        category: "features",
        name: "Rating Showcase",
        description: "Large prominent rating display with star breakdown",
        structure: {
            columns: [
                {
                    id: "rating-col",
                    width: "100%",
                    elements: [
                        {
                            id: "rating-heading",
                            type: "Heading",
                            props: {
                                text: "Loved by Users Worldwide",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "rating-spacer-1",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "rating-showcase",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 1, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                {
                                    id: "rating-card-1",
                                    type: "NumericalRating",
                                    props: {
                                        rating: "4.9",
                                        totalReviews: "2500+",
                                        ratingColor: "#fbbf24",
                                        backgroundColor: "#fefcf0",
                                        textColor: "var(--theme-text)",
                                        breakdownVisible: true
                                    }
                                },
                                {
                                    id: "rating-card-2",
                                    type: "NumericalRating",
                                    props: {
                                        rating: "4.8",
                                        totalReviews: "1800+",
                                        ratingColor: "var(--theme-primary)",
                                        backgroundColor: "#ecf9ff",
                                        textColor: "var(--theme-text)",
                                        breakdownVisible: true
                                    }
                                },
                                {
                                    id: "rating-card-3",
                                    type: "NumericalRating",
                                    props: {
                                        rating: "5.0",
                                        totalReviews: "3000+",
                                        ratingColor: "#34d399",
                                        backgroundColor: "#ecfff5",
                                        textColor: "var(--theme-text)",
                                        breakdownVisible: true
                                    }
                                }
                            ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 2. TRUST SIGNALS BANNER - Horizontal trust signals with icons
    // ============================================================================
    {
        key: "trust-signals-banner",
        type: "TrustSignalsBanner",
        category: "features",
        name: "Trust Signals Banner",
        description: "Horizontal row of trust signals with icons",
        structure: {
            columns: [
                {
                    id: "trust-col",
                    width: "100%",
                    elements: [
                        {
                            id: "trust-heading",
                            type: "Heading",
                            props: {
                                text: "Trusted by Industry Leaders",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "trust-signals",
                            type: "TrustSignal",
                            props: {
                                signals: [
                                    { icon: "👥", value: "500k+", label: "Active Users" },
                                    { icon: "🌍", value: "150+", label: "Countries" },
                                    { icon: "⚡", value: "99.99%", label: "Uptime" },
                                    { icon: "🚀", value: "10k+", label: "Companies" }
                                ],
                                layout: "horizontal",
                                iconSize: "48",
                                backgroundColor: "rgba(99, 102, 241, 0.05)",
                                textColor: "var(--theme-text, var(--theme-text))",
                                accentColor: "var(--theme-primary, var(--theme-primary))"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 3. ROLE-BASED TESTIMONIALS GRID - Testimonials grouped by role
    // ============================================================================
    {
        key: "role-based-testimonials",
        type: "RoleBasedTestimonials",
        category: "features",
        name: "Role-Based Testimonials",
        description: "Customer quotes organized by job role",
        structure: {
            columns: [
                {
                    id: "role-testimonials-col",
                    width: "100%",
                    elements: [
                        {
                            id: "role-testimonials-heading",
                            type: "Heading",
                            props: {
                                text: "Customer Success Stories by Role",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "role-testimonials-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "role-testimonials-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                {
                                    id: "role-testimonial-1",
                                    type: "RoleBasedTestimonial",
                                    props: {
                                        role: "Founder",
                                        roleIcon: "🚀",
                                        quote: "This platform accelerated our growth by 300%. A game-changer for our startup.",
                                        author: "Alex Rivera",
                                        company: "StartupXYZ",
                                        image: "",
                                        backgroundColor: "var(--theme-background)",
                                        roleColor: "#ec4899",
                                        textColor: "var(--theme-text)"
                                    }
                                },
                                {
                                    id: "role-testimonial-2",
                                    type: "RoleBasedTestimonial",
                                    props: {
                                        role: "CTO",
                                        roleIcon: "💻",
                                        quote: "The technical implementation was seamless. Integration took just 2 hours.",
                                        author: "Jordan Kim",
                                        company: "TechFlow Inc",
                                        image: "",
                                        backgroundColor: "var(--theme-background)",
                                        roleColor: "var(--theme-primary)",
                                        textColor: "var(--theme-text)"
                                    }
                                },
                                {
                                    id: "role-testimonial-3",
                                    type: "RoleBasedTestimonial",
                                    props: {
                                        role: "CMO",
                                        roleIcon: "📊",
                                        quote: "Reduced our marketing costs by 40% while increasing conversion rates. Outstanding ROI.",
                                        author: "Priya Patel",
                                        company: "Marketing Pro",
                                        image: "",
                                        backgroundColor: "var(--theme-background)",
                                        roleColor: "var(--theme-primary)",
                                        textColor: "var(--theme-text)"
                                    }
                                },
                                {
                                    id: "role-testimonial-4",
                                    type: "RoleBasedTestimonial",
                                    props: {
                                        role: "Operations",
                                        roleIcon: "⚙️",
                                        quote: "Streamlined our entire workflow. Best operational decision we made.",
                                        author: "Michael Chang",
                                        company: "OptiFlow",
                                        image: "",
                                        backgroundColor: "var(--theme-background)",
                                        roleColor: "var(--theme-primary)",
                                        textColor: "var(--theme-text)"
                                    }
                                },
                                {
                                    id: "role-testimonial-5",
                                    type: "RoleBasedTestimonial",
                                    props: {
                                        role: "Finance",
                                        roleIcon: "💰",
                                        quote: "Transparent pricing and amazing cost savings. Exceeded our budget expectations.",
                                        author: "Lisa Anderson",
                                        company: "FinanceHub",
                                        image: "",
                                        backgroundColor: "var(--theme-background)",
                                        roleColor: "var(--theme-primary)",
                                        textColor: "var(--theme-text)"
                                    }
                                },
                                {
                                    id: "role-testimonial-6",
                                    type: "RoleBasedTestimonial",
                                    props: {
                                        role: "Executive",
                                        roleIcon: "👔",
                                        quote: "Strategic partnership that drove our business forward. Highly recommend.",
                                        author: "David Park",
                                        company: "Global Enterprises",
                                        image: "",
                                        backgroundColor: "var(--theme-background)",
                                        roleColor: "var(--theme-primary)",
                                        textColor: "var(--theme-text)"
                                    }
                                }
                            ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 4. FEATURE-SPECIFIC TESTIMONIALS - Quotes organized by feature
    // ============================================================================
    {
        key: "feature-testimonials",
        type: "FeatureTestimonials",
        category: "features",
        name: "Feature Testimonials",
        description: "Customer quotes for specific features",
        structure: {
            columns: [
                {
                    id: "feature-testimonials-col",
                    width: "100%",
                    elements: [
                        {
                            id: "feature-testimonials-heading",
                            type: "Heading",
                            props: {
                                text: "What Users Love About Our Features",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "feature-testimonials-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "feature-testimonials-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 2, tablet: 1, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                {
                                    id: "feature-testimonial-1",
                                    type: "FeatureTestimonial",
                                    props: {
                                        icon: "⚡",
                                        featureName: "Lightning Fast Setup",
                                        testimonial: "I was up and running in under 5 minutes. No complicated configuration needed!",
                                        author: "Emma Watson",
                                        title: "Product Manager at Scale Corp",
                                        backgroundColor: "#f0f4ff",
                                        textColor: "var(--theme-text)",
                                        accentColor: "var(--theme-primary)"
                                    }
                                },
                                {
                                    id: "feature-testimonial-2",
                                    type: "FeatureTestimonial",
                                    props: {
                                        icon: "🎨",
                                        featureName: "Beautiful Design",
                                        testimonial: "The UI/UX is stunning and intuitive. My team loves using this tool every day.",
                                        author: "Marcus Johnson",
                                        title: "Design Lead at Creative Studio",
                                        backgroundColor: "#fef3f0",
                                        textColor: "var(--theme-text)",
                                        accentColor: "var(--theme-primary)"
                                    }
                                },
                                {
                                    id: "feature-testimonial-3",
                                    type: "FeatureTestimonial",
                                    props: {
                                        icon: "🔒",
                                        featureName: "Security & Compliance",
                                        testimonial: "Enterprise-grade security gave us peace of mind. All our compliance needs are met.",
                                        author: "Catherine Lee",
                                        title: "Security Officer at SecureNet",
                                        backgroundColor: "#f0fef9",
                                        textColor: "var(--theme-text)",
                                        accentColor: "var(--theme-primary)"
                                    }
                                },
                                {
                                    id: "feature-testimonial-4",
                                    type: "FeatureTestimonial",
                                    props: {
                                        icon: "📱",
                                        featureName: "Mobile First",
                                        testimonial: "Works flawlessly on all devices. Perfect for our remote-first team.",
                                        author: "Kevin Park",
                                        title: "CTO at Mobile First Corp",
                                        backgroundColor: "var(--theme-background)",
                                        textColor: "var(--theme-text)",
                                        accentColor: "var(--theme-primary)"
                                    }
                                }
                            ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 5. COMPLIANCE BADGES SHOWCASE - Security and certifications
    // ============================================================================
    {
        key: "compliance-showcase",
        type: "ComplianceShowcase",
        category: "features",
        name: "Compliance Showcase",
        description: "Security and compliance certifications with gradients",
        structure: {
            columns: [
                {
                    id: "compliance-col",
                    width: "100%",
                    elements: [
                        {
                            id: "compliance-heading",
                            type: "Heading",
                            props: {
                                text: "Security & Compliance",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "compliance-subtext",
                            type: "Paragraph",
                            props: {
                                text: "Industry-leading security standards and certifications for enterprise peace of mind",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "lg"
                            }
                        },
                        {
                            id: "compliance-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "compliance-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 20
                                },
                                elements: [
                                {
                                    id: "compliance-1",
                                    type: "ComplianceBadge",
                                    props: {
                                        icon: "🔐",
                                        title: "SOC 2 Type II",
                                        description: "Certified enterprise security",
                                        backgroundColor: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                                        borderColor: "#0284c7",
                                        textColor: "#0c4a6e"
                                    }
                                },
                                {
                                    id: "compliance-2",
                                    type: "ComplianceBadge",
                                    props: {
                                        icon: "✓",
                                        title: "ISO 27001",
                                        description: "International security standard",
                                        backgroundColor: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
                                        borderColor: "#059669",
                                        textColor: "#065f46"
                                    }
                                },
                                {
                                    id: "compliance-3",
                                    type: "ComplianceBadge",
                                    props: {
                                        icon: "📋",
                                        title: "GDPR Compliant",
                                        description: "Data privacy regulations",
                                        backgroundColor: "linear-gradient(135deg, #fde2e4 0%, #fecdd3 100%)",
                                        borderColor: "var(--theme-primary)",
                                        textColor: "#7f1d1d"
                                    }
                                },
                                {
                                    id: "compliance-4",
                                    type: "ComplianceBadge",
                                    props: {
                                        icon: "🛡️",
                                        title: "PCI DSS Level 1",
                                        description: "Payment card security",
                                        backgroundColor: "linear-gradient(135deg, #fef08a 0%, #fde047 100%)",
                                        borderColor: "#ca8a04",
                                        textColor: "#713f12"
                                    }
                                },
                                {
                                    id: "compliance-5",
                                    type: "ComplianceBadge",
                                    props: {
                                        icon: "🔒",
                                        title: "HIPAA Ready",
                                        description: "Healthcare compliance",
                                        backgroundColor: "linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%)",
                                        borderColor: "#9333ea",
                                        textColor: "#4c1d95"
                                    }
                                },
                                {
                                    id: "compliance-6",
                                    type: "ComplianceBadge",
                                    props: {
                                        icon: "🌐",
                                        title: "SOC 2 Access",
                                        description: "Availability & security",
                                        backgroundColor: "linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)",
                                        borderColor: "#0891b2",
                                        textColor: "#164e63"
                                    }
                                }
                            ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 6. TESTIMONIAL CAROUSEL - Rotating testimonials
    // ============================================================================
    {
        key: "testimonial-carousel",
        type: "TestimonialCarousel",
        category: "features",
        name: "Testimonial Carousel",
        description: "Rotating testimonials with navigation controls",
        structure: {
            columns: [
                {
                    id: "carousel-col",
                    width: "100%",
                    elements: [
                        {
                            id: "carousel-heading",
                            type: "Heading",
                            props: {
                                text: "What Our Customers Say",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "carousel-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "carousel",
                            type: "TestimonialCarousel",
                            props: {
                                items: [
                                    {
                                        text: "This solution transformed our entire business workflow. The support team was incredible throughout the entire implementation.",
                                        author: "Rachel Cooper",
                                        role: "CEO, Digital Dynamics",
                                        image: ""
                                    },
                                    {
                                        text: "Best investment we've made. ROI exceeded expectations in the first quarter. Highly recommend!",
                                        author: "Michael Torres",
                                        role: "Founder, Growth Lab",
                                        image: ""
                                    },
                                    {
                                        text: "The platform is intuitive, powerful, and the team behind it cares about customer success.",
                                        author: "Sarah Chen",
                                        role: "Operations Manager",
                                        image: ""
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 7. CLIENT LOGOS - Masonry grid with unique design
    // ============================================================================
    {
        key: "client-logos-masonry",
        type: "ClientLogosMasonry",
        category: "features",
        name: "Client Logos Masonry",
        description: "Masonry layout of client logos with cards",
        structure: {
            columns: [
                {
                    id: "logos-col",
                    width: "100%",
                    elements: [
                        {
                            id: "logos-heading",
                            type: "Heading",
                            props: {
                                text: "Trusted by 500+ Organizations",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "logos-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "logos-grid",
                            type: "ClientLogosGrid",
                            props: {
                                logos: [
                                    { url: "", title: "Client 1" },
                                    { url: "", title: "Client 2" },
                                    { url: "", title: "Client 3" },
                                    { url: "", title: "Client 4" },
                                    { url: "", title: "Client 5" },
                                    { url: "", title: "Client 6" },
                                    { url: "", title: "Client 7" },
                                    { url: "", title: "Client 8" }
                                ],
                                columns: 6,
                                gap: 24,
                                showTitles: false,
                                logoHeight: 80,
                                backgroundColor: "transparent",
                                borderRadius: 8,
                                hoverEffect: true
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 8. CASE STUDIES - Image-heavy professional cards
    // ============================================================================
    {
        key: "case-studies-showcase",
        type: "CaseStudiesShowcase",
        category: "features",
        name: "Case Studies Showcase",
        description: "Professional case study cards with metrics",
        structure: {
            columns: [
                {
                    id: "cases-col",
                    width: "100%",
                    elements: [
                        {
                            id: "cases-heading",
                            type: "Heading",
                            props: {
                                text: "How We Help Businesses Win",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "cases-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "cases-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                {
                                    id: "case-1",
                                    type: "CaseStudyCard",
                                    props: {
                                        image: "",
                                        title: "E-commerce Revenue Growth",
                                        industry: "Retail",
                                        description: "Online retailer increased sales through strategic implementation",
                                        results: ["300% Revenue Increase", "50% Conversion Rate Up", "30% Cost Savings"],
                                        resultHighlight: "+300%",
                                        highlightLabel: "Revenue",
                                        link: "#",
                                        backgroundColor: "var(--theme-background)",
                                        textColor: "var(--theme-text)",
                                        accentColor: "var(--theme-primary)"
                                    }
                                },
                                {
                                    id: "case-2",
                                    type: "CaseStudyCard",
                                    props: {
                                        image: "",
                                        title: "SaaS User Growth",
                                        industry: "Technology",
                                        description: "B2B SaaS company accelerated growth and market penetration",
                                        results: ["250% User Growth", "200% MRR Increase", "40% Churn Reduction"],
                                        resultHighlight: "+250%",
                                        highlightLabel: "Users",
                                        link: "#",
                                        backgroundColor: "var(--theme-background)",
                                        textColor: "var(--theme-text)",
                                        accentColor: "var(--theme-primary)"
                                    }
                                },
                                {
                                    id: "case-3",
                                    type: "CaseStudyCard",
                                    props: {
                                        image: "",
                                        title: "Marketing ROI Transformation",
                                        industry: "Marketing",
                                        description: "Agency improved client results and retention significantly",
                                        results: ["500% ROI Improvement", "10x Lead Generation", "8x Engagement"],
                                        resultHighlight: "+500%",
                                        highlightLabel: "ROI",
                                        link: "#",
                                        backgroundColor: "var(--theme-background)",
                                        textColor: "var(--theme-text)",
                                        accentColor: "var(--theme-primary)"
                                    }
                                }
                            ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 9. SUCCESS STORIES - 2-column with avatars and metrics
    // ============================================================================
    {
        key: "success-stories-featured",
        type: "SuccessStoriesFeatured",
        category: "features",
        name: "Success Stories Featured",
        description: "Featured customer success stories with metrics",
        structure: {
            columns: [
                {
                    id: "success-col",
                    width: "100%",
                    elements: [
                        {
                            id: "success-heading",
                            type: "Heading",
                            props: {
                                text: "Customer Success Stories",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "success-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "success-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 2, tablet: 1, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                {
                                    id: "success-1",
                                    type: "SuccessStoryCard",
                                    props: {
                                        image: "",
                                        name: "Alex Thompson",
                                        title: "Startup Founder",
                                        company: "TechStart Inc",
                                        quote: "Went from 0 to $1M ARR in just 8 months using this platform.",
                                        metric: "+1000%",
                                        metricLabel: "Revenue Growth",
                                        backgroundColor: "var(--theme-background)",
                                        textColor: "var(--theme-text)",
                                        accentColor: "var(--theme-primary)"
                                    }
                                },
                                {
                                    id: "success-2",
                                    type: "SuccessStoryCard",
                                    props: {
                                        image: "",
                                        name: "Maria Garcia",
                                        title: "Marketing Director",
                                        company: "Digital Solutions",
                                        quote: "Transformed our entire marketing department. Game changer!",
                                        metric: "+400%",
                                        metricLabel: "Lead Conversion",
                                        backgroundColor: "#fef3f0",
                                        textColor: "var(--theme-text)",
                                        accentColor: "var(--theme-primary)"
                                    }
                                }
                            ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 10. BEFORE/AFTER COMPARISON - Interactive slider
    // ============================================================================
    {
        key: "before-after-comparison",
        type: "BeforeAfterComparison",
        category: "features",
        name: "Before / After Comparison",
        description: "Interactive before and after slider",
        structure: {
            columns: [
                {
                    id: "comparison-col",
                    width: "100%",
                    elements: [
                        {
                            id: "comparison-heading",
                            type: "Heading",
                            props: {
                                text: "See The Transformation",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "comparison-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "comparison",
                            type: "BeforeAfterComparison",
                            props: {
                                beforeImage: "",
                                afterImage: "",
                                beforeLabel: "Before",
                                afterLabel: "After",
                                height: 400,
                                borderRadius: 12,
                                showLabels: true,
                                backgroundColor: "var(--theme-background)",
                                labelBg: "rgba(0,0,0,0.5)",
                                labelColor: "var(--theme-background)"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 11. RATINGS MULTI-GRID - Multiple rating cards showing different metrics
    // ============================================================================
    {
        key: "ratings-multi-grid",
        type: "RatingsMultiGrid",
        category: "features",
        name: "Ratings Multi Grid",
        description: "Multiple rating displays with different metrics",
        structure: {
            columns: [
                {
                    id: "ratings-multi-col",
                    width: "100%",
                    elements: [
                        {
                            id: "ratings-multi-heading",
                            type: "Heading",
                            props: {
                                text: "Industry Recognition",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "ratings-multi-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "ratings-multi-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 4, tablet: 2, mobile: 1 },
                                    gap: 20
                                },
                                elements: [
                                {
                                    id: "rating-multi-1",
                                    type: "NumericalRating",
                                    props: {
                                        rating: "4.9",
                                        totalReviews: "1000+",
                                        ratingColor: "#fbbf24",
                                        backgroundColor: "#fefcf0",
                                        textColor: "var(--theme-text)",
                                        breakdownVisible: false
                                    }
                                },
                                {
                                    id: "rating-multi-2",
                                    type: "NumericalRating",
                                    props: {
                                        rating: "5.0",
                                        totalReviews: "500+",
                                        ratingColor: "var(--theme-primary)",
                                        backgroundColor: "#ecfff5",
                                        textColor: "var(--theme-text)",
                                        breakdownVisible: false
                                    }
                                },
                                {
                                    id: "rating-multi-3",
                                    type: "NumericalRating",
                                    props: {
                                        rating: "4.8",
                                        totalReviews: "750+",
                                        ratingColor: "var(--theme-primary)",
                                        backgroundColor: "#ecf9ff",
                                        textColor: "var(--theme-text)",
                                        breakdownVisible: false
                                    }
                                },
                                {
                                    id: "rating-multi-4",
                                    type: "NumericalRating",
                                    props: {
                                        rating: "4.9",
                                        totalReviews: "2000+",
                                        ratingColor: "var(--theme-primary)",
                                        backgroundColor: "#f5f3ff",
                                        textColor: "var(--theme-text)",
                                        breakdownVisible: false
                                    }
                                }
                            ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 12. AWARDS & MEDIA MENTIONS - 2-column layout
    // ============================================================================
    {
        key: "awards-media-mentions",
        type: "AwardsMediaMentions",
        category: "features",
        name: "Awards & Media Mentions",
        description: "Awards and featured press mentions side-by-side",
        structure: {
            columns: [
                {
                    id: "awards-media-col",
                    width: "100%",
                    elements: [
                        {
                            id: "awards-media-heading",
                            type: "Heading",
                            props: {
                                text: "Awards & Recognition",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "awards-media-spacer-1",
                            type: "Spacer",
                            props: { height: "md" }
                        },
                        {
                            id: "awards-subheading",
                            type: "Heading",
                            props: {
                                text: "Recent Awards",
                                tag: "h3",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "600"
                            }
                        },
                        {
                            id: "awards-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                {
                                    id: "award-1",
                                    type: "AwardBadge",
                                    props: {
                                        icon: "🏆",
                                        title: "Best Innovation",
                                        year: "2024",
                                        backgroundColor: "linear-gradient(135deg, #fbbf24 0%, var(--theme-primary) 100%)",
                                        textColor: "var(--theme-text)",
                                        borderRadius: 12,
                                        shadow: "lg"
                                    }
                                },
                                {
                                    id: "award-2",
                                    type: "AwardBadge",
                                    props: {
                                        icon: "⭐",
                                        title: "Excellent Service",
                                        year: "2024",
                                        backgroundColor: "linear-gradient(135deg, #60a5fa 0%, var(--theme-primary) 100%)",
                                        textColor: "var(--theme-text)",
                                        borderRadius: 12,
                                        shadow: "lg"
                                    }
                                },
                                {
                                    id: "award-3",
                                    type: "AwardBadge",
                                    props: {
                                        icon: "🎯",
                                        title: "Top Performer",
                                        year: "2024",
                                        backgroundColor: "linear-gradient(135deg, #34d399 0%, var(--theme-primary) 100%)",
                                        textColor: "var(--theme-text)",
                                        borderRadius: 12,
                                        shadow: "lg"
                                    }
                                }
                            ]
                            }
                        },
                        {
                            id: "media-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "media-subheading",
                            type: "Heading",
                            props: {
                                text: "Featured In",
                                tag: "h3",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "600"
                            }
                        },
                        {
                            id: "media-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 2, tablet: 1, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                {
                                    id: "media-1",
                                    type: "MediaMention",
                                    props: {
                                        logo: "",
                                        title: "TechCrunch",
                                        date: "Jan 2024",
                                        excerpt: "Series A raises $10M for innovative platform...",
                                        link: "#",
                                        backgroundColor: "var(--theme-background)",
                                        borderColor: "var(--theme-border, var(--theme-border))",
                                        textColor: "var(--theme-text)"
                                    }
                                },
                                {
                                    id: "media-2",
                                    type: "MediaMention",
                                    props: {
                                        logo: "",
                                        title: "Forbes",
                                        date: "Dec 2023",
                                        excerpt: "30 under 30: Founders changing tech industry...",
                                        link: "#",
                                        backgroundColor: "var(--theme-background)",
                                        borderColor: "var(--theme-border, var(--theme-border))",
                                        textColor: "var(--theme-text)"
                                    }
                                }
                            ]
                            }
                        }
                    ]
                }
            ]
        }
    }
];

