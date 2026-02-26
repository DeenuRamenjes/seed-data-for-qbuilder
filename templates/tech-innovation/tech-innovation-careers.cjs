/**
 * TechNova Template - Careers Page
 * Theme: Red/Dark accent with modern tech aesthetic
 * Industry: Tech/Innovation Companies
 * Color Scheme: 
 *   - Primary: #ec1313 (Red)
 *   - Background: #f8f6f6 (Light)
 *   - BackgroundDark: #221010 (Dark)
 *   - Deep Gray: #1b0d0d
 *   - Accent Red: #9a4c4c
 */

const techInnovationCareers = {
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
        // CAREERS HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "careers-hero-section",
            name: "Careers Hero",
            description: "Centered hero with badge and CTA",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f6",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "careers-hero-col",
                    width: "100%",
                    elements: [{
                        id: "careers-hero-element",
                        type: "TechInnovationCareersHero",
                        props: {
                            badge: "Join the Future",
                            title: "Build the",
                            titleHighlight: "Next Era",
                            description: "We're looking for visionaries, engineers, and disruptors to scale global innovation with precision and purpose.",
                            buttonText: "View Openings",
                            buttonLink: "#openings"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CULTURE GALLERY SECTION
        // --------------------------------------------------------------------------
        {
            key: "careers-culture-section",
            name: "Culture Gallery",
            description: "Masonry image gallery of company culture",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "careers-culture-col",
                    width: "100%",
                    elements: [{
                        id: "careers-culture-element",
                        type: "TechInnovationCultureGallery",
                        props: {
                            sectionLabel: "Our Culture",
                            title: "Life at TechNova",
                            images: [
                                { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX9fw2IQU6dfm9A-851rf5Rhqii04DqPXIxEkPvADANgDJlW3H1pbAMGkzZLYcL7Hke21W-xJLVohsEh5vNru2gVOpDnV-t7LG4lXjv08VUpcKynx__GbqCPi03nCVCVYmEDvTL1NsGtsktIVq87b1tiGXedVcFAobuAsTtZhfM3yPkrR4XI3fsPImuwRbJlFUoDznyUDg3Q1S9ZLgYMzA84-kLc3koCOrSYStda9My8htoqQBnwzl3Qv-dUz0KRbAd7nAvjJcHnQ", title: "Collaboration Hub", aspectRatio: "tall" },
                                { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzI6IwZAMpVErnI6PczyQu-kQSJG8Dy06seN3-sImuVpqpZtFSZEyg3eA-qdhpr_yAzqJLuwvFO5qBOsUW003jci76NCAHDjh8BpW2gMCD_LtHbIZTrhZp1Ku3isG3QuUWkY4aZ-Qsu2IWWWvHLee2qg2A7veopSCHYkpbQRsdULQ3Nc3mDfMao6F9VoXRWzXQ3OqvJwfl4JY77jzcwSS1kiBnDGx8DLguqFzE2k2PAo93mybMBKagVRdulMz5cIK1-s8V6VRtsw", title: "Modern Workspaces", aspectRatio: "square" },
                                { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC87tF5p7seTXhumKhugNHt9quyH8suL6XYmaSj1j2PAivH8Dzwh6padIJKEMRPeZoqXnYs20TYXti0Rikn-SjG_JgZg4oFf9aBVCzwImdeQOv3K543xm6mS392Vm5SiNpPEGz4PmB2yrofJ_eoZz7FxqG7cRFJM1qf3nix7CgRfTp5Fd7cWKuMvhyXdD6mwR3tcGFcntK_CKAGICuUKSYKa2PywzsfuljalaZ3r39kRWY6d7xCCONIuaWbis6QSsle4LEXDBk75Ds", title: "Global Hackathons", aspectRatio: "tall" },
                                { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0", title: "Node Networks", aspectRatio: "square" },
                                { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdO7P43yS8XA4s4jREoxgl5z1cGN44F5wn6RVi_RKhLuEibjHVeeKQNcUsAQlvh1E_IWRtrYkOmc_G_-oT35pa2I_4yVppSQvgkdsue7pX14jKsKTJLzn4xp-T-mVk5y_2qk48vjoy5537CneKRgdm-4H4mSaruh8aYhaRc21KksjIOfiaHWfiJRDd-MVBe9A3Ic16RdJNyhSyCtUOeEtltGtNRUuvwjxWd-BHZpf3qDJ5mAZ-AwrP_Yf4l0oQbcL0A-TISBZOiyA", title: "Secure Operations", aspectRatio: "tall" },
                                { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzI6IwZAMpVErnI6PczyQu-kQSJG8Dy06seN3-sImuVpqpZtFSZEyg3eA-qdhpr_yAzqJLuwvFO5qBOsUW003jci76NCAHDjh8BpW2gMCD_LtHbIZTrhZp1Ku3isG3QuUWkY4aZ-Qsu2IWWWvHLee2qg2A7veopSCHYkpbQRsdULQ3Nc3mDfMao6F9VoXRWzXQ3OqvJwfl4JY77jzcwSS1kiBnDGx8DLguqFzE2k2PAo93mybMBKagVRdulMz5cIK1-s8V6VRtsw", title: "Cloud Velocity", aspectRatio: "square" }
                            ]
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // GLOBAL IMPACT SECTION
        // --------------------------------------------------------------------------
        {
            key: "careers-impact-section",
            name: "Global Impact",
            description: "Stats and globe visualization",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f6",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "careers-impact-col",
                    width: "100%",
                    elements: [{
                        id: "careers-impact-element",
                        type: "TechInnovationGlobalImpact",
                        props: {
                            sectionLabel: "Global Scale",
                            title: "Our Impact Across 15+ Regions",
                            description: "Join a team that handles 1.2k+ projects annually. We pulse through the digital veins of 500+ global enterprises, ensuring security and innovation in every packet.",
                            stats: [
                                { value: "500+", label: "Active Clients" },
                                { value: "300+", label: "Expert Engineers" }
                            ],
                            bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // JOB OPENINGS SECTION
        // --------------------------------------------------------------------------
        {
            key: "careers-openings-section",
            name: "Job Openings",
            description: "Job listings with apply functionality",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "careers-openings-col",
                    width: "100%",
                    elements: [{
                        id: "careers-openings-element",
                        type: "TechInnovationJobOpenings",
                        props: {
                            sectionLabel: "Opportunities",
                            title: "Open Roles",
                            jobs: [
                                { department: "Engineering", title: "Senior Cloud Architect", location: "Remote / London", type: "Full-time", applyLink: "#" },
                                { department: "AI Operations", title: "Machine Learning Engineer", location: "New York", type: "Full-time", applyLink: "#" },
                                { department: "Cybersecurity", title: "Zero-Trust Framework Specialist", location: "Berlin / Remote", type: "Full-time", applyLink: "#" },
                                { department: "Design", title: "Lead Product Designer", location: "Tokyo", type: "Full-time", applyLink: "#" }
                            ],
                            talentPoolText: "Don't see a fit? Join our talent pool",
                            talentPoolLink: "#"
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

module.exports = techInnovationCareers;
