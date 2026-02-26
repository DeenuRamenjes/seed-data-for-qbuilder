/**
 * Finance Template - Our Clients Page
 * Theme: Social Proof, Success Stories, Thought Leadership.
 */

const financeOurClients = {
  sections: [
    // --------------------------------------------------------------------------
    // SUCCESS STORIES HERO
    // --------------------------------------------------------------------------
    {
      key: "finance-success-hero",
      name: "Success Stories Hero",
      description: "Hero section introducing client success stories",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#009e89",
          fullWidth: true,
          fontFamily: "Inter",
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
              maxWidth: "900px",
              textAlign: "center"
            },
            elements: [
              {
                id: "hero-badge",
                type: "Paragraph",
                props: {
                  text: "CLIENT SUCCESS",
                  size: "xs",
                  weight: "bold",
                  color: "#ffffff",
                  letterSpacing: "wider",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  opacity: 0.9
                }
              },
              {
                id: "hero-heading",
                type: "Heading",
                props: {
                  text: "Proven Results. Trusted Relationships.",
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
                  text: "Hear from the families, institutions, and individuals who have trusted us with their financial futures. Our client success stories speak to our commitment to delivering exceptional wealth management results.",
                  size: "lg",
                  color: "rgba(255,255,255,0.9)",
                  align: "center",
                  maxWidth: "700px",
                  marginX: "auto"
                }
              }
            ]
          }
        ]
      }
    },
    
    // --------------------------------------------------------------------------
    // CLIENT SEGMENTS - WHO WE SERVE
    // --------------------------------------------------------------------------
    {
      key: "finance-client-segments",
      name: "Client Segments",
      description: "Showcase different types of clients we serve",
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
          alignItems: "stretch",
          gap: 24,
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 24,
            gap: 16
          }
        },
        columns: [
          {
            id: "segments-header",
            width: "100%",
            props: {
              maxWidth: "1200px",
              textAlign: "center"
            },
            elements: [
              {
                id: "segments-heading",
                type: "Heading",
                props: {
                  text: "Who We Serve",
                  tag: "h2",
                  size: "4xl",
                  fontWeight: "bold",
                  color: "#009e89",
                  align: "center",
                  marginBottom: 16
                }
              },
              {
                id: "segments-description",
                type: "Paragraph",
                props: {
                  text: "Tailored wealth management solutions for diverse client segments worldwide.",
                  size: "lg",
                  color: "#64748b",
                  align: "center",
                  marginBottom: 48
                }
              }
            ]
          },
          // Segment 1: Family Offices
          {
            id: "segment-1",
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
                id: "segment-card-1",
                type: "Box",
                props: {
                  backgroundColor: "#f8fafc",
                  borderRadius: 24,
                  padding: 40,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",   
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "350px",
                  textAlign: "center"
                },
                elements: [
                  {
                    id: "segment-title-1",
                    type: "Heading",
                    props: {
                      text: "Families",
                      tag: "h3",
                      size: "xl",
                      fontWeight: "bold",
                      color: "#0f0f0f",
                      marginBottom: 12,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-desc-1",
                    type: "Paragraph",
                    props: {
                      text: "Multi-generational wealth preservation and growth strategies for ultra-high-net-worth families.",
                      size: "sm",
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-stat-1",
                    type: "Paragraph",
                    props: {
                      text: "500+ families worldwide",
                      size: "xs",
                      fontWeight: "bold",
                      color: "#009e89",
                      align: "center",
                      width: "100%"
                    }
                  }
                ]
              }
            ]
          },
          // Segment 2: Institutional Investors
          {
            id: "segment-2",
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
                id: "segment-card-2",
                type: "Box",
                props: {
                  backgroundColor: "#f8fafc",
                  borderRadius: 24,
                  padding: 40,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",   
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "350px",
                  textAlign: "center"
                },
                elements: [
                  {
                    id: "segment-title-2",
                    type: "Heading",
                    props: {
                      text: "Institutional",
                      tag: "h3",
                      size: "xl",
                      fontWeight: "bold",
                      color: "#0f0f0f",
                      marginBottom: 12,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-desc-2",
                    type: "Paragraph",
                    props: {
                      text: "Sophisticated portfolio management and alternative investment strategies for pension funds and sovereign wealth funds.",
                      size: "sm",
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-stat-2",
                    type: "Paragraph",
                    props: {
                      text: "$25B+ in institutional AUM",
                      size: "xs",
                      fontWeight: "bold",
                      color: "#009e89",
                      align: "center",
                      width: "100%"
                    }
                  }
                ]
              }
            ]
          },
          // Segment 3: High-Net-Worth Individuals
          {
            id: "segment-3",
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
                id: "segment-card-3",
                type: "Box",
                props: {
                  backgroundColor: "#f8fafc",
                  borderRadius: 24,
                  padding: 40,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                  display: "flex",
                  height: "350px",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center"
                },
                elements: [
                  {
                    id: "segment-title-3",
                    type: "Heading",
                    props: {
                      text: "Individuals",
                      tag: "h3",
                      size: "xl",
                      fontWeight: "bold",
                      color: "#0f0f0f",
                      marginBottom: 12,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-desc-3",
                    type: "Paragraph",
                    props: {
                      text: "Personalized wealth management, tax optimization, and estate planning for successful entrepreneurs and executives.",
                      size: "sm",
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-stat-3",
                    type: "Paragraph",
                    props: {
                      text: "3,500+ individual clients",
                      size: "xs",
                      fontWeight: "bold",
                      color: "#009e89",
                      align: "center",
                      width: "100%"
                    }
                  }
                ]
              }
            ]
          },
          // Segment 4: Foundations & Endowments
          {
            id: "segment-4",
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
                id: "segment-card-4",
                type: "Box",
                props: {
                  backgroundColor: "#f8fafc",
                  borderRadius: 24,
                  padding: 40,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center"
                },
                elements: [
                  {
                    id: "segment-title-4",
                    type: "Heading",
                    props: {
                      text: "Foundations",
                      tag: "h3",
                      size: "xl",
                      fontWeight: "bold",
                      color: "#0f0f0f",
                      marginBottom: 12,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-desc-4",
                    type: "Paragraph",
                    props: {
                      text: "Impact-driven investment strategies that align financial returns with philanthropic missions and ESG goals.",
                      size: "sm",
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-stat-4",
                    type: "Paragraph",
                    props: {
                      text: "200+ foundations served",
                      size: "xs",
                      fontWeight: "bold",
                      color: "#009e89",
                      align: "center",
                      width: "100%"
                    }
                  }
                ]
              }
            ]
          },
          // Segment 5: Corporate Retirement Plans
          {
            id: "segment-5",
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
                id: "segment-card-5",
                type: "Box",
                props: {
                  backgroundColor: "#f8fafc",
                  borderRadius: 24,
                  padding: 40,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center"
                },
                elements: [
                  {
                    id: "segment-title-5",
                    type: "Heading",
                    props: {
                      text: "Corporates",
                      tag: "h3",
                      size: "xl",
                      fontWeight: "bold",
                      color: "#0f0f0f",
                      marginBottom: 12,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-desc-5",
                    type: "Paragraph",
                    props: {
                      text: "Comprehensive 401(k) and pension plan management with fiduciary oversight and employee education programs.",
                      size: "sm",
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-stat-5",
                    type: "Paragraph",
                    props: {
                      text: "150+ corporate plans managed",
                      size: "xs",
                      fontWeight: "bold",
                      color: "#009e89",
                      align: "center",
                      width: "100%"
                    }
                  }
                ]
              }
            ]
          },
          // Segment 6: Private Equity Funds
          {
            id: "segment-6",
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
                id: "segment-card-6",
                type: "Box",
                props: {
                  backgroundColor: "#f8fafc",
                  borderRadius: 24,
                  padding: 40,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center"
                },
                elements: [
                  {
                    id: "segment-title-6",
                    type: "Heading",
                    props: {
                      text: "Private Funds",
                      tag: "h3",
                      size: "xl",
                      fontWeight: "bold",
                      color: "#0f0f0f",
                      marginBottom: 12,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-desc-6",
                    type: "Paragraph",
                    props: {
                      text: "Strategic fund structuring and limited partner services for alternative investment vehicles and venture capital.",
                      size: "sm",
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-stat-6",
                    type: "Paragraph",
                    props: {
                      text: "$8B+ in alternative assets",
                      size: "xs",
                      fontWeight: "bold",
                      color: "#009e89",
                      align: "center",
                      width: "100%"
                    }
                  }
                ]
              }
            ]
          },
          // Segment 7: Healthcare Institutions
          {
            id: "segment-7",
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
                id: "segment-card-7",
                type: "Box",
                props: {
                  backgroundColor: "#f8fafc",
                  borderRadius: 24,
                  padding: 40,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center"
                },
                elements: [
                  {
                    id: "segment-title-7",
                    type: "Heading",
                    props: {
                      text: "Healthcare",
                      tag: "h3",
                      size: "xl",
                      fontWeight: "bold",
                      color: "#0f0f0f",
                      marginBottom: 12,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-desc-7",
                    type: "Paragraph",
                    props: {
                      text: "Specialized treasury management and endowment strategies for hospitals, medical groups, and healthcare systems.",
                      size: "sm",
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-stat-7",
                    type: "Paragraph",
                    props: {
                      text: "75+ healthcare partners",
                      size: "xs",
                      fontWeight: "bold",
                      color: "#009e89",
                      align: "center",
                      width: "100%"
                    }
                  }
                ]
              }
            ]
          },
          // Segment 8: Educational Institutions
          {
            id: "segment-8",
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
                id: "segment-card-8",
                type: "Box",
                props: {
                  backgroundColor: "#f8fafc",
                  borderRadius: 24,
                  padding: 40,
                  borderWidth: 1,
                  borderColor: "#e2e8f0",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center"
                },
                elements: [
                  {
                    id: "segment-title-8",
                    type: "Heading",
                    props: {
                      text: "Educational",
                      tag: "h3",
                      size: "xl",
                      fontWeight: "bold",
                      color: "#0f0f0f",
                      marginBottom: 12,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-desc-8",
                    type: "Paragraph",
                    props: {
                      text: "Long-term endowment management and capital preservation for universities, colleges, and independent schools.",
                      size: "sm",
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      align: "center",
                      width: "100%"
                    }
                  },
                  {
                    id: "segment-stat-8",
                    type: "Paragraph",
                    props: {
                      text: "100+ academic institutions",
                      size: "xs",
                      fontWeight: "bold",
                      color: "#009e89",
                      align: "center",
                      width: "100%"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    
    // --------------------------------------------------------------------------
    // TESTIMONIALS GRID
    // --------------------------------------------------------------------------
    {
            key: "testimonials-grid",
            name: "Testimonials Grid Section",
            description: "Masonry-style grid of student testimonials and reviews",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFFFF",
                    darkBackgroundColor: "#0F0F0F",
                    fullWidth: true,
                    paddingY: 60,
                    paddingX: 24,
                    layout: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    "@media (max-width: 768px)": {
                        paddingY: 40,
                        gap: 16
                    }
                },
                columns: [
                    // Section Heading
                    {
                        id: "testimonials-heading",
                        width: "100%",
                        elements: [
                            {
                                id: "testimonials-heading-box",
                                type: "Box",
                                props: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginBottom: 40,
                                    width: "100%",
                                    backgroundColor: "#f8fafc",
                                },
                                elements: [
                                    {
                                        id: "testimonials-subtitle",
                                        type: "Paragraph",
                                        props: {
                                            text: "TESTIMONIALS",
                                            size: "sm",
                                            fontWeight: "bold",
                                            color: "#000",
                                            letterSpacing: 2,
                                            marginBottom: 12,
                                            align: "center",
                                            width: "100%"
                                        }
                                    },
                                    {
                                        id: "testimonials-title",
                                        type: "Heading",
                                        props: {
                                            text: "What Our Clients Say",
                                            tag: "h2",
                                            size: "3xl",
                                            fontWeight: "bold",
                                            color: "#009e89",
                                            marginBottom: 16,
                                            align: "center",
                                            width: "100%"
                                        }
                                    },
                                    {
                                        id: "testimonials-desc",
                                        type: "Paragraph",
                                        props: {
                                            text: "Hear from the individuals and organizations who trust us with their financial future.",
                                            size: "md",
                                            color: "#64748b",
                                            lineHeight: 1.7,
                                            align: "center",
                                            width: "100%",
                                            maxWidth: 600
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    // Testimonial 1
                    {
                        id: "testimonial-1",
                        width: "calc(33.33% - 16px)",
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
                                id: "testimonial-card-1",
                                type: "Testimonial",
                                props: {
                                    text: "The Full-stack development course was a game-changer. The curriculum is modern and stays updated with industry standards. I landed my first job within two months!",
                                    author: "Alex Rivera",
                                    role: "Junior Developer",
                                    company: "InnovateX",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANHcuDWPXpuGC0GEgYh3PzAtZbvcEWo3B1_53Kc_9aqizplbLqlcdx4xkY_4-ukaz-3AzdutTkJADmnRJehEzXdHq7sNqy-F_qguunId9CiLzxv2a5JiXjTub-m-cW3seEPijqI_lNXA8ffrqTmpIHacMwTu2B8iNG6FxZNZ5inGXEFoxNKk4S4Gm9eGgUWsxacU2pNTl1j5QqwZ6hQlrCT9jksTazIFnNZWhYdcNGf1YaRD9M69Qn487Ntq5qutBLBi1EKfb4G3vk",
                                    rating: 5,
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    accentColor: "#009e89"
                                }
                            }
                        ]
                    },
                    // Testimonial 2
                    {
                        id: "testimonial-2",
                        width: "calc(33.33% - 16px)",
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
                                id: "testimonial-card-2",
                                type: "Testimonial",
                                props: {
                                    text: "I loved the UI/UX workshop. The mentors are actually working professionals who give real-world feedback. Totally worth the investment.",
                                    author: "Sarah Jenkins",
                                    role: "Product Designer",
                                    company: "Tech Corp",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXT4E7SL0D_diiWHs8WW3sspT2K_s5z1wWsLnj7sSrFcpYmiXW3ODozd2DVzIx0JXc2AjSLdeT6Wv99aJRUO6f7MeKhiQrw0fWkn8OUlkNFBez6sice4k67QjOo_tbnbp6UXT22PrrjXXE-W_YJ1gJdb1JQGY_ykOUY5ZUvteZy_POLTFjia_VVMDaYS3Wf1lfvZmG4MKtyR-t52trtwuZoxdJveAEu4kC1myDLDMy6NxnDSJRbQ6aueVRfCEZrEAQ1dBh2MpbPoQi",
                                    rating: 5,
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    accentColor: "#009e89"
                                }
                            }
                        ]
                    },
                    // Testimonial 3
                    {
                        id: "testimonial-3",
                        width: "calc(33.33% - 16px)",
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
                                id: "testimonial-card-3",
                                type: "Testimonial",
                                props: {
                                    text: "The Data Science program is intense but extremely rewarding. The capstone project helped me build a portfolio that recruiters actually noticed.",
                                    author: "Michael Chen",
                                    role: "Data Analyst",
                                    company: "DataFlow",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQgmS3CLtaKC0WLC3-WE2jE-SMnBnPfrLN_DlMkjquReA2rM_QS86VSYdhvFzmxDk6EOwXID4mDLKsug-QOImbAt6Y-NLfifHJww_9TJYzBWvqUmGdB0h7qjg-sVPU93n_YKezlHWxWlSt6_iyXBiWTw2jRX15BO9T8CmqtZGyF9ou7atbzxvo3DJ1KEKTeHDX6kI6VKCWSF2CqfKDqP2EHIYjY7bg3ag5KfSdpSdWciAfHLkzJwRmCqbsYFTxv_E99QnFMITbCzcs",
                                    rating: 5,
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#1F2937",
                                    accentColor: "#009e89"
                                }
                            }
                        ]
                    },
                ]
            }
        },
  ]
};

module.exports = financeOurClients;
