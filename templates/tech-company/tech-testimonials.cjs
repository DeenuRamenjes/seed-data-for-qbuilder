/**
 * Tech Company Testimonials/Reviews Page Template
 * Theme: Modern Tech/IT Solutions - Student Success Stories
 * Primary Color: #328CE6 (Blue)
 * Dark Mode: Supported
 * Fonts: Plus Jakarta Sans
 */

const techTestimonials = {
    sections: [


        // --------------------------------------------------------------------------
        // SUCCESS BY THE NUMBERS SECTION
        // --------------------------------------------------------------------------
        {
            key: "success-stats",
            name: "Success by Numbers Section",
            description: "Stats and progress bars showing employment and success metrics",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#1F2937",
                    fullWidth: true,
                    paddingY: 60,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 24,
                    "@media (max-width: 1024px)": {
                        gap: 24
                    },
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 24,
                        paddingY: 48
                    }
                },
                columns: [
                    // Left Column - Text and Progress Bars
                    {
                        id: "stats-text-col",
                        width: "100%",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "stats-heading",
                                type: "Heading",
                                props: {
                                    text: "Success by the Numbers",
                                    level: "h2",
                                    size: "3xl",
                                    align: "center",
                                    weight: "bold",
                                    color: "#1F2937"
                                }
                            },
                            {
                                id: "stats-description",
                                type: "Paragraph",
                                props: {
                                    text: "Data driven results from our 2023 graduate cohort across all tech disciplines.",
                                    size: "base",
                                    color: "#4B5563",
                                    marginTop: 24,
                                    align: "center",
                                    marginBottom: 40
                                }
                            },
                            // Progress bars container
                            {
                                id: "progress-1",
                                type: "ProgressStatCard",
                                props: {
                                    title: "Employment Rate (within 6 months)",
                                    accentColor: "#328CE6",
                                    backgroundColor: "#F3F4F6",
                                    borderRadius: 12,
                                    progressBars: [
                                        {
                                            label: "Employment Rate",
                                            value: 94,
                                            color: "#328CE6"
                                        }
                                    ]
                                }
                            },
                            {
                                id: "progress-2",
                                type: "ProgressStatCard",
                                props: {
                                    title: "Average Salary Increase",
                                    accentColor: "#328CE6",
                                    backgroundColor: "#F3F4F6",
                                    borderRadius: 12,
                                    progressBars: [
                                        {
                                            label: "Salary Increase",
                                            value: 62,
                                            color: "#328CE6"
                                        }
                                    ]
                                }
                            },
                            {
                                id: "progress-3",
                                type: "ProgressStatCard",
                                props: {
                                    title: "Career Switchers Success",
                                    accentColor: "#328CE6",
                                    backgroundColor: "#F3F4F6",
                                    borderRadius: 12,
                                    progressBars: [
                                        {
                                            label: "Success Rate",
                                            value: 88,
                                            color: "#328CE6"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    // Right Column - Big stat cards (2x2 grid)
                    {
                        id: "stat-card-1",
                        width: "calc(25% - 18px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "calc(50% - 12px)"
                            }
                        },
                        elements: [
                            {
                                id: "stat-card-1",
                                type: "BigNumberCard",
                                props: {
                                    value: "500+",
                                    title: "Graduates",
                                    description: "",
                                    accentColor: "#328CE6",
                                    backgroundColor: "#F9FAFB",
                                    borderRadius: 24
                                }
                            }
                        ]
                    },
                    {
                        id: "stat-card-2",
                        width: "calc(25% - 18px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "calc(50% - 12px)"
                            }
                        },
                        elements: [
                            {
                                id: "stat-card-2",
                                type: "BigNumberCard",
                                props: {
                                    value: "$75k",
                                    title: "Avg. Salary",
                                    description: "",
                                    accentColor: "#328CE6",
                                    backgroundColor: "#F9FAFB",
                                    borderRadius: 24
                                }
                            }
                        ]
                    },
                    {
                        id: "stat-card-3",
                        width: "calc(25% - 18px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "calc(50% - 12px)"
                            }
                        },
                        elements: [
                            {
                                id: "stat-card-3",
                                type: "BigNumberCard",
                                props: {
                                    value: "120+",
                                    title: "Partners",
                                    description: "",
                                    accentColor: "#328CE6",
                                    backgroundColor: "#F9FAFB",
                                    borderRadius: 24
                                }
                            }
                        ]
                    },
                    {
                        id: "stat-card-4",
                        width: "calc(25% - 18px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "calc(50% - 12px)"
                            }
                        },
                        elements: [
                            {
                                id: "stat-card-4",
                                type: "BigNumberCard",
                                props: {
                                    value: "4.9/5",
                                    title: "Rating",
                                    description: "",
                                    accentColor: "#328CE6",
                                    backgroundColor: "#F9FAFB",
                                    borderRadius: 24
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TESTIMONIALS GRID SECTION
        // --------------------------------------------------------------------------
        {
            key: "testimonials-grid",
            name: "Testimonials Grid Section",
            description: "Masonry-style grid of student testimonials and reviews",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 60,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    "@media (max-width: 768px)": {
                        paddingY: 40,
                        gap: 16
                    }
                },
                columns: [
                    // Testimonial 1
                    {
                        id: "testimonial-1",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 12px)"
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
                                    text: "The Full-stack development course was a game-changer. The curriculum is modern and stays updated with industry standards. I landed my first job within two months!",
                                    author: "Alex Rivera",
                                    role: "Junior Developer",
                                    company: "InnovateX",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANHcuDWPXpuGC0GEgYh3PzAtZbvcEWo3B1_53Kc_9aqizplbLqlcdx4xkY_4-ukaz-3AzdutTkJADmnRJehEzXdHq7sNqy-F_qguunId9CiLzxv2a5JiXjTub-m-cW3seEPijqI_lNXA8ffrqTmpIHacMwTu2B8iNG6FxZNZ5inGXEFoxNKk4S4Gm9eGgUWsxacU2pNTl1j5QqwZ6hQlrCT9jksTazIFnNZWhYdcNGf1YaRD9M69Qn487Ntq5qutBLBi1EKfb4G3vk",
                                    rating: 5,
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    accentColor: "#328CE6"
                                }
                            }
                        ]
                    },
                    // Testimonial 2
                    {
                        id: "testimonial-2",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 12px)"
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
                                    text: "I loved the UI/UX workshop. The mentors are actually working professionals who give real-world feedback. Totally worth the investment.",
                                    author: "Sarah Jenkins",
                                    role: "Product Designer",
                                    company: "Tech Corp",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXT4E7SL0D_diiWHs8WW3sspT2K_s5z1wWsLnj7sSrFcpYmiXW3ODozd2DVzIx0JXc2AjSLdeT6Wv99aJRUO6f7MeKhiQrw0fWkn8OUlkNFBez6sice4k67QjOo_tbnbp6UXT22PrrjXXE-W_YJ1gJdb1JQGY_ykOUY5ZUvteZy_POLTFjia_VVMDaYS3Wf1lfvZmG4MKtyR-t52trtwuZoxdJveAEu4kC1myDLDMy6NxnDSJRbQ6aueVRfCEZrEAQ1dBh2MpbPoQi",
                                    rating: 5,
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    accentColor: "#328CE6"
                                }
                            }
                        ]
                    },
                    // Testimonial 3
                    {
                        id: "testimonial-3",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 12px)"
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
                                    text: "The Data Science program is intense but extremely rewarding. The capstone project helped me build a portfolio that recruiters actually noticed.",
                                    author: "Michael Chen",
                                    role: "Data Analyst",
                                    company: "DataFlow",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQgmS3CLtaKC0WLC3-WE2jE-SMnBnPfrLN_DlMkjquReA2rM_QS86VSYdhvFzmxDk6EOwXID4mDLKsug-QOImbAt6Y-NLfifHJww_9TJYzBWvqUmGdB0h7qjg-sVPU93n_YKezlHWxWlSt6_iyXBiWTw2jRX15BO9T8CmqtZGyF9ou7atbzxvo3DJ1KEKTeHDX6kI6VKCWSF2CqfKDqP2EHIYjY7bg3ag5KfSdpSdWciAfHLkzJwRmCqbsYFTxv_E99QnFMITbCzcs",
                                    rating: 5,
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    accentColor: "#328CE6"
                                }
                            }
                        ]
                    },
                    // Testimonial 4
                    {
                        id: "testimonial-4",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 12px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "testimonial-card-4",
                                type: "Testimonial",
                                props: {
                                    text: "Coming from a non-tech background, I was nervous. Tech's beginner-friendly approach made the transition into DevOps smooth and understandable.",
                                    author: "Elena Rodriguez",
                                    role: "Cloud Engineer",
                                    company: "CloudTech",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2rY83zbnnIjIvn-KFfcn7m9tS8Lm_0d3uGCQSjWIrZEAAO6DiJJgYSs10WvjSvDhdqIhzfcQcH_V_zrx0g--WHqo6jIu9oGhv4bfpeZ-MMW3l65q6hp9CkUotIrkKmNWzGX7arl1PVuONFlgr55eOK2ThYuW6FvlQTAqFaeUdiSnuNM1CEZGTD-DSBbkDHla8MatcEksXV_w270UxgPdIeJCU38B6a726pjFdWWdsMLpI9F8PeENu0sEt0MiUPRYxfS5rMybZCXNg",
                                    rating: 4,
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    accentColor: "#328CE6"
                                }
                            }
                        ]
                    },
                    // Testimonial 5
                    {
                        id: "testimonial-5",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 12px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "testimonial-card-5",
                                type: "Testimonial",
                                props: {
                                    text: "The community support here is unmatched. Whenever I got stuck, I had mentors and peers helping me out within minutes. Best learning experience ever!",
                                    author: "Jordan Smith",
                                    role: "Frontend Developer",
                                    company: "WebStudio",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgBxBELL8evkZil3hjHrMSFWDkkoXr8KeoEbE9N2FcXVJhksQ6rTtHvXxBBvjnMS3atK518B79qKMcyqfnnzB_ZdoWNK3-JX1QNnD7YH7RXwQVJWyD1yDYOY2bo3SBN46DkKe06I-LQDfEMEGKcLvEMPuQHgYmKudx3Cyd7AP_UDpzm2DQzEYu3-UYRRqlI7UBw83yJ_qsSMLP3LuWt14khHCoUNiaFuGtm1ZkcvOb-H2iL3q36_vDDfdithQ2wbch8dsGdb1AulAn",
                                    rating: 5,
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    accentColor: "#328CE6"
                                }
                            }
                        ]
                    },
                    // Testimonial 6
                    {
                        id: "testimonial-6",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 12px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "testimonial-card-6",
                                type: "Testimonial",
                                props: {
                                    text: "I transitioned from marketing to QA testing through their bootcamp. The focus on automation testing was exactly what I needed.",
                                    author: "Lila Vance",
                                    role: "QA Engineer",
                                    company: "QualityAssure",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUW_ulZQZJd-lTPXbD34us1FIQz51A48QMGRxAtNx3DI8mDCHNe9LoI28eLeYeo805nbG_XIZ-7AkAppEvswnoGS8WoUzxTKTe_OKI5B0QoS6BQqQ1tjyj-W1P0gHgnMv-NISLlvyQI5YS5PblMeORzJKlWdiLPjb89bHF3xxEKvEucBkV-z7GSDC162vwMfoYCwGAHlKmBdRQb31rrmvlrWfVmyFgnvfmPbcDH-DYpsGJ-GLSGrdJfNubAKnrXqe8VfSY6NpW3jlB",
                                    rating: 5,
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    accentColor: "#328CE6"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CTA FORM SECTION - SHARE YOUR FEEDBACK
        // --------------------------------------------------------------------------
        {
            key: "testimonials-form",
            name: "Share Your Experience Form",
            description: "Form for users to submit testimonial feedback",
            structure: {
                type: "ContactForm",
                defaultProps: {
                    badgeText: "Share Your Feedback",
                    title: "Share your experience.",
                    description: "Help others make the right choice by leaving your feedback about our programs.",
                    submitText: "Submit Feedback",
                    firstNameLabel: "Full Name",
                    firstNamePlaceholder: "John Doe",
                    lastNameLabel: "Your Title",
                    lastNamePlaceholder: "e.g., Student, Developer",
                    emailLabel: "Email",
                    emailPlaceholder: "your@email.com",
                    subjectLabel: "Course Taken",
                    subjectOptions: "Full-stack Web Dev,UI/UX Design,Data Science,DevOps Mastery,QA Automation",
                    messageLabel: "Your Message",
                    messagePlaceholder: "Tell us about your journey...",
                    backgroundColor: "#FFFFFF",
                    textColor: "#1F2937",
                    primaryColor: "#328CE6",
                    secondaryColor: "#328CE6",
                    accentColor: "#328CE6",
                    inputBackgroundColor: "#F3F4F6",
                    inputBorderColor: "#E5E7EB",
                    inputTextColor: "#1F2937",
                    inputPlaceholderColor: "#6B7280"
                }
            }
        }
    ]
};

module.exports = techTestimonials;
