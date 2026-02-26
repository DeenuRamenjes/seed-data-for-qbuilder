
export const businessContact = {
    header: {
        key: "business-header-contact",
        type: "Header",
        category: "header",
        name: "Elite Contact Header",
        structure: {
            type: "Header",
            defaultProps: { sticky: true, backgroundColor: "var(--theme-background)" },
            columns: [{
                id: "col-header",
                width: "100%",
                elements: [{
                    type: "Navbar",
                    props: {
                        logoText: "Elite",
                        logoAccent: ".",
                        logoTextColor: "var(--theme-text)",
                        accentColor: "#009DFF",
                        buttonText: "Get Quote",
                        buttonBgColor: "#aeff00",
                        buttonTextColor: "var(--theme-text)"
                    }
                }]
            }]
        }
    },
    sections: [
        {
            key: "contact-form-section",
            name: "Contact Form Section",
            structure: {
                type: "Section",
                defaultProps: { paddingY: 0, paddingX: 0, fullWidth: true },
                columns: [{
                    id: "contact-col",
                    width: "100%",
                    elements: [{
                        type: "TechNovaContactForm",
                        props: {
                            // Left Side (Visual & Info)
                            leftTitle: "Expert Repairs. Done Right.",
                            leftTitleHighlight: "Done Right.",
                            leftDescription: "Elite Handyman Services brings surgical precision to your home improvement projects. We don't just fix; we enhance.",
                            leftBgColor: "var(--theme-background)",
                            leftTextColor: "var(--theme-background)",
                            leftSubtextColor: "rgba(255,255,255,0.7)",
                            cardBgColor: "rgba(255,255,255,0.05)",
                            cardBorderColor: "rgba(255,255,255,0.1)",
                            
                            leftCards: [
                                { icon: "call", title: "Call Anytime", description: "800-ELITE-FIX" },
                                { icon: "mail", title: "Email Us", description: "hello@elite.pro" }
                            ],
                            
                            // Right Side (Form)
                            formBgColor: "var(--theme-background)",
                            formTitle: "Book Your Service",
                            formDescription: "Tell us about your project and get an instant callback.",
                            primaryColor: "#aeff00",
                            textColor: "var(--theme-text)",
                            borderColor: "var(--theme-border)",
                            nameLabel: "Full Name",
                            emailLabel: "Service Required", // Adapting generic form props
                            messageLabel: "Description of Work",
                            submitButtonText: "Book Service Now"
                        }
                    }]
                }]
            }
        },
        {
            key: "contact-map",
            name: "Service Map",
            structure: {
                type: "Section",
                defaultProps: { height: "400px", paddingY: 0, paddingX: 0, backgroundColor: "var(--theme-border)" },
                columns: [{
                    id: "map-col",
                    width: "100%",
                    props: { alignItems: "center", justifyContent: "center", height: "400px", position: "relative" },
                    elements: [
                        { type: "Box", props: { position: "absolute", bottom: "32px", backgroundColor: "var(--theme-background)", padding: 24, borderRadius: 12, flexDirection: "row", gap: 32 }, elements: [
                            { type: "Box", props: { flexDirection: "column" }, elements: [
                                { type: "Headline", props: { text: "Service Radius", tag: "h6", color: "#aeff00", fontSize: "12" } },
                                { type: "Headline", props: { text: "50 Miles", tag: "h4", color: "var(--theme-background)" } }
                            ]},
                            { type: "Box", props: { flexDirection: "column" }, elements: [
                                { type: "Headline", props: { text: "Avg. Response", tag: "h6", color: "#aeff00", fontSize: "12" } },
                                { type: "Headline", props: { text: "2 Hours", tag: "h4", color: "var(--theme-background)" } }
                            ]}
                        ]}
                    ]
                }]
            }
        }
    ],
    footer: {
        key: "business-footer-contact",
        type: "Footer",
        category: "footer",
        name: "Elite Footer",
        structure: {
            type: "Footer",
            defaultProps: { backgroundColor: "var(--theme-background)", paddingY: 48, textColor: "var(--theme-text)" },
            columns: [{
                id: "footer-col",
                width: "100%",
                elements: [{
                    type: "MinimalFooter",
                    props: {
                        brandName: "Elite.",
                        badgeText: "Contact",
                        badgeColor: "#aeff00",
                        links: [],
                        copyright: "© 2024 Elite Handyman Services.",
                        backgroundColor: "var(--theme-background)",
                        textColor: "rgba(255, 255, 255, 0.4)"
                    }
                }]
            }]
        }
    }
};
