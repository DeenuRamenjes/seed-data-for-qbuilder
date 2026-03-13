/**
 * Real Estate Template - Home Page
 * Theme: Apex Estates – Minimalist Luxury, Brutalist
 * Colors: Light (#f7f7f7), Dark (var(--theme-text)), Accents (var(--theme-background))
 * Font: Manrope
 */

const realEstateHome = {
  // ============================================================================
  // HEADER - NAVBAR
  // ============================================================================
  header: {
    key: "real-estate-header",
    name: "Apex Header",
    structure: {
      type: "Navbar",
      defaultProps: {
        sticky: true,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        paddingY: 0,
        paddingX: 0,
        fontFamily: "Outfit",
        showBorder: true,
        borderColor: "#e5e5e5",
        height: "80px"
      },
      props: {
        logo: {
          text: "Apex Estates",
          icon: "architecture",
          logoColor: "var(--theme-text)",
          iconColor: "var(--theme-background)",
          iconBg: "var(--theme-text)",
          fontWeight: "extrabold",
          letterSpacing: "tighter",
          textTransform: "uppercase"
        },
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Journal", href: "/journal" },
          { label: "Contact", href: "/contact" }
        ],
        ctaButton: {
          text: "Contact Us",
          href: "/contact",
          variant: "primary",
          backgroundColor: "var(--theme-text)",
          textColor: "var(--theme-accent)",
          borderRadius: "lg",
          height: "42px"
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
      key: "real-estate-hero",
      name: "Luxury Hero",
      structure: {
        type: "Section",
        defaultProps: {
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 0,
          paddingX: 0,
          overflow: "hidden"
        },
        columns: [{
          id: "hero-col",
          width: "100%",
          elements: [
            {
              type: "IndustrialHero",
              props: {
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3hU0bgyukegwaqImejYYEMQJ3GGrR97qt7sL2sBJzMVhI0dU3-raTNRBhznaa0mcioHuecNWzwOLg6TIz7ljZeANXZjYsJnNl-efBKvARUA52bYJpjOyGzxciRZZiJsAUKYzLDhvbz1URzPk4i7yQ_r09FPgVSFUIiCMB_UANH5dgNCvgrH2YL_QvvCjGnfHhWLleyiVKZE55Xp-62FFGmC93IgsBbwCsgtARcHIp4XRHZj3DItsh3W4XW5uecpc_Y8v1dxOLxI",
                backgroundOverlay: "rgba(0,0,0,0.3)",
                minHeight: "90vh",
                maxWidth: "100%",
                badgeText: "Luxury Real Estate",
                badgeColor: "#b0903e",
                badgeBackgroundColor: "rgba(255,255,255,0.15)",
                badgeShowPing: false,
                align: "center",
                headlineText: "Architecture\nFor [Living.](linear-gradient(to right, #b0903e, #FFF98A)",
                headlineColor: "var(--theme-background)",
                headlineTag: "h1",
                paragraphText: "Experience the pinnacle of luxury real estate with our curated collection of elite properties globally.",
                paragraphColor: "rgba(255, 255, 255, 0.9)",
                paragraphSize: "xl",
                statusItems: [
                  { text: "500+", subtext: "Elite Properties", color: "var(--theme-background)", subtextColor: "#a1a1aa", size: "lg", fontWeight: "700", marginTop: 12 }
                ]
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // FEATURED PROPERTIES GRID
    // --------------------------------------------------------------------------
    {
      key: "real-estate-properties",
      name: "Featured Properties",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#f7f7f7",
          fullWidth: true,
          paddingY: 50,
          paddingX: 48,
          justifyContent: "center",
          gap: 24,
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 24
          }
        },
        columns: [
          // Header
          {
            id: "prop-header",
            width: "100%",
            elements: [
              { id: "prop-badge", type: "Badge", props: { text: "CURATED", align: "center", marginBottom: 12 } },
              { id: "prop-heading", type: "Heading", props: { text: "The Collection", tag: "h2", size: "4xl", fontWeight: "bold", color: "#59184C", marginBottom: 16, align: "center", width: "100%" } },
              { id: "prop-desc", type: "Paragraph", props: { text: "Experience the pinnacle of luxury real estate with our curated collection of elite properties globally.", size: "lg", color: "#6B7280", lineHeight: 1.7, marginBottom: 48, align: "center", width: "100%" } }
            ]
          },
          // Property 1
          {
            id: "prop-1",
            width: "calc(25% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-1",
              type: "FeatureCard",
              props: {
                title: "The Glass Pavilion",
                description: "Los Angeles, CA — $12,500,000",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWyUouTIsGu-qL5IxzlU1N7uBgdhmhyafUOXX7YF8muOy6rq7UjkUj1uqLlqDQzGLFerkamcnVYjy7GSKkvT9ZqXz07zlVJyt5A6P4wjFjwxZ-CktRLpA9FDy6UVlzutk6fBTdUQ9ap7amFMlXjT929yNvDL7CpUdTrozooY4p7UGW7RKiajMJAg7mTEnQMEUg-hddM_2S_65_SDR7gzptUTG42-jFeRcr-cyQt_3D233JLBiZC8bCvvf_-IUeHYr5ibfhPh0wa-4",
                imageAspectRatio: "16/9",
                textAlign: "left",
                borderRadius: "12px",
                padding: "0"
              }
            }]
          },
          // Property 2
          {
            id: "prop-2",
            width: "calc(25% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-2",
              type: "FeatureCard",
              props: {
                title: "Azure Waterfront",
                description: "Miami, FL — $8,200,000",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3QSWYbVPb1RkF3szHAQf1fyJ4uPPvIGQMs98R5EBEw00trZay9GLACFxdAdVKKw53x9jq5oqGMDCG9DfUhV0Vv0LwbTDI28HpnAqIxVWWffLWbLw1xySuncreXG0QxVZwy5HhkeScgqHSx9xbd3TkSY7yUvf687lUMdqS2CtQR89NeBvom1v8DvGx4kN51_lJ3zZZOIOPJg6yTJcWdDDMjDiHrH_oej-csIH5099vqKbfKx5o0iKNl8odBJHFRrtIHbzIf1HoSrw",
                imageAspectRatio: "16/9",
                textAlign: "left",
                borderRadius: "12px",
                padding: "0"
              }
            }]
          },
          // Property 3
          {
            id: "prop-3",
            width: "calc(25% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-3",
              type: "FeatureCard",
              props: {
                title: "Minimalist Manor",
                description: "Austin, TX — $4,800,000",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXf91hmu4UBAHVF_7z9GGZ-XeCMVxtO5fozgB7Z1hWsOFVSsjXDqWCbcI-zgY83498Zfq4PVFZeIGdzxyLws3HITMOszcs25jagHBvgg9jMW9f1oBLA5eZv1oVZHfULQcWJ5N1JbS_W5bNh5xMEjInfHGLcHvBK7wN_ufiVHkKhiRgRRKgK0-ZQ7IFhvrmSKfQChPaJuMs_XGMppEGnuZqJ35whdTSJ_iFv8fc3o2IWqD-DucyvUQ1L_nmMOxNOXenWIr1ZtZtt7Y",
                imageAspectRatio: "16/9",
                textAlign: "left",
                borderRadius: "12px",
                padding: "0"
              }
            }]
          },
          // Property 4
          {
            id: "prop-4",
            width: "calc(25% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-4",
              type: "FeatureCard",
              props: {
                title: "Obsidian Retreat",
                description: "Aspen, CO — $18,900,000",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3hU0bgyukegwaqImejYYEMQJ3GGrR97qt7sL2sBJzMVhI0dU3-raTNRBhznaa0mcioHuecNWzwOLg6TIz7ljZeANXZjYsJnNl-efBKvARUA52bYJpjOyGzxciRZZiJsAUKYzLDhvbz1URzPk4i7yQ_r09FPgVSFUIiCMB_UANH5dgNCvgrH2YL_QvvCjGnfHhWLleyiVKZE55Xp-62FFGmC93IgsBbwCsgtARcHIp4XRHZj3DItsh3W4XW5uecpc_Y8v1dxOLxI",
                imageAspectRatio: "16/9",
                textAlign: "left",
                borderRadius: "12px",
                padding: "0"
              }
            }]
          },
          // Property 5
          {
            id: "prop-5",
            width: "calc(25% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-5",
              type: "FeatureCard",
              props: {
                title: "Emerald Skygarden",
                description: "Singapore — $24,500,000",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa4f9-NXnMj-GFdFl5BYvbNMlvwpvZIKH2YQHRGCsmMqW0beGizPmqmzm1hjhpUpiThP9gB8OYVcfqqzgf2uaq2nXdvrzRue1YRgjF9h4MYXGmWfbm0pvKjeiQKHmAVdEiP3rMKVNjiyluT7TWIIDVw2qaXE-MlICvSgAQgePvwCleB4TvD-WpjMUVqmeyuNs6rpTQ-qzd-WF3vg_m6zGSOVkr7Lu_hwMi8rkIIFDygSnJ5YEimWmH-UHVwMTMzMN3ZaOV8tBhCbM",
                imageAspectRatio: "16/9",
                textAlign: "left",
                borderRadius: "12px",
                padding: "0"
              }
            }]
          },
          // Property 6
          {
            id: "prop-6",
            width: "calc(25% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-6",
              type: "FeatureCard",
              props: {
                title: "The Ivory Loft",
                description: "New York, NY — $9,200,000",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsCfSySrCxzme8RtykErRAKIFCO19ELElx4XeSqAeo1fln3B49B_qqbtU4EygU-RHX9NOHvsHG0dOw1wnvpw_HStplRhY8E7DrhNCKYG-cGAH1kOiLq3xiCrO30nNpnyDpQGz1g4vbAGe7pyAxR9GZzZP0PdBGKD5-GrPghrGwl3kMsMdz0BDScaHiWToY52bEg5lRkRbCjp4OzaiF1YO-EiPZ0K0WP4aoJrTutwAjB3dzny6cXKF6Nh0U3q_d3j76F6qMMUogCHE",
                imageAspectRatio: "16/9",
                textAlign: "left",
                borderRadius: "12px",
                padding: "0"
              }
            }]
          },
          // Property 7
          {
            id: "prop-7",
            width: "calc(25% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-7",
              type: "FeatureCard",
              props: {
                title: "Sapphire Shores",
                description: "Miami, FL — $15,400,000",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsCfSySrCxzme8RtykErRAKIFCO19ELElx4XeSqAeo1fln3B49B_qqbtU4EygU-RHX9NOHvsHG0dOw1wnvpw_HStplRhY8E7DrhNCKYG-cGAH1kOiLq3xiCrO30nNpnyDpQGz1g4vbAGe7pyAxR9GZzZP0PdBGKD5-GrPghrGwl3kMsMdz0BDScaHiWToY52bEg5lRkRbCjp4OzaiF1YO-EiPZ0K0WP4aoJrTutwAjB3dzny6cXKF6Nh0U3q_d3j76F6qMMUogCHE",
                imageAspectRatio: "16/9",
                textAlign: "left",
                borderRadius: "12px",
                padding: "0"
              }
            }]
          },
          // Property 8
          {
            id: "prop-8",
            width: "calc(25% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-8",
              type: "FeatureCard",
              props: {
                title: "Zenith Penthouse",
                description: "New York, NY — $28,900,000",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsCfSySrCxzme8RtykErRAKIFCO19ELElx4XeSqAeo1fln3B49B_qqbtU4EygU-RHX9NOHvsHG0dOw1wnvpw_HStplRhY8E7DrhNCKYG-cGAH1kOiLq3xiCrO30nNpnyDpQGz1g4vbAGe7pyAxR9GZzZP0PdBGKD5-GrPghrGwl3kMsMdz0BDScaHiWToY52bEg5lRkRbCjp4OzaiF1YO-EiPZ0K0WP4aoJrTutwAjB3dzny6cXKF6Nh0U3q_d3j76F6qMMUogCHE",
                imageAspectRatio: "16/9",
                textAlign: "left",
                borderRadius: "12px",
                padding: "0"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // THE APEX STANDARD – FEATURES
    // --------------------------------------------------------------------------
    {
      key: "real-estate-features",
      name: "The Apex Standard",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "var(--theme-background)",
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 50,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 24,
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 24,
            gap: 16
          }
        },
        columns: [
          // Header
          {
            id: "feat-header",
            width: "100%",
            elements: [
              { id: "feat-heading", type: "Heading", props: { text: "The Apex Standard", tag: "h2", size: "4xl", fontWeight: "bold", color: "#59184C", marginBottom: 16, align: "center", width: "100%" } },
              { id: "feat-desc", type: "Paragraph", props: { text: "Excellence in every detail, discretion in every transaction. We redefine the luxury real estate experience.", size: "lg", color: "#6B7280", lineHeight: 1.7, marginBottom: 48, align: "center", width: "100%" } }
            ]
          },
          // Feature 1
          {
            id: "feat-1",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "feat-card-1",
              type: "NumCard",
              props: {
                number: 1,
                icon: "ShieldCheck",
                iconColor: "var(--theme-accent)",
                title: "Discretion",
                description: "We prioritize your privacy above all else through confidential consultations and private listings.",
                accentColor: "#59184C",
                cardBorderRadius: 12
              }
            }]
          },
          // Feature 2
          {
            id: "feat-2",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "feat-card-2",
              type: "NumCard",
              props: {
                number: 2,
                icon: "Key",
                iconColor: "var(--theme-accent)",
                title: "Exclusivity",
                description: "Gain access to off-market listings and the most sought-after zip codes worldwide.",
                accentColor: "#59184C",
                cardBorderRadius: 12
              }
            }]
          },
          // Feature 3
          {
            id: "feat-3",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "feat-card-3",
              type: "NumCard",
              props: {
                number: 3,
                icon: "Ruler",
                iconColor: "var(--theme-accent)",
                title: "Architectural Integrity",
                description: "Every property in our collection is hand-selected for its design excellence and craftsmanship.",
                accentColor: "#59184C",
                cardBorderRadius: 12
              }
            }]
          },
          
        ]
      }
    },

    // --------------------------------------------------------------------------
    // NEWSLETTER – INNER CIRCLE
    // --------------------------------------------------------------------------
    {
      key: "real-estate-newsletter",
      name: "Inner Circle Newsletter",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#59184C",
          fontFamily: "Outfit",
          paddingY: 50,
          paddingX: 48,
          fullWidth: true,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width: 768px)": {
            paddingY: 80,
            paddingX: 24
          }
        },
        columns: [{
          id: "newsletter-col",
          width: "100%",
          props: { maxWidth: "600px", textAlign: "center" },
          elements: [
            {
              id: "nl-heading",
              type: "Heading",
              props: { text: "Join the Inner Circle", tag: "h2", size: "4xl", fontWeight: "bold", color: "#b0903e", marginBottom: 16, align: "center", width: "100%" }
            },
            {
              id: "nl-desc",
              type: "Paragraph",
              props: { text: "Get early access to off-market properties and global real estate insights delivered bi-weekly.", size: "lg", color: "#b0903e", lineHeight: 1.7, marginBottom: 32, align: "center", width: "100%" }
            },
            {
              id: "nl-button",
              type: "ButtonGroup",
              props: {
                primaryText: "Subscribe Now",
                primaryBg: "#b0903e",
                primaryColor: "var(--theme-text)",
                primaryBorderRadius: 8,
                gap: "gap-4",
                layout: "horizontal",
                justifyContent: "center"
              }
            }
          ]
        }]
      }
    }
  ],

  // ============================================================================
  // FOOTER
  // ============================================================================
  footer: {
    key: "real-estate-footer",
    name: "Apex Footer",
    structure: {
      type: "Footer",
      defaultProps: {
        backgroundColor: "#f7f7f7",
        paddingY: 50,
        paddingX: 80,
        fontFamily: "Outfit",
        fullWidth: true
      },
      columns: [
        {
          id: "footer-brand",
          width: "50%",
          elements: [
            {
              id: "footer-logo",
              type: "Heading",
              props: {
                text: "Apex Estates",
                tag: "h4",
                color: "#59184C",
                marginBottom: "24px"
              }
            },
            {
              id: "footer-desc",
              type: "Paragraph",
              props: {
                text: "Defining luxury through architectural excellence. Your partner in elite real estate transactions.",
                color: "#6B7280",
                maxWidth: "400px",
                marginBottom: "32px"
              }
            },
            {
              id: "footer-social",
              type: "SocialLinks",
              props: {
                links: [
                  { platform: "linkedin", url: "#" },
                  { platform: "twitter", url: "#" },
                  { platform: "instagram", url: "#" }
                ],
                iconColor: "var(--theme-text)",
                size: "md"
              }
            }
          ]
        },
        {
          id: "footer-explore",
          width: "25%",
          elements: [
            {
              id: "links-explore",
              type: "LinkList",
              props: {
                title: "Explore",
                titleColor: "#59184C",
                textColor: "#6B7280",
                hoverColor: "var(--theme-text)",
                items: [
                  { label: "Residential", href: "#" },
                  { label: "Commercial", href: "#" },
                  { label: "Developments", href: "#" },
                  { label: "Investment", href: "#" }
                ]
              }
            }
          ]
        },
        {
          id: "footer-company",
          width: "25%",
          elements: [
            {
              id: "links-company",
              type: "LinkList",
              props: {
                title: "Company",
                titleColor: "#59184C",
                textColor: "#6B7280",
                hoverColor: "var(--theme-text)",
                items: [
                  { label: "Our Story", href: "#" },
                  { label: "Global Network", href: "#" },
                  { label: "Careers", href: "#" },
                  { label: "Contact", href: "#" }
                ]
              }
            }
          ]
        }
      ]
    }
  }
};

module.exports = realEstateHome;
