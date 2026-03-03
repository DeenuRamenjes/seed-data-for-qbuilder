/**
 * LuxAI Portfolio Template - Contact Page
 * UNIQUE RENDERERS: Hero, Badge, Headline, Paragraph, Image, ButtonGroup,
 *                   ContactForm, ContactDetails, Tabs, FAQ
 */

const luxaiContact = {
    sections: [
        // ==================================================================
        // HERO — Split layout with text + image
        // ==================================================================
        {
            key: "luxai-contact-hero",
            name: "Contact Hero",
            description: "Two-column hero with image",
            structure: {
                id: "luxai-contact-hero-section",
                type: "Hero",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#ffffff",
                    paddingY: 40,
                    paddingX: 48,
                    fullWidth: true,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    minHeight: "60vh",
                },
                columns: [
                    {
                        id: "luxai-contact-hero-left",
                        width: "50%",
                        props: { flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: 24, padding: 20 },
                        elements: [
                            { id: "luxai-contact-badge", type: "Badge", props: { text: "Enterprise Grade Support", color: "#001885", marginBottom: 12, bgColor: "rgba(0, 24, 133, 0.1)", showPing: false } },
                            { id: "luxai-contact-title", type: "Headline", props: { text: "Connect with our AI Experts", tag: "h1", align: "left", color: "#0f172a", fontWeight: "900" } },
                            { id: "luxai-contact-desc", type: "Paragraph", props: { text: "Scale your machine learning infrastructure with precision. Our global team provides white-glove integration for luxury tech sectors.", align: "left", color: "#64748b", size: "lg" } },
                            { id: "luxai-contact-btns", type: "ButtonGroup", props: { primaryText: "Documentation", primaryLink: "#", secondaryText: "View Case Studies", secondaryLink: "/case-studies", primaryBg: "#0f172a", primaryColor: "#ffffff", secondaryBg: "#ffffff", secondaryColor: "#0f172a", showPrimaryIcon: false } }
                        ]
                    },
                    {
                        id: "luxai-contact-hero-right",
                        width: "50%",
                        props: { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 },
                        elements: [{
                            id: "luxai-contact-hero-img",
                            type: "Image",
                            props: {
                                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLDQVsG-vxImZ7UavMejuYYIO55wUBmZ3D45sopvhNkF71lKBmvar8mo0LKczT51G9UMnLyBnY3LK7FX0X_lcu0QH_OAcYhh1Emq7WRRZDj7-LUAxxQkTCG8S6av40BTyuvc5PZRMuioSPwnNSo3gvi5kOQLrff4YL8YhtpAZo1i5RsBsZKEEbQLRjK1qbkEwvruSQbEPLiquAa6tPJi9YgpGI7lXLSC8oHPdd2j_vMqtSHD2Ll08PARSteMvT0HVEsQL7B-kTjnKG",
                                alt: "Futuristic AI robotic hand interacting with data",
                                borderRadius: "16",
                                shadow: "2xl"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // SERVICE TABS — Tabs renderer (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-contact-services",
            name: "Service Inquiry Tabs",
            description: "Tabs showing different service categories",
            structure: {
                id: "luxai-contact-services-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#f8f7f5",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "luxai-contact-tabs-heading-col", width: "100%",
                        props: { flexDirection: "column", alignItems: "center", gap: 12, paddingBottom: 32 },
                        elements: [
                            { id: "luxai-contact-tabs-badge", type: "Badge", props: { text: "Our Services", color: "#ffae00", marginBottom: 20, align: "center", bgColor: "rgba(255,174,0,0.1)", showPing: false } },
                            { id: "luxai-contact-tabs-title", type: "Headline", props: { text: "Choose Your Engagement Model", tag: "h2", align: "center", color: "#0f172a", fontWeight: "800" } }
                        ]
                    },
                    {
                        id: "luxai-contact-tabs-col", width: "100%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-contact-tabs-element",
                            type: "Tabs",
                            props: {
                                accentColor: "#ffae00",
                                textColor: "#0f172a",
                                secondaryTextColor: "#475569",
                                tabs: [
                                    { label: "Custom LLM Development", content: "End-to-end design and training of proprietary Large Language Models tailored to your enterprise vocabulary, compliance requirements, and domain-specific knowledge. Includes threat modeling, bias auditing, and production deployment with SLA guarantees." },
                                    { label: "GPU Cluster Orchestration", content: "Full-stack infrastructure setup for distributed AI training and inference. We architect multi-cloud GPU clusters with auto-scaling, cost optimization, and fault tolerance — delivering up to 40% compute cost reduction." },
                                    { label: "AI Strategy Consulting", content: "C-suite advisory on AI transformation roadmaps. We assess your data maturity, identify high-ROI use cases, and build phased implementation plans with clear KPIs and governance frameworks." },
                                    { label: "Managed AI Operations", content: "24/7 monitoring, optimization, and retraining of your deployed models. Our MLOps team ensures 99.99% uptime, continuous model drift detection, and automated performance tuning." }
                                ]
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // CONTACT FORM + DETAILS (side by side)
        // ==================================================================
        {
            key: "luxai-contact-form-section",
            name: "Contact Form & Details",
            description: "Form on left, contact details on right",
            structure: {
                id: "luxai-contact-form-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "luxai-contact-form-col", width: "60%", props: { padding: 12 },
                        elements: [{
                            id: "luxai-contact-form-element",
                            type: "ContactForm",
                            props: {
                                title: "Professional Inquiry",
                                fields: [
                                    { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
                                    { name: "email", label: "Work Email", type: "email", placeholder: "john@enterprise.com", required: true },
                                    { name: "service", label: "Service Interest", type: "select", options: ["Custom LLM Development", "GPU Cluster Orchestration", "Luxury Brand Integration", "AI Strategy Consulting"] },
                                    { name: "details", label: "Project Details", type: "textarea", placeholder: "Describe your infrastructure needs...", rows: 4 }
                                ],
                                submitText: "Submit Request",
                                accentColor: "#ffae00"
                            }
                        }]
                    },
                    {
                        id: "luxai-contact-details-col", width: "40%", props: { padding: 12 },
                        elements: [{
                            id: "luxai-contact-details-element",
                            type: "ContactDetails",
                            props: {
                                title: "Global Reach",
                                description: "Physically present in key tech hubs worldwide.",
                                items: [
                                    { icon: "MapPin", label: "San Francisco", value: "600 Market St, Financial District" },
                                    { icon: "MapPin", label: "London", value: "12 Mayfair Sq, Innovation Hub" },
                                    { icon: "MapPin", label: "Singapore", value: "Marina Bay Sands, Level 44" },
                                    { icon: "Mail", label: "Email", value: "enterprise@luxai.com" },
                                    { icon: "Phone", label: "Phone", value: "+1 (415) 555-0192" }
                                ],
                                accentColor: "#ffae00"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // FAQ — FAQ renderer (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-contact-faq",
            name: "Frequently Asked Questions",
            description: "FAQ section with expandable items",
            structure: {
                id: "luxai-contact-faq-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#f8f7f5",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "luxai-contact-faq-heading-col", width: "100%",
                        props: { flexDirection: "column", alignItems: "center", gap: 12, paddingBottom: 32 },
                        elements: [
                            { id: "luxai-contact-faq-title", type: "Headline", props: { text: "Frequently Asked Questions", tag: "h2", align: "center", color: "#0f172a", fontWeight: "800" } },
                            { id: "luxai-contact-faq-desc", type: "Paragraph", props: { text: "Answers to common questions from enterprise teams evaluating AI partnerships.", align: "center", color: "#64748b", size: "lg" } }
                        ]
                    },
                    {
                        id: "luxai-contact-faq1-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-contact-faq1", type: "FAQ",
                            props: {
                                question: "What's the typical timeline for a custom AI deployment?",
                                answer: "Most engagements move from discovery to production deployment in 4-8 weeks. Complex enterprise integrations with multiple data sources may take 12-16 weeks, but we deliver incremental value from week 2.",
                                accentColor: "#ffae00"
                            }
                        }]
                    },
                    {
                        id: "luxai-contact-faq2-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-contact-faq2", type: "FAQ",
                            props: {
                                question: "How do you handle data privacy and sovereignty?",
                                answer: "All models can be deployed fully on-premise or in your private cloud. We never retain client data. Our infrastructure is SOC 2 Type II, ISO 27001, and GDPR compliant.",
                                accentColor: "#ffae00"
                            }
                        }]
                    },
                    {
                        id: "luxai-contact-faq3-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-contact-faq3", type: "FAQ",
                            props: {
                                question: "What industries do you specialize in?",
                                answer: "Our primary verticals are financial services, healthcare/life sciences, luxury manufacturing, automotive, and logistics. We've completed 200+ enterprise engagements across these sectors.",
                                accentColor: "#ffae00"
                            }
                        }]
                    },
                    {
                        id: "luxai-contact-faq4-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-contact-faq4", type: "FAQ",
                            props: {
                                question: "What kind of support is included post-deployment?",
                                answer: "Enterprise clients receive 24/7 dedicated support with a named account engineer, continuous model monitoring, automated drift detection, and quarterly performance reviews.",
                                accentColor: "#ffae00"
                            }
                        }]
                    }
                ]
            }
        }
    ]
};

module.exports = luxaiContact;
