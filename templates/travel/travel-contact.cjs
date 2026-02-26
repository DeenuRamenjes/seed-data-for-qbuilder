/**
 * Travel Template - Contact Page
 * Theme: Wanderlust, Adventure, Premium Travel
 */

const travelContact = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "travel-contact-hero",
            name: "Contact Hero Section",
            description: "Hero section with heading and description",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#1B4965",
                    fullWidth: true,
                    fontFamily: "Poppins",
                    paddingY: 80,
                    paddingX: 48,
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
                                    color: "#FF4D7C",
                                    letterSpacing: "wider",
                                    textTransform: "uppercase",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "hero-heading",
                                type: "Heading",
                                props: {
                                    text: "Let's Plan Your Dream Trip",
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
                                    text: "Whether you have questions about a destination, need help planning an itinerary, or want to book a tour — our team is here to help.",
                                    size: "lg",
                                    color: "rgba(255,255,255,0.85)",
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
            key: "travel-contact-main",
            name: "Contact Details and Form Section",
            description: "Two-column layout with contact information and form",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8fafc",
                    fullWidth: true,
                    fontFamily: "Poppins",
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
                                    supportPortalTitle: "Reach Our Travel Team",
                                    supportPortalDescription: "Our travel consultants are available to help you plan the perfect journey. Connect with us through your preferred channel.",
                                    supportPortalLink: "#",
                                    supportPortalLinkText: "Schedule a Call",
                                    offices: [
                                        {
                                            city: "New York (Headquarters)",
                                            address: "120 Broadway, Suite 1800\nNew York, NY 10005"
                                        },
                                        {
                                            city: "London",
                                            address: "45 Kensington High Street\nLondon W8 5BA, UK"
                                        },
                                        {
                                            city: "Bangkok",
                                            address: "388 Sukhumvit Road\nKlongtoey, Bangkok 10110"
                                        }
                                    ],
                                    contactLinks: [
                                        {
                                            icon: "mail",
                                            label: "Email",
                                            value: "hello@wanderlust.com",
                                            href: "mailto:hello@wanderlust.com"
                                        },
                                        {
                                            icon: "share",
                                            label: "Phone",
                                            value: "+1 (800) 555-TRIP",
                                            href: "tel:+18005558747"
                                        },
                                        {
                                            icon: "globe",
                                            label: "Website",
                                            value: "www.wanderlust.com",
                                            href: "https://www.wanderlust.com"
                                        }
                                    ],
                                    backgroundColor: "#ffffff",
                                    textColor: "#1B4965",
                                    primaryColor: "#FF4D7C",
                                    secondaryColor: "#FF4D7C",
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
                                    description: "Fill out the form below and one of our travel consultants will get back to you within 24 hours.",
                                    submitText: "Send Message",
                                    firstNameLabel: "Full Name",
                                    firstNamePlaceholder: "John Smith",
                                    lastNameLabel: "Email Address",
                                    lastNamePlaceholder: "john.smith@example.com",
                                    emailLabel: "Phone Number",
                                    emailPlaceholder: "+1 (555) 000-0000",
                                    subjectLabel: "Travel Interest",
                                    subjectOptions: "Custom Itinerary,Group Tour,Luxury Getaway,Adventure Trip,Honeymoon,Corporate Retreat,General Inquiry",
                                    messageLabel: "Tell Us About Your Dream Trip",
                                    messagePlaceholder: "Where do you want to go? When are you planning to travel? Any specific experiences you're looking for?",
                                    backgroundColor: "#ffffff",
                                    textColor: "#1B4965",
                                    primaryColor: "#FF4D7C",
                                    secondaryColor: "#FF4D7C",
                                    accentColor: "#FF4D7C",
                                    inputBackgroundColor: "#f8fafc",
                                    inputBorderColor: "#e2e8f0",
                                    inputTextColor: "#1B4965",
                                    inputPlaceholderColor: "#94a3b8"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = travelContact;
