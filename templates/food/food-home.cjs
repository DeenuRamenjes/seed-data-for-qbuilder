/**
 * Food Template - Home Page
 * Theme: Epilogue Culinary – Luxury, Editorial, Premium Food
 * Colors: Primary #2e0057 (deep purple), Accent #ebd800 (gold)
 * Font: Epilogue
 */

const foodHome = {
  header: {
    key: "food-header",
    name: "Food Header",
    structure: {
      type: "Navbar",
      defaultProps: {
        sticky: true,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        paddingY: 0,
        paddingX: 0,
        fontFamily: "Playfair Display",
        showBorder: true,
        borderColor: "rgba(46, 0, 87, 0.1)",
        height: "80px"
      },
      props: {
        logo: {
          text: "Epilogue",
          icon: "restaurant",
          logoColor: "#2e0057",
          iconColor: "#2e0057",
          fontWeight: "extrabold",
          letterSpacing: "tight"
        },
        links: [
          { label: "Collections", href: "#" },
          { label: "Terroir", href: "#" },
          { label: "Philosophy", href: "#" },
          { label: "Contact", href: "#" }
        ],
        ctaButton: {
          text: "Shop Now",
          href: "#",
          variant: "primary",
          backgroundColor: "#ebd800",
          textColor: "#2e0057",
          borderRadius: "lg",
          height: "45px"
        }
      }
    }
  },

  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    {
      key: "food-hero",
      name: "Culinary Hero",
      structure: {
        type: "Section",
        defaultProps: {
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 0,
          paddingX: 0,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
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
                backgroundOverlay: "rgba(46, 0, 87, 0.45)",
                minHeight: "90vh",
                maxWidth: "100%",
                badgeText: "Experience the Art of Cooking",
                badgeColor: "#FFFFFF",
                badgeBackgroundColor: "rgba(46, 0, 87, 0.4)",
                badgeShowPing: false,
                align: "center",
                headlineText: "THE ART OF [THE PLATE](linear-gradient(to right, #eb9900ff, #f5e84d)",
                headlineColor: "#FFFFFF",
                headlineTag: "h1",
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // PULL QUOTE SECTION
    // --------------------------------------------------------------------------
    {
      key: "food-quote",
      name: "Philosophy Quote",
      description: "Pull quote about culinary philosophy",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f8ffb5ff",
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
          id: "quote-col",
          width: "100%",
          props: { maxWidth: "800px", textAlign: "center" },
          elements: [
            { id: "quote-icon", type: "Heading", props: { text: "❝", tag: "h1", size: "5xl", color: "#2e0057", marginBottom: 24, align: "center", width: "100%" } },
            { id: "quote-text", type: "Heading", props: { text: "Cooking is a language through which all the world's properties can be expressed.", tag: "h2", size: "4xl", fontWeight: "bold", color: "#2e0057", marginBottom: 32, align: "center", width: "100%", fontStyle: "italic" } },
            { id: "quote-divider", type: "Paragraph", props: { text: "—", size: "lg", color: "rgba(46, 0, 87, 0.2)", marginBottom: 16, align: "center", width: "100%" } },
            { id: "quote-source", type: "Paragraph", props: { text: "THE EPILOGUE PHILOSOPHY", size: "xs", fontWeight: "bold", color: "rgba(46, 0, 87, 0.4)", letterSpacing: 4, align: "center", width: "100%" } }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // CURATED INGREDIENTS SECTION (MODERNIZED)
    // --------------------------------------------------------------------------

    {
      key: "food-ingredients-grid",
      name: "Ingredient Cards Grid",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#fcfafc",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 0,
          paddingX: 48,
          paddingBottom: 120,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 32,
          "@media (max-width: 1024px)": {
            gap: 24,
          },
          "@media (max-width: 768px)": {
            paddingX: 24,
            paddingBottom: 80
          }
        },
        columns: [
          // Artisan Olive Oil
          {
            id: "ing-olive-oil",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "ing-card-3",
              type: "FeatureCard",
              props: {
                image: "https://img.freepik.com/free-photo/potato-patties-topped-with-beef-patties-shoe-strings_140725-5889.jpg?semt=ais_wordcount_boost&w=740&q=80",
                imageAspectRatio: "1/1",
                title: "Artisan Olive Oil",
                description: "Cold-pressed excellence from the sun-drenched groves of Apulia.",
                titleColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.6)",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "32px",
                textAlign: "left",
                titleSize: "xl",
                fontFamily: "Playfair Display"
              }
            }]
          },
          // Persian Saffron
          {
            id: "ing-saffron",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "ing-card-1",
              type: "FeatureCard",
              props: {
                image: "https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png",
                imageAspectRatio: "1/1",
                title: "Persian Saffron",
                description: "Pure threads hand-harvested in Khorasan. A symphony of earth.",
                titleColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.6)",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "32px",
                textAlign: "left",
                titleSize: "xl",
                fontFamily: "Playfair Display"
              }
            }]
          },
          // Black Winter Truffle
          {
            id: "ing-truffle",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "ing-card-2",
              type: "FeatureCard",
              props: {
                image: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9555.jpg",
                imageAspectRatio: "1/1",
                title: "Black Winter Truffle",
                description: "Périgord's finest, discovered by tradition and patient labor.",
                titleColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.6)",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "32px",
                textAlign: "left",
                titleSize: "xl",
                fontFamily: "Playfair Display"
              }
            }]
          },
          // Artisan Aged Balsamic
          {
            id: "ing-balsamic",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "ing-card-4",
              type: "FeatureCard",
              props: {
                image: "https://www.bhg.com/thmb/n6PgOSjqcvGxWhZF5nIhCHwGlFI=/1244x0/filters:no_upscale():strip_icc()/steamed-crab-legs-RU314122-4f003b1258f3499d81681be426953611.jpg",
                imageAspectRatio: "1/1",
                title: "Aged Balsamic",
                description: "Traditional Aceto Balsamico, aged for 25 years in ash casks.",
                titleColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.6)",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "32px",
                textAlign: "left",
                titleSize: "xl",
                fontFamily: "Playfair Display"
              }
            }]
          },
          // Mediterranean Sea Salt
          {
            id: "ing-salt",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "ing-card-5",
              type: "FeatureCard",
              props: {
                image: "https://www.bhg.com/thmb/n6PgOSjqcvGxWhZF5nIhCHwGlFI=/1244x0/filters:no_upscale():strip_icc()/steamed-crab-legs-RU314122-4f003b1258f3499d81681be426953611.jpg",
                imageAspectRatio: "1/1",
                title: "Grey Sea Salt",
                description: "Hand-harvested from the marshes of Guerande.",
                titleColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.6)",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "32px",
                textAlign: "left",
                titleSize: "xl",
                fontFamily: "Playfair Display"
              }
            }]
          },
          // Wild Forest Honey
          {
            id: "ing-honey",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "ing-card-6",
              type: "FeatureCard",
              props: {
                image: "https://www.bhg.com/thmb/n6PgOSjqcvGxWhZF5nIhCHwGlFI=/1244x0/filters:no_upscale():strip_icc()/steamed-crab-legs-RU314122-4f003b1258f3499d81681be426953611.jpg",
                imageAspectRatio: "1/1",
                title: "Wild Forest Honey",
                description: "Nectar collected from remote Black Forest blossoms.",
                titleColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.6)",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "32px",
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
    // TERROIR COMMITMENT SECTION (FULL-WIDTH PILLAR)
    // --------------------------------------------------------------------------
    {
      key: "food-terroir-pillar",
      name: "Terroir Commitment Pillar",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#2e0057",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 140,
          paddingX: 48,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(rgba(46, 0, 87, 0.95), rgba(46, 0, 87, 0.95)), url('https://www.bhg.com/thmb/n6PgOSjqcvGxWhZF5nIhCHwGlFI=/1244x0/filters:no_upscale():strip_icc()/steamed-crab-legs-RU314122-4f003b1258f3499d81681be426953611.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          "@media (max-width: 768px)": {
            paddingY: 100,
            paddingX: 24
          }
        },
        columns: [
          {
            id: "terroir-pillar-col",
            width: "100%",
            props: { maxWidth: "900px", textAlign: "center" },
            elements: [
              { id: "terroir-icon", type: "Heading", props: { text: "✧", size: "3xl", color: "#ebd800", marginBottom: 32, align: "center", width: "100%" } },
              { id: "terroir-title", type: "Heading", props: { text: "OUR COMMITMENT TO TERROIR", tag: "h2", size: "4xl", fontWeight: "900", color: "#ffffff", letterSpacing: 2, marginBottom: 40, align: "center", width: "100%" } },
              { id: "terroir-desc", type: "Paragraph", props: { text: "We believe the earth is the first ingredient. From the volcanic silts of Sicily to the high meadows of the Atlas mountains, our sourcing is a testament to the relationship between land and labor. Pure, traceable, and uncompromising products for the modern table.", size: "xl", color: "rgba(255, 255, 255, 0.9)", fontWeight: "400", lineHeight: 1.8, marginBottom: 48, align: "center", width: "100%" } },
              { id: "terroir-btn", type: "ButtonGroup", props: { primaryText: "EXPLORE THE ORIGINS", primaryBg: "#ebd800", primaryTextColor: "#2e0057", primaryBorderRadius: 4, gap: "gap-4", layout: "horizontal", justifyContent: "center" } }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // SIGNATURE COLLECTIONS SECTION
    // --------------------------------------------------------------------------

    // --------------------------------------------------------------------------
    // COLLECTION 1 - THE NOIR SERIES (EDITORIAL REDESIGN)
    // --------------------------------------------------------------------------
    {
      key: "food-noir-collection",
      name: "The Noir Series",
      description: "Editorial showcase for the Noir collection",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 140,
          paddingX: 80,
          layout: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 100,
          "@media (max-width: 1024px)": {
            paddingX: 48,
            gap: 60
          },
          "@media (max-width: 768px)": {
            paddingY: 80,
            paddingX: 24,
            flexDirection: "column",
            gap: 60
          }
        },
        columns: [
          {
            id: "noir-text-col",
            width: "calc(50% - 50px)",
            props: { "@media (max-width: 768px)": { width: "100%", order: 1 } },
            elements: [
              { id: "noir-badge", type: "Paragraph", props: { text: "LIMITED EDITION", size: "xs", fontWeight: "bold", color: "#ebd800", backgroundColor: "#2e0057", letterSpacing: 4, marginBottom: 32, padding: "8px 16px", borderRadius: 4, display: "inline-block" } },
              { id: "noir-title", type: "Heading", props: { text: "THE NOIR SERIES", tag: "h2", size: "6xl", fontWeight: "black", color: "#2e0057", marginBottom: 32, letterSpacing: -2, lineHeight: 1.1 } },
              { id: "noir-desc", type: "Paragraph", props: { text: "A selection of deep, earthy flavors designed for evening entertaining. Features our signature aged balsamic, black salts, and smoke-infused oils.", size: "xl", color: "rgba(46, 0, 87, 0.7)", lineHeight: 1.8, marginBottom: 48 } },
              { id: "noir-price", type: "Heading", props: { text: "$245 — THE COMPLETE SET", tag: "p", size: "3xl", fontWeight: "bold", color: "#2e0057", marginBottom: 40 } },
              { id: "noir-cta", type: "ButtonGroup", props: { primaryText: "Acquire Collection", primaryBg: "#2e0057", primaryTextColor: "#ffffff", primaryBorderRadius: 4, gap: "gap-4" } }
            ]
          },
          {
            id: "noir-img-col",
            width: "calc(50% - 50px)",
            props: { "@media (max-width: 768px)": { width: "100%", order: 2 } },
            elements: [
              {
                id: "noir-main-img",
                type: "FeatureCard",
                props: {
                  image: "https://www.bhg.com/thmb/n6PgOSjqcvGxWhZF5nIhCHwGlFI=/1244x0/filters:no_upscale():strip_icc()/steamed-crab-legs-RU314122-4f003b1258f3499d81681be426953611.jpg",
                  imageAspectRatio: "16/9",
                  title: "",
                  description: "",
                  backgroundColor: "transparent",
                  borderRadius: "32px",
                  padding: "0"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // COLLECTION 2 - THE GOLD STANDARD (EDITORIAL REDESIGN)
    // --------------------------------------------------------------------------
    {
      key: "food-gold-collection",
      name: "The Gold Standard",
      description: "Editorial showcase for the Gold Standard collection",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#fcfafc",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 140,
          paddingX: 80,
          layout: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 100,
          "@media (max-width: 1024px)": {
            paddingX: 48,
            gap: 60
          },
          "@media (max-width: 768px)": {
            paddingY: 80,
            paddingX: 24,
            flexDirection: "column",
            gap: 60
          }
        },
        columns: [
          {
            id: "gold-img-col",
            width: "calc(50% - 50px)",
            props: { "@media (max-width: 768px)": { width: "100%", order: 2 } },
            elements: [
              {
                id: "gold-main-img",
                type: "FeatureCard",
                props: {
                  image: "https://www.bhg.com/thmb/n6PgOSjqcvGxWhZF5nIhCHwGlFI=/1244x0/filters:no_upscale():strip_icc()/steamed-crab-legs-RU314122-4f003b1258f3499d81681be426953611.jpg",
                  imageAspectRatio: "16/9",
                  title: "",
                  description: "",
                  backgroundColor: "transparent",
                  borderRadius: "32px",
                  padding: "0"
                }
              }
            ]
          },
          {
            id: "gold-text-col",
            width: "calc(50% - 50px)",
            props: { "@media (max-width: 768px)": { width: "100%", order: 1 } },
            elements: [
              { id: "gold-badge", type: "Paragraph", props: { text: "BEST SELLER", size: "xs", fontWeight: "bold", color: "#ebd800", backgroundColor: "#2e0057", letterSpacing: 4, marginBottom: 32, padding: "8px 16px", borderRadius: 4, display: "inline-block" } },
              { id: "gold-title", type: "Heading", props: { text: "THE GOLD STANDARD", tag: "h2", size: "6xl", fontWeight: "black", color: "#2e0057", marginBottom: 32, letterSpacing: -2, lineHeight: 1.1 } },
              { id: "gold-desc", type: "Paragraph", props: { text: "Bring the warmth of the sun to your kitchen. This collection highlights the brightest spices and infusions from the Mediterranean coast.", size: "xl", color: "rgba(46, 0, 87, 0.7)", lineHeight: 1.8, marginBottom: 48 } },
              { id: "gold-price", type: "Heading", props: { text: "$185 — THE STARTER KIT", tag: "p", size: "3xl", fontWeight: "bold", color: "#2e0057", marginBottom: 40 } },
              { id: "gold-cta", type: "ButtonGroup", props: { primaryText: "Acquire Collection", primaryBg: "#2e0057", primaryTextColor: "#ffffff", primaryBorderRadius: 4, gap: "gap-4" } }
            ]
          }
        ]
      }
    },
    {
      key: "food-emerald-collection",
      name: "The Emerald Series",
      description: "Editorial showcase for the Emerald collection",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 140,
          paddingX: 80,
          layout: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 100,
          "@media (max-width: 1024px)": {
            paddingX: 48,
            gap: 60
          },
          "@media (max-width: 768px)": {
            paddingY: 80,
            paddingX: 24,
            flexDirection: "column",
            gap: 60
          }
        },
        columns: [
          {
            id: "emerald-text-col",
            width: "calc(50% - 50px)",
            props: { "@media (max-width: 768px)": { width: "100%", order: 2 } },
            elements: [
              { id: "emerald-badge", type: "Paragraph", props: { text: "NEW ARRIVAL", size: "xs", fontWeight: "bold", color: "#ebd800", backgroundColor: "#00572e", letterSpacing: 4, marginBottom: 32, padding: "8px 16px", borderRadius: 4, display: "inline-block" } },
              { id: "emerald-title", type: "Heading", props: { text: "THE EMERALD SERIES", tag: "h2", size: "6xl", fontWeight: "black", color: "#2e0057", marginBottom: 32, letterSpacing: -2, lineHeight: 1.1 } },
              { id: "emerald-desc", type: "Paragraph", props: { text: "Cold-pressed herb infusions and vibrant botanical oils. A tribute to the lush, verdant landscapes of the high Atlas.", size: "xl", color: "rgba(46, 0, 87, 0.7)", lineHeight: 1.8, marginBottom: 48 } },
              { id: "emerald-price", type: "Heading", props: { text: "$195 — THE BOTANICAL SET", tag: "p", size: "3xl", fontWeight: "bold", color: "#2e0057", marginBottom: 40 } },
              { id: "emerald-cta", type: "ButtonGroup", props: { primaryText: "Acquire Collection", primaryBg: "#2e0057", primaryTextColor: "#ffffff", primaryBorderRadius: 4, gap: "gap-4" } }
            ]
          },
          {
            id: "emerald-img-col",
            width: "calc(50% - 50px)",
            props: { "@media (max-width: 768px)": { width: "100%", order: 1 } },
            elements: [
              {
                id: "emerald-main-img",
                type: "FeatureCard",
                props: {
                  image: "https://www.bhg.com/thmb/n6PgOSjqcvGxWhZF5nIhCHwGlFI=/1244x0/filters:no_upscale():strip_icc()/steamed-crab-legs-RU314122-4f003b1258f3499d81681be426953611.jpg",
                  imageAspectRatio: "16/9",
                  title: "",
                  description: "",
                  backgroundColor: "transparent",
                  borderRadius: "32px",
                  padding: "0"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // CHEF'S SELECTION (SEASONAL SPOTLIGHT)
    // --------------------------------------------------------------------------
    {
      key: "food-chefs-selection",
      name: "Chef's Selection",
      description: "Seasonal ingredient spotlight",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 140,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 80,
          "@media (max-width: 1024px)": { gap: 40 },
          "@media (max-width: 768px)": {
            paddingY: 100,
            paddingX: 24,
            flexDirection: "column",
            gap: 60
          }
        },
        columns: [
          {
            id: "chef-selection-img",
            width: "calc(50% - 40px)",
            props: { "@media (max-width: 768px)": { width: "100%" } },
            elements: [{
              id: "chef-img",
              type: "FeatureCard",
              props: {
                image: "https://www.bhg.com/thmb/n6PgOSjqcvGxWhZF5nIhCHwGlFI=/1244x0/filters:no_upscale():strip_icc()/steamed-crab-legs-RU314122-4f003b1258f3499d81681be426953611.jpg",
                imageAspectRatio: "3/4",
                title: "",
                description: "",
                backgroundColor: "transparent",
                borderRadius: "32px",
                padding: "0"
              }
            }]
          },
          {
            id: "chef-selection-text",
            width: "calc(50% - 40px)",
            props: { "@media (max-width: 768px)": { width: "100%" } },
            elements: [
              { id: "chef-badge", type: "Paragraph", props: { text: "SEASONAL SPOTLIGHT", size: "xs", fontWeight: "bold", color: "#ebd800", letterSpacing: 3, marginBottom: 24 } },
              { id: "chef-title", type: "Heading", props: { text: "CHEF'S WINTER\nSELECTION", tag: "h2", size: "5xl", fontWeight: "black", color: "#2e0057", marginBottom: 32, lineHeight: 1.1 } },
              { id: "chef-desc", type: "Paragraph", props: { text: "This season, we've focused on the deep, concentrated sugars of root vegetables and the briny, sharp finish of cold-water botanicals. Our Winter Atelier features limited run pressings of Moroccan blood oranges and Swedish samphire sea salts.", size: "lg", color: "rgba(46, 0, 87, 0.7)", lineHeight: 1.8, marginBottom: 48 } },
              { id: "chef-cta", type: "ButtonGroup", props: { primaryText: "Explore Seasonal Map", primaryBg: "#2e0057", primaryTextColor: "#ffffff", primaryBorderRadius: 4, gap: "gap-4" } }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // THE ATELIER EXPERIENCE
    // --------------------------------------------------------------------------
    {
      key: "food-atelier-header",
      name: "Atelier Header",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#2e0057",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 120,
          paddingX: 48,
          paddingBottom: 40,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        },
        columns: [{
          id: "ate-header-col",
          width: "100%",
          props: { maxWidth: "900px", textAlign: "center" },
          elements: [
            { id: "ate-badge", type: "Heading", props: { text: "✧ THE ATELIER ✧", size: "xs", fontWeight: "bold", color: "#ebd800", letterSpacing: 6, marginBottom: 40, align: "center", width: "100%" } },
            { id: "ate-title", type: "Heading", props: { text: "PRIVATE DINING & THE SHOWROOM", tag: "h2", size: "6xl", fontWeight: "black", color: "#ffffff", letterSpacing: -2, marginBottom: 48, align: "center", width: "100%" } },
            { id: "ate-desc", type: "Paragraph", props: { text: "Located in the heart of Auckland, the Epilogue Atelier is more than a showroom—it's a living kitchen where clients experiment with rare ingredients and collaborate on custom harvests.", size: "xl", color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.8, marginBottom: 48, maxWidth: "800px", align: "center", width: "100%" } }
          ]
        }]
      }
    },
  ],

  footer: {
    key: "food-footer",
    name: "Food Footer",
    structure: {
      type: "Footer",
      defaultProps: {
        backgroundColor: "#2e0057",
        paddingY: 80,
        paddingX: 48,
        fontFamily: "Playfair Display",
        layout: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        gap: 48,
        "@media (max-width: 768px)": {
          paddingY: 48,
          paddingX: 24,
          flexDirection: "column"
        }
      },
      columns: [
        {
          id: "footer-brand",
          width: "25%",
          props: {
            "@media (max-width: 768px)": { width: "100%" }
          },
          elements: [
            {
              id: "footer-logo",
              type: "Heading",
              props: {
                text: "Epilogue",
                tag: "h3",
                size: "2xl",
                fontWeight: "black",
                color: "#ebd800",
                marginBottom: 24,
                letterSpacing: -1
              }
            },
            {
              id: "footer-tagline",
              type: "Paragraph",
              props: {
                text: "Defining the new luxury in gastronomy. From the terroir to the tabletop, we believe every meal should be a masterpiece.",
                color: "rgba(255, 255, 255, 0.4)",
                size: "sm",
                lineHeight: 1.7,
                maxWidth: "400px",
                marginBottom: 32
              }
            },
            {
              id: "footer-social",
              type: "SocialLinks",
              props: {
                links: [
                  { platform: "instagram", url: "#" },
                  { platform: "twitter", url: "#" },
                  { platform: "facebook", url: "#" }
                ],
                iconColor: "#ebd800",
                size: "md"
              }
            }
          ]
        },
        {
          id: "footer-nav",
          width: "20%",
          props: {
            "@media (max-width: 768px)": { width: "100%" }
          },
          elements: [{
            id: "links-nav",
            type: "LinkList",
            props: {
              title: "Navigation",
              titleColor: "#ebd800",
              textColor: "rgba(255, 255, 255, 0.6)",
              hoverColor: "#ebd800",
              items: [
                { label: "Latest Collections", href: "#" },
                { label: "Our Terroir Map", href: "#" },
                { label: "Chef Collaborations", href: "#" },
                { label: "Wholesale Program", href: "#" }
              ]
            }
          }]
        },
        {
          id: "footer-resources",
          width: "20%",
          props: {
            "@media (max-width: 768px)": { width: "100%" }
          },
          elements: [{
            id: "links-resources",
            type: "LinkList",
            props: {
              title: "Resources",
              titleColor: "#ebd800",
              textColor: "rgba(255, 255, 255, 0.6)",
              hoverColor: "#ebd800",
              items: [
                { label: "Shipping & Returns", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact Support", href: "#" }
              ]
            }
          }]
        },
        {
          id: "footer-atelier",
          width: "20%",
          props: {
            "@media (max-width: 768px)": { width: "100%" }
          },
          elements: [
            { id: "atelier-title", type: "Paragraph", props: { text: "THE ATELIER", size: "xs", fontWeight: "bold", color: "#ebd800", letterSpacing: 3, marginBottom: 24 } },
            { id: "atelier-desc", type: "Paragraph", props: { text: "Visit our experiential gallery and kitchen showroom.", size: "sm", color: "rgba(255, 255, 255, 0.6)", marginBottom: 16 } },
            { id: "atelier-addr", type: "Paragraph", props: { text: "124 Culina Ave,\nAuckland, NZ 1010", size: "sm", color: "rgba(255, 255, 255, 0.6)", fontStyle: "italic" } }
          ]
        }
      ]
    }
  }
};

module.exports = foodHome;
