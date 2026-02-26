/**
 * Construction Template - About Page
 * Theme: Apex Structures
 */

const constructionHome = require('./construction-home.cjs');

const constructionAbout = {
  // ============================================================================
  // HEADER (shared)
  // ============================================================================
  header: constructionHome.header,

  // ============================================================================
  // SECTIONS
  // ============================================================================
  sections: [
    // --------------------------------------------------------------------------
    // HERO
    // --------------------------------------------------------------------------
    {
      key: "construction-about-hero",
      name: "About Hero",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundImage: "https://img.freepik.com/free-photo/park-lujiazui-financial-centre_1127-3343.jpg?t=st=1770893044~exp=1770896644~hmac=f306ae0c0eab985e4a64c2bf6156b0a75f49fa4e468288ce80afdfdcb97f93b3",
          backgroundOpacity: 0.6,
          backgroundColor: "var(--theme-text)",
          backgroundGradient: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 100%)",
          fullWidth: true,
          fontFamily: "Merriweather",
          paddingY: 160,
          paddingX: 48,
          layout: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          minHeight: "80vh"
        },
        columns: [{
          id: "hero-col",
          width: "100%",
          elements: [
            {
               id: "est-badge",
               type: "Box",
               props: { backgroundColor: "var(--theme-primary)", padding: "8px 16px", display: "inline-block", marginBottom: 24, borderRadius: "2px" },
               children: [{ id: "est-txt", type: "Paragraph", props: { text: "Established 1985", color: "var(--theme-text)", size: "xs", fontWeight: "900", textTransform: "uppercase", letterSpacing: "widest" } }]
            },
            {
               id: "hero-h1",
               type: "Heading",
               props: { text: "Redefining\nThe Skyline", tag: "h1", size: "7xl", fontWeight: "900", color: "var(--theme-background)", lineHeight: 0.9, textTransform: "uppercase", letterSpacing: "tighter", marginBottom: 32 }
            },
            {
               id: "hero-p",
               type: "Paragraph",
               props: { text: "Apex Structures is an architectural powerhouse dedicated to the fusion of industrial precision and avant-garde design. We build the future with steel, soul, and uncompromising vision.", size: "xl", color: "var(--theme-background)", fontWeight: "light", maxWidth: "600px" }
            }
          ]
        }]
      }
    },
    // --------------------------------------------------------------------------
    // THE SOURCE SECTION
    // --------------------------------------------------------------------------
    {
      key: "food-about-source",
      name: "The Source",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          fontFamily: "Merriweather",
          paddingY: 96,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 48,
          alignItems: "center",
          "@media (max-width: 768px)": {
            paddingY: 64,
            paddingX: 24,
            gap: 32
          }
        },
        columns: [
          // Image
          {
            id: "source-image",
            width: "calc(58.33% - 24px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "source-img",
              type: "FeatureCard",
              props: {
                image: "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1770892901~exp=1770896501~hmac=4278b59e8cbccf222d21e7440d50772e37f73d3a917c6f6e802540479ce4c62a",
                imageAspectRatio: "16/9",
                backgroundColor: "transparent",
                borderRadius: "16px",
                padding: "0",
                fontFamily: "Merriweather"
              }
            }]
          },
          // Text
          {
            id: "source-text",
            width: "calc(41.67% - 24px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              { id: "source-badge", type: "Paragraph", props: { text: "ABOUT US", size: "xs", fontWeight: "bold", color: "#ffe100", letterSpacing: 4, marginBottom: 16 } },
              { id: "source-title", type: "Heading", props: { text: "Building Sustainably for the Next Generation", tag: "h2", size: "4xl", fontWeight: "bold", color: "var(--theme-background)", marginBottom: 32 } },
              { id: "source-p1", type: "Paragraph", props: { text: "We believe that structures should do more than just exist, they should inspire and endure. Our mission is to redefine urban development through precision engineering and carbon-neutral building practices.", size: "lg", color: "var(--theme-background)", lineHeight: 1.7, marginBottom: 24 } },
              { id: "source-p2", type: "Paragraph", props: { text: "From smart-glass facades that harvest solar energy to foundations made with recycled composites, every project is a testament to our commitment to the planet.", size: "lg", color: "var(--theme-background)", lineHeight: 1.7, marginBottom: 32 } }
            ]
          }
        ]
      }
    },
        // --------------------------------------------------------------------------
        // TIMELINE SECTION - THE EVOLUTION
        // --------------------------------------------------------------------------
        {
            key: "tech-about-timeline",
            name: "Evolution Timeline",
            description: "Company milestones and journey timeline",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-text)",
                    darkBackgroundColor: "var(--theme-text)",
                    fullWidth: true,
                },
                columns: [{
                    id: "timeline-col",
                    width: "100%",
                    props: {
                        maxWidth: "1200px",
                        marginX: "auto"
                    },
                    elements: [
                        {
                            id: "timeline-items",
                            type: "TimelineSection",
                            props: {
                                milestones: [
                                    {
                                        year: "2018",
                                        title: "Foundation",
                                        description: "Apex Structures founded as a boutique engineering firm in New York, focused on sustainable residential redevelopment.",
                                        color: "#ffe100"
                                    },
                                    {
                                        year: "2020",
                                        title: "Global Expansion",
                                        description: "Secured our first international mega-project, the Zenith Tower in Dubai, establishing our reputation on the world stage.",
                                        color: "#ffe100"
                                    },
                                    {
                                        year: "2022",
                                        title: "GreenTech-Initiative",
                                        description: "Launched the Zero-Carbon Construction initiative, integrating recycled structural steel in 90% of our builds.",
                                        color: "#ffe100"
                                    },
                                    {
                                        year: "Today",
                                        title: "Present Era",
                                        description: "Leading the industry with Digital Twin technology and modular construction for ultra-efficient urban living.",
                                        color: "#ffe100"
                                    }
                                ],
                                backgroundColor: "#131313ff",
                                textColor: "#ffe100",
                                subtitleColor: "var(--theme-background)"
                            }
                        }
                    ]
                }]
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
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          fontFamily: "merriweather",
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
          {
             id: "prod-head",
             width: "100%",
             elements: [
               { id: "ph-1", type: "Heading", props: { text: "Meet the Team", align: "center", size: "5xl", fontWeight: "900", color: "var(--theme-background)", textTransform: "uppercase", letterSpacing: "tighter", marginBottom: 48 } }
             ]
          },
          // Producer 1
          {
            id: "prod-1",
            width: "calc(33.33% - 22px)",
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
                titleColor: "#ffe100",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "var(--theme-text)",
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
            width: "calc(33.33% - 22px)",
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
                titleColor: "#ffe100",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "var(--theme-text)",
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
            width: "calc(33.33% - 22px)",
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
                titleColor: "#ffe100",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "var(--theme-text)",
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
    // --------------------------------------------------------------------------
    // CTA
    // --------------------------------------------------------------------------
    {
       key: "construction-cta",
       name: "Big CTA",
       structure: {
         type: "Section",
         props: {
           backgroundColor: "#ffe100", // accent-yellow
           paddingY: 160,
           paddingX: 48,
           fontFamily: "Merriweather"
         },
         columns: [
           {
             id: "cta-col",
             width: "100%",
             props: { align: "center", display: "flex", flexDirection: "column", alignItems: "center" },
             elements: [
               { id: "cta-h", type: "Heading", props: { text: "Ready to build the impossible?", size: "7xl", fontWeight: "900", color: "var(--theme-text)", textTransform: "uppercase", letterSpacing: "tighter", lineHeight: 0.9, marginBottom: 40, align: "center" } },
               {
                 id: "cta-btns",
                 type: "Button",
                 props: {
                   layout: "horizontal",
                   variant: "primary",
                   backgroundColor: "var(--theme-text)",
                   align: "center",
                   justifyContent: "center",
                   buttons: [
                     { text: "Start Your Project",size: "lg", variant: "primary", backgroundColor: "var(--theme-text)", textColor: "var(--theme-text)", borderRadius: "full", padding: "20px 40px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "widest" },
                   ]
                 }
               }
             ]
           }
         ]
       }
    }
  ],

  // ============================================================================
  // FOOTER (shared)
  // ============================================================================
  footer: constructionHome.footer
};

module.exports = constructionAbout;
