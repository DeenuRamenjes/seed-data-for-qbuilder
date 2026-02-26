/**
 * Travel Template - About Us Page
 * Theme: Wanderlust, Adventure, Premium Travel
 */

const travelAbout = {
  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    {
      key: "travel-about-hero",
      name: "About Hero Section",
      description: "Hero section with heading and description",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#1B4965",
          fullWidth: true,
          fontFamily: "Poppins",
          paddingY: 80,
          paddingX: 48,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 24,
            gap: 16
          }
        },
        columns: [
          {
            id: "hero-content",
            width: "100%",
            props: {
              maxWidth: "800px",
              textAlign: "center"
            },
            elements: [
              {
                id: "hero-badge",
                type: "Paragraph",
                props: {
                  text: "ABOUT US",
                  size: "xs",
                  weight: "bold",
                  color: "#FF4D7C",
                  letterSpacing: "wider",
                  textTransform: "uppercase",
                  marginBottom: 16
                }
              },
              {
                id: "hero-heading",
                type: "Heading",
                props: {
                  text: "Our Story of Wanderlust",
                  tag: "h1",
                  size: "5xl",
                  fontWeight: "black",
                  color: "#ffffff",
                  align: "center",
                  marginBottom: 16,
                  "@media (max-width: 768px)": {
                    size: "3xl"
                  }
                }
              },
              {
                id: "hero-description",
                type: "Paragraph",
                props: {
                  text: "For over 15 years, we've been crafting journeys that transform travelers into storytellers. Discover the passion that drives every adventure we create.",
                  size: "lg",
                  color: "rgba(255,255,255,0.85)",
                  align: "center",
                  maxWidth: "650px",
                  marginX: "auto"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // OUR STORY SECTION
    // --------------------------------------------------------------------------
    {
      key: "travel-about-story",
      name: "Our Story",
      description: "Two-column story section with image",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Poppins",
          paddingY: 80,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 64,
          "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: 40,
            paddingY: 60,
            paddingX: 24
          }
        },
        columns: [
          {
            id: "story-image",
            width: "50%",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "story-img",
                type: "Image",
                props: {
                  src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
                  alt: "Travel Journey",
                  borderRadius: 20,
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover"
                }
              }
            ]
          },
          {
            id: "story-text",
            width: "50%",
            props: {
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "story-badge",
                type: "Paragraph",
                props: {
                  text: "OUR JOURNEY",
                  size: "sm",
                  fontWeight: "bold",
                  color: "#FF4D7C",
                  letterSpacing: 2,
                  marginBottom: 12
                }
              },
              {
                id: "story-heading",
                type: "Heading",
                props: {
                  text: "From a Dream to a Global Adventure Company",
                  tag: "h2",
                  size: "3xl",
                  fontWeight: "bold",
                  color: "#1B4965",
                  marginBottom: 24
                }
              },
              {
                id: "story-para-1",
                type: "Paragraph",
                props: {
                  text: "Founded in 2009, Wanderlust began with a simple belief: travel should be more than sightseeing — it should be a transformative experience. Our founders, avid explorers themselves, saw the gap between commercial tourism and meaningful travel.",
                  size: "base",
                  color: "#64748b",
                  lineHeight: 1.8,
                  marginBottom: 16
                }
              },
              {
                id: "story-para-2",
                type: "Paragraph",
                props: {
                  text: "Today, we operate across 50+ destinations, partnering with local communities to offer authentic experiences that respect cultures, support local economies, and create lasting memories for every traveler who trusts us with their journey.",
                  size: "base",
                  color: "#64748b",
                  lineHeight: 1.8
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // CORE VALUES GRID
    // --------------------------------------------------------------------------
    {
      key: "travel-values-grid",
      name: "Core Values",
      description: "Grid of core value cards with editable elements",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f8fafc",
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
            id: "values-header",
            width: "100%",
            elements: [
              { id: "values-badge", type: "Paragraph", props: { text: "OUR VALUES", size: "sm", fontWeight: "bold", color: "#FF4D7C", letterSpacing: 2, marginBottom: 12, align: "center", width: "100%" } },
              { id: "values-heading", type: "Heading", props: { text: "What Drives Us Forward", tag: "h2", size: "4xl", fontWeight: "bold", color: "#1B4965", marginBottom: 48, align: "center", width: "100%" } }
            ]
          },
          // Value 1
          {
            id: "value-1",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "value-card-1",
              type: "ServiceCard",
              props: {
                icon: "Fingerprint",
                title: "Authenticity",
                description: "We connect you with real cultures, genuine experiences, and local communities — no tourist traps.",
                iconColor: "#FF4D7C",
                iconBg: "rgba(255, 77, 124, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#1B4965",
                accentColor: "#FF4D7C",
                showLink: false,
                align: "center",
                style: "card"
              }
            }]
          },
          // Value 2
          {
            id: "value-2",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "value-card-2",
              type: "ServiceCard",
              props: {
                icon: "Leaf",
                title: "Sustainability",
                description: "Every trip is designed to minimize environmental impact and maximize positive contributions to local ecosystems.",
                iconColor: "#FF4D7C",
                iconBg: "rgba(255, 77, 124, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#1B4965",
                accentColor: "#FF4D7C",
                showLink: false,
                align: "center",
                style: "card"
              }
            }]
          },
          // Value 3
          {
            id: "value-3",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "value-card-3",
              type: "ServiceCard",
              props: {
                icon: "Shield",
                title: "Safety First",
                description: "Your well-being is our top priority with 24/7 support, vetted partners, and comprehensive travel insurance.",
                iconColor: "#FF4D7C",
                iconBg: "rgba(255, 77, 124, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#1B4965",
                accentColor: "#FF4D7C",
                showLink: false,
                align: "center",
                style: "card"
              }
            }]
          },
          // Value 4
          {
            id: "value-4",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "value-card-4",
              type: "ServiceCard",
              props: {
                icon: "Settings",
                title: "Personalization",
                description: "No two travelers are alike. Every itinerary is tailored to your preferences, pace, and travel style.",
                iconColor: "#FF4D7C",
                iconBg: "rgba(255, 77, 124, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#1B4965",
                accentColor: "#FF4D7C",
                showLink: false,
                align: "center",
                style: "card"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // TEAM GRID
    // --------------------------------------------------------------------------
    {
      key: "travel-team-grid",
      name: "Our Team",
      description: "Grid of team member cards with editable elements",
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
            id: "team-header",
            width: "100%",
            elements: [
              { id: "team-badge", type: "Paragraph", props: { text: "MEET THE TEAM", size: "sm", fontWeight: "bold", color: "#FF4D7C", letterSpacing: 2, marginBottom: 12, align: "center", width: "100%" } },
              { id: "team-heading", type: "Heading", props: { text: "The Explorers Behind Your Journeys", tag: "h2", size: "4xl", fontWeight: "bold", color: "#1B4965", marginBottom: 48, align: "center", width: "100%" } }
            ]
          },
          // Team 1
          {
            id: "team-1",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "team-card-1",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
                imageAspectRatio: "1/1",
                title: "James Mitchell",
                description: "Founder & CEO — Explored 70+ countries and founded Wanderlust to share his passion for authentic travel.",
                titleColor: "#1B4965",
                descriptionColor: "#64748b",
                backgroundColor: "#f8fafc",
                borderRadius: "20px",
                padding: "0",
                textAlign: "center",
                titleSize: "xl"
              }
            }]
          },
          // Team 2
          {
            id: "team-2",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "team-card-2",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
                imageAspectRatio: "1/1",
                title: "Sarah Chen",
                description: "Head of Experiences — Asia travel expert who curates unique cultural immersion experiences across the continent.",
                titleColor: "#1B4965",
                descriptionColor: "#64748b",
                backgroundColor: "#f8fafc",
                borderRadius: "20px",
                padding: "0",
                textAlign: "center",
                titleSize: "xl"
              }
            }]
          },
          // Team 3
          {
            id: "team-3",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "team-card-3",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
                imageAspectRatio: "1/1",
                title: "Marco Rossi",
                description: "Europe Lead — Born in Italy, Marco specializes in Mediterranean and European adventure itineraries.",
                titleColor: "#1B4965",
                descriptionColor: "#64748b",
                backgroundColor: "#f8fafc",
                borderRadius: "20px",
                padding: "0",
                textAlign: "center",
                titleSize: "xl"
              }
            }]
          },
          // Team 4
          {
            id: "team-4",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "team-card-4",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
                imageAspectRatio: "1/1",
                title: "Amara Okafor",
                description: "Africa Specialist — Safari expert and sustainability advocate crafting eco-conscious African adventures.",
                titleColor: "#1B4965",
                descriptionColor: "#64748b",
                backgroundColor: "#f8fafc",
                borderRadius: "20px",
                padding: "0",
                textAlign: "center",
                titleSize: "xl"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // STATS SECTION
    // --------------------------------------------------------------------------
    {
      key: "travel-about-stats",
      name: "About Stats",
      description: "Key metrics in a dark band",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#1B4965",
          fullWidth: true,
          fontFamily: "Poppins",
          paddingY: 64,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 24,
          "@media (max-width: 768px)": {
            paddingY: 48,
            paddingX: 24,
            gap: 16
          }
        },
        columns: [
          {
            id: "about-stat-1",
            width: "calc(25% - 18px)",
            props: { "@media (max-width: 768px)": { width: "calc(50% - 12px)" } },
            elements: [
              { id: "as1-num", type: "Heading", props: { text: "15+", tag: "h3", color: "#FF4D7C", size: "4xl", fontWeight: "black", align: "center", width: "100%", marginBottom: 8 } },
              { id: "as1-label", type: "Paragraph", props: { text: "Years of Experience", color: "#ffffff", size: "sm", align: "center", width: "100%" } }
            ]
          },
          {
            id: "about-stat-2",
            width: "calc(25% - 18px)",
            props: { "@media (max-width: 768px)": { width: "calc(50% - 12px)" } },
            elements: [
              { id: "as2-num", type: "Heading", props: { text: "50+", tag: "h3", color: "#FF4D7C", size: "4xl", fontWeight: "black", align: "center", width: "100%", marginBottom: 8 } },
              { id: "as2-label", type: "Paragraph", props: { text: "Countries Covered", color: "#ffffff", size: "sm", align: "center", width: "100%" } }
            ]
          },
          {
            id: "about-stat-3",
            width: "calc(25% - 18px)",
            props: { "@media (max-width: 768px)": { width: "calc(50% - 12px)" } },
            elements: [
              { id: "as3-num", type: "Heading", props: { text: "200+", tag: "h3", color: "#FF4D7C", size: "4xl", fontWeight: "black", align: "center", width: "100%", marginBottom: 8 } },
              { id: "as3-label", type: "Paragraph", props: { text: "Local Partners", color: "#ffffff", size: "sm", align: "center", width: "100%" } }
            ]
          },
          {
            id: "about-stat-4",
            width: "calc(25% - 18px)",
            props: { "@media (max-width: 768px)": { width: "calc(50% - 12px)" } },
            elements: [
              { id: "as4-num", type: "Heading", props: { text: "10K+", tag: "h3", color: "#FF4D7C", size: "4xl", fontWeight: "black", align: "center", width: "100%", marginBottom: 8 } },
              { id: "as4-label", type: "Paragraph", props: { text: "Happy Travelers", color: "#ffffff", size: "sm", align: "center", width: "100%" } }
            ]
          }
        ]
      }
    }
  ]
};

module.exports = travelAbout;
