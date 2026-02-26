/**
 * TechNova Solutions - About/Evolution Page
 * Theme: Digital Evolution, Values, Team, Milestones, Vision
 * Primary Color: #6366f1 (Indigo)
 * Dark Mode: Supported (#0a0a0c background)
 */

const techNovaAbout = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION - Digital Evolution with image and content
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-evolution-hero",
            name: "Evolution Hero Section",
            description: "Hero section with 2-column layout, heading, description, buttons, and featured image",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "row",
                    gap: 64,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "hero-text-col",
                        width: "50%",
                        elements: [
                            {
                                id: "evolution-badge",
                                type: "Badge",
                                props: {
                                    text: "Evolution of Innovation",
                                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                                    textColor: "#6366f1",
                                    borderRadius: 999,
                                    padding: 12,
                                    marginBottom: 24,
                                    fontSize: "xs",
                                    fontWeight: "700",
                                    letterSpacing: "0.2em"
                                }
                            },
                            {
                                id: "evolution-heading",
                                type: "Heading",
                                props: {
                                    text: "Our Digital Evolution.",
                                    tag: "h1",
                                    color: "#000000",
                                    darkColor: "#ffffff",
                                    fontSize: 56,
                                    fontWeight: "900",
                                    lineHeight: 1.2,
                                    marginBottom: 32,
                                    align: "left"
                                }
                            },
                            {
                                id: "evolution-description",
                                type: "Paragraph",
                                props: {
                                    text: "TechNova Solutions isn't just a company; it's a living ecosystem of code, creativity, and human-centric engineering. We're rebuilding the foundations of digital interaction.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    size: "lg",
                                    lineHeight: 1.6,
                                    maxWidth: 500,
                                    marginBottom: 40
                                }
                            },
                            {
                                id: "evolution-buttons",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Explore Ecosystem",
                                    secondaryText: "Our Journey",
                                    primaryLink: "#ecosystem",
                                    secondaryLink: "#journey",
                                    primaryBg: "#6366f1",
                                    primaryColor: "#ffffff",
                                    secondaryBg: "transparent",
                                    secondaryColor: "#1f2937",
                                    darkSecondaryColor: "#ffffff",
                                    secondaryBorder: "2px solid #e5e7eb",
                                    fontSize: "base",
                                    fontWeight: "700",
                                    gap: "gap-4",
                                    layout: "flex-row",
                                    primaryBorderRadius: "16",
                                    secondaryBorderRadius: "16"
                                }
                            }
                        ]
                    },
                    {
                        id: "hero-image-col",
                        width: "50%",
                        elements: [
                            {
                                id: "hero-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChsYbXeWpi7RbyIyLpNy0E989OCrfkvXrZ142S_W7q98uwZFdPc-RF1k6tOhiSLqIZwwP8dsut2Ddq7RI5BhYkrsjb9vi-j6-m0_SNLxO_2UclKsvJA1LBSCarEwp8OuFx7dfBbrr6LMDmahQ1fpljGmyGLYrIZW2uMRY1YbpJ1QyjpfPGuqb6skSMHHtEtKMQriUkO23aSaljv5sPBNjNkWHoRd9b8kg9P8KmjDiH-a8cSMT5rsgmDw-W7OK3qLUQrJeJCMqo2D0",
                                    alt: "Team collaborating in a modern office",
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 24,
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                                    objectFit: "cover"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // VALUES MATRIX SECTION - Using FeatureCard elements in grid layout
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-values",
            name: "Values Matrix Section",
            description: "Grid of value cards with icons and descriptions",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f3f4f6",
                    darkBackgroundColor: "#0d0d0f",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column"
                },
                columns: [
                    {
                        id: "values-header",
                        width: "100%",
                        props: {
                            marginBottom: 48
                        },
                        elements: [
                            {
                                id: "values-heading",
                                type: "Heading",
                                props: {
                                    text: "Values Matrix",
                                    tag: "h2",
                                    color: "#000000",
                                    darkColor: "#ffffff",
                                    fontSize: 40,
                                    fontWeight: "700",
                                    marginBottom: 16,
                                    align: "center"
                                }
                            },
                            {
                                id: "values-subheading",
                                type: "Paragraph",
                                props: {
                                    text: "The core algorithms that define our operational DNA",
                                    color: "#6b7280",
                                    darkColor: "#9ca3af",
                                    size: "base",
                                    marginBottom: 0,
                                    align: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "values-cards-col",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                id: "value-card-1",
                                type: "FeatureCard",
                                props: {
                                    icon: "psychology",
                                    title: "Infinite Learning",
                                    description: "Our codebase matures, and so do we. Every bug is a lesson; every feature is an evolution.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e1e24",
                                    textColor: "#000000",
                                    darkTextColor: "#ffffff",
                                    borderRadius: 24,
                                    padding: 32,
                                    iconColor: "#6366f1"
                                }
                            },
                            {
                                id: "value-card-2",
                                type: "FeatureCard",
                                props: {
                                    icon: "security",
                                    title: "Ethical Encryption",
                                    description: "Privacy is not a feature; it is the fundamental layer upon which we build all architecture.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e1e24",
                                    textColor: "#000000",
                                    darkTextColor: "#ffffff",
                                    borderRadius: 24,
                                    padding: 32,
                                    iconColor: "#10b981"
                                }
                            },
                            {
                                id: "value-card-3",
                                type: "FeatureCard",
                                props: {
                                    icon: "auto_awesome",
                                    title: "Radical Simplicity",
                                    description: "Complexity is a cost. We solve the most difficult problems through the most elegant means.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e1e24",
                                    textColor: "#000000",
                                    darkTextColor: "#ffffff",
                                    borderRadius: 24,
                                    padding: 32,
                                    iconColor: "#f97316"
                                }
                            },
                            {
                                id: "value-card-4",
                                type: "FeatureCard",
                                props: {
                                    icon: "groups",
                                    title: "Synergistic Flow",
                                    description: "Individual brilliance is a spark, but team collaboration is the steady flame of progress.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e1e24",
                                    textColor: "#000000",
                                    darkTextColor: "#ffffff",
                                    borderRadius: 24,
                                    padding: 32,
                                    iconColor: "#3b82f6"
                                }
                            },
                            {
                                id: "value-card-5",
                                type: "FeatureCard",
                                props: {
                                    icon: "rocket_launch",
                                    title: "Future-Proofing",
                                    description: "We don't build for today. We architect for the needs of the next decade and beyond.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e1e24",
                                    textColor: "#000000",
                                    darkTextColor: "#ffffff",
                                    borderRadius: 24,
                                    padding: 32,
                                    iconColor: "#a855f7"
                                }
                            },
                            {
                                id: "value-card-6",
                                type: "FeatureCard",
                                props: {
                                    icon: "eco",
                                    title: "Sustainable Compute",
                                    description: "Efficient code is green code. Our optimizations minimize carbon footprint at every cycle.",
                                    backgroundColor: "#ffffff",
                                    darkBackgroundColor: "#1e1e24",
                                    textColor: "#000000",
                                    darkTextColor: "#ffffff",
                                    borderRadius: 24,
                                    padding: 32,
                                    iconColor: "#f43f5e"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TEAM/SYNAPTIC NETWORK SECTION
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-team",
            name: "Our Synaptic Network",
            description: "Team members with floating circular images in cloud pattern",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    paddingY: 96,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 64
                },
                columns: [
                    {
                        id: "team-header-col",
                        width: "100%",
                        elements: [
                            {
                                id: "team-heading",
                                type: "Heading",
                                props: {
                                    text: "Our Synaptic Network",
                                    tag: "h2",
                                    color: "#000000",
                                    darkColor: "#ffffff",
                                    fontSize: 40,
                                    fontWeight: "700",
                                    marginBottom: 16,
                                    align: "center"
                                }
                            },
                            {
                                id: "team-subheading",
                                type: "Paragraph",
                                props: {
                                    text: "The collective intelligence driving our digital evolution. Meet the minds behind the matrix.",
                                    color: "#6b7280",
                                    darkColor: "#9ca3af",
                                    size: "base",
                                    marginBottom: 0,
                                    align: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "team-images-col",
                        width: "20%",
                        paddingX: 32,
                        elements: [
                            {
                                id: "team-ceo-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLKWYISrq8V_ZMNmLSQ2Y-6f360ODRwJgyARtNCv7juPpzIIFlm7aldKc8Fo9gGHjFk297h764PmohA97BJ-AjaEwsBeUARIjzM4__XiY4F0H-i0x5QDHhuy6Y1ICESKc8XAJYN5QmNaCCJN-tDr5ZtP0SbC-GDDwUKzApTfqLagbmG7IyvCbZXys-ZT5w0CxNpqQf2hZAhUWe9S7Kx_ZOe6WJCz7k4FXmCIntbwn16UfV_BpR9vnpzac95ER5SbEsSx7i2PBWhB8",
                                    alt: "CEO",
                                    width: "200px",
                                    height: "200px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "team-cto-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQy4hx_oeZnmJAGOpNKJ_cj1cm3NNz7aokmyTRecE0jT7YgxMquoukbx34rfrK4QLhqKDxehukFag49_GbHp5H2xA7keeHMYjOUVBgfNYxWBye5VVwLwiiPy7JkXaBHMCuHa0Yc4uPwLlfU7QPiBV-5BeOHzm17QU8XbxRhZgkGfw-sCorLCQy7zDUnXnE5f9Tq-ICxqWXeTaI2QwZKlgD1l0MpdpiOUvt9_AfQvsBoVkWfkR2fE60rRWjENh_MWLKi2eAm6E7HXQ",
                                    alt: "CTO",
                                    width: "130px",
                                    height: "130px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "team-design-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcrMBDWU_DggoYH9fRqIaJTozX0TL6Gx_qcoHKXgGR9ErID9jfazqK0zeDVkpccsYRSqN8YF3-Ftw_7b-LQTKWd5pZW-ye_AU90DfN7J7yCh4Z7iwH4F0gnwJmfpeLU6h-IwiT-IWnB_a4qGPR2rmi_97WDaBb3UpO_OBVPOHc5VhStWFZaGvAR04HocfE5oH78m_vECSymxexWxSEpdRGjShjmabQ1tvkhcE2x8M2jX_waDHkE6WcUxxm2joJFL1G37P_QkYmjtE",
                                    alt: "Design Lead",
                                    width: "150px",
                                    height: "150px",
                                    borderRadius: "50%",
                                    objectFit: "cover"
                                }
                            }
                        ]
                    },
                    {
                        id: "team-info-col",
                        width: "75%",
                        elements: [
                            {
                                id: "team-info-title",
                                type: "Heading",
                                props: {
                                    text: "Brilliant Minds, Unified Vision",
                                    tag: "h3",
                                    color: "#000000",
                                    darkColor: "#ffffff",
                                    fontSize: 32,
                                    fontWeight: "700",
                                    marginBottom: 24,
                                    align: "left"
                                }
                            },
                            {
                                id: "team-info-desc-1",
                                type: "Paragraph",
                                props: {
                                    text: "Our leadership team comprises industry veterans with decades of combined experience in cloud architecture, artificial intelligence, and digital transformation. Each member brings unique expertise that shapes our vision.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    size: "base",
                                    lineHeight: 1.8,
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "team-info-desc-2",
                                type: "Paragraph",
                                props: {
                                    text: "From architecting planetary-scale infrastructure to pioneering AI-driven optimization, our team doesn't just envision the future—we build it. We're passionate about democratizing enterprise-grade technology for businesses of all sizes.",
                                    color: "#4b5563",
                                    darkColor: "#b0b8c4",
                                    size: "base",
                                    lineHeight: 1.8,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "stat-number-1",
                                type: "Heading",
                                props: {
                                    text: "200+",
                                    tag: "h4",
                                    color: "#6366f1",
                                    darkColor: "#818cf8",
                                    fontSize: 28,
                                    fontWeight: "900",
                                    marginBottom: 8,
                                    align: "left"
                                }
                            },
                            {
                                id: "stat-label-1",
                                type: "Paragraph",
                                props: {
                                    text: "Years of Combined Experience",
                                    color: "#6b7280",
                                    darkColor: "#9ca3af",
                                    size: "sm",
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "stat-number-2",
                                type: "Heading",
                                props: {
                                    text: "15+",
                                    tag: "h4",
                                    color: "#6366f1",
                                    darkColor: "#818cf8",
                                    fontSize: 28,
                                    fontWeight: "900",
                                    marginBottom: 8,
                                    align: "left"
                                }
                            },
                            {
                                id: "stat-label-2",
                                type: "Paragraph",
                                props: {
                                    text: "Industry Awards & Recognition",
                                    color: "#6b7280",
                                    darkColor: "#9ca3af",
                                    size: "sm"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // FINAL CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-final-cta",
            name: "Final CTA Section",
            description: "Call to action with gradient background and dual buttons",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#6366f1",
                    darkBackgroundColor: "#4f46e5",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: false,
                    maxWidth: "1000px",
                    margin: "0 auto"
                },
                columns: [
                    {
                        id: "final-cta-col",
                        width: "100%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center"
                        },
                        elements: [
                            {
                                id: "final-cta-badge",
                                type: "Badge",
                                props: {
                                    text: "Next Steps",
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    textColor: "#ffffff",
                                    borderRadius: 999,
                                    padding: 12,
                                    marginBottom: 24,
                                    fontSize: "xs",
                                    fontWeight: "700",
                                    letterSpacing: "0.1em"
                                }
                            },
                            {
                                id: "final-cta-heading",
                                type: "Heading",
                                props: {
                                    text: "Ready to evolve your digital presence?",
                                    tag: "h2",
                                    color: "#ffffff",
                                    darkColor: "#ffffff",
                                    fontSize: 44,
                                    fontWeight: "900",
                                    lineHeight: 1.2,
                                    marginBottom: 20,
                                    align: "center"
                                }
                            },
                            {
                                id: "final-cta-description",
                                type: "Paragraph",
                                props: {
                                    text: "Join the 500+ enterprises that have upgraded their digital infrastructure with TechNova Solutions. Let's architect your future.",
                                    color: "rgba(255, 255, 255, 0.9)",
                                    darkColor: "rgba(255, 255, 255, 0.9)",
                                    size: "lg",
                                    lineHeight: 1.6,
                                    marginBottom: 48,
                                    align: "center",
                                    maxWidth: "600px"
                                }
                            },
                            {
                                id: "final-cta-buttons",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Start Your Evolution",
                                    secondaryText: "Schedule Consultation",
                                    primaryLink: "#contact",
                                    secondaryLink: "#consultation",
                                    primaryBg: "#ffffff",
                                    primaryColor: "#6366f1",
                                    primaryBorderRadius: "12",
                                    secondaryBg: "rgba(255, 255, 255, 0.15)",
                                    secondaryColor: "#ffffff",
                                    secondaryBorder: "1px solid rgba(255, 255, 255, 0.3)",
                                    secondaryBorderRadius: "12",
                                    fontSize: "base",
                                    fontWeight: "700",
                                    gap: "gap-4",
                                    layout: "flex-row",
                                    justifyContent: "center"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = techNovaAbout;
