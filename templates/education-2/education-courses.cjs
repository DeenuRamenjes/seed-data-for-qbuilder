/**
 * Education Template - Courses Page
 * Standardized using QBuilder Renderer Master Guidelines
 */

const educationCourses = {
    sections: [
        // --------------------------------------------------------------------------
        // COURSES HEADER
        // --------------------------------------------------------------------------
        {
            key: "education-courses-header",
            name: "Courses Headline",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f5",
                    paddingY: 64,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "edu-courses-header-col",
                    width: "100%",
                    elements: [
                        {
                            type: "Headline",
                            props: {
                                text: "Master the [CRAFT](linear-gradient(90deg, #FF4500, #ff8c00ff)",
                                tag: "h1",
                                size: "5xl",
                                color: "#181210",
                                marginBottom: 24
                            }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "High-end creative education delivered in a modern format. Browse our curated collection of industry-leading courses.High-end creative education delivered in a modern format. Browse our curated collection of industry-leading courses.",
                                size: "lg",
                                className: "mt-4 max-w-2xl"
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // FILTER BAR
        // --------------------------------------------------------------------------
        {
            key: "education-courses-filter",
            name: "Filter Bar",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f5",
                    paddingY: 20,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "edu-courses-filter-col",
                    width: "100%",
                    elements: [
                        {
                            type: "NavMenu", // Tier 2 - Closest match for a list of filter links/items
                            props: {
                                items: [
                                    { label: "All Disciplines", href: "#all", active: true },
                                    { label: "Visual Arts", href: "#arts" },
                                    { label: "Business", href: "#business" },
                                    { label: "Development", href: "#dev" },
                                    { label: "3D & Motion", href: "#motion" }
                                ],
                                orientation: "horizontal",
                                style: "pills", // hypothetical style prop, or just default nav
                                activeColor: "#FF4400"
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // MASONRY CATALOG
        // --------------------------------------------------------------------------
        {
            key: "education-courses-masonry",
            name: "Masonry Catalog",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f5",
                    paddingY: 40,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [{
                    id: "edu-courses-masonry-col",
                    width: "100%",
                    elements: [
                        // Using DesignStudioProjectsGrid (Tier 4) as it supports masonry and project cards
                        {
                            type: "Section",
                            props: {
                                layout: {
                                    type: "grid",
                                    columns: { desktop: 3, tablet: 2, mobile: 1 },
                                    gap: 24
                                }
                            },
                            elements: [
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Spatial Architecture in Digital Worlds",
                                        badge: "Masterclass",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZllycsLq65_STywHtvoYT8cPe2p0VCZBx5muPcyDAO4iiKZdM68AsodGkTl1zyw07sLFOrj9V_qEbhazIWbkpKvENNEC7ExwjRuvV_YMG5K_-GiKTbjwIvUA8iH93iN-a1MOxUweRMH1ttTS54dVr6iGyi_WQbCElVMu3gmmIz6GP6gE3-9CB9284119D96ETaMvYtLJpZDNFcydlIoc2BaQCXIjIR-SLTxQv9bLCehYHSm67dFJs5wB9I80Fc9Jae3wXCa09Q_4",
                                        description: "Explore the intersection of digital space and architectural design principles.",
                                        duration: "8 Weeks",
                                        students: "2.4k Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Advanced Swiss Design Systems",
                                        badge: "Typography",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRJ06QLLINbWPZW7xXG66Of1vQlGm387qORv6lljkQIjgFjw6o5HV9SUztVo-y71NUHZ9Nnd7v6-rx4hIb9tuxlBnfrfPrV7nmNeXMj7N_DpXxssLQ0PbPxFidPhcr7VWpD_pTJfZjeVz7ZVgNGiQyG5GonTvPlXoUgox1Spd1BYAW__ZVimzYauM6q33j1rph6ZZyHoO7jNBkNrgn2QvKkGcPY95UMoOTcjiz84UXS-v1cUysXXXnlrx7gObeKeXWg2PtWbavCgw",
                                        description: "Master the grid systems and typographic rules of Swiss style design.",
                                        duration: "6 Weeks",
                                        students: "1.8k Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "The Art of Kinetic Typography",
                                        badge: "Motion",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDytCrToOu_Bzo7nEbzp0-E7LBLY6544Yh7N48Ww9j9UNFlkdYWeyKxgx2wRQeYIU6ogLvVLRg11hVpG0V70X0CVhCDHEmGm7hEdC2gC6QqMwAkccBRrKQ-Xi4CAJWApfE0EKuRaRx0hTIt7R9kJwcXXnnI7_XkzuU4S5B036Tr6WXV4kkiLQ4FCqKVf611VtTdZw2xB9vBpwk34lOqe9uSHiZc00T9ediWteHAmAXHfLNMxPikU7nkTxS2T5m54Q-oZ8eKvI41IO4",
                                        description: "Learn to bring text to life through motion and animation techniques.",
                                        duration: "5 Weeks",
                                        students: "3.1k Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Premium Studio Management",
                                        badge: "Business",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXtAYnFokTnXUVyEShWQsYuYZHJi8Zd_hYWjmGlmc8hjlQDMN4mOpOPMF5NoB-dGY4EwpV4qWNQSuX5iqPQuaSlsxhKQq_o4FUS_5ys41ZqLX-F-WYdwnIVG0_jVA0aq1v29yZkjmSjAxI3OEtEEAO37oG41PxJvFW16Tw8nmQk6ImyNfKLvI4KB-X5XV5F5iQxUz77te5mCPALPMzmNayIslDDwc4F3lBDD-Grz4zhGcyLmr0OPPEpXO5H9Ket-G0I0LhkeJ2Fg8",
                                        description: "Strategies for running a successful and profitable creative studio.",
                                        duration: "4 Weeks",
                                        students: "900 Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Creative Coding with WebGL",
                                        badge: "Tech",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxvO6LxZParPb7prBoplTU6SrT39J0BsUsh_S9HdDLkEj6UrgKBjhayWFDHz2--nuVxWfFBH6x71pUUuZ1MafhPUQFeFjAF4wFh5u-N4Xoc0jO4Ej-1m8XsVLZYfr-286uQC18SGiBMWVwwMrXZn9dt7s7VZLoK0fAoI726Mk39na1Y_M3u-OepFDCXPh2RKXyy3E4mB1Z9DTTxhrIU23u_yz2pIv5e-fJ1Gf5SA7IsU4TQ1gPkAP7-7uDI60J1CGZ70hcn1mhjDk",
                                        description: "Deep dive into 3D graphics programming for the web using WebGL.",
                                        duration: "10 Weeks",
                                        students: "4.5k Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Minimalist Portrait Photography",
                                        badge: "Photo",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA45gTAcvivoUyoYqQeFA_yagifzWF082upWYAwdZix34mJrDQYnfdxRcIL0EsMh4PTrJe25dWAx6S56U7z8QaIK466374-O-kCeymm-gWZWnBb72bPGQa-MVJyLhLugzIsTjXhr3tB24dCMcsCK6q2XEbe8g8DKLFTjUAWnFc5ZPAoDRwRBQRJSlM9z8nR5lV45OOWPQZifBc5ngSAQVTsvDXVaP0bH-kQeeEJtnhOKuOSeo0I6IZW8Tac4-XGxs6xfyjgzMi-o2Y",
                                        description: "Master the art of lighting and composition in minimalist portraiture.",
                                        duration: "3 Weeks",
                                        students: "5.2k Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "The Art of Kinetic Typography",
                                        badge: "Motion",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDytCrToOu_Bzo7nEbzp0-E7LBLY6544Yh7N48Ww9j9UNFlkdYWeyKxgx2wRQeYIU6ogLvVLRg11hVpG0V70X0CVhCDHEmGm7hEdC2gC6QqMwAkccBRrKQ-Xi4CAJWApfE0EKuRaRx0hTIt7R9kJwcXXnnI7_XkzuU4S5B036Tr6WXV4kkiLQ4FCqKVf611VtTdZw2xB9vBpwk34lOqe9uSHiZc00T9ediWteHAmAXHfLNMxPikU7nkTxS2T5m54Q-oZ8eKvI41IO4",
                                        description: "Learn to bring text to life through motion and animation techniques.",
                                        duration: "5 Weeks",
                                        students: "3.1k Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Premium Studio Management",
                                        badge: "Business",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXtAYnFokTnXUVyEShWQsYuYZHJi8Zd_hYWjmGlmc8hjlQDMN4mOpOPMF5NoB-dGY4EwpV4qWNQSuX5iqPQuaSlsxhKQq_o4FUS_5ys41ZqLX-F-WYdwnIVG0_jVA0aq1v29yZkjmSjAxI3OEtEEAO37oG41PxJvFW16Tw8nmQk6ImyNfKLvI4KB-X5XV5F5iQxUz77te5mCPALPMzmNayIslDDwc4F3lBDD-Grz4zhGcyLmr0OPPEpXO5H9Ket-G0I0LhkeJ2Fg8",
                                        description: "Strategies for running a successful and profitable creative studio.",
                                        duration: "4 Weeks",
                                        students: "900 Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Creative Coding with WebGL",
                                        badge: "Tech",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxvO6LxZParPb7prBoplTU6SrT39J0BsUsh_S9HdDLkEj6UrgKBjhayWFDHz2--nuVxWfFBH6x71pUUuZ1MafhPUQFeFjAF4wFh5u-N4Xoc0jO4Ej-1m8XsVLZYfr-286uQC18SGiBMWVwwMrXZn9dt7s7VZLoK0fAoI726Mk39na1Y_M3u-OepFDCXPh2RKXyy3E4mB1Z9DTTxhrIU23u_yz2pIv5e-fJ1Gf5SA7IsU4TQ1gPkAP7-7uDI60J1CGZ70hcn1mhjDk",
                                        description: "Deep dive into 3D graphics programming for the web using WebGL.",
                                        duration: "10 Weeks",
                                        students: "4.5k Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Minimalist Portrait Photography",
                                        badge: "Photo",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA45gTAcvivoUyoYqQeFA_yagifzWF082upWYAwdZix34mJrDQYnfdxRcIL0EsMh4PTrJe25dWAx6S56U7z8QaIK466374-O-kCeymm-gWZWnBb72bPGQa-MVJyLhLugzIsTjXhr3tB24dCMcsCK6q2XEbe8g8DKLFTjUAWnFc5ZPAoDRwRBQRJSlM9z8nR5lV45OOWPQZifBc5ngSAQVTsvDXVaP0bH-kQeeEJtnhOKuOSeo0I6IZW8Tac4-XGxs6xfyjgzMi-o2Y",
                                        description: "Master the art of lighting and composition in minimalist portraiture.",
                                        duration: "3 Weeks",
                                        students: "5.2k Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Creative Coding with WebGL",
                                        badge: "Tech",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxvO6LxZParPb7prBoplTU6SrT39J0BsUsh_S9HdDLkEj6UrgKBjhayWFDHz2--nuVxWfFBH6x71pUUuZ1MafhPUQFeFjAF4wFh5u-N4Xoc0jO4Ej-1m8XsVLZYfr-286uQC18SGiBMWVwwMrXZn9dt7s7VZLoK0fAoI726Mk39na1Y_M3u-OepFDCXPh2RKXyy3E4mB1Z9DTTxhrIU23u_yz2pIv5e-fJ1Gf5SA7IsU4TQ1gPkAP7-7uDI60J1CGZ70hcn1mhjDk",
                                        description: "Deep dive into 3D graphics programming for the web using WebGL.",
                                        duration: "10 Weeks",
                                        students: "4.5k Students",
                                    }
                                },
                                {
                                    type: "AcademiqCourseCard",
                                    props: {
                                        title: "Minimalist Portrait Photography",
                                        badge: "Photo",
                                        badgeBgColor: "#FF4400",
                                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA45gTAcvivoUyoYqQeFA_yagifzWF082upWYAwdZix34mJrDQYnfdxRcIL0EsMh4PTrJe25dWAx6S56U7z8QaIK466374-O-kCeymm-gWZWnBb72bPGQa-MVJyLhLugzIsTjXhr3tB24dCMcsCK6q2XEbe8g8DKLFTjUAWnFc5ZPAoDRwRBQRJSlM9z8nR5lV45OOWPQZifBc5ngSAQVTsvDXVaP0bH-kQeeEJtnhOKuOSeo0I6IZW8Tac4-XGxs6xfyjgzMi-o2Y",
                                        description: "Master the art of lighting and composition in minimalist portraiture.",
                                        duration: "3 Weeks",
                                        students: "5.2k Students",
                                    }
                                }
                            ]
                        }
                    ]
                }]
            }
        }
    ]
};

module.exports = educationCourses;
