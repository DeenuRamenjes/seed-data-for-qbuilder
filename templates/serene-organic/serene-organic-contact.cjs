const sereneOrganicContact = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO
        // --------------------------------------------------------------------------
        {
            key: "serene-organic-contact-hero",
            name: "Contact Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: 100,
                    paddingX: 24,
                    backgroundColor: "#f3f8f2", // Soft clinical green
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 24
                },
                columns: [
                    {
                        id: "hero-content",
                        width: "100%",
                        elements: [
                            {
                                type: "Badge",
                                props: {
                                    text: "CLINICAL COMMUNICATION",
                                    variant: "outline",
                                    color: "#50652e",
                                    backgroundColor: "rgba(80, 101, 46, 0.05)",
                                    marginBottom: 16
                                }
                            },
                            {
                                type: "Heading",
                                props: {
                                    text: "Contact Our Clinical Data Team",
                                    tag: "h1",
                                    size: "6xl",
                                    fontWeight: "800",
                                    color: "#50652e",
                                    marginBottom: 24,
                                    maxWidth: "800px"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Seamless integration of laboratory results and personalized biomarker analysis. Reach out for clinical inquiries or partnership coordination.",
                                    size: "lg",
                                    color: "rgba(80, 101, 46, 0.7)",
                                    maxWidth: "600px"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        {
            key: "serene-organic-contact-form-section",
            name: "Contact Inquiry",
            structure: {
                type: "TechNovaContactForm",
                props: {
                    backgroundColor: "#ffffff",
                    paddingY: 40,
                    paddingX: 24,
                    leftTitle: "Clinical",
                    leftTitleHighlight: "Communication",
                    leftDescription: "Access our precision laboratory logistics and clinical review services. Our strategists are available for specimen synchronization and partnership studies.",
                    leftBgColor: "#f3f8f2",
                    leftTextColor: "#50652e",
                    leftSubtextColor: "rgba(80, 101, 46, 0.7)",
                    primaryColor: "#7bb16b",
                    accentColor: "#934732",
                    borderColor: "#e5e7eb",
                    leftCards: [
                        {
                            icon: "Microscope",
                            title: "Laboratory Access",
                            description: "447 Precision Way, Suite 100\nWillow Valley, CA 94105\n+1 (555) VITAL-DATA"
                        },
                        {
                            icon: "Calendar",
                            title: "Clinical Review",
                            description: "Book a 30-minute biomarker synchronization review with our lead clinical strategist."
                        }
                    ],
                    formTitle: "Submit Formal Inquiry",
                    formDescription: "Fill out the form below for laboratory results or partnership inquiries.",
                    nameLabel: "FULL NAME",
                    namePlaceholder: "Dr. Julian Vane",
                    emailLabel: "INSTITUTIONAL EMAIL",
                    emailPlaceholder: "clinical@serenemedicality.com",
                    messageLabel: "CLINICAL CONTEXT / BIOMARKER DATA",
                    messagePlaceholder: "Briefly describe the clinical context or specific biomarker data points for review...",
                    submitButtonText: "Start Review Process"
                }
            }
        }
    ]
};

module.exports = sereneOrganicContact;
