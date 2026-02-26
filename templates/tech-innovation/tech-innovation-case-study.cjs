/**
 * TechNova Template - Case Study Page
 * Theme: Red/Dark accent with modern tech aesthetic
 * Industry: Tech/Innovation Companies
 * Color Scheme: 
 *   - Primary: #ec1313 (Red)
 *   - Background: #f8f6f6 (Light)
 *   - BackgroundDark: #221010 (Dark)
 *   - Deep Gray: #1b0d0d
 *   - Accent Red: #9a4c4c
 */

const techInnovationCaseStudy = {
    // ============================================================================
    // HEADER - Global Header with Navbar (same as home)
    // ============================================================================
    header: {
        key: "tech-innovation-header",
        type: "Navbar",
        category: "header",
        name: "TechNova Header",
        description: "Sticky header with navigation and mega menu",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                backgroundColor: "#f8f6f6",
                paddingY: 16,
            },
            columns: [{
                id: "tech-header-col",
                width: "100%",
                elements: [{
                    id: "tech-header-element",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "Tech",
                        logoAccent: "Nova",
                        logoTextColor: "#1b0d0d",
                        backgroundColor: "#f8f6f6",
                        accentColor: "#ec1313",
                        sticky: true,
                        glassmorphism: true,
                        showButton: true,
                        buttonText: "Get Started",
                        buttonLink: "#contact",
                        buttonStyle: "solid",
                        buttonSize: "md",
                        linkColor: "#1b0d0d",
                        linkHoverColor: "#ec1313",
                        navLinks: [
                            { label: "Home", href: "/" },
                            { label: "Infrastructure", href: "/infrastructure" },
                            { label: "Careers", href: "/careers" },
                            { label: "Case Studies", href: "/case-study" }
                        ]
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
        // CASE STUDY HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "case-study-hero-section",
            name: "Case Study Hero",
            description: "Hero with background image and stats",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#1b0d0d",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "case-hero-col",
                    width: "100%",
                    elements: [{
                        id: "case-hero-element",
                        type: "TechInnovationCaseStudyHero",
                        props: {
                            sectorLabel: "Case Study: Energy Sector",
                            title: "Hyper-Scale Smart Grid Infrastructure",
                            description: "How TechNova redesigned the core architectural framework for a global energy leader, enabling real-time load balancing for 15M+ endpoints.",
                            stats: [
                                { value: "450%", label: "Efficiency Gain" },
                                { value: "0.03ms", label: "Edge Latency" },
                                { value: "$12M", label: "Annual Savings" }
                            ],
                            backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzI6IwZAMpVErnI6PczyQu-kQSJG8Dy06seN3-sImuVpqpZtFSZEyg3eA-qdhpr_yAzqJLuwvFO5qBOsUW003jci76NCAHDjh8BpW2gMCD_LtHbIZTrhZp1Ku3isG3QuUWkY4aZ-Qsu2IWWWvHLee2qg2A7veopSCHYkpbQRsdULQ3Nc3mDfMao6F9VoXRWzXQ3OqvJwfl4JY77jzcwSS1kiBnDGx8DLguqFzE2k2PAo93mybMBKagVRdulMz5cIK1-s8V6VRtsw"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CASE STUDY CONTENT SECTION
        // --------------------------------------------------------------------------
        {
            key: "case-study-content-section",
            name: "Case Study Content",
            description: "Main content with sidebar navigation",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "case-content-col",
                    width: "100%",
                    elements: [{
                        id: "case-content-element",
                        type: "TechInnovationCaseStudyContent",
                        props: {
                            challengeTitle: "The Challenge",
                            challengeDescription: "Our client faced critical bottlenecks in their legacy infrastructure. With the transition to renewable energy sources, the influx of variable data points was overwhelming their centralized processing units.",
                            challenges: [
                                { title: "Legacy Limitations", description: "Monolithic architecture unable to handle peak-load volatility from solar and wind inputs." },
                                { title: "Security Vulnerabilities", description: "Inconsistent encryption across regional edge nodes creating potential threat vectors." }
                            ],
                            architectureTitle: "Strategic Architecture",
                            architectureImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0",
                            architectureCaption: "Figure 1.1: Distributed Edge-Compute Mesh Architecture deployment",
                            architectureSteps: [
                                { number: 1, title: "Edge Mesh", description: "Decentralizing compute power to the point of generation, reducing round-trip latency by 92%." },
                                { number: 2, title: "AI Orchestration", description: "Automated workload distribution based on predictive demand patterns using proprietary ML models." },
                                { number: 3, title: "Zero-Trust Sync", description: "Real-time cryptographic verification for every data packet moving through the grid." }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // SUCCESS STORIES SECTION
        // --------------------------------------------------------------------------
        {
            key: "case-study-stories-section",
            name: "Success Stories",
            description: "Grid of related success stories",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f6",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "case-stories-col",
                    width: "100%",
                    elements: [{
                        id: "case-stories-element",
                        type: "TechInnovationSuccessStories",
                        props: {
                            title: "Co-Innovation",
                            titleHighlight: "Success Stories",
                            description: "When industry titans collaborate with TechNova, we redefine what's possible in the digital landscape.",
                            buttonText: "View All Case Studies",
                            buttonLink: "#",
                            stories: [
                                {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzI6IwZAMpVErnI6PczyQu-kQSJG8Dy06seN3-sImuVpqpZtFSZEyg3eA-qdhpr_yAzqJLuwvFO5qBOsUW003jci76NCAHDjh8BpW2gMCD_LtHbIZTrhZp1Ku3isG3QuUWkY4aZ-Qsu2IWWWvHLee2qg2A7veopSCHYkpbQRsdULQ3Nc3mDfMao6F9VoXRWzXQ3OqvJwfl4JY77jzcwSS1kiBnDGx8DLguqFzE2k2PAo93mybMBKagVRdulMz5cIK1-s8V6VRtsw",
                                    category: "Cloud Migration",
                                    partner: "TechNova × Hyperscale Partner",
                                    title: "Re-architecting Global Logistics",
                                    description: "Reduced operational latency by 45% using a custom edge-computing mesh developed in joint venture.",
                                    link: "#"
                                },
                                {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdO7P43yS8XA4s4jREoxgl5z1cGN44F5wn6RVi_RKhLuEibjHVeeKQNcUsAQlvh1E_IWRtrYkOmc_G_-oT35pa2I_4yVppSQvgkdsue7pX14jKsKTJLzn4xp-T-mVk5y_2qk48vjoy5537CneKRgdm-4H4mSaruh8aYhaRc21KksjIOfiaHWfiJRDd-MVBe9A3Ic16RdJNyhSyCtUOeEtltGtNRUuvwjxWd-BHZpf3qDJ5mAZ-AwrP_Yf4l0oQbcL0A-TISBZOiyA",
                                    category: "Cybersecurity",
                                    partner: "TechNova × Security Giant",
                                    title: "Securing the Decentralized Finance Hub",
                                    description: "Implemented a first-of-its-kind AI-driven threat detection layer protecting $40B in annual transactions.",
                                    link: "#"
                                }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // ARCHITECT CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "case-study-cta-section",
            name: "Architect CTA",
            description: "Call to action for architect consultation",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ec1313",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "case-cta-col",
                    width: "100%",
                    elements: [{
                        id: "case-cta-element",
                        type: "TechInnovationArchitectCTA",
                        props: {
                            title: "Complex problems require",
                            titleFade: "superior engineering.",
                            description: "Interested in how our architecture can scale your specific enterprise needs? Connect directly with our lead solution architects.",
                            primaryButtonText: "Speak to an Architect",
                            primaryButtonLink: "#",
                            secondaryButtonText: "Technical Whitepaper",
                            secondaryButtonLink: "#"
                        }
                    }]
                }]
            }
        }
    ],

    // ============================================================================
    // FOOTER - Global Footer (same as home)
    // ============================================================================
    footer: {
        key: "tech-innovation-footer",
        type: "TechInnovationFooter",
        category: "footer",
        name: "TechNova Footer",
        description: "Footer with branding, links, and social media",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#221010",
                paddingY: 60,
                paddingX: 40,
                fullWidth: true,
            },
            columns: [{
                id: "tech-footer-col",
                width: "100%",
                elements: [{
                    id: "tech-footer-element",
                    type: "TechInnovationFooter",
                    props: {
                        logoText: "TechNova",
                        tagline: "Next-generation innovation for world-class enterprises. Built on precision, speed, and security.",
                        sections: [
                            {
                                title: "Solutions",
                                links: [
                                    { label: "Enterprise Cloud", href: "#" },
                                    { label: "AI & ML Ops", href: "#" },
                                    { label: "Cybersecurity Hub", href: "#" },
                                    { label: "Edge Computing", href: "#" }
                                ]
                            },
                            {
                                title: "Company",
                                links: [
                                    { label: "Our Vision", href: "#" },
                                    { label: "Global Presence", href: "#" },
                                    { label: "Careers", href: "/careers" },
                                    { label: "Case Studies", href: "/case-study" }
                                ]
                            }
                        ],
                        socialLinks: [
                            { icon: "Globe", href: "#" },
                            { icon: "Share2", href: "#" },
                            { icon: "Mail", href: "#" }
                        ],
                        copyright: "© 2024 TechNova Solutions. All rights reserved.",
                        footerLinks: [
                            { label: "Privacy Policy", href: "#" },
                            { label: "Terms of Service", href: "#" },
                            { label: "Cookie Settings", href: "#" }
                        ]
                    }
                }]
            }]
        }
    },
};

module.exports = techInnovationCaseStudy;
