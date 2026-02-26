/**
 * Finance Template - Contact Page
 * Theme: Accessibility, Professionalism.
 */

const financeContact = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "finance-contact-hero",
            name: "Contact Hero Section",
            description: "Hero section with professional heading and description",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#009e89",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 48,
                    fontFamily: "Inter",
                    layout: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 24,
                    "@media (max-width: 768px)": {
                        paddingY: 60,
                        paddingX: 24,
                        gap: 16
                    }
                },
                columns: [
                    {
                        id: "hero-content",
                        width: "100%",
                        props: {
                            maxWidth: "800px",
                            textAlign: "center"
                        },
                        elements: [
                            {
                                id: "hero-badge",
                                type: "Paragraph",
                                props: {
                                    text: "GET IN TOUCH",
                                    size: "xs",
                                    weight: "bold",
                                    color: "#ffffff",
                                    letterSpacing: "wider",
                                    textTransform: "uppercase",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "hero-heading",
                                type: "Heading",
                                props: {
                                    text: "Let's Discuss Your Financial Future",
                                    tag: "h1",
                                    size: "5xl",
                                    fontWeight: "black",
                                    color: "#ffffff",
                                    align: "center",
                                    marginBottom: 16,
                                    "@media (max-width: 768px)": {
                                        size: "3xl"
                                    }
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Whether you're seeking wealth management, investment advice, or strategic financial planning, our team of experts is here to help. Schedule a consultation today.",
                                    size: "lg",
                                    color: "#ffffff",
                                    align: "center",
                                    maxWidth: "650px",
                                    marginX: "auto"
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
            key: "finance-contact-main",
            name: "Contact Details and Form Section",
            description: "Two-column layout with contact information and submission form",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8fafc",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 48,
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
                        paddingY: 60,
                        paddingX: 24
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
                                    supportPortalTitle: "Reach Our Team",
                                    supportPortalDescription: "We're committed to providing personalized financial guidance. Connect with us through your preferred channel.",
                                    supportPortalLink: "#",
                                    supportPortalLinkText: "Schedule a Consultation",
                                    offices: [
                                        {
                                            city: "New York (Headquarters)",
                                            address: "350 Park Avenue, Suite 2500\nNew York, NY 10022"
                                        },
                                        {
                                            city: "London",
                                            address: "1 Canada Square\nCanary Wharf, London E14 5AB"
                                        },
                                        {
                                            city: "Singapore",
                                            address: "8 Marina Boulevard\nMarina Bay Financial Centre, Singapore 018981"
                                        }
                                    ],
                                    contactLinks: [
                                        {
                                            icon: "mail",
                                            label: "Email",
                                            value: "wealth@finpro.com",
                                            href: "mailto:wealth@finpro.com"
                                        },
                                        {
                                            icon: "share",
                                            label: "Phone",
                                            value: "+1 (212) 555-0100",
                                            href: "tel:+12125550100"
                                        },
                                        {
                                            icon: "globe",
                                            label: "Website",
                                            value: "www.finpro.com",
                                            href: "https://www.finpro.com"
                                        }
                                    ],
                                    backgroundColor: "#ffffff",
                                    textColor: "#0f0f0f",
                                    primaryColor: "#009e89",
                                    secondaryColor: "#009e89",
                                    paddingY: "0",
                                    cardPadding: "32",
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
                                    badgeText: "Send Us a Message",
                                    title: "How Can We Help?",
                                    description: "Fill out the form below and one of our financial advisors will reach out within 24 hours.",
                                    submitText: "Submit Inquiry",
                                    firstNameLabel: "Full Name",
                                    firstNamePlaceholder: "Jane Smith",
                                    lastNameLabel: "Email Address",
                                    lastNamePlaceholder: "jane.smith@example.com",
                                    emailLabel: "Phone Number",
                                    emailPlaceholder: "+1 (555) 000-0000",
                                    subjectLabel: "Inquiry Type",
                                    subjectOptions: "Wealth Management,Investment Advisory,Retirement Planning,Estate Planning,Tax Strategy,General Inquiry",
                                    messageLabel: "Message",
                                    messagePlaceholder: "Tell us about your financial goals and how we can assist you...",
                                    backgroundColor: "#ffffff",
                                    textColor: "#0f0f0f",
                                    primaryColor: "#009e89",
                                    secondaryColor: "#009e89",
                                    accentColor: "#009e89",
                                    inputBackgroundColor: "#f8fafc",
                                    inputBorderColor: "#e2e8f0",
                                    inputTextColor: "#0f0f0f",
                                    inputPlaceholderColor: "#94a3b8"
                                }
                            }
                        ]
                    }
                ]
            }
        },
    ]
};

module.exports = financeContact;
