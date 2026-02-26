/**
 * Design Studio Template - Contact Page
 * Theme: Blue/White creative studio aesthetic
 * Industry: Creative Agencies / Design Studios
 */

const designStudioContact = {
    sections: [
        // --------------------------------------------------------------------------
        // CONTACT FORM SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-contact-form-section",
            name: "Contact Form",
            description: "Vertical title with contact form and social links",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-contact-form-col",
                    width: "100%",
                    elements: [{
                        id: "ds-contact-form-element",
                        type: "DesignStudioContactForm",
                        props: {
                            title: "Let's Build",
                            titleHighlight: "Something.",
                            subtitle: "We partner with ambitious brands to create digital products that define categories.",
                            tagline: "— Tell us about your vision",
                            serviceOptions: ["Product Design", "Brand Identity", "Web Development", "Art Direction"],
                            buttonText: "Send Inquiry",
                            socialTitle: "Connect with us",
                            socialLinks: [
                                { label: "Instagram", href: "#" },
                                { label: "Behance", href: "#" },
                                { label: "LinkedIn", href: "#" }
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = designStudioContact;
