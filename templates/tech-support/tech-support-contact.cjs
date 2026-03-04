/**
 * NexaSupport - Tech Support & Managed Services Template
 * Contact Page
 * Uses: ContactForm, ContactDetails, FAQ renderers
 */

const techSupportContact = {
    sections: [
        // ==================================================================
        // CONTACT HERO
        // ==================================================================
        {
            key: "ts-contact-hero",
            name: "Contact Hero",
            description: "Contact page hero with headline",
            structure: {
                id: "ts-contact-hero-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "ts-contact-hero-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20
                    },
                    elements: [
                        {
                            id: "ts-contact-badge",
                            type: "Badge",
                            props: {
                                text: "Get In Touch",
                                color: "#60F21D",
                                bgColor: "rgba(96, 242, 29, 0.1)",
                                showPing: true,
                                marginBottom: 8
                            }
                        },
                        {
                            id: "ts-contact-title",
                            type: "Headline",
                            props: {
                                text: "We're Here to [Help.](linear-gradient(90deg, #60F21D, #8100B8)",
                                tag: "h1",
                                align: "center",
                                color: "#000000",
                                fontWeight: "900",
                                fontSize: {
                                    mobile: "36px",
                                    tablet: "52px",
                                    desktop: "60px"
                                },
                                marginBottom: 16
                            }
                        },
                        {
                            id: "ts-contact-desc",
                            type: "Paragraph",
                            props: {
                                text: "Whether you need immediate support, want to discuss managed services, or have a question about our solutions — our team is ready to help.",
                                align: "center",
                                color: "#555555",
                                size: "lg",
                                maxWidth: "640px"
                            }
                        }
                    ]
                }]
            }
        },

        // ==================================================================
        // CONTACT FORM + DETAILS — Two column layout
        // ==================================================================
        {
            key: "ts-contact-main",
            name: "Contact Form & Details",
            description: "Contact form alongside contact details",
            structure: {
                id: "ts-contact-main-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#fafafa",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "row",
                    gap: 40,
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        paddingY: 40,
                        paddingX: 20,
                        gap: 32
                    }
                },
                columns: [
                    {
                        id: "ts-contact-form-col",
                        width: "60%",
                        props: {
                            flexDirection: "column",
                            "@media (max-width: 768px)": { width: "100%" }
                        },
                        elements: [{
                            id: "ts-contact-form",
                            type: "ContactForm",
                            props: {
                                title: "Submit a Support Request",
                                subtitle: "Fill out the form below and our team will respond within 30 minutes during business hours.",
                                fields: [
                                    { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
                                    { name: "email", label: "Work Email", type: "email", required: true, placeholder: "john@company.com" },
                                    { name: "company", label: "Company", type: "text", required: false, placeholder: "Acme Inc." },
                                    { name: "priority", label: "Priority", type: "select", options: ["Low", "Medium", "High", "Critical"] },
                                    { name: "message", label: "Describe Your Issue", type: "textarea", required: true, placeholder: "Please describe the issue you're experiencing..." }
                                ],
                                submitText: "Submit Ticket",
                                accentColor: "#60F21D",
                                backgroundColor: "#ffffff",
                                textColor: "#000000",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "ts-contact-details-col",
                        width: "40%",
                        props: {
                            flexDirection: "column",
                            "@media (max-width: 768px)": { width: "100%" }
                        },
                        elements: [{
                            id: "ts-contact-details",
                            type: "ContactDetails",
                            props: {
                                title: "Other Ways to Reach Us",
                                items: [
                                    {
                                        icon: "Phone",
                                        title: "24/7 Support Hotline",
                                        value: "+1 (800) 555-NEXA",
                                        description: "For critical issues requiring immediate attention"
                                    },
                                    {
                                        icon: "Mail",
                                        title: "Email Support",
                                        value: "support@nexasupport.com",
                                        description: "Average response time: 30 minutes"
                                    },
                                    {
                                        icon: "MessageCircle",
                                        title: "Live Chat",
                                        value: "Available 24/7",
                                        description: "Instant connection with L1 support engineers"
                                    },
                                    {
                                        icon: "MapPin",
                                        title: "Operations Center",
                                        value: "350 Fifth Ave, Suite 7200",
                                        description: "New York, NY 10118"
                                    }
                                ],
                                accentColor: "#60F21D",
                                backgroundColor: "#ffffff",
                                textColor: "#000000",
                                borderRadius: 16
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // QUICK FAQ — before contacting support
        // ==================================================================
        {
            key: "ts-contact-faq",
            name: "Quick Help FAQ",
            description: "Quick self-help FAQ before contacting support",
            structure: {
                id: "ts-contact-faq-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "ts-contact-faq-heading-col",
                        width: "100%",
                        props: { padding: 8, paddingBottom: 32, textAlign: "center" },
                        elements: [
                            {
                                id: "ts-contact-faq-label",
                                type: "Heading",
                                props: {
                                    text: "QUICK HELP",
                                    tag: "h6",
                                    color: "#8100B8",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    letterSpacing: 3,
                                    align: "center",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "ts-contact-faq-title",
                                type: "Headline",
                                props: {
                                    text: "Before You Submit a Ticket",
                                    tag: "h2",
                                    align: "center",
                                    color: "#000000",
                                    fontWeight: "900"
                                }
                            },
                            {
                                id: "ts-contact-faq-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "These common issues can often be resolved instantly — check here first.",
                                    align: "center",
                                    color: "#555555",
                                    size: "lg"
                                }
                            }
                        ]
                    },
                    {
                        id: "ts-contact-faq-col",
                        width: "100%",
                        props: { padding: 8 },
                        elements: [
                            {
                                id: "ts-contact-faq-1",
                                type: "FAQ",
                                props: {
                                    question: "I can't connect to the VPN — what should I try first?",
                                    answer: "First, check your internet connection. Then restart the VPN client, ensure your credentials are correct, and check if your subscription is active. If the issue persists, try connecting to a different VPN server. Our knowledge base has a detailed VPN troubleshooting guide.",
                                    accentColor: "#60F21D",
                                    textColor: "#000000",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "ts-contact-faq-2",
                                type: "FAQ",
                                props: {
                                    question: "My computer is running extremely slow — common fixes?",
                                    answer: "Try restarting your computer, closing unnecessary applications, checking for Windows/macOS updates, and running a quick antivirus scan. If the issue continues, check Task Manager (Windows) or Activity Monitor (Mac) for processes using excessive CPU or memory. Submit a ticket if these steps don't help.",
                                    accentColor: "#60F21D",
                                    textColor: "#000000",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "ts-contact-faq-3",
                                type: "FAQ",
                                props: {
                                    question: "How do I reset my password?",
                                    answer: "Visit the self-service password portal at passwords.nexasupport.com. You'll need your employee ID and the email address associated with your account. If you don't have access to your recovery email, contact our help desk for assisted password reset.",
                                    accentColor: "#60F21D",
                                    textColor: "#000000",
                                    marginBottom: 12
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = techSupportContact;
