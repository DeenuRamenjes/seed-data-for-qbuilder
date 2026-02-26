
export const businessHome = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "business-header",
        type: "Header",
        category: "header",
        name: "Elite Handyman Header",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropBlur: true,
                paddingY: 10,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0, 0, 0, 0.05)"
            },
            columns: [{
                id: "header-col",
                width: "100%",
                elements: [{
                    id: "business-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "icon-text",
                        logoText: "Elite",
                        logoAccent: "Handyman",
                        logoIcon: "architecture",
                        logoTextColor: "var(--theme-text)",
                        accentColor: "#005eff",
                        links: [
                            { label: "Services", href: "#" },
                            { label: "Portfolio", href: "#" },
                            { label: "About", href: "#" },
                            { label: "Contact", href: "#" }
                        ],
                        buttonText: "Book Now",
                        buttonLink: "#",
                        buttonStyle: "solid",
                        buttonBgColor: "#aeff00",
                        buttonTextColor: "var(--theme-text)",
                        buttonRadius: "lg",
                        buttonShadow: "4px 4px 0px 0px rgba(0,94,255,1)"
                    }
                }]
            }]
        }
    },

    // ============================================================================
    // SECTIONS
    // ============================================================================
    sections: [
        // HERO SECTION
        {
            key: "business-hero",
            name: "Hero Section",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingTop: 80,
                    paddingBottom: 80,
                    backgroundColor: "var(--theme-background)",
                    overflow: "hidden"
                },
                columns: [
                    {
                        id: "hero-col-left",
                        width: "50%",
                        props: {
                            padding: 24,
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            gap: 48 // Adjusted gap for better balance
                        },
                        elements: [
                            {
                                type: "Badge",
                                props: {
                                    text: "Available for new projects",
                                    color: "var(--theme-text)",
                                    bgColor: "rgba(174, 255, 0, 0.2)",
                                    showPing: true,
                                    borderRadius: "full",
                                    borderColor: "rgba(174, 255, 0, 0.3)",
                                    marginBottom: 24
                                }
                            },
                            {
                                type: "Headline",
                                props: {
                                    text: "Mastering\n[Every](linear-gradient(90deg, #005eff, #005eff)\nDetail", // Using gradient logic for color
                                    tag: "h1",
                                    color: "var(--theme-text)",
                                    fontWeight: "900",
                                    align: "left",
                                    fontSize: "100px", // Added unit for valid CSS
                                    lineHeight: "0.80", // Tighter line height for large text
                                    letterSpacing: "tighter",
                                    uppercase: true,
                                    italic: true // Applying italic globally for consistency if needed, or rely on font weight contrast
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Providing premium repair, maintenance, and architectural upgrades for the modern home. Where precision meets luxury.",
                                    size: "xl",
                                    color: "var(--theme-border)",
                                    fontWeight: "400",
                                    maxWidth: "520px",
                                    lineHeight: "relaxed",
                                    marginTop: "16"
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Book a Consultation",
                                    secondaryText: "View Our Work",
                                    primaryBg: "#aeff00",
                                    primaryColor: "var(--theme-text)",
                                    secondaryBg: "transparent",
                                    secondaryColor: "var(--theme-text)",
                                    gap: "gap-4",
                                    primaryBorderRadius: "lg",
                                    secondaryBorderRadius: "lg",
                                    secondaryBorderColor: "var(--theme-text)",
                                    secondaryBorderWidth: "2px",
                                    marginTop: "16",
                                    borderRadius: "lg"
                                }
                            }
                        ]
                    },
                    {
                        id: "hero-col-right",
                        width: "50%",
                        props: {
                            padding: 24,
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            position: "relative"
                        },
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGL7cicWtoAUo9BqOlBkngjjDbOd11yF8SsyRcn0UsJ61iG6Hr-aJaDeDcjFYCc8LaxfaswuYDkpIdG1V3j2kPU2PnqvGDBOKKSBoXWkCtrXBMSMWffyrPr_spxJ6FtLolKttHbP0J3aZ6t-xzQXba-58ZiGEIFCwcApmSKmkJWYabGLUwY-z3zlREL5mYlfS4YcQXAcpQ1HuGfAmnA0sVMh1fRxmo5fBOzKY9g0_WlqHnLgsoIyehqXULDIrTDiDfggm_kPFI2zY",
                                    alt: "Premium Craftsmanship",
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: "700px", // Reduced size
                                    height: "500px",
                                    backgroundColor: "#f7f8f5",
                                    borderRadius: "24",
                                    overflow: "hidden",
                                    borderColor: "rgba(0,0,0,0.05)",
                                    borderWidth: "1px",
                                    marginX: "auto",
                                    hoverScale: "105",
                                    hoverFilter: "grayscale-0",
                                    filter: "grayscale(100%) contrast(1.1)",
                                    objectFit: "cover"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // VALUE PROPOSITION
        {
            key: "business-value-prop",
            name: "Value Proposition",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f7f8f5",
                    paddingY: 60,
                    paddingX: 100, // Added substantial side padding for "equal gaps"
                    justifyColumns: "center"
                },
                columns: [
                    {
                        id: "prop-rel",
                        width: "23%", // Reduced for 4-column layout
                        elements: [
                            {
                                id: "card-reliability",
                                type: "ServiceCard",
                                props: {
                                    icon: "Clock",
                                    title: "Reliability",
                                    description: "The clockwork of elite service. We value your time as much as our craft. Always punctual.",
                                    iconColor: "#005eff",
                                    iconBg: "var(--theme-background)",
                                    backgroundColor: "transparent",
                                    textColor: "var(--theme-text)",
                                    accentColor: "#aeff00",
                                    showLink: false
                                }
                            }
                        ]
                    },
                    {
                        id: "prop-prec",
                        width: "23%",
                        elements: [
                            {
                                id: "card-precision",
                                type: "ServiceCard",
                                props: {
                                    icon: "Ruler",
                                    title: "Precision",
                                    description: "Measured twice, cut once. We bring an engineer’s eye to every residential project.",
                                    iconColor: "#005eff",
                                    iconBg: "var(--theme-background)",
                                    backgroundColor: "transparent",
                                    textColor: "var(--theme-text)",
                                    accentColor: "#aeff00",
                                    showLink: false
                                }
                            }
                        ]
                    },
                    {
                        id: "prop-exp-unique",
                        width: "23%",
                        elements: [
                            {
                                id: "card-expertise",
                                type: "ServiceCard",
                                props: {
                                    icon: "BadgeCheck",
                                    title: "Expertise",
                                    description: "Mastery in every trade. Our licensed specialists understand modern home infrastructure.",
                                    iconColor: "#005eff",
                                    iconBg: "var(--theme-background)",
                                    backgroundColor: "transparent",
                                    textColor: "var(--theme-text)",
                                    accentColor: "#aeff00",
                                    showLink: false
                                }
                            }
                        ]
                    },
                    {
                        id: "prop-innov",
                        width: "23%",
                        elements: [
                            {
                                id: "card-innovation",
                                type: "ServiceCard",
                                props: {
                                    icon: "Zap", // Innovation/Energy icon
                                    title: "Innovation",
                                    description: "Modern solutions for timeless problems. We stay ahead with the latest smart technologies.",
                                    iconColor: "#005eff",
                                    iconBg: "var(--theme-background)",
                                    backgroundColor: "transparent",
                                    textColor: "var(--theme-text)",
                                    accentColor: "#aeff00",
                                    showLink: false
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // SERVICES GRID (FeatureCard for images)
        {
      key: "food-about-producers-header",
      name: "Producers Header",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f7f5f8",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 96,
          paddingX: 48,
          paddingBottom: 0,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "flex-end",
          justifyContent: "space-between",
          "@media (max-width: 768px)": {
            paddingY: 64,
            paddingX: 24,
            flexDirection: "column",
            alignItems: "flex-start"
          }
        },
        columns: [
          {
            id: "prod-header-left",
            width: "60%",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              { id: "prod-badge", type: "Paragraph", props: { text: "SERVICES", size: "xs", fontWeight: "bold", color: "#aeff00", letterSpacing: 4, marginBottom: 16 } },
              { id: "prod-title", type: "Heading", props: { text: "Specialized Services", tag: "h2", size: "5xl", fontWeight: "bold", color: "#2e0057#005eff" } }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // MEET THE PRODUCERS - CARDS
    // --------------------------------------------------------------------------
    {
      key: "food-about-producers-grid",
      name: "Producer Cards",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f7f5f8",
          fullWidth: true,
          paddingY: 48,
          paddingX: 48,
          paddingBottom: 96,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 32,
          "@media (max-width: 768px)": {
            paddingX: 24,
            gap: 24,
            paddingBottom: 64
          }
        },
        columns: [
          // Producer 1
          {
            id: "prod-1",
            width: "22%",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prod-card-1",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuujnAQ337lB0poYhYp7sByQUQaeVQZ8BxroG7AEMtIFDkzsMdudKrns9pH0U7oBiOvWes_DH0VHOyBWAXT0hYoYZMWxrp9iKi3Uw8H4gmdgwgUCpdpfRPT4l-P8EgAofSpaVU3c4PfVKVgQmCFufd0aikEuhfOm_GQ5zLe9mBCLTuL4k1-XDRxENzPbrH8XH-YBUzNxZZxR6hpnSmmPoFaK8PrikiPJgxmnOXhZhktIOUzNqoqWp1Salrrl5wRCI8MFPp1qp3jNg",
                imageAspectRatio: "1/1",
                title: "Antonio Moretti",
                description: "Olive Grove Steward • 4th Gen — Antonio manages our centennial groves in Tuscany, using pruning techniques passed down from his great-grandfather.",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-text)",
                backgroundColor: "var(--theme-background)",
                borderRadius: "16px",
                padding: "16px",
                textAlign: "left",
                titleSize: "xl",
                fontFamily: "Playfair Display"
              }
            }]
          },
          // Producer 2
          {
            id: "prod-2",
            width: "22%",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prod-card-2",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoOVlF_7YuQz6S8YMPOucQNNu6O-XOs4uBdIsJhKSlf2r_JFHXjDCTVeZwU-SQTMw4cA5Lh8zAFf4owwKg1D1X5vYUJwgjn4nbK4mQw00p9V9bLEZ5TwvvRW4jVSHe03jIdELQEc07LqoC_mfz6rrWuzA-xmb04gyfzAQqIGIxenLXwWaWlapRRRuWHzwKoT_j7DwUyimHe8Ogbm66cVTAeiFRs1SwKEInKmwoS4kKcwP_oxCoLg3Ee5_zDnwbk3Bx1QO7BTgaQfE",
                imageAspectRatio: "1/1",
                title: "Elena Vance",
                description: "Master Boulanger — Elena's secret is her 120-year-old sourdough starter, maintained daily with precision and care in our artisan bakery.",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-text)",
                backgroundColor: "var(--theme-background)",
                borderRadius: "16px",
                padding: "16px",
                textAlign: "left",
                titleSize: "xl",
                fontFamily: "Playfair Display"
              }
            }]
          },
          // Producer 3
          {
            id: "prod-3",
            width: "22%",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prod-card-3",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCYsNKvJxK3lJpbEyfHPNeUj62SIp3vksEnA4gzroTFNV-v6EYyLn0g5bcpUZn6b0fWrxhlNeFk_HcKnxHT3Bd-jfVGdh_Qv7xNq0dfz7xOUaiO8OHPJ-2gPYgfbUZ6xYkWognzXS6M75d8COm4julCTUI1BfbS4CRBboFgSeBHakCcnpEpaNrulw6oGHse5OFzmdUhb9syFxhUhUjPcr7FsEBzm2Xzchjl2H5pFGkD0QC409uXAkqCHM9KIo0cecjLsBRKzHbSg0",
                imageAspectRatio: "1/1",
                title: "Marcus Thorne",
                description: "Head Cheesemaker — A pioneer in regenerative grazing, Marcus ensures our dairy comes from the happiest herds in the valley.",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-text)",
                backgroundColor: "var(--theme-background)",
                borderRadius: "16px",
                padding: "16px",
                textAlign: "left",
                titleSize: "xl",
                fontFamily: "Playfair Display"
              }
            }]
          },
          // Producer 4
          {
            id: "prod-4",
            width: "22%",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prod-card-4",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCYsNKvJxK3lJpbEyfHPNeUj62SIp3vksEnA4gzroTFNV-v6EYyLn0g5bcpUZn6b0fWrxhlNeFk_HcKnxHT3Bd-jfVGdh_Qv7xNq0dfz7xOUaiO8OHPJ-2gPYgfbUZ6xYkWognzXS6M75d8COm4julCTUI1BfbS4CRBboFgSeBHakCcnpEpaNrulw6oGHse5OFzmdUhb9syFxhUhUjPcr7FsEBzm2Xzchjl2H5pFGkD0QC409uXAkqCHM9KIo0cecjLsBRKzHbSg0",
                imageAspectRatio: "1/1",
                title: "Lily Thorne",
                description: "Head Cheesemaker — A pioneer in regenerative grazing, Marcus ensures our dairy comes from the happiest herds in the valley.",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-text)",
                backgroundColor: "var(--theme-background)",
                borderRadius: "16px",
                padding: "16px",
                textAlign: "left",
                titleSize: "xl",
                fontFamily: "Playfair Display"
              }
            }]
          }
        ]
      }
    },
        // SIGNATURE PROJECT
        {
            key: "business-signature",
            name: "Signature Project",
            structure: {
                type: "Section",
                defaultProps: { backgroundColor: "var(--theme-text)", paddingY: 128 },
                columns: [
                    {
                        id: "sig-img",
                        width: "50%",
                        props: { padding: 32, alignItems: "center", justifyContent: "center", position: "relative" },
                        elements: [
                            {
                                id: "sig-card-main",
                                type: "FeatureCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQmTwvoJuPYOnyGD1Rg37NWmcm2NQUTxnXTtTJktY5ZlFwQ8hAMiOb5SzlZlepGg-km1RBvzs5mt0h8BlsMp2LQyr_Gv1Q3UgjFvTWP41bv32Sllt7BTh9FdKCDVSw51R9TrDdhucXgt2n_oMGQ4S9h6zGg9GcOQ5Sj8nTLVrJua7dBxFXK0F1QuDlSn77BliY9rvR5HaJiJaOZLcxDJk5k6zBeP3VJfN3Buk51XLC2Kw5RtE7Zj5aF7QsJiIA16wQb1uay-X9Ro4",
                                    badge: "Signature Project", // Primary badge
                                    badgeColor: "var(--theme-background)",
                                    badgeBg: "#005eff",
                                    imageAspectRatio: "3/4", // Adjust as needed, original was box
                                    overlayGradient: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                                    showArrow: false,
                                    borderRadius: "16px",
                                    title: "2024 Showcase", // Secondary badge mapped to title for visibility
                                    titleColor: "#aeff00"
                                }
                            }
                        ]
                    },
                    {
                        id: "sig-text",
                        width: "50%",
                        props: { padding: 48, flexDirection: "column", gap: 32, justifyContent: "center" },
                        elements: [
                            { id: "sig-headline", type: "Headline", props: { text: "The Signature Kitchen Refinement", tag: "h2", color: "var(--theme-background)", fontWeight: "900", fontSize: "48", lineHeight: "none" } },
                            { id: "sig-desc", type: "Paragraph", props: { text: "A complete transformation of a penthouse kitchen. We integrated custom smart cabinetry, upgraded the electrical grid for professional-grade appliances, and installed bespoke architectural lighting.", color: "rgba(255, 255, 255, 0.6)", size: "lg", fontWeight: "300" } },
                            {
                                id: "sig-list-box",
                                type: "Box",
                                props: { flexDirection: "column", gap: "16px" },
                                elements: [
                                    { id: "sig-list-1", type: "Paragraph", props: { text: "01 / Smart Home Integration", color: "#005eff", fontWeight: "700", borderLeft: "2px solid #aeff00", paddingLeft: "16px", uppercase: true, size: "sm" } },
                                    { id: "sig-list-2", type: "Paragraph", props: { text: "02 / Custom Cabinetry Install", color: "#005eff", fontWeight: "700", borderLeft: "2px solid #aeff00", paddingLeft: "16px", uppercase: true, size: "sm" } },
                                    { id: "sig-list-3", type: "Paragraph", props: { text: "03 / Precision Stone Work", color: "#005eff", fontWeight: "700", borderLeft: "2px solid #aeff00", paddingLeft: "16px", uppercase: true, size: "sm" } },
                                ]
                            },
                            { id: "sig-btn", type: "Button", props: { text: "Full Case Study", variant: "link", textColor: "#aeff00", fontWeight: "700", uppercase: true, icon: "arrow_right_alt" } }
                        ]
                    }
                ]
            }
        },
        // TESTIMONIAL
        {
            key: "business-testimonial",
            name: "Testimonial",
            structure: {
                type: "Section",
                defaultProps: { paddingY: 128, backgroundColor: "var(--theme-background)" },
                columns: [
                    {
                        id: "test-col",
                        width: "100%",
                        props: { flexDirection: "column", alignItems: "center", gap: 32, maxWidth: "800px", margin: "0 auto" },
                        elements: [
                            { id: "test-icon", type: "Icon", props: { icon: "format_quote", size: "64", color: "rgba(174, 255, 0, 0.4)" } },
                            { id: "test-quote", type: "Paragraph", props: { text: '"The level of precision Elite Handyman brought to our home renovation was extraordinary. They don\'t just fix things; they engineer solutions that last."', size: "3xl", align: "center", italic: true, color: "var(--theme-text)", fontWeight: "300" } },
                            { id: "test-divider", type: "Box", props: { width: "64px", height: "4px", backgroundColor: "var(--theme-text)", marginBottom: "16px" } },
                            { id: "test-author", type: "Headline", props: { text: "Julianne Vanderwaal", tag: "h5", align: "center", fontWeight: "900", uppercase: true, fontSize: "14", letterSpacing: "widest" } },
                            { id: "test-role", type: "Paragraph", props: { text: "Design Director, MV Studio", size: "xs", color: "#005eff", align: "center", fontWeight: "700", uppercase: true, letterSpacing: "widest" } }
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
        key: "business-footer",
        type: "Footer",
        category: "footer",
        name: "Elite Footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "var(--theme-text)",
                paddingY: 96,
                textColor: "var(--theme-text)"
            },
            columns: [{
                id: "footer-main",
                width: "100%",
                elements: [{
                    type: "MinimalFooter",
                    props: {
                        brandName: "Elite Handyman",
                        badgeText: "Architecture",
                        badgeColor: "#aeff00",
                        links: [
                            { label: "Privacy Policy", url: "#" },
                            { label: "Terms of Service", url: "#" }
                        ],
                        copyright: "© 2024 Elite Handyman Services. All Rights Reserved.",
                        backgroundColor: "var(--theme-text)",
                        textColor: "rgba(255, 255, 255, 0.6)",
                        showSocials: true
                    }
                }]
            }]
        }
    }
};
