/**
 * Academiq Vision Page - Legacy, Mission, and Team
 * Theme: Professional Education / EdTech
 * Primary Color: #0048B3 (Deep Blue)
 * Secondary Color: #E0F2FE (Sky Blue)
 * Background: #F8FAFC (Light) / #0F172A (Dark)
 * Fonts: Inter (Body), Plus Jakarta Sans (Display)
 */

const academiqVision = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION - "EMPOWERING MINDS"
        // --------------------------------------------------------------------------
        {
            key: "academiq-vision-hero",
            name: "Vision Hero Section",
            description: "Hero with background image and overlay text content",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "transparent",
                    paddingY: 120,
                    paddingX: 80,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    position: "relative",
                    overflow: "hidden",
                    height: "600px",
                    backgroundImage: "https://i.ytimg.com/vi/zrj7i9Qd6cQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC2HG6HKiq0HurjnplvUyeZe4C9TQ",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                },
                columns: [
                    // Single column containing overlay and content
                    {
                        id: "vision-hero-main",
                        width: "100%",
                        props: {
                            position: "relative",
                            zIndex: 10,
                            maxWidth: "900px"
                        },
                        elements: [
                            // Dark Overlay
                            {
                                id: "vision-hero-overlay",
                                type: "Box",
                                props: {
                                    position: "absolute",
                                    inset: 0,
                                    zIndex: 1,
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    pointerEvents: "none",
                                    width: "100%",
                                    height: "100%"
                                }
                            },
                            // Badge
                            {
                                id: "vision-hero-badge",
                                type: "Badge",
                                props: {
                                    text: "OUR LEGACY",
                                    color: "#ffffff",
                                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                                    borderRadius: 24,
                                    marginBottom: 32,
                                    fontSize: "xs",
                                    fontWeight: "bold",
                                    paddingX: 20,
                                    paddingY: 10,
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    position: "relative",
                                    zIndex: 2
                                }
                            },
                            // Main Heading
                            {
                                id: "vision-hero-heading",
                                type: "Heading",
                                props: {
                                    text: "Empowering Minds, Shaping the Future of Education.",
                                    tag: "h1",
                                    color: "#ffffff",
                                    size: "5xl",
                                    fontWeight: "black",
                                    lineHeight: 1.2,
                                    marginBottom: 24,
                                    position: "relative",
                                    zIndex: 2,
                                    "@media (max-width: 768px)": {
                                        size: "2xl",
                                        marginBottom: 16
                                    }
                                }
                            },
                            // Description Paragraph
                            {
                                id: "vision-hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Discover how we've transformed education through innovation, mentorship, and industry expertise.",
                                    color: "#e0f2fe",
                                    size: "xl",
                                    lineHeight: 1.6,
                                    maxWidth: "600px",
                                    marginBottom: 40,
                                    position: "relative",
                                    zIndex: 2,
                                    "@media (max-width: 768px)": {
                                        size: "base",
                                        marginBottom: 24
                                    }
                                }
                            },
                            // CTA Button
                            {
                                id: "vision-hero-button",
                                type: "Button",
                                props: {
                                    text: "Explore Our Vision",
                                    href: "#vision-details",
                                    color: "#000000",
                                    backgroundColor: "#ffffff",
                                    hoverBackgroundColor: "#f1f5f9",
                                    borderRadius: 24,
                                    paddingX: 32,
                                    paddingY: 16,
                                    fontWeight: "bold",
                                    fontSize: "base",
                                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                                    width: "fit-content",
                                    position: "relative",
                                    zIndex: 2,
                                    "@media (max-width: 768px)": {
                                        paddingX: 24,
                                        paddingY: 12,
                                        fontSize: "sm"
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // MISSION SECTION - WITH QUOTE
        // --------------------------------------------------------------------------
        {
            key: "academiq-vision-mission",
            name: "Mission Section",
            description: "Mission statement with two-column layout and founder quote",
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
                    alignItems: "flex-start",
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        paddingY: 48,
                        paddingX: 20,
                        gap: 32
                    },
                    "@media (max-width: 1024px)": {
                        flexDirection: "column",
                        paddingY: 80,
                        paddingX: 40,
                        gap: 64
                    }
                },
                columns: [
                    // Left Column: Mission Text
                    {
                        id: "mission-content-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            "@media (max-width: 768px)": {
                                width: "100%"
                            },
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "mission-label",
                                type: "Badge",
                                props: {
                                    text: "OUR MISSION",
                                    color: "#0048B3",
                                    backgroundColor: "#dbeafe",
                                    borderRadius: 4,
                                    marginBottom: 16,
                                    fontSize: "xs",
                                    fontWeight: "bold",
                                    paddingX: 12,
                                    paddingY: 6
                                }
                            },
                            {
                                id: "mission-heading",
                                type: "Heading",
                                props: {
                                    text: "Founded on the principle that world-class education should be accessible to everyone, everywhere.",
                                    tag: "h2",
                                    color: "#0f172a",
                                    size: "3xl",
                                    fontWeight: "black",
                                    lineHeight: 1.3,
                                    marginBottom: 32,
                                    "@media (max-width: 768px)": {
                                        size: "2xl",
                                        marginBottom: 24
                                    }
                                }
                            },
                            {
                                id: "mission-para-1",
                                type: "Paragraph",
                                props: {
                                    text: "What started as a small initiative in a shared workspace has evolved into a global ecosystem of learners, mentors, and industry pioneers. We believe that learning is not just about acquiring facts, but about fostering a mindset of curiosity and resilience.",
                                    color: "#64748b",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    marginBottom: 24,
                                    "@media (max-width: 768px)": {
                                        size: "base",
                                        marginBottom: 16
                                    }
                                }
                            },
                            {
                                id: "mission-para-2",
                                type: "Paragraph",
                                props: {
                                    text: "Our curriculum is designed by practitioners, for practitioners, ensuring that every lesson learned translates directly into real-world impact.",
                                    color: "#64748b",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    marginBottom: 0,
                                    "@media (max-width: 768px)": {
                                        size: "base"
                                    }
                                }
                            }
                        ]
                    },
                    // Right Column: Quote
                    {
                        id: "mission-quote-col",
                        width: "50%",
                        props: {
                            position: "relative",
                            "@media (max-width: 768px)": {
                                width: "100%"
                            },
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "mission-quote",
                                type: "Quote",
                                props: {
                                    text: "The goal of Academiq was never just to teach; it was to inspire a lifelong journey of discovery and mastery.",
                                    author: "Dr. Helena Vance",
                                    role: "Founder & Chief Academic Officer",
                                    backgroundColor: "#E0F2FE",
                                    textColor: "#0f172a",
                                    accentColor: "#0048B3"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TIMELINE SECTION - JOURNEY OF INNOVATION
        // --------------------------------------------------------------------------
        {
            key: "academiq-vision-timeline",
            name: "Journey Timeline Section",
            description: "Company milestones displayed as timeline",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8fafc",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                    // Header
                    {
                        id: "timeline-header",
                        width: "100%",
                        props: {
                            marginBottom: 80,
                            textAlign: "center",
                            "@media (max-width: 768px)": {
                                marginBottom: 48
                            }
                        },
                        elements: [
                            {
                                id: "timeline-heading",
                                type: "Heading",
                                props: {
                                    text: "A Journey of Innovation",
                                    tag: "h2",
                                    color: "#0f172a",
                                    size: "4xl",
                                    fontWeight: "black",
                                    lineHeight: 1.2,
                                    marginBottom: 16,
                                    "@media (max-width: 768px)": {
                                        size: "2xl"
                                    }
                                }
                            },
                            {
                                id: "timeline-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "How we grew from a visionary idea into a global leader in professional online education.",
                                    color: "#64748b",
                                    size: "lg",
                                    lineHeight: 1.6,
                                    maxWidth: "500px",
                                    marginBottom: 0,
                                    "@media (max-width: 768px)": {
                                        size: "base"
                                    }
                                }
                            }
                        ]
                    },
                    // Timeline Items Container
                    {
                        id: "timeline-items",
                        width: "100%",
                        props: {
                            maxWidth: "600px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 0
                        },
                        elements: [
                            {
                                id: "timeline-2015",
                                type: "TimelineItem",
                                props: {
                                    year: "2015",
                                    title: "The Humble Beginning",
                                    description: "Founded in London with a team of five educators and a mission to democratize data science education.",
                                    icon: "Lightbulb",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#0048B3",
                                    accentColor: "#0048B3"
                                }
                            },
                            {
                                id: "timeline-2018",
                                type: "TimelineItem",
                                props: {
                                    year: "2018",
                                    title: "Global Expansion",
                                    description: "Reached 100,000 active students and launched our signature 'Expert Mentorship' program.",
                                    icon: "Globe",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#0048B3",
                                    accentColor: "#0048B3"
                                }
                            },
                            {
                                id: "timeline-2021",
                                type: "TimelineItem",
                                props: {
                                    year: "2021",
                                    title: "Enterprise Solutions",
                                    description: "Partnered with Fortune 500 companies to provide internal upskilling platforms for over 50k employees.",
                                    icon: "Building2",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#0048B3",
                                    accentColor: "#0048B3"
                                }
                            },
                            {
                                id: "timeline-today",
                                type: "TimelineItem",
                                props: {
                                    year: "Today",
                                    title: "Leading the Edge",
                                    description: "Introducing AI-driven adaptive learning paths and immersive VR classroom experiences.",
                                    icon: "Zap",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#0048B3",
                                    accentColor: "#0048B3"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // FACULTY SECTION - "MEET THE EXPERTS"
        // --------------------------------------------------------------------------
        {
            key: "academiq-vision-faculty",
            name: "Faculty Section",
            description: "Grid of expert faculty members with clean minimal design",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
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
                    // Header with title, description and CTA
                    {
                        id: "faculty-header-col",
                        width: "100%",
                        props: {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            flexWrap: "wrap",
                            gap: 12,
                            marginBottom: 28
                        },
                        elements: [
                            // Heading
                            {
                                id: "faculty-heading",
                                type: "Heading",
                                props: {
                                    text: "Meet the Experts",
                                    tag: "h2",
                                    align: "left",
                                    color: "#0f172a",
                                    size: "4xl",
                                    fontWeight: "bold",
                                    "@media (max-width: 768px)": {
                                        size: "2xl"
                                    }
                                }
                            },
                            // Description
                            {
                                id: "faculty-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Our faculty consists of industry leaders, renowned researchers, and dedicated educators who are masters of their craft.",
                                    align: "left",
                                    color: "#64748b",
                                    size: "lg",
                                    marginBottom: 0,
                                    "@media (max-width: 768px)": {
                                        size: "base"
                                    }
                                }
                            },
                        ]
                    },
                    // Faculty Grid
                    {
                        id: "faculty-grid-col",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 32,
                        elements: [
                            // Faculty 1 - TeamMember Card
                            {
                                id: "faculty-member-1",
                                type: "TeamMember",
                                props: {
                                    name: "Dr. Sarah Jenkins",
                                    role: "Head of Artificial Intelligence",
                                    bio: "Leading AI innovation in educational technology.",
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn3N8ZuOSuRAQoEAuvQK8Qd6I9825adjsr5RCFN4vOKKeSt_lmN6QRmyERMNZzH0Dn_yjb3oh2GS9yopOJ9Q5lPK7I99XlD0CdJpma3Ijg80XiRUViGWrbhfqjf8kmMMSyUQV5pLgUtz0LLSA1sdikOGBKVK0g-Q0GBf3_bMQ5VR83fl1Zlzo2F9DKyTYeaxxmTxvORp3BsnqD4-LHetA_z0CRan8UN2oPobkHphFvdwsl_J_o5V9IktV-AFrUFAEQRP5EbZAB7A",
                                    accentColor: "#0048B3",
                                    aspectRatio: "4/5",
                                    showHoverOverlay: true,
                                    hoverButtonText: "View Profile"
                                }
                            },
                            // Faculty 2 - TeamMember Card
                            {
                                id: "faculty-member-2",
                                type: "TeamMember",
                                props: {
                                    name: "Marcus Sterling",
                                    role: "Lead Design Strategist",
                                    bio: "Strategic design leader with 15+ years experience.",
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJyir5nB5DBTXrKJ7_kEgfCMJm6dYu46ov4rJuokPOz-PzpQbVGcKGrR60hogqR7luZIGruLh9FAqL4SPqi_qn75mMmHx0mReKLFv0p-GS_aagRSYm9nJuKO7vAi86tfeHMiES6TORu7ETBfPDZ_s8od522Mar5B8Wcl9WGkJDcHSH8FhrNMsPyHfexwbXcZilfWNnwsrAlu1IquoA0nBALB5wr9zQSi1FttEEoS-Xr7F365gN2Lw5ct9_G0ZhltLyP0QldMAsAQ",
                                    accentColor: "#0048B3",
                                    aspectRatio: "4/5",
                                    showHoverOverlay: true,
                                    hoverButtonText: "View Profile"
                                }
                            },
                            // Faculty 3 - TeamMember Card
                            {
                                id: "faculty-member-3",
                                type: "TeamMember",
                                props: {
                                    name: "Anita Desai",
                                    role: "VP of Cybersecurity",
                                    bio: "Cybersecurity expert protecting digital learning.",
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvRfN_WHC_QNPLLP5jxJfGJrIFuBioCNweseYgL7ehk-WVwl50KQ3fnntYf9xyniWgMLs0lEqU6MQpngfm5jJfDR7WMryoCb6OFChaGFQKrFFPyWUOwlWN-GGE78EqtjenIh3pPoLA8fLG9G6R5h0c_QgKZN4QkMM8btRLgJsSe8tX6jE0MdWkG19Gc2kSO_Kx29RbE4RLfwNz79bIayFrRL6R-5gUsVN-1jGto6kYy0Q4qL9moP9D8G50lsaJ9QI6j3jZ2Wno-A",
                                    accentColor: "#0048B3",
                                    aspectRatio: "4/5",
                                    showHoverOverlay: true,
                                    hoverButtonText: "View Profile"
                                }
                            },
                            // Faculty 4 - TeamMember Card
                            {
                                id: "faculty-member-4",
                                type: "TeamMember",
                                props: {
                                    name: "Robert Chen",
                                    role: "Dean of Business Excellence",
                                    bio: "Building future-ready business leaders.",
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8IbWM0JJut6t4nsieTdG8-edRO54AAsKUM9JZvBrpBAiPlEL0lFr4ngi30gndgQSJdgrUI7MHg3h7tVzakz8jjb_7787E8aHq4VWTXHsk4P8OlQ40K9t4eVdUR1Miy2k9wzbZIq2B_4vyoGajwN1CFLE4-Gm_wwYJFlew2Ru2ntHHIIGQ3LZ3nA7T6wOCScu-Gh7B9kyBx7ZhqZ8I5gsR8daSQWld85AxMfczimcLEcTLC7Um6NmwDu_Z72CIl4CFoH_MdMD49A",
                                    accentColor: "#0048B3",
                                    aspectRatio: "4/5",
                                    showHoverOverlay: true,
                                    hoverButtonText: "View Profile"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CTA SECTION - "READY TO WRITE YOUR SUCCESS STORY"
        // --------------------------------------------------------------------------
        {
            key: "academiq-vision-cta",
            name: "Call-to-Action Section",
            description: "Final CTA with buttons",
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
                    position: "relative",
                    overflow: "hidden",
                    "@media (max-width: 768px)": {
                        paddingY: 48,
                        paddingX: 20
                    }
                },
                columns: [
                    {
                        id: "cta-content",
                        width: "100%",
                        props: {
                            maxWidth: "700px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            zIndex: 10,
                            position: "relative"
                        },
                        elements: [
                            {
                                id: "cta-heading",
                                type: "Heading",
                                props: {
                                    text: "Ready to write your own success story?",
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
                            {
                                id: "cta-description",
                                type: "Paragraph",
                                props: {
                                    text: "Join thousands of professionals who have transformed their careers through Academiq.",
                                    color: "#bfdbfe",
                                    size: "xl",
                                    lineHeight: 1.6,
                                    marginBottom: 40,
                                    "@media (max-width: 768px)": {
                                        size: "base",
                                        marginBottom: 24
                                    }
                                }
                            },
                            {
                                id: "cta-buttons",
                                type: "Box",
                                props: {
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 16,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                    backgroundColor: "transparent",
                                    "@media (max-width: 768px)": {
                                        flexDirection: "column",
                                        width: "100%"
                                    }
                                },
                                elements: [
                                    {
                                        id: "cta-primary-btn",
                                        type: "Button",
                                        props: {
                                            text: "Explore Our Courses",
                                            href: "#courses",
                                            color: "#0048B3",
                                            backgroundColor: "#000000",
                                            hoverBackgroundColor: "#f1f5f9",
                                            borderRadius: 24,
                                            paddingX: 32,
                                            paddingY: 16,
                                            fontWeight: "bold",
                                            fontSize: "base",
                                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                                        }
                                    },
                                    {
                                        id: "cta-secondary-btn",
                                        type: "Button",
                                        props: {
                                            text: "Speak to an Advisor",
                                            href: "#contact",
                                            color: "#ffffff",
                                            backgroundColor: "transparent",
                                            borderColor: "#ffffff",
                                            borderWidth: 2,
                                            borderRadius: 24,
                                            paddingX: 32,
                                            paddingY: 14,
                                            fontWeight: "bold",
                                            fontSize: "base",
                                            hoverBackgroundColor: "rgba(255, 255, 255, 0.1)"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    ],
};

module.exports = academiqVision;
