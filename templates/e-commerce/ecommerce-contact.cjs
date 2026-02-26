/**
 * E-Commerce Template - Contact Page
 * Theme: TECH-STREET – Premium Streetwear / Techwear
 * Colors: Primary var(--theme-text), Secondary #D3ADFF (light purple / accent-purple), Accent #89D900 (neon green)
 * Font: Space Grotesk
 */

const ecommerceContact = {
  sections: [
    // --------------------------------------------------------------------------
    // HERO / TITLE SECTION
    // --------------------------------------------------------------------------
    {
      key: "ecommerce-contact-hero",
      name: "Contact Hero",
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
          gap: 24,
          "@media (max-width: 1024px)": {
            paddingY: 80,
            paddingX: 40
          },
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 20
          }
        },
        columns: [{
          id: "contact-hero-col",
          width: "100%",
          elements: [
            {
              id: "contact-hero-heading",
              type: "Headline",
              props: {
                text: "GET IN\n[TOUCH.](linear-gradient(to right, #00ff40ff, #89d900ff)",
                tag: "h1",
                color: "var(--theme-background)",
                fontSize: {
                  mobile: "48px",
                  tablet: "72px",
                  desktop: "96px"
                },
                fontWeight: "700",
                lineHeight: 1.0,
                align: "left",
                marginBottom: 24
              }
            },
            {
              id: "contact-hero-desc",
              type: "Paragraph",
              props: {
                text: "Experience world-class support. Whether you have a question about our latest drop or need technical assistance, our team is ready.",
                color: "rgba(255, 255, 255, 0.6)",
                size: "xl",
                maxWidth: "700px",
                lineHeight: 1.6
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // CONTACT FORM + INFO GRID
    // --------------------------------------------------------------------------
    {
            key: "travel-contact-main",
            name: "Contact Details and Form Section",
            description: "Two-column layout with contact information and form",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "var(--theme-text)",
                    fullWidth: true,
                    fontFamily: "Poppins",
                    paddingY: 80,
                    paddingX: 48,
                    layout: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 80,
                    "@media (max-width: 1024px)": {
                        gap: 60
                    },
                    "@media (max-width: 768px)": {
                        flexDirection: "column",
                        gap: 40,
                        paddingY: 60,
                        paddingX: 24
                    }
                },
                columns: [
                    // Left Column - Contact Details
                    {
                        id: "contact-details-col",
                        width: "calc(40% - 40px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "contact-details",
                                type: "ContactDetails",
                                props: {
                                    supportPortalTitle: "Reach Our Travel Team",
                                    supportPortalDescription: "Our travel consultants are available to help you plan the perfect journey. Connect with us through your preferred channel.",
                                    supportPortalLink: "#",
                                    supportPortalLinkText: "Schedule a Call",
                                    offices: [
                                        {
                                            city: "New York (Headquarters)",
                                            address: "120 Broadway, Suite 1800\nNew York, NY 10005"
                                        },
                                        {
                                            city: "London",
                                            address: "45 Kensington High Street\nLondon W8 5BA, UK"
                                        },
                                        {
                                            city: "Bangkok",
                                            address: "388 Sukhumvit Road\nKlongtoey, Bangkok 10110"
                                        }
                                    ],
                                    contactLinks: [
                                        {
                                            icon: "mail",
                                            label: "Email",
                                            value: "hello@wanderlust.com",
                                            href: "mailto:hello@wanderlust.com"
                                        },
                                        {
                                            icon: "share",
                                            label: "Phone",
                                            value: "+1 (800) 555-TRIP",
                                            href: "tel:+18005558747"
                                        },
                                        {
                                            icon: "globe",
                                            label: "Website",
                                            value: "www.wanderlust.com",
                                            href: "https://www.wanderlust.com"
                                        }
                                    ],
                                    backgroundColor: "var(--theme-background)",
                                    textColor: "#89d900",
                                    primaryColor: "#89d900",
                                    secondaryColor: "#89d900",
                                    paddingY: "0",
                                    cardPadding: "32",
                                    cardRadius: "16"
                                }
                            }
                        ]
                    },
                    // Right Column - Contact Form
                    {
                        id: "contact-form-col",
                        width: "calc(60% - 40px)",
                        props: {
                            "@media (max-width: 768px)": {
                                width: "100%"
                            }
                        },
                        elements: [
                            {
                                id: "contact-form",
                                type: "ContactForm",
                                props: {
                                    badgeText: "Send Us a Message",
                                    title: "How Can We Help?",
                                    description: "Fill out the form below and one of our travel consultants will get back to you within 24 hours.",
                                    submitText: "Send Message",
                                    firstNameLabel: "Full Name",
                                    firstNamePlaceholder: "John Smith",
                                    lastNameLabel: "Email Address",
                                    lastNamePlaceholder: "john.smith@example.com",
                                    emailLabel: "Phone Number",
                                    emailPlaceholder: "+1 (555) 000-0000",
                                    subjectLabel: "Travel Interest",
                                    subjectOptions: "Custom Itinerary,Group Tour,Luxury Getaway,Adventure Trip,Honeymoon,Corporate Retreat,General Inquiry",
                                    messageLabel: "Tell Us About Your Dream Trip",
                                    messagePlaceholder: "Where do you want to go? When are you planning to travel? Any specific experiences you're looking for?",
                                    backgroundColor: "var(--theme-background)",
                                    textColor: "#89d900",
                                    primaryColor: "#89d900",
                                    secondaryColor: "#89d900",
                                    accentColor: "#89d900",
                                    inputBackgroundColor: "var(--theme-border)",
                                    inputBorderColor: "var(--theme-border)",
                                    inputTextColor: "#89d900",
                                    inputPlaceholderColor: "var(--theme-border)"
                                }
                            }
                        ]
                    }
                ]
            }
        }
  ]
};

module.exports = ecommerceContact;
