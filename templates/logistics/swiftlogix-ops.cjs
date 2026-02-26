/**
 * SwiftLogix Template - Operations Page (Final 1:1 Design V6)
 * Theme: Modern Logistics / High-Velocity Industrial
 * Ref: HTML Snippet & Atomic Composition
 * 
 * Standardized to Section -> Column -> Element hierarchy.
 */

const swiftlogixOps = {
    sections: [
        {
            key: "swiftlogix-ops-hero",
            name: "Operations Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    fullWidth: true,
                    paddingY: 0,
                    paddingX: 0,
                    overflow: "hidden"
                },
                columns: [{
                    id: "hero-col",
                    width: "100%",
                    elements: [
                        {
                            type: "IndustrialHero",
                            props: {
                                backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIQirL0lnzBfps7TxiD_6u1MnzJoaNJNBdrqpFmsF3MQ1O8pLCLUMSsGcyxrO9Wvqkr-UNAmXslq-VuaCE4R2m9m1c4CNe93qzaRDP1Yjc7zJVWcz5LohB_fsk37EglEt1W_zqCPuMVZ4o5ND7O5ACfSz6phJJej0KMcET-wuC3nbna5xJhCrB0gDyVfdmh8T8vr2K3qs4bKLm-8gF6LVfEwyXiaPOp9PNgnCygV4XdHTaTx6dPVUxyh2IAJZ8zYiG4Qe9WCKZ-Q",
                                backgroundOverlay: "rgba(0,0,0,0.5)",
                                minHeight: "85vh",
                                badgeText: "Live Operations",
                                badgeColor: "#FFFFFF",
                                badgeBackgroundColor: "rgba(255,255,255,0.1)",
                                badgeShowPing: true,
                                badgePingColor: "#ed2626",
                                headlineText: "Freight &\n[Fleet](#ed2626) Ops.",
                                headlineColor: "#FFFFFF",
                                headlineTag: "h2",
                                paragraphText: "Precision-engineered logistics solutions. We manage the world's most sophisticated transport networks with real-time intelligence and a zero-latency mindset.",
                                paragraphColor: "#d4d4d8",
                                paragraphSize: "xl",
                                statusItems: [
                                    { text: "98.4% Active", subtext: "Fleet Status", color: "#FFFFFF", subtextColor: "#71717a", size: "lg", fontWeight: "700" }
                                ]
                            }
                        }
                    ]
                }]
            }
        },
        {
            key: "swiftlogix-ops-metrics",
            name: "Key Metrics",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingX: 24,
                    paddingY: 0,
                    overflow: "visible"
                },
                columns: [{
                    id: "metrics-col",
                    width: "100%",
                    elements: [
                        {
                            type: "IndustrialStats",
                            props: {
                                marginTop: -96,
                                gap: 32,
                                items: [
                                    { metric: "24h", label: "Average Transit Time", description: "Intercontinental Priority" },
                                    { metric: "2.4y", label: "Average Fleet Age", description: "Industry-Leading Tech" },
                                    { metric: "0%", label: "Carbon Neutral Goal", description: "Committed by 2030" }
                                ]
                            }
                        }
                    ]
                }]
            }
        },
        {
            key: "swiftlogix-ops-architecture",
            name: "Global Freight Architecture",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: { mobile: 64, tablet: 96, desktop: 128 },
                    paddingX: 24
                },
                columns: [{
                    id: "architecture-col",
                    width: "100%",
                    elements: [
                        {
                            type: "IndustrialArchitecture",
                            props: {
                                sectionTitle: "Global Freight\nArchitecture",
                                sectionDesc: "From the depths of the ocean to the edge of the atmosphere, we provide unrivaled coverage for your high-value assets.",
                                rows: [
                                    {
                                        badge: "Maritime",
                                        title: "Ocean Express",
                                        description: "Full container load (FCL) and less than container load (LCL) services across all major global shipping lanes with guaranteed weekly departures.",
                                        buttonText: "Explore Route",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF-3uxC7FS6gaLgmswPVDcbESJrh-z1-JujTQDy4ktgmrtFQkZ4yjAP2wL8uczMufSz0ifqB5a9jh75Ocqp9XrU_2ugaiFucDFw8Ci8Eq-8nFT9vAdIlMhdAQSmZrfukQtQmUOv3kmLbpfHZWivZ-xdSc8I3uA0cKgZ2bOiHF1ILpg-PhDMPJWzYfObKJAODmtB7kUBZv07rM0IjeaXhCdp2fLs2iB-pXehMvvdrs20k-idx0IbaBc9KZMXIqeiHcumOrHyMVplA",
                                        isReversed: false
                                    },
                                    {
                                        badge: "Aviation",
                                        title: "Next-Day Air",
                                        description: "Global air priority service utilizing our proprietary fleet of wide-body freighters for your most time-sensitive requirements.",
                                        buttonText: "Explore Route",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmHppV11SnSw2esfSxSZdJfLw-4GuXHhMipOM6o5XqWHeHCgSARpsW2j9B69ri_YQhcwIDJgKHWn24RWCzOOob5lOYbKdptSBQi7Mz5dIyF1Xf6QKSXx-IUos6ujYIDCnN7mDg_ljjCX_hJoHeohWQ243pcFp6XHiO8PAsH3Zug3ZxAwZ1XHEirta0dbysVIQtERQKDbiSXUh3lMEPeWByr4dIV1vTHNRyxFh2M2mzHjfDWbTCNp3nJQdcECeGMFagvuBO23fF5g",
                                        isReversed: true
                                    },
                                    {
                                        badge: "Overland",
                                        title: "Ground Alpha",
                                        description: "Precision-timed heavy haulage and distribution networks covering 45 countries with full GPS telemetry and climate control.",
                                        buttonText: "Explore Route",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbmb0H-6I0fIVwNxoNvco1f7q46zs9Ugx9kAcbzaLYdtLkSn8SOfl-F378D_z3DPotZaWHO4M1DVIAHHtMBctcB8xuhMr3BaIG3UXZpUT356gv9x2m_viYfZvA4Bs41CftCWVN9n-mwfgYnhvVk70GfuLuSxfJNmPvBfchFw_rWmb8k3SHhdZ_wATiVKeXMMyKJ1xZVvOGFuVX2AKxLaaPq9sunCWwfIVBSvJzrSYYXGdRL2BBIWESDEAgjGyVFDTcgKz3tkicRA"
                                    }
                                ]
                            }
                        }
                    ]
                }]
            }
        },
        {
            key: "swiftlogix-ops-contact",
            name: "Contact Operations",
            description: "Standard industrial contact form",
            structure: {
                type: "Section",
                defaultProps: {
                    paddingY: { mobile: 64, tablet: 96, desktop: 128 },
                    paddingX: 24,
                    marginBottom: 64,
                    backgroundColor: "#ffffff"
                },
                columns: [{
                    id: "contact-col",
                    width: "100%",
                    props: {
                        marginBottom: '64px'
                    },
                    elements: [
                        {
                            type: "ContactForm",
                            props: {
                                badgeText: "OPERATIONS CENTER",
                                title: "Consult with an expert.",
                                description: "Our logistics consultants are ready to design your custom transport solution.",
                                submitText: "Request Consultation",
                                backgroundColor: "transparent",
                                textColor: "#0f0f0f",
                                primaryColor: "#ed2626",
                                secondaryColor: "#0f0f0f",
                                accentColor: "#ed2626",
                                inputBackgroundColor: "#f9fafb",
                                inputBorderColor: "#e5e7eb",
                                inputTextColor: "#0f0f0f",
                                inputPlaceholderColor: "#6b7280"
                            }
                        }
                    ]
                }]
            }
        }
    ],
    metadata: {
        title: "Operations | SwiftLogix",
        description: "Global supply chain architecture and fleet operations."
    }
};

module.exports = swiftlogixOps;
