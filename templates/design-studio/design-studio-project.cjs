/**
 * Design Studio Template - Project/Case Study Page
 * Theme: Blue/White creative studio aesthetic
 * Industry: Creative Agencies / Design Studios
 */

const designStudioProject = {
    sections: [
        // --------------------------------------------------------------------------
        // PROJECT HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-project-hero-section",
            name: "Project Hero",
            description: "Full-height hero with grayscale image and title card",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-project-hero-col",
                    width: "100%",
                    elements: [{
                        id: "ds-project-hero-element",
                        type: "DesignStudioProjectHero",
                        props: {
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE31ZjJg750eZ_TuymJ5T_of55cBteBvRRx1pnVOPN9A8_-vfU3DFi2dfMSzXrkKQAcf8y8RJcRUx18Eu5JMgEBC-0Z8cD0h-0ifWaqQcjIfri5u5zQt-42ytuVyUWahVoaQfr_MkrGsY1HHTDHbuvcBRxT1c7enxBiIaZ90vDVmLxRfVJnr2Ip3VIPcQekNqHgQpegp_A16Yob9P26pIVNWBZzNuVNr3XtjSJYeBveM-MQI6mBQnA3CwgN6m2JWcmEKVl3_jekCo",
                            label: "Product Design — 2024",
                            title: "CarePlus\nDigital Hub",
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PROJECT META SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-project-meta-section",
            name: "Project Meta",
            description: "4-column grid with project info",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-project-meta-col",
                    width: "100%",
                    elements: [{
                        id: "ds-project-meta-element",
                        type: "DesignStudioProjectMeta",
                        props: {
                            items: [
                                { label: "Client", value: "CarePlus Health Services" },
                                { label: "Role", value: "UI/UX Strategy, Brand Identity" },
                                { label: "Timeline", value: "6 Months Development" },
                                { label: "Industry", value: "Healthcare Tech" }
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CONCEPT SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-concept-section",
            name: "Concept",
            description: "Two-column layout with headline, description, and stats",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-concept-col",
                    width: "100%",
                    elements: [{
                        id: "ds-concept-element",
                        type: "DesignStudioConcept",
                        props: {
                            sectionTitle: "Concept",
                            headline: "Redefining the healthcare interface through",
                            headlineHighlight: "extreme legibility",
                            description: "The challenge was to take a complex medical ecosystem and distill it into a user experience that felt both authoritative and accessible. We moved away from the soft blue gradients typical of the industry towards a high-contrast, Swiss-inspired aesthetic that prioritizes data hierarchy and accessibility.",
                            stats: [
                                { value: "120%", label: "Increase in User Engagement" },
                                { value: "0.4s", label: "Average Interaction Latency" }
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // EXECUTION SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-execution-section",
            name: "Execution",
            description: "Dark section with before/after comparison",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#000000",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-execution-col",
                    width: "100%",
                    elements: [{
                        id: "ds-execution-element",
                        type: "DesignStudioExecution",
                        props: {
                            title: "Execution",
                            description: "We developed a proprietary design system rooted in mathematical grids. The \"Connected Care\" module utilizes a brutalist framework to ensure that critical patient data is never more than two taps away.",
                            primaryButtonText: "Case Study PDF",
                            primaryButtonLink: "#",
                            secondaryButtonText: "Prototypes",
                            secondaryButtonLink: "#",
                            beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPd5lFTU9jLhlrK9sQw_H5TzuYq97awf4MoFl-nLw4vjuQgLlMTCycw17y1kVsmRud-bi8ef5mqY5likla5TYcyp8S-WN2XlGrT0QxuTkeRhYLkzN5Eq67b_vweNYDT-E6aPScxh-ogrzea0ECMgrkvErM4coFlsrxB_sTtA2v7C_eebd1lrUSDh9_629fQbr3_jBeVAYQBcQXMVrcQd7wIzsSFjveDUXRg7Zo9qV8qrZOqptBzP3COFWjq7w-BuEQYlO9Q2q76k",
                            afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPd5lFTU9jLhlrK9sQw_H5TzuYq97awf4MoFl-nLw4vjuQgLlMTCycw17y1kVsmRud-bi8ef5mqY5likla5TYcyp8S-WN2XlGrT0QxuTkeRhYLkzN5Eq67b_vweNYDT-E6aPScxh-ogrzea0ECMgrkvErM4coFlsrxB_sTtA2v7C_eebd1lrUSDh9_629fQbr3_jBeVAYQBcQXMVrcQd7wIzsSFjveDUXRg7Zo9qV8qrZOqptBzP3COFWjq7w-BuEQYlO9Q2q76k",
                            beforeLabel: "Initial Concept",
                            afterLabel: "After Design",
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // OUTCOME SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-outcome-section",
            name: "Outcome",
            description: "Two-column layout with cards and image gallery",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-outcome-col",
                    width: "100%",
                    elements: [{
                        id: "ds-outcome-element",
                        type: "DesignStudioOutcome",
                        props: {
                            sectionTitle: "Outcome",
                            description: "The final result is a transformative digital ecosystem that empowers over 500,000 patients globally. CarePlus is no longer just a provider; it is a digital-first health partner.",
                            cards: [
                                {
                                    icon: "verified",
                                    title: "HIPAA Redefined",
                                    description: "Compliance meets world-class aesthetics in a unified patient vault.",
                                    highlighted: false
                                },
                                {
                                    icon: "trending",
                                    title: "Global Impact",
                                    description: "Recognized as the benchmark for 2024 healthcare digital innovation.",
                                    highlighted: true
                                }
                            ],
                            images: [
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuBVzw4puP9aUbkyIhUI0dQb7ckh4SPqX-TEsMqm9TUxuA8yOZ6Z4oCSXJRlt5u3oJczx-tsekmZRLNkXgGvSFek8Mup9aT1rm_lCrZ-qRx1906E977Jvr7MGILN2sc3CfM8FSasSJcXtC2gNWwq4RFT2J3V05JTEvqO4guJ4xyW1wG55AKIaqltdwzOUCj2Uvk3zFKCeWYXy7zJth_kYugW8-m69ryjf_mcpd4Jxqm2LsH3TLSicNcYe-eMK-Sh7rgPYDn3e_9r0dM",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuAFVBHFoDxrUSSNg1gmXHNxSurfLtY1XUIRQUbI_tpNppu_woVG7ywlUVv6fz4WVLsoBPAxdYbej--id7btHXBVfKigo2EQp8Dj6t6vbkd154XTD7Vmh0TTwrEWJjMNtdg4AB8ZVrX5DJJdJRP90rlD4HFQ6Jyp8OEQ8wWUEFiSS9uKMJjd4QnzWxmn9BUa_EBMTHwUlCpuDjLBNXF5WXj9xjacLBPrpLb_LZWZp8yqdU9iVjWDdIDskb2bs-4UlWZbZDQSOS4UH0g",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuDuS5QYz3_h3OO-D1UBlaefs6gpbxyBOror7bp140kjNxJT6bH494r3iIrH0BAcJQX6ZItatUhs_vSPJCU8AxvxL695SCIvBiaXjYb-OpNcdZwT0N1qzJjqqjCap1XlIlTXxTcTmz-F9-381hwZk858hfcOc9zhhIdtjKQFnrhH3nZt6ejEnK2JdCDcZUUV26HWVwjnHOKw95qbHO_A-636QEmc2WYCsr9spHw2IZZP1By1_jg-1dD3WO-TvTPLptC3bYnWQE0vxoY"
                            ],
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PROJECT NAVIGATION SECTION
        // --------------------------------------------------------------------------
        {
            key: "design-studio-project-nav-section",
            name: "Project Navigation",
            description: "Prev/next project navigation",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true
                },
                columns: [{
                    id: "ds-project-nav-col",
                    width: "100%",
                    elements: [{
                        id: "ds-project-nav-element",
                        type: "DesignStudioProjectNav",
                        props: {
                            prevProject: {
                                label: "Previous Project",
                                title: "Aether Brand",
                                href: "#"
                            },
                            nextProject: {
                                label: "Next Project",
                                title: "Kinetic UI",
                                href: "#"
                            },
                            primaryColor: "#1F6AE1"
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = designStudioProject;
