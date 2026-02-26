/**
 * TechNova Template - Tech Innovation Company
 * Theme: Red/Dark accent with modern tech aesthetic
 * Industry: Tech/Innovation Companies
 * Color Scheme: 
 *   - Primary: #ec1313 (Red)
 *   - Background: #f8f6f6 (Light)
 *   - BackgroundDark: #221010 (Dark)
 *   - Deep Gray: #1b0d0d
 *   - Accent Red: #9a4c4c
 */

const techInnovationTemplate = {
  // ============================================================================
  // HEADER - Global Header with Navbar
  // ============================================================================
  header: {
    key: "tech-innovation-header",
    type: "Navbar",
    category: "header",
    name: "TechNova Header",
    description: "Sticky header with navigation and mega menu",
    structure: {
      type: "Header",
      defaultProps: {
        sticky: true,
        backgroundColor: "#f8f6f6",
        paddingY: 16,
      },
      columns: [{
        id: "tech-header-col",
        width: "100%",
        elements: [{
          id: "tech-header-element",
          type: "Navbar",
          props: {
            logoType: "text",
            logoText: "Tech",
            logoAccent: "Nova",
            logoTextColor: "#1b0d0d",
            backgroundColor: "#f8f6f6",
            accentColor: "#ec1313",
            sticky: true,
            glassmorphism: true,
            showButton: true,
            buttonText: "Get Started",
            buttonLink: "#contact",
            buttonStyle: "solid",
            buttonSize: "md",
            linkColor: "#1b0d0d",
            linkHoverColor: "#ec1313",
            megaMenuTextColor: "#1b0d0d",
            megaMenuHeadingColor: "#ec1313",
            links: [
              {
                label: "Solutions",
                href: "#",
                isMegaMenu: true,
                megaMenuItems: [
                  {
                    title: "Enterprise Solutions",
                    items: [
                      { label: "Cloud Infrastructure", href: "#" },
                      { label: "AI & ML Ops", href: "#" },
                      { label: "Cybersecurity", href: "#" }
                    ]
                  },
                  {
                    title: "By Industry",
                    items: [
                      { label: "Healthcare Tech", href: "#" },
                      { label: "Financial Services", href: "#" },
                      { label: "E-commerce", href: "#" }
                    ]
                  }
                ]
              },
              {
                label: "Innovation Hub",
                href: "#"
              },
              {
                label: "Company",
                href: "#",
                isMegaMenu: true,
                megaMenuItems: [
                  {
                    title: "About",
                    items: [
                      { label: "Our Vision", href: "#" },
                      { label: "Global Presence", href: "#" },
                      { label: "Case Studies", href: "#" }
                    ]
                  },
                  {
                    title: "Resources",
                    items: [
                      { label: "Blog", href: "#" },
                      { label: "Documentation", href: "#" },
                      { label: "Support", href: "#" }
                    ]
                  }
                ]
              },
              {
                label: "Pricing",
                href: "#"
              }
            ]
          }
        }]
      }]
    }
  },

  // ============================================================================
  // FOOTER - Global Footer
  // ============================================================================
  footer: {
    key: "tech-innovation-footer",
    type: "TechInnovationFooter",
    category: "footer",
    name: "TechNova Footer",
    description: "Footer with branding, links, and social media",
    structure: {
      type: "Footer",
      defaultProps: {
        backgroundColor: "#221010",
        paddingY: 0,
        paddingX: 0,
        fullWidth: true,
      },
      columns: [{
        id: "tech-footer-col",
        width: "100%",
        elements: [{
          id: "tech-footer-element",
          type: "TechInnovationFooter",
          props: {
            logoText: "TechNova",
            tagline: "Next-generation innovation for world-class enterprises. Built on precision, speed, and security.",
            sections: [
              {
                title: "Solutions",
                links: [
                  { label: "Enterprise Cloud", href: "#" },
                  { label: "AI & ML Ops", href: "#" },
                  { label: "Cybersecurity Hub", href: "#" },
                  { label: "Edge Computing", href: "#" }
                ]
              },
              {
                title: "Company",
                links: [
                  { label: "Our Vision", href: "#" },
                  { label: "Global Presence", href: "#" },
                  { label: "Careers", href: "#" },
                  { label: "Press Room", href: "#" }
                ]
              }
            ],
            socialLinks: [
              { icon: "Globe", href: "#" },
              { icon: "Share2", href: "#" },
              { icon: "Mail", href: "#" }
            ],
            copyright: "© 2024 TechNova Solutions. All rights reserved.",
            footerLinks: [
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Cookie Settings", href: "#" }
            ]
          }
        }]
      }]
    }
  },

  // ============================================================================
  // PAGE CONTENT BLOCKS
  // ============================================================================
  structure: {
    id: "tech-innovation-home",
    type: "Page",
    title: "TechNova Home",
    description: "Complete TechNova tech innovation company homepage",
    blocks: [
      // HERO
      {
        id: "tech-hero-section",
        type: "Section",
        defaultProps: {
          backgroundColor: "#f8f6f6",
          paddingY: 0,
          paddingX: 0,
          fullWidth: true,
        },
        columns: [{
          id: "tech-hero-col",
          width: "100%",
          elements: [{
            id: "tech-hero",
            type: "TechInnovationHero",
            props: {
              badge: "Now Live: TechNova 2.0",
              mainTitle: "Scaling Innovation with TechNova",
              mainTitleHighlight: "Innovation",
              description: "Precision Engineering for the Modern Enterprise. We provide cutting-edge infrastructure solutions to scale your digital ecosystem with reliability, security, and velocity.",
              primaryButtonText: "Get Started",
              primaryColor: "#ffffffff",
              primaryButtonLink: "#contact",
              secondaryButtonText: "Learn More",
              secondaryButtonLink: "#about",
              heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0"
            }
          }]
        }]
      },

      // SECTOR HEALTHCARE
      {
        id: "tech-sector-healthcare-section",
        type: "Section",
        defaultProps: {
          backgroundColor: "#f8f6f6",
          paddingY: 0,
          paddingX: 0,
          fullWidth: true,
        },
        columns: [{
          id: "tech-sector-healthcare-col",
          width: "100%",
          elements: [{
            id: "tech-sector-healthcare",
            type: "TechInnovationSector",
            props: {
              sectorNumber: "02",
              sectorName: "Healthcare",
              title: "Precision",
              titleHighlight: "Medical Tech",
              description: "Revolutionizing patient care through advanced diagnostic systems and secure health data infrastructure serving leading medical institutions globally.",
              testimonial: "TechNova's diagnostic platform improved our detection accuracy by 67%, transforming patient outcomes across our network.",
              testimonialAuthor: "Chief Medical Officer, Premier Health Systems",
              buttonText: "Explore Healthcare Solutions",
              backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzI6IwZAMpVErnI6PczyQu-kQSJG8Dy06seN3-sImuVpqpZtFSZEyg3eA-qdhpr_yAzqJLuwvFO5qBOsUW003jci76NCAHDjh8BpW2gMCD_LtHbIZTrhZp1Ku3isG3QuUWkY4aZ-Qsu2IWWWvHLee2qg2A7veopSCHYkpbQRsdULQ3Nc3mDfMao6F9VoXRWzXQ3OqvJwfl4JY77jzcwSS1kiBnDGx8DLguqFzE2k2PAo93mybMBKagVRdulMz5cIK1-s8V6VRtsw",
              interfaceTags: [
                { label: "BIOMETRIC DATA PIPELINE", top: "33%", right: "25%" },
                { label: "AI DIAGNOSTICS ENGINE", bottom: "25%", left: "25%" }
              ],
              floatingStats: {
                stat: "1.4PB",
                label: "Secure Data Processed Daily",
                description: "Real-time analytics with end-to-end encryption across healthcare networks."
              }
            }
          }]
        }]
      },

      // STATS
      {
        id: "tech-stats-section",
        type: "Section",
        defaultProps: {
          backgroundColor: "#221010",
          paddingY: 0,
          paddingX: 0,
          fullWidth: true,
        },
        columns: [{
          id: "tech-stats-col",
          width: "100%",
          elements: [{
            id: "tech-stats",
            type: "TechInnovationStats",
            props: {
              stats: [
                { label: "Active Clients", value: "500+" },
                { label: "Projects Delivered", value: "1.2k" },
                { label: "Global Offices", value: "15" },
                { label: "Expert Engineers", value: "300+" }
              ]
            }
          }]
        }]
      },

      // FEATURES
      {
        id: "tech-features-section",
        type: "Section",
        defaultProps: {
          backgroundColor: "#ffffff",
          paddingY: 0,
          paddingX: 0,
          fullWidth: true,
        },
        columns: [{
          id: "tech-features-col",
          width: "100%",
          elements: [{
            id: "tech-features",
            type: "TechInnovationFeatures",
            props: {
              sectionLabel: "PRECISION TECH SOLUTIONS",
              title: "Precision Tech",
              titleHighlight: "Solutions",
              description: "Driving digital transformation through expert engineering and strategic innovation designed for the next generation of global industry.",
              features: [
                {
                  icon: "cloud",
                  title: "Cloud Infrastructure",
                  description: "Scalable cloud environments built for high-performance enterprise workloads and 99.9% uptime.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzI6IwZAMpVErnI6PczyQu-kQSJG8Dy06seN3-sImuVpqpZtFSZEyg3eA-qdhpr_yAzqJLuwvFO5qBOsUW003jci76NCAHDjh8BpW2gMCD_LtHbIZTrhZp1Ku3isG3QuUWkY4aZ-Qsu2IWWWvHLee2qg2A7veopSCHYkpbQRsdULQ3Nc3mDfMao6F9VoXRWzXQ3OqvJwfl4JY77jzcwSS1kiBnDGx8DLguqFzE2k2PAo93mybMBKagVRdulMz5cIK1-s8V6VRtsw"
                },
                {
                  icon: "psychology",
                  title: "AI Automation",
                  description: "Intelligent workflows designed to minimize manual overhead and maximize operational intelligence.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC87tF5p7seTXhumKhugNHt9quyH8suL6XYmaSj1j2PAivH8Dzwh6padIJKEMRPeZoqXnYs20TYXti0Rikn-SjG_JgZg4oFf9aBVCzwImdeQOv3K543xm6mS392Vm5SiNpPEGz4PmB2yrofJ_eoZz7FxqG7cRFJM1qf3nix7CgRfTp5Fd7cWKuMvhyXdD6mwR3tcGFcntK_CKAGICuUKSYKa2PywzsfuljalaZ3r39kRWY6d7xCCONIuaWbis6QSsle4LEXDBk75Ds"
                },
                {
                  icon: "security",
                  title: "Cybersecurity",
                  description: "Robust security frameworks to protect your most valuable assets with zero-trust architecture.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdO7P43yS8XA4s4jREoxgl5z1cGN44F5wn6RVi_RKhLuEibjHVeeKQNcUsAQlvh1E_IWRtrYkOmc_G_-oT35pa2I_4yVppSQvgkdsue7pX14jKsKTJLzn4xp-T-mVk5y_2qk48vjoy5537CneKRgdm-4H4mSaruh8aYhaRc21KksjIOfiaHWfiJRDd-MVBe9A3Ic16RdJNyhSyCtUOeEtltGtNRUuvwjxWd-BHZpf3qDJ5mAZ-AwrP_Yf4l0oQbcL0A-TISBZOiyA"
                }
              ]
            }
          }]
        }]
      },

      // OFFERINGS
      {
        id: "tech-offerings-section",
        type: "Section",
        defaultProps: {
          backgroundColor: "#f8f6f6",
          paddingY: 0,
          paddingX: 0,
          fullWidth: true,
        },
        columns: [{
          id: "tech-offerings-col",
          width: "100%",
          elements: [{
            id: "tech-offerings",
            type: "TechInnovationOfferings",
            props: {
              sectionLabel: "Our Core Offerings",
              title: "Enterprise-grade capabilities for scaling businesses",
              description: "Strategic technology solutions designed by industry experts to drive efficiency, security, and exponential growth.",
              offerings: [
                {
                  icon: "terminal",
                  title: "Custom Software",
                  description: "Bespoke enterprise applications tailored to your unique operational requirements and market goals.",
                  features: [
                    "Full-stack Development",
                    "Legacy System Migration",
                    "UI/UX Design Systems",
                    "Microservices Architecture"
                  ]
                },
                {
                  icon: "cloud_queue",
                  title: "Cloud Infrastructure",
                  description: "Robust, secure, and highly available cloud environments that scale seamlessly with your growing demands.",
                  features: [
                    "Multi-cloud Strategy",
                    "Serverless Optimization",
                    "DevOps & CI/CD",
                    "24/7 Managed Security"
                  ]
                },
                {
                  icon: "psychology",
                  title: "Artificial Intelligence",
                  description: "Transformative machine learning models and predictive analytics to unlock value from your data.",
                  features: [
                    "Predictive Analytics",
                    "Natural Language Processing",
                    "Automated Workflows",
                    "AI Governance & Ethics"
                  ]
                }
              ]
            }
          }]
        }]
      },

      // CTA
      {
        id: "tech-cta-section",
        type: "Section",
        defaultProps: {
          backgroundColor: "#ec1313",
          color: "#ffffff",
          paddingY: 0,
          paddingX: 0,
          fullWidth: true,
        },
        columns: [{
          id: "tech-cta-col",
          width: "100%",
          elements: [{
            id: "tech-cta",
            type: "TechInnovationCTA",
            props: {
              title: "Ready to redefine your digital horizon?",
              primaryButtonText: "Launch Project",
              primaryButtonLink: "#contact",
              secondaryButtonText: "View Case Studies",
              secondaryButtonLink: "#case-studies"
            }
          }]
        }]
      }
    ]
  }
};

module.exports = { techInnovationTemplate };
