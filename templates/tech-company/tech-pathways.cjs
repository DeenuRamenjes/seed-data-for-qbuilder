/**
 * Tech Company Learning Pathways Page Template
 * Theme: Modern Tech/IT Solutions - Programs & Courses
 * Primary Color: #328CE6 (Lime)
 * Dark Mode: Supported
 * Fonts: Plus Jakarta Sans
 */

const techPathways = {

    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "tech-pathways-hero",
            name: "Pathways Hero Section",
            description: "Hero section with badge, title, and description",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 120,
                    paddingX: 24,
                    marginTop: 80,
                    textAlign: "center"
                },
                columns: [{
                    id: "hero-content",
                    width: "100%",
                    props: {
                        maxWidth: "900px",
                        marginX: "auto",
                        textAlign: "center"
                    },
                    elements: [
                        {
                            id: "pathways-hero-badge",
                            type: "Badge",
                            props: {
                                text: "LEARNING PATHWAYS",
                                color: "#328CE6",
                                backgroundColor: "#F8F8F6",
                                darkBackgroundColor: "#1A1A1A",
                                borderRadius: 20,
                                marginBottom: 24,
                                marginX: "auto",
                                fontSize: "sm",
                                fontWeight: "bold",
                                paddingX: 16,
                                paddingY: 8,
                                display: "inline-block"
                            }
                        },
                        {
                            id: "pathways-hero-title",
                            type: "Heading",
                            props: {
                                text: "Curated Learning Pathways",
                                tag: "h1",
                                color: "#000000",
                                darkColor: "#FFFFFF",
                                size: "4xl",
                                fontWeight: "black",
                                lineHeight: 1.1,
                                marginBottom: 24,
                                align: "center"
                            }
                        },
                        {
                            id: "pathways-hero-desc",
                            type: "Paragraph",
                            props: {
                                text: "Master in-demand skills with our structured learning programs designed for every skill level. From fundamentals to advanced expertise.",
                                color: "#666666",
                                darkColor: "#999999",
                                size: "xl",
                                lineHeight: 1.6,
                                maxWidth: "600px",
                                marginX: "auto",
                                align: "center"
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PROGRAMS SECTION - USING AcademiqCourseCard
        // --------------------------------------------------------------------------
        {
            key: "tech-programs",
            name: "Learning Programs",
            description: "Grid of learning programs with course cards",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 32,
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 24,
                        paddingY: 48,
                        paddingX: 16
                    },
                    "@media (max-width: 1024px)": {
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 24,
                        paddingY: 64,
                        paddingX: 20
                    }
                },
                columns: [
                    // Program 1: Software Engineering
                    {
                        id: "program-1",
                        width: "calc(50% - 16px)",
                        props: {
                            marginBottom: 0,
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "program-1-card",
                                type: "AcademiqCourseCard",
                                props: {
                                    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
                                    imageAlt: "Software Engineering",
                                    badge: "Intermediate",
                                    title: "Software Engineering",
                                    titleColor: "#000000",
                                    description: "Master modern development from binary to blockchain. Includes React, Node.js, and system design fundamentals.",
                                    duration: "480 Hours",
                                    students: "4 Modules",
                                    buttonText: "Enroll Now",
                                    backgroundColor: "#FFFFFF",
                                    borderColor: "#E5E7EB",
                                    badgeColor: "#374151",
                                    badgeBgColor: "#F3F4F6"
                                }
                            }
                        ]
                    },
                    // Program 2: Cyber Security
                    {
                        id: "program-2",
                        width: "calc(50% - 16px)",
                        props: {
                            marginBottom: 0,
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "program-2-card",
                                type: "AcademiqCourseCard",
                                props: {
                                    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
                                    imageAlt: "Cyber Security Professional",
                                    badge: "Advanced",
                                    title: "Cyber Security Professional",
                                    titleColor: "#000000",
                                    description: "Protect critical digital assets. Deep dive into ethical hacking, network forensics, and security architecture.",
                                    duration: "320 Hours",
                                    students: "4 Modules",
                                    buttonText: "Enroll Now",
                                    backgroundColor: "#FFFFFF",
                                    borderColor: "#E5E7EB",
                                    badgeColor: "#374151",
                                    badgeBgColor: "#F3F4F6"
                                }
                            }
                        ]
                    },
                    // Program 3: Data Science & AI
                    {
                        id: "program-3",
                        width: "calc(50% - 16px)",
                        props: {
                            marginBottom: 0,
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "program-3-card",
                                type: "AcademiqCourseCard",
                                props: {
                                    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
                                    imageAlt: "Data Science & AI",
                                    badge: "Advanced",
                                    title: "Data Science & AI",
                                    titleColor: "#000000",
                                    description: "Transform raw data into actionable insights. Learn machine learning, deep learning, and AI deployment strategies.",
                                    duration: "400 Hours",
                                    students: "4 Modules",
                                    buttonText: "Enroll Now",
                                    backgroundColor: "#FFFFFF",
                                    borderColor: "#E5E7EB",
                                    badgeColor: "#374151",
                                    badgeBgColor: "#F3F4F6"
                                }
                            }
                        ]
                    },
                    // Program 4: UX/UI Design
                    {
                        id: "program-4",
                        width: "calc(50% - 16px)",
                        props: {
                            marginBottom: 0,
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "program-4-card",
                                type: "AcademiqCourseCard",
                                props: {
                                    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
                                    imageAlt: "UX/UI Design Essentials",
                                    badge: "Beginner",
                                    title: "UX/UI Design Essentials",
                                    titleColor: "#000000",
                                    description: "Create beautiful, intuitive digital experiences. Master Figma, design thinking, and user research methodologies.",
                                    duration: "280 Hours",
                                    students: "4 Modules",
                                    buttonText: "Enroll Now",
                                    backgroundColor: "#FFFFFF",
                                    borderColor: "#E5E7EB",
                                    badgeColor: "#374151",
                                    badgeBgColor: "#F3F4F6"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // FAQ SECTION
        // --------------------------------------------------------------------------
        {
            key: "tech-pathways-faq",
            name: "FAQ Section",
            description: "Frequently asked questions about programs",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                },
                columns: [{
                    id: "faq-content",
                    width: "100%",
                    props: {
                        maxWidth: "800px",
                        marginX: "auto"
                    },
                    elements: [
                        {
                            id: "faq-items",
                            type: "PricingFAQ",
                            props: {
                                faqs: [
                                    {
                                        question: "What is the course duration?",
                                        answer: "Each program ranges from 280-480 hours depending on the pathway. You can complete the course at your own pace."
                                    },
                                    {
                                        question: "Do I get a certificate upon completion?",
                                        answer: "Yes, you'll receive an industry-recognized certificate upon successfully completing all modules and assessments."
                                    },
                                    {
                                        question: "What if I need technical support?",
                                        answer: "Our support team is available 24/7 to help you with technical issues, course content questions, and learning guidance."
                                    },
                                    {
                                        question: "Can I access course materials offline?",
                                        answer: "Yes, all course materials can be downloaded for offline access. You'll have lifetime access to the course content."
                                    }
                                ],
                                backgroundColor: "#FFFFFF",
                                textColor: "#000000",
                                questionColor: "#000000",
                                answerColor: "#374151",
                                itemBgColor: "#F8F8F8"
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "tech-pathways-cta",
            name: "Call to Action Section",
            description: "Final CTA section to encourage enrollment",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 24
                },
                columns: [{
                    id: "cta-content",
                    width: "100%",
                    props: {
                        maxWidth: "800px",
                        marginX: "auto",
                        textAlign: "center"
                    },
                    elements: [
                        {
                            id: "cta-heading",
                            type: "Heading",
                            props: {
                                text: "Ready to Transform Your Career?",
                                tag: "h2",
                                color: "#000000",
                                size: "3xl",
                                fontWeight: "bold",
                                marginBottom: 24,
                                textAlign: "center"
                            }
                        },
                        {
                            id: "cta-desc",
                            type: "Paragraph",
                            props: {
                                text: "Join thousands of professionals who have advanced their skills with our comprehensive learning pathways.",
                                color: "#666666",
                                size: "lg",
                                lineHeight: 1.6,
                                marginBottom: 40,
                                textAlign: "center"
                            }
                        },
                        {
                            id: "cta-buttons",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Explore Programs",
                                primaryBg: "#328CE6",
                                primaryTextColor: "#000000",
                                secondaryText: "Schedule a Demo",
                                secondaryBg: "transparent",
                                secondaryBorder: "#328CE6",
                                secondaryTextColor: "#328CE6",
                                gap: "gap-4",
                                layout: "center",
                                primaryLink: "#programs",
                                secondaryLink: "#demo"
                            }
                        }
                    ]
                }]
            }
        },

    ],
};

module.exports = techPathways;
