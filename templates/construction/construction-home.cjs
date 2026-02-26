/**
 * Construction Template - Home Page
 * Theme: Apex Structures
 * Colors: Primary (var(--theme-text)), Secondary (#009DFF), Accent (#FFE100)
 * Font: Merriweather
 */

const constructionHome = {
  // ============================================================================
  // HEADER
  // ============================================================================
  header: {
    key: "construction-header",
    name: "Apex Structure Header",
    structure: {
      type: "Navbar",
      defaultProps: {
        sticky: true,
        backgroundColor: "rgba(11, 11, 11, 0.9)", // slightly darker/more opaque
        backdropFilter: "blur(16px)",
        paddingY: 0,
        paddingX: 0,
        fontFamily: "Merriweather",
        showBorder: true,
        borderColor: "rgba(255, 255, 255, 0.08)",
        height: "80px",
        theme: "dark"
      },
      props: {
        logo: {
          text: "Apex",
          icon: "architecture",
          logoColor: "var(--theme-background)",
          iconColor: "var(--theme-text)",
          iconBg: "var(--theme-background)",
          fontWeight: "extrabold",
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          accentColor: "#009DFF",
          fontSize: "24px"
        },
        links: [
          { label: "Services", href: "#" },
          { label: "Portfolio", href: "#" },
          { label: "Heritage", href: "#" },
          { label: "Contact", href: "#" }
        ],
        ctaButton: {
          text: "Get a Quote",
          href: "#",
          variant: "custom",
          backgroundColor: "var(--theme-background)",
          textColor: "var(--theme-text)",
          hoverColor: "var(--theme-background)",
          hoverBg: "#009DFF",
          borderRadius: "4px", // sharper corners for industrial look
          height: "44px", // slightly taller
          fontWeight: "800",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          padding: "0 24px"
        }
      }
    }
  },

  // ============================================================================
  // SECTIONS
  // ============================================================================
  sections: [
    // --------------------------------------------------------------------------
    // HERO
    // --------------------------------------------------------------------------
    {
            key: "education-hero",
            name: "Hero Banner",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdFDNgPoN481mlOHGyw59E4Zh4fq5646PvpMe7df4NqtWcVPI4XkE_SAziDC2U3T8t7JwIYITk_7jNErZtGv2Cqc2sqU-DBHLkdFhGH1mtWSSxehrSeFx57GlJa-jfb2LONQlDz1r4k9OaNh-5PRL22Fe-KxHTq1hmaxx4nf9h3dht2BcT-pkzKp-LKjIy87fjgBp6NHz_7c6IbYjo3PDAigTdkZbgtiBULG_OvNlT0TkzehzguWiAR4rSBLo1f8M1ppgRtmikR5M",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundOverlay: "rgba(0, 0, 0, 0.77)",
                    paddingY: 120,
                    paddingX: 40,
                    fontFamily: "Merriweather",
                    fullWidth: true,
                    minHeight: "600px",
                    className: "relative"
                },
                columns: [{
                    id: "edu-hero-col",
                    width: "100%",
                    elements: [
                        {
                            type: "Headline",
                            props: {
                                text: "Building the Future of [Modern Living](linear-gradient(90deg, #FFE100, #fff59eff)",
                                tag: "h1",
                                size: "6xl",
                                align: "center",
                                color: "var(--theme-background)"
                            }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "A premium institution dedicated to the pursuit of knowledge, architectural preservation, and the cultivation of future global leaders.",
                                size: "2xl",
                                align: "center",
                                color: "var(--theme-background)",
                                marginTop: 25,
                                className: "max-w-[800px] opacity-90"
                            }
                        },
                        {
                            type: "Spacer", props: { height: "md" }
                        },
                        {
                            type: "ButtonGroup",
                            props: {
                                layout: "flex-wrap",
                                justifyContent: "center",
                                alignItems: "center",
                                primaryText: "Inquire Now",
                                primaryLink: "/contact",
                                primaryBg: "#FFE100",
                                primaryColor: "var(--theme-text)",
                                secondaryText: "Our Campus",
                                secondaryLink: "/courses",
                                secondaryBg: "var(--theme-background)",
                                secondaryColor: "var(--theme-text)",
                                showPrimaryIcon: true,
                                showSecondaryIcon: false
                            }
                        }
                    ]
                }]
            }
        },
    // --------------------------------------------------------------------------
    // EXPERTISE SECTION
    // --------------------------------------------------------------------------
    {
      key: "real-estate-features",
      name: "The Apex Standard",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 100,
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
            id: "feat-header",
            width: "100%",
            elements: [
              { id: "feat-heading", type: "Heading", props: { text: "OUR EXPERTISE", tag: "h2", size: "4xl", fontWeight: "bold", color: "var(--theme-background)", marginBottom: 16, align: "left", width: "100%" } },
              { id: "feat-desc", type: "Paragraph", props: { text: "From concept to completion, we provide end-to-end solutions that merge aesthetic vision with structural integrity.", size: "lg", color: "var(--theme-background)", lineHeight: 1.7, marginBottom: 48, align: "left", width: "100%" } }
            ]
          },
          // Feature 1
          {
            id: "feat-1",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "feat-card-1",
              type: "ServiceCardV2",
              props: {
                number: "01",
                title: "ARCHITECTURAL DESIGN",
                description: "Visionary aesthetics tailored for modern living spaces. We create environments that inspire and endure.",
                backgroundColor: "#1f1f1fff",
                textColor: "#ffe100",
                accentColor: "#ffe100",
                descriptionColor: "var(--theme-background)",
                variant: "dark",
                showDivider: true,
                borderRadius: "8px"
              }
            }]
          },
          // Feature 2
          {
            id: "feat-2",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "feat-card-2",
              type: "ServiceCardV2",
              props: {
                number: "02",
                title: "URBAN DEVELOPMENT",
                description: "Transforming cityscapes with large-scale precision. We manage complex infrastructure with unmatched expertise.",
                backgroundColor: "#1f1f1fff",
                textColor: "#ffe100",
                accentColor: "#ffe100",
                descriptionColor: "var(--theme-background)",
                variant: "dark",
                showDivider: true,
                borderRadius: "8px"
              }
            }]
          },
          // Feature 3
          {
            id: "feat-3",
            width: "calc(33.33% - 16px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "feat-card-3",
              type: "ServiceCardV2",
              props: {
                number: "03",
                title: "SUSTAINABLE ENGINEERING",
                description: "Eco-friendly solutions for a resilient future. Integrating renewable technology with high-end construction..",
                backgroundColor: "#1f1f1fff",
                textColor: "#ffe100",
                accentColor: "#ffe100",
                descriptionColor: "var(--theme-background)",
                variant: "dark",
                showDivider: true,
                borderRadius: "8px"
              }
            }]
          },
          
        ]
      }
    },
    
    // --------------------------------------------------------------------------
    // ABOUT / LEGACY
    // --------------------------------------------------------------------------
    {
            key: "tech-about-global",
            name: "Global Reach Section",
            description: "Company global presence and operations",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-text)",
                    darkBackgroundColor: "var(--theme-text)",
                    fullWidth: true,
                    paddingY: 80,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "row",
                    gap: 64,
                    alignItems: "center",
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 40
                    }
                },
                columns: [
                    // Left Column - Text
                    {
                        id: "global-text",
                        width: "calc(33% - 32px)",
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
                                    text: "BUILT ON PRECISION",
                                    tag: "h2",
                                    color: "var(--theme-background)",
                                    darkColor: "var(--theme-background)",
                                    size: "4xl",
                                    fontWeight: "bold",
                                    marginBottom: 24
                                }
                            },
                            {
                                id: "global-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Apex Structures began with a single mission: to build spaces that stand the test of time, both structurally and aesthetically. We believe that architecture is the intersection of art and rigorous engineering. Every joint, every beam, and every facade we construct is a testament to our commitment to quality. Our heritage is rooted in the belief that excellence is not an act, but a habit practiced dail on-site and in the studio.",
                                    color: "var(--theme-background)",
                                    darkColor: "var(--theme-background)",
                                    size: "base",
                                    lineHeight: 1.7,
                                    marginBottom: 32
                                }
                            },
                            {
                                id: "hq-item",
                                type: "Paragraph",
                                props: {
                                    text: "● Headquarters: San Francisco, CA",
                                    color: "#ffe100",
                                    darkColor: "#ffe100",
                                    size: "sm",
                                    fontWeight: "bold",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "regional-item",
                                type: "Paragraph",
                                props: {
                                    text: "● Regional Hubs: London, Berlin, Singapore",
                                    color: "#ffe100",
                                    darkColor: "#ffe100",
                                    size: "sm",
                                    fontWeight: "bold",
                                    marginBottom: 12
                                }
                            },
                            {
                                id: "partners-item",
                                type: "Paragraph",
                                props: {
                                    text: "● 20+ Partner Locations Worldwide",
                                    color: "#ffe100",
                                    darkColor: "#ffe100",
                                    size: "sm",
                                    fontWeight: "bold"
                                }
                            }
                        ]
                    },
                    // Right Column - Image
                    {
                        id: "global-visual",
                        width: "calc(67% - 32px)",
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
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm0q6t36eaYWgRGYhJY5xYN3UhKCgSU9lZAL3XbTO1pc1O0kpHfYCY3oseGdq0q1K6E1Py4ivO3Av3CWvgX2bWBxwXaAkrJL43Ku8CPJ_CVLMydySub3Y0heR1YPgvvOjtma0WFTvGtkyG3IIrQh2IV5-m5xLgiqptOrTkH2mtbetH2nE0CI3AXlsbrFINmT30IZJRNkgpjzx7TXlV1jaBkTOB_UOqfRgle1ySRYf5eahJA22LPdKacSAQxmxgszy0YOmQ9hWYZOqy",
                                    alt: "Global operations map",
                                    aspectRatio: "16/9",
                                    objectFit: "cover",
                                    borderRadius: 32,
                                    backgroundColor: "#F5F5F5",
                                    darkBackgroundColor: "#1A1A2E",
                                    borderWidth: 1,
                                    borderColor: "var(--theme-border)",
                                    darkBorderColor: "#333333"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
    // FEATURED WORKS
    // --------------------------------------------------------------------------
    {
            key: "swiftlogix-culture-hero",
            name: "Culture Hero with Gallery",
            description: "Culture hero section with stats cards and image gallery",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-text)",
                    paddingY: 80,
                    paddingX: 80,
                    fullWidth: false,
                    layout: "flex",
                    flexDirection: "column"
                },
                columns: [
                    // Hero Header with Stats - Left Column (Heading)
                    {
                        id: "culture-heading-col",
                        width: "60%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "center"
                        },
                        elements: [
                            {
                                id: "culture-main-heading",
                                type: "Heading",
                                props: {
                                    text: "Featured Works",
                                    tag: "h2",
                                    color: "var(--theme-background)",
                                    darkColor: "var(--theme-background)",
                                    size: "5xl",
                                    fontWeight: "black",
                                    align: "left",
                                    marginBottom: 16
                                }
                            },
                            {
                                id: "culture-description",
                                type: "Paragraph",
                                props: {
                                    text: "Showcasing our commitment to excellence and innovation in every project we undertake.",
                                    color: "var(--theme-background)",
                                    darkColor: "var(--theme-background)",
                                    size: "lg",
                                    align: "left",
                                    marginTop: 0
                                }
                            }
                        ]
                    },
                    // Hero Header with Stats - Right Column (Stats Cards)
                    {
                        id: "culture-stats-col",
                        width: "40%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap: 16
                        },
                        elements: [
                            {
                                id: "stat-nationalities",
                                type: "Box",
                                props: {
                                    backgroundColor: "var(--theme-text)",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "center",
                                    border: "1px solid #ffe100"
                                },
                                elements: [
                                    {
                                        id: "stat-nat-value",
                                        type: "Heading",
                                        props: {
                                            text: "24+",
                                            tag: "h3",
                                            color: "#ffe100",
                                            size: "3xl",
                                            fontWeight: "black",
                                            align: "center",
                                            marginBottom: 8
                                        }
                                    },
                                    {
                                        id: "stat-nat-label",
                                        type: "Paragraph",
                                        props: {
                                            text: "Nationalities",
                                            color: "#ffe100",
                                            size: "xs",
                                            fontWeight: "bold",
                                            align: "center",
                                            textTransform: "uppercase"
                                        }
                                    }
                                ]
                            },
                            {
                                id: "stat-offices",
                                type: "Box",
                                props: {
                                    backgroundColor: "var(--theme-text)",
                                    padding: 24,
                                    borderRadius: 16,
                                    textAlign: "center",
                                    border: "1px solid #ffe100"
                                },
                                elements: [
                                    {
                                        id: "stat-off-value",
                                        type: "Heading",
                                        props: {
                                            text: "12",
                                            tag: "h3",
                                            color: "#ffe100",
                                            size: "3xl",
                                            fontWeight: "black",
                                            align: "center",
                                            marginBottom: 8
                                        }
                                    },
                                    {
                                        id: "stat-off-label",
                                        type: "Paragraph",
                                        props: {
                                            text: "Global Offices",
                                            color: "#ffe100",
                                            size: "xs",
                                            fontWeight: "bold",
                                            align: "center",
                                            textTransform: "uppercase"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    // Culture Gallery
                    {
                        id: "gallery-col-1",
                        width: "calc(33.333% - 16px)",
                        elements: [
                            {
                                id: "gallery-operations",
                                type: "CultureGalleryCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIQirL0lnzBfps7TxiD_6u1MnzJoaNJNBdrqpFmsF3MQ1O8pLCLUMSsGcyxrO9Wvqkr-UNAmXslq-VuaCE4R2m9m1c4CNe93qzaRDP1Yjc7zJVWcz5LohB_fsk37EglEt1W_zqCPuMVZ4o5ND7O5ACfSz6phJJej0KMcET-wuC3nbna5xJhCrB0gDyVfdmh8T8vr2K3qs4bKLm-8gF6LVfEwyXiaPOp9PNgnCygV4XdHTaTx6dPVUxyh2IAJZ8zYiG4Qe9WCKZ-Q",
                                    imageAlt: "SwiftLogix Team Collaboration",
                                    category: "Operations",
                                    title: "Innovation in Motion",
                                    buttonText: "Join Us",
                                    buttonLink: "#careers"
                                }
                            }
                        ]
                    },
                    {
                        id: "gallery-col-2",
                        width: "calc(33.333% - 16px)",
                        elements: [
                            {
                                id: "gallery-technology",
                                type: "CultureGalleryCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmHppV11SnSw2esfSxSZdJfLw-4GuXHhMipOM6o5XqWHeHCgSARpsW2j9B69ri_YQhcwIDJgKHWn24RWCzOOob5lOYbKdptSBQi7Mz5dIyF1Xf6QKSXx-IUos6ujYIDCnN7mDg_ljjCX_hJoHeohWQ243pcFp6XHiO8PAsH3Zug3ZxAwZ1XHEirta0dbysVIQtERQKDbiSXUh3lMEPeWByr4dIV1vTHNRyxFh2M2mzHjfDWbTCNp3nJQdcECeGMFagvuBO23fF5g",
                                    imageAlt: "Logistics Technology Experts",
                                    category: "Technology",
                                    title: "Engineering the Future",
                                    buttonText: "Join Us",
                                    buttonLink: "#careers",
                                    marginTop: 48
                                }
                            }
                        ]
                    },
                    {
                        id: "gallery-col-3",
                        width: "calc(33.333% - 16px)",
                        elements: [
                            {
                                id: "gallery-success",
                                type: "CultureGalleryCard",
                                props: {
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbmb0H-6I0fIVwNxoNvco1f7q46zs9Ugx9kAcbzaLYdtLkSn8SOfl-F378D_z3DPotZaWHO4M1DVIAHHtMBctcB8xuhMr3BaIG3UXZpUT356gv9x2m_viYfZvA4Bs41CftCWVN9n-mwfgYnhvVk70GfuLuSxfJNmPvBfchFw_rWmb8k3SHhdZ_wATiVKeXMMyKJ1xZVvOGFuVX2AKxLaaPq9sunCWwfIVBSvJzrSYYXGdRL2BBIWESDEAgjGyVFDTcgKz3tkicRA",
                                    imageAlt: "Customer Success Team",
                                    category: "Client Success",
                                    title: "Global Relationships",
                                    buttonText: "Join Us",
                                    buttonLink: "#careers"
                                }
                            }
                        ]
                    }
                ]
            }
        },
         // --------------------------------------------------------------------------
    // NEWSLETTER / CTA SECTION
    // --------------------------------------------------------------------------
    {
      key: "ecommerce-newsletter",
      name: "Newsletter CTA",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbmb0H-6I0fIVwNxoNvco1f7q46zs9Ugx9kAcbzaLYdtLkSn8SOfl-F378D_z3DPotZaWHO4M1DVIAHHtMBctcB8xuhMr3BaIG3UXZpUT356gv9x2m_viYfZvA4Bs41CftCWVN9n-mwfgYnhvVk70GfuLuSxfJNmPvBfchFw_rWmb8k3SHhdZ_wATiVKeXMMyKJ1xZVvOGFuVX2AKxLaaPq9sunCWwfIVBSvJzrSYYXGdRL2BBIWESDEAgjGyVFDTcgKz3tkicRA",
          backgroundOverlay: "rgba(0, 0, 0, 0.80)",
          fullWidth: false,
          fontFamily: "Space Grotesk",
          paddingY: 80,
          paddingX: 80,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          "@media (max-width: 1024px)": {
            paddingY: 60,
            paddingX: 40
          },
          "@media (max-width: 768px)": {
            paddingY: 48,
            paddingX: 20
          }
        },
        columns: [{
          id: "newsletter-col",
          width: "100%",
          props: { maxWidth: "800px", alignItems: "center" },
          elements: [
            {
              id: "newsletter-label",
              type: "Heading",
              props: {
                text: "JOIN THE UNDERGROUND",
                tag: "h4",
                color: "#ffe100",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.4em",
                align: "center",
                marginBottom: 16
              }
            },
            {
              id: "newsletter-title",
              type: "Headline",
              props: {
                text: "Ready to Build the [Impossible?](linear-gradient(135deg, #ffd900ff, #ffe100ff)",
                tag: "h2",
                color: "var(--theme-background)",
                fontSize: {
                  mobile: "36px",
                  tablet: "56px",
                  desktop: "72px"
                },
                fontWeight: "800",
                lineHeight: 1.05,
                align: "center",
                marginBottom: 24
              }
            },
            {
              id: "newsletter-desc",
              type: "Paragraph",
              props: {
                text: "Whether you have a vision for a city landmark or a sustainable complex, we have the precision to make it real.",
                color: "var(--theme-background)",
                size: "lg",
                align: "center",
                maxWidth: "550px",
                lineHeight: 1.7,
                marginBottom: 32
              }
            },
            {
              id: "newsletter-buttons",
              type: "ButtonGroup",
              props: {
                primaryText: "GET A PROJECT",
                secondaryText: "VIEW LOOKBOOK",
                primaryBg: "#ffe100",
                primaryColor: "var(--theme-text)",
                primaryBorderRadius: 8,
                secondaryBg: "var(--theme-background)",
                secondaryColor: "#ffe100",
                secondaryBorder: "1px solid #ffe100",
                secondaryBorderRadius: 8,
                fontSize: "md",
                fontWeight: "700",
                gap: "gap-4",
                layout: "flex-row",
                flexWrap: "flex-wrap",
                justifyContent: "center"
              }
            }
          ]
        }]
      }
    }
  ],

  // ============================================================================
  // FOOTER
  // ============================================================================
  footer: {
    key: "construction-footer",
    name: "Apex Footer",
    structure: {
      type: "Section",
      defaultProps: {
        backgroundColor: "var(--theme-text)",
        paddingY: 100,
        paddingX: 48,
        fontFamily: "Merriweather",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      },
      columns: [
        {
          id: "ft-brand",
          width: "calc(40% - 24px)",
          elements: [
            { id: "ft-logo", type: "Box", props: { display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }, elements: [
               { id: "ft-name", type: "Heading", props: { text: "Apex.", color: "#ffe100", size: "2xl", fontWeight: "800", textTransform: "uppercase", letterSpacing: "-0.03em" } }
            ]},
            { id: "ft-desc", type: "Paragraph", props: { text: "Global headquarters for modern architectural and structural engineering solutions.", color: "#737373", size: "sm", lineHeight: 1.8, marginBottom: 32, maxWidth: "300px" } },
            { id: "ft-social", type: "SocialLinks", props: { iconColor: "var(--theme-background)", size: "sm", gap: 24 } }
          ]
        },
        {
          id: "ft-sitemap",
          width: "calc(20% - 24px)",
          elements: [
            { id: "ft-h-site", type: "Heading", props: { text: "Sitemap", tag: "h5", size: "xs", color: "var(--theme-background)", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 32 } },
            { id: "ft-links", type: "LinkList", props: { items: [{label: "Residential Portfolio", href: "#"}, {label: "Commercial Towers", href: "#"}, {label: "Urban Masterplanning", href: "#"}, {label: "Career Opportunities", href: "#"}], textColor: "#737373", hoverColor: "var(--theme-primary)", gap: 16 } }
          ]
        },
        {
          id: "ft-office",
          width: "calc(20% - 24px)",
          elements: [
             { id: "ft-h-off", type: "Heading", props: { text: "Office", tag: "h5", size: "xs", color: "var(--theme-background)", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 32 } },
             { id: "ft-addr", type: "Paragraph", props: { text: "1200 Industrial Way, Suite 400\nManhattan, New York 10005", color: "#737373", size: "sm", lineHeight: 1.8, marginBottom: 24 } },
             { id: "ft-contact", type: "Paragraph", props: { text: "T: +1 (555) 012 3456\nE: contact@apex-structures.com", color: "#737373", size: "sm", lineHeight: 1.8 } }
          ]
        },
        {
          id: "ft-newsletter",
          width: "calc(20% - 24px)",
          elements: [
            { id: "ft-h-news", type: "Heading", props: { text: "Newsletter", tag: "h5", size: "xs", color: "var(--theme-background)", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 32 } },
            { id: "ft-news-txt", type: "Paragraph", props: { text: "Stay updated with our latest architectural insights.", color: "#737373", size: "sm", marginBottom: 24 } },
            { id: "ft-input", type: "Box", props: { position: "relative" }, elements: [
               { id: "inp-mail", type: "Box", props: { component: "input", placeholder: "Email Address", width: "100%", padding: "16px", backgroundColor: "#111111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "14px" } },
            ]}
          ]
        }
      ]
    }
  }
};

module.exports = constructionHome;
