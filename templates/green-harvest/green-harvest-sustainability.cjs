/**
 * GreenHarvest Sustainability Page
 * Theme: Professional Agriculture / Agri-Tech / Export
 * Components: Hero, StatsCard, TimelineSection
 */

const greenHarvestSustainability = {
    sections: [
        // ================================================================
        // HERO SECTION (Parallax Feel)
        // ================================================================
        {
            key: "sustainability-hero-section",
            name: "Sustainability Hero",
            structure: {
                id: "sustainability-hero",
                type: "Hero",
                props: {
                    paddingY: 100,
                    paddingX: 40,
                    backgroundColor: "#102216",
                    fullWidth: true,
                    backgroundImage: "linear-gradient(0deg, rgba(16, 34, 21, 0.9) 0%, rgba(16, 34, 21, 0.4) 40%, rgba(16, 34, 21, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTBh_YMIqLRnhrHkue9p24aNknpA9hImc8YmZelQJOaYE8LvsZ5pz0d_KiXeTCb5rDpDW-3_oMP-b6TWH7JgVAcSPQuZ9vkVMjq1Ab5ReG1PyyDP6nkXfC7T0ysTnFD91wQfMUUFRDs8gc5emSqy6hkUts6foY8KONawfeB73SMdMCj44BXXf5WP-GOFV0jc__oQcmhaJqs7vpuv-PM1nzbPFC2LMoDaNZJrbnVfFmB-pZDgNCGabrH-JRbF2hyH_1D6wERxb3QZY')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                    alignContent: "bottom"
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
                                    text: "ESG Report 2024",
                                    backgroundColor: "rgba(22, 163, 74, 0.2)",
                                    color: "#16a34a",
                                    showPing: false
                                }
                            },
                            {
                                id: "hero-headline",
                                type: "Headline",
                                props: {
                                    text: "Earth First: Our Commitment to Sustainability",
                                    tag: "h1",
                                    color: "#ffffff",
                                    align: "left",
                                    fontWeight: "black",
                                    fontSize: "3.5rem"
                                }
                            },
                            {
                                id: "hero-description",
                                type: "Paragraph",
                                props: {
                                    text: "Leading the global transition towards regenerative agriculture and climate-positive food systems through advanced biotechnology and data science.",
                                    color: "#cbd5e1",
                                    size: "lg",
                                    align: "left",
                                    maxWidth: "600px"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ================================================================
        // IMPACT STATS SECTION (By The Numbers)
        // ================================================================
        {
            key: "sustainability-stats-section",
            name: "Impact Stats",
            structure: {
                id: "impact-stats-section",
                type: "Section",
                props: {
                    backgroundColor: "#f8fafc",
                    paddingY: 60,
                    paddingX: 20,
                    fullWidth: true
                },
                columns: [
                    // Header Column
                    {
                        id: "stats-header-col",
                        width: "100%",
                        elements: [
                            {
                                id: "stats-headline",
                                type: "Headline",
                                props: {
                                    text: "By the Numbers",
                                    tag: "h2",
                                    color: "#102216",
                                    align: "left",
                                    fontWeight: "extrabold",
                                    fontSize: "2.5rem"
                                }
                            },
                            {
                                id: "stats-divider",
                                type: "Divider",
                                props: {
                                    color: "#16a34a",
                                    width: "100px",
                                    thickness: "6px",
                                    align: "left",
                                    marginTop: "10px",
                                    marginBottom: "40px"
                                }
                            }
                        ]
                    },
                    // Stats Grid Column
                    {
                        id: "stats-grid-col",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 24,
                        elements: [
                            {
                                id: "stat-card-1",
                                type: "StatsCard",
                                props: {
                                    icon: "droplet",
                                    iconColor: "#16a34a",
                                    iconBg: "rgba(255, 255, 255, 0.0)",
                                    badge: "",
                                    badgeColor: "transparent",
                                    badgeBg: "transparent",
                                    statLabel: "Water Saved",
                                    labelColor: "#64748b",
                                    statValue: "1.2B Gallons",
                                    statValueColor: "#102216",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#cfe7d5",
                                    borderRadius: "12",
                                    trend: "+12%",
                                    trendLabel: "vs LY",
                                    trendColor: "#15803d",
                                    trendBackground: "rgba(22, 163, 74, 0.1)",
                                    trendIcon: "TrendingUp"
                                }
                            },
                            {
                                id: "stat-card-2",
                                type: "StatsCard",
                                props: {
                                    icon: "cloud",
                                    iconColor: "#16a34a",
                                    iconBg: "rgba(255, 255, 255, 0.0)",
                                    badge: "",
                                    badgeColor: "transparent",
                                    badgeBg: "transparent",
                                    statLabel: "Carbon Offset",
                                    labelColor: "#64748b",
                                    statValue: "450K Tons",
                                    statValueColor: "#102216",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#cfe7d5",
                                    borderRadius: "12",
                                    trend: "+8%",
                                    trendLabel: "vs LY",
                                    trendColor: "#15803d",
                                    trendBackground: "rgba(22, 163, 74, 0.1)",
                                    trendIcon: "TrendingUp"
                                }
                            },
                            {
                                id: "stat-card-3",
                                type: "StatsCard",
                                props: {
                                    icon: "leaf",
                                    iconColor: "#16a34a",
                                    iconBg: "rgba(255, 255, 255, 0.0)",
                                    badge: "",
                                    badgeColor: "transparent",
                                    badgeBg: "transparent",
                                    statLabel: "Acreage Managed",
                                    labelColor: "#64748b",
                                    statValue: "1.5M Acres",
                                    statValueColor: "#102216",
                                    backgroundColor: "#ffffff",
                                    borderColor: "#cfe7d5",
                                    borderRadius: "12",
                                    trend: "+15%",
                                    trendLabel: "vs LY",
                                    trendColor: "#15803d",
                                    trendBackground: "rgba(22, 163, 74, 0.1)",
                                    trendIcon: "TrendingUp"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // ================================================================
        // SUSTAINABILITY ROADMAP SECTION
        // ================================================================
        {
            key: "sustainability-roadmap-section",
            name: "Sustainability Roadmap",
            structure: {
                id: "roadmap-section-wrapper",
                type: "Section",
                props: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "roadmap-col",
                    width: "100%",
                    elements: [{
                        id: "roadmap-section",
                        type: "TimelineSection",
                        props: {
                            title: "Sustainability Roadmap",
                            subtitle: "Our strategic vision for a regenerative future, outlined through measurable milestones.",
                            backgroundColor: "#ffffff",
                            textColor: "#102216",
                            subtitleColor: "#64748b",
                            milestones: [
                                {
                                    year: "2024",
                                    title: "Regenerative Shift",
                                    description: "Implementation of no-till practices across 80% of partner farms to enhance soil carbon sequestration.",
                                    color: "#16a34a",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHTvWiBFXWHAwpXf1VyVfI6SFPmaQmiXwThLLbdCLL7WSw4mtU3FXbJz5APqgKJRKjf9vNKRhJPlgmT9xefPfx9SKiRLm4j2lThccFdwlpI7oUMbQyIKHadGsejQI8ZyXT1OxuxQ3q8P8NqYUh2UDLfHt-vbO6sY1dsWO165G2XPkyjA42Eh-jPKqqVnes-5VIJ9Ewr8QWOFyi-oWuKbTIe-p6QMGLMMQjPWe-IZ5fUGWw8Fn84kf54-crItkZacJmFz334IykOJw",
                                    imageAlt: "Microscopic view of healthy soil nutrients"
                                },
                                {
                                    year: "2026",
                                    title: "Net Zero Operations",
                                    description: "Transitioning all regional distribution centers to 100% renewable solar and wind energy sources.",
                                    color: "#16a34a",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWteZZL4tKo8h5itkqy6p97mlfNbnb36AFVL4Rc92Y6di_3ey3Wjy3OznLVnsYd3WZjPsVSHlpSOUYmwDhPgwINXzFzUua-kVqJZJSsjmTdTFDxK7rvnrEZKjFibYwYv-CaCUbjb0pDaJkVgiN-jP0vhqX5McPkD7iMnEFJ1eJcM0VYHv64jbNGFDZb2_VczAtIsjgFTB-mRZO8BKWI9znslSgpN2ea0LyXuN8bSRrVaYkapbQd7iCkPlEDineKPWAs-uZNLWx5QI",
                                    imageAlt: "Vast solar panel farm in rural landscape"
                                },
                                {
                                    year: "2030",
                                    title: "Global Restoration",
                                    description: "Achieving our goal of restoring 5 million hectares of degraded land into productive, biodiverse ecosystems.",
                                    color: "#16a34a",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwcDNsQvS-SoPAH47wwe9F8_3nuTXlNft74MZJlzUK5c8mCd61J38_zC690zcMIhFRMOgzwpNlT0HCNv_SC1bYeJnlU2VqQuHk5GxrBXU1a9tl_DRGHSE_p1sFH83dtunl8jfvSH9lYHCgiQC86DrS0reeHu-Ivr4rGhr5_GUGitL-bYHc1GaSBCSlF7zUyIFpYVKCwuq1GCY4j4IRrnwpcSf0NoIJKNL0NZYuVVVzWyxRpGrbXHs8l-N_8R_qOhLFjOKRVeglf0Y",
                                    imageAlt: "Lush reforestation area with young trees"
                                }
                            ]
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = { greenHarvestSustainability };
