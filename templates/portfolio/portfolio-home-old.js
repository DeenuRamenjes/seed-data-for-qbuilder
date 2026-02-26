/**
 * Portfolio Template - Designer/Developer Portfolio Home Page
 * Theme: Clean Light Mode with Blue Accents
 * Industry: Designers, Developers, Creative Professionals
 * Color Scheme:
 *   - Primary: #3B82F6 (Blue)
 *   - Accent Soft: #EFF6FF (Light Blue)
 *   - Background: #FFFFFF (White)
 *   - Border Subtle: #F1F5F9 (Light Gray)
 *   - Text Primary: #1E293B (Dark Slate)
 *   - Text Secondary: #64748B (Medium Slate)
 */

export const portfolioHome = {
    // ============================================================================
    // HEADER - Navigation Bar
    // ============================================================================
    header: {
        key: "portfolio-header",
        type: "Header",
        category: "header",
        name: "Portfolio Header",
        description: "Sticky navigation header with logo and menu",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                glassmorphism: true,
                fullWidth: true,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                paddingY: 0,
                backdropFilter: "blur(12px)",
                borderBottomColor: "#F1F5F9",
                borderBottomWidth: "1px"
            },
            columns: [{
                id: "portfolio-header-col",
                width: "100%",
                elements: [{
                    id: "portfolio-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "text",
                        logoText: "Alex Rivera",
                        logoIcon: "blur_on",
                        logoTextColor: "#1E293B",
                        logoAccentColor: "#3B82F6",
                        logoBackgroundColor: "#EFF6FF",
                        accentColor: "#3B82F6",
                        links: [
                            { label: "Work", href: "#work" },
                            { label: "Process", href: "#process" },
                            { label: "About", href: "#about" },
                            { label: "Notes", href: "#notes" }
                        ],
                        linkColor: "#64748B",
                        linkHoverColor: "#3B82F6",
                        backgroundColor: "transparent",
                        showButton: true,
                        buttonText: "Contact",
                        buttonLink: "#contact",
                        buttonStyle: "solid",
                        buttonRadius: "full",
                        buttonBg: "#1E293B",
                        buttonTextColor: "#FFFFFF"
                    }
                }]
            }]
        }
    },

    // ============================================================================
    // FOOTER - Footer Section
    // ============================================================================
    footer: {
        key: "portfolio-footer",
        type: "Section",
        category: "footer",
        name: "Portfolio Footer",
        description: "Footer with branding, social links, and legal links",
        structure: {
            type: "Section",
            defaultProps: {
                backgroundColor: "#FFFFFF",
                paddingY: 40,
                paddingX: 40,
                fullWidth: true,
                borderTopColor: "#F1F5F9",
                borderTopWidth: "1px"
            },
            columns: [{
                id: "portfolio-footer-col",
                width: "100%",
                props: {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                elements: [
                    {
                        id: "portfolio-footer",
                        type: "PortfolioFooter",
                        props: {
                            logoText: "Alex Rivera",
                            logoIcon: "blur_on",
                            logoBackgroundColor: "#EFF6FF",
                            logoIconColor: "#3B82F6",
                            tagline: "Crafting high-quality digital experiences from the Bay Area.",
                            copyright: "© 2024 Alex Rivera. All rights reserved.",
                            followLabel: "Follow",
                            socialLinks: [
                                { icon: "public", href: "#", label: "Website" },
                                { icon: "alternate_email", href: "#", label: "Email" },
                                { icon: "data_object", href: "#", label: "GitHub" }
                            ],
                            footerLinks: [
                                { text: "Privacy", href: "#" },
                                { text: "Terms", href: "#" }
                            ],
                            taglineColor: "#94A3B8",
                            copyrightColor: "#94A3B8",
                            followLabelColor: "#1E293B",
                            socialLinkColor: "#94A3B8",
                            socialLinkHoverColor: "#3B82F6",
                            footerLinkColor: "#94A3B8",
                            footerLinkHoverColor: "#1E293B"
                        }
                    }
                ]
            }]
        }
    },

    // ============================================================================
    // PAGE CONTENT BLOCKS
    // ============================================================================
    structure: {
        id: "portfolio-home",
        type: "Page",
        title: "Portfolio Home",
        description: "Creative portfolio home page showcasing work and expertise",
        blocks: [
            {
                id: "portfolio-hero-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    paddingY: 60,
                    paddingX: 40,
                    fullWidth: true,
                    borderBottomColor: "#F1F5F9",
                    borderBottomWidth: "1px"
                },
                columns: [{
                    id: "portfolio-hero-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "portfolio-hero",
                            type: "PortfolioHero",
                            props: {
                                badge: "Available for new projects",
                                badgeColor: "#3B82F6",
                                badgeBackgroundColor: "#EFF6FF",
                                title: "Designing products with clarity and impact.",
                                titleGradientStart: "#1E293B",
                                titleGradientEnd: "#3B82F6",
                                titleHighlightWord: "clarity",
                                titleHighlightColor: "#3B82F6",
                                description: "I'm Alex, a product designer and developer. I help brands build clean, user-centric digital experiences that scale.",
                                primaryButtonText: "View Projects",
                                primaryButtonStyle: "solid",
                                secondaryButtonText: "About Me",
                                secondaryButtonStyle: "outline",
                                imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkJYxMMPXDcBViF36WD8YWwFlRTYvYyGMSGOYDPgxIMxcqhr82dkqq-7Cen2t4cZYEcDFxGFcTqLFELCSrngD7wNyhpN313ZHQvS8Jz1o9LLMpNztQHJjMM6m-TobtQVjCBQSXKfgupmYr4cxbIPEZaYIvXDvoioYX7jP6Ka3yEPIfg53_qrG8xoNTuDeT0duDTjw7nWhXYW6o0t-Z_y5sVAVas3UDJGvvaaZejs-Tu8rTpYPTLAFH-yKTgJR_3D5b0DCLN-5g7a0",
                                imageAlt: "Professional headshot",
                                imageBackgroundColor: "#EFF6FF",
                                buttonPrimaryColor: "#3B82F6",
                                buttonPrimaryTextColor: "#FFFFFF",
                                buttonSecondaryColor: "#FFFFFF",
                                buttonSecondaryTextColor: "#1E293B",
                                buttonSecondaryBorderColor: "#E2E8F0"
                            }
                        }
                    ]
                }]
            },

            // ============================================================================
            // PORTFOLIO - Featured Work
            // ============================================================================
            {
                id: "portfolio-work-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#F8FAFC",
                    paddingY: 60,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "portfolio-work-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "portfolio-cards",
                            type: "PortfolioCards",
                            props: {
                                sectionLabel: "Portfolio",
                                sectionLabelColor: "#3B82F6",
                                sectionTitle: "Featured Work",
                                sectionTitleColor: "#1E293B",
                                viewAllText: "View all projects",
                                viewAllLink: "#portfolio",
                                viewAllColor: "#64748B",
                                viewAllHoverColor: "#3B82F6",
                                projects: [
                                    {
                                        id: "project-1",
                                        title: "Nexus Analytics Platform",
                                        description: "A comprehensive data visualization suite for enterprise-level logistics and supply chain management.",
                                        category: "Analytics",
                                        year: "2024",
                                        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBbmD3HaEJMPj3DTQYToVMdgG1aXfo47q4EJr8DYCq7Y7_J-g47MZ6bOR6P4ExMCw9ThQqB2ClkHyE6_xi-z-J-9b6Z5BwOSzTT5Uz7WGwNuQ2DRGjOOc3un-BHSl4yQEtFqfw3HMWa-_s6f962ckdgBfjzWz_l1e_oLhooNkgoRr4nu3rFbwxrJhqUQh7nziXV7o9O83hmu51nBHylImjqTsibJXs27Njqz5uCx2jy_njr23jaSoEk8TXNv5P1db_Vpuui1JIqro",
                                        link: "#"
                                    },
                                    {
                                        id: "project-2",
                                        title: "Stellar Shop App",
                                        description: "Designing a seamless mobile shopping experience focused on minimalist UI and accessibility.",
                                        category: "E-Commerce",
                                        year: "2023",
                                        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZRBzdkeX8DMX3caFohON_ALr5-YhB3r8y41xBaA671CiFIjSTS_gRWiuDUn9uNnCQ74Z_HmKH31vZTLPxxWzX3Jy34kFSfA88oAyA5CQzjHw1F76vPizqrywhXBJbx4pMK_jVJoK6qSDZ2F57wt-QEj0wmH1DvfrI5iUG9C6nXCWaFoCQWINyv0Jb5Vohr-y1VJ_lAFuHHlQGzn5zq-FuLvHD1QIddec0jMrsb7RwHf_1EeuMhu--0EqGIdz1sLAsqhl7NL9xVkk",
                                        link: "#"
                                    },
                                    {
                                        id: "project-3",
                                        title: "CryptoVault Mobile",
                                        description: "End-to-end product strategy and interface design for a secure, multi-currency crypto wallet.",
                                        category: "Fintech",
                                        year: "2023",
                                        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVGarH5OWHhPP505ysz07BekACEjsnp0XXv_1FQ6t-rYcaSyh1U4eiIXQErow0qwhTkXIdvlY0UcTouaD1lGdqTtmbnAX-SfDj09SCOSQga0UaUhQireFHajRFX3id65QyIhd7lsx2trv3W4N0CwlQY-VWewhoJ2wy-taPnUBUio4CIrrn2vmVMik6pEgUb-X9cakcAHQGSdz7bnTqcPTZhnq1BMYPNYvM2PPQytvwV6QSJK1g2V0BMiubgiRG6cv7DHmuRPhY4Tc",
                                        link: "#"
                                    }
                                ],
                                categoryBadgeColor: "#3B82F6",
                                categoryBadgeBackgroundColor: "#EFF6FF",
                                yearBadgeColor: "#94A3B8",
                                yearBadgeBackgroundColor: "#F1F5F9",
                                projectTitleColor: "#1E293B",
                                projectTitleHoverColor: "#3B82F6",
                                projectDescriptionColor: "#64748B",
                                projectBackgroundColor: "#E2E8F0",
                                hoverOverlayColor: "#3B82F6"
                            }
                        }
                    ]
                }]
            },

            // ============================================================================
            // ABOUT - About & Stats Section
            // ============================================================================
            {
                id: "portfolio-about-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    paddingY: 60,
                    paddingX: 40,
                    fullWidth: true,
                    borderTopColor: "#F1F5F9",
                    borderTopWidth: "1px"
                },
                columns: [{
                    id: "portfolio-about-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "portfolio-about",
                            type: "PortfolioAbout",
                            props: {
                                title: "Building with Purpose",
                                titleColor: "#1E293B",
                                description: "I believe great design is invisible. It's about solving problems and creating intuitive paths for users without adding unnecessary noise. With a background in both engineering and visual design, I bring a unique perspective to every project.",
                                descriptionColor: "#64748B",
                                stats: [
                                    {
                                        value: "8+",
                                        label: "Years Experience"
                                    },
                                    {
                                        value: "50+",
                                        label: "Projects Launched"
                                    },
                                    {
                                        value: "12",
                                        label: "Design Awards"
                                    },
                                    {
                                        value: "99%",
                                        label: "Client Satisfaction"
                                    }
                                ],
                                statValueColor: "#3B82F6",
                                statLabelColor: "#64748B"
                            }
                        }
                    ]
                }]
            }
        ]
    }
};
