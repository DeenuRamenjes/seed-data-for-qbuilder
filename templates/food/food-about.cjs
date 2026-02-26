/**
 * Food Template - About Us Page
 * Theme: Epilogue Culinary – Heritage, Philosophy, Producers
 * Colors: Primary #2e0057 (deep purple), Accent #ebd800 (gold)
 * Font: Epilogue
 */

const foodAbout = {
  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    {
      key: "food-about-hero",
      name: "About Hero",
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
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3uBm8up2i4N2Zk-bNBehdmM8cjf8UAaMsQjxm7TZ33pGCLj9-7Ah-0dsI-GuvkTpY4M-eCc6jIcv3YwDgrm7MFJ74WSODuE9UXwZA0Udz9VVKCvDEufRI-jcWv7lCHNOQNLCsINSAKeJxVAJ1c5kavhpzo6eIgT9sw--p8yuZB-efFTS8R1at_Pv_M4geXClNAJDFC97zjWKLxD5PBNd_Dl4h0WGPpysRAJlcPUjR4Mz-Z-BUMlM2NB7xU8NK1DAaoeG9z_4m3rs",
                backgroundOverlay: "rgba(46, 0, 87, 0.45)",
                minHeight: "90vh",
                badgeText: "Our Philosophy",
                badgeColor: "#FFFFFF",
                badgeBackgroundColor: "rgba(255, 255, 255, 0.15)",
                badgeShowPing: false,
                headlineText: "Heritage in Every [Harvest](linear-gradient(to right, #eb9900ff, #f5e84d)",
                headlineColor: "#FFFFFF",
                headlineTag: "h1",
                paragraphText: "",
                paragraphColor: "#e4e4e7",
                paragraphSize: "xl"
              }
            }
          ]
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
          backgroundColor: "#ffffff",
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
          id: "quote-col",
          width: "100%",
          props: { maxWidth: "800px", textAlign: "center" },
          elements: [
            { id: "quote-icon", type: "Heading", props: { text: "❝", tag: "p", size: "5xl", color: "#2e0057", marginBottom: 32, align: "center", width: "100%", opacity: 0.5 } },
            { id: "quote-text", type: "Heading", props: { text: "We believe that the finest flavors are not manufactured, but nurtured through generations of patience and a deep respect for the rhythm of the seasons.", tag: "h2", size: "3xl", fontWeight: "300", color: "rgba(46, 0, 87, 0.8)", marginBottom: 40, align: "center", width: "100%", fontStyle: "italic" } },
            { id: "quote-source", type: "Paragraph", props: { text: "THE FOUNDING PRINCIPLE", size: "xs", fontWeight: "bold", color: "rgba(46, 0, 87, 0.5)", letterSpacing: 4, align: "center", width: "100%" } }
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
          backgroundColor: "#f7f5f8",
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
            id: "source-image",
            width: "calc(58.33% - 24px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "source-img",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpjy07GCgWwbnzrHLDhVpIaPH4Y4z9ltWK-b_THMzF_W80YCWYyBWCFJl2ZsbJKBQEn7HhQZGqxbih3Ys71nRhKwXbEDWcO7eNzc6c7hBjbjfAtdRwqjwQ-lRFeNk7MLnCrTNzp7AbdEj12Q5inEV4vvxLJfBU9ieMPookWq8hzx_OQt7xeXgqrfwz1AMdhs8Dr-xVjZ0GV58OwGXIfhBvVEGgNBX-GCRmK_j2Eyd0C29KC1JPN2ZOZP5ae4BzQqf9C2c_sIeqAAs",
                imageAspectRatio: "16/9",
                title: "",
                description: "",
                backgroundColor: "transparent",
                borderRadius: "16px",
                padding: "0",
                fontFamily: "Playfair Display"
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
              { id: "source-badge", type: "Paragraph", props: { text: "THE SOURCE", size: "xs", fontWeight: "bold", color: "#2e0057", letterSpacing: 4, marginBottom: 16 } },
              { id: "source-title", type: "Heading", props: { text: "Roots that run deeper than time.", tag: "h2", size: "4xl", fontWeight: "bold", color: "#2e0057", marginBottom: 32 } },
              { id: "source-p1", type: "Paragraph", props: { text: "Our journey begins in the volcanic soils of the Mediterranean and the nutrient-rich valleys of the Alps. We don't just pick farms; we partner with ecosystems.", size: "lg", color: "rgba(46, 0, 87, 0.6)", lineHeight: 1.7, marginBottom: 24 } },
              { id: "source-p2", type: "Paragraph", props: { text: "By respecting the natural biodiversity of our lands, we ensure every grain and fruit carries the mineral complexity that modern mass-farming has forgotten.", size: "lg", color: "rgba(46, 0, 87, 0.6)", lineHeight: 1.7, marginBottom: 32 } }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // OUR CRAFT SECTION
    // --------------------------------------------------------------------------
    {
      key: "food-about-craft",
      name: "Our Craft",
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
          // Text
          {
            id: "craft-text",
            width: "calc(41.67% - 24px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              { id: "craft-badge", type: "Paragraph", props: { text: "OUR CRAFT", size: "xs", fontWeight: "bold", color: "#2e0057", letterSpacing: 4, marginBottom: 16 } },
              { id: "craft-title", type: "Heading", props: { text: "The Art of Living Slowly.", tag: "h2", size: "4xl", fontWeight: "bold", color: "#2e0057", marginBottom: 32 } },
              { id: "craft-p1", type: "Paragraph", props: { text: "In a world obsessed with speed, we choose the slow road. Our artisanal techniques haven't changed in three generations because quality doesn't have a shortcut.", size: "lg", color: "rgba(46, 0, 87, 0.6)", lineHeight: 1.7, marginBottom: 32 } },
              {
                id: "craft-feature-1",
                type: "ServiceCard",
                props: {
                  icon: "Clock",
                  title: "Patience-First Aging",
                  description: "Natural fermentation processes that take weeks, not hours.",
                  iconColor: "#2e0057",
                  iconBg: "rgba(46, 0, 87, 0.1)",
                  backgroundColor: "transparent",
                  textColor: "#2e0057",
                  accentColor: "#2e0057",
                  showLink: false,
                  align: "left",
                  style: "minimal",
                  fontFamily: "Playfair Display"
                }
              },
              {
                id: "craft-feature-2",
                type: "ServiceCard",
                props: {
                  icon: "Hand",
                  title: "Hand-Finished Detail",
                  description: "Every batch is inspected and finished by master artisans.",
                  iconColor: "#2e0057",
                  iconBg: "rgba(46, 0, 87, 0.1)",
                  backgroundColor: "transparent",
                  textColor: "#2e0057",
                  accentColor: "#2e0057",
                  showLink: false,
                  align: "left",
                  style: "minimal",
                  fontFamily: "Playfair Display"
                }
              }
            ]
          },
          // Image
          {
            id: "craft-image",
            width: "calc(58.33% - 24px)",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "craft-img",
              type: "FeatureCard",
              props: {
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl8KiwZgOqVRdMQCoBSpJUmASLO09_bxLAH778S2qS4w2jZb0zJxgpj_1e3LsA1Fu0YcEE4JIZ2w8T3M9O24B7XinBW658w8o2zVW7ZDdJPV-nipMyhVhZ5A4Q9MViQurFvQqaNorS0Mx3CpO1uFUv5-MUHbkeWaHCoZkmat7cQ-QTN0wbhgPDOrfVYMOH94Ld-bKt-rpR64Yw_KlOs4LBsOpMXPgUoctM4PTODpjfX4FZ83O5Us2O56zzTj5_RzGkRClA5Z7FJPs",
                imageAspectRatio: "16/9",
                title: "",
                description: "",
                backgroundColor: "transparent",
                borderRadius: "16px",
                padding: "0",
                fontFamily: "Playfair Display"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // MEET THE PRODUCERS - HEADER
    // --------------------------------------------------------------------------
    {
      key: "food-about-producers-header",
      name: "Producers Header",
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
            id: "prod-header-left",
            width: "60%",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              { id: "prod-badge", type: "Paragraph", props: { text: "THE FACES", size: "xs", fontWeight: "bold", color: "#2e0057", letterSpacing: 4, marginBottom: 16 } },
              { id: "prod-title", type: "Heading", props: { text: "Meet the Stewards of Our Land", tag: "h2", size: "5xl", fontWeight: "bold", color: "#2e0057" } }
            ]
          },
          {
            id: "prod-header-right",
            width: "30%",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              { id: "prod-desc", type: "Paragraph", props: { text: "Heritage is built on people. Meet the families who have dedicated their lives to culinary excellence.", size: "sm", color: "rgba(46, 0, 87, 0.5)", fontWeight: "500" } }
            ]
          }
        ]
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
          backgroundColor: "#f7f5f8",
          fullWidth: true,
          fontFamily: "Playfair Display",
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
                titleColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.5)",
                backgroundColor: "#ffffff",
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
                titleColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.5)",
                backgroundColor: "#ffffff",
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
                titleColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.5)",
                backgroundColor: "#ffffff",
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
    // TASTE THE HERITAGE CTA
    // --------------------------------------------------------------------------
    {
      key: "food-atelier-grid",
      name: "Atelier Services",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#2e0057",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 0,
          paddingX: 48,
          paddingBottom: 120,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "center"
        },
        columns: [
          {
            id: "ate-grid-header",
            width: "100%",
            props: { textAlign: "center", marginBottom: 64, marginTop: 64 },
            elements: [
              { id: "ate-grid-badge", type: "Paragraph", props: { text: "EXPERIENCE", size: "xs", fontWeight: "bold", color: "#ebd800", letterSpacing: 4,marginTop: 16, marginBottom: 16, align: "center", width: "100%" } },
              { id: "ate-grid-title", type: "Heading", props: { text: "The Atelier Services", tag: "h2", size: "5xl", fontWeight: "bold", color: "#ffffff", align: "center", width: "100%" } }
            ]
          },
          { id: "ate-feat-1", width: "calc(33.33% - 22px)", props: { "@media (max-width: 768px)": { width: "100%" } }, elements: [{ id: "ate-card-1", type: "FeatureCard", props: { title: "Private Events", description: "Bespoke culinary experiences for intimate gatherings.", titleColor: "#ebd800", descriptionColor: "#ffffff", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", textAlign: "center" } }] },
          { id: "ate-feat-2", width: "calc(33.33% - 22px)", props: { "@media (max-width: 768px)": { width: "100%" } }, elements: [{ id: "ate-card-2", type: "FeatureCard", props: { title: "Ingredient Workshops", description: "Master the nuances of the world's rarest products.", titleColor: "#ebd800", descriptionColor: "#ffffff", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", textAlign: "center" } }] },
          { id: "ate-feat-3", width: "calc(33.33% - 22px)", props: { "@media (max-width: 768px)": { width: "100%" } }, elements: [{ id: "ate-card-3", type: "FeatureCard", props: { title: "The Harvest Room", description: "Exclusive first-tasting access to our seasonal pressings.", titleColor: "#ebd800", descriptionColor: "#ffffff", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", textAlign: "center" } }] },
          { id: "ate-footer-cta", width: "100%", props: { marginTop: 64, textAlign: "center" }, elements: [{ id: "ate-btn", type: "ButtonGroup", props: { primaryText: "REQUEST A PRIVATE TOUR", primaryBg: "#ebd800", primaryTextColor: "#2e0057", primaryBorderRadius: 4, gap: "gap-4", layout: "horizontal", justifyContent: "center" } }] }
        ]
      }
    }
  ]
};

module.exports = foodAbout;
