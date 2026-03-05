/**
 * DoctorProfile Template - Contact Page
 * Theme: Premium Healthcare / Blue & Cyan-Green
 * Primary: #1FFFC0 (Mint Green)
 * Secondary: #1F5EFF (Royal Blue)
 * Accent: #1FCEFF (Cyan)
 * Background: #ffffff
 * Font: Public Sans
 */

const eliteHome = require('./elite-home.cjs');

const eliteContact = {
    // ============================================================================
    // HEADER (shared)
    // ============================================================================
    header: eliteHome.header,

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // CONTACT HERO
        // --------------------------------------------------------------------------
        {
            key: "contact-hero",
            name: "Contact Hero",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#1F5EFF",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 32,
                    flexDirection: "col",
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "contact-hero-content",
                        width: "100%",
                        props: { textAlign: "center", alignItems: "center" },
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "Get In Touch", color: "#1FFFC0", bgColor: "rgba(31, 255, 192, 0.15)" }
                            },
                            {
                                type: "Heading",
                                props: { text: "We're Here For You", tag: "h1", size: "5xl", color: "#ffffff", fontWeight: "900", align: "center" }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Our concierge team is available 24/7 to assist with appointments, consultations, and any inquiries about our services.",
                                    size: "lg",
                                    color: "rgba(255, 255, 255, 0.8)",
                                    align: "center",
                                    marginTop: 16
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // APPOINTMENT FORM (ModernForm)
        // --------------------------------------------------------------------------
        {
            key: "contact-form",
            name: "Appointment Form",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8fafc",
                    paddingY: 48,
                    paddingX: 40,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "form-col",
                        width: "100%",
                        elements: [
                            {
                                type: "ModernForm",
                                props: {
                                    subtitle: "BOOK A CONSULTATION",
                                    title: "Schedule Your Appointment",
                                    description: "Choose a time that works for you. Our scheduling system allows you to book with a specific specialist and receive instant confirmation.",
                                    email: "concierge@eliteclinic.com",
                                    phone: "+1 (800) ELITE-MED",
                                    nameLabel: "Full Name",
                                    namePlaceholder: "John Doe",
                                    emailLabel: "Email Address",
                                    emailPlaceholder: "john@example.com",
                                    selectLabel: "Department",
                                    selectOptions: "Select Department...,Cardiology,Neurology,Oncology,Orthopedics,Internal Medicine,Dermatology",
                                    messageLabel: "Additional Notes",
                                    messagePlaceholder: "Tell us about your symptoms or concerns...",
                                    submitText: "Request Appointment"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // CONTACT INFO CARDS
        // --------------------------------------------------------------------------
        {
            key: "contact-info",
            name: "Contact Info Cards",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 32
                },
                columns: [
                    {
                        id: "info-card-1",
                        width: "33.33%",
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "Visit Our Clinic",
                                    description: "1200 Medical Plaza, Suite 400\nBeverly Hills, CA 90210\n\nMon - Fri: 7:00 AM - 8:00 PM\nSat: 8:00 AM - 4:00 PM\nSun: Emergency Only",
                                    icon: "MapPin",
                                    iconColor: "#1F5EFF",
                                    borderRadius: "24"
                                }
                            }
                        ]
                    },
                    {
                        id: "info-card-2",
                        width: "33.33%",
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "Call Us",
                                    description: "Main Line: +1 (800) ELITE-MED\nEmergency: +1 (800) 555-9911\nInternational: +1 (310) 555-0198\n\n24/7 Medical Hotline Available",
                                    icon: "Phone",
                                    iconColor: "#1FFFC0",
                                    borderRadius: "24"
                                }
                            }
                        ]
                    },
                    {
                        id: "info-card-3",
                        width: "33.33%",
                        elements: [
                            {
                                type: "ServiceCard",
                                props: {
                                    title: "Email & Portal",
                                    description: "General: concierge@eliteclinic.com\nAppointments: booking@eliteclinic.com\nBilling: accounts@eliteclinic.com\n\nAccess your Patient Portal online.",
                                    icon: "Mail",
                                    iconColor: "#1FCEFF",
                                    borderRadius: "24"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // EMERGENCY CTA
        // --------------------------------------------------------------------------
        {
            key: "contact-emergency",
            name: "Emergency CTA",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#0f172a",
                    paddingY: 64,
                    paddingX: 40,
                    fullWidth: true,
                    gap: 32,
                    alignItems: "center"
                },
                columns: [
                    {
                        id: "emergency-text",
                        width: "60%",
                        elements: [
                            {
                                type: "Heading",
                                props: { text: "Medical Emergency?", tag: "h2", size: "3xl", color: "#ffffff", fontWeight: "900" }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Our 24/7 emergency team is standing by. For life-threatening emergencies, please call 911 immediately.",
                                    size: "lg",
                                    color: "rgba(255, 255, 255, 0.7)",
                                    marginTop: 8
                                }
                            }
                        ]
                    },
                    {
                        id: "emergency-button",
                        width: "40%",
                        props: { textAlign: "right" },
                        elements: [
                            {
                                type: "ButtonGroup",
                                props: {
                                    primaryText: "Emergency Hotline",
                                    primaryLink: "tel:+18005559911",
                                    primaryBg: "#ef4444",
                                    primaryTextColor: "#ffffff",
                                    secondaryText: "Patient Portal",
                                    secondaryLink: "#portal",
                                    secondaryBg: "transparent",
                                    secondaryTextColor: "#ffffff",
                                    borderRadius: "12"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    // ============================================================================
    // FOOTER (shared)
    // ============================================================================
    footer: eliteHome.footer
};

module.exports = eliteContact;
