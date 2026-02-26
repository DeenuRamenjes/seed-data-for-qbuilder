/**
 * Design Studio Template - Services Page
 * Theme: Blue/White creative studio aesthetic
 * Industry: Creative Agencies / Design Studios
 */

const designStudioServices = {
    sections: [
        // --------------------------------------------------------------------------
        // SERVICES HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-services-hero-section",
            name: "Services Hero",
            description: "Editorial grid hero with badge, large title, and CTA",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-services-hero-col",
                    width: "100%",
                    elements: [{
                        id: "ds-services-hero-element",
                        type: "DesignStudioServicesHero",
                        props: {
                            badge: "Capabilities — 2024 Edition",
                            title: "High-Impact\nDigital",
                            titleHighlight: "Innovation.",
                            description: "We bridge the gap between complex engineering and elegant design. Delivering high-performance digital solutions for the next generation of industry leaders.",
                            buttonText: "Our Portfolio",
                            buttonLink: "#portfolio",
                            primaryColor: "#000000ff"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // SERVICES GRID SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-services-grid-section",
            name: "Services Grid",
            description: "3-column service cards with icons and hover effects",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-services-grid-col",
                    width: "100%",
                    elements: [{
                        id: "ds-services-grid-element",
                        type: "DesignStudioServicesGrid",
                        props: {
                            title: "Studio\nServices",
                            label: "Expertise / 01",
                            services: [
                                {
                                    icon: "globe",
                                    title: "Product Strategy",
                                    description: "Defining the roadmap for digital success through market research, UX audits, and rapid prototyping."
                                },
                                {
                                    icon: "layers",
                                    title: "Interface Design",
                                    description: "High-contrast, editorial design systems built for scale, accessibility, and visual impact across all devices."
                                },
                                {
                                    icon: "terminal",
                                    title: "Full-Stack Dev",
                                    description: "Robust architecture using modern frameworks. We build performant, secure, and future-proof applications."
                                }
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PROCESS SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-process-section",
            name: "Our Process",
            description: "Alternating layout process steps with large numbers",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-process-col",
                    width: "100%",
                    elements: [{
                        id: "ds-process-element",
                        type: "DesignStudioProcess",
                        props: {
                            label: "Execution / 02",
                            title: "Our Process",
                            steps: [
                                {
                                    number: "01",
                                    title: "Discovery & Architecture",
                                    description: "We begin every project by deconstructing your goals. Through deep-dive workshops, we map out the information architecture and technical requirements to ensure a solid foundation.",
                                    items: ["Stakeholder Interviews", "Competitive Analysis", "Technical Audit"]
                                },
                                {
                                    number: "02",
                                    title: "Iterative Design",
                                    description: "Design is a conversation. We build high-fidelity wireframes and interactive prototypes, refining the user journey until every interaction feels intuitive and purposeful.",
                                    items: ["UX/UI Prototyping", "Design Systems", "User Testing"]
                                },
                                {
                                    number: "03",
                                    title: "Agile Engineering",
                                    description: "Our developers bring the vision to life using clean, modular code. We work in two-week sprints, providing regular updates and maintaining full transparency throughout the build.",
                                    items: ["Front-end Excellence", "API Integration", "Deployment Pipelines"]
                                }
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // TECH STACK SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-tech-stack-section",
            name: "Tech Stack",
            description: "Grid of tech tools with icons",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-tech-stack-col",
                    width: "100%",
                    elements: [{
                        id: "ds-tech-stack-element",
                        type: "DesignStudioTechStack",
                        props: {
                            title: "Tech Stack",
                            subtitle: "Tools we master",
                            items: [
                                { icon: "code", name: "React.js" },
                                { icon: "grid", name: "Tailwind" },
                                { icon: "cloud", name: "Node.js" },
                                { icon: "braces", name: "TypeScript" },
                                { icon: "figma", name: "Figma" },
                                { icon: "globe", name: "Next.js" }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PROJECT CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-project-cta-section",
            name: "Project CTA",
            description: "Dark box with decorative circle and dual CTAs",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-project-cta-col",
                    width: "100%",
                    elements: [{
                        id: "ds-project-cta-element",
                        type: "DesignStudioProjectCTA",
                        props: {
                            title: "Ready to Start",
                            titleHighlight: "A Project?",
                            description: "Whether you have a fully formed brief or just the spark of an idea, our team is ready to help you build something extraordinary.",
                            primaryButtonText: "Get Started",
                            primaryButtonLink: "#contact",
                            secondaryButtonText: "View Pricing",
                            secondaryButtonLink: "#pricing",
                            primaryColor: "#ffffffff"
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = designStudioServices;
