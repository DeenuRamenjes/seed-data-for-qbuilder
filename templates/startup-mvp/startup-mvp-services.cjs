/**
 * Startup MVP Template - Services Page (Redesigned)
 * Uses specialized renderers: HeroGradient, BigNumberCard, StatsCard,
 * ServiceCard, Testimonial — distinct from IT-consulting
 */

const startupMvpServices = {
    sections: [
        // ==================================================================
        // HERO — HeroGradient dark section
        // ==================================================================
        {
            key: "smvp-services-hero",
            name: "Services Hero",
            description: "Dark hero with gradient text for NeuralPulse engine",
            structure: {
                id: "smvp-services-hero-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-services-hero-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-services-hero-gradient",
                        type: "HeroGradient",
                        props: {
                            badgeText: "INFERENCE ENGINE v2.04",
                            title: "Engineering the Intelligence Future Frontier",
                            lead: "NeuralPulse is a high-performance inference engine for next-generation ML applications. We provide the substrate for the world's most demanding computational tasks, optimized for the post-GPU era.",
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
        // STATS — 4 x BigNumberCard (centered value + title)
        // ==================================================================
        {
            key: "smvp-services-stats",
            name: "Performance Metrics",
            description: "4 big number stat cards",
            structure: {
                id: "smvp-services-stats-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 60,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "smvp-svc-stats-heading-col", width: "100%", props: { padding: 8, paddingBottom: 24, textAlign: "center" },
                        elements: [
                            {
                                id: "smvp-svc-stats-badge",
                                type: "Heading",
                                props: {
                                    text: "METRICS",
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
                                id: "smvp-svc-stats-title",
                                type: "Heading",
                                props: {
                                    text: "Performance That Speaks for Itself",
                                    level: "h2",
                                    color: "#111827",
                                    fontSize: 36,
                                    fontWeight: "800",
                                    align: "center",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "smvp-svc-stats-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Real-time numbers from our production infrastructure — no vanity metrics.",
                                    color: "#6B7280",
                                    fontSize: 17,
                                    align: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "smvp-svc-stat1-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "smvp-svc-stat1",
                            type: "BigNumberCard",
                            props: {
                                value: "<40ms",
                                title: "Latency",
                                description: "-15.4% from baseline",
                                accentColor: "#902EFF",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-svc-stat2-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "smvp-svc-stat2",
                            type: "BigNumberCard",
                            props: {
                                value: "12k",
                                title: "Requests/Sec",
                                description: "Stable peak load",
                                accentColor: "#FF2EA4",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-svc-stat3-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "smvp-svc-stat3",
                            type: "BigNumberCard",
                            props: {
                                value: "99.9%",
                                title: "Accuracy",
                                description: "+2.4% improvement",
                                accentColor: "#902EFF",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-svc-stat4-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "smvp-svc-stat4",
                            type: "BigNumberCard",
                            props: {
                                value: "99.99%",
                                title: "Uptime",
                                description: "Enterprise grade",
                                accentColor: "#FF2EA4",
                                borderRadius: 16
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // PRODUCT VISUAL — MissionSection (image + text + stats)
        // ==================================================================
        {
            key: "smvp-services-product",
            name: "Product Visual",
            description: "Image + text + stats mission layout",
            structure: {
                id: "smvp-services-product-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-services-product-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-services-product-mission",
                        type: "MissionSection",
                        props: {
                            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt3xB2immiz43gXrcBOxLlQKJ1XwmC5ZgooILkg5xpuQEmfJpDxuao6SQIJfrtO1tKRynHja39yVXnu8vCAB6PXo5bvon4XH2Ir6cji4rCkrl7Gm2R9wf3AkDT8qWe3Cnb-Y3Isw20-InRXzeoaK7I64vXnOn1T47slcBjfjVtmDo6l8FBb_qQNO3VChbVmzb0hZihQiIWLRE5Px7zOBMFkV-HsICBJlaLrFvaVyvSNotlkTYpx9s0m6q0A-aYY_0hTT0GqHC-IwWH",
                            title: "Designed for the Impossible",
                            description: "Whether you are building real-time voice translation or generative video systems, NeuralPulse provides the raw power required to cross the uncanny valley.",
                            description2: "Our proprietary scheduling algorithm reduces cold starts by 89.2% through predictive pre-warming of model weights in VRAM. Global edge network spanning 42 data centers.",
                            stat1Value: "89.2%",
                            stat1Label: "Cold Start Reduction",
                            stat2Value: "42",
                            stat2Label: "Data Centers",
                            accentColor: "#FF2EA4"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // ARCHITECTURE — 4 x ServiceCard
        // ==================================================================
        {
            key: "smvp-services-arch",
            name: "Architecture",
            description: "6 service cards in 3x2 grid with heading",
            structure: {
                id: "smvp-services-arch-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#f9fafb",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "smvp-arch-heading-col", width: "100%", props: { padding: 8, paddingBottom: 24, textAlign: "center" },
                        elements: [
                            {
                                id: "smvp-arch-badge",
                                type: "Heading",
                                props: {
                                    text: "ARCHITECTURE",
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
                                id: "smvp-arch-title",
                                type: "Heading",
                                props: {
                                    text: "Built for Scale & Reliability",
                                    level: "h2",
                                    color: "#111827",
                                    fontSize: 36,
                                    fontWeight: "800",
                                    align: "center",
                                    marginBottom: 8
                                }
                            },
                            {
                                id: "smvp-arch-subtitle",
                                type: "Paragraph",
                                props: {
                                    text: "Our infrastructure is designed from the ground up for enterprise-grade performance and security.",
                                    color: "#6B7280",
                                    fontSize: 17,
                                    align: "center"
                                }
                            }
                        ]
                    },
                    {
                        id: "smvp-arch1-col", width: "calc(100% / 3)", props: { padding: 8 },
                        elements: [{
                            id: "smvp-arch1",
                            type: "ServiceCard",
                            props: {
                                title: "Unified API",
                                description: "Single endpoint integration for transformer architectures, diffusion models, and custom tensor-based workloads.",
                                icon: "Code",
                                accentColor: "#902EFF",
                                backgroundColor: "#ffffff",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-arch2-col", width: "calc(100% / 3)", props: { padding: 8 },
                        elements: [{
                            id: "smvp-arch2",
                            type: "ServiceCard",
                            props: {
                                title: "Auto-Scaling",
                                description: "Dynamic resource allocation based on millisecond-level demand sensing and predictive queuing logic.",
                                icon: "Maximize",
                                accentColor: "#FF2EA4",
                                backgroundColor: "#ffffff",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-arch3-col", width: "calc(100% / 3)", props: { padding: 8 },
                        elements: [{
                            id: "smvp-arch3",
                            type: "ServiceCard",
                            props: {
                                title: "Quantized Kernels",
                                description: "Low-level C++ optimizations and custom CUDA kernels designed for sub-INT8 quantization precision.",
                                icon: "Cpu",
                                accentColor: "#902EFF",
                                backgroundColor: "#ffffff",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-arch4-col", width: "calc(100% / 3)", props: { padding: 8 },
                        elements: [{
                            id: "smvp-arch4",
                            type: "ServiceCard",
                            props: {
                                title: "Edge Isolation",
                                description: "Hardware-level sandbox isolation for multi-tenant workloads ensures zero-leak data integrity.",
                                icon: "Shield",
                                accentColor: "#FF2EA4",
                                backgroundColor: "#ffffff",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-arch5-col", width: "calc(100% / 3)", props: { padding: 8 },
                        elements: [{
                            id: "smvp-arch5",
                            type: "ServiceCard",
                            props: {
                                title: "Observability Suite",
                                description: "End-to-end distributed tracing, custom metrics, and real-time alerting across your entire stack.",
                                icon: "Activity",
                                accentColor: "#902EFF",
                                backgroundColor: "#ffffff",
                                borderRadius: 16
                            }
                        }]
                    },
                    {
                        id: "smvp-arch6-col", width: "calc(100% / 3)", props: { padding: 8 },
                        elements: [{
                            id: "smvp-arch6",
                            type: "ServiceCard",
                            props: {
                                title: "Data Mesh",
                                description: "Federated data ownership with automated governance, lineage tracking, and cross-domain discoverability.",
                                icon: "Database",
                                accentColor: "#FF2EA4",
                                backgroundColor: "#ffffff",
                                borderRadius: 16
                            }
                        }]
                    }
                ]
            }
        },
        // ==================================================================
        // PROJECTS CAROUSEL — Horizontal scrolling project cards
        // ==================================================================
        {
            key: "smvp-services-projects",
            name: "Projects Carousel",
            description: "Horizontal scrolling carousel of featured projects",
            structure: {
                id: "smvp-services-projects-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-services-carousel-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-services-carousel",
                        type: "HorizontalCarouselRenderer",
                        props: {
                            title: "Featured Projects",
                            primaryColor: "#902EFF",
                            textColor: "#111827",
                            items: [
                                {
                                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop",
                                    label: "Infrastructure",
                                    title: "Real-Time Data Pipeline",
                                    description: "Built a high-throughput event streaming system processing 2M+ events/sec with sub-10ms latency."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
                                    label: "AI/ML",
                                    title: "Predictive Analytics Engine",
                                    description: "Deployed transformer-based forecasting models that improved demand prediction accuracy by 34%."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop",
                                    label: "Security",
                                    title: "Zero-Trust Framework",
                                    description: "Implemented end-to-end encryption with hardware-backed key management across 12 microservices."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop",
                                    label: "DevOps",
                                    title: "Kubernetes Migration",
                                    description: "Migrated legacy monolith to containerized architecture, reducing deployment time from 4 hours to 8 minutes."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop",
                                    label: "Security",
                                    title: "Zero-Trust Framework",
                                    description: "Implemented end-to-end encryption with hardware-backed key management across 12 microservices."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop",
                                    label: "Security",
                                    title: "Zero-Trust Framework",
                                    description: "Implemented end-to-end encryption with hardware-backed key management across 12 microservices."
                                }
                            ]
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = startupMvpServices;
