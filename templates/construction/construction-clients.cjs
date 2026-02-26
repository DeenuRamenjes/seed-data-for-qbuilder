/**
 * Construction Template - Clients Page
 * Theme: Apex Structures
 */

const constructionHome = require('./construction-home.cjs');
const constructionAbout = require('./construction-about.cjs'); // for stats reuse

const constructionClients = {
  header: constructionHome.header,

  sections: [
    // --------------------------------------------------------------------------
    // HERO
    // --------------------------------------------------------------------------
    {
      key: "construction-clients-hero",
      name: "Clients Hero",
      structure: {
        type: "Section",
        defaultProps: {
            backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3V16Gg3aG11Q3J16TqLDrF9X3wCtQ7j4YmGBZ1w_2W7Q-Bv_3R4N2J1lK7k2Hk1vH4f2lO4M_9P1bS7n_0gJ1C5v5kX67lI-pG3K1c4mC7hJ2oF8D4X9rN7V8L5Z0Y3k6bJ9HwO1P2Q4RS6TBU9V6cW5XyZ8aK2nJ4dL7BmV9X3q0pI8uE0rF5gG4sC1W2lY5J6b9z8d_3fK7h1mJ6c4b9xL2n5Z8v0jQO6p9r2sL4tX3yZ8v1k7oJ6q9r4wL9tX5", // Using the vanguard spire image for impact
            backgroundOpacity: 0.7,
            backgroundColor: "var(--theme-text)",
            backgroundGradient: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 100%)",
            fullWidth: true,
            fontFamily: "Merriweather",
            paddingY: 140,
            paddingX: 48,
            layout: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh"
        },
        columns: [{
          id: "cl-hero-col",
          width: "100%",
          props: { align: "center" },
          elements: [
            { id: "cl-hero-h1", type: "Heading", props: { text: "Built on Trust", tag: "h1", size: "7xl", color: "var(--theme-background)", fontWeight: "900", textTransform: "uppercase", letterSpacing: "tighter", marginBottom: 32, align: "center" } },
            { id: "cl-hero-p", type: "Paragraph", props: { text: "We partner with the world's most visionary organizations to build the physical infrastructure of tomorrow.", color: "#a3a3a3", size: "xl", maxWidth: "700px", align: "center" } }
          ]
        }]
      }
    },
    // --------------------------------------------------------------------------
    // INVESTMENT PHILOSOPHY + AUM STATS
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
              marginX: "auto"
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
                  color: "#ffe100",
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
                  color: "var(--theme-background)",
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
                  color: "#ffe100",
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
                  color: "var(--theme-background)",
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
                  color: "#ffe100",
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
                  color: "var(--theme-background)",
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
                  color: "#ffe100",
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
                  color: "var(--theme-background)",
                  size: "base",
                  fontWeight: "bold"
                }
              }
            ]
          }
        ]
      }
    },
    // --------------------------------------------------------------------------
    // FEATURED TOURS / WHY CHOOSE US
    // --------------------------------------------------------------------------
    {
      key: "travel-featured",
      name: "Featured Experience",
      description: "Two-column featured tour highlight",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "var(--theme-text)",
          paddingY: 0,
          paddingX: 0,
          fullWidth: true
        },
        columns: [{
          id: "featured-col",
          width: "100%",
          elements: [{
            id: "featured-element",
            type: "DesignStudioFeaturedProject",
            props: {
              label: "Featured Experience",
              title: "THE SILK ROAD EXPEDITION",
              color: "var(--theme-background)",
              descriptionColor: "var(--theme-background)",
              description: "Embark on a 14-day journey through the ancient Silk Road, from Istanbul to Samarkand. Experience vibrant bazaars, majestic mosques, and vast desert landscapes. This curated expedition blends luxury accommodations with authentic cultural immersion, guided by expert historians and local storytellers who bring centuries of history to life.",
              image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1200",
              primaryColor: "#ffe100"
            }
          }]
        }]
      }
    },
    // --------------------------------------------------------------------------
    // MANIFESTO QUOTE
    // --------------------------------------------------------------------------
    {
      key: "food-about-quote",
      name: "Manifesto Quote",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          fontFamily: "merriweather",
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
          id: "quote-col",
          width: "100%",
          props: { maxWidth: "800px", textAlign: "center" },
          elements: [
            { id: "quote-icon", type: "Heading", props: { text: "❝", tag: "h1", size: "5xl", color: "#ffe100", marginBottom: 32, align: "center", width: "100%", opacity: 0.5 } },
            { id: "quote-text", type: "Heading", props: { text: "We believe that the finest flavors are not manufactured, but nurtured through generations of patience and a deep respect for the rhythm of the seasons.", tag: "h2", size: "3xl", fontWeight: "300", color: "var(--theme-background)", marginBottom: 40, align: "center", width: "100%", fontStyle: "italic" } },
            { id: "quote-source", type: "Paragraph", props: { text: "THE FOUNDING PRINCIPLE", size: "xs", fontWeight: "bold", color: "#ffe100", letterSpacing: 4, align: "center", width: "100%" } }
          ]
        }]
      }
    },
  ],

  footer: constructionHome.footer
};

module.exports = constructionClients;
