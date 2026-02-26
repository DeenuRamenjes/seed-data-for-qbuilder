/**
 * Finance Template - About Page
 * Theme: Heritage, Trust, Institutional.
 */

const financeAbout = {
  sections: [
    // --------------------------------------------------------------------------
    // HERITAGE HERO SECTION
    // --------------------------------------------------------------------------
    {
      key: "finance-about-hero",
      name: "Heritage Hero Section",
      description: "Professional company story with mission statement",
      structure: {
        type: "Section",
        defaultProps: {
          fontFamily: "Inter",
          backgroundColor: "#ffffff",
          fullWidth: true,
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
          // Left Column - Text Content
          {
            id: "hero-text",
            width: "calc(60% - 32px)",
            props: {
              "@media (max-width: 768px)": {
                width: "100%"
              }
            },
            elements: [
              {
                id: "hero-badge",
                type: "Badge",
                props: {
                  text: "Our Story",
                  color: "#009e89",
                  backgroundColor: "#f0fdf9",
                  borderRadius: 20,
                  marginBottom: 24,
                  fontSize: "xs",
                  fontWeight: "bold",
                  paddingX: 16,
                  paddingY: 8,
                  display: "inline-block"
                }
              },
              {
                id: "hero-heading",
                type: "Heading",
                props: {
                  text: "Building Wealth. Preserving Legacies.",
                  tag: "h1",
                  size: "5xl",
                  fontWeight: "black",
                  color: "#0f0f0f",
                  lineHeight: 1.2,
                  marginBottom: 24,
                  "@media (max-width: 768px)": {
                    size: "3xl"
                  }
                }
              },
              {
                id: "hero-description",
                type: "Paragraph",
                props: {
                  text: "Since 1998, we've been helping high-net-worth individuals and families preserve and grow their wealth across generations. Our institutional-grade approach combines conservative strategies with calculated opportunities, ensuring your financial legacy endures.",
                  size: "lg",
                  color: "#64748b",
                  lineHeight: 1.7,
                  marginBottom: 32
                }
              },
              {
                id: "hero-button",
                type: "Button",
                props: {
                  text: "View Our Journey ↓",
                  backgroundColor: "#009e89",
                  textColor: "#ffffff",
                  size: "lg",
                  borderRadius: 12,
                  fontWeight: "bold",
                  paddingX: 32,
                  paddingY: 16
                }
              }
            ]
          },
          // Right Column - Image
          {
            id: "hero-image",
            width: "calc(40% - 32px)",
            props: {
              "@media (max-width: 768px)": {
                width: "100%"
              }
            },
            elements: [
              {
                id: "hero-img",
                type: "Image",
                props: {
                  src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
                  alt: "Modern financial district skyline",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  borderRadius: 24,
                  backgroundColor: "#f8fafc",
                  borderWidth: 1,
                  borderColor: "#e2e8f0"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // FINANCIAL LEGACY TIMELINE
    // --------------------------------------------------------------------------
    {
      key: "finance-about-timeline",
      name: "Financial Legacy Timeline",
      description: "Company milestones and growth journey",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          paddingY: 80,
          paddingX: 48,
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 24
          }
        },
        columns: [{
          id: "timeline-col",
          width: "100%",
          props: {
            maxWidth: "1200px",
            marginX: "auto"
          },
          elements: [
            {
              id: "timeline-section",
              type: "TimelineSection",
              props: {
                milestones: [
                  {
                    year: "1998",
                    title: "Foundation in New York",
                    description: "Established with a mission to provide institutional-grade wealth management to discerning families and individuals.",
                    color: "#009e89"
                  },
                  {
                    year: "2005",
                    title: "Global Expansion",
                    description: "Opened regional hubs in London and Singapore, expanding our reach to serve international clients.",
                    color: "#009e89"
                  },
                  {
                    year: "2012",
                    title: "Surpassed $10B AUM",
                    description: "Crossed the $10 billion milestone in assets under management, establishing ourselves as a trusted wealth partner.",
                    color: "#009e89"
                  },
                  {
                    year: "2018",
                    title: "ESG Investment Division",
                    description: "Launched dedicated sustainable and ESG investment strategies to meet evolving client values.",
                    color: "#009e89"
                  },
                  {
                    year: "Today",
                    title: "$50B+ AUM, 5,000+ Clients",
                    description: "Serving over 5,000 global clients with more than $50 billion in assets under management.",
                    color: "#009e89"
                  }
                ],
                backgroundColor: "#ffffff",
                textColor: "#0f0f0f",
                subtitleColor: "#64748b"
              }
            }
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
          backgroundColor: "#f8fafc",
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
                  color: "#0f0f0f",
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
                  color: "#64748b",
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
                  color: "#009e89",
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
                  color: "#64748b",
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
                  color: "#009e89",
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
                  color: "#64748b",
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
                  color: "#009e89",
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
                  color: "#64748b",
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
                  color: "#009e89",
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
                  color: "#64748b",
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
    // GLOBAL WEALTH CENTERS
    // --------------------------------------------------------------------------
    {
      key: "finance-about-global",
      name: "Global Wealth Centers",
      description: "Worldwide office presence and accessibility",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          paddingY: 80,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          gap: 64,
          alignItems: "center",
          "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: 40,
            paddingY: 60,
            paddingX: 24
          }
        },
        columns: [
          // Left Column - Text
          {
            id: "global-text",
            width: "calc(40% - 32px)",
            props: {
              "@media (max-width: 768px)": {
                width: "100%"
              }
            },
            elements: [
              {
                id: "global-title",
                type: "Heading",
                props: {
                  text: "Global Wealth Centers",
                  tag: "h2",
                  color: "#0f0f0f",
                  size: "4xl",
                  fontWeight: "bold",
                  marginBottom: 24
                }
              },
              {
                id: "global-desc",
                type: "Paragraph",
                props: {
                  text: "Operating across major financial hubs worldwide, our network ensures we stay at the forefront of global investment trends and opportunities.",
                  color: "#64748b",
                  size: "base",
                  lineHeight: 1.7,
                  marginBottom: 32
                }
              },
              {
                id: "hq-item",
                type: "Paragraph",
                props: {
                  text: "● Headquarters: New York, USA",
                  color: "#0f0f0f",
                  size: "sm",
                  fontWeight: "bold",
                  marginBottom: 12
                }
              },
              {
                id: "regional-item",
                type: "Paragraph",
                props: {
                  text: "● Regional Hubs: London, Singapore, Hong Kong, Dubai",
                  color: "#0f0f0f",
                  size: "sm",
                  fontWeight: "bold",
                  marginBottom: 12
                }
              },
              {
                id: "satellite-item",
                type: "Paragraph",
                props: {
                  text: "● Satellite Offices: Toronto, Sydney, Zurich",
                  color: "#0f0f0f",
                  size: "sm",
                  fontWeight: "bold"
                }
              }
            ]
          },
          // Right Column - Image
          {
            id: "global-visual",
            width: "calc(60% - 32px)",
            props: {
              "@media (max-width: 768px)": {
                width: "100%"
              }
            },
            elements: [
              {
                id: "global-image",
                type: "Image",
                props: {
                  src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200",
                  alt: "Global financial network",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  borderRadius: 24,
                  backgroundColor: "#f8fafc",
                  borderWidth: 1,
                  borderColor: "#e2e8f0"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // LEADERSHIP TEAM
    // --------------------------------------------------------------------------
    {
      key: "finance-about-leadership",
      name: "Leadership Team",
      description: "Executive team profiles and expertise",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#f8fafc",
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
            id: "team-header",
            width: "100%",
            props: {
              maxWidth: "1200px",
              marginX: "auto"
            },
            elements: [
              {
                id: "team-title",
                type: "Heading",
                props: {
                  text: "Meet Our Leadership",
                  tag: "h2",
                  color: "#0f0f0f",
                  size: "4xl",
                  fontWeight: "bold",
                  marginBottom: 12
                }
              },
              {
                id: "team-desc",
                type: "Paragraph",
                props: {
                  text: "A leadership team combining decades of Wall Street experience with innovative wealth management strategies.",
                  color: "#64748b",
                  size: "base",
                  marginBottom: 48
                }
              }
            ]
          },
          {
            id: "member-1",
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
                id: "member-1-card",
                type: "LeadershipCard",
                props: {
                  name: "Michael Chen",
                  title: "CEO & Founder",
                  level: "Executive",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
                  department: "Leadership",
                  bgColor: "#ffffff",
                  borderColor: "#e2e8f0",
                  levelBgColor: "#009e89",
                  levelTextColor: "#ffffff"
                }
              }
            ]
          },
          {
            id: "member-2",
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
                id: "member-2-card",
                type: "LeadershipCard",
                props: {
                  name: "Sarah Williams",
                  title: "Chief Investment Officer",
                  level: "Executive",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
                  department: "Investments",
                  bgColor: "#ffffff",
                  borderColor: "#e2e8f0",
                  levelBgColor: "#009e89",
                  levelTextColor: "#ffffff"
                }
              }
            ]
          },
          {
            id: "member-3",
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
                id: "member-3-card",
                type: "LeadershipCard",
                props: {
                  name: "David Martinez",
                  title: "Head of Wealth Mgmt",
                  level: "Director",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
                  department: "Wealth Management",
                  bgColor: "#ffffff",
                  borderColor: "#e2e8f0",
                  levelBgColor: "#009e89",
                  levelTextColor: "#ffffff"
                }
              }
            ]
          },
          {
            id: "member-4",
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
                id: "member-4-card",
                type: "LeadershipCard",
                props: {
                  name: "Emily Thompson",
                  title: "Director of ESG",
                  level: "Director",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
                  department: "Sustainable Investing",
                  bgColor: "#ffffff",
                  borderColor: "#e2e8f0",
                  levelBgColor: "#009e89",
                  levelTextColor: "#ffffff"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // WEALTH MANAGEMENT VALUES
    // --------------------------------------------------------------------------
    {
      key: "finance-about-values",
      name: "Wealth Management Values",
      description: "Core principles and client-first values",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#ffffff",
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
            id: "values-header",
            width: "100%",
            props: {
              maxWidth: "1200px",
              marginX: "auto",
              textAlign: "center"
            },
            elements: [
              {
                id: "values-heading",
                type: "Heading",
                props: {
                  text: "Our Core Values",
                  tag: "h2",
                  color: "#0f0f0f",
                  size: "4xl",
                  fontWeight: "bold",
                  marginBottom: 16,
                  textAlign: "center"
                }
              },
              {
                id: "values-subtitle",
                type: "Paragraph",
                props: {
                  text: "The principles that guide every investment decision and client relationship.",
                  color: "#64748b",
                  size: "lg",
                  marginBottom: 48,
                  textAlign: "center"
                }
              }
            ]
          },
          {
            id: "value-1",
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
                id: "value-1-card",
                type: "CultureValue",
                props: {
                  title: "Fiduciary Duty",
                  description: "Your interests come first, always. We are legally and ethically bound to act in your best interest.",
                  iconName: "verified_user",
                  bgColor: "#ffffff",
                  borderColor: "#e2e8f0",
                  accentColor: "#009e89"
                }
              }
            ]
          },
          {
            id: "value-2",
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
                id: "value-2-card",
                type: "CultureValue",
                props: {
                  title: "Transparency",
                  description: "Clear communication on fees, strategies, and performance. No hidden costs or surprises.",
                  iconName: "visibility",
                  bgColor: "#ffffff",
                  borderColor: "#e2e8f0",
                  accentColor: "#009e89"
                }
              }
            ]
          },
          {
            id: "value-3",
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
                id: "value-3-card",
                type: "CultureValue",
                props: {
                  title: "Long-term Vision",
                  description: "Multi-generational wealth preservation and growth, not short-term speculation.",
                  iconName: "trending_up",
                  bgColor: "#ffffff",
                  borderColor: "#e2e8f0",
                  accentColor: "#009e89"
                }
              }
            ]
          },
          {
            id: "value-4",
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
                id: "value-4-card",
                type: "CultureValue",
                props: {
                  title: "Risk Management",
                  description: "Conservative, calculated approaches that prioritize capital preservation above all else.",
                  iconName: "shield",
                  bgColor: "#ffffff",
                  borderColor: "#e2e8f0",
                  accentColor: "#009e89"
                }
              }
            ]
          }
        ]
      }
    },
    
    // --------------------------------------------------------------------------
    // CONSULTATION CTA (EXISTING)
    // --------------------------------------------------------------------------
    {
            key: "careplus-programs-cta",
            name: "Programs CTA",
            description: "Full-width CTA with gradient background",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#009e89",
                    paddingY: 64,
                    paddingX: 48,
                    fullWidth: false,
                    // borderRadius: 32,
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
                                text: "Start Your Journey Today",
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
                                text: "Take the first step towards a healthier, longer life. Schedule your free discovery call with our clinical team.",
                                align: "center",
                                color: "rgba(255,255,255,0.8)",
                                size: "md"
                            }
                        },
                        {
                            id: "cta-buttons",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Schedule Discovery Call",
                                primaryBg: "#000000ff",
                                primaryTextColor: "#000000ff",
                                primaryBorderRadius: 24,
                                secondaryText: "View Success Stories",
                                secondaryBg: "#ffffff",
                                secondaryTextColor: "#000000ff",
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
  ]
};

module.exports = financeAbout;
