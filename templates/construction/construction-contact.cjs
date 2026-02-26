/**
 * Construction Template - Contact Page
 * Theme: Apex Structures
 */

const constructionHome = require('./construction-home.cjs');

const constructionContact = {
  header: constructionHome.header,

  sections: [
    // --------------------------------------------------------------------------
    // HERO
    // --------------------------------------------------------------------------
    {
      key: "construction-contact-hero",
      name: "Contact Hero",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#111111",
          paddingY: 100,
          paddingX: 48,
          fontFamily: "Merriweather",
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        },
        columns: [
          {
            id: "ct-hero-col",
            width: "100%",
            props: { align: "center" },
            elements: [
               { id: "ct-badge", type: "Paragraph", props: { text: "Get in Touch", color: "#ffe100", size: "xs", fontWeight: "900", textTransform: "uppercase", letterSpacing: "widest", marginBottom: 24, align: "center" } },
               { id: "ct-h1", type: "Heading", props: { text: "Start Your Next Project", tag: "h1", size: "6xl", color: "var(--theme-background)", fontWeight: "900", textTransform: "uppercase", letterSpacing: "tighter", marginBottom: 32, align: "center" } },
               { id: "ct-p", type: "Paragraph", props: { text: "Our team of engineers and architects is ready to bring your vision to life.", color: "#a3a3a3", size: "xl", maxWidth: "600px", align: "center" } }
            ]
          }
        ]
      }
    },
    // --------------------------------------------------------------------------
    // CONTACT FORM SECTION
    // --------------------------------------------------------------------------
    {
      key: "construction-contact-form",
      name: "Contact Form",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "var(--theme-text)",
          fullWidth: true,
          fontFamily: "Merriweather",
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
                titleColor: "#ffe100",
                description: "Fill out the form below and our team will get back to you within 24 hours.",
                descriptionColor: "var(--theme-background)",
                fields: [
                  { label: "Full Name", type: "text", placeholder: "Julian Vane", required: true },
                  { label: "Email Address", type: "email", placeholder: "julian@example.com", required: true },
                  { label: "Inquiry Type", type: "select", options: ["Artisanal Inquiry", "Wholesale & Distribution", "Partnership Proposal", "Studio Visit Request", "Press & Media"] },
                  { label: "Your Message", type: "textarea", placeholder: "How can we help you today?", required: true }
                ],
                submitText: "Send Message",
                primaryColor: "#ffe100",
                textColor: "#ffe100",
                descriptionColor: "var(--theme-background)",
                backgroundColor: "transparent",
                inputBackgroundColor: "#3d3d3dff",
                inputBorderColor: "#1b1b1bff",
                inputTextColor: "var(--theme-background)",
                borderRadius: "8px"
              }
            }
          ]
        }]
      }
    },
  ],

  footer: constructionHome.footer
};

module.exports = constructionContact;
