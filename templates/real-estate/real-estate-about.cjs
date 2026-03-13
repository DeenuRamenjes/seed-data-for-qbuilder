/**
 * Real Estate Template - About Us Page
 * Theme: Apex Estates – Editorial Architecture, Minimalist Luxury
 * Colors: Light (#f7f7f7), Dark (var(--theme-text)), Stone palette
 * Font: Manrope
 */

const realEstateHome = require('./real-estate-home.cjs');

const realEstateAbout = {
  // ============================================================================
  // HEADER (shared from home)
  // ============================================================================
  header: realEstateHome.header,

  // ============================================================================
  // PAGE SECTIONS
  // ============================================================================
  sections: [
    // --------------------------------------------------------------------------
    // EDITORIAL HERO
    // --------------------------------------------------------------------------
    {
      key: "about-hero",
      name: "About Hero",
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
          id: "about-hero-col",
          width: "100%",
          elements: [
            {
              type: "IndustrialHero",
              props: {
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsCfSySrCxzme8RtykErRAKIFCO19ELElx4XeSqAeo1fln3B49B_qqbtU4EygU-RHX9NOHvsHG0dOw1wnvpw_HStplRhY8E7DrhNCKYG-cGAH1kOiLq3xiCrO30nNpnyDpQGz1g4vbAGe7pyAxR9GZzZP0PdBGKD5-GrPghrGwl3kMsMdz0BDScaHiWToY52bEg5lRkRbCjp4OzaiF1YO-EiPZ0K0WP4aoJrTutwAjB3dzny6cXKF6Nh0U3q_d3j76F6qMMUogCHE",
                backgroundOverlay: "rgba(0,0,0,0.25)",
                minHeight: "85vh",
                maxWidth: "100%",
                badgeText: "Established 1994",
                badgeColor: "#b0903e",
                badgeBackgroundColor: "rgba(255,255,255,0.1)",
                badgeBorder: "1px solid rgba(255,255,255,0.2)",
                badgeShowPing: false,
                align: "center",
                headlineText: "Crafting Spaces Where Art Meets [Architecture](linear-gradient(to right, #b0903e, #FFF98A))",
                headlineColor: "var(--theme-background)",
                headlineTag: "h1",
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // STATS BAR
    // --------------------------------------------------------------------------
    {
      key: "about-stats",
      name: "Stats Bar",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#59184C",
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 50,
          paddingX: 48,
          borderBottom: "1px solid #e5e5e5",
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "space-between",
          "@media (max-width: 768px)": {
            paddingX: 24,
            gap: 24
          }
        },
        columns: [
          {
            id: "stat-1",
            width: "calc(25% - 24px)",
            props: { "@media (max-width: 768px)": { width: "calc(50% - 16px)" } },
            elements: [
              { id: "stat-1-label", type: "Paragraph", props: { text: "EXCELLENCE", size: "xs", fontWeight: "bold", color: "#b0903e", letterSpacing: 3, marginBottom: 8 } },
              { id: "stat-1-value", type: "Heading", props: { text: "30+ Years", tag: "h3", size: "3xl", fontWeight: "extrabold", color: "#FFF98A" } }
            ]
          },
          {
            id: "stat-2",
            width: "calc(25% - 24px)",
            props: { "@media (max-width: 768px)": { width: "calc(50% - 16px)" } },
            elements: [
              { id: "stat-2-label", type: "Paragraph", props: { text: "PORTFOLIO", size: "xs", fontWeight: "bold", color: "#ffe39b", letterSpacing: 3, marginBottom: 8 } },
              { id: "stat-2-value", type: "Heading", props: { text: "500+ Projects", tag: "h3", size: "3xl", fontWeight: "extrabold", color: "#ffe39b" } }
            ]
          },
          {
            id: "stat-3",
            width: "calc(25% - 24px)",
            props: { "@media (max-width: 768px)": { width: "calc(50% - 16px)" } },
            elements: [
              { id: "stat-3-label", type: "Paragraph", props: { text: "RECOGNITION", size: "xs", fontWeight: "bold", color: "#ffe39b", letterSpacing: 3, marginBottom: 8 } },
              { id: "stat-3-value", type: "Heading", props: { text: "12 Awards", tag: "h3", size: "3xl", fontWeight: "extrabold", color: "#ffe39b" } }
            ]
          },
          {
            id: "stat-4",
            width: "calc(25% - 24px)",
            props: { "@media (max-width: 768px)": { width: "calc(50% - 16px)" } },
            elements: [
              { id: "stat-4-label", type: "Paragraph", props: { text: "GLOBAL REACH", size: "xs", fontWeight: "bold", color: "#ffe39b", letterSpacing: 3, marginBottom: 8 } },
              { id: "stat-4-value", type: "Heading", props: { text: "8 Cities", tag: "h3", size: "3xl", fontWeight: "extrabold", color: "#ffe39b" } }
            ]
          }
        ]
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
          backgroundColor: "#f7f5f8",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 50,
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
              type: "Image",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpjy07GCgWwbnzrHLDhVpIaPH4Y4z9ltWK-b_THMzF_W80YCWYyBWCFJl2ZsbJKBQEn7HhQZGqxbih3Ys71nRhKwXbEDWcO7eNzc6c7hBjbjfAtdRwqjwQ-lRFeNk7MLnCrTNzp7AbdEj12Q5inEV4vvxLJfBU9ieMPookWq8hzx_OQt7xeXgqrfwz1AMdhs8Dr-xVjZ0GV58OwGXIfhBvVEGgNBX-GCRmK_j2Eyd0C29KC1JPN2ZOZP5ae4BzQqf9C2c_sIeqAAs",
                imageAspectRatio: "16/9",
                backgroundColor: "transparent",
                borderRadius: "16px",
                padding: "0",
                fontFamily: "Outfit"
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
              { id: "source-badge", type: "Paragraph", props: { text: "THE SOURCE", size: "xs", fontWeight: "bold", color: "#000", letterSpacing: 4, marginBottom: 16 } },
              { id: "source-title", type: "Heading", props: { text: "Roots that run deeper than time.", tag: "h2", size: "4xl", fontWeight: "bold", color: "#59184C", marginBottom: 32 } },
              { id: "source-p1", type: "Paragraph", props: { text: "Our journey begins in the volcanic soils of the Mediterranean and the nutrient-rich valleys of the Alps. We don't just pick farms; we partner with ecosystems.", size: "lg", color: "#000", lineHeight: 1.7, marginBottom: 24 } },
              { id: "source-p2", type: "Paragraph", props: { text: "By respecting the natural biodiversity of our lands, we ensure every grain and fruit carries the mineral complexity that modern mass-farming has forgotten.", size: "lg", color: "#000", lineHeight: 1.7, marginBottom: 32 } }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // PHILOSOPHY – IMAGE + VALUES
    // --------------------------------------------------------------------------
    {
      key: "about-philosophy",
      name: "Philosophy Section",
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
          gap: 48,
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 24,
            gap: 24
          }
        },
        columns: [
          // Left Column – Text + Image
          {
            id: "phil-left",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "100%" }
            },
            elements: [
              { id: "phil-badge", type: "Paragraph", props: { text: "PHILOSOPHY", size: "xs", fontWeight: "bold", color: "var(--theme-border)", letterSpacing: 3, marginBottom: 12 } },
              { id: "phil-heading", type: "Heading", props: { text: "Form Meets Function", tag: "h3", size: "3xl", fontWeight: "light", color: "#59184C", marginBottom: 20 } },
              { id: "phil-desc", type: "Paragraph", props: { text: "At Apex Estates, we believe architecture is a dialogue between the site, the material, and the inhabitant. Our designs aren't just seen; they are experienced.", size: "md", color: "#6B7280", lineHeight: 1.7, marginBottom: 32 } },
              {
                id: "phil-image",
                type: "Image",
                props: {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa4f9-NXnMj-GFdFl5BYvbNMlvwpvZIKH2YQHRGCsmMqW0beGizPmqmzm1hjhpUpiThP9gB8OYVcfqqzgf2uaq2nXdvrzRue1YRgjF9h4MYXGmWfbm0pvKjeiQKHmAVdEiP3rMKVNjiyluT7TWIIDVw2qaXE-MlICvSgAQgePvwCleB4TvD-WpjMUVqmeyuNs6rpTQ-qzd-WF3vg_m6zGSOVkr7Lu_hwMi8rkIIFDygSnJ5YEimWmH-UHVwMTMzMN3ZaOV8tBhCbM",
                  alt: "Modern living room interior with minimalist furniture",
                  aspectRatio: "4/3",
                  borderRadius: "12px",
                  width: "100%"
                }
              }
            ]
          },
          // Right Column – Value Cards
          {
            id: "phil-right-1",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "val-1",
                type: "ServiceCard",
                props: {
                  number: "01",
                  title: "Sustainability",
                  description: "Integrating passive solar design and sustainable materials without compromising on high-end luxury aesthetics.",
                  accentColor: "#59184C",
                  backgroundColor: "#f7f7f7",
                  textColor: "#000",
                  descriptionColor: "#000",
                  variant: "dark",
                  showDivider: true,
                  borderRadius: "8px"
                }
              },
              { id: "val-1-spacer", type: "Box", props: { height: 24, backgroundColor: "transparent", width: "100%" } },
              {
                id: "val-2",
                type: "ServiceCard",
                props: {
                  number: "02",
                  title: "Innovation",
                  description: "Utilizing BIM and VR walkthroughs to ensure every structural detail is optimized before a single stone is laid.",
                  accentColor: "#59184C",
                  backgroundColor: "#f7f7f7",
                  textColor: "#000",
                  descriptionColor: "#000",
                  variant: "dark",
                  showDivider: true,
                  borderRadius: "8px"
                }
              }
            ]
          },
          {
            id: "phil-right-2",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "val-3",
                type: "ServiceCard",
                props: {
                  number: "03",
                  title: "Heritage",
                  description: "Respecting the vernacular of the local landscape while infusing modern, timeless silhouettes.",
                  accentColor: "#59184C",
                  backgroundColor: "#f7f7f7",
                  textColor: "#000",
                  descriptionColor: "#000",
                  variant: "dark",
                  showDivider: true,
                  borderRadius: "8px"
                }
              },
              { id: "val-3-spacer", type: "Box", props: { height: 24, backgroundColor: "transparent", width: "100%" } },
              {
                id: "val-4",
                type: "ServiceCard",
                props: {
                  number: "04",
                  title: "Precision",
                  description: "An obsession with the millimetre. Our execution is as flawless as the blueprints we conceive.",
                  accentColor: "#59184C",
                  backgroundColor: "#f7f7f7",
                  textColor: "#000",
                  descriptionColor: "#000",
                  variant: "dark",
                  showDivider: true,
                  borderRadius: "8px"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // SENIOR PARTNERS
    // --------------------------------------------------------------------------
    {
      key: "about-team",
      name: "Senior Partners",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f7f7f7",
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
            id: "team-header",
            width: "100%",
            elements: [
              { id: "team-badge", type: "Paragraph", props: { text: "LEADERSHIP", size: "xs", fontWeight: "bold", color: "var(--theme-border)", letterSpacing: 3, marginBottom: 12, width: "100%" } },
              { id: "team-heading", type: "Heading", props: { text: "The Senior Partners", tag: "h2", size: "4xl", fontWeight: "extrabold", color: "#59184C", marginBottom: 48, width: "100%" } }
            ]
          },
          // Partner 1
          {
            id: "partner-1",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "partner-card-1",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVv03XNtrYWyOSv18c9R05XoAfhbhihkcwuAiNTypfop8wrqbAgbWFZ66QIjq4h-MM3v_NPcLu_KPa8ZqPpuLmvAc6OKK2cyxELM5cSKgWuc95ZbsHgnSxLsk8nfH93DPC3_zk3H-U9atf9AveC1KQtCu3lM2CqCcphoUh98JrZ-eRflf4Onh7PavMfy4hffciTth0WsLf9eVACLflgtFvvMiNT0waEoM98mIePAMmXE6fHaogdusCF8TSMS87khBgl8_klRQbTmQ",
                imageAspectRatio: "3/4",
                title: "Marcus Thorne",
                description: "Founder & Lead Architect",
                backgroundColor: "var(--theme-background)",
                borderRadius: "16px",
                textAlign: "left"
              }
            }]
          },
          // Partner 2
          {
            id: "partner-2",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "partner-card-2",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbRoofRSX4BF8g52CzSKUYKYMHmQsnzJQOFxJh2GM2LZR-leOyT4EEojf_KQQjeHd1KvdGxwsFqWV6UrFaBoTZ6FM5YBLp99fgKScaAdB6XMpGCX5NELrhWjHa4usZ0UEC32FUTXWmx9-eyykGSWVvtPmV-4a6tJcob7rp2iDjSkjwNJh4RcdsmjUILO8nOc58lvuxhQN_DFhYtY3jf8_OG_cAGqUvU-JlBWaMFCuy9cyjOsyBzswv_Mw-TjCibzFxD7P5Hur_iDc",
                imageAspectRatio: "3/4",
                title: "Elena Vance",
                description: "Design Director",
                backgroundColor: "var(--theme-background)",
                borderRadius: "16px",
                textAlign: "left"
              }
            }]
          },
          // Partner 3
          {
            id: "partner-3",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "partner-card-3",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGywHuMKjtuM29KgwDdlU2ao13NlZE04loaTGpFRX9T7uUk_EvXSeEk478IDPtGCKVtPNNkLse1LVb0vlWQGUOykax9YbZtrSyju8h_L7gJ_l-J4po-klw9tdEEVN1ky9n5NX7bZr2gGqDgik5C1NeSXlboD4PYhHoVjMFJ3a8q5V6tofs_Lpk-g_M-g_qbWiWa2757w3DoUEieOpStoZpPeT2Jf8jSOWRPDQslxEEccJvTkKOqdhx3Zc_qvfOSAab_QSk68KYdzQ",
                imageAspectRatio: "3/4",
                title: "David Chen",
                description: "Structural Director",
                backgroundColor: "var(--theme-background)",
                borderRadius: "16px",
                textAlign: "left"
              }
            }]
          },
          // Partner 4
          {
            id: "partner-4",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "partner-card-4",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWRfMdcMWxtMDz6dW0s2lQ2XHGQY5Vg2QLerBPsVtf56HkpVXFm3qA1X-NANXY7zChhsvLzFwLQUd363ixUwBAFuwglHGyjyrEerDrKAF6VwQz4V-Sh8iLX6E2e9_N-gjogHwgO2f5K3T9QoO-DbNvriHdSFM_RxPWGVT516ipe82Na9lD4L4zW59qGIsLgajMWrtYbKq0ngwkaUyIcqJ_c_-wWBTh7oK56DkwQp48TckZNkv83kSC-LVUAFeMQ0rAk5ah9DPNAYk",
                imageAspectRatio: "3/4",
                title: "Sophia Loren",
                description: "Sustainability Lead",
                backgroundColor: "var(--theme-background)",
                borderRadius: "16px",
                textAlign: "left"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // CTA SECTION
    // --------------------------------------------------------------------------
    {
      key: "about-cta",
      name: "Legacy CTA",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#59184C",
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 50,
          paddingX: 48,
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
          id: "cta-col",
          width: "100%",
          props: { maxWidth: "700px", textAlign: "center" },
          elements: [
            {
              id: "cta-heading",
              type: "Heading",
              props: { text: "Ready to Build Your Legacy?", tag: "h2", size: "4xl", fontWeight: "light", color: "#b0903e", marginBottom: 20, align: "center", width: "100%" }
            },
            {
              id: "cta-desc",
              type: "Paragraph",
              props: { text: "Join our list of discerning clients and partners who demand nothing less than architectural perfection. Let's discuss your next project.", size: "lg", color: "#b0903e", lineHeight: 1.7, marginBottom: 40, align: "center", width: "100%" }
            },
            {
              id: "cta-buttons",
              type: "ButtonGroup",
              props: {
                primaryText: "Get in Touch",
                primaryBg: "#b0903e",
                primaryColor: "#000",
                primaryBorderRadius: 8,
                secondaryText: "View Portfolio",
                secondaryBg: "#fff",
                secondaryColor: "#000",
                secondaryBorderColor: "#fff",
                secondaryBorderRadius: 8,
                gap: "gap-6",
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
  // FOOTER (shared from home)
  // ============================================================================
  footer: realEstateHome.footer
};

module.exports = realEstateAbout;
