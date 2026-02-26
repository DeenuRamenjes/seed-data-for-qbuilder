/**
 * Academiq Template - Online Learning Platform
 * Theme: Professional Education / EdTech
 * Primary Color: #0048B3 (Deep Blue)
 * Secondary Color: #E0F2FE (Sky Blue)
 * Background: #F8FAFC (Light) / #0F172A (Dark)
 * Fonts: Inter (Body), Plus Jakarta Sans (Display)
 */

const academiqHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "academiq-header",
        type: "Navbar",
        category: "header",
        name: "Academiq Header",
        description: "Education platform header with navigation",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(8px)",
                paddingY: 0,
                paddingX: 0,
                fullWidth: true
            },
            columns: [{
                id: "header-col",
                width: "100%",
                elements: [{
                    id: "academiq-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "ACADEMIQ",
                        logoTextColor: "#0048B3",
                        accentColor: "#0048B3",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        linkColor: "#0F172A",
                        linkHoverColor: "#0048B3",
                        links: [
                            { label: "Courses", href: "#courses" },
                            { label: "Learn", href: "#learn" },
                            { label: "Instructors", href: "#instructors" },
                            { label: "About", href: "#about" }
                        ],
                        showButton: true,
                        buttonText: "Get Started",
                        buttonLink: "#signup",
                        buttonRadius: "full",
                        buttonStyle: "solid",
                        sticky: true
                    }
                }]
            }]
        }
    },

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION WITH IMAGE AND STATS
        // --------------------------------------------------------------------------
        {
            key: "academiq-hero",
            name: "Hero Section with Image",
            description: "Main hero section with heading, description, CTAs, and featured image",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "row",
                    gap: 96,
                    alignItems: "center"
                },
                columns: [
                    // Left Column: Content
                    {
                        id: "hero-content-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "center"
                        },
                        elements: [
                            {
                                id: "hero-heading",
                                type: "Heading",
                                props: {
                                    text: "Learn Software Skills. Get Certified. Get Ahead.",
                                    tag: "h1",
                                    color: "#0f172a",
                                    size: "5xl",
                                    fontWeight: "black",
                                    lineHeight: 1.2
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Industry-led training programs designed to bridge the skills gap. Master the latest technologies and earn globally recognized certifications.",
                                    color: "#64748b",
                                    size: "lg",
                                    marginTop: 24,
                                    marginBottom: 40
                                }
                            },
                            {
                                id: "hero-buttons",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Explore Courses",
                                    primaryBgColor: "#0048B3",
                                    primaryTextColor: "#ffffff",
                                    secondaryText: "Get Voucher",
                                    secondaryBgColor: "#ffffff",
                                    secondaryBorderColor: "#cbd5e1",
                                    secondaryTextColor: "#0f172a",
                                    gap: "gap-4",
                                    layout: "horizontal",
                                    primaryPadding: 16,
                                    secondaryPadding: 16
                                }
                            }
                        ]
                    },
                    // Right Column: Image
                    {
                        id: "hero-image-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            position: "relative",
                            gap: 0
                        },
                        elements: [
                            {
                                id: "hero-image-wrapper",
                                type: "Box",
                                props: {
                                    position: "relative",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 80
                                },
                                elements: [
                                    {
                                        id: "hero-image-container",
                                        type: "Box",
                                        props: {
                                            backgroundColor: "#ffffff",
                                            padding: 16,
                                            borderRadius: 24,
                                            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                                            width: "100%"
                                        },
                                        elements: [
                                            {
                                                id: "hero-image",
                                                type: "Image",
                                                props: {
                                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzjVoX_4dpZi3mQGgO-LI01cjIXp7Ch-sLzbcKMU7TjsQkfFXdV06k1S6RwIqYvsJ6rjoxDDIv9VaQVGg95_Y6OGQY0HWTcBX2gzEd0y_dBnMrXfWriH10UYUPadyT51HE0BfD51ORIwrQYCSLM8A9nS7J7PpnVqAfkWq5xfg8dCHOgBuwNBG2wSTwC0kpXTg3bDRw0D2VJJYLe_Dx5xuAq3W7thDjGt6t_Ci_dhd_UtqU9jIfrb_Z4u83XbXrebBFKlMD1F-oTUm5",
                                                    alt: "Student learning online",
                                                    borderRadius: 16,
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    aspectRatio: "16/9"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        id: "hero-stats-badge",
                                        type: "Box",
                                        props: {
                                            backgroundColor: "#ffffff",
                                            padding: 20,
                                            borderRadius: 16,
                                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
                                            border: "1px solid #e2e8f0",
                                            position: "absolute",
                                            bottom: -25,
                                            left: 20,
                                            zIndex: 10,
                                            minWidth: "fit-content"
                                        },
                                        elements: [
                                            {
                                                id: "stats-content",
                                                type: "Box",
                                                props: {
                                                    backgroundColor: "transparent",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    gap: 12,
                                                    alignItems: "center"
                                                },
                                                elements: [
                                                    {
                                                        id: "stats-icon-box",
                                                        type: "Box",
                                                        props: {
                                                            backgroundColor: "#dcfce7",
                                                            padding: 10,
                                                            borderRadius: 8,
                                                            minWidth: "40px",
                                                            minHeight: "40px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        }
                                                    },
                                                    {
                                                        id: "stats-text-wrapper",
                                                        type: "Box",
                                                        props: {
                                                            flexDirection: "column",
                                                            display: "flex",
                                                            gap: 4
                                                        },
                                                        elements: [
                                                            {
                                                                id: "stats-number",
                                                                type: "Heading",
                                                                props: {
                                                                    text: "12k+",
                                                                    tag: "h3",
                                                                    size: "sm",
                                                                    fontWeight: "bold",
                                                                    color: "#0f172a",
                                                                    marginBottom: 0
                                                                }
                                                            },
                                                            {
                                                                id: "stats-label",
                                                                type: "Paragraph",
                                                                props: {
                                                                    text: "Active Students",
                                                                    size: "xs",
                                                                    color: "#64748b",
                                                                    marginBottom: 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // FEATURE CARDS SECTION
        // --------------------------------------------------------------------------
        {
            key: "academiq-features",
            name: "Feature Cards Section",
            description: "Three feature cards highlighting course categories",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f1f5f9",
                    paddingY: 80,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column"
                },
                columns: [
                    // Header
                    {
                        id: "features-header",
                        width: "100%",
                        props: {
                            marginBottom: 48
                        },
                        elements: [
                            {
                                id: "features-title",
                                type: "Heading",
                                props: {
                                    text: "Choose Your Path",
                                    tag: "h2",
                                    size: "4xl",
                                    fontWeight: "black",
                                    color: "#0f172a",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "features-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Explore our specialization programs across different technology domains.",
                                    color: "#64748b",
                                    size: "base"
                                }
                            }
                        ]
                    },
                    {
                        id: "features-grid",
                        width: "100%",
                        props: {
                            display: "grid",
                            gridColumns: 3,
                            gap: 32
                        },
                        elements: [
                            {
                                id: "feature-card-1",
                                type: "ServiceCard",
                                props: {
                                    icon: "Code",
                                    title: "Technical Courses",
                                    description: "Master web development, mobile apps, and cloud infrastructure with hands-on labs.",
                                    iconColor: "#0048B3",
                                    iconBg: "#dbeafe",
                                    backgroundColor: "#ffffff",
                                    textColor: "#0f172a",
                                    accentColor: "#0048B3",
                                    ctaText: "View details",
                                    showLink: true,
                                    style: "card",
                                    align: "left"
                                }
                            },
                            {
                                id: "feature-card-2",
                                type: "ServiceCard",
                                props: {
                                    icon: "Cloud",
                                    title: "Microsoft Certified",
                                    description: "Accelerate your career with official Microsoft training in Azure and Data.",
                                    iconColor: "#f97316",
                                    iconBg: "#fed7aa",
                                    backgroundColor: "#ffffff",
                                    textColor: "#0f172a",
                                    accentColor: "#0048B3",
                                    ctaText: "View details",
                                    showLink: true,
                                    style: "card",
                                    align: "left"
                                }
                            },
                            {
                                id: "feature-card-3",
                                type: "ServiceCard",
                                props: {    
                                    icon: "Palette",
                                    title: "Adobe Certified",
                                    description: "Unleash your creativity with Photoshop, Illustrator and XD masterclasses.",
                                    iconColor: "#dc2626",
                                    iconBg: "#fee2e2",
                                    backgroundColor: "#ffffff",
                                    textColor: "#0f172a",
                                    accentColor: "#0048B3",
                                    ctaText: "View details",
                                    showLink: true,
                                    style: "card",
                                    align: "left"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // POPULAR COURSES SECTION
        // --------------------------------------------------------------------------
        {
            key: "academiq-courses",
            name: "Popular Courses Section",
            description: "Showcase of popular course offerings",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column"
                },
                columns: [
                    // Header
                    {
                        id: "courses-header",
                        width: "100%",
                        props: {
                            marginBottom: 48
                        },
                        elements: [
                            {
                                id: "courses-title",
                                type: "Heading",
                                props: {
                                    text: "Popular Courses",
                                    tag: "h2",
                                    size: "4xl",
                                    fontWeight: "black",
                                    color: "#0f172a",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "courses-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Our most enrolled programs by industry professionals.",
                                    color: "#64748b",
                                    size: "base"
                                }
                            }
                        ]
                    },
                    {
                        id: "courses-grid",
                        type: "Box",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                id: "course-card-1",
                                type: "AcademiqCourseCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiprR_AfVVsxD_tPRXmcH7-LA_YtBbqgW9Hlg0HzhubT3T6ZDCGbxwpSn0QVlJcCLorDMFRHAwKgN3JvmKXTrSPpF2C3QCAFK5Lcay0UBCx_NG10F9EpWJQo4k3xc9E8QtOyAcoTrvIJBYDp42i0KofhdVD1RiOKf-q8yujL7HIuseSz2CJ5ksK1FS_Nnq8MBvM52haBiDgHcO7ZA13sJcamjROR8wEaoAPn_70fSzg3KF20FCQPRGex6zfy-e0mgsarintFHwSgD_",
                                    imageAlt: "Full Stack Development",
                                    badge: "Bestseller",
                                    title: "Full Stack Development",
                                    description: "Master MERN stack with real-world projects and portfolio building.",
                                    duration: "12 Weeks",
                                    students: "1.2k Students",
                                    buttonText: "Enroll Now",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e2e8f0"
                                }
                            },
                            {
                                id: "course-card-2",
                                type: "AcademiqCourseCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiEcawco0uuYOUWfCpDuDNROzU3YZcOk_u41HXj5nrgIhjcVZ8dswi_evbVA-umuH2GzzelCqU9Bc08WuWvODB5bBHdEkOMRBT-oMWWTi_L6mQ7wh5PTollp4sG2G_zGoTxhR0Lljj093OhR15fnJYyc1HGbeTq6OuIlmX405kk0hO-FEMh0lHB4JsDj5JairWa_2CUrEtf1U_CneMqRh0vMn7GnERcqZkGWqqzYAKzADwD8MNOgQsZfLNLEzsko2ZHkTVxJ5xpgMx",
                                    imageAlt: "UI/UX Design",
                                    badge: "",
                                    title: "UI/UX Design Masterclass",
                                    description: "Design beautiful interfaces and seamless user experiences from scratch.",
                                    duration: "8 Weeks",
                                    students: "850 Students",
                                    buttonText: "Enroll Now",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e2e8f0"
                                }
                            },
                            {
                                id: "course-card-3",
                                type: "AcademiqCourseCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Pcp3xxRTKjoavTKpBg506QqyYU0azDC0_uygR6p4yGfKU7MxUyCUw6i7bDRQlUN7E3J4G_3MzB8p5-5JS1pc4Az8UFTt2OjobhtENyNew8bqy0lc-lAe5DxN9N4oPdWIHrmcZfJ1-86CcycS1Z0zgUYXRbJCoAvOjH_VjxU7hDl4PPWZZNaZRAfUArD9wLWkuh8CZJbghz3M-XnOVCytzvDoUByNDlETt60FhGXZCBgHCM4KTZIBR8uzhuVhzOcvRJ4SoGqXG-JP",
                                    imageAlt: "React Development",
                                    badge: "",
                                    title: "React & Next.js Pro",
                                    description: "Learn to build performant, SEO-friendly web applications with React.",
                                    duration: "6 Weeks",
                                    students: "2k Students",
                                    buttonText: "Enroll Now",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e2e8f0"
                                }
                            }
                        ]
                    }
                ]
            }
        },
    ],

    // ============================================================================
    // FOOTER
    // ============================================================================
    footer: {
        key: "academiq-footer",
        type: "Footer",
        category: "footer",
        name: "Academiq Footer",
        description: "Multi-column footer with links and contact information",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#0F172A",
                paddingY: 80,
                paddingX: 80,
                fullWidth: true
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "50%",
                    elements: [
                        {
                            id: "footer-logo",
                            type: "Heading",
                            props: {
                                text: "ACADEMIQ",
                                tag: "h4",
                                color: "#0048B3",
                                marginBottom: "24px"
                            }
                        },
                        {
                            id: "footer-desc",
                            type: "Paragraph",
                            props: {
                                text: "Empowering individuals through accessible, high-quality technical education and professional certification pathways.",
                                color: "#94A3B8",
                                maxWidth: "400px",
                                marginBottom: "32px"
                            }
                        },
                        {
                            id: "footer-social",
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "facebook", url: "#" },
                                    { platform: "instagram", url: "#" },
                                    { platform: "twitter", url: "#" }
                                ],
                                iconColor: "#0048B3",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-links",
                    width: "25%",
                    elements: [
                        {
                            id: "links-quick",
                            type: "LinkList",
                            props: {
                                title: "Quick Links",
                                titleColor: "#0048B3",
                                textColor: "#94A3B8",
                                hoverColor: "#0048B3",
                                items: [
                                    { label: "Find a Course", href: "#" },
                                    { label: "Exam Vouchers", href: "#" },
                                    { label: "Learning Tracks", href: "#" },
                                    { label: "Student Stories", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-support",
                    width: "25%",
                    elements: [
                        {
                            id: "links-support",
                            type: "LinkList",
                            props: {
                                title: "Support",
                                titleColor: "#0048B3",
                                textColor: "#94A3B8",
                                hoverColor: "#0048B3",
                                items: [
                                    { label: "Help Center", href: "#" },
                                    { label: "Privacy Policy", href: "#" },
                                    { label: "Terms of Service", href: "#" },
                                    { label: "Cookie Policy", href: "#" }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = academiqHome;
