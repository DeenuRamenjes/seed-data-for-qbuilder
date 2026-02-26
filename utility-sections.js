/**
 * Utility Sections Seed Data - Professional Edition
 * Enhanced with more content, better UI, and comprehensive examples
 */

export const utilitySections = [
    {
        key: "faq-comprehensive",
        type: "FAQ",
        category: "utility",
        name: "FAQ Section",
        description: "Comprehensive FAQ with multiple categories",
        structure: {
            columns: [
                {
                    id: "faq-col-header",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", padding: "80px 40px", backgroundColor: "#f8fafc" },
                    elements: [
                        { id: "faq-title", type: "Heading", props: { text: "Frequently Asked Questions", tag: "h1", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700", fontSize: "36px" } },
                        { id: "faq-subtitle", type: "Paragraph", props: { text: "Everything you need to know about our product and services", align: "center", color: "var(--theme-secondary-text, #6b7280)", size: "lg" } }
                    ]
                },
                {
                    id: "faq-col-content",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#ffffff" },
                    elements: [
                        {
                            id: "faq-section-general",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 1, tablet: 1, mobile: 1 }, gap: 16 },
                                elements: [
                                    { id: "faq-cat-heading", type: "Heading", props: { text: "General Questions", tag: "h3", align: "left", color: "var(--theme-primary, #dc2626)", fontWeight: "600", fontSize: "20px" } },
                                    { id: "faq-1", type: "FAQ", props: { question: "What is your product and how does it work?", answer: "Our platform is a comprehensive solution designed to streamline your workflow and increase productivity. It combines cutting-edge technology with an intuitive interface, allowing teams to collaborate seamlessly and achieve their goals faster than ever before.", bgColor: "#ffffff", accentColor: "var(--theme-primary, #dc2626)", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "faq-2", type: "FAQ", props: { question: "What are the main features included?", answer: "Our platform includes: real-time collaboration tools, advanced analytics dashboard, automated workflows, secure cloud storage, API integrations, custom reports, and 24/7 customer support. All features are included in your plan.", bgColor: "#ffffff", accentColor: "var(--theme-primary, #dc2626)", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "faq-3", type: "FAQ", props: { question: "How do I get started?", answer: "Getting started is simple: 1) Create your free account, 2) Complete the quick setup wizard, 3) Invite your team members, 4) Start collaborating. Our onboarding team can also provide personalized guidance if needed.", bgColor: "#ffffff", accentColor: "var(--theme-primary, #dc2626)", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "accordion-detailed",
        type: "Accordion",
        category: "utility",
        name: "Accordion Section",
        description: "Detailed accordion with organized content",
        structure: {
            columns: [
                {
                    id: "accordion-col-header",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", padding: "80px 40px", backgroundColor: "#faf5ff" },
                    elements: [
                        { id: "accordion-title", type: "Heading", props: { text: "How It Works", tag: "h1", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700", fontSize: "36px" } },
                        { id: "accordion-subtitle", type: "Paragraph", props: { text: "Explore our step-by-step process and key features", align: "center", color: "var(--theme-secondary-text, #6b7280)", size: "lg" } }
                    ]
                },
                {
                    id: "accordion-col-content",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#ffffff" },
                    elements: [
                        {
                            id: "accordion-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 1, tablet: 1, mobile: 1 }, gap: 16 },
                                elements: [
                                    { id: "acc-1", type: "Accordion", props: { title: "📋 Setup & Configuration", content: "Our setup process is designed to get you productive in minutes. Configure your workspace settings, customize your dashboard, set up team permissions, and integrate with your favorite tools - all in one place.", bgColor: "#f9fafb", accentColor: "#a855f7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "acc-2", type: "Accordion", props: { title: "👥 Team Collaboration", content: "Work seamlessly with your team using real-time collaboration features. Share files, create tasks, assign responsibilities, leave comments, and communicate all in one unified platform.", bgColor: "#f9fafb", accentColor: "#a855f7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "acc-3", type: "Accordion", props: { title: "📊 Analytics & Reporting", content: "Gain insights into your team's performance with comprehensive analytics and custom reports. Track progress, identify bottlenecks, and make data-driven decisions with our advanced reporting tools.", bgColor: "#f9fafb", accentColor: "#a855f7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "acc-4", type: "Accordion", props: { title: "🔒 Security & Compliance", content: "Your data is protected with enterprise-grade security. We comply with GDPR, SOC 2, and ISO 27001 standards. All data is encrypted in transit and at rest with regular security audits.", bgColor: "#f9fafb", accentColor: "#a855f7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "tabs-detailed",
        type: "Tabs",
        category: "utility",
        name: "Tabs Section",
        description: "Multi-tab content with comprehensive information",
        structure: {
            columns: [
                {
                    id: "tabs-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#f9fafb" },
                    elements: [
                        { id: "tabs-header", type: "Heading", props: { text: "Pricing Plans", tag: "h2", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700", fontSize: "32px" } },
                        { id: "tabs-subtitle", type: "Paragraph", props: { text: "Choose the perfect plan for your needs", align: "center", color: "var(--theme-secondary-text, #6b7280)", size: "base" } },
                        { id: "tabs-spacer", type: "Spacer", props: { height: "lg" } },
                        {
                            id: "tabs-component",
                            type: "Tabs",
                            props: {
                                tabs: [
                                    { label: "Starter", content: "Perfect for individuals and small projects. Includes 5GB storage, basic analytics, and email support. $29/month or $290/year (save 17%)." },
                                    { label: "Professional", content: "Ideal for growing teams. Includes 500GB storage, advanced analytics, priority support, team collaboration, and integrations. $99/month or $990/year (save 17%)." },
                                    { label: "Enterprise", content: "For large organizations. Includes unlimited storage, custom analytics, dedicated account manager, SSO, advanced security, and SLA. Custom pricing based on your needs." },
                                    { label: "Comparison", content: "See detailed feature comparison: Starter has basic features, Professional includes everything plus advanced tools, Enterprise has all features with premium support and customization." }
                                ],
                                bgColor: "#ffffff",
                                accentColor: "#dc2626",
                                textColor: "var(--theme-text, #1f2937)",
                                secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "timeline-detailed",
        type: "Timeline",
        category: "utility",
        name: "Timeline Section",
        description: "Company journey timeline",
        structure: {
            columns: [
                {
                    id: "timeline-col-header",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", padding: "80px 40px", backgroundColor: "#f0f9ff" },
                    elements: [
                        { id: "timeline-title", type: "Heading", props: { text: "Our Journey", tag: "h1", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700", fontSize: "36px" } },
                        { id: "timeline-subtitle", type: "Paragraph", props: { text: "From startup to industry leader - key milestones in our growth", align: "center", color: "var(--theme-secondary-text, #6b7280)", size: "lg" } }
                    ]
                },
                {
                    id: "timeline-col-content",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#ffffff" },
                    elements: [
                        {
                            id: "timeline-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 1, tablet: 1, mobile: 1 }, gap: 24 },
                                elements: [
                                    { id: "timeline-1", type: "Timeline", props: { title: "Company Founded", date: "January 2020", description: "Started with a bold vision to revolutionize how teams collaborate. Founded by 3 experienced entrepreneurs with 50+ years combined experience in tech.", icon: "🚀", bgColor: "#ffffff", accentColor: "#0284c7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "timeline-2", type: "Timeline", props: { title: "Beta Launch", date: "June 2020", description: "Launched beta version to 100 early adopters. Received positive feedback and refined product based on user input. Built initial community of advocates.", icon: "🎉", bgColor: "#ffffff", accentColor: "#0284c7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "timeline-3", type: "Timeline", props: { title: "Series A Funding", date: "March 2021", description: "Raised $5M Series A funding from top-tier venture capitalists. Used funds to expand team, accelerate product development, and enter new markets.", icon: "💰", bgColor: "#ffffff", accentColor: "#0284c7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "timeline-4", type: "Timeline", props: { title: "10,000 Customers", date: "September 2021", description: "Hit 10,000 active customers across 25 countries. Expanded support team and launched enterprise features. Recognition as G2 Leader.", icon: "🏆", bgColor: "#ffffff", accentColor: "#0284c7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "timeline-5", type: "Timeline", props: { title: "Global Expansion", date: "December 2022", description: "Opened offices in London, Singapore, and Sydney. Launched multi-language support for 15+ languages. Grew team to 150+ employees.", icon: "🌍", bgColor: "#ffffff", accentColor: "#0284c7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "roadmap-detailed",
        type: "Roadmap",
        category: "utility",
        name: "Roadmap Section",
        description: "Comprehensive product roadmap",
        structure: {
            columns: [
                {
                    id: "roadmap-col-header",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", padding: "80px 40px", backgroundColor: "#f0fdf4" },
                    elements: [
                        { id: "roadmap-title", type: "Heading", props: { text: "Product Roadmap 2026", tag: "h1", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700", fontSize: "36px" } },
                        { id: "roadmap-subtitle", type: "Paragraph", props: { text: "Exciting features and improvements coming this year", align: "center", color: "var(--theme-secondary-text, #6b7280)", size: "lg" } }
                    ]
                },
                {
                    id: "roadmap-col-content",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#ffffff" },
                    elements: [
                        {
                            id: "roadmap-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 2, tablet: 2, mobile: 1 }, gap: 24 },
                                elements: [
                                    { id: "roadmap-1", type: "Roadmap", props: { quarter: "Q1 2026", status: "In Progress", items: ["Performance Optimization (50% faster loading)", "Mobile App Beta Launch", "Advanced Search Filters", "Custom Report Builder"], bgColor: "#f0fdf4", accentColor: "#10b981", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "roadmap-2", type: "Roadmap", props: { quarter: "Q2 2026", status: "Planned", items: ["AI-Powered Insights", "Enhanced Mobile Experience", "Integration with 50+ Tools", "Advanced Security Features"], bgColor: "#f0fdf4", accentColor: "#10b981", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "roadmap-3", type: "Roadmap", props: { quarter: "Q3 2026", status: "Planned", items: ["Workflow Automation Engine", "Dark Mode Support", "Desktop Apps (Mac/Windows)", "API v2 Release"], bgColor: "#fef3c7", accentColor: "#f59e0b", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "roadmap-4", type: "Roadmap", props: { quarter: "Q4 2026", status: "Planned", items: ["Enterprise Governance Tools", "Advanced Compliance Reports", "Multi-Region Deployment", "White-Label Solution"], bgColor: "#fef3c7", accentColor: "#f59e0b", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "comparison-matrix-full",
        type: "ComparisonMatrix",
        category: "utility",
        name: "Comparison Matrix",
        description: "Detailed feature comparison table",
        structure: {
            columns: [
                {
                    id: "comparison-col-header",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", padding: "80px 40px", backgroundColor: "#faf5ff" },
                    elements: [
                        { id: "comparison-title", type: "Heading", props: { text: "Compare Our Plans", tag: "h1", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700", fontSize: "36px" } },
                        { id: "comparison-subtitle", type: "Paragraph", props: { text: "Choose the plan that best fits your needs", align: "center", color: "var(--theme-secondary-text, #6b7280)", size: "lg" } }
                    ]
                },
                {
                    id: "comparison-col-content",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#ffffff" },
                    elements: [
                        {
                            id: "comparison-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 1, tablet: 1, mobile: 1 }, gap: 12 },
                                elements: [
                                    { id: "comp-header", type: "Heading", props: { text: "Core Features", tag: "h3", align: "left", color: "var(--theme-primary, #dc2626)", fontWeight: "600" } },
                                    { id: "comp-1", type: "ComparisonMatrix", props: { feature: "Users", basic: "1", pro: "Unlimited", enterprise: "Unlimited", bgColor: "#ffffff", accentColor: "#dc2626", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "comp-2", type: "ComparisonMatrix", props: { feature: "Storage", basic: "5GB", pro: "500GB", enterprise: "Unlimited", bgColor: "#f9fafb", accentColor: "#dc2626", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "comp-3", type: "ComparisonMatrix", props: { feature: "API Access", basic: "✗", pro: "✓", enterprise: "✓", bgColor: "#ffffff", accentColor: "#dc2626", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "comp-4", type: "ComparisonMatrix", props: { feature: "Custom Domain", basic: "✗", pro: "✓", enterprise: "✓", bgColor: "#f9fafb", accentColor: "#dc2626", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "comp-5", type: "ComparisonMatrix", props: { feature: "Priority Support", basic: "✗", pro: "Business Hours", enterprise: "24/7", bgColor: "#ffffff", accentColor: "#dc2626", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "comp-6", type: "ComparisonMatrix", props: { feature: "SSO/SAML", basic: "✗", pro: "✗", enterprise: "✓", bgColor: "#f9fafb", accentColor: "#dc2626", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "stats-comprehensive",
        type: "Stats",
        category: "utility",
        name: "Stats Section",
        description: "Key metrics and statistics display",
        structure: {
            columns: [
                {
                    id: "stats-col-header",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", padding: "80px 40px", backgroundColor: "#ffffff" },
                    elements: [
                        { id: "stats-title", type: "Heading", props: { text: "By The Numbers", tag: "h1", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700", fontSize: "36px" } },
                        { id: "stats-subtitle", type: "Paragraph", props: { text: "Trusted by leading organizations worldwide", align: "center", color: "var(--theme-secondary-text, #6b7280)", size: "lg" } }
                    ]
                },
                {
                    id: "stats-col-content",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#f8fafc" },
                    elements: [
                        {
                            id: "stats-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 4, tablet: 2, mobile: 2 }, gap: 24 },
                                elements: [
                                    { id: "stat-1", type: "Stats", props: { number: "50K+", label: "Active Users", icon: "👥", bgColor: "#f0fdf4", accentColor: "#10b981", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "stat-2", type: "Stats", props: { number: "99.9%", label: "Uptime Guarantee", icon: "⚡", bgColor: "#eff6ff", accentColor: "#3b82f6", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "stat-3", type: "Stats", props: { number: "24/7", label: "Customer Support", icon: "🎧", bgColor: "#fef3c7", accentColor: "#f59e0b", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "stat-4", type: "Stats", props: { number: "180+", label: "Countries Served", icon: "🌍", bgColor: "#f3e8ff", accentColor: "#a855f7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "progress-bars-full",
        type: "ProgressBar",
        category: "utility",
        name: "Progress Bars Section",
        description: "Skill showcase with progress indicators",
        structure: {
            columns: [
                {
                    id: "progress-col-header",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", padding: "80px 40px", backgroundColor: "#f9fafb" },
                    elements: [
                        { id: "progress-title", type: "Heading", props: { text: "Our Expertise", tag: "h1", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700", fontSize: "36px" } },
                        { id: "progress-subtitle", type: "Paragraph", props: { text: "Proven expertise across key technology areas", align: "center", color: "var(--theme-secondary-text, #6b7280)", size: "lg" } }
                    ]
                },
                {
                    id: "progress-col-content",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#ffffff" },
                    elements: [
                        {
                            id: "progress-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 2, tablet: 1, mobile: 1 }, gap: 40 },
                                elements: [
                                    { id: "progress-1", type: "ProgressBar", props: { label: "React & TypeScript", percentage: 95, bgColor: "#f9fafb", accentColor: "#3b82f6", textColor: "var(--theme-text, #1f2937)" } },
                                    { id: "progress-2", type: "ProgressBar", props: { label: "Cloud Architecture", percentage: 90, bgColor: "#f9fafb", accentColor: "#10b981", textColor: "var(--theme-text, #1f2937)" } },
                                    { id: "progress-3", type: "ProgressBar", props: { label: "UI/UX Design", percentage: 88, bgColor: "#f9fafb", accentColor: "#f59e0b", textColor: "var(--theme-text, #1f2937)" } },
                                    { id: "progress-4", type: "ProgressBar", props: { label: "Database Design", percentage: 92, bgColor: "#f9fafb", accentColor: "#ec4899", textColor: "var(--theme-text, #1f2937)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "maps-multiple",
        type: "Maps",
        category: "utility",
        name: "Maps Section",
        description: "Multiple office locations",
        structure: {
            columns: [
                {
                    id: "maps-col-header",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", padding: "80px 40px", backgroundColor: "#ffffff" },
                    elements: [
                        { id: "maps-title", type: "Heading", props: { text: "Global Presence", tag: "h1", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700", fontSize: "36px" } },
                        { id: "maps-subtitle", type: "Paragraph", props: { text: "We have offices and partners around the world", align: "center", color: "var(--theme-secondary-text, #6b7280)", size: "lg" } }
                    ]
                },
                {
                    id: "maps-col-content",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#f8fafc" },
                    elements: [
                        {
                            id: "maps-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 3, tablet: 2, mobile: 1 }, gap: 24 },
                                elements: [
                                    { id: "maps-1", type: "Maps", props: { location: "San Francisco, USA", address: "456 Tech Avenue, San Francisco, CA 94105", bgColor: "#ffffff", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "maps-2", type: "Maps", props: { location: "London, UK", address: "123 Innovation Street, London, UK EC1A 1BB", bgColor: "#ffffff", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "maps-3", type: "Maps", props: { location: "Singapore", address: "789 Tech Hub, Singapore 018989", bgColor: "#ffffff", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "location-finder-standard",
        type: "LocationFinder",
        category: "utility",
        name: "Location Finder",
        description: "Store locator with multiple locations",
        structure: {
            columns: [
                {
                    id: "locator-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#ffffff" },
                    elements: [
                        { id: "locator-header", type: "Heading", props: { text: "Find a Location", tag: "h2", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700" } },
                        { id: "locator-spacer", type: "Spacer", props: { height: "lg" } },
                        {
                            id: "locator-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 3, tablet: 2, mobile: 1 }, gap: 16 },
                                elements: [
                                    { id: "loc-1", type: "LocationFinder", props: { city: "San Francisco", distance: "0.5 mi", status: "Open", bgColor: "#ffffff", accentColor: "#3b82f6", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "loc-2", type: "LocationFinder", props: { city: "New York", distance: "1.2 mi", status: "Open", bgColor: "#ffffff", accentColor: "#3b82f6", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "event-schedule-standard",
        type: "EventSchedule",
        category: "utility",
        name: "Event Schedule",
        description: "Upcoming events display",
        structure: {
            columns: [
                {
                    id: "events-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#f0f9ff" },
                    elements: [
                        { id: "events-header", type: "Heading", props: { text: "Upcoming Events", tag: "h2", align: "center", color: "var(--theme-text, #1f2937)", fontWeight: "700" } },
                        { id: "events-spacer", type: "Spacer", props: { height: "lg" } },
                        {
                            id: "events-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 2, tablet: 1, mobile: 1 }, gap: 16 },
                                elements: [
                                    { id: "event-1", type: "EventSchedule", props: { eventName: "Product Demo", date: "Feb 15, 2026", time: "2:00 PM", location: "Virtual", bgColor: "#f0f9ff", accentColor: "#0284c7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "event-2", type: "EventSchedule", props: { eventName: "Training Session", date: "Feb 22, 2026", time: "10:00 AM", location: "Online", bgColor: "#f0f9ff", accentColor: "#0284c7", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "calendar-standard",
        type: "Calendar",
        category: "utility",
        name: "Calendar",
        description: "Interactive calendar view",
        structure: {
            columns: [
                {
                    id: "calendar-col",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", padding: "60px 40px", backgroundColor: "#f9fafb" },
                    elements: [
                        { id: "calendar-component", type: "Calendar", props: { month: "February", year: "2026", bgColor: "#ffffff", accentColor: "#dc2626", textColor: "var(--theme-text, #1f2937)", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                    ]
                }
            ]
        }
    },

    {
        key: "announcement-multiple",
        type: "Announcement",
        category: "utility",
        name: "Announcement",
        description: "Multiple alert types",
        structure: {
            columns: [
                {
                    id: "announcement-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#f9fafb" },
                    elements: [
                        {
                            id: "announcement-grid",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 1, tablet: 1, mobile: 1 }, gap: 16 },
                                elements: [
                                    { id: "announcement-1", type: "Announcement", props: { title: "🎉 New Feature Released", message: "We've launched the new Dashboard 2.0 with improved performance and new visualization options. Check it out in your account.", type: "success", bgColor: "#ecfdf5", accentColor: "#10b981", textColor: "var(--theme-text, #1f2937)" } },
                                    { id: "announcement-2", type: "Announcement", props: { title: "ℹ️ Scheduled Maintenance", message: "We'll be performing system maintenance on Feb 15 from 2-4 AM UTC. Services will be temporarily unavailable during this time.", type: "info", bgColor: "#eff6ff", accentColor: "#0284c7", textColor: "var(--theme-text, #1f2937)" } },
                                    { id: "announcement-3", type: "Announcement", props: { title: "⚠️ API Rate Limit Changes", message: "Starting March 1, API rate limits will increase to 10,000 requests per hour. Update your integrations accordingly.", type: "warning", bgColor: "#fef3c7", accentColor: "#f59e0b", textColor: "var(--theme-text, #1f2937)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "maintenance-mode-detailed",
        type: "MaintenanceMode",
        category: "utility",
        name: "Maintenance Mode",
        description: "System maintenance notice",
        structure: {
            columns: [
                {
                    id: "maintenance-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#1f2937", minHeight: "100vh" },
                    elements: [
                        { id: "maintenance-component", type: "MaintenanceMode", props: { title: "Scheduled Maintenance", message: "We're upgrading our infrastructure to provide you with better performance and reliability. We apologize for any inconvenience and appreciate your patience.", estimatedTime: "2 hours", bgColor: "#1f2937", textColor: "#ffffff" } }
                    ]
                }
            ]
        }
    },

    {
        key: "coming-soon-detailed",
        type: "ComingSoon",
        category: "utility",
        name: "Coming Soon",
        description: "Coming soon landing page",
        structure: {
            columns: [
                {
                    id: "coming-soon-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "#ffffff", minHeight: "100vh" },
                    elements: [
                        { id: "coming-soon-component", type: "ComingSoon", props: { title: "Coming Soon", subtitle: "We're building something amazing! Get early access and be the first to know when we launch. Join 500+ people on our waitlist.", bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", textColor: "#ffffff", ctaText: "Join Waitlist", ctaLink: "#" } }
                    ]
                }
            ]
        }
    }
];

export default utilitySections;
