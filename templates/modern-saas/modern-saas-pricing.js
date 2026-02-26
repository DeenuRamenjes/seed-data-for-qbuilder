export const modernSaaSPricing = {
    id: "modern-saas-pricing",
    type: "Page",
    title: "Pricing",
    description: "Pricing plans page for Modern SaaS",
    structure: {
        blocks: [
            {
                id: "pricing-header",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#06080C",
                    paddingY: 80,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "pricing-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "pricing-header-element",
                            type: "PricingHeader",
                            props: {
                                badge: "Flexible Pricing",
                                title: "Choose your advantage.",
                                description: "Scaling your infrastructure shouldn't be complicated. Pick a plan that fits your team's current velocity.",
                                backgroundColor: "#06080C",
                                textColor: "#FFFFFF",
                                badgeColor: "rgba(255, 255, 255, 0.05)",
                                primaryColor: "#3B82F6"
                            }
                        }
                    ]
                }]
            },
            {
                id: "pricing-cards",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#06080C",
                    paddingY: 80,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "pricing-cards-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "pricing-cards-element",
                            type: "PricingCards",
                            props: {
                                plans: [
                                    {
                                        id: "starter",
                                        name: "Starter",
                                        description: "Perfect for individuals and small side projects.",
                                        price: "0",
                                        period: "/month",
                                        featured: false,
                                        ctaText: "Start for free",
                                        features: [
                                            {
                                                text: "Up to 3 active projects",
                                                included: true
                                            },
                                            {
                                                text: "Basic analytics dashboard",
                                                included: true
                                            },
                                            {
                                                text: "10GB Global traffic",
                                                included: true
                                            },
                                            {
                                                text: "Custom domains",
                                                included: false
                                            }
                                        ]
                                    },
                                    {
                                        id: "professional",
                                        name: "Professional",
                                        description: "Everything you need to grow your application.",
                                        price: "49",
                                        period: "/month",
                                        featured: true,
                                        ctaText: "Get Started Now",
                                        features: [
                                            {
                                                text: "Unlimited projects",
                                                included: true
                                            },
                                            {
                                                text: "Advanced Performance Index",
                                                included: true
                                            },
                                            {
                                                text: "1TB Global traffic",
                                                included: true
                                            },
                                            {
                                                text: "Custom domains & SSL",
                                                included: true
                                            },
                                            {
                                                text: "Priority email support",
                                                included: true
                                            }
                                        ]
                                    },
                                    {
                                        id: "enterprise",
                                        name: "Enterprise",
                                        description: "Bespoke solutions for large-scale operations.",
                                        price: "Custom",
                                        period: "",
                                        featured: false,
                                        ctaText: "Contact Sales",
                                        features: [
                                            {
                                                text: "Dedicated infrastructure",
                                                included: true
                                            },
                                            {
                                                text: "Unlimited Global traffic",
                                                included: true
                                            },
                                            {
                                                text: "SSO & SAML Auth",
                                                included: true
                                            },
                                            {
                                                text: "24/7 Dedicated account manager",
                                                included: true
                                            }
                                        ]
                                    }
                                ],
                                backgroundColor: "#06080C",
                                textColor: "#FFFFFF",
                                primaryColor: "#3B82F6",
                                secondaryColor: "#A855F7",
                                accentColor: "#06B6D4"
                            }
                        }
                    ]
                }]
            },
            {
                id: "pricing-faq",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#06080C",
                    paddingY: 80,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "pricing-faq-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "pricing-faq-element",
                            type: "PricingFAQ",
                            props: {
                                title: "Frequently Asked Questions",
                                subtitle: "Everything you need to know about the product and billing.",
                                faqs: [
                                    {
                                        question: "Can I switch plans anytime?",
                                        answer: "Yes, you can upgrade or downgrade your plan at any time from your dashboard. Changes will be reflected in your next billing cycle."
                                    },
                                    {
                                        question: "What happens if I exceed my traffic limit?",
                                        answer: "We won't cut you off. You'll simply be charged a small overage fee per GB, or you can choose to upgrade to a higher tier for better rates."
                                    },
                                    {
                                        question: "Do you offer discounts for non-profits?",
                                        answer: "Absolutely. We offer a 50% discount for registered non-profits and educational institutions. Contact our support team for verification."
                                    },
                                    {
                                        question: "Is my data secure on the Starter plan?",
                                        answer: "Security is our top priority across all tiers. Every plan includes the same high-level encryption and security protocols as our Enterprise clients."
                                    }
                                ],
                                backgroundColor: "#06080C",
                                textColor: "#FFFFFF"
                            }
                        }
                    ]
                }]
            }
        ]
    }
};
