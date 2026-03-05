/**
 * Hospital-2 Template - Home Page (Vitalis Medical Center)
 * Theme: Modern Healthcare / Red & Cyan
 * Primary: #e60000 (Red)
 * Secondary: #00c9e3 (Cyan)
 * Background: #ffffff
 * Font: Inter
 */

const vitalisHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "vitalis-header",
        name: "Vitalis Header",
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
                borderColor: "#f1f5f9"
            },
            props: {
                logo: {
                    text: "Vitalis",
                    icon: "MedicalServices",
                    logoColor: "#e60000",
                    fontWeight: "800",
                    letterSpacing: "tight"
                },
                links: [
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Departments", href: "/departments" },
                    { label: "Contact", href: "/contact" }
                ],
                ctaButton: {
                    text: "Book Appointment",
                    href: "/contact",
                    backgroundColor: "#e60000",
                    textColor: "#ffffff",
                    borderRadius: 8
                }
            }
        }
    },

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "about-facilities",
            name: "Advanced Facilities",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 40,
                    paddingX: 20,
                    fullWidth: true
                },
                columns: [{
                    id: "facilities-multiimage-col",
                    width: "100%",
                    elements: [{
                        type: "MultiImage",
                        props: {
                            heading: "Advanced Medical\nFacilities & Technology",
                            description: "Experience cutting-edge healthcare powered by AI diagnostics, neuro-intervention hubs, and hybrid robotic operating suites — all designed for precision, speed, and patient safety.",
                            primaryButtonText: "Explore Facilities",
                            primaryButtonLink: "/departments",
                            secondaryButtonText: "Virtual Tour",
                            secondaryButtonLink: "#tour",
                            showPrimaryButton: true,
                            showSecondaryButton: true,
                            stats: [
                                { value: "99.8%", label: "Surgical Success" },
                                { value: "150+", label: "Active Trials" }
                            ],
                            showResourcesIcon: true,
                            images: [
                                { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoTuIwoF_zBHhjcS29k4D8ibMXksD3DnRZzeGMJJyfB5joGDaztFg7kdU4PqYiEpJ8BqWQZiGzvJVQEs3oc2Q7HFMqtk8E-1HqJkKR2sh4wZ4OUepXMcfpzAGR1Fnt4uox5fUGY2sK7V-ETXptN03olFKj_iYzOqpSkFRDMhgonP2qEPC1RISaxiU7UQyvVO0jbFgTSXJUf2Go_brvabYVB7CMbIvui7n8sajs3NhyAkC7L5Qb4GAWC1KRz9CrMUkDrn7vLMW1ZyjP", alt: "AI Diagnostics Suite", bgColor: "#E0F2FE" },
                                { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDubyVuMP5gve-M1_PlPbXNgbovqD3IAUK0GSsYZdHRCiltaaQ42HvgbYcaVD9vpEz0OPVW672KPYw16fLsDBhIIcHVRY6Nagb510kZRVvFuTEZ-7vwkV-QUWsWxM4_SezQe2kGPRdMa5CK0ymqfuCoSoAA7EINFVvnKBJC3kakXqWekhxGVmsmUy1aDZtKPNZjFQR5dnYKPkzbsoOojs_d4MjXnnw3i5twTMAJIeGlWN2yShy_X0Bq85K92lUV8x5xVjCNJpgQYvlo", alt: "Neuro-Intervention Hub", bgColor: "#FEE2E2" },
                                { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz0X1i4Qx-rjsE0Aq-AQQhRAu3xCruiqUKvZGpcOtdOWIAn7pD0_efrWby9NcyRjBOifj5zd12Ff0h9Mfer1jDgD60SqG8gwxSNSCRbBWRZ4MghqP5KnncXGuR4EVx3UR65eBjD4VSB5pf6rnBzMP9iOZ8S87oLYzUbKfPjH-owvo_SQqjBJ1WjepdfQGKKz6vfuI3IJhlDtL71cqWk10nh4g-bA3dObP1pkS3Cck6wnyi-UfV7lfOPHm4wvNNzhXFldSt1kElXPNN", alt: "Hybrid Robotics OR", bgColor: "#DCFCE7" }
                            ],
                            headingColor: "#0f172a",
                            descriptionColor: "#475569",
                            accentColor: "#e60000",
                            buttonBorderRadius: 12,
                            backgroundColor: "#ffffff",
                            statValueColor: "#0f172a",
                            statLabelColor: "#64748b"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CORE DEPARTMENTS (ServiceProvider)
        // --------------------------------------------------------------------------
        {
            key: "vitalis-departments",
            name: "Core Departments",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8fafc",
                    paddingY: 40,
                    paddingX: 20,
                    fullWidth: true,
                    layout: "grid",
                    columns: 1,
                    gap: 20
                },
                columns: [{
                    id: "dept-sp-col",
                    width: "100%",
                    elements: [{
                        type: "ServiceProvider",
                        props: {
                            badge: "Specialized Care",
                            heading: "Our Core Departments",
                            watermarkText: "DEPARTMENTS",
                            columns: 3,
                            services: [
                                {
                                    icon: "Heart",
                                    title: "Cardiology",
                                    description: "Leading heart health excellence with advanced diagnostic imaging and surgical precision.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#cardiology"
                                },
                                {
                                    icon: "Bone",
                                    title: "Orthopedics",
                                    description: "Bone and joint specialists dedicated to restoring mobility and strength through therapy and surgery.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#orthopedics"
                                },
                                {
                                    icon: "Baby",
                                    title: "Pediatrics",
                                    description: "Gentle, comprehensive care for your little ones, ensuring healthy development and bright futures.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#pediatrics"
                                },
                                {
                                    icon: "Brain",
                                    title: "Neurology",
                                    description: "Advanced neurological care with cutting-edge diagnostics for brain and nervous system disorders.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#neurology"
                                },
                                {
                                    icon: "Stethoscope",
                                    title: "General Medicine",
                                    description: "Comprehensive primary care and internal medicine services for all ages and conditions.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#general"
                                },
                                {
                                    icon: "Eye",
                                    title: "Ophthalmology",
                                    description: "Expert eye care with laser treatments, cataract surgery, and advanced retinal procedures.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#ophthalmology"
                                }
                            ],
                            accentColor: "#e60000",
                            headingColor: "#0f172a",
                            descriptionColor: "#475569",
                            backgroundColor: "#f8fafc",
                            cardBgColor: "#ffffff",
                            iconBgColor: "#e60000",
                            iconColor: "#ffffff",
                            cardBorderRadius: 16
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // WHY CHOOSE US
        // --------------------------------------------------------------------------
        {
            key: "vitalis-why-choose",
            name: "Why Choose Vitalis",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "why-text",
                        width: "50%",
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "Why Choose Vitalis", color: "#e60000", bgColor: "transparent" }
                            },
                            {
                                type: "Heading",
                                props: { text: "Redefining Excellence in Medical Care", tag: "h2", size: "4xl", color: "#0f172a", fontWeight: "900" }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "We combine clinical expertise with advanced technology and deep empathy. Our center is designed to provide a healing environment that promotes faster recovery and emotional well-being.",
                                    size: "lg",
                                    color: "#475569",
                                    marginTop: 16,
                                    marginBottom: 32
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: {
                                    title: "National Quality Accreditation (NABH & JCI)",
                                    icon: "CheckCircle",
                                    iconColor: "#e60000",
                                    textColor: "#334155",
                                    marginBottom: 16
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: {
                                    title: "Zero Wait-Time Emergency Protocols",
                                    icon: "CheckCircle",
                                    iconColor: "#e60000",
                                    textColor: "#334155",
                                    marginBottom: 16
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: {
                                    title: "Seamless Insurance Claim Processing",
                                    icon: "CheckCircle",
                                    iconColor: "#e60000",
                                    textColor: "#334155",
                                    marginBottom: 32
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Discover More About Us",
                                    primaryLink: "/about",
                                    primaryBg: "#0f172a",
                                    primaryColor: "#ffffff",
                                    primaryBorderRadius: 12,
                                    layout: "horizontal"
                                }
                            }
                        ]
                    },
                    {
                        id: "why-features",
                        width: "50%",
                        layout: "grid",
                        columns: 2,
                        gap: 16,
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "ClipboardList",
                                    iconColor: "#e60000",
                                    iconBg: "rgba(230, 0, 0, 0.05)",
                                    title: "Expert Doctors",
                                    description: "Board-certified specialists from top global institutions.",
                                    backgroundColor: "rgba(230, 0, 0, 0.05)",
                                    textColor: "#0f172a",
                                    accentColor: "#e60000",
                                    showLink: false,
                                    style: "card",
                                    borderRadius: 24
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "TestTube",
                                    iconColor: "#00c9e3",
                                    iconBg: "rgba(0, 201, 227, 0.05)",
                                    title: "Modern Labs",
                                    description: "State-of-the-art diagnostic and imaging technologies.",
                                    backgroundColor: "rgba(0, 201, 227, 0.05)",
                                    textColor: "#0f172a",
                                    accentColor: "#00c9e3",
                                    showLink: false,
                                    style: "card",
                                    borderRadius: 24
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "Clock",
                                    iconColor: "#334155",
                                    iconBg: "#f8fafc",
                                    title: "24/7 Service",
                                    description: "Round-the-clock emergency and critical care support.",
                                    backgroundColor: "#f8fafc",
                                    textColor: "#0f172a",
                                    showLink: false,
                                    style: "card",
                                    borderRadius: 24
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "HeartHandshake",
                                    iconColor: "#16a34a",
                                    iconBg: "rgba(22, 163, 74, 0.05)",
                                    title: "Patient Focus",
                                    description: "A compassionate, human-centric approach to recovery.",
                                    backgroundColor: "rgba(22, 163, 74, 0.05)",
                                    textColor: "#0f172a",
                                    showLink: false,
                                    style: "card",
                                    borderRadius: 24
                                }
                            }
                        ]
                    },
                ]
            }
        },
        // --------------------------------------------------------------------------
        // EMERGENCY BANNER CTA
        // --------------------------------------------------------------------------
        {
            key: "vitalis-emergency-cta",
            name: "Emergency Banner",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#e60000",
                    paddingY: 48,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "emergency-col",
                    width: "100%",
                    props: { textAlign: "center" },
                    elements: [
                        {
                            type: "Heading",
                            props: {
                                text: "24/7 Medical Emergency?",
                                tag: "h3",
                                size: "3xl",
                                color: "#ffffff",
                                fontWeight: "900",
                                align: "center"
                            }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "Immediate response with fully equipped trauma ambulances.",
                                color: "rgba(255, 255, 255, 0.8)",
                                align: "center",
                                marginTop: 8
                            }
                        },
                        {
                            type: "Heading",
                            props: {
                                text: "+1 (800) 900-VITALIS",
                                tag: "h4",
                                size: "2xl",
                                color: "#ffffff",
                                fontWeight: "900",
                                align: "center",
                                marginTop: "24px"
                            }
                        },
                        {
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Call Now",
                                primaryLink: "tel:18009008482547",
                                primaryBg: "#ffffff",
                                primaryColor: "#e60000",
                                primaryBorderRadius: 12,
                                layout: "horizontal",
                                justifyContent: "center",
                                marginTop: "16px"
                            }
                        }
                    ]
                }]
            }
        }
    ],

    // ============================================================================
    // FOOTER
    // ============================================================================
    footer: {
        key: "vitalis-footer",
        name: "Vitalis Footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#ffffff",
                paddingY: 80,
                paddingX: 40,
                fullWidth: true,
                showBorder: true,
                borderColor: "#f1f5f9"
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "25%",
                    elements: [
                        {
                            type: "Heading",
                            props: { text: "Vitalis", tag: "h4", color: "#0f172a", marginBottom: "16px" }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "Providing top-tier healthcare services for over 25 years. Our mission is to deliver compassionate, accessible, and high-quality medical care.",
                                color: "#64748b",
                                size: "sm",
                                marginBottom: "24px"
                            }
                        },
                        {
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "facebook", url: "#" },
                                    { platform: "twitter", url: "#" }
                                ],
                                iconColor: "#64748b",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-links",
                    width: "25%",
                    elements: [{
                        type: "LinkList",
                        props: {
                            title: "Quick Links",
                            titleColor: "#0f172a",
                            textColor: "#64748b",
                            hoverColor: "#e60000",
                            items: [
                                { label: "Our Doctors", href: "#" },
                                { label: "Specialties", href: "#" },
                                { label: "Book Appointment", href: "/contact" },
                                { label: "Patient Portal", href: "#" }
                            ]
                        }
                    }]
                },
                {
                    id: "footer-departments",
                    width: "25%",
                    elements: [{
                        type: "LinkList",
                        props: {
                            title: "Departments",
                            titleColor: "#0f172a",
                            textColor: "#64748b",
                            hoverColor: "#e60000",
                            items: [
                                { label: "Cardiology", href: "#" },
                                { label: "Neurology", href: "#" },
                                { label: "Orthopedics", href: "#" },
                                { label: "Pediatrics", href: "#" }
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
                            props: { text: "Contact Us", tag: "h6", color: "#0f172a", marginBottom: "16px" }
                        },
                        {
                            type: "FeatureRow",
                            props: { title: "123 Medical Plaza, Wellness City, NY 10001", icon: "MapPin", iconColor: "#e60000", textColor: "#64748b", marginBottom: 16 }
                        },
                        {
                            type: "FeatureRow",
                            props: { title: "+1 (212) 555-0198", icon: "Phone", iconColor: "#e60000", textColor: "#64748b", marginBottom: 16 }
                        },
                        {
                            type: "FeatureRow",
                            props: { title: "care@vitaliscenter.com", icon: "Mail", iconColor: "#e60000", textColor: "#64748b" }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = vitalisHome;
