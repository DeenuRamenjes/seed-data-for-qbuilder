// Team & Organization Section Templates
// Fully responsive, theme-aware sections for displaying team members, leadership, and company culture

export const teamSections = [
    // ============================================================================
    // 1. TEAM GRID - Colorful card grid with light background
    // ============================================================================
    {
        key: "team-grid-standard",
        type: "TeamGrid",
        category: "team",
        name: "Team Grid",
        description: "Grid layout displaying team members with photos and titles",
        structure: {
            columns: [
                {
                    id: "team-grid-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "60px 40px",
                        backgroundColor: "var(--theme-background)"
                    },
                    elements: [
                        {
                            id: "team-grid-header",
                            type: "Heading",
                            props: {
                                text: "Meet Our Team",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "team-grid-subtitle",
                            type: "Paragraph",
                            props: {
                                text: "Talented professionals dedicated to delivering excellence",
                                align: "center",
                                color: "var(--theme-secondary-text, #6b7280)",
                                size: "base"
                            }
                        },
                        {
                            id: "team-grid-spacer",
                            type: "Spacer",
                            props: { height: "sm" }
                        },
                        {
                            id: "team-grid-section",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 4, tablet: 2, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                    {
                                        id: "team-member-1",
                                        type: "TeamMember",
                                        props: {
                                            name: "Sarah Johnson",
                                            title: "CEO & Founder",
                                            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                                            bio: "10+ years in tech leadership with a passion for innovation and building world-class teams",
                                            socialLinks: "linkedin:https://linkedin.com,twitter:https://twitter.com",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            nameColor: "var(--theme-text, var(--theme-text))",
                                            titleColor: "var(--theme-primary, var(--theme-primary))",
                                            bioColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    },
                                    {
                                        id: "team-member-2",
                                        type: "TeamMember",
                                        props: {
                                            name: "Michael Chen",
                                            title: "CTO",
                                            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                                            bio: "Full stack engineer & innovator building scalable cloud infrastructure solutions",
                                            socialLinks: "linkedin:https://linkedin.com,github:https://github.com",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            nameColor: "var(--theme-text, var(--theme-text))",
                                            titleColor: "var(--theme-primary, var(--theme-primary))",
                                            bioColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    },
                                    {
                                        id: "team-member-3",
                                        type: "TeamMember",
                                        props: {
                                            name: "Emily Rodriguez",
                                            title: "Head of Design",
                                            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
                                            bio: "UX/UI expert & creative lead designing beautiful digital experiences",
                                            socialLinks: "linkedin:https://linkedin.com,dribbble:https://dribbble.com",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            nameColor: "var(--theme-text, var(--theme-text))",
                                            titleColor: "var(--theme-primary, var(--theme-primary))",
                                            bioColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    },
                                    {
                                        id: "team-member-4",
                                        type: "TeamMember",
                                        props: {
                                            name: "David Park",
                                            title: "VP Operations",
                                            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
                                            bio: "Strategy and growth specialist optimizing operations and scaling the business",
                                            socialLinks: "linkedin:https://linkedin.com",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            nameColor: "var(--theme-text, var(--theme-text))",
                                            titleColor: "var(--theme-primary, var(--theme-primary))",
                                            bioColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 2. TEAM PROFILES - Fully responsive grid with alternating colorful cards
    // ============================================================================
    {
        key: "team-profiles-featured",
        type: "TeamProfiles",
        category: "team",
        name: "Team Profiles",
        description: "Featured team member profiles with detailed information and social links",
        structure: {
            columns: [
                {
                    id: "profiles-col-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "48px 20px md:60px md:40px lg:80px lg:60px",
                        backgroundColor: "var(--theme-border)"
                    },
                    elements: [
                        {
                            id: "profiles-header",
                            type: "Heading",
                            props: {
                                text: "Our Leadership",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "profiles-description",
                            type: "Paragraph",
                            props: {
                                text: "Meet the talented leaders driving innovation and growth across our organization",
                                align: "center",
                                color: "var(--theme-secondary-text, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "profiles-col-content",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "48px 20px md:60px md:40px lg:80px lg:60px",
                        backgroundColor: "var(--theme-background)"
                    },
                    elements: [
                        {
                            id: "profiles-grid-section",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                    {
                                        id: "featured-profile-1",
                                        type: "TeamProfile",
                                        props: {
                                            name: "Sarah Johnson",
                                            title: "Chief Executive Officer",
                                            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
                                            bio: "Sarah is a visionary leader with 10+ years of experience in technology and business development. She founded the company with a mission to transform how businesses operate in the digital age.",
                                            email: "sarah@company.com",
                                            phone: "+1 (555) 123-4567",
                                            socialLinks: "linkedin:https://linkedin.com,twitter:https://twitter.com",
                                            expertise: "Leadership,Strategy,Innovation,Vision",
                                            bgColor: "var(--theme-background)",
                                            accentColor: "#0284c7",
                                            textColor: "var(--theme-text, var(--theme-text))",
                                            secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    },
                                    {
                                        id: "featured-profile-2",
                                        type: "TeamProfile",
                                        props: {
                                            name: "Michael Chen",
                                            title: "Chief Technology Officer",
                                            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
                                            bio: "Michael leads our technology strategy with deep expertise in cloud infrastructure and scalable systems. He has built products serving millions of users worldwide and pioneered cutting-edge solutions.",
                                            email: "michael@company.com",
                                            phone: "+1 (555) 234-5678",
                                            socialLinks: "linkedin:https://linkedin.com,github:https://github.com",
                                            expertise: "Cloud,Architecture,DevOps,AI/ML",
                                            bgColor: "#ecfdf5",
                                            accentColor: "#059669",
                                            textColor: "var(--theme-text, var(--theme-text))",
                                            secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    },
                                    {
                                        id: "featured-profile-3",
                                        type: "TeamProfile",
                                        props: {
                                            name: "Emily Rodriguez",
                                            title: "Chief Product Officer",
                                            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
                                            bio: "Emily brings 8 years of product expertise and a passion for user-centered design. She has led cross-functional teams to deliver award-winning products that delight millions of customers globally.",
                                            email: "emily@company.com",
                                            phone: "+1 (555) 345-6789",
                                            socialLinks: "linkedin:https://linkedin.com,dribbble:https://dribbble.com",
                                            expertise: "Product,Design,UX,User Research",
                                            bgColor: "#fef3c7",
                                            accentColor: "#d97706",
                                            textColor: "var(--theme-text, var(--theme-text))",
                                            secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    },
                                    {
                                        id: "featured-profile-4",
                                        type: "TeamProfile",
                                        props: {
                                            name: "David Park",
                                            title: "VP Operations",
                                            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
                                            bio: "David specializes in operational excellence and strategic scaling. With 12 years of experience optimizing complex operations, he drives efficiency and enables rapid growth across all company functions.",
                                            email: "david@company.com",
                                            phone: "+1 (555) 456-7890",
                                            socialLinks: "linkedin:https://linkedin.com",
                                            expertise: "Operations,Scaling,Process,Finance",
                                            bgColor: "#f3e8ff",
                                            accentColor: "var(--theme-primary)",
                                            textColor: "var(--theme-text, var(--theme-text))",
                                            secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 3. LEADERSHIP SECTION - Two-tone design with hierarchy
    // ============================================================================
    {
        key: "leadership-section",
        type: "LeadershipSection",
        category: "team",
        name: "Leadership Section",
        description: "Organized hierarchy display of leadership team",
        structure: {
            columns: [
                {
                    id: "leadership-col-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "60px 40px",
                        backgroundColor: "var(--theme-text)"
                    },
                    elements: [
                        {
                            id: "leadership-header",
                            type: "Heading",
                            props: {
                                text: "Executive Leadership",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-background)",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "leadership-description",
                            type: "Paragraph",
                            props: {
                                text: "Our experienced leadership team brings decades of combined expertise",
                                align: "center",
                                color: "var(--theme-border)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "leadership-col-content",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "60px 40px",
                        backgroundColor: "var(--theme-border)"
                    },
                    elements: [
                        {
                            id: "leadership-section-c-level",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                    {
                                        id: "ceo-card",
                                        type: "LeadershipCard",
                                        props: {
                                            name: "Sarah Johnson",
                                            title: "Chief Executive Officer",
                                            level: "C-Suite",
                                            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                                            department: "Executive",
                                            yearsInRole: "5",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            borderColor: "var(--theme-primary, var(--theme-primary))",
                                            levelBgColor: "var(--theme-primary-light, #fee2e2)",
                                            levelTextColor: "var(--theme-primary, var(--theme-primary))"
                                        }
                                    },
                                    {
                                        id: "cto-card",
                                        type: "LeadershipCard",
                                        props: {
                                            name: "Michael Chen",
                                            title: "Chief Technology Officer",
                                            level: "C-Suite",
                                            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                                            department: "Engineering",
                                            yearsInRole: "4",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            borderColor: "var(--theme-primary, var(--theme-primary))",
                                            levelBgColor: "var(--theme-primary-light, #fee2e2)",
                                            levelTextColor: "var(--theme-primary, var(--theme-primary))"
                                        }
                                    },
                                    {
                                        id: "cfo-card",
                                        type: "LeadershipCard",
                                        props: {
                                            name: "Jennifer Lee",
                                            title: "Chief Financial Officer",
                                            level: "C-Suite",
                                            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
                                            department: "Finance",
                                            yearsInRole: "3",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            borderColor: "var(--theme-primary, var(--theme-primary))",
                                            levelBgColor: "var(--theme-primary-light, #fee2e2)",
                                            levelTextColor: "var(--theme-primary, var(--theme-primary))"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            id: "leadership-spacer-2",
                            type: "Spacer",
                            props: { height: "2xl" }
                        },
                        {
                            id: "leadership-subtitle",
                            type: "Heading",
                            props: {
                                text: "Department Heads",
                                tag: "h3",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "600"
                            }
                        },
                        {
                            id: "leadership-spacer-3",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        {
                            id: "leadership-section-heads",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 4, tablet: 2, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                    {
                                        id: "head-1",
                                        type: "LeadershipCard",
                                        props: {
                                            name: "Emily Rodriguez",
                                            title: "VP Product",
                                            level: "VP",
                                            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
                                            department: "Product",
                                            yearsInRole: "3",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            borderColor: "var(--theme-primary)",
                                            levelBgColor: "#ecfdf5",
                                            levelTextColor: "var(--theme-primary)"
                                        }
                                    },
                                    {
                                        id: "head-2",
                                        type: "LeadershipCard",
                                        props: {
                                            name: "David Park",
                                            title: "VP Operations",
                                            level: "VP",
                                            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
                                            department: "Operations",
                                            yearsInRole: "2",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            borderColor: "var(--theme-primary)",
                                            levelBgColor: "#ecfdf5",
                                            levelTextColor: "var(--theme-primary)"
                                        }
                                    },
                                    {
                                        id: "head-3",
                                        type: "LeadershipCard",
                                        props: {
                                            name: "Lisa Thompson",
                                            title: "VP Sales",
                                            level: "VP",
                                            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                                            department: "Sales",
                                            yearsInRole: "4",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            borderColor: "var(--theme-primary)",
                                            levelBgColor: "#ecfdf5",
                                            levelTextColor: "var(--theme-primary)"
                                        }
                                    },
                                    {
                                        id: "head-4",
                                        type: "LeadershipCard",
                                        props: {
                                            name: "Mark Wilson",
                                            title: "VP Marketing",
                                            level: "VP",
                                            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                                            department: "Marketing",
                                            yearsInRole: "3",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            borderColor: "var(--theme-primary)",
                                            levelBgColor: "#ecfdf5",
                                            levelTextColor: "var(--theme-primary)"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 4. BOARD MEMBERS - Premium purple-accented cards
    // ============================================================================
    {
        key: "board-members-section",
        type: "BoardMembers",
        category: "team",
        name: "Board Members",
        description: "Display board of directors with bios and specializations",
        structure: {
            columns: [
                {
                    id: "board-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "60px 40px",
                        backgroundColor: "var(--theme-background)"
                    },
                    elements: [
                        {
                            id: "board-header",
                            type: "Heading",
                            props: {
                                text: "Board of Directors",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "board-subtitle",
                            type: "Paragraph",
                            props: {
                                text: "Guided by industry leaders and visionaries",
                                align: "center",
                                color: "var(--theme-secondary-text, #6b7280)",
                                size: "base"
                            }
                        },
                        {
                            id: "board-spacer",
                            type: "Spacer",
                            props: { height: "sm" }
                        },
                        {
                            id: "board-members-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 32
                                },
                                elements: [
                                    {
                                        id: "board-member-1",
                                        type: "BoardMember",
                                        props: {
                                            name: "Robert Kennedy",
                                            title: "Board Chair",
                                            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
                                            specialization: "Finance & Investment",
                                            company: "Global Capital Partners",
                                            bio: "30+ years in venture capital and investment banking, having led multiple successful exits and IPOs",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            accentColor: "#7c3aed",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "board-member-2",
                                        type: "BoardMember",
                                        props: {
                                            name: "Victoria Chen",
                                            title: "Board Member",
                                            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
                                            specialization: "Technology",
                                            company: "Tech Innovations Inc",
                                            bio: "Former CTO at Fortune 500 tech companies, visionary in cloud infrastructure and AI",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            accentColor: "#7c3aed",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "board-member-3",
                                        type: "BoardMember",
                                        props: {
                                            name: "James Mitchell",
                                            title: "Board Member",
                                            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
                                            specialization: "Operations",
                                            company: "Global Supply Solutions",
                                            bio: "25+ years in operations and supply chain management, expert in scaling global enterprises",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            accentColor: "#7c3aed",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 5. ADVISORS - Colorful tag-style with alternating backgrounds
    // ============================================================================
    {
        key: "advisors-section",
        type: "Advisors",
        category: "team",
        name: "Advisors",
        description: "Display advisory board members and consultants",
        structure: {
            columns: [
                {
                    id: "advisors-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "60px 40px",
                        backgroundColor: "var(--theme-background)"
                    },
                    elements: [
                        {
                            id: "advisors-header",
                            type: "Heading",
                            props: {
                                text: "Advisory Board",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "advisors-description",
                            type: "Paragraph",
                            props: {
                                text: "Strategic advisors providing expert guidance and industry insights",
                                align: "center",
                                color: "var(--theme-secondary-text, #6b7280)",
                                size: "base"
                            }
                        },
                        {
                            id: "advisors-spacer",
                            type: "Spacer",
                            props: { height: "sm" }
                        },
                        {
                            id: "advisors-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 5, tablet: 3, mobile: 2 },
                                    gap: 24
                                },
                                elements: [
                                    {
                                        id: "advisor-1",
                                        type: "Advisor",
                                        props: {
                                            name: "Dr. Sarah Adams",
                                            title: "Tech Strategy",
                                            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                                            expertise: "AI/ML Strategy, Advanced Technology Architecture",
                                            bgColor: "#eff6ff",
                                            accentColor: "var(--theme-primary)",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "advisor-2",
                                        type: "Advisor",
                                        props: {
                                            name: "Prof. James Park",
                                            title: "Innovation Lead",
                                            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                                            expertise: "R&D, Product Innovation, Research Direction",
                                            bgColor: "#ecfdf5",
                                            accentColor: "var(--theme-primary)",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "advisor-3",
                                        type: "Advisor",
                                        props: {
                                            name: "Lisa Chen",
                                            title: "Market Expert",
                                            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
                                            expertise: "Go-to-Market, Sales Strategy, Market Expansion",
                                            bgColor: "#fef3c7",
                                            accentColor: "var(--theme-primary)",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "advisor-4",
                                        type: "Advisor",
                                        props: {
                                            name: "Michael Thompson",
                                            title: "Finance Coach",
                                            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
                                            expertise: "Finance, Fundraising, Growth Planning",
                                            bgColor: "#fce7f3",
                                            accentColor: "#ec4899",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "advisor-5",
                                        type: "Advisor",
                                        props: {
                                            name: "Emma Wilson",
                                            title: "Operations",
                                            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                                            expertise: "Operations, Organizational Design, HR Strategy",
                                            bgColor: "var(--theme-background)",
                                            accentColor: "var(--theme-primary)",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 6. HIRING TEAM - Accent header with red theme
    // ============================================================================
    {
        key: "hiring-team-section",
        type: "HiringTeam",
        category: "team",
        name: "Hiring Team",
        description: "Display open positions and hiring call to action",
        structure: {
            columns: [
                {
                    id: "hiring-col-header",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "60px 40px",
                        backgroundColor: "#fef2f2",
                        borderBottom: "4px solid var(--theme-primary)"
                    },
                    elements: [
                        {
                            id: "hiring-header",
                            type: "Heading",
                            props: {
                                text: "We're Hiring!",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-primary, var(--theme-primary))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "hiring-subtitle",
                            type: "Paragraph",
                            props: {
                                text: "Join our team and help shape the future of technology",
                                align: "center",
                                color: "var(--theme-secondary-text, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "hiring-col-content",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "60px 40px",
                        backgroundColor: "var(--theme-background)"
                    },
                    elements: [
                        {
                            id: "hiring-jobs-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                    {
                                        id: "job-1",
                                        type: "JobOpening",
                                        props: {
                                            title: "Senior Software Engineer",
                                            department: "Engineering",
                                            location: "Remote / San Francisco",
                                            experience: "5+ years",
                                            description: "We're looking for experienced engineers to build our next-gen platform with modern tech stack. You'll work on scalable systems serving millions of users.",
                                            btnText: "Apply Now",
                                            btnLink: "/careers/senior-engineer",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            accentColor: "var(--theme-primary, var(--theme-primary))",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "job-2",
                                        type: "JobOpening",
                                        props: {
                                            title: "Product Manager",
                                            department: "Product",
                                            location: "New York, NY",
                                            experience: "3+ years",
                                            description: "Lead product strategy and drive innovation across our platform. Shape the direction of our products and impact millions of customers.",
                                            btnText: "Apply Now",
                                            btnLink: "/careers/product-manager",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            accentColor: "var(--theme-primary, var(--theme-primary))",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "job-3",
                                        type: "JobOpening",
                                        props: {
                                            title: "UX/UI Designer",
                                            department: "Design",
                                            location: "Remote",
                                            experience: "2+ years",
                                            description: "Design beautiful and intuitive user experiences for our products. You'll collaborate with product and engineering to create delightful interfaces.",
                                            btnText: "Apply Now",
                                            btnLink: "/careers/designer",
                                            bgColor: "var(--theme-surface, var(--theme-background))",
                                            accentColor: "var(--theme-primary, var(--theme-primary))",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 7. COMPANY CULTURE - Green values with colorful icons
    // ============================================================================
    {
        key: "company-culture-section",
        type: "CompanyCulture",
        category: "team",
        name: "Company Culture",
        description: "Showcase company culture, values, and work environment",
        structure: {
            columns: [
                {
                    id: "culture-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "60px 40px",
                        backgroundColor: "var(--theme-background)"
                    },
                    elements: [
                        {
                            id: "culture-header",
                            type: "Heading",
                            props: {
                                text: "Our Culture",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "culture-description",
                            type: "Paragraph",
                            props: {
                                text: "We believe in building a workplace where innovation thrives and people grow",
                                align: "center",
                                color: "var(--theme-secondary-text, #6b7280)",
                                size: "base"
                            }
                        },
                        {
                            id: "culture-spacer-1",
                            type: "Spacer",
                            props: { height: "sm" }
                        },
                        {
                            id: "culture-values-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 4, tablet: 2, mobile: 1 },
                                    gap: 24
                                },
                                elements: [
                                    {
                                        id: "value-1",
                                        type: "CultureValue",
                                        props: {
                                            icon: "🚀",
                                            title: "Innovation",
                                            description: "We encourage bold ideas and creative solutions to complex problems",
                                            bgColor: "#ecfdf5",
                                            accentColor: "var(--theme-primary)",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "value-2",
                                        type: "CultureValue",
                                        props: {
                                            icon: "👥",
                                            title: "Collaboration",
                                            description: "Teamwork makes the dream work. We work together to achieve great results",
                                            bgColor: "#eff6ff",
                                            accentColor: "var(--theme-primary)",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "value-3",
                                        type: "CultureValue",
                                        props: {
                                            icon: "🎯",
                                            title: "Excellence",
                                            description: "We set high standards and deliver quality in everything we do",
                                            bgColor: "#fef3c7",
                                            accentColor: "var(--theme-primary)",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    },
                                    {
                                        id: "value-4",
                                        type: "CultureValue",
                                        props: {
                                            icon: "❤️",
                                            title: "Integrity",
                                            description: "We act with honesty and transparency in all our dealings",
                                            bgColor: "#fce7f3",
                                            accentColor: "#ec4899",
                                            textColor: "var(--theme-text, var(--theme-text))"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // 8. WORKPLACE GALLERY - Gallery with modern styling
    // ============================================================================
    {
        key: "workplace-gallery-section",
        type: "WorkplaceGallery",
        category: "team",
        name: "Workplace Gallery",
        description: "Visual gallery of office spaces, events, and team moments",
        structure: {
            columns: [
                {
                    id: "gallery-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "60px 40px",
                        backgroundColor: "var(--theme-background)"
                    },
                    elements: [
                        {
                            id: "gallery-header",
                            type: "Heading",
                            props: {
                                text: "Life at Our Company",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "gallery-subtitle",
                            type: "Paragraph",
                            props: {
                                text: "Explore our office culture, team events, and workspace",
                                align: "center",
                                color: "var(--theme-secondary-text, #6b7280)",
                                size: "base"
                            }
                        },
                        {
                            id: "gallery-spacer",
                            type: "Spacer",
                            props: { height: "sm" }
                        },
                        {
                            id: "gallery-grid",
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 16
                                },
                                elements: [
                                    {
                                        id: "gallery-item-1",
                                        type: "GalleryImage",
                                        props: {
                                            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
                                            title: "Modern Office Space",
                                            category: "Office",
                                            borderRadius: "12",
                                            hoverEffect: "scale"
                                        }
                                    },
                                    {
                                        id: "gallery-item-2",
                                        type: "GalleryImage",
                                        props: {
                                            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
                                            title: "Team Collaboration",
                                            category: "Workspace",
                                            borderRadius: "12",
                                            hoverEffect: "scale"
                                        }
                                    },
                                    {
                                        id: "gallery-item-3",
                                        type: "GalleryImage",
                                        props: {
                                            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
                                            title: "Company Event",
                                            category: "Events",
                                            borderRadius: "12",
                                            hoverEffect: "scale"
                                        }
                                    },
                                    {
                                        id: "gallery-item-4",
                                        type: "GalleryImage",
                                        props: {
                                            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
                                            title: "Meeting Room",
                                            category: "Office",
                                            borderRadius: "12",
                                            hoverEffect: "scale"
                                        }
                                    },
                                    {
                                        id: "gallery-item-5",
                                        type: "GalleryImage",
                                        props: {
                                            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
                                            title: "Team Lunch",
                                            category: "Events",
                                            borderRadius: "12",
                                            hoverEffect: "scale"
                                        }
                                    },
                                    {
                                        id: "gallery-item-6",
                                        type: "GalleryImage",
                                        props: {
                                            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
                                            title: "Break Room",
                                            category: "Workspace",
                                            borderRadius: "12",
                                            hoverEffect: "scale"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
];
