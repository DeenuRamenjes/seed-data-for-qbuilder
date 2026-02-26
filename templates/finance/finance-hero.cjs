/**
 * Finance Template - Home Page
 * Theme: Premium Wealth Management
 * Source: User Provided HTML
 */

const financeHero = {
  header: {
    key: "finance-header",
    name: "Finance Header",
    structure: {
      type: "Navbar",
      defaultProps: {
        sticky: true,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        paddingY: 0,
        fontFamily: "Inter",
        paddingX: 0,
        showBorder: true,
        borderColor: "#f1f5f9",
        height: "80px",
        className: "dark:bg-[#0f2320]/80 dark:border-slate-800"
      },
      props: {
        logo: {
            text: "Finance.",
            icon: "account_balance",
            logoColor: "#0f172a", 
            iconColor: "#009e89", // User primary
            fontWeight: "extrabold",
            letterSpacing: "tighter",
            className: "uppercase text-xl dark:text-white"
        },
        links: [
            { label: "Wealth", href: "#", className: "text-sm font-semibold hover:text-[#009e89] transition-colors" },
            { label: "Planning", href: "#", className: "text-sm font-semibold hover:text-[#009e89] transition-colors" },
            { label: "Investing", href: "#", className: "text-sm font-semibold hover:text-[#009e89] transition-colors" },
            { label: "Insights", href: "#", className: "text-sm font-semibold hover:text-[#009e89] transition-colors" }
        ],
        ctaButton: {
            text: "Contact Advisor",
            href: "#",
            variant: "primary",
            backgroundColor: "#009e89",
            textColor: "#ffffff",
            borderRadius: "lg",
            height: "45px",
            className: "px-6 text-sm font-bold hover:brightness-110 transition-all rounded-lg"
        },
        // Adding custom element for Profile Image if Navbar supports 'extraElements' or similar, 
        // otherwise it stays as just button. Standard Navbar renderer might not support arbitrary extra slots easily.
        // We'll trust the standard Navbar for now, or use 'extraActions' if available. 
        // Given "Composition", we stick to Navbar props.
      }
    }
  },
  sections: [
    // --------------------------------------------------------------------------
    // HERO SECTION
    // --------------------------------------------------------------------------
    {
            key: "swiftlogix-ops-hero",
            name: "Operations Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    fullWidth: true,
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
                                backgroundImage: "https://www.m1xchange.com/thought-xchange/wp-content/uploads/2023/09/shutterstock_2139780347-scaled.jpg",
                                backgroundOverlay: "rgba(0,0,0,0.5)",
                                minHeight: "85vh",
                                badgeText: "Live Operations",
                                badgeColor: "#FFFFFF",
                                badgeBackgroundColor: "rgba(255,255,255,0.1)",
                                badgeShowPing: true,
                                badgePingColor: "#009e89",
                                headlineText: "Finance Pro",
                                headlineColor: "#FFFFFF",
                                headlineTag: "h2",
                                paragraphText: "Precision-engineered logistics solutions. We manage the world's most sophisticated transport networks with real-time intelligence and a zero-latency mindset.",
                                paragraphColor: "#d4d4d8",
                                paragraphSize: "xl",
                                statusItems: [
                                    { text: "98.4% Active", subtext: "Fleet Status", color: "#FFFFFF", subtextColor: "#71717a", size: "lg", fontWeight: "700" }
                                ]
                            }
                        }
                    ]
                }]
            }
        },
    
    // --------------------------------------------------------------------------
    // CORE SERVICES
    // --------------------------------------------------------------------------
    {
            key: "design-studio-featured-section",
            name: "Featured Project",
            description: "Two-column layout with image and project details",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "design-featured-col",
                    width: "100%",
                    elements: [{
                        id: "design-featured-element",
                        type: "DesignStudioFeaturedProject",
                        props: {
                            label: "Featured Project",
                            title: "THE CHRONOS PROJECT",
                            description: "A revolutionary approach to time management and productivity for the modern digital nomad.As global markets adjust to new regulatory frameworks, the role of data becomes paramount. Fintech firms are uniquely positioned to bridge the gap between traditional asset management and the granular requirements of ESG reporting. By leveraging blockchain for supply chain transparency and Al for predictive carbon modeling, these entities are defining the next era of value.",
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE31ZjJg750eZ_TuymJ5T_of55cBteBvRRx1pnVOPN9A8_-vfU3DFi2dfMSzXrkKQAcf8y8RJcRUx18Eu5JMgEBC-0Z8cD0h-0ifWaqQcjIfri5u5zQt-42ytuVyUWahVoaQfr_MkrGsY1HHTDHbuvcBRxT1c7enxBiIaZ90vDVmLxRfVJnr2Ip3VIPcQekNqHgQpegp_A16Yob9P26pIVNWBZzNuVNr3XtjSJYeBveM-MQI6mBQnA3CwgN6m2JWcmEKVl3_jekCo",
                            primaryColor: "#009e89"
                        }
                    }]
                }]
            }
        },
    // --------------------------------------------------------------------------
    // MARKET INSIGHTS
    // --------------------------------------------------------------------------
    {
            key: "design-studio-concept-section",
            name: "Concept",
            description: "Two-column layout with headline, description, and stats",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-concept-col",
                    width: "100%",
                    elements: [{
                        id: "ds-concept-element",
                        type: "DesignStudioConcept",
                        props: {
                            sectionTitle: "Concept",
                            headline: "Redefining the healthcare interface through",
                            headlineHighlight: "extreme legibility",
                            description: "The challenge was to take a complex medical ecosystem and distill it into a user experience that felt both authoritative and accessible. We moved away from the soft blue gradients typical of the industry towards a high-contrast, Swiss-inspired aesthetic that prioritizes data hierarchy and accessibility.",
                            primaryColor: "#009e89"
                        }
                    }]
                }]
            }
        },
    // --------------------------------------------------------------------------
    // CTA SECTION
    // --------------------------------------------------------------------------
    {
            key: "design-studio-project-cta-section",
            name: "Project CTA",
            description: "Dark box with decorative circle and dual CTAs",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                    justifyContent: "center",
                    alignItems: "center",
                    align: "center"
                },
                columns: [{
                    id: "ds-project-cta-col",
                    width: "100%",
                    elements: [{
                        id: "ds-project-cta-element",
                        type: "DesignStudioProjectCTA",
                        props: {
                            title: "Ready to Start",
                            titleHighlight: "A Project?",
                            description: "Whether you have a fully formed brief or just the spark of an idea, our team is ready to help you build something extraordinary.",
                            primaryButtonText: "Get Started",
                            primaryButtonLink: "#contact",
                            secondaryButtonText: "View Pricing",
                            secondaryButtonLink: "#pricing",
                            primaryColor: "#009e89",
                            color: "#ffffff"
                        }
                    }]
                }]
            }
        }
  ],
  footer: {
        key: "tech-footer",
        type: "Footer",
        category: "footer",
        name: "Tech Company Footer",
        description: "Tech company footer with links and company information",
        structure: {    
            type: "Footer",
            defaultProps: {
                backgroundColor: "#ffffff",
                paddingY: 80,
                paddingX: 80,
                fullWidth: true
            },
            columns: [
                {
                    id: "footer-brand",
                    width: "50%",
                    elements: [
                        {
                            id: "footer-logo",
                            type: "Heading",
                            props: {
                                text: "FinPro",
                                tag: "h4",
                                color: "#009e89",
                                marginBottom: "24px"
                            }
                        },
                        {
                            id: "footer-desc",
                            type: "Paragraph",
                            props: {
                                text: "Digital solutions for the modern enterprise. We engineer cutting-edge technology to transform your business and secure your digital future.",
                                color: "#000000",
                                maxWidth: "400px",
                                marginBottom: "32px"
                            }
                        },
                        {
                            id: "footer-social",
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "linkedin", url: "#" },
                                    { platform: "twitter", url: "#" },
                                    { platform: "github", url: "#" }
                                ],
                                iconColor: "#009e89",
                                size: "md"
                            }
                        }
                    ]
                },
                {
                    id: "footer-solutions",
                    width: "25%",
                    elements: [
                        {
                            id: "links-solutions",
                            type: "LinkList",
                            props: {
                                title: "Solutions",
                                titleColor: "#009e89",
                                textColor: "#000000",
                                hoverColor: "#009e89",
                                items: [
                                    { label: "Cloud Migration", href: "#" },
                                    { label: "Cybersecurity", href: "#" },
                                    { label: "Managed IT", href: "#" },
                                    { label: "Data Analytics", href: "#" }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: "footer-company",
                    width: "25%",
                    elements: [
                        {
                            id: "links-company",
                            type: "LinkList",
                            props: {
                                title: "Company",
                                titleColor: "#009e89",
                                textColor: "#000000",
                                hoverColor: "#009e89",
                                items: [
                                    { label: "About Us", href: "#" },
                                    { label: "Careers", href: "#" },
                                    { label: "Privacy Policy", href: "#" },
                                    { label: "Contact Us", href: "#" }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = financeHero;
