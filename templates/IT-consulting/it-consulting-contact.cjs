/**
 * IT Consulting Template - Contact Page
 * Sections: Hero w/ overlay, Contact Form + Details, Office Locations, FAQ
 */

const itConsultingContact = {
    sections: [
        // ==================================================================
        // HERO - Image background with gradient overlay
        // ==================================================================
        {
            key: "it-contact-hero",
            structure: {
                id: "it-contact-hero-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#0559b3",
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf5T4cPqjEuB5kBbyo3yL9uJJy7ytzPtxl6eYJHzAViZXG7ypqyjBKFkrNwB0JL6FijHfvBwrlSO7Cv_IEJGcWcWXD1lR58kvQOo12ulpwKt_kRxkzopEML0uRHtazxSnsDDuGBbyx2Td03waHAfkKlYDbWOPscyVfLFstk1UhSaYi3ahtYBnk8TmPy7MuBW8pru9qsmzvGtnPmYRJ3WjZm4a4WY_KsuPDXvOTNw1VTnOLwPxWq28IAUD-9CAPgVAVsB8cYZ7pqTM",
                    backgroundOverlay: "rgba(5, 89, 179, 0.75)",
                    paddingY: 100,
                    paddingX: 48,
                    fullWidth: true,
                    minHeight: 400,
                },
                columns: [{
                    id: "it-contact-hero-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20
                    },
                    elements: [
                        {
                            id: "it-contact-hero-badge",
                            type: "Badge",
                            props: {
                                text: "Connect with us",
                                color: "#05B3AA",
                                align: "center",
                                textAlign: "center",
                                marginBottom: 20,
                                bgColor: "rgba(5, 179, 170, 0.2)",
                                showPing: false
                            }
                        },
                        {
                            id: "it-contact-hero-title",
                            type: "Headline",
                            props: {
                                text: "Get in Touch",
                                tag: "h1",
                                align: "center",
                                color: "#ffffff",
                                marginBottom: 10,
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-contact-hero-desc",
                            type: "Paragraph",
                            props: {
                                text: "Partner with our expert IT consultants to accelerate your digital transformation and drive business growth through innovative technology solutions.",
                                align: "center",
                                color: "rgba(255,255,255,0.9)",
                                size: "lg"
                            }
                        }
                    ]
                }]
            }
        },

        // ==================================================================
        // CONTACT FORM + DETAILS - Two column layout
        // ==================================================================
        {
            key: "it-contact-form-section",
            structure: {
                id: "it-contact-form-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "it-contact-form-col",
                        width: "50%",
                        props: {
                            padding: 10
                        },
                        elements: [{
                            id: "it-contact-form",
                            type: "ContactForm",
                            props: {
                                formTitle: "Send Us a Message",
                                submitButtonText: "Send Message",
                                submitButtonColor: "#0559b3",
                                fields: [
                                    { name: "firstName", label: "First Name", type: "text", placeholder: "John", halfWidth: true },
                                    { name: "lastName", label: "Last Name", type: "text", placeholder: "Doe", halfWidth: true },
                                    { name: "email", label: "Work Email", type: "email", placeholder: "john.doe@company.com" },
                                    { name: "subject", label: "Subject", type: "select", options: ["IT Strategy Consulting", "Cloud Migration", "Cybersecurity Services", "General Inquiry"] },
                                    { name: "message", label: "Message", type: "textarea", placeholder: "How can we help you?", rows: 4 }
                                ]
                            }
                        }]
                    },
                    {
                        id: "it-contact-details-col",
                        width: "50%",
                        props: {
                            padding: 10
                        },
                        elements: [{
                            id: "it-contact-details",
                            type: "ContactDetails",
                            props: {
                                title: "Direct Contact",
                                description: "Prefer a direct line? Reach out to our specialized departments for immediate assistance.",
                                contacts: [
                                    {
                                        icon: "Mail",
                                        title: "Email Us",
                                        value: "solutions@techconsult.com",
                                        note: "Response within 24 hours",
                                        color: "#0559b3"
                                    },
                                    {
                                        icon: "Phone",
                                        title: "Call Us",
                                        value: "+44 (0) 20 7946 0123",
                                        note: "Mon-Fri: 9am - 6pm",
                                        color: "#05B3AA"
                                    },
                                    {
                                        icon: "MessageSquare",
                                        title: "Live Chat",
                                        value: "Available on our client portal",
                                        note: "Instant support",
                                        color: "#0559b3"
                                    }
                                ]
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // OFFICE LOCATIONS - 2 cards with images
        // ==================================================================
        {
            key: "it-contact-offices-header",
            structure: {
                id: "it-contact-offices-header",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#f8fafc",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-offices-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 16
                    },
                    elements: [
                        {
                            id: "it-offices-title",
                            type: "Headline",
                            props: {
                                text: "Global Presence",
                                tag: "h2",
                                align: "center",
                                color: "#0f172a",
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-offices-divider",
                            type: "Divider",
                            props: {
                                color: "#05B3AA",
                                width: "80px",
                                height: "6px",
                                borderRadius: "full"
                            }
                        }
                    ]
                }]
            }
        },
        {
            key: "it-contact-offices-cards",
            structure: {
                id: "it-contact-offices-cards",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#f8fafc",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "it-office-col-1",
                        width: "50%",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-office-london",
                            type: "FeatureCard",
                            props: {
                                title: "London HQ",
                                description: "1 Canada Square, Canary Wharf, London E14 5AB, United Kingdom",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvAYRkhwK2oEGuO4wPdxBmzLGXY8AT8H0z9oCabvBoNPkFISkHJLoevH0GYNU1pdM7BJlVbEGuBRRVQfrWChbR7og2Y_BG0UUwJTI17NvorElJSfxHUniPWuh8mcFB6XYie7VnixPrDFr__h46Bb0Tvk-z503JTqrFDw3cFnZXwOTd9jI0hNZ5z3O0jBj4t3rM8XijheYZhXIXrsE7BIAmQguN_Rx-LlgNitgHZgVd2A5YZNF6DN_h1pUVSh56Aj-NnpWB1QSvJi8",
                                imageAspectRatio: "16/9",
                                titleColor: "#0f172a",
                                descriptionColor: "#475569",
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                                padding: "16px",
                                textAlign: "left",
                                titleSize: "xl",
                                fontFamily: "Manrope"
                            }
                        }]
                    },
                    {
                        id: "it-office-col-2",
                        width: "50%",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-office-newyork",
                            type: "FeatureCard",
                            props: {
                                title: "New York Office",
                                description: "250 Greenwich Street, 7WTC, New York, NY 10007, USA",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdf4v6P7ud81AncpULvRfudteucUDNgsu54nfcPtBFSBRnD-IppX2SGUJMynQwB3sEU8nOIAO4A6MIJNFYxZAqQ8mAZpCX4TjHaQNPeRRcyoFdvrz20NEMuF7fXHqDYAe7n9FA8-dOz-FDEXC6Wi2PcrOHcAbGUBqGbXwVTezdGU-TA3YeR2exY40do3zkIzdZZ1qVlA9Eba47ZlANgTrOoLevtJndQpsv1FAFyyTa-fCpAXcPvF3dQCvLL3zLKr6BBsAxTrx2RR4",
                                imageAspectRatio: "16/9",
                                titleColor: "#0f172a",
                                descriptionColor: "#475569",
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                                padding: "16px",
                                textAlign: "left",
                                titleSize: "xl",
                                fontFamily: "Manrope"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // FAQ - Frequently Asked Questions
        // ==================================================================
        {
            key: "it-contact-faq",
            structure: {
                id: "it-contact-faq-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-faq-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 32
                    },
                    elements: [
                        {
                            id: "it-faq-title",
                            type: "Headline",
                            props: {
                                text: "Frequently Asked Questions",
                                tag: "h2",
                                align: "center",
                                color: "#0f172a",
                                marginBottom: 30,
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-faq-1",
                            type: "FAQ",
                            props: {
                                marginBottom: 20,
                                question: "What is the typical onboarding process?",
                                answer: "Our onboarding begins with a comprehensive technology audit, followed by a strategic roadmap presentation. Once approved, we move into phased implementation within 2-4 weeks.",
                                accentColor: "#0559b3"
                            }
                        },
                        {
                            id: "it-faq-2",
                            type: "FAQ",
                            props: {
                                marginBottom: 20,
                                question: "Do you provide 24/7 technical support?",
                                answer: "Yes, we offer premium support packages that include round-the-clock monitoring and emergency incident response across all time zones.",
                                accentColor: "#0559b3"
                            }
                        },
                        {
                            id: "it-faq-3",
                            type: "FAQ",
                            props: {
                                marginBottom: 20,
                                question: "How do you handle data security during consulting?",
                                answer: "We adhere to SOC2 and GDPR standards. All consultants undergo rigorous background checks and all project data is encrypted and handled via secure corporate protocols.",
                                accentColor: "#0559b3"
                            }
                        }
                    ]
                }]
            }
        }
    ]
};

module.exports = itConsultingContact;
