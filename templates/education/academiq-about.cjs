/**
 * Academiq About Page - Mission & Vision
 * Theme: Professional Education / EdTech
 * Primary Color: #0048B3 (Deep Blue)
 * Secondary Color: #E0F2FE (Sky Blue)
 * Background: #F8FAFC (Light) / #0F172A (Dark)
 * Fonts: Inter (Body), Plus Jakarta Sans (Display)
 */

const academiqAbout = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION - WHO WE ARE
        // --------------------------------------------------------------------------
        {
            key: "academiq-about-hero",
            name: "Hero Section",
            description: "Who We Are hero section with gradient background",
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
                    alignItems: "flex-start",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "500px"
                },
                columns: [
                    {
                        id: "hero-content-col",
                        width: "100%",
                        props: {
                            position: "relative",
                            zIndex: 10,
                            maxWidth: "800px"
                        },
                        elements: [
                            {
                                id: "hero-heading",
                                type: "Heading",
                                props: {
                                    text: "Who We Are",
                                    tag: "h1",
                                    color: "#ffffff",
                                    size: "6xl",
                                    fontWeight: "black",
                                    lineHeight: 1.1,
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Academiq is a premier learning platform ready to bridge the gap with industry-driven courses and expert mentorship in the digital landscape.",
                                    color: "#bfdbfe",
                                    size: "xl",
                                    lineHeight: 1.7,
                                    fontWeight: "300"
                                }
                            }
                        ]
                    },
                    // Decorative overlays (using absolute positioned Box elements)
                    {
                        id: "hero-decorative",
                        width: "100%",
                        props: {
                            position: "absolute",
                            inset: 0,
                            zIndex: 1,
                            pointerEvents: "none",
                            overflow: "hidden"
                        },
                        elements: [
                            {
                                id: "hero-gradient-overlay",
                                type: "Box",
                                props: {
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: "50%",
                                    height: "100%",
                                    background: "linear-gradient(to left, rgba(96, 165, 250, 0.2), transparent)",
                                    pointerEvents: "none"
                                }
                            },
                            {
                                id: "hero-wave-overlay",
                                type: "Box",
                                props: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "transparent",
                                    opacity: 0.1,
                                    pointerEvents: "none"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // STORY/ABOUT SECTION WITH IMAGE AND FEATURES
        // --------------------------------------------------------------------------
        {
            key: "academiq-about-story",
            name: "Our Story Section",
            description: "About section with text, features, and image",
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
                    // Left Column: Content
                    {
                        id: "about-content-col",
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
                                id: "about-badge",
                                type: "Badge",
                                props: {
                                    text: "OUR STORY",
                                    color: "#0048B3",
                                    backgroundColor: "#dbeafe",
                                    borderRadius: 20,
                                    marginBottom: 24,
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    paddingX: 16,
                                    paddingY: 8,
                                    "@media (max-width: 768px)": {
                                        marginBottom: 16,
                                        fontSize: "xs"
                                    }
                                }
                            },
                            {
                                id: "about-heading",
                                type: "Heading",
                                props: {
                                    text: "Bridging the Skills Gap in Tamil Nadu",
                                    tag: "h2",
                                    color: "#0f172a",
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
                                id: "about-description",
                                type: "Paragraph",
                                props: {
                                    text: "At Academiq, we empower students and professionals to achieve their career goals by providing high-quality, accessible, and practical education. Founded with a vision to transform the learning landscape, we specialize in industry-recognized certifications and job-oriented training programs.",
                                    color: "#64748b",
                                    size: "lg",
                                    lineHeight: 1.7,
                                    marginBottom: 48,
                                    "@media (max-width: 768px)": {
                                        size: "base",
                                        marginBottom: 32
                                    }
                                }
                            },
                            {
                                id: "about-features",
                                type: "Box",
                                props: {
                                    backgroundColor: "transparent",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 32,
                                    "@media (max-width: 768px)": {
                                        gap: 24
                                    }
                                },
                                elements: [
                                    {
                                        id: "feature-1",
                                        type: "BenefitItem",
                                        props: {
                                            icon: "💡",
                                            title: "Practical & Industry Focused Coaching",
                                            description: "Real-world projects and scenarios that prepare you for the actual workplace environment.",
                                            backgroundColor: "transparent",
                                            iconBgColor: "#dbeafe",
                                            titleColor: "#0f172a",
                                            descriptionColor: "#64748b",
                                            shadow: "none"
                                        }
                                    },
                                    {
                                        id: "feature-2",
                                        type: "BenefitItem",
                                        props: {
                                            icon: "👥",
                                            title: "Personalized Mentor & Support",
                                            description: "One-on-one guidance from industry veterans who have been exactly where you are today.",
                                            backgroundColor: "transparent",
                                            iconBgColor: "#dbeafe",
                                            titleColor: "#0f172a",
                                            descriptionColor: "#64748b",
                                            shadow: "none"
                                        }
                                    },
                                    {
                                        id: "feature-3",
                                        type: "BenefitItem",
                                        props: {
                                            icon: "🌐",
                                            title: "Tamil & English Guidance",
                                            description: "We believe language shouldn't be a barrier to high-quality technical education.",
                                            backgroundColor: "transparent",
                                            iconBgColor: "#dbeafe",
                                            titleColor: "#0f172a",
                                            descriptionColor: "#64748b",
                                            shadow: "none"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    // Right Column: Image
                    {
                        id: "about-image-col",
                        width: "50%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            position: "relative",
                            gap: 0,
                            "@media (max-width: 768px)": {
                                width: "100%"
                            },
                            "@media (max-width: 1024px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "about-image-wrapper",
                                type: "Box",
                                props: {
                                    position: "relative",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    "@media (max-width: 768px)": {
                                        width: "100%"
                                    }
                                },
                                elements: [
                                    {
                                        id: "about-image-container",
                                        type: "Box",
                                        props: {
                                            backgroundColor: "#ffffff",
                                            borderRadius: 24,
                                            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                                            width: "100%",
                                            overflow: "hidden",
                                            position: "relative",
                                            "@media (max-width: 768px)": {
                                                borderRadius: 16,
                                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)"
                                            }
                                        },
                                        elements: [
                                            {
                                                id: "about-image",
                                                type: "Image",
                                                props: {
                                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUslAU5yahWSIaP7sOvWl8FhoBDwDTILpThepJ90wgmPsiW3gvzAh8ACK6k3EaRZ1FDAqS-gAg5NVkmUcULvC1ZdkeZ_fznrwvUBbPTi0Umawvv48UK9l8yhGq4hDWdyql-UHVOIjwrDqwKS6N3cmhvHIXONYdJtuOR0ft9C_9CqOhZ-BQ2ZXsqJIPdoznE_kMawQtt8s_DkwINwfG00m-6VSVxfNyZDVVC2AS6yLbzufi5w206Mi7KY_6kldcXZfaaGbeJCFrp3eD",
                                                    alt: "Group of educators and students collaborating",
                                                    borderRadius: 24,
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    height: 500,
                                                    aspectRatio: "4/5",
                                                    "@media (max-width: 768px)": {
                                                        height: 220,
                                                        aspectRatio: "16/9"
                                                    },
                                                    "@media (max-width: 1024px)": {
                                                        height: 400,
                                                        aspectRatio: "4/5"
                                                    }
                                                }
                                            },
                                            {
                                                id: "about-image-overlay",
                                                type: "Box",
                                                props: {
                                                    position: "absolute",
                                                    inset: 0,
                                                    backgroundColor: "#0048B3",
                                                    opacity: 0.2,
                                                    pointerEvents: "none"
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
        },

        // --------------------------------------------------------------------------
        // STATS SECTION
        // --------------------------------------------------------------------------
        {
            key: "academiq-about-stats",
            name: "Stats Section",
            description: "Key metrics and achievements",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    // paddingY: 96,
                    // paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    // "@media (max-width: 768px)": {
                    //     paddingY: 60,
                    //     paddingX: 20
                    // },
                    // "@media (max-width: 1024px)": {
                    //     paddingY: 80,
                    //     paddingX: 40
                    // }
                },
                columns: [
                    {
                        id: "stats-col",
                        width: "100%",
                        elements: [
                            {
                                id: "stats-section",
                                type: "StatsSection",
                                props: {
                                    stats: [
                                        {
                                            number: "15",
                                            label: "Students Trained",
                                            format: "k"
                                        },
                                        {
                                            number: "50",
                                            label: "Expert Mentors",
                                            format: "default"
                                        },
                                        {
                                            number: "95",
                                            label: "Success Rate",
                                            format: "default"
                                        },
                                        {
                                            number: "200",
                                            label: "Hiring Partners",
                                            format: "default"
                                        }
                                    ],
                                    backgroundColor: "#ffffff",
                                    textColor: "#0f172a",
                                    accentColor: "#0048B3",
                                    paddingY: 96,
                                    paddingX: 80
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CONTACT SECTION
        // --------------------------------------------------------------------------
        {
            key: "academiq-about-contact",
            name: "Contact Section",
            description: "Get in touch contact form and location info",
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
                    // Section Header
                    {
                        id: "contact-header",
                        width: "100%",
                        props: {
                            marginBottom: 64
                        },
                        elements: [
                            {
                                id: "contact-title",
                                type: "Heading",
                                props: {
                                    text: "Get in Touch",
                                    tag: "h2",
                                    size: "3xl",
                                    fontWeight: "black",
                                    color: "#0f172a",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "contact-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "At Academiq, your career is our priority. Let's start a conversation.",
                                    color: "#64748b",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    // Content Row
                    {
                        id: "contact-content",
                        width: "100%",
                        props: {
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr",
                            gap: 96
                        },
                        elements: [
                            {
                                id: "contact-form",
                                type: "ContactForm",
                                props: {
                                    fields: [
                                        { name: "firstName", label: "First Name", type: "text", placeholder: "John", required: true },
                                        { name: "lastName", label: "Last Name", type: "text", placeholder: "Doe", required: true },
                                        { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true },
                                        { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", required: false },
                                        { name: "message", label: "Message", type: "textarea", placeholder: "Tell us how we can help...", required: true }
                                    ],
                                    buttonText: "Send Message",
                                    buttonColor: "#0048B3",
                                    buttonHoverColor: "#003399",
                                    backgroundColor: "transparent",
                                    inputBgColor: "#f1f5f9",
                                    inputBorderColor: "#cbd5e1",
                                    labelColor: "#0f172a",
                                    textColor: "#64748b",
                                    successMessage: "Thank you for reaching out! We'll be in touch soon."
                                }
                            },
                            {
                                id: "contact-info",
                                type: "Box",
                                props: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 0,
                                    height: "100%"
                                },
                                elements: [
                                    {
                                        id: "location-box",
                                        type: "Box",
                                        props: {
                                            position: "relative",
                                            borderRadius: 24,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            minHeight: 400,
                                            textAlign: "center",
                                            gap: 24,
                                            overflow: "hidden",
                                            backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/80.2707,13.0827,12,0/600x400@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycW1uMHRqcHp4MGMifQ.rJcFIG214AriISLbB6B5aw')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        },
                                        elements: [
                                            {
                                                id: "location-overlay",
                                                type: "Box",
                                                props: {
                                                    position: "absolute",
                                                    inset: 0,
                                                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                                                    zIndex: 1,
                                                    pointerEvents: "none"
                                                }
                                            },
                                            {
                                                id: "location-content",
                                                type: "Box",
                                                props: {
                                                    position: "relative",
                                                    zIndex: 2,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: 24
                                                },
                                                elements: [
                                                    {
                                                        id: "location-icon-bg",
                                                        type: "Box",
                                                        props: {
                                                            width: 64,
                                                            height: 64,
                                                            backgroundColor: "#0048B3",
                                                            borderRadius: 32,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#ffffff",
                                                            fontSize: 32,
                                                            boxShadow: "0 4px 15px rgba(0, 72, 179, 0.3)"
                                                        }
                                                    },
                                                    {
                                                        id: "location-title",
                                                        type: "Heading",
                                                        props: {
                                                            text: "Our Campus",
                                                            tag: "h3",
                                                            size: "xl",
                                                            fontWeight: "bold",
                                                            color: "#ffffff",
                                                            marginBottom: 8
                                                        }
                                                    },
                                                    {
                                                        id: "location-address",
                                                        type: "Paragraph",
                                                        props: {
                                                            text: "123 Learning Lane, Knowledge Park, Chennai, Tamil Nadu 600001",
                                                            color: "#e2e8f0",
                                                            size: "base",
                                                            lineHeight: 1.6
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
        }
    ],
};

module.exports = academiqAbout;
