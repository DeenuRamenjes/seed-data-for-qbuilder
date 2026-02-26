/**
 * TechNova Template - Infrastructure Page
 * Theme: Red/Dark accent with modern tech aesthetic
 * Industry: Tech/Innovation Companies
 * Color Scheme: 
 *   - Primary: #ec1313 (Red)
 *   - Background: #f8f6f6 (Light)
 *   - BackgroundDark: #221010 (Dark)
 *   - Deep Gray: #1b0d0d
 *   - Accent Red: #9a4c4c
 */

const techInnovationInfrastructure = {
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
                            { label: "Solutions", href: "#solutions" },
                            { label: "Contact", href: "#contact" }
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
        // INFRASTRUCTURE HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "infra-hero-section",
            name: "Infrastructure Hero",
            description: "Hero section with background, stats and metrics card",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f6",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "infra-hero-col",
                    width: "100%",
                    elements: [{
                        id: "infra-hero-element",
                        type: "TechInnovationInfraHero",
                        props: {
                            badge: "Infrastructure",
                            title: "Next-Gen",
                            titleHighlight: "Cloud Core.",
                            description: "High-performance cloud infrastructure engineered for the modern enterprise. Scale without limits, secure by design, and optimized for global velocity.",
                            backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0",
                            stats: [
                                { value: "99.999%", label: "Uptime SLA" },
                                { value: "<2ms", label: "Global Latency" }
                            ],
                            metricsTitle: "Live Metrics",
                            metrics: [
                                { label: "Resource Utilization", value: 85 },
                                { label: "Node Distribution: Optimal", value: 92 }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // INFRASTRUCTURE STACK CARDS SECTION
        // --------------------------------------------------------------------------
        {
            key: "infra-stack-section",
            name: "Infrastructure Stack",
            description: "Horizontal scrolling infrastructure cards",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "infra-stack-col",
                    width: "100%",
                    elements: [{
                        id: "infra-stack-element",
                        type: "TechInnovationStackCards",
                        props: {
                            title: "Infrastructure",
                            titleHighlight: "Stack.",
                            cards: [
                                {
                                    icon: "layers",
                                    title: "Multi-Region Fabric",
                                    description: "Redundant data centers spanning 24 global regions with automated failover and geo-proximity routing.",
                                    features: ["Low-latency interconnects", "Anycast network distribution"]
                                },
                                {
                                    icon: "memory",
                                    title: "Compute Elasticity",
                                    description: "Autoscaling groups that respond to demand spikes in milliseconds, ensuring cost-efficiency and performance.",
                                    features: ["Bare metal performance", "Container orchestration"]
                                },
                                {
                                    icon: "database",
                                    title: "Unified Storage",
                                    description: "High-IOPS block storage and petabyte-scale object storage with built-in encryption and redundancy.",
                                    features: ["SSD-backed tiers", "Global data replication"]
                                },
                                {
                                    icon: "router",
                                    title: "Edge Acceleration",
                                    description: "Content delivery network optimized for dynamic content and heavy enterprise API traffic.",
                                    features: ["300+ Edge locations", "Real-time compression"]
                                }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // SECURITY SECTION
        // --------------------------------------------------------------------------
        {
            key: "infra-security-section",
            name: "Security Section",
            description: "Security showcase with stats and visualization",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ec1313",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "infra-security-col",
                    width: "100%",
                    elements: [{
                        id: "infra-security-element",
                        type: "TechInnovationSecurity",
                        props: {
                            title: "Security First. By Architecture.",
                            description: "Our cloud isn't just fast—it's fortified. We implement Zero-Trust models at every layer, from the physical hardware to the application runtime.",
                            stats: [
                                { value: "AES-256", label: "Encryption Standard" },
                                { value: "24/7", label: "SOC Monitoring" }
                            ],
                            chartTitle: "Real-time Attack Surface Analysis",
                            chartBars: [40, 70, 90, 55, 80, 35, 65]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // SLA SECTION
        // --------------------------------------------------------------------------
        {
            key: "infra-sla-section",
            name: "SLA Comparison",
            description: "Enterprise SLA comparison table",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f6",
                    paddingY: 60,
                    paddingX: 40,
                    fullWidth: true,
                },
                columns: [{
                    id: "infra-sla-col",
                    width: "100%",
                    elements: [{
                        id: "infra-sla-element",
                        type: "TechInnovationSLA",
                        props: {
                            title: "Enterprise",
                            titleHighlight: "SLA.",
                            description: "Transparent, contractually guaranteed performance levels for global enterprise partners.",
                            quote: "Precision is our baseline. Excellence is our deliverable.",
                            quoteAuthor: "TechNova Engineering Team",
                            tableRows: [
                                { metric: "Network Availability", standard: "99.9%", enterprise: "99.999%" },
                                { metric: "Support Response", standard: "< 1 Hour", enterprise: "< 15 Mins" },
                                { metric: "Packet Delivery", standard: "99%", enterprise: "99.99%" },
                                { metric: "Managed Backups", standard: "Daily", enterprise: "Real-time" }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CTA SECTION (Reusing from home)
        // --------------------------------------------------------------------------
        {
            key: "infra-cta-section",
            name: "Infrastructure CTA",
            description: "Call to action for infrastructure page",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ec1313",
                    color: "#ffffff",
                    paddingY: 60,
                    paddingX: 40,
                    fullWidth: true,
                },
                columns: [{
                    id: "infra-cta-col",
                    width: "100%",
                    elements: [{
                        id: "infra-cta-element",
                        type: "TechInnovationCTA",
                        props: {
                            title: "Ready to Scale Your Infrastructure?",
                            subtitle: "Deploy enterprise-grade cloud infrastructure in minutes. Get started with a dedicated solutions architect.",
                            primaryButtonText: "Start Free Trial",
                            primaryButtonLink: "#signup",
                            secondaryButtonText: "Talk to Sales",
                            secondaryButtonLink: "#contact"
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
                                    { label: "Careers", href: "#" },
                                    { label: "Press Room", href: "#" }
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

module.exports = techInnovationInfrastructure;
