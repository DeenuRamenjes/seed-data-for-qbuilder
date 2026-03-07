/**
 * Telemedicine Template - About / How It Works Page (CareSync)
 * Primary: #FF3075 | Secondary: #FFEA00 | Accent: #5763FF
 */

const telemedicineHome = require('./tele-medicine-home.cjs');

const telemedicineAbout = {
    // ============================================================================
    // SHARED HEADER
    // ============================================================================
    header: telemedicineHome.header,

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION (GraHero)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-about-hero",
            name: "CareSync Hero",
            structure: {
                type: "GraHero",
                defaultProps: {
                    paddingY: 80,
                    backgroundColor: "#ffffff",
                    textColor: "#1a1a1a"
                },
                props: {
                    badgeText: "Accessible Healthcare for all",
                    title: "Your Health, Synchronized.",
                    highlightText: "Synchronized.",
                    description: "Connect with top-rated, diverse specialists from the comfort of your home. Real-time care, zero commute, total peace of mind.",
                    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAklFczfgi9ypIaIaSU3NH6spsjN2LJkb7KvGQYOZ-BNNuT7zKogjZLKWn_gE8PwoHnTBgHhxCoqL8oytKsqJaq7A7W4auvMIjmkD_HxsihSHqKlZNARnxeTFSPr-j5g-3P0DgUgUu3KNbGJgmbTvDW43rixwxlhLwErdgxIwtelQmpitc9UvHwUjfjwZ6cycIcldxdjU1Y91q79USpxcV7rzwuFaT9sbigiizX6dgsPtJGfwkZL-AYmWGbm-XwvpfltSyWU7smHXlu",
                    floatingTitle: "Status",
                    floatingSubtitle: "500+ Online Now",
                    statsText: "Top Rated Care",
                    primaryCtaText: "Start Your Consultation",
                    primaryCtaLink: "/pricing",
                    secondaryCtaText: "View Our Doctors",
                    secondaryCtaLink: "/specialists"
                }
            }
        },

        // --------------------------------------------------------------------------
        // OUR MISSION (MissionCard)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-about-mission",
            name: "Our Mission",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 40
                },
                columns: [{
                    id: "mission-card-col",
                    width: "100%",
                    elements: [{
                        type: "AboutCard",
                        props: {
                            image1Src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAklFczfgi9ypIaIaSU3NH6spsjN2LJkb7KvGQYOZ-BNNuT7zKogjZLKWn_gE8PwoHnTBgHhxCoqL8oytKsqJaq7A7W4auvMIjmkD_HxsihSHqKlZNARnxeTFSPr-j5g-3P0DgUgUu3KNbGJgmbTvDW43rixwxlhLwErdgxIwtelQmpitc9UvHwUjfjwZ6cycIcldxdjU1Y91q79USpxcV7rzwuFaT9sbigiizX6dgsPtJGfwkZL-AYmWGbm-XwvpfltSyWU7smHXlu",
                            image1Alt: "CareSync team",
                            image2Src: "https://pixelplex.io/wp-content/uploads/2024/03/telemedicine-app-development-main.jpg",
                            image2Alt: "Doctors consulting",
                            experienceNumber: "1M+",
                            experienceText: "Patients Served",
                            label: "OUR MISSION",
                            title: "Exceptional healthcare, accessible to everyone.",
                            description: "CareSync was founded on a simple belief: exceptional healthcare should be accessible to everyone, everywhere. We combine cutting-edge telemedicine technology with compassionate, patient-centered care.",
                            bulletPoints: "Patient-centered care,Cutting-edge technology,Diverse network of physicians,Holistic treatment approach",
                            ctaText: "Meet Our Team",
                            ctaLink: "/specialists",
                            cardBgColor: "#f9fafb",
                            labelColor: "#FF3075",
                            titleColor: "#1a1a1a",
                            textColor: "#64748b",
                            bulletIconColor: "#FF3075",
                            buttonBgColor: "#FF3075",
                            buttonTextColor: "#ffffff",
                            experienceBgColor: "#1a1a1a",
                            experienceTextColor: "#ffffff"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // HOW IT WORKS (StagesCard)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-how-it-works",
            name: "How It Works",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#5763FF",
                    paddingY: 20,
                    paddingX: 20,
                    fullWidth: true,
                    layout: "grid",
                    columns: 1,
                    gap: 30,
                    alignItems: "center",
                    textAlign: "center",
                    justifyItems: "center"
                },
                columns: [
                    {
                        id: "how-header",
                        width: "100%",
                        elements: [
                            { type: "Badge", props: { text: "How It Works", color: "#FFEA00", bgColor: "transparent", align: "center" } },
                            { type: "Heading", props: { text: "Simple Steps to Wellness", tag: "h2", size: "4xl", color: "#ffffff", fontWeight: "900", align: "center" } }
                        ]
                    },
                    {
                        id: "how-stages-col",
                        width: "100%",
                        elements: [{
                            type: "StagesCard",
                            props: {
                                maxWidth: "700px",
                                stages: [
                                    {
                                        number: "01",
                                        title: "Search & Discover",
                                        description: "Browse through hundreds of certified specialists by expertise, availability, language, and patient reviews.",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS7Qs0QrqONsVQySMKuGdykF0ae_0M8aMmKk87Be0kDqrw6oa_bUbgkM9j5oel13rwt5pQ5Hj-xYRErboNpoFEbYnFKLuZi7tPbCUTvx-1xyFqqJEpByxtl-4rIHDbBXERlpaLDi2teMl_HXBTfGKVf9BGoThgVQbg9ppD46UaW9qVjAJFoJwO0KbYR1AGcq7ECH12MFxa0XjOHbugFTJHgIiq9Uz8sXx-JRFwcre1Lroi7DguBz0D6xvjeC7p04DwcYzk4pVigwLk"
                                    },
                                    {
                                        number: "02",
                                        title: "Schedule & Prepare",
                                        description: "Choose a time slot that fits your busy lifestyle. Receive automated reminders and pre-consultation questionnaires.",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm41mtm7N2Vll5nxEiV-K2DIK78BVHTs7Zj7qwdKmKdA3a-B0kc1nPdSP4SsdoGKyY_ssIu3yY99CnEXUCCKq60H7-PnD6mtu0q8SxFL3WFW4Pj7YNmzWXiqHjTEI0nwSb7HNVX5GeOHYul7qFSX8nUWWcTxcC0H8UH1t3Y3tlL8pNxiHNNQrUMtQvdZkuVzfNAs9fk0pAe92j-X_-_Bkx8sIfWh_YcNpEoYRelTB3bRkY9fcWxYOoXpfkM_NmvxkNlBQvhpeYPB8f"
                                    },
                                    {
                                        number: "03",
                                        title: "Connect & Heal",
                                        description: "Join your private, encrypted video call and get personalized care. Receive prescriptions and follow-up plans instantly.",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCycPZQruYS9lo_yJAayS-zwgKouYUGMVjOkfIgjUv2tOXJCYcbCqDHjmVx-K9_no7HfSXdyNFHWowYNH8pb0VskBGDZTp2NexuFhDhhmYdhZc7gHZwDwkjZvxLn0lJzW5FB9PpuP4jFr__wDkyUIXtQlw1BZLKJOilMiLv5ik78pN-H60vkV4FVhVbg2NVrX7Vv2bCOvCVO5HimDeqJDMh6lAZcdqJTmQMMyHSkYfPnVYiuq7jgvB78PN73XTkaWM9S_p-FK4u0GXq"
                                    }
                                ],
                                numberOpacity: 1
                            }
                        }]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TOP SPECIALTIES (EnqCard Grid)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-specialties",
            name: "Top Specialties",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                    gap: 32
                },
                columns: [
                    {
                        id: "specialties-header",
                        width: "100%",
                        elements: [
                            { type: "Heading", props: { text: "Top Specialties", tag: "h2", size: "3xl", fontWeight: "800", align: "center", color: "#0f172a", marginBottom: 12 } },
                            { type: "Paragraph", props: { text: "Expert care across all major medical fields at your fingertips.", size: "base", align: "center", color: "#64748b", marginBottom: 48 } }
                        ]
                    },
                    {
                        id: "specialties-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 4,
                        gap: 24,
                        elements: [
                            {
                                type: "StyleCard",
                                props: {
                                    icon: "HeartPulse",
                                    label: "SPECIALTY 01",
                                    title: "Cardiology",
                                    description: "Heart & Cardiovascular care from leading specialists.",
                                    accentColor: "#FF3075"
                                }
                            },
                            {
                                type: "StyleCard",
                                props: {
                                    icon: "Brain",
                                    label: "SPECIALTY 02",
                                    title: "Psychology",
                                    description: "Mental health support from licensed therapists.",
                                    accentColor: "#5763FF"
                                }
                            },
                            {
                                type: "StyleCard",
                                props: {
                                    icon: "Sparkles",
                                    label: "SPECIALTY 03",
                                    title: "Dermatology",
                                    description: "Skin & hair care from board-certified dermatologists.",
                                    accentColor: "#f59e0b"
                                }
                            },
                            {
                                type: "StyleCard",
                                props: {
                                    icon: "Baby",
                                    label: "SPECIALTY 04",
                                    title: "Pediatrics",
                                    description: "Children's healthcare from experienced pediatricians.",
                                    accentColor: "#22c55e"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // TESTIMONIALS (Section + Testimonial)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-testimonials",
            name: "Patient Testimonials",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f9fafb",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 48
                },
                columns: [
                    {
                        id: "testimonials-header",
                        width: "100%",
                        elements: [
                            { type: "Badge", props: { text: "TESTIMONIALS", color: "#FF3075", bgColor: "rgba(255, 48, 117, 0.1)", align: "center", marginBottom: 12 } },
                            { type: "Heading", props: { text: "What Our Members Say", tag: "h2", size: "3xl", fontWeight: "800", color: "#1a1a1a", align: "center" } }
                        ]
                    },
                    {
                        id: "testimonials-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 24,
                        elements: [
                            {
                                type: "Testimonial",
                                props: {
                                    text: "Ethos has completely transformed how I approach my health. My dedicated physician knows me, my history, and my goals. It's healthcare redefined.",
                                    author: "Alexandra M.",
                                    role: "Executive",
                                    company: "Finance Corp",
                                    rating: 5
                                }
                            },
                            {
                                type: "Testimonial",
                                props: {
                                    text: "The privacy and discretion alone are worth the membership. But the quality of care is on another level entirely. I've never felt so well taken care of.",
                                    author: "David R.",
                                    role: "Entrepreneur",
                                    company: "Self-Employed",
                                    rating: 5
                                }
                            },
                            {
                                type: "Testimonial",
                                props: {
                                    text: "As someone who travels constantly, having 24/7 access to top-tier specialists regardless of timezone has been a game-changer for my family.",
                                    author: "Priya S.",
                                    role: "Global Director",
                                    company: "Tech Corp",
                                    rating: 5
                                }
                            }
                        ]
                    }
                ]
            }
        },
    ],

    // ============================================================================
    // SHARED FOOTER
    // ============================================================================
    footer: telemedicineHome.footer
};

module.exports = telemedicineAbout;
