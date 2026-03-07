/**
 * Telemedicine Template - Specialists Page
 * Primary: #FF3075 | Secondary: #FFEA00 | Accent: #5763FF
 */

const telemedicineHome = require('./tele-medicine-home.cjs');

const telemedicineSpecialists = {
    // ============================================================================
    // SHARED HEADER
    // ============================================================================
    header: telemedicineHome.header,

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO SECTION (StyleHero)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-specialists-hero",
            name: "Virtual Health Portal",
            structure: {
                type: "HeroGradient",
                defaultProps: {
                    paddingTop: 80,
                    paddingBottom: 60,
                    backgroundColor: "#1a1a1a"
                },
                props: {
                    badgeText: "VIRTUAL HEALTH PORTAL",
                    title: "Our Specialist Network",
                    lead: "Find and book the best care from the comfort of your home. Instant access to certified professionals nationwide.",
                    secondaryCtaText: "View Plans",
                    secondaryCtaLink: "/pricing",
                    accentColor: "#FF3075",
                    secondaryColor: "#5763FF"
                }
            }
        },

        // --------------------------------------------------------------------------
        // STATS / TRUST SIGNALS (Section + BigNumberCard)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-specialists-stats",
            name: "Specialist Stats",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 60,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "grid",
                    columns: 4,
                    gap: 24
                },
                columns: [
                    {
                        id: "stat-1",
                        width: "25%",
                        elements: [
                            { type: "BigNumberCard", props: { value: "500+", title: "Verified Doctors", description: "Board-certified specialists", accentColor: "#FF3075" } }
                        ]
                    },
                    {
                        id: "stat-2",
                        width: "25%",
                        elements: [
                            { type: "BigNumberCard", props: { value: "30+", title: "Medical Specialties", description: "Covering all major fields", accentColor: "#5763FF" } }
                        ]
                    },
                    {
                        id: "stat-3",
                        width: "25%",
                        elements: [
                            { type: "BigNumberCard", props: { value: "4.9★", title: "Average Rating", description: "From patient reviews", accentColor: "#FFEA00" } }
                        ]
                    },
                    {
                        id: "stat-4",
                        width: "25%",
                        elements: [
                            { type: "BigNumberCard", props: { value: "24/7", title: "Availability", description: "Round-the-clock care", accentColor: "#FF3075" } }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // DOCTORS LIST (TeamSection)
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-specialists-list",
            name: "Doctor Profiles",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f6",
                    paddingY: 40,
                    paddingX: 48,
                    fullWidth: true,
                    layout: "flex",
                    flexDirection: "column",
                    gap: 32
                },
                columns: [
                    {
                        id: "specialists-header",
                        width: "100%",
                        elements: [
                            { type: "Heading", props: { text: "Our Specialists", tag: "h2", size: "3xl", fontWeight: "800", color: "#1a1a1a", align: "center", marginBottom: 8 } },
                            { type: "Paragraph", props: { text: "Board-certified professionals across every major medical field.", size: "lg", color: "#64748b", align: "center", marginBottom: 24 } }
                        ]
                    },
                    {
                        id: "specialists-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 24,
                        elements: [
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS7Qs0QrqONsVQySMKuGdykF0ae_0M8aMmKk87Be0kDqrw6oa_bUbgkM9j5oel13rwt5pQ5Hj-xYRErboNpoFEbYnFKLuZi7tPbCUTvx-1xyFqqJEpByxtl-4rIHDbBXERlpaLDi2teMl_HXBTfGKVf9BGoThgVQbg9ppD46UaW9qVjAJFoJwO0KbYR1AGcq7ECH12MFxa0XjOHbugFTJHgIiq9Uz8sXx-JRFwcre1Lroi7DguBz0D6xvjeC7p04DwcYzk4pVigwLk",
                                    imageAlt: "Dr. Sarah Jenkins",
                                    rating: "4.9", reviewCount: "120+",
                                    specialtyTag: "CARDIOLOGIST",
                                    name: "Dr. Sarah Jenkins",
                                    description: "Expert in heart health and lifestyle management for adult patients.",
                                    availabilityText: "Tomorrow, 10:00 AM",
                                    ctaText: "Book Appointment", ctaLink: "#",
                                    cardBgColor: "#ffffff", tagColor: "#FF3075", accentColor: "#FF3075"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm41mtm7N2Vll5nxEiV-K2DIK78BVHTs7Zj7qwdKmKdA3a-B0kc1nPdSP4SsdoGKyY_ssIu3yY99CnEXUCCKq60H7-PnD6mtu0q8SxFL3WFW4Pj7YNmzWXiqHjTEI0nwSb7HNVX5GeOHYul7qFSX8nUWWcTxcC0H8UH1t3Y3tlL8pNxiHNNQrUMtQvdZkuVzfNAs9fk0pAe92j-X_-_Bkx8sIfWh_YcNpEoYRelTB3bRkY9fcWxYOoXpfkM_NmvxkNlBQvhpeYPB8f",
                                    imageAlt: "Dr. Michael Chen",
                                    rating: "4.8", reviewCount: "95+",
                                    specialtyTag: "DERMATOLOGIST",
                                    name: "Dr. Michael Chen",
                                    description: "Dedicated to comprehensive skin care and advanced dermatological solutions.",
                                    availabilityText: "Mon, 2:30 PM",
                                    ctaText: "Book Appointment", ctaLink: "#",
                                    cardBgColor: "#ffffff", tagColor: "#5763FF", accentColor: "#5763FF"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCycPZQruYS9lo_yJAayS-zwgKouYUGMVjOkfIgjUv2tOXJCYcbCqDHjmVx-K9_no7HfSXdyNFHWowYNH8pb0VskBGDZTp2NexuFhDhhmYdhZc7gHZwDwkjZvxLn0lJzW5FB9PpuP4jFr__wDkyUIXtQlw1BZLKJOilMiLv5ik78pN-H60vkV4FVhVbg2NVrX7Vv2bCOvCVO5HimDeqJDMh6lAZcdqJTmQMMyHSkYfPnVYiuq7jgvB78PN73XTkaWM9S_p-FK4u0GXq",
                                    imageAlt: "Dr. Elena Rodriguez",
                                    rating: "5.0", reviewCount: "210+",
                                    specialtyTag: "PEDIATRICIAN",
                                    name: "Dr. Elena Rodriguez",
                                    description: "Compassionate care and preventive health for infants, children, and teens.",
                                    availabilityText: "Today, 4:00 PM",
                                    ctaText: "Book Appointment", ctaLink: "#",
                                    cardBgColor: "#ffffff", tagColor: "#FFEA00", accentColor: "#FFEA00"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9r0l_T92NUsego8WcS9Hur7HKInMVaJc2IKxw55HvvjFMHZTca615Z9OPxu8BOXNavJ7_TXqKV9tvpqmRko56QY2xl9Xtri1-kXhki4jJ1ndKFzcLVXgB8c6Lv7yLNUzWB7KRKF7rjbOgr3IcIlyU9x5M_TVFMZ2mxp3sEgihnmoPcwWKy42ygTfFaDrwTA2jNa1GHsv_YAPpJvJBUbGIH9RRFJzv48la7JK9ADYmMIitQIKWWyhVmmurdCer-WFPnSZylraeF4LT",
                                    imageAlt: "Dr. James Wilson",
                                    rating: "4.7", reviewCount: "150+",
                                    specialtyTag: "NEUROLOGIST",
                                    name: "Dr. James Wilson",
                                    description: "Specializing in diagnosis and treatment of brain, spinal cord, and nerve disorders.",
                                    availabilityText: "Wed, 11:15 AM",
                                    ctaText: "Book Appointment", ctaLink: "#",
                                    cardBgColor: "#ffffff", tagColor: "#FF3075", accentColor: "#FF3075"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA6VbV_X4qwaKhPoLq0Cpfj8GrW7WTtUIKbMXL85GqtJrgp_ZzPjbXYGuBo1O_doP6blx-JXK-gagtnSn7uo9TAo_ZLLeKDMjTyyDjzYoh8sBoo7gyeNq7zYHfYovjkiJ8z5pvBi0XPWUEttX9q5S_8GKC-VSyfVeG-AcxAHOi7lwRQGQh1RR_ZdnUfUNBTf-PhxfHYGZTb2fNkBSjyIk_C6f0gIyCeVSHs-MpgEqQ2WVrQljBUoJl2QZR2EgUAnvWAIFHXk9TMbnk",
                                    imageAlt: "Dr. Aliyah Kahn",
                                    rating: "4.9", reviewCount: "180+",
                                    specialtyTag: "PSYCHIATRIST",
                                    name: "Dr. Aliyah Kahn",
                                    description: "Providing mental wellness support, therapy, and psychiatric evaluation.",
                                    availabilityText: "Thu, 9:00 AM",
                                    ctaText: "Book Appointment", ctaLink: "#",
                                    cardBgColor: "#ffffff", tagColor: "#5763FF", accentColor: "#5763FF"
                                }
                            },
                            {
                                type: "FeaCard",
                                props: {
                                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjAwMxbcr46U2JYm2sKe-O6nPPyYZzduzUp3HqqnEAlZnsvrH26gUFuyfepSm4MGwVggDiGtFmuZrn7XtfZOXRAfEIMJUkcZS_D7Yr_K-GnVjGz-gonbRw1_wtFcMk2UbkscxDaFLZqgsJeRJKd0XYPEJogmcw7Ym919tGg5DlRNxEpIzNGtuPym_ZcsgCXH3aMbdk1aLeQsSF1Wq8DeC25rIuLh2IY74Jw78rOvbaqYJIbR5mLkS7mHxIRSA09M4QDkNZDnDXJ35u",
                                    imageAlt: "Dr. Robert Vance",
                                    rating: "4.8", reviewCount: "135+",
                                    specialtyTag: "ENDOCRINOLOGIST",
                                    name: "Dr. Robert Vance",
                                    description: "Managing hormone-related diseases, diabetes, and metabolic disorders.",
                                    availabilityText: "Tue, 1:45 PM",
                                    ctaText: "Book Appointment", ctaLink: "#",
                                    cardBgColor: "#ffffff", tagColor: "#FFEA00", accentColor: "#FFEA00"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // CONTACT FORM
        // --------------------------------------------------------------------------
        {
            key: "telemedicine-specialists-contact",
            name: "Contact Us",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f6f6",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true
                },
                columns: [{
                    id: "form-col",
                    width: "100%",
                    elements: [{
                        type: "ModernForm",
                        props: {
                            subtitle: "GET IN TOUCH",
                            title: "Book a Specialist Consultation",
                            description: "Have a question or need assistance booking a specialist? Send us a message. Our patient care coordinators will get back to you within 24 hours.",
                            email: "support@ethoshealth.com",
                            phone: "+1 (800) 555-0199",
                            nameLabel: "Full Name",
                            namePlaceholder: "Jane Doe",
                            emailLabel: "Email Address",
                            emailPlaceholder: "jane@example.com",
                            selectLabel: "Specialty Needed",
                            selectOptions: "Not Sure...,Cardiology,Dermatology,Pediatrics,Neurology,Psychiatry,Endocrinology,Other",
                            messageLabel: "Message",
                            messagePlaceholder: "Briefly describe your symptoms or reason for visit...",
                            submitText: "Request Appointment",
                            buttonBgColor: "#FF3075",
                            buttonTextColor: "#ffffff"
                        }
                    }]
                }]
            }
        }
    ],

    // ============================================================================
    // SHARED FOOTER
    // ============================================================================
    footer: telemedicineHome.footer
};

module.exports = telemedicineSpecialists;
