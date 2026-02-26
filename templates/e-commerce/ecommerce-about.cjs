/**
 * E-Commerce Template - About / Product Drop Page
 * Theme: TECH-STREET – "The Future Is Here" product launch page
 * Colors: Primary var(--theme-text), Secondary #D3ADFF, Accent #89D900
 * Font: Space Grotesk
 */

const ecommerceAbout = {
  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION – Product Launch
    // --------------------------------------------------------------------------
    {
      key: "ecommerce-about-hero",
      name: "Product Drop Hero",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "var(--theme-text)",
          fullWidth: false,
          fontFamily: "Space Grotesk",
          paddingY: 120,
          paddingX: 80,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          "@media (max-width: 1024px)": {
            paddingY: 80,
            paddingX: 40
          },
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 20,
            gap: 24
          }
        },
        columns: [{ // This column acts as the first "row" for the main hero text
          id: "about-hero-text-row",
          width: "100%",
          props: { maxWidth: "1000px", alignItems: "center", flexDirection: "column", display: "flex" },
          elements: [
            {
              id: "about-badge",
              type: "Heading",
              props: {
                text: "✦ LIMITED EDITION: 500 UNITS ONLY",
                tag: "h6",
                color: "#89D900",
                fontSize: "10px",
                fontWeight: "700",
                letterSpacing: "0.2em",
                align: "center",
                marginBottom: 16
              }
            },
            {
              id: "about-hero-headline",
              type: "Headline",
              props: {
                text: "THE FUTURE FASHION\n[IS HERE.](linear-gradient(to left, #89D900, #26ff00ff)",
                tag: "h1",
                color: "var(--theme-background)",
                fontSize: {
                  mobile: "48px",
                  tablet: "72px",
                  desktop: "96px"
                },
                fontWeight: "700",
                lineHeight: 1.0,
                align: "center",
                marginBottom: 24
              }
            },
            {
              id: "about-hero-desc",
              type: "Paragraph",
              props: {
                text: "Introducing the Apex-01. Engineered for those who refuse to settle for the present. A quantum leap in hardware architecture, arriving in limited quantity.",
                color: "rgba(255, 255, 255, 0.6)",
                size: "xl",
                align: "center",
                maxWidth: "640px",
                lineHeight: 1.6,
                marginBottom: 40
              }
            },
            {
              id: "about-hero-buttons",
              type: "ButtonGroup",
              props: {
                primaryText: "Reserve Your Unit →",
                secondaryText: "Watch Film",
                primaryLink: "#",
                secondaryLink: "#",
                primaryBg: "#89D900",
                primaryColor: "var(--theme-text)",
                secondaryBg: "transparent",
                secondaryColor: "var(--theme-background)",
                secondaryBorder: "1px solid rgba(255,255,255,0.2)",
                fontSize: "lg",
                fontWeight: "700",
                gap: "gap-4",
                layout: "flex-row",
                flexWrap: "flex-wrap",
                justifyContent: "center"
              }
            }
          ]
        },
        {
          id: "about-image-col",
          width: "50%",
          props: {
            "@media (max-width: 768px)": { width: "100%" }
          },
          elements: [
            {
              id: "about-section-label",
              type: "Heading",
              props: {
                text: "// ABOUT US",
                tag: "h4",
                color: "#D3ADFF",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.4em",
                marginBottom: 24
              }
            },
            {
              id: "about-hero-image",
              type: "Image",
              props: {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGi9J0nnGr1kpzpbi2fGb3VaJXP_XYqkC_KORDcOByJ2o24X2D_zKTrwb2ztBXXC7pO4uWQKTcu12Buv7ezKy2GUPzlXLbl_rwATi6gzAkTmueRY8sS0LgpHWLNhi91aM_9Ne2cW5DQ51kHBVagAi4jeCaGMPIzb7VoXMrENakkOY433K8bnYZaaAzSRBjiYoTKlEVcZUXoh2e1Fv3L5Tp8NvBxDeXe3bJQRPzPJtgdEoHP888rLJjCaKqAqoTrWGHTNYb56mNEoI",
                alt: "Apex-01 futuristic tech product",
                aspectRatio: "4/3",
                borderRadius: 16,
                maxWidth: "100%",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 40px rgba(211, 173, 255, 0.1)"
              }
            }
          ]
        },
        {
          id: "about-text-col",
          width: "50%",
          props: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 20,
            "@media (max-width: 768px)": { width: "100%" }
          },
          elements: [
            {
              id: "about-hero-tagline",
              type: "Paragraph",
              props: {
                text: "Engineered with precision. Designed for those who demand the extraordinary.",
                color: "#89D900",
                size: "xl",
                fontWeight: "600",
                lineHeight: 1.5,
                marginTop: 64,
                marginBottom: 20
              }
            },
            {
              id: "about-hero-details",
              type: "Paragraph",
              props: {
                text: "The Apex-01 merges cutting-edge hardware architecture with a seamless software experience. Built from aerospace-grade materials and powered by our proprietary quantum processing unit, it delivers performance that was previously thought impossible.The Apex-01 merges cutting-edge hardware architecture with a seamless software experience. Built from aerospace-grade materials and powered by our proprietary quantum processing unit, it delivers performance that was previously thought impossible.",
                color: "rgba(255, 255, 255, 0.5)",
                size: "base",
                lineHeight: 1.8
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // DROP COUNTDOWN
    // --------------------------------------------------------------------------
    {
      key: "food-testimonials-row-1",
      name: "Testimonial Cards Row 1",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 48,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 32,
          "@media (max-width: 768px)": {
            paddingX: 24,
            gap: 24
          }
        },
        columns: [
          {
            id: "test-header-col",
            width: "100%",
            props: {
              marginBottom: 32,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            },
            elements: [
              {
                id: "test-header",
                type: "Heading",
                props: {
                  text: "WORDS FROM THE TABLE.",
                  tag: "h2",
                  color: "var(--theme-background)",
                  fontSize: {
                    mobile: "32px",
                    tablet: "44px",
                    desktop: "56px"
                  },
                  fontWeight: "700",
                  align: "center",
                  marginBottom: 16
                }
              },
              {
                id: "test-subtitle",
                type: "Paragraph",
                props: {
                  text: "Hear from the chefs, hosts, and food lovers who have experienced Epilogue's artisanal philosophy firsthand.",
                  color: "rgba(255, 255, 255, 0.5)",
                  size: "lg",
                  maxWidth: "550px",
                  lineHeight: 1.6,
                  align: "center"
                }
              }
            ]
          },
          {
            id: "test-1",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "test-card-1",
              type: "ServiceCard",
              props: {
                icon: "Zap",
                title: "A Culinary Masterpiece",
                description: "The Gold Standard collection completely changed how I approach dinner parties. The aged balsamic alone is worth the price of the entire set. Truly world-class.",
                iconColor: "var(--theme-text)",
                iconBg: "#89D900",
                backgroundColor: "var(--theme-text)",
                textColor: "var(--theme-text)",
                accentColor: "#89D900",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Space Grotesk",
                borderColor: "var(--theme-background)1a",
                borderRadius: 0,
                ctaText: "— Sofia Chen, Home Chef"
              }
            }]
          },
          {
            id: "test-2",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "test-card-2",
              type: "ServiceCard",
              props: {
                icon: "Zap",
                title: "Beyond Expectations",
                description: "We hired Epilogue for our annual gala and they exceeded every expectation. The presentation was art, and the flavors were extraordinary. Our guests were speechless.",
                iconColor: "var(--theme-text)",
                iconBg: "#89D900",
                backgroundColor: "var(--theme-text)",
                textColor: "var(--theme-text)",
                accentColor: "#89D900",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Space Grotesk",
                borderColor: "var(--theme-background)1a",
                borderRadius: 0,
                ctaText: "— Marcus Webb, Events Director"
              }
            }]
          },
          {
            id: "test-3",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "test-card-3",
              type: "ServiceCard",
              props: {
                icon: "Zap",
                title: "Unmatched Quality",
                description: "As a professional chef, I'm incredibly particular about my ingredients. Epilogue's Persian Saffron is the finest I've ever used.",
                iconColor: "var(--theme-text)",
                iconBg: "#89D900",
                backgroundColor: "var(--theme-text)",
                textColor: "var(--theme-text)",
                accentColor: "#89D900",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Space Grotesk",
                borderColor: "var(--theme-background)1a",
                borderRadius: 0,
                ctaText: "— Chef Anwar Hadid"
              }
            }]
          }
        ]
      }
    },
    // --------------------------------------------------------------------------
    // GOD-TIER FEATURES (FORMERLY COUNTDOWN)
    // --------------------------------------------------------------------------
    {
      key: "finance-about-philosophy",
      name: "Investment Philosophy & Statistics",
      description: "Company philosophy with key performance metrics",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          paddingY: 80,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 24,
          "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: 24,
            paddingY: 60,
            paddingX: 24
          }
        },
        columns: [
          {
            id: "philosophy-header",
            width: "100%",
            props: {
              maxWidth: "1200px",
              marginX: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            },
            elements: [
              {
                id: "philosophy-title",
                type: "Heading",
                props: {
                  text: "Our Investment Philosophy",
                  tag: "h2",
                  color: "var(--theme-background)",
                  size: "4xl",
                  fontWeight: "bold",
                  align: "center",
                  marginBottom: 16
                }
              },
              {
                id: "philosophy-desc",
                type: "Paragraph",
                props: {
                  text: "We believe in conservative growth strategies balanced with calculated risk management. Our approach prioritizes capital preservation while identifying opportunities for sustainable, long-term wealth accumulation.",
                  color: "var(--theme-background)",
                  size: "lg",
                  lineHeight: 1.7,
                  maxWidth: "700px",
                  align: "center",
                  marginBottom: 64
                }
              }
            ]
          },
          {
            id: "stat-1",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": {
                width: "calc(50% - 12px)"
              },
              "@media (max-width: 768px)": {
                width: "100%"
              }
            },
            elements: [
              {
                id: "stat-1-number",
                type: "Heading",
                props: {
                  text: "$50B+",
                  tag: "h3",
                  color: "#89d900",
                  size: "5xl",
                  fontWeight: "black",
                  marginBottom: 12
                }
              },
              {
                id: "stat-1-label",
                type: "Paragraph",
                props: {
                  text: "Assets Under Management",
                  color: "#d3adff",
                  size: "base",
                  fontWeight: "bold"
                }
              }
            ]
          },
          {
            id: "stat-2",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": {
                width: "calc(50% - 12px)"
              },
              "@media (max-width: 768px)": {
                width: "100%"
              }
            },
            elements: [
              {
                id: "stat-2-number",
                type: "Heading",
                props: {
                  text: "5,000+",
                  tag: "h3",
                  color: "#89d900",
                  size: "5xl",
                  fontWeight: "black",
                  marginBottom: 12
                }
              },
              {
                id: "stat-2-label",
                type: "Paragraph",
                props: {
                  text: "Global Clients",
                  color: "#d3adff",
                  size: "base",
                  fontWeight: "bold"
                }
              }
            ]
          },
          {
            id: "stat-3",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": {
                width: "calc(50% - 12px)"
              },
              "@media (max-width: 768px)": {
                width: "100%"
              }
            },
            elements: [
              {
                id: "stat-3-number",
                type: "Heading",
                props: {
                  text: "25+ Years",
                  tag: "h3",
                  color: "#89d900",
                  size: "5xl",
                  fontWeight: "black",
                  marginBottom: 12
                }
              },
              {
                id: "stat-3-label",
                type: "Paragraph",
                props: {
                  text: "Industry Excellence",
                  color: "#d3adff",
                  size: "base",
                  fontWeight: "bold"
                }
              }
            ]
          },
          {
            id: "stat-4",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": {
                width: "calc(50% - 12px)"
              },
              "@media (max-width: 768px)": {
                width: "100%"
              }
            },
            elements: [
              {
                id: "stat-4-number",
                type: "Heading",
                props: {
                  text: "98%",
                  tag: "h3",
                  color: "#89d900",
                  size: "5xl",
                  fontWeight: "black",
                  marginBottom: 12
                }
              },
              {
                id: "stat-4-label",
                type: "Paragraph",
                props: {
                  text: "Client Retention Rate",
                  color: "#d3adff",
                  size: "base",
                  fontWeight: "bold"
                }
              }
            ]
          }
        ]
      }
    },,
    // --------------------------------------------------------------------------
    // TESTIMONIALS – "Early Adopters"
    // --------------------------------------------------------------------------
     {
            key: "testimonials-grid",
            name: "Testimonials Grid Section",
            description: "Masonry-style grid of student testimonials and reviews",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-text)",
                    darkBackgroundColor: "var(--theme-text)",
                    fullWidth: true,
                    paddingY: 60,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    "@media (max-width: 768px)": {
                        paddingY: 40,
                        gap: 16
                    }
                },
                columns: [
                    // Section Heading
                    {
                        id: "testimonials-heading",
                        width: "100%",
                        elements: [
                            {
                                id: "testimonials-heading-box",
                                type: "Box",
                                props: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginBottom: 40,
                                    width: "100%",
                                    backgroundColor: "var(--theme-text)",
                                },
                                elements: [
                                    {
                                        id: "testimonials-subtitle",
                                        type: "Paragraph",
                                        props: {
                                            text: "TESTIMONIALS",
                                            size: "sm",
                                            fontWeight: "bold",
                                            color: "#d3adff",
                                            letterSpacing: 2,
                                            marginBottom: 12,
                                            align: "center",
                                            width: "100%"
                                        }
                                    },
                                    {
                                        id: "testimonials-title",
                                        type: "Heading",
                                        props: {
                                            text: "What Our Clients Say",
                                            tag: "h2",
                                            size: "3xl",
                                            fontWeight: "bold",
                                            color: "#89D900",
                                            marginBottom: 16,
                                            align: "center",
                                            width: "100%"
                                        }
                                    },
                                    {
                                        id: "testimonials-desc",
                                        type: "Paragraph",
                                        props: {
                                            text: "Hear from the individuals and organizations who trust us with their financial future.",
                                            size: "md",
                                            color: "var(--theme-background)",
                                            lineHeight: 1.7,
                                            align: "center",
                                            width: "100%",
                                            maxWidth: 600
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    // Testimonial 1
                    {
                        id: "testimonial-1",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 12px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "testimonial-card-1",
                                type: "Testimonial",
                                props: {
                                    text: "The Full-stack development course was a game-changer. The curriculum is modern and stays updated with industry standards. I landed my first job within two months!",
                                    author: "Alex Rivera",
                                    role: "Junior Developer",
                                    company: "InnovateX",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANHcuDWPXpuGC0GEgYh3PzAtZbvcEWo3B1_53Kc_9aqizplbLqlcdx4xkY_4-ukaz-3AzdutTkJADmnRJehEzXdHq7sNqy-F_qguunId9CiLzxv2a5JiXjTub-m-cW3seEPijqI_lNXA8ffrqTmpIHacMwTu2B8iNG6FxZNZ5inGXEFoxNKk4S4Gm9eGgUWsxacU2pNTl1j5QqwZ6hQlrCT9jksTazIFnNZWhYdcNGf1YaRD9M69Qn487Ntq5qutBLBi1EKfb4G3vk",
                                    rating: 5,
                                    backgroundColor: "var(--theme-text)",
                                    textColor: "#d3adff",
                                    accentColor: "#89D900"
                                }
                            }
                        ]
                    },
                    // Testimonial 2
                    {
                        id: "testimonial-2",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 12px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "testimonial-card-2",
                                type: "Testimonial",
                                props: {
                                    text: "I loved the UI/UX workshop. The mentors are actually working professionals who give real-world feedback. Totally worth the investment.",
                                    author: "Sarah Jenkins",
                                    role: "Product Designer",
                                    company: "Tech Corp",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXT4E7SL0D_diiWHs8WW3sspT2K_s5z1wWsLnj7sSrFcpYmiXW3ODozd2DVzIx0JXc2AjSLdeT6Wv99aJRUO6f7MeKhiQrw0fWkn8OUlkNFBez6sice4k67QjOo_tbnbp6UXT22PrrjXXE-W_YJ1gJdb1JQGY_ykOUY5ZUvteZy_POLTFjia_VVMDaYS3Wf1lfvZmG4MKtyR-t52trtwuZoxdJveAEu4kC1myDLDMy6NxnDSJRbQ6aueVRfCEZrEAQ1dBh2MpbPoQi",
                                    rating: 5,
                                    backgroundColor: "var(--theme-text)",
                                    textColor: "#d3adff",
                                    accentColor: "#89D900"
                                }
                            }
                        ]
                    },
                    // Testimonial 3
                    {
                        id: "testimonial-3",
                        width: "calc(33.33% - 16px)",
                        props: {
                            "@media (max-width: 1024px)": {
                                width: "calc(50% - 12px)"
                            },
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "testimonial-card-3",
                                type: "Testimonial",
                                props: {
                                    text: "The Data Science program is intense but extremely rewarding. The capstone project helped me build a portfolio that recruiters actually noticed.",
                                    author: "Michael Chen",
                                    role: "Data Analyst",
                                    company: "DataFlow",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQgmS3CLtaKC0WLC3-WE2jE-SMnBnPfrLN_DlMkjquReA2rM_QS86VSYdhvFzmxDk6EOwXID4mDLKsug-QOImbAt6Y-NLfifHJww_9TJYzBWvqUmGdB0h7qjg-sVPU93n_YKezlHWxWlSt6_iyXBiWTw2jRX15BO9T8CmqtZGyF9ou7atbzxvo3DJ1KEKTeHDX6kI6VKCWSF2CqfKDqP2EHIYjY7bg3ag5KfSdpSdWciAfHLkzJwRmCqbsYFTxv_E99QnFMITbCzcs",
                                    rating: 5,
                                    backgroundColor: "var(--theme-text)",
                                    textColor: "#d3adff",
                                    accentColor: "#89D900"
                                }
                            }
                        ]
                    },
                ]
            }
        },

    // --------------------------------------------------------------------------
    // FINAL CTA – "Don't Get Left Behind"
    // --------------------------------------------------------------------------
    {
      key: "food-careers-testimonial",
      name: "Client Testimonial",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 96,
          paddingX: 48,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width: 768px)": {
            paddingY: 64,
            paddingX: 24
          }
        },
        columns: [{
          id: "testimonial-col",
          width: "100%",
          props: { maxWidth: "800px", textAlign: "center" },
          elements: [
            { id: "test-stars", type: "Paragraph", props: { text: "★ ★ ★ ★ ★", size: "lg", color: "#d3adff", marginBottom: 32, align: "center", width: "100%" } },
            { id: "test-quote", type: "Heading", props: { text: "ArtisanCuisine transformed our corporate gala into a culinary journey. The attention to detail and the quality of the local ingredients were simply unparalleled. Our guests are still talking about it.", tag: "p", size: "2xl", fontWeight: "300", color: "#89D900", marginBottom: 32, align: "center", width: "100%", fontStyle: "italic" } },
            { id: "test-name", type: "Heading", props: { text: "Elena Richardson", tag: "p", size: "lg", fontWeight: "bold", color: "#89D900", marginBottom: 4, align: "center", width: "100%" } },
            { id: "test-role", type: "Paragraph", props: { text: "DIRECTOR OF EVENTS, LUXE MEDIA GROUP", size: "xs", fontWeight: "bold", color: "#d3adff", letterSpacing: 3, align: "center", width: "100%" } }
          ]
        }]
      }
    },
  ]
};

module.exports = ecommerceAbout;
