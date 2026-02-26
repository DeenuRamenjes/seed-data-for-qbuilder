/**
 * Textual & Editorial Content Sections
 * Fully responsive, modern sections with improved UI/UX and theme integration
 */

export const textualSectionTemplates = [
    // ============================================================================
    // ABOUT SECTION - Responsive Image + Text
    // ============================================================================
    {
        key: "about-standard",
        type: "Section",
        category: "content",
        name: "About Section Standard",
        description: "Company overview with image and text, fully responsive (mobile-first)",
        structure: {
            id: "about-std-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: "60px",
                paddingBottom: "60px",
            },
            columns: [
                {
                    id: "about-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "40px",
                        gap: "20px",
                    },
                    elements: [
                        {
                            id: "about-badge",
                            type: "Badge",
                            props: {
                                text: "WHO WE ARE",
                                color: "var(--theme-primary, var(--theme-primary))",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "about-h1",
                            type: "Heading",
                            props: {
                                text: "About Our Company",
                                tag: "h2",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        }
                    ]
                },
                {
                    id: "about-img-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 40px 40px 40px",
                    },
                    elements: [
                        {
                            id: "about-img",
                            type: "Image",
                            props: {
                                src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
                                alt: "Team collaboration",
                                borderRadius: "12",
                                objectFit: "cover",
                                shadow: "md"
                            }
                        }
                    ]
                },
                {
                    id: "about-text-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0 40px",
                        gap: "16px",
                    },
                    elements: [
                        {
                            id: "about-p1",
                            type: "Paragraph",
                            props: {
                                text: "We are a forward-thinking company dedicated to delivering exceptional value and innovation. Founded with a mission to transform industries, we combine expertise with creativity to solve complex challenges.",
                                align: "left",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        },
                        {
                            id: "about-p2",
                            type: "Paragraph",
                            props: {
                                text: "Our team of experienced professionals brings together diverse perspectives and deep industry knowledge to create solutions that truly matter.",
                                align: "left",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        },
                        {
                            id: "about-cta",
                            type: "Button",
                            props: {
                                text: "Learn More About Us",
                                link: "#",
                                variant: "primary",
                                size: "md",
                                backgroundColor: "var(--theme-primary, var(--theme-primary))",
                                textColor: "var(--theme-text)",
                                borderRadius: "8"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // MISSION & VISION - Modern Card Layout
    // ============================================================================
    {
        key: "mission-vision",
        type: "Section",
        category: "content",
        name: "Mission & Vision",
        description: "Mission and vision statements in responsive cards",
        structure: {
            id: "mission-vision-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                paddingTop: "80px",
                paddingBottom: "80px",
            },
            columns: [
                {
                    id: "mv-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 40px 60px 40px",
                        gap: "16px",
                    },
                    elements: [
                        {
                            id: "mv-badge",
                            type: "Badge",
                            props: {
                                text: "OUR PURPOSE",
                                color: "var(--theme-primary, var(--theme-primary))",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "mv-heading",
                            type: "Heading",
                            props: {
                                text: "Mission & Vision",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        }
                    ]
                },
                {
                    id: "mission-card-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "40px",
                        gap: "16px",
                        backgroundColor: "var(--theme-background, var(--theme-background))",
                        borderRadius: "12px",
                        marginBottom: "20px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
                    },
                    elements: [
                        {
                            id: "mission-icon",
                            type: "Heading",
                            props: {
                                text: "🎯",
                                tag: "h3",
                                align: "center",
                                color: "#000",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "mission-title",
                            type: "Heading",
                            props: {
                                text: "Our Mission",
                                tag: "h3",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "mission-text",
                            type: "Paragraph",
                            props: {
                                text: "To empower businesses and individuals with innovative solutions that drive growth, create impact, and build a better future.",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "vision-card-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "40px",
                        gap: "16px",
                        backgroundColor: "var(--theme-background, var(--theme-background))",
                        borderRadius: "12px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
                    },
                    elements: [
                        {
                            id: "vision-icon",
                            type: "Heading",
                            props: {
                                text: "🌟",
                                tag: "h3",
                                align: "center",
                                color: "#000",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "vision-title",
                            type: "Heading",
                            props: {
                                text: "Our Vision",
                                tag: "h3",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "vision-text",
                            type: "Paragraph",
                            props: {
                                text: "To be the most trusted and innovative leader, recognized globally for excellence, integrity, and positive impact.",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // VALUES SECTION - Responsive Card Grid
    // ============================================================================
    {
        key: "values-grid",
        type: "Section",
        category: "content",
        name: "Values Section Grid",
        description: "Responsive grid of company values with icons",
        structure: {
            id: "values-grid-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: "80px",
                paddingBottom: "80px",
            },
            columns: [
                {
                    id: "values-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 40px 60px 40px",
                        gap: "16px",
                    },
                    elements: [
                        {
                            id: "values-badge",
                            type: "Badge",
                            props: {
                                text: "CORE VALUES",
                                color: "var(--theme-accent, var(--theme-primary))",
                                bgColor: "var(--theme-accent-light, #fffbeb)",
                                showPing: false
                            }
                        },
                        {
                            id: "values-heading",
                            type: "Heading",
                            props: {
                                text: "What Drives Us",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "values-subheading",
                            type: "Paragraph",
                            props: {
                                text: "Our core values guide every decision we make and shape our company culture.",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "value-1-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "32px 40px",
                        gap: "12px",
                        backgroundColor: "var(--theme-primary-light, #eef2ff)",
                        borderRadius: "12px",
                        marginBottom: "16px",
                    },
                    elements: [
                        {
                            id: "value-1-icon",
                            type: "Heading",
                            props: {
                                text: "💎",
                                tag: "h3",
                                align: "center",
                                color: "#000",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "value-1-title",
                            type: "Heading",
                            props: {
                                text: "Excellence",
                                tag: "h4",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "value-1-desc",
                            type: "Paragraph",
                            props: {
                                text: "We commit to the highest standards in everything we do, from our products to our customer relationships.",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "value-2-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "32px 40px",
                        gap: "12px",
                        backgroundColor: "var(--theme-secondary-light, var(--theme-background))",
                        borderRadius: "12px",
                        marginBottom: "16px",
                    },
                    elements: [
                        {
                            id: "value-2-icon",
                            type: "Heading",
                            props: {
                                text: "🤝",
                                tag: "h3",
                                align: "center",
                                color: "#000",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "value-2-title",
                            type: "Heading",
                            props: {
                                text: "Integrity",
                                tag: "h4",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "value-2-desc",
                            type: "Paragraph",
                            props: {
                                text: "We operate with honesty and transparency in all relationships, building trust through our actions.",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "value-3-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "32px 40px",
                        gap: "12px",
                        backgroundColor: "var(--theme-accent-light, #fffbeb)",
                        borderRadius: "12px",
                    },
                    elements: [
                        {
                            id: "value-3-icon",
                            type: "Heading",
                            props: {
                                text: "🚀",
                                tag: "h3",
                                align: "center",
                                color: "#000",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "value-3-title",
                            type: "Heading",
                            props: {
                                text: "Innovation",
                                tag: "h4",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "value-3-desc",
                            type: "Paragraph",
                            props: {
                                text: "We embrace change and continuously seek better solutions to meet evolving needs.",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // STORY & TIMELINE - Vertical Timeline
    // ============================================================================
    {
        key: "story-timeline",
        type: "Section",
        category: "content",
        name: "Story & Timeline",
        description: "Responsive vertical timeline of company milestones",
        structure: {
            id: "story-timeline-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                paddingTop: "80px",
                paddingBottom: "80px",
            },
            columns: [
                {
                    id: "timeline-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 40px 60px 40px",
                        gap: "16px",
                    },
                    elements: [
                        {
                            id: "timeline-badge",
                            type: "Badge",
                            props: {
                                text: "OUR JOURNEY",
                                color: "var(--theme-primary, var(--theme-primary))",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "timeline-heading",
                            type: "Heading",
                            props: {
                                text: "Our Story Over Time",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        }
                    ]
                },
                {
                    id: "timeline-1-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "32px 40px",
                        marginBottom: "20px",
                        borderLeft: "4px solid var(--theme-primary, var(--theme-primary))",
                        gap: "8px",
                    },
                    elements: [
                        {
                            id: "timeline-year-1",
                            type: "Badge",
                            props: {
                                text: "2020",
                                color: "#fff",
                                bgColor: "var(--theme-primary, var(--theme-primary))",
                                showPing: false
                            }
                        },
                        {
                            id: "timeline-title-1",
                            type: "Heading",
                            props: {
                                text: "Company Founded",
                                tag: "h4",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "timeline-desc-1",
                            type: "Paragraph",
                            props: {
                                text: "Started with a small team and a big vision to transform the industry through innovation and dedication.",
                                align: "left",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "sm"
                            }
                        }
                    ]
                },
                {
                    id: "timeline-2-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "32px 40px",
                        marginBottom: "20px",
                        borderLeft: "4px solid var(--theme-secondary, var(--theme-primary))",
                        gap: "8px",
                    },
                    elements: [
                        {
                            id: "timeline-year-2",
                            type: "Badge",
                            props: {
                                text: "2022",
                                color: "#fff",
                                bgColor: "var(--theme-secondary, var(--theme-primary))",
                                showPing: false
                            }
                        },
                        {
                            id: "timeline-title-2",
                            type: "Heading",
                            props: {
                                text: "Series A Funding",
                                tag: "h4",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "timeline-desc-2",
                            type: "Paragraph",
                            props: {
                                text: "Secured Series A funding to accelerate growth and expand into new markets globally.",
                                align: "left",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "sm"
                            }
                        }
                    ]
                },
                {
                    id: "timeline-3-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "32px 40px",
                        borderLeft: "4px solid var(--theme-accent, var(--theme-primary))",
                        gap: "8px",
                    },
                    elements: [
                        {
                            id: "timeline-year-3",
                            type: "Badge",
                            props: {
                                text: "2024",
                                color: "#000",
                                bgColor: "var(--theme-accent, var(--theme-primary))",
                                showPing: false
                            }
                        },
                        {
                            id: "timeline-title-3",
                            type: "Heading",
                            props: {
                                text: "Market Leadership",
                                tag: "h4",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "timeline-desc-3",
                            type: "Paragraph",
                            props: {
                                text: "Reached market leadership position with over 10,000 satisfied customers worldwide.",
                                align: "left",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "sm"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // FOUNDER'S MESSAGE - Better Responsive Layout
    // ============================================================================
    {
        key: "founders-message",
        type: "Section",
        category: "content",
        name: "Founder's Message",
        description: "Inspirational message from the founder with image",
        structure: {
            id: "founders-message-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: "80px",
                paddingBottom: "80px",
            },
            columns: [
                {
                    id: "founders-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 40px 60px 40px",
                        gap: "16px",
                    },
                    elements: [
                        {
                            id: "founders-badge",
                            type: "Badge",
                            props: {
                                text: "LEADERSHIP",
                                color: "var(--theme-primary, var(--theme-primary))",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "founders-heading",
                            type: "Heading",
                            props: {
                                text: "A Message From Our Founder",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        }
                    ]
                },
                {
                    id: "founders-image-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 40px 10px 40px",
                        gap: "0",
                    },
                    elements: [
                        {
                            id: "founders-image",
                            type: "Image",
                            props: {
                                src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop",
                                alt: "Founder",
                                width: 400,
                                height: 500,
                                borderRadius: "16px",
                                objectFit: "cover",
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                            }
                        }
                    ]
                },
                {
                    id: "founders-content-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0 40px",
                        gap: "24px",
                    },
                    elements: [
                        {
                            id: "founders-name",
                            type: "Heading",
                            props: {
                                text: "Sarah Johnson, CEO & Founder",
                                tag: "h3",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "founders-message-1",
                            type: "Paragraph",
                            props: {
                                text: "When I founded this company in 2020, I had a simple vision: to create solutions that make a real difference in people's lives. What started as a small team with big dreams has evolved into something far greater than I ever imagined.",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                size: "base"
                            }
                        },
                        {
                            id: "founders-message-2",
                            type: "Paragraph",
                            props: {
                                text: "Every day, I'm humbled by the dedication of our team and the trust our customers place in us. We believe that success isn't just about growth metrics—it's about the positive impact we create. That philosophy guides every decision we make.",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                size: "base"
                            }
                        },
                        {
                            id: "founders-message-3",
                            type: "Paragraph",
                            props: {
                                text: "Thank you for being part of our journey. Together, we're building something remarkable.",
                                align: "left",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base",
                                fontStyle: "italic"
                            }
                        },
                        {
                            id: "founders-cta",
                            type: "Button",
                            props: {
                                text: "Learn Our Story",
                                variant: "primary",
                                color: "#fff",
                                bgColor: "var(--theme-primary, var(--theme-primary))",
                                hoverBgColor: "var(--theme-primary-dark, var(--theme-primary))",
                                paddingX: 24,
                                paddingY: 12,
                                borderRadius: 8,
                                cursor: "pointer"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // RICH TEXT CONTENT - Editorial Layout
    // ============================================================================
    {
        key: "rich-text-content",
        type: "Section",
        category: "content",
        name: "Rich Text Content",
        description: "Full-width editorial section with formatted content and better readability",
        structure: {
            id: "rich-text-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: "80px",
                paddingBottom: "80px",
            },
            columns: [
                {
                    id: "rich-text-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 40px 60px 40px",
                        gap: "16px",
                    },
                    elements: [
                        {
                            id: "rich-text-badge",
                            type: "Badge",
                            props: {
                                text: "INSIGHTS & ANALYSIS",
                                color: "var(--theme-secondary, var(--theme-primary))",
                                bgColor: "var(--theme-secondary-light, var(--theme-background))",
                                showPing: false
                            }
                        },
                        {
                            id: "rich-text-title",
                            type: "Heading",
                            props: {
                                text: "Key Insights for Growth",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        }
                    ]
                },
                {
                    id: "rich-text-content-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0 40px",
                        gap: "32px",
                    },
                    elements: [
                        {
                            id: "rich-text-para1",
                            type: "Paragraph",
                            props: {
                                text: "The landscape of our industry is shifting rapidly. New technologies, changing consumer expectations, and global connectivity are reshaping how we operate, innovate, and deliver value.",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                size: "lg",
                                fontWeight: "600"
                            }
                        },
                        {
                            id: "rich-text-para2",
                            type: "Paragraph",
                            props: {
                                text: "To stay ahead, businesses must embrace continuous learning and adaptation. Companies that prioritize innovation while maintaining customer focus will define the next era of success. Our research identifies three critical areas: technological advancement, human-centered design, and sustainable practices.",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                size: "base"
                            }
                        },
                        {
                            id: "rich-text-highlight",
                            type: "HighlightedBox",
                            props: {
                                backgroundColor: "var(--theme-primary-light, #eef2ff)",
                                borderLeftColor: "var(--theme-primary, var(--theme-primary))",
                                borderLeftWidth: "4px",
                                padding: "32px",
                                borderRadius: "8px",
                                text: "Organizations that invest in their people and technology today will capture disproportionate market share tomorrow."
                            }
                        },
                        {
                            id: "rich-text-para3",
                            type: "Paragraph",
                            props: {
                                text: "The future belongs to those who can balance innovation with responsibility, ambition with empathy, and growth with sustainability. By understanding these key insights and taking decisive action, organizations can navigate uncertainty and unlock unprecedented opportunities.",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                size: "base"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // HIGHLIGHTED TEXT BLOCKS - Responsive Card Layout
    // ============================================================================
    {
        key: "highlighted-text-blocks",
        type: "Section",
        category: "content",
        name: "Highlighted Text Blocks",
        description: "Emphasized text blocks with background highlight and card layout",
        structure: {
            id: "highlight-blocks-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                paddingTop: "80px",
                paddingBottom: "80px",
            },
            columns: [
                {
                    id: "highlight-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 40px 60px 40px",
                        gap: "16px",
                    },
                    elements: [
                        {
                            id: "highlight-badge",
                            type: "Badge",
                            props: {
                                text: "KEY TAKEAWAYS",
                                color: "var(--theme-accent, var(--theme-primary))",
                                bgColor: "var(--theme-accent-light, #fffbeb)",
                                showPing: false
                            }
                        },
                        {
                            id: "highlight-heading",
                            type: "Heading",
                            props: {
                                text: "What Makes Us Different",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        }
                    ]
                },
                {
                    id: "highlight-block-1-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "32px 40px",
                        marginBottom: "20px",
                        backgroundColor: "var(--theme-primary-light, #eef2ff)",
                        borderLeftWidth: "4px",
                        borderLeftColor: "var(--theme-primary, var(--theme-primary))",
                        borderRadius: "8px",
                        gap: "12px",
                    },
                    elements: [
                        {
                            id: "highlight-title-1",
                            type: "Heading",
                            props: {
                                text: "Innovation First",
                                tag: "h4",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "highlight-text-1",
                            type: "Paragraph",
                            props: {
                                text: "We constantly push boundaries to deliver cutting-edge solutions that address real-world challenges and drive industry transformation.",
                                align: "left",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "highlight-block-2-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "32px 40px",
                        marginBottom: "20px",
                        backgroundColor: "var(--theme-secondary-light, var(--theme-background))",
                        borderLeftWidth: "4px",
                        borderLeftColor: "var(--theme-secondary, var(--theme-primary))",
                        borderRadius: "8px",
                        gap: "12px",
                    },
                    elements: [
                        {
                            id: "highlight-title-2",
                            type: "Heading",
                            props: {
                                text: "Customer Obsessed",
                                tag: "h4",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "highlight-text-2",
                            type: "Paragraph",
                            props: {
                                text: "Your success is our success. We listen, adapt, and continuously improve based on your feedback and changing needs.",
                                align: "left",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "highlight-block-3-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "32px 40px",
                        backgroundColor: "var(--theme-accent-light, #fffbeb)",
                        borderLeftWidth: "4px",
                        borderLeftColor: "var(--theme-accent, var(--theme-primary))",
                        borderRadius: "8px",
                        gap: "12px",
                    },
                    elements: [
                        {
                            id: "highlight-title-3",
                            type: "Heading",
                            props: {
                                text: "Impact Driven",
                                tag: "h4",
                                align: "left",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "highlight-text-3",
                            type: "Paragraph",
                            props: {
                                text: "We measure success by the positive impact we create—for our customers, our team, and the communities we serve.",
                                align: "left",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // COMPANY OVERVIEW - Responsive Stats Grid
    // ============================================================================
    {
        key: "company-overview",
        type: "Section",
        category: "content",
        name: "Company Overview",
        description: "Comprehensive company information with responsive statistics grid",
        structure: {
            id: "company-overview-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, var(--theme-background))",
                paddingTop: "80px",
                paddingBottom: "80px",
            },
            columns: [
                {
                    id: "overview-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 40px 60px 40px",
                        gap: "16px",
                    },
                    elements: [
                        {
                            id: "overview-badge",
                            type: "Badge",
                            props: {
                                text: "BY THE NUMBERS",
                                color: "var(--theme-primary, var(--theme-primary))",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "overview-heading",
                            type: "Heading",
                            props: {
                                text: "Meet Our Organization",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "overview-description",
                            type: "Paragraph",
                            props: {
                                text: "We're proud of what we've built and the impact we've made across industries and geographies.",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "stat-1-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "32px 40px",
                        marginBottom: "16px",
                        backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                        borderRadius: "8px",
                        gap: "12px",
                    },
                    elements: [
                        {
                            id: "stat-1-value",
                            type: "Heading",
                            props: {
                                text: "500+",
                                tag: "h3",
                                align: "center",
                                color: "var(--theme-primary, var(--theme-primary))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "stat-1-label",
                            type: "Paragraph",
                            props: {
                                text: "Talented Team Members",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                size: "base",
                                fontWeight: "600"
                            }
                        }
                    ]
                },
                {
                    id: "stat-2-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "32px 40px",
                        marginBottom: "16px",
                        backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                        borderRadius: "8px",
                        gap: "12px",
                    },
                    elements: [
                        {
                            id: "stat-2-value",
                            type: "Heading",
                            props: {
                                text: "50+",
                                tag: "h3",
                                align: "center",
                                color: "var(--theme-secondary, var(--theme-primary))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "stat-2-label",
                            type: "Paragraph",
                            props: {
                                text: "Countries Served",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                size: "base",
                                fontWeight: "600"
                            }
                        }
                    ]
                },
                {
                    id: "stat-3-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "32px 40px",
                        marginBottom: "16px",
                        backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                        borderRadius: "8px",
                        gap: "12px",
                    },
                    elements: [
                        {
                            id: "stat-3-value",
                            type: "Heading",
                            props: {
                                text: "10,000+",
                                tag: "h3",
                                align: "center",
                                color: "var(--theme-accent, var(--theme-primary))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "stat-3-label",
                            type: "Paragraph",
                            props: {
                                text: "Happy Customers",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                size: "base",
                                fontWeight: "600"
                            }
                        }
                    ]
                },
                {
                    id: "stat-4-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "32px 40px",
                        backgroundColor: "var(--theme-background-alt, var(--theme-background))",
                        borderRadius: "8px",
                        gap: "12px",
                    },
                    elements: [
                        {
                            id: "stat-4-value",
                            type: "Heading",
                            props: {
                                text: "6+",
                                tag: "h3",
                                align: "center",
                                color: "var(--theme-primary, var(--theme-primary))",
                                fontWeight: "700"
                            }
                        },
                        {
                            id: "stat-4-label",
                            type: "Paragraph",
                            props: {
                                text: "Years in Business",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                size: "base",
                                fontWeight: "600"
                            }
                        }
                    ]
                }
            ]
        }
    }
];
