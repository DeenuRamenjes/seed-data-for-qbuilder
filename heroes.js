/**
 * Elite Hero Templates V3
 * These leverage the HeroRenderer's decorative elements and specialized layouts.
 */

export const heroTemplates = [
    // {
    //     key: "hero-vibrant-saas",
    //     type: "Hero",
    //     category: "hero",
    //     name: "Vibrant Tech SaaS",
    //     description: "Modern, high-energy SaaS hero with dashboards and social proof",
    //     structure: {
    //         id: "hero-vsaas-1",
    //         type: "Hero",
    //         props: {
    //             paddingTop: 160,
    //             paddingBottom: 160,
    //             backgroundColor: "var(--theme-text)",
    //             layoutType: "asymmetric",
    //             fullWidth: true,
    //             flexDirection: "row",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             decorativeElements: [
    //                 { type: "mesh", size: "40px 40px" },
    //                 { type: "blob", color: "var(--theme-primary)", width: "600px", height: "600px", top: "20%", left: "10%", opacity: 0.15 },
    //                 { type: "blob", color: "var(--theme-primary)", width: "500px", height: "500px", top: "80%", left: "90%", opacity: 0.15 }
    //             ]
    //         },
    //         columns: [
    //             {
    //                 id: "vsaas-col-1",
    //                 width: "50%",
    //                 props: {
    //                     padding: 40,
    //                     flexDirection: "column",
    //                     alignItems: "flex-start",
    //                     justifyContent: "center"
    //                 },
    //                 elements: [
    //                     { id: "vsaas-badge", type: "Badge", props: { text: "v4.0 IS HERE", color: "var(--theme-primary)", backgroundColor: "rgba(59, 130, 246, 0.1)", borderRadius: 20 } },
    //                     { id: "vsaas-title", type: "Headline", props: { text: "SCALE [FASTER](linear-gradient(to right, var(--theme-primary), var(--theme-primary), #EC4899) THAN EVER", align: "left", color: "var(--theme-background)" } },
    //                     { id: "vsaas-para", type: "Paragraph", props: { text: "The next-generation analytics engine designed for hyper-growth teams. Experience the speed of thought with our real-time processing layer.", align: "left", color: "rgba(255, 255, 255, 0.7)", size: "xl" } },
    //                     { id: "vsaas-btns", type: "ButtonGroup", props: { primaryText: "Get Started Free", secondaryText: "Live Demo", primaryBg: "linear-gradient(to right, var(--theme-primary), var(--theme-primary))" } },
    //                     { id: "vsaas-proof", type: "SocialProof", props: { text: "Trusted by 2,000+ top-tier engineering teams" } }
    //                 ]
    //             },
    //             {
    //                 id: "vsaas-col-2",
    //                 width: "50%",
    //                 props: {
    //                     padding: 20,
    //                     flexDirection: "column",
    //                     alignItems: "center",
    //                     justifyContent: "center"
    //                 },
    //                 elements: [
    //                     { id: "vsaas-dashboard", type: "Dashboard", props: { title: "Production Cluster Alpha", accentColor: "var(--theme-primary)", secondaryColor: "var(--theme-primary)", align: "center" } }
    //                 ]
    //             }
    //         ]
    //     }
    // },
    {
        key: "hero-saas-glory",
        type: "Hero",
        category: "hero",
        name: "SaaS Glory",
        description: "Elite SaaS hero with abstract blobs and high-impact headlines",
        structure: {
            id: "hero-glory-1",
            type: "Hero",
            props: {
                paddingTop: 180,
                paddingBottom: 180,
                backgroundColor: "var(--theme-text)",
                backgroundImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&auto=format&fit=crop&q=60",
                backgroundSize: "cover",
                backgroundOverlay: "rgba(255, 255, 255, 0.9)",
                layoutType: "standard",
                decorativeElements: [
                    { type: "blob", color: "#818cf8", width: "600px", height: "600px", top: "10%", left: "90%", opacity: 0.15 },
                    { type: "blob", color: "#f472b6", width: "500px", height: "500px", top: "80%", left: "0%", opacity: 0.1 }
                ]
            },
            columns: [
                {
                    id: "hglory-col-1",
                    width: "100%",
                    elements: [
                        { id: "hglory-badge", type: "Badge", props: { text: "The Future of Infrastructure", color: "var(--theme-primary)", backgroundColor: "#eef2ff", showPing: true } },
                        { id: "hglory-title", type: "Headline", props: { text: "Deploy at the speed of light.", align: "center", color: "var(--theme-text)" } },
                        { id: "hglory-para", type: "Paragraph", props: { text: "The world's first edge-native platform that combines security, speed, and simplicity. Ship globally in seconds.", align: "center", size: "lg", color: "#475569" } },
                        { id: "hglory-spacer", type: "Spacer", props: { height: "sm" } },
                        { id: "hglory-btn", type: "Button", props: { text: "Start Shipping Free", align: "center", variant: "primary", size: "lg", backgroundColor: "var(--theme-text)", borderRadius: 16 } }
                    ]
                }
            ]
        }
    },
    {
        key: "hero-ultra-wide-v3",
        type: "Hero",
        category: "hero",
        name: "Ultra Wide",
        description: "Cinematic full-width experience with mesh grids",
        structure: {
            id: "hero-wide-1",
            type: "Hero",
            props: {
                paddingTop: 240,
                paddingBottom: 240,
                backgroundColor: "#020617",
                backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80",
                backgroundOverlay: "rgba(0, 0, 0, 0.6)",
                decorativeElements: [
                    { type: "mesh", size: "60px 60px" },
                    { type: "blob", color: "var(--theme-primary)", width: "1000px", height: "1000px", top: "50%", left: "50%", opacity: 0.2 }
                ]
            },
            columns: [
                {
                    id: "hwide-col-1",
                    width: "100%",
                    elements: [
                        { id: "hwide-heading", type: "Headline", props: { text: "LIMITLESS POSSIBILITIES", align: "center", color: "var(--theme-background)" } },
                        { id: "hwide-para", type: "Paragraph", props: { text: "We build digital foundations for companies that dominate their markets.", align: "center", color: "rgba(255, 255, 255, 0.8)", size: "xl" } },
                        { id: "hwide-btn", type: "Button", props: { text: "Our Philosophy", align: "center", variant: "outline", backgroundColor: "var(--theme-background)", borderRadius: 0, textColor: "var(--theme-text)" } }
                    ]
                }
            ]
        }
    },
    {
        key: "hero-luxury-minimal",
        type: "Hero",
        category: "hero",
        name: "Luxury Minimal",
        description: "Sophisticated quiet luxury for premium boutiques with monochrome aesthetic",
        structure: {
            id: "hero-luxury-1",
            type: "Hero",
            props: {
                paddingTop: 80,
                paddingBottom: 80,
                backgroundColor: "var(--theme-text)",
                backgroundImage: "https://img.freepik.com/free-photo/studio-portrait-serious-modern-male-white-shirt-business-jacket-grey-background_613910-13385.jpg?semt=ais_hybrid&w=740&q=80",
                backgroundOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                layoutType: "standard",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            columns: [
                {
                    id: "hlux-col-1",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        { 
                            id: "hlux-badge", 
                            type: "Badge", 
                            props: { 
                                text: "The New Standard", 
                                color: "var(--theme-background)", 
                                backgroundColor: "transparent", 
                                showPing: false,
                                borderRadius: 0
                            } 
                        },
                        {
                            id: "hlux-divider-top",
                            type: "Divider",
                            props: {
                                color: "rgba(255, 255, 255, 0.2)",
                                width: "32px",
                                thickness: 1,
                                style: "solid"
                            }
                        },
                        { 
                            id: "hlux-title", 
                            type: "Headline", 
                            props: { 
                                text: "Pure\nAesthetic", 
                                tag: "h1",
                                align: "center", 
                                color: "var(--theme-background)",
                                fontWeight: "300"
                            } 
                        },
                        { 
                            id: "hlux-para", 
                            type: "Paragraph", 
                            props: { 
                                text: "A curation of form and shadow. Redefining modern luxury through a strictly monochrome lens.", 
                                align: "center", 
                                color: "rgba(255, 255, 255, 0.4)", 
                                size: "base" 
                            } 
                        },
                        {
                            id: "hlux-spacer",
                            type: "Spacer",
                            props: { height: "lg" }
                        },
                        { 
                            id: "hlux-btns", 
                            type: "ButtonGroup", 
                            props: { 
                                primaryText: "View Collection",
                                secondaryText: "Enter Studio",
                                primaryBg: "var(--theme-background)",
                                primaryColor: "var(--theme-text)",
                                primaryBorderRadius: "0",
                                secondaryBg: "transparent",
                                secondaryColor: "rgba(255, 255, 255, 0.4)",
                                secondaryBorderRadius: "0",
                                fontSize: "xs",
                                fontWeight: "700",
                                gap: "gap-12",
                                layout: "flex-col",
                                showPrimaryIcon: true,
                                showSecondaryIcon: false
                            } 
                        }
                    ]
                }
            ]
        }
    },
    {
        key: "hero-product-power",
        type: "Hero",
        category: "hero",
        name: "Product Power",
        description: "Enterprise FinTech hero with signup form and security features - fully responsive",
        structure: {
            id: "hero-power-1",
            type: "Hero",
            props: {
                paddingTop: 60,
                paddingBottom: 60,
                backgroundColor: "#020617",
                layoutType: "standard",
                fullWidth: true,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                decorativeElements: [
                    { type: "blob", color: "#1e3a8a", width: "800px", height: "800px", top: "-10%", left: "25%", opacity: 0.1 },
                    { type: "blob", color: "var(--theme-text)", width: "600px", height: "600px", top: "100%", left: "75%", opacity: 0.3 },
                    { type: "mesh", size: "60px 60px" }
                ]
            },
            columns: [
                {
                    id: "hpower-col-1",
                    width: "100%",
                    props: {
                        padding: 0,
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 48
                    },
                    elements: [
                        {
                            id: "hpower-logo",
                            type: "Badge",
                            props: {
                                text: "SentinelCap",
                                color: "var(--theme-background)",
                                backgroundColor: "var(--theme-primary)",
                                showPing: false,
                                borderRadius: 4
                            }
                        },
                        {
                            id: "hpower-cert-badge",
                            type: "Badge",
                            props: {
                                text: "Institutional Asset Management",
                                color: "var(--theme-border)",
                                backgroundColor: "rgba(15, 23, 42, 0.5)",
                                showPing: true,
                                borderRadius: 0
                            }
                        },
                        {
                            id: "hpower-title",
                            type: "Headline",
                            props: {
                                text: "Secure the Future of your Capital.",
                                tag: "h1",
                                align: "left",
                                color: "var(--theme-background)",
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "hpower-para",
                            type: "Paragraph",
                            props: {
                                text: "A centralized platform for sophisticated liquidity management, real-time risk mitigation, and enterprise-grade portfolio security.",
                                align: "left",
                                color: "var(--theme-border)",
                                size: "lg"
                            }
                        },
                        {
                            id: "hpower-form",
                            type: "CreateAccount",
                            props: {
                                title: "Create an Account",
                                description: "Access the most powerful financial suite built for professionals.",
                                nameLabel: "Full Legal Name",
                                namePlaceholder: "Johnathan Doe",
                                emailLabel: "Institutional Email",
                                emailPlaceholder: "name@company.com",
                                sectorLabel: "Primary Sector",
                                sectorOptions: "Asset Management,FinTech Startup,Investment Banking,Venture Capital",
                                submitText: "Begin Onboarding",
                                disclaimerText: "By proceeding, you agree to our Terms of Service and Privacy Policy.",
                                backgroundColor: "var(--theme-text)",
                                borderRadius: 8,
                                shadow: "xl",
                                titleColor: "var(--theme-background)",
                                descriptionColor: "var(--theme-border)",
                                labelColor: "var(--theme-border)",
                                inputBgColor: "#020617",
                                inputBorderColor: "#334155",
                                inputTextColor: "var(--theme-background)",
                                buttonBgColor: "var(--theme-primary)",
                                buttonTextColor: "var(--theme-background)"
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        key: "hero-autumn-impact",
        type: "Hero",
        category: "hero",
        name: "Autumn Impact Non-Profit",
        description: "Sophisticated non-profit hero with donation card, social proof, and impact stats - fully responsive with theme support",
        structure: {
            id: "hero-autumn-1",
            type: "Hero",
            props: {
                paddingTop: 60,
                paddingBottom: 60,
                paddingLeft: 40,
                paddingRight: 40,
                backgroundColor: "#2D1B14",
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPXJK-jtHExJVRsFFNqhbGIpBr5gSObvutvskWdoeU1PI_ySMMqrcuYDxr19q40mKNXsVzAoPeKUp-fmkffwhf3MltpD8Kik67oyRIDQ0hDI-bhTbel1JtnfAy11t9iF8IicI5cQEFv0I5kZF4GbxA6Krjt11xwnx6sKDNycMfNk97tiN5F4kJ1Bxy5b6fCO9uETniNry5Rkjqf1D9JoVSYBGnAftQqNQhJSAZPYxKKB1qUTfsYRe24NClZlQcC-Jl9mDBOoqg5G0",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOverlay: "linear-gradient(to right, rgba(45, 27, 20, 0.9) 0%, rgba(45, 27, 20, 0.4) 50%, rgba(45, 27, 20, 0) 100%), linear-gradient(to bottom, rgba(45, 27, 20, 0) 0%, rgba(45, 27, 20, 0.3) 100%)",
                minHeight: "auto",
                layoutType: "standard",
                fullWidth: true,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            columns: [
                {
                    id: "haut-col-left",
                    width: "50%",
                    props: {
                        padding: 0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: 24
                    },
                    elements: [
                        {
                            id: "haut-badge",
                            type: "Badge",
                            props: {
                                text: "2024 Autumn Impact Fund",
                                color: "var(--theme-primary)",
                                backgroundColor: "rgba(217, 72, 15, 0.2)",
                                borderRadius: 20,
                                showPing: true
                            }
                        },
                        {
                            id: "haut-title",
                            type: "Headline",
                            props: {
                                text: "Gathering Hope,\nGrowing Together.",
                                tag: "h1",
                                align: "left",
                                color: "var(--theme-background)",
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "haut-para",
                            type: "Paragraph",
                            props: {
                                text: "This season, your kindness provides warmth and food security for 12,000+ families across our rural communities.",
                                align: "left",
                                color: "rgba(255, 255, 255, 0.9)",
                                size: "lg"
                            }
                        },
                        {
                            id: "haut-avatar-group",
                            type: "AvatarGroup",
                            props: {
                                avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX2pANZHrZMJH6Kly3wkuq3zOEWt4Exf9m5qHO0sjL1UZ2_jQiVP1aVfeCFzBObKPqWWQUIU8-_tQy4vfVNnkpeaApuDXpFXAi2q0ynKyFHvb0NgXgozmskHTS6ELx-t8jXM5nrpTt0Nh4-kUyMbBewvsaYG2IDqpIt2DF7g_9chlbDl0Js8kt82roXLRfGadtdIx6sdM3yJauWwO2jg15Dd4GgPIP3YWB5OkyvGBIpnejVzrc4wlXp4bCDlTaqd6_-CWXBIUwrOI",
                                countText: "+5k",
                                countBg: "#9A3412",
                                countColor: "var(--theme-background)",
                                supportText: "Joined by 5,400+ active community heroes",
                                textColor: "var(--theme-text)",
                                textOpacity: "70"
                            }
                        }
                    ]
                },
                {
                    id: "haut-col-right",
                    width: "50%",
                    props: {
                        padding: 0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 24
                    },
                    elements: [
                        {
                            id: "haut-donation-card",
                            type: "DonationCard",
                            props: {
                                title: "Make an Impact",
                                titleColor: "var(--theme-background)",
                                titleIcon: "volunteer_activism",
                                amounts: "25,50,100",
                                selectedAmount: "50",
                                amountColor: "#D9480F",
                                amountTextColor: "var(--theme-background)",
                                customPlaceholder: "Custom Amount",
                                customInputBg: "var(--theme-background)",
                                customInputOpacity: "5",
                                buttonText: "Donate Now",
                                buttonBg: "#D9480F",
                                buttonHoverBg: "#B83A0A",
                                buttonTextColor: "var(--theme-background)",
                                securityText: "Secure payment powered by Stripe",
                                campaignGoalText: "Campaign Goal",
                                campaignAmount: "$500,000",
                                campaignAmountColor: "var(--theme-primary)",
                                goalProgressPercent: 72,
                                progressBarBg: "rgba(255, 255, 255, 0.05)",
                                progressBarFill: "#D9480F",
                                goalProgressText: "72% of our harvest goal reached. Help us bridge the gap.",
                                backgroundColor: "rgba(45, 27, 20, 0.85)",
                                borderColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "24",
                                backdropBlur: "12px"
                            }
                        }
                    ]
                },
                {
                    id: "haut-stats-col",
                    width: "100%",
                    props: {
                        padding: 60,
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "stretch",
                        justifyContent: "space-between",
                        gap: 24,
                        backgroundColor: "#2D1B14",
                        borderTop: "1px solid rgba(255, 255, 255, 0.05)"
                    },
                    elements: [
                        {
                            id: "haut-stat-1",
                            type: "StatsCard",
                            props: {
                                icon: "diversity_3",
                                iconColor: "#D9480F",
                                iconBg: "rgba(217, 72, 15, 0.2)",
                                badge: "+12k",
                                badgeColor: "var(--theme-primary)",
                                badgeBg: "rgba(245, 158, 11, 0.1)",
                                statLabel: "Lives Touched",
                                labelColor: "rgba(255, 255, 255, 0.5)",
                                statValue: "50k+",
                                statValueColor: "var(--theme-background)",
                                backgroundColor: "rgba(154, 52, 18, 0.2)",
                                borderColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "12"
                            }
                        },
                        {
                            id: "haut-stat-2",
                            type: "StatsCard",
                            props: {
                                icon: "agriculture",
                                iconColor: "#D9480F",
                                iconBg: "rgba(217, 72, 15, 0.2)",
                                badge: "Harvest",
                                badgeColor: "var(--theme-primary)",
                                badgeBg: "rgba(245, 158, 11, 0.1)",
                                statLabel: "Sustainable Farms",
                                labelColor: "rgba(255, 255, 255, 0.5)",
                                statValue: "1,200",
                                statValueColor: "var(--theme-background)",
                                backgroundColor: "rgba(154, 52, 18, 0.2)",
                                borderColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "12"
                            }
                        },
                        {
                            id: "haut-stat-3",
                            type: "StatsCard",
                            props: {
                                icon: "group_work",
                                iconColor: "#D9480F",
                                iconBg: "rgba(217, 72, 15, 0.2)",
                                badge: "Active",
                                badgeColor: "var(--theme-primary)",
                                badgeBg: "rgba(245, 158, 11, 0.1)",
                                statLabel: "Community Heroes",
                                labelColor: "rgba(255, 255, 255, 0.5)",
                                statValue: "5,400",
                                statValueColor: "var(--theme-background)",
                                backgroundColor: "rgba(154, 52, 18, 0.2)",
                                borderColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "12"
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        key: "hero-luxury-estate",
        type: "Hero",
        category: "hero",
        name: "Luxury Estate Real Estate",
        description: "Premium luxury real estate hero with gold accents, glass search panel, and fully responsive design",
        structure: {
            id: "hero-luxury-estate-1",
            type: "Hero",
            props: {
                paddingTop: 0,
                paddingBottom: 120,
                backgroundColor: "#041A14",
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSAoof-eBLAQCtXW3Kk9fXz6-_Iy-ZV_CqrOslsx4ZVol5u-WnBGKFy0x3paGG1lquPFcVVMjE3dX8LyveCOP46VkpXtgtk7S4Q-rBB3VuABMJFfxBGfYl3DzP0KhIyoYpWv_gcu2nm6r_Z7Xh3ddV0KhgNro6IbGNJ-0R5DyclYutxa7e2xflhw-lq_TEbhloKVHkb6-SkPg8yun-acLxH5M1OCeBn4X_E2Y0rmwFcQM2yB075B5Ar9q4mwKCvwiN7Oswenk3yqo",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOverlay: "radial-gradient(circle at center, rgba(4, 26, 20, 0.2) 0%, rgba(4, 26, 20, 0.7) 100%)",
                minHeight: "100vh",
                layoutType: "standard",
                fullWidth: true,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            columns: [
                {
                    id: "luxury-estate-main",
                    width: "100%",
                    props: {
                        padding: 0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 32
                    },
                    elements: [
                        {
                            id: "luxury-badge",
                            type: "Badge",
                            props: {
                                text: "The Royal Standard",
                                color: "#D4AF37",
                                backgroundColor: "transparent",
                                borderRadius: 0,
                                showPing: false,
                                icon: "true"
                            }
                        },
                        {
                            id: "luxury-headline",
                            type: "Headline",
                            props: {
                                text: "ETHEREAL\nESTATES",
                                tag: "h1",
                                align: "center",
                                color: "var(--theme-background)",
                                fontWeight: "900",
                                fontSize: "96",
                                lineHeight: "1"
                            }
                        },
                        {
                            id: "luxury-subtitle",
                            type: "Paragraph",
                            props: {
                                text: "Reserved for those who seek the extraordinary. Curated luxury living across the globe's most exclusive coordinates.",
                                align: "center",
                                color: "rgba(255, 255, 255, 0.8)",
                                size: "xl",
                                fontStyle: "italic",
                                maxWidth: "600px"
                            }
                        },
                        {
                            id: "luxury-search-panel",
                            type: "SearchPanel",
                            props: {
                                glassEffect: true,
                                backgroundColor: "rgba(6, 44, 33, 0.75)",
                                borderColor: "rgba(212, 175, 55, 0.25)",
                                backdropBlur: "20px",
                                gap: 4,
                                fields: [
                                    {
                                        id: "location",
                                        label: "Location",
                                        icon: "location_on",
                                        type: "input",
                                        placeholder: "Global Destination...",
                                        iconColor: "#D4AF37"
                                    },
                                    {
                                        id: "portfolio",
                                        label: "Portfolio",
                                        icon: "castle",
                                        type: "select",
                                        options: ["Heritage Mansions", "Modern Penthouse", "Private Atolls", "Alpine Chateaus"],
                                        defaultValue: "Heritage Mansions",
                                        iconColor: "#D4AF37"
                                    },
                                    {
                                        id: "investment",
                                        label: "Investment Range",
                                        icon: "payments",
                                        type: "select",
                                        options: ["$10M - $50M", "$50M - $200M", "$200M+"],
                                        defaultValue: "$10M - $50M",
                                        iconColor: "#D4AF37"
                                    }
                                ],
                                searchButton: {
                                    icon: "explore",
                                    backgroundColor: "linear-gradient(135deg, #D4AF37 0%, #F1E5AC 50%, #996515 100%)",
                                    textColor: "#041A14",
                                    hoverEffect: "brightness"
                                }
                            }
                        },
                        {
                            id: "luxury-features",
                            type: "FeatureRow",
                            props: {
                                features: [
                                    {
                                        label: "Curated Properties",
                                        hasIndicator: true,
                                        indicatorColor: "#D4AF37"
                                    },
                                    {
                                        label: "Global Network",
                                        hasIndicator: true,
                                        indicatorColor: "#D4AF37"
                                    }
                                ],
                                trailingText: "Trusted since 1982",
                                trailingTextColor: "rgba(255, 255, 255, 0.4)",
                                layout: "between"
                            }
                        }
                    ]
                }
            ]
        }
    }
];
