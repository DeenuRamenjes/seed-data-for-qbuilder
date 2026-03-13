/**
 * Real Estate Template - Blogs / Journal Page
 * Theme: Apex Estates – Editorial Content, Architectural Journal
 * Colors: Light (#f7f7f7), Dark (var(--theme-text)), Accent (#C9A96E gold)
 * Font: Manrope
 */

const realEstateHome = require('./real-estate-home.cjs');

const realEstateBlogs = {
  // ============================================================================
  // HEADER (shared from home)
  // ============================================================================
  header: realEstateHome.header,

  // ============================================================================
  // PAGE SECTIONS
  // ============================================================================
  sections: [
    // --------------------------------------------------------------------------
    // HERO – EDITORIAL INTRO
    // --------------------------------------------------------------------------
    {
      key: "blogs-hero",
      name: "Journal Hero",
      structure: {
        type: "CenterHero",
        props: {
          badgeText: "THE JOURNAL",
          title: "Architecture, Design & Living",
          lead: "Insights from the intersection of luxury living, contemporary architecture, and the global property market.",
          primaryCtaText: "Latest Stories",
          primaryCtaLink: "#blogs-grid",
          secondaryCtaText: "About Apex",
          secondaryCtaLink: "#",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3hU0bgyukegwaqImejYYEMQJ3GGrR97qt7sL2sBJzMVhI0dU3-raTNRBhznaa0mcioHuecNWzwOLg6TIz7ljZeANXZjYsJnNl-efBKvARUA52bYJpjOyGzxciRZZiJsAUKYzLDhvbz1URzPk4i7yQ_r09FPgVSFUIiCMB_UANH5dgNCvgrH2YL_QvvCjGnfHhWLleyiVKZE55Xp-62FFGmC93IgsBbwCsgtARcHIp4XRHZj3DItsh3W4XW5uecpc_Y8v1dxOLxI",
          accentColor: "#b0903e",
          textColor: "#ffffff",
          backgroundColor: "#59184C"
        }
      }
    },

    // --------------------------------------------------------------------------
    // FEATURED ARTICLE
    // --------------------------------------------------------------------------
    {
      key: "blogs-featured",
      name: "Featured Article",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "var(--theme-background)",
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 80,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 48,
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 24,
            gap: 24
          }
        },
        columns: [
          // Featured Image
          {
            id: "featured-img-col",
            width: "calc(55% - 24px)",
            props: {
              "@media (max-width: 1024px)": { width: "100%" }
            },
            elements: [{
              id: "featured-img",
              type: "Image",
              props: {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3hU0bgyukegwaqImejYYEMQJ3GGrR97qt7sL2sBJzMVhI0dU3-raTNRBhznaa0mcioHuecNWzwOLg6TIz7ljZeANXZjYsJnNl-efBKvARUA52bYJpjOyGzxciRZZiJsAUKYzLDhvbz1URzPk4i7yQ_r09FPgVSFUIiCMB_UANH5dgNCvgrH2YL_QvvCjGnfHhWLleyiVKZE55Xp-62FFGmC93IgsBbwCsgtARcHIp4XRHZj3DItsh3W4XW5uecpc_Y8v1dxOLxI",
                alt: "Modern architecture villa featured article",
                aspectRatio: "16/10",
                borderRadius: "12px",
                width: "100%"
              }
            }]
          },
          // Featured Text
          {
            id: "featured-text-col",
            width: "calc(45% - 24px)",
            props: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              "@media (max-width: 1024px)": { width: "100%" }
            },
            elements: [
              { id: "feat-badge", type: "Paragraph", props: { text: "FEATURED", size: "xs", fontWeight: "bold", color: "#000", letterSpacing: 3, marginBottom: 12 } },
              { id: "feat-title", type: "Heading", props: { text: "The Rise of Brutalist Minimalism in Residential Design", tag: "h2", size: "3xl", fontWeight: "bold", color: "#59184C", marginBottom: 16 } },
              { id: "feat-desc", type: "Paragraph", props: { text: "A deep dive into how raw concrete, geometric precision, and stripped-back aesthetics are shaping the next generation of luxury homes. From Tokyo to Los Angeles, brutalist minimalism is no longer an architectural niche — it's become the new language of prestige.", size: "md", color: "#6B7280", lineHeight: 1.7, marginBottom: 24 } },
              { id: "feat-author", type: "Paragraph", props: { text: "By Marcus Thorne  •  12 min read", size: "sm", color: "var(--theme-border)", fontWeight: "bold" } }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // RECENT ARTICLES GRID
    // --------------------------------------------------------------------------
    {
      key: "blogs-grid",
      name: "Recent Articles",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f7f7f7",
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 100,
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
            id: "grid-header",
            width: "100%",
            elements: [
              { id: "grid-badge", type: "Paragraph", props: { text: "RECENT", size: "xs", fontWeight: "bold", color: "var(--theme-border)", letterSpacing: 3, marginBottom: 12, width: "100%" } },
              { id: "grid-heading", type: "Heading", props: { text: "Latest Insights", tag: "h2", size: "4xl", fontWeight: "extrabold", color: "#59184C", marginBottom: 48, width: "100%" } }
            ]
          },
          // Article 1
          {
            id: "article-1",
            width: "100%",
            elements: [{
              id: "article-list-1",
              type: "FeatureList",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWyUouTIsGu-qL5IxzlU1N7uBgdhmhyafUOXX7YF8muOy6rq7UjkUj1uqLlqDQzGLFerkamcnVYjy7GSKkvT9ZqXz07zlVJyt5A6P4wjFjwxZ-CktRLpA9FDy6UVlzutk6fBTdUQ9ap7amFMlXjT929yNvDL7CpUdTrozooY4p7UGW7RKiajMJAg7mTEnQMEUg-hddM_2S_65_SDR7gzptUTG42-jFeRcr-cyQt_3D233JLBiZC8bCvvf_-IUeHYr5ibfhPh0wa-4",
                title: "Glass Houses: Transparency as Luxury",
                price: "12 min read",
                rating: "4.9",
                reviewsCount: "1.2k",
                tagText: "ARCHITECTURE",
                tagColor: "#b0903e",
                subtext: "Featured Story",
                features: "Modern Design,Eco-Friendly,Hillside Views",
                ctaText: "Read Article",
                accentColor: "#b0903e"
              }
            }]
          },
          // Article 2
          {
            id: "article-2",
            width: "100%",
            elements: [{
              id: "article-list-2",
              type: "FeatureList",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3QSWYbVPb1RkF3szHAQf1fyJ4uPPvIGQMs98R5EBEw00trZay9GLACFxdAdVKKw53x9jq5oqGMDCG9DfUhV0Vv0LwbTDI28HpnAqIxVWWffLWbLw1xySuncreXG0QxVZwy5HhkeScgqHSx9xbd3TkSY7yUvf687lUMdqS2CtQR89NeBvom1v8DvGx4kN51_lJ3zZZOIOPJg6yTJcWdDDMjDiHrH_oej-csIH5099vqKbfKx5o0iKNl8odBJHFRrtIHbzIf1HoSrw",
                title: "Waterfront Premium: The New Gold Standard",
                price: "10 min read",
                rating: "4.8",
                reviewsCount: "850",
                tagText: "INVESTMENT",
                subtext: "Market Insight",
                tagColor: "#b0903e",
                features: "Beachfront,Global Market,High ROI",
                ctaText: "View Analysis",
                accentColor: "#b0903e"
              }
            }]
          },
          // Article 3
          {
            id: "article-3",
            width: "100%",
            elements: [{
              id: "article-list-3",
              type: "FeatureList",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXf91hmu4UBAHVF_7z9GGZ-XeCMVxtO5fozgB7Z1hWsOFVSsjXDqWCbcI-zgY83498Zfq4PVFZeIGdzxyLws3HITMOszcs25jagHBvgg9jMW9f1oBLA5eZv1oVZHfULQcWJ5N1JbS_W5bNh5xMEjInfHGLcHvBK7wN_ufiVHkKhiRgRRKgK0-ZQ7IFhvrmSKfQChPaJuMs_XGMppEGnuZqJ35whdTSJ_iFv8fc3o2IWqD-DucyvUQ1L_nmMOxNOXenWIr1ZtZtt7Y",
                title: "Sustainable Luxury: Beyond the Buzzword",
                price: "15 min read",
                rating: "5.0",
                reviewsCount: "2.1k",
                tagText: "SUSTAINABILITY",
                tagColor: "#b0903e",
                subtext: "Expert Opinion",
                features: "Carbon Neutral,Solar Power,Smart Tech",
                ctaText: "Read Report",
                accentColor: "#b0903e"
              }
            }]
          },
          // Article 4
          {
            id: "article-4",
            width: "100%",
            elements: [{
              id: "article-list-4",
              type: "FeatureList",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsCfSySrCxzme8RtykErRAKIFCO19ELElx4XeSqAeo1fln3B49B_qqbtU4EygU-RHX9NOHvsHG0dOw1wnvpw_HStplRhY8E7DrhNCKYG-cGAH1kOiLq3xiCrO30nNpnyDpQGz1g4vbAGe7pyAxR9GZzZP0PdBGKD5-GrPghrGwl3kMsMdz0BDScaHiWToY52bEg5lRkRbCjp4OzaiF1YO-EiPZ0K0WP4aoJrTutwAjB3dzny6cXKF6Nh0U3q_d3j76F6qMMUogCHE",
                title: "The Art of the Private Sale",
                price: "8 min read",
                rating: "4.7",
                reviewsCount: "640",
                tagText: "STRATEGY",
                tagColor: "#b0903e",
                subtext: "Exclusive Access",
                features: "Off-Market,Confidential,Elite Deals",
                ctaText: "Explore Secrets",
                accentColor: "#b0903e"
              }
            }]
          },
          // Article 5
          {
            id: "article-5",
            width: "100%",
            elements: [{
              id: "article-list-5",
              type: "FeatureList",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa4f9-NXnMj-GFdFl5BYvbNMlvwpvZIKH2YQHRGCsmMqW0beGizPmqmzm1hjhpUpiThP9gB8OYVcfqqzgf2uaq2nXdvrzRue1YRgjF9h4MYXGmWfbm0pvKjeiQKHmAVdEiP3rMKVNjiyluT7TWIIDVw2qaXE-MlICvSgAQgePvwCleB4TvD-WpjMUVqmeyuNs6rpTQ-qzd-WF3vg_m6zGSOVkr7Lu_hwMi8rkIIFDygSnJ5YEimWmH-UHVwMTMzMN3ZaOV8tBhCbM",
                title: "Interior Minimalism: Less Is More",
                price: "7 min read",
                rating: "4.9",
                reviewsCount: "980",
                tagText: "INTERIOR",
                tagColor: "#b0903e",
                subtext: "Design Guide",
                features: "Functional,Clean,Natural Light",
                ctaText: "Read Guide",
                accentColor: "#b0903e"
              }
            }]
          },
          // Article 6
          {
            id: "article-6",
            width: "100%",
            elements: [{
              id: "article-list-6",
              type: "FeatureList",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP6f6ah6o01AngyOUX-gofS97l3rvjiFmxq8tRtpjxInPeGmivRtSIIBxZtjDCnkcjruzWRsx5G12-O7MQa5KuPztJ9kR3PpCqaLLVgKCNIQaet3wFXPbMUDYnlC--2PSjEvgl7lR2xRDEt-UQoS1DiGT6bsJ8vqRBQZ2J3u-_Kj4_9zfr3cTlICWAdlfqXcZWmT6ysJFBU35Iog8RCW1TxmlQcdTY3WMYLH_e5Ix3XgUWth29h2GkF7Gz5KkaS6uAD0re3DK-kZo",
                title: "Market Forecast 2025: Where to Invest",
                price: "20 min read",
                rating: "5.0",
                reviewsCount: "3.5k",
                tagText: "FORECAST",
                tagColor: "#b0903e",
                subtext: "Major Report",
                features: "Emerging Markets,Analytics,Trends",
                ctaText: "Read Report",
                accentColor: "#b0903e"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // IMAGE CTA
    // --------------------------------------------------------------------------
    {
      key: "contact-cta",
      name: "Exclusive CTA",
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
          id: "cta-col",
          width: "100%",
          elements: [
            {
              type: "IndustrialHero",
              props: {
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP6f6ah6o01AngyOUX-gofS97l3rvjiFmxq8tRtpjxInPeGmivRtSIIBxZtjDCnkcjruzWRsx5G12-O7MQa5KuPztJ9kR3PpCqaLLVgKCNIQaet3wFXPbMUDYnlC--2PSjEvgl7lR2xRDEt-UQoS1DiGT6bsJ8vqRBQZ2J3u-_Kj4_9zfr3cTlICWAdlfqXcZWmT6ysJFBU35Iog8RCW1TxmlQcdTY3WMYLH_e5Ix3XgUWth29h2GkF7Gz5KkaS6uAD0re3DK-kZo",
                backgroundOverlay: "rgba(0,0,0,0.4)",
                minHeight: "600px",
                maxWidth: "100%",
                align: "center",
                headlineText: "Your Next Acquisition Awaits [Consultation](linear-gradient(to right, #b0903e, #FFF98A)).",
                headlineColor: "var(--theme-background)",
                headlineTag: "h2",
                paragraphText: "",
                statusItems: []
              }
            }
          ]
        }]
      }
    }
  ],

  // ============================================================================
  // FOOTER (shared from home)
  // ============================================================================
  footer: realEstateHome.footer
};

module.exports = realEstateBlogs;
