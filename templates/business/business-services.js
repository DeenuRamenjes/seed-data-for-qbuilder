
export const businessServices = {
    header: {
        key: "business-header-services",
        type: "Header",
        category: "header",
        name: "Elite Header",
        structure: {
            type: "Header",
            defaultProps: { sticky: true, backgroundColor: "var(--theme-background)" },
            columns: [{
                id: "col-header",
                width: "100%",
                elements: [{
                    type: "Navbar",
                    props: {
                        logoText: "Elite",
                        logoAccent: ".",
                        logoTextColor: "var(--theme-text)",
                        accentColor: "#009DFF",
                        buttonText: "Book Now",
                        buttonBgColor: "#aeff00",
                        buttonTextColor: "var(--theme-text)"
                    }
                }]
            }]
        }
    },
    sections: [
        {
            key: "services-hero",
            name: "Services Hero",
            structure: {
                type: "Section",
                defaultProps: { paddingY: 100, backgroundColor: "var(--theme-background)" },
                columns: [{
                    id: "hero-col",
                    width: "100%",
                    props: { flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24 },
                    elements: [
                        { type: "Badge", props: { text: "Premium Maintenance & Repair", color: "#009DFF", bgColor: "rgba(0, 157, 255, 0.1)" } },
                        { type: "Headline", props: { text: "Expert Repairs for the Modern Home", tag: "h1", align: "center", fontWeight: "900" } },
                        { type: "Paragraph", props: { text: "Elite Handyman Services provides professional solutions with surgical precision.", align: "center", size: "lg", color: "var(--theme-border)" } },
                        { type: "ButtonGroup", props: { primaryText: "Browse Services", secondaryText: "Get a Quote", primaryBg: "#aeff00", primaryColor: "var(--theme-text)", justifyContent: "center" } }
                    ]
                }]
            }
        },
        {
            key: "services-grid",
            name: "Service Grid",
            structure: {
                type: "Section",
                defaultProps: { paddingY: 80, backgroundColor: "var(--theme-background)" },
                columns: [{
                    id: "grid-col",
                    width: "100%",
                    props: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 },
                    elements: [
                        { type: "ServiceCard", props: { title: "Electrical", description: "Safety-focused lighting installation.", iconName: "Bolt", linkText: "Book Electrician" } },
                        { type: "ServiceCard", props: { title: "Plumbing", description: "Expert leak repairs and fixtures.", iconName: "Water", linkText: "Request Quote" } },
                        { type: "ServiceCard", props: { title: "Smart Home", description: "Advanced security and automation.", iconName: "Home", linkText: "Upgrade Home" } },
                        { type: "ServiceCard", props: { title: "Carpentry", description: "Custom shelving and trim work.", iconName: "Hammer", linkText: "Schedule Build" } }
                    ]
                }]
            }
        },
        {
            key: "services-featured",
            name: "Detailed Features",
            structure: {
                type: "Section",
                defaultProps: { backgroundColor: "var(--theme-text)", paddingY: 80 },
                columns: [
                    {
                        id: "feat-text",
                        width: "50%",
                        props: { padding: 40, flexDirection: "column", gap: 32 },
                        elements: [
                            { type: "Headline", props: { text: "Why Modern Homeowners Choose Elite.", color: "var(--theme-background)", fontWeight: "900" } },
                            { type: "Box", props: { flexDirection: "column", gap: 24 }, elements: [
                                { type: "Headline", props: { text: "01 Unmatched Precision", tag: "h4", color: "var(--theme-background)" } },
                                { type: "Headline", props: { text: "02 Upfront Pricing", tag: "h4", color: "var(--theme-background)" } },
                                { type: "Headline", props: { text: "03 Digital Convenience", tag: "h4", color: "var(--theme-background)" } }
                            ]}
                        ]
                    },
                    {
                        id: "feat-img",
                        width: "50%",
                        props: { padding: 20 },
                        elements: [
                            { type: "Image", props: { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu0d3puYyvL-YL6omS1u4Dj1FOJfTIXArVsF4WLnGyE2gzGiPDQu0MvGIlwmBA6oeZmkYf1JRh-J2ZZGeaaiUEqfC5GQ_NszbgEnj9QUF10_xQhrkoet6m5HJaHPaanmWTZ5ECcapaCvSg0au6IEOXHk3Tg6Pxw-GfuJGTyi_w4ywHVUlxadHX23n-jktER-ZCWZC_ZfAQzQRjg6DgeAuFsE64gUEFTKy6hOq5x6vdcvdYy8Qi4kNTvL_moZiTViSgScVo2HUV2So", borderRadius: "16" } }
                        ]
                    }
                ]
            }
        },
        {
            key: "services-cta",
            name: "Services CTA",
            structure: {
                type: "Section",
                defaultProps: { paddingY: 80, backgroundColor: "var(--theme-background)" },
                columns: [{
                    id: "cta-col",
                    width: "100%",
                    props: { alignItems: "center", justifyContent: "center" },
                    elements: [
                        { type: "Box", props: { backgroundColor: "var(--theme-background)", padding: 48, borderRadius: 24, alignItems: "center", flexDirection: "column", gap: 24 }, elements: [
                            { type: "Headline", props: { text: "Ready to upgrade your home?", align: "center", tag: "h2" } },
                            { type: "Button", props: { text: "Get a Fast Quote", variant: "primary", backgroundColor: "#aeff00", textColor: "var(--theme-text)" } }
                        ]}
                    ]
                }]
            }
        }
    ],
    footer: {
        key: "business-footer-services",
        type: "Footer",
        category: "footer",
        name: "Elite Footer",
        structure: {
            type: "Footer",
            defaultProps: { backgroundColor: "var(--theme-background)", paddingY: 48, borderTopColor: "var(--theme-border)", borderTopWidth: 1 },
            columns: [{
                id: "footer-col",
                width: "100%",
                elements: [{
                    type: "MinimalFooter",
                    props: {
                        brandName: "Elite.",
                        badgeText: "Services",
                        badgeColor: "#009DFF",
                        links: [],
                        copyright: "© 2024 Elite Handyman Services.",
                        backgroundColor: "var(--theme-background)",
                        textColor: "var(--theme-border)"
                    }
                }]
            }]
        }
    }
};
