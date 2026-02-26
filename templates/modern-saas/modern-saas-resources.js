export const modernSaaSResources = {
    id: "modern-saas-resources",
    type: "Page",
    title: "Resources",
    description: "Resources hub page for Modern SaaS",
    structure: {
        blocks: [
            {
                id: "resources-section",
                type: "Section",
                defaultProps: {
                    backgroundColor: "#06080C",
                    paddingY: 80,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "resources-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    elements: [
                        {
                            id: "resources-grid-element",
                            type: "ResourcesGrid",
                            props: {
                                cards: [
                                    {
                                        id: "resource-1",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2xmW7lmkRoXIiiul61ExruNj5-nWfe8cxmBIT_Js4XfyVBui6bx_Haz98NtbH0d6RP4pIJjkUdYG3udpA1Pwv2g1h3BYVtPxCSjXh5uebX0YEDHJk5Id8R6dby6aTbCDvzpLtH6VVugJXLzDDS3lEQW-YQNfMSzrT-k1qlhsQko83KOPo-vROWP4VraNm01T567U9C7E7jvbUIGDsU-WpsDP6_ASkt-xNfIbt61El3tfTdZU5QDsETF9n4lxnA-Q86kEAJgv8mCQ",
                                        category: "Infrastructure",
                                        categoryColor: "primary",
                                        title: "Scaling Infrastructure for 10M+ Users",
                                        description: "Learn the architectural patterns required to handle massive traffic spikes without downtime using modern orchestration.",
                                        link: "#",
                                        linkText: "Read More"
                                    },
                                    {
                                        id: "resource-2",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVVPoAnTJkIYKntlhbwIR7xQsclLVel5wvvimjL_Qj67H2wpNSgdGZbud7m2wSCBslyaRtBgQyzS1lyBES4XE1cFMLDQm6MXt6jAwQolBJOv9bWxkIT2jumfikpD5czEuRMLhE4TWOaieI4GMX5ECGe-c5gqFZmfe1-rqGks9JNSVkf9Ld3VSuvAWlXA4c9w22i_floDdssFKOVDGIIW08TUe5htIhqhpVFgeL5bMdArg2qQLYujvKMhBiYzFqGFxJr0KhpL5AH8",
                                        category: "Security",
                                        categoryColor: "secondary",
                                        title: "The Zero-Trust Model in Cloud Security",
                                        description: "Implementing granular access controls and identity-driven security policies across your distributed workforce.",
                                        link: "#",
                                        linkText: "Read More"
                                    },
                                    {
                                        id: "resource-3",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoqyY4T45lY6cXrHzv4ZOQLp04BJrWHLZA2YyDEDXjn4s44qQnEo6-1t764yfOFI56w3LbEjZPL45Lb30ZaDHtEZZ8_oLffWQPKRd2AsimgiXHwuhHqJRm8CA9q3knXJtmcexOHqMAXhmXBZCNxAVuuiuhu0W1PShatYydTrfQnTEUpdjvTWVgwg1mnBVEpNHIjy-uBnFMx1P_iKwAjg1C-H7xi9Eyx1iKFusXRZ6hDJAS0_t5HgCF0x4ohit49bsLs1eKXF1nvtU",
                                        category: "DevOps",
                                        categoryColor: "accent",
                                        title: "Optimizing CI/CD for Faster Deployments",
                                        description: "How to reduce build times by 60% through intelligent caching and parallel pipeline execution strategies.",
                                        link: "#",
                                        linkText: "Read More"
                                    },
                                    {
                                        id: "resource-4",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2xmW7lmkRoXIiiul61ExruNj5-nWfe8cxmBIT_Js4XfyVBui6bx_Haz98NtbH0d6RP4pIJjkUdYG3udpA1Pwv2g1h3BYVtPxCSjXh5uebX0YEDHJk5Id8R6dby6aTbCDvzpLtH6VVugJXLzDDS3lEQW-YQNfMSzrT-k1qlhsQko83KOPo-vROWP4VraNm01T567U9C7E7jvbUIGDsU-WpsDP6_ASkt-xNfIbt61El3tfTdZU5QDsETF9n4lxnA-Q86kEAJgv8mCQ",
                                        category: "Monitoring",
                                        categoryColor: "primary",
                                        title: "Distributed Tracing in Microservices",
                                        description: "Eliminate blind spots in your architecture by implementing end-to-end request tracing across service boundaries.",
                                        link: "#",
                                        linkText: "Read More"
                                    },
                                    {
                                        id: "resource-5",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVVPoAnTJkIYKntlhbwIR7xQsclLVel5wvvimjL_Qj67H2wpNSgdGZbud7m2wSCBslyaRtBgQyzS1lyBES4XE1cFMLDQm6MXt6jAwQolBJOv9bWxkIT2jumfikpD5czEuRMLhE4TWOaieI4GMX5ECGe-c5gqFZmfe1-rqGks9JNSVkf9Ld3VSuvAWlXA4c9w22i_floDdssFKOVDGIIW08TUe5htIhqhpVFgeL5bMdArg2qQLYujvKMhBiYzFqGFxJr0KhpL5AH8",
                                        category: "Engineering",
                                        categoryColor: "secondary",
                                        title: "The Future of Edge Computing",
                                        description: "Moving compute closer to your users. Benefits of edge functions and global low-latency data replication.",
                                        link: "#",
                                        linkText: "Read More"
                                    },
                                    {
                                        id: "resource-6",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoqyY4T45lY6cXrHzv4ZOQLp04BJrWHLZA2YyDEDXjn4s44qQnEo6-1t764yfOFI56w3LbEjZPL45Lb30ZaDHtEZZ8_oLffWQPKRd2AsimgiXHwuhHqJRm8CA9q3knXJtmcexOHqMAXhmXBZCNxAVuuiuhu0W1PShatYydTrfQnTEUpdjvTWVgwg1mnBVEpNHIjy-uBnFMx1P_iKwAjg1C-H7xi9Eyx1iKFusXRZ6hDJAS0_t5HgCF0x4ohit49bsLs1eKXF1nvtU",
                                        category: "FinOps",
                                        categoryColor: "accent",
                                        title: "Cloud Cost Optimization Strategies",
                                        description: "How top-tier engineering teams manage their cloud bill while maintaining peak performance and availability.",
                                        link: "#",
                                        linkText: "Read More"
                                    }
                                ],
                                backgroundColor: "#06080C",
                                textColor: "#FFFFFF",
                                primaryColor: "#3B82F6",
                                secondaryColor: "#A855F7",
                                accentColor: "#06B6D4",
                                loadMoreText: "Load More Articles"
                            }
                        }
                    ]
                }]
            }
        ]
    }
};
