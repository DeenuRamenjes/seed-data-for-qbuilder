/**
 * LuxAI Portfolio Template - Case Studies Page
 * UNIQUE RENDERERS: HeroGradient, MissionSection, FeatureCard, ProcessStepCard,
 *                   ComparisonMatrix, MediaMention, Roadmap
 */

const luxaiCaseStudies = {
    sections: [
        // ==================================================================
        // HERO — HeroGradient
        // ==================================================================
        {
            key: "luxai-cs-hero",
            name: "Case Studies Hero",
            description: "Dark gradient hero",
            structure: {
                id: "luxai-cs-hero-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "luxai-cs-hero-col",
                    width: "100%",
                    elements: [{
                        id: "luxai-cs-hero-gradient",
                        type: "HeroGradient",
                        props: {
                            badgeText: "ENTERPRISE EXCELLENCE",
                            title: "Powering Global Intelligence",
                            lead: "Discover how our bespoke machine learning architectures drive measurable impact for the world's leading luxury and enterprise brands.",
                            accentColor: "#ffae00",
                            secondaryColor: "#001885",
                            backgroundColor: "#0a0a0a",
                            paddingTop: 50,
                            paddingBottom: 60,
                            primaryCtaText: "Request Industry Report",
                            primaryCtaLink: "/contact",
                            secondaryCtaText: "Book Consultation →",
                            secondaryCtaLink: "/contact"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // FEATURED CASE — MissionSection
        // ==================================================================
        {
            key: "luxai-cs-featured",
            name: "Featured Case Study",
            description: "Supply chain AI case with stats overlay",
            structure: {
                id: "luxai-cs-featured-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#001885",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "luxai-cs-featured-col",
                    width: "100%",
                    elements: [{
                        id: "luxai-cs-featured-mission",
                        type: "MissionSection",
                        props: {
                            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvFP0rAe21kUwXOZJ279UcN5L5mGT6KHW8aojhkDL78WQqWs-Slld2Qt4v8yi2f9ArMymXn3VhRXF8WCbxu1OXAv6EEE_oeqNcG8NoPbsNRufmHt5Zulis0Kvlr64WJQuTvMWL0m1MMpCGJNiar-MLHob97pgLgBaAa4WA9DAtvpk4IfVQXDLQ3pWjC53nSMp5wPZi4kJzdPeuKDbgzoGOiZfk5HUSSWq-0RaJ-eWCaDJ0wrSKsa8M-OoiCXJ7FEtewsLiRXVz9Wr2",
                            title: "Optimizing Global Supply Chains with Predictive AI",
                            description: "How a Fortune 100 logistics leader leveraged our custom neural networks to reduce carbon footprint by 22% while increasing delivery speed by 40%.",
                            description2: "Real-time demand prediction across 120 countries with dynamic infrastructure adjustments.",
                            stat1Value: "-22%",
                            stat1Label: "Carbon Footprint",
                            stat2Value: "+40%",
                            stat2Label: "Delivery Speed",
                            accentColor: "#ffae00"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // CASE CARDS — FeatureCards with images (2x2 grid)
        // ==================================================================
        {
            key: "luxai-cs-grid",
            name: "Case Study Grid",
            description: "4-card grid of case studies with images",
            structure: {
                id: "luxai-cs-grid-section",
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
                        id: "luxai-cs-grid-heading-col", width: "100%", props: { padding: 8, paddingBottom: 24, flexDirection: "column", gap: 12 },
                        elements: [
                            { id: "luxai-cs-grid-title", type: "Headline", props: { text: "Recent Implementations", tag: "h2", align: "left", color: "#0f172a", fontWeight: "800" } },
                            { id: "luxai-cs-grid-divider", type: "Divider", props: { color: "#ffae00", width: "96px", height: "6px", borderRadius: "full" } },
                            { id: "luxai-cs-grid-desc", type: "Paragraph", props: { text: "Each deployment is a bespoke architecture, tailored to the client's unique operational challenges.", align: "left", color: "#475569", size: "lg" } }
                        ]
                    },
                    {
                        id: "luxai-cs1-col", width: "50%", props: { flexDirection: "column", gap: 16, padding: 12 },
                        elements: [{
                            id: "luxai-cs1",
                            type: "FeatureCard",
                            props: {
                                title: "Algorithmic Risk Mitigation for Swiss Banking",
                                description: "Real-time risk assessment engine reducing exposure by 15% without impacting trade velocity.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA08AjeoLd6WD2NBr1X151aR8uFSz73A6jpJDIwU_BOCY_qhgK5-k3S4IQ1hOokl45zH_-vaHzoeAcV0iQNG8M4bJ54IO1qT5oJw_owiP4vcB6ZwyQ_JSXJw8Pz1fxRXFI_lygxaGVU6B2mLA_-xByPNEvdy4JvLjjeOXswsVkpkynVMLRC4E-0a71ZX-7_FfRr15Rf77Ghdw3YJFOZG1aa59C3KNZqdEGu0htVFC1FZlsXmuwxj6Ge1VUUMXBZp6ocSidyNdoXnv-e",
                                imageAspectRatio: "16/9", textAlign: "center", titleSize: "lg", borderRadius: "16px", padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "luxai-cs2-col", width: "50%", props: { flexDirection: "column", gap: 16, padding: 12 },
                        elements: [{
                            id: "luxai-cs2",
                            type: "FeatureCard",
                            props: {
                                title: "Clinical Trial Optimization using LLMs",
                                description: "Analyzing patient datasets to accelerate drug time-to-market by 18 months.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYRcUZctpG1WIGfe4Kgc9U9dYS0N5W3YLLPTMVYaJuCSMIx46ExP0-5EI7G4EjKNgJQiCMoFYIlJJEYeeeOfuuMA80SbPcszHXtijXlBfjuX8BxGSoBQco5NxyhHOj-ypn9NfNSFZLtgDroApjirG0lS0lcnqvB0rOG6VIxAzabviA6cmAE2R-2ws-Fz2V4JENJc-8s-pBvEQ9GePq7vwN-HZHA5Ofw_2s1Jso6Aag5UpmqAvdztsnnFBbT4T0gomKoLFmsKfTkvBw",
                                imageAspectRatio: "16/9", textAlign: "center", titleSize: "lg", borderRadius: "16px", padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "luxai-cs3-col", width: "50%", props: { flexDirection: "column", gap: 16, padding: 12 },
                        elements: [{
                            id: "luxai-cs3",
                            type: "FeatureCard",
                            props: {
                                title: "Autonomous Quality Control for EV Manufacturing",
                                description: "Vision-based inline inspection reducing defect rates to near-zero across 12 production lines.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiQvv_I_3TvJ6z3TflqqGleTWe_15_Gn0POXtoA8WQkgQrGAHM7muxRw4eKFO_RT2TvYAiBsani3lPtygnBjvh70ZIKK1rFYABxlzKzhd451at8DXxHMFqQuoOSSGyMLyTKlaEdjn_22VeyK_dx17zdObt6X2Q7zlha1U3El2JMh3MY_vJzw4FbCaCSzT8mlO5J7634XE63ttnWmAhLj1mIlqBCFybXQEPjl8xL3rbM1LtaKX1ttDU3nmT5sNkqISlvPyKlNFYKC4G",
                                imageAspectRatio: "16/9", textAlign: "center", titleSize: "lg", borderRadius: "16px", padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "luxai-cs4-col", width: "50%", props: { flexDirection: "column", gap: 16, padding: 12 },
                        elements: [{
                            id: "luxai-cs4",
                            type: "FeatureCard",
                            props: {
                                title: "Predictive Maintenance for Luxury Watchmaking",
                                description: "IoT-driven AI predicting equipment failures 72 hours in advance, saving $2.3M annually.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1ZW2SPpqrkRuLgLXbrEScB7OxcHrC7gYq6AnO8eP4eVEgf4dY8vsKMX6PvCeA7xllyR8s7UeESLFUaJGEMci_pA9QxjbFSaJbCRQD54mthd0-WaxV-8FHI_HA4ASeQc_fToOV50um5A8hsPd4w8I0uZ_zQoz9PVttpPX64lXc-J5sXESk8NcMUkxsvb0nPDbmQ3aof-18E0BnmRpfaqVjvw0gsaBcF_AdRWhsCz5KvAvmwcSjyPO5JkUE7KIqSSVx8zbtVKDDQV1w",
                                imageAspectRatio: "16/9", textAlign: "center", titleSize: "lg", borderRadius: "16px", padding: "16px"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // COMPARISON — ComparisonMatrix rows (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-cs-comparison",
            name: "LuxAI vs Traditional AI",
            description: "Comparison matrix showing LuxAI advantage",
            structure: {
                id: "luxai-cs-comparison-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#f8f7f5",
                    paddingY: 40,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "luxai-cs-comparison-heading-col", width: "100%",
                        props: { flexDirection: "column", alignItems: "center", gap: 12, paddingBottom: 32 },
                        elements: [
                            { id: "luxai-cs-comparison-badge", type: "Badge", props: { text: "Competitive Edge", color: "#ffae00", marginBottom: 20, align: "center", bgColor: "rgba(255,174,0,0.1)", showPing: false } },
                            { id: "luxai-cs-comparison-title", type: "Headline", props: { text: "Why LuxAI Over Traditional AI", tag: "h2", align: "center", color: "#0f172a", fontWeight: "800" } }
                        ]
                    },
                    {
                        id: "luxai-cs-comparison-header-col", width: "100%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-cs-comparison-header", type: "ComparisonMatrix",
                            props: { feature: "Capability", basic: "Open-Source", pro: "Big Tech API", enterprise: "LuxAI Custom", bgColor: "#0f172a", textColor: "#ffffff", secondaryTextColor: "rgba(255,255,255,0.9)" }
                        }]
                    },
                    {
                        id: "luxai-cs-comparison-row1-col", width: "100%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-cs-comparison-row1", type: "ComparisonMatrix",
                            props: { feature: "Model Architecture", basic: "Generic", pro: "Fine-tuned", enterprise: "✦ Bespoke Neural Design" }
                        }]
                    },
                    {
                        id: "luxai-cs-comparison-row2-col", width: "100%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-cs-comparison-row2", type: "ComparisonMatrix",
                            props: { feature: "Data Sovereignty", basic: "❌ Shared Cloud", pro: "⚠️ Region-locked", enterprise: "✦ Full On-Premise" }
                        }]
                    },
                    {
                        id: "luxai-cs-comparison-row3-col", width: "100%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-cs-comparison-row3", type: "ComparisonMatrix",
                            props: { feature: "Time to Production", basic: "3-6 months", pro: "1-3 months", enterprise: "✦ 2-4 weeks" }
                        }]
                    },
                    {
                        id: "luxai-cs-comparison-row4-col", width: "100%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-cs-comparison-row4", type: "ComparisonMatrix",
                            props: { feature: "Enterprise Support", basic: "❌ Community", pro: "⚠️ Ticket-based", enterprise: "✦ Dedicated Team 24/7" }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // METHODOLOGY — ProcessStepCards
        // ==================================================================
        {
            key: "luxai-cs-methodology",
            name: "Our Methodology",
            description: "3-step process cards",
            structure: {
                id: "luxai-cs-methodology-section",
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
                        id: "luxai-cs-method-heading-col", width: "100%", props: { padding: 8, paddingBottom: 24, textAlign: "center" },
                        elements: [
                            { id: "luxai-cs-method-badge", type: "Badge", props: { text: "Methodology", color: "#ffae00", marginBottom: 20, align: "center", bgColor: "rgba(255,174,0,0.1)", showPing: false } },
                            { id: "luxai-cs-method-title", type: "Headline", props: { text: "From Vision to Value", tag: "h2", align: "center", color: "#0f172a", fontWeight: "800" } },
                            { id: "luxai-cs-method-desc", type: "Paragraph", props: { text: "Our proven framework delivers measurable outcomes in weeks, not quarters.", align: "center", color: "#64748b", size: "lg" } }
                        ]
                    },
                    {
                        id: "luxai-cs-step1-col", width: "calc(100% / 3)", props: { padding: 20 },
                        elements: [{ id: "luxai-cs-step1", type: "ProcessStepCard", props: { stepNumber: "1", title: "Discovery & Audit", description: "Deep-dive analysis of your data infrastructure, identifying high-impact AI opportunities.", accentColor: "#ffae00" } }]
                    },
                    {
                        id: "luxai-cs-step2-col", width: "calc(100% / 3)", props: { padding: 20 },
                        elements: [{ id: "luxai-cs-step2", type: "ProcessStepCard", props: { stepNumber: "2", title: "Architecture & Build", description: "Custom neural network design, rigorous testing, and iterative refinement with your domain experts.", accentColor: "#001885" } }]
                    },
                    {
                        id: "luxai-cs-step3-col", width: "calc(100% / 3)", props: { padding: 20 },
                        elements: [{ id: "luxai-cs-step3", type: "ProcessStepCard", props: { stepNumber: "3", title: "Deploy & Scale", description: "Production deployment with real-time monitoring, automated scaling, and continuous model optimization.", accentColor: "#ffae00" } }]
                    }
                ]
            }
        },

        // ==================================================================
        // PRESS — MediaMention cards (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-cs-press",
            name: "In the Press",
            description: "Media coverage cards",
            structure: {
                id: "luxai-cs-press-section",
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
                        id: "luxai-cs-press-heading-col", width: "100%",
                        props: { flexDirection: "column", alignItems: "center", gap: 12, paddingBottom: 32 },
                        elements: [
                            { id: "luxai-cs-press-badge", type: "Badge", props: { text: "In the Press", color: "#001885", marginBottom: 20, align: "center", bgColor: "rgba(0,24,133,0.1)", showPing: false } },
                            { id: "luxai-cs-press-title", type: "Headline", props: { text: "Industry Coverage", tag: "h2", align: "center", color: "#0f172a", fontWeight: "800" } }
                        ]
                    },
                    {
                        id: "luxai-cs-press1-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-cs-press1", type: "MediaMention",
                            props: { title: "LuxAI Named to Forbes AI 50 List", date: "March 2024", excerpt: "Recognition for pioneering enterprise neural architecture design and proprietary LLM frameworks.", link: "#" }
                        }]
                    },
                    {
                        id: "luxai-cs-press2-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-cs-press2", type: "MediaMention",
                            props: { title: "How LuxAI Cut Drug Discovery by 18 Months", date: "January 2024", excerpt: "TechCrunch deep-dive into LuxAI's clinical trial optimization platform used by Novartis.", link: "#" }
                        }]
                    },
                    {
                        id: "luxai-cs-press3-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-cs-press3", type: "MediaMention",
                            props: { title: "The AI Company Behind Swiss Banking Security", date: "November 2023", excerpt: "Financial Times profiles LuxAI's algorithmic risk mitigation engine deployed across tier-1 banks.", link: "#" }
                        }]
                    },
                    {
                        id: "luxai-cs-press4-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-cs-press4", type: "MediaMention",
                            props: { title: "WEF Selects LuxAI as Technology Pioneer", date: "September 2023", excerpt: "World Economic Forum recognizes LuxAI for advancing sustainable AI infrastructure in global logistics.", link: "#" }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // ROADMAP — Roadmap cards (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-cs-roadmap",
            name: "Innovation Roadmap",
            description: "Quarterly roadmap cards",
            structure: {
                id: "luxai-cs-roadmap-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#001885",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "luxai-cs-roadmap-heading-col", width: "100%",
                        props: { flexDirection: "column", alignItems: "center", gap: 12, paddingBottom: 32 },
                        elements: [
                            { id: "luxai-cs-roadmap-title", type: "Headline", props: { text: "Innovation Roadmap", tag: "h2", align: "center", color: "#ffffff", fontWeight: "900" } },
                            { id: "luxai-cs-roadmap-desc", type: "Paragraph", props: { text: "Where we're headed — AI capabilities launching in upcoming quarters.", align: "center", color: "rgba(255,255,255,0.7)", size: "lg" } }
                        ]
                    },
                    {
                        id: "luxai-cs-roadmap1-col", width: "calc(100% / 3)", props: { padding: 12 },
                        elements: [{
                            id: "luxai-cs-roadmap1", type: "Roadmap",
                            props: { quarter: "Q1 2025", status: "Completed", items: ["Multi-modal reasoning engine", "Edge inference optimization", "Healthcare compliance module"], accentColor: "#ffae00", bgColor: "rgba(255,255,255,0.05)", textColor: "#ffffff", secondaryTextColor: "rgba(255,255,255,0.7)" }
                        }]
                    },
                    {
                        id: "luxai-cs-roadmap2-col", width: "calc(100% / 3)", props: { padding: 12 },
                        elements: [{
                            id: "luxai-cs-roadmap2", type: "Roadmap",
                            props: { quarter: "Q2 2025", status: "In Progress", items: ["Autonomous model retraining", "Federated learning platform", "Real-time anomaly detection v3"], accentColor: "#ffae00", bgColor: "rgba(255,255,255,0.05)", textColor: "#ffffff", secondaryTextColor: "rgba(255,255,255,0.7)" }
                        }]
                    },
                    {
                        id: "luxai-cs-roadmap3-col", width: "calc(100% / 3)", props: { padding: 12 },
                        elements: [{
                            id: "luxai-cs-roadmap3", type: "Roadmap",
                            props: { quarter: "Q3 2025", status: "Planned", items: ["Quantum-ready architecture", "Synthetic data generation", "Carbon-neutral inference clusters"], accentColor: "#ffae00", bgColor: "rgba(255,255,255,0.05)", textColor: "#ffffff", secondaryTextColor: "rgba(255,255,255,0.7)" }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // CTA
        // ==================================================================
        {
            key: "luxai-cs-cta",
            name: "Case Studies CTA",
            description: "Call to action",
            structure: {
                id: "luxai-cs-cta-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "luxai-cs-cta-col",
                    width: "100%",
                    elements: [{
                        id: "luxai-cs-cta-hero",
                        type: "HeroGradient",
                        props: {
                            badgeText: "SCALE YOUR ENTERPRISE",
                            title: "Ready to see results like these?",
                            lead: "Join 200+ global organizations that rely on LuxAI for their critical AI infrastructure and strategic advisory.",
                            accentColor: "#ffae00",
                            secondaryColor: "#001885",
                            backgroundColor: "#0a0a0a",
                            paddingTop: 40,
                            paddingBottom: 40,
                            primaryCtaText: "Book a Consultation",
                            primaryCtaLink: "/contact",
                            secondaryCtaText: "Download Report →",
                            secondaryCtaLink: "#"
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = luxaiCaseStudies;
