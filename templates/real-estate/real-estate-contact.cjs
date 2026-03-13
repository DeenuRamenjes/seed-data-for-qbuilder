/**
 * Real Estate Template - Contact / Investment Concierge Page
 * Theme: Apex Estates – Investment Hub, Split-Screen
 * Colors: Primary (var(--theme-background)), Secondary (#59184C), Accent (#0A325C), Dark (var(--theme-text))
 * Font: Manrope
 */

const realEstateHome = require('./real-estate-home.cjs');

const realEstateContact = {
  // ============================================================================
  // HEADER (shared from home)
  // ============================================================================
  header: realEstateHome.header,

  // ============================================================================
  // PAGE SECTIONS
  // ============================================================================
  sections: [
    // --------------------------------------------------------------------------
    // HERO – HEADLINE
    // --------------------------------------------------------------------------
    {
      key: "contact-hero",
      name: "Contact Hero",
      structure: {
        type: "Section",
        defaultProps: {
          backgroundColor: "#59184C",
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 80,
          paddingX: 48,
          layout: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          "@media (max-width: 768px)": {
            paddingY: 60,
            paddingX: 24
          }
        },
        columns: [{
          id: "contact-hero-col",
          width: "100%",
          props: { maxWidth: "800px" },
          elements: [
            {
              id: "contact-badge",
              type: "Paragraph",
              props: {
                text: "INVESTMENT CONCIERGE",
                size: "xs",
                fontWeight: "bold",
                color: "#b0903e",
                letterSpacing: 3,
                marginBottom: 20,
                align: "center",
                width: "100%"
              }
            },
            {
              id: "contact-headline",
              type: "Headline",
              props: {
                text: "Global Market Access.\nBespoke Optimization.",
                tag: "h1",
                color: "#b0903e",
                fontSize: { mobile: "36px", tablet: "48px", desktop: "64px" },
                fontWeight: "200",
                lineHeight: 1.1,
                align: "center"
              }
            },
            {
              id: "contact-subtitle",
              type: "Paragraph",
              props: {
                text: "Discretion guaranteed. Your gateway to exclusive luxury real estate, private market placements, and institutional-grade portfolio management.",
                size: "lg",
                color: "#f7f7f7",
                lineHeight: 1.7,
                marginTop: 24,
                align: "center",
                width: "100%"
              }
            }
          ]
        }]
      }
    },

    // --------------------------------------------------------------------------
    // CONTACT DETAILS + FORM — Premium Split Layout
    // --------------------------------------------------------------------------
    {
      key: "contact-form-section",
      name: "Contact Details & Form",
      structure: {
        type: "Section",
        props: {
          backgroundColor: "#f7f7f7",
          fullWidth: true,
          fontFamily: "Outfit",
          paddingY: 100,
          paddingX: 48,
          layout: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 64,
          alignItems: "flex-start",
          "@media (max-width: 768px)": {
            paddingY: 64,
            paddingX: 24,
            gap: 48
          }
        },
        columns: [
          // Left — Contact Info (no card, clean layout on dark bg)
          {
            id: "contact-details-col",
            width: "calc(41.67% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "100%" }
            },
            elements: [
              { id: "cd-badge", type: "Paragraph", props: { text: "REACH US", size: "xs", fontWeight: "bold", color: "#b0903e", letterSpacing: 4, marginBottom: 16 } },
              { id: "cd-heading", type: "Heading", props: { text: "Let's Start a\nConversation.", tag: "h2", size: "4xl", fontWeight: "bold", color: "#59184C", marginBottom: 24 } },
              { id: "cd-desc", type: "Paragraph", props: { text: "Our senior advisors are available for private consultations. Every inquiry is handled with the utmost discretion.", size: "md", color: "var(--theme-text)", lineHeight: 1.7, marginBottom: 48 } },
              {
                id: "contact-details",
                type: "ContactDetails",
                props: {
                  supportPortalTitle: "Private Concierge",
                  supportPortalDescription: "Already a client? Reach your dedicated advisor directly through our secure portal.",
                  supportPortalLinkText: "Open Client Portal",
                  supportPortalLink: "#",
                  offices: [
                    { city: "London", address: "22 Bruton St\nLondon W1J 6QE" },
                    { city: "New York", address: "432 Park Avenue\nNew York, NY 10022" }
                  ],
                  contactLinks: [
                    { icon: "mail", label: "Email", value: "concierge@apexestates.com", href: "mailto:concierge@apexestates.com" },
                    { icon: "globe", label: "Phone", value: "+1 (800) LUX-PORT", href: "tel:+18005897678" },
                    { icon: "share", label: "Hours", value: "Mon - Fri: 9 AM - 6 PM", href: "#" }
                  ],
                  trustedByText: "Trusted by discerning clients worldwide",
                  companies: [
                    { name: "SOTHEBY'S" },
                    { name: "CHRISTIE'S" },
                    { name: "KNIGHT FRANK" }
                  ],
                  backgroundColor: "transparent",
                  textColor: "#000",
                  primaryColor: "#b0903e",
                  secondaryColor: "#59184C",
                  paddingY: "0",
                  cardPadding: "28",
                  cardRadius: "16",
                  gridGap: "32"
                }
              }
            ]
          },
          // Right — Form (white card with gold top accent)
          {
            id: "contact-form-col",
            width: "calc(58.33% - 32px)",
            props: {
              "@media (max-width: 1024px)": { width: "100%" }
            },
            elements: [
              {
                id: "contact-form",
                type: "ContactForm",
                props: {
                  badgeText: "Private Inquiry",
                  title: "Executive Inquiry.",
                  description: "Submit your criteria and a senior advisor will prepare a tailored market report within 48 hours.",
                  submitText: "Begin Consultation",
                  firstNameLabel: "First Name",
                  firstNamePlaceholder: "Your first name",
                  lastNameLabel: "Last Name",
                  lastNamePlaceholder: "Your last name",
                  emailLabel: "Email",
                  emailPlaceholder: "your@email.com",
                  subjectLabel: "Interest Area",
                  subjectOptions: "Residential Estates,Waterfront Properties,Commercial Investment,Portfolio Management,Exit Planning",
                  messageLabel: "Message",
                  messagePlaceholder: "Tell us about your investment goals...",
                  backgroundColor: "var(--theme-background)",
                  textColor: "#59184C",
                  primaryColor: "#59184C",
                  secondaryColor: "#b0903e",
                  accentColor: "#b0903e",
                  inputBackgroundColor: "#f7f7f7",
                  inputBorderColor: "#e5e5e5",
                  inputTextColor: "var(--theme-text)",
                  inputPlaceholderColor: "var(--theme-border)"
                }
              }
            ]
          }
        ]
      }
    },
  ],

  // ============================================================================
  // FOOTER (shared from home)
  // ============================================================================
  footer: realEstateHome.footer
};

module.exports = realEstateContact;
