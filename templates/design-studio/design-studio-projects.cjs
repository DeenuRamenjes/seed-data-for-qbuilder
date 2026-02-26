/**
 * Design Studio Template - Projects (Portfolio) Page
 * Theme: Blue/White creative studio aesthetic
 * Industry: Creative Agencies / Design Studios
 */

const designStudioProjects = {
    sections: [
        // --------------------------------------------------------------------------
        // PROJECTS HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-projects-hero-section",
            name: "Projects Hero",
            description: "Large typographic header section",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-projects-hero-col",
                    width: "100%",
                    elements: [{
                        id: "ds-projects-hero-element",
                        type: "DesignStudioProjectsHero",
                        props: {
                            label: "Index — 2024",
                            title: "Featured\nProjects",
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PROJECTS FILTER SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-projects-filter-section",
            name: "Projects Filter",
            description: "Sticky category filter bar",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-projects-filter-col",
                    width: "100%",
                    elements: [{
                        id: "ds-projects-filter-element",
                        type: "DesignStudioProjectsFilter",
                        props: {
                            categories: ["All Works", "Branding", "Digital", "Motion", "Editorial"],
                            countLabel: "Showing 12 Selected Cases",
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PROJECTS GRID SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-projects-grid-section",
            name: "Projects Grid",
            description: "2-column grid with project thumbnails",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-projects-grid-col",
                    width: "100%",
                    elements: [{
                        id: "ds-projects-grid-element",
                        type: "DesignStudioProjectsGrid",
                        props: {
                            projects: [
                                {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE31ZjJg750eZ_TuymJ5T_of55cBteBvRRx1pnVOPN9A8_-vfU3DFi2dfMSzXrkKQAcf8y8RJcRUx18Eu5JMgEBC-0Z8cD0h-0ifWaqQcjIfri5u5zQt-42ytuVyUWahVoaQfr_MkrGsY1HHTDHbuvcBRxT1c7enxBiIaZ90vDVmLxRfVJnr2Ip3VIPcQekNqHgQpegp_A16Yob9P26pIVNWBZzNuVNr3XtjSJYeBveM-MQI6mBQnA3CwgN6m2JWcmEKVl3_jekCo",
                                    category: "Branding",
                                    title: "Velvet Medical",
                                    description: "Identity design for a next-generation healthcare provider focusing on minimalist aesthetics."
                                },
                                {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPd5lFTU9jLhlrK9sQw_H5TzuYq97awf4MoFl-nLw4vjuQgLlMTCycw17y1kVsmRud-bi8ef5mqY5likla5TYcyp8S-WN2XlGrT0QxuTkeRhYLkzN5Eq67b_vweNYDT-E6aPScxh-ogrzea0ECMgrkvErM4coFlsrxB_sTtA2v7C_eebd1lrUSDh9_629fQbr3_jBeVAYQBcQXMVrcQd7wIzsSFjveDUXRg7Zo9qV8qrZOqptBzP3COFWjq7w-BuEQYlO9Q2q76k",
                                    category: "Digital",
                                    title: "Nexus Interface",
                                    description: "Web application architecture and UI design for a global logistics platform."
                                },
                                {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVzw4puP9aUbkyIhUI0dQb7ckh4SPqX-TEsMqm9TUxuA8yOZ6Z4oCSXJRlt5u3oJczx-tsekmZRLNkXgGvSFek8Mup9aT1rm_lCrZ-qRx1906E977Jvr7MGILN2sc3CfM8FSasSJcXtC2gNWwq4RFT2J3V05JTEvqO4guJ4xyW1wG55AKIaqltdwzOUCj2Uvk3zFKCeWYXy7zJth_kYugW8-m69ryjf_mcpd4Jxqm2LsH3TLSicNcYe-eMK-Sh7rgPYDn3e_9r0dM",
                                    category: "Motion",
                                    title: "Kinetic Type",
                                    description: "Experimental motion graphics for an international design biennial."
                                },
                                {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFVBHFoDxrUSSNg1gmXHNxSurfLtY1XUIRQUbI_tpNppu_woVG7ywlUVv6fz4WVLsoBPAxdYbej--id7btHXBVfKigo2EQp8Dj6t6vbkd154XTD7Vmh0TTwrEWJjMNtdg4AB8ZVrX5DJJdJRP90rlD4HFQ6Jyp8OEQ8wWUEFiSS9uKMJjd4QnzWxmn9BUa_EBMTHwUlCpuDjLBNXF5WXj9xjacLBPrpLb_LZWZp8yqdU9iVjWDdIDskb2bs-4UlWZbZDQSOS4UH0g",
                                    category: "Branding",
                                    title: "Aura Wearables",
                                    description: "Visual identity and packaging design for a premium smart-ring startup."
                                }
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // SIMPLE CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-simple-cta-section",
            name: "Simple CTA",
            description: "Center-aligned CTA with email and social links",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-simple-cta-col",
                    width: "100%",
                    elements: [{
                        id: "ds-simple-cta-element",
                        type: "DesignStudioSimpleCTA",
                        props: {
                            title: "Let's create the\nextraordinary.",
                            email: "hello@studiowork.com",
                            socialLinks: [
                                { label: "Instagram", href: "#" },
                                { label: "LinkedIn", href: "#" },
                                { label: "Behance", href: "#" }
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = designStudioProjects;
