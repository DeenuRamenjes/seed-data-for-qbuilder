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
            },


            
            // ============================================================================
            // SKILLS - Skills & Tools Grid Section
            // ============================================================================
            {
                id: "portfolio-skills-section",
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
                    id: "portfolio-skills-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "portfolio-skills",
                            type: "PortfolioSkills",
                            props: {
                                sectionTitle: "My Skillset & Tools",
                                sectionDescription: "A curated list of technologies and design tools I use to bring ideas to life.",
                                skills: [
                                    { id: "skill-1", name: "JavaScript", icon: "javascript" },
                                    { id: "skill-2", name: "React.js", icon: "token" },
                                    { id: "skill-3", name: "Tailwind CSS", icon: "css" },
                                    { id: "skill-4", name: "Node.js", icon: "database" },
                                    { id: "skill-5", name: "Figma", icon: "draw" },
                                    { id: "skill-6", name: "UX Research", icon: "psychology" },
                                    { id: "skill-7", name: "Design Systems", icon: "view_quilt" },
                                    { id: "skill-8", name: "TypeScript", icon: "terminal" },
                                    { id: "skill-9", name: "AWS / Cloud", icon: "cloud_done" },
                                    { id: "skill-10", name: "Next.js", icon: "grid_view" },
                                    { id: "skill-11", name: "UI Design", icon: "brush" },
                                    { id: "skill-12", name: "Git / CI/CD", icon: "sync_alt" }
                                ],
                                titleColor: "#1E293B",
                                descriptionColor: "#64748B",
                                skillNameColor: "#475569",
                                skillCardBackgroundColor: "#F8FAFC",
                                skillCardBorderColor: "#E2E8F0",
                                skillCardHoverBorderColor: "#EFF6FF",
                                skillIconColor: "#3B82F6",
                                primaryColor: "#3B82F6"
                            }
                        }
                    ]
                }]
            },
                        // ============================================================================
            // ABOUT DETAILS - Detailed About Section with Story & Experience
            // ============================================================================
            {
                id: "portfolio-about-details-section",
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
                    id: "portfolio-about-details-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "portfolio-about-details",
                            type: "PortfolioAboutDetails",
                            props: {
                                profileImageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkJYxMMPXDcBViF36WD8YWwFlRTYvYyGMSGOYDPgxIMxcqhr82dkqq-7Cen2t4cZYEcDFxGFcTqLFELCSrngD7wNyhpN313ZHQvS8Jz1o9LLMpNztQHJjMM6m-TobtQVjCBQSXKfgupmYr4cxbIPEZaYIvXDvoioYX7jP6Ka3yEPIfg53_qrG8xoNTuDeT0duDTjw7nWhXYW6o0t-Z_y5sVAVas3UDJGvvaaZejs-Tu8rTpYPTLAFH-yKTgJR_3D5b0DCLN-5g7a0",
                                currentFocusTitle: "Current Focus",
                                currentFocusDescription: "I am currently leading the design systems team at a fintech startup, focusing on accessibility and performance.",
                                currentFocusLocation: "San Francisco, CA",
                                currentFocusWebsite: "alexrivera.design",
                                currentFocusWebsiteUrl: "https://alexrivera.design",
                                storyTitle: "My Story",
                                storyParagraphs: [
                                    {
                                        id: "story-1",
                                        text: "I started my journey as a self-taught developer over a decade ago. What began as a curiosity about how websites were built quickly turned into a passion for creating meaningful user experiences."
                                    },
                                    {
                                        id: "story-2",
                                        text: "After graduating with a degree in Design, I spent the last 8 years bridging the gap between design and engineering. I believe that design is not just how it looks, but how it works at its core."
                                    },
                                    {
                                        id: "story-3",
                                        text: "Throughout my career, I've had the privilege of working with global brands and agile startups, helping them ship products that scale from thousands to millions of users."
                                    }
                                ],
                                experienceTitle: "Experience",
                                experience: [
                                    {
                                        id: "exp-1",
                                        period: "2021 — Present",
                                        title: "Senior Product Designer",
                                        company: "Fintech Solutions Inc.",
                                        description: "Leading the evolution of the core dashboard product. Managed a team of 4 designers and coordinated with engineering to ship the new design system.",
                                        isActive: true
                                    },
                                    {
                                        id: "exp-2",
                                        period: "2018 — 2021",
                                        title: "Lead Frontend Developer",
                                        company: "Creative Agency Plus",
                                        description: "Developed high-end e-commerce solutions for luxury brands. Optimized site performance resulting in a 30% increase in conversion rates.",
                                        isActive: false
                                    },
                                    {
                                        id: "exp-3",
                                        period: "2015 — 2018",
                                        title: "UX Designer",
                                        company: "Startup Hub",
                                        description: "Founding designer responsible for the end-to-end user experience of the mobile and desktop platforms.",
                                        isActive: false
                                    }
                                ],
                                profileImageBorderColor: "#E2E8F0",
                                currentFocusBorderColor: "#E2E8F0",
                                currentFocusBackgroundColor: "#FFFFFF",
                                titleColor: "#1E293B",
                                descriptionColor: "#64748B",
                                storyTextColor: "#475569",
                                experiencePeriodColor: "#3B82F6",
                                experienceTitleColor: "#1E293B",
                                experienceCompanyColor: "#64748B",
                                experienceDescriptionColor: "#64748B",
                                primaryColor: "#3B82F6"
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
            // CASE STUDY - Featured Case Study Section
            // ============================================================================
            {
                id: "portfolio-case-study-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "portfolio-case-study-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "stretch",
                        justifyContent: "flex-start"
                    },
                    elements: [
                        {
                            id: "portfolio-case-study",
                            type: "PortfolioCaseStudy",
                            props: {
                                sectionLabel: "Case Study",
                                category: "Fintech",
                                caseStudyTitle: "Nexus Analytics: Visualizing Big Data for Modern Teams",
                                caseStudyDescription: "A comprehensive dashboard ecosystem designed to transform complex raw data into actionable business intelligence.",
                                heroImageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBbmD3HaEJMPj3DTQYToVMdgG1aXfo47q4EJr8DYCq7Y7_J-g47MZ6bOR6P4ExMCw9ThQqB2ClkHyE6_xi-z-J-9b6Z5BwOSzTT5Uz7WGwNuQ2DRGjOOc3un-BHSl4yQEtFqfw3HMWa-_s6f962ckdgBfjzWz_l1e_oLhooNkgoRr4nu3rFbwxrJhqUQh7nziXV7o9O83hmu51nBHylImjqTsibJXs27Njqz5uCx2jy_njr23jaSoEk8TXNv5P1db_Vpuui1JIqro",
                                challengeTitle: "The Challenge",
                                challengeDescription: "In the rapidly evolving world of data analytics, teams often find themselves overwhelmed by the sheer volume of information. Our client, Nexus, faced a critical problem: their users were spending more time trying to find data points than actually analyzing them.",
                                challengePoints: [
                                    { id: "ch-1", text: "The existing interface was cluttered, suffered from high cognitive load, and lacked a clear visual hierarchy." },
                                    { id: "ch-2", text: "Mobile responsiveness was non-existent, making it impossible for executives to check KPIs on the go." }
                                ],
                                solutionTitle: "The Solution",
                                solutionDescription: "I led a complete redesign of the platform, focusing on three core pillars: modularity, accessibility, and speed. We implemented a \"Card-Based\" layout that allowed users to customize their dashboard views according to their specific roles.",
                                solutionPoints: [
                                    { id: "sol-1", text: "Introduced a universal search command bar for instant data retrieval." },
                                    { id: "sol-2", text: "Developed a proprietary charting library for high-performance rendering of 1M+ data points." },
                                    { id: "sol-3", text: "Implemented a comprehensive Design System to ensure consistency across the entire ecosystem." },
                                    { id: "sol-4", text: "Optimized the mobile experience with adaptive layouts and touch-friendly controls." }
                                ],
                                solutionImages: [
                                    { id: "img-1", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZRBzdkeX8DMX3caFohON_ALr5-YhB3r8y41xBaA671CiFIjSTS_gRWiuDUn9uNnCQ74Z_HmKH31vZTLPxxWzX3Jy34kFSfA88oAyA5CQzjHw1F76vPizqrywhXBJbx4pMK_jVJoK6qSDZ2F57wt-QEj0wmH1DvfrI5iUG9C6nXCWaFoCQWINyv0Jb5Vohr-y1VJ_lAFuHHlQGzn5zq-FuLvHD1QIddec0jMrsb7RwHf_1EeuMhu--0EqGIdz1sLAsqhl7NL9xVkk" },
                                    { id: "img-2", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVGarH5OWHhPP505ysz07BekACEjsnp0XXv_1FQ6t-rYcaSyh1U4eiIXQErow0qwhTkXIdvlY0UcTouaD1lGdqTtmbnAX-SfDj09SCOSQga0UaUhQireFHajRFX3id65QyIhd7lsx2trv3W4N0CwlQY-VWewhoJ2wy-taPnUBUio4CIrrn2vmVMik6pEgUb-X9cakcAHQGSdz7bnTqcPTZhnq1BMYPNYvM2PPQytvwV6QSJK1g2V0BMiubgiRG6cv7DHmuRPhY4Tc" }
                                ],
                                sidebarRole: "Lead Product Designer",
                                sidebarTimeline: "6 Months (2023)",
                                sidebarClient: "Nexus Analytics",
                                sidebarTools: [
                                    { name: "Figma" },
                                    { name: "React" },
                                    { name: "Tailwind CSS" },
                                    { name: "D3.js" },
                                    { name: "Storybook" }
                                ],
                                ctaText: "Visit Live Site",
                                ctaLink: "#",
                                sectionLabelColor: "#3B82F6",
                                titleColor: "#1E293B",
                                descriptionColor: "#64748B",
                                challengeIconColor: "#3B82F6",
                                solutionIconColor: "#22C55E",
                                sidebarBackgroundColor: "#F8FAFC",
                                sidebarBorderColor: "#E2E8F0",
                                sidebarLabelColor: "#94A3B8",
                                ctaButtonColor: "#1E293B",
                                ctaButtonTextColor: "#FFFFFF",
                                primaryColor: "#3B82F6"
                            }
                        }
                    ]
                }]
            },

            // ============================================================================
            // CONTACT - Contact Form Section
            // ============================================================================
            {
                id: "portfolio-contact-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "portfolio-contact-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "portfolio-contact",
                            type: "PortfolioContact",
                            props: {
                                sectionTitle: "Let's work together",
                                sectionDescription: "Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below and I'll get back to you within 24 hours.",
                                formNamePlaceholder: "John Doe",
                                formEmailPlaceholder: "john@example.com",
                                formSubjectPlaceholder: "How can I help you?",
                                formMessagePlaceholder: "Tell me about your project...",
                                submitButtonText: "Send Message",
                                connectElsewhereLabel: "Connect Elsewhere",
                                socialLinks: [
                                    { id: "social-1", icon: "public", href: "#", label: "Website" },
                                    { id: "social-2", icon: "code", href: "#", label: "GitHub" },
                                    { id: "social-3", icon: "alternate_email", href: "#", label: "Email" }
                                ],
                                titleColor: "#1E293B",
                                descriptionColor: "#64748B",
                                formLabelColor: "#1E293B",
                                formInputBackgroundColor: "#F8FAFC",
                                formInputBorderColor: "#E2E8F0",
                                formInputTextColor: "#1E293B",
                                formInputPlaceholderColor: "#94A3B8",
                                formCardBackgroundColor: "#FFFFFF",
                                formCardBorderColor: "#E2E8F0",
                                submitButtonColor: "#3B82F6",
                                submitButtonTextColor: "#FFFFFF",
                                socialLinkColor: "#64748B",
                                socialLinkHoverColor: "#3B82F6",
                                socialLinkBorderColor: "#E2E8F0",
                                dividerColor: "#F1F5F9",
                                primaryColor: "#3B82F6"
                            }
                        }
                    ]
                }]
            }
        ]
    }
};
