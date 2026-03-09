const navbarComponent = {
    type: "Navbar",
    category: "layout",
    name: "Navbar",
    description: "Responsive navigation bar with logo and link support",
    defaultProps: {
        logoType: "text",
        logoText: "Red",
        logoAccent: "Scale",
        accentColor: "var(--theme-primary)",
        links: "Home|#home,Services|#services",
        ctaText: "Get Audit"
    },
    editableProps: {
        logoType: { type: "select", label: "Logo Type", options: ["text", "image", "both"], category: "content" },
        logoImageWidth: { type: "number", label: "Logo Width (px)", category: "styles" },
        logoTextColor: { type: "color", label: "Logo Color", category: "styles" },
        logoTextGradient: { type: "string", label: "Logo Gradient (CSS)", category: "styles" },
        logoAccent: { type: "string", label: "Accent Text", category: "content" },
        accentColor: { type: "color", label: "Accent Color", category: "styles" },
        links: { type: "navbar-links", label: "Navigation Links", category: "content" },
        linkColor: { type: "color", label: "Link Color", category: "styles" },
        linkHoverColor: { type: "color", label: "Link Hover Color", category: "styles" },
        megaMenuBgColor: { type: "color", label: "MM Background", category: "styles" },
        megaMenuTextColor: { type: "color", label: "MM Text Color", category: "styles" },
        megaMenuHeadingColor: { type: "color", label: "MM Heading Color", category: "styles" },
        megaMenuDividerColor: { type: "color", label: "MM Divider Color", category: "styles" },
        ctaText: { type: "string", label: "CTA Button Text", category: "content" }
    }
};

const floatingNavbarComponent = {
    type: "FloatingNavbar",
    category: "layout",
    name: "Floating Navbar",
    description: "Responsive floating navigation bar positioned above content with logo, links, and mega menu support",
    defaultProps: {
        logoType: "text",
        logoText: "Tech",
        logoAccent: "Hub",
        accentColor: "var(--theme-primary)",
        backgroundColor: "var(--theme-background)",
        floatingPadding: 24,
        borderRadius: 16,
        backdropBlur: true,
        shadow: true,
        links: "Home|#home,Services|#services",
        showButton: true,
        buttonText: "Get Started",
        buttonLink: "#contact",
        buttonRadius: "full",
        buttonStyle: "solid"
    },
    editableProps: {
        logoType: { type: "select", label: "Logo Type", options: ["text", "image", "both"], category: "content" },
        logoText: { type: "string", label: "Logo Text", category: "content" },
        logoAccent: { type: "string", label: "Logo Accent", category: "content" },
        logoImage: { type: "url", label: "Logo Image", category: "content" },
        logoImageWidth: { type: "number", label: "Logo Width (px)", category: "styles" },
        logoTextColor: { type: "color", label: "Logo Color", category: "styles" },
        logoTextGradient: { type: "string", label: "Logo Gradient (CSS)", category: "styles" },
        accentColor: { type: "color", label: "Accent Color", category: "styles" },
        backgroundColor: { type: "color", label: "Background Color", category: "styles" },
        floatingPadding: { type: "number", label: "Floating Padding", category: "styles" },
        borderRadius: { type: "number", label: "Border Radius", category: "styles" },
        backdropBlur: { type: "boolean", label: "Backdrop Blur", category: "styles" },
        shadow: { type: "boolean", label: "Drop Shadow", category: "styles" },
        links: { type: "navbar-links", label: "Navigation Links", category: "content" },
        linkColor: { type: "color", label: "Link Color", category: "styles" },
        linkHoverColor: { type: "color", label: "Link Hover Color", category: "styles" },
        megaMenuTextColor: { type: "color", label: "Menu Text Color", category: "styles" },
        megaMenuHeadingColor: { type: "color", label: "Menu Heading Color", category: "styles" },
        megaMenuDividerColor: { type: "color", label: "Menu Divider Color", category: "styles" },
        showButton: { type: "boolean", label: "Show Button", category: "content" },
        buttonText: { type: "string", label: "Button Text", category: "content" },
        buttonLink: { type: "link", label: "Button Link", category: "content" },
        buttonColor: { type: "color", label: "Button Text Color", category: "styles" },
        buttonBgColor: { type: "color", label: "Button Background", category: "styles" },
        buttonRadius: { type: "select", label: "Button Radius", options: ["none", "sm", "md", "full"], category: "styles" },
        buttonStyle: { type: "select", label: "Button Style", options: ["solid", "outline"], category: "styles" }
    }
};

const headingComponent = {
    type: "Heading",
    category: "text",
    name: "Heading",
    description: "Large title text",
    defaultProps: { text: "Heading Text", tag: "h2", align: "left", color: "var(--theme-text)", fontWeight: "700" },
    editableProps: {
        text: { type: "string", label: "Text" },
        tag: { type: "select", label: "Size", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
        align: { type: "select", label: "Alignment", options: ["left", "center", "right"] },
        color: { type: "color", label: "Color" },
        fontWeight: { type: "select", label: "Font Weight", options: ["400", "500", "600", "700", "800", "900"] },
    }
};

const paragraphComponent = {
    type: "Paragraph",
    category: "text",
    name: "Paragraph",
    description: "Multi-line text block",
    defaultProps: { text: "Enter your paragraph text here.", align: "left", color: "var(--theme-border)", size: "base" },
    editableProps: {
        text: { type: "rich-text", label: "Text" },
        align: { type: "select", label: "Alignment", options: ["left", "center", "right", "justify"] },
        color: { type: "color", label: "Color" },
        size: { type: "select", label: "Size", options: ["sm", "base", "lg", "xl"] },
    }
};

const buttonComponent = {
    type: "Button",
    category: "interactive",
    name: "Button",
    description: "Call to action button",
    defaultProps: { text: "Click Me", variant: "primary", size: "md", link: "#", align: "left", backgroundColor: "var(--theme-primary)", textColor: "var(--theme-text)", borderRadius: "8" },
    editableProps: {
        text: { type: "string", label: "Text" },
        link: { type: "link", label: "Link" },
        variant: { type: "select", label: "Style", options: ["primary", "secondary", "outline", "ghost"] },
        size: { type: "select", label: "Size", options: ["sm", "md", "lg"] },
        align: { type: "select", label: "Alignment", options: ["left", "center", "right"] },
        backgroundColor: { type: "color", label: "Background Color" },
        textColor: { type: "color", label: "Text Color" },
        borderRadius: { type: "select", label: "Border Radius", options: ["0", "4", "8", "12", "16", "9999"] },
        marginBottom: { type: "number", label: "Margin Bottom", category: "styles" },
    }
};

const imageComponent = {
    type: "Image",
    category: "media",
    name: "Image",
    description: "Dynamic image with customizable radius and fit",
    defaultProps: { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800", alt: "Image", borderRadius: "8", objectFit: "cover", shadow: "none" },
    editableProps: {
        src: { type: "url", label: "URL" },
        alt: { type: "string", label: "Alt Text" },
        borderRadius: { type: "select", label: "Radius", options: ["0", "4", "8", "12", "16", "24", "32", "9999"] },
        objectFit: { type: "select", label: "Fit", options: ["cover", "contain", "fill", "none"] },
        shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg", "xl", "2xl"] },
    }
};

const badgeComponent = {
    type: "Badge",
    category: "text",
    name: "Badge",
    description: "Small status indicator or label",
    defaultProps: { text: "New", color: "#b91c1c", bgColor: "#fef2f2", showPing: true },
    editableProps: {
        text: { type: "string", label: "Text" },
        color: { type: "color", label: "Text Color" },
        bgColor: { type: "color", label: "Background" },
        showPing: { type: "boolean", label: "Show Ping Animation" },
    }
};

const boxComponent = {
    type: "Box",
    category: "layout",
    name: "Box",
    description: "Versatile container for other elements",
    defaultProps: { backgroundColor: "transparent", padding: 24, borderRadius: 12, shadow: "none" },
    editableProps: {
        backgroundColor: { type: "color", label: "Background" },
        padding: { type: "number", label: "Padding" },
        borderRadius: { type: "number", label: "Radius" },
        shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg", "xl"] },
    }
};

// DEPRECATED: Old FeatureCard component - replaced with new version below (line ~751) with full theming support
// const featureCardComponent = {
//     type: "FeatureCard",
//     category: "layout",
//     name: "Feature Card",
//     description: "Icon, title, and description card",
//     defaultProps: { title: "Feature", description: "Detail...", iconName: "Zap", iconColor: "var(--theme-primary)" },
//     editableProps: {
//         title: { type: "string", label: "Title" },
//         description: { type: "rich-text", label: "Description" },
//         iconName: { type: "select", label: "Icon", options: ["Zap", "Shield", "Globe", "Heart", "Star", "Settings"] },
//         iconColor: { type: "color", label: "Icon Color" },
//     }
// };

const newsletterSignupComponent = {
    type: "NewsletterSignup",
    category: "interactive",
    name: "Newsletter",
    description: "Email capture form",
    defaultProps: { title: "Join Our Newsletter", buttonText: "Subscribe" },
    editableProps: {
        title: { type: "string", label: "Title" },
        buttonText: { type: "string", label: "Button Text" },
    }
};

const trackingInputComponent = {
    type: "TrackingInput",
    category: "interactive",
    name: "Tracking Input",
    description: "Specialized input for shipment/parcel tracking",
    totalElements: 1,
    defaultProps: {
        placeholder: "ENTER TRACKING ID",
        buttonText: "TRACK",
        accentColor: "#ed2626",
        textColor: "var(--theme-text)",
        borderColor: "rgba(255,255,255,0.2)",
        iconName: "Package",
        showHelperText: true
    },
    editableProps: {
        placeholder: { type: "string", label: "Placeholder", category: "content" },
        buttonText: { type: "string", label: "Button Text", category: "content" },
        accentColor: { type: "color", label: "Accent Color", category: "styles" },
        textColor: { type: "color", label: "Text Color", category: "styles" },
        borderColor: { type: "color", label: "Border Color", category: "styles" },
        iconName: { type: "select", label: "Icon", options: ["Package", "Truck", "Box", "Globe", "Search"], category: "content" },
        showHelperText: { type: "boolean", label: "Show Helper Text", category: "content" }
    }
};

const spacerComponent = {
    type: "Spacer",
    category: "layout",
    name: "Spacer",
    description: "Vertical space between elements",
    defaultProps: { height: "md" },
    editableProps: { height: { type: "select", label: "Height", options: ["sm", "md", "lg", "xl"] } }
};

const dividerComponent = {
    type: "Divider",
    category: "layout",
    name: "Divider",
    description: "Horizontal line",
    defaultProps: { style: "solid", color: "var(--theme-border)", width: "100%", thickness: 1 },
    editableProps: {
        style: { type: "select", label: "Style", options: ["solid", "dashed", "dotted"] },
        color: { type: "color", label: "Color" },
        width: { type: "string", label: "Width" },
        thickness: { type: "number", label: "Thickness" },
    }
};

const headlineComponent = {
    type: "Headline",
    category: "text",
    name: "Headline",
    description: "High-impact, uppercase hero title",
    defaultProps: {
        text: "THE HEADLINE",
        tag: "h1",
        align: "left",
        color: "var(--theme-text)",
        gradient: ""
    },
    editableProps: {
        text: { type: "string", label: "Headline Text" },
        tag: { type: "select", label: "Size", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
        align: { type: "select", label: "Alignment", options: ["left", "center", "right"] },
        color: { type: "color", label: "Text Color" },
        gradient: { type: "string", label: "Gradient (CSS)" },
    }
};

const dashboardComponent = {
    type: "Dashboard",
    category: "media",
    name: "Dashboard",
    description: "Interactive analytics dashboard visual",
    defaultProps: { title: "Analytics Engine v4.0", accentColor: "var(--theme-primary)", secondaryColor: "var(--theme-primary)" },
    editableProps: {
        title: { type: "string", label: "Title" },
        accentColor: { type: "color", label: "Accent Color" },
        secondaryColor: { type: "color", label: "Secondary Color" },
    }
};

const socialProofComponent = {
    type: "SocialProof",
    category: "text",
    name: "Social Proof",
    description: "Avatar stack with trust rating",
    defaultProps: {
        text: "Trusted by 2,000+ teams",
        textColor: "var(--theme-border)",
        textSize: "sm",
        fontWeight: "600",
        showAvatars: true,
        showStars: true,
        avatarSize: "w-10",
        gap: "gap-3"
    },
    editableProps: {
        text: { type: "string", label: "Text", default: "Trusted by 2,000+ teams", category: "content" },
        textColor: { type: "color", label: "Text Color", default: "var(--theme-border)", category: "styles" },
        textSize: { type: "select", label: "Text Size", options: ["xs", "sm", "base", "lg", "xl"], default: "sm", category: "styles" },
        fontWeight: { type: "select", label: "Font Weight", options: ["400", "500", "600", "700", "800"], default: "600", category: "styles" },
        showAvatars: { type: "boolean", label: "Show Avatars", default: true, category: "content" },
        showStars: { type: "boolean", label: "Show Star Rating", default: true, category: "content" },
        avatarSize: { type: "select", label: "Avatar Size", options: ["w-8", "w-10", "w-12", "w-14"], default: "w-10", category: "styles" },
        gap: { type: "select", label: "Gap Spacing", options: ["gap-2", "gap-3", "gap-4", "gap-6"], default: "gap-3", category: "styles" },
    }
};

const createAccountComponent = {
    type: "CreateAccount",
    category: "interactive",
    name: "Create Account Form",
    description: "Enterprise account signup form with fields and validation",
    defaultProps: {
        title: "Create an Account",
        description: "Access the most powerful financial suite built for professionals.",
        nameLabel: "Full Legal Name",
        namePlaceholder: "Johnathan Doe",
        emailLabel: "Institutional Email",
        emailPlaceholder: "name@company.com",
        sectorLabel: "Primary Sector",
        sectorOptions: "Asset Management,FinTech Startup,Investment Banking,Venture Capital",
        submitText: "Begin Onboarding",
        disclaimerText: "By proceeding, you agree to our Terms of Service and Privacy Policy.",
        backgroundColor: "var(--theme-text)",
        borderRadius: 8,
        shadow: "xl",
        titleColor: "var(--theme-background)",
        descriptionColor: "var(--theme-border)",
        labelColor: "var(--theme-border)",
        inputBgColor: "#020617",
        inputBorderColor: "#334155",
        inputTextColor: "var(--theme-background)",
        buttonBgColor: "var(--theme-primary)",
        buttonTextColor: "var(--theme-background)"
    },
    editableProps: {
        title: { type: "string", label: "Form Title", default: "Create an Account", category: "content" },
        description: { type: "string", label: "Form Description", default: "Access the most powerful financial suite built for professionals.", category: "content" },
        nameLabel: { type: "string", label: "Name Field Label", default: "Full Legal Name", category: "content" },
        namePlaceholder: { type: "string", label: "Name Placeholder", default: "Johnathan Doe", category: "content" },
        emailLabel: { type: "string", label: "Email Field Label", default: "Institutional Email", category: "content" },
        emailPlaceholder: { type: "string", label: "Email Placeholder", default: "name@company.com", category: "content" },
        sectorLabel: { type: "string", label: "Sector Field Label", default: "Primary Sector", category: "content" },
        sectorOptions: { type: "string", label: "Sector Options (comma-separated)", default: "Asset Management,FinTech Startup,Investment Banking,Venture Capital", category: "content" },
        submitText: { type: "string", label: "Submit Button Text", default: "Begin Onboarding", category: "content" },
        disclaimerText: { type: "string", label: "Disclaimer Text", default: "By proceeding, you agree to our Terms of Service and Privacy Policy.", category: "content" },
        titleColor: { type: "color", label: "Title Color", default: "var(--theme-background)", category: "styles" },
        descriptionColor: { type: "color", label: "Description Color", default: "var(--theme-border)", category: "styles" },
        labelColor: { type: "color", label: "Label Color", default: "var(--theme-border)", category: "styles" },
        inputBgColor: { type: "color", label: "Input Background", default: "#020617", category: "styles" },
        inputBorderColor: { type: "color", label: "Input Border Color", default: "#334155", category: "styles" },
        inputTextColor: { type: "color", label: "Input Text Color", default: "var(--theme-background)", category: "styles" },
        buttonBgColor: { type: "color", label: "Button Background", default: "var(--theme-primary)", category: "styles" },
        buttonTextColor: { type: "color", label: "Button Text Color", default: "var(--theme-background)", category: "styles" },
        backgroundColor: { type: "color", label: "Form Background", default: "var(--theme-text)", category: "styles" },
        borderRadius: { type: "number", label: "Border Radius", default: 8, category: "styles" },
        shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg", "xl", "2xl"], default: "xl", category: "styles" }
    }
};

const sidebarCardsComponent = {
    type: "SidebarCardsRenderer",
    category: "features",
    name: "Sidebar Cards",
    description: "Sidebar with expandable accordion-style cards on the right side",
    defaultProps: {
        sidebarTitle: "Components",
        sidebarDescription: "Hover over each card to reveal more details.",
        sidebarImage: "",
        primaryColor: "var(--theme-primary)",
        textColor: "#0f0f12",
        darkTextColor: "var(--theme-background)",
        subtextColor: "#333333",
        darkSubtextColor: "#cccccc",
        cards: [
            {
                label: "ITEM 01",
                title: "First Item",
                description: "Description for the first item goes here.",
                features: ["Feature 1", "Feature 2", "Feature 3"]
            }
        ]
    },
    editableProps: {
        sidebarTitle: { type: "string", label: "Sidebar Title", category: "content" },
        sidebarDescription: { type: "string", label: "Sidebar Description", category: "content" },
        sidebarImage: { type: "image", label: "Sidebar Image", category: "content" },
        primaryColor: { type: "color", label: "Primary Color", category: "styles" },
        textColor: { type: "color", label: "Text Color", category: "styles" },
        darkTextColor: { type: "color", label: "Dark Text Color", category: "styles" },
        subtextColor: { type: "color", label: "Subtext Color", category: "styles" },
        darkSubtextColor: { type: "color", label: "Dark Subtext Color", category: "styles" },
        cards: {
            type: "array-of-objects",
            label: "Cards",
            category: "content",
            fields: {
                label: { type: "string", label: "Label" },
                title: { type: "string", label: "Title" },
                description: { type: "string", label: "Description" },
                features: { type: "array", label: "Features Array", itemType: "string" }
            }
        }
    }
};

const imageWithFeaturesComponent = {
    type: "ImageWithFeaturesRenderer",
    category: "features",
    name: "Image with Features",
    description: "Two-column layout with image and feature boxes with accent borders",
    defaultProps: {
        image: "",
        title: "Main",
        titleHighlight: "Section",
        description: "Description text goes here.",
        primaryColor: "var(--theme-primary)",
        accentLightColor: "rgba(99, 102, 241, 0.1)",
        textColor: "#0f0f12",
        darkTextColor: "var(--theme-background)",
        subtextColor: "#333333",
        darkSubtextColor: "#cccccc",
        features: [
            {
                title: "Feature Title",
                description: "Feature description goes here."
            }
        ],
        imagePosition: "left"
    },
    editableProps: {
        image: { type: "image", label: "Image", category: "content" },
        title: { type: "string", label: "Title", category: "content" },
        titleHighlight: { type: "string", label: "Title Highlight", category: "content" },
        description: { type: "string", label: "Description", category: "content" },
        primaryColor: { type: "color", label: "Primary Color", category: "styles" },
        accentLightColor: { type: "color", label: "Accent Light Color", category: "styles" },
        textColor: { type: "color", label: "Text Color", category: "styles" },
        darkTextColor: { type: "color", label: "Dark Text Color", category: "styles" },
        subtextColor: { type: "color", label: "Subtext Color", category: "styles" },
        darkSubtextColor: { type: "color", label: "Dark Subtext Color", category: "styles" },
        features: {
            type: "array-of-objects",
            label: "Features",
            category: "content",
            fields: {
                title: { type: "string", label: "Feature Title" },
                description: { type: "string", label: "Feature Description" }
            }
        },
        imagePosition: { type: "select", label: "Image Position", options: ["left", "right"], category: "styles" }
    }
};

const horizontalCarouselComponent = {
    type: "HorizontalCarouselRenderer",
    category: "features",
    name: "Horizontal Carousel",
    description: "Horizontally scrolling carousel with navigation arrows and overlay text",
    defaultProps: {
        title: "Featured Items",
        primaryColor: "var(--theme-primary)",
        textColor: "#0f0f12",
        darkTextColor: "var(--theme-background)",
        subtextColor: "#333333",
        darkSubtextColor: "#cccccc",
        items: [
            {
                image: "",
                label: "LABEL 01",
                title: "Item Title",
                description: "Item description goes here."
            }
        ],
        showNavigation: true,
        backgroundColor: "var(--theme-background)"
    },
    editableProps: {
        title: { type: "string", label: "Section Title", category: "content" },
        primaryColor: { type: "color", label: "Primary Color", category: "styles" },
        textColor: { type: "color", label: "Text Color", category: "styles" },
        darkTextColor: { type: "color", label: "Dark Text Color", category: "styles" },
        subtextColor: { type: "color", label: "Subtext Color", category: "styles" },
        darkSubtextColor: { type: "color", label: "Dark Subtext Color", category: "styles" },
        backgroundColor: { type: "color", label: "Background Color", category: "styles" },
        items: {
            type: "array-of-objects",
            label: "Carousel Items",
            category: "content",
            fields: {
                image: { type: "image", label: "Item Image" },
                label: { type: "string", label: "Item Label" },
                title: { type: "string", label: "Item Title" },
                description: { type: "string", label: "Item Description" }
            }
        },
        showNavigation: { type: "boolean", label: "Show Navigation Arrows", category: "behavior" }
    }
};

const techNovaContactFormComponent = {
    type: "TechNovaContactForm",
    category: "features",
    name: "TechNova Contact Section",
    description: "Full-featured contact section with left side info and right side contact form",
    defaultProps: {
        // Section
        backgroundColor: "var(--theme-background)",
        darkBackgroundColor: "#0a0a0c",
        paddingY: 80,
        paddingX: 48,

        // Left side
        leftTitle: "Direct Access",
        leftTitleHighlight: "To Experts",
        leftDescription: "Get immediate assistance from our support team. Our experts are ready to help you build something amazing.",
        leftBgColor: "var(--theme-text)",
        leftTextColor: "var(--theme-background)",
        leftSubtextColor: "var(--theme-text)",
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
        primaryColor: "var(--theme-primary)",
        textColor: "var(--theme-text)",
        darkTextColor: "var(--theme-background)",
        borderColor: "var(--theme-border)",
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
    },
    editableProps: {
        // Section styling
        backgroundColor: { type: "color", label: "Section Background", category: "styles" },
        darkBackgroundColor: { type: "color", label: "Section Dark Background", category: "styles" },
        paddingY: { type: "number", label: "Vertical Padding (px)", category: "styles" },
        paddingX: { type: "number", label: "Horizontal Padding (px)", category: "styles" },

        // Left side content
        leftTitle: { type: "string", label: "Left Title", category: "content" },
        leftTitleHighlight: { type: "string", label: "Left Title Highlight", category: "content" },
        leftDescription: { type: "string", label: "Left Description", category: "content" },

        // Left side styling
        leftBgColor: { type: "color", label: "Left Background Color", category: "styles" },
        leftTextColor: { type: "color", label: "Left Text Color", category: "styles" },
        leftSubtextColor: { type: "color", label: "Left Subtext Color", category: "styles" },
        cardBgColor: { type: "color", label: "Card Background Color", category: "styles" },
        cardBorderColor: { type: "color", label: "Card Border Color", category: "styles" },

        // Left side cards
        leftCards: {
            type: "array-of-objects",
            label: "Contact Cards",
            category: "content",
            fields: {
                icon: { type: "string", label: "Icon Name" },
                title: { type: "string", label: "Card Title" },
                description: { type: "string", label: "Card Description" }
            }
        },

        // Expert avatars
        expertAvatars: {
            type: "array-of-objects",
            label: "Expert Avatars",
            category: "content",
            fields: {
                image: { type: "image", label: "Expert Image" },
                name: { type: "string", label: "Expert Name" }
            }
        },

        // Form styling
        formBgColor: { type: "color", label: "Form Background Color", category: "styles" },
        darkFormBgColor: { type: "color", label: "Form Dark Background Color", category: "styles" },
        primaryColor: { type: "color", label: "Primary Accent Color", category: "styles" },
        textColor: { type: "color", label: "Text Color", category: "styles" },
        darkTextColor: { type: "color", label: "Dark Text Color", category: "styles" },
        borderColor: { type: "color", label: "Border Color", category: "styles" },
        darkBorderColor: { type: "color", label: "Dark Border Color", category: "styles" },

        // Form content
        formTitle: { type: "string", label: "Form Title", category: "content" },
        formDescription: { type: "string", label: "Form Description", category: "content" },
        nameLabel: { type: "string", label: "Name Field Label", category: "content" },
        emailLabel: { type: "string", label: "Email Field Label", category: "content" },
        messageLabel: { type: "string", label: "Message Field Label", category: "content" },
        namePlaceholder: { type: "string", label: "Name Placeholder", category: "content" },
        emailPlaceholder: { type: "string", label: "Email Placeholder", category: "content" },
        messagePlaceholder: { type: "string", label: "Message Placeholder", category: "content" },
        submitButtonText: { type: "string", label: "Submit Button Text", category: "content" }
    }
};

const graHeroComponent = {
    type: "GraHero",
    category: "layout",
    name: "Graphic Hero",
    description: "Modern hero section with travel and discovery focus",
    defaultProps: {
        badgeText: "Discover Best Destinations",
        title: "Travel, Enjoy and Live a New Life Full of Fun",
        highlightText: "New Life",
        description: "Pack up your bags, book the destination and live a life of your dreams. Best aviation services across the globe",
        primaryCtaText: "Pick up a destination",
        primaryCtaLink: "/contact",
        secondaryCtaText: "Learn More",
        secondaryCtaLink: "#",
        primaryColor: "#8B5CF6",
        textColor: "#1a1a1a",
        heroImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
        floatingImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
        floatingTitle: "Trip To Europe",
        floatingSubtitle: "14-24 April",
        statsText: "24 people going",
    },
    editableProps: {
        badgeText: { type: "string", label: "Badge Text", category: "content" },
        title: { type: "string", label: "Title", category: "content" },
        highlightText: { type: "string", label: "Highlighted Word(s)", category: "content" },
        description: { type: "rich-text", label: "Description", category: "content" },
        primaryCtaText: { type: "string", label: "Primary Button Text", category: "content" },
        primaryCtaLink: { type: "link", label: "Primary Button Link", category: "content" },
        secondaryCtaText: { type: "string", label: "Secondary Button Text", category: "content" },
        secondaryCtaLink: { type: "link", label: "Secondary Button Link", category: "content" },
        heroImage: { type: "image", label: "Main Hero Image (Circle)", category: "content" },
        floatingImage: { type: "image", label: "Floating Card Image", category: "content" },
        floatingTitle: { type: "string", label: "Floating Card Title", category: "content" },
        floatingSubtitle: { type: "string", label: "Floating Card Subtitle", category: "content" },
        statsText: { type: "string", label: "Stats/Participants Tag", category: "content" },
        primaryColor: { type: "color", label: "Accent Color", category: "styles" },
        textColor: { type: "color", label: "Primary Text Color", category: "styles" },
    },
};

const styleHeroComponent = {
    type: "StyleHero",
    category: "layout",
    name: "Style Hero",
    description: "Premium editorial hero with design-culture focus",
    defaultProps: {
        headingLine1: "DESIGN",
        headingLine2: "CULTURE",
        subheading: "Delightful remarkably mr on announcing themselves entreaties favourable.",
        description: "Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of. Now improving and one sincerity intention allowance.",
        readMoreText: "Read More",
        readMoreLink: "#",
        ctaText: "EXPLORE COLLECTION",
        ctaLink: "/collection",
        imageSrc: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
        accentColor: "#FFCC00",
        textColor: "#000000",
        subTextColor: "#333333",
        bgColor: "#FFFFFF",
        buttonBgColor: "#000000",
        buttonTextColor: "#FFFFFF",
    },
    editableProps: {
        headingLine1: { type: "string", label: "Heading Line 1", category: "content" },
        headingLine2: { type: "string", label: "Heading Line 2", category: "content" },
        subheading: { type: "string", label: "Subheading/Intro", category: "content" },
        description: { type: "rich-text", label: "Main Description", category: "content" },
        readMoreText: { type: "string", label: "Secondary Link Text", category: "content" },
        readMoreLink: { type: "link", label: "Secondary Link URL", category: "content" },
        ctaText: { type: "string", label: "Main Button Text", category: "content" },
        ctaLink: { type: "link", label: "Main Button URL", category: "content" },
        imageSrc: { type: "image", label: "Sliced Grid Background Image", category: "content" },
        accentColor: { type: "color", label: "Accent Highlight Color", category: "styles" },
        textColor: { type: "color", label: "Heading Text Color", category: "styles" },
        subTextColor: { type: "color", label: "Paragraph Text Color", category: "styles" },
        bgColor: { type: "color", label: "Overall Section Background", category: "styles" },
        buttonBgColor: { type: "color", label: "Main Button Background", category: "styles" },
        buttonTextColor: { type: "color", label: "Main Button Text Color", category: "styles" },
    },
};

const simpleHeroComponent = {
    type: "SimpleHero",
    category: "layout",
    name: "Simple Hero",
    description: "A minimalist hero section with floating decor and feature images",
    defaultProps: {
        title: "WELCOME TO OUR SELF-CARE HAVEN, WHERE INDULGENCE MEETS TRANQUILITY",
        highlightWords: "SELF-CARE, HAVEN,, TRANQUILITY",
        description: "We believe that taking care of yourself is not just a luxury, it's a necessity. That's why we offer a range of high-quality self-care products that help you to relax, unwind, and enjoy the present moment.",
        ctaText: "Order Now",
        ctaLink: "#",
        primaryColor: "#2d4a1c",
        highlightColor: "#4b6c31",
        backgroundColor: "#fdfbf4",
        rightImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    },
    editableProps: {
        title: { type: "string", label: "Title", category: "content" },
        highlightWords: { type: "string", label: "Highlight Words (comma separated)", category: "content" },
        description: { type: "rich-text", label: "Description", category: "content" },
        ctaText: { type: "string", label: "CTA Button Text", category: "content" },
        ctaLink: { type: "link", label: "CTA Button Link", category: "content" },
        rightImage: { type: "image", label: "Right Feature Image", category: "content" },
        primaryColor: { type: "color", label: "Primary Color (Button)", default: "#2d4a1c", category: "styles" },
        highlightColor: { type: "color", label: "Highlight Color (Text & Button Hover)", default: "#4b6c31", category: "styles" },
        backgroundColor: { type: "color", label: "Background Color", default: "#fdfbf4", category: "styles" },
    },
};

const businessCardComponent = {
    type: "BusinessCard",
    category: "features",
    name: "Business Card",
    description: "A utility card featuring an icon, number indicator, and offset shadow button",
    defaultProps: {
        numberText: "01",
        iconName: "Notebook",
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        buttonText: "Read More",
        buttonLink: "#",
        primaryColor: "#5162b7",
        backgroundColor: "#f4f4f4",
        topBorderColor: "#5162b7",
        textColor: "#333333",
        descriptionColor: "#a0a0a0",
    },
    editableProps: {
        numberText: { type: "string", label: "Number Indicator", category: "content" },
        iconName: { type: "string", label: "Lucide Icon Name", category: "content" },
        title: { type: "string", label: "Title", category: "content" },
        description: { type: "rich-text", label: "Description", category: "content" },
        buttonText: { type: "string", label: "Button Text", category: "content" },
        buttonLink: { type: "link", label: "Button Link", category: "content" },
        primaryColor: { type: "color", label: "Primary Color (Button & Border Shadow)", category: "styles" },
        backgroundColor: { type: "color", label: "Background Color", category: "styles" },
        topBorderColor: { type: "color", label: "Top Border Color", category: "styles" },
        textColor: { type: "color", label: "Title & Icon Color", category: "styles" },
        descriptionColor: { type: "color", label: "Description Text Color", category: "styles" },
    },
};

export const components = [
    navbarComponent,
    floatingNavbarComponent,
    headingComponent,
    headlineComponent,
    paragraphComponent,
    buttonComponent,
    imageComponent,
    badgeComponent,
    boxComponent,
    // featureCardComponent, // REMOVED - replaced with new FeatureCard component with full theming support (line ~751)
    newsletterSignupComponent,
    dashboardComponent,
    socialProofComponent,
    createAccountComponent,
    trackingInputComponent,
    graHeroComponent,
    styleHeroComponent,
    simpleHeroComponent,
    businessCardComponent,
    {
        type: "ButtonGroup",
        category: "interactive",
        name: "Button Group",
        description: "Side-by-side action buttons with full customization",
        defaultProps: {
            primaryText: "Get Started Free",
            secondaryText: "Live Demo",
            primaryLink: "",
            secondaryLink: "",
            primaryBg: "linear-gradient(to right, var(--theme-primary), var(--theme-primary))",
            primaryColor: "var(--theme-background)",
            secondaryBg: "var(--theme-background)",
            secondaryColor: "var(--theme-text)",
            primaryBorderRadius: "16",
            secondaryBorderRadius: "16",
            fontSize: "base",
            fontWeight: "700",
            gap: "gap-3",
            layout: "flex-wrap",
            showPrimaryIcon: true,
            showSecondaryIcon: false,
        },
        editableProps: {
            primaryText: { type: "string", label: "Primary Button Text", default: "Get Started Free", category: "content" },
            secondaryText: { type: "string", label: "Secondary Button Text", default: "Live Demo", category: "content" },
            primaryLink: { type: "link", label: "Primary Button Link", category: "content" },
            secondaryLink: { type: "link", label: "Secondary Button Link", category: "content" },
            primaryBg: { type: "color", label: "Primary Button Background", default: "var(--theme-primary)", category: "styles" },
            primaryColor: { type: "color", label: "Primary Button Text Color", default: "var(--theme-background)", category: "styles" },
            primaryBorderRadius: { type: "select", label: "Primary Border Radius", options: ["0", "4", "8", "12", "16", "20", "24", "9999"], default: "16", category: "styles" },
            secondaryBg: { type: "color", label: "Secondary Button Background", default: "var(--theme-background)", category: "styles" },
            secondaryColor: { type: "color", label: "Secondary Button Text Color", default: "var(--theme-text)", category: "styles" },
            secondaryBorderRadius: { type: "select", label: "Secondary Border Radius", options: ["0", "4", "8", "12", "16", "20", "24", "9999"], default: "16", category: "styles" },
            fontSize: { type: "select", label: "Font Size", options: ["xs", "sm", "base", "lg", "xl", "2xl"], default: "base", category: "styles" },
            fontWeight: { type: "select", label: "Font Weight", options: ["400", "500", "600", "700", "800", "900"], default: "700", category: "styles" },
            gap: { type: "select", label: "Gap Between Buttons", options: ["gap-1", "gap-2", "gap-3", "gap-4", "gap-6"], default: "gap-3", category: "styles" },
            layout: { type: "select", label: "Layout", options: ["flex-wrap", "flex-col"], default: "flex-wrap", category: "styles" },
            justifyContent: { type: "select", label: "Justify Content", options: ["flex-start", "center", "flex-end", "space-between", "space-around"], default: "flex-start", category: "styles" },
            alignItems: { type: "select", label: "Align Items", options: ["flex-start", "center", "flex-end", "stretch"], default: "center", category: "styles" },
            showPrimaryIcon: { type: "boolean", label: "Show Primary Button Icon", default: true, category: "content" },
            showSecondaryIcon: { type: "boolean", label: "Show Secondary Button Icon", default: false, category: "content" },
        }
    },
    {
        type: "ComparisonCard",
        category: "layout",
        name: "Comparison Card",
        description: "Card with title and feature list",
        defaultProps: {
            title: "Comparison Title",
            features: [
                { icon: "CheckCircle", title: "Feature 1", description: "Description 1", iconColor: "var(--theme-primary)" }
            ],
            backgroundColor: "var(--theme-background)",
            borderTopWidth: 4,
            borderTopColor: "var(--theme-primary)",
            borderRadius: 24,
            shadow: "md"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            features: {
                type: "array-of-objects",
                label: "Features",
                category: "content",
                fields: {
                    icon: { type: "string", label: "Icon Name" },
                    title: { type: "string", label: "Title" },
                    description: { type: "string", label: "Description" },
                    iconColor: { type: "color", label: "Icon Color" }
                }
            },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            borderTopColor: { type: "color", label: "Top Border Color", category: "styles" },
            titleColor: { type: "color", label: "Title Color", category: "styles" }
        }
    },
    spacerComponent,
    dividerComponent,
    {
        type: "AvatarGroup",
        category: "media",
        name: "Avatar Group",
        description: "Stack of avatars with counter and supporting text",
        defaultProps: {
            avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX2pANZHrZMJH6Kly3wkuq3zOEWt4Exf9m5qHO0sjL1UZ2_jQiVP1aVfeCFzBObKPqWWQUIU8-_tQy4vfVNnkpeaApuDXpFXAi2q0ynKyFHvb0NgXgozmskHTS6ELx-t8jXM5nrpTt0Nh4-kUyMbBewvsaYG2IDqpIt2DF7g_9chlbDl0Js8kt82roXLRfGadtdIx6sdM3yJauWwO2jg15Dd4GgPIP3YWB5OkyvGBIpnejVzrc4wlXp4bCDlTaqd6_-CWXBIUwrOI",
            countText: "+5k",
            countBg: "#9A3412",
            countColor: "var(--theme-background)",
            supportText: "Joined by 5,400+ active community heroes",
            textColor: "var(--theme-text)",
            textOpacity: "70"
        },
        editableProps: {
            avatarUrl: { type: "url", label: "Avatar Image URL", default: "", category: "content" },
            countText: { type: "string", label: "Count Badge Text", default: "+5k", category: "content" },
            countBg: { type: "color", label: "Count Badge Background", default: "#9A3412", category: "styles" },
            countColor: { type: "color", label: "Count Badge Text Color", default: "var(--theme-background)", category: "styles" },
            supportText: { type: "string", label: "Support Text", default: "Joined by 5,400+ active community heroes", category: "content" },
            textColor: { type: "color", label: "Text Color", default: "var(--theme-background)", category: "styles" },
            textOpacity: { type: "select", label: "Text Opacity", options: ["50", "60", "70", "80", "90"], default: "70", category: "styles" }
        }
    },
    {
        type: "DonationCard",
        category: "interactive",
        name: "Donation Card",
        description: "Donation form with amount selection, custom input, and progress tracking",
        defaultProps: {
            title: "Make an Impact",
            titleColor: "var(--theme-background)",
            titleIcon: "volunteer_activism",
            amounts: "25,50,100",
            selectedAmount: "50",
            amountColor: "#D9480F",
            amountTextColor: "var(--theme-background)",
            amountHoverBg: "rgba(217, 72, 15, 0.2)",
            customPlaceholder: "Custom Amount",
            customInputBg: "var(--theme-background)",
            customInputOpacity: "5",
            customInputBorderColor: "var(--theme-background)",
            customInputTextColor: "var(--theme-background)",
            customInputBorderOpacity: "10",
            buttonText: "Donate Now",
            buttonBg: "#D9480F",
            buttonHoverBg: "#B83A0A",
            buttonTextColor: "var(--theme-background)",
            buttonIcon: "arrow_forward",
            securityText: "Secure payment powered by Stripe",
            campaignGoalText: "Campaign Goal",
            campaignAmount: "$500,000",
            campaignAmountColor: "var(--theme-primary)",
            goalProgressPercent: 72,
            progressBarBg: "rgba(255, 255, 255, 0.05)",
            progressBarFill: "#D9480F",
            goalProgressText: "72% of our harvest goal reached. Help us bridge the gap.",
            backgroundColor: "rgba(45, 27, 20, 0.85)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "24",
            backdropBlur: "12px"
        },
        editableProps: {
            title: { type: "string", label: "Form Title", default: "Make an Impact", category: "content" },
            titleColor: { type: "color", label: "Title Color", default: "var(--theme-background)", category: "styles" },
            titleIcon: { type: "string", label: "Title Icon (Material Symbol)", default: "volunteer_activism", category: "content" },
            amounts: { type: "string", label: "Amount Options (comma-separated)", default: "25,50,100", category: "content" },
            selectedAmount: { type: "string", label: "Default Selected Amount", default: "50", category: "content" },
            amountColor: { type: "color", label: "Amount Button Color", default: "#D9480F", category: "styles" },
            amountTextColor: { type: "color", label: "Amount Button Text Color", default: "var(--theme-background)", category: "styles" },
            customPlaceholder: { type: "string", label: "Custom Amount Placeholder", default: "Custom Amount", category: "content" },
            customInputBg: { type: "color", label: "Input Background", default: "var(--theme-background)", category: "styles" },
            customInputOpacity: { type: "select", label: "Input Opacity %", options: ["5", "10", "15", "20"], default: "5", category: "styles" },
            buttonText: { type: "string", label: "Button Text", default: "Donate Now", category: "content" },
            buttonBg: { type: "color", label: "Button Background", default: "#D9480F", category: "styles" },
            buttonHoverBg: { type: "color", label: "Button Hover Background", default: "#B83A0A", category: "styles" },
            buttonTextColor: { type: "color", label: "Button Text Color", default: "var(--theme-background)", category: "styles" },
            securityText: { type: "string", label: "Security Text", default: "Secure payment powered by Stripe", category: "content" },
            campaignGoalText: { type: "string", label: "Goal Label", default: "Campaign Goal", category: "content" },
            campaignAmount: { type: "string", label: "Campaign Amount", default: "$500,000", category: "content" },
            campaignAmountColor: { type: "color", label: "Amount Text Color", default: "var(--theme-primary)", category: "styles" },
            goalProgressPercent: { type: "number", label: "Progress Percent", default: 72, category: "content" },
            goalProgressText: { type: "string", label: "Progress Text", default: "72% of our harvest goal reached. Help us bridge the gap.", category: "content" },
            backgroundColor: { type: "color", label: "Card Background", default: "rgba(45, 27, 20, 0.85)", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16", "20", "24", "32"], default: "24", category: "styles" }
        }
    },
    // {
    //     type: "StatsCard",
    //     category: "text",
    //     name: "Stats Card",
    //     description: "Compact metric card with icon, badge, label, and value",
    //     defaultProps: {
    //         icon: "diversity_3",
    //         iconColor: "#D9480F",
    //         iconBg: "rgba(217, 72, 15, 0.2)",
    //         badge: "+12k",
    //         badgeColor: "var(--theme-primary)",
    //         badgeBg: "rgba(245, 158, 11, 0.1)",
    //         statLabel: "Lives Touched",
    //         labelColor: "rgba(255, 255, 255, 0.5)",
    //         statValue: "50k+",
    //         statValueColor: "var(--theme-background)",
    //         backgroundColor: "rgba(154, 52, 18, 0.2)",
    //         borderColor: "rgba(255, 255, 255, 0.1)",
    //         borderRadius: "12"
    //     },
    //     editableProps: {
    //         icon: { type: "string", label: "Icon (Material Symbol)", default: "diversity_3", category: "content" },
    //         iconColor: { type: "color", label: "Icon Color", default: "#D9480F", category: "styles" },
    //         iconBg: { type: "color", label: "Icon Background", default: "rgba(217, 72, 15, 0.2)", category: "styles" },
    //         badge: { type: "string", label: "Badge Text", default: "+12k", category: "content" },
    //         badgeColor: { type: "color", label: "Badge Text Color", default: "var(--theme-primary)", category: "styles" },
    //         badgeBg: { type: "color", label: "Badge Background", default: "rgba(245, 158, 11, 0.1)", category: "styles" },
    //         statLabel: { type: "string", label: "Stat Label", default: "Lives Touched", category: "content" },
    //         labelColor: { type: "color", label: "Label Color", default: "rgba(255, 255, 255, 0.5)", category: "styles" },
    //         statValue: { type: "string", label: "Stat Value", default: "50k+", category: "content" },
    //         statValueColor: { type: "color", label: "Value Color", default: "var(--theme-background)", category: "styles" },
    //         backgroundColor: { type: "color", label: "Card Background", default: "rgba(154, 52, 18, 0.2)", category: "styles" },
    //         borderColor: { type: "color", label: "Border Color", default: "rgba(255, 255, 255, 0.1)", category: "styles" },
    //         borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16", "20", "24", "32"], default: "12", category: "styles" }
    //     }
    // },
    {
        type: "SearchPanel",
        category: "interactive",
        name: "Search Panel",
        description: "Glass-effect search panel with multiple input fields",
        defaultProps: {
            glassEffect: true,
            backgroundColor: "rgba(6, 44, 33, 0.75)",
            borderColor: "rgba(212, 175, 55, 0.25)",
            backdropBlur: "20px",
            gap: 4,
            fields: [
                {
                    id: "location",
                    label: "Location",
                    icon: "location_on",
                    type: "input",
                    placeholder: "Global Destination...",
                    iconColor: "#D4AF37"
                },
                {
                    id: "portfolio",
                    label: "Portfolio",
                    icon: "castle",
                    type: "select",
                    options: ["Heritage Mansions", "Modern Penthouse", "Private Atolls", "Alpine Chateaus"],
                    defaultValue: "Heritage Mansions",
                    iconColor: "#D4AF37"
                },
                {
                    id: "investment",
                    label: "Investment Range",
                    icon: "payments",
                    type: "select",
                    options: ["$10M - $50M", "$50M - $200M", "$200M+"],
                    defaultValue: "$10M - $50M",
                    iconColor: "#D4AF37"
                }
            ],
            searchButton: {
                icon: "explore",
                backgroundColor: "linear-gradient(135deg, #D4AF37 0%, #F1E5AC 50%, #996515 100%)",
                textColor: "#041A14",
                hoverEffect: "brightness"
            }
        },
        editableProps: {
            glassEffect: { type: "boolean", label: "Glass Effect", default: true, category: "styles" },
            backgroundColor: { type: "color", label: "Background Color", default: "rgba(6, 44, 33, 0.75)", category: "styles" },
            borderColor: { type: "color", label: "Border Color", default: "rgba(212, 175, 55, 0.25)", category: "styles" },
            backdropBlur: { type: "number", label: "Backdrop Blur (px)", default: 20, category: "styles" },
            gap: { type: "number", label: "Gap", default: 4, category: "styles" }
        }
    },
    {
        type: "FeatureRow",
        category: "layout",
        name: "Feature Row",
        description: "Row of features with indicators and trailing text",
        defaultProps: {
            features: [
                {
                    label: "Curated Properties",
                    hasIndicator: true,
                    indicatorColor: "#D4AF37"
                },
                {
                    label: "Global Network",
                    hasIndicator: true,
                    indicatorColor: "#D4AF37"
                }
            ],
            trailingText: "Trusted since 1982",
            trailingTextColor: "rgba(255, 255, 255, 0.4)",
            layout: "between"
        },
        editableProps: {
            trailingText: { type: "string", label: "Trailing Text", category: "content" },
            trailingTextColor: { type: "color", label: "Trailing Text Color", default: "rgba(255, 255, 255, 0.4)", category: "styles" },
            layout: { type: "select", label: "Layout", options: ["between", "start", "center"], default: "between", category: "styles" }
        }
    },

    // ============================================================================
    // VIDEO EMBED COMPONENT
    // ============================================================================
    {
        type: "VideoEmbed",
        category: "media",
        name: "Video Embed",
        description: "Embed YouTube, Vimeo, or custom video with responsive sizing",
        defaultProps: {
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            title: "Video Title",
            aspectRatio: "16/9",
            borderRadius: "16",
            shadow: "lg",
            maxWidth: "100%"
        },
        editableProps: {
            videoUrl: { type: "url", label: "Video URL", category: "content" },
            title: { type: "string", label: "Video Title", category: "content" },
            aspectRatio: { type: "select", label: "Aspect Ratio", options: ["16/9", "4/3", "1/1", "9/16"], category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["0", "8", "12", "16", "24"], category: "styles" },
            shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg", "xl", "2xl"], category: "styles" },
            maxWidth: { type: "string", label: "Max Width", category: "styles" }
        }
    },

    // ============================================================================
    // AUDIO PLAYER COMPONENT
    // ============================================================================
    {
        type: "AudioPlayer",
        category: "media",
        name: "Audio Player",
        description: "Audio player for podcasts and music with custom styling",
        defaultProps: {
            title: "Audio Title",
            description: "Audio description",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            duration: "0:00",
            backgroundColor: "var(--theme-background)",
            accentColor: "var(--theme-primary)",
            borderRadius: "12",
            shadow: "md"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "string", label: "Description", category: "content" },
            audioUrl: { type: "url", label: "Audio URL", category: "content" },
            duration: { type: "string", label: "Duration", placeholder: "MM:SS", category: "content" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["0", "8", "12", "16", "24"], category: "styles" },
            shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg", "xl"], category: "styles" }
        }
    },

    // ============================================================================
    // TEXT BLOCK COMPONENT (Rich Content)
    // ============================================================================
    {
        type: "TextBlock",
        category: "text",
        name: "Text Block",
        description: "Rich text content block with heading and content",
        defaultProps: {
            heading: "",
            text: "Your rich text content here...",
            align: "left",
            color: "var(--theme-text)",
            fontSize: "base",
            fontWeight: "400",
            lineHeight: "1.6"
        },
        editableProps: {
            heading: { type: "string", label: "Heading", category: "content" },
            text: { type: "rich-text", label: "Content", category: "content" },
            align: { type: "select", label: "Alignment", options: ["left", "center", "right", "justify"], category: "styles" },
            color: { type: "color", label: "Text Color", category: "styles" },
            fontSize: { type: "select", label: "Font Size", options: ["xs", "sm", "base", "lg", "xl", "2xl"], category: "styles" },
            fontWeight: { type: "select", label: "Font Weight", options: ["300", "400", "500", "600", "700", "800"], category: "styles" },
            lineHeight: { type: "select", label: "Line Height", options: ["1.2", "1.4", "1.6", "1.8", "2"], category: "styles" }
        }
    },

    // ============================================================================
    // HIGHLIGHTED BOX COMPONENT
    // ============================================================================
    {
        type: "HighlightedBox",
        category: "layout",
        name: "Highlighted Box",
        description: "Content box with highlight background color and customizable styling",
        defaultProps: {
            content: "Highlighted content goes here",
            backgroundColor: "#eef2ff",
            borderColor: "var(--theme-primary)",
            borderWidth: 2,
            borderRadius: 12,
            padding: 32,
            accentColor: "var(--theme-primary)",
            showLeftAccent: true
        },
        editableProps: {
            content: { type: "rich-text", label: "Content", category: "content" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            borderWidth: { type: "number", label: "Border Width (px)", min: 0, max: 10, category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["0", "8", "12", "16", "24"], category: "styles" },
            padding: { type: "number", label: "Padding (px)", min: 0, max: 64, category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            showLeftAccent: { type: "boolean", label: "Show Left Accent Bar", category: "styles" }
        }
    },

    // ============================================================================
    // QUOTE COMPONENT
    // ============================================================================
    {
        type: "Quote",
        category: "text",
        name: "Quote",
        description: "Blockquote with author attribution",
        defaultProps: {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            role: "Founder",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            text: { type: "rich-text", label: "Quote Text", category: "content" },
            author: { type: "string", label: "Author Name", category: "content" },
            role: { type: "string", label: "Author Role", category: "content" },
            image: { type: "image", label: "Author Image", category: "content" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    // ============================================================================
    // TESTIMONIAL COMPONENT
    // ============================================================================
    {
        type: "Testimonial",
        category: "text",
        name: "Testimonial",
        description: "Customer testimonial with rating and details",
        defaultProps: {
            text: "This product has transformed the way we work. Highly recommended!",
            author: "Jane Smith",
            role: "Marketing Manager",
            company: "Tech Corp",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            rating: 5,
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            text: { type: "rich-text", label: "Testimonial Text", category: "content" },
            author: { type: "string", label: "Author Name", category: "content" },
            role: { type: "string", label: "Author Role", category: "content" },
            company: { type: "string", label: "Company", category: "content" },
            image: { type: "image", label: "Author Image", category: "content" },
            rating: { type: "select", label: "Rating", options: ["1", "2", "3", "4", "5"], category: "content" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    // ============================================================================
    // TIMELINE ITEM COMPONENT
    // ============================================================================
    {
        type: "TimelineItem",
        category: "text",
        name: "Timeline Item",
        description: "Single timeline entry with year and description",
        defaultProps: {
            year: "2024",
            title: "Major Milestone",
            description: "Description of what happened in this year",
            icon: "Star",
            backgroundColor: "var(--theme-background)",
            borderColor: "var(--theme-primary)",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            year: { type: "string", label: "Year", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            icon: { type: "select", label: "Icon", options: ["Star", "Zap", "Award", "Rocket", "Heart"], category: "content" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    // ============================================================================
    // FEATURE CARD COMPONENT
    // ============================================================================
    {
        type: "FeatureCard",
        category: "features",
        name: "Feature Card",
        description: "Professional feature card with icon, title, and description",
        defaultProps: {
            iconName: "Zap",
            title: "Feature Title",
            description: "Feature description and benefits",
            backgroundColor: "var(--theme-background-alt, var(--theme-background))",
            borderColor: "var(--theme-border, var(--theme-border))",
            accentColor: "var(--theme-primary, var(--theme-primary))",
            borderRadius: "12",
            shadow: "md",
            iconColor: "var(--theme-primary)",
            image: "",
            imageAspectRatio: "16/9",
            titleColor: "var(--theme-text)",
            descriptionColor: "var(--theme-border)",
            backgroundColor: "transparent",
            borderRadius: "12px",
            padding: "0",
            textAlign: "left",
            useItalicDescription: false,
            titleSize: "lg"
        },
        editableProps: {
            iconName: { type: "select", label: "Icon", options: ["Zap", "Shield", "Globe", "Heart", "Star", "ArrowRight", "none"], default: "Zap", category: "content" },
            iconColor: { type: "color", label: "Icon Color", category: "styles" },
            title: { type: "string", label: "Title", default: "Feature Title", category: "content" },
            description: { type: "rich-text", label: "Description", default: "Feature description...", category: "content" },
            image: { type: "image", label: "Image", category: "content" },
            imageAspectRatio: { type: "select", label: "Image Aspect Ratio", options: ["1/1", "4/3", "16/9", "21/9"], default: "16/9", category: "styles" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            descriptionColor: { type: "color", label: "Description Color", category: "styles" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16", "20", "24"], category: "styles" },
            shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg", "xl"], category: "styles" },
            borderRadius: { type: "string", label: "Border Radius (px/rem)", category: "styles" },
            padding: { type: "string", label: "Padding (px/rem)", category: "styles" },
            textAlign: { type: "select", label: "Text Align", options: ["left", "center", "right"], category: "styles" },
            useItalicDescription: { type: "boolean", label: "Italic Description", category: "styles" },
            titleSize: { type: "select", label: "Title Size", options: ["sm", "base", "lg", "xl", "2xl", "3xl"], category: "styles" }
        }
    },

    // ============================================================================
    // COMPARISON ROW COMPONENT
    // ============================================================================
    {
        type: "ComparisonRow",
        category: "features",
        name: "Comparison Row",
        description: "Feature comparison row with checkmarks/crosses",
        defaultProps: {
            label: "Feature Name",
            included: true,
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text, var(--theme-text))",
            checkColor: "var(--theme-primary, var(--theme-primary))",
            crossColor: "var(--theme-primary)",
            borderColor: "var(--theme-border, var(--theme-border))"
        },
        editableProps: {
            label: { type: "string", label: "Feature Label", category: "content" },
            included: { type: "boolean", label: "Included", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            checkColor: { type: "color", label: "Check Color", category: "styles" },
            crossColor: { type: "color", label: "Cross Color", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" }
        }
    },

    // ============================================================================
    // BENEFIT ITEM COMPONENT
    // ============================================================================
    {
        type: "BenefitItem",
        category: "features",
        name: "Benefit Item",
        description: "Benefit showcase with icon and description",
        defaultProps: {
            icon: "💡",
            title: "Benefit Title",
            description: "Brief description of the benefit",
            backgroundColor: "var(--theme-background, var(--theme-background))",
            borderRadius: "12",
            shadow: "sm",
            iconBgColor: "transparent",
            iconSize: "40"
        },
        editableProps: {
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16", "20"], category: "styles" },
            shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg"], category: "styles" },
            iconBgColor: { type: "color", label: "Icon Background", category: "styles" },
            iconSize: { type: "select", label: "Icon Size (px)", options: ["24", "32", "40", "48", "56"], category: "styles" }
        }
    },

    // ============================================================================
    // SERVICES SECTION COMPONENT
    // ============================================================================
    {
        type: "ServicesSection",
        category: "features",
        name: "Services Section",
        description: "Grid of service offering cards (6 by default) with image, icon and link",
        defaultProps: {
            title: "Our Services",
            subtitle: "Helping teams ship faster with modern tooling",
            cards: [
                { title: "Analytics", description: "Deep product & user analytics.", iconSrc: "", cardSrc: "", link: "#" },
                { title: "Integrations", description: "Connect to your favorite tools.", iconSrc: "", cardSrc: "", link: "#" },
                { title: "Security", description: "Enterprise-grade security.", iconSrc: "", cardSrc: "", link: "#" },
                { title: "Collaboration", description: "Real-time collaboration features.", iconSrc: "", cardSrc: "", link: "#" },
                { title: "Deployments", description: "One-click deployments and CI.", iconSrc: "", cardSrc: "", link: "#" },
                { title: "Support", description: "24/7 dedicated support.", iconSrc: "", cardSrc: "", link: "#" }
            ],
            backgroundColor: "var(--theme-background)",
            cardBg: "var(--theme-border)",
            cardAccent: "var(--theme-primary)",
            columns: 3
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            subtitle: { type: "string", label: "Subtitle", category: "content" },
            cards: { type: "array-of-objects", label: "Cards", category: "content", fields: { title: { type: "string", label: "Title" }, description: { type: "rich-text", label: "Description" }, iconSrc: { type: "image", label: "Icon (URL)" }, cardSrc: { type: "image", label: "Background Image (URL)" }, link: { type: "string", label: "Link" } } },
            backgroundColor: { type: "color", label: "Section Background", category: "styles" },
            cardBg: { type: "color", label: "Card Background", category: "styles" },
            cardAccent: { type: "color", label: "Card Accent", category: "styles" },
            columns: { type: "select", label: "Columns (desktop)", options: [1, 2, 3, 4], default: 3, category: "styles" }
        }
    },

    // ============================================================================
    // CAPABILITY ITEM COMPONENT
    // ============================================================================
    {
        type: "CapabilityItem",
        category: "features",
        name: "Capability Item",
        description: "Technical capability with title and features list",
        defaultProps: {
            title: "Capability Name",
            features: "Feature 1 • Feature 2 • Feature 3",
            backgroundColor: "var(--theme-background-alt, var(--theme-background))",
            borderLeftColor: "var(--theme-primary, var(--theme-primary))",
            borderLeftWidth: "3",
            titleColor: "var(--theme-primary, var(--theme-primary))",
            textColor: "var(--theme-text-secondary, #6b7280)",
            borderRadius: "12"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            features: { type: "rich-text", label: "Features List", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            borderLeftColor: { type: "color", label: "Border Color", category: "styles" },
            borderLeftWidth: { type: "select", label: "Border Width", options: ["1", "2", "3", "4"], category: "styles" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16"], category: "styles" }
        }
    },

    // ============================================================================
    // USE CASE CARD COMPONENT
    // ============================================================================
    {
        type: "UseCaseCard",
        category: "features",
        name: "Use Case Card",
        description: "Industry/use case card with border accent",
        defaultProps: {
            title: "Industry/Use Case",
            description: "Description of the use case and benefits",
            backgroundColor: "var(--theme-background-alt, var(--theme-background))",
            borderLeftColor: "var(--theme-primary, var(--theme-primary))",
            borderLeftWidth: "4",
            titleColor: "var(--theme-primary, var(--theme-primary))",
            textColor: "var(--theme-text-secondary, #6b7280)",
            borderRadius: "12"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            borderLeftColor: { type: "color", label: "Border Color", category: "styles" },
            borderLeftWidth: { type: "select", label: "Border Width", options: ["2", "3", "4", "5"], category: "styles" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16"], category: "styles" }
        }
    },

    // ============================================================================
    // SOLUTION BOX COMPONENT
    // ============================================================================
    {
        type: "SolutionBox",
        category: "features",
        name: "Solution Box",
        description: "Problem-solution showcase with arrow",
        defaultProps: {
            problem: "Problem: Manual Processes",
            solution: "Solution: Full Automation",
            description: "Benefits and improvements",
            backgroundColor: "var(--theme-background, var(--theme-background))",
            problemColor: "var(--theme-text, var(--theme-text))",
            solutionColor: "var(--theme-primary, var(--theme-primary))",
            arrowColor: "var(--theme-primary, var(--theme-primary))",
            shadow: "md",
            borderRadius: "12"
        },
        editableProps: {
            problem: { type: "string", label: "Problem", category: "content" },
            solution: { type: "string", label: "Solution", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            problemColor: { type: "color", label: "Problem Color", category: "styles" },
            solutionColor: { type: "color", label: "Solution Color", category: "styles" },
            arrowColor: { type: "color", label: "Arrow Color", category: "styles" },
            shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg", "xl"], category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16"], category: "styles" }
        }
    },

    // ============================================================================
    // INDUSTRY SOLUTION COMPONENT
    // ============================================================================
    {
        type: "IndustrySolution",
        category: "features",
        name: "Industry Solution",
        description: "Industry-specific solution card with icon",
        defaultProps: {
            icon: "🏢",
            industry: "Industry Name",
            description: "Solution for this industry",
            backgroundColor: "var(--theme-background-alt, var(--theme-background))",
            textColor: "var(--theme-text, var(--theme-text))",
            descColor: "var(--theme-text-secondary, #6b7280)",
            iconSize: "40",
            borderRadius: "12",
            shadow: "none"
        },
        editableProps: {
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            industry: { type: "string", label: "Industry", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Title Color", category: "styles" },
            descColor: { type: "color", label: "Description Color", category: "styles" },
            iconSize: { type: "select", label: "Icon Size (px)", options: ["32", "40", "48", "56"], category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16"], category: "styles" },
            shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg"], category: "styles" }
        }
    },

    // ============================================================================
    // PRODUCT & SERVICE COMPONENTS
    // ============================================================================
    {
        type: "ProductCard",
        category: "products",
        name: "Product Card",
        description: "Product showcase card with image, title, and pricing",
        defaultProps: {
            image: "",
            title: "Product Name",
            description: "Product description",
            price: "$99",
            rating: 4.5,
            reviews: 128,
            badge: "NEW",
            badgeColor: "var(--theme-primary, var(--theme-primary))",
            badgeBgColor: "var(--theme-primary-light, #eef2ff)",
            backgroundColor: "var(--theme-background, var(--theme-background))",
            textColor: "var(--theme-text, var(--theme-text))",
            priceColor: "var(--theme-primary, var(--theme-primary))",
            borderRadius: "12",
            shadow: "md",
            hoverEffect: true
        },
        editableProps: {
            image: { type: "image", label: "Product Image", category: "content" },
            title: { type: "string", label: "Product Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            price: { type: "string", label: "Price", category: "content" },
            rating: { type: "number", label: "Rating (0-5)", category: "content" },
            reviews: { type: "number", label: "Number of Reviews", category: "content" },
            badge: { type: "string", label: "Badge Text", category: "content" },
            badgeColor: { type: "color", label: "Badge Color", category: "styles" },
            badgeBgColor: { type: "color", label: "Badge Background", category: "styles" },
            backgroundColor: { type: "color", label: "Card Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            priceColor: { type: "color", label: "Price Color", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16"], category: "styles" },
            shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg"], category: "styles" },
            hoverEffect: { type: "boolean", label: "Enable Hover Effect", category: "styles" }
        }
    },

    {
        type: "ServiceCard",
        category: "services",
        name: "Service Card",
        description: "Service offering card with icon and features",
        defaultProps: {
            icon: "⚡",
            title: "Service Name",
            description: "Service description",
            features: ["Feature 1", "Feature 2", "Feature 3"],
            backgroundColor: "var(--theme-background, var(--theme-background))",
            textColor: "var(--theme-text, var(--theme-text))",
            accentColor: "var(--theme-primary, var(--theme-primary))",
            borderRadius: "12",
            shadow: "md"
        },
        editableProps: {
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            title: { type: "string", label: "Service Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            features: { type: "string-array", label: "Features", category: "content" },
            backgroundColor: { type: "color", label: "Card Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16"], category: "styles" },
            shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg"], category: "styles" }
        }
    },

    {
        type: "PricingCard",
        category: "pricing",
        name: "Pricing Card",
        description: "Pricing plan card with features and CTA",
        defaultProps: {
            title: "Basic Plan",
            price: "$29/mo",
            description: "Perfect for getting started",
            features: ["Feature 1", "Feature 2", "Feature 3"],
            buttonText: "Get Started",
            buttonColor: "white",
            buttonBgColor: "var(--theme-primary, var(--theme-primary))",
            backgroundColor: "var(--theme-background, var(--theme-background))",
            textColor: "var(--theme-text, var(--theme-text))",
            highlightBorder: false,
            highlightColor: "var(--theme-primary, var(--theme-primary))",
            borderRadius: "12"
        },
        editableProps: {
            title: { type: "string", label: "Plan Title", category: "content" },
            price: { type: "string", label: "Price", category: "content" },
            description: { type: "string", label: "Description", category: "content" },
            features: { type: "string-array", label: "Features", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            buttonColor: { type: "color", label: "Button Text Color", category: "styles" },
            buttonBgColor: { type: "color", label: "Button Background", category: "styles" },
            backgroundColor: { type: "color", label: "Card Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            highlightBorder: { type: "boolean", label: "Highlight (Popular)", category: "styles" },
            highlightColor: { type: "color", label: "Highlight Color", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["8", "12", "16"], category: "styles" }
        }
    },

    {
        type: "ProductGallery",
        category: "products",
        name: "Product Gallery",
        description: "Product gallery with main and thumbnail images",
        defaultProps: {
            images: ["", "", ""],
            title: "Product Gallery",
            description: "View all product images",
            backgroundColor: "var(--theme-background-alt, var(--theme-background))",
            textColor: "var(--theme-text, var(--theme-text))",
            autoPlay: true,
            autoPlayInterval: 4000,
            mainImageHeight: "384",
            thumbnailSize: "80",
            borderRadius: "8",
            thumbnailBorderRadius: "8",
            gap: "12",
            padding: "0",
            showThumbnails: true,
            accentColor: "var(--theme-primary, var(--theme-primary))"
        },
        editableProps: {
            images: { type: "image-array", label: "Gallery Images", category: "content" },
            title: { type: "string", label: "Gallery Title", category: "content" },
            description: { type: "string", label: "Description", category: "content" },
            autoPlay: { type: "boolean", label: "Auto Play", category: "content" },
            autoPlayInterval: { type: "number", label: "Auto Play Interval (ms)", category: "content" },
            showThumbnails: { type: "boolean", label: "Show Thumbnails", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            mainImageHeight: { type: "number", label: "Main Image Height", category: "styles" },
            thumbnailSize: { type: "number", label: "Thumbnail Size", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius", category: "styles" },
            thumbnailBorderRadius: { type: "number", label: "Thumbnail Border Radius", category: "styles" },
            gap: { type: "number", label: "Gap", category: "styles" },
            padding: { type: "number", label: "Padding", category: "styles" }
        }
    },

    {
        type: "ComparisonTable",
        category: "products",
        name: "Comparison Table",
        description: "Feature comparison table for products/plans",
        defaultProps: {
            items: [{ name: "Option A" }, { name: "Option B" }],
            features: ["Feature 1", "Feature 2", "Feature 3"],
            backgroundColor: "var(--theme-background, var(--theme-background))",
            textColor: "var(--theme-text, var(--theme-text))",
            accentColor: "var(--theme-primary, var(--theme-primary))"
        },
        editableProps: {
            items: { type: "object-array", label: "Items to Compare", category: "content" },
            features: { type: "string-array", label: "Features", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    {
        type: "RoadmapTimeline",
        category: "products",
        name: "Roadmap Timeline",
        description: "Product roadmap timeline visualization",
        defaultProps: {
            items: [
                { phase: "Phase 1", title: "Foundation", description: "Core features", features: ["Feature 1", "Feature 2"] }
            ],
            backgroundColor: "var(--theme-background, var(--theme-background))",
            textColor: "var(--theme-text, var(--theme-text))",
            accentColor: "var(--theme-primary, var(--theme-primary))",
            markerSize: "40",
            lineWidth: "4",
            lineColor: "40",
            connectorStyle: "solid",
            spacing: "32",
            markerBorderRadius: "9999",
            padding: "0",
            maxWidth: "4xl"
        },
        editableProps: {
            items: { type: "object-array", label: "Timeline Items", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            markerSize: { type: "number", label: "Marker Size", category: "styles" },
            lineWidth: { type: "number", label: "Line Width", category: "styles" },
            lineColor: { type: "number", label: "Line Opacity", category: "styles" },
            connectorStyle: { type: "select", label: "Connector Style", options: ["solid", "dashed"], category: "styles" },
            spacing: { type: "number", label: "Spacing", category: "styles" },
            markerBorderRadius: { type: "number", label: "Marker Border Radius", category: "styles" },
            padding: { type: "number", label: "Padding", category: "styles" }
        }
    },

    {
        type: "LinkList",
        category: "navigation",
        name: "Link List",
        description: "Vertical list of links with title header",
        defaultProps: {
            title: "Links",
            items: [
                { label: "Link 1", href: "#" },
                { label: "Link 2", href: "#" },
                { label: "Link 3", href: "#" }
            ],
            titleColor: "var(--theme-border)",
            textColor: "var(--theme-text)"
        },
        editableProps: {
            title: { type: "string", label: "Section Title", category: "content" },
            items: { type: "link-list", label: "Links", category: "content" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            textColor: { type: "color", label: "Link Color", category: "styles" }
        }
    },

    {
        type: "Logo",
        category: "layout",
        name: "Logo",
        description: "Brand logo with text, image, or combined options",
        defaultProps: {
            logoType: "text",
            text: "Brand",
            accent: "Scale",
            logoImage: "",
            logoImageWidth: 32,
            color: "var(--theme-text)",
            gradient: "",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            logoType: { type: "select", label: "Logo Type", options: ["text", "image", "both"], category: "content" },
            text: { type: "string", label: "Logo Text", category: "content" },
            accent: { type: "string", label: "Accent Text", category: "content" },
            logoImage: { type: "image", label: "Logo Image", category: "content" },
            logoImageWidth: { type: "number", label: "Image Width (px)", category: "styles" },
            color: { type: "color", label: "Text Color", category: "styles" },
            gradient: { type: "string", label: "Gradient (CSS)", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    {
        type: "SocialLinks",
        category: "navigation",
        name: "Social Links",
        description: "Social media icon links with hover effects and customizable colors",
        defaultProps: {
            links: "twitter:https://twitter.com:Twitter,linkedin:https://linkedin.com:LinkedIn,github:https://github.com:GitHub",
            iconSize: 20,
            iconColor: "var(--theme-border)",
            iconHoverColor: "var(--theme-text)",
            spacing: 16,
            align: "left"
        },
        editableProps: {
            links: { type: "social-links", label: "Social Links", category: "content" },
            iconSize: { type: "number", label: "Icon Size (px)", category: "styles" },
            iconColor: { type: "color", label: "Icon Color", category: "styles" },
            iconHoverColor: { type: "color", label: "Icon Hover Color", category: "styles" },
            spacing: { type: "number", label: "Spacing (px)", category: "styles" },
            align: { type: "select", label: "Alignment", options: ["left", "center", "right"], category: "styles" }
        }
    },

    {
        type: "ClientLogosGrid",
        category: "products",
        name: "Client Logos Grid",
        description: "Grid of client or partner logos with hover effects",
        defaultProps: {
            logos: [
                { url: "", title: "Client 1" },
                { url: "", title: "Client 2" },
                { url: "", title: "Client 3" }
            ],
            columns: 4,
            gap: 24,
            showTitles: false,
            logoHeight: 80,
            backgroundColor: "transparent",
            borderRadius: 8,
            hoverEffect: true
        },
        editableProps: {
            logos: { type: "image-array", label: "Logo URLs", category: "content" },
            columns: { type: "select", label: "Columns", options: ["2", "3", "4", "5", "6"], category: "styles" },
            gap: { type: "number", label: "Gap (px)", category: "styles" },
            showTitles: { type: "boolean", label: "Show Titles", category: "styles" },
            logoHeight: { type: "number", label: "Logo Height (px)", category: "styles" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius", category: "styles" },
            hoverEffect: { type: "boolean", label: "Enable Hover Effect", category: "styles" }
        }
    },

    {
        type: "CaseStudyCard",
        category: "products",
        name: "Case Study Card",
        description: "Case study showcase with image, results, and description",
        defaultProps: {
            image: "",
            title: "Case Study Title",
            industry: "Industry",
            description: "Brief overview of the challenge and solution",
            results: ["Result 1", "Result 2", "Result 3"],
            resultHighlight: "+150%",
            highlightLabel: "Growth",
            link: "#",
            backgroundColor: "var(--theme-background, var(--theme-background))",
            textColor: "var(--theme-text, var(--theme-text))",
            accentColor: "var(--theme-primary, var(--theme-primary))"
        },
        editableProps: {
            image: { type: "image", label: "Case Study Image", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            industry: { type: "string", label: "Industry/Category", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            results: { type: "string-array", label: "Key Results", category: "content" },
            resultHighlight: { type: "string", label: "Result Highlight", category: "content" },
            highlightLabel: { type: "string", label: "Highlight Label", category: "content" },
            link: { type: "link", label: "Read More Link", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    {
        type: "SuccessStoryCard",
        category: "products",
        name: "Success Story Card",
        description: "Success story with avatar, quote, and metrics",
        defaultProps: {
            image: "",
            name: "Client Name",
            title: "Client Title",
            company: "Company Name",
            quote: "This is an amazing testimonial about the service...",
            metric: "+200%",
            metricLabel: "Performance Increase",
            backgroundColor: "var(--theme-background, var(--theme-background))",
            textColor: "var(--theme-text, var(--theme-text))",
            accentColor: "var(--theme-primary, var(--theme-primary))"
        },
        editableProps: {
            image: { type: "image", label: "Avatar Image", category: "content" },
            name: { type: "string", label: "Client Name", category: "content" },
            title: { type: "string", label: "Client Title", category: "content" },
            company: { type: "string", label: "Company Name", category: "content" },
            quote: { type: "rich-text", label: "Quote/Story", category: "content" },
            metric: { type: "string", label: "Metric Value", category: "content" },
            metricLabel: { type: "string", label: "Metric Label", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    {
        type: "BeforeAfterComparison",
        category: "products",
        name: "Before / After Comparison",
        description: "Side-by-side before and after comparison slider",
        defaultProps: {
            beforeImage: "",
            afterImage: "",
            beforeLabel: "Before",
            afterLabel: "After",
            height: 400,
            borderRadius: 12,
            showLabels: true,
            backgroundColor: "var(--theme-background)",
            labelBg: "rgba(0,0,0,0.5)",
            labelColor: "var(--theme-background)"
        },
        editableProps: {
            beforeImage: { type: "image", label: "Before Image", category: "content" },
            afterImage: { type: "image", label: "After Image", category: "content" },
            beforeLabel: { type: "string", label: "Before Label", category: "content" },
            afterLabel: { type: "string", label: "After Label", category: "content" },
            height: { type: "number", label: "Height (px)", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius", category: "styles" },
            showLabels: { type: "boolean", label: "Show Labels", category: "styles" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            labelBg: { type: "color", label: "Label Background", category: "styles" },
            labelColor: { type: "color", label: "Label Color", category: "styles" }
        }
    },

    {
        type: "CertificationBadge",
        category: "features",
        name: "Certification Badge",
        description: "Certification or achievement badge with icon",
        defaultProps: {
            icon: "⭐",
            title: "Certified",
            issuer: "Authority Name",
            year: "2024",
            backgroundColor: "var(--theme-background, var(--theme-background))",
            borderColor: "var(--theme-primary, var(--theme-primary))",
            textColor: "var(--theme-text, var(--theme-text))",
            accentColor: "var(--theme-primary, var(--theme-primary))"
        },
        editableProps: {
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            title: { type: "string", label: "Certification Name", category: "content" },
            issuer: { type: "string", label: "Issuing Authority", category: "content" },
            year: { type: "string", label: "Year Certified", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    {
        type: "AwardBadge",
        category: "features",
        name: "Award Badge",
        description: "Award or recognition badge with customizable styling",
        defaultProps: {
            icon: "🏆",
            title: "Award Title",
            year: "2024",
            backgroundColor: "linear-gradient(135deg, #fbbf24 0%, var(--theme-primary) 100%)",
            textColor: "var(--theme-text)",
            borderRadius: 12,
            shadow: "lg"
        },
        editableProps: {
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            title: { type: "string", label: "Award Title", category: "content" },
            year: { type: "string", label: "Year", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius", category: "styles" },
            shadow: { type: "select", label: "Shadow", options: ["none", "sm", "md", "lg", "xl"], category: "styles" }
        }
    },

    {
        type: "MediaMention",
        category: "features",
        name: "Media Mention",
        description: "Media outlet mention with logo and date",
        defaultProps: {
            logo: "",
            title: "Publication Title",
            date: "Jan 2024",
            excerpt: "Featured in...",
            link: "#",
            backgroundColor: "var(--theme-background, var(--theme-background))",
            borderColor: "var(--theme-border, var(--theme-border))",
            textColor: "var(--theme-text, var(--theme-text))"
        },
        editableProps: {
            logo: { type: "image", label: "Publication Logo", category: "content" },
            title: { type: "string", label: "Publication Title", category: "content" },
            date: { type: "string", label: "Publication Date", category: "content" },
            excerpt: { type: "string", label: "Excerpt", category: "content" },
            link: { type: "link", label: "Article Link", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    {
        type: "NumericalRating",
        category: "features",
        name: "Numerical Rating",
        description: "Large numerical rating display with breakdown",
        defaultProps: {
            rating: "4.9",
            totalReviews: "1000+",
            ratingColor: "#fbbf24",
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            breakdownVisible: true
        },
        editableProps: {
            rating: { type: "number", label: "Rating (0-5)", category: "content" },
            totalReviews: { type: "string", label: "Total Reviews", category: "content" },
            ratingColor: { type: "color", label: "Rating Color", category: "styles" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            breakdownVisible: { type: "boolean", label: "Show Breakdown", category: "styles" }
        }
    },

    {
        type: "TrustSignal",
        category: "features",
        name: "Trust Signal",
        description: "Trust signals display (users, uptime, etc)",
        defaultProps: {
            signals: [
                { icon: "✓", value: "10k+", label: "Happy Users" },
                { icon: "⚡", value: "99.9%", label: "Uptime" }
            ],
            layout: "horizontal",
            iconSize: "32",
            backgroundColor: "transparent",
            textColor: "var(--theme-text)",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            signals: { type: "array", label: "Signals", category: "content" },
            layout: { type: "select", label: "Layout", options: ["horizontal", "vertical"], category: "styles" },
            iconSize: { type: "number", label: "Icon Size", category: "styles" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    {
        type: "TestimonialCarousel",
        category: "features",
        name: "Testimonial Carousel",
        description: "Carousel of rotating testimonials",
        defaultProps: {
            items: [
                { text: "Great product!", author: "John Doe", role: "CEO", image: "" },
                { text: "Highly recommended!", author: "Jane Smith", role: "Founder", image: "" }
            ]
        },
        editableProps: {
            items: { type: "array", label: "Testimonials", category: "content" }
        }
    },

    {
        type: "FeatureTestimonial",
        category: "features",
        name: "Feature Testimonial",
        description: "Testimonial specific to a feature",
        defaultProps: {
            icon: "⭐",
            featureName: "Easy Setup",
            testimonial: "Setting up was incredibly fast!",
            author: "Alex Johnson",
            title: "Product Manager",
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            featureName: { type: "string", label: "Feature Name", category: "content" },
            testimonial: { type: "string", label: "Testimonial", category: "content" },
            author: { type: "string", label: "Author", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    {
        type: "ComplianceBadge",
        category: "features",
        name: "Compliance Badge",
        description: "Security/compliance badge with gradient",
        defaultProps: {
            icon: "🛡️",
            title: "SOC 2 Certified",
            description: "Enterprise security standards",
            backgroundColor: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
            borderColor: "#0284c7",
            textColor: "#0c4a6e"
        },
        editableProps: {
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            title: { type: "string", label: "Badge Title", category: "content" },
            description: { type: "string", label: "Description", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    {
        type: "RoleBasedTestimonial",
        category: "features",
        name: "Role-Based Testimonial",
        description: "Testimonial with role badge",
        defaultProps: {
            role: "Executive",
            roleIcon: "👔",
            quote: "This solution transformed our business.",
            author: "Sarah Williams",
            company: "Tech Corp",
            image: "",
            backgroundColor: "var(--theme-background)",
            roleColor: "var(--theme-primary)",
            textColor: "var(--theme-text)"
        },
        editableProps: {
            role: { type: "string", label: "Role", category: "content" },
            roleIcon: { type: "string", label: "Role Icon", category: "content" },
            quote: { type: "string", label: "Quote", category: "content" },
            author: { type: "string", label: "Author Name", category: "content" },
            company: { type: "string", label: "Company", category: "content" },
            image: { type: "image", label: "Author Image", category: "content" },
            backgroundColor: { type: "color", label: "Background", category: "styles" },
            roleColor: { type: "color", label: "Role Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    // ============================================================================
    // Section - Container for nested elements with responsive layout
    // ============================================================================
    {
        type: "Section",
        category: "layout",
        name: "Section",
        description: "Container element for organizing nested elements with grid/flex layout",
        defaultProps: {
            layout: {
                type: "grid",
                columns: { desktop: 2, tablet: 1, mobile: 1 },
                gap: 24
            },
            elements: []
        },
        editableProps: {
            layout: { type: "object", label: "Layout Configuration", category: "styles" },
            elements: { type: "array", label: "Nested Elements", category: "content" }
        }
    },

    // ============================================================================
    // TEAM COMPONENTS
    // ============================================================================
    {
        type: "TeamMember",
        category: "team",
        name: "Team Member Card",
        description: "Individual team member card with photo and info",
        defaultProps: {
            name: "Name",
            title: "Position",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            bio: "Brief bio",
            socialLinks: "linkedin:,twitter:",
            bgColor: "var(--theme-surface, var(--theme-background))",
            nameColor: "var(--theme-text, var(--theme-text))",
            titleColor: "var(--theme-primary, var(--theme-primary))",
            bioColor: "var(--theme-secondary-text, #6b7280)"
        },
        editableProps: {
            name: { type: "string", label: "Name", category: "content" },
            title: { type: "string", label: "Title/Position", category: "content" },
            image: { type: "image", label: "Photo", category: "content" },
            bio: { type: "string", label: "Bio", category: "content" },
            socialLinks: { type: "social-links", label: "Social Links", category: "content" },
            bgColor: { type: "color", label: "Card Background", category: "styles" },
            nameColor: { type: "color", label: "Name Color", category: "styles" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            bioColor: { type: "color", label: "Bio Color", category: "styles" }
        }
    },

    {
        type: "TeamProfile",
        category: "team",
        name: "Team Profile",
        description: "Detailed team member profile with full info",
        defaultProps: {
            name: "Name",
            title: "Position",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
            bio: "Detailed biography",
            email: "email@company.com",
            phone: "+1 (555) 000-0000",
            socialLinks: "linkedin:,twitter:",
            expertise: "Expertise 1, Expertise 2",
            bgColor: "var(--theme-surface, var(--theme-background))",
            accentColor: "var(--theme-primary, var(--theme-primary))",
            textColor: "var(--theme-text, var(--theme-text))",
            secondaryTextColor: "var(--theme-secondary-text, #6b7280)"
        },
        editableProps: {
            name: { type: "string", label: "Full Name", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            image: { type: "image", label: "Photo", category: "content" },
            bio: { type: "rich-text", label: "Biography", category: "content" },
            email: { type: "string", label: "Email", category: "content" },
            phone: { type: "string", label: "Phone", category: "content" },
            socialLinks: { type: "social-links", label: "Social Links", category: "content" },
            expertise: { type: "string", label: "Expertise (comma-separated)", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text Color", category: "styles" }
        }
    },

    {
        type: "LeadershipCard",
        category: "team",
        name: "Leadership Card",
        description: "Leadership hierarchy card with level badge",
        defaultProps: {
            name: "Name",
            title: "Position",
            level: "C-Suite",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            department: "Department",
            yearsInRole: "0",
            bgColor: "var(--theme-surface, var(--theme-background))",
            borderColor: "var(--theme-primary, var(--theme-primary))",
            levelBgColor: "var(--theme-primary-light, #fee2e2)",
            levelTextColor: "var(--theme-primary, var(--theme-primary))"
        },
        editableProps: {
            name: { type: "string", label: "Name", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            level: { type: "string", label: "Level/Rank", category: "content" },
            image: { type: "image", label: "Photo", category: "content" },
            department: { type: "string", label: "Department", category: "content" },
            yearsInRole: { type: "number", label: "Years in Role", category: "content" },
            bgColor: { type: "color", label: "Card Background", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            levelBgColor: { type: "color", label: "Level Badge Background", category: "styles" },
            levelTextColor: { type: "color", label: "Level Badge Text", category: "styles" }
        }
    },

    {
        type: "BoardMember",
        category: "team",
        name: "Board Member",
        description: "Board member profile card",
        defaultProps: {
            name: "Name",
            title: "Position",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
            specialization: "Specialization",
            company: "Company Name",
            bio: "Bio text",
            bgColor: "var(--theme-surface, var(--theme-background))",
            accentColor: "var(--theme-primary, var(--theme-primary))",
            textColor: "var(--theme-text, var(--theme-text))"
        },
        editableProps: {
            name: { type: "string", label: "Name", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            image: { type: "image", label: "Photo", category: "content" },
            specialization: { type: "string", label: "Specialization", category: "content" },
            company: { type: "string", label: "Company", category: "content" },
            bio: { type: "rich-text", label: "Bio", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    {
        type: "Advisor",
        category: "team",
        name: "Advisor Card",
        description: "Advisory board member card",
        defaultProps: {
            name: "Name",
            title: "Role",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            expertise: "Expertise areas",
            bgColor: "var(--theme-surface, var(--theme-background))",
            accentColor: "var(--theme-primary)",
            textColor: "var(--theme-text, var(--theme-text))"
        },
        editableProps: {
            name: { type: "string", label: "Name", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            image: { type: "image", label: "Photo", category: "content" },
            expertise: { type: "string", label: "Expertise", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    {
        type: "JobOpening",
        category: "team",
        name: "Job Opening Card",
        description: "Job posting card for hiring",
        defaultProps: {
            title: "Position Title",
            department: "Department",
            location: "Location",
            experience: "Experience level",
            description: "Job description",
            btnText: "Apply Now",
            btnLink: "/careers",
            bgColor: "var(--theme-surface, var(--theme-background))",
            accentColor: "var(--theme-primary, var(--theme-primary))",
            textColor: "var(--theme-text, var(--theme-text))"
        },
        editableProps: {
            title: { type: "string", label: "Job Title", category: "content" },
            department: { type: "string", label: "Department", category: "content" },
            location: { type: "string", label: "Location", category: "content" },
            experience: { type: "string", label: "Experience Required", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            btnText: { type: "string", label: "Button Text", category: "content" },
            btnLink: { type: "link", label: "Button Link", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    {
        type: "CultureValue",
        category: "team",
        name: "Culture Value",
        description: "Company culture value showcase",
        defaultProps: {
            icon: "🎯",
            title: "Value Title",
            description: "Value description",
            bgColor: "#eff6ff",
            accentColor: "var(--theme-primary)",
            textColor: "var(--theme-text, var(--theme-text))"
        },
        editableProps: {
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    {
        type: "GalleryImage",
        category: "team",
        name: "Gallery Image",
        description: "Workplace gallery image card",
        defaultProps: {
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
            title: "Image Title",
            category: "Category",
            borderRadius: "12",
            hoverEffect: "scale"
        },
        editableProps: {
            image: { type: "image", label: "Image", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            category: { type: "string", label: "Category", category: "content" },
            borderRadius: { type: "select", label: "Border Radius", options: ["0", "8", "12", "16", "24"], category: "styles" },
            hoverEffect: { type: "select", label: "Hover Effect", options: ["scale", "zoom", "brighten", "none"], category: "styles" }
        }
    },

    // ========================================================================
    // BLOG COMPONENTS
    // ========================================================================

    {
        type: "BlogListing",
        category: "blog",
        name: "Blog Listing",
        description: "List layout for blog posts with images and excerpts",
        defaultProps: {
            title: "Blog Post Title",
            excerpt: "Blog post excerpt goes here. This is where you add a brief summary of your article.",
            date: "Jan 20, 2026",
            author: "Author Name",
            readTime: "5 min read",
            category: "Tutorial",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
            bgColor: "var(--theme-background)",
            accentColor: "var(--theme-primary)",
            textColor: "var(--theme-text)",
            secondaryTextColor: "#6b7280"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            excerpt: { type: "rich-text", label: "Excerpt", category: "content" },
            date: { type: "string", label: "Date", category: "content" },
            author: { type: "string", label: "Author", category: "content" },
            readTime: { type: "string", label: "Read Time", category: "content" },
            category: { type: "string", label: "Category", category: "content" },
            image: { type: "image", label: "Image", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },

    {
        type: "BlogGrid",
        category: "blog",
        name: "Blog Grid",
        description: "Grid card layout for blog posts with hover effects",
        defaultProps: {
            title: "Blog Post Title",
            excerpt: "Blog post excerpt goes here.",
            date: "Jan 20, 2026",
            author: "Author Name",
            readTime: "5 min read",
            category: "Development",
            image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop",
            bgColor: "var(--theme-background)",
            accentColor: "#0284c7",
            textColor: "var(--theme-text)",
            secondaryTextColor: "#6b7280"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            excerpt: { type: "rich-text", label: "Excerpt", category: "content" },
            date: { type: "string", label: "Date", category: "content" },
            author: { type: "string", label: "Author", category: "content" },
            readTime: { type: "string", label: "Read Time", category: "content" },
            category: { type: "string", label: "Category", category: "content" },
            image: { type: "image", label: "Image", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },

    {
        type: "FeaturedArticles",
        category: "blog",
        name: "Featured Articles",
        description: "Prominent featured articles showcase with large images",
        defaultProps: {
            title: "Featured Article Title",
            excerpt: "Featured article excerpt with compelling story.",
            date: "Jan 20, 2026",
            author: "Featured Author",
            readTime: "12 min read",
            category: "Trends",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
            bgColor: "#374151",
            accentColor: "var(--theme-primary)",
            textColor: "var(--theme-text)",
            secondaryTextColor: "var(--theme-border)"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            excerpt: { type: "rich-text", label: "Excerpt", category: "content" },
            date: { type: "string", label: "Date", category: "content" },
            author: { type: "string", label: "Author", category: "content" },
            readTime: { type: "string", label: "Read Time", category: "content" },
            category: { type: "string", label: "Category", category: "content" },
            image: { type: "image", label: "Image", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },

    {
        type: "Categories",
        category: "blog",
        name: "Blog Categories",
        description: "Display blog categories with counts",
        defaultProps: {
            name: "Web Development",
            count: 32,
            icon: "🚀",
            bgColor: "#eff6ff",
            accentColor: "var(--theme-primary)",
            textColor: "var(--theme-text)"
        },
        editableProps: {
            name: { type: "string", label: "Category Name", category: "content" },
            count: { type: "number", label: "Article Count", category: "content" },
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    {
        type: "Tags",
        category: "blog",
        name: "Blog Tags",
        description: "Blog tag display for filtering",
        defaultProps: {
            name: "React",
            count: 15,
            bgColor: "var(--theme-background)",
            accentColor: "#0284c7",
            textColor: "var(--theme-text)"
        },
        editableProps: {
            name: { type: "string", label: "Tag Name", category: "content" },
            count: { type: "number", label: "Count", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    {
        type: "AuthorBio",
        category: "blog",
        name: "Author Bio",
        description: "Author information card with editable social links",
        defaultProps: {
            name: "Sarah Anderson",
            role: "Senior Full-Stack Developer",
            bio: "10+ years of experience in web development specializing in React, Node.js, and cloud technologies. Passionate about building scalable applications and mentoring developers.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
            socialLinks: [
                { platform: "twitter", url: "https://twitter.com", icon: "𝕯" },
                { platform: "linkedin", url: "https://linkedin.com", icon: "in" },
                { platform: "github", url: "https://github.com", icon: "⚙️" }
            ],
            bgColor: "var(--theme-border)",
            accentColor: "var(--theme-primary)",
            textColor: "var(--theme-text)",
            secondaryTextColor: "#6b7280"
        },
        editableProps: {
            name: { type: "string", label: "Name", category: "content" },
            role: { type: "string", label: "Role/Title", category: "content" },
            bio: { type: "rich-text", label: "Biography", category: "content" },
            image: { type: "image", label: "Avatar Image", category: "content" },
            socialLinks: { type: "array-of-objects", label: "Social Links", category: "content", fields: { platform: { type: "string", label: "Platform" }, url: { type: "string", label: "URL" }, icon: { type: "string", label: "Icon/Text" } } },
            bgColor: { type: "color", label: "Background Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text Color", category: "styles" }
        }
    },

    {
        type: "RelatedPosts",
        category: "blog",
        name: "Related Posts",
        description: "Display related blog posts",
        defaultProps: {
            title: "Related Post Title",
            image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&h=200&fit=crop",
            date: "Jan 15, 2026",
            category: "Related",
            bgColor: "var(--theme-background)",
            accentColor: "#059669",
            textColor: "var(--theme-text)",
            secondaryTextColor: "#6b7280"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            image: { type: "image", label: "Image", category: "content" },
            date: { type: "string", label: "Date", category: "content" },
            category: { type: "string", label: "Category", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },

    {
        type: "NewsletterArchive",
        category: "blog",
        name: "Newsletter Archive",
        description: "Newsletter signup and archive display",
        defaultProps: {
            title: "Subscribe to Our Newsletter",
            description: "Get the latest insights delivered to your inbox.",
            placeholder: "Enter your email address",
            buttonText: "Subscribe Now",
            bgColor: "#eff6ff",
            accentColor: "var(--theme-primary)",
            textColor: "var(--theme-text)"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            placeholder: { type: "string", label: "Input Placeholder", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },

    {
        type: "Whitepapers",
        category: "blog",
        name: "Whitepapers",
        description: "Whitepaper document cards for download",
        defaultProps: {
            title: "Whitepaper Title",
            description: "Whitepaper description and summary.",
            image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=400&h=300&fit=crop",
            downloadText: "Download PDF",
            bgColor: "var(--theme-background)",
            accentColor: "var(--theme-primary)",
            textColor: "var(--theme-text)",
            secondaryTextColor: "#6b7280"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            image: { type: "image", label: "Cover Image", category: "content" },
            downloadText: { type: "string", label: "Button Text", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },

    {
        type: "CaseStudyLibrary",
        category: "blog",
        name: "Case Study Library",
        description: "Case study and success story showcase",
        defaultProps: {
            title: "Case Study Title",
            company: "Company Name",
            industry: "Industry",
            result: "Result and impact metrics",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=400&fit=crop",
            bgColor: "#fef2f2",
            accentColor: "var(--theme-primary)",
            textColor: "var(--theme-text)",
            secondaryTextColor: "#6b7280"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            company: { type: "string", label: "Company", category: "content" },
            industry: { type: "string", label: "Industry", category: "content" },
            result: { type: "rich-text", label: "Result & Impact", category: "content" },
            image: { type: "image", label: "Image", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },

    {
        type: "Documentation",
        category: "blog",
        name: "Documentation",
        description: "Technical documentation and guides",
        defaultProps: {
            title: "Documentation Title",
            content: "Documentation content goes here. Provide comprehensive information.",
            icon: "📖",
            bgColor: "#ecfdf5",
            accentColor: "#059669",
            textColor: "var(--theme-text)",
            secondaryTextColor: "#6b7280"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            content: { type: "rich-text", label: "Content", category: "content" },
            icon: { type: "string", label: "Icon (emoji)", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },

    {
        type: "KnowledgeBase",
        category: "blog",
        name: "Knowledge Base",
        description: "Knowledge base articles and FAQs",
        defaultProps: {
            title: "Article Title",
            description: "Article description and summary.",
            difficulty: "Beginner",
            views: 1250,
            helpful: 892,
            bgColor: "var(--theme-background)",
            accentColor: "#6b7280",
            textColor: "var(--theme-text)",
            secondaryTextColor: "var(--theme-border)"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            difficulty: { type: "select", label: "Difficulty", options: ["Beginner", "Intermediate", "Advanced"], category: "content" },
            views: { type: "number", label: "Views", category: "content" },
            helpful: { type: "number", label: "Helpful Count", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },

    // ============================================================================
    // UTILITY COMPONENTS (FAQ, Accordion, Tabs, Timeline, etc.)
    // ============================================================================
    {
        type: "FAQ",
        category: "utility",
        name: "FAQ Item",
        description: "Frequently asked question with expandable answer",
        defaultProps: { question: "What is your product?", answer: "Our product helps businesses automate their workflows.", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            question: { type: "string", label: "Question", category: "content" },
            answer: { type: "rich-text", label: "Answer", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "Accordion",
        category: "utility",
        name: "Accordion Item",
        description: "Collapsible accordion section",
        defaultProps: { title: "Accordion Section", content: "Content details go here.", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            content: { type: "rich-text", label: "Content", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "Tabs",
        category: "utility",
        name: "Tabs",
        description: "Tab navigation with content panels",
        defaultProps: { tabs: [{ label: "Tab 1", content: "Content 1" }, { label: "Tab 2", content: "Content 2" }], bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            tabs: { type: "array-of-objects", label: "Tabs", category: "content", fields: { label: { type: "string", label: "Tab Label" }, content: { type: "string", label: "Tab Content" } } },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "Timeline",
        category: "utility",
        name: "Timeline Event",
        description: "Timeline event with date and description",
        defaultProps: { title: "Event Title", date: "Jan 2026", description: "Event description", icon: "🔵", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            title: { type: "string", label: "Event Title", category: "content" },
            date: { type: "string", label: "Date", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            icon: { type: "string", label: "Icon/Emoji", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "Roadmap",
        category: "utility",
        name: "Roadmap Item",
        description: "Product roadmap quarter with status",
        defaultProps: { quarter: "Q1 2026", status: "In Progress", items: ["Feature 1", "Feature 2"], bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            quarter: { type: "string", label: "Quarter", category: "content" },
            status: { type: "select", label: "Status", options: ["Completed", "In Progress", "Planned"], category: "content" },
            items: { type: "string-array", label: "Features/Items", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "ComparisonMatrix",
        category: "utility",
        name: "Comparison Feature",
        description: "Feature comparison row for pricing tables",
        defaultProps: { feature: "Feature", basic: "✓", pro: "✓", enterprise: "✓", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            feature: { type: "string", label: "Feature Name", category: "content" },
            basic: { type: "string", label: "Basic Plan", category: "content" },
            pro: { type: "string", label: "Pro Plan", category: "content" },
            enterprise: { type: "string", label: "Enterprise", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "Stats",
        category: "utility",
        name: "Stat Counter",
        description: "Statistics counter card",
        defaultProps: { number: "1000+", label: "Customers", icon: "👥", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            number: { type: "string", label: "Number/Value", category: "content" },
            label: { type: "string", label: "Label", category: "content" },
            icon: { type: "string", label: "Icon/Emoji", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    // {
    //     type: "ProgressBar",
    //     category: "utility",
    //     name: "Progress Bar",
    //     description: "Progress bar with percentage",
    //     defaultProps: { label: "Progress", percentage: 65, bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)" },
    //     editableProps: {
    //         label: { type: "string", label: "Label", category: "content" },
    //         percentage: { type: "number", label: "Percentage (0-100)", category: "content" },
    //         bgColor: { type: "color", label: "Background", category: "styles" },
    //         accentColor: { type: "color", label: "Bar Color", category: "styles" },
    //         textColor: { type: "color", label: "Text Color", category: "styles" }
    //     }
    // },
    {
        type: "Maps",
        category: "utility",
        name: "Maps",
        description: "Location map display",
        defaultProps: { location: "San Francisco, CA", address: "123 Tech Street, San Francisco, CA 94105", bgColor: "var(--theme-background)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            location: { type: "string", label: "Location Name", category: "content" },
            address: { type: "string", label: "Address", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "LocationFinder",
        category: "utility",
        name: "Location Finder",
        description: "Store/location finder card",
        defaultProps: { city: "San Francisco", distance: "0.5 mi", status: "Open", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            city: { type: "string", label: "City", category: "content" },
            distance: { type: "string", label: "Distance", category: "content" },
            status: { type: "select", label: "Status", options: ["Open", "Closed", "Coming Soon"], category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "EventSchedule",
        category: "utility",
        name: "Event Schedule",
        description: "Event with schedule details",
        defaultProps: { eventName: "Event Name", date: "Jan 15, 2026", time: "2:00 PM", location: "Virtual", bgColor: "var(--theme-background)", accentColor: "#0284c7", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            eventName: { type: "string", label: "Event Name", category: "content" },
            date: { type: "string", label: "Date", category: "content" },
            time: { type: "string", label: "Time", category: "content" },
            location: { type: "string", label: "Location", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "Calendar",
        category: "utility",
        name: "Calendar",
        description: "Interactive calendar display",
        defaultProps: { month: "January", year: "2026", bgColor: "var(--theme-background)", accentColor: "var(--theme-primary)", textColor: "var(--theme-text)", secondaryTextColor: "#6b7280" },
        editableProps: {
            month: { type: "string", label: "Month", category: "content" },
            year: { type: "string", label: "Year", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            secondaryTextColor: { type: "color", label: "Secondary Text", category: "styles" }
        }
    },
    {
        type: "Announcement",
        category: "utility",
        name: "Announcement",
        description: "Alert announcement message",
        defaultProps: { title: "Important Announcement", message: "This is an important message for our users.", type: "info", bgColor: "#eff6ff", accentColor: "#0284c7", textColor: "var(--theme-text)" },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            message: { type: "rich-text", label: "Message", category: "content" },
            type: { type: "select", label: "Type", options: ["info", "warning", "success", "error"], category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },
    {
        type: "MaintenanceMode",
        category: "utility",
        name: "Maintenance Mode",
        description: "Maintenance mode page",
        defaultProps: { title: "Under Maintenance", message: "We're performing scheduled maintenance. We'll be back soon!", estimatedTime: "30 minutes", bgColor: "var(--theme-text)", textColor: "var(--theme-text)" },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            message: { type: "rich-text", label: "Message", category: "content" },
            estimatedTime: { type: "string", label: "Estimated Time", category: "content" },
            bgColor: { type: "color", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },
    {
        type: "ComingSoon",
        category: "utility",
        name: "Coming Soon",
        description: "Coming soon landing page",
        defaultProps: { title: "Coming Soon", subtitle: "Something amazing is on the way", bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", textColor: "var(--theme-text)", ctaText: "Notify Me", ctaLink: "#" },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            subtitle: { type: "string", label: "Subtitle", category: "content" },
            ctaText: { type: "string", label: "CTA Button Text", category: "content" },
            ctaLink: { type: "string", label: "CTA Button Link", category: "content" },
            bgColor: { type: "string", label: "Background", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },
    {
        type: "MinimalFooter",
        category: "layout",
        name: "Minimal Footer",
        description: "Minimal responsive footer with logo, links, and copyright",
        defaultProps: {
            brandName: "Brand.io",
            badgeText: "B",
            badgeColor: "var(--theme-primary)",
            links: [
                { label: "Status: 99.9%", url: "#" },
                { label: "Privacy", url: "#" },
                { label: "Terms", url: "#" }
            ],
            copyright: "© 2024 Company Inc.",
            backgroundColor: "var(--theme-text)",
            borderColor: "rgba(255, 255, 255, 0.05)",
            textColor: "rgba(148, 163, 184, 0.8)"
        },
        editableProps: {
            brandName: { type: "string", label: "Brand Name", default: "Brand.io", category: "content" },
            badgeText: { type: "string", label: "Badge Text", default: "B", category: "content" },
            badgeColor: { type: "color", label: "Badge Color", default: "var(--theme-primary)", category: "styles" },
            links: { type: "array-of-objects", label: "Footer Links", category: "content", fields: { label: { type: "string", label: "Link Label" }, url: { type: "string", label: "URL" } } },
            copyright: { type: "string", label: "Copyright Text", default: "© 2024 Company Inc.", category: "content" },
            backgroundColor: { type: "color", label: "Background Color", default: "var(--theme-text)", category: "styles" },
            borderColor: { type: "color", label: "Border Color", default: "rgba(255, 255, 255, 0.05)", category: "styles" },
            textColor: { type: "color", label: "Text Color", default: "rgba(148, 163, 184, 0.8)", category: "styles" }
        }
    },
    {
        type: "StatsCard",
        category: "features",
        name: "Stats Card",
        description: "Individual stat card with icon, badge, and trend",
        defaultProps: {
            icon: "trophy",
            iconColor: "var(--theme-primary)",
            iconBg: "rgba(255, 255, 255, 0.0)",
            badge: "Success",
            badgeColor: "var(--theme-primary)",
            badgeBg: "rgba(22, 163, 74, 0.1)",
            statLabel: "Total Revenue",
            labelColor: "var(--theme-border)",
            statValue: "$1.2M",
            statValueColor: "#102216",
            backgroundColor: "var(--theme-background)",
            borderColor: "var(--theme-border)",
            borderRadius: "12",
            trend: "+12%",
            trendLabel: "vs LY",
            trendColor: "var(--theme-primary)",
            trendBackground: "rgba(34, 197, 94, 0.1)",
            trendIcon: "TrendingUp"
        },
        editableProps: {
            icon: { type: "string", label: "Icon Name", category: "content" },
            iconColor: { type: "color", label: "Icon Color", category: "styles" },
            iconBg: { type: "color", label: "Icon Background", category: "styles" },
            badge: { type: "string", label: "Badge Text", category: "content" },
            badgeColor: { type: "color", label: "Badge Color", category: "styles" },
            badgeBg: { type: "color", label: "Badge Background", category: "styles" },
            statLabel: { type: "string", label: "Label", category: "content" },
            labelColor: { type: "color", label: "Label Color", category: "styles" },
            statValue: { type: "string", label: "Value", category: "content" },
            statValueColor: { type: "color", label: "Value Color", category: "styles" },
            backgroundColor: { type: "color", label: "Card Background", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            borderRadius: { type: "select", label: "Border Radius", options: ["0", "8", "12", "16", "24", "32"], category: "styles" },
            trend: { type: "string", label: "Trend Value", category: "content" },
            trendLabel: { type: "string", label: "Trend Label", category: "content" },
            trendColor: { type: "color", label: "Trend Color", category: "styles" },
            trendBackground: { type: "color", label: "Trend Background", category: "styles" },
            trendIcon: { type: "icon", label: "Trend Icon", category: "content" }
        }
    },

    {
        type: "StatsSection",
        category: "features",
        name: "Stats Section",
        description: "Animated stats section with CountUp animation and dividers",
        defaultProps: {
            stats: [
                { number: 10, label: "Projects" },
                { number: 4, label: "Industries worked" },
                { number: 1000, label: "Leads in last 6 months", format: "k" },
                { number: 20000000, label: "Revenue Generated to clients", format: "cr" }
            ],
            backgroundColor: "var(--theme-text)",
            paddingY: 40,
            paddingX: 40,
            textColor: "var(--theme-text)",
            accentColor: "#FF8C00"
        },
        editableProps: {
            stats: { type: "array-of-objects", label: "Statistics", category: "content", fields: { number: { type: "number", label: "Number" }, label: { type: "string", label: "Label" }, format: { type: "select", label: "Format", options: ["default", "k", "cr"] } } },
            backgroundColor: { type: "color", label: "Background Color", default: "var(--theme-text)", category: "styles" },
            paddingY: { type: "number", label: "Vertical Padding (px)", default: 40, category: "styles" },
            paddingX: { type: "number", label: "Horizontal Padding (px)", default: 40, category: "styles" },
            textColor: { type: "color", label: "Text Color", default: "var(--theme-background)", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", default: "#FF8C00", category: "styles" }
        }
    },
    {
        type: "MissionSection",
        category: "features",
        name: "Mission Section",
        description: "Mission section with image, description, and stats cards",
        defaultProps: {
            imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVVPoAnTJkIYKntlhbwIR7xQsclLVel5wvvimjL_Qj67H2wpNSgdGZbud7m2wSCBslyaRtBgQyzS1lyBES4XE1cFMLDQm6MXt6jAwQolBJOv9bWxkIT2jumfikpD5czEuRMLhE4TWOaieI4GMX5ECGe-c5gqFZmfe1-rqGks9JNSVkf9Ld3VSuvAWlXA4c9w22i_floDdssFKOVDGIIW08TUe5htIhqhpVFgeL5bMdArg2qQLYujvKMhBiYzFqGFxJr0KhpL5AH8",
            title: "Our Mission",
            description: "To empower developers and organizations by abstracting the complexity of modern cloud infrastructure. We believe that scaling shouldn't be a bottleneck for progress.",
            description2: "Our platform is engineered for zero-latency operations, ensuring that your applications are always responsive, regardless of global load or data complexity.",
            stat1Value: "99.999%",
            stat1Label: "Global Uptime",
            stat2Value: "0.4ms",
            stat2Label: "Edge Latency",
            borderColor: "rgba(255, 255, 255, 0.05)",
            textColor: "var(--theme-text)",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            imageSrc: { type: "image", label: "Image URL", category: "media" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            description2: { type: "rich-text", label: "Description 2", category: "content" },
            stat1Value: { type: "string", label: "Stat 1 Value", category: "content" },
            stat1Label: { type: "string", label: "Stat 1 Label", category: "content" },
            stat2Value: { type: "string", label: "Stat 2 Value", category: "content" },
            stat2Label: { type: "string", label: "Stat 2 Label", category: "content" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },
    {
        type: "TimelineSection",
        category: "features",
        name: "Timeline Section",
        description: "Milestone timeline with alternating layout",
        defaultProps: {
            title: "Milestones of Innovation",
            subtitle: "The journey from a single server to global distribution.",
            milestones: [
                {
                    year: "2021",
                    title: "The Genesis",
                    description: "Founded with a vision to simplify Kubernetes clusters. Secured Seed funding from industry leaders.",
                    color: "var(--theme-primary)"
                },
                {
                    year: "2022",
                    title: "V2 Infrastructure Launch",
                    description: "Successfully handled our first billion requests. Expanded the team to 40 globally distributed engineers.",
                    color: "var(--theme-primary)"
                },
                {
                    year: "2023",
                    title: "Global Expansion",
                    description: "Opened edge regions in 12 new countries. Recognized as the fastest growing dev-tool of the year.",
                    color: "var(--theme-primary)"
                }
            ],
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            subtitleColor: "var(--theme-border)"
        },
        editableProps: {
            title: { type: "string", label: "Section Title", category: "content" },
            subtitle: { type: "string", label: "Section Subtitle", category: "content" },
            milestones: {
                type: "array-of-objects",
                label: "Milestones",
                category: "content",
                fields: {
                    year: { type: "string", label: "Year" },
                    title: { type: "string", label: "Title" },
                    description: { type: "string", label: "Description" },
                    color: { type: "color", label: "Color" },
                    image: { type: "image", label: "Image URL" },
                    imageAlt: { type: "string", label: "Image Alt Text" }
                }
            },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            subtitleColor: { type: "color", label: "Subtitle Color", category: "styles" }
        }
    },
    {
        type: "TeamSection",
        category: "features",
        name: "Team Section",
        description: "Team members grid with image, name, role, and social icons",
        defaultProps: {
            title: "The Minds Behind",
            subtitle: "Our diverse team of engineers, designers, and visionaries are dedicated to redefining infrastructure standards.",
            ctaText: "Join the Team",
            members: [
                {
                    name: "Marcus Chen",
                    role: "Founder & CEO",
                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2xmW7lmkRoXIiiul61ExruNj5-nWfe8cxmBIT_Js4XfyVBui6bx_Haz98NtbH0d6RP4pIJjkUdYG3udpA1Pwv2g1h3BYVtPxCSjXh5uebX0YEDHJk5Id8R6dby6aTbCDvzpLtH6VVugJXLzDDS3lEQW-YQNfMSzrT-k1qlhsQko83KOPo-vROWP4VraNm01T567U9C7E7jvbUIGDsU-WpsDP6_ASkt-xNfIbt61El3tfTdZU5QDsETF9n4lxnA-Q86kEAJgv8mCQ",
                    accentColor: "var(--theme-primary)"
                },
                {
                    name: "Elena Rodriguez",
                    role: "Head of Infrastructure",
                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoqyY4T45lY6cXrHzv4ZOQLp04BJrWHLZA2YyDEDXjn4s44qQnEo6-1t764yfOFI56w3LbEjZPL45Lb30ZaDHtEZZ8_oLffWQPKRd2AsimgiXHwuhHqJRm8CA9q3knXJtmcexOHqMAXhmXBZCNxAVuuiuhu0W1PShatYydTrfQnTEUpdjvTWVgwg1mnBVEpNHIjy-uBnFMx1P_iKwAjg1C-H7xi9Eyx1iKFusXRZ6hDJAS0_t5HgCF0x4ohit49bsLs1eKXF1nvtU",
                    accentColor: "var(--theme-primary)"
                },
                {
                    name: "Dr. Sarah Jenkins",
                    role: "Lead Systems Architect",
                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVVPoAnTJkIYKntlhbwIR7xQsclLVel5wvvimjL_Qj67H2wpNSgdGZbud7m2wSCBslyaRtBgQyzS1lyBES4XE1cFMLDQm6MXt6jAwQolBJOv9bWxkIT2jumfikpD5czEuRMLhE4TWOaieI4GMX5ECGe-c5gqFZmfe1-rqGks9JNSVkf9Ld3VSuvAWlXA4c9w22i_floDdssFKOVDGIIW08TUe5htIhqhpVFgeL5bMdArg2qQLYujvKMhBiYzFqGFxJr0KhpL5AH8",
                    accentColor: "var(--theme-primary)"
                },
                {
                    name: "Jordan Smith",
                    role: "VP of Engineering",
                    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2xmW7lmkRoXIiiul61ExruNj5-nWfe8cxmBIT_Js4XfyVBui6bx_Haz98NtbH0d6RP4pIJjkUdYG3udpA1Pwv2g1h3BYVtPxCSjXh5uebX0YEDHJk5Id8R6dby6aTbCDvzpLtH6VVugJXLzDDS3lEQW-YQNfMSzrT-k1qlhsQko83KOPo-vROWP4VraNm01T567U9C7E7jvbUIGDsU-WpsDP6_ASkt-xNfIbt61El3tfTdZU5QDsETF9n4lxnA-Q86kEAJgv8mCQ",
                    accentColor: "var(--theme-primary)"
                }
            ],
            backgroundColor: "var(--theme-text)",
            textColor: "var(--theme-text)"
        },
        editableProps: {
            title: { type: "string", label: "Section Title", category: "content" },
            subtitle: { type: "rich-text", label: "Section Subtitle", category: "content" },
            ctaText: { type: "string", label: "CTA Button Text", category: "content" },
            members: { type: "array-of-objects", label: "Team Members", category: "content", fields: { name: { type: "string", label: "Name" }, role: { type: "string", label: "Role" }, imageSrc: { type: "image", label: "Image URL" }, accentColor: { type: "color", label: "Accent Color" } } },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },
    {
        type: "PricingHeader",
        category: "pricing",
        name: "Pricing Header",
        description: "Header section for pricing page with badge, title, and description",
        defaultProps: {
            badge: "Flexible Pricing",
            title: "Choose your advantage.",
            description: "Scaling your infrastructure shouldn't be complicated.",
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            badgeColor: "rgba(255, 255, 255, 0.05)",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            badge: { type: "string", label: "Badge Text", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            badgeColor: { type: "color", label: "Badge Color", category: "styles" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "PricingCards",
        category: "pricing",
        name: "Pricing Cards",
        description: "Pricing plans with features, pricing, and CTA buttons",
        defaultProps: {
            plans: [],
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            primaryColor: "var(--theme-primary)",
            secondaryColor: "var(--theme-primary)",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            plans: { type: "array-of-objects", label: "Pricing Plans", category: "content", fields: { id: { type: "string", label: "Plan ID" }, name: { type: "string", label: "Plan Name" }, description: { type: "string", label: "Description" }, price: { type: "string", label: "Price" }, period: { type: "string", label: "Billing Period" }, featured: { type: "boolean", label: "Featured" }, ctaText: { type: "string", label: "Button Text" }, features: { type: "array-of-objects", label: "Features", fields: { text: { type: "string", label: "Feature Text" }, included: { type: "boolean", label: "Included" } } } } },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" },
            secondaryColor: { type: "color", label: "Secondary Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },
    {
        type: "PricingFAQ",
        category: "pricing",
        name: "Pricing FAQ",
        description: "Frequently asked questions section for pricing page",
        defaultProps: {
            title: "Frequently Asked Questions",
            subtitle: "Everything you need to know about the product and billing.",
            faqs: [],
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)"
        },
        editableProps: {
            title: { type: "string", label: "Section Title", category: "content" },
            subtitle: { type: "rich-text", label: "Section Subtitle", category: "content" },
            faqs: { type: "array-of-objects", label: "FAQ Items", category: "content", fields: { question: { type: "string", label: "Question" }, answer: { type: "rich-text", label: "Answer" } } },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" }
        }
    },
    {
        type: "ResourcesGrid",
        category: "features",
        name: "Resources Grid",
        description: "Grid of resource cards with images, categories, titles, descriptions, and links",
        defaultProps: {
            cards: [],
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            primaryColor: "var(--theme-primary)",
            secondaryColor: "var(--theme-primary)",
            accentColor: "var(--theme-primary)",
            loadMoreText: "Load More Articles"
        },
        editableProps: {
            cards: { type: "array-of-objects", label: "Resource Cards", category: "content", fields: { id: { type: "string", label: "Card ID" }, image: { type: "image", label: "Image URL" }, category: { type: "string", label: "Category" }, categoryColor: { type: "select", label: "Category Color", options: ["primary", "secondary", "accent"] }, title: { type: "string", label: "Title" }, description: { type: "string", label: "Description" }, link: { type: "url", label: "Link URL" }, linkText: { type: "string", label: "Link Text" } } },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" },
            secondaryColor: { type: "color", label: "Secondary Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            loadMoreText: { type: "string", label: "Load More Button Text", category: "content" }
        }
    },
    {
        type: "ContactForm",
        category: "features",
        name: "Contact Form",
        description: "Contact form with text inputs, email, subject dropdown, message textarea, and submit button",
        defaultProps: {
            badgeText: "Support Center",
            title: "Get in touch.",
            description: "Have questions? Our team of experts is here to help you scale your infrastructure.",
            submitText: "Send Message",
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            primaryColor: "var(--theme-primary)",
            secondaryColor: "var(--theme-primary)",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            badgeText: { type: "string", label: "Badge Text", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            submitText: { type: "string", label: "Submit Button Text", category: "content" },
            firstNameLabel: { type: "string", label: "First Name Label", category: "content" },
            firstNamePlaceholder: { type: "string", label: "First Name Placeholder", category: "content" },
            lastNameLabel: { type: "string", label: "Last Name Label", category: "content" },
            lastNamePlaceholder: { type: "string", label: "Last Name Placeholder", category: "content" },
            emailLabel: { type: "string", label: "Email Label", category: "content" },
            emailPlaceholder: { type: "string", label: "Email Placeholder", category: "content" },
            subjectLabel: { type: "string", label: "Subject Label", category: "content" },
            subjectOptions: { type: "string", label: "Subject Options (comma separated)", category: "content" },
            messageLabel: { type: "string", label: "Message Label", category: "content" },
            messagePlaceholder: { type: "string", label: "Message Placeholder", category: "content" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" },
            secondaryColor: { type: "color", label: "Secondary Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            inputBackgroundColor: { type: "color", label: "Input Background", category: "styles" },
            inputBorderColor: { type: "color", label: "Input Border", category: "styles" },
            inputTextColor: { type: "color", label: "Input Text Color", category: "styles" },
            inputPlaceholderColor: { type: "color", label: "Input Placeholder Color", category: "styles" }
        }
    },
    {
        type: "ContactDetails",
        category: "features",
        name: "Contact Details",
        description: "Support portal card, office addresses, and contact information",
        defaultProps: {
            supportPortalTitle: "Support Portal",
            supportPortalDescription: "Already a customer? Create a support ticket directly through our enterprise portal for priority response.",
            supportPortalLink: "#",
            supportPortalLinkText: "Open Ticket Portal",
            offices: [
                {
                    city: "San Francisco",
                    address: "100 Market St, Suite 300\nSan Francisco, CA 94105"
                },
                {
                    city: "London",
                    address: "20-22 Wenlock Road\nLondon, N1 7GU, UK"
                }
            ],
            contactLinks: [
                {
                    icon: "mail",
                    label: "Email",
                    value: "hello@vibrant.io",
                    href: "mailto:hello@vibrant.io"
                },
                {
                    icon: "share",
                    label: "Social",
                    value: "@vibrant_tech",
                    href: "#"
                },
                {
                    icon: "globe",
                    label: "LinkedIn",
                    value: "LinkedIn",
                    href: "#"
                }
            ],
            trustedByText: "Trusted by industry leaders",
            companies: ["TECHFLOW", "CLOUDCORE", "DATASTRAT"],
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            supportPortalTitle: { type: "string", label: "Support Portal Title", category: "content" },
            supportPortalDescription: { type: "rich-text", label: "Support Portal Description", category: "content" },
            supportPortalLink: { type: "link", label: "Support Portal Link", category: "content" },
            supportPortalLinkText: { type: "string", label: "Support Portal Link Text", category: "content" },
            offices: { type: "array-of-objects", label: "Offices", category: "content", fields: { city: { type: "string", label: "City" }, address: { type: "string", label: "Address" } } },
            contactLinks: { type: "array-of-objects", label: "Contact Links", category: "content", fields: { icon: { type: "string", label: "Icon" }, label: { type: "string", label: "Label" }, value: { type: "string", label: "Value" }, href: { type: "url", label: "Link URL" } } },
            trustedByText: { type: "string", label: "Trusted By Text", category: "content" },
            companies: { type: "array-of-objects", label: "Companies", category: "content", fields: { name: { type: "string", label: "Company Name" } } },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" },
            secondaryColor: { type: "color", label: "Secondary Color", category: "styles" },
            paddingY: { type: "string", label: "Padding Y (px)", category: "styles" },
            gap: { type: "string", label: "Gap (px)", category: "styles" },
            cardPadding: { type: "string", label: "Card Padding (px)", category: "styles" },
            cardRadius: { type: "string", label: "Card Radius (px)", category: "styles" },
            gridGap: { type: "string", label: "Grid Gap (px)", category: "styles" },
            sectionTitleSize: { type: "string", label: "Section Title Size", category: "styles" }
        }
    },

    // ============================================================================
    // PORTFOLIO COMPONENTS
    // ============================================================================
    {
        type: "PortfolioHero",
        category: "portfolio",
        name: "Portfolio Hero",
        description: "Portfolio hero section with badge, headline, description, image, and CTA buttons",
        defaultProps: {
            badge: "Available for new projects",
            badgeColor: "var(--theme-primary)",
            badgeBackgroundColor: "#EFF6FF",
            title: "Designing products with clarity and impact.",
            titleHighlightWord: "clarity",
            titleHighlightColor: "var(--theme-primary)",
            description: "I'm Alex, a product designer and developer. I help brands build clean, user-centric digital experiences that scale.",
            primaryButtonText: "View Projects",
            secondaryButtonText: "About Me",
            imageSrc: "",
            buttonPrimaryColor: "var(--theme-primary)",
            buttonPrimaryTextColor: "var(--theme-background)",
            buttonSecondaryColor: "var(--theme-background)",
            buttonSecondaryTextColor: "var(--theme-text)",
            buttonSecondaryBorderColor: "var(--theme-border)"
        },
        editableProps: {
            badge: { type: "string", label: "Badge Text", category: "content" },
            badgeColor: { type: "color", label: "Badge Color", category: "styles" },
            badgeBackgroundColor: { type: "color", label: "Badge Background", category: "styles" },
            title: { type: "string", label: "Main Title", category: "content" },
            titleHighlightWord: { type: "string", label: "Highlight Word in Title", category: "content" },
            titleHighlightColor: { type: "color", label: "Highlight Color", category: "styles" },
            description: { type: "rich-text", label: "Description", category: "content" },
            primaryButtonText: { type: "string", label: "Primary Button Text", category: "content" },
            secondaryButtonText: { type: "string", label: "Secondary Button Text", category: "content" },
            imageSrc: { type: "image", label: "Hero Image", category: "media" },
            buttonPrimaryColor: { type: "color", label: "Primary Button Background", category: "styles" },
            buttonPrimaryTextColor: { type: "color", label: "Primary Button Text Color", category: "styles" },
            buttonSecondaryColor: { type: "color", label: "Secondary Button Background", category: "styles" },
            buttonSecondaryTextColor: { type: "color", label: "Secondary Button Text Color", category: "styles" },
            buttonSecondaryBorderColor: { type: "color", label: "Secondary Button Border Color", category: "styles" }
        }
    },
    {
        type: "PortfolioCards",
        category: "portfolio",
        name: "Portfolio Cards",
        description: "Portfolio projects grid with images, titles, descriptions, and category badges",
        defaultProps: {
            sectionLabel: "Portfolio",
            sectionTitle: "Featured Work",
            viewAllText: "View all projects",
            viewAllLink: "#",
            projects: [],
            categoryBadgeColor: "var(--theme-primary)",
            categoryBadgeBackgroundColor: "#EFF6FF",
            yearBadgeColor: "var(--theme-border)",
            yearBadgeBackgroundColor: "var(--theme-border)",
            projectTitleColor: "var(--theme-text)",
            projectTitleHoverColor: "var(--theme-primary)",
            projectDescriptionColor: "var(--theme-border)",
            projectBackgroundColor: "var(--theme-border)",
            hoverOverlayColor: "var(--theme-primary)"
        },
        editableProps: {
            sectionLabel: { type: "string", label: "Section Label", category: "content" },
            sectionTitle: { type: "string", label: "Section Title", category: "content" },
            viewAllText: { type: "string", label: "View All Text", category: "content" },
            viewAllLink: { type: "link", label: "View All Link", category: "content" },
            projects: { type: "array-of-objects", label: "Projects", category: "content", fields: { id: { type: "string", label: "Project ID" }, title: { type: "string", label: "Title" }, description: { type: "string", label: "Description" }, category: { type: "string", label: "Category" }, year: { type: "string", label: "Year" }, imageSrc: { type: "image", label: "Image URL" }, link: { type: "url", label: "Project Link" } } },
            categoryBadgeColor: { type: "color", label: "Category Badge Color", category: "styles" },
            categoryBadgeBackgroundColor: { type: "color", label: "Category Badge Background", category: "styles" },
            yearBadgeColor: { type: "color", label: "Year Badge Color", category: "styles" },
            yearBadgeBackgroundColor: { type: "color", label: "Year Badge Background", category: "styles" },
            projectTitleColor: { type: "color", label: "Title Color", category: "styles" },
            projectTitleHoverColor: { type: "color", label: "Title Hover Color", category: "styles" },
            projectDescriptionColor: { type: "color", label: "Description Color", category: "styles" },
            projectBackgroundColor: { type: "color", label: "Image Background", category: "styles" },
            hoverOverlayColor: { type: "color", label: "Hover Overlay Color", category: "styles" }
        }
    },
    {
        type: "PortfolioAbout",
        category: "portfolio",
        name: "Portfolio About",
        description: "About section with description and statistics grid",
        defaultProps: {
            title: "Building with Purpose",
            description: "I believe great design is invisible. It's about solving problems and creating intuitive paths for users without adding unnecessary noise. With a background in both engineering and visual design, I bring a unique perspective to every project.",
            stats: [
                { value: "8+", label: "Years Experience" },
                { value: "50+", label: "Projects Launched" },
                { value: "12", label: "Design Awards" },
                { value: "99%", label: "Client Satisfaction" }
            ],
            titleColor: "var(--theme-text)",
            descriptionColor: "var(--theme-border)",
            statValueColor: "var(--theme-primary)",
            statLabelColor: "var(--theme-border)"
        },
        editableProps: {
            title: { type: "string", label: "Section Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            stats: { type: "array-of-objects", label: "Statistics", category: "content", fields: { value: { type: "string", label: "Value" }, label: { type: "string", label: "Label" } } },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            descriptionColor: { type: "color", label: "Description Color", category: "styles" },
            statValueColor: { type: "color", label: "Stat Value Color", category: "styles" },
            statLabelColor: { type: "color", label: "Stat Label Color", category: "styles" }
        }
    },
    {
        type: "PortfolioAboutDetails",
        category: "portfolio",
        name: "Portfolio About Details",
        description: "Detailed about section with profile image, current focus, story and experience timeline",
        defaultProps: {
            profileImageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkJYxMMPXDcBViF36WD8YWwFlRTYvYyGMSGOYDPgxIMxcqhr82dkqq-7Cen2t4cZYEcDFxGFcTqLFELCSrngD7wNyhpN313ZHQvS8Jz1o9LLMpNztQHJjMM6m-TobtQVjCBQSXKfgupmYr4cxbIPEZaYIvXDvoioYX7jP6Ka3yEPIfg53_qrG8xoNTuDeT0duDTjw7nWhXYW6o0t-Z_y5sVAVas3UDJGvvaaZejs-Tu8rTpYPTLAFH-yKTgJR_3D5b0DCLN-5g7a0",
            currentFocusTitle: "Current Focus",
            currentFocusDescription: "I am currently leading the design systems team at a fintech startup, focusing on accessibility and performance.",
            currentFocusLocation: "San Francisco, CA",
            currentFocusWebsite: "alexrivera.design",
            currentFocusWebsiteUrl: "https://alexrivera.design",
            storyTitle: "My Story",
            storyParagraphs: [
                { id: "story-1", text: "I started my journey as a self-taught developer over a decade ago." },
                { id: "story-2", text: "After graduating with a degree in Design, I spent the last 8 years bridging the gap between design and engineering." }
            ],
            experienceTitle: "Experience",
            experience: [
                { id: "exp-1", period: "2021 — Present", title: "Senior Product Designer", company: "Fintech Solutions Inc.", description: "Leading the evolution of the core dashboard product.", isActive: true },
                { id: "exp-2", period: "2018 — 2021", title: "Lead Frontend Developer", company: "Creative Agency Plus", description: "Developed high-end e-commerce solutions.", isActive: false }
            ],
            profileImageBorderColor: "var(--theme-border)",
            currentFocusBorderColor: "var(--theme-border)",
            currentFocusBackgroundColor: "var(--theme-background)",
            titleColor: "var(--theme-text)",
            descriptionColor: "var(--theme-border)",
            storyTextColor: "#475569",
            experiencePeriodColor: "var(--theme-primary)",
            experienceTitleColor: "var(--theme-text)",
            experienceCompanyColor: "var(--theme-border)",
            experienceDescriptionColor: "var(--theme-border)",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            profileImageSrc: { type: "url", label: "Profile Image URL", category: "content" },
            currentFocusTitle: { type: "string", label: "Current Focus Title", category: "content" },
            currentFocusDescription: { type: "string", label: "Current Focus Description", category: "content" },
            currentFocusLocation: { type: "string", label: "Location", category: "content" },
            currentFocusWebsite: { type: "string", label: "Website Name", category: "content" },
            currentFocusWebsiteUrl: { type: "url", label: "Website URL", category: "content" },
            storyTitle: { type: "string", label: "Story Section Title", category: "content" },
            storyParagraphs: { type: "array-of-objects", label: "Story Paragraphs", category: "content", fields: { id: { type: "string", label: "ID" }, text: { type: "string", label: "Paragraph Text" } } },
            experienceTitle: { type: "string", label: "Experience Section Title", category: "content" },
            experience: { type: "array-of-objects", label: "Experience Items", category: "content", fields: { id: { type: "string" }, period: { type: "string", label: "Period" }, title: { type: "string", label: "Job Title" }, company: { type: "string", label: "Company" }, description: { type: "string", label: "Description" }, isActive: { type: "boolean", label: "Active" } } },
            profileImageBorderColor: { type: "color", label: "Image Border Color", category: "styles" },
            currentFocusBorderColor: { type: "color", label: "Focus Card Border Color", category: "styles" },
            currentFocusBackgroundColor: { type: "color", label: "Focus Card Background", category: "styles" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            descriptionColor: { type: "color", label: "Description Color", category: "styles" },
            storyTextColor: { type: "color", label: "Story Text Color", category: "styles" },
            experiencePeriodColor: { type: "color", label: "Experience Period Color", category: "styles" },
            experienceTitleColor: { type: "color", label: "Experience Title Color", category: "styles" },
            experienceCompanyColor: { type: "color", label: "Experience Company Color", category: "styles" },
            experienceDescriptionColor: { type: "color", label: "Experience Description Color", category: "styles" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "PortfolioSkills",
        category: "portfolio",
        name: "Portfolio Skills",
        description: "Skills and tools grid section with icons",
        defaultProps: {
            sectionTitle: "My Skillset & Tools",
            sectionDescription: "A curated list of technologies and design tools I use to bring ideas to life.",
            skills: [
                { id: "skill-1", name: "JavaScript", icon: "javascript" },
                { id: "skill-2", name: "React.js", icon: "token" },
                { id: "skill-3", name: "Tailwind CSS", icon: "css" }
            ],
            titleColor: "var(--theme-text)",
            descriptionColor: "var(--theme-border)",
            skillNameColor: "#475569",
            skillCardBackgroundColor: "var(--theme-border)",
            skillCardBorderColor: "var(--theme-border)",
            skillCardHoverBorderColor: "#EFF6FF",
            skillIconColor: "var(--theme-primary)",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            sectionTitle: { type: "string", label: "Section Title", category: "content" },
            sectionDescription: { type: "string", label: "Section Description", category: "content" },
            skills: { type: "array-of-objects", label: "Skills", category: "content", fields: { id: { type: "string", label: "ID" }, name: { type: "string", label: "Skill Name" }, icon: { type: "string", label: "Icon Name" } } },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            descriptionColor: { type: "color", label: "Description Color", category: "styles" },
            skillNameColor: { type: "color", label: "Skill Name Color", category: "styles" },
            skillCardBackgroundColor: { type: "color", label: "Card Background", category: "styles" },
            skillCardBorderColor: { type: "color", label: "Card Border Color", category: "styles" },
            skillCardHoverBorderColor: { type: "color", label: "Card Hover Border Color", category: "styles" },
            skillIconColor: { type: "color", label: "Icon Color", category: "styles" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "PortfolioFooter",
        category: "portfolio",
        name: "Portfolio Footer",
        description: "Portfolio footer with branding, social links, and legal links",
        defaultProps: {
            logoText: "Alex Rivera",
            logoIcon: "blur_on",
            logoBackgroundColor: "#EFF6FF",
            logoIconColor: "var(--theme-primary)",
            tagline: "Crafting high-quality digital experiences from the Bay Area.",
            copyright: "© 2024 Alex Rivera. All rights reserved.",
            followLabel: "Follow",
            socialLinks: [
                { icon: "public", href: "#", label: "Website" },
                { icon: "alternate_email", href: "#", label: "Email" },
                { icon: "data_object", href: "#", label: "GitHub" }
            ],
            footerLinks: [
                { text: "Privacy", href: "#" },
                { text: "Terms", href: "#" }
            ],
            taglineColor: "var(--theme-border)",
            copyrightColor: "var(--theme-border)",
            followLabelColor: "var(--theme-text)",
            socialLinkColor: "var(--theme-border)",
            socialLinkHoverColor: "var(--theme-primary)",
            footerLinkColor: "var(--theme-border)",
            footerLinkHoverColor: "var(--theme-text)"
        },
        editableProps: {
            logoText: { type: "string", label: "Logo/Brand Name", category: "content" },
            logoIcon: { type: "string", label: "Logo Icon", category: "content" },
            logoBackgroundColor: { type: "color", label: "Logo Background", category: "styles" },
            logoIconColor: { type: "color", label: "Logo Icon Color", category: "styles" },
            tagline: { type: "string", label: "Tagline", category: "content" },
            copyright: { type: "string", label: "Copyright Text", category: "content" },
            followLabel: { type: "string", label: "Follow Label", category: "content" },
            socialLinks: { type: "array-of-objects", label: "Social Links", category: "content", fields: { icon: { type: "string", label: "Icon" }, href: { type: "url", label: "URL" }, label: { type: "string", label: "Label" } } },
            footerLinks: { type: "array-of-objects", label: "Footer Links", category: "content", fields: { text: { type: "string", label: "Link Text" }, href: { type: "url", label: "URL" } } },
            taglineColor: { type: "color", label: "Tagline Color", category: "styles" },
            copyrightColor: { type: "color", label: "Copyright Color", category: "styles" },
            followLabelColor: { type: "color", label: "Follow Label Color", category: "styles" },
            socialLinkColor: { type: "color", label: "Social Link Color", category: "styles" },
            socialLinkHoverColor: { type: "color", label: "Social Link Hover Color", category: "styles" },
            footerLinkColor: { type: "color", label: "Footer Link Color", category: "styles" },
            footerLinkHoverColor: { type: "color", label: "Footer Link Hover Color", category: "styles" }
        }
    },
    {
        type: "PortfolioCaseStudy",
        category: "portfolio",
        name: "Portfolio Case Study",
        description: "Detailed case study section with hero image, challenge/solution content and sidebar",
        defaultProps: {
            sectionLabel: "Case Study",
            category: "Fintech",
            caseStudyTitle: "Nexus Analytics: Visualizing Big Data for Modern Teams",
            caseStudyDescription: "A comprehensive dashboard ecosystem designed to transform complex raw data into actionable business intelligence.",
            heroImageSrc: "",
            challengeTitle: "The Challenge",
            challengeDescription: "Teams struggle with real-time data processing",
            challengePoints: [
                { id: "c1", text: "Complex data integration" },
                { id: "c2", text: "Real-time processing limitations" }
            ],
            solutionTitle: "The Solution",
            solutionDescription: "Built a comprehensive dashboard system",
            solutionPoints: [
                { id: "s1", text: "Modern architecture" },
                { id: "s2", text: "Real-time capabilities" }
            ],
            solutionImages: [],
            sidebarRole: "Lead Product Designer",
            sidebarTimeline: "6 Months (2023)",
            sidebarClient: "Nexus Analytics",
            sidebarTools: [
                { name: "Figma" },
                { name: "React" }
            ],
            ctaText: "Visit Live Site",
            ctaLink: "",
            sectionLabelColor: "var(--theme-primary)",
            titleColor: "var(--theme-text)",
            descriptionColor: "var(--theme-border)",
            challengeIconColor: "var(--theme-primary)",
            solutionIconColor: "var(--theme-primary)",
            sidebarBackgroundColor: "var(--theme-border)",
            sidebarBorderColor: "var(--theme-border)",
            sidebarLabelColor: "var(--theme-border)",
            ctaButtonColor: "var(--theme-text)",
            ctaButtonTextColor: "var(--theme-background)",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            sectionLabel: { type: "string", label: "Section Label", category: "content" },
            category: { type: "string", label: "Category", category: "content" },
            caseStudyTitle: { type: "string", label: "Case Study Title", category: "content" },
            caseStudyDescription: { type: "string", label: "Case Study Description", category: "content" },
            heroImageSrc: { type: "url", label: "Hero Image URL", category: "content" },
            challengeTitle: { type: "string", label: "Challenge Title", category: "content" },
            challengeDescription: { type: "string", label: "Challenge Description", category: "content" },
            challengePoints: { type: "array-of-objects", label: "Challenge Points", category: "content", fields: { id: { type: "string", label: "ID" }, text: { type: "string", label: "Point Text" } } },
            solutionTitle: { type: "string", label: "Solution Title", category: "content" },
            solutionDescription: { type: "string", label: "Solution Description", category: "content" },
            solutionPoints: { type: "array-of-objects", label: "Solution Points", category: "content", fields: { id: { type: "string", label: "ID" }, text: { type: "string", label: "Point Text" } } },
            solutionImages: { type: "array-of-objects", label: "Solution Images", category: "content", fields: { id: { type: "string", label: "ID" }, src: { type: "url", label: "Image URL" } } },
            sidebarRole: { type: "string", label: "Role", category: "content" },
            sidebarTimeline: { type: "string", label: "Timeline", category: "content" },
            sidebarClient: { type: "string", label: "Client", category: "content" },
            sidebarTools: { type: "array-of-objects", label: "Tools Used", category: "content", fields: { name: { type: "string", label: "Tool Name" } } },
            ctaText: { type: "string", label: "CTA Button Text", category: "content" },
            ctaLink: { type: "url", label: "CTA Link", category: "content" },
            sectionLabelColor: { type: "color", label: "Section Label Color", category: "styles" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            descriptionColor: { type: "color", label: "Description Color", category: "styles" },
            challengeIconColor: { type: "color", label: "Challenge Icon Color", category: "styles" },
            solutionIconColor: { type: "color", label: "Solution Icon Color", category: "styles" },
            sidebarBackgroundColor: { type: "color", label: "Sidebar Background", category: "styles" },
            sidebarBorderColor: { type: "color", label: "Sidebar Border Color", category: "styles" },
            sidebarLabelColor: { type: "color", label: "Sidebar Label Color", category: "styles" },
            ctaButtonColor: { type: "color", label: "CTA Button Color", category: "styles" },
            ctaButtonTextColor: { type: "color", label: "CTA Button Text Color", category: "styles" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "PortfolioContact",
        category: "portfolio",
        name: "Portfolio Contact",
        description: "Contact form section with fields and social links",
        defaultProps: {
            sectionTitle: "Let's work together",
            sectionDescription: "Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below and I'll get back to you within 24 hours.",
            formNamePlaceholder: "John Doe",
            formEmailPlaceholder: "john@example.com",
            formSubjectPlaceholder: "How can I help you?",
            formMessagePlaceholder: "Tell me about your project...",
            submitButtonText: "Send Message",
            connectElsewhereLabel: "Connect Elsewhere",
            socialLinks: [
                { id: "social-1", icon: "Globe", href: "https://example.com", label: "Website" },
                { id: "social-2", icon: "Github", href: "https://github.com", label: "GitHub" },
                { id: "social-3", icon: "Mail", href: "mailto:hello@example.com", label: "Email" }
            ],
            titleColor: "var(--theme-text)",
            descriptionColor: "var(--theme-border)",
            formLabelColor: "var(--theme-text)",
            formInputBackgroundColor: "var(--theme-border)",
            formInputBorderColor: "var(--theme-border)",
            formInputTextColor: "var(--theme-text)",
            formInputPlaceholderColor: "var(--theme-border)",
            formCardBackgroundColor: "var(--theme-background)",
            formCardBorderColor: "var(--theme-border)",
            submitButtonColor: "var(--theme-primary)",
            submitButtonTextColor: "var(--theme-background)",
            socialLinkColor: "var(--theme-border)",
            socialLinkHoverColor: "var(--theme-primary)",
            socialLinkBorderColor: "var(--theme-border)",
            dividerColor: "var(--theme-border)",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            sectionTitle: { type: "string", label: "Section Title", category: "content" },
            sectionDescription: { type: "string", label: "Section Description", category: "content" },
            formNamePlaceholder: { type: "string", label: "Name Field Placeholder", category: "content" },
            formEmailPlaceholder: { type: "string", label: "Email Field Placeholder", category: "content" },
            formSubjectPlaceholder: { type: "string", label: "Subject Field Placeholder", category: "content" },
            formMessagePlaceholder: { type: "string", label: "Message Field Placeholder", category: "content" },
            submitButtonText: { type: "string", label: "Submit Button Text", category: "content" },
            connectElsewhereLabel: { type: "string", label: "Connect Elsewhere Label", category: "content" },
            socialLinks: { type: "array-of-objects", label: "Social Links", category: "content", fields: { id: { type: "string" }, icon: { type: "string" }, href: { type: "url" }, label: { type: "string" } } },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            descriptionColor: { type: "color", label: "Description Color", category: "styles" },
            formLabelColor: { type: "color", label: "Form Label Color", category: "styles" },
            formInputBackgroundColor: { type: "color", label: "Input Background Color", category: "styles" },
            formInputBorderColor: { type: "color", label: "Input Border Color", category: "styles" },
            formInputTextColor: { type: "color", label: "Input Text Color", category: "styles" },
            formInputPlaceholderColor: { type: "color", label: "Input Placeholder Color", category: "styles" },
            formCardBackgroundColor: { type: "color", label: "Card Background Color", category: "styles" },
            formCardBorderColor: { type: "color", label: "Card Border Color", category: "styles" },
            submitButtonColor: { type: "color", label: "Submit Button Color", category: "styles" },
            submitButtonTextColor: { type: "color", label: "Submit Button Text Color", category: "styles" },
            socialLinkColor: { type: "color", label: "Social Link Color", category: "styles" },
            socialLinkHoverColor: { type: "color", label: "Social Link Hover Color", category: "styles" },
            socialLinkBorderColor: { type: "color", label: "Social Link Border Color", category: "styles" },
            dividerColor: { type: "color", label: "Divider Color", category: "styles" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },

    // TechNova Components
    {
        type: "TechInnovationHeader",
        category: "tech-innovation",
        name: "TechNova Header",
        description: "Sticky header with navigation, search, and CTA button",
        defaultProps: {
            logoText: "TechNova",
            navLinks: [
                { label: "Solutions", href: "#" },
                { label: "Innovation Hub", href: "#" },
                { label: "About", href: "#" },
                { label: "Success Stories", href: "#" }
            ],
            searchPlaceholder: "Search insights...",
            ctaButtonText: "Contact",
            profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX9fw2IQU6dfm9A-851rf5Rhqii04DqPXIxEkPvADANgDJlW3H1pbAMGkzZLYcL7Hke21W-xJLVohsEh5vNru2gVOpDnV-t7LG4lXjv08VUpcKynx__GbqCPi03nCVCVYmEDvTL1NsGtsktIVq87b1tiGXedVcFAobuAsTtZhfM3yPkrR4XI3fsPImuwRbJlFUoDznyUDg3Q1S9ZLgYMzA84-kLc3koCOrSYStda9My8htoqQBnwzl3Qv-dUz0KRbAd7nAvjJcHnQ"
        },
        editableProps: {
            logoText: { type: "string", label: "Logo Text", category: "content" },
            searchPlaceholder: { type: "string", label: "Search Placeholder", category: "content" },
            ctaButtonText: { type: "string", label: "CTA Button Text", category: "content" },
            profileImage: { type: "image", label: "Profile Image", category: "content" },
            navLinks: {
                type: "array-of-objects",
                label: "Navigation Links",
                category: "content",
                fields: {
                    label: { type: "string", label: "Link Label" },
                    href: { type: "link", label: "Link URL" }
                }
            }
        }
    },

    {
        type: "TechInnovationHero",
        category: "tech-innovation",
        name: "TechNova Hero Section",
        description: "Large hero section with badge, title, description, and CTA buttons",
        defaultProps: {
            badge: "Now Live: TechNova 2.0",
            mainTitle: "Scaling Innovation with TechNova",
            mainTitleHighlight: "Innovation",
            description: "Precision Engineering for the Modern Enterprise. We provide cutting-edge infrastructure solutions to scale your digital ecosystem with reliability, security, and velocity.",
            primaryButtonText: "Get Started",
            primaryButtonLink: "#contact",
            secondaryButtonText: "Learn More",
            secondaryButtonLink: "#about",
            heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0"
        },
        editableProps: {
            badge: { type: "string", label: "Badge Text", category: "content" },
            mainTitle: { type: "string", label: "Main Title", category: "content" },
            mainTitleHighlight: { type: "string", label: "Title Highlight", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            primaryButtonText: { type: "string", label: "Primary Button Text", category: "content" },
            primaryButtonLink: { type: "link", label: "Primary Button Link", category: "content" },
            secondaryButtonText: { type: "string", label: "Secondary Button Text", category: "content" },
            secondaryButtonLink: { type: "link", label: "Secondary Button Link", category: "content" },
            heroImage: { type: "image", label: "Hero Image", category: "content" }
        }
    },

    {
        type: "TechInnovationSector",
        category: "tech-innovation",
        name: "TechNova Sector Showcase",
        description: "Two-column sector showcase with testimonial and floating stats",
        defaultProps: {
            sectorNumber: "01",
            sectorName: "Finance",
            title: "The Future of",
            titleHighlight: "FinTech",
            description: "Architecting secure, high-velocity trading infrastructures and decentralized ledger systems for the world's leading financial institutions.",
            testimonial: "TechNova's low-latency architecture reduced our execution time by 42ms, redefining our competitive edge in global markets.",
            testimonialAuthor: "Chief Tech Officer, Global Equity",
            buttonText: "Explore Infrastructure",
            backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0"
        },
        editableProps: {
            sectorNumber: { type: "string", label: "Sector Number", category: "content" },
            sectorName: { type: "string", label: "Sector Name", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Title Highlight", category: "content" },
            description: { type: "string", label: "Description", category: "content" },
            testimonial: { type: "string", label: "Testimonial", category: "content" },
            testimonialAuthor: { type: "string", label: "Author", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            backgroundImage: { type: "image", label: "Background Image", category: "content" },
            interfaceTags: {
                type: "array-of-objects",
                label: "Interface Tags",
                category: "content",
                fields: {
                    label: { type: "string", label: "Tag Label" },
                    top: { type: "string", label: "Top Position" },
                    left: { type: "string", label: "Left Position" },
                    bottom: { type: "string", label: "Bottom Position" },
                    right: { type: "string", label: "Right Position" }
                }
            },
            floatingStats: {
                type: "object",
                label: "Floating Stats",
                category: "content",
                fields: {
                    stat: { type: "string", label: "Stat Value" },
                    label: { type: "string", label: "Stat Label" },
                    description: { type: "string", label: "Description" }
                }
            }
        }
    },

    {
        type: "TechInnovationStats",
        category: "tech-innovation",
        name: "TechNova Stats Grid",
        description: "4-column stats grid showcasing key metrics",
        defaultProps: {
            stats: [
                { label: "Active Clients", value: "500+" },
                { label: "Projects Delivered", value: "1.2k" },
                { label: "Global Offices", value: "15" },
                { label: "Expert Engineers", value: "300+" }
            ]
        },
        editableProps: {
            stats: {
                type: "array-of-objects",
                label: "Statistics",
                category: "content",
                fields: {
                    label: { type: "string", label: "Stat Label" },
                    value: { type: "string", label: "Stat Value" }
                }
            }
        }
    },

    {
        type: "TechInnovationFeatures",
        category: "tech-innovation",
        name: "TechNova Features Section",
        description: "3-column feature cards with images and descriptions",
        defaultProps: {
            sectionLabel: "PRECISION TECH SOLUTIONS",
            title: "Precision Tech",
            titleHighlight: "Solutions",
            description: "Driving digital transformation through expert engineering and strategic innovation designed for the next generation of global industry.",
            features: [
                {
                    icon: "cloud",
                    title: "Cloud Infrastructure",
                    description: "Scalable cloud environments built for high-performance enterprise workloads and 99.9% uptime."
                },
                {
                    icon: "psychology",
                    title: "AI Automation",
                    description: "Intelligent workflows designed to minimize manual overhead and maximize operational intelligence."
                },
                {
                    icon: "security",
                    title: "Cybersecurity",
                    description: "Robust security frameworks to protect your most valuable assets with zero-trust architecture."
                }
            ]
        },
        editableProps: {
            sectionLabel: { type: "string", label: "Section Label", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Title Highlight", category: "content" },
            description: { type: "string", label: "Description", category: "content" },
            features: {
                type: "array-of-objects",
                label: "Features",
                category: "content",
                fields: {
                    icon: { type: "string", label: "Icon Name" },
                    title: { type: "string", label: "Title" },
                    description: { type: "string", label: "Description" },
                    image: { type: "image", label: "Feature Image" }
                }
            }
        }
    },

    {
        type: "TechInnovationOfferings",
        category: "tech-innovation",
        name: "TechNova Offerings",
        description: "3-card service offerings with feature lists",
        defaultProps: {
            sectionLabel: "Our Core Offerings",
            title: "Enterprise-grade capabilities for scaling businesses",
            description: "Strategic technology solutions designed by industry experts to drive efficiency, security, and exponential growth.",
            offerings: [
                {
                    icon: "terminal",
                    title: "Custom Software",
                    description: "Bespoke enterprise applications tailored to your unique operational requirements and market goals.",
                    features: [
                        "Full-stack Development",
                        "Legacy System Migration",
                        "UI/UX Design Systems",
                        "Microservices Architecture"
                    ]
                },
                {
                    icon: "cloud_queue",
                    title: "Cloud Infrastructure",
                    description: "Robust, secure, and highly available cloud environments that scale seamlessly with your growing demands.",
                    features: [
                        "Multi-cloud Strategy",
                        "Serverless Optimization",
                        "DevOps & CI/CD",
                        "24/7 Managed Security"
                    ]
                },
                {
                    icon: "psychology",
                    title: "Artificial Intelligence",
                    description: "Transformative machine learning models and predictive analytics to unlock value from your data.",
                    features: [
                        "Predictive Analytics",
                        "Natural Language Processing",
                        "Automated Workflows",
                        "AI Governance & Ethics"
                    ]
                }
            ]
        },
        editableProps: {
            sectionLabel: { type: "string", label: "Section Label", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            offerings: {
                type: "array-of-objects",
                label: "Service Offerings",
                category: "content",
                fields: {
                    icon: { type: "string", label: "Icon Name" },
                    title: { type: "string", label: "Title" },
                    description: { type: "string", label: "Description" },
                    features: { type: "string-array", label: "Feature List" }
                }
            }
        }
    },

    {
        type: "TechInnovationCTA",
        category: "tech-innovation",
        name: "TechNova CTA Section",
        description: "Call-to-action section with two buttons",
        defaultProps: {
            title: "Ready to redefine your digital horizon?",
            primaryButtonText: "Launch Project",
            primaryButtonLink: "#contact",
            secondaryButtonText: "View Case Studies",
            secondaryButtonLink: "#case-studies"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            primaryButtonText: { type: "string", label: "Primary Button Text", category: "content" },
            primaryButtonLink: { type: "link", label: "Primary Button Link", category: "content" },
            secondaryButtonText: { type: "string", label: "Secondary Button Text", category: "content" },
            secondaryButtonLink: { type: "link", label: "Secondary Button Link", category: "content" }
        }
    },

    {
        type: "TechInnovationFooter",
        category: "tech-innovation",
        name: "TechNova Footer",
        description: "Footer with branding, links, and social media",
        defaultProps: {
            logoText: "TechNova",
            tagline: "Next-generation innovation for world-class enterprises. Built on precision, speed, and security.",
            sections: [
                {
                    title: "Solutions",
                    links: [
                        { label: "Enterprise Cloud", href: "#" },
                        { label: "AI & ML Ops", href: "#" },
                        { label: "Cybersecurity Hub", href: "#" },
                        { label: "Edge Computing", href: "#" }
                    ]
                },
                {
                    title: "Company",
                    links: [
                        { label: "Our Vision", href: "#" },
                        { label: "Global Presence", href: "#" },
                        { label: "Careers", href: "#" },
                        { label: "Press Room", href: "#" }
                    ]
                }
            ],
            socialLinks: [
                { icon: "public", href: "#" },
                { icon: "share", href: "#" },
                { icon: "alternate_email", href: "#" }
            ],
            copyright: "© 2024 TechNova Solutions. All rights reserved.",
            footerLinks: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Settings", href: "#" }
            ]
        },
        editableProps: {
            logoText: { type: "string", label: "Logo Text", category: "content" },
            tagline: { type: "string", label: "Tagline", category: "content" },
            copyright: { type: "string", label: "Copyright Text", category: "content" },
            sections: {
                type: "array-of-objects",
                label: "Footer Sections",
                category: "content",
                fields: {
                    title: { type: "string", label: "Section Title" },
                    links: {
                        type: "array-of-objects",
                        label: "Links",
                        fields: {
                            label: { type: "string", label: "Link Label" },
                            href: { type: "link", label: "Link URL" }
                        }
                    }
                }
            },
            socialLinks: {
                type: "array-of-objects",
                label: "Social Links",
                category: "content",
                fields: {
                    icon: { type: "string", label: "Icon Name" },
                    href: { type: "link", label: "Link URL" }
                }
            },
            footerLinks: {
                type: "array-of-objects",
                label: "Bottom Links",
                category: "content",
                fields: {
                    label: { type: "string", label: "Link Label" },
                    href: { type: "link", label: "Link URL" }
                }
            }
        }
    },

    // TechInnovation Infrastructure Hero
    {
        type: "TechInnovationInfraHero",
        name: "Infrastructure Hero",
        category: "tech-innovation",
        description: "Hero section for infrastructure pages with stats and metrics card",
        defaultProps: {
            badge: "Infrastructure",
            title: "Next-Gen",
            titleHighlight: "Cloud Core.",
            description: "High-performance cloud infrastructure engineered for the modern enterprise. Scale without limits, secure by design, and optimized for global velocity.",
            backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0",
            stats: [
                { value: "99.999%", label: "Uptime SLA" },
                { value: "<2ms", label: "Global Latency" }
            ],
            metricsTitle: "Live Metrics",
            metrics: [
                { label: "Resource Utilization", value: 85 },
                { label: "Node Distribution: Optimal", value: 92 }
            ]
        },
        editableProps: {
            badge: { type: "string", label: "Badge Text", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Title Highlight", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            backgroundImage: { type: "image", label: "Background Image", category: "content" },
            metricsTitle: { type: "string", label: "Metrics Card Title", category: "content" },
            stats: {
                type: "array-of-objects",
                label: "Hero Stats",
                category: "content",
                fields: {
                    value: { type: "string", label: "Stat Value" },
                    label: { type: "string", label: "Stat Label" }
                }
            },
            metrics: {
                type: "array-of-objects",
                label: "Metrics List",
                category: "content",
                fields: {
                    label: { type: "string", label: "Metric Label" },
                    value: { type: "number", label: "Percentage (0-100)" }
                }
            }
        }
    },

    // TechInnovation Stack Cards
    {
        type: "TechInnovationStackCards",
        name: "Infrastructure Stack Cards",
        category: "tech-innovation",
        description: "Horizontal scrolling cards showing infrastructure stack",
        defaultProps: {
            title: "Infrastructure",
            titleHighlight: "Stack.",
            cards: [
                {
                    icon: "layers",
                    title: "Multi-Region Fabric",
                    description: "Redundant data centers spanning 24 global regions with automated failover and geo-proximity routing.",
                    features: ["Low-latency interconnects", "Anycast network distribution"]
                },
                {
                    icon: "memory",
                    title: "Compute Elasticity",
                    description: "Autoscaling groups that respond to demand spikes in milliseconds, ensuring cost-efficiency and performance.",
                    features: ["Bare metal performance", "Container orchestration"]
                },
                {
                    icon: "database",
                    title: "Unified Storage",
                    description: "High-IOPS block storage and petabyte-scale object storage with built-in encryption and redundancy.",
                    features: ["SSD-backed tiers", "Global data replication"]
                },
                {
                    icon: "router",
                    title: "Edge Acceleration",
                    description: "Content delivery network optimized for dynamic content and heavy enterprise API traffic.",
                    features: ["300+ Edge locations", "Real-time compression"]
                }
            ]
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Title Highlight", category: "content" },
            cards: {
                type: "array-of-objects",
                label: "Stack Cards",
                category: "content",
                fields: {
                    icon: { type: "string", label: "Icon Name (layers/memory/database/router)" },
                    title: { type: "string", label: "Card Title" },
                    description: { type: "string", label: "Card Description" },
                    features: { type: "string-array", label: "Features List" }
                }
            }
        }
    },

    // TechInnovation Security Section
    {
        type: "TechInnovationSecurity",
        name: "Security Section",
        category: "tech-innovation",
        description: "Security showcase with stats and threat visualization",
        defaultProps: {
            title: "Security First. By Architecture.",
            description: "Our cloud isn't just fast—it's fortified. We implement Zero-Trust models at every layer, from the physical hardware to the application runtime.",
            stats: [
                { value: "AES-256", label: "Encryption Standard" },
                { value: "24/7", label: "SOC Monitoring" }
            ],
            chartTitle: "Real-time Attack Surface Analysis",
            chartBars: [40, 70, 90, 55, 80, 35, 65]
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            chartTitle: { type: "string", label: "Chart Title", category: "content" },
            stats: {
                type: "array-of-objects",
                label: "Security Stats",
                category: "content",
                fields: {
                    value: { type: "string", label: "Stat Value" },
                    label: { type: "string", label: "Stat Label" }
                }
            }
        }
    },

    // TechInnovation SLA Section
    {
        type: "TechInnovationSLA",
        name: "SLA Comparison",
        category: "tech-innovation",
        description: "SLA comparison table with quote",
        defaultProps: {
            title: "Enterprise",
            titleHighlight: "SLA.",
            description: "Transparent, contractually guaranteed performance levels for global enterprise partners.",
            quote: "Precision is our baseline. Excellence is our deliverable.",
            quoteAuthor: "TechNova Engineering Team",
            tableRows: [
                { metric: "Network Availability", standard: "99.9%", enterprise: "99.999%" },
                { metric: "Support Response", standard: "< 1 Hour", enterprise: "< 15 Mins" },
                { metric: "Packet Delivery", standard: "99%", enterprise: "99.99%" },
                { metric: "Managed Backups", standard: "Daily", enterprise: "Real-time" }
            ]
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Title Highlight", category: "content" },
            description: { type: "string", label: "Description", category: "content" },
            quote: { type: "string", label: "Quote Text", category: "content" },
            quoteAuthor: { type: "string", label: "Quote Author", category: "content" },
            tableRows: {
                type: "array-of-objects",
                label: "SLA Table Rows",
                category: "content",
                fields: {
                    metric: { type: "string", label: "Metric Name" },
                    standard: { type: "string", label: "Standard Tier" },
                    enterprise: { type: "string", label: "Enterprise+ Tier" }
                }
            }
        }
    },

    // TechInnovation Careers Hero
    {
        type: "TechInnovationCareersHero",
        name: "Careers Hero",
        category: "tech-innovation",
        description: "Centered hero section for careers page",
        defaultProps: {
            badge: "Join the Future",
            title: "Build the",
            titleHighlight: "Next Era",
            description: "We're looking for visionaries, engineers, and disruptors to scale global innovation with precision and purpose.",
            buttonText: "View Openings",
            buttonLink: "#openings"
        },
        editableProps: {
            badge: { type: "string", label: "Badge Text", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Title Highlight", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            buttonLink: { type: "link", label: "Button Link", category: "content" }
        }
    },

    // TechInnovation Culture Gallery
    {
        type: "TechInnovationCultureGallery",
        name: "Culture Gallery",
        category: "tech-innovation",
        description: "Masonry image gallery showcasing company culture",
        defaultProps: {
            sectionLabel: "Our Culture",
            title: "Life at TechNova",
            images: [
                { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX9fw2IQU6dfm9A-851rf5Rhqii04DqPXIxEkPvADANgDJlW3H1pbAMGkzZLYcL7Hke21W-xJLVohsEh5vNru2gVOpDnV-t7LG4lXjv08VUpcKynx__GbqCPi03nCVCVYmEDvTL1NsGtsktIVq87b1tiGXedVcFAobuAsTtZhfM3yPkrR4XI3fsPImuwRbJlFUoDznyUDg3Q1S9ZLgYMzA84-kLc3koCOrSYStda9My8htoqQBnwzl3Qv-dUz0KRbAd7nAvjJcHnQ", title: "Collaboration Hub", aspectRatio: "tall" },
                { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzI6IwZAMpVErnI6PczyQu-kQSJG8Dy06seN3-sImuVpqpZtFSZEyg3eA-qdhpr_yAzqJLuwvFO5qBOsUW003jci76NCAHDjh8BpW2gMCD_LtHbIZTrhZp1Ku3isG3QuUWkY4aZ-Qsu2IWWWvHLee2qg2A7veopSCHYkpbQRsdULQ3Nc3mDfMao6F9VoXRWzXQ3OqvJwfl4JY77jzcwSS1kiBnDGx8DLguqFzE2k2PAo93mybMBKagVRdulMz5cIK1-s8V6VRtsw", title: "Modern Workspaces", aspectRatio: "square" }
            ]
        },
        editableProps: {
            sectionLabel: { type: "string", label: "Section Label", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            images: {
                type: "array-of-objects",
                label: "Gallery Images",
                category: "content",
                fields: {
                    image: { type: "image", label: "Image URL" },
                    title: { type: "string", label: "Image Title" },
                    aspectRatio: { type: "select", label: "Aspect Ratio", options: ["square", "tall"] }
                }
            }
        }
    },

    // TechInnovation Global Impact
    {
        type: "TechInnovationGlobalImpact",
        name: "Global Impact",
        category: "tech-innovation",
        description: "Global presence section with stats and globe visualization",
        defaultProps: {
            sectionLabel: "Global Scale",
            title: "Our Impact Across 15+ Regions",
            description: "Join a team that handles 1.2k+ projects annually. We pulse through the digital veins of 500+ global enterprises, ensuring security and innovation in every packet.",
            stats: [
                { value: "500+", label: "Active Clients" },
                { value: "300+", label: "Expert Engineers" }
            ],
            bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0"
        },
        editableProps: {
            sectionLabel: { type: "string", label: "Section Label", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            bgImage: { type: "image", label: "Background Image", category: "content" },
            stats: {
                type: "array-of-objects",
                label: "Impact Stats",
                category: "content",
                fields: {
                    value: { type: "string", label: "Stat Value" },
                    label: { type: "string", label: "Stat Label" }
                }
            }
        }
    },

    // TechInnovation Job Openings
    {
        type: "TechInnovationJobOpenings",
        name: "Job Openings",
        category: "tech-innovation",
        description: "Job listings section with apply functionality",
        defaultProps: {
            sectionLabel: "Opportunities",
            title: "Open Roles",
            jobs: [
                { department: "Engineering", title: "Senior Cloud Architect", location: "Remote / London", type: "Full-time", applyLink: "#" },
                { department: "AI Operations", title: "Machine Learning Engineer", location: "New York", type: "Full-time", applyLink: "#" },
                { department: "Cybersecurity", title: "Zero-Trust Framework Specialist", location: "Berlin / Remote", type: "Full-time", applyLink: "#" },
                { department: "Design", title: "Lead Product Designer", location: "Tokyo", type: "Full-time", applyLink: "#" }
            ],
            talentPoolText: "Don't see a fit? Join our talent pool",
            talentPoolLink: "#"
        },
        editableProps: {
            sectionLabel: { type: "string", label: "Section Label", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            talentPoolText: { type: "string", label: "Talent Pool Text", category: "content" },
            talentPoolLink: { type: "link", label: "Talent Pool Link", category: "content" },
            jobs: {
                type: "array-of-objects",
                label: "Job Listings",
                category: "content",
                fields: {
                    department: { type: "string", label: "Department" },
                    title: { type: "string", label: "Job Title" },
                    location: { type: "string", label: "Location" },
                    type: { type: "string", label: "Employment Type" },
                    applyLink: { type: "link", label: "Apply Link" }
                }
            }
        }
    },

    // TechInnovation Case Study Hero
    {
        type: "TechInnovationCaseStudyHero",
        name: "Case Study Hero",
        category: "tech-innovation",
        description: "Hero section for case study pages with background and stats",
        defaultProps: {
            sectorLabel: "Case Study: Energy Sector",
            title: "Hyper-Scale Smart Grid Infrastructure",
            description: "How TechNova redesigned the core architectural framework for a global energy leader, enabling real-time load balancing for 15M+ endpoints.",
            stats: [
                { value: "450%", label: "Efficiency Gain" },
                { value: "0.03ms", label: "Edge Latency" },
                { value: "$12M", label: "Annual Savings" }
            ],
            backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzI6IwZAMpVErnI6PczyQu-kQSJG8Dy06seN3-sImuVpqpZtFSZEyg3eA-qdhpr_yAzqJLuwvFO5qBOsUW003jci76NCAHDjh8BpW2gMCD_LtHbIZTrhZp1Ku3isG3QuUWkY4aZ-Qsu2IWWWvHLee2qg2A7veopSCHYkpbQRsdULQ3Nc3mDfMao6F9VoXRWzXQ3OqvJwfl4JY77jzcwSS1kiBnDGx8DLguqFzE2k2PAo93mybMBKagVRdulMz5cIK1-s8V6VRtsw"
        },
        editableProps: {
            sectorLabel: { type: "string", label: "Sector Label", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            backgroundImage: { type: "image", label: "Background Image", category: "content" },
            stats: {
                type: "array-of-objects",
                label: "Hero Stats",
                category: "content",
                fields: {
                    value: { type: "string", label: "Stat Value" },
                    label: { type: "string", label: "Stat Label" }
                }
            }
        }
    },

    // TechInnovation Case Study Content
    {
        type: "TechInnovationCaseStudyContent",
        name: "Case Study Content",
        category: "tech-innovation",
        description: "Main content section with sidebar and detailed sections",
        defaultProps: {
            challengeTitle: "The Challenge",
            challengeDescription: "Our client faced critical bottlenecks in their legacy infrastructure. With the transition to renewable energy sources, the influx of variable data points was overwhelming their centralized processing units.",
            challenges: [
                { title: "Legacy Limitations", description: "Monolithic architecture unable to handle peak-load volatility from solar and wind inputs." },
                { title: "Security Vulnerabilities", description: "Inconsistent encryption across regional edge nodes creating potential threat vectors." }
            ],
            architectureTitle: "Strategic Architecture",
            architectureImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwgn6XeuiEUva5rQyq404QElX439JtCC0NdAEL3j7Zm2eaHHUlxIsD52p8d_8WeIKho6JMs99COasjsQ3_xu0WtgfK8_3Zwg6mP7RDybW2dEx5hwAde5YFk2p6C4lbGRCpkNQhJXa4NMjEQ0-2CwQ-nYVM1buec7FdOxeE27vBgn0EmFN2r-gn-R6iG3UsprHIbhaQAx89gDNdBjHp7tvjJEZ-YL1DpbfRhZvuwtmXYWitENQTGGiZukKt67zMjhPGN0TURR1a5z0",
            architectureCaption: "Figure 1.1: Distributed Edge-Compute Mesh Architecture deployment",
            architectureSteps: [
                { number: 1, title: "Edge Mesh", description: "Decentralizing compute power to the point of generation, reducing round-trip latency by 92%." },
                { number: 2, title: "AI Orchestration", description: "Automated workload distribution based on predictive demand patterns using proprietary ML models." },
                { number: 3, title: "Zero-Trust Sync", description: "Real-time cryptographic verification for every data packet moving through the grid." }
            ]
        },
        editableProps: {
            challengeTitle: { type: "string", label: "Challenge Title", category: "content" },
            challengeDescription: { type: "rich-text", label: "Challenge Description", category: "content" },
            architectureTitle: { type: "string", label: "Architecture Title", category: "content" },
            architectureImage: { type: "image", label: "Architecture Image", category: "content" },
            architectureCaption: { type: "string", label: "Image Caption", category: "content" },
            challenges: {
                type: "array-of-objects",
                label: "Challenges",
                category: "content",
                fields: {
                    title: { type: "string", label: "Challenge Title" },
                    description: { type: "string", label: "Challenge Description" }
                }
            },
            architectureSteps: {
                type: "array-of-objects",
                label: "Architecture Steps",
                category: "content",
                fields: {
                    number: { type: "number", label: "Step Number" },
                    title: { type: "string", label: "Step Title" },
                    description: { type: "string", label: "Step Description" }
                }
            }
        }
    },

    // TechInnovation Success Stories
    {
        type: "TechInnovationSuccessStories",
        name: "Success Stories Grid",
        category: "tech-innovation",
        description: "Grid of success story cards with hover effects",
        defaultProps: {
            title: "Co-Innovation",
            titleHighlight: "Success Stories",
            description: "When industry titans collaborate with TechNova, we redefine what's possible in the digital landscape.",
            buttonText: "View All Case Studies",
            buttonLink: "#",
            stories: [
                {
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzI6IwZAMpVErnI6PczyQu-kQSJG8Dy06seN3-sImuVpqpZtFSZEyg3eA-qdhpr_yAzqJLuwvFO5qBOsUW003jci76NCAHDjh8BpW2gMCD_LtHbIZTrhZp1Ku3isG3QuUWkY4aZ-Qsu2IWWWvHLee2qg2A7veopSCHYkpbQRsdULQ3Nc3mDfMao6F9VoXRWzXQ3OqvJwfl4JY77jzcwSS1kiBnDGx8DLguqFzE2k2PAo93mybMBKagVRdulMz5cIK1-s8V6VRtsw",
                    category: "Cloud Migration",
                    partner: "TechNova × Hyperscale Partner",
                    title: "Re-architecting Global Logistics",
                    description: "Reduced operational latency by 45% using a custom edge-computing mesh developed in joint venture.",
                    link: "#"
                },
                {
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdO7P43yS8XA4s4jREoxgl5z1cGN44F5wn6RVi_RKhLuEibjHVeeKQNcUsAQlvh1E_IWRtrYkOmc_G_-oT35pa2I_4yVppSQvgkdsue7pX14jKsKTJLzn4xp-T-mVk5y_2qk48vjoy5537CneKRgdm-4H4mSaruh8aYhaRc21KksjIOfiaHWfiJRDd-MVBe9A3Ic16RdJNyhSyCtUOeEtltGtNRUuvwjxWd-BHZpf3qDJ5mAZ-AwrP_Yf4l0oQbcL0A-TISBZOiyA",
                    category: "Cybersecurity",
                    partner: "TechNova × Security Giant",
                    title: "Securing the Decentralized Finance Hub",
                    description: "Implemented a first-of-its-kind AI-driven threat detection layer protecting $40B in annual transactions.",
                    link: "#"
                }
            ]
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Title Highlight", category: "content" },
            description: { type: "string", label: "Description", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            buttonLink: { type: "link", label: "Button Link", category: "content" },
            stories: {
                type: "array-of-objects",
                label: "Success Stories",
                category: "content",
                fields: {
                    image: { type: "image", label: "Card Image" },
                    category: { type: "string", label: "Category Tag" },
                    partner: { type: "string", label: "Partner Info" },
                    title: { type: "string", label: "Story Title" },
                    description: { type: "string", label: "Story Description" },
                    link: { type: "link", label: "Read More Link" }
                }
            }
        }
    },

    // TechInnovation Architect CTA
    {
        type: "TechInnovationArchitectCTA",
        name: "Architect CTA",
        category: "tech-innovation",
        description: "Call to action section for architect consultation",
        defaultProps: {
            title: "Complex problems require",
            titleFade: "superior engineering.",
            description: "Interested in how our architecture can scale your specific enterprise needs? Connect directly with our lead solution architects.",
            primaryButtonText: "Speak to an Architect",
            primaryButtonLink: "#",
            secondaryButtonText: "Technical Whitepaper",
            secondaryButtonLink: "#"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            titleFade: { type: "string", label: "Title Fade Text", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            primaryButtonText: { type: "string", label: "Primary Button Text", category: "content" },
            primaryButtonLink: { type: "link", label: "Primary Button Link", category: "content" },
            secondaryButtonText: { type: "string", label: "Secondary Button Text", category: "content" },
            secondaryButtonLink: { type: "link", label: "Secondary Button Link", category: "content" }
        }
    },

    // ============================================================================
    // DESIGN STUDIO COMPONENTS
    // ============================================================================
    {
        type: "DesignStudioHeader",
        category: "layout",
        name: "Design Studio Header",
        description: "Fixed header with logo, navigation, and CTA for creative studios",
        defaultProps: {
            logoType: "text",
            logoText: "STUDIO.",
            logoAccent: "",
            primaryColor: "var(--theme-primary)",
            links: [
                { label: "Work", href: "#work" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Journal", href: "#journal" }
            ],
            ctaText: "Start a Project",
            ctaLink: "#",
            sticky: true,
            glassmorphism: true
        },
        editableProps: {
            logoType: { type: "select", label: "Logo Type", options: ["text", "image", "both"], category: "content" },
            logoText: { type: "string", label: "Logo Text", category: "content" },
            logoAccent: { type: "string", label: "Logo Accent Text", category: "content" },
            logoImage: { type: "image", label: "Logo Image", category: "content" },
            logoImageWidth: { type: "number", label: "Logo Image Width", category: "styles" },
            links: { type: "navbar-links", label: "Navigation Links", category: "content" },
            ctaText: { type: "string", label: "CTA Button Text", category: "content" },
            ctaLink: { type: "link", label: "CTA Button Link", category: "content" },
            showSearch: { type: "boolean", label: "Show Search Bar", category: "content" },
            sticky: { type: "boolean", label: "Sticky Header", category: "styles" },
            glassmorphism: { type: "boolean", label: "Glassmorphism Effect", category: "styles" },
            primaryColor: { type: "color", label: "Primary Brand Color", category: "styles" },
            logoTextColor: { type: "color", label: "Logo Color", category: "styles" },
            linkColor: { type: "color", label: "Link Color", category: "styles" },
            linkHoverColor: { type: "color", label: "Link Hover Color", category: "styles" },
            megaMenuBgColor: { type: "color", label: "MM Background", category: "styles" },
            megaMenuTextColor: { type: "color", label: "MM Text Color", category: "styles" },
            megaMenuHeadingColor: { type: "color", label: "MM Heading Color", category: "styles" },
            megaMenuDividerColor: { type: "color", label: "MM Divider Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioHero",
        category: "layout",
        name: "Design Studio Hero",
        description: "Full-screen hero with abstract shape and bold typography",
        defaultProps: {
            badge: "Creative Excellence — Est. 2024",
            title: "DESIGNING THE FUTURE OF",
            titleHighlight: "DIGITAL",
            description: "A full-service creative studio specializing in brand identity, UI/UX, and motion. We blend strategic thinking with uncompromising craft.",
            primaryButtonText: "View Our Work",
            primaryButtonLink: "#work",
            secondaryButtonText: "Our Process",
            secondaryButtonLink: "#process",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            badge: { type: "string", label: "Badge Text", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Highlighted Word", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            primaryButtonText: { type: "string", label: "Primary Button Text", category: "content" },
            primaryButtonLink: { type: "link", label: "Primary Button Link", category: "content" },
            secondaryButtonText: { type: "string", label: "Secondary Button Text", category: "content" },
            secondaryButtonLink: { type: "link", label: "Secondary Button Link", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioCapabilities",
        category: "features",
        name: "Design Studio Capabilities",
        description: "Grid of capability cards with hover effects",
        defaultProps: {
            title: "Selected\nCapabilities",
            subtitle: "We partner with forward-thinking brands to create digital ecosystems that define their category.",
            capabilities: [
                { number: "01", title: "Brand Identity", description: "Defining visual languages that resonate and endure across every touchpoint." },
                { number: "02", title: "UI/UX Design", description: "Crafting intuitive digital interfaces that prioritize the human experience." },
                { number: "03", title: "Motion Design", description: "Bringing static brands to life through fluid, meaningful animation." }
            ],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            title: { type: "string", label: "Section Title", category: "content" },
            subtitle: { type: "string", label: "Subtitle", category: "content" },
            capabilities: { type: "array-of-objects", label: "Capabilities", category: "content", fields: { number: { type: "string", label: "Number" }, title: { type: "string", label: "Title" }, description: { type: "string", label: "Description" } } },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioMarquee",
        category: "layout",
        name: "Design Studio Marquee",
        description: "Scrolling text marquee on dark background",
        defaultProps: {
            items: ["Creative Excellence", "Digital Innovation", "Brand Strategy", "User Centered"],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            items: { type: "string-array", label: "Marquee Items", category: "content" },
            primaryColor: { type: "color", label: "Primary/Accent Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioFeaturedProject",
        category: "products",
        name: "Design Studio Featured Project",
        description: "Two-column layout showcasing a featured project",
        defaultProps: {
            label: "Featured Project",
            title: "THE CHRONOS PROJECT",
            description: "A revolutionary approach to time management and productivity for the modern digital nomad.",
            linkText: "Explore Project",
            linkUrl: "#",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE31ZjJg750eZ_TuymJ5T_of55cBteBvRRx1pnVOPN9A8_-vfU3DFi2dfMSzXrkKQAcf8y8RJcRUx18Eu5JMgEBC-0Z8cD0h-0ifWaqQcjIfri5u5zQt-42ytuVyUWahVoaQfr_MkrGsY1HHTDHbuvcBRxT1c7enxBiIaZ90vDVmLxRfVJnr2Ip3VIPcQekNqHgQpegp_A16Yob9P26pIVNWBZzNuVNr3XtjSJYeBveM-MQI6mBQnA3CwgN6m2JWcmEKVl3_jekCo",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            label: { type: "string", label: "Label", category: "content" },
            title: { type: "string", label: "Project Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            linkText: { type: "string", label: "Link Text", category: "content" },
            linkUrl: { type: "link", label: "Link URL", category: "content" },
            image: { type: "image", label: "Project Image", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioCTA",
        category: "interactive",
        name: "Design Studio CTA",
        description: "Large centered call-to-action section",
        defaultProps: {
            title: "Let's Build The Future.",
            subtitle: "Currently accepting new projects for Q3 2024",
            buttonText: "Get In Touch",
            buttonLink: "#contact",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            subtitle: { type: "string", label: "Subtitle", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            buttonLink: { type: "link", label: "Button Link", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioFooter",
        category: "layout",
        name: "Design Studio Footer",
        description: "Dark footer with logo, navigation, newsletter, and social links",
        defaultProps: {
            logoText: "Studio.",
            tagline: "We are a globally distributed team of designers and strategists dedicated to creative excellence.",
            socialLinks: [
                { label: "TW", href: "#" },
                { label: "IG", href: "#" },
                { label: "LI", href: "#" }
            ],
            sections: [
                { title: "Navigation", links: [{ label: "Work", href: "#work" }, { label: "Studio", href: "#studio" }, { label: "Services", href: "#services" }, { label: "Journal", href: "#journal" }, { label: "Contact", href: "#contact" }] }
            ],
            contactTitle: "New Business",
            contactEmail: "hello@studio-excellence.com",
            contactPhone: "+1 (555) 000-CRE8",
            newsletterTitle: "Newsletter",
            newsletterPlaceholder: "Email Address",
            copyright: "© 2024 Studio Creative Excellence. All rights reserved.",
            legalLinks: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            logoText: { type: "string", label: "Logo Text", category: "content" },
            tagline: { type: "rich-text", label: "Tagline", category: "content" },
            socialLinks: { type: "array-of-objects", label: "Social Links", category: "content", fields: { label: { type: "string", label: "Label" }, href: { type: "link", label: "URL" } } },
            sections: { type: "array-of-objects", label: "Footer Sections", category: "content", fields: { title: { type: "string", label: "Title" }, links: { type: "array-of-objects", label: "Links", fields: { label: { type: "string", label: "Label" }, href: { type: "link", label: "URL" } } } } },
            contactTitle: { type: "string", label: "Contact Section Title", category: "content" },
            contactEmail: { type: "string", label: "Email", category: "content" },
            contactPhone: { type: "string", label: "Phone", category: "content" },
            newsletterTitle: { type: "string", label: "Newsletter Title", category: "content" },
            newsletterPlaceholder: { type: "string", label: "Newsletter Placeholder", category: "content" },
            copyright: { type: "string", label: "Copyright Text", category: "content" },
            legalLinks: { type: "array-of-objects", label: "Legal Links", category: "content", fields: { label: { type: "string", label: "Label" }, href: { type: "link", label: "URL" } } },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },

    // Design Studio Services Page Components
    {
        type: "DesignStudioServicesHero",
        category: "layout",
        name: "Design Studio Services Hero",
        description: "Editorial grid hero with badge, large title, and CTA",
        defaultProps: {
            badge: "Capabilities — 2024 Edition",
            title: "High-Impact\nDigital",
            titleHighlight: "Innovation.",
            description: "We bridge the gap between complex engineering and elegant design. Delivering high-performance digital solutions for the next generation of industry leaders.",
            buttonText: "Our Portfolio",
            buttonLink: "#portfolio",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            badge: { type: "string", label: "Badge Text", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Highlighted Word", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            buttonLink: { type: "link", label: "Button Link", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioServicesGrid",
        category: "features",
        name: "Design Studio Services Grid",
        description: "3-column service cards with icons and hover effects",
        defaultProps: {
            title: "Studio\nServices",
            label: "Expertise / 01",
            services: [
                { icon: "globe", title: "Product Strategy", description: "Defining the roadmap for digital success through market research, UX audits, and rapid prototyping." },
                { icon: "layers", title: "Interface Design", description: "High-contrast, editorial design systems built for scale, accessibility, and visual impact across all devices." },
                { icon: "terminal", title: "Full-Stack Dev", description: "Robust architecture using modern frameworks. We build performant, secure, and future-proof applications." }
            ],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            title: { type: "string", label: "Section Title", category: "content" },
            label: { type: "string", label: "Section Label", category: "content" },
            services: { type: "array-of-objects", label: "Services", category: "content", fields: { icon: { type: "string", label: "Icon (globe/layers/terminal)" }, title: { type: "string", label: "Title" }, description: { type: "string", label: "Description" } } },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioProcess",
        category: "features",
        name: "Design Studio Process",
        description: "Alternating layout process steps with large numbers",
        defaultProps: {
            label: "Execution / 02",
            title: "Our Process",
            steps: [
                { number: "01", title: "Discovery & Architecture", description: "We begin every project by deconstructing your goals. Through deep-dive workshops, we map out the information architecture and technical requirements to ensure a solid foundation.", items: ["Stakeholder Interviews", "Competitive Analysis", "Technical Audit"] },
                { number: "02", title: "Iterative Design", description: "Design is a conversation. We build high-fidelity wireframes and interactive prototypes, refining the user journey until every interaction feels intuitive and purposeful.", items: ["UX/UI Prototyping", "Design Systems", "User Testing"] },
                { number: "03", title: "Agile Engineering", description: "Our developers bring the vision to life using clean, modular code. We work in two-week sprints, providing regular updates and maintaining full transparency throughout the build.", items: ["Front-end Excellence", "API Integration", "Deployment Pipelines"] }
            ],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            label: { type: "string", label: "Section Label", category: "content" },
            title: { type: "string", label: "Section Title", category: "content" },
            steps: { type: "array-of-objects", label: "Process Steps", category: "content", fields: { number: { type: "string", label: "Number" }, title: { type: "string", label: "Title" }, description: { type: "string", label: "Description" }, items: { type: "string-array", label: "List Items" } } },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioTechStack",
        category: "features",
        name: "Design Studio Tech Stack",
        description: "Grid of tech tools with icons",
        defaultProps: {
            title: "Tech Stack",
            subtitle: "Tools we master",
            items: [
                { icon: "code", name: "React.js" },
                { icon: "grid", name: "Tailwind" },
                { icon: "cloud", name: "Node.js" },
                { icon: "braces", name: "TypeScript" },
                { icon: "figma", name: "Figma" },
                { icon: "globe", name: "Next.js" }
            ]
        },
        editableProps: {
            title: { type: "string", label: "Section Title", category: "content" },
            subtitle: { type: "string", label: "Subtitle", category: "content" },
            items: { type: "array-of-objects", label: "Tech Items", category: "content", fields: { icon: { type: "string", label: "Icon (code/grid/cloud/braces/figma/globe)" }, name: { type: "string", label: "Name" } } }
        }
    },
    {
        type: "DesignStudioProjectCTA",
        category: "interactive",
        name: "Design Studio Project CTA",
        description: "Dark box with decorative circle and dual CTAs",
        defaultProps: {
            title: "Ready to Start",
            titleHighlight: "A Project?",
            description: "Whether you have a fully formed brief or just the spark of an idea, our team is ready to help you build something extraordinary.",
            primaryButtonText: "Get Started",
            primaryButtonLink: "#contact",
            secondaryButtonText: "View Pricing",
            secondaryButtonLink: "#pricing",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Highlighted Word", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            primaryButtonText: { type: "string", label: "Primary Button Text", category: "content" },
            primaryButtonLink: { type: "link", label: "Primary Button Link", category: "content" },
            secondaryButtonText: { type: "string", label: "Secondary Button Text", category: "content" },
            secondaryButtonLink: { type: "link", label: "Secondary Button Link", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },

    // Design Studio Project/Case Study Page Components
    {
        type: "DesignStudioProjectHero",
        category: "layout",
        name: "Design Studio Project Hero",
        description: "Full-height hero with grayscale image and title card with shadow",
        defaultProps: {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE31ZjJg750eZ_TuymJ5T_of55cBteBvRRx1pnVOPN9A8_-vfU3DFi2dfMSzXrkKQAcf8y8RJcRUx18Eu5JMgEBC-0Z8cD0h-0ifWaqQcjIfri5u5zQt-42ytuVyUWahVoaQfr_MkrGsY1HHTDHbuvcBRxT1c7enxBiIaZ90vDVmLxRfVJnr2Ip3VIPcQekNqHgQpegp_A16Yob9P26pIVNWBZzNuVNr3XtjSJYeBveM-MQI6mBQnA3CwgN6m2JWcmEKVl3_jekCo",
            label: "Product Design — 2024",
            title: "CarePlus\nDigital Hub",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            image: { type: "image", label: "Hero Image", category: "content" },
            label: { type: "string", label: "Project Label", category: "content" },
            title: { type: "string", label: "Project Title", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioProjectMeta",
        category: "layout",
        name: "Design Studio Project Meta",
        description: "4-column grid with project info (client, role, timeline, industry)",
        defaultProps: {
            items: [
                { label: "Client", value: "CarePlus Health Services" },
                { label: "Role", value: "UI/UX Strategy, Brand Identity" },
                { label: "Timeline", value: "6 Months Development" },
                { label: "Industry", value: "Healthcare Tech" }
            ],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            items: { type: "array-of-objects", label: "Meta Items", category: "content", fields: { label: { type: "string", label: "Label" }, value: { type: "string", label: "Value" } } },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioConcept",
        category: "layout",
        name: "Design Studio Concept",
        description: "Two-column layout with headline, description, and stats",
        defaultProps: {
            sectionTitle: "Concept",
            headline: "Redefining the healthcare interface through",
            headlineHighlight: "extreme legibility",
            description: "The challenge was to take a complex medical ecosystem and distill it into a user experience that felt both authoritative and accessible.",
            stats: [
                { value: "120%", label: "Increase in User Engagement" },
                { value: "0.4s", label: "Average Interaction Latency" }
            ],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            sectionTitle: { type: "string", label: "Section Title", category: "content" },
            headline: { type: "string", label: "Headline", category: "content" },
            headlineHighlight: { type: "string", label: "Highlighted Text", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            stats: { type: "array-of-objects", label: "Stats", category: "content", fields: { value: { type: "string", label: "Value" }, label: { type: "string", label: "Label" } } },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioExecution",
        category: "layout",
        name: "Design Studio Execution",
        description: "Dark section with description, buttons, and before/after image comparison",
        defaultProps: {
            title: "Execution",
            description: "We developed a proprietary design system rooted in mathematical grids.",
            primaryButtonText: "Case Study PDF",
            primaryButtonLink: "#",
            secondaryButtonText: "Prototypes",
            secondaryButtonLink: "#",
            beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPd5lFTU9jLhlrK9sQw_H5TzuYq97awf4MoFl-nLw4vjuQgLlMTCycw17y1kVsmRud-bi8ef5mqY5likla5TYcyp8S-WN2XlGrT0QxuTkeRhYLkzN5Eq67b_vweNYDT-E6aPScxh-ogrzea0ECMgrkvErM4coFlsrxB_sTtA2v7C_eebd1lrUSDh9_629fQbr3_jBeVAYQBcQXMVrcQd7wIzsSFjveDUXRg7Zo9qV8qrZOqptBzP3COFWjq7w-BuEQYlO9Q2q76k",
            afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPd5lFTU9jLhlrK9sQw_H5TzuYq97awf4MoFl-nLw4vjuQgLlMTCycw17y1kVsmRud-bi8ef5mqY5likla5TYcyp8S-WN2XlGrT0QxuTkeRhYLkzN5Eq67b_vweNYDT-E6aPScxh-ogrzea0ECMgrkvErM4coFlsrxB_sTtA2v7C_eebd1lrUSDh9_629fQbr3_jBeVAYQBcQXMVrcQd7wIzsSFjveDUXRg7Zo9qV8qrZOqptBzP3COFWjq7w-BuEQYlO9Q2q76k",
            beforeLabel: "Initial Concept",
            afterLabel: "After Design",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            title: { type: "string", label: "Section Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            primaryButtonText: { type: "string", label: "Primary Button Text", category: "content" },
            primaryButtonLink: { type: "link", label: "Primary Button Link", category: "content" },
            secondaryButtonText: { type: "string", label: "Secondary Button Text", category: "content" },
            secondaryButtonLink: { type: "link", label: "Secondary Button Link", category: "content" },
            beforeImage: { type: "image", label: "Before Image", category: "content" },
            afterImage: { type: "image", label: "After Image", category: "content" },
            beforeLabel: { type: "string", label: "Before Label", category: "content" },
            afterLabel: { type: "string", label: "After Label", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioOutcome",
        category: "layout",
        name: "Design Studio Outcome",
        description: "Two-column layout with outcome cards and image gallery",
        defaultProps: {
            sectionTitle: "Outcome",
            description: "The final result is a transformative digital ecosystem that empowers over 500,000 patients globally.",
            cards: [
                { icon: "verified", title: "HIPAA Redefined", description: "Compliance meets world-class aesthetics.", highlighted: false },
                { icon: "trending", title: "Global Impact", description: "Recognized as the benchmark for 2024 healthcare digital innovation.", highlighted: true }
            ],
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBVzw4puP9aUbkyIhUI0dQb7ckh4SPqX-TEsMqm9TUxuA8yOZ6Z4oCSXJRlt5u3oJczx-tsekmZRLNkXgGvSFek8Mup9aT1rm_lCrZ-qRx1906E977Jvr7MGILN2sc3CfM8FSasSJcXtC2gNWwq4RFT2J3V05JTEvqO4guJ4xyW1wG55AKIaqltdwzOUCj2Uvk3zFKCeWYXy7zJth_kYugW8-m69ryjf_mcpd4Jxqm2LsH3TLSicNcYe-eMK-Sh7rgPYDn3e_9r0dM",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAFVBHFoDxrUSSNg1gmXHNxSurfLtY1XUIRQUbI_tpNppu_woVG7ywlUVv6fz4WVLsoBPAxdYbej--id7btHXBVfKigo2EQp8Dj6t6vbkd154XTD7Vmh0TTwrEWJjMNtdg4AB8ZVrX5DJJdJRP90rlD4HFQ6Jyp8OEQ8wWUEFiSS9uKMJjd4QnzWxmn9BUa_EBMTHwUlCpuDjLBNXF5WXj9xjacLBPrpLb_LZWZp8yqdU9iVjWDdIDskb2bs-4UlWZbZDQSOS4UH0g",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDuS5QYz3_h3OO-D1UBlaefs6gpbxyBOror7bp140kjNxJT6bH494r3iIrH0BAcJQX6ZItatUhs_vSPJCU8AxvxL695SCIvBiaXjYb-OpNcdZwT0N1qzJjqqjCap1XlIlTXxTcTmz-F9-381hwZk858hfcOc9zhhIdtjKQFnrhH3nZt6ejEnK2JdCDcZUUV26HWVwjnHOKw95qbHO_A-636QEmc2WYCsr9spHw2IZZP1By1_jg-1dD3WO-TvTPLptC3bYnWQE0vxoY"
            ],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            sectionTitle: { type: "string", label: "Section Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            cards: { type: "array-of-objects", label: "Outcome Cards", category: "content", fields: { icon: { type: "string", label: "Icon (verified/trending)" }, title: { type: "string", label: "Title" }, description: { type: "string", label: "Description" }, highlighted: { type: "boolean", label: "Highlighted" } } },
            images: { type: "string-array", label: "Gallery Images", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioProjectNav",
        category: "interactive",
        name: "Design Studio Project Navigation",
        description: "Two-column prev/next project navigation with hover effects",
        defaultProps: {
            prevProject: { label: "Previous Project", title: "Aether Brand", href: "#" },
            nextProject: { label: "Next Project", title: "Kinetic UI", href: "#" },
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            prevProject: { type: "object", label: "Previous Project", category: "content", fields: { label: { type: "string", label: "Label" }, title: { type: "string", label: "Title" }, href: { type: "link", label: "URL" } } },
            nextProject: { type: "object", label: "Next Project", category: "content", fields: { label: { type: "string", label: "Label" }, title: { type: "string", label: "Title" }, href: { type: "link", label: "URL" } } },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },

    // Design Studio Contact Page Components
    {
        type: "DesignStudioContactForm",
        category: "interactive",
        name: "Design Studio Contact Form",
        description: "Vertical title with contact form and social links",
        defaultProps: {
            title: "Let's Build",
            titleHighlight: "Something.",
            subtitle: "We partner with ambitious brands to create digital products that define categories.",
            tagline: "— Tell us about your vision",
            serviceOptions: ["Product Design", "Brand Identity", "Web Development", "Art Direction"],
            buttonText: "Send Inquiry",
            socialTitle: "Connect with us",
            socialLinks: [
                { label: "Instagram", href: "#" },
                { label: "Behance", href: "#" },
                { label: "LinkedIn", href: "#" }
            ],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            titleHighlight: { type: "string", label: "Highlighted Word", category: "content" },
            subtitle: { type: "rich-text", label: "Subtitle", category: "content" },
            tagline: { type: "string", label: "Tagline", category: "content" },
            serviceOptions: { type: "string-array", label: "Service Options", category: "content" },
            buttonText: { type: "string", label: "Submit Button Text", category: "content" },
            socialTitle: { type: "string", label: "Social Section Title", category: "content" },
            socialLinks: { type: "array-of-objects", label: "Social Links", category: "content", fields: { label: { type: "string", label: "Label" }, href: { type: "link", label: "URL" } } },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },

    // Design Studio Projects (Portfolio) Page Components
    {
        type: "DesignStudioProjectsHero",
        category: "layout",
        name: "Design Studio Projects Hero",
        description: "Large typographic header section for portfolio index",
        defaultProps: {
            label: "Index — 2024",
            title: "Featured\nProjects",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            label: { type: "string", label: "Label", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioProjectsFilter",
        category: "interactive",
        name: "Design Studio Projects Filter",
        description: "Sticky navigation/category bar for projects",
        defaultProps: {
            categories: ["All Works", "Branding", "Digital", "Motion", "Editorial"],
            countLabel: "Showing 12 Selected Cases",
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            categories: { type: "string-array", label: "Categories", category: "content" },
            countLabel: { type: "string", label: "Count Label", category: "content" },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioProjectsGrid",
        category: "layout",
        name: "Design Studio Projects Grid",
        description: "2-column square thumbnails with hover overlays and project details",
        defaultProps: {
            projects: [
                {
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE31ZjJg750eZ_TuymJ5T_of55cBteBvRRx1pnVOPN9A8_-vfU3DFi2dfMSzXrkKQAcf8y8RJcRUx18Eu5JMgEBC-0Z8cD0h-0ifWaqQcjIfri5u5zQt-42ytuVyUWahVoaQfr_MkrGsY1HHTDHbuvcBRxT1c7enxBiIaZ90vDVmLxRfVJnr2Ip3VIPcQekNqHgQpegp_A16Yob9P26pIVNWBZzNuVNr3XtjSJYeBveM-MQI6mBQnA3CwgN6m2JWcmEKVl3_jekCo",
                    category: "Branding",
                    title: "Velvet Medical",
                    description: "Identity design for a next-generation healthcare provider focusing on minimalist aesthetics."
                },
                {
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYPd5lFTU9jLhlrK9sQw_H5TzuYq97awf4MoFl-nLw4vjuQgLlMTCycw17y1kVsmRud-bi8ef5mqY5likla5TYcyp8S-WN2XlGrT0QxuTkeRhYLkzN5Eq67b_vweNYDT-E6aPScxh-ogrzea0ECMgrkvErM4coFlsrxB_sTtA2v7C_eebd1lrUSDh9_629fQbr3_jBeVAYQBcQXMVrcQd7wIzsSFjveDUXRg7Zo9qV8qrZOqptBzP3COFWjq7w-BuEQYlO9Q2q76k",
                    category: "Digital",
                    title: "Nexus Interface",
                    description: "Web application architecture and UI design for a global logistics platform."
                }
            ],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            projects: {
                type: "array-of-objects",
                label: "Projects",
                category: "content",
                fields: {
                    image: { type: "image", label: "Project Image" },
                    category: { type: "string", label: "Category" },
                    title: { type: "string", label: "Title" },
                    description: { type: "string", label: "Description" },
                    link: { type: "link", label: "Project Link" }
                }
            },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "DesignStudioSimpleCTA",
        category: "layout",
        name: "Design Studio Simple CTA",
        description: "Bottom contact section with email and social links",
        defaultProps: {
            title: "Let's create the\nextraordinary.",
            email: "hello@studiowork.com",
            socialLinks: [
                { label: "Instagram", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Behance", href: "#" }
            ],
            primaryColor: "var(--theme-primary)"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            email: { type: "string", label: "Email Address", category: "content" },
            socialLinks: { type: "array-of-objects", label: "Social Links", category: "content", fields: { label: { type: "string", label: "Label" }, href: { type: "link", label: "URL" } } },
            primaryColor: { type: "color", label: "Primary Color", category: "styles" }
        }
    },
    {
        type: "InteractiveTimeline",
        category: "layout",
        name: "Interactive Timeline",
        description: "Responsive process timeline with icons, titles and descriptions",
        defaultProps: {
            title: "Timeline Header",
            description: "Process description goes here",
            accentColor: "var(--theme-primary)",
            connectorColor: "rgba(22, 163, 74, 0.2)",
            items: [
                {
                    icon: "Leaf",
                    title: "Seed Selection",
                    description: "Careful selection of heirloom, non-GMO seeds adapted to our local climate.",
                    label: "Week 0"
                },
                {
                    icon: "Sprout",
                    title: "Germination",
                    description: "Controlled greenhouse environment with nutrient-rich compost tea.",
                    label: "Week 3"
                },
                {
                    icon: "Trees",
                    title: "Soil Integration",
                    description: "Transplanting to our mineral-rich open fields for natural sunlight exposure.",
                    label: "Week 8"
                },
                {
                    icon: "ShoppingBasket",
                    title: "Hand Harvest",
                    description: "Picked at the peak of ripeness and delivered within 24 hours.",
                    label: "Week 14"
                }
            ]
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            connectorColor: { type: "color", label: "Connector Color", category: "styles" },
            items: {
                type: "array-of-objects",
                label: "Timeline Steps",
                category: "content",
                fields: {
                    icon: { type: "string", label: "Icon (Lucide Name)" },
                    title: { type: "string", label: "Title" },
                    description: { type: "rich-text", label: "Description" },
                    label: { type: "string", label: "Label (e.g. Week 0)" }
                }
            }
        },
    },

    // ============================================================================
    // TRACKING TABLE COMPONENT (Logistics)
    // ============================================================================
    {
        type: "TrackingTable",
        category: "layout",
        name: "Tracking Table",
        description: "Real-time tracking table with status badges, temperature progress, and actions",
        defaultProps: {
            title: "Real-time Tracking",
            showLiveIndicator: true,
            showExportButton: true,
            accentColor: "var(--theme-primary)",
            rows: [
                { id: "#GH-9021", origin: "Sao Paulo, BR", destination: "Rotterdam, NL", status: "In Transit", statusType: "transit", temp: "2.0°", tempProgress: 15, eta: "Oct 24" }
            ]
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            showLiveIndicator: { type: "boolean", label: "Show Live Indicator", category: "content" },
            showExportButton: { type: "boolean", label: "Show Export Button", category: "content" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            rows: {
                type: "array-of-objects",
                label: "Rows",
                category: "content",
                fields: {
                    id: { type: "string", label: "Shipment ID" },
                    origin: { type: "string", label: "Origin" },
                    destination: { type: "string", label: "Destination" },
                    status: { type: "string", label: "Status" },
                    statusType: { type: "select", label: "Status Type", options: ["transit", "customs", "departed", "delivered", "delayed"] },
                    temp: { type: "string", label: "Temperature" },
                    tempProgress: { type: "number", label: "Temp Progress (0-100)" },
                    eta: { type: "string", label: "ETA" }
                }
            }
        }
    },

    // ============================================================================
    // COLD CHAIN CARD COMPONENT (Logistics)
    // ============================================================================
    {
        type: "ColdChainCard",
        category: "layout",
        name: "Cold Chain Card",
        description: "Cold chain integrity monitoring with bar chart and alert stats",
        defaultProps: {
            title: "Cold Chain Integrity",
            description: "Temperature stability across all active refrigerated containers (Last 24h)",
            criticalAlerts: 2,
            optimalUnits: 854,
            barData: [60, 80, 70, 95, 65, 85, 40, 75],
            timeLabels: ["00:00", "06:00", "12:00", "18:00", "Current"],
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            criticalAlerts: { type: "number", label: "Critical Alerts", category: "content" },
            optimalUnits: { type: "number", label: "Optimal Units", category: "content" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" }
        }
    },

    // ============================================================================
    // COMPLIANCE CARD COMPONENT (Logistics)
    // ============================================================================
    {
        type: "ComplianceCard",
        category: "layout",
        name: "Compliance Card",
        description: "Global compliance progress bars and CTA",
        defaultProps: {
            title: "Global Compliance",
            description: "Documentation and certification status for multi-regional logistics.",
            items: [
                { label: "EU Phyto-Certificates", value: 98 },
                { label: "US FDA Compliance Docs", value: 100 },
                { label: "Asia-Pacific Import Permits", value: 92 }
            ],
            ctaText: "View Full Compliance Vault",
            accentColor: "var(--theme-primary)"
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            ctaText: { type: "string", label: "CTA Text", category: "content" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            items: {
                type: "array-of-objects",
                label: "Compliance Items",
                category: "content",
                fields: {
                    label: { type: "string", label: "Label" },
                    value: { type: "number", label: "Progress (0-100)" }
                }
            }
        }
    },

    // ============================================================================
    // CAREPLUS COMPONENTS - Circular Stat Card
    // ============================================================================
    {
        type: "CircularStatCard",
        category: "layout",
        name: "Circular Stat Card",
        description: "Stat card with SVG circular progress ring",
        defaultProps: {
            value: "90%",
            progress: 90,
            title: "Metric Title",
            description: "Brief description of the metric.",
            accentColor: "#008080",
            backgroundColor: "var(--theme-background)",
            borderRadius: 24
        },
        editableProps: {
            value: { type: "string", label: "Display Value", category: "content" },
            progress: { type: "number", label: "Progress (0-100)", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius", category: "styles" }
        }
    },

    // ============================================================================
    // CAREPLUS COMPONENTS - Progress Stat Card
    // ============================================================================
    {
        type: "ProgressStatCard",
        category: "layout",
        name: "Progress Stat Card",
        description: "Stat card with multiple progress bars",
        defaultProps: {
            title: "Progress Metric",
            description: "Progress reduction over time.",
            accentColor: "#008080",
            backgroundColor: "var(--theme-background)",
            borderRadius: 24,
            progressBars: [
                { label: "Month 0", value: 100, color: "var(--theme-border)" },
                { label: "Month 3", value: 50, color: "#008080" },
                { label: "Month 6", value: 20, color: "#008080" }
            ]
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius", category: "styles" },
            progressBars: {
                type: "array-of-objects",
                label: "Progress Bars",
                category: "content",
                fields: {
                    label: { type: "string", label: "Label" },
                    value: { type: "number", label: "Value (0-100)" },
                    color: { type: "color", label: "Bar Color" }
                }
            }
        }
    },

    // ============================================================================
    // CAREPLUS COMPONENTS - Big Number Card
    // ============================================================================
    {
        type: "BigNumberCard",
        category: "layout",
        name: "Big Number Card",
        description: "Large highlighted number with title and description",
        defaultProps: {
            value: "10x",
            title: "Metric Title",
            description: "Brief description of the metric.",
            accentColor: "#008080",
            backgroundColor: "var(--theme-background)",
            borderRadius: 24
        },
        editableProps: {
            value: { type: "string", label: "Big Value", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius", category: "styles" }
        }
    },

    // ============================================================================
    // CAREPLUS COMPONENTS - Accreditation Logos
    // ============================================================================
    {
        type: "AccreditationLogos",
        category: "layout",
        name: "Accreditation Logos",
        description: "Row of certification/accreditation badges with icons",
        defaultProps: {
            logos: [
                { icon: "ShieldCheck", text: "CERTIFIED" },
                { icon: "Award", text: "ACCREDITED" }
            ],
            iconColor: "var(--theme-border)",
            textColor: "var(--theme-text)",
            gap: 48,
            grayscale: true,
            hoverEffect: true
        },
        editableProps: {
            iconColor: { type: "color", label: "Icon Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            gap: { type: "number", label: "Gap (px)", category: "styles" },
            grayscale: { type: "boolean", label: "Grayscale", category: "styles" },
            hoverEffect: { type: "boolean", label: "Hover Effect", category: "styles" },
            logos: {
                type: "array-of-objects",
                label: "Logos",
                category: "content",
                fields: {
                    icon: { type: "icon", label: "Icon" },
                    text: { type: "string", label: "Text" }
                }
            }
        }
    },

    // ============================================================================
    // CAREPLUS COMPONENTS - Team Member Card
    // ============================================================================
    {
        type: "TeamMemberCard",
        category: "team",
        name: "Team Member Card",
        description: "Team member card with image, hover overlay, name, role, and bio",
        defaultProps: {
            name: "Team Member",
            role: "Role Title",
            bio: "Short bio or credentials.",
            imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            accentColor: "#008080",
            aspectRatio: "4/5",
            showHoverOverlay: true,
            hoverButtonText: "View Profile"
        },
        editableProps: {
            name: { type: "string", label: "Name", category: "content" },
            role: { type: "string", label: "Role", category: "content" },
            bio: { type: "rich-text", label: "Bio", category: "content" },
            imageSrc: { type: "url", label: "Image URL", category: "content" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            aspectRatio: { type: "select", label: "Aspect Ratio", options: ["1/1", "4/5", "3/4", "16/9"], category: "styles" },
            showHoverOverlay: { type: "boolean", label: "Show Hover Overlay", category: "styles" },
            hoverButtonText: { type: "string", label: "Hover Button Text", category: "content" }
        }
    },

    // ============================================================================
    // CAREPLUS COMPONENTS - Process Step Card
    // ============================================================================
    {
        type: "ProcessStepCard",
        category: "layout",
        name: "Process Step Card",
        description: "Numbered step card with title and description",
        defaultProps: {
            stepNumber: "1",
            title: "Step Title",
            description: "Step description goes here.",
            accentColor: "#008080",
            textColor: "var(--theme-text)",
            subtitleColor: "var(--theme-border)",
            backgroundColor: "transparent"
        },
        editableProps: {
            stepNumber: { type: "string", label: "Step Number", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "rich-text", label: "Description", category: "content" },
            accentColor: { type: "color", label: "Circle Color", category: "styles" },
            textColor: { type: "color", label: "Title Color", category: "styles" },
            subtitleColor: { type: "color", label: "Description Color", category: "styles" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" }
        }
    },

    // ============================================================================
    // INDUSTRIAL COMPONENTS
    // ============================================================================
    {
        type: "IndustrialHero",
        category: "layout",
        name: "Industrial Hero",
        description: "Premium hero section for industrial and logistics templates",
        defaultProps: {
            backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600",
            backgroundOverlay: "rgba(0,0,0,0.5)",
            minHeight: "85vh",
            paddingX: { mobile: "24px", tablet: "60px", desktop: "80px" },
            paddingY: { mobile: "64px", tablet: "80px", desktop: "120px" },
            badgeText: "High-Efficiency Solutions",
            badgeBackgroundColor: "rgba(255,255,255,0.1)",
            badgeColor: "var(--theme-background)",
            badgeShowPing: true,
            badgePingColor: "#ed2626",
            headlineText: "GLOBAL FREIGHT\n[LOGISTICS SOLUTIONS](#ed2626)",
            headlineTag: "h1",
            headlineColor: "var(--theme-background)",
            paragraphText: "Empowering your supply chain with precision, speed, and real-time visibility across the entire global network.",
            paragraphColor: "rgba(255,255,255,0.8)",
            paragraphSize: "lg",
            statusItems: [
                { text: "01", subtext: "Swift Response", color: "var(--theme-background)" },
                { text: "02", subtext: "Global Reach", color: "var(--theme-background)" }
            ]
        },
        editableProps: {
            backgroundImage: { type: "url", label: "Background Image", category: "content" },
            backgroundOverlay: { type: "color", label: "Overlay Color", category: "styles" },
            minHeight: { type: "string", label: "Min Height", category: "styles" },
            paddingX: { type: "responsive-number", label: "Padding X", category: "styles" },
            paddingY: { type: "responsive-number", label: "Padding Y", category: "styles" },
            badgeText: { type: "string", label: "Badge Text", category: "content" },
            badgeBackgroundColor: { type: "color", label: "Badge BG", category: "styles" },
            badgeColor: { type: "color", label: "Badge Text Color", category: "styles" },
            badgeShowPing: { type: "boolean", label: "Show Ping", category: "styles" },
            badgePingColor: { type: "color", label: "Ping Color", category: "styles" },
            headlineText: { type: "string", label: "Headline Text", category: "content" },
            headlineTag: { type: "string", label: "Headline Tag (h1-h6)", category: "styles" },
            headlineColor: { type: "color", label: "Headline Color", category: "styles" },
            paragraphText: { type: "string", label: "Paragraph Text", category: "content" },
            paragraphColor: { type: "color", label: "Paragraph Color", category: "styles" },
            paragraphSize: { type: "string", label: "Paragraph Size (sm/base/lg)", category: "styles" },
            statusItems: {
                type: "array-of-objects",
                label: "Status Items",
                category: "content",
                fields: {
                    text: { type: "string", label: "Text" },
                    subtext: { type: "string", label: "Subtext" },
                    color: { type: "color", label: "Text Color" },
                    subtextColor: { type: "color", label: "Subtext Color" },
                    size: { type: "string", label: "Size (xs/base)" },
                    fontWeight: { type: "string", label: "Font Weight" },
                    textTransform: { type: "string", label: "Text Transform" },
                    letterSpacing: { type: "string", label: "Letter Spacing" }
                }
            }
        }
    },
    {
        type: "IndustrialStats",
        category: "features",
        name: "Industrial Stats",
        description: "Grid of circular metric cards for business results",
        defaultProps: {
            marginTop: -96,
            gap: 32,
            padding: 40,
            columns: { desktop: 3, tablet: 2, mobile: 1 },
            accentColor: "#ed2626",
            backgroundColor: "var(--theme-background)",
            textColor: "var(--theme-text)",
            labelColor: "#a1a1aa",
            metricColor: "#ed2626",
            items: [
                { metric: "25+", label: "Countries Served", description: "Global operational network across five continents." },
                { metric: "99%", label: "On-time Delivery", description: "Precision scheduling and automated route optimization." },
                { metric: "24/7", label: "Active Support", description: "Real-time tracking and dedicated account management." }
            ]
        },
        editableProps: {
            marginTop: { type: "responsive-number", label: "Margin Top (px)", category: "styles" },
            gap: { type: "responsive-number", label: "Gap (px)", category: "styles" },
            padding: { type: "responsive-number", label: "Padding (px)", category: "styles" },
            columns: { type: "responsive-number", label: "Columns", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            backgroundColor: { type: "color", label: "Card BG Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            labelColor: { type: "color", label: "Label Color", category: "styles" },
            metricColor: { type: "color", label: "Metric Color", category: "styles" },
            items: {
                type: "array-of-objects",
                label: "Metric Cards",
                category: "content",
                fields: {
                    metric: { type: "string", label: "Metric (e.g. 99%)" },
                    label: { type: "string", label: "Label" },
                    description: { type: "string", label: "Description" }
                }
            }
        }
    },
    {
        type: "IndustrialArchitecture",
        category: "features",
        name: "Industrial Architecture",
        description: "Staggered feature rows with grayscale hover transitions",
        defaultProps: {
            paddingY: 128,
            maxWidth: "1280px",
            accentColor: "#ed2626",
            rowBackgroundColor: "var(--theme-background)",
            titleColor: "var(--theme-text)",
            descriptionColor: "var(--theme-border)",
            headerTitleColor: "var(--theme-text)",
            headerDescColor: "#71717a",
            sectionTitle: "Global Freight\nArchitecture",
            sectionDesc: "SwiftLogix provides a comprehensive suite of logistics services tailored to the unique needs of industrial clients.",
            rows: [
                {
                    badge: "Section 01",
                    title: "Smart Warehousing",
                    description: "Our facilities utilize advanced AI to optimize space utilization and pick-and-pack efficiency.",
                    buttonText: "Explore More",
                    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
                    isReversed: false
                }
            ]
        },
        editableProps: {
            paddingY: { type: "responsive-number", label: "Padding Y (px)", category: "styles" },
            maxWidth: { type: "string", label: "Max Width", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            rowBackgroundColor: { type: "color", label: "Row BG Color", category: "styles" },
            titleColor: { type: "color", label: "Row Title Color", category: "styles" },
            descriptionColor: { type: "color", label: "Row Desc Color", category: "styles" },
            headerTitleColor: { type: "color", label: "Header Title Color", category: "styles" },
            headerDescColor: { type: "color", label: "Header Desc Color", category: "styles" },
            sectionTitle: { type: "string", label: "Section Title", category: "content" },
            sectionDesc: { type: "string", label: "Section Description", category: "content" },
            rows: {
                type: "array-of-objects",
                label: "Feature Rows",
                category: "content",
                fields: {
                    badge: { type: "string", label: "Badge" },
                    title: { type: "string", label: "Title" },
                    description: { type: "string", label: "Description" },
                    buttonText: { type: "string", label: "Button Text" },
                    image: { type: "url", label: "Image URL" },
                    isReversed: { type: "boolean", label: "Reverse Layout" }
                }
            }
        }
    },
    {
        type: "PartnerLogosGrid",
        category: "features",
        name: "Partner Logos Grid",
        description: "Grid of partner logos with optional links",
        defaultProps: {
            title: "Our Partners",
            description: "Trusted by industry leaders worldwide",
            logos: [
                {
                    name: "Partner 1",
                    url: "https://via.placeholder.com/150",
                    link: "#"
                },
                {
                    name: "Partner 2",
                    url: "https://via.placeholder.com/150",
                    link: "#"
                },
                {
                    name: "Partner 3",
                    url: "https://via.placeholder.com/150",
                    link: "#"
                },
                {
                    name: "Partner 4",
                    url: "https://via.placeholder.com/150",
                    link: "#"
                }
            ],
            columns: { desktop: 4, tablet: 3, mobile: 2 },
            gap: 32,
            grayscale: true,
            opacity: 0.7
        },
        editableProps: {
            title: { type: "string", label: "Title", category: "content" },
            description: { type: "string", label: "Description", category: "content" },
            columns: { type: "responsive-number", label: "Columns", category: "styles" },
            gap: { type: "number", label: "Gap (px)", category: "styles" },
            grayscale: { type: "boolean", label: "Grayscale", category: "styles" },
            opacity: { type: "number", label: "Opacity (0-1)", category: "styles" },
            logos: {
                type: "array-of-objects",
                label: "Logos",
                category: "content",
                fields: {
                    name: { type: "string", label: "Name" },
                    url: { type: "image", label: "Logo Image" },
                    link: { type: "link", label: "Link URL" }
                }
            }
        }
    },

    {
        type: "CultureGalleryCard",
        category: "features",
        name: "Culture Gallery Card",
        description: "Image card with overlay for culture gallery sections",
        defaultProps: {
            image: "https://via.placeholder.com/500x600",
            imageAlt: "Gallery image",
            category: "Category",
            title: "Card Title",
            buttonText: "Join Us",
            buttonLink: "#",
            height: 500,
            marginTop: 0,
            borderRadius: 24,
            overlayOpacity: 0.4
        },
        editableProps: {
            image: { type: "image", label: "Image", category: "content" },
            imageAlt: { type: "string", label: "Image Alt Text", category: "content" },
            category: { type: "string", label: "Category Label", category: "content" },
            title: { type: "string", label: "Title", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            buttonLink: { type: "link", label: "Button Link", category: "content" },
            height: { type: "number", label: "Height (px)", category: "styles" },
            marginTop: { type: "number", label: "Margin Top (px)", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius (px)", category: "styles" },
            overlayOpacity: { type: "number", label: "Overlay Opacity (0-1)", category: "styles" }
        }
    },

    {
        type: "JobOpeningCard",
        category: "features",
        name: "Job Opening Card",
        description: "Clickable job opening card with type and location",
        defaultProps: {
            jobType: "Full-Time",
            location: "Remote",
            title: "Job Title",
            buttonText: "Apply Now",
            buttonLink: "#",
            backgroundColor: "var(--theme-background)",
            borderColor: "#e4e4e7",
            hoverShadow: true,
            padding: 32,
            borderRadius: 16
        },
        editableProps: {
            jobType: { type: "string", label: "Job Type", category: "content" },
            location: { type: "string", label: "Location", category: "content" },
            title: { type: "string", label: "Job Title", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            buttonLink: { type: "link", label: "Button Link", category: "content" },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            hoverShadow: { type: "boolean", label: "Hover Shadow Effect", category: "styles" },
            padding: { type: "number", label: "Padding (px)", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius (px)", category: "styles" }
        }
    },

    {
        type: "AcademiqCourseCard",
        category: "education",
        name: "Academiq Course Card",
        description: "Course card for online learning platform with image, badge, metadata, and enrollment buttons",
        defaultProps: {
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
            imageAlt: "Course Thumbnail",
            badge: "Bestseller",
            title: "Full Stack Development",
            titleColor: "var(--theme-text)",
            titleSize: "lg",
            description: "Learn modern web development from basics to advanced deployment",
            duration: "12 Weeks",
            students: "1.2k Students",
            buttonText: "Enroll Now",
            backgroundColor: "var(--theme-background)",
            borderColor: "var(--theme-border)",
            badgeColor: "var(--theme-background)",
            badgeBgColor: "#0048B3",
            buttonColor: "#0048B3",
            buttonTextColor: "var(--theme-background)"
        },
        editableProps: {
            image: { type: "image", label: "Course Image", category: "content" },
            imageAlt: { type: "string", label: "Image Alt Text", category: "content" },
            badge: { type: "string", label: "Badge Text", category: "content" },
            title: { type: "string", label: "Course Title", category: "content" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            titleSize: { type: "string", label: "Title Size", category: "styles" },
            description: { type: "string", label: "Course Description", category: "content" },
            duration: { type: "string", label: "Duration", category: "content" },
            students: { type: "string", label: "Student Count", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            backgroundColor: { type: "color", label: "Card Background", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            badgeColor: { type: "color", label: "Badge Text Color", category: "styles" },
            badgeBgColor: { type: "color", label: "Badge Background Color", category: "styles" },
            buttonColor: { type: "color", label: "Button Color", category: "styles" },
            buttonTextColor: { type: "color", label: "Button Text Color", category: "styles" }
        }
    },

    {
        type: "CertificationTrackCard",
        category: "education",
        name: "Certification Track Card",
        description: "Certification track voucher card with benefits list and call-to-action button",
        defaultProps: {
            cardTitle: "Voucher Package",
            benefits: ["Official Exam Retake Policy", "Premium Practice Tests", "12 Months Validity"],
            buttonText: "Claim Official Voucher →",
            buttonLink: "#",
            buttonColor: "#0048B3",
            buttonHoverColor: "#003399",
            titleColor: "var(--theme-text)",
            textColor: "var(--theme-text)",
            backgroundColor: "var(--theme-background)",
            borderColor: "var(--theme-border)",
            shadowIntensity: "medium"
        },
        editableProps: {
            cardTitle: { type: "string", label: "Card Title", category: "content" },
            benefits: { type: "string-array", label: "Benefits List", category: "content" },
            buttonText: { type: "string", label: "Button Text", category: "content" },
            buttonLink: { type: "link", label: "Button Link", category: "content" },
            buttonColor: { type: "color", label: "Button Color", category: "styles" },
            buttonHoverColor: { type: "color", label: "Button Hover Color", category: "styles" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            backgroundColor: { type: "color", label: "Card Background", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            shadowIntensity: { type: "select", label: "Shadow Intensity", options: ["light", "medium", "heavy"], category: "styles" }
        }
    },

    {
        type: "DataMarquee",
        category: "layout",
        name: "Data Marquee",
        description: "Animated scrolling marquee for displaying items, brands, or metrics in a continuous scroll",
        defaultProps: {
            showTitle: false,
            title: "LIVE METRICS:",
            titleIcon: "BarChart3",
            backgroundColor: "var(--theme-background)",
            darkBackgroundColor: "var(--theme-text)",
            textColor: "#101912",
            darkTextColor: "var(--theme-background)",
            labelColor: "rgba(16, 25, 18, 0.4)",
            darkLabelColor: "#999999",
            accentColor: "var(--theme-primary)",
            borderColor: "#e9f1eb",
            darkBorderColor: "#333333",
            speed: 30,
            direction: "left",
            showBorder: true,
            items: [
                { label: "Growth", value: "+14.2%", icon: "TrendingUp" },
                { label: "Status", value: "Active", icon: "CheckCircle" },
                { label: "Volume", value: "1.2M", icon: "BarChart3" }
            ]
        },
        editableProps: {
            showTitle: { type: "boolean", label: "Show Title", category: "content" },
            title: { type: "string", label: "Title Text", category: "content" },
            titleIcon: { type: "string", label: "Title Icon Name", category: "content" },
            items: {
                type: "array-of-objects",
                label: "Marquee Items",
                category: "content",
                fields: {
                    label: { type: "string", label: "Label" },
                    value: { type: "string", label: "Value" },
                    icon: { type: "string", label: "Icon Name" }
                }
            },
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            darkBackgroundColor: { type: "color", label: "Dark Background Color", category: "styles" },
            textColor: { type: "color", label: "Text Color", category: "styles" },
            darkTextColor: { type: "color", label: "Dark Text Color", category: "styles" },
            labelColor: { type: "color", label: "Label Color", category: "styles" },
            darkLabelColor: { type: "color", label: "Dark Label Color", category: "styles" },
            accentColor: { type: "color", label: "Accent Color", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            darkBorderColor: { type: "color", label: "Dark Border Color", category: "styles" },
            speed: { type: "number", label: "Animation Speed (seconds)", category: "behavior" },
            direction: { type: "select", label: "Scroll Direction", options: ["left", "right"], category: "behavior" },
            showBorder: { type: "boolean", label: "Show Border", category: "styles" }
        }
    },

    {
        type: "MetricsCard",
        category: "cards",
        name: "Metrics Card",
        description: "Styled metrics card with progress bars, title, subtitle, and team member info",
        defaultProps: {
            backgroundColor: "rgba(99, 102, 241, 0.05)",
            borderColor: "rgba(99, 102, 241, 0.2)",
            border: "1px solid",
            borderRadius: 24,
            padding: 32,
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
            title: "LIVE PULSE",
            titleColor: "var(--theme-primary)",
            subtitle: "AI Metrics",
            subtitleColor: "var(--theme-text)",
            progressBars: [
                {
                    label: "System Efficiency",
                    value: 94,
                    percentage: 94,
                    progressColor: "var(--theme-primary)"
                },
                {
                    label: "Neural Responses",
                    value: 78,
                    percentage: 78,
                    progressColor: "#818cf8"
                }
            ],
            teamName: "Sarah Jenkins",
            teamRole: "Head of Innovation",
            teamImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdy4gw2PNXT1m0iB_eSvAiuBilyqGGHtapBDb5w7Gy9lNrpvc_PZYcj8Mvi55OeHheyxovAfZAfPGicLJLWgn7PJKx3Z8qK5KDPM9KkvmUokzeG45OX4HGNccN-l66VuatPQzSKcO3xxigUopg382p24ZSjJhaYktxHogOulIirULKWo3NaTzJ08FkRG4e6jJ5pXnoEDpOrp4de0BLhvmUUnlWuJBk_c6eDG43V4bqTKJbE19xlMsN48P31IFRum1pfjzXfiOlQQ8"
        },
        editableProps: {
            // Card styling
            backgroundColor: { type: "color", label: "Background Color", category: "styles" },
            borderColor: { type: "color", label: "Border Color", category: "styles" },
            border: { type: "string", label: "Border Style", category: "styles" },
            borderRadius: { type: "number", label: "Border Radius (px)", category: "styles" },
            padding: { type: "number", label: "Padding (px)", category: "styles" },
            boxShadow: { type: "string", label: "Box Shadow (CSS)", category: "styles" },

            // Title & Subtitle
            title: { type: "string", label: "Card Title", category: "content" },
            titleColor: { type: "color", label: "Title Color", category: "styles" },
            subtitle: { type: "string", label: "Card Subtitle", category: "content" },
            subtitleColor: { type: "color", label: "Subtitle Color", category: "styles" },

            // Progress Bars
            progressBars: {
                type: "array-of-objects",
                label: "Progress Bars",
                category: "content",
                fields: {
                    label: { type: "string", label: "Bar Label" },
                    value: { type: "number", label: "Numeric Value" },
                    percentage: { type: "number", label: "Percentage (0-100)" },
                    progressColor: { type: "color", label: "Bar Color" }
                }
            },

            // Team Member Info
            teamName: { type: "string", label: "Team Member Name", category: "content" },
            teamRole: { type: "string", label: "Team Member Role", category: "content" },
            teamImage: { type: "image", label: "Team Member Image", category: "content" }
        }
    },

    sidebarCardsComponent,
    imageWithFeaturesComponent,
    horizontalCarouselComponent,
    techNovaContactFormComponent
];
