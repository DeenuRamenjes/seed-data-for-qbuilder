/**
 * Hospital-2 Template - Contact / Appointments Page (Vitalis Medical Center)
 * Theme: Modern Healthcare / Red & Cyan
 * Primary: #e60000
 * Secondary: #00c9e3
 * Font: Inter
 */

const vitalisContact = {
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
                    backgroundColor: "#ffffff",
                    paddingY: 0,
                    paddingX: 0,
                    fullWidth: true,
                    layout: "grid",
                    columns: 2,
                    gap: 0
                },
                columns: [
                    {
                        id: "contact-hero-text",
                        width: "50%",
                        props: { padding: "40px" },
                        elements: [
                            {
                                type: "Badge",
                                props: { text: "Online Booking System", color: "#00c9e3", bgColor: "rgba(0, 201, 227, 0.1)", borderRadius: "full" }
                            },
                            {
                                type: "Headline",
                                props: {
                                    text: "Book Your Visit with [Confidence.](linear-gradient(90deg, #e60000, #ff3333))",
                                    tag: "h1",
                                    size: "5xl",
                                    align: "left",
                                    color: "#0f172a"
                                }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Experience world-class healthcare with our compassionate specialists. Schedule your consultation, diagnostic test, or follow-up in just a few clicks.",
                                    size: "lg",
                                    align: "left",
                                    color: "#475569",
                                    marginTop: 16,
                                    marginBottom: 24
                                }
                            },
                            {
                                type: "FeatureRow",
                                props: { icon: "BadgeCheck", iconColor: "#00c9e3", title: "Expert Doctors", textColor: "#0f172a", marginBottom: 12 }
                            },
                            {
                                type: "FeatureRow",
                                props: { icon: "Clock", iconColor: "#00c9e3", title: "24/7 Support", textColor: "#0f172a", marginBottom: 12 }
                            },
                            {
                                type: "FeatureRow",
                                props: { icon: "ShieldCheck", iconColor: "#00c9e3", title: "Safe & Secure", textColor: "#0f172a" }
                            }
                        ]
                    },
                    {
                        id: "contact-hero-image",
                        width: "50%",
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_0lP6BMVl6QSxQ5g6LhYqmOekTxiz1bCzpa448r8_FVn0VS-UNNmwDZUt6tjhx6Di_rw2MSjGNsADmLtfl-Iv2Ep8E-5LTsktkRI4VOc7BCP_t0CRokrmB_uYPoCuwZzcTc5f_iL5pApfGkOZY1aL9OxMXbIKSsmAldRKvQlS8ZsCAmZezmqstPlxnwqcn60GWzoCmg1hHDtSTCTB5TpDtSjb38jI3gbxFwpR9jUdxngrCf04pmIGYhKJka-cr8YXy8eX3QRVBtFq",
                                    alt: "Modern clean hospital interior reception area",
                                    aspectRatio: "16/9",
                                    objectFit: "cover",
                                    height: "100%"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // APPOINTMENT FORM + SIDEBAR
        // --------------------------------------------------------------------------
        {
            key: "contact-form-section",
            name: "Appointment Form",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 48,
                    paddingX: 40,
                    fullWidth: true,
                    layout: "grid",
                    columns: 3,
                    gap: 32
                },
                columns: [
                    // Form (2-col span)
                    {
                        id: "contact-form",
                        width: "66%",
                        elements: [
                            {
                                type: "ContactForm",
                                props: {
                                    title: "Schedule Appointment",
                                    icon: "CalendarDays",
                                    fields: [
                                        { label: "Full Name", type: "text", placeholder: "John Doe", width: "half" },
                                        { label: "Email Address", type: "email", placeholder: "john@example.com", width: "half" },
                                        { label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000", width: "half" },
                                        { label: "Department", type: "select", placeholder: "Select Department", options: ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Oncology"], width: "half" },
                                        { label: "Preferred Date", type: "date", width: "half" },
                                        { label: "Preferred Time", type: "select", placeholder: "Morning (8AM - 12PM)", options: ["Morning (8AM - 12PM)", "Afternoon (12PM - 4PM)", "Evening (4PM - 8PM)"], width: "half" },
                                        { label: "Reason for Visit", type: "textarea", placeholder: "Briefly describe your symptoms or reason for visit...", width: "full" }
                                    ],
                                    buttonText: "Confirm Appointment Request",
                                    buttonBg: "#e60000",
                                    buttonColor: "#ffffff",
                                    backgroundColor: "#ffffff",
                                    borderRadius: 12,
                                    borderColor: "#e2e8f0"
                                }
                            }
                        ]
                    },
                    // Sidebar
                    {
                        id: "contact-sidebar",
                        width: "34%",
                        elements: [
                            // Emergency Card
                            {
                                type: "Box",
                                props: {
                                    backgroundColor: "#e60000",
                                    padding: "32px",
                                    borderRadius: "12px",
                                    marginBottom: "32px"
                                },
                                elements: [
                                    { type: "Heading", props: { text: "24/7 Emergency", tag: "h4", color: "#ffffff", size: "xl" } },
                                    { type: "Paragraph", props: { text: "If you are experiencing a medical emergency, please call our hotline immediately or visit our ER.", color: "rgba(255,255,255,0.8)", size: "sm", marginTop: 8, marginBottom: 16 } },
                                    { type: "Heading", props: { text: "1-800-VITALIS", tag: "h3", color: "#ffffff", size: "2xl", fontWeight: "900", align: "center" } }
                                ]
                            },
                            // Department Contacts
                            {
                                type: "Box",
                                props: {
                                    backgroundColor: "#ffffff",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    borderColor: "#e2e8f0",
                                    marginBottom: "32px"
                                },
                                elements: [
                                    { type: "Heading", props: { text: "Department Contacts", tag: "h5", color: "#0f172a", marginBottom: "16px" } },
                                    { type: "FeatureRow", props: { icon: "Heart", iconColor: "#00c9e3", title: "Cardiology", description: "(555) 123-4567", textColor: "#0f172a", marginBottom: 16 } },
                                    { type: "FeatureRow", props: { icon: "Brain", iconColor: "#00c9e3", title: "Neurology", description: "(555) 123-4568", textColor: "#0f172a", marginBottom: 16 } },
                                    { type: "FeatureRow", props: { icon: "Baby", iconColor: "#00c9e3", title: "Pediatrics", description: "(555) 123-4569", textColor: "#0f172a", marginBottom: 16 } },
                                    { type: "FeatureRow", props: { icon: "Scan", iconColor: "#00c9e3", title: "Radiology", description: "(555) 123-4570", textColor: "#0f172a" } }
                                ]
                            },
                            // Location
                            {
                                type: "Box",
                                props: {
                                    backgroundColor: "#ffffff",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    borderColor: "#e2e8f0"
                                },
                                elements: [
                                    { type: "Heading", props: { text: "Our Location", tag: "h5", color: "#0f172a", marginBottom: "8px" } },
                                    { type: "Paragraph", props: { text: "123 Health Parkway, Medical District, NY 10012", color: "#475569", size: "sm", marginBottom: 16 } },
                                    {
                                        type: "Image",
                                        props: {
                                            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhi4HEC1WCvIi2o0zbFZ96WoQnv9riR0Np51fvQbc_UbfvBPA6z7zn1WgiWJGdYsP4Of_9icvHAg-rDLGQyb7fn6j-_OV0L6RRDj3ayEgRYYZH-zaRYOX5ZvmQzSjj_fXUlRDFH_Z_KTOXL2FIn7wK29VsNVpqx3C3VbDgdrjufxOacK4WAKchhmH5-Ir-YqDYq2-z7_tM9-qHqPRl7ev1VNnfld1dztpbP3it0ncQfU5hrbdgRmhot4wUv5tR5YzYJ0bB5AmAIQO3",
                                            alt: "Map showing hospital location",
                                            borderRadius: "8px",
                                            aspectRatio: "16/9",
                                            objectFit: "cover"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // HELP CHANNELS
        // --------------------------------------------------------------------------
        {
            key: "contact-help",
            name: "Help Channels",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 64,
                    paddingX: 40,
                    fullWidth: true,
                    layout: "grid",
                    columns: 3,
                    gap: 32
                },
                columns: [
                    {
                        id: "help-chat",
                        width: "33%",
                        elements: [{
                            type: "FeatureRow",
                            props: {
                                icon: "MessageCircle",
                                iconColor: "#e60000",
                                title: "Live Chat",
                                description: "Average response: 2 mins",
                                textColor: "#0f172a"
                            }
                        }]
                    },
                    {
                        id: "help-email",
                        width: "33%",
                        elements: [{
                            type: "FeatureRow",
                            props: {
                                icon: "Mail",
                                iconColor: "#00c9e3",
                                title: "Email Support",
                                description: "care@vitalismedical.com",
                                textColor: "#0f172a"
                            }
                        }]
                    },
                    {
                        id: "help-faq",
                        width: "33%",
                        elements: [{
                            type: "FeatureRow",
                            props: {
                                icon: "HelpCircle",
                                iconColor: "#64748b",
                                title: "Help Center",
                                description: "Read our patient FAQs",
                                textColor: "#0f172a"
                            }
                        }]
                    }
                ]
            }
        }
    ]
};

module.exports = vitalisContact;
