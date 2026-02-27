/**
 * IT Consulting Template - Services Page
 * Sections: Hero w/ image, 6 Service Cards, CTA
 */

const itConsultingServices = {
    sections: [
        // ==================================================================
        // HERO - Two column layout with badge uptime stat
        // ==================================================================
        {
            key: "it-contact-hero",
            structure: {
                id: "it-contact-hero-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#0559b3",
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf5T4cPqjEuB5kBbyo3yL9uJJy7ytzPtxl6eYJHzAViZXG7ypqyjBKFkrNwB0JL6FijHfvBwrlSO7Cv_IEJGcWcWXD1lR58kvQOo12ulpwKt_kRxkzopEML0uRHtazxSnsDDuGBbyx2Td03waHAfkKlYDbWOPscyVfLFstk1UhSaYi3ahtYBnk8TmPy7MuBW8pru9qsmzvGtnPmYRJ3WjZm4a4WY_KsuPDXvOTNw1VTnOLwPxWq28IAUD-9CAPgVAVsB8cYZ7pqTM",
                    backgroundOverlay: "rgba(5, 89, 179, 0.75)",
                    paddingY: 100,
                    paddingX: 48,
                    fullWidth: true,
                    minHeight: 400,
                },
                columns: [{
                    id: "it-contact-hero-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20
                    },
                    elements: [
                        {
                            id: "it-contact-hero-badge",
                            type: "Badge",
                            props: {
                                text: "Our Services",
                                color: "#05B3AA",
                                align: "center",
                                textAlign: "center",
                                marginBottom: 20,
                                bgColor: "rgba(5, 179, 170, 0.2)",
                                showPing: false
                            }
                        },
                        {
                            id: "it-contact-hero-title",
                            type: "Headline",
                            props: {
                                text: "Comprehensive IT Solutions",
                                tag: "h1",
                                align: "center",
                                color: "#ffffff",
                                marginBottom: 10,
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-contact-hero-desc",
                            type: "Paragraph",
                            props: {
                                text: "Partner with our expert IT consultants to accelerate your digital transformation and drive business growth through innovative technology solutions.",
                                align: "center",
                                color: "rgba(255,255,255,0.9)",
                                size: "lg"
                            }
                        }
                    ]
                }]
            }
        },

        // ==================================================================
        // SERVICES GRID - Header + 6 Service Cards
        // ==================================================================
        {
            key: "it-services-grid-header",
            structure: {
                id: "it-services-grid-header",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-services-grid-header-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 16
                    },
                    elements: [
                        {
                            id: "it-services-grid-title",
                            type: "Headline",
                            props: {
                                text: "Core Competencies",
                                tag: "h2",
                                align: "left",
                                color: "#0f172a",
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-services-grid-accent",
                            type: "Divider",
                            props: {
                                color: "#05B3AA",
                                width: "96px",
                                height: "6px",
                                borderRadius: "full"
                            }
                        },
                        {
                            id: "it-services-grid-desc",
                            type: "Paragraph",
                            props: {
                                text: "Our specialized consulting teams focus on high-performance verticals to ensure your business stays ahead of the curve.",
                                align: "left",
                                color: "#475569",
                                size: "lg"
                            }
                        }
                    ]
                }]
            }
        },
        {
            key: "it-services-grid-cards",
            structure: {
                id: "it-services-grid-cards",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#ffffff",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [
                    {
                        id: "it-svc-col-1",
                        width: "calc(100% / 3)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-svc-cloud",
                            type: "FeatureCard",
                            props: {
                                title: "Cloud Strategy",
                                description: "Scalable multi-cloud and hybrid infrastructure design optimized for resilience and cost-efficiency.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWmbyfOVJm7UTKhcRaVGu_9_0azB1_9NGyDYB0VQXNlc8DQhHQycAKCPe3rOOIFJJld7NtHoImP7sV3n29wJMLbIuE3tUJVbqAgd2DCVEgLl02Drl5JOqGdBsCqOup6RTlOYDdkcvK8v4umHFxaegqrKiRCvuMHJD2Lpwip0DjBP4L-k3RvZwDCdZRVXnAFFLnHpN1_RVCT0IJYgLNu7V7DJTSCBUbONupomBg2MCOqlaGS7IvmrYKJOPmlOchLlI-sk83ByemQtI",
                                imageAspectRatio: "16/9",
                                textAlign: "center",
                                titleSize: "lg",
                                borderRadius: "16px",
                                padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "it-svc-col-2",
                        width: "calc(100% / 3)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-svc-security",
                            type: "FeatureCard",
                            props: {
                                title: "Cybersecurity",
                                description: "Enterprise-grade protection frameworks including Zero Trust, threat hunting, and compliance audits.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpPmR1Vy-3xIXVA9cZwQ7Z-KjhLPr6Q29ysGWB-xriil0eeI0S5uBtBmYDt6slheaH75yAg54gghC6gMxm129Gv85_Bs9S-F1J4JQfqUw1ZNjpvGGUSr276Qnxn8wobD1PmxRK925ea8_2m4-L8wWZLEQRfZtNsiaLMIUThrA0pnZYPXatOPMQEhtFLTGZjJBnBvcK4tWJ25K6DXaeY2epLmeTOGnc2uh6Lj_INGWA0og4zNMAQstMTHz6w_M9gWQho9tNxxmSr54",
                                imageAspectRatio: "16/9",
                                textAlign: "center",
                                titleSize: "lg",
                                borderRadius: "16px",
                                padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "it-svc-col-3",
                        width: "calc(100% / 3)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-svc-ai",
                            type: "FeatureCard",
                            props: {
                                title: "AI & ML Solutions",
                                description: "Leveraging neural networks and predictive analytics to drive automated decision making.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQHC2Dkv65jB6k22-qxZ1dDK-tOlyo94rg5rL9UP1qCrfQH6KMXt2vTyGv5QuXDbJUETte6Q-J7xT4Ya9fo4CPz97Q1puHcPwYbYRKmzeT_BRGZryABqW8_pV3SNz4tkGQtH8h9DQf4agBROimxqpO_TmcSO76k2-az_e7N3New9gfdiMlQI95vyZ1AgO6chFYSjGntNZfUuGAeU95Bs6hiHijxS48GaiblqKuagveAjTyP39bqcTiSk9vIsdRL7sISRpvWza9VoA",
                                imageAspectRatio: "16/9",
                                textAlign: "center",
                                titleSize: "lg",
                                borderRadius: "16px",
                                padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "it-svc-col-4",
                        width: "calc(100% / 3)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-svc-legacy",
                            type: "FeatureCard",
                            props: {
                                title: "Legacy Modernization",
                                description: "Phase-out technical debt by refactoring monolithic apps into agile microservices architectures.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABj_aA4T7OQdCv48PdU9U8YcdbSnd3a_DNOgydLZqeZ_6fg56W11vqrPSlWzCOYkXeE9IRPnB3EKZV25odb9R4bkLnJiV30LSHSHX5TZt4Kt0BGKduofkkNftyg6oglmXbf5ooJ9ob0ngXkY9hZsGw__gm5SvBROm-JyWWbl9L4P4-8FU5aWpyfPyxXY-46BpMrIdMP0hA8YTL6L1KMqCpKvAA2feY6h3dlxMz5vfBzxN9FbE0cbLqjp47xKXk--o8sEkIcNadeJA",
                                imageAspectRatio: "16/9",
                                textAlign: "center",
                                titleSize: "lg",
                                borderRadius: "16px",
                                padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "it-svc-col-5",
                        width: "calc(100% / 3)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-svc-data",
                            type: "FeatureCard",
                            props: {
                                title: "Enterprise Data",
                                description: "Turn raw information into actionable business intelligence through data warehousing and visualization.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_tJyGYluUl5bDrmmWt0WEtC4WyOMCl1ioBJHZ4KMEqmFrd-etoMmzrfD8OuE5PiMihZm73NurgpUktSKmi2_GfERuILcOSPSXnyzkpq7gNJd9WAbeu729SlRVkDOypeH_ABZgap_El_yqLyXIir6nZksL2FdTzKW_qedb4XTWLHe5IRoW6XmjlK-qxSN7ztnDwc0QCYzja-SbEsI-cR8qrLLUO4uC_6YjaUX_2UFdskfum_wSHLQ4fEelUBmvaUXNYTkD1W4Cygg",
                                imageAspectRatio: "16/9",
                                textAlign: "center",
                                titleSize: "lg",
                                borderRadius: "16px",
                                padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "it-svc-col-6",
                        width: "calc(100% / 3)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-svc-strategy",
                            type: "FeatureCard",
                            props: {
                                title: "Digital Strategy",
                                description: "Executive-level advisory for long-term technology roadmaps and digital cultural transformation.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSIxeBzgihfMuoV4auLusfpJmGsO63APUVZk4SoXgTWWKECz2c9RBi4kD6yye6jZwoTAsZQFGWIWlVlIPhKYgDzpd2-jg4OD_V86S2uL8ojmOjsKHXXvF__mTYoLRhXZZED9jsdbCjAOgnIJMk2MWvf10tZp1xWEJJ0fovqDwfuZ4GPlQJsoujektXoDpvM4Skrf_aVHvUPPwlpKj7MVxTUqSHpUOX5NMFwGYq-I7YKGlMrPO-wq8GWgmmQrWzYJYxgPeQ31o8Yr8",
                                imageAspectRatio: "16/9",
                                textAlign: "center",
                                titleSize: "lg",
                                borderRadius: "16px",
                                padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "it-svc-col-7",
                        width: "calc(100% / 3)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-svc-devops",
                            type: "FeatureCard",
                            props: {
                                title: "DevOps Engineering",
                                description: "Streamline development pipelines with automated CI/CD, infrastructure as code, and container orchestration.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCKP-MStJhE3zTCB5PqaBy_VxoHV2PdPsxzV1bxmGvf9pyuSgdEr2ItT2dPUK5Y3HpveIjScqTnQ_Ma9hbEWHcBNA8LiZcbItJeZJ-eIX5hbWZ-udFEuk305XdBZCR6gh-8Uv-WSWasELDKyKxMctLiY3vEMeWMof7u1HoiNeUPBuXOX8_qvtmmJ5iCARAVzm4De-U96jYbLxK7JkV7GfDXdfFI3qnI9LCHJyHkPSoioW_qIS363XDjcwgm3rZPm6DMZSRKcFn9eI",
                                imageAspectRatio: "16/9",
                                textAlign: "center",
                                titleSize: "lg",
                                borderRadius: "16px",
                                padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "it-svc-col-8",
                        width: "calc(100% / 3)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-svc-iot",
                            type: "FeatureCard",
                            props: {
                                title: "IoT Solutions",
                                description: "Connect and manage smart devices at scale with real-time monitoring, edge computing, and sensor analytics.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvAYRkhwK2oEGuO4wPdxBmzLGXY8AT8H0z9oCabvBoNPkFISkHJLoevH0GYNU1pdM7BJlVbEGuBRRVQfrWChbR7og2Y_BG0UUwJTI17NvorElJSfxHUniPWuh8mcFB6XYie7VnixPrDFr__h46Bb0Tvk-z503JTqrFDw3cFnZXwOTd9jI0hNZ5z3O0jBj4t3rM8XijheYZhXIXrsE7BIAmQguN_Rx-LlgNitgHZgVd2A5YZNF6DN_h1pUVSh56Aj-NnpWB1QSvJi8",
                                imageAspectRatio: "16/9",
                                textAlign: "center",
                                titleSize: "lg",
                                borderRadius: "16px",
                                padding: "16px"
                            }
                        }]
                    },
                    {
                        id: "it-svc-col-9",
                        width: "calc(100% / 3)",
                        props: { flexDirection: "column", gap: 16 },
                        elements: [{
                            id: "it-svc-blockchain",
                            type: "FeatureCard",
                            props: {
                                title: "Blockchain & Web3",
                                description: "Decentralized solutions for secure transactions, smart contracts, and transparent supply chain management.",
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdf4v6P7ud81AncpULvRfudteucUDNgsu54nfcPtBFSBRnD-IppX2SGUJMynQwB3sEU8nOIAO4A6MIJNFYxZAqQ8mAZpCX4TjHaQNPeRRcyoFdvrz20NEMuF7fXHqDYAe7n9FA8-dOz-FDEXC6Wi2PcrOHcAbGUBqGbXwVTezdGU-TA3YeR2exY40do3zkIzdZZ1qVlA9Eba47ZlANgTrOoLevtJndQpsv1FAFyyTa-fCpAXcPvF3dQCvLL3zLKr6BBsAxTrx2RR4",
                                imageAspectRatio: "16/9",
                                textAlign: "center",
                                titleSize: "lg",
                                borderRadius: "16px",
                                padding: "16px"
                            }
                        }]
                    }
                ]
            }
        },

        // ==================================================================
        // CTA SECTION - Full-width primary background
        // ==================================================================
        {
            key: "it-services-cta",
            structure: {
                id: "it-services-cta-section",
                type: "Section",
                defaultProps: {
                fontFamily: "Manrope",
                    backgroundColor: "#0559b3",
                    paddingY: 80,
                    paddingX: 48,
                    fullWidth: true,
                },
                columns: [{
                    id: "it-services-cta-col",
                    width: "100%",
                    props: {
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 24
                    },
                    elements: [
                        {
                            id: "it-services-cta-title",
                            type: "Headline",
                            props: {
                                text: "Ready to scale your enterprise?",
                                tag: "h2",
                                align: "center",
                                color: "#ffffff",
                                fontWeight: "900"
                            }
                        },
                        {
                            id: "it-services-cta-desc",
                            type: "Paragraph",
                            props: {
                                text: "Join 200+ global organizations that rely on Elite IT for their critical digital infrastructure and strategic advisory.",
                                align: "center",
                                color: "rgba(255,255,255,0.8)",
                                size: "lg"
                            }
                        },
                        {
                            id: "it-services-cta-btns",
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Book a Consultation",
                                secondaryText: "View Case Studies",
                                primaryBg: "#05B3AA",
                                primaryColor: "#ffffff",
                                secondaryBg: "rgba(255,255,255,0.1)",
                                secondaryColor: "#ffffff",
                                justifyContent: "center"
                            }
                        }
                    ]
                }]
            }
        }
    ]
};

module.exports = itConsultingServices;
