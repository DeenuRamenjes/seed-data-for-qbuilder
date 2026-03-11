const coachingHome = require('./coaching-home.cjs');

const coachingCourses = {
    header: coachingHome.header,

    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "courses-hero",
            name: "Courses Hero",
            structure: {
                type: "HeroGradient",
                defaultProps: {
                    backgroundColor: "#121E6D",
                    paddingTop: 80,
                    paddingBottom: 80
                },
                props: {
                    badgeText: "Ignite Your Potential",
                    title: "TRANSFORM YOUR TRAJECTORY.",
                    lead: "Dynamic coaching tracks designed for bold leaders and visionaries who refuse to settle for the status quo.",
                    primaryCtaText: "Explore Programs",
                    primaryCtaLink: "#",
                    secondaryCtaText: "Speak to a Coach",
                    secondaryCtaLink: "/contact",
                    accentColor: "#e68600",
                    secondaryColor: "#D3E600"
                }
            }
        },

        // --------------------------------------------------------------------------
        // COACHING COURSES
        // --------------------------------------------------------------------------
        {
            key: "courses-grid",
            name: "Coaching Courses",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f7f5",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "programs-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "COACHING COURSES",
                                    tag: "h3",
                                    size: "4xl",
                                    color: "#121E6D",
                                    fontWeight: "800",
                                    className: "tracking-tight mb-4 text-center"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Select a specialized path designed to accelerate your growth and sharpen your competitive edge.",
                                    size: "lg",
                                    color: "rgba(18, 30, 109, 0.6)",
                                    className: "max-w-xl mb-16 mx-auto text-center"
                                }
                            }
                        ]
                    },
                    {
                        id: "programs-cards",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 40,
                        elements: [
                            {
                                type: "PriceCard",
                                props: {
                                    title: "Executive Edge",
                                    description: "High-stakes leadership coaching for C-suite and emerging executives looking to command authority.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1BZ4KQD69WDBfA7-YT8Gn2epZu9bHib4v4NtWd9xOXmc34gNe6U9UJnqjK6RjXhe2cyhrladTYmZqf7BPtGoikkToQSVmGtk7g9j7U30dZWNru-EJDPg_dmi0IhbkYcNr6l-z0G5B-4D3PC_7TeEsfY6uZvDKVFXNorYJ1D2SQdBW8JjwzMVeQWtqI5v13kdzGJYA3grxgAbOZgPMQ8-R7i0BW9j7eqTP0XslA8E7zBkkdWaVNV9DQsIEeTkgRUI77pfaTr4KL7q4",
                                    category: "12 WEEKS TRACK",
                                    price: "$2,999",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.7)",
                                    categoryColor: "#590094",
                                    priceColor: "#121E6D",
                                    borderColor: "#e5e7eb"
                                }
                            },
                            {
                                type: "PriceCard",
                                props: {
                                    title: "Mindset Mastery",
                                    description: "Internal revolution for personal breakthroughs. Master your habits, focus, and emotional intelligence.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCigSvqE6rjeF4BcVn_F25MxfX32pyuZPxrQ3A_9CDjVhQltgEdeAAXTW8CmtXSjIO10zP7wZYfed5-AdWqbR_BGO6Aloaq94eqEzYUPfn7XWBNfxhqsefjINwjuueSVFyJnU8E_xLkOyu0GLuepHAeBt0Z2obORD60YqvfJR2FlrdFEmx-YHYguiczh2ZGvo0fCUK_ywuQY5spV02sw9AGPys8hUkSFamHduUCpZG9WnIpz-_yX1XAvnkxzvyyiQAF2S_3cSGZarMr",
                                    category: "8 WEEKS TRACK",
                                    price: "$1,499",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.7)",
                                    categoryColor: "#e68600",
                                    priceColor: "#121E6D",
                                    borderColor: "#e5e7eb"
                                }
                            },
                            {
                                type: "PriceCard",
                                props: {
                                    title: "Strategic Mindset",
                                    description: "For the architects of the future. Learn to build systems that scale and visions that inspire.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq2BZHMy9vXpuI3K5Kl8SDKX00igrvS5XJC_JbNtbFXfDMT_0cE4sCWWAyjIlxHysUD5A4JgBtaY-fQKD_vj1faJxAPHvPVTy3rH16IaqEYwYGRdeE66qbDsEedq9ZK7KOZIf_mGvL8Fm-yMKgeoteszNt84pJ3ZzpYontGbrgYf82RFqAYrSeiC8OMV5wqW-RUpqlrBTNTpv0UnjUnIu5JxHfwpPKJWSp_sC9CH-yXPIuEmgdlbpwUeLTbS-Y4jqXQwx-of_QGT6Q",
                                    category: "6 MONTHS TRACK",
                                    price: "$5,499",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.7)",
                                    categoryColor: "#D3E600",
                                    priceColor: "#121E6D",
                                    borderColor: "#e5e7eb"
                                }
                            },
                            {
                                type: "PriceCard",
                                props: {
                                    title: "High-Performance Habits",
                                    description: "The daily disciplines of the elite. Rewire your schedule for maximum output and radical efficiency.",
                                    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
                                    category: "4 WEEKS SPRINT",
                                    price: "$799",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.7)",
                                    categoryColor: "#590094",
                                    priceColor: "#121E6D",
                                    borderColor: "#e5e7eb"
                                }
                            },
                            {
                                type: "PriceCard",
                                props: {
                                    title: "Communication Catalyst",
                                    description: "Master the art of persuasion and presence. Influence at scale and command any room.",
                                    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
                                    category: "6 WEEKS COURSE",
                                    price: "$1,299",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.7)",
                                    categoryColor: "#e68600",
                                    priceColor: "#121E6D",
                                    borderColor: "#e5e7eb"
                                }
                            },
                            {
                                type: "PriceCard",
                                props: {
                                    title: "Legacy Leadership",
                                    description: "For the titans building empires. Long-term strategic coaching for generational impact.",
                                    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
                                    category: "1 YEAR JOURNEY",
                                    price: "$12,000",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.7)",
                                    categoryColor: "#D3E600",
                                    priceColor: "#121E6D",
                                    borderColor: "#e5e7eb"
                                }
                            },
                            {
                                type: "PriceCard",
                                props: {
                                    title: "Neuro-Sales Psychology",
                                    description: "Decode the buyer's brain. High-conversion sales strategies based on behavioral neuroscience.",
                                    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
                                    category: "10 WEEKS TRACK",
                                    price: "$1,899",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.7)",
                                    categoryColor: "#590094",
                                    priceColor: "#121E6D",
                                    borderColor: "#e5e7eb"
                                }
                            },
                            {
                                type: "PriceCard",
                                props: {
                                    title: "The Agile Leader",
                                    description: "Navigate uncertainty with precision. Master agile methodologies for team management and strategic pivot.",
                                    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
                                    category: "6 WEEKS SPRINT",
                                    price: "$1,199",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.7)",
                                    categoryColor: "#e68600",
                                    priceColor: "#121E6D",
                                    borderColor: "#e5e7eb"
                                }
                            },
                            {
                                type: "PriceCard",
                                props: {
                                    title: "Radical Innovation Workshop",
                                    description: "Disrupt your own business model. Design-thinking and rapid prototyping for tomorrow's market.",
                                    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
                                    category: "3 DAYS INTENSIVE",
                                    price: "$999",
                                    backgroundColor: "#ffffff",
                                    titleColor: "#121E6D",
                                    descriptionColor: "rgba(18, 30, 109, 0.7)",
                                    categoryColor: "#D3E600",
                                    priceColor: "#121E6D",
                                    borderColor: "#e5e7eb"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    footer: coachingHome.footer
};

module.exports = coachingCourses;
