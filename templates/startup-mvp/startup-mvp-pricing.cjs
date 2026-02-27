/**
 * Startup MVP Template - Pricing & Contact Page (Redesigned)
 * Uses specialized renderers: PricingCards, Quote, PricingFAQ,
 * ContactForm, ContactDetails — all self-contained
 */

const startupMvpPricing = {
    sections: [
        // ==================================================================
        // PRICING HEADER — HeroGradient
        // ==================================================================
        {
            key: "smvp-pricing-hero",
            name: "Pricing Hero",
            description: "Dark hero with gradient badge and pricing title",
            structure: {
                id: "smvp-pricing-hero-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-pricing-hero-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-pricing-hero-gradient",
                        type: "HeroGradient",
                        props: {
                            badgeText: "PRICING",
                            title: "Simple, Transparent Pricing",
                            lead: "Choose the plan that fits your growth stage. No hidden fees, no surprises.",
                            accentColor: "#902EFF",
                            secondaryColor: "#FF2EA4",
                            backgroundColor: "#0a0a0a",
                            paddingTop: 80,
                            paddingBottom: 30
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // PRICING CARDS — PricingCards renderer (3 tiers, auto-grid)
        // ==================================================================
        {
            key: "smvp-pricing-cards",
            name: "Pricing Plans",
            description: "3-tier pricing cards with featured badge",
            structure: {
                id: "smvp-pricing-heading-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 40,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-pricing-heading-col", width: "100%", props: { padding: 8, textAlign: "center" },
                    elements: [
                        {
                            id: "smvp-pricing-badge",
                            type: "Heading",
                            props: {
                                text: "PRICING",
                                level: "h6",
                                color: "#902EFF",
                                fontSize: 13,
                                fontWeight: "700",
                                letterSpacing: 2,
                                align: "center",
                                marginBottom: 8
                            }
                        },
                        {
                            id: "smvp-pricing-title",
                            type: "Heading",
                            props: {
                                text: "Plans That Scale With You",
                                level: "h2",
                                color: "#111827",
                                fontSize: 36,
                                fontWeight: "800",
                                align: "center",
                                marginBottom: 8
                            }
                        },
                        {
                            id: "smvp-pricing-subtitle",
                            type: "Paragraph",
                            props: {
                                text: "Start free, upgrade when you're ready. No hidden fees, cancel anytime.",
                                color: "#6B7280",
                                fontSize: 17,
                                align: "center"
                            }
                        }
                    ]
                }]
            }
        },

        // ==================================================================
        // PRICING CARDS — PricingCards renderer (3 tiers, auto-grid)
        // ==================================================================
        {
            key: "smvp-pricing-cards",
            name: "Pricing Plans",
            description: "3-tier pricing cards with featured badge",
            structure: {
                id: "smvp-pricing-cards-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [
                    {
                    id: "smvp-pricing-cards-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-pricing-cards",
                        type: "PricingCards",
                        props: {
                            plans: [
                                {
                                    id: "starter",
                                    name: "Starter",
                                    description: "Perfect for individuals and side projects.",
                                    price: "$29",
                                    period: "/mo",
                                    featured: false,
                                    features: [
                                        "Up to 3 Projects",
                                        "Basic Analytics",
                                        "Community Support"
                                    ],
                                    ctaText: "Get Started",
                                    ctaLink: "#"
                                },
                                {
                                    id: "pro",
                                    name: "Pro",
                                    description: "Ideal for growing teams and startups.",
                                    price: "$79",
                                    period: "/mo",
                                    featured: true,
                                    badge: "Most Popular",
                                    features: [
                                        "Unlimited Projects",
                                        "Advanced Insights",
                                        "Priority Email Support",
                                        "Custom Integrations"
                                    ],
                                    ctaText: "Go Pro",
                                    ctaLink: "#"
                                },
                                {
                                    id: "enterprise",
                                    name: "Enterprise",
                                    description: "Custom solutions for large organizations.",
                                    price: "Custom",
                                    period: "",
                                    featured: false,
                                    features: [
                                        "Dedicated Account Manager",
                                        "SLA & Custom Security",
                                        "24/7 Phone Support"
                                    ],
                                    ctaText: "Contact Sales",
                                    ctaLink: "#"
                                }
                            ],
                            primaryColor: "#902EFF"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // SOCIAL PROOF QUOTE
        // ==================================================================
        {
            key: "smvp-pricing-quote",
            name: "Social Proof Quote",
            description: "Styled blockquote from customer",
            structure: {
                id: "smvp-pricing-quote-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#f9fafb",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-pricing-quote-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 16
                    },
                    elements: [{
                        id: "smvp-pricing-quote",
                        type: "Quote",
                        props: {
                            text: "Switching to TechFlow Pro was the best decision we made. Our team's productivity increased by 40% in the first month.",
                            author: "Marcus Tye",
                            source: "Operations Lead, Startup.io",
                            accentColor: "#902EFF",
                            fontSize: 40
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // CONTACT SECTION — ContactDetails + ContactForm
        // ==================================================================
        {
            key: "smvp-pricing-contact",
            name: "Contact Form",
            description: "Two-column contact details and form",
            structure: {
                id: "smvp-pricing-contact-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "smvp-contact-form-col",
                        width: "100%",
                        props: { padding: 16 },
                        elements: [{
                            id: "smvp-contact-form",
                            type: "ContactForm",
                            props: {
                                formTitle: "Send us a message",
                                submitButtonText: "Send Message",
                                submitButtonColor: "#902EFF",
                                fields: [
                                    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", halfWidth: true },
                                    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", halfWidth: true },
                                    { name: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
                                    { name: "message", label: "Message", type: "textarea", placeholder: "Tell us more about your project...", rows: 4 }
                                ]
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // FAQ — PricingFAQ renderer (built-in accordion with styling)
        // ==================================================================
        {
            key: "smvp-pricing-faq",
            name: "FAQ",
            description: "Accordion-style frequently asked questions",
            structure: {
                id: "smvp-pricing-faq-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-pricing-faq-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-pricing-faq",
                        type: "PricingFAQ",
                        props: {
                            title: "Frequently Asked Questions",
                            subtitle: "Everything you need to know about our plans.",
                            accentColor: "#902EFF",
                            items: [
                                {
                                    question: "Can I upgrade or downgrade my plan later?",
                                    answer: "Yes! You can change your subscription plan at any time from your account settings. Upgrades take effect immediately, while downgrades will be processed at the end of your current billing cycle."
                                },
                                {
                                    question: "Do you offer a free trial?",
                                    answer: "We offer a 14-day free trial on our Starter and Pro plans. No credit card is required to start your trial, so you can explore all the features risk-free."
                                },
                                {
                                    question: "What payment methods do you accept?",
                                    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for Enterprise customers, we also support bank wire transfers and invoicing."
                                }
                            ]
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = startupMvpPricing;
