/**
 * Construction Template - Gallery Page
 * Theme: Apex Structures
 */

const constructionHome = require('./construction-home.cjs');

const constructionGallery = {
  header: constructionHome.header,

  sections: [
    // --------------------------------------------------------------------------
    // HERO
    // --------------------------------------------------------------------------
    {
      key: "construction-gallery-hero",
      name: "Gallery Hero",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "var(--theme-text)",
          paddingY: 120,
          paddingX: 48,
          fontFamily: "Merriweather"
        },
        columns: [
          {
            id: "gl-hero-content",
            width: "60%",
            elements: [
               { id: "gl-badge", type: "Paragraph", props: { text: "Our Portfolio", color: "#ffe100", size: "xs", fontWeight: "900", textTransform: "uppercase", letterSpacing: "widest", marginBottom: 24 } },
               { id: "gl-h1", type: "Heading", props: { text: "We Shape the World", tag: "h1", size: "6xl", color: "var(--theme-background)", fontWeight: "900", textTransform: "uppercase", letterSpacing: "tighter", marginBottom: 32 } },
               { id: "gl-p", type: "Paragraph", props: { text: "Explore our archive of landmark projects, where engineering challenges meet architectural ambition.", color: "var(--theme-background)", size: "xl", maxWidth: "600px" } }
            ]
          },
          {
            id: "gl-hero-stats",
            width: "40%",
            elements: [
               {
                 id: "gl-stat-grid",
                 type: "Box",
                 props: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 48 },
                 children: [
                    { id: "gs-1", type: "Box", children: [{ id: "gsv-1", type: "Heading", props: { text: "450+", color: "var(--theme-primary)", size: "4xl", fontWeight: "900" } }, { id: "gsl-1", type: "Paragraph", props: { text: "Completed Projects", color: "#737373", size: "xs" } }] },
                    { id: "gs-2", type: "Box", children: [{ id: "gsv-2", type: "Heading", props: { text: "$12B", color: "#fbbf24", size: "4xl", fontWeight: "900" } }, { id: "gsl-2", type: "Paragraph", props: { text: "Total Value", color: "#737373", size: "xs" } }] }
                 ]
               }
            ]
          }
        ]
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
        props: {
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 100,
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
          // Header
          {
            id: "prop-header",
            width: "100%",
            elements: [
              { id: "prop-badge", type: "Paragraph", props: { text: "Gallery", size: "xs", fontWeight: "bold", color: "#ffe100", letterSpacing: 3, marginBottom: 12, width: "100%" } },
              { id: "prop-heading", type: "Heading", props: { text: "Our Works", tag: "h2", size: "4xl", fontWeight: "bold", color: "var(--theme-background)", marginBottom: 0, width: "100%" } }
            ]
          },
          // Property 1
          {
            id: "prop-1",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-1",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWyUouTIsGu-qL5IxzlU1N7uBgdhmhyafUOXX7YF8muOy6rq7UjkUj1uqLlqDQzGLFerkamcnVYjy7GSKkvT9ZqXz07zlVJyt5A6P4wjFjwxZ-CktRLpA9FDy6UVlzutk6fBTdUQ9ap7amFMlXjT929yNvDL7CpUdTrozooY4p7UGW7RKiajMJAg7mTEnQMEUg-hddM_2S_65_SDR7gzptUTG42-jFeRcr-cyQt_3D233JLBiZC8bCvvf_-IUeHYr5ibfhPh0wa-4",
                imageAspectRatio: "3/2",
                badge: "Residential",
                text: "The Glass Pavilion",
                description: "Los Angeles, CA — $12,500,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 2
          {
            id: "prop-2",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-2",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3QSWYbVPb1RkF3szHAQf1fyJ4uPPvIGQMs98R5EBEw00trZay9GLACFxdAdVKKw53x9jq5oqGMDCG9DfUhV0Vv0LwbTDI28HpnAqIxVWWffLWbLw1xySuncreXG0QxVZwy5HhkeScgqHSx9xbd3TkSY7yUvf687lUMdqS2CtQR89NeBvom1v8DvGx4kN51_lJ3zZZOIOPJg6yTJcWdDDMjDiHrH_oej-csIH5099vqKbfKx5o0iKNl8odBJHFRrtIHbzIf1HoSrw",
                imageAspectRatio: "3/2",
                badge: "Waterfront",
                text: "Azure Waterfront",
                description: "Miami, FL — $8,200,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 3
          {
            id: "prop-3",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-3",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXf91hmu4UBAHVF_7z9GGZ-XeCMVxtO5fozgB7Z1hWsOFVSsjXDqWCbcI-zgY83498Zfq4PVFZeIGdzxyLws3HITMOszcs25jagHBvgg9jMW9f1oBLA5eZv1oVZHfULQcWJ5N1JbS_W5bNh5xMEjInfHGLcHvBK7wN_ufiVHkKhiRgRRKgK0-ZQ7IFhvrmSKfQChPaJuMs_XGMppEGnuZqJ35whdTSJ_iFv8fc3o2IWqD-DucyvUQ1L_nmMOxNOXenWIr1ZtZtt7Y",
                imageAspectRatio: "3/2",
                badge: "Modern",
                text: "Minimalist Manor",
                description: "Austin, TX — $4,800,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 4
          {
            id: "prop-4",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-4",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ3hU0bgyukegwaqImejYYEMQJ3GGrR97qt7sL2sBJzMVhI0dU3-raTNRBhznaa0mcioHuecNWzwOLg6TIz7ljZeANXZjYsJnNl-efBKvARUA52bYJpjOyGzxciRZZiJsAUKYzLDhvbz1URzPk4i7yQ_r09FPgVSFUIiCMB_UANH5dgNCvgrH2YL_QvvCjGnfHhWLleyiVKZE55Xp-62FFGmC93IgsBbwCsgtARcHIp4XRHZj3DItsh3W4XW5uecpc_Y8v1dxOLxI",
                imageAspectRatio: "3/2",
                badge: "Mountain",
                text: "Obsidian Retreat",
                description: "Aspen, CO — $18,900,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 5
          {
            id: "prop-5",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-5",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa4f9-NXnMj-GFdFl5BYvbNMlvwpvZIKH2YQHRGCsmMqW0beGizPmqmzm1hjhpUpiThP9gB8OYVcfqqzgf2uaq2nXdvrzRue1YRgjF9h4MYXGmWfbm0pvKjeiQKHmAVdEiP3rMKVNjiyluT7TWIIDVw2qaXE-MlICvSgAQgePvwCleB4TvD-WpjMUVqmeyuNs6rpTQ-qzd-WF3vg_m6zGSOVkr7Lu_hwMi8rkIIFDygSnJ5YEimWmH-UHVwMTMzMN3ZaOV8tBhCbM",
                imageAspectRatio: "3/2",
                badge: "Skyline",
                text: "Emerald Skygarden",
                description: "Singapore — $24,500,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 6
          {
            id: "prop-6",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-6",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsCfSySrCxzme8RtykErRAKIFCO19ELElx4XeSqAeo1fln3B49B_qqbtU4EygU-RHX9NOHvsHG0dOw1wnvpw_HStplRhY8E7DrhNCKYG-cGAH1kOiLq3xiCrO30nNpnyDpQGz1g4vbAGe7pyAxR9GZzZP0PdBGKD5-GrPghrGwl3kMsMdz0BDScaHiWToY52bEg5lRkRbCjp4OzaiF1YO-EiPZ0K0WP4aoJrTutwAjB3dzny6cXKF6Nh0U3q_d3j76F6qMMUogCHE",
                imageAspectRatio: "3/2",
                badge: "Urban",
                text: "The Ivory Loft",
                description: "New York, NY — $9,200,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 7
          {
            id: "prop-7",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-7",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3V16Gg3aG11Q3J16TqLDrF9X3wCtQ7j4YmGBZ1w_2W7Q-Bv_3R4N2J1lK7k2Hk1vH4f2lO4M_9P1bS7n_0gJ1C5v5kX67lI-pG3K1c4mC7hJ2oF8D4X9rN7V8L5Z0Y3k6bJ9HwO1P2Q4RS6TBU9V6cW5XyZ8aK2nJ4dL7BmV9X3q0pI8uE0rF5gG4sC1W2lY5J6b9z8d_3fK7h1mJ6c4b9xL2n5Z8v0jQO6p9r2sL4tX3yZ8v1k7oJ6q9r4wL9tX5",
                imageAspectRatio: "3/2",
                badge: "Mountain",
                text: "Alpine Chalet",
                description: "Zermatt, CH — $15,200,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 8
          {
            id: "prop-8",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-8",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVrwKEbXbJXNsnE7aVos860XdSvN5-CCU-SLJOSNiKEjuJ3njmM_ZNRnZL3fMg4NpUz2U_D347GDfVTW8FfwnKelPr7KblPp032CLNFpJHC4SyFcbCBsI5s9fYO4-ym8-4-sJHolTTFaX4JhhVtz4xJdIMNOCcSgp46uhoFfdS2FaYu2s2TSBWZZpzaeptI-lEiSpWzRtv-9wQ6W22lUy8w2rdfrSP9Gs6cJT_Xnh5eviUHZlvQkXusjjussesFqNSv-l9LHXyQv4",
                imageAspectRatio: "3/2",
                badge: "Commercial",
                text: "Onyx Terminal",
                description: "Shanghai, CN — $220,000,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 9
          {
            id: "prop-9",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-9",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVavOA23XQdsU3fquicPMQluIFgIBudPRYeqoC986oZ2P1rXnrXdWIJSlXr5Jf09T5a_DMv7C-N7F-MgpVKdsKbleXHkLw_STZkeCld6buQVDVL6-uqaFx7FNVO5eb4XTDUONV0lEyzCRTAOaOfBmVlHoCLHpvOE047ulaz8yRB_r9F7CfqO1D3Xv-areFKjLP6ZG4QYNyUx-lJ5AelqaOuWI_wdrtHI0IE-KX4d2bJCda9Dg2y_hcAQtpPyd-XdsGGaPAfvzUUGU",
                imageAspectRatio: "3/2",
                badge: "Sustainable",
                text: "Solaris Campus",
                description: "Austin, TX — $45,000,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 10
          {
            id: "prop-10",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-10",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdFDNgPoN481mlOHGyw59E4Zh4fq5646PvpMe7df4NqtWcVPI4XkE_SAziDC2U3T8t7JwIYITk_7jNErZtGv2Cqc2sqU-DBHLkdFhGH1mtWSSxehrSeFx57GlJa-jfb2LONQlDz1r4k9OaNh-5PRL22Fe-KxHTq1hmaxx4nf9h3dht2BcT-pkzKp-LKjIy87fjgBp6NHz_7c6IbYjo3PDAigTdkZbgtiBULG_OvNlT0TkzehzguWiAR4rSBLo1f8M1ppgRtmikR5M",
                imageAspectRatio: "3/2",
                badge: "Luxury",
                text: "The Prism",
                description: "London, UK — $28,500,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 11
          {
            id: "prop-11",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-11",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCFJJgcHp6whD3XNnx-IdOg_u68RjnuC9XmmoBMxA6Mefa68rb7lWvwI-GX0lu_t5M-gAquixGRe-PV881CSvr83goGS8NSosQ9QQVZ6B0W-RfYsNNevV6YBW4iLLCj5FyByyjaZAoFEAZ5-Hhho_qmQJ0S1glsVXJoArRKL0MI3u5N1ZFD7I5-yHmYl5omlKC6P3eenQ9nEq66ZrCGLR5RCIERk-D6qPPA0z3TLH_Rh81RseFqUlkQRWt3qaAIZo1a-RJitMeU7Y",
                imageAspectRatio: "3/2",
                badge: "Industrial",
                text: "Apex Logistics",
                description: "Hamburg, DE — $180,000,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          },
          // Property 12
          {
            id: "prop-12",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 24px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "prop-card-12",
              type: "FeaturedCard2",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_g5zOqz6M9h1W4J2t7v8Z0k3L6q5X9Y2p4l8M1o7N0r3s2t6u5v4x1y0Z9k8j7h6g5f4d3s2a1l0q9w8e7r4t1y0u2i3o4p5a6s7d8f9g0h1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8",
                imageAspectRatio: "3/2",
                badge: "Innovation",
                text: "Carbon Tower",
                description: "Tokyo, JP — $320,000,000",
                badgeColor: "#ffe100",
                badgeBg: "var(--theme-text)",
                titleColor: "var(--theme-background)",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                borderRadius: "16px",
                showArrow: true,
                textAlign: "center"
              }
            }]
          }
        ]
      }
    },
  ],

  footer: constructionHome.footer
};

module.exports = constructionGallery;
