/**
 * Tech Company Contact Page Template
 * Theme: Modern Tech/IT Solutions - Contact & Support
 * Primary Color: #328CE6 (Blue)
 * Dark Mode: Supported
 * Fonts: Plus Jakarta Sans
 */

const techContact = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION - LET'S CONNECT
        // --------------------------------------------------------------------------
        {
            key: "contact-hero",
            name: "Contact Hero Section",
            description: "Hero section with contact heading and description",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 60,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 24,
                    "@media (max-width: 768px)": {
                        paddingY: 40,
                        gap: 16
                    }
                },
                columns: [
                    {
                        id: "hero-content",
                        width: "100%",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "hero-heading",
                                type: "Heading",
                                props: {
                                    text: "Let's Connect",
                                    level: "h1",
                                    size: "5xl",
                                    weight: "semibold",
                                    color: "#1F2937",
                                    tracking: "tight"
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Have a project in mind or just want to say hi? We'd love to hear from you. Our team typically responds within 24 hours.",
                                    size: "lg",
                                    color: "#6B7280",
                                    marginTop: 16,
                                    maxWidth: "600px"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CONTACT DETAILS & FORM SECTION
        // --------------------------------------------------------------------------
        {
            key: "contact-main",
            name: "Contact Details and Form Section",
            description: "Two-column layout with contact details and submission form",
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
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 80,
                    "@media (max-width: 1024px)": {
                        gap: 60
                    },
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 40,
                        paddingY: 40
                    }
                },
                columns: [
                    // Left Column - Contact Details
                    {
                        id: "contact-details-col",
                        width: "calc(40% - 40px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "contact-details",
                                type: "ContactDetails",
                                props: {
                                    supportPortalTitle: "Get in Touch",
                                    supportPortalDescription: "Have questions? Reach out to our team directly.",
                                    supportPortalLink: "#",
                                    supportPortalLinkText: "Start a Conversation",
                                    offices: [
                                        {
                                            city: "San Francisco",
                                            address: "123 Innovation Drive, Tech Valley\nSan Francisco, CA 94105"
                                        }
                                    ],
                                    contactLinks: [
                                        {
                                            icon: "mail",
                                            label: "Email Us",
                                            value: "hello@tech-it.com",
                                            href: "mailto:hello@tech-it.com"
                                        },
                                        {
                                            icon: "share",
                                            label: "Call Us",
                                            value: "+1 (555) 000-0000",
                                            href: "tel:+1555000000"
                                        },
                                        {
                                            icon: "globe",
                                            label: "Visit Us",
                                            value: "tech-it.com",
                                            href: "https://tech-it.com"
                                        }
                                    ],
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    primaryColor: "#328CE6",
                                    secondaryColor: "#328CE6",
                                    paddingY: "0",
                                    cardPadding: "24",
                                    cardRadius: "16"
                                }
                            }
                        ]
                    },
                    // Right Column - Contact Form
                    {
                        id: "contact-form-col",
                        width: "calc(60% - 40px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "contact-form",
                                type: "ContactForm",
                                props: {
                                    badgeText: "Contact Form",
                                    title: "Send us a Message",
                                    description: "Fill out the form below and we'll get back to you as soon as possible.",
                                    submitText: "Send Message",
                                    firstNameLabel: "Full Name",
                                    firstNamePlaceholder: "John Doe",
                                    lastNameLabel: "Email Address",
                                    lastNamePlaceholder: "john@example.com",
                                    emailLabel: "Subject",
                                    emailPlaceholder: "How can we help?",
                                    subjectLabel: "Subject",
                                    subjectOptions: "General Inquiry,Project Proposal,Technical Support,Career Opportunity",
                                    messageLabel: "Message",
                                    messagePlaceholder: "Tell us about your project...",
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
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = techContact;
