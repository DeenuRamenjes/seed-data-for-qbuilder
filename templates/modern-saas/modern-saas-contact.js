export const modernSaaSContact = {
    id: "modern-saas-contact",
    type: "Page",
    title: "Contact",
    description: "Contact and support page for Modern SaaS",
    structure: {
        blocks: [
            {
                id: "contact-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#06080C",
                    paddingY: 80,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "contact-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        paddingY: 40,
                        paddingX: 60
                    },
                    elements: [
                        {
                            id: "contact-form-element",
                            type: "ContactForm",
                            props: {
                                badgeText: "Support Center",
                                title: "Get in touch.",
                                description: "Have questions? Our team of experts is here to help you scale your infrastructure.",
                                submitText: "Send Message",
                                backgroundColor: "#06080C",
                                textColor: "#FFFFFF",
                                primaryColor: "#3B82F6",
                                secondaryColor: "#A855F7",
                                accentColor: "#06B6D4"
                            }
                        },
                        {
                            id: "contact-details-element",
                            type: "ContactDetails",
                            props: {
                                supportPortalTitle: "Support Portal",
                                supportPortalDescription: "Already a customer? Create a support ticket directly through our enterprise portal for priority response.",
                                supportPortalLink: "#",
                                supportPortalLinkText: "Open Ticket Portal",
                                offices: [
                                    {
                                        city: "San Francisco",
                                        address: "100 Market St, Suite 300\nSan Francisco, CA 94105"
                                    },
                                    {
                                        city: "London",
                                        address: "20-22 Wenlock Road\nLondon, N1 7GU, UK"
                                    }
                                ],
                                contactLinks: [
                                    {
                                        icon: "mail",
                                        label: "Email",
                                        value: "hello@vibrant.io",
                                        href: "mailto:hello@vibrant.io"
                                    },
                                    {
                                        icon: "share",
                                        label: "Social",
                                        value: "@vibrant_tech",
                                        href: "#"
                                    },
                                    {
                                        icon: "globe",
                                        label: "LinkedIn",
                                        value: "LinkedIn",
                                        href: "#"
                                    }
                                ],
                                trustedByText: "Trusted by industry leaders",
                                companies: [
                                    { name: "TECHFLOW" },
                                    { name: "CLOUDCORE" },
                                    { name: "DATASTRAT" }
                                ],
                                backgroundColor: "#06080C",
                                textColor: "#FFFFFF",
                                primaryColor: "#3B82F6"
                            }
                        }
                    ]
                }]
            }
        ]
    }
};
