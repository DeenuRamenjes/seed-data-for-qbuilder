/**
 * Hospital-2 Template - About Page (OmniHealth / Vitalis)
 * Theme: Tech-Forward Medical / Red & Cyan
 * Primary: #e60000
 * Secondary: #00c9e3
 * Font: Inter
 */

const vitalisAbout = {
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION
        // --------------------------------------------------------------------------
        {
            key: "about-hero",
            name: "About Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    gap: 48,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "about-hero-text",
                        width: "50%",
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "Next-Generation Surgical Robotics", color: "#00c9e3", bgColor: "rgba(0, 201, 227, 0.1)", marginBottom: 20, icon: "Cog", borderRadius: "full" }
                            },
                            {
                                type: "Headline",
                                props: {
                                    text: "Precision [Surgical \nExcellence.](linear-gradient(90deg, #e60000, #ff3333)",
                                    tag: "h1",
                                    size: "6xl",
                                    lineHeight: "1.2",
                                    align: "left",
                                    color: "#0f172a"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Redefining healthcare through computational diagnostics, robotic precision, and elite clinical expertise. Welcome to the future of high-efficiency hospital care.",
                                    size: "xl",
                                    align: "left",
                                    color: "#475569",
                                    marginTop: 16,
                                    className: "max-w-[540px]"
                                }
                            },
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Access Patient Portal",
                                    primaryLink: "#portal",
                                    primaryBg: "#0f172a",
                                    primaryColor: "#ffffff",
                                    primaryBorderRadius: 8,
                                    showPrimaryIcon: true,
                                    primaryIcon: "LogIn",
                                    secondaryText: "Virtual Facility Tour",
                                    secondaryLink: "#tour",
                                    secondaryBg: "#ffffff",
                                    secondaryColor: "#0f172a",
                                    secondaryBorderColor: "#e2e8f0",
                                    secondaryBorderRadius: 8,
                                    layout: "horizontal",
                                    gap: "gap-4",
                                    marginTop: "32px"
                                }
                            }
                        ]
                    },
                    {
                        id: "about-hero-image",
                        width: "50%",
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA66w6yAxTnGuTIh7mgUDgr5kwiKFcxlQNVE3ecCg-SxRfRLMK5SW3QeEuKy7GdJ53EDAOu_mgDR3nNyp0TD_bjkgngZDyiO57QOt6YJz0uTqk54RkmeBArt5fFkLqTZbwfzZK2dQZenIXbxRYG2S1edj2BsNlIQnh8Q9Ok5V6i5TXO0u4qzJ6jdudhKiaAT8J7gRsb_HFYDF6bfK4qVM7gNMrMCHcQ459XoG5jaZnxoHMCr8nncXZCv0ccKBL_xrN6uZcnziCeRyAl",
                                    alt: "Modern robotic surgery arm in sterile operating room",
                                    aspectRatio: "1/1",
                                    borderRadius: "12px",
                                    objectFit: "cover"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // OUR MISSION (MissionCard)
        // --------------------------------------------------------------------------
        {
            key: "about-mission",
            name: "Our Mission",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 20,
                    fullWidth: true,
                    layout: "grid",
                    columns: 1,
                    gap: 20
                },
                columns: [{
                    id: "mission-card-col",
                    width: "100%",
                    elements: [{
                        type: "MissionCard",
                        props: {
                            heading: "Our Mission",
                            subtitle: "At Vitalis Medical Center, we fight for compassionate, high-quality care accessible to every patient. Every day, we are dedicated to advancing medical science through innovation, collaboration, and a relentless commitment to patient outcomes.",
                            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoTuIwoF_zBHhjcS29k4D8ibMXksD3DnRZzeGMJJyfB5joGDaztFg7kdU4PqYiEpJ8BqWQZiGzvJVQEs3oc2Q7HFMqtk8E-1HqJkKR2sh4wZ4OUepXMcfpzAGR1Fnt4uox5fUGY2sK7V-ETXptN03olFKj_iYzOqpSkFRDMhgonP2qEPC1RISaxiU7UQyvVO0jbFgTSXJUf2Go_brvabYVB7CMbIvui7n8sajs3NhyAkC7L5Qb4GAWC1KRz9CrMUkDrn7vLMW1ZyjP",
                            imageAlt: "Vitalis Medical Center advanced diagnostics facility",
                            textBlocks: [
                                {
                                    text: "Vitalis brings together world-renowned specialists and cutting-edge technology to deliver patient-centered care of a global standard. We compile comprehensive treatment plans using AI-driven diagnostics and evidence-based protocols across all departments.Vitalis brings together world-renowned specialists and cutting-edge technology to deliver patient-centered care of a global standard. We compile comprehensive treatment plans using AI-driven diagnostics and evidence-based protocols across all departments.",
                                    boldPhrases: ["a global standard"]
                                },
                                {
                                    text: "Our physicians, surgeons, and research teams work to pave the way for next-generation medicine and build a healthier future for every community we serve. We are guided by our founding principles of empathy, precision, and relentless innovation.Vitalis brings together world-renowned specialists and cutting-edge technology to deliver patient-centered care of a global standard. We compile comprehensive treatment plans using AI-driven diagnostics and evidence-based protocols across all departments.",
                                    boldPhrases: ["pave the way for next-generation medicine and build"]
                                }
                            ],
                            headingColor: "#0f172a",
                            subtitleColor: "#475569",
                            textColor: "#475569",
                            boldColor: "#0f172a",
                            cardBgColor: "#f8fafc",
                            cardBorderRadius: 24,
                            imageBorderRadius: 16
                        }
                    }]
                }]
            }
        },
        // --------------------------------------------------------------------------
        // RESEARCH & INNOVATION (StagesCard)
        // --------------------------------------------------------------------------
        {
            key: "about-research",
            name: "Research & Innovation",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#020617",
                    paddingY: 40,
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
                        id: "research-header",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        elements: [
                            { type: "Badge", props: { text: "Innovation Lab", color: "#e60000", bgColor: "transparent", align: "center" } },
                            { type: "Heading", props: { text: "Leading the Frontier of Genomic Research", tag: "h2", size: "4xl", color: "#ffffff", fontWeight: "900", align: "center" } }
                        ]
                    },
                    {
                    id: "research-stages-col",
                    width: "100%",
                    elements: [{
                        type: "StagesCard",
                        props: {
                            maxWidth: "700px",
                            stages: [
                                {
                                    number: "01",
                                    title: "Genomic Sequencing",
                                    description: "Our labs sequence over 12,000 genomes annually, mapping the genetic blueprint for personalized therapeutic pathways and early disease detection.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoTuIwoF_zBHhjcS29k4D8ibMXksD3DnRZzeGMJJyfB5joGDaztFg7kdU4PqYiEpJ8BqWQZiGzvJVQEs3oc2Q7HFMqtk8E-1HqJkKR2sh4wZ4OUepXMcfpzAGR1Fnt4uox5fUGY2sK7V-ETXptN03olFKj_iYzOqpSkFRDMhgonP2qEPC1RISaxiU7UQyvVO0jbFgTSXJUf2Go_brvabYVB7CMbIvui7n8sajs3NhyAkC7L5Qb4GAWC1KRz9CrMUkDrn7vLMW1ZyjP"
                                },
                                {
                                    number: "02",
                                    title: "Clinical Trials",
                                    description: "Currently leading 42 international phase-III clinical trials, pushing the boundaries of regenerative medicine and targeted oncology therapies.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA66w6yAxTnGuTIh7mgUDgr5kwiKFcxlQNVE3ecCg-SxRfRLMK5SW3QeEuKy7GdJ53EDAOu_mgDR3nNyp0TD_bjkgngZDyiO57QOt6YJz0uTqk54RkmeBArt5fFkLqTZbwfzZK2dQZenIXbxRYG2S1edj2BsNlIQnh8Q9Ok5V6i5TXO0u4qzJ6jdudhKiaAT8J7gRsb_HFYDF6bfK4qVM7gNMrMCHcQ459XoG5jaZnxoHMCr8nncXZCv0ccKBL_xrN6uZcnziCeRyAl"
                                },
                                {
                                    number: "03",
                                    title: "Nanomedicine Delivery",
                                    description: "Developing targeted molecular delivery systems that transport therapeutic agents directly to diseased cells, minimizing side effects.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzW6TBQdqWMIZCvmU_OcvZDX30orrNDVfAhUXq8fJJtM3ME8vJwElP3QhXuU3Z80cB1dC-YwIfKsaSibTFlMA_jvk8yQJdLIYQi-VyAhKBTt5Rv5AqOtpKKGI-UhNzCi3EA6nlCLpgJgFPa2KD9pviZveqygQj2T3qegCbhuE--09jANWvI0H3fq6v14rZoawfDMmKaNefpAejOZMcvxfUtrfZgMF5_kOtaqr-KhKt_b7WOrqqIh_XhflX9xCGt3fnOsiuIEyvs1VK"
                                },
                                {
                                    number: "04",
                                    title: "Patient Outcomes",
                                    description: "Processing 2.4 petabytes of clinical data to continuously refine protocols, resulting in 99.8% surgical success rates and improved patient outcomes.",
                                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZM6I32dP6j1v4ZC9CvCEh7HZDMrnZAt_9td_bS20k8tSyAJSrSoLMEgPITYJYmV_EtXSlj-XUwCah9gIeduNsYtfPHDQndnehyN66SzxwDfckUpvjwVryRR_lh_PWtHIcImsQTayxvrlV2F8g4URATVvi3PA2pGIy4RjTFFWuvPB08Zz_DsdzlpXljWAMiHRxx414rZ_4gcaVqawnF492jL58R6F_Eia-p03MVyM0bTdmhFRAm6Tizi8HBxiuGOWJW9Y2ffJkc2yE"
                                }
                            ],
                            titleColor: "#ffffff",
                            descriptionColor: "#94a3b8",
                            numberColor: "#ffffff",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            numberOpacity: 1
                        }
                    }]
                }]
            }
        },

        // --------------------------------------------------------------------------
        // PATIENT TESTIMONIALS
        // --------------------------------------------------------------------------
        {
            key: "vitalis-testimonials",
            name: "Patient Success Stories",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#0f172a",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 64
                },
                columns: [
                    {
                        id: "test-header",
                        width: "100%",
                        props: { textAlign: "center", maxWidth: "768px" },
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "Testimonials", color: "#00c9e3", bgColor: "transparent", align: "center" }
                            },
                            {
                                type: "Heading",
                                props: { text: "Patient Success Stories", tag: "h2", size: "4xl", color: "#ffffff", fontWeight: "900", align: "center" }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Nothing makes us happier than seeing our patients return to their vibrant, healthy lives.",
                                    align: "center",
                                    color: "#94a3b8",
                                    size: "lg",
                                    marginTop: 16
                                }
                            }
                        ]
                    },
                    {
                        id: "test-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                type: "Testimonial",
                                props: {
                                    quote: "The cardiac team at Vitalis literally saved my life. From the emergency room to the recovery ward, the care was exceptional and deeply human.",
                                    author: "James Wilson",
                                    role: "Heart Surgery Patient",
                                    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-SF2cLek10oD0N0AGayrPYE6l5y5VOOwggDkmJU6nc130a3vxM511h5Kfm4cGn5ZHgXvqyjCO-PzJh7-75ABHPTYZtW8lxbVSkg3tbVmZWiRFodOesL1d2r-TQumiGFnhSdy9WM59vpAW7_pP4hdZTRiu_vuFYw8euL0Jg4GY8IzlETAsSw1sTH05KU4NPNdaVWgaVfmIpMK_3spiUMM_TQ-OzOe5cYYfHUkzzk5Lxrw8MU4-WOWFpV6YJ-l7xlkZgdUKToLTQM2C",
                                    rating: 5,
                                    starColor: "#facc15",
                                    backgroundColor: "rgba(30, 41, 59, 0.5)",
                                    borderColor: "#334155",
                                    textColor: "#cbd5e1"
                                }
                            },
                            {
                                type: "Testimonial",
                                props: {
                                    quote: "Finding a pediatric care unit that feels like home was a blessing. They handled my daughter's surgery with so much love and patience.",
                                    author: "Sarah Thompson",
                                    role: "Parent",
                                    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0g4N5LqEurddrfrOMN_tNYYVRfcEDud7lxh5oEjmUUulp0bwkgEA6mukA63BekNPsi_tzVOZ-TR-_ODzXaqxDssaicr4tlwwazYgxvkVhUsxvZOfyueP4eNhoOXCLwcgzRSAjzleGIWOOgAZB71wHNYxIC6OoYTu_mrr52mtL1CXF0w87J2kGW4bsSJSPlxxJlZ11dOd25RhfrwFEoBY0OcMjQOr8Ap9UBbXAF55DOpcmKU8urtruc2Y83BYDDMclpJDTqYCmt42k",
                                    rating: 5,
                                    starColor: "#facc15",
                                    backgroundColor: "rgba(30, 41, 59, 0.5)",
                                    borderColor: "#334155",
                                    textColor: "#cbd5e1"
                                }
                            },
                            {
                                type: "Testimonial",
                                props: {
                                    quote: "Professional, clean, and efficient. I was back on my feet after my knee replacement months earlier than expected thanks to their physio team.",
                                    author: "Robert Chen",
                                    role: "Orthopedic Patient",
                                    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp2jdn8G6sGQrAHNVZ6qBuH5tx6y9aHWMF3VYHmNFGmU6DPCgHDnrzMQ22YVUOGybxfV7TsNWcCT64s5OUk1XvnT1puVgI9wKk-UcYNetCmwKF6yKV_fIIPrpjpYfxIxKdbsBkrx9aTOvV2KCPv70EbIFSSDlu7mLeA6P7LnRwsrwoNL8nBYsy2svVhjbUXOl6br_WpHT7YUrXGqb_M_Scw61m0IuGTAvpBaqfbMgDVcnwoy9x5jDk4UWVCVsCJ9nO_siK_gzI6qF3",
                                    rating: 5,
                                    starColor: "#facc15",
                                    backgroundColor: "rgba(30, 41, 59, 0.5)",
                                    borderColor: "#334155",
                                    textColor: "#cbd5e1"
                                }
                            }
                        ]
                    }
                ]
            }
        },
    ]
};

module.exports = vitalisAbout;
