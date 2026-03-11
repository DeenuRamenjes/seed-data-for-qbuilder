const coachingHome = require('./coaching-home.cjs');

const coachingContact = {
    header: coachingHome.header,

    sections: [
        // --------------------------------------------------------------------------
        // CONTACT HERO
        // --------------------------------------------------------------------------
        {
            key: "contact-hero",
            name: "Contact Hero",
            structure: {
                type: "HeroGradient",
                defaultProps: {
                    backgroundColor: "#121E6D",
                    paddingTop: 80,
                    paddingBottom: 80
                },
                props: {
                    badgeText: "The Catalyst",
                    title: "GET IN TOUCH",
                    lead: "Reach out to schedule a consultation with our concierge team and accelerate your career with precision coaching.",
                    accentColor: "#e68600",
                    secondaryColor: "#590094"
                }
            }
        },

        // --------------------------------------------------------------------------
        // MODERN FORM — Appointment Request
        // --------------------------------------------------------------------------
        {
            key: "contact-form",
            name: "Consultation Request Form",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f7f5",
                    paddingY: 40,
                    paddingX: 20,
                    fullWidth: true
                },
                columns: [
                    {
                        id: "form-col",
                        width: "100%",
                        elements: [
                            {
                                id: "modern-form",
                                type: "ModernForm",
                                props: {
                                    subtitle: "SCHEDULE YOUR SESSION",
                                    title: "Request A Consultation",
                                    description: "Please fill out the form below. A member of our elite coaching team will contact you within 24 hours.",
                                    email: "hello@thecatalyst.com",
                                    phone: "+1 800 555 0199",
                                    nameLabel: "Full Name",
                                    namePlaceholder: "Jane Doe",
                                    emailLabel: "Email Address",
                                    emailPlaceholder: "jane@example.com",
                                    selectLabel: "Program of Interest",
                                    selectOptions: "Select a program...,Executive Edge,Mindset Mastery,Strategic Mindset,Other",
                                    messageLabel: "Additional Context",
                                    messagePlaceholder: "Please describe your current challenges and goals...",
                                    submitText: "Submit Request"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TESTIMONIALS
        // --------------------------------------------------------------------------
        {
            key: "contact-testimonial",
            name: "Client Testimonials",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#f8f7f5",
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
                                props: { text: "Testimonials", color: "#121E6D", bgColor: "transparent", align: "center" }
                            },
                            {
                                type: "Heading",
                                props: { text: "WHAT OUR CLIENTS SAY", tag: "h2", size: "4xl", color: "#121E6D", fontWeight: "900", align: "center" }
                            },
                            {
                                type: "Paragraph",
                                props: {
                                    text: "Real results from executives who have transformed their careers with The Catalyst method.",
                                    align: "center",
                                    color: "rgba(18, 30, 109, 0.7)",
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
                                    text: "The Catalyst method completely rewired my approach to leadership. I've never felt more aligned with my company's mission.",
                                    author: "Sarah Jenkins",
                                    role: "Chief Executive Officer",
                                    company: "Nexus Enterprises",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
                                    rating: 5,
                                    backgroundColor: "#ffffff",
                                    textColor: "#1d2361",
                                    accentColor: "#e38800"
                                }
                            },
                            {
                                type: "Testimonial",
                                props: {
                                    text: "After just three months of coaching, our team's productivity increased by 40%. The strategic clarity is unparalleled.",
                                    author: "Michael Chen",
                                    role: "VP of Operations",
                                    company: "Global Tech Solutions",
                                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
                                    rating: 5,
                                    backgroundColor: "#ffffff",
                                    textColor: "#1d2361",
                                    accentColor: "#e38800"
                                }
                            },
                            {
                                type: "Testimonial",
                                props: {
                                    text: "I was skeptical at first, but the tailored approach and actionable insights provided immediate value to my career trajectory.",
                                    author: "Elena Rodriguez",
                                    role: "Director of Marketing",
                                    company: "Innovate INC",
                                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
                                    rating: 5,
                                    backgroundColor: "#ffffff",
                                    textColor: "#1d2361",
                                    accentColor: "#e38800"
                                }
                            }
                        ]
                    }
                ]
            }
        },
    ],

    footer: coachingHome.footer
};

module.exports = coachingContact;
