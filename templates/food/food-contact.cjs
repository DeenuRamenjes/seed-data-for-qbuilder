/**
 * Food Template - Contact Page
 * Theme: Epilogue Culinary – Split-screen contact form
 * Colors: Primary #2e0057 (deep purple), Accent #ebd800 (gold)
 * Font: Epilogue
 */

const foodContact = {
  sections: [
    // --------------------------------------------------------------------------
    // HERO / HEADER SECTION
    // --------------------------------------------------------------------------
    {
      key: "food-contact-hero",
      name: "Contact Hero",
      structure: {
        type: "Section",
        defaultProps: {
          fullWidth: true,
          fontFamily: "Playfair Display",
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
                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD__cEmuACbOUkLvMfvdLvtaX-yiNXrg0jDVzX9H2JcXsxQ1EfUt4Qx_EfKAXvBoie_SkbSIOlDIaIQk5TL4xe1n-7YQoYcLKMqnra5ThvjpojlR9NrG65G86ugl094ax7cySYLeVIZ92qgWdzj46r6CDMY5ePyAXp-qI6UjO2HaWbwk_knQdjQNfS7f-gvYY84_-6srpkOtlp1Pcv0acVftNHVa9_GVN9Gx_aLpZaTi6P32v2bH-lB4wIXnnNQSAXwbFmI1zbzKsA",
                backgroundOverlay: "rgba(46, 0, 87, 0.6)",
                minHeight: "50vh",
                badgeText: "Get in Touch",
                badgeColor: "#ebd800",
                badgeBackgroundColor: "rgba(255, 255, 255, 0.15)",
                badgeShowPing: false,
                headlineText: "Connect with the [Studio](linear-gradient(to right, #eb9900ff, #f5e84d)",
                headlineColor: "#FFFFFF",
                headlineTag: "h1",
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // CONTACT FORM SECTION
    // --------------------------------------------------------------------------
    {
      key: "food-contact-form",
      name: "Contact Form",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#ffffff",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 80,
          paddingX: 48,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          "@media (max-width: 768px)": {
            paddingY: 48,
            paddingX: 24
          }
        },
        columns: [{
          id: "form-col",
          width: "100%",
          props: { maxWidth: "700px" },
          elements: [
            {
              id: "contact-form",
              type: "ContactForm",
              props: {
                title: "Send Us a Message",
                titleColor: "#2e0057",
                description: "Fill out the form below and our team will get back to you within 24 hours.",
                descriptionColor: "rgba(46, 0, 87, 0.8)",
                fields: [
                  { label: "Full Name", type: "text", placeholder: "Julian Vane", required: true },
                  { label: "Email Address", type: "email", placeholder: "julian@example.com", required: true },
                  { label: "Inquiry Type", type: "select", options: ["Artisanal Inquiry", "Wholesale & Distribution", "Partnership Proposal", "Studio Visit Request", "Press & Media"] },
                  { label: "Your Message", type: "textarea", placeholder: "How can we help you today?", required: true }
                ],
                submitText: "Send Message",
                primaryColor: "#2e0057",
                textColor: "#2e0057",
                descriptionColor: "rgba(46, 0, 87, 0.7)",
                backgroundColor: "transparent",
                inputBackgroundColor: "#f7f5f8",
                inputBorderColor: "rgba(46, 0, 87, 0.1)",
                inputTextColor: "#2e0057",
                borderRadius: "8px"
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // CONTACT DETAILS GRID
    // --------------------------------------------------------------------------
    {
      key: "food-contact-details",
      name: "Contact Details",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f7f5f8",
          fullWidth: true,
          fontFamily: "Playfair Display",
          paddingY: 80,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 32,
          "@media (max-width: 768px)": {
            paddingY: 48,
            paddingX: 24,
            gap: 24
          }
        },
        columns: [
          {
            id: "detail-1",
            width: "calc(25% - 24px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "detail-card-1",
              type: "ServiceCard",
              props: {
                icon: "Handshake",
                title: "Partnerships",
                description: "partnerships@artisanal.food",
                iconColor: "#2e0057",
                iconBg: "rgba(46, 0, 87, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          },
          {
            id: "detail-2",
            width: "calc(25% - 24px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "detail-card-2",
              type: "ServiceCard",
              props: {
                icon: "MapPin",
                title: "Studio Visits",
                description: "By appointment only. 123 Culinary Way, Suite 400",
                iconColor: "#2e0057",
                iconBg: "rgba(46, 0, 87, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          },
          {
            id: "detail-3",
            width: "calc(25% - 24px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "detail-card-3",
              type: "ServiceCard",
              props: {
                icon: "Phone",
                title: "General Inquiries",
                description: "+1 (555) 234-5678",
                iconColor: "#2e0057",
                iconBg: "rgba(46, 0, 87, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          },
          {
            id: "detail-4",
            width: "calc(25% - 24px)",
            props: {
              "@media (max-width: 1024px)": { width: "calc(50% - 16px)" },
              "@media (max-width: 768px)": { width: "100%" }
            },
            elements: [{
              id: "detail-card-4",
              type: "ServiceCard",
              props: {
                icon: "Share2",
                title: "Follow Us",
                description: "Instagram • Twitter • Pinterest",
                iconColor: "#2e0057",
                iconBg: "rgba(46, 0, 87, 0.1)",
                backgroundColor: "#ffffff",
                textColor: "#2e0057",
                accentColor: "#ebd800",
                showLink: false,
                align: "left",
                style: "card",
                fontFamily: "Playfair Display"
              }
            }]
          }
        ]
      }
    },
  ]
};

module.exports = foodContact;
