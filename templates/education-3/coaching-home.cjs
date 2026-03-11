const coachingHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "coaching-header",
        name: "Coaching Header",
        structure: {
            type: "Navbar",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                showBorder: true,
                borderColor: "rgba(18, 30, 109, 0.05)",
                height: "80px",
                className: "backdrop-blur-md z-50 fixed top-0 w-full"
            },
            props: {
                logo: {
                    text: "THE CATALYST",
                    logoColor: "#121E6D",
                    fontWeight: "black",
                    letterSpacing: "tighter",
                    className: "uppercase text-2xl flex items-center gap-2"
                },
                links: [
                    { label: "Home", href: "/", className: "text-sm font-bold uppercase tracking-widest hover:text-[#e68600] transition-colors" },
                    { label: "About", href: "/about", className: "text-sm font-bold uppercase tracking-widest hover:text-[#e68600] transition-colors" },
                    { label: "Courses", href: "/courses", className: "text-sm font-bold uppercase tracking-widest hover:text-[#e68600] transition-colors" },
                    { label: "Contact", href: "/contact", className: "text-sm font-bold uppercase tracking-widest hover:text-[#e68600] transition-colors" }
                ],
                ctaButton: {
                    text: "APPLY NOW",
                    href: "/contact",
                    variant: "primary",
                    backgroundColor: "#e68600",
                    textColor: "#ffffff",
                    borderRadius: "0.5rem",
                    height: "44px",
                    className: "px-6 font-black uppercase tracking-widest text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all"
                }
            }
        }
    },

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "coaching-hero",
            name: "Coaching Hero",
            structure: {
                type: "LinksHero",
                defaultProps: {
                    backgroundColor: "#f8f7f5",
                    paddingY: 40,
                    paddingX: 24
                },
                props: {
                    title: "MASTER YOUR POTENTIAL",
                    description: "Transformative Executive Coaching designed to shatter ceilings and elevate your leadership trajectory. The executive edge you need.",
                    primaryCtaText: "Start Your Journey",
                    primaryCtaLink: "/contact",
                    secondaryCtaText: "View Programs",
                    secondaryCtaLink: "/courses",
                    stats: [
                        { value: "500+", label: "Leaders Coached", icon: "Users" },
                        { value: "98%", label: "Success Rate", icon: "Link" },
                        { value: "15+", label: "Countries", icon: "UserCheck" }
                    ],
                    socialLinks: [
                        { platform: "facebook", url: "#" },
                        { platform: "linkedin", url: "#" },
                        { platform: "instagram", url: "#" },
                        { platform: "youtube", url: "#" }
                    ],
                    images: [
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnM342QTsz4_MJejctgxsTbTn68es-Dz5HRCAkGJNQGofpSPxs93MbPOKA5ZnU3iPDkybbutsnCVv6Zf63cbKsK9wv2HGbPQWulqAtze32hEVKMY4PVpqCguuVpcct7edI6eedpGSFVvNiWeFts029Q_RnpdhQvt1twN5e2VI2Vkl4f43j5UdRzsNF9oO5FXpZm4OsdQLi09Lm-olmnWxxo9p17WxGidojXfAf23PMzkAqk-NvBHWuihj18A1tPUWs7DhnbkMRrVS2",
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAU3x6ECqw-Lr7E1v0RT_T_abNp3kKNtO0-pv_ZnXJKNDedg9JkZRHhETMsPISnw-wlT_W34JiwvmpwquIwYtc2zzmbDsQmJJT6YK0Rth_vG4uCLew68JuI-AVfPBtd_rKTKi_mvZthMuCmOTElLt0gUU2mIv25Pp7X6zXeT-Y4-YUg4bpN_NSs2KB_wjVyyN7-ehHF3ARLQ2tX7I7h-fotZsPqUxZYlkGb-1xBDJNK2p9mqXVACDNPHXyINlScQzW7L8LemozvZdy5",
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsXJoKE55vveFim59vUhXGLlo2jDfN_XZQzZ47JcqtXSD2KJETfC2JZnSglXp1aidm1fwFQb-qpMTufCW9AjzLWc_aDqyrLOLUuDK2WY2zHyRPKFiIltfr_-rreCm8PMzoGZIcQAxd738wVGCJSf5lpvH_c88dq3E9rMNGpLLEPoLnfwsbuDZ39CaNVBaPtZG3W-0ic4XqWMapr8sXlCUBb7ScLAmYuUdn3w9-EYoJr0Uqsg8sxuEJ2uoetwOj2FjbNEhdTLSQZxjS"
                    ],
                    textColor: "#121E6D",
                    primaryColor: "#121E6D",
                    accentColor: "#e68600"
                }
            }
        },

        // --------------------------------------------------------------------------
        // DYNAMIC STATISTICS
        // --------------------------------------------------------------------------
        {
            key: "coaching-stats",
            name: "Dynamic Statistics",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#121E6D",
                    paddingY: 60,
                    paddingX: 24,
                    fullWidth: false,
                    className: "relative z-20 mt-[-5%] mb-[-5%] clip-path-polygon"
                },
                columns: [
                    {
                        id: "stats-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "MEASURABLE IMPACT",
                                    tag: "h2",
                                    size: "5xl",
                                    color: "#ffffff",
                                    fontWeight: "black",
                                    className: "uppercase leading-none mb-6 text-center"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Delivering tangible results and transformative growth for leaders worldwide.",
                                    size: "xl",
                                    color: "rgba(255, 255, 255, 0.7)",
                                    className: "max-w-2xl mx-auto mb-16 text-center"
                                }
                            }
                        ]
                    },
                    {
                        id: "stats-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 48,
                        elements: [
                            {
                                type: "BusinessCard",
                                props: {
                                    numberText: "01",
                                    iconName: "TrendingUp",
                                    title: "500+",
                                    description: "Leaders Coached. Global industry leaders at Fortune 500 companies.",
                                    buttonText: "Read More",
                                    buttonLink: "/about",
                                    primaryColor: "#121E6D",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    textColor: "#ffffff",
                                    descriptionColor: "rgba(255, 255, 255, 0.7)",
                                    accentColor: "#D3E600"
                                }
                            },
                            {
                                type: "BusinessCard",
                                props: {
                                    numberText: "02",
                                    iconName: "Target",
                                    title: "98%",
                                    description: "Success Rate. Measurable impact on team performance and retention.",
                                    buttonText: "Read More",
                                    buttonLink: "/about",
                                    primaryColor: "#121E6D",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    textColor: "#ffffff",
                                    descriptionColor: "rgba(255, 255, 255, 0.7)",
                                    accentColor: "#e68600"
                                }
                            },
                            {
                                type: "BusinessCard",
                                props: {
                                    numberText: "03",
                                    iconName: "Globe",
                                    title: "15+",
                                    description: "Countries. Global perspective with localized cultural intelligence.",
                                    buttonText: "Read More",
                                    buttonLink: "/about",
                                    primaryColor: "#121E6D",
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    textColor: "#ffffff",
                                    descriptionColor: "rgba(255, 255, 255, 0.7)",
                                    accentColor: "#590094"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // ASYMMETRIC CONTENT SECTION
        // --------------------------------------------------------------------------
        {
            key: "coaching-asymmetric",
            name: "Asymmetric Content",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f7f5",
                    paddingY: 60,
                    paddingX: 24,
                    fullWidth: false,
                    className: "overflow-hidden relative"
                },
                columns: [
                    {
                        width: "100%",
                        elements: [
                            {
                                type: "AboutCard",
                                props: {
                                    label: "THE CATALYST METHOD",
                                    title: "BEYOND THE BOARDROOM",
                                    description: "We believe that true leadership starts from within. Our holistic approach combines psychological depth with corporate strategy to create leaders who are not just effective, but truly inspiring.",
                                    ctaText: "Discover Method →",
                                    ctaLink: "/about",
                                    image1Src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                                    image1Alt: "Executive coaching session",
                                    image2Src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
                                    image2Alt: "Dynamic team brainstorming",
                                    bulletPoints: "Holistic approach,Psychological depth,Corporate strategy,Inspiring leadership",
                                    experienceNumber: "10+",
                                    experienceText: "Years Coaching",
                                    cardBgColor: "#ffffff",
                                    labelColor: "#e38800",
                                    titleColor: "#1d2361",
                                    textColor: "rgba(29, 35, 97, 0.7)",
                                    bulletIconColor: "#e38800",
                                    buttonBgColor: "#e38800",
                                    buttonTextColor: "#ffffff",
                                    experienceBgColor: "#1d2361",
                                    experienceTextColor: "#ffffff"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // FEATURES GRID
        // --------------------------------------------------------------------------
        {
            key: "coaching-features",
            name: "Features Grid",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 60,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "features-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "ELEVATE YOUR LEADERSHIP",
                                    tag: "h2",
                                    size: "5xl",
                                    color: "#121E6D",
                                    fontWeight: "black",
                                    className: "uppercase leading-none mb-6"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Our framework isn't just theory. It's a high-impact catalyst for professional evolution.",
                                    size: "xl",
                                    color: "rgba(18, 30, 109, 0.6)",
                                    className: "max-w-2xl mb-20"
                                }
                            }
                        ]
                    },
                    {
                        id: "features-grid",
                        width: "100%",
                        layout: "grid",
                        justifyContent: "center",
                        alignItems:"Center",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "Target",
                                    title: "Strategic Vision",
                                    description: "Develop long-term goals and actionable plans that align with your organization's core mission and future trajectory.",
                                    iconColor: "#ffffff",
                                    iconBg: "#590094",
                                    backgroundColor: "#f8f7f5",
                                    textColor: "#121E6D",
                                    accentColor: "#590094",
                                    showLink: false,
                                    align: "center",
                                    borderRadius: 24,
                                    padding: 20,
                                    className: "group hover:bg-white hover:shadow-2xl transition-all hover:border-[#590094]"
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "Verified",
                                    title: "Executive Presence",
                                    description: "Command the room with confidence and clarity. Master the art of high-stakes communication and interpersonal influence.",
                                    iconColor: "#ffffff",
                                    iconBg: "#e68600",
                                    backgroundColor: "#f8f7f5",
                                    textColor: "#121E6D",
                                    accentColor: "#e68600",
                                    showLink: false,
                                    align: "center",
                                    borderRadius: 24,
                                    padding: 20,
                                    className: "group hover:bg-white hover:shadow-2xl transition-all md:-translate-y-8 hover:border-[#e68600]"
                                }
                            },
                            {
                                type: "ServiceCard",
                                props: {
                                    icon: "Activity",
                                    title: "Adaptive Leadership",
                                    description: "Navigate complex organizational changes with ease. Build resilience and agility into your decision-making process.",
                                    iconColor: "#121E6D",
                                    iconBg: "#D3E600",
                                    backgroundColor: "#f8f7f5",
                                    textColor: "#121E6D",
                                    accentColor: "#D3E600",
                                    showLink: false,
                                    align: "center",
                                    borderRadius: 24,
                                    padding: 20,
                                    className: "group hover:bg-white hover:shadow-2xl transition-all hover:border-[#D3E600]"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // CTA SECTION
        // --------------------------------------------------------------------------
        {
            key: "coaching-cta",
            name: "Coaching CTA",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 128,
                    paddingX: 24,
                    fullWidth: false,
                    className: "relative overflow-hidden text-center"
                },
                columns: [
                    {
                        id: "cta-content",
                        width: "100%",
                        props: {
                            className: "relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center"
                        },
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "READY FOR THE\n CATALYST?",
                                    tag: "h2",
                                    size: "6xl",
                                    color: "#121E6D",
                                    fontWeight: "black",
                                    className: "mb-8 leading-none uppercase",
                                    align: "center"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Limited spaces available for our 2024 Elite Executive Cohort. Accelerate your career with precision coaching.",
                                    size: "xl",
                                    color: "rgba(18, 30, 109, 0.6)",
                                    className: "mb-12 max-w-2xl mx-auto",
                                    align: "center"
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Schedule Consultation",
                                    primaryLink: "/contact",
                                    primaryBg: "#121E6D",
                                    primaryColor: "#ffffff",
                                    primaryBorderRadius: "0.75rem",
                                    secondaryText: "Download Brochure",
                                    secondaryLink: "/courses",
                                    secondaryBg: "transparent",
                                    secondaryColor: "#121E6D",
                                    className: "flex justify-center flex-wrap gap-6 items-center",
                                    justifyContent: "center"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    // ============================================================================
    // FOOTER
    // ============================================================================
    footer: {
        key: "coaching-footer",
        type: "Footer",
        category: "footer",
        name: "Coaching Footer",
        description: "Dark footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#121E6D",
                paddingY: 80,
                paddingX: 24,
                fullWidth: true
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "50%",
                    elements: [
                        {
                            type: "Headline",
                            props: {
                                text: "THE CATALYST",
                                tag: "h4",
                                color: "#ffffff",
                                marginBottom: "24px",
                                className: "uppercase italic font-black text-xl"
                            }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "High-impact coaching for executives who demand more than the status quo. Global reach. Measurable results.",
                                color: "rgba(255, 255, 255, 0.5)",
                                maxWidth: "400px",
                                marginBottom: "32px",
                                size: "sm"
                            }
                        },
                        {
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "twitter", url: "#" },
                                    { platform: "linkedin", url: "#" }
                                ],
                                iconColor: "#ffffff",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-programs",
                    width: "25%",
                    elements: [
                        {
                            type: "LinkList",
                            props: {
                                title: "PROGRAMS",
                                titleColor: "#ffffff",
                                textColor: "rgba(255, 255, 255, 0.5)",
                                hoverColor: "#e68600",
                                items: [
                                    { label: "Executive Core", href: "#" },
                                    { label: "Elite Transition", href: "#" },
                                    { label: "Boardroom Ready", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-newsletter",
                    width: "25%",
                    elements: [
                        {
                            type: "NewsletterSignup",
                            props: {
                                title: "SUBSCRIBE",
                                titleColor: "#ffffff",
                                placeholder: "Email",
                                buttonText: "Send",
                                buttonBg: "#e68600",
                                buttonTextColor: "#ffffff",
                                inputBg: "rgba(255, 255, 255, 0.05)",
                                description: "Subscribe to our newsletter.",
                                descriptionColor: "rgba(255, 255, 255, 0.5)"
                            }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = coachingHome;
