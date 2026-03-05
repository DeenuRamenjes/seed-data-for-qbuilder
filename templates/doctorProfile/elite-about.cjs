/**
 * DoctorProfile Template - About Page (NEXUS Private Clinic)
 * Theme: Premium Healthcare / Blue & Cyan-Green
 * Primary: #1FFFC0 (Mint Green)
 * Secondary: #1F5EFF (Royal Blue)
 * Accent: #1FCEFF (Cyan)
 * Background: #f8fdfc
 * Font: Public Sans
 */

const eliteHome = require('./elite-home.cjs');

const eliteAbout = {
    // ============================================================================
    // HEADER (shared)
    // ============================================================================
    header: eliteHome.header,

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // BLURRED HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "nexus-about-hero",
            name: "About Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#0a1110",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "about-hero-col",
                        width: "100%",
                        elements: [
                            {
                                type: "BlurredHero",
                                props: {
                                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIT-2vGDyBVYYpQtJovHDSVTN2kX9lZcRc_Kr_MCUt_j6fcFArAy199hE1N8qfAGqAmG7QINHtlhnX7ntRLm8OoB63nUpjOaipVwiXBvNv89R34movlYk01KTQoOR9ut0zTNWqQBS0iDEDnmR99KN6In2UQNw0hpeNZjZyTFT63anLTzm6CPlO8FbTC05ADeRGGgrIYVjJkYEy_b9PwwKZlU4FZpFwncLMCVHaTEqjXvp7grEZlxIoY8i1xwpFoX6RheWZy8X21A-z",
                                    badgeText: "EXCELLENCE IN CARE",
                                    titleLine1: "NEXUS",
                                    titleLine2: "Private Clinic",
                                    titleLine2Color: "#1FCEFF",
                                    description: "Experience the pinnacle of personalized healthcare in a sanctuary of modern medical technology and premium comfort.",
                                    primaryCtaText: "EXPLORE SERVICES",
                                    primaryCtaLink: "/services",
                                    secondaryCtaText: "VIRTUAL TOUR",
                                    secondaryCtaLink: "#tour",
                                    cardBlur: 20,
                                    cardOpacity: 0.75,
                                    overlayOpacity: 0.15,
                                    minHeight: 700
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // SPECIALIZED DEPARTMENTS
        // --------------------------------------------------------------------------
        {
            key: "nexus-departments",
            name: "Specialized Departments",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 48,
                    flexDirection: "col"
                },
                columns: [
                    {
                        id: "dept-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "Our Expertise", color: "#1F5EFF", marginBottom: 20, bgColor: "transparent" }
                            },
                            {
                                type: "Heading",
                                props: { text: "Specialized Departments", tag: "h2", size: "4xl", color: "#0f172a", fontWeight: "900" }
                            }
                        ]
                    },
                    {
                        id: "dept-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 24,
                        elements: [
                            {
                                type: "NumCard",
                                props: { number: 1, title: "Cardiology", description: "Leading-edge cardiovascular treatments and preventive care.", icon: "Heart", accentColor: "#1FFFC0" }
                            },
                            {
                                type: "NumCard",
                                props: { number: 2, title: "Neurology", description: "Comprehensive brain and nervous system specialists.", icon: "Brain", accentColor: "#1FCEFF" }
                            },
                            {
                                type: "NumCard",
                                props: { number: 3, title: "Oncology", description: "Advanced cancer care with a focus on personalized genetics.", icon: "Microscope", accentColor: "#1F5EFF" }
                            },
                            {
                                type: "NumCard",
                                props: { number: 4, title: "Orthopedics", description: "Specialized bone and joint recovery and restoration.", icon: "Bone", accentColor: "#1FFFC0" }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // FACILITIES SECTION
        // --------------------------------------------------------------------------
        {
            key: "nexus-facilities",
            name: "Ultra-Modern Facilities",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "facilities-text",
                        width: "50%",
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "Beyond Standard Care", color: "#1FFFC0", marginBottom: 20, bgColor: "transparent" }
                            },
                            {
                                type: "Heading",
                                props: { text: "Ultra-Modern Facilities", tag: "h2", size: "4xl", color: "#0f172a", fontWeight: "900" }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Our clinic features state-of-the-art diagnostic imaging suites, luxury private recovery pods, and an integrated wellness center designed for holistic healing.",
                                    size: "lg",
                                    color: "#475569",
                                    marginTop: 16,
                                    marginBottom: 32
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: { title: "AI-Assisted Diagnostics — Precision imaging with ultra-high resolution capabilities.", icon: "Cpu", iconColor: "#1FFFC0", textColor: "#334155", marginBottom: 16 }
                            },
                            {
                                type: "FeatureRow",
                                props: { title: "Luxury Recovery Suites — Private, 5-star rooms designed for maximum comfort.", icon: "Sparkles", iconColor: "#1FCEFF", textColor: "#334155", marginBottom: 32 }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "View All Facilities",
                                    primaryLink: "/services",
                                    primaryBg: "#0f172a",
                                    primaryTextColor: "#ffffff",
                                    borderRadius: "12"
                                }
                            }
                        ]
                    },
                    {
                        id: "facilities-image",
                        width: "50%",
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfRwEwQ58t5Vl7Q-D9jPK8wTso5QpBx28KxthPw2NfUJdR0OTOS3r_E9ILEhcP9o9QuBO_VF1IM591sYdZAdSrfLZWCyTJhzuuYQne0WQ1OnWqQkuVxq745Olf5ZjPYZkmTolNzF7ZKL-tzzFFp0z5_c7xgv2RJD-dZmHOVBdY6TdsUAsYbOg4xeCKuKJ-27QGOyNZtZlb-bywziNjsx-3VlhVrkaTtNOSBf1sxrUZ06v5pRasKxUbmGeokgrBRltsJqUUSNCk47Xn",
                                    alt: "A futuristic medical scan room facility",
                                    borderRadius: "32",
                                    objectFit: "cover",
                                    aspectRatio: "16/9"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // MEET THE TEAM
        // --------------------------------------------------------------------------
        {
            key: "nexus-team",
            name: "Medical Board",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f1f5f9",
                    paddingY: 10,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 10,
                    flexDirection: "col"
                },
                columns: [
                    {
                        id: "team-header",
                        width: "100%",
                        props: { textAlign: "center" },
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "Medical Board", color: "#1FCEFF", bgColor: "transparent" }
                            },
                            {
                                type: "Heading",
                                props: { text: "World-Class Specialists", tag: "h2", size: "5xl", color: "#0f172a", fontWeight: "900", align: "center" }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Our team of internationally recognized physicians and researchers are committed to your health and longevity.",
                                    size: "lg",
                                    color: "#475569",
                                    align: "center",
                                    marginTop: 16
                                }
                            }
                        ]
                    },
                    {
                        id: "team-carousel",
                        width: "100%",
                        elements: [
                            {
                                type: "HorizontalCarouselRenderer",
                                props: {
                                    title: "",
                                    showNavigation: true,
                                    items: [
                                        {
                                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8pzftW9IkIbl0TIkJa50QOWi75AQ5EOvA4e8w4_OlppU2-1wI9Ja5wS4_TaQvMgZtId_J0HbyuujOrjDrLR5pQ1U1bPUn1nNxBoDpmhIyDFoLUc66ZmTETrcNAwf_8KSuRkJynSMbCe2hL2swDzf_-5Q55rl8IqYvUQZkAqXq6fZQahANRqHki870YyFcu4ZMkoEWevWjGh2cpPbcNjQ_J0wPgdG_c5wS7erxLpO-2ZawigRcXry3gdE3oD9b5_S0Q4K6AKWG6SE5",
                                            label: "Chief of Cardiology",
                                            title: "Dr. Julian Vance",
                                            description: "Board-certified cardiologist with 20+ years of experience in advanced cardiovascular interventions."
                                        },
                                        {
                                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpIvCEM7yhF82Rx9ddNSgq8suXR2P9QvaEDuwCCfwbPE7R-TEfO2FzHYUfTmXIPMIkjckxDg2UKGkQOvRhyGftmX2X4i3migfZHDPwjjoNG8NQwBNXTMb4W03EAMxYtO2zKyVu2-gq419sR1Vlyrwa5gNnb1nT6K4TkJOv6-U-9AUOm4xg3Kqp33tZP5osHjxc5nqvNlTRXOx9fP0ev6WDbMl5qyMI-5BstaCCs9CJiCro-UA11gBX28cdydJKsvxhFwD5A1NoCF0X",
                                            label: "Neurosurgery Lead",
                                            title: "Dr. Elena Rossi",
                                            description: "Internationally acclaimed neurosurgeon specializing in minimally invasive brain and spine procedures."
                                        },
                                        {
                                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM7rY2LG2ABy6Rnyk1FDfT4NtyW9dcstIqtUuSCpQXG4aGeZ6WmFXIQmeuLja9BU-wBTJJrFzq3V6Z-SNMg_lugdmKjMDBNtpZ7zgS4LdnN8FVFa8c4IuuFSmGvoB1noDfhZTaPYS3D_xzYfeN_2tUcL9N-07xwawhBUaGrQxpcyrQaYOhg-Jk4zK_bdkhDspegTJaVIiMTPMB0_w69GYE_vKnxyy8mXSx3xnXpTrqaF1NU15l4hm0GRqf2Ux16h3S83Lo20_FilhZ",
                                            label: "Internal Medicine",
                                            title: "Dr. Marcus Chen",
                                            description: "Expert internist focused on preventive medicine and executive health programs."
                                        },
                                        {
                                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK5VuPbDOSsjPGUsRL_O-QhwRA1VGnWuTfw3kxnfU5M9mZxTPp12gBctRbZlpv1Dc0eMJDHwg8tK6yVeMcRq93WcgvHD3oJnby5IHTx3-SzKRNI3fh6cBqdIZz-mXoQUiOE2WnAPkiTZFAtfpSYuE2QonlC2hb2jNIz0ZHuq-j5M30YzQINX_UAwG3Zm5q3Np7bNvgYLO_okVGcWFTxp6qKM1_JgdKP5MQsVBKpl0Ut6zVoMy001Mj3kwnhrXh6nKr2usciVB7mOUR",
                                            label: "Advanced Oncology",
                                            title: "Dr. Sarah Khalil",
                                            description: "Leading oncologist pioneering personalized genomic cancer therapies and clinical trials."
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },
    ],
    // ============================================================================
    // FOOTER (shared)
    // ============================================================================
    footer: eliteHome.footer
};

module.exports = eliteAbout;
