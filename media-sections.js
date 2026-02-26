/**
 * Media & Gallery Content Sections
 * Image galleries, video sections, media grids, lightbox galleries with full mobile-first responsive support
 */

export const mediaSectionTemplates = [
    // ============================================================================
    // IMAGE GALLERY - 3 Column Grid (Mobile-First Responsive)
    // Mobile: 1 column | Tablet: 2 columns | Desktop: 3 columns
    // ============================================================================
    {
        key: "gallery-grid-3col",
        type: "Section",
        category: "content",
        name: "Image Gallery - 3 Column Grid",
        description: "Mobile-first responsive gallery: 1 column mobile, 2 columns tablet, 3 columns desktop",
        structure: {
            id: "gallery-grid-3-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, #ffffff)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "gallery-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "gallery-badge",
                            type: "Badge",
                            props: {
                                text: "GALLERY",
                                color: "var(--theme-primary, #6366f1)",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "gallery-heading",
                            type: "Heading",
                            props: {
                                text: "Our Work & Portfolio",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        }
                    ]
                },
                {
                    id: "gallery-image-1-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 12,
                        gap: 12,
                    },
                    elements: [
                        {
                            id: "gallery-img-1",
                            type: "Image",
                            props: {
                                src: "https://images.unsplash.com/photo-1560264357-8d9766a72da5?w=500&h=400&fit=crop",
                                alt: "Portfolio item 1",
                                borderRadius: "12",
                                objectFit: "cover",
                                shadow: "md",
                                aspectRatio: "4/3"
                            }
                        },
                        {
                            id: "gallery-title-1",
                            type: "Heading",
                            props: {
                                text: "Project Alpha",
                                tag: "h4",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "600",
                                size: "lg"
                            }
                        }
                    ]
                },
                {
                    id: "gallery-image-2-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 12,
                        gap: 12,
                    },
                    elements: [
                        {
                            id: "gallery-img-2",
                            type: "Image",
                            props: {
                                src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
                                alt: "Portfolio item 2",
                                borderRadius: "12",
                                objectFit: "cover",
                                shadow: "md",
                                aspectRatio: "4/3"
                            }
                        },
                        {
                            id: "gallery-title-2",
                            type: "Heading",
                            props: {
                                text: "Project Beta",
                                tag: "h4",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "600",
                                size: "lg"
                            }
                        }
                    ]
                },
                {
                    id: "gallery-image-3-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 12,
                        gap: 12,
                    },
                    elements: [
                        {
                            id: "gallery-img-3",
                            type: "Image",
                            props: {
                                src: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=400&fit=crop",
                                alt: "Portfolio item 3",
                                borderRadius: "12",
                                objectFit: "cover",
                                shadow: "md",
                                aspectRatio: "4/3"
                            }
                        },
                        {
                            id: "gallery-title-3",
                            type: "Heading",
                            props: {
                                text: "Project Gamma",
                                tag: "h4",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "600",
                                size: "lg"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // LIGHTBOX GALLERY (Mobile-First Responsive)
    // Mobile: Single column | Tablet/Desktop: 3 columns
    // ============================================================================
    {
        key: "gallery-lightbox",
        type: "Section",
        category: "content",
        name: "Lightbox Gallery",
        description: "Responsive lightbox gallery: single column mobile, 3 columns tablet/desktop",
        structure: {
            id: "gallery-lightbox-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "lightbox-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "lightbox-badge",
                            type: "Badge",
                            props: {
                                text: "PHOTO GALLERY",
                                color: "var(--theme-secondary, #8b5cf6)",
                                bgColor: "var(--theme-secondary-light, #faf5ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "lightbox-heading",
                            type: "Heading",
                            props: {
                                text: "Click to Expand Photos",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "lightbox-subtext",
                            type: "Paragraph",
                            props: {
                                text: "View images in full screen with our interactive lightbox gallery",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                },
                {
                    id: "lightbox-img-1-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 12,
                        gap: 0,
                    },
                    elements: [
                        {
                            id: "lightbox-img-1",
                            type: "Image",
                            props: {
                                src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
                                alt: "Gallery image 1",
                                borderRadius: "12",
                                objectFit: "cover",
                                shadow: "lg",
                                aspectRatio: "1/1"
                            }
                        }
                    ]
                },
                {
                    id: "lightbox-img-2-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 12,
                        gap: 0,
                    },
                    elements: [
                        {
                            id: "lightbox-img-2",
                            type: "Image",
                            props: {
                                src: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop",
                                alt: "Gallery image 2",
                                borderRadius: "12",
                                objectFit: "cover",
                                shadow: "lg",
                                aspectRatio: "1/1"
                            }
                        }
                    ]
                },
                {
                    id: "lightbox-img-3-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 12,
                        gap: 0,
                    },
                    elements: [
                        {
                            id: "lightbox-img-3",
                            type: "Image",
                            props: {
                                src: "https://images.unsplash.com/photo-1469090694612-f5bfbf550cb0?w=500&h=500&fit=crop",
                                alt: "Gallery image 3",
                                borderRadius: "12",
                                objectFit: "cover",
                                shadow: "lg",
                                aspectRatio: "1/1"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // VIDEO SECTION - Responsive Video Embed (Mobile-First)
    // ============================================================================
    {
        key: "video-section",
        type: "Section",
        category: "content",
        name: "Video Section",
        description: "Responsive video embed with description: full-width mobile, constrained desktop",
        structure: {
            id: "video-section-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background, #ffffff)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "video-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 40,
                    },
                    elements: [
                        {
                            id: "video-badge",
                            type: "Badge",
                            props: {
                                text: "FEATURED VIDEO",
                                color: "var(--theme-accent, #f59e0b)",
                                bgColor: "var(--theme-accent-light, #fffbeb)",
                                showPing: true
                            }
                        },
                        {
                            id: "video-heading",
                            type: "Heading",
                            props: {
                                text: "See How It Works",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        }
                    ]
                },
                {
                    id: "video-embed-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        gap: 24,
                        maxWidth: "1000px",
                    },
                    elements: [
                        {
                            id: "video-embed",
                            type: "VideoEmbed",
                            props: {
                                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                                title: "Product Demo",
                                aspectRatio: "16/9",
                                borderRadius: "16",
                                shadow: "xl",
                                width: "100%"
                            }
                        },
                        {
                            id: "video-description",
                            type: "Paragraph",
                            props: {
                                text: "Watch our comprehensive product walkthrough to understand how our solution can transform your workflow.",
                                align: "center",
                                color: "var(--theme-text-secondary, #6b7280)",
                                size: "base"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // VIDEO EMBED HERO - Large Hero Video (Mobile-First Responsive)
    // ============================================================================
    {
        key: "video-embed-hero",
        type: "Section",
        category: "hero",
        name: "Hero Video Embed",
        description: "Responsive hero video: responsive sizing mobile, large desktop with overlay",
        structure: {
            id: "video-embed-hero-1",
            type: "Section",
            props: {
                backgroundColor: "#000000",
                paddingTop: 80,
                paddingBottom: 80,
                backgroundImage: "https://images.unsplash.com/photo-1633356122544-f134324ef6f2?w=1600&fit=crop",
                backgroundSize: "cover",
                backgroundOverlay: "rgba(0, 0, 0, 0.6)",
            },
            columns: [
                {
                    id: "video-hero-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 32,
                    },
                    elements: [
                        {
                            id: "video-hero-title",
                            type: "Heading",
                            props: {
                                text: "Experience Innovation",
                                tag: "h1",
                                align: "center",
                                color: "#ffffff",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        },
                        {
                            id: "video-hero-embed",
                            type: "VideoEmbed",
                            props: {
                                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                                title: "Innovation Demo",
                                aspectRatio: "16/9",
                                borderRadius: "16",
                                shadow: "2xl",
                                width: "100%",
                                maxWidth: "900px"
                            }
                        }
                    ]
                }
            ]
        }
    },

    // ============================================================================
    // AUDIO SECTION - Responsive Audio Players (Mobile-First)
    // ============================================================================
    {
        key: "audio-section",
        type: "Section",
        category: "content",
        name: "Audio Section",
        description: "Responsive audio players: single column mobile, centered desktop",
        structure: {
            id: "audio-section-1",
            type: "Section",
            props: {
                backgroundColor: "var(--theme-background-alt, #f9fafb)",
                paddingTop: 60,
                paddingBottom: 60,
            },
            columns: [
                {
                    id: "audio-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 32,
                        gap: 16,
                        marginBottom: 32,
                    },
                    elements: [
                        {
                            id: "audio-badge",
                            type: "Badge",
                            props: {
                                text: "PODCASTS & AUDIO",
                                color: "var(--theme-primary, #6366f1)",
                                bgColor: "var(--theme-primary-light, #eef2ff)",
                                showPing: false
                            }
                        },
                        {
                            id: "audio-heading",
                            type: "Heading",
                            props: {
                                text: "Listen to Our Latest Episodes",
                                tag: "h2",
                                align: "center",
                                color: "var(--theme-text, #1f2937)",
                                fontWeight: "700",
                                size: "2xl"
                            }
                        }
                    ]
                },
                {
                    id: "audio-player-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                        gap: 20,
                        maxWidth: "700px",
                    },
                    elements: [
                        {
                            id: "audio-player-1",
                            type: "AudioPlayer",
                            props: {
                                title: "Episode 1: Getting Started",
                                description: "In this episode, we explore the fundamentals and best practices.",
                                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                                duration: "45:30",
                                backgroundColor: "var(--theme-background, #ffffff)",
                                accentColor: "var(--theme-primary, #6366f1)",
                                borderRadius: "12",
                                shadow: "md",
                                width: "100%"
                            }
                        },
                        {
                            id: "audio-player-2",
                            type: "AudioPlayer",
                            props: {
                                title: "Episode 2: Advanced Techniques",
                                description: "Deep dive into advanced strategies and methodologies.",
                                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                                duration: "52:15",
                                backgroundColor: "var(--theme-background, #ffffff)",
                                accentColor: "var(--theme-secondary, #8b5cf6)",
                                borderRadius: "12",
                                shadow: "md",
                                width: "100%"
                            }
                        }
                    ]
                }
            ]
        }
    }
];
