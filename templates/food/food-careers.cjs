/**
 * Food Template - Careers / Offerings Page
 * Theme: Epilogue Culinary – Catering services, subscriptions, process
 * Colors: Primary #2e0057 (deep purple), Accent #ebd800 (gold)
 * Font: Epilogue
 */

const foodCareers = {
  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    {
      key: "food-careers-hero",
      name: "Offerings Hero",
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
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiKLRPfzafjWyQ-SIIDVNpH8Zh5hF_ULD4NDuW45nfToPRGlo7XUwtPyyVKwD2uKZ0SvRrAP4r5B1fpPwTBgkVbQZW9mmULXGyqi9emtGKJ_jBBWxuTsEVJzNEsFnowz0ExdGODOtj175d5CcXAQo619pfGLhsn-PnPLKjij2tZOgHdnL4fkvo-64W8dypTIfr7phB36gcN0tnE4m936gC-PS18hLeSIMcuuCeViGGgoExIHV0nBDLVgiFPYBP-hz0CyhES78VPH4",
                backgroundOverlay: "rgba(46, 0, 87, 0.55)",
                minHeight: "60vh",
                badgeText: "Premium Culinary Services",
                badgeColor: "#2e0057",
                badgeBackgroundColor: "#ebd800",
                badgeShowPing: false,
                headlineText: "Artisanal Excellence for Every [Occasion](linear-gradient(to right, #eb9900ff, #f5e84d)",
                headlineColor: "#FFFFFF",
                headlineTag: "h1",
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // BESPOKE CATERING (Image Left, Text Right)
    // --------------------------------------------------------------------------
    {
      key: "food-careers-catering",
      name: "Bespoke Catering",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Playfair Display",
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
            id: "catering-image",
            width: "calc(50% - 24px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "catering-img",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiMCNDCY-YiFH0HFVtOOQrh8RLXfY9qqEs4Rk8Jdf6wrNsr2GQ6tgkr6w1QLg3ZRbh4i2KnJLWZulbb9CIbUbmw1Tzn4FQNY5H38Ale6yJK555wPf0PSMpYo2fJhhJgM6i3Kzf9HKXDw7FIPJn6GP8kFMH3GpS19RF5lt3MUpypMzgeygzsKfAlJIoqmjjzp3dBENyJ4mwZzqHgsGGLyHz87BIapPA5ZJdVcq66wPQ2UmDOER_oJmNb5DeJ8Dex8L2TgzdIC6yg74",
                imageAspectRatio: "4/5",
                title: "",
                description: "",
                backgroundColor: "transparent",
                borderRadius: "16px",
                padding: "0"
              }
            }]
          },
          // Text
          {
            id: "catering-text",
            width: "calc(50% - 24px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              { id: "catering-accent", type: "Paragraph", props: { text: "━━━━━━━━━━━━", size: "sm", color: "#ebd800", marginBottom: 24 } },
              { id: "catering-title", type: "Heading", props: { text: "BESPOKE CATERING", tag: "h2", size: "4xl", fontWeight: "black", color: "#2e0057", marginBottom: 24 } },
              { id: "catering-desc", type: "Paragraph", props: { text: "Whether it's an intimate wedding or a high-stakes corporate gala, our bespoke catering service delivers a sensory masterpiece. We source only the finest local, organic ingredients to craft menus that reflect your vision.", size: "lg", color: "rgba(46, 0, 87, 0.8)", lineHeight: 1.7, marginBottom: 32 } },
              {
                id: "catering-f1",
                type: "ServiceCard",
                props: {
                  icon: "CheckCircle",
                  title: "Tailored menus for 20 to 500 guests",
                  description: "",
                  iconColor: "#ebd800",
                  accentColor: "#2e0057",
                  iconBg: "transparent",
                  backgroundColor: "transparent",
                  textColor: "#2e0057",
                  showLink: false,
                  align: "left",
                  style: "minimal",
                  fontFamily: "Playfair Display"
                }
              },
              {
                id: "catering-f2",
                type: "ServiceCard",
                props: {
                  icon: "CheckCircle",
                  title: "Full event coordination & styling",
                  description: "",
                  iconColor: "#ebd800",
                  accentColor: "#2e0057",
                  iconBg: "transparent",
                  backgroundColor: "transparent",
                  textColor: "#2e0057",
                  showLink: false,
                  align: "left",
                  style: "minimal",
                  fontFamily: "Playfair Display"
                }
              },
              {
                id: "catering-f3",
                type: "ServiceCard",
                props: {
                  icon: "CheckCircle",
                  title: "Sommelier-curated wine pairings",
                  description: "",
                  iconColor: "#ebd800",
                  accentColor: "#2e0057",
                  iconBg: "transparent",
                  backgroundColor: "transparent",
                  textColor: "#2e0057",
                  showLink: false,
                  align: "left",
                  style: "minimal",
                  fontFamily: "Playfair Display"
                }
              },
              { id: "catering-cta", type: "ButtonGroup", props: { primaryText: "Inquire About Catering", primaryBg: "#2e0057", primaryTextColor: "#ffffff", primaryBorderRadius: 8, gap: "gap-4", layout: "horizontal" } }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // PRIVATE CHEF (Text Left, Image Right)
    // --------------------------------------------------------------------------
    {
      key: "food-careers-chef",
      name: "Private Chef",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 0,
          paddingX: 48,
          paddingBottom: 96,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 48,
          alignItems: "center",
          "@media (max-width: 768px)": {
            paddingX: 24,
            gap: 32,
            paddingBottom: 64
          }
        },
        columns: [
          // Text
          {
            id: "chef-text",
            width: "calc(50% - 24px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              { id: "chef-accent", type: "Paragraph", props: { text: "━━━━━━━━━━━━", size: "sm", color: "#ebd800", marginBottom: 24 } },
              { id: "chef-title", type: "Heading", props: { text: "PRIVATE CHEF", tag: "h2", size: "4xl", fontWeight: "black", color: "#2e0057", marginBottom: 24 } },
              { id: "chef-desc", type: "Paragraph", props: { text: "Bring the Michelin-star experience to your own dining table. Our private chefs curate intimate, multi-course journeys that respect your dietary preferences while challenging your palate.", size: "lg", color: "rgba(46, 0, 87, 0.8)", lineHeight: 1.7, marginBottom: 32 } },
              {
                id: "chef-f1",
                type: "ServiceCard",
                props: {
                  icon: "CheckCircle",
                  title: "Personalized 5, 7, or 9-course menus",
                  description: "",
                  iconColor: "#ebd800",
                  iconBg: "transparent",
                  accentColor: "#2e0057",
                  backgroundColor: "transparent",
                  textColor: "#2e0057",
                  showLink: false,
                  align: "left",
                  style: "minimal",
                  fontFamily: "Playfair Display"
                }
              },
              {
                id: "chef-f2",
                type: "ServiceCard",
                props: {
                  icon: "CheckCircle",
                  title: "Live preparation and storytelling",
                  description: "",
                  iconColor: "#ebd800",
                  accentColor: "#2e0057",
                  iconBg: "transparent",
                  backgroundColor: "transparent",
                  textColor: "#2e0057",
                  showLink: false,
                  align: "left",
                  style: "minimal",
                  fontFamily: "Playfair Display"
                }
              },
              {
                id: "chef-f3",
                type: "ServiceCard",
                props: {
                  icon: "CheckCircle",
                  title: "Complete kitchen clean-up service",
                  description: "",
                  iconColor: "#ebd800",
                  accentColor: "#2e0057",
                  iconBg: "transparent",
                  backgroundColor: "transparent",
                  textColor: "#2e0057",
                  showLink: false,
                  align: "left",
                  style: "minimal",
                  fontFamily: "Playfair Display"
                }
              },
              { id: "chef-cta", type: "ButtonGroup", props: { primaryText: "Book Your Chef", primaryBg: "#2e0057", primaryTextColor: "#ffffff", primaryBorderRadius: 8, gap: "gap-4", layout: "horizontal" } }
            ]
          },
          // Image
          {
            id: "chef-image",
            width: "calc(50% - 24px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "chef-img",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCl_0kRM_PYJIt7CFfgG3CjNixgHE8mBv1iqyUiPN0I3y1QuMHYNqkinUzV4Ku2bHAUJKPfsuVtPKOwboiFIa3K5nDrCWM4pxTOXsbeNjH4bs5xif3VQmlqBdzrGHuVNGsA-HAfK1OEiV3L7jwrYufuSDqAR4lMeRSs0117AVo6S_SHTvN-r4dQRpx8D9OcDRYqJWObIJCp_whDknNFczbgKv5CTv1eSUBv4G8txne1dwRn4dDKfa5Q_RB3t1spvyQ1xMnu-xniBw",
                imageAspectRatio: "4/5",
                title: "",
                description: "",
                backgroundColor: "transparent",
                borderRadius: "16px",
                padding: "0"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // SUBSCRIPTION BOXES HEADER
    // --------------------------------------------------------------------------
    {
      key: "food-careers-subs-header",
      name: "Subscription Boxes Header",
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
          flexDirection: "column",
          alignItems: "center",
          "@media (max-width: 768px)": {
            paddingY: 64,
            paddingX: 24
          }
        },
        columns: [{
          id: "subs-header-col",
          width: "100%",
          props: { textAlign: "center", maxWidth: "700px" },
          elements: [
            { id: "subs-title", type: "Heading", props: { text: "Seasonal Subscription Boxes", tag: "h2", size: "4xl", fontWeight: "black", color: "#2e0057", marginBottom: 16, align: "center", width: "100%" } },
            { id: "subs-desc", type: "Paragraph", props: { text: "Curated monthly selections of our kitchen's most prized creations, delivered to your door.", size: "lg", color: "rgba(46, 0, 87, 0.75)", marginBottom: 48, align: "center", width: "100%" } }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // SUBSCRIPTION BOXES GRID
    // --------------------------------------------------------------------------
    {
      key: "food-careers-subs-grid",
      name: "Subscription Cards",
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
            id: "sub-1",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "sub-card-1",
              type: "ServiceCard",
              props: {
                icon: "Cake",
                title: "The Artisan Baker",
                description: "Sourdough variants, heritage grain breads, and hand-churned cultured butters. $45/month",
                iconColor: "#2e0057",
                iconBg: "rgba(46, 0, 87, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          },
          {
            id: "sub-2",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "sub-card-2",
              type: "ServiceCard",
              props: {
                icon: "UtensilsCrossed",
                title: "The Connoisseur",
                description: "Rare cheeses, cured meats, and our signature small-batch preserves and pickles. $85/month",
                iconColor: "#2e0057",
                iconBg: "rgba(46, 0, 87, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          },
          {
            id: "sub-3",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "sub-card-3",
              type: "ServiceCard",
              props: {
                icon: "Wine",
                title: "The Full Pantry",
                description: "A complete monthly selection including bread, cheese, charcuterie, and a bottle of wine. $125/month",
                iconColor: "#2e0057",
                iconBg: "rgba(46, 0, 87, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // THE ARTISAN JOURNEY (Process Steps)
    // --------------------------------------------------------------------------
    {
      key: "food-careers-process-header",
      name: "Process Header",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 96,
          paddingX: 48,
          paddingBottom: 0,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          "@media (max-width: 768px)": {
            paddingY: 64,
            paddingX: 24
          }
        },
        columns: [{
          id: "process-header-col",
          width: "100%",
          elements: [
            { id: "process-title", type: "Heading", props: { text: "THE ARTISAN JOURNEY", tag: "h2", size: "4xl", fontWeight: "black", color: "#2e0057", marginBottom: 64, align: "center", width: "100%", letterSpacing: -1 } }
          ]
        }]
      }
    },
    {
      key: "food-careers-process-grid",
      name: "Process Steps",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 0,
          paddingX: 48,
          paddingBottom: 96,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 48,
          "@media (max-width: 768px)": {
            paddingX: 24,
            gap: 32,
            paddingBottom: 64
          }
        },
        columns: [
          {
            id: "step-1",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "step-card-1",
              type: "ServiceCard",
              props: {
                icon: "MessageSquare",
                title: "Consultation",
                description: "We begin with a deep dive into your preferences, themes, and dietary needs.",
                iconColor: "#ebd800",
                iconBg: "#2e0057",
                backgroundColor: "transparent",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "center",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          },
          {
            id: "step-2",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "step-card-2",
              type: "ServiceCard",
              props: {
                icon: "PenTool",
                title: "Menu Design",
                description: "Our chefs curate a bespoke menu that tells a story through local flavors.",
                iconColor: "#ebd800",
                iconBg: "#2e0057",
                backgroundColor: "transparent",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "center",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          },
          {
            id: "step-3",
            width: "calc(33.33% - 32px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "step-card-3",
              type: "ServiceCard",
              props: {
                icon: "Sparkles",
                title: "The Experience",
                description: "We handle everything from logistics to presentation, letting you savor the moment.",
                iconColor: "#ebd800",
                iconBg: "#2e0057",
                backgroundColor: "transparent",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "center",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // TESTIMONIAL
    // --------------------------------------------------------------------------
    {
      key: "food-careers-testimonial",
      name: "Client Testimonial",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#2e0057",
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
            { id: "test-stars", type: "Paragraph", props: { text: "★ ★ ★ ★ ★", size: "lg", color: "#ebd800", marginBottom: 32, align: "center", width: "100%" } },
            { id: "test-quote", type: "Heading", props: { text: "ArtisanCuisine transformed our corporate gala into a culinary journey. The attention to detail and the quality of the local ingredients were simply unparalleled. Our guests are still talking about it.", tag: "p", size: "2xl", fontWeight: "300", color: "rgba(255, 255, 255, 0.9)", marginBottom: 32, align: "center", width: "100%", fontStyle: "italic" } },
            { id: "test-name", type: "Heading", props: { text: "Elena Richardson", tag: "p", size: "lg", fontWeight: "bold", color: "#ebd800", marginBottom: 4, align: "center", width: "100%" } },
            { id: "test-role", type: "Paragraph", props: { text: "DIRECTOR OF EVENTS, LUXE MEDIA GROUP", size: "xs", fontWeight: "bold", color: "rgba(255, 255, 255, 0.5)", letterSpacing: 3, align: "center", width: "100%" } }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // ELEVATE YOUR NEXT EVENT CTA
    // --------------------------------------------------------------------------
    {
      key: "food-careers-cta",
      name: "Elevate Event CTA",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 96,
          paddingX: 48,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          "@media (max-width: 768px)": {
            paddingY: 64,
            paddingX: 24
          }
        },
        columns: [{
          id: "event-cta-col",
          width: "100%",
          props: { maxWidth: "900px" },
          elements: [{
            id: "event-cta-card",
            type: "ServiceCard",
            props: {
              icon: "ChefHat",
              title: "Elevate Your Next Event",
              description: "Contact our team to design a menu that reflects your unique taste.",
              iconColor: "#2e0057",
              iconBg: "rgba(46, 0, 87, 0.1)",
              backgroundColor: "#ebd800",
              textColor: "#2e0057",
              accentColor: "#2e0057",
              showLink: true,
              ctaText: "INQUIRE NOW",
              align: "center",
              style: "card",
              fontFamily: "Playfair Display"
            }
          }]
        }]
      }
    }
  ]
};

module.exports = foodCareers;
