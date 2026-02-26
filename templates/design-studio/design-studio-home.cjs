/**
 * Design Studio Template - Home Page
 * Theme: Blue/White creative studio aesthetic
 * Industry: Creative Agencies / Design Studios
 * Color Scheme:
 *   - Primary: #1F6AE1 (Blue)
 *   - Background: #ffffff (White)
 *   - Text: #000000 (Black)
 *   - Gray: #f9fafb
 */

const designStudioHome = {
    // ============================================================================
    // HEADER - Global Header with Navigation
    // ============================================================================
    header: {
        key: "design-studio-header",
        type: "DesignStudioHeader",
        category: "header",
        name: "Design Studio Header",
        description: "Fixed header with logo, navigation, and CTA",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                backgroundColor: "#ffffff",
                paddingY: 0,
                paddingX: 0,
                fullWidth: true
            },
            columns: [{
                id: "design-header-col",
                width: "100%",
                elements: [{
                    id: "design-header-element",
                    type: "DesignStudioHeader",
                    props: {
                        logoType: "text",
                        logoText: "STUDIO.",
                        logoAccent: "",
                        primaryColor: "#1F6AE1",
                        links: [
                            { label: "Work", href: "#work" },
                            { label: "Services", href: "#services" },
                            { label: "About", href: "#about" },
                            { label: "Journal", href: "#journal" }
                        ],
                        ctaText: "Start a Project",
                        ctaLink: "#",
                        sticky: true,
                        glassmorphism: true
                    }
                }]
            }]
        }
    },

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-hero-section",
            name: "Design Studio Hero",
            description: "Full-screen hero with abstract shape",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "design-hero-col",
                    width: "100%",
                    elements: [{
                        id: "design-hero-element",
                        type: "DesignStudioHero",
                        props: {
                            badge: "Creative Excellence — Est. 2024",
                            title: "DESIGNING THE FUTURE OF",
                            titleHighlight: "DIGITAL",
                            description: "A full-service creative studio specializing in brand identity, UI/UX, and motion. We blend strategic thinking with uncompromising craft.",
                            primaryButtonText: "View Our Work",
                            primaryButtonLink: "#work",
                            secondaryButtonText: "Our Process",
                            secondaryButtonLink: "#process",
                            primaryColor: "#000000ff"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CAPABILITIES SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-capabilities-section",
            name: "Capabilities",
            description: "Grid of capability cards with hover effects",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "design-capabilities-col",
                    width: "100%",
                    elements: [{
                        id: "design-capabilities-element",
                        type: "DesignStudioCapabilities",
                        props: {
                            title: "Selected\nCapabilities",
                            subtitle: "We partner with forward-thinking brands to create digital ecosystems that define their category.",
                            capabilities: [
                                {
                                    number: "01",
                                    title: "Brand Identity",
                                    description: "Defining visual languages that resonate and endure across every touchpoint."
                                },
                                {
                                    number: "02",
                                    title: "UI/UX Design",
                                    description: "Crafting intuitive digital interfaces that prioritize the human experience."
                                },
                                {
                                    number: "03",
                                    title: "Motion Design",
                                    description: "Bringing static brands to life through fluid, meaningful animation."
                                }
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // MARQUEE SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-marquee-section",
            name: "Marquee",
            description: "Scrolling text marquee on dark background",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#000000",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "design-marquee-col",
                    width: "100%",
                    elements: [{
                        id: "design-marquee-element",
                        type: "DesignStudioMarquee",
                        props: {
                            items: [
                                "Creative Excellence",
                                "Digital Innovation",
                                "Brand Strategy",
                                "User Centered"
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // FEATURED PROJECT SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-featured-section",
            name: "Featured Project",
            description: "Two-column layout with image and project details",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "design-featured-col",
                    width: "100%",
                    elements: [{
                        id: "design-featured-element",
                        type: "DesignStudioFeaturedProject",
                        props: {
                            label: "Featured Project",
                            title: "THE CHRONOS PROJECT",
                            description: "A revolutionary approach to time management and productivity for the modern digital nomad.",
                            linkText: "Explore Project",
                            linkUrl: "#",
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE31ZjJg750eZ_TuymJ5T_of55cBteBvRRx1pnVOPN9A8_-vfU3DFi2dfMSzXrkKQAcf8y8RJcRUx18Eu5JMgEBC-0Z8cD0h-0ifWaqQcjIfri5u5zQt-42ytuVyUWahVoaQfr_MkrGsY1HHTDHbuvcBRxT1c7enxBiIaZ90vDVmLxRfVJnr2Ip3VIPcQekNqHgQpegp_A16Yob9P26pIVNWBZzNuVNr3XtjSJYeBveM-MQI6mBQnA3CwgN6m2JWcmEKVl3_jekCo",
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-cta-section",
            name: "Call to Action",
            description: "Large centered CTA section",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "design-cta-col",
                    width: "100%",
                    elements: [{
                        id: "design-cta-element",
                        type: "DesignStudioCTA",
                        props: {
                            title: "Let's Build The Future.",
                            subtitle: "Currently accepting new projects for Q3 2024",
                            buttonText: "Get In Touch",
                            buttonLink: "#contact",
                            primaryColor: "#000000ff"
                        }
                    }]
                }]
            }
        }
    ],

    // ============================================================================
    // FOOTER - Global Footer
    // ============================================================================
    footer: {
        key: "design-studio-footer",
        type: "DesignStudioFooter",
        category: "footer",
        name: "Design Studio Footer",
        description: "Dark footer with logo, navigation, newsletter, and social links",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#000000",
                paddingY: 66,
                paddingX: 64,
                fullWidth: true
            },
            columns: [{
                id: "design-footer-col",
                width: "100%",
                elements: [{
                    id: "design-footer-element",
                    type: "DesignStudioFooter",
                    props: {
                        logoText: "Studio.",
                        tagline: "We are a globally distributed team of designers and strategists dedicated to creative excellence.",
                        socialLinks: [
                            { label: "TW", href: "#" },
                            { label: "IG", href: "#" },
                            { label: "LI", href: "#" }
                        ],
                        sections: [
                            {
                                title: "Navigation",
                                links: [
                                    { label: "Work", href: "#work" },
                                    { label: "Studio", href: "#studio" },
                                    { label: "Services", href: "#services" },
                                    { label: "Journal", href: "#journal" },
                                    { label: "Contact", href: "#contact" }
                                ]
                            }
                        ],
                        contactTitle: "New Business",
                        contactEmail: "hello@studio-excellence.com",
                        contactPhone: "+1 (555) 000-CRE8",
                        newsletterTitle: "Newsletter",
                        newsletterPlaceholder: "Email Address",
                        copyright: "© 2024 Studio Creative Excellence. All rights reserved.",
                        legalLinks: [
                            { label: "Privacy Policy", href: "#" },
                            { label: "Terms of Service", href: "#" }
                        ],
                        primaryColor: "#1F6AE1"
                    }
                }]
            }]
        }
    }
};

module.exports = designStudioHome;
