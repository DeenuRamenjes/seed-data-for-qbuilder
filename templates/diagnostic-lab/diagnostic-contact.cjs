/**
 * Diagnostic Lab Template - Contact Page
 * Theme: Swiss Minimalism / Editorial Diagnostics
 * Primary: #cf24ff (Purple)
 * Secondary: #FF24C1 (Pink)
 * Accent: #6224ff (Deep Purple)
 * Background: #ffffff
 * Font: Space Grotesk
 */

const diagnosticHome = require('./diagnostic-home.cjs');

const diagnosticContact = {
    // ============================================================================
    // HEADER (shared)
    // ============================================================================
    header: diagnosticHome.header,

    // ============================================================================
    // PAGE SECTIONS
    // ============================================================================
    sections: [
        // --------------------------------------------------------------------------
        // HERO — Contact Header
        // --------------------------------------------------------------------------
        {
            key: "contact-hero",
            name: "Contact Hero",
            structure: {
                type: "HeroGradient",
                defaultProps: {
                    backgroundColor: "#0f172a",
                    paddingTop: 50,
                    paddingBottom: 50
                },
                props: {
                    badgeText: "Get In Touch",
                    title: "Begin Your Diagnostic Journey",
                    lead: "Our concierge team is ready to guide you through our comprehensive suite of diagnostic services. Reach out to schedule a consultation or request a sample collection kit.",
                    accentColor: "#cf24ff",
                    secondaryColor: "#FF24C1"
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
                    backgroundColor: "#fafafa",
                    paddingY: 30,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk"
                },
                columns: [{
                    id: "form-col",
                    width: "100%",
                    elements: [{
                        id: "modern-form",
                        type: "ModernForm",
                        props: {
                            subtitle: "SCHEDULE A CONSULTATION",
                            title: "Request Your Diagnostic Panel",
                            description: "Our concierge team will contact you within 24 hours to discuss your diagnostic requirements, schedule sample collection, and provide a detailed cost estimate.",
                            email: "inquiries@helixresearch.com",
                            phone: "+41 44 200 1200",
                            nameLabel: "Full Name",
                            namePlaceholder: "Dr. Stefan Müller",
                            emailLabel: "Email Address",
                            emailPlaceholder: "stefan@example.com",
                            selectLabel: "Panel of Interest",
                            selectOptions: "Select a panel...,Whole Genome Sequencing,GI Effects® Comprehensive,NeuroAdvanced™ Profile,NutrEval® FMV,Executive Health Screen,Longevity Bio-markers,Corporate Wellness,Custom Panel",
                            messageLabel: "Additional Information",
                            messagePlaceholder: "Please describe your diagnostic needs, preferred timeline, and any relevant medical context...",
                            submitText: "Submit Inquiry"
                        }
                    }]
                }]
            }
        },
        // --------------------------------------------------------------------------
        // CONTACT INFO CARDS
        // --------------------------------------------------------------------------
        {
            key: "contact-info-cards",
            name: "Contact Info Cards",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 20,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk",
                    gap: 32
                },
                columns: [
                    {
                        id: "info-header",
                        width: "100%",
                        elements: [
                            { id: "info-badge", type: "Paragraph", props: { text: "CONTACT CHANNELS", color: "#cf24ff", size: "xs", fontWeight: "700", letterSpacing: "widest", textTransform: "uppercase", marginBottom: 12 } },
                            { id: "info-h2", type: "Heading", props: { text: "Multiple Ways to Connect", tag: "h2", size: "4xl", fontWeight: "800", color: "#0f172a", marginBottom: 48, letterSpacing: "tight" } }
                        ]
                    },
                    {
                        id: "info-grid",
                        width: "100%",
                        layout: "grid",
                        columns: 3,
                        gap: 32,
                        elements: [
                            {
                                type: "StyleCard",
                                props: { icon: "MapPin", label: "Visit", title: "Hauptquartier", description: "Helix Research Laboratory AG\nBahnhofstrasse 42\n8001 Zürich, Switzerland", accentColor: "#cf24ff" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "Phone", label: "Call", title: "Concierge Line", description: "General: +41 44 200 1200\nEmergency: +41 44 200 1299\nMon — Fri, 08:00 — 18:00 CET", accentColor: "#6224ff" }
                            },
                            {
                                type: "StyleCard",
                                props: { icon: "Mail", label: "Email", title: "Digital Channels", description: "General: inquiries@helixresearch.com\nResults: results@helixresearch.com\nPartners: partners@helixresearch.com", accentColor: "#FF24C1" }
                            }
                        ]
                    }
                ]
            }
        },
        // --------------------------------------------------------------------------
        // FAQ SECTION
        // --------------------------------------------------------------------------
        {
            key: "contact-faq",
            name: "Frequently Asked Questions",
            structure: {
                type: "Section",
                defaultProps: {
                    backgroundColor: "#ffffff",
                    paddingY: 96,
                    paddingX: 48,
                    fullWidth: true,
                    fontFamily: "Space Grotesk",
                    gap: 32
                },
                columns: [
                    {
                        id: "faq-header",
                        width: "100%",
                        elements: [
                            { id: "faq-badge", type: "Paragraph", props: { text: "COMMON QUESTIONS", color: "#cf24ff", size: "xs", fontWeight: "700", letterSpacing: "widest", textTransform: "uppercase", align: "center", marginBottom: 12 } },
                            { id: "faq-h2", type: "Heading", props: { text: "Frequently Asked Questions", tag: "h2", size: "4xl", fontWeight: "800", color: "#0f172a", align: "center", marginBottom: 48, letterSpacing: "tight" } }
                        ]
                    },
                    {
                        id: "faq-content",
                        width: "100%",
                        elements: [{
                            id: "faq-accordion",
                            type: "FAQ",
                            props: {
                                layout: "grid",
                                items: [
                                    { question: "How do I collect and submit a sample?", answer: "We provide a comprehensive home collection kit with step-by-step instructions. For blood-based panels, we can arrange a mobile phlebotomy service at your convenience, or you may visit any of our certified collection centers." },
                                    { question: "What is the turnaround time for results?", answer: "Standard panels are processed within 24-72 hours. Whole genome sequencing and specialized panels may require 7-14 business days. Rush processing is available for select panels at an additional cost." },
                                    { question: "Are results shared with my physician?", answer: "Results are delivered via our encrypted patient portal. You can grant access to your physician directly through the platform. We also provide a complimentary consultation with one of our specialists to review complex results." },
                                    { question: "Do you offer corporate wellness programs?", answer: "Yes. Our corporate wellness division provides scalable diagnostic programs for organizations of all sizes, including executive health screenings, longitudinal health tracking, and dedicated account management." },
                                    { question: "What certifications does Helix Research hold?", answer: "All our facilities are ISO 15189:2022 certified. We also hold CLIA, CAP, and Swiss Medic accreditations. Our data handling complies with GDPR, HIPAA, and Swiss Data Protection standards." },
                                    { question: "Do you accept health insurance?", answer: "We partner with several major international health insurance providers. Depending on your plan and the specific panels requested, full or partial coverage may apply. Please contact our concrigo billing department to verify your benefits prior to testing." },
                                    { question: "Can I upgrade my panel after placing an order?", answer: "Yes, you can upgrade an order as long as the sample has not yet been processed by the lab. If the requested panel requires a different sample type or volume, a new collection kit may need to be dispatched." },
                                    { question: "How do you ensure data privacy and security?", answer: "Protecting your biological data is our highest priority. All data is end-to-end encrypted using military-grade protocols. We operate on a zero-knowledge architecture, meaning your genomic and biomarker data is decoupled from your personally identifiable information (PII) during analysis." }
                                ],
                                accentColor: "#cf24ff",
                                textColor: "#0f172a"
                            }
                        }]
                    }
                ]
            }
        }
    ],

    // ============================================================================
    // FOOTER (shared)
    // ============================================================================
    footer: diagnosticHome.footer
};

module.exports = diagnosticContact;
