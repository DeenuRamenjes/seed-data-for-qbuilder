/**
 * Travel Template - Blogs Page
 * Theme: Wanderlust, Adventure, Premium Travel
 */

const travelBlogs = {
  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    {
      key: "travel-blogs-hero",
      name: "Blogs Hero Section",
      description: "Hero section for blogs page",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#1B4965",
          fullWidth: true,
          fontFamily: "Poppins",
          paddingY: 100,
          paddingX: 48,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          "@media (max-width: 768px)": {
            paddingY: 80,
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
                  text: "TRAVEL STORIES",
                  size: "sm",
                  fontWeight: "bold",
                  color: "#FF4D7C",
                  letterSpacing: 2,
                  marginBottom: 16,
                  align: "center",
                  width: "100%"
                }
              },
              {
                id: "hero-heading",
                type: "Heading",
                props: {
                  text: "The Wanderlust Journal",
                  tag: "h1",
                  size: "6xl",
                  fontWeight: "black",
                  color: "#ffffff",
                  align: "center",
                  marginBottom: 24,
                  width: "100%",
                  "@media (max-width: 768px)": { size: "4xl" }
                }
              },
              {
                id: "hero-desc",
                type: "Paragraph",
                props: {
                  text: "Travel tips, destination guides, and inspiring stories from our global community of explorers and storytellers.",
                  size: "xl",
                  color: "rgba(255,255,255,0.9)",
                  align: "center",
                  maxWidth: "700px",
                  marginX: "auto",
                  lineHeight: 1.6
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // BLOG POSTS GRID
    // --------------------------------------------------------------------------
    {
      key: "travel-blogs-grid",
      name: "Blog Posts",
      description: "Grid of blog post cards with editable elements",
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
            id: "blogs-header",
            width: "100%",
            elements: [
              { id: "blogs-badge", type: "Paragraph", props: { text: "LATEST POSTS", size: "sm", fontWeight: "bold", color: "#FF4D7C", letterSpacing: 2, marginBottom: 12, align: "center", width: "100%" } },
              { id: "blogs-heading", type: "Heading", props: { text: "Stories from the Road", tag: "h2", size: "4xl", fontWeight: "bold", color: "#1B4965", marginBottom: 48, align: "center", width: "100%" } }
            ]
          },
          // Blog 1
          {
            id: "blog-1",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "blog-card-1",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
                imageAspectRatio: "16/9",
                title: "10 Must-Do Treks in the Himalayas",
                description: "From Annapurna to Everest Base Camp, discover the trails that offer the most breathtaking views on Earth.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          // Blog 2
          {
            id: "blog-2",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "blog-card-2",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600",
                imageAspectRatio: "16/9",
                title: "Hidden Beaches of Southeast Asia",
                description: "Escape the crowds and discover secluded shores in Thailand, Philippines, and Vietnam that few tourists know about.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          // Blog 3
          {
            id: "blog-3",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "blog-card-3",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600",
                imageAspectRatio: "16/9",
                title: "A Food Lover's Guide to Italy",
                description: "Pasta, pizza, and so much more — explore Italy's regional cuisines from Sicily to the Dolomites.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          // Blog 4
          {
            id: "blog-4",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "blog-card-4",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600",
                imageAspectRatio: "16/9",
                title: "Ultimate African Safari Guide",
                description: "Everything you need to know about planning the wildlife adventure of a lifetime in Kenya and Tanzania.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          // Blog 5
          {
            id: "blog-5",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "blog-card-5",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600",
                imageAspectRatio: "16/9",
                title: "48 Hours in Tokyo: A Quick Guide",
                description: "Make the most of a short stay in Tokyo with this packed itinerary covering temples, street food, and nightlife.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          // Blog 6
          {
            id: "blog-6",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "blog-card-6",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
                imageAspectRatio: "16/9",
                title: "Packing Light: The Minimalist Traveler",
                description: "Learn how to travel with just a carry-on for any trip length. Our expert tips for smart, light packing.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          // Blog 4
          {
            id: "blog-4",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "blog-card-4",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600",
                imageAspectRatio: "16/9",
                title: "Ultimate African Safari Guide",
                description: "Everything you need to know about planning the wildlife adventure of a lifetime in Kenya and Tanzania.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          // Blog 5
          {
            id: "blog-5",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "blog-card-5",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600",
                imageAspectRatio: "16/9",
                title: "48 Hours in Tokyo: A Quick Guide",
                description: "Make the most of a short stay in Tokyo with this packed itinerary covering temples, street food, and nightlife.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          // Blog 6
          {
            id: "blog-6",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "blog-card-6",
              type: "FeatureCard",
              props: {
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
                imageAspectRatio: "16/9",
                title: "Packing Light: The Minimalist Traveler",
                description: "Learn how to travel with just a carry-on for any trip length. Our expert tips for smart, light packing.",
                titleColor: "#1B4965",
                descriptionColor: "#475569",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // NEWSLETTER CTA
    // --------------------------------------------------------------------------
    {
      key: "travel-blogs-newsletter",
      name: "Newsletter CTA",
      description: "Newsletter signup call to action",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#ff4d7c",
          fontFamily: "Poppins",
          paddingY: 80,
          paddingX: 48,
          fullWidth: true,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 24
          }
        },
        columns: [{
          id: "newsletter-col",
          width: "100%",
          props: { maxWidth: "600px", textAlign: "center" },
          elements: [
            {
              id: "nl-heading",
              type: "Heading",
              props: { text: "Never Miss a Story", tag: "h2", size: "3xl", fontWeight: "bold", color: "#ffff", marginBottom: 16, align: "center", width: "100%" }
            },
            {
              id: "nl-desc",
              type: "Paragraph",
              props: { text: "Subscribe to our weekly newsletter for travel inspiration, exclusive deals, and insider tips delivered straight to your inbox.", size: "base", color: "#fff", lineHeight: 1.7, marginBottom: 32, align: "center", width: "100%" }
            },
            {
              id: "nl-button",
              type: "ButtonGroup",
              props: {
                primaryText: "Subscribe Now",
                primaryBg: "#1B4965",
                primaryTextColor: "#ffffff",
                primaryBorderRadius: 24,
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

module.exports = travelBlogs;
