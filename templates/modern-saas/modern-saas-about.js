export const modernSaaSAbout = {
    id: "modern-saas-about",
    type: "Page",
    title: "About Us",
    description: "About page for Modern SaaS",
    structure: {
        blocks: [
            {
                id: "mission-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#06080C",
                    paddingY: 80,
                    paddingX: 40,
                    fullWidth: true,
                    borderBottomColor: "rgba(255, 255, 255, 0.05)",
                    borderBottomWidth: "1px"
                },
                columns: [{
                    id: "mission-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "mission-element",
                            type: "MissionSection",
                            props: {
                                imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVVPoAnTJkIYKntlhbwIR7xQsclLVel5wvvimjL_Qj67H2wpNSgdGZbud7m2wSCBslyaRtBgQyzS1lyBES4XE1cFMLDQm6MXt6jAwQolBJOv9bWxkIT2jumfikpD5czEuRMLhE4TWOaieI4GMX5ECGe-c5gqFZmfe1-rqGks9JNSVkf9Ld3VSuvAWlXA4c9w22i_floDdssFKOVDGIIW08TUe5htIhqhpVFgeL5bMdArg2qQLYujvKMhBiYzFqGFxJr0KhpL5AH8",
                                title: "Our Mission",
                                description: "To empower developers and organizations by abstracting the complexity of modern cloud infrastructure. We believe that scaling shouldn't be a bottleneck for progress.",
                                description2: "Our platform is engineered for zero-latency operations, ensuring that your applications are always responsive, regardless of global load or data complexity.",
                                stat1Value: "99.999%",
                                stat1Label: "Global Uptime",
                                stat2Value: "0.4ms",
                                stat2Label: "Edge Latency",
                                borderColor: "rgba(255, 255, 255, 0.05)",
                                textColor: "#FFFFFF",
                                accentColor: "#3B82F6"
                            }
                        }
                    ]
                }]
            },
            {
                id: "timeline-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#06080C",
                    paddingY: 128,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "timeline-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "timeline-element",
                            type: "TimelineSection",
                            props: {
                                title: "Milestones of Innovation",
                                subtitle: "The journey from a single server to global distribution.",
                                milestones: [
                                    {
                                        year: "2021",
                                        title: "The Genesis",
                                        description: "Founded with a vision to simplify Kubernetes clusters. Secured Seed funding from industry leaders.",
                                        color: "#3B82F6"
                                    },
                                    {
                                        year: "2022",
                                        title: "V2 Infrastructure Launch",
                                        description: "Successfully handled our first billion requests. Expanded the team to 40 globally distributed engineers.",
                                        color: "#A855F7"
                                    },
                                    {
                                        year: "2023",
                                        title: "Global Expansion",
                                        description: "Opened edge regions in 12 new countries. Recognized as the fastest growing dev-tool of the year.",
                                        color: "#06B6D4"
                                    }
                                ],
                                backgroundColor: "#06080C",
                                textColor: "#FFFFFF",
                                subtitleColor: "#64748b"
                            }
                        }
                    ]
                }]
            },
            {
                id: "team-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#030712",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "team-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "team-element",
                            type: "TeamSection",
                            props: {
                                title: "The Minds Behind",
                                subtitle: "Our diverse team of engineers, designers, and visionaries are dedicated to redefining infrastructure standards.",
                                ctaText: "Join the Team",
                                members: [
                                    {
                                        name: "Marcus Chen",
                                        role: "Founder & CEO",
                                        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2xmW7lmkRoXIiiul61ExruNj5-nWfe8cxmBIT_Js4XfyVBui6bx_Haz98NtbH0d6RP4pIJjkUdYG3udpA1Pwv2g1h3BYVtPxCSjXh5uebX0YEDHJk5Id8R6dby6aTbCDvzpLtH6VVugJXLzDDS3lEQW-YQNfMSzrT-k1qlhsQko83KOPo-vROWP4VraNm01T567U9C7E7jvbUIGDsU-WpsDP6_ASkt-xNfIbt61El3tfTdZU5QDsETF9n4lxnA-Q86kEAJgv8mCQ",
                                        accentColor: "#3B82F6"
                                    },
                                    {
                                        name: "Elena Rodriguez",
                                        role: "Head of Infrastructure",
                                        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoqyY4T45lY6cXrHzv4ZOQLp04BJrWHLZA2YyDEDXjn4s44qQnEo6-1t764yfOFI56w3LbEjZPL45Lb30ZaDHtEZZ8_oLffWQPKRd2AsimgiXHwuhHqJRm8CA9q3knXJtmcexOHqMAXhmXBZCNxAVuuiuhu0W1PShatYydTrfQnTEUpdjvTWVgwg1mnBVEpNHIjy-uBnFMx1P_iKwAjg1C-H7xi9Eyx1iKFusXRZ6hDJAS0_t5HgCF0x4ohit49bsLs1eKXF1nvtU",
                                        accentColor: "#A855F7"
                                    },
                                    {
                                        name: "Dr. Sarah Jenkins",
                                        role: "Lead Systems Architect",
                                        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVVPoAnTJkIYKntlhbwIR7xQsclLVel5wvvimjL_Qj67H2wpNSgdGZbud7m2wSCBslyaRtBgQyzS1lyBES4XE1cFMLDQm6MXt6jAwQolBJOv9bWxkIT2jumfikpD5czEuRMLhE4TWOaieI4GMX5ECGe-c5gqFZmfe1-rqGks9JNSVkf9Ld3VSuvAWlXA4c9w22i_floDdssFKOVDGIIW08TUe5htIhqhpVFgeL5bMdArg2qQLYujvKMhBiYzFqGFxJr0KhpL5AH8",
                                        accentColor: "#06B6D4"
                                    },
                                    {
                                        name: "Jordan Smith",
                                        role: "VP of Engineering",
                                        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2xmW7lmkRoXIiiul61ExruNj5-nWfe8cxmBIT_Js4XfyVBui6bx_Haz98NtbH0d6RP4pIJjkUdYG3udpA1Pwv2g1h3BYVtPxCSjXh5uebX0YEDHJk5Id8R6dby6aTbCDvzpLtH6VVugJXLzDDS3lEQW-YQNfMSzrT-k1qlhsQko83KOPo-vROWP4VraNm01T567U9C7E7jvbUIGDsU-WpsDP6_ASkt-xNfIbt61El3tfTdZU5QDsETF9n4lxnA-Q86kEAJgv8mCQ",
                                        accentColor: "#3B82F6"
                                    }
                                ],
                                backgroundColor: "#030712",
                                textColor: "#FFFFFF"
                            }
                        }
                    ]
                }]
            }
        ]
    }
};
