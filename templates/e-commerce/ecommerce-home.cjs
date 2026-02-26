/**
 * E-Commerce Template - Home Page
 * Theme: TECH-STREET – Premium Streetwear / Techwear
 * Colors: Primary var(--theme-text) (black), Secondary #D3ADFF (light purple), Accent #89D900 (neon green)
 * Font: Space Grotesk
 */

const ecommerceHome = {
  // ============================================================================
  // HEADER - NAVBAR
  // ============================================================================
  header: {
    key: "ecommerce-header",
    name: "E-Commerce Header",
    structure: {
      type: "Navbar",
      defaultProps: {
        sticky: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(12px)",
        paddingY: 0,
        paddingX: 0,
        fontFamily: "Space Grotesk",
        showBorder: true,
        borderColor: "rgba(255, 255, 255, 0.1)",
        height: "70px"
      },
      props: {
        logo: {
          text: "Tech-Street",
          icon: "terminal",
          logoColor: "var(--theme-background)",
          iconColor: "#89D900",
          fontWeight: "extrabold",
          letterSpacing: "tight"
        },
        links: [
          { label: "Shop", href: "#" },
          { label: "Collections", href: "#" },
          { label: "Manifesto", href: "#" },
          { label: "Archive", href: "#" }
        ],
        ctaButton: {
          text: "Cart (2)",
          href: "#",
          variant: "primary",
          backgroundColor: "#89D900",
          textColor: "var(--theme-text)",
          borderRadius: "lg",
          height: "42px"
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
      key: "ecommerce-hero",
      name: "Hero Section",
      structure: {
        type: "Section",
        defaultProps: {
          fullWidth: true,
          fontFamily: "Space Grotesk"
        },
        columns: [{
          id: "hero-col",
          width: "100%",
          elements: [
            {
              id: "hero-component",
              type: "IndustrialHero",
              props: {
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTpZxvYm2Eb9Ej39H0AkMardWwxCAwpzGl9VBW6JSqai_LFc0qQftV0Tjl0UKTnd6QeNy00d0gD6Wtxir0zkxtD6Oha_NCx4W1xQ7iqI_b1dovm-kzQaczGNYNtve2EpRSizPkR4mvfBG0TUTZQ6FaubpnfCSJBBnckNgm0BQCpjQYaJMrGRxLJv8z2jvUVWIiPCJCZHiEPLL0L85mdIzjTuqd58ch-6W21RhVTomvAHIPCmqmtoFb-Q-ZDnbdRb3g8lM6U2UDlL4",
                backgroundOverlay: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)",
                minHeight: "90vh",
                maxWidth: "100%",
                badgeText: "SYSTEM-01 / DROP 24",
                badgeColor: "#89D900",
                badgeBackgroundColor: "transparent",
                badgeShowPing: false,
                align: "left",
                headlineText: "Equipment For The [Future](linear-gradient(to right, #89D900, #b8ff4a)",
                headlineColor: "var(--theme-background)",
                headlineTag: "h1",
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // BRAND MANIFESTO
    // --------------------------------------------------------------------------
    {
      key: "ecommerce-manifesto",
      name: "Brand Manifesto",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "var(--theme-text)",
          fullWidth: false,
          fontFamily: "Space Grotesk",
          paddingY: 120,
          paddingX: 80,
          layout: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 80,
          "@media (max-width: 1024px)": {
            paddingY: 80,
            paddingX: 40,
            gap: 48
          },
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 20,
            flexDirection: "column",
            gap: 32
          }
        },
        columns: [
          {
            id: "manifesto-col",
            width: "100%",
            props: {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            },
            elements: [
              {
                id: "manifesto-label",
                type: "Heading",
                props: {
                  text: "// OUR MANIFESTO",
                  tag: "h4",
                  color: "#D3ADFF",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.4em",
                  align: "center",
                  marginBottom: 32
                }
              },
              {
                id: "manifesto-headline",
                type: "Headline",
                props: {
                  text: "Built for the urban explorer. Engineered for the night Sustainably sourced Digitally native",
                  tag: "h2",
                  color: "#89D900",
                  fontSize: {
                    mobile: "28px",
                    tablet: "36px",
                    desktop: "48px"
                  },
                  fontWeight: "500",
                  lineHeight: 1.3,
                  align: "center",
                  marginBottom: 40
                }
              },
              {
                id: "manifesto-desc",
                type: "Paragraph",
                props: {
                  text: "Tech-Street is not just clothing. It's an operating system for the modern metropolis. We combine military-grade textiles with ergonomic cutting patterns to ensure absolute freedom of movement in the concrete jungle.Tech-Street is not just clothing. It's an operating system for the modern metropolis. We combine military-grade textiles with ergonomic cutting patterns to ensure absolute freedom of movement in the concrete jungle.",
                  color: "rgba(255, 255, 255, 0.5)",
                  size: "base",
                  lineHeight: 1.7,
                  align: "center",
                  maxWidth: "640px",
                  marginBottom: 24
                }
              },
              {
                id: "manifesto-link",
                type: "ButtonGroup",
                props: {
                  primaryText: "Read the full manifesto",
                  primaryLink: "#",
                  primaryBg: "#89D900",
                  primaryColor: "var(--theme-text)",
                  alignItems: "center",
                  primaryBorder: "none",
                  fontSize: "xs",
                  fontWeight: "700",
                  layout: "flex-row"
                }
              }
            ]
          }
        ]
      }
    },

    // --------------------------------------------------------------------------
    // FEATURED COLLECTIONS GRID
    // --------------------------------------------------------------------------
    {
      key: "ecommerce-featured-collections",
      name: "Featured Collections",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          fontFamily: "Space Grotesk",
          paddingY: 100,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 32,
          "@media (max-width: 1024px)": {
            paddingX: 40,
            gap: 24
          },
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 20,
            gap: 20
          }
        },
        columns: [
          {
            id: "collections-header",
            width: "100%",
            elements: [
              {
                id: "collections-label",
                type: "Heading",
                props: {
                  text: "// STYLES & ARCHIVES",
                  tag: "h4",
                  color: "#D3ADFF",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.4em",
                  marginBottom: 16
                }
              },
              {
                id: "collections-title",
                type: "Headline",
                props: {
                  text: "Featured Collections",
                  tag: "h2",
                  color: "var(--theme-background)",
                  fontSize: {
                    mobile: "28px",
                    tablet: "36px",
                    desktop: "48px"
                  },
                  fontWeight: "500",
                  lineHeight: 1.1,
                  marginBottom: 0
                }
              }
            ]
          },
          {
            id: "coll-col-1",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "coll-1",
              type: "FeatureCard",
              props: {
                iconName: "none",
                title: "System-01",
                description: "Outerwear",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYxsat3-raeJlgLaaui9mbGJ36pyumUtR1msQ_29-WoMaN9xoOpk7NFI5LBuJru8T7cMcwhrDyVrZ4UxOTf_FkwFi00dYMCyy5UAZK6T7idrMSfErQRGHDsFUqloqR1-DevInS50eewZjwvVSj4W1gL9SPVI0uiGIJgfg1Nzjdf4jviGcbD7S49cCpEVgHTmtjgEKCaHh_Yk2qej6CWESoCD58ZswsXp8NXn_7kB-ER1EbbwiZ-ZnD3LOf5SYAYS3gaDnC7hTdvZs",
                imageAspectRatio: "1/1",
                titleColor: "var(--theme-background)",
                descriptionColor: "#89D900",
                backgroundColor: "transparent",
                borderRadius: "12px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          {
            id: "coll-col-2",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "coll-2",
              type: "FeatureCard",
              props: {
                iconName: "none",
                title: "Core Basics",
                description: "Essentials",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV5iRC_ZN323jtvX0quIpWpkz-56vKgZTgVUa3dcg-plOe0M4mMpEz_fDcJJJvzFhDT5lSa-JWq-vM3q6DpaGH_Jq4VvVQQheJpuZ-Cjtpeflz_RuwpG4b7qvFzLLOGF489C-m6ONU2RK-vCdUwe0xVurKJBjbrles1Veatxip5kiWobqqOYlnItH3dv8SWtjEcKjZlOXl498lZqFha7i4iULZIqRcZfC0yaPJ-3So41pF2bMP16w8e7gFNvj8Veu8hJZBnIfxVxQ",
                imageAspectRatio: "1/1",
                titleColor: "var(--theme-background)",
                descriptionColor: "#89D900",
                backgroundColor: "transparent",
                borderRadius: "12px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          {
            id: "coll-col-3",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "coll-3",
              type: "FeatureCard",
              props: {
                iconName: "none",
                title: "Headwear System",
                description: "Modules",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgVV-9OF8A3a5EmYn_u7Ut6sWANBVdiXryTUCZHyhJp-QU8ZiO9amJL5UZm3S7IwrmYMSAq8HbNaRH0HMvRN9meIDUVCcmUnr3Try26k1ZOXn2oJikHQR_xTGk-MO1I3dSLmBFU0TWn3whel-KTKwrtkv2sBPhvFM6MYa4ylBhSODLBh9rCBZQ5L2xamFv2qsyuVYCjJXfuObhMgjYxKbr0k4y0jYkjqSRs9A7aebR6MWRV69K1JlrlKhrx2WHd8QqagTGTF-mKh8",
                imageAspectRatio: "1/1",
                titleColor: "var(--theme-background)",
                descriptionColor: "#89D900",
                backgroundColor: "transparent",
                borderRadius: "12px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          {
            id: "coll-col-4",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "coll-4",
              type: "FeatureCard",
              props: {
                iconName: "none",
                title: "Utility Accs",
                description: "Equipment",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-ARnu_OVMIesuswgvaDzE5Kmab0cuO-8TREwyzAOr1oQ4UijKg_D58S02I-4EAdDIW99TNdiwNI-l2kajfPeAzMjUyN_jxPDcbze15O-Z2xk8whbpUSwgWagKXsyPPNlEK8g8eJC032THI9rMwUofF6NpJrxvFlQ7IwMQ3_FqxW5UkBi7fDnAqtAdhrmKhggeO0qhlGEbnTdMhjb76xoV_Hue-lmSX6NcUED4JZmE7Ho2vUwbbVArrZyXyhHwfo9jfGKaBzkZ234",
                imageAspectRatio: "1/1",
                titleColor: "var(--theme-background)",
                descriptionColor: "#89D900",
                backgroundColor: "transparent",
                borderRadius: "12px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          {
            id: "coll-col-5",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "coll-5",
              type: "FeatureCard",
              props: {
                iconName: "none",
                title: "Footwear Lab",
                description: "Tech-Step",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfLg-v22gkQOgXFUhWL9uPkFninKrFtsZ3gQUwdKV5gxGEGGLdUmMV7LM9Iwc_j53Iybm_O_his3KTlbueYvfBT8vaaVjdCM1QkW9pSndQ8KTFmz3pgSuWGK88O8KALVtis_V8IpHRLMH4T1uZ4MHPz_rcc8lU8lxdBziEqmffo0EZ8zuKLB-5UmWUjf3ZglEFgTy7nL1p-tlrmniV-7fDx-8vN_NnFnoAxIQa_i3JdV2NtgQhEdDS-WgTsl0B52hFNguDcgBLBOg",
                imageAspectRatio: "1/1",
                titleColor: "var(--theme-background)",
                descriptionColor: "#89D900",
                backgroundColor: "transparent",
                borderRadius: "12px",
                padding: "0",
                textAlign: "left",
                titleSize: "lg"
              }
            }]
          },
          {
            id: "coll-col-6",
            width: "calc(33.33% - 22px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 12px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "coll-6",
              type: "FeatureCard",
              props: {
                iconName: "none",
                title: "Archives",
                description: "Limited Edition",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNrO8KYW-ou6CAWOacFxhnt4TaLjO_PeDTYnaROsS-MpL1mlQZ9Nm2ZSb3Ls-e-53JQQG0UVSVv-aNeTcX25MhojF0LwODgGMCWorfejApozFLtRqQqoz-JAS1n5r86i8K52JdANUD8U8sEKEzFvEgBkErs6Tn4jdZ8m7N_Q9ta0it1Ggl7bkBJL6a4jcWfSKea7N9MNPE9Rk2kP4wBPvFD4mYdA1y-dkX6xbTayTAvf-QSqdYNX212756t6Xe28q-s5LbByJ5Liw",
                imageAspectRatio: "1/1",
                titleColor: "var(--theme-background)",
                descriptionColor: "#89D900",
                backgroundColor: "transparent",
                borderRadius: "12px",
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
    // NEW ARRIVALS - CAROUSEL
    // --------------------------------------------------------------------------
    {
      key: "ecommerce-new-arrivals",
      name: "New Arrivals",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "var(--theme-text)",
          fullWidth: false,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        },
        columns: [{
          id: "arrivals-carousel-col",
          width: "100%",
          elements: [{
            id: "arrivals-carousel",
            type: "HorizontalCarouselRenderer",
            props: {
              title: "The Latest Drops",
              primaryColor: "#89D900",
              backgroundColor: "var(--theme-text)",
              textColor: "var(--theme-text)",
              darkTextColor: "var(--theme-background)",
              subtextColor: "#D3ADFF",
              darkSubtextColor: "#D3ADFF",
              showNavigation: true,
              items: [
                {
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGZjQx6q9cbZGQWls8SYqpyb93dBw3iTJs9bL49hai3scjozcYmlmjuG9f5fWcZ2ELK81unuOVrfZn9FO84c81dEp8TtPmjNpW9AWoxZ5C5tnF2LQqet3SgKmjlrKz43RGMaMBlJ1BkY1oaf8zsp2s3HL8B4TqJh1voBBCm_1L1q9L5XxyKuJIpSyNnDPEj5wPLX205p8LmuXR6Huy4sA7JEBmBmsx0dzpkitYqbkdSySc8-wHIraEMxNBB-bL5y7MAJasS-lhnsA",
                  label: "OUTERWEAR",
                  title: "Shadow-01 Technical Hoodie",
                  description: "$240 — Water-repellant / Thermal"
                },
                {
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzIAlDKNKGlWoMAvpUco9APjJ3pOL9-ZLjKIWuVa3fuXuMfVgLe92TfTY-keitVGBozFZul7USUfS7oOCzpLq-_g8QHni4AltXf9JIZakO3aD30cXuVO4XCku8eDADOs_OIpPqITHmb3uDkfYKXJyy2Sm6KlnmuHUMhI8Kz4Im_WQ60zeOL6FNYZ177P1PY8S3s59sKBQk9MbCeH3C6r3ikV3MESx19SovQ9yHvZGZhy6bMIpzvN5upkflWPRKCqasCUZzxEUlrb8",
                  label: "LIMITED",
                  title: "Ghost-Shell Utility Parka",
                  description: "$450 — Limited Release / White"
                },
                {
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9xj2AVMKvlvOEtxgrPwwS24ZEwQD21qazWd2MSAdBz8lmJp5p34TOAcCp9spsUb3CDTydic2j6kUMr4Z1OcAl-Q8CoUeuRIpTG3gvHbJyAjwy86kx_qZjTJEeTMjXxeD21eFkidaNWjxCPntu9Q7RC_s3Gq4DV-a3ZnscUxZ_O--9FhjMRbf2YbLPL6NePfM-T_EhBW0RqhpWPbXlZTFe1sby4-Cptm-Ry4iKDy27iiQZ66WRxcknK3Hj19NpdE3sUmrPdvWWzBs",
                  label: "BOTTOMS",
                  title: "Vector Cargo Pant V2",
                  description: "$195 — Multi-pocket / Adjustable"
                },
                {
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9lvjzh-dPAGA1-nwaicleY1NF0KDPWEEgwi7pG68ggQUP8AuCtAhxDIeyBmXrs3WvocJhOvkQosqgrpOGK88kIb4N3f9fYM6qTjckED-iTVhc-C3lpLAwGHFk6sYWUc5ctKMWHfQnw0E7Z6Get7yBKkZJvc8mm3fBndj0IuffDkMVQjk0V6j5eiE6WQgfpP3Xpx_OxcIULxNpF-TDAOaxAi1FplQn95_FsbKj_bT_412X3jX9M7xETdpvKqlNFjseTUOJXJBncSI",
                  label: "ACCESSORIES",
                  title: "Tactical Cobra Belt",
                  description: "$85 — AustriAlpin / Nylon"
                },
                {
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYxsat3-raeJlgLaaui9mbGJ36pyumUtR1msQ_29-WoMaN9xoOpk7NFI5LBuJru8T7cMcwhrDyVrZ4UxOTf_FkwFi00dYMCyy5UAZK6T7idrMSfErQRGHDsFUqloqR1-DevInS50eewZjwvVSj4W1gL9SPVI0uiGIJgfg1Nzjdf4jviGcbD7S49cCpEVgHTmtjgEKCaHh_Yk2qej6CWESoCD58ZswsXp8NXn_7kB-ER1EbbwiZ-ZnD3LOf5SYAYS3gaDnC7hTdvZs",
                  label: "OUTERWEAR",
                  title: "Stealth Runner Jacket",
                  description: "$320 — Reflective / Windproof"
                },
                {
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV5iRC_ZN323jtvX0quIpWpkz-56vKgZTgVUa3dcg-plOe0M4mMpEz_fDcJJJvzFhDT5lSa-JWq-vM3q6DpaGH_Jq4VvVQQheJpuZ-Cjtpeflz_RuwpG4b7qvFzLLOGF489C-m6ONU2RK-vCdUwe0xVurKJBjbrles1Veatxip5kiWobqqOYlnItH3dv8SWtjEcKjZlOXl498lZqFha7i4iULZIqRcZfC0yaPJ-3So41pF2bMP16w8e7gFNvj8Veu8hJZBnIfxVxQ",
                  label: "ESSENTIALS",
                  title: "Core Basics Tee",
                  description: "$65 — Organic Cotton / Relaxed"
                },
                {
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgVV-9OF8A3a5EmYn_u7Ut6sWANBVdiXryTUCZHyhJp-QU8ZiO9amJL5UZm3S7IwrmYMSAq8HbNaRH0HMvRN9meIDUVCcmUnr3Try26k1ZOXn2oJikHQR_xTGk-MO1I3dSLmBFU0TWn3whel-KTKwrtkv2sBPhvFM6MYa4ylBhSODLBh9rCBZQ5L2xamFv2qsyuVYCjJXfuObhMgjYxKbr0k4y0jYkjqSRs9A7aebR6MWRV69K1JlrlKhrx2WHd8QqagTGTF-mKh8",
                  label: "HEADWEAR",
                  title: "Neural Cap Module",
                  description: "$95 — Fitted / Signal-Block"
                },
                {
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfLg-v22gkQOgXFUhWL9uPkFninKrFtsZ3gQUwdKV5gxGEGGLdUmMV7LM9Iwc_j53Iybm_O_his3KTlbueYvfBT8vaaVjdCM1QkW9pSndQ8KTFmz3pgSuWGK88O8KALVtis_V8IpHRLMH4T1uZ4MHPz_rcc8lU8lxdBziEqmffo0EZ8zuKLB-5UmWUjf3ZglEFgTy7nL1p-tlrmniV-7fDx-8vN_NnFnoAxIQa_i3JdV2NtgQhEdDS-WgTsl0B52hFNguDcgBLBOg",
                  label: "FOOTWEAR",
                  title: "Terrain-X Boot",
                  description: "$380 — Gore-Tex / Vibram Sole"
                }
              ]
            }
          }]
        }]
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
          backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYxsat3-raeJlgLaaui9mbGJ36pyumUtR1msQ_29-WoMaN9xoOpk7NFI5LBuJru8T7cMcwhrDyVrZ4UxOTf_FkwFi00dYMCyy5UAZK6T7idrMSfErQRGHDsFUqloqR1-DevInS50eewZjwvVSj4W1gL9SPVI0uiGIJgfg1Nzjdf4jviGcbD7S49cCpEVgHTmtjgEKCaHh_Yk2qej6CWESoCD58ZswsXp8NXn_7kB-ER1EbbwiZ-ZnD3LOf5SYAYS3gaDnC7hTdvZs",
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
                text: "// JOIN THE UNDERGROUND",
                tag: "h4",
                color: "#89D900",
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
                text: "Get Early [Access.](linear-gradient(135deg, #2fff00ff, #89d900))",
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
                text: "Subscribe to receive drop notifications, exclusive archival pieces, and community-only events.",
                color: "rgba(255, 255, 255, 0.6)",
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
                primaryText: "SHOP NOW",
                secondaryText: "VIEW LOOKBOOK",
                primaryBg: "#89D900",
                primaryColor: "var(--theme-text)",
                primaryBorderRadius: 8,
                secondaryBg: "var(--theme-background)",
                secondaryColor: "#89D900",
                secondaryBorder: "1px solid #89D900",
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
    key: "ecommerce-footer",
    name: "Footer",
    structure: {
      type: "Section",
      defaultProps: {
        backgroundColor: "var(--theme-text)",
        fullWidth: false,
        borderTopColor: "rgba(255,255,255,0.05)",
        borderTopWidth: 1
      },
      columns: [{
        id: "footer-col",
        width: "100%",
        elements: [
          {
            id: "footer-content",
            type: "MinimalFooter",
            props: {
              companyName: "Tech-Street",
              tagline: "Redefining urban mobility through technical innovation and modernist design. Engineered in Tokyo. Manufactured for the World.",
              columns: [
                {
                  title: "Explore",
                  links: [
                    { label: "Shop All", href: "#" },
                    { label: "Collections", href: "#" },
                    { label: "Archival", href: "#" },
                    { label: "Lookbooks", href: "#" }
                  ]
                },
                {
                  title: "Support",
                  links: [
                    { label: "Shipping", href: "#" },
                    { label: "Returns", href: "#" },
                    { label: "Warranty", href: "#" },
                    { label: "Contact", href: "#" }
                  ]
                }
              ],
              socialLinks: [
                { icon: "share", href: "#", label: "Share" },
                { icon: "public", href: "#", label: "Website" },
                { icon: "camera", href: "#", label: "Instagram" }
              ],
              copyrightText: "© 2024 Tech-Street Systems. All rights reserved.",
              footerLinks: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookies", href: "#" }
              ],
              textColor: "rgba(255,255,255,0.4)",
              headingColor: "var(--theme-background)",
              linkColor: "rgba(255,255,255,0.4)",
              linkHoverColor: "#D3ADFF",
              darkMode: true
            }
          }
        ]
      }]
    }
  }
};

module.exports = ecommerceHome;
