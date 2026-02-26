
export const businessAbout = {
    // ============================================================================
    // HEADER
    // ============================================================================
    header: {
        key: "business-header-about",
        type: "Header",
        category: "header",
        name: "Elite Header",
        structure: {
            type: "Header",
            defaultProps: {
                sticky: true,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropBlur: true
            },
            columns: [{
                id: "business-header-col",
                width: "100%",
                elements: [{
                    id: "business-navbar",
                    type: "Navbar",
                    props: {
                        logoType: "icon-text",
                        logoText: "Elite",
                        logoAccent: "Handyman",
                        logoTextColor: "var(--theme-text)",
                        accentColor: "#005eff",
                        buttonText: "Book Consultation",
                        buttonBgColor: "#aeff00",
                        buttonTextColor: "var(--theme-text)",
                        links: [
                            { label: "Services", href: "#" },
                            { label: "Portfolio", href: "#" },
                            { label: "The Standard", href: "#" },
                            { label: "Contact", href: "#" }
                        ]
                    }
                }]
            }]
        }
    },

    // ============================================================================
    // SECTIONS
    // ============================================================================
    sections: [
        // HERO
        {
            key: "about-hero",
            name: "About Hero",
            structure: {
                type: "Section",
                defaultProps: { paddingTop: 120, paddingBottom: 80, backgroundColor: "var(--theme-background)" },
                columns: [
                    {
                        id: "about-hero-text",
                        width: "60%",
                        props: { padding: 40, flexDirection: "column", justifyContent: "center" },
                        elements: [
                            { type: "Headline", props: { text: "THE ELITE STANDARD", tag: "h1", fontSize: "6rem", fontWeight: "800", color: "var(--theme-text)" } },
                            { type: "Paragraph", props: { text: "Defining the new benchmark in home maintenance through meticulous craftsmanship.", size: "xl", color: "rgba(0,0,0,0.7)" } }
                        ]
                    },
                    {
                        id: "about-hero-img",
                        width: "40%",
                        props: { padding: 20 },
                        elements: [
                            { type: "Image", props: { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRGpcJbhjDyCD8E-Xezed5T1Qmv0Pn8TmBXtJWLMFfndhkCiqfWcBZtUP7u6iYg8A4hzqZnmPCc4tWfN43DLnipJ6Z-jxLcD1qYDmqY70Pupal_7yMRAUsGFoTiKKN7ePqZGvrmqI9hJ0XXx9oTOyaWAG_2S8zsKFPcsKsps30PlagfvA-OTGjJ5U6aTzK48cSP5lFgrCYjMzTpv70uEIM2PBvyugXCz18AQbJrhcF6BV7hqWGuTVnioxs79tqaOQ7jWqE2IDi_ZE", borderRadius: "16", objectFit: "cover", shadow: "2xl" } }
                        ]
                    }
                ]
            }
        },
        // MANIFESTO
        {
            key: "about-manifesto",
            name: "Manifesto",
            structure: {
                type: "Section",
                defaultProps: { backgroundColor: "var(--theme-text)", paddingY: 128 },
                columns: [
                    {
                        id: "man-left",
                        width: "50%",
                        props: { padding: 40, flexDirection: "column", gap: 32 },
                        elements: [
                            { type: "Badge", props: { text: "OUR MANIFESTO", color: "#aeff00", bgColor: "transparent", border: "none" } },
                            { type: "Headline", props: { text: "Function is expected. Artistry is chosen.", tag: "h2", color: "var(--theme-background)", fontWeight: "900" } }
                        ]
                    },
                    {
                        id: "man-right",
                        width: "50%",
                        props: { padding: 40, flexDirection: "column", gap: 32 },
                        elements: [
                            { type: "Paragraph", props: { text: "Elite Handyman Services was founded on the principle that home maintenance shouldn't just be functional—it should be artisanal.", color: "rgba(255,255,255,0.8)", size: "lg" } },
                            { type: "Paragraph", props: { text: "Every hinge adjusted, every stone polished, and every finish applied is a testament to our dedication.", color: "rgba(255,255,255,0.8)", size: "lg" } },
                            { type: "Button", props: { text: "View our process", variant: "outline", textColor: "#aeff00", borderColor: "#aeff00" } }
                        ]
                    }
                ]
            }
        },
        // STATS
        {
            key: "about-stats",
            name: "Stats",
            structure: {
                type: "Section",
                defaultProps: { paddingY: 80 },
                columns: [{
                    id: "stats-col",
                    width: "100%",
                    elements: [
                        {
                            type: "StatsSection",
                            props: {
                                stats: [
                                    { number: 98, label: "Precision Rate", format: "percent" },
                                    { number: 15, label: "Years of Mastery", format: "plus" },
                                    { number: 5000, label: "Residences Maintained", format: "k" }
                                ],
                                backgroundColor: "var(--theme-background)",
                                textColor: "var(--theme-text)",
                                accentColor: "#005eff"
                            }
                        }
                    ]
                }]
            }
        },
        // GALLERY
        {
            key: "about-gallery",
            name: "Craftsmanship Gallery",
            structure: {
                type: "Section",
                defaultProps: { backgroundColor: "var(--theme-background)", paddingY: 96 },
                columns: [
                    {
                        id: "gal-col",
                        width: "100%",
                        props: { display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, height: "600px" },
                        elements: [
                            { type: "Image", props: { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApkaioGir8fa9BeFeCWAbv05dM0zTQFG7QUjosOZXy-TUzFvkD1mIkwDuJl-UW8_MiYwECwzuItw_Of2EZM_TCH2jA2T-oI_4Nz6wR-6uaUNZqU0jSwfTtRkE6ENGFS7FYE4BSMuoWRFFjRlo-W1vDPEiQMvMP46znvFSDdc06_psxUXB3ou55mvo8CYWD7WQCY7qob34Iyro6u8pfHi0YT56-WK07WmkNZIiyOayICeNYQ2WW6x-Dv_vCFnwzQBhLyWVkGOXOupI", borderRadius: "12", objectFit: "cover", height: "100%" } },
                            { type: "Box", props: { padding: 0, flexDirection: "column", gap: 24 }, elements: [
                                { type: "Image", props: { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhfsPJYzDOG8uB5ZdLP4Siys93O7gZZEq6BYM1DYSwK3Qh1BZl61aTCuxR63bSwhiX1wH3kXmtsQMuIfVqnCjy2pFI568LxI6-6lS4JJlm3X7gYWPivkhbWoqf57T7y8nwm8pGpaUUhI7YQWIKfcPgw0hTxNRJSeiOa-5T9bJGznh8paCdtpPYLU6NdD9qjauEepJfaB51Y-1O4JmbKZEqWzY5dCz8ARy0O0m7V8aTf-P7ZDYCQ2pJ9FKYIoVMIGNlnaYZJgPa6gc", borderRadius: "12", objectFit: "cover", height: "50%" } },
                                { type: "Image", props: { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFxJ-eFqnC4OLeEX4sKIoVwh5ghQtpXvipAUNVSPSbEcONoDMOuGEtaT3sqJc3_UJzU2IIWcR9gont1JSEDgkCUnpY3r0F97ThwtZbCkADNn8RfDb_6_SDGruMVXA1-4dw0Kd_DJXlYsqGXYQbeXLO2K6WchHh9bAsyps8UEcYqfjhpFqnez7eVkMNRZ1EUexnaILpCy8IVio5UiuVNqlD4nebzYlMrtHomqFMe1RvZeWTuovhN2x7E0z7artaSL9_9K58Rs_YzpU", borderRadius: "12", objectFit: "cover", height: "50%" } }
                            ]}
                        ]
                    }
                ]
            }
        },
        // CORE VALUES
        {
            key: "about-values",
            name: "Core Values",
            structure: {
                type: "Section",
                defaultProps: { paddingY: 128 },
                columns: [
                    { id: "val-1", width: "33%", props: { padding: 24, flexDirection: "column" }, elements: [
                        { type: "Headline", props: { text: "01", fontSize: "40", color: "var(--theme-border)" } },
                        { type: "Headline", props: { text: "Precision", tag: "h3" } },
                        { type: "Paragraph", props: { text: "We measure until it is perfect." } }
                    ]},
                    { id: "val-2", width: "33%", props: { padding: 24, flexDirection: "column" }, elements: [
                        { type: "Headline", props: { text: "02", fontSize: "40", color: "var(--theme-border)" } },
                        { type: "Headline", props: { text: "Excellence", tag: "h3" } },
                        { type: "Paragraph", props: { text: "Luxury living requires privacy and respect." } }
                    ]},
                    { id: "val-3", width: "33%", props: { padding: 24, flexDirection: "column" }, elements: [
                        { type: "Headline", props: { text: "03", fontSize: "40", color: "var(--theme-border)" } },
                        { type: "Headline", props: { text: "Mastery", tag: "h3" } },
                        { type: "Paragraph", props: { text: "Every technician is a certified master." } }
                    ]}
                ]
            }
        },
        // CTA
        {
            key: "about-cta",
            name: "CTA",
            structure: {
                type: "Section",
                defaultProps: { backgroundColor: "#aeff00", paddingY: 80 },
                columns: [{
                    id: "cta-col",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", gap: 24 },
                    elements: [
                        { type: "Headline", props: { text: "EXPERIENCE THE STANDARD.", align: "center", fontWeight: "900", color: "var(--theme-text)" } },
                        { type: "Button", props: { text: "Start Your Project", variant: "primary", backgroundColor: "var(--theme-text)", textColor: "var(--theme-text)" } }
                    ]
                }]
            }
        }
    ],

    // ============================================================================
    // FOOTER
    // ============================================================================
    footer: {
        key: "business-footer-about",
        type: "BusinessFooter",
        category: "footer",
        name: "Business Footer",
        structure: {
            type: "Footer",
            defaultProps: { fullWidth: true, backgroundColor: "var(--theme-text)", textColor: "var(--theme-text)", paddingY: 48 },
            columns: [{
                id: "business-footer-col",
                width: "100%",
                elements: [{
                    type: "MinimalFooter",
                    props: {
                        brandName: "Elite Handyman",
                        badgeText: "About",
                        badgeColor: "#aeff00",
                        links: [{ label: "Contact", url: "#" }, { label: "Careers", url: "#" }],
                        copyright: "© 2024 Elite Handyman Services.",
                        backgroundColor: "var(--theme-text)",
                        textColor: "rgba(255,255,255,0.6)"
                    }
                }]
            }]
        }
    }
};
