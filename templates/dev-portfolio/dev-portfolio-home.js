/**
 * Developer Portfolio Template — "Neon Terminal" Dark Theme
 * ─────────────────────────────────────────────────────────
 * Aesthetic: Industrial-minimal, terminal-inspired, high-contrast
 * Industry: Software Engineers, DevOps, Product Builders
 * 
 * Color Scheme:
 *   Primary:    #22d3ee  (Cyan-400 — electric blue-green)
 *   Accent:     #f97316  (Orange-500 — warm contrast)
 *   Background: #09090b  (Zinc-950 — near-black)
 *   Surface:    #18181b  (Zinc-900 — dark cards)
 *   Border:     #27272a  (Zinc-800 — subtle edges)
 *   Text:       #fafafa  (Zinc-50 — near-white)
 *   Muted:      #a1a1aa  (Zinc-400 — secondary text)
 * 
 * Architecture: Fully modular — every element is individually
 * selectable and editable in the builder. No monolithic renderers.
 * Uses only atomic/grouped components: Badge, Headline, Paragraph,
 * Button, ButtonGroup, Image, Box, FeatureCard, TimelineItem,
 * ServiceCard, SocialLinks, MinimalFooter.
 */

export const devPortfolioHome = {

    // ╔══════════════════════════════════════════════════════════════════╗
    // ║  HEADER — Transparent Sticky Navbar                             ║
    // ╚══════════════════════════════════════════════════════════════════╝
    header: {
        key: "devp-header",
        type: "Header",
        category: "header",
        name: "Dev Portfolio Header",
        description: "Transparent sticky navbar with smooth scroll links",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                glassmorphism: true,
                fullWidth: true,
                backgroundColor: "rgba(9, 9, 11, 0.9)",
                paddingY: 0,
                backdropFilter: "blur(20px)",
                borderBottomColor: "rgba(34, 211, 238, 0.08)",
                borderBottomWidth: "1px"
            },
            columns: [{
                id: "devp-header-col",
                width: "100%",
                elements: [{
                    id: "devp-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "icon-text",
                        logoText: "~/jordan",
                        logoIcon: "terminal",
                        logoTextColor: "#22d3ee",
                        accentColor: "#22d3ee",
                        links: [
                            { label: "About", href: "#about" },
                            { label: "Stack", href: "#stack" },
                            { label: "Work", href: "#work" },
                            { label: "Path", href: "#path" },
                            { label: "Contact", href: "#contact" }
                        ],
                        linkColor: "#a1a1aa",
                        linkHoverColor: "#22d3ee",
                        backgroundColor: "transparent",
                        showButton: true,
                        buttonText: "Resume ↗",
                        buttonLink: "#",
                        buttonStyle: "outline",
                        buttonRadius: "8",
                        buttonBg: "transparent",
                        buttonTextColor: "#f97316",
                        buttonBorderColor: "#f97316"
                    }
                }]
            }]
        }
    },

    // ╔══════════════════════════════════════════════════════════════════╗
    // ║  PAGE SECTIONS                                                  ║
    // ╚══════════════════════════════════════════════════════════════════╝
    sections: [

        // ── HERO ─────────────────────────────────────────────────────
        // 2-column asymmetric: Large headline left, portrait right
        {
            key: "devp-hero",
            name: "Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#09090b",
                    paddingTop: 120,
                    paddingBottom: 100,
                    paddingX: 48,
                    fullWidth: true,
                    overflow: "hidden",
                    bgfx: {
                        effectType: "gridScan",
                        gsColor: "rgba(34, 211, 238, 0.04)",
                        gsLineWidth: 1,
                        gsGridSize: 60,
                        gsSpeed: 12
                    }
                },
                columns: [
                    // LEFT — Content
                    {
                        id: "devp-hero-left",
                        width: "58%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: 24,
                            gap: 24
                        },
                        elements: [
                            {
                                id: "devp-hero-badge",
                                type: "Badge",
                                props: {
                                    text: "⚡ Open to opportunities",
                                    color: "#09090b",
                                    bgColor: "#22d3ee",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    borderRadius: "6px",
                                    showPing: true,
                                    align: "left"
                                }
                            },
                            {
                                id: "devp-hero-headline",
                                type: "Headline",
                                props: {
                                    text: "I [engineer](gradient) systems that scale.",
                                    tag: "h1",
                                    fontSize: "84px",
                                    fontWeight: "800",
                                    lineHeight: "0.95",
                                    letterSpacing: "-0.03em",
                                    color: "#fafafa",
                                    gradient: "linear-gradient(135deg, #22d3ee, #f97316)",
                                    align: "left"
                                }
                            },
                            {
                                id: "devp-hero-desc",
                                type: "Paragraph",
                                props: {
                                    text: "Full-stack engineer obsessed with distributed systems, developer tooling, and shipping code that handles millions of requests. I write TypeScript by day and Rust by night.",
                                    color: "#a1a1aa",
                                    size: "lg",
                                    align: "left",
                                    lineHeight: "1.75"
                                }
                            },
                            {
                                id: "devp-hero-buttons",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "View My Work ↓",
                                    primaryLink: "#work",
                                    primaryBg: "#22d3ee",
                                    primaryColor: "#09090b",
                                    primaryRadius: "8px",
                                    primaryFontWeight: "700",
                                    secondaryText: "Get In Touch",
                                    secondaryLink: "#contact",
                                    secondaryBg: "transparent",
                                    secondaryColor: "#f97316",
                                    secondaryBorder: "#f97316",
                                    secondaryRadius: "8px",
                                    secondaryFontWeight: "700",
                                    gap: "16px",
                                    layout: "horizontal"
                                }
                            }
                        ]
                    },
                    // RIGHT — Portrait
                    {
                        id: "devp-hero-right",
                        width: "42%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 24
                        },
                        elements: [
                            {
                                id: "devp-hero-image",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkJYxMMPXDcBViF36WD8YWwFlRTYvYyGMSGOYDPgxIMxcqhr82dkqq-7Cen2t4cZYEcDFxGFcTqLFELCSrngD7wNyhpN313ZHQvS8Jz1o9LLMpNztQHJjMM6m-TobtQVjCBQSXKfgupmYr4cxbIPEZaYIvXDvoioYX7jP6Ka3yEPIfg53_qrG8xoNTuDeT0duDTjw7nWhXYW6o0t-Z_y5sVAVas3UDJGvvaaZejs-Tu8rTpYPTLAFH-yKTgJR_3D5b0DCLN-5g7a0",
                                    alt: "Developer portrait",
                                    borderRadius: "16px",
                                    aspectRatio: "3/4",
                                    objectFit: "cover",
                                    border: "2px solid rgba(34, 211, 238, 0.2)",
                                    shadow: "0 0 60px rgba(34, 211, 238, 0.1), 0 0 120px rgba(249, 115, 22, 0.05)"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ── ABOUT ────────────────────────────────────────────────────
        // 2-column: Image left, bio right
        {
            key: "devp-about",
            name: "About",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#09090b",
                    paddingTop: 100,
                    paddingBottom: 100,
                    paddingX: 48,
                    fullWidth: true,
                    borderTopColor: "rgba(34, 211, 238, 0.06)",
                    borderTopWidth: "1px"
                },
                columns: [
                    // LEFT — Image
                    {
                        id: "devp-about-left",
                        width: "40%",
                        props: {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 24
                        },
                        elements: [
                            {
                                id: "devp-about-img",
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZRBzdkeX8DMX3caFohON_ALr5-YhB3r8y41xBaA671CiFIjSTS_gRWiuDUn9uNnCQ74Z_HmKH31vZTLPxxWzX3Jy34kFSfA88oAyA5CQzjHw1F76vPizqrywhXBJbx4pMK_jVJoK6qSDZ2F57wt-QEj0wmH1DvfrI5iUG9C6nXCWaFoCQWINyv0Jb5Vohr-y1VJ_lAFuHHlQGzn5zq-FuLvHD1QIddec0jMrsb7RwHf_1EeuMhu--0EqGIdz1sLAsqhl7NL9xVkk",
                                    alt: "Working on code",
                                    borderRadius: "12px",
                                    aspectRatio: "4/5",
                                    objectFit: "cover",
                                    border: "1px solid #27272a"
                                }
                            }
                        ]
                    },
                    // RIGHT — Bio
                    {
                        id: "devp-about-right",
                        width: "60%",
                        props: {
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: 32,
                            gap: 20
                        },
                        elements: [
                            {
                                id: "devp-about-label",
                                type: "Badge",
                                props: {
                                    text: "// about",
                                    color: "#22d3ee",
                                    bgColor: "rgba(34, 211, 238, 0.1)",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    borderRadius: "4px",
                                    align: "left"
                                }
                            },
                            {
                                id: "devp-about-title",
                                type: "Headline",
                                props: {
                                    text: "Building software that [matters](gradient).",
                                    tag: "h2",
                                    fontSize: "48px",
                                    fontWeight: "700",
                                    lineHeight: "1.1",
                                    letterSpacing: "-0.02em",
                                    color: "#fafafa",
                                    gradient: "linear-gradient(135deg, #22d3ee, #f97316)",
                                    align: "left"
                                }
                            },
                            {
                                id: "devp-about-bio",
                                type: "Paragraph",
                                props: {
                                    text: "I'm a software engineer with 6+ years shipping production systems across fintech, developer tools, and cloud infrastructure. I care deeply about performance, code quality, and building things that make other developers' lives easier.",
                                    color: "#a1a1aa",
                                    size: "md",
                                    align: "left",
                                    lineHeight: "1.8"
                                }
                            },
                            {
                                id: "devp-about-bio2",
                                type: "Paragraph",
                                props: {
                                    text: "When I'm not pushing commits, I'm contributing to open-source projects, writing about system design on my blog, or experimenting with Rust and WebAssembly.",
                                    color: "#71717a",
                                    size: "md",
                                    align: "left",
                                    lineHeight: "1.8"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ── STATS ROW ────────────────────────────────────────────────
        // 4 equal columns, each with a big number + label
        {
            key: "devp-stats",
            name: "Stats",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#18181b",
                    paddingTop: 48,
                    paddingBottom: 48,
                    paddingX: 48,
                    fullWidth: true,
                    borderTopColor: "#27272a",
                    borderTopWidth: "1px",
                    borderBottomColor: "#27272a",
                    borderBottomWidth: "1px"
                },
                columns: [
                    {
                        id: "devp-stat-1",
                        width: "25%",
                        props: { flexDirection: "column", alignItems: "center", padding: 16 },
                        elements: [
                            {
                                id: "devp-stat-val-1",
                                type: "Headline",
                                props: { text: "6+", tag: "h3", fontSize: "48px", fontWeight: "800", color: "#22d3ee", align: "center", letterSpacing: "-0.02em" }
                            },
                            {
                                id: "devp-stat-lbl-1",
                                type: "Paragraph",
                                props: { text: "Years Engineering", color: "#71717a", size: "sm", align: "center" }
                            }
                        ]
                    },
                    {
                        id: "devp-stat-2",
                        width: "25%",
                        props: { flexDirection: "column", alignItems: "center", padding: 16 },
                        elements: [
                            {
                                id: "devp-stat-val-2",
                                type: "Headline",
                                props: { text: "40+", tag: "h3", fontSize: "48px", fontWeight: "800", color: "#f97316", align: "center", letterSpacing: "-0.02em" }
                            },
                            {
                                id: "devp-stat-lbl-2",
                                type: "Paragraph",
                                props: { text: "Projects Shipped", color: "#71717a", size: "sm", align: "center" }
                            }
                        ]
                    },
                    {
                        id: "devp-stat-3",
                        width: "25%",
                        props: { flexDirection: "column", alignItems: "center", padding: 16 },
                        elements: [
                            {
                                id: "devp-stat-val-3",
                                type: "Headline",
                                props: { text: "15+", tag: "h3", fontSize: "48px", fontWeight: "800", color: "#22d3ee", align: "center", letterSpacing: "-0.02em" }
                            },
                            {
                                id: "devp-stat-lbl-3",
                                type: "Paragraph",
                                props: { text: "OSS Libraries", color: "#71717a", size: "sm", align: "center" }
                            }
                        ]
                    },
                    {
                        id: "devp-stat-4",
                        width: "25%",
                        props: { flexDirection: "column", alignItems: "center", padding: 16 },
                        elements: [
                            {
                                id: "devp-stat-val-4",
                                type: "Headline",
                                props: { text: "10K+", tag: "h3", fontSize: "48px", fontWeight: "800", color: "#f97316", align: "center", letterSpacing: "-0.02em" }
                            },
                            {
                                id: "devp-stat-lbl-4",
                                type: "Paragraph",
                                props: { text: "GitHub Stars", color: "#71717a", size: "sm", align: "center" }
                            }
                        ]
                    }
                ]
            }
        },

        // ── TECH STACK ───────────────────────────────────────────────
        // Header + 2 rows of 4 FeatureCards
        {
            key: "devp-stack-header",
            name: "Tech Stack Header",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#09090b",
                    paddingTop: 100,
                    paddingBottom: 24,
                    paddingX: 48,
                    fullWidth: true
                },
                columns: [{
                    id: "devp-stack-hdr-col",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", gap: 12 },
                    elements: [
                        {
                            id: "devp-stack-badge",
                            type: "Badge",
                            props: { text: "// tech-stack", color: "#f97316", bgColor: "rgba(249, 115, 22, 0.1)", fontSize: "12px", fontWeight: "600", borderRadius: "4px", align: "center" }
                        },
                        {
                            id: "devp-stack-title",
                            type: "Headline",
                            props: { text: "Tools I Ship With", tag: "h2", fontSize: "44px", fontWeight: "700", color: "#fafafa", align: "center", letterSpacing: "-0.02em" }
                        },
                        {
                            id: "devp-stack-desc",
                            type: "Paragraph",
                            props: { text: "Battle-tested technologies I use to build, deploy, and scale production systems.", color: "#71717a", size: "md", align: "center" }
                        }
                    ]
                }]
            }
        },
        // Row 1 — 4 skill cards
        {
            key: "devp-stack-row1",
            name: "Tech Stack Row 1",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#09090b",
                    paddingTop: 16,
                    paddingBottom: 8,
                    paddingX: 48,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "devp-sk-1", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "devp-skill-1", type: "FeatureCard",
                            props: { iconName: "FileCode", title: "TypeScript", description: "Primary language for both frontend and backend systems.", iconColor: "#22d3ee", titleColor: "#fafafa", descriptionColor: "#71717a", backgroundColor: "#18181b", borderRadius: "12px", padding: "24px" }
                        }]
                    },
                    {
                        id: "devp-sk-2", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "devp-skill-2", type: "FeatureCard",
                            props: { iconName: "Atom", title: "React / Next.js", description: "Building performant SPAs and SSR applications at scale.", iconColor: "#22d3ee", titleColor: "#fafafa", descriptionColor: "#71717a", backgroundColor: "#18181b", borderRadius: "12px", padding: "24px" }
                        }]
                    },
                    {
                        id: "devp-sk-3", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "devp-skill-3", type: "FeatureCard",
                            props: { iconName: "Server", title: "Node.js", description: "High-throughput APIs, microservices, and real-time systems.", iconColor: "#f97316", titleColor: "#fafafa", descriptionColor: "#71717a", backgroundColor: "#18181b", borderRadius: "12px", padding: "24px" }
                        }]
                    },
                    {
                        id: "devp-sk-4", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "devp-skill-4", type: "FeatureCard",
                            props: { iconName: "Braces", title: "Python", description: "Data pipelines, ML tooling, and automation scripts.", iconColor: "#f97316", titleColor: "#fafafa", descriptionColor: "#71717a", backgroundColor: "#18181b", borderRadius: "12px", padding: "24px" }
                        }]
                    }
                ]
            }
        },
        // Row 2 — 4 skill cards
        {
            key: "devp-stack-row2",
            name: "Tech Stack Row 2",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#09090b",
                    paddingTop: 8,
                    paddingBottom: 100,
                    paddingX: 48,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "devp-sk-5", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "devp-skill-5", type: "FeatureCard",
                            props: { iconName: "Database", title: "PostgreSQL", description: "Complex queries, migrations, and database architecture.", iconColor: "#22d3ee", titleColor: "#fafafa", descriptionColor: "#71717a", backgroundColor: "#18181b", borderRadius: "12px", padding: "24px" }
                        }]
                    },
                    {
                        id: "devp-sk-6", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "devp-skill-6", type: "FeatureCard",
                            props: { iconName: "Container", title: "Docker / K8s", description: "Containerization, orchestration, and CI/CD pipelines.", iconColor: "#22d3ee", titleColor: "#fafafa", descriptionColor: "#71717a", backgroundColor: "#18181b", borderRadius: "12px", padding: "24px" }
                        }]
                    },
                    {
                        id: "devp-sk-7", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "devp-skill-7", type: "FeatureCard",
                            props: { iconName: "Cloud", title: "AWS / GCP", description: "Lambda, EC2, S3, CloudFront, BigQuery, Cloud Run.", iconColor: "#f97316", titleColor: "#fafafa", descriptionColor: "#71717a", backgroundColor: "#18181b", borderRadius: "12px", padding: "24px" }
                        }]
                    },
                    {
                        id: "devp-sk-8", width: "25%", props: { padding: 8 },
                        elements: [{
                            id: "devp-skill-8", type: "FeatureCard",
                            props: { iconName: "GitBranch", title: "Git / CI-CD", description: "GitHub Actions, automated testing, trunk-based dev.", iconColor: "#f97316", titleColor: "#fafafa", descriptionColor: "#71717a", backgroundColor: "#18181b", borderRadius: "12px", padding: "24px" }
                        }]
                    }
                ]
            }
        },

        // ── PROJECTS ─────────────────────────────────────────────────
        // Header
        {
            key: "devp-work-header",
            name: "Projects Header",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#18181b",
                    paddingTop: 100,
                    paddingBottom: 24,
                    paddingX: 48,
                    fullWidth: true,
                    borderTopColor: "#27272a",
                    borderTopWidth: "1px"
                },
                columns: [{
                    id: "devp-work-hdr-col",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", gap: 12 },
                    elements: [
                        {
                            id: "devp-work-badge",
                            type: "Badge",
                            props: { text: "// featured-work", color: "#22d3ee", bgColor: "rgba(34, 211, 238, 0.1)", fontSize: "12px", fontWeight: "600", borderRadius: "4px", align: "center" }
                        },
                        {
                            id: "devp-work-title",
                            type: "Headline",
                            props: { text: "Things I've Built", tag: "h2", fontSize: "44px", fontWeight: "700", color: "#fafafa", align: "center", letterSpacing: "-0.02em" }
                        }
                    ]
                }]
            }
        },
        // Project 1 — Image Left, Text Right
        {
            key: "devp-project-1",
            name: "Project 1",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#18181b",
                    paddingTop: 32,
                    paddingBottom: 32,
                    paddingX: 48,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "devp-p1-img-col", width: "55%", props: { padding: 12 },
                        elements: [{
                            id: "devp-p1-img", type: "Image",
                            props: {
                                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBbmD3HaEJMPj3DTQYToVMdgG1aXfo47q4EJr8DYCq7Y7_J-g47MZ6bOR6P4ExMCw9ThQqB2ClkHyE6_xi-z-J-9b6Z5BwOSzTT5Uz7WGwNuQ2DRGjOOc3un-BHSl4yQEtFqfw3HMWa-_s6f962ckdgBfjzWz_l1e_oLhooNkgoRr4nu3rFbwxrJhqUQh7nziXV7o9O83hmu51nBHylImjqTsibJXs27Njqz5uCx2jy_njr23jaSoEk8TXNv5P1db_Vpuui1JIqro",
                                alt: "CloudSync Engine screenshot", borderRadius: "12px", aspectRatio: "16/9", objectFit: "cover", border: "1px solid #27272a"
                            }
                        }]
                    },
                    {
                        id: "devp-p1-txt-col", width: "45%",
                        props: { flexDirection: "column", justifyContent: "center", padding: 32, gap: 16 },
                        elements: [
                            {
                                id: "devp-p1-tag", type: "Badge",
                                props: { text: "Backend · 2024", color: "#f97316", bgColor: "rgba(249, 115, 22, 0.1)", fontSize: "11px", fontWeight: "600", borderRadius: "4px", align: "left" }
                            },
                            {
                                id: "devp-p1-name", type: "Headline",
                                props: { text: "CloudSync Engine", tag: "h3", fontSize: "32px", fontWeight: "700", color: "#fafafa", align: "left", letterSpacing: "-0.01em" }
                            },
                            {
                                id: "devp-p1-desc", type: "Paragraph",
                                props: { text: "A real-time data synchronization engine built with WebSockets, CRDT-based conflict resolution, and offline-first architecture. Handles 50K+ concurrent connections with sub-100ms latency.", color: "#a1a1aa", size: "md", align: "left", lineHeight: "1.7" }
                            },
                            {
                                id: "devp-p1-cta", type: "Button",
                                props: { text: "View Project →", variant: "outline", backgroundColor: "transparent", textColor: "#22d3ee", borderColor: "#22d3ee", borderRadius: "8px", size: "md" }
                            }
                        ]
                    }
                ]
            }
        },
        // Project 2 — Text Left, Image Right (flipped layout)
        {
            key: "devp-project-2",
            name: "Project 2",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#18181b",
                    paddingTop: 32,
                    paddingBottom: 32,
                    paddingX: 48,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "devp-p2-txt-col", width: "45%",
                        props: { flexDirection: "column", justifyContent: "center", padding: 32, gap: 16 },
                        elements: [
                            {
                                id: "devp-p2-tag", type: "Badge",
                                props: { text: "Full-Stack · 2024", color: "#22d3ee", bgColor: "rgba(34, 211, 238, 0.1)", fontSize: "11px", fontWeight: "600", borderRadius: "4px", align: "left" }
                            },
                            {
                                id: "devp-p2-name", type: "Headline",
                                props: { text: "DevBoard Dashboard", tag: "h3", fontSize: "32px", fontWeight: "700", color: "#fafafa", align: "left", letterSpacing: "-0.01em" }
                            },
                            {
                                id: "devp-p2-desc", type: "Paragraph",
                                props: { text: "Developer analytics dashboard with real-time CI/CD pipeline monitoring, team velocity metrics, and customizable widgets. Built with Next.js 14, D3.js, and tRPC.", color: "#a1a1aa", size: "md", align: "left", lineHeight: "1.7" }
                            },
                            {
                                id: "devp-p2-cta", type: "Button",
                                props: { text: "View Project →", variant: "outline", backgroundColor: "transparent", textColor: "#f97316", borderColor: "#f97316", borderRadius: "8px", size: "md" }
                            }
                        ]
                    },
                    {
                        id: "devp-p2-img-col", width: "55%", props: { padding: 12 },
                        elements: [{
                            id: "devp-p2-img", type: "Image",
                            props: {
                                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZRBzdkeX8DMX3caFohON_ALr5-YhB3r8y41xBaA671CiFIjSTS_gRWiuDUn9uNnCQ74Z_HmKH31vZTLPxxWzX3Jy34kFSfA88oAyA5CQzjHw1F76vPizqrywhXBJbx4pMK_jVJoK6qSDZ2F57wt-QEj0wmH1DvfrI5iUG9C6nXCWaFoCQWINyv0Jb5Vohr-y1VJ_lAFuHHlQGzn5zq-FuLvHD1QIddec0jMrsb7RwHf_1EeuMhu--0EqGIdz1sLAsqhl7NL9xVkk",
                                alt: "DevBoard Dashboard screenshot", borderRadius: "12px", aspectRatio: "16/9", objectFit: "cover", border: "1px solid #27272a"
                            }
                        }]
                    }
                ]
            }
        },
        // Project 3 — Image Left, Text Right
        {
            key: "devp-project-3",
            name: "Project 3",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#18181b",
                    paddingTop: 32,
                    paddingBottom: 100,
                    paddingX: 48,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "devp-p3-img-col", width: "55%", props: { padding: 12 },
                        elements: [{
                            id: "devp-p3-img", type: "Image",
                            props: {
                                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVGarH5OWHhPP505ysz07BekACEjsnp0XXv_1FQ6t-rYcaSyh1U4eiIXQErow0qwhTkXIdvlY0UcTouaD1lGdqTtmbnAX-SfDj09SCOSQga0UaUhQireFHajRFX3id65QyIhd7lsx2trv3W4N0CwlQY-VWewhoJ2wy-taPnUBUio4CIrrn2vmVMik6pEgUb-X9cakcAHQGSdz7bnTqcPTZhnq1BMYPNYvM2PPQytvwV6QSJK1g2V0BMiubgiRG6cv7DHmuRPhY4Tc",
                                alt: "Archon CLI screenshot", borderRadius: "12px", aspectRatio: "16/9", objectFit: "cover", border: "1px solid #27272a"
                            }
                        }]
                    },
                    {
                        id: "devp-p3-txt-col", width: "45%",
                        props: { flexDirection: "column", justifyContent: "center", padding: 32, gap: 16 },
                        elements: [
                            {
                                id: "devp-p3-tag", type: "Badge",
                                props: { text: "Open Source · 2023", color: "#f97316", bgColor: "rgba(249, 115, 22, 0.1)", fontSize: "11px", fontWeight: "600", borderRadius: "4px", align: "left" }
                            },
                            {
                                id: "devp-p3-name", type: "Headline",
                                props: { text: "Archon CLI", tag: "h3", fontSize: "32px", fontWeight: "700", color: "#fafafa", align: "left", letterSpacing: "-0.01em" }
                            },
                            {
                                id: "devp-p3-desc", type: "Paragraph",
                                props: { text: "Opinionated CLI for scaffolding full-stack TypeScript projects with pre-configured ESLint, Vitest, Docker, and GitHub Actions. 2K+ weekly npm downloads.", color: "#a1a1aa", size: "md", align: "left", lineHeight: "1.7" }
                            },
                            {
                                id: "devp-p3-cta", type: "Button",
                                props: { text: "View on GitHub →", variant: "outline", backgroundColor: "transparent", textColor: "#22d3ee", borderColor: "#22d3ee", borderRadius: "8px", size: "md" }
                            }
                        ]
                    }
                ]
            }
        },

        // ── EXPERIENCE TIMELINE ──────────────────────────────────────
        // Header + stacked TimelineItems
        {
            key: "devp-experience",
            name: "Experience",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#09090b",
                    paddingTop: 100,
                    paddingBottom: 100,
                    paddingX: 48,
                    fullWidth: true,
                    borderTopColor: "#27272a",
                    borderTopWidth: "1px"
                },
                columns: [{
                    id: "devp-exp-col",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", gap: 16, maxWidth: "720px", margin: "0 auto" },
                    elements: [
                        {
                            id: "devp-exp-badge",
                            type: "Badge",
                            props: { text: "// career-path", color: "#22d3ee", bgColor: "rgba(34, 211, 238, 0.1)", fontSize: "12px", fontWeight: "600", borderRadius: "4px", align: "center" }
                        },
                        {
                            id: "devp-exp-title",
                            type: "Headline",
                            props: { text: "Where I've Been", tag: "h2", fontSize: "44px", fontWeight: "700", color: "#fafafa", align: "center", letterSpacing: "-0.02em" }
                        },
                        {
                            id: "devp-exp-1",
                            type: "TimelineItem",
                            props: {
                                year: "2022 — Present",
                                title: "Senior Software Engineer — ScaleOps",
                                description: "Architected real-time data pipeline processing 2M+ events/day. Led monolith→microservices migration, reducing p99 latency by 60%. Mentoring a team of 4 engineers.",
                                icon: "Rocket",
                                accentColor: "#22d3ee",
                                textColor: "#fafafa"
                            }
                        },
                        {
                            id: "devp-exp-2",
                            type: "TimelineItem",
                            props: {
                                year: "2020 — 2022",
                                title: "Full-Stack Engineer — FinanceFlow (YC W20)",
                                description: "Built the core payments platform handling $50M+ in transactions. Implemented real-time fraud detection using ML models and automated compliance workflows.",
                                icon: "Banknote",
                                accentColor: "#f97316",
                                textColor: "#fafafa"
                            }
                        },
                        {
                            id: "devp-exp-3",
                            type: "TimelineItem",
                            props: {
                                year: "2018 — 2020",
                                title: "Software Engineer — TechCorp",
                                description: "Developed internal tooling and customer-facing dashboards. Introduced CI/CD pipelines and automated testing, increasing deployment frequency from weekly to 5x daily.",
                                icon: "Code",
                                accentColor: "#22d3ee",
                                textColor: "#fafafa"
                            }
                        }
                    ]
                }]
            }
        },

        // ── CONTACT CTA ──────────────────────────────────────────────
        // Centered call-to-action
        {
            key: "devp-contact",
            name: "Contact CTA",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#09090b",
                    paddingTop: 100,
                    paddingBottom: 120,
                    paddingX: 48,
                    fullWidth: true,
                    borderTopColor: "rgba(34, 211, 238, 0.06)",
                    borderTopWidth: "1px"
                },
                columns: [{
                    id: "devp-cta-col",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", gap: 24 },
                    elements: [
                        {
                            id: "devp-cta-badge",
                            type: "Badge",
                            props: { text: "// get-in-touch", color: "#f97316", bgColor: "rgba(249, 115, 22, 0.1)", fontSize: "12px", fontWeight: "600", borderRadius: "4px", align: "center" }
                        },
                        {
                            id: "devp-cta-headline",
                            type: "Headline",
                            props: {
                                text: "Let's build something [great](gradient).",
                                tag: "h2",
                                fontSize: "56px",
                                fontWeight: "700",
                                color: "#fafafa",
                                gradient: "linear-gradient(135deg, #22d3ee, #f97316)",
                                align: "center",
                                letterSpacing: "-0.02em"
                            }
                        },
                        {
                            id: "devp-cta-desc",
                            type: "Paragraph",
                            props: { text: "Got a project, a role, or just want to talk systems design? I'm always up for a conversation. Reach out and let's make something happen.", color: "#a1a1aa", size: "lg", align: "center", lineHeight: "1.7" }
                        },
                        {
                            id: "devp-cta-buttons",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "jordan@hey.com",
                                primaryLink: "mailto:jordan@hey.com",
                                primaryBg: "#22d3ee",
                                primaryColor: "#09090b",
                                primaryRadius: "8px",
                                primaryFontWeight: "700",
                                secondaryText: "Schedule a Call",
                                secondaryLink: "#",
                                secondaryBg: "transparent",
                                secondaryColor: "#f97316",
                                secondaryBorder: "#f97316",
                                secondaryRadius: "8px",
                                secondaryFontWeight: "700",
                                gap: "16px",
                                layout: "horizontal"
                            }
                        },
                        {
                            id: "devp-cta-socials",
                            type: "SocialLinks",
                            props: {
                                links: [
                                    { platform: "github", url: "#" },
                                    { platform: "twitter", url: "#" },
                                    { platform: "linkedin", url: "#" }
                                ],
                                iconColor: "#52525b",
                                size: "md"
                            }
                        }
                    ]
                }]
            }
        }
    ],

    // ╔══════════════════════════════════════════════════════════════════╗
    // ║  FOOTER — Minimal                                               ║
    // ╚══════════════════════════════════════════════════════════════════╝
    footer: {
        key: "devp-footer",
        type: "Footer",
        category: "footer",
        name: "Dev Portfolio Footer",
        structure: {
            type: "Footer",
            defaultProps: {
                backgroundColor: "#09090b",
                paddingY: 40,
                textColor: "#52525b",
                borderTopColor: "#27272a",
                borderTopWidth: "1px"
            },
            columns: [{
                id: "devp-footer-col",
                width: "100%",
                elements: [{
                    id: "devp-footer-el",
                    type: "MinimalFooter",
                    props: {
                        brandName: "~/jordan",
                        badgeText: ".dev",
                        badgeColor: "#22d3ee",
                        links: [
                            { label: "GitHub", url: "#" },
                            { label: "Twitter", url: "#" },
                            { label: "LinkedIn", url: "#" },
                            { label: "Blog", url: "#" }
                        ],
                        copyright: "© 2024 Jordan. Crafted with TypeScript and too much coffee.",
                        backgroundColor: "#09090b",
                        textColor: "#3f3f46",
                        showSocials: false
                    }
                }]
            }]
        }
    }
};
