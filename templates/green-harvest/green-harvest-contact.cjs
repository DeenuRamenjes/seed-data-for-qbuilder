/**
 * GreenHarvest Contact Page
 * Theme: Professional Agriculture / Agri-Tech / Export
 * Components: ContactForm, ContactDetails
 */

const greenHarvestContact = {
    sections: [
        // ================================================================
        // HERO SECTION (Simple Header)
        // ================================================================
        {
            key: "contact-hero-section",
            name: "Contact Hero",
            structure: {
                id: "contact-hero",
                type: "Hero",
                props: {
                    paddingY: 80,
                    paddingX: 40,
                    backgroundColor: "#102216",
                    fullWidth: true,
                    backgroundImage: "linear-gradient(180deg, rgba(16, 34, 22, 0.9) 0%, rgba(16, 34, 22, 0.95) 100%), url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                columns: [
                    {
                        id: "hero-col-main",
                        width: "100%",
                        elements: [
                            {
                                id: "hero-badge",
                                type: "Badge",
                                props: {
                                    text: "Get in Touch",
                                    backgroundColor: "rgba(22, 163, 74, 0.2)",
                                    color: "#16a34a",
                                    showPing: false
                                }
                            },
                            {
                                id: "hero-headline",
                                type: "Headline",
                                props: {
                                    text: "Partner with GreenHarvest",
                                    tag: "h1",
                                    color: "#ffffff",
                                    align: "left",
                                    fontWeight: "black",
                                    fontSize: "3.5rem"
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Whether you're a grower, distributor, or investor, our global network is ready to scale your agricultural operations.",
                                    color: "#cbd5e1",
                                    size: "lg",
                                    align: "left",
                                    maxWidth: "600px"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ================================================================
        // CONTACT FORM SECTION
        // ================================================================
        {
            key: "contact-form-section",
            name: "Contact Form",
            structure: {
                id: "contact-form-section",
                type: "Section",
                props: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "contact-form-col",
                    width: "100%",
                    elements: [{
                        id: "contact-form-element",
                        type: "ContactForm",
                        props: {
                            badgeText: "24/7 Support",
                            title: "Let's Start a Conversation.",
                            description: "Fill out the form below for inquiries about export logistics, supply chain integration, or sustainability audits.",
                            submitText: "Send Request",
                            backgroundColor: "#ffffff",
                            textColor: "#101912",
                            primaryColor: "#16a34a",
                            secondaryColor: "#15803d",
                            accentColor: "#22c55e",
                            inputBackgroundColor: "#ffffff",
                            inputBorderColor: "#e2e8f0",
                            inputTextColor: "#101912",
                            inputPlaceholderColor: "#64748b"
                        }
                    }]
                }]
            }
        },

        // ================================================================
        // CONTACT DETAILS SECTION
        // ================================================================
        {
            key: "contact-details-section",
            name: "Contact Details",
            structure: {
                id: "contact-details-section",
                type: "Section",
                props: {
                    backgroundColor: "#f8fafc",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "contact-details-col",
                    width: "100%",
                    elements: [{
                        id: "contact-details-element",
                        type: "ContactDetails",
                        props: {
                            supportPortalTitle: "Grower Support Portal",
                            supportPortalDescription: "Existing partners can log in to track shipments, view harvest reports, and manage certifications.",
                            supportPortalLink: "#portal",
                            supportPortalLinkText: "Access Partner Hub",
                            offices: [
                                {
                                    city: "Global Headquarters",
                                    address: "4500 AgriTech Blvd, Suite 200\nSao Paulo, Brazil"
                                },
                                {
                                    city: "European Operations",
                                    address: "Rotterdam Port Logistics Center\n3011 WN Rotterdam, Netherlands"
                                }
                            ],
                            contactLinks: [
                                {
                                    icon: "mail",
                                    label: "Exports",
                                    value: "exports@greenharvest.com",
                                    href: "mailto:exports@greenharvest.com"
                                },
                                {
                                    icon: "mail",
                                    label: "Support",
                                    value: "support@greenharvest.com",
                                    href: "mailto:support@greenharvest.com"
                                },
                                {
                                    icon: "globe",
                                    label: "LinkedIn",
                                    value: "GreenHarvest Global",
                                    href: "#"
                                }
                            ],
                            trustedByText: "Trusted by Global Retailers",
                            companies: [
                                { name: "WHOLEFOODS" },
                                { name: "CARREFOUR" },
                                { name: "TESCO" }
                            ],
                            backgroundColor: "#f8fafc",
                            textColor: "#101912",
                            primaryColor: "#16a34a",
                            secondaryColor: "#15803d"
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = { greenHarvestContact };
