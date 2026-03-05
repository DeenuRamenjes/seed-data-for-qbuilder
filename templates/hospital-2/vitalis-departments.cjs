/**
 * Hospital-2 Template - Departments Page (Vitalis Medical Center)
 * Theme: Modern Healthcare / Red & Cyan
 * Primary: #e60000
 * Secondary: #00c9e3
 * Font: Inter
 */

const vitalisDepartments = {
    sections: [
        // --------------------------------------------------------------------------
        // DEPARTMENTS HERO
        // --------------------------------------------------------------------------
        {
            key: "departments-hero",
            name: "Departments Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_0MQvKpMzcGEgD9oaLppwLSTLenJycAzX0FHrlX_ISSL0FGtvhkBtay1OUS0RgVZi9oHg6AwhvXiBxNwspH8Hrq4Wy7SebR7mF7_fc6Amehc3HREXnqCHiXniMRr0BxmfJDWlXyMt8gNTQr9XJAlCUY9YegzDYuC1KysRmfK2zg0Z2DASGe_AjYEnhkQSo-7jcMrQt8-NmcstXqip4gB-2sIerRyQs7RAZY_H6w5eeCVSffOxQvOlq591xQt2IKZU81tvI-2bnHzI",
                    backgroundOverlay: "rgba(15, 23, 42, 0.75)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    minHeight: "400px"
                },
                columns: [{
                    id: "dept-hero-col",
                    width: "100%",
                    props: { maxWidth: "700px" },
                    elements: [
                        {
                            type: "Badge",
                            props: { text: "World-Class Healthcare", color: "#e60000", bgColor: "rgba(230, 0, 0, 0.1)", borderRadius: "full" }
                        },
                        {
                            type: "Headline",
                            props: {
                                text: "Compassionate Care Across Every Specialty",
                                tag: "h1",
                                size: "5xl",
                                align: "left",
                                color: "#ffffff"
                            }
                        },
                        {
                            type: "Paragraph",
                            props: {
                                text: "At Vitalis Medical Center, we combine advanced medical technology with human empathy to provide the highest standard of specialized treatment.",
                                size: "lg",
                                align: "left",
                                color: "#cbd5e1",
                                marginTop: 16,
                                className: "max-w-[540px]"
                            }
                        },
                        {
                            type: "ButtonGroup",
                            props: {
                                primaryText: "Our Facilities",
                                primaryLink: "#facilities",
                                primaryBg: "#00c9e3",
                                primaryColor: "#ffffff",
                                primaryBorderRadius: 8,
                                secondaryText: "Emergency Care",
                                secondaryLink: "#emergency",
                                secondaryBg: "transparent",
                                secondaryColor: "#ffffff",
                                secondaryBorderColor: "rgba(255,255,255,0.3)",
                                secondaryBorderRadius: 8,
                                layout: "horizontal",
                                gap: "gap-4",
                                marginTop: "32px"
                            }
                        }
                    ]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // CORE DEPARTMENTS (ServiceProvider)
        // --------------------------------------------------------------------------
        {
            key: "vitalis-departments",
            name: "Core Departments",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8fafc",
                    paddingY: 40,
                    paddingX: 20,
                    fullWidth: true,
                    layout: "grid",
                    columns: 1,
                    gap: 20
                },
                columns: [{
                    id: "dept-sp-col",
                    width: "100%",
                    elements: [{
                        type: "ServiceProvider",
                        props: {
                            badge: "Specialized Care",
                            heading: "Our Core Departments",
                            watermarkText: "DEPARTMENTS",
                            columns: 3,
                            services: [
                                {
                                    icon: "Heart",
                                    title: "Cardiology",
                                    description: "Leading heart health excellence with advanced diagnostic imaging and surgical precision.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#cardiology"
                                },
                                {
                                    icon: "Bone",
                                    title: "Orthopedics",
                                    description: "Bone and joint specialists dedicated to restoring mobility and strength through therapy and surgery.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#orthopedics"
                                },
                                {
                                    icon: "Baby",
                                    title: "Pediatrics",
                                    description: "Gentle, comprehensive care for your little ones, ensuring healthy development and bright futures.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#pediatrics"
                                },
                                {
                                    icon: "Brain",
                                    title: "Neurology",
                                    description: "Advanced neurological care with cutting-edge diagnostics for brain and nervous system disorders.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#neurology"
                                },
                                {
                                    icon: "Stethoscope",
                                    title: "General Medicine",
                                    description: "Comprehensive primary care and internal medicine services for all ages and conditions.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#general"
                                },
                                {
                                    icon: "Eye",
                                    title: "Ophthalmology",
                                    description: "Expert eye care with laser treatments, cataract surgery, and advanced retinal procedures.",
                                    linkText: "Learn More",
                                    linkUrl: "/departments#ophthalmology"
                                }
                            ],
                            accentColor: "#e60000",
                            headingColor: "#0f172a",
                            descriptionColor: "#475569",
                            backgroundColor: "#f8fafc",
                            cardBgColor: "#ffffff",
                            iconBgColor: "#e60000",
                            iconColor: "#ffffff",
                            cardBorderRadius: 16
                        }
                    }]
                }]
            }
        },
        // --------------------------------------------------------------------------
        // FEATURES BAR (GridCards)
        // --------------------------------------------------------------------------
        {
            key: "departments-features",
            name: "Key Features",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8fafc",
                    paddingY: 40,
                    paddingX: 20,
                    fullWidth: true,
                    layout: "grid",
                    columns: 1,
                    gap: 20
                },
                columns: [{
                    id: "features-gc-col",
                    width: "100%",
                    elements: [{
                        type: "GridCards",
                        props: {
                            heading: "Why Choose Vitalis?",
                            description: "Our commitment to safety, expertise, and cutting-edge technology sets us apart as a leader in patient-centered healthcare.",
                            cards: [
                                {
                                    title: "Safety First",
                                    description: "Stringent hygiene protocols and 24/7 monitoring ensure a secure environment for every patient.",
                                    icon: "ShieldCheck",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAOtdR_ZAe_sWgFAL95meFnQOYtoVTovda4JdbE1rNcBhfl5koxs_9wlQbR8PicsOFGBja6J167quzHtGxnFkbZnumKb7dfIIkK45H6d5UjDq0Br0eWb_c6CYMOilGG1SFfuKvVncgZcFCmWBeCylHvlYo5fC90mg5H43RAAD15qhyGeMpzjkrmMvSAVPQZcGom6K_kHHcwjWyHxDyHI1z-aRq-41Fpox6qakvEnCQZAhiGmjUQr6NFnUovQ9n3sYIHYaa0ZFzW5QZ",
                                    bgColor: "#e60000",
                                    textColor: "#ffffff",
                                    linkText: "",
                                    linkUrl: "",
                                    span: "normal"
                                },
                                {
                                    title: "Expert Team",
                                    description: "Our doctors are globally recognized experts who collaborate across departments for holistic care.",
                                    icon: "Users",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoTuIwoF_zBHhjcS29k4D8ibMXksD3DnRZzeGMJJyfB5joGDaztFg7kdU4PqYiEpJ8BqWQZiGzvJVQEs3oc2Q7HFMqtk8E-1HqJkKR2sh4wZ4OUepXMcfpzAGR1Fnt4uox5fUGY2sK7V-ETXptN03olFKj_iYzOqpSkFRDMhgonP2qEPC1RISaxiU7UQyvVO0jbFgTSXJUf2Go_brvabYVB7CMbIvui7n8sajs3NhyAkC7L5Qb4GAWC1KRz9CrMUkDrn7vLMW1ZyjP",
                                    bgColor: "#0f172a",
                                    textColor: "#ffffff",
                                    linkText: "",
                                    linkUrl: "",
                                    span: "wide"
                                },
                                {
                                    title: "Latest Tech",
                                    description: "Equipped with state-of-the-art MRI, CT-scanners, and surgical robotics for precise diagnostics.",
                                    icon: "FlaskConical",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg4djNJVquSg4dlV7weISyCEM_lH-vAaaLE9KZBYTTDYEQl0zIq_Hwmb6BAqI70UFsCAmAhHdXmrJU-Aklb4gC-CweH8CcNcGvQrhrf9kFgtyR1ZDeKzumOW9XccMtHuWEJ9iOY7ZRbz1I_2l84N9sOrblGgIyT6Fsz6UjqvG-VXvwqn4dVp97AhtsCWMPEPX-AGm6X8Or6cwmJNTyQlwJxVnpcY-7xhgPtpt9KAer-JlIL1vxUlrnUtC-eGzOiB9Xz6HbZuyHFP4a",
                                    bgColor: "#00c9e3",
                                    textColor: "#ffffff",
                                    linkText: "",
                                    linkUrl: "",
                                    span: "wide"
                                },
                                {
                                    title: "24/7 Emergency",
                                    description: "Round-the-clock emergency care with zero wait-time protocols and dedicated trauma specialists.",
                                    icon: "Siren",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDse-XiWSoL3554I0uPlGcWp21cco0QI83rX-LP8tMoFV1_sUWsmOG_b2AMyS8V1zjwUZgzAjlR89L-mjx-5gHeaE7dvp1oLfyuYt16cKhrYxxx7yxaFDuaFP2P_iu_yNVR8DBRCRQa6nTs1qCDTQ3oLIIN1lkVq1KUaog-BUSS6OtaaQg3DeemnwydfIJvqYtyPO73SRaAJKNLtSxcuyo0No5XEvSkklmLvrBoG-rAcfk0hlElahHpqBh0uCE7-Eh6JeidW9eydY1F",
                                    bgColor: "#e60000",
                                    textColor: "#ffffff",
                                    linkText: "",
                                    linkUrl: "",
                                    span: "normal"
                                }
                            ],
                            headingColor: "#0f172a",
                            descriptionColor: "#475569",
                            backgroundColor: "#f8fafc",
                            cardBorderRadius: 20,
                            gridGap: 16,
                            cardImageSize: 200
                        }
                    }]
                }]
            }
        }
    ]
};

module.exports = vitalisDepartments;
