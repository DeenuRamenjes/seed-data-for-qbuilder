/**
 * Food Template - Testimonials Page
 * Theme: Epilogue Culinary – Client stories, social proof
 * Colors: Primary #2e0057 (deep purple), Accent #ebd800 (gold)
 * Font: Epilogue
 */

const foodTestimonials = {
  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    {
      key: "food-testimonials-hero",
      name: "Testimonials Hero",
      structure: {
        type: "Section",
        defaultProps: {
          fullWidth: true,
          fontFamily: "Playfair Display",
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
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnlfMsCH0cvT-vOhfB7UaMvvwZ16qJRhzzsefvZXgt6eqqI8G4oRl28HwAnKvp3JI_eA22tuqtuf3y09nTbFD3s22cdfQL-pB9umaH15hLZn12_m14z9EgcFmtCp8qAE5agE5CT6WajPKO83usRcCe0SHBIx8L2Y3vUGDaG9_gdrK5NsuaA4FXkuMo0DbsW_eo--buCG_L-RxSlYTRgbT8K-kQ99GC3sGq4xz7-Knygl8K5aSDkHT2M5D68voMlIX-v5DcdGQT2XM",
                backgroundOverlay: "rgba(46, 0, 87, 0.4)",
                minHeight: "50vh",
                badgeText: "The Voices",
                badgeColor: "#FFFFFF",
                badgeBackgroundColor: "rgba(255, 255, 255, 0.15)",
                badgeShowPing: false,
                headlineText: "Words from Our [Table](linear-gradient(to right, #eb9900ff, #f5e84d)",
                headlineColor: "#FFFFFF",
                headlineTag: "h1",
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // FEATURED TESTIMONIAL
    // --------------------------------------------------------------------------
    {
      key: "food-testimonials-featured",
      name: "Featured Testimonial",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f8ffb5ff",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 120,
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
          id: "featured-col",
          width: "100%",
          props: { maxWidth: "800px", textAlign: "center" },
          elements: [
            { id: "feat-stars", type: "Paragraph", props: { text: "★ ★ ★ ★ ★", size: "xl", color: "#2e0057", marginBottom: 32, align: "center", width: "100%" } },
            { id: "feat-quote", type: "Heading", props: { text: "Epilogue didn't just cater our event — they transformed it into a story told through flavors. Each course was a revelation, and our guests still talk about the saffron risotto months later.", tag: "p", size: "3xl", fontWeight: "300", color: "rgba(46, 0, 87, 0.8)", marginBottom: 40, align: "center", width: "100%", fontStyle: "italic" } },
            { id: "feat-divider", type: "Paragraph", props: { text: "—", size: "xl", color: "rgba(46, 0, 87, 0.2)", marginBottom: 16, align: "center", width: "100%" } },
            { id: "feat-name", type: "Heading", props: { text: "Isabelle & Laurent Moreau", tag: "p", size: "lg", fontWeight: "bold", color: "#2e0057", marginBottom: 4, align: "center", width: "100%" } },
            { id: "feat-role", type: "Paragraph", props: { text: "PRIVATE WEDDING DINNER • AMALFI COAST", size: "xs", fontWeight: "bold", color: "rgba(46, 0, 87, 0.4)", letterSpacing: 3, align: "center", width: "100%" } }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // TESTIMONIALS HEADER
    // --------------------------------------------------------------------------
    {
      key: "food-testimonials-grid-header",
      name: "Client Stories Header",
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
            id: "stories-header-left",
            width: "60%",
            props: { "@media (max-width: 768px)": { width: "100%" } },
            elements: [
              { id: "stories-badge", type: "Paragraph", props: { text: "CLIENT STORIES", size: "xs", fontWeight: "bold", color: "#2e0057", letterSpacing: 4, marginBottom: 16 } },
              { id: "stories-title", type: "Heading", props: { text: "Experiences Shared by Our Community", tag: "h2", size: "4xl", fontWeight: "bold", color: "#2e0057" } }
            ]
          },
          {
            id: "stories-header-right",
            width: "30%",
            props: { "@media (max-width: 768px)": { width: "100%" } },
            elements: [
              { id: "stories-desc", type: "Paragraph", props: { text: "Real feedback from the hosts, chefs, and food lovers who trust Epilogue.", size: "sm", color: "rgba(46, 0, 87, 0.5)", fontWeight: "500" } }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // TESTIMONIAL CARDS ROW 1
    // --------------------------------------------------------------------------
    {
      key: "food-testimonials-row-1",
      name: "Testimonial Cards Row 1",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f7f5f8",
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
                icon: "Quote",
                title: "A Culinary Masterpiece",
                description: "The Gold Standard collection completely changed how I approach dinner parties. The aged balsamic alone is worth the price of the entire set. Truly world-class.",
                iconColor: "#ebd800",
                iconBg: "rgba(235, 216, 0, 0.15)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display",
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
                icon: "Quote",
                title: "Beyond Expectations",
                description: "We hired Epilogue for our annual gala and they exceeded every expectation. The presentation was art, and the flavors were extraordinary. Our guests were speechless.",
                iconColor: "#ebd800",
                iconBg: "rgba(235, 216, 0, 0.15)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display",
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
                icon: "Quote",
                title: "Unmatched Quality",
                description: "As a professional chef, I'm incredibly particular about my ingredients. Epilogue's Persian Saffron is the finest I've ever used. The terroir commitment is no marketing gimmick — you can taste it.",
                iconColor: "#ebd800",
                iconBg: "rgba(235, 216, 0, 0.15)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display",
                ctaText: "— Chef Anwar Hadid"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // TESTIMONIAL CARDS ROW 2
    // --------------------------------------------------------------------------
    {
      key: "food-testimonials-row-2",
      name: "Testimonial Cards Row 2",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f7f5f8",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 0,
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
            id: "test-4",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "test-card-4",
              type: "ServiceCard",
              props: {
                icon: "Quote",
                title: "The Perfect Gift",
                description: "I ordered the Noir Series as a holiday gift for my parents. They called it the most thoughtful present they've ever received. The unboxing experience alone was extraordinary.",
                iconColor: "#ebd800",
                iconBg: "rgba(235, 216, 0, 0.15)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display",
                ctaText: "— Priya Malhotra, Subscriber"
              }
            }]
          },
          {
            id: "test-5",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "test-card-5",
              type: "ServiceCard",
              props: {
                icon: "Quote",
                title: "Month After Month",
                description: "I've been a Full Pantry subscriber for a year and I've never been disappointed. Each month brings a new surprise, and the wine pairings are always exceptional.",
                iconColor: "#ebd800",
                iconBg: "rgba(235, 216, 0, 0.15)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display",
                ctaText: "— Daniel Ashworth, Subscriber"
              }
            }]
          },
          {
            id: "test-6",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "test-card-6",
              type: "ServiceCard",
              props: {
                icon: "Quote",
                title: "A Partnership We Value",
                description: "As a restaurant owner, finding reliable premium suppliers is everything. Epilogue's wholesale program delivers consistency and quality that our diners notice and appreciate.",
                iconColor: "#ebd800",
                iconBg: "rgba(235, 216, 0, 0.15)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                ctaText: "— Luca Ferretti, Restaurateur"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // JOIN THE TABLE CTA
    // --------------------------------------------------------------------------
    {
      key: "food-testimonials-cta",
      name: "Join the Table CTA",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#2e0057",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 120,
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
            { id: "cta-heading", type: "Heading", props: { text: "Ready to Experience Epilogue?", tag: "h2", size: "5xl", fontWeight: "bold", color: "#ffffff", marginBottom: 24, align: "center", width: "100%" } },
            { id: "cta-desc", type: "Paragraph", props: { text: "Join thousands of culinary enthusiasts who trust Epilogue for premium ingredients, bespoke catering, and unforgettable dining experiences.", size: "lg", color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.7, marginBottom: 48, align: "center", width: "100%" } },
            { id: "cta-buttons", type: "ButtonGroup", props: { primaryText: "Shop Collections", primaryBg: "#ebd800", primaryTextColor: "#000000", primaryBorderRadius: 8, secondaryText: "Contact Us", secondaryBg: "#ffffff", secondaryTextColor: "#2e0057", secondaryBorderRadius: 8, secondaryBorderColor: "#ffffff", gap: "gap-6", layout: "horizontal", justifyContent: "center" } }
          ]
        }]
      }
    }
  ]
};

module.exports = foodTestimonials;
