/**
 * Travel Template - Services Page
 * Theme: Wanderlust, Adventure, Premium Travel
 */

const travelServices = {
  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    {
      key: "travel-services-hero",
      name: "Services Hero Section",
      description: "Hero section for services page",
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
            props: { maxWidth: "800px", textAlign: "center" },
            elements: [
              {
                id: "hero-badge",
                type: "Paragraph",
                props: {
                  text: "WHAT WE OFFER",
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
                  text: "Travel Services Designed for You",
                  tag: "h1",
                  size: "5xl",
                  fontWeight: "black",
                  color: "#ffffff",
                  align: "center",
                  marginBottom: 16,
                  "@media (max-width: 768px)": { size: "3xl" }
                }
              },
              {
                id: "hero-desc",
                type: "Paragraph",
                props: {
                  text: "From bespoke itineraries to group expeditions, we offer a full spectrum of travel services to make every journey seamless and extraordinary.",
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
    // SERVICES GRID
    // --------------------------------------------------------------------------
    {
      key: "travel-services-grid",
      name: "Our Services",
      description: "Grid of service cards with editable elements",
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
            id: "services-header",
            width: "100%",
            elements: [
              {
                id: "services-badge",
                type: "Paragraph",
                props: { text: "OUR SERVICES", size: "sm", fontWeight: "bold", color: "#FF4D7C", letterSpacing: 2, marginBottom: 12, align: "center", width: "100%" }
              },
              {
                id: "services-heading",
                type: "Heading",
                props: { text: "Everything You Need for the Perfect Trip", tag: "h2", size: "4xl", fontWeight: "bold", color: "#1B4965", marginBottom: 48, align: "center", width: "100%" }
              }
            ]
          },
          // Service 1
          {
            id: "service-1",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "service-card-1",
              type: "ServiceCard",
              props: {
                icon: "Map",
                title: "Custom Itineraries",
                description: "Fully personalized travel plans crafted around your interests, budget, and timeline. Every detail tailored to your vision.",
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
          // Service 2
          {
            id: "service-2",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "service-card-2",
              type: "ServiceCard",
              props: {
                icon: "Users",
                title: "Group Expeditions",
                description: "Join like-minded travelers on curated group adventures to the world's most remarkable destinations.",
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
          // Service 3
          {
            id: "service-3",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "service-card-3",
              type: "ServiceCard",
              props: {
                icon: "Crown",
                title: "Luxury Getaways",
                description: "Five-star accommodations, private transfers, and VIP experiences for the discerning traveler.",
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
          // Service 4
          {
            id: "service-4",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "service-card-4",
              type: "ServiceCard",
              props: {
                icon: "Mountain",
                title: "Adventure Tours",
                description: "Trekking, diving, safari, and extreme sports — guided by certified experts with top-tier safety standards.",
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
          // Service 5
          {
            id: "service-5",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "service-card-5",
              type: "ServiceCard",
              props: {
                icon: "Heart",
                title: "Honeymoon Packages",
                description: "Romantic escapes to paradisiacal destinations, perfectly orchestrated for couples celebrating love.",
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
          // Service 6
          {
            id: "service-6",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "service-card-6",
              type: "ServiceCard",
              props: {
                icon: "Building",
                title: "Corporate Retreats",
                description: "Team-building travel experiences and corporate events at inspiring global destinations.",
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
    // HOW IT WORKS GRID
    // --------------------------------------------------------------------------
    {
      key: "travel-process-grid",
      name: "How It Works",
      description: "Process steps in a grid layout",
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
            id: "process-header",
            width: "100%",
            elements: [
              {
                id: "process-badge",
                type: "Paragraph",
                props: { text: "HOW IT WORKS", size: "sm", fontWeight: "bold", color: "#FF4D7C", letterSpacing: 2, marginBottom: 12, align: "center", width: "100%" }
              },
              {
                id: "process-heading",
                type: "Heading",
                props: { text: "Your Journey in 4 Simple Steps", tag: "h2", size: "4xl", fontWeight: "bold", color: "#1B4965", marginBottom: 48, align: "center", width: "100%" }
              }
            ]
          },
          // Step 1
          {
            id: "step-1",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "step-card-1",
              type: "ServiceCard",
              props: {
                icon: "MessageSquare",
                title: "Tell Us Your Dream",
                description: "Share your travel preferences, dream destinations, budget, and dates with our expert planners.",
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
          // Step 2
          {
            id: "step-2",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "step-card-2",
              type: "ServiceCard",
              props: {
                icon: "PenTool",
                title: "We Craft Your Plan",
                description: "Our team designs a personalized itinerary with handpicked stays, activities, and local guides.",
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
          // Step 3
          {
            id: "step-3",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "step-card-3",
              type: "ServiceCard",
              props: {
                icon: "ShieldCheck",
                title: "Book with Confidence",
                description: "Review, refine, and confirm your trip with flexible booking and comprehensive travel insurance.",
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
          // Step 4
          {
            id: "step-4",
            width: "calc(25% - 18px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "step-card-4",
              type: "ServiceCard",
              props: {
                icon: "Plane",
                title: "Travel & Enjoy",
                description: "Explore with 24/7 support, local contacts, and a dedicated concierge for a worry-free adventure.",
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
    // CTA SECTION
    // --------------------------------------------------------------------------
    {
      key: "travel-services-cta",
      name: "Services CTA",
      description: "Call to action",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#FF4D7C",
          fontFamily: "Poppins",
          paddingY: 64,
          paddingX: 48,
          fullWidth: true,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        },
        columns: [{
          id: "cta-col",
          width: "100%",
          props: { maxWidth: "700px", textAlign: "center" },
          elements: [
            {
              id: "cta-heading",
              type: "Heading",
              props: { text: "Ready to Start Planning?", tag: "h2", align: "center", color: "#FFFFFF", size: "3xl", fontWeight: "bold", marginBottom: 16, width: "100%" }
            },
            {
              id: "cta-desc",
              type: "Paragraph",
              props: { text: "Get in touch with our travel experts and let's design your dream trip together.", align: "center", color: "rgba(255,255,255,0.9)", size: "lg", marginBottom: 32, width: "100%" }
            },
            {
              id: "cta-buttons",
              type: "ButtonGroup",
              props: {
                primaryText: "Get a Free Quote",
                primaryBg: "#1B4965",
                primaryTextColor: "#ffffff",
                primaryBorderRadius: 24,
                secondaryText: "Call Us Now",
                secondaryBg: "transparent",
                secondaryTextColor: "#ffffff",
                secondaryBorder: "2px solid #ffffff",
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
  ]
};

module.exports = travelServices;
