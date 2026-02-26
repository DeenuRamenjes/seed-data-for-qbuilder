/**
 * Blog Sections Seed Data - Professional & Responsive
 * Fully responsive and theme-aware blog section templates
 * Supports: Blog Listing, Grid, Featured Articles, Categories, Tags, AuthorBio, RelatedPosts,
 * NewsletterArchive, Whitepapers, CaseStudyLibrary, Documentation, KnowledgeBase
 */

export const blogSections = [
    {
        key: "blog-listing-standard",
        type: "BlogListing",
        category: "blog",
        name: "Blog Listing",
        description: "Professional list layout with featured blog posts",
        structure: {
            columns: [
                {
                    id: "blog-listing-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        padding: "80px 40px",
                        backgroundColor: "var(--theme-background)"
                    },
                    elements: [
                        {
                            id: "blog-listing-header",
                            type: "Heading",
                            props: {
                                text: "Latest Articles & Insights",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, var(--theme-text))",
                                fontWeight: "700",
                                fontSize: "42px"
                            }
                        },
                        {
                            id: "blog-listing-subheader",
                            type: "Heading",
                            props: {
                                text: "Discover in-depth guides, industry trends, and expert tips to elevate your skills",
                                tag: "p",
                                align: "center",
                                color: "var(--theme-secondary-text, #6b7280)",
                                fontWeight: "400",
                                fontSize: "18px"
                            }
                        },
                        {
                            id: "blog-listing-spacer",
                            type: "Spacer",
                            props: { height: "sm" }
                        },
                        {
                            id: "blog-listing-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 1, tablet: 1, mobile: 1 }, gap: 32 },
                                elements: [
                                    {
                                        id: "blog-listing-1",
                                        type: "BlogListing",
                                        props: {
                                            title: "Building Scalable Web Applications in 2026",
                                            excerpt: "A comprehensive guide to modern architecture patterns, performance optimization, and best practices for building applications that grow with your business.",
                                            date: "Jan 28, 2026",
                                            author: "Sarah Anderson",
                                            readTime: "12 min read",
                                            category: "Architecture",
                                            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
                                            bgColor: "var(--theme-background)",
                                            accentColor: "var(--theme-primary, var(--theme-primary))",
                                            textColor: "var(--theme-text, var(--theme-text))",
                                            secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    },
                                    {
                                        id: "blog-listing-2",
                                        type: "BlogListing",
                                        props: {
                                            title: "React Hooks Deep Dive: Mastering Advanced Patterns",
                                            excerpt: "Explore custom hooks, hooks performance optimization, and proven patterns used by leading tech companies to structure large-scale React applications.",
                                            date: "Jan 25, 2026",
                                            author: "James Park",
                                            readTime: "15 min read",
                                            category: "React",
                                            image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop",
                                            bgColor: "var(--theme-background)",
                                            accentColor: "var(--theme-primary, #0284c7)",
                                            textColor: "var(--theme-text, var(--theme-text))",
                                            secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    },
                                    {
                                        id: "blog-listing-3",
                                        type: "BlogListing",
                                        props: {
                                            title: "Database Design Principles Every Developer Should Know",
                                            excerpt: "Learn normalization, indexing strategies, query optimization, and how to design databases that perform efficiently at scale.",
                                            date: "Jan 22, 2026",
                                            author: "Marcus Chen",
                                            readTime: "18 min read",
                                            category: "Database",
                                            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
                                            bgColor: "var(--theme-background)",
                                            accentColor: "var(--theme-primary, #059669)",
                                            textColor: "var(--theme-text, var(--theme-text))",
                                            secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "blog-grid-standard",
        type: "BlogGrid",
        category: "blog",
        name: "Blog Grid",
        description: "Professional grid layout with featured blog cards",
        structure: {
            columns: [
                {
                    id: "blog-grid-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "80px 40px", backgroundColor: "var(--theme-background)" },
                    elements: [
                        {
                            id: "blog-grid-header",
                            type: "Heading",
                            props: { text: "Explore Our Blog", tag: "h2", align: "center", color: "var(--theme-text, var(--theme-text))", fontWeight: "700", fontSize: "42px" }
                        },
                        {
                            id: "blog-grid-desc",
                            type: "Heading",
                            props: { text: "Quality articles, tutorials, and industry insights delivered weekly", tag: "p", align: "center", color: "var(--theme-secondary-text, #6b7280)", fontWeight: "400", fontSize: "18px" }
                        },
                        { id: "blog-grid-spacer", type: "Spacer", props: { height: "sm" } },
                        {
                            id: "blog-grid-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 3, tablet: 2, mobile: 1 }, gap: 32 },
                                elements: [
                                    { id: "blog-grid-1", type: "BlogGrid", props: { title: "Next.js 14: Advanced Routing", excerpt: "Master the new App Router with advanced patterns for building lightning-fast applications with improved performance metrics.", date: "Jan 20, 2026", author: "Alex Rivera", readTime: "8 min read", category: "Framework", image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=350&fit=crop", bgColor: "var(--theme-background)", accentColor: "#0284c7", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "blog-grid-2", type: "BlogGrid", props: { title: "TypeScript Best Practices", excerpt: "Discover advanced TypeScript patterns, utility types, and techniques to write more robust and maintainable code.", date: "Jan 18, 2026", author: "Emma Woods", readTime: "10 min read", category: "TypeScript", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=350&fit=crop", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "blog-grid-3", type: "BlogGrid", props: { title: "CSS Grid Mastery", excerpt: "Learn modern CSS Grid techniques for creating responsive layouts without media queries, accessible and performant.", date: "Jan 16, 2026", author: "David Kim", readTime: "7 min read", category: "CSS", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=350&fit=crop", bgColor: "var(--theme-background)", accentColor: "#059669", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "blog-grid-4", type: "BlogGrid", props: { title: "Web Performance Optimization", excerpt: "Reduce load times by 70% with proven techniques: lazy loading, code splitting, caching strategies, and image optimization.", date: "Jan 14, 2026", author: "Lisa Chen", readTime: "14 min read", category: "Performance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "blog-grid-5", type: "BlogGrid", props: { title: "Testing Strategies in React", excerpt: "Unit testing, integration testing, and e2e testing: comprehensive guide to building confidence in your code.", date: "Jan 12, 2026", author: "Tom Harris", readTime: "11 min read", category: "Testing", image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=350&fit=crop", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "blog-grid-6", type: "BlogGrid", props: { title: "API Design Principles", excerpt: "Build RESTful and GraphQL APIs that are intuitive, scalable, and future-proof with best practices from industry experts.", date: "Jan 10, 2026", author: "Sophie Martin", readTime: "9 min read", category: "Backend", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=350&fit=crop", bgColor: "var(--theme-background)", accentColor: "#ec4899", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "featured-articles-standard",
        type: "FeaturedArticles",
        category: "blog",
        name: "Featured Articles",
        description: "Prominent featured articles showcase with premium styling",
        structure: {
            columns: [
                {
                    id: "featured-articles-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "80px 40px", backgroundColor: "var(--theme-text)" },
                    elements: [
                        {
                            id: "featured-header",
                            type: "Heading",
                            props: { text: "Editor's Picks", tag: "h2", align: "center", color: "var(--theme-text)", fontWeight: "700", fontSize: "42px" }
                        },
                        {
                            id: "featured-subheader",
                            type: "Heading",
                            props: { text: "Hand-selected articles curated by our expert team", tag: "p", align: "center", color: "var(--theme-border)", fontWeight: "400", fontSize: "18px" }
                        },
                        { id: "featured-spacer", type: "Spacer", props: { height: "sm" } },
                        {
                            id: "featured-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 2, tablet: 1, mobile: 1 }, gap: 32 },
                                elements: [
                                    {
                                        id: "featured-1",
                                        type: "FeaturedArticles",
                                        props: {
                                            title: "The Future of Web Development: Trends to Watch in 2026",
                                            excerpt: "Explore emerging technologies, architectural patterns, and industry trends that will shape web development. From AI integration to edge computing, discover what's next.",
                                            date: "Jan 26, 2026",
                                            author: "Dr. Rachel Thompson",
                                            readTime: "16 min read",
                                            category: "Trends",
                                            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&h=600&fit=crop",
                                            bgColor: "var(--theme-text)",
                                            accentColor: "#60a5fa",
                                            textColor: "var(--theme-text)",
                                            secondaryTextColor: "var(--theme-border)"
                                        }
                                    },
                                    {
                                        id: "featured-2",
                                        type: "FeaturedArticles",
                                        props: {
                                            title: "Production-Ready Code: Security, Performance & Reliability",
                                            excerpt: "Build applications that scale. Learn security best practices, performance optimization techniques, and reliability patterns used by companies serving millions of users.",
                                            date: "Jan 24, 2026",
                                            author: "Michael Stanford",
                                            readTime: "19 min read",
                                            category: "Engineering",
                                            image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1000&h=600&fit=crop",
                                            bgColor: "var(--theme-text)",
                                            accentColor: "#34d399",
                                            textColor: "var(--theme-text)",
                                            secondaryTextColor: "var(--theme-border)"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "categories-standard",
        type: "Categories",
        category: "blog",
        name: "Blog Categories",
        description: "Organized categories with article counts",
        structure: {
            columns: [
                {
                    id: "categories-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "80px 40px", backgroundColor: "var(--theme-background)" },
                    elements: [
                        {
                            id: "categories-header",
                            type: "Heading",
                            props: { text: "Browse by Category", tag: "h2", align: "center", color: "var(--theme-text, var(--theme-text))", fontWeight: "700", fontSize: "42px" }
                        },
                        {
                            id: "categories-desc",
                            type: "Heading",
                            props: { text: "Find articles on topics that matter to you", tag: "p", align: "center", color: "var(--theme-secondary-text, #6b7280)", fontWeight: "400", fontSize: "18px" }
                        },
                        { id: "categories-spacer", type: "Spacer", props: { height: "sm" } },
                        {
                            id: "categories-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 5, tablet: 3, mobile: 2 }, gap: 20 },
                                elements: [
                                    { id: "cat-1", type: "Categories", props: { name: "Web Dev", count: 48, icon: "🚀", bgColor: "#eff6ff", accentColor: "#0284c7", textColor: "var(--theme-text)" } },
                                    { id: "cat-2", type: "Categories", props: { name: "Design", count: 32, icon: "🎨", bgColor: "#fef2f2", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)" } },
                                    { id: "cat-3", type: "Categories", props: { name: "DevOps", count: 28, icon: "⚙️", bgColor: "#fef3c7", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)" } },
                                    { id: "cat-4", type: "Categories", props: { name: "Security", count: 24, icon: "🔐", bgColor: "#ecfdf5", accentColor: "#059669", textColor: "var(--theme-text)" } },
                                    { id: "cat-5", type: "Categories", props: { name: "Database", count: 36, icon: "🗄️", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "tags-standard",
        type: "Tags",
        category: "blog",
        name: "Blog Tags",
        description: "Popular tags for content discovery",
        structure: {
            columns: [
                {
                    id: "tags-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "var(--theme-background)" },
                    elements: [
                        { id: "tags-header", type: "Heading", props: { text: "Popular Tags", tag: "h3", align: "left", color: "var(--theme-text, var(--theme-text))", fontWeight: "700", fontSize: "28px" } },
                        { id: "tags-spacer", type: "Spacer", props: { height: "md" } },
                        {
                            id: "tags-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 8, tablet: 5, mobile: 3 }, gap: 12 },
                                elements: [
                                    { id: "tag-1", type: "Tags", props: { name: "React", count: 24 } },
                                    { id: "tag-2", type: "Tags", props: { name: "TypeScript", count: 18 } },
                                    { id: "tag-3", type: "Tags", props: { name: "Next.js", count: 16 } },
                                    { id: "tag-4", type: "Tags", props: { name: "CSS", count: 14 } },
                                    { id: "tag-5", type: "Tags", props: { name: "Performance", count: 12 } },
                                    { id: "tag-6", type: "Tags", props: { name: "Testing", count: 10 } },
                                    { id: "tag-7", type: "Tags", props: { name: "Backend", count: 15 } },
                                    { id: "tag-8", type: "Tags", props: { name: "API Design", count: 9 } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "author-bio-standard",
        type: "AuthorBio",
        category: "blog",
        name: "Author Bio",
        description: "Featured author profile with credentials",
        structure: {
            columns: [
                {
                    id: "author-bio-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "var(--theme-border)" },
                    elements: [
                        { id: "author-header", type: "Heading", props: { text: "About the Author", tag: "h3", align: "left", color: "var(--theme-text, var(--theme-text))", fontWeight: "700", fontSize: "28px" } },
                        { id: "author-spacer", type: "Spacer", props: { height: "md" } },
                        {
                            id: "author-card",
                            type: "AuthorBio",
                            props: {
                                name: "Sarah Anderson",
                                role: "Senior Full-Stack Engineer & Technical Architect",
                                bio: "12+ years building scalable web applications. Speaker at major tech conferences. Open source contributor with expertise in React, Node.js, cloud infrastructure, and team leadership. Passionate about mentoring developers and sharing knowledge.",
                                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
                                socialLinks: [
                                    { platform: "twitter", url: "https://twitter.com", icon: "𝕯" },
                                    { platform: "linkedin", url: "https://linkedin.com", icon: "in" },
                                    { platform: "github", url: "https://github.com", icon: "⚙️" },
                                    { platform: "email", url: "mailto:sarah@example.com", icon: "✉️" }
                                ],
                                bgColor: "var(--theme-background)",
                                accentColor: "var(--theme-primary)",
                                textColor: "var(--theme-text, var(--theme-text))",
                                secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "related-posts-standard",
        type: "RelatedPosts",
        category: "blog",
        name: "Related Posts",
        description: "Curated related articles for deeper learning",
        structure: {
            columns: [
                {
                    id: "related-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "60px 40px", backgroundColor: "var(--theme-background)" },
                    elements: [
                        { id: "related-header", type: "Heading", props: { text: "Related Articles You Might Enjoy", tag: "h3", align: "left", color: "var(--theme-text, var(--theme-text))", fontWeight: "700", fontSize: "28px" } },
                        { id: "related-spacer", type: "Spacer", props: { height: "lg" } },
                        {
                            id: "related-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 4, tablet: 2, mobile: 1 }, gap: 24 },
                                elements: [
                                    { id: "rel-1", type: "RelatedPosts", props: { title: "Advanced React Patterns", category: "React", date: "Jan 15, 2026", image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop", bgColor: "var(--theme-background)", accentColor: "#0284c7", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "rel-2", type: "RelatedPosts", props: { title: "State Management Strategies", category: "Architecture", date: "Jan 12, 2026", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop", bgColor: "var(--theme-background)", accentColor: "#059669", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "rel-3", type: "RelatedPosts", props: { title: "Form Handling Best Practices", category: "Frontend", date: "Jan 10, 2026", image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "rel-4", type: "RelatedPosts", props: { title: "Error Handling in Production", category: "Backend", date: "Jan 8, 2026", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "newsletter-standard",
        type: "NewsletterArchive",
        category: "blog",
        name: "Newsletter",
        description: "Newsletter subscription with compelling CTA",
        structure: {
            columns: [
                {
                    id: "newsletter-col",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 40px", backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
                    elements: [
                        {
                            id: "newsletter-card",
                            type: "NewsletterArchive",
                            props: {
                                title: "Stay Updated with Weekly Insights",
                                description: "Get curated articles, industry trends, and expert tips delivered to your inbox every week. Join 5,000+ developers.",
                                placeholder: "you@example.com",
                                buttonText: "Subscribe Now",
                                bgColor: "rgba(255, 255, 255, 0.95)",
                                accentColor: "#667eea",
                                textColor: "var(--theme-text)"
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "whitepapers-standard",
        type: "Whitepapers",
        category: "blog",
        name: "Whitepapers",
        description: "In-depth technical resources",
        structure: {
            columns: [
                {
                    id: "whitepapers-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "80px 40px", backgroundColor: "var(--theme-background)" },
                    elements: [
                        { id: "wp-header", type: "Heading", props: { text: "Download Our Whitepapers", tag: "h2", align: "center", color: "var(--theme-text, var(--theme-text))", fontWeight: "700", fontSize: "42px" } },
                        { id: "wp-desc", type: "Heading", props: { text: "In-depth technical resources to level up your skills", tag: "p", align: "center", color: "var(--theme-secondary-text, #6b7280)", fontWeight: "400", fontSize: "18px" } },
                        { id: "wp-spacer", type: "Spacer", props: { height: "sm" } },
                        {
                            id: "wp-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 3, tablet: 2, mobile: 1 }, gap: 28 },
                                elements: [
                                    { id: "wp-1", type: "Whitepapers", props: { title: "The Modern Web Stack 2026", description: "Complete guide to latest technologies, frameworks, and best practices for production applications.", image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=500&h=400&fit=crop", downloadText: "Download PDF (8.2 MB)", bgColor: "var(--theme-background)", accentColor: "#0284c7", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "wp-2", type: "Whitepapers", props: { title: "Scalability Architecture Guide", description: "Learn patterns and practices for building systems that handle millions of concurrent users.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop", downloadText: "Download PDF (12.5 MB)", bgColor: "var(--theme-background)", accentColor: "#059669", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "wp-3", type: "Whitepapers", props: { title: "Security Best Practices Handbook", description: "Comprehensive security guide covering OWASP, authentication, encryption, and threat mitigation.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop", downloadText: "Download PDF (10.8 MB)", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "case-studies-standard",
        type: "CaseStudyLibrary",
        category: "blog",
        name: "Case Studies",
        description: "Real-world success stories and implementations",
        structure: {
            columns: [
                {
                    id: "cs-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "80px 40px", backgroundColor: "var(--theme-background)" },
                    elements: [
                        { id: "cs-header", type: "Heading", props: { text: "Case Studies", tag: "h2", align: "center", color: "var(--theme-text, var(--theme-text))", fontWeight: "700", fontSize: "42px" } },
                        { id: "cs-desc", type: "Heading", props: { text: "See how leading companies solved real-world challenges", tag: "p", align: "center", color: "var(--theme-secondary-text, #6b7280)", fontWeight: "400", fontSize: "18px" } },
                        { id: "cs-spacer", type: "Spacer", props: { height: "sm" } },
                        {
                            id: "cs-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 3, tablet: 2, mobile: 1 }, gap: 28 },
                                elements: [
                                    { id: "cs-1", type: "CaseStudyLibrary", props: { title: "E-commerce Platform Scaling", company: "RetailCorp", industry: "Retail", result: "350% revenue growth", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=400&fit=crop", bgColor: "var(--theme-background)", accentColor: "#0284c7", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "cs-2", type: "CaseStudyLibrary", props: { title: "Real-time Analytics System", company: "DataFlow Inc.", industry: "Analytics", result: "10x faster queries", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop", bgColor: "var(--theme-background)", accentColor: "#059669", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "cs-3", type: "CaseStudyLibrary", props: { title: "Microservices Migration", company: "FinanceHub", industry: "FinTech", result: "99.99% uptime", image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "documentation-standard",
        type: "Documentation",
        category: "blog",
        name: "Documentation",
        description: "Technical documentation and guides",
        structure: {
            columns: [
                {
                    id: "doc-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "80px 40px", backgroundColor: "var(--theme-border)" },
                    elements: [
                        { id: "doc-header", type: "Heading", props: { text: "Documentation Hub", tag: "h2", align: "center", color: "var(--theme-text, var(--theme-text))", fontWeight: "700", fontSize: "42px" } },
                        { id: "doc-desc", type: "Heading", props: { text: "Complete guides and references for developers", tag: "p", align: "center", color: "var(--theme-secondary-text, #6b7280)", fontWeight: "400", fontSize: "18px" } },
                        { id: "doc-spacer", type: "Spacer", props: { height: "sm" } },
                        {
                            id: "doc-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 3, tablet: 2, mobile: 1 }, gap: 24 },
                                elements: [
                                    { id: "doc-1", type: "Documentation", props: { title: "Installation & Setup", content: "Step-by-step guide to get started", icon: "⚙️", bgColor: "var(--theme-background)", accentColor: "#0284c7", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "doc-2", type: "Documentation", props: { title: "API Reference", content: "Complete API endpoints documentation", icon: "📚", bgColor: "var(--theme-background)", accentColor: "#059669", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "doc-3", type: "Documentation", props: { title: "Advanced Configuration", content: "Deep dive into configuration options", icon: "⚡", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    },

    {
        key: "knowledge-base-standard",
        type: "KnowledgeBase",
        category: "blog",
        name: "Knowledge Base",
        description: "FAQs and help articles",
        structure: {
            columns: [
                {
                    id: "kb-col",
                    width: "100%",
                    props: { flexDirection: "column", padding: "80px 40px", backgroundColor: "var(--theme-background)" },
                    elements: [
                        { id: "kb-header", type: "Heading", props: { text: "Knowledge Base & FAQs", tag: "h2", align: "center", color: "var(--theme-text, var(--theme-text))", fontWeight: "700", fontSize: "42px" } },
                        { id: "kb-desc", type: "Heading", props: { text: "Find answers to common questions and troubleshooting", tag: "p", align: "center", color: "var(--theme-secondary-text, #6b7280)", fontWeight: "400", fontSize: "18px" } },
                        { id: "kb-spacer", type: "Spacer", props: { height: "sm" } },
                        {
                            id: "kb-section",
                            type: "Section",
                            props: {
                                layout: { type: "grid", columns: { desktop: 2, tablet: 1, mobile: 1 }, gap: 20 },
                                elements: [
                                    { id: "kb-1", type: "KnowledgeBase", props: { title: "Getting Started Basics", description: "Essential setup and first steps", difficulty: "Beginner", views: 3240, helpful: 2890, bgColor: "var(--theme-border)", accentColor: "#0284c7", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "kb-2", type: "KnowledgeBase", props: { title: "Troubleshooting Common Issues", description: "Solutions for typical problems", difficulty: "Intermediate", views: 2150, helpful: 1890, bgColor: "var(--theme-border)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "kb-3", type: "KnowledgeBase", props: { title: "Performance Optimization Tips", description: "Advanced optimization techniques", difficulty: "Advanced", views: 1840, helpful: 1650, bgColor: "var(--theme-border)", accentColor: "#059669", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } },
                                    { id: "kb-4", type: "KnowledgeBase", props: { title: "Integration Guide", description: "How to integrate with services", difficulty: "Intermediate", views: 2560, helpful: 2140, bgColor: "var(--theme-border)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text, var(--theme-text))", secondaryTextColor: "var(--theme-secondary-text, #6b7280)" } }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
];

export default blogSections;
