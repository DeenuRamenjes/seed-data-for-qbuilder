/**
 * Real Estate Agent Template - Profile Page
 * Theme: Local Scout – Friendly, Organic, Neighborhood-Focused
 * Colors: Mint Background (#E3FFFA), Emerald Accent (#00AD81), Blue Primary (#0094BA), Dark Text (#004A3C), Deep Blue Secondary (#00067A)
 * Font: Plus Jakarta Sans
 */

const agentProfile = {
  // ============================================================================
  // HEADER - NAVBAR
  // ============================================================================
  header: {
    key: "agent-header",
    name: "Local Scout Navbar",
    structure: {
      type: "Navbar",
      defaultProps: {
        sticky: true,
        backgroundColor: "rgba(227, 255, 250, 0.8)",
        backdropFilter: "blur(12px)",
        paddingY: 0,
        paddingX: 0,
        fontFamily: "Plus Jakarta Sans",
        showBorder: true,
        borderColor: "rgba(0, 173, 129, 0.1)",
        height: "80px"
      },
      props: {
        logo: {
          text: "LOCALSCOUT.",
          logoColor: "#00067A",
          accentColor: "#00AD81",
          fontWeight: "800",
          letterSpacing: "tighter"
        },
        links: [
          { label: "About", href: "#about" },
          { label: "Favourites", href: "#favourites" },
          { label: "Projects", href: "#projects" },
          { label: "Stories", href: "#stories" }
        ],
        ctaButton: {
          text: "Let's Chat",
          href: "#connect",
          variant: "primary",
          backgroundColor: "#00067A",
          textColor: "#ffffff",
          borderRadius: "full",
          height: "44px",
          fontWeight: "700"
        }
      }
    }
  },

  // ============================================================================
  // PAGE SECTIONS
  // ============================================================================
  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    {
      key: "agent-hero",
      name: "Neighborhood Hero",
      structure: {
        type: "ProfileHero",
        props: {
          title: "Find your place in the Neighborhood.",
          highlightText: "Neighborhood.",
          description: "I don't just sell houses. I share the hidden gems, the best coffee spots, and the community vibes that make a house a home.",
          primaryCtaText: "Explore Local Spots",
          primaryCtaLink: "#favourites",
          secondaryCtaText: "My Story",
          secondaryCtaLink: "#about",
          profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnNE5mcScDdECgZ8eIVoaHNSEoGbQCAiXar460sSFzUZQ1uw3cNmEmxIAC7ccvxk6k5RjJA8NQ8VLA8C5FC-Q5fM-01J2wekKVt_uDovzRmdm3zHCA8FLARhYRjv9fr138Z6deVUq7ZR_dap6j0GCfhm0_9ut65TwCUOGXq4qAIq4zWb8qoJZ_Xq9NFwzoIQBJhCyh1jENTfxSpnSgQuPjg7E57Xb0fUM9L84CMq2T-a5XHOQdHtQ24sSOuF2e7ruhpg_DVEMT5Wyc",
          name: "Alex",
          role: "Local Scout & Neighborhood Guide",
          nmls: "Est. 2008",
          primaryColor: "#00AD81",
          secondaryColor: "#00067A",
          accentColor: "#0094BA",
          textColor: "#ffffff",
          backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
        }
      }
    },
    
    // --------------------------------------------------------------------------
    // STATS SECTION
    // --------------------------------------------------------------------------
    {
      key: "agent-stats",
      name: "Experience Metrics",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#E3FFFA",
          paddingY: 60,
          fullWidth: true
        },
        columns: [
          {
            width: "100%",
            elements: [
              {
                type: "Heading",
                props: {
                  text: "Experience & Expertise",
                  tag: "h2",
                  size: "5xl",
                  color: "#00067A",
                  align: "center",
                  marginBottom: 16,
                  fontWeight: "800"
                }
              },
              {
                type: "Paragraph",
                props: {
                  text: "A track record of excellence in the neighborhood. Dedicated to finding your perfect fit with local insights.",
                  size: "lg",
                  color: "rgba(0, 74, 60, 0.7)",
                  align: "center",
                  marginBottom: 60,
                  fontWeight: "500"
                }
              }
            ]
          },
          {
            width: "25%",
            props: { "@media (max-width: 768px)": { width: "50%", marginBottom: "24px" } },
            elements: [
              {
                type: "CircleStats",
                props: { percentage: 99, label: "Client Satisfaction" }
              }
            ]
          },
          {
            width: "25%",
            props: { "@media (max-width: 768px)": { width: "50%", marginBottom: "24px" } },
            elements: [
              {
                type: "CircleStats",
                props: { percentage: 88, label: "Local Expertise" }
              }
            ]
          },
          {
            width: "25%",
            props: { "@media (max-width: 768px)": { width: "50%" } },
            elements: [
              {
                type: "CircleStats",
                props: { percentage: 94, label: "Negotiation Success" }
              }
            ]
          },
          {
            width: "25%",
            props: { "@media (max-width: 768px)": { width: "50%" } },
            elements: [
              {
                type: "CircleStats",
                props: { percentage: 100, label: "Neighborhood Knowledge" }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // BIO SECTION
    // --------------------------------------------------------------------------
    {
      key: "agent-bio",
      name: "Meet Alex",
      structure: {
        type: "AgentBio",
        props: {
          heading: "Hey! I'm Alex—Your local guide to the best streets in the city.",
          description: "I've lived in this neighborhood for over 15 years. I know which bakery has the best croissants and which street gets the golden hour light just right.\n\nReal estate isn't about transactions; it's about finding where you belong. My approach is simple: honest advice, local expertise, and a lot of energy.",
          profileImage: "https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-scaled.jpg",
          stats: [
            { value: "250+", label: "FAMILIES MOVED" },
            { value: "15yr", label: "LOCAL RESIDENT" }
          ],
          backgroundColor: "transparent",
          paddingY: "80px",
          id: "about"
        }
      }
    },

    // --------------------------------------------------------------------------
    // FAVORITES SECTION
    // --------------------------------------------------------------------------
    {
      key: "agent-favorites",
      name: "Local Favorites",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#E3FFFA",
          fullWidth: true,
          fontFamily: "Plus Jakarta Sans",
          paddingY: 100,
          paddingX: 48,
          "@media (max-width: 768px)": {
            paddingY: 64,
            paddingX: 24
          }
        },
        props: {
          id: "favourites"
        },
        columns: [
          // Header Row
          {
            id: "fav-header-content",
            width: "100%",
            props: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 48,
              "@media (max-width: 1024px)": { width: "100%", marginBottom: "24px" }
            },
            elements: [
              { id: "fav-h", type: "Heading", props: { text: "Local Favorites & Hot Listings", tag: "h2", size: "5xl", color: "#00067A", marginBottom: 16, align: "center" } },
              { id: "fav-p", type: "Paragraph", props: { text: "Curated vibes from the neighborhoods I know inside and out.", size: "lg", color: "rgba(0, 74, 60, 0.7)", align: "center" } }
            ]
          },
          {
            id: "fav-header-action",
            width: "100%",
            props: {
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: 48,
              "@media (max-width: 1024px)": { width: "100%", justifyContent: "center", marginBottom: "48px" }
            },
            elements: [
              { id: "fav-btn", type: "Button", props: { text: "View All Listings", align: "right", backgroundColor: "#0094BA", textColor: "#ffffff", borderRadius: "xl", paddingX: 32, paddingY: 16, fontWeight: "700" } }
            ]
          },
          // Card 1
          {
            id: "fav-1",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "fav-card-1",
                type: "FeatureCard",
                props: {
                  title: "342 Willow Street",
                  description: "\"The perfect porch for Sunday morning coffee.\"",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEw2PoM5LNou-W5jRa-eioGoRBIPZU5K2oXpRv44x5fCSyXZLJmAMCnhlT8stqDqHskDICT3fldhX9dOHAmX70MUkhg0CEKrxbmtpHGr8JWATpEtSsbFxkbG7ovTI-D9Fbx_WvtlYfA4wxNWotFcOxWVotYTN2MfhAHs8VHVhbGpAmfB2n_Aa6qtUNzQNOpw80IvE8q2pPuJ3ACBihYTjIqqG038xCjJq-KgZC1Hv7sREj1CtUkFaWj60lcqGVnZpNSS2zAS_nFqLN",
                  imageAspectRatio: "16/10",
                  backgroundColor: "#ffffff",
                  borderRadius: "32px",
                  padding: "0",
                  tagText: "The Historic North",
                  tagColor: "#00067A",
                  price: "$845,000",
                  subtext: "3BD • 2BA",
                  accentColor: "#00AD81"
                }
              }
            ]
          },
          // Card 2
          {
            id: "fav-2",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "fav-card-2",
                type: "FeatureCard",
                props: {
                  title: "The Skyline Loft",
                  description: "\"Walkable to every top-rated restaurant.\"",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0pVcb8tB3H9hGDLQbN9WcQn0gOZtSG2WzuVzysOb1PiY-PD5vn5uldTyG48XwSh1RCO4Q9jGBsNWJKiJPnFoFDZLe2Mg-YT0renwt-LMuyDsvtqsBbkTmOW63G9bo4CaQIqzzU9vMBFCg8jOz55oMqffEgxo0RYA_vFKYZVJXaN5ZtwKZBcYjsxGBWOGvhs62fA5SSUBKRTiPIhOKSdp5ofiYVKf60mHU8eDVsSeNB3-lBgN4986jX5SIho4IeBfErR1iBTckT-I7",
                  imageAspectRatio: "16/10",
                  backgroundColor: "#ffffff",
                  borderRadius: "32px",
                  padding: "0",
                  tagText: "Downtown Vibes",
                  tagColor: "#00AD81",
                  price: "$1,200,000",
                  subtext: "2BD • 2BA",
                  accentColor: "#00AD81"
                }
              }
            ]
          },
          // Card 3
          {
            id: "fav-3",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [
              {
                id: "fav-card-3",
                type: "FeatureCard",
                props: {
                  title: "12 Oak Garden Way",
                  description: "\"Huge backyard for those summer BBQs.\"",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANXfL1qUzksPvWDknnNZS5oYtMiDc1UuC6hZgk5JlanLME91_UUFNAXevEi9qT3WmLfgHg_Pow-37T02pzFdCwOrddwuaBxrGioL_SZdgX86CEDayetcudh8yObF6uoyYV3FC8czNcarmFivukViDcrldCYNrPFQQNHLw1lt792L7uhwH9avEl0gnlSekudruc6JzutqAovf2-cFicRD8P_krRZUKuGNcgIDROXBOjKU2xYwNSELRP_H1OMUq7y4VpYKvjE0N-jaM6",
                  imageAspectRatio: "16/10",
                  backgroundColor: "#ffffff",
                  borderRadius: "32px",
                  padding: "0",
                  tagText: "Sunset Valley",
                  tagColor: "#0094BA",
                  price: "$620,000",
                  subtext: "4BD • 3BA",
                  accentColor: "#00AD81"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // PROJECTS CAROUSEL SECTION
    // --------------------------------------------------------------------------
    {
      key: "agent-projects",
      name: "Featured Projects",
      structure: {
        type: "HorizontalCarouselRenderer",
        props: {
          id: "projects",
          title: "Featured Projects",
          primaryColor: "#00AD81",
          items: [
            {
              image: "https://www.agentadvice.com/wp-content/uploads/2020/12/shutterstock_1247473441-scaled.jpg",
              label: "LUXURY LIVING",
              title: "The Azure Heights",
              description: "A stunning collection of luxury penthouses overlooking the city skyline with floor-to-ceiling windows and private terraces."
            },
            {
              image: "https://ap.rdcpix.com/7c23ac79aac57593f16a82a44c5770a1l-b2241872644rd-w1280_h960.webp",
              label: "ECO-MODERN",
              title: "Emerald Gardens",
              description: "Seamlessly blending nature with architecture, these modern villas feature sustainable materials and lush vertical gardens."
            },
            {
              image: "https://media.istockphoto.com/id/2155879454/photo/this-is-an-exterior-photo-of-a-home-for-sale-in-beverly-hills-ca.jpg?s=612x612&w=0&k=20&c=uSKacMQvmaYX5Pf5Br7pUfErYQbNt_UWXRTjfwrdSDQ=",
              label: "HISTORIC CHARM",
              title: "The Grand Manor",
              description: "Meticulously restored 1920s estate featuring grand ballrooms, original oak paneling, and five acres of manicured lawns."
            },
            {
              image: "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/6340840/org/000.jpg?width=1280&v=2025-09-30_000000",
              label: "INDUSTRIAL CHIC",
              title: "Neo-Urban Lofts",
              description: "Boutique industrial lofts in the heart of the design district, featuring brick walls, metal beams, and open-concept layouts."
            }
          ]
        }
      }
    },

    // --------------------------------------------------------------------------
    // TESTIMONIALS SECTION
    // --------------------------------------------------------------------------
    {
      key: "agent-stories",
      name: "Neighborhood Stories",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#00067A",
          fullWidth: true,
          fontFamily: "Plus Jakarta Sans",
          paddingY: 40,
          paddingX: 48,
          "@media (max-width: 768px)": {
            paddingY: 50,
            paddingX: 24
          }
        },
        props: {
          id: "stories"
        },
        columns: [
          // Header
          {
            id: "stories-header",
            width: "100%",
            props: { textAlign: "center", marginBottom: 64 },
            elements: [
              { id: "st-h", type: "Heading", props: { text: "Neighborhood Stories", tag: "h2", size: "5xl", color: "#ffffff", align: "center", marginBottom: 16 } },
              { id: "st-p", type: "Paragraph", props: { text: "REAL TALK FROM MY CLIENTS", size: "sm", color: "#00AD81", fontWeight: "700", letterSpacing: 3, align: "center" } }
            ]
          },
          // Testimonial 1
          {
            id: "test-1",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "100%" }
            },
            elements: [
              {
                id: "test-card-1",
                type: "Testimonial",
                props: {
                  author: "The Miller Family",
                  role: "Moved to North Heights",
                  company: "North Heights Community",
                  text: "Alex didn't just find us a house; she found us a community. She knew exactly which streets were kid-friendly and even introduced us to our now-favorite coffee shop!",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-QEd3Ld5SLP__rPoRY1chZEeeyrG2_9Dqg3233HollclHOcGLM-R5AafbPSy9Oe0_rUTHe5RHq5NFVPg6FgokBirICQTrjTFLVARmdbCaF9TbkBYGozVBHP4Kn9WRr4jxW14Etv8KcDBxKmMIsiZeDdySBcvSp5QU3ZiiqqS1gRC9oELPo6dYkyQh6glRs3HyCFFMDm1F92P0qfXtDkrVtqu2-nDNCIn0Sl1EEy_70i4a83aY6RYFaExY4k1XD2NSebHx6IQIxiJB",
                  rating: 5,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  textColor: "#ffffff"
                }
              }
            ]
          },
          // Testimonial 2
          {
            id: "test-2",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "100%" }
            },
            elements: [
              {
                id: "test-card-2",
                type: "Testimonial",
                props: {
                  author: "Sarah & James",
                  role: "Sold in Downtown",
                  company: "Downtown Lofts",
                  text: "We were nervous about selling, but Alex's energy and knowledge of the local market were unmatched. We sold over asking in just 4 days!",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGQuvF7d_v2T88OfWgyyq-ATHZjiXzrlsrLqi3BJ82rE5OvKc3jZPhMKXYAZax-zKnOoHWwbBVBf2OiuyX1nlXzolXfUFBiiHu4DHAe_hsWPezQ5NT8BxXmUcWLRPBig6tsaNavr6L4FoIkFE9UD7UnMMwBcg90d7CljLCiJpiwSkmlsxRr29Ip5CF4YWyfaIBq3ookEBmVDk3hIFpMKk0HNaFfRV3focRs-8dMRBvhNvH_P2RjKafqe7rgmP9VU9F2dcGya25SXVs",
                  rating: 5,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  textColor: "#ffffff"
                }
              }
            ]
          },
          // Testimonial 3
          {
            id: "test-3",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "100%" }
            },
            elements: [
              {
                id: "test-card-3",
                type: "Testimonial",
                props: {
                  author: "David & Emily",
                  role: "First-time Buyers",
                  company: "West End Heights",
                  text: "As first-time buyers, we had a million questions. Alex was so patient and guided us through every step. We couldn't be happier with our new condo!",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                  rating: 5,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  textColor: "#ffffff"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // CTA FOOTER SECTION
    // --------------------------------------------------------------------------
    {
      key: "agent-connect",
      name: "Connect Footer",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#E3FFFA",
          fullWidth: true,
          fontFamily: "Plus Jakarta Sans",
          paddingY: 100,
          paddingX: 48,
          "@media (max-width: 768px)": {
            paddingY: 64,
            paddingX: 24
          }
        },
        props: {
          id: "connect"
        },
        columns: [
          {
            id: "connect-main",
            width: "100%",
            props: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: 48
            },
            elements: [
              { id: "conn-h", type: "Heading", props: { text: "Ready to find your vibe?", tag: "h2", size: "7xl", color: "#004A3C", marginBottom: 16, fontWeight: "800", align: "center" } },
              { id: "conn-p", type: "Paragraph", props: { text: "Whether you're just browsing or ready to move tomorrow, let's grab a coffee and talk about your future in the neighborhood.", size: "xl", color: "rgba(0, 74, 60, 0.8)", marginBottom: 32, maxWidth: "800px", align: "center" } },
              {
                id: "connect-newsletter",
                type: "NewsletterSignup",
                props: {
                  title: "Stay In The Loop",
                  buttonText: "Subscribe",
                  align: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "2rem",
                  padding: 20,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  maxWidth: "500px"
                }
              }
            ]
          }
        ]
      }
    }
  ],

  // ============================================================================
  // FOOTER
  // ============================================================================
  footer: {
    key: "agent-footer",
    name: "Agent Footer",
    structure: {
      id: "agent-footer-comp",
      type: "MinimalFooter",
      props: {
        brandName: "Agent Alex Burton",
        badgeText: "AB",
        badgeColor: "#00AD81",
        backgroundColor: "#E3FFFA",
        textColor: "rgba(0, 74, 60, 0.6)",
        borderColor: "rgba(0, 173, 129, 0.1)",
        copyright: "© 2023 LocalScout Real Estate. All rights reserved.",
        links: [
          { label: "Privacy Policy", url: "#" },
          { label: "Terms of Service", url: "#" }
        ]
      }
    }
  }
};

module.exports = agentProfile;
