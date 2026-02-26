/**
 * Travel Template - Home Page
 * Theme: Wanderlust, Adventure, Premium Travel
 */

const travelHome = {
  header: {
    key: "travel-header",
    name: "Travel Header",
    structure: {
      type: "Navbar",
      defaultProps: {
        sticky: true,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        paddingY: 0,
        paddingX: 0,
        fontFamily: "Poppins",
        showBorder: true,
        borderColor: "#f1f5f9",
        height: "80px"
      },
      props: {
        logo: {
          text: "Wanderlust",
          icon: "travel_explore",
          logoColor: "#1B4965",
          iconColor: "#FF4D7C",
          fontWeight: "extrabold",
          letterSpacing: "tight"
        },
        links: [
          { label: "Destinations", href: "#" },
          { label: "Tours", href: "#" },
          { label: "Services", href: "#" },
          { label: "Blog", href: "#" }
        ],
        ctaButton: {
          text: "Book Now",
          href: "#",
          variant: "primary",
          backgroundColor: "#FF4D7C",
          textColor: "#ffffff",
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
      key: "travel-hero",
      name: "Travel Hero",
      structure: {
        type: "Section",
        defaultProps: {
          fullWidth: true,
          fontFamily: "Poppins",
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
                backgroundImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
                backgroundOverlay: "rgba(0,0,0,0.4)",
                minHeight: "85vh",
                badgeText: "Explore the World",
                badgeColor: "#FFFFFF",
                badgeBackgroundColor: "rgba(255,255,255,0.15)",
                badgeShowPing: true,
                badgePingColor: "#FF4D7C",
                headlineText: "Your Journey [Begins Here](linear-gradient(to left, #FF4D7C, #ff4242ff)",
                headlineColor: "#FFFFFF",
                headlineTag: "h1",
                paragraphText: "Discover breathtaking destinations, curated travel experiences, and unforgettable adventures. Let us craft your perfect getaway with personalized itineraries designed just for you.",
                paragraphColor: "#e4e4e7",
                paragraphSize: "xl",
                statusItems: [
                  { text: "50+ Destinations", subtext: "Worldwide", color: "#FFFFFF", subtextColor: "#a1a1aa", size: "lg", fontWeight: "700" }
                ]
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // POPULAR DESTINATIONS GRID
    // --------------------------------------------------------------------------
    {
      key: "travel-destinations-grid",
      name: "Popular Destinations",
      description: "Grid of destination cards with editable elements",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Poppins",
          paddingY: 80,
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
            id: "dest-header",
            width: "100%",
            elements: [
              {
                id: "dest-badge",
                type: "Paragraph",
                props: { text: "TOP DESTINATIONS", size: "sm", fontWeight: "bold", color: "#FF4D7C", letterSpacing: 2, marginBottom: 12, align: "center", width: "100%" }
              },
              {
                id: "dest-heading",
                type: "Heading",
                props: { text: "Explore the World's Best", tag: "h2", size: "4xl", fontWeight: "bold", color: "#1B4965", marginBottom: 16, align: "center", width: "100%" }
              },
              {
                id: "dest-desc",
                type: "Paragraph",
                props: { text: "From tropical paradises to cultural capitals, discover destinations that will take your breath away.", size: "lg", color: "#64748b", lineHeight: 1.7, marginBottom: 32, align: "center", width: "100%" }
              }
            ]
          },
          // Destination 1
          {
            id: "dest-1",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "dest-card-1",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600",
                imageAspectRatio: "4/3",
                title: "Bali, Indonesia",
                description: "Tropical paradise with ancient temples, lush rice terraces, and world-class surfing.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "xl"
              }
            }]
          },
          // Destination 2
          {
            id: "dest-2",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "dest-card-2",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
                imageAspectRatio: "4/3",
                title: "Paris, France",
                description: "The city of lights, romance, and timeless architecture. Experience art, culture, and exquisite cuisine.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "xl"
              }
            }]
          },
          // Destination 3
          {
            id: "dest-3",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "dest-card-3",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600",
                imageAspectRatio: "4/3",
                title: "Maldives",
                description: "Crystal-clear waters, overwater villas, and pristine white-sand beaches in the Indian Ocean.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "xl"
              }
            }]
          },
          // Destination 4
          {
            id: "dest-4",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "dest-card-4",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600",
                imageAspectRatio: "4/3",
                title: "Santorini, Greece",
                description: "Iconic blue domes, dramatic sunsets, and Mediterranean charm on volcanic cliffs.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "xl"
              }
            }]
          },
          // Destination 5
          {
            id: "dest-5",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "dest-card-5",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600",
                imageAspectRatio: "4/3",
                title: "Dubai, UAE",
                description: "Futuristic skyline, luxury shopping, and desert adventures in this cosmopolitan oasis.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "xl"
              }
            }]
          },
          // Destination 6
          {
            id: "dest-6",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "dest-card-6",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600",
                imageAspectRatio: "4/3",
                title: "Kyoto, Japan",
                description: "Ancient temples, bamboo groves, and traditional tea houses in Japan's cultural heart.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "xl"
              }
            }]
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
          backgroundColor: "#ffffff",
          fontFamily: "Poppins",
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
              description: "Embark on a 14-day journey through the ancient Silk Road, from Istanbul to Samarkand. Experience vibrant bazaars, majestic mosques, and vast desert landscapes. This curated expedition blends luxury accommodations with authentic cultural immersion, guided by expert historians and local storytellers who bring centuries of history to life.",
              image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1200",
              primaryColor: "#FF4D7C"
            }
          }]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // STATS SECTION
    // --------------------------------------------------------------------------
    {
      key: "travel-stats",
      name: "Travel Stats",
      description: "Key performance metrics",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#1B4965",
          fullWidth: true,
          fontFamily: "Poppins",
          paddingY: 80,
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
          {
            id: "stat-1",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "stat-1-num",
                type: "Heading",
                props: { text: "50+", tag: "h3", color: "#FF4D7C", size: "5xl", fontWeight: "black", marginBottom: 12, align: "center", width: "100%" }
              },
              {
                id: "stat-1-label",
                type: "Paragraph",
                props: { text: "Destinations Worldwide", color: "#ffffff", size: "base", fontWeight: "bold", align: "center", width: "100%" }
              }
            ]
          },
          {
            id: "stat-2",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "stat-2-num",
                type: "Heading",
                props: { text: "10,000+", tag: "h3", color: "#FF4D7C", size: "5xl", fontWeight: "black", marginBottom: 12, align: "center", width: "100%" }
              },
              {
                id: "stat-2-label",
                type: "Paragraph",
                props: { text: "Happy Travelers", color: "#ffffff", size: "base", fontWeight: "bold", align: "center", width: "100%" }
              }
            ]
          },
          {
            id: "stat-3",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "stat-3-num",
                type: "Heading",
                props: { text: "15+ Years", tag: "h3", color: "#FF4D7C", size: "5xl", fontWeight: "black", marginBottom: 12, align: "center", width: "100%" }
              },
              {
                id: "stat-3-label",
                type: "Paragraph",
                props: { text: "Industry Experience", color: "#ffffff", size: "base", fontWeight: "bold", align: "center", width: "100%" }
              }
            ]
          },
          {
            id: "stat-4",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "stat-4-num",
                type: "Heading",
                props: { text: "98%", tag: "h3", color: "#FF4D7C", size: "5xl", fontWeight: "black", marginBottom: 12, align: "center", width: "100%" }
              },
              {
                id: "stat-4-label",
                type: "Paragraph",
                props: { text: "Customer Satisfaction", color: "#ffffff", size: "base", fontWeight: "bold", align: "center", width: "100%" }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // CTA SECTION
    // --------------------------------------------------------------------------
    {
      key: "travel-cta",
      name: "Travel CTA",
      description: "Call to action section",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#FF4D7C",
          fontFamily: "Poppins",
          paddingY: 64,
          paddingX: 48,
          fullWidth: false,
          maxWidth: "900px",
          margin: "0 auto 96px auto"
        },
        columns: [{
          id: "cta-col",
          width: "100%",
          props: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          },
          elements: [
            {
              id: "cta-heading",
              type: "Heading",
              props: {
                text: "Ready for Your Next Adventure?",
                tag: "h2",
                align: "center",
                color: "#FFFFFF",
                size: "3xl",
                fontWeight: "bold"
              }
            },
            {
              id: "cta-description",
              type: "Paragraph",
              props: {
                text: "Start planning your dream trip today. Our travel experts are ready to craft a personalized itinerary just for you.",
                align: "center",
                color: "rgba(255,255,255,0.9)",
                size: "md"
              }
            },
            {
              id: "cta-buttons",
              type: "ButtonGroup",
              props: {
                primaryText: "Plan My Trip",
                primaryBg: "#1B4965",
                primaryTextColor: "#ffffff",
                primaryBorderRadius: 24,
                secondaryText: "View Packages",
                secondaryBg: "#ffffff",
                secondaryTextColor: "#1B4965",
                secondaryBorder: "1px solid #ffffff",
                secondaryBorderRadius: 24,
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
  footer: {
    key: "travel-footer",
    type: "Footer",
    category: "footer",
    name: "Travel Footer",
    structure: {
      type: "Footer",
      defaultProps: {
        backgroundColor: "#1B4965",
        fontFamily: "Poppins",
        paddingY: 80,
        paddingX: 80,
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
              props: { text: "Wanderlust", tag: "h4", color: "#FF4D7C", marginBottom: "24px" }
            },
            {
              id: "footer-desc",
              type: "Paragraph",
              props: {
                text: "Crafting unforgettable travel experiences since 2009. We believe every journey should tell a story worth sharing.",
                color: "#cbd5e1",
                maxWidth: "400px",
                marginBottom: "32px"
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
                iconColor: "#FF4D7C",
                size: "md"
              }
            }
          ]
        },
        {
          id: "footer-destinations",
          width: "25%",
          elements: [{
            id: "links-destinations",
            type: "LinkList",
            props: {
              title: "Destinations",
              titleColor: "#FF4D7C",
              textColor: "#cbd5e1",
              hoverColor: "#FF4D7C",
              items: [
                { label: "Asia", href: "#" },
                { label: "Europe", href: "#" },
                { label: "Americas", href: "#" },
                { label: "Africa", href: "#" }
              ]
            }
          }]
        },
        {
          id: "footer-company",
          width: "25%",
          elements: [{
            id: "links-company",
            type: "LinkList",
            props: {
              title: "Company",
              titleColor: "#FF4D7C",
              textColor: "#cbd5e1",
              hoverColor: "#FF4D7C",
              items: [
                { label: "About Us", href: "#" },
                { label: "Services", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#" }
              ]
            }
          }]
        }
      ]
    }
  }
};

module.exports = travelHome;
