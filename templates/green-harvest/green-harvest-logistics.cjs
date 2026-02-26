/**
 * GreenHarvest Logistics Hub Page
 * Restructured to match the exact working pattern of green-harvest-home.cjs
 */

const greenHarvestLogistics = {
    sections: [
        // ================================================================
        // HERO SECTION
        // ================================================================
        {
            key: "logistics-hero-section",
            name: "Logistics Hero",
            description: "High-impact logistics hero",
            structure: {
                id: "logistics-hero",
                type: "Hero",
                props: {
                    paddingY: 120,
                    paddingX: 50,
                    backgroundColor: "#102216",
                    fullWidth: true,
                    backgroundImage: "linear-gradient(90deg, rgba(16, 34, 22, 0.95) 0%, rgba(16, 34, 22, 0.4) 100%), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    decorativeElements: [
                        { type: "blob", color: "#16a34a", opacity: 0.15, width: "600px", height: "600px", top: "20%", left: "10%" },
                        { type: "mesh", opacity: 0.05 }
                    ]
                },
                columns: [
                    {
                        id: "hero-col-main",
                        width: "100%",
                        elements: [
                            {
                                id: "hero-badge",
                                type: "Badge",
                                props: {
                                    text: "Live Logistics Hub",
                                    backgroundColor: "rgba(22, 163, 74, 0.2)",
                                    color: "#16a34a",
                                    showPing: true
                                }
                            },
                            {
                                id: "hero-headline",
                                type: "Headline",
                                props: {
                                    text: "Global Supply Chain Intelligence",
                                    tag: "h1",
                                    color: "#ffffff",
                                    align: "left",
                                    fontWeight: "black",
                                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Empowering global agricultural exports with end-to-end transparency, real-time tracking, and automated cold chain compliance.",
                                    color: "#cbd5e1",
                                    size: "lg",
                                    align: "left",
                                    maxWidth: "700px"
                                }
                            },
                            {
                                id: "hero-actions",
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "View Network Map",
                                    primaryBg: "#16a34a",
                                    primaryTextColor: "#ffffff",
                                    secondaryText: "Integrity Reports",
                                    secondaryBg: "rgba(255, 255, 255, 0.1)",
                                    secondaryTextColor: "#ffffff",
                                    secondaryBorderColor: "rgba(255, 255, 255, 0.2)",
                                    paddingY: 16
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ================================================================
        // STATS SECTION
        // ================================================================
        {
            key: "logistics-stats-section",
            name: "Logistics Stats",
            structure: {
                id: "logistics-stats-section",
                type: "Section",
                props: {
                    paddingY: 80,
                    paddingX: 50,
                    backgroundColor: "#ffffff",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "stats-col-1",
                        width: "25%",
                        elements: [
                            {
                                id: "stat-routes",
                                type: "StatsCard",
                                props: {
                                    icon: "Waypoints",
                                    iconColor: "#16a34a",
                                    iconBg: "rgba(22, 163, 74, 0.1)",
                                    statLabel: "Active Routes",
                                    labelColor: "rgba(16, 25, 18, 0.6)",
                                    statValue: "142",
                                    statValueColor: "#101912",
                                    badge: "+5.2%",
                                    badgeColor: "#16a34a",
                                    badgeBg: "rgba(22, 163, 74, 0.1)",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e9f1eb",
                                    borderRadius: "24"
                                }
                            }
                        ]
                    },
                    {
                        id: "stats-col-2",
                        width: "25%",
                        elements: [
                            {
                                id: "stat-shipments",
                                type: "StatsCard",
                                props: {
                                    icon: "Truck",
                                    iconColor: "#16a34a",
                                    iconBg: "rgba(22, 163, 74, 0.1)",
                                    statLabel: "Live Shipments",
                                    labelColor: "rgba(16, 25, 18, 0.6)",
                                    statValue: "856",
                                    statValueColor: "#101912",
                                    badge: "-2.1%",
                                    badgeColor: "#ef4444",
                                    badgeBg: "rgba(239, 68, 68, 0.1)",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e9f1eb",
                                    borderRadius: "24"
                                }
                            }
                        ]
                    },
                    {
                        id: "stats-col-3",
                        width: "25%",
                        elements: [
                            {
                                id: "stat-compliance",
                                type: "StatsCard",
                                props: {
                                    icon: "ShieldCheck",
                                    iconColor: "#16a34a",
                                    iconBg: "rgba(22, 163, 74, 0.1)",
                                    statLabel: "Compliance Rate",
                                    labelColor: "rgba(16, 25, 18, 0.6)",
                                    statValue: "99.8%",
                                    statValueColor: "#101912",
                                    badge: "+0.1%",
                                    badgeColor: "#16a34a",
                                    badgeBg: "rgba(22, 163, 74, 0.1)",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e9f1eb",
                                    borderRadius: "24"
                                }
                            }
                        ]
                    },
                    {
                        id: "stats-col-4",
                        width: "25%",
                        elements: [
                            {
                                id: "stat-transit",
                                type: "StatsCard",
                                props: {
                                    icon: "Clock",
                                    iconColor: "#16a34a",
                                    iconBg: "rgba(22, 163, 74, 0.1)",
                                    statLabel: "Avg. Transit Time",
                                    labelColor: "rgba(16, 25, 18, 0.6)",
                                    statValue: "12.4d",
                                    statValueColor: "#101912",
                                    badge: "-0.5%",
                                    badgeColor: "#16a34a",
                                    badgeBg: "rgba(22, 163, 74, 0.1)",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#e9f1eb",
                                    borderRadius: "24"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ================================================================
        // TRACKING TABLE SECTION
        // ================================================================
        {
            key: "logistics-tracking-section",
            name: "Logistics Tracking",
            structure: {
                id: "tracking-section",
                type: "Section",
                props: {
                    paddingY: 80,
                    paddingX: 50,
                    backgroundColor: "#f8fafc",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "tracking-col",
                        width: "100%",
                        elements: [
                            {
                                id: "tracking-table",
                                type: "TrackingTable",
                                props: {
                                    title: "Real-time Tracking",
                                    showLiveIndicator: true,
                                    showExportButton: true,
                                    accentColor: "#16a34a",
                                    rows: [
                                        { id: "#GH-9021", origin: "Sao Paulo, BR", destination: "Rotterdam, NL", status: "In Transit", statusType: "transit", temp: "2.0°", tempProgress: 15, eta: "Oct 24" },
                                        { id: "#GH-8843", origin: "Nairobi, KE", destination: "London, UK", status: "Customs", statusType: "customs", temp: "4.1°", tempProgress: 35, eta: "Oct 22" },
                                        { id: "#GH-9102", origin: "Mumbai, IN", destination: "Singapore, SG", status: "Departed", statusType: "departed", temp: "3.2°", tempProgress: 25, eta: "Oct 28" }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ================================================================
        // ANALYTICS & COMPLIANCE SECTION
        // ================================================================
        {
            key: "logistics-analytics-section",
            name: "Logistics Analytics",
            structure: {
                id: "analytics-section",
                type: "Section",
                props: {
                    paddingY: 80,
                    paddingX: 50,
                    backgroundColor: "#ffffff",
                    fullWidth: true
                },
                columns: [
                    {
                        id: "analytics-col-left",
                        width: "50%",
                        elements: [
                            {
                                id: "cold-chain-card",
                                type: "ColdChainCard",
                                props: {
                                    title: "Cold Chain Integrity",
                                    description: "Temperature stability across all active refrigerated containers (Last 24h)",
                                    criticalAlerts: 2,
                                    optimalUnits: 854,
                                    barData: [60, 80, 70, 95, 65, 85, 40, 75],
                                    timeLabels: ["00:00", "06:00", "12:00", "18:00", "Current"],
                                    accentColor: "#16a34a"
                                }
                            }
                        ]
                    },
                    {
                        id: "analytics-col-right",
                        width: "50%",
                        elements: [
                            {
                                id: "compliance-card",
                                type: "ComplianceCard",
                                props: {
                                    title: "Global Compliance",
                                    description: "Documentation and certification status for multi-regional logistics.",
                                    items: [
                                        { label: "EU Phyto-Certificates", value: 98 },
                                        { label: "US FDA Compliance Docs", value: 100 },
                                        { label: "Asia-Pacific Import Permits", value: 92 }
                                    ],
                                    ctaText: "View Full Compliance Vault",
                                    accentColor: "#16a34a"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

module.exports = { greenHarvestLogistics };
