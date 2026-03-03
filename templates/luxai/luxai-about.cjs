/**
 * LuxAI Portfolio Template - About Page
 * UNIQUE RENDERERS: HeroGradient, MissionSection, TimelineSection, TeamSection,
 *                   TestimonialCarousel, AwardBadge, Accordion
 */

const luxaiAbout = {
    sections: [
        // ==================================================================
        // HERO — IndustrialHero
        // ==================================================================
        {
            key: "luxai-about-hero",
            name: "About Hero",
            description: "Industrial hero with background image and status box",
            structure: {
                id: "luxai-about-hero-section",
                type: "IndustrialHero",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiQvv_I_3TvJ6z3TflqqGleTWe_15_Gn0POXtoA8WQkgQrGAHM7muxRw4eKFO_RT2TvYAiBsani3lPtygnBjvh70ZIKK1rFYABxlzKzhd451at8DXxHMFqQuoOSSGyMLyTKlaEdjn_22VeyK_dx17zdObt6X2Q7zlha1U3El2JMh3MY_vJzw4FbCaCSzT8mlO5J7634XE63ttnWmAhLj1mIlqBCFybXQEPjl8xL3rbM1LtaKX1ttDU3nmT5sNkqISlvPyKlNFYKC4G",
                    backgroundOverlay: "rgba(10, 10, 10, 0.75)",
                    minHeight: "70vh",
                    badgeText: "OUR STORY",
                    badgeShowPing: true,
                    headlineText: "Architecting the Intelligence of Tomorrow.",
                    headlineTag: "h1",
                    paragraphText: "Empowering global enterprises with bespoke machine learning frameworks that redefine operational efficiency and strategic foresight.",
                    paragraphColor: "rgba(255,255,255,0.8)",
                    paragraphSize: "lg",
                    statusItems: [
                        { text: "$4.2B Assets Optimized", size: "xs", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.2em" },
                        { text: "14+ Industry Patents", size: "xs", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.2em" }
                    ]
                },
                columns: []
            }
        },

        // ==================================================================
        // MISSION — MissionSection
        // ==================================================================
        {
            key: "luxai-about-mission",
            name: "Our DNA",
            description: "Image + text + stats mission layout",
            structure: {
                id: "luxai-about-mission-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "luxai-about-mission-col",
                    width: "100%",
                    elements: [{
                        id: "luxai-about-mission-element",
                        type: "MissionSection",
                        props: {
                            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiQvv_I_3TvJ6z3TflqqGleTWe_15_Gn0POXtoA8WQkgQrGAHM7muxRw4eKFO_RT2TvYAiBsani3lPtygnBjvh70ZIKK1rFYABxlzKzhd451at8DXxHMFqQuoOSSGyMLyTKlaEdjn_22VeyK_dx17zdObt6X2Q7zlha1U3El2JMh3MY_vJzw4FbCaCSzT8mlO5J7634XE63ttnWmAhLj1mIlqBCFybXQEPjl8xL3rbM1LtaKX1ttDU3nmT5sNkqISlvPyKlNFYKC4G",
                            title: "Our DNA is Intelligence",
                            description: "LuxAI was founded on a singular principle: that artificial intelligence should be an enabler of enterprise vision, not a barrier to it.",
                            description2: "In an era where complexity often stifles innovation, we provide the architectural clarity required to move forward with confidence.",
                            stat1Value: "$4.2B",
                            stat1Label: "Assets Optimized",
                            stat2Value: "14+",
                            stat2Label: "Industry Patents",
                            accentColor: "#ffae00"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // TIMELINE — TimelineSection
        // ==================================================================
        {
            key: "luxai-about-timeline",
            name: "Our Journey",
            description: "Interactive timeline with milestones",
            structure: {
                id: "luxai-about-timeline-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "luxai-about-timeline-col",
                    width: "100%",
                    elements: [{
                        id: "luxai-about-timeline-element",
                        type: "TimelineSection",
                        props: {
                            title: "Our Journey",
                            subtitle: "From a research lab in Zurich to a global AI powerhouse.",
                            milestones: [
                                { year: "2018", title: "The Genesis", description: "LuxAI founded in Zurich by a team of ex-CERN physicists and McKinsey consultants with a vision to democratize enterprise AI.", color: "#ffae00" },
                                { year: "2020", title: "First Enterprise Deploy", description: "Deployed custom neural architecture for a Fortune 100 logistics company, processing 2M predictions daily across 40 markets.", color: "#001885" },
                                { year: "2022", title: "Global Expansion", description: "Opened offices in San Francisco, London, and Singapore. Serving clients across financial services, healthcare, and automotive.", color: "#ffae00" },
                                { year: "2024", title: "Generative AI Pioneer", description: "Launched proprietary LLM framework for enterprise knowledge management, securing 14 patents in neural architecture design.", color: "#001885" }
                            ]
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // TEAM — TeamSection
        // ==================================================================
        {
            key: "luxai-about-team",
            name: "Leadership Team",
            description: "Team grid with avatars",
            structure: {
                id: "luxai-about-team-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "luxai-about-team-col",
                    width: "100%",
                    elements: [{
                        id: "luxai-about-team-element",
                        type: "TeamSection",
                        props: {
                            title: "The Minds Behind the Machine",
                            subtitle: "A global team of physicists, engineers, and strategists dedicated to enterprise AI excellence.",
                            ctaText: "Join Our Team",
                            members: [
                                { name: "Dr. Elena Voss", role: "Founder & CEO", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOnSv-4pSOMNJYsnzl1mX51Xckpp9gM6WK8Db3RAIYvuaU2Co66hJI0eknZEFibITEFI7AYIFnXseh_1mD0qmeFJ6BKkTei8VHU0l8QzF5TVxz6fqc40B13aIn--rDy-W4YyKhQGMlL6IdtG2ipUdbQMz8uCsRVRgztOrANO7YzDo1W89YT3piq2-WzcJacL6aXBdZUAo1L7t5IL77rWyWNo6D1CsilmLIQ9uu_E9Y4gtApuO2M8mmplSI-zjFjDnIJjYGl8btNaZZ", accentColor: "#ffae00" },
                                { name: "Marcus Von Berg", role: "CTO", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLDQVsG-vxImZ7UavMejuYYIO55wUBmZ3D45sopvhNkF71lKBmvar8mo0LKczT51G9UMnLyBnY3LK7FX0X_lcu0QH_OAcYhh1Emq7WRRZDj7-LUAxxQkTCG8S6av40BTyuvc5PZRMuioSPwnNSo3gvi5kOQLrff4YL8YhtpAZo1i5RsBsZKEEbQLRjK1qbkEwvruSQbEPLiquAa6tPJi9YgpGI7lXLSC8oHPdd2j_vMqtSHD2Ll08PARSteMvT0HVEsQL7B-kTjnKG", accentColor: "#ffae00" },
                                { name: "Dr. Aisha Tanaka", role: "Chief AI Scientist", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw7K889T0tt_E42xzgqtoYF_WolgPJjc6trZ6PbcEq-eRcQx2HenMEyiqgQt6TOT5Zu0tdYuw9TIk3mO152Oqe1zcgNrJV6luLTzOq7_Iv5NvXZHsTjb_G9HRQF2Qt4u9CgP6d26_EOBTbC__dLSYxkLBRwoYJKDY9OJLM9_DXoRlEREjEnOD-dUXUChAbZ6_En0r9qv6zFnNtxDeBmFhNTcNNnUX0d_KFQEuZYwB70L_cG6xsmraIZYPrLO35Pv0oF_zBLGo37STv", accentColor: "#ffae00" },
                                { name: "James Callahan", role: "VP Engineering", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvFP0rAe21kUwXOZJ279UcN5L5mGT6KHW8aojhkDL78WQqWs-Slld2Qt4v8yi2f9ArMymXn3VhRXF8WCbxu1OXAv6EEE_oeqNcG8NoPbsNRufmHt5Zulis0Kvlr64WJQuTvMWL0m1MMpCGJNiar-MLHob97pgLgBaAa4WA9DAtvpk4IfVQXDLQ3pWjC53nSMp5wPZi4kJzdPeuKDbgzoGOiZfk5HUSSWq-0RaJ-eWCaDJ0wrSKsa8M-OoiCXJ7FEtewsLiRXVz9Wr2", accentColor: "#ffae00" }
                            ]
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // AWARDS — AwardBadge (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-about-awards",
            name: "Industry Recognition",
            description: "Award badges showcasing recognitions",
            structure: {
                id: "luxai-about-awards-section",
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
                        id: "luxai-awards-heading-col", width: "100%",
                        props: { flexDirection: "column", alignItems: "center", gap: 12, paddingBottom: 32 },
                        elements: [
                            { id: "luxai-awards-badge", type: "Badge", props: { text: "Recognition", color: "#ffae00", marginBottom: 20, align: "center", bgColor: "rgba(255,174,0,0.1)", showPing: false } },
                            { id: "luxai-awards-title", type: "Headline", props: { text: "Industry-Leading Excellence", tag: "h2", align: "center", color: "#0f172a", fontWeight: "800" } }
                        ]
                    },
                    {
                        id: "luxai-award1-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-award1", type: "AwardBadge",
                            props: { icon: "🏆", title: "Gartner Cool Vendor", year: "2023", backgroundColor: "linear-gradient(135deg, #ffae00 0%, #f59e0b 100%)", textColor: "#ffffff", shadow: "lg" }
                        }]
                    },
                    {
                        id: "luxai-award2-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-award2", type: "AwardBadge",
                            props: { icon: "⭐", title: "Forbes AI 50", year: "2024", backgroundColor: "linear-gradient(135deg, #001885 0%, #1e40af 100%)", textColor: "#ffffff", shadow: "lg" }
                        }]
                    },
                    {
                        id: "luxai-award3-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-award3", type: "AwardBadge",
                            props: { icon: "🔬", title: "MIT TR Innovator", year: "2024", backgroundColor: "linear-gradient(135deg, #ffae00 0%, #f59e0b 100%)", textColor: "#ffffff", shadow: "lg" }
                        }]
                    },
                    {
                        id: "luxai-award4-col", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-award4", type: "AwardBadge",
                            props: { icon: "🌍", title: "WEF Tech Pioneer", year: "2023", backgroundColor: "linear-gradient(135deg, #001885 0%, #1e40af 100%)", textColor: "#ffffff", shadow: "lg" }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // TESTIMONIALS — TestimonialCarousel (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-about-testimonials",
            name: "Client Testimonials",
            description: "Auto-rotating testimonial carousel",
            structure: {
                id: "luxai-about-testimonials-section",
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
                        id: "luxai-testimonials-heading-col", width: "100%",
                        props: { flexDirection: "column", alignItems: "center", gap: 12, paddingBottom: 32 },
                        elements: [
                            { id: "luxai-testimonials-badge", type: "Badge", props: { text: "Trusted By Leaders", color: "#001885", marginBottom: 20, align: "center", bgColor: "rgba(0,24,133,0.1)", showPing: false } },
                            { id: "luxai-testimonials-title", type: "Headline", props: { text: "Voices of Enterprise Excellence", tag: "h2", align: "center", color: "#0f172a", fontWeight: "800" } }
                        ]
                    },
                    {
                        id: "luxai-testimonials-carousel-col", width: "100%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-testimonials-carousel",
                            type: "TestimonialCarousel",
                            props: {
                                cardsPerView: 2,
                                speed: 5000,
                                autoPlay: true,
                                items: [
                                    {
                                        text: "LuxAI didn't just provide a tool; they redefined our entire data architecture. The ROI was evident within the first financial quarter.",
                                        author: "Stefan Kessler",
                                        role: "CTO, Swiss National Bank",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOnSv-4pSOMNJYsnzl1mX51Xckpp9gM6WK8Db3RAIYvuaU2Co66hJI0eknZEFibITEFI7AYIFnXseh_1mD0qmeFJ6BKkTei8VHU0l8QzF5TVxz6fqc40B13aIn--rDy-W4YyKhQGMlL6IdtG2ipUdbQMz8uCsRVRgztOrANO7YzDo1W89YT3piq2-WzcJacL6aXBdZUAo1L7t5IL77rWyWNo6D1CsilmLIQ9uu_E9Y4gtApuO2M8mmplSI-zjFjDnIJjYGl8btNaZZ"
                                    },
                                    {
                                        text: "Their neural architecture reduced our drug discovery timeline by 18 months. That's not incremental improvement — that's transformational.",
                                        author: "Dr. Priya Mehta",
                                        role: "Head of AI, Novartis",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw7K889T0tt_E42xzgqtoYF_WolgPJjc6trZ6PbcEq-eRcQx2HenMEyiqgQt6TOT5Zu0tdYuw9TIk3mO152Oqe1zcgNrJV6luLTzOq7_Iv5NvXZHsTjb_G9HRQF2Qt4u9CgP6d26_EOBTbC__dLSYxkLBRwoYJKDY9OJLM9_DXoRlEREjEnOD-dUXUChAbZ6_En0r9qv6zFnNtxDeBmFhNTcNNnUX0d_KFQEuZYwB70L_cG6xsmraIZYPrLO35Pv0oF_zBLGo37STv"
                                    },
                                    {
                                        text: "The predictive maintenance system saved us $2.3M in the first year alone. LuxAI's precision engineering is unmatched.",
                                        author: "Takeshi Yamamoto",
                                        role: "VP Manufacturing, Rolex SA",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLDQVsG-vxImZ7UavMejuYYIO55wUBmZ3D45sopvhNkF71lKBmvar8mo0LKczT51G9UMnLyBnY3LK7FX0X_lcu0QH_OAcYhh1Emq7WRRZDj7-LUAxxQkTCG8S6av40BTyuvc5PZRMuioSPwnNSo3gvi5kOQLrff4YL8YhtpAZo1i5RsBsZKEEbQLRjK1qbkEwvruSQbEPLiquAa6tPJi9YgpGI7lXLSC8oHPdd2j_vMqtSHD2Ll08PARSteMvT0HVEsQL7B-kTjnKG"
                                    },
                                    {
                                        text: "From concept to the deployment of our logistics AI across 120 countries in under 6 months. Extraordinary execution.",
                                        author: "Anna Lindström",
                                        role: "COO, Maersk Digital",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvFP0rAe21kUwXOZJ279UcN5L5mGT6KHW8aojhkDL78WQqWs-Slld2Qt4v8yi2f9ArMymXn3VhRXF8WCbxu1OXAv6EEE_oeqNcG8NoPbsNRufmHt5Zulis0Kvlr64WJQuTvMWL0m1MMpCGJNiar-MLHob97pgLgBaAa4WA9DAtvpk4IfVQXDLQ3pWjC53nSMp5wPZi4kJzdPeuKDbgzoGOiZfk5HUSSWq-0RaJ-eWCaDJ0wrSKsa8M-OoiCXJ7FEtewsLiRXVz9Wr2"
                                    }
                                ]
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // VALUES — Accordion items (UNUSED RENDERER)
        // ==================================================================
        {
            key: "luxai-about-values",
            name: "Core Principles",
            description: "Expandable accordion items for company values",
            structure: {
                id: "luxai-about-values-section",
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
                        id: "luxai-values-heading-col", width: "100%",
                        props: { flexDirection: "column", alignItems: "center", gap: 12, paddingBottom: 32 },
                        elements: [
                            { id: "luxai-values-title", type: "Headline", props: { text: "Our Core Principles", tag: "h2", align: "center", color: "#ffffff", fontWeight: "900" } },
                            { id: "luxai-values-desc", type: "Paragraph", props: { text: "The pillars that define how we build, deploy, and scale intelligence.", align: "center", color: "rgba(255,255,255,0.7)", size: "lg" } }
                        ]
                    },
                    {
                        id: "luxai-value1-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-value1", type: "Accordion",
                            props: { title: "Neural Infrastructure Excellence", content: "We engineer custom neural networks optimized for heavy-duty enterprise workloads — not off-the-shelf models repackaged. Every architecture is designed from the ground up to match your domain.", accentColor: "#ffae00", bgColor: "rgba(255,255,255,0.05)", textColor: "#ffffff", secondaryTextColor: "rgba(255,255,255,0.7)" }
                        }]
                    },
                    {
                        id: "luxai-value2-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-value2", type: "Accordion",
                            props: { title: "Quantum-Safe Security", content: "We secure proprietary intelligence with cryptographic layers engineered for the post-quantum era. Your IP is protected by the most advanced encryption protocols available today.", accentColor: "#ffae00", bgColor: "rgba(255,255,255,0.05)", textColor: "#ffffff", secondaryTextColor: "rgba(255,255,255,0.7)" }
                        }]
                    },
                    {
                        id: "luxai-value3-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-value3", type: "Accordion",
                            props: { title: "Predictive Dynamics", content: "Real-time market simulation engines that anticipate disruptions before they cascade. Our models analyze thousands of data signals to provide early-warning systems for your operations.", accentColor: "#ffae00", bgColor: "rgba(255,255,255,0.05)", textColor: "#ffffff", secondaryTextColor: "rgba(255,255,255,0.7)" }
                        }]
                    },
                    {
                        id: "luxai-value4-col", width: "50%", props: { padding: 8 },
                        elements: [{
                            id: "luxai-value4", type: "Accordion",
                            props: { title: "Autonomous Operations", content: "Self-healing AI pipelines that monitor, optimize, and scale autonomously. Once deployed, our systems require minimal human oversight while maintaining enterprise-grade reliability.", accentColor: "#ffae00", bgColor: "rgba(255,255,255,0.05)", textColor: "#ffffff", secondaryTextColor: "rgba(255,255,255,0.7)" }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // CTA — HeroGradient
        // ==================================================================
        {
            key: "luxai-about-cta",
            name: "Work With Us",
            description: "CTA section",
            structure: {
                id: "luxai-about-cta-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Space Grotesk",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "luxai-about-cta-col",
                    width: "100%",
                    elements: [{
                        id: "luxai-about-cta-hero",
                        type: "HeroGradient",
                        props: {
                            badgeText: "GET STARTED",
                            title: "Ready to write your next chapter?",
                            lead: "Join hundreds of market leaders who have chosen LuxAI as their strategic partner for AI excellence.",
                            accentColor: "#ffae00",
                            secondaryColor: "#001885",
                            backgroundColor: "#0a0a0a",
                            paddingTop: 40,
                            paddingBottom: 40,
                            primaryCtaText: "Initiate Consultation",
                            primaryCtaLink: "/contact",
                            secondaryCtaText: "View Case Studies →",
                            secondaryCtaLink: "/case-studies"
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = luxaiAbout;
