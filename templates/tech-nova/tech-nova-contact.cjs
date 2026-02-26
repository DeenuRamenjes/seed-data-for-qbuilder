/**
 * TechNova Solutions - Contact Page
 * Theme: Terminal-style contact section with full layout
 * Primary Color: #6366f1 (Indigo)
 * Dark Mode: Supported (#0a0a0c background)
 */

const techNovaContact = {
    sections: [
        // --------------------------------------------------------------------------
        // CONTACT SECTION - Full featured contact renderer with left & right sides
        // --------------------------------------------------------------------------
        {
            key: "tech-nova-contact-main",
            name: "Contact Section",
            description: "Full-featured contact section with expert info and terminal form",
            structure: {
                type: "TechNovaContactForm",
                defaultProps: {
                    // Section
                    backgroundColor: "#ffffff",
                    darkBackgroundColor: "#0a0a0c",
                    paddingY: 80,
                    paddingX: 48,

                    // Left side
                    leftTitle: "Direct Access",
                    leftTitleHighlight: "To Experts",
                    leftDescription: "Get immediate assistance from our support team. Our experts are ready to help you build something amazing.",
                    leftBgColor: "#000000",
                    leftTextColor: "#ffffff",
                    leftSubtextColor: "#ffffff",
                    cardBgColor: "rgba(0, 0, 0, 0.6)",
                    cardBorderColor: "rgba(255, 255, 255, 0.15)",

                    // Left cards
                    leftCards: [
                        {
                            icon: "zap",
                            title: "Instant Chat",
                            description: "Real-time support from our expert team"
                        },
                        {
                            icon: "calendar",
                            title: "Expert Booking",
                            description: "Schedule 1-on-1 sessions with specialists"
                        }
                    ],

                    // Expert avatars
                    expertAvatars: [
                        {
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLKWYISrq8V_ZMNmLSQ2Y-6f360ODRwJgyARtNCv7juPpzIIFlm7aldKc8Fo9gGHjFk297h764PmohA97BJ-AjaEwsBeUARIjzM4__XiY4F0H-i0x5QDHhuy6Y1ICESKc8XAJYN5QmNaCCJN-tDr5ZtP0SbC-GDDwUKzApTfqLagbmG7IyvCbZXys-ZT5w0CxNpqQf2hZAhUWe9S7Kx_ZOe6WJCz7k4FXmCIntbwn16UfV_BpR9vnpzac95ER5SbEsSx7i2PBWhB8",
                            name: "Sarah"
                        },
                        {
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQy4hx_oeZnmJAGOpNKJ_cj1cm3NNz7aokmyTRecE0jT7YgxMquoukbx34rfrK4QLhqKDxehukFag49_GbHp5H2xA7keeHMYjOUVBgfNYxWBye5VVwLwiiPy7JkXaBHMCuHa0Yc4uPwLlfU7QPiBV-5BeOHzm17QU8XbxRhZgkGfw-sCorLCQy7zDUnXnE5f9Tq-ICxqWXeTaI2QwZKlgD1l0MpdpiOUvt9_AfQvsBoVkWfkR2fE60rRWjENh_MWLKi2eAm6E7HXQ",
                            name: "Mike"
                        },
                        {
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcrMBDWU_DggoYH9fRqIaJTozX0TL6Gx_qcoHKXgGR9ErID9jfazqK0zeDVkpccsYRSqN8YF3-Ftw_7b-LQTKWd5pZW-ye_AU90DfN7J7yCh4Z7iwH4F0gnwJmfpeLU6h-IwiT-IWnB_a4qGPR2rmi_97WDaBb3UpO_OBVPOHc5VhStWFZaGvAR04HocfE5oH78m_vECSymxexWxSEpdRGjShjmabQ1tvkhcE2x8M2jX_waDHkE6WcUxxm2joJFL1G37P_QkYmjtE",
                            name: "Alex"
                        }
                    ],

                    // Form
                    formBgColor: "#f8f9fa",
                    darkFormBgColor: "#1a1a2e",
                    primaryColor: "#6366f1",
                    textColor: "#000000",
                    darkTextColor: "#ffffff",
                    borderColor: "#e2e8f0",
                    darkBorderColor: "#404060",

                    // Form content
                    formTitle: "Get in Touch",
                    formDescription: "Fill out the form below and we'll get back to you shortly.",
                    nameLabel: "Full Name",
                    emailLabel: "Email Address",
                    messageLabel: "Message",
                    namePlaceholder: "John Doe",
                    emailPlaceholder: "john@example.com",
                    messagePlaceholder: "Tell us about your project...",
                    submitButtonText: "Send Message"
                }
            }
        }
    ]
};

module.exports = techNovaContact;
