/**
 * Startup MVP Template - About Page (Redesigned)
 * Uses specialized renderers: HeroGradient, MissionSection,
 * TimelineSection, TeamSection — all self-contained section renderers
 */

const startupMvpAbout = {
    sections: [
        // ==================================================================
        // HERO — HeroGradient with gradient text
        // ==================================================================
        {
            key: "smvp-about-hero",
            name: "About Hero",
            description: "Dark hero with gradient text and mission statement",
            structure: {
                id: "smvp-about-hero-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-about-hero-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-about-hero-gradient",
                        type: "HeroGradient",
                        props: {
                            badgeText: "OUR STORY",
                            title: "Our Mission to Empower the Future of Founders.",
                            lead: "We started with a simple belief: the world needs more builders. We're here to bridge the gap between visionary ideas and sustainable realities.",
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
        // MISSION — Image + text + stats (MissionSection renderer)
        // ==================================================================
        {
            key: "smvp-about-mission",
            name: "Problem & Solution",
            description: "Image + text + stats mission layout",
            structure: {
                id: "smvp-about-mission-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#0a0a0a",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-about-mission-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-about-mission-element",
                        type: "MissionSection",
                        props: {
                            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjhnnFUJt5GSCqjK8Fk9OKsDxuGJhTr97KQgQkmKFSxYoZ5mT48Gvys-nehJ_Wywacn7pi9AWE8jbsZKqb76as06RxJ80o_tteviuiAP7khiwb9AxcHniryblJ6OOAorwcpok1grjdl5dOjc9n5W30W3cAlnepwH89RBu9RZZ6VX76kDivR58LWEfYs3Y6DvsnOmSSnJi9YRd0kW0QkB9stpPmWQ_wyrjOl3zOzM3dp61G5nKFm6iDEYn6B9Kt0NNPbNGMooBD6YKQ",
                            title: "The Problem & Our Solution",
                            description: "Founding a company is harder than ever. Capital is fragmented, talent is scarce, and the noise of the market often drowns out the most innovative voices.",
                            description2: "We provide an integrated ecosystem of tools, mentorship, and automated workflows designed specifically for early-stage teams. We give founders back the one thing they can't buy: time.",
                            stat1Value: "500+",
                            stat1Label: "Startups Empowered",
                            stat2Value: "$2.5M",
                            stat2Label: "Seed Raised",
                            accentColor: "#902EFF"
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // TIMELINE — TimelineSection with milestones
        // ==================================================================
        {
            key: "smvp-about-timeline",
            name: "Company Journey",
            description: "Interactive timeline with colored milestones",
            structure: {
                id: "smvp-about-timeline-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-about-timeline-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-about-timeline",
                        type: "TimelineSection",
                        props: {
                            title: "Our Journey",
                            subtitle: "From a garage in San Francisco to a global platform.",
                            milestones: [
                                {
                                    year: "2022",
                                    title: "Founded",
                                    description: "Started in a small garage in San Francisco with a vision to redefine the founder's journey.",
                                    color: "#902EFF"
                                },
                                {
                                    year: "2022",
                                    title: "$2.5M Seed Round",
                                    description: "Closed our seed round led by industry veterans who believe in our automated approach to founder productivity.",
                                    color: "#FF2EA4"
                                },
                                {
                                    year: "2023",
                                    title: "Platform Launch",
                                    description: "Launched the full TechFlow platform with automated workflows, integrations, and real-time collaboration features.",
                                    color: "#902EFF"
                                },
                                {
                                    year: "2024",
                                    title: "500+ Startups",
                                    description: "Empowering over 500+ startups globally with our core platform and growing daily.",
                                    color: "#FF2EA4"
                                }
                            ]
                        }
                    }]
                }]
            }
        },

        // ==================================================================
        // TEAM — TeamSection with member grid + social links
        // ==================================================================
        {
            key: "smvp-about-team",
            name: "Team Members",
            description: "Team grid with avatars, roles, and social links",
            structure: {
                id: "smvp-about-team-section",
                type: "Section",
                defaultProps: {
                    fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                },
                columns: [{
                    id: "smvp-about-team-col",
                    width: "100%",
                    elements: [{
                        id: "smvp-about-team",
                        type: "TeamSection",
                        props: {
                            title: "Meet the Visionaries",
                            subtitle: "A diverse team of engineers, designers, and former founders dedicated to your success.",
                            ctaText: "Join the Team",
                            ctaLink: "/pricing",
                            members: [
                                {
                                    id: "alex",
                                    name: "Alex Rivers",
                                    role: "CEO & Founder",
                                    avatar: "https://marketplace.canva.com/EAFauoQSZtY/2/0/1600w/canva-brown-mascot-lion-free-logo-kAK-ljYAGXg.jpg",
                                    socials: { twitter: "#", linkedin: "#" }
                                },
                                {
                                    id: "jordan",
                                    name: "Jordan Chen",
                                    role: "CTO",
                                    avatar: "https://marketplace.canva.com/EAFauoQSZtY/2/0/1600w/canva-brown-mascot-lion-free-logo-kAK-ljYAGXg.jpg",
                                    socials: { twitter: "#", linkedin: "#" }
                                },
                                {
                                    id: "sarah",
                                    name: "Sarah Miller",
                                    role: "Head of Design",
                                    avatar: "https://marketplace.canva.com/EAFauoQSZtY/2/0/1600w/canva-brown-mascot-lion-free-logo-kAK-ljYAGXg.jpg",
                                    socials: { twitter: "#", linkedin: "#" }
                                },
                                {
                                    id: "marcus",
                                    name: "Marcus Tye",
                                    role: "Operations Lead",
                                    avatar: "https://marketplace.canva.com/EAFauoQSZtY/2/0/1600w/canva-brown-mascot-lion-free-logo-kAK-ljYAGXg.jpg",
                                    socials: { twitter: "#", linkedin: "#" }
                                }
                            ]
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = startupMvpAbout;
