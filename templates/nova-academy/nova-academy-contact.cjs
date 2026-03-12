const novaAcademyHome = require('./nova-academy-home.cjs');

const novaAcademyContact = {
    header: novaAcademyHome.header,

    sections: [
        // --------------------------------------------------------------------------
        // CONTACT HERO
        // --------------------------------------------------------------------------
        {
            key: "nova-contact-hero",
            name: "Contact Hero",
            structure: {
                type: "HeroGradient",
                defaultProps: {
                    backgroundColor: "#1d0c10", // dark background
                    paddingY: 96,
                    paddingX: 24,
                    className: "bg-slate-900", // Tailwind base
                    style: { background: "linear-gradient(135deg, #1d0c10 0%, #872897 100%)" }
                },
                props: {
                    title: "Initiate Dialogue.",
                    subtitle: "Connect with our admissions team or request academic consultation.",
                    primaryCtaText: "",
                    secondaryCtaText: "",
                    textColor: "#ffffff",
                    tagline: "GLOBAL FELLOWSHIP INQUIRIES",
                    taglineColor: "#FF7130", // academy-orange
                    titleSize: "text-6xl md:text-8xl",
                    alignment: "center",
                    className: "font-black tracking-tighter"
                }
            }
        },

        // --------------------------------------------------------------------------
        // CONTACT CONTENT - IMAGE LEFT, FORM RIGHT
        // --------------------------------------------------------------------------
        {
            key: "nova-contact-content",
            name: "Contact Content",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#FFFEE0", // background-light
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "contact-image-col",
                        width: "50%",
                        elements: [
                            {
                                type: "Image",
                                props: {
                                    src: "https://t3.ftcdn.net/jpg/09/75/62/04/360_F_975620475_Gu5CUt5nzTqJ3n3qeuDnXkQJ4wKDZtm8.jpg",
                                    alt: "Nova Academy Global Campus",
                                    borderRadius: "0",
                                    boxShadow: "lg",
                                    height: "600px",
                                    objectFit: "cover"
                                }
                            }
                        ]
                    },
                    {
                        id: "contact-form-col",
                        width: "50%",
                        elements: [
                            {
                                type: "ModernForm",
                                props: {
                                    title: "Formal Inquiry",
                                    subtitle: "Please provide your details and area of academic interest.",
                                    formType: "contact",
                                    fields: [
                                        { name: "firstName", label: "First Name", type: "text", required: true, width: "half" },
                                        { name: "lastName", label: "Last Name", type: "text", required: true, width: "half" },
                                        { name: "email", label: "Email Address", type: "email", required: true, width: "full" },
                                        { name: "program", label: "Program of Interest", type: "select", required: true, width: "full", options: ["Data Science Mastery", "FinTech Engineering", "Creative Leadership", "Executive Fellowship", "Other"] },
                                        { name: "message", label: "Statement of Purpose / Inquiry", type: "textarea", required: true, width: "full" }
                                    ],
                                    buttonText: "Submit Inquiry →",
                                    buttonColor: "#ff3d6a",
                                    buttonTextColor: "#ffffff",
                                    backgroundColor: "#ffffff",
                                    textColor: "#0f172a",
                                    borderRadius: "0",
                                    shadow: "sm",
                                    className: "border-t-4 border-[#ff3d6a]"
                                }
                            }
                        ]
                    }
                ]
            }
        },

        // --------------------------------------------------------------------------
        // TESTIMONIALS - ECHOES OF EXCELLENCE
        // --------------------------------------------------------------------------
        {
            key: "nova-testimonials",
            name: "Testimonials",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 24,
                    fullWidth: false
                },
                columns: [
                    {
                        id: "testimonials-header",
                        width: "100%",
                        elements: [
                            {
                                type: "Headline",
                                props: {
                                    text: "Echoes of Excellence",
                                    tag: "h2",
                                    size: "4xl",
                                    color: "#0f172a",
                                    fontWeight: "black",
                                    className: "mb-16 text-center uppercase tracking-widest border-b-2 border-[#ff3d6a] pb-4 inline-block mx-auto"
                                }
                            }
                        ]
                    },
                    {
                        id: "testimonial-1",
                        width: "33.33%",
                        elements: [
                            {
                                type: "Quote",
                                props: {
                                    text: "The academic rigor at Nova Academy is matched only by the depth of its global network. A truly transformative fellowship.",
                                    author: "Dr. Elena Volkov",
                                    role: "Senior Research Fellow",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
                                    accentColor: "#ff3d6a"
                                }
                            }
                        ]
                    },
                    {
                        id: "testimonial-2",
                        width: "33.33%",
                        elements: [
                            {
                                type: "Quote",
                                props: {
                                    text: "Nova provided the technical foundation and the leadership vision I needed to scale my FinTech venture globally.",
                                    author: "Marcus Chen",
                                    role: "Executive Alumnus",
                                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
                                    accentColor: "#ff3d6a"
                                }
                            }
                        ]
                    },
                    {
                        id: "testimonial-3",
                        width: "33.33%",
                        elements: [
                            {
                                type: "Quote",
                                props: {
                                    text: "A sanctuary for intellectual curiosity. The mentorship here is unparalleled in contemporary higher education.",
                                    author: "Sarah Jenkins",
                                    role: "Data Science Graduate",
                                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
                                    accentColor: "#ff3d6a"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ],

    footer: novaAcademyHome.footer
};

module.exports = novaAcademyContact;
