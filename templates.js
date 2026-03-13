
import { sectionTemplates } from './sections.js';
import { modernSaaSTemplate } from './templates/modern-saas/modern-saas-home.js';
import { modernSaaSAbout } from './templates/modern-saas/modern-saas-about.js';
import { modernSaaSPricing } from './templates/modern-saas/modern-saas-pricing.js';
import { modernSaaSResources } from './templates/modern-saas/modern-saas-resources.js';
import { modernSaaSContact } from './templates/modern-saas/modern-saas-contact.js';
import { portfolioHome } from './templates/portfolio/portfolio-home.js';
import { devPortfolioHome } from './templates/dev-portfolio/dev-portfolio-home.js';
import techInnovationHomeModule from './templates/tech-innovation/tech-innovation-home.cjs';
import techInnovationInfraModule from './templates/tech-innovation/tech-innovation-infrastructure.cjs';
import techInnovationCareersModule from './templates/tech-innovation/tech-innovation-careers.cjs';
import techInnovationCaseStudyModule from './templates/tech-innovation/tech-innovation-case-study.cjs';
import designStudioHomeModule from './templates/design-studio/design-studio-home.cjs';


const techInnovationTemplate = techInnovationHomeModule.techInnovationTemplate;
const techInnovationInfra = techInnovationInfraModule;
const techInnovationCareers = techInnovationCareersModule;
const techInnovationCaseStudy = techInnovationCaseStudyModule;
const designStudioHome = designStudioHomeModule;
import designStudioServicesModule from './templates/design-studio/design-studio-services.cjs';
const designStudioServices = designStudioServicesModule;
import designStudioProjectModule from './templates/design-studio/design-studio-project.cjs';
const designStudioProject = designStudioProjectModule;
import designStudioContactModule from './templates/design-studio/design-studio-contact.cjs';
const designStudioContact = designStudioContactModule;
import designStudioProjectsModule from './templates/design-studio/design-studio-projects.cjs';
const designStudioProjects = designStudioProjectsModule;
import greenHarvestHomeModule from './templates/green-harvest/green-harvest-home.cjs';
const greenHarvestHome = greenHarvestHomeModule;
import greenHarvestLogisticsModule from './templates/green-harvest/green-harvest-logistics.cjs';
const greenHarvestLogistics = greenHarvestLogisticsModule.greenHarvestLogistics;
import greenHarvestContactModule from './templates/green-harvest/green-harvest-contact.cjs';
const greenHarvestContact = greenHarvestContactModule.greenHarvestContact;
import greenHarvestSustainabilityModule from './templates/green-harvest/green-harvest-sustainability.cjs';
const greenHarvestSustainability = greenHarvestSustainabilityModule.greenHarvestSustainability;
import agriEcosystemHomeModule from './templates/agri-ecosystem/agri-ecosystem-home.cjs';
const agriEcosystemHome = agriEcosystemHomeModule.agriEcosystemHome;
import agriEcosystemPortfolioModule from './templates/agri-ecosystem/agri-ecosystem-portfolio.cjs';
const agriEcosystemPortfolio = agriEcosystemPortfolioModule.agriEcosystemPortfolio;
import agriEcosystemSupplyChainModule from './templates/agri-ecosystem/agri-ecosystem-supply-chain.cjs';
const agriEcosystemSupplyChain = agriEcosystemSupplyChainModule.agriEcosystemSupplyChain;
import agriEcosystemStoryModule from './templates/agri-ecosystem/agri-ecosystem-story.cjs';
const agriEcosystemStory = agriEcosystemStoryModule.agriEcosystemStory;
import careplusHomeModule from './templates/hospital/careplus-home.cjs';
const careplusHome = careplusHomeModule;
import careplusDiagnosticsModule from './templates/hospital/careplus-diagnostics.cjs';
const careplusDiagnostics = careplusDiagnosticsModule;
import careplusProgramsModule from './templates/hospital/careplus-programs.cjs';
const careplusPrograms = careplusProgramsModule;
import vitalisHomeModule from './templates/hospital-2/vitalis-home.cjs';
const vitalisHome = vitalisHomeModule;
import vitalisAboutModule from './templates/hospital-2/vitalis-about.cjs';
const vitalisAbout = vitalisAboutModule;
import vitalisDepartmentsModule from './templates/hospital-2/vitalis-departments.cjs';
const vitalisDepartments = vitalisDepartmentsModule;
import vitalisContactModule from './templates/hospital-2/vitalis-contact.cjs';
const vitalisContact = vitalisContactModule;
import swiftlogixHomeModule from './templates/logistics/swiftlogix-home.cjs';
const swiftlogixHome = swiftlogixHomeModule;
import swiftlogixOpsModule from './templates/logistics/swiftlogix-ops.cjs';
const swiftlogixOps = swiftlogixOpsModule;
import swiftlogixSustainabilityModule from './templates/logistics/swiftlogix-sustainability.cjs';
const swiftlogixSustainability = swiftlogixSustainabilityModule;
import swiftlogixCareersModule from './templates/logistics/swiftlogix-careers.cjs';
const swiftlogixCareers = swiftlogixCareersModule.default || swiftlogixCareersModule;
import academiqHomeModule from './templates/education/academiq-home.cjs';
const academiqHome = academiqHomeModule;
import academiqAboutModule from './templates/education/academiq-about.cjs';
const academiqAbout = academiqAboutModule;
import academiqVisionModule from './templates/education/academiq-vision.cjs';
const academiqVision = academiqVisionModule;
import academiqCertificationsModule from './templates/education/academiq-certifications.cjs';
const academiqCertifications = academiqCertificationsModule;
import techCompanyHomeModule from './templates/tech-company/tech-home.cjs';
const techCompanyHome = techCompanyHomeModule;
import techCompanyPathwaysModule from './templates/tech-company/tech-pathways.cjs';
const techCompanyPathways = techCompanyPathwaysModule;
import techCompanyAboutModule from './templates/tech-company/tech-about.cjs';
const techCompanyAbout = techCompanyAboutModule;
import techCompanyTestimonialsModule from './templates/tech-company/tech-testimonials.cjs';
const techCompanyTestimonials = techCompanyTestimonialsModule;
import techCompanyContactModule from './templates/tech-company/tech-contact.cjs';
const techCompanyContact = techCompanyContactModule;
import techNovaModule from './templates/tech-nova/tech-nova-home.cjs';
const techNova = techNovaModule;
import techNovaServicesModule from './templates/tech-nova/tech-nova-services.cjs';
const techNovaServices = techNovaServicesModule;
import techNovaAboutModule from './templates/tech-nova/tech-nova-about.cjs';
const techNovaAbout = techNovaAboutModule;
import techNovaContactModule from './templates/tech-nova/tech-nova-contact.cjs';
const techNovaContact = techNovaContactModule;
import urbanNestHomeModule from './templates/urban-nest/urban-nest-home.cjs';
const urbanNestHome = urbanNestHomeModule.urbanNestHome;
import urbanNestListingsModule from './templates/urban-nest/urban-nest-listings.cjs';
const urbanNestListings = urbanNestListingsModule.urbanNestListings;
import urbanNestMethodologyModule from './templates/urban-nest/urban-nest-methodology.cjs';
const urbanNestMethodology = urbanNestMethodologyModule.urbanNestMethodology;

import educationHomeModule from './templates/education-2/education-home.cjs';
const educationHome = educationHomeModule;
import educationAboutModule from './templates/education-2/education-about.cjs';
const educationAbout = educationAboutModule;
import educationContactModule from './templates/education-2/education-contact.cjs';
const educationContact = educationContactModule;
import educationCoursesModule from './templates/education-2/education-courses.cjs';
const educationCourses = educationCoursesModule;

import financeHeroModule from './templates/finance/finance-hero.cjs';
const financeHero = financeHeroModule;
import financeAboutModule from './templates/finance/finance-about.cjs';
const financeAbout = financeAboutModule;
import financeOurClientsModule from './templates/finance/finance-ourclients.cjs';
const financeOurClients = financeOurClientsModule;
import financeContactModule from './templates/finance/finance-contact.cjs';
const financeContact = financeContactModule;

import travelHomeModule from './templates/travel/travel-home.cjs';
const travelHome = travelHomeModule;
import travelAboutModule from './templates/travel/travel-about.cjs';
const travelAbout = travelAboutModule;
import travelServicesModule from './templates/travel/travel-services.cjs';
const travelServices = travelServicesModule;
import travelBlogsModule from './templates/travel/travel-blogs.cjs';
const travelBlogs = travelBlogsModule;
import travelContactModule from './templates/travel/travel-contact.cjs';
const travelContact = travelContactModule;

import foodHomeModule from './templates/food/food-home.cjs';
const foodHome = foodHomeModule;
import foodAboutModule from './templates/food/food-about.cjs';
const foodAbout = foodAboutModule;
import foodContactModule from './templates/food/food-contact.cjs';
const foodContact = foodContactModule;
import foodCareersModule from './templates/food/food-careers.cjs';
const foodCareers = foodCareersModule;
import foodTestimonialsModule from './templates/food/food-testimonials.cjs';
const foodTestimonials = foodTestimonialsModule;

import ecommerceHomeModule from './templates/e-commerce/ecommerce-home.cjs';
const ecommerceHome = ecommerceHomeModule;
import ecommerceContactModule from './templates/e-commerce/ecommerce-contact.cjs';
const ecommerceContact = ecommerceContactModule;
import ecommerceAboutModule from './templates/e-commerce/ecommerce-about.cjs';
const ecommerceAbout = ecommerceAboutModule;
import ecommerceProductsModule from './templates/e-commerce/ecommerce-products.cjs';
const ecommerceProducts = ecommerceProductsModule;



import realEstateHomeModule from './templates/real-estate/real-estate-home.cjs';
const realEstateHome = realEstateHomeModule;
import realEstateAboutModule from './templates/real-estate/real-estate-about.cjs';
const realEstateAbout = realEstateAboutModule;
import realEstateContactModule from './templates/real-estate/real-estate-contact.cjs';
const realEstateContact = realEstateContactModule;
import realEstateBlogsModule from './templates/real-estate/real-estate-blogs.cjs';
const realEstateBlogs = realEstateBlogsModule;

import agentProfileModule from './templates/real-estate-agent/agent-profile.cjs';
const agentProfile = agentProfileModule;

import constructionHomeModule from './templates/construction/construction-home.cjs';
const constructionHome = constructionHomeModule;
import constructionAboutModule from './templates/construction/construction-about.cjs';
const constructionAbout = constructionAboutModule;
import constructionGalleryModule from './templates/construction/construction-gallery.cjs';
const constructionGallery = constructionGalleryModule;
import constructionContactModule from './templates/construction/construction-contact.cjs';
const constructionContact = constructionContactModule;
import constructionClientsModule from './templates/construction/construction-clients.cjs';
const constructionClients = constructionClientsModule;

import { businessHome } from './templates/business/business-home.js';
import { businessAbout } from './templates/business/business-about.js';
import { businessServices } from './templates/business/business-services.js';
import { businessContact } from './templates/business/business-contact.js';

import itConsultingHomeModule from './templates/IT-consulting/it-consulting-home.cjs';
const itConsultingHome = itConsultingHomeModule;
import itConsultingAboutModule from './templates/IT-consulting/it-consulting-about.cjs';
const itConsultingAbout = itConsultingAboutModule;
import itConsultingContactModule from './templates/IT-consulting/it-consulting-contact.cjs';
const itConsultingContact = itConsultingContactModule;
import itConsultingServicesModule from './templates/IT-consulting/it-consulting-services.cjs';
const itConsultingServices = itConsultingServicesModule;

import startupMvpHomeModule from './templates/startup-mvp/startup-mvp-home.cjs';
const startupMvpHome = startupMvpHomeModule;
import startupMvpAboutModule from './templates/startup-mvp/startup-mvp-about.cjs';
const startupMvpAbout = startupMvpAboutModule;
import startupMvpPricingModule from './templates/startup-mvp/startup-mvp-pricing.cjs';
const startupMvpPricing = startupMvpPricingModule;
import startupMvpServicesModule from './templates/startup-mvp/startup-mvp-services.cjs';
const startupMvpServices = startupMvpServicesModule;

import luxaiHomeModule from './templates/luxai/luxai-home.cjs';
const luxaiHome = luxaiHomeModule;
import luxaiAboutModule from './templates/luxai/luxai-about.cjs';
const luxaiAbout = luxaiAboutModule;
import luxaiContactModule from './templates/luxai/luxai-contact.cjs';
const luxaiContact = luxaiContactModule;
import luxaiCaseStudiesModule from './templates/luxai/luxai-casestudies.cjs';
const luxaiCaseStudies = luxaiCaseStudiesModule;

import techSupportHomeModule from './templates/tech-support/tech-support-home.cjs';
const techSupportHome = techSupportHomeModule;
import techSupportServicesModule from './templates/tech-support/tech-support-services.cjs';
const techSupportServices = techSupportServicesModule;
import techSupportAboutModule from './templates/tech-support/tech-support-about.cjs';
const techSupportAbout = techSupportAboutModule;
import techSupportContactModule from './templates/tech-support/tech-support-contact.cjs';
const techSupportContact = techSupportContactModule;

import eliteHomeModule from './templates/doctorProfile/elite-home.cjs';
const eliteHome = eliteHomeModule;
import eliteAboutModule from './templates/doctorProfile/elite-about.cjs';
const eliteAbout = eliteAboutModule;
import eliteServicesModule from './templates/doctorProfile/elite-services.cjs';
const eliteServices = eliteServicesModule;
import eliteContactModule from './templates/doctorProfile/elite-contact.cjs';
const eliteContact = eliteContactModule;

import diagnosticHomeModule from './templates/diagnostic-lab/diagnostic-home.cjs';
const diagnosticHome = diagnosticHomeModule;
import diagnosticAboutModule from './templates/diagnostic-lab/diagnostic-about.cjs';
const diagnosticAbout = diagnosticAboutModule;
import diagnosticServicesModule from './templates/diagnostic-lab/diagnostic-services.cjs';
const diagnosticServices = diagnosticServicesModule;
import diagnosticContactModule from './templates/diagnostic-lab/diagnostic-contact.cjs';
const diagnosticContact = diagnosticContactModule;

import teleHomeModule from './templates/tele-medicine/tele-medicine-home.cjs';
const telemedicineHome = teleHomeModule;
import teleAboutModule from './templates/tele-medicine/tele-medicine-about.cjs';
const telemedicineAbout = teleAboutModule;
import teleSpecialistsModule from './templates/tele-medicine/tele-medicine-specialists.cjs';
const telemedicineSpecialists = teleSpecialistsModule;
import telePricingModule from './templates/tele-medicine/tele-medicine-pricing.cjs';
const telemedicinePricing = telePricingModule;

import sereneOrganicHomeModule from './templates/serene-organic/serene-organic-home.cjs';
const sereneOrganicHome = sereneOrganicHomeModule;
import sereneOrganicJourneyModule from './templates/serene-organic/serene-organic-journey.cjs';
const sereneOrganicJourney = sereneOrganicJourneyModule;
import sereneOrganicServicesModule from './templates/serene-organic/serene-organic-services.cjs';
const sereneOrganicServices = sereneOrganicServicesModule;
import sereneOrganicContactModule from './templates/serene-organic/serene-organic-contact.cjs';
const sereneOrganicContact = sereneOrganicContactModule;

import coachingHomeModule from './templates/education-3/coaching-home.cjs';
const coachingHome = coachingHomeModule;
import coachingAboutModule from './templates/education-3/coaching-about.cjs';
const coachingAbout = coachingAboutModule;
import coachingCoursesModule from './templates/education-3/coaching-courses.cjs';
const coachingCourses = coachingCoursesModule;
import coachingContactModule from './templates/education-3/coaching-contact.cjs';
const coachingContact = coachingContactModule;

// Nova Academy Template
import novaAcademyHomeModule from './templates/nova-academy/nova-academy-home.cjs';
const novaAcademyHome = novaAcademyHomeModule;
import novaAcademyAboutModule from './templates/nova-academy/nova-academy-about.cjs';
const novaAcademyAbout = novaAcademyAboutModule;
import novaAcademyServicesModule from './templates/nova-academy/nova-academy-services.cjs';
const novaAcademyServices = novaAcademyServicesModule;
import novaAcademyContactModule from './templates/nova-academy/nova-academy-contact.cjs';
const novaAcademyContact = novaAcademyContactModule;

import crypto from 'crypto';

import tutorProfileModule from './templates/tutor/tutor-profile.cjs';
const tutorProfile = tutorProfileModule;

// ============================================================================
// HELPERS
// ============================================================================
const genId = (prefix) => `${prefix}_${Math.random().toString(36).substr(2, 9)}`;

// Helper to find template structure
const getStructure = (key) => {
    const template = sectionTemplates.find(s => s.key === key);
    return template ? template.structure : {};
};

// ============================================================================
// ALL 6 STANDARD THEMES
// ============================================================================
const ALL_THEMES = [
    {
        name: "Ocean Blue",
        colors: {
            primary: "#3b82f6",
            secondary: "#1e3a5f",
            accent: "#0ea5e9",
            background: "#f0f9ff",
            text: "#0f172a"
        }
    },
    {
        name: "Default Red",
        colors: {
            primary: "#ef4444",
            secondary: "#1f2937",
            accent: "#dc2626",
            background: "#ffffff",
            text: "#111827"
        }
    },
    {
        name: "Forest Green",
        colors: {
            primary: "#22c55e",
            secondary: "#15803d",
            accent: "#4ade80",
            background: "#f0fdf4",
            text: "#14532d"
        }
    },
    {
        name: "Purple Dream",
        colors: {
            primary: "#8b5cf6",
            secondary: "#6d28d9",
            accent: "#a78bfa",
            background: "#faf5ff",
            text: "#3f0f64"
        }
    },
    {
        name: "Sunset Orange",
        colors: {
            primary: "#f97316",
            secondary: "#c2410c",
            accent: "#fb923c",
            background: "#fff7ed",
            text: "#431407"
        }
    },
    {
        name: "Dark Mode",
        colors: {
            primary: "#6366f1",
            secondary: "#4f46e5",
            accent: "#818cf8",
            background: "#0f172a",
            text: "#f8fafc"
        }
    },
];

// ============================================================================
// FULL WEBSITE TEMPLATES
// ============================================================================
export const websiteTemplates = [
    {
        name: "Modern SaaS",
        slug: "modern-saas",
        description: "Vibrant blue/purple SaaS template with hero, features, and social proof",
        category: "IT & Software",
        thumbnail: "69b11e97d036376956185267",
        siteSchema: {
            defaultTheme: { name: "Modern SaaS", colors: { primary: "#3B82F6", secondary: "#A855F7", accent: "#EC4899", background: "#030712", text: "#FFFFFF" } },
            themes: ALL_THEMES,
            globalSections: {
                header: modernSaaSTemplate.header?.structure || {},
                footer: modernSaaSTemplate.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: [
                        modernSaaSTemplate.hero?.structure || {},
                        modernSaaSTemplate.features?.structure || {},
                        modernSaaSTemplate.featuresGrid?.structure || {},
                        modernSaaSTemplate.stats?.structure || {},
                        modernSaaSTemplate.services?.structure || {},
                        modernSaaSTemplate.cta?.structure || {}
                    ]
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: modernSaaSAbout?.structure?.blocks || []
                },
                {
                    title: "Pricing",
                    path: "/pricing",
                    name: "Pricing",
                    isHomePage: false,
                    blocks: modernSaaSPricing?.structure?.blocks || []
                },
                {
                    title: "Resources",
                    path: "/resources",
                    name: "Resources",
                    isHomePage: false,
                    blocks: modernSaaSResources?.structure?.blocks || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: modernSaaSContact?.structure?.blocks || []
                }
            ]
        }
    },
    {
        name: "Portfolio",
        slug: "portfolio",
        description: "Clean light mode portfolio template for designers and developers",
        category: "portfolio",
        thumbnail: "assets/templates/portfolio.png",
        siteSchema: {
            defaultTheme: { name: "Portfolio", colors: { primary: "#3B82F6", secondary: "#1E293B", accent: "#3B82F6", background: "#FFFFFF", text: "#1E293B" } },
            themes: ALL_THEMES,
            globalSections: {
                header: portfolioHome?.header?.structure || {},
                footer: portfolioHome?.footer?.structure || {}
            },
            pages: [
                {
                    title: "Portfolio Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: portfolioHome?.structure?.blocks || []
                }
            ]
        }
    },
    {
        name: "TechNova",
        slug: "tech-innovation",
        description: "Modern tech innovation company homepage with sector showcase and enterprise solutions",
        category: "IT & Software",
        thumbnail: "assets/templates/tech-innovation.png",
        siteSchema: {
            defaultTheme: { name: "Tech Innovation", colors: { primary: "#ec1313", secondary: "#9a4c4c", accent: "#ec1313", background: "#f8f6f6", text: "#1b0d0d" } },
            themes: ALL_THEMES,
            globalSections: {
                header: techInnovationTemplate.header?.structure || {},
                footer: techInnovationTemplate.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: techInnovationTemplate.structure?.blocks || []
                },
                {
                    title: "Infrastructure",
                    path: "/infrastructure",
                    name: "Infrastructure",
                    isHomePage: false,
                    blocks: techInnovationInfra.sections?.map(s => s.structure) || []
                },
                {
                    title: "Careers",
                    path: "/careers",
                    name: "Careers",
                    isHomePage: false,
                    blocks: techInnovationCareers.sections?.map(s => s.structure) || []
                },
                {
                    title: "Case Study",
                    path: "/case-study",
                    name: "Case Study",
                    isHomePage: false,
                    blocks: techInnovationCaseStudy.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // ==========================================================================
    // Design Studio Template
    // ==========================================================================
    {
        id: genId('design-studio-tpl'),
        name: 'Design Studio',
        slug: 'design-studio',
        description: 'A minimal yet bold template for creative agencies and design studios',
        category: 'agency',
        industry: 'Creative / Design',
        thumbnail: 'assets/templates/design-studio.png',
        siteSchema: {
            defaultTheme: { name: "Design Studio", colors: { primary: "#1F6AE1", secondary: "#1F6AE1", accent: "#1F6AE1", background: "#ffffff", text: "#000000" } },
            themes: ALL_THEMES,
            globalSections: {
                header: designStudioHome.header?.structure || {},
                footer: designStudioHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: designStudioServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "Project",
                    path: "/project",
                    name: "Project",
                    isHomePage: false,
                    blocks: designStudioProject.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: designStudioContact.sections?.map(s => s.structure) || []
                },
                {
                    title: "Projects",
                    path: "/projects",
                    name: "Projects",
                    isHomePage: false,
                    blocks: designStudioProjects.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // ==========================================================================
    // GreenHarvest Agri-Tech Template
    // ==========================================================================
    {
        id: genId('green-harvest-tpl'),
        name: 'GreenHarvest',
        slug: 'green-harvest',
        description: 'Professional agriculture and agri-tech template for farms, supply chain, and sustainability',
        category: 'agriculture',
        industry: 'Agriculture / Agri-Tech',
        siteSchema: {
            defaultTheme: { name: "GreenHarvest", colors: { primary: "#16a34a", secondary: "#101912", accent: "#16a34a", background: "#ffffff", text: "#101912" } },
            themes: ALL_THEMES,
            globalSections: {
                header: greenHarvestHome.header?.structure || {},
                footer: greenHarvestHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: greenHarvestHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "Logistics",
                    path: "/logistics",
                    name: "Logistics",
                    isHomePage: false,
                    blocks: greenHarvestLogistics?.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: greenHarvestContact?.sections?.map(s => s.structure) || []
                },
                {
                    title: "Sustainability",
                    path: "/sustainability",
                    name: "Sustainability",
                    isHomePage: false,
                    blocks: greenHarvestSustainability?.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // ==========================================================================
    // AGRI ECOSYSTEM AGRICULTURE TEMPLATE
    // ==========================================================================
    {
        id: genId('agri-ecosystem-tpl'),
        name: 'AgriEcosystem',
        slug: 'agri-ecosystem',
        description: 'Organic agriculture template featuring sustainable practices, harvest calendars, and regenerative farming philosophy',
        category: 'agriculture',
        industry: 'Organic Agriculture / Sustainability',
        thumbnail: 'assets/templates/agri-ecosystem.png',
        siteSchema: {
            defaultTheme: { name: "AgriEcosystem", colors: { primary: "#32a850", secondary: "#1a1a1a", accent: "#32a850", background: "#ffffff", text: "#1a1a1a" } },
            themes: ALL_THEMES,
            globalSections: {
                header: agriEcosystemHome.header?.structure || {},
                footer: agriEcosystemHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: agriEcosystemHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "Portfolio",
                    path: "/portfolio",
                    name: "Portfolio",
                    isHomePage: false,
                    blocks: agriEcosystemPortfolio.sections?.map(s => s.structure) || []
                },
                {
                    title: "Supply Chain",
                    path: "/supply-chain",
                    name: "Supply Chain",
                    isHomePage: false,
                    blocks: agriEcosystemSupplyChain.sections?.map(s => s.structure) || []
                },
                {
                    title: "Our Story",
                    path: "/story",
                    name: "Our Story",
                    isHomePage: false,
                    blocks: agriEcosystemStory.sections?.map(s => s.structure) || []
                }
            ]
        }
    },
    {
        id: genId('careplus-tpl'),
        name: 'CarePlus',
        slug: 'careplus',
        description: 'Comprehensive healthcare redefined with innovative medical solutions.',
        category: 'medical',
        industry: 'Healthcare / Medical',
        thumbnail: 'assets/templates/careplus.png',
        siteSchema: {
            defaultTheme: { name: "CarePlus", colors: { primary: "#008080", secondary: "#004D4D", accent: "#008080", background: "#ffffff", text: "#0F172A" } },
            themes: ALL_THEMES,
            globalSections: {
                header: careplusHome.header?.structure || {},
                footer: careplusHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: careplusHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "Our Methodology",
                    path: "/methodology",
                    name: "Methodology",
                    isHomePage: false,
                    blocks: careplusDiagnostics.sections?.map(s => s.structure) || []
                },
                {
                    title: "Clinical Programs",
                    path: "/programs",
                    name: "Programs",
                    isHomePage: false,
                    blocks: careplusPrograms.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // VITALIS MEDICAL CENTER TEMPLATE (HOSPITAL-2)
    // =========================================================================
    {
        id: genId('vitalis-tpl'),
        name: 'Vitalis Medical Center',
        slug: 'vitalis',
        description: 'Modern healthcare template with emergency services, departments, and patient testimonials.',
        category: 'medical',
        industry: 'Healthcare / Medical',
        thumbnail: 'assets/templates/vitalis.png',
        siteSchema: {
            defaultTheme: { name: "Vitalis", colors: { primary: "#e60000", secondary: "#00c9e3", accent: "#e60000", background: "#ffffff", text: "#0f172a" } },
            themes: ALL_THEMES,
            globalSections: {
                header: vitalisHome.header?.structure || {},
                footer: vitalisHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: vitalisHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About Us",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: vitalisAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Departments",
                    path: "/departments",
                    name: "Departments",
                    isHomePage: false,
                    blocks: vitalisDepartments.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: vitalisContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // SWIFTLOGIX LOGISTICS TEMPLATE
    // =========================================================================
    {
        id: 'swiftlogix',
        name: 'SwiftLogix',
        slug: 'swiftlogix',
        description: 'Bold industrial logistics template with red accent and modern typography.',
        category: 'logistics',
        industry: 'Transportation / Logistics',
        thumbnail: 'assets/templates/swiftlogix.png',
        siteSchema: {
            defaultTheme: { name: "SwiftLogix", colors: { primary: "#ed2626", secondary: "#0f0f0f", accent: "#ed2626", background: "#ffffff", text: "#0f0f0f" } },
            themes: ALL_THEMES,
            globalSections: {
                header: swiftlogixHome.header?.structure || {},
                footer: swiftlogixHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: swiftlogixHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "Operations",
                    path: "/operations",
                    name: "Operations",
                    isHomePage: false,
                    blocks: swiftlogixOps.sections?.map(s => s.structure) || []
                },
                {
                    title: "Sustainability",
                    path: "/sustainability",
                    name: "Sustainability",
                    isHomePage: false,
                    blocks: swiftlogixSustainability.sections?.map(s => s.structure) || []
                },
                {
                    title: "Careers",
                    path: "/careers",
                    name: "Careers",
                    isHomePage: false,
                    blocks: swiftlogixCareers.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // ACADEMIQ EDUCATION TEMPLATE
    // =========================================================================
    {
        id: 'academiq',
        name: 'Academiq',
        slug: 'academiq',
        description: 'Modern online learning platform template with professional design and course showcase.',
        category: 'education',
        industry: 'Education / EdTech',
        siteSchema: {
            defaultTheme: { name: "Academiq", colors: { primary: "#0048B3", secondary: "#E0F2FE", accent: "#0048B3", background: "#ffffff", text: "#0f172a" } },
            themes: ALL_THEMES,
            globalSections: {
                header: academiqHome.header?.structure || {},
                footer: academiqHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: academiqHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: academiqAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Vision",
                    path: "/vision",
                    name: "Vision",
                    isHomePage: false,
                    blocks: academiqVision.sections?.map(s => s.structure) || []
                },
                {
                    title: "Certifications",
                    path: "/certifications",
                    name: "Certifications",
                    isHomePage: false,
                    blocks: academiqCertifications.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // TECH COMPANY TEMPLATE
    // =========================================================================
    {
        id: 'tech-company',
        name: 'Tech Company',
        slug: 'tech-company',
        description: 'Modern tech/IT solutions company homepage with hero, social proof, and service showcase.',
        category: 'IT & Software',
        industry: 'Technology / IT Solutions',
        thumbnail: 'assets/templates/tech-company.png',
        siteSchema: {
            defaultTheme: { name: "Tech Company", colors: { primary: "#328CE6", secondary: "#000000", accent: "#328CE6", background: "#F8F8F6", text: "#000000" } },
            themes: ALL_THEMES,
            globalSections: {
                header: techCompanyHome.header?.structure || {},
                footer: techCompanyHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: techCompanyHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "Learning Pathways",
                    path: "/pathways",
                    name: "Pathways",
                    isHomePage: false,
                    blocks: techCompanyPathways.sections?.map(s => s.structure) || []
                },
                {
                    title: "About Us",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: techCompanyAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Testimonials",
                    path: "/testimonials",
                    name: "Testimonials",
                    isHomePage: false,
                    blocks: techCompanyTestimonials.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: techCompanyContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },
    // =========================================================================
    // TECH NOVA SOLUTIONS TEMPLATE
    // =========================================================================
    {
        id: 'tech-nova-solutions',
        name: 'TechNova Solutions',
        slug: 'tech-nova-solutions',
        description: 'Futuristic AI tech company template featuring cutting-edge design, portfolio showcase, and ecosystem services.',
        category: 'IT & Software',
        industry: 'Technology / AI Solutions',
        siteSchema: {
            defaultTheme: { name: "TechNova Solutions", colors: { primary: "#6366f1", secondary: "#a855f7", accent: "#6366f1", background: "#ffffff", text: "#1f2937" } },
            themes: ALL_THEMES,
            globalSections: {
                header: techNova.header?.structure || {},
                footer: techNova.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: techNova.sections?.map(s => s.structure) || []
                },
                {
                    title: "Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: techNovaServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: techNovaAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: techNovaContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },
    {
        id: 'urban-nest-developers',
        name: 'UrbanNest',
        slug: 'urban-nest',
        description: 'Architectural excellence template featuring smart living ecosystems, sustainable infrastructure, and luxury developments.',
        category: 'architecture',
        industry: 'Real Estate / Architecture',
        siteSchema: {
            defaultTheme: { name: "UrbanNest", colors: { primary: "#ecb613", secondary: "#1e293b", accent: "#ecb613", background: "#f8f8f6", text: "#1e293b" } },
            themes: ALL_THEMES,
            globalSections: {
                header: urbanNestHome.header?.structure || {},
                footer: urbanNestHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: urbanNestHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "Listings",
                    path: "/listings",
                    name: "Listings",
                    isHomePage: false,
                    blocks: urbanNestListings.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // EDUCATION TEMPLATE (EduPremium)
    // =========================================================================
    {
        id: 'edupremium',
        name: 'EduPremium',
        slug: 'edupremium',
        description: 'Elite education template with premium purple design for institutions and masterclasses.',
        category: 'education',
        industry: 'Education / eLearning',
        siteSchema: {
            defaultTheme: { name: "EduPremium", colors: { primary: "#FF4500", secondary: "#FF4500", accent: "#FF4500", background: "#ffffff", text: "#111827" } },
            themes: ALL_THEMES,
            globalSections: {
                header: educationHome.header?.structure || {},
                footer: educationHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: educationHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: educationAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Courses",
                    path: "/courses",
                    name: "Courses",
                    isHomePage: false,
                    blocks: educationCourses.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: educationContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // FINANCE TEMPLATE
    // =========================================================================
    {
        id: 'finance-pro',
        name: 'FinancePro',
        slug: 'finance-pro',
        description: 'Premium financial institution template representing trust, heritage, and stability.',
        category: 'finance',
        industry: 'Finance / Banking',
        siteSchema: {
            defaultTheme: { name: "FinancePro", colors: { primary: "#009e89", secondary: "#009e89", accent: "#009e89", background: "#ffffff", text: "#111827" } },
            themes: ALL_THEMES,
            globalSections: {
                header: financeHero.header?.structure || {},
                footer: financeHero.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: financeHero.sections?.map(s => s.structure) || []
                },
                {
                    title: "About Us",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: financeAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Our Clients",
                    path: "/clients",
                    name: "Clients",
                    isHomePage: false,
                    blocks: financeOurClients.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: financeContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // WANDERLUST TRAVEL TEMPLATE
    // =========================================================================
    {
        id: 'wanderlust-travel',
        name: 'Wanderlust Travel',
        slug: 'wanderlust-travel',
        description: 'Premium travel and tourism template with oceanic blue theme.',
        category: 'tourism',
        industry: 'Travel / Tourism',
        siteSchema: {
            defaultTheme: { name: "Wanderlust Travel", colors: { primary: "#1B4965", secondary: "#FF4D7C", accent: "#FF4D7C", background: "#ffffff", text: "#1B4965" } },
            themes: ALL_THEMES,
            globalSections: {
                header: travelHome.header?.structure || {},
                footer: travelHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: travelHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About Us",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: travelAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: travelServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "Blog",
                    path: "/blog",
                    name: "Blog",
                    isHomePage: false,
                    blocks: travelBlogs.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: travelContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // EPILOGUE CULINARY (FOOD) TEMPLATE
    // =========================================================================
    {
        id: 'epilogue-culinary',
        name: 'Epilogue Culinary',
        slug: 'epilogue-culinary',
        description: 'Luxury culinary editorial template with deep purple and gold accents for premium food brands.',
        category: 'tourism',
        industry: 'Food / Culinary',
        siteSchema: {
            defaultTheme: { name: "Epilogue Culinary", colors: { primary: "#2e0057", secondary: "#ebd800", accent: "#ebd800", background: "#ffffff", text: "#2e0057" } },
            themes: ALL_THEMES,
            globalSections: {
                header: foodHome.header?.structure || {},
                footer: foodHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: foodHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About Us",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: foodAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: foodContact.sections?.map(s => s.structure) || []
                },
                {
                    title: "Careers",
                    path: "/careers",
                    name: "Careers",
                    isHomePage: false,
                    blocks: foodCareers.sections?.map(s => s.structure) || []
                },
                {
                    title: "Testimonials",
                    path: "/testimonials",
                    name: "Testimonials",
                    isHomePage: false,
                    blocks: foodTestimonials.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // TECH-STREET E-COMMERCE TEMPLATE
    // =========================================================================
    {
        id: 'tech-street',
        name: 'Tech-Street',
        slug: 'tech-street',
        description: 'Premium streetwear e-commerce template with dark futuristic aesthetics.',
        category: 'e-commerce',
        industry: 'Fashion / E-Commerce',
        siteSchema: {
            defaultTheme: { name: "Tech-Street", colors: { primary: "#D3ADFF", secondary: "#89D900", accent: "#89D900", background: "#ffffff", text: "#000000" } },
            themes: ALL_THEMES,
            globalSections: {
                header: ecommerceHome.header?.structure || {},
                footer: ecommerceHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: ecommerceHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: ecommerceAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Products",
                    path: "/products",
                    name: "Products",
                    isHomePage: false,
                    blocks: ecommerceProducts.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: ecommerceContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // APEX ESTATES REAL ESTATE TEMPLATE
    // =========================================================================
    {
        id: 'apex-estates',
        name: 'Apex Estates',
        slug: 'real-estate',
        description: 'Ultra-luxury real estate template featuring architectural elegance with modern dark sophistication.',
        category: 'real-estate',
        industry: 'Real Estate / Architecture',
        siteSchema: {
            defaultTheme: { name: "Apex Estates", colors: { primary: "#59184C", secondary: "#FFF98A", accent: "#b0903e", background: "#f7f7f7", text: "#59184C" } },
            themes: ALL_THEMES,
            globalSections: {
                header: realEstateHome.header?.structure || {},
                footer: realEstateHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: realEstateHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: realEstateAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Journal",
                    path: "/journal",
                    name: "Journal",
                    isHomePage: false,
                    blocks: realEstateBlogs.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: realEstateContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },
    // =========================================================================
    // APEX STRUCTURES CONSTRUCTION TEMPLATE
    // =========================================================================
    {
        id: 'apex-structures',
        name: 'Apex Structures',
        slug: 'construction',
        description: 'Industrial-grade template for construction and architecture firms with warm orange authority.',
        category: 'real-estate',
        industry: 'Construction / Architecture',
        thumbnail: 'assets/templates/construction.png', // Placeholder
        siteSchema: {
            defaultTheme: { name: "Apex Structures", colors: { primary: "#009DFF", secondary: "#FFE100", accent: "#FFE100", background: "#ffffff", text: "#111827" } },
            themes: ALL_THEMES,
            globalSections: {
                header: constructionHome.header?.structure || {},
                footer: constructionHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: constructionHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About Us",
                    path: "/about",
                    name: "About Us",
                    isHomePage: false,
                    blocks: constructionAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Gallery",
                    path: "/gallery",
                    name: "Gallery",
                    isHomePage: false,
                    blocks: constructionGallery.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: constructionContact.sections?.map(s => s.structure) || []
                },
                {
                    title: "Our Clients",
                    path: "/clients",
                    name: "Our Clients",
                    isHomePage: false,
                    blocks: constructionClients.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // ==========================================================================
    // Elite Business Template
    // ==========================================================================
    {
        id: genId('business-tpl'),
        name: 'Elite Business',
        slug: 'business',
        description: 'Premium service business template for high-end professional services with dark mode sophistication.',
        category: 'manufacturing',
        industry: 'Services / Construction',
        siteSchema: {
            defaultTheme: { name: "Elite Business", colors: { primary: "#005eff", secondary: "#aeff00", accent: "#aeff00", background: "#ffffff", text: "#111827" } },
            themes: ALL_THEMES,
            globalSections: {
                header: businessHome.header?.structure || {},
                footer: businessHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: businessHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About Us",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: businessAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Our Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: businessServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: businessContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },
    // ========================================================================
    // IT CONSULTING TEMPLATE
    // ========================================================================
    {
        name: 'TechConsult Elite',
        slug: 'it-consulting',
        description: 'Premium IT consulting template for digital transformation firms, cybersecurity consultants, and enterprise technology advisors. Features professional blue/teal design with hero sections, service cards, case studies, timeline, contact forms, and FAQ.',
        category: 'IT & Software',
        industry: 'IT Consulting / Digital Transformation',
        siteSchema: {
            defaultTheme: { name: "TechConsult Elite", colors: { primary: "#0559b3", secondary: "#05B3AA", accent: "#05B3AA", background: "#ffffff", text: "#0f172a" } },
            themes: ALL_THEMES,
            globalSections: {
                header: itConsultingHome.header?.structure || {},
                footer: itConsultingHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: itConsultingHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About Us",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: itConsultingAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Our Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: itConsultingServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: itConsultingContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },
    // ========================================================================
    // STARTUP MVP TEMPLATE
    // ========================================================================
    {
        name: 'Startup MVP',
        slug: 'startup-mvp',
        description: 'Modern startup template with gradient branding, pricing tiers, team showcase, and high-performance services page. Perfect for SaaS products and tech startups.',
        category: 'IT & Software',
        industry: 'SaaS / Startup',
        siteSchema: {
            defaultTheme: { name: "Startup MVP", colors: { primary: "#902EFF", secondary: "#FF2EA4", accent: "#FF2EA4", background: "#ffffff", text: "#111827" } },
            themes: ALL_THEMES,
            globalSections: {
                header: startupMvpHome.header?.structure || {},
                footer: startupMvpHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: startupMvpHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About Us",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: startupMvpAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: startupMvpServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "Pricing",
                    path: "/pricing",
                    name: "Pricing",
                    isHomePage: false,
                    blocks: startupMvpPricing.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // LUXAI PORTFOLIO TEMPLATE
    // =========================================================================
    {
        name: 'LuxAI Portfolio',
        slug: 'luxai-portfolio',
        description: 'Premium enterprise AI portfolio template with gold and deep blue accents, case studies, and contact form.',
        category: 'IT & Software',
        industry: 'AI / Machine Learning',
        siteSchema: {
            defaultTheme: { name: "LuxAI Portfolio", colors: { primary: "#ffae00", secondary: "#001885", accent: "#ffae00", background: "#f8f7f5", text: "#0f172a" } },
            themes: ALL_THEMES,
            globalSections: {
                header: luxaiHome.header?.structure || {},
                footer: luxaiHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: luxaiHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: luxaiAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Case Studies",
                    path: "/case-studies",
                    name: "Case Studies",
                    isHomePage: false,
                    blocks: luxaiCaseStudies.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: luxaiContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // ==========================================================================
    // DEV PORTFOLIO — Dark Theme Developer Portfolio
    // ==========================================================================
    {
        id: genId('dev-portfolio-tpl'),
        name: 'Dev Portfolio Dark',
        slug: 'dev-portfolio',
        description: 'Modern dark-theme developer portfolio with gradient accents, animated hero, and glassmorphism cards. Perfect for software engineers and product builders.',
        category: 'portfolio',
        industry: 'Technology / Software Engineering',
        thumbnail: 'assets/templates/dev-portfolio.png',
        siteSchema: {
            defaultTheme: {
                name: "Dev Portfolio Dark",
                colors: {
                    primary: "#22d3ee",
                    secondary: "#f97316",
                    accent: "#f97316",
                    background: "#09090b",
                    text: "#fafafa"
                }
            },
            themes: ALL_THEMES,
            globalSections: {
                header: devPortfolioHome.header?.structure || {},
                footer: devPortfolioHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: devPortfolioHome.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // ==========================================================================
    // NEXASUPPORT — Tech Support & Managed Services
    // ==========================================================================
    {
        id: genId('tech-support-tpl'),
        name: 'NexaSupport',
        slug: 'tech-support',
        description: 'Modern tech support and managed IT services template with knowledge base, FAQ, service comparison, and 24/7 support features.',
        category: 'IT & Software',
        industry: 'Technology / IT Support',
        thumbnail: 'assets/templates/tech-support.png',
        siteSchema: {
            defaultTheme: {
                name: "NexaSupport",
                colors: {
                    primary: "#60F21D",
                    secondary: "#8100B8",
                    accent: "#60F21D",
                    background: "#ffffff",
                    text: "#000000"
                }
            },
            themes: ALL_THEMES,
            globalSections: {
                header: techSupportHome.header?.structure || {},
                footer: techSupportHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: techSupportHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: techSupportServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: techSupportAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: techSupportContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // DOCTOR PROFILE TEMPLATE (Elite Private Clinic)
    // =========================================================================
    {
        id: 'doctor-profile',
        name: 'Elite Private Clinic',
        slug: 'doctor-profile',
        description: 'Premium private medical clinic template with glassmorphism hero, specialist profiles, and patient-centric design.',
        category: 'medical',
        industry: 'Healthcare / Medical',
        siteSchema: {
            defaultTheme: { name: "EliteClinic", colors: { primary: "#1FFFC0", secondary: "#1F5EFF", accent: "#1FCEFF", background: "#ffffff", text: "#0f172a" } },
            themes: ALL_THEMES,
            globalSections: {
                header: eliteHome.header?.structure || {},
                footer: eliteHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: eliteHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: eliteAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Our Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: eliteServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: eliteContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // DIAGNOSTIC LAB TEMPLATE (Helix Research)
    // =========================================================================
    {
        id: 'diagnostic-lab',
        name: 'Helix Research',
        slug: 'diagnostic-lab',
        description: 'Swiss minimalist diagnostic laboratory template with editorial typography, molecular imagery, and premium healthcare design.',
        category: 'medical',
        industry: 'Healthcare / Diagnostics',
        siteSchema: {
            defaultTheme: { name: "HelixResearch", colors: { primary: "#cf24ff", secondary: "#FF24C1", accent: "#6224ff", background: "#ffffff", text: "#0f172a" } },
            themes: ALL_THEMES,
            globalSections: {
                header: diagnosticHome.header?.structure || {},
                footer: diagnosticHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: diagnosticHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: diagnosticAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: diagnosticServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: diagnosticContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // TELEMEDICINE TEMPLATE (Ethos Health)
    // =========================================================================
    {
        id: 'tele-medicine',
        name: 'Ethos Health',
        slug: 'tele-medicine',
        description: 'Premium telemedicine template designed for high-performance health, exclusive medical access, and bespoke longevity protocols.',
        category: 'medical',
        industry: 'Healthcare / Telemedicine',
        siteSchema: {
            defaultTheme: { name: "EthosHealth", colors: { primary: "#FF3075", secondary: "#FFEA00", accent: "#5763FF", background: "#ffffff", text: "#1a1a1a" } },
            themes: ALL_THEMES,
            globalSections: {
                header: telemedicineHome.header?.structure || {},
                footer: telemedicineHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: telemedicineHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: telemedicineAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Specialists",
                    path: "/specialists",
                    name: "Specialists",
                    isHomePage: false,
                    blocks: telemedicineSpecialists.sections?.map(s => s.structure) || []
                },
                {
                    title: "Pricing",
                    path: "/pricing",
                    name: "Pricing",
                    isHomePage: false,
                    blocks: telemedicinePricing.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // SERENE ORGANIC TEMPLATE
    // =========================================================================
    {
        id: genId('serene-organic-tpl'),
        name: 'Serene Organic',
        slug: 'serene-organic',
        description: 'A holistic wellness and spa template featuring nature-inspired design, gentle color palettes, and artisan therapy showcase.',
        category: 'medical',
        industry: 'Wellness / Spa',
        thumbnail: 'assets/templates/serene-organic.png',
        siteSchema: {
            defaultTheme: { name: "Nature Form", colors: { primary: "#7bb16b", secondary: "#171c16", accent: "#b6d487", background: "#ffffff", text: "#50652e" } },
            themes: ALL_THEMES,
            globalSections: {
                header: sereneOrganicHome.header?.structure || {},
                footer: sereneOrganicHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: sereneOrganicHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "Journey",
                    path: "/journey",
                    name: "Journey",
                    isHomePage: false,
                    blocks: sereneOrganicJourney.sections?.map(s => s.structure) || []
                },
                {
                    title: "Treatments",
                    path: "/treatments",
                    name: "Treatments",
                    isHomePage: false,
                    blocks: sereneOrganicServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: sereneOrganicContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // THE CATALYST (COACHING) TEMPLATE
    // =========================================================================
    {
        id: genId('coaching-tpl'),
        name: 'The Catalyst',
        slug: 'education-3',
        description: 'Elite executive coaching template with modern design and premium layout.',
        category: 'education',
        industry: 'Coaching / Executive',
        thumbnail: 'assets/templates/education-3.png',
        siteSchema: {
            defaultTheme: { name: "Coaching", colors: { primary: "#e68600", secondary: "#121E6D", accent: "#590094", background: "#f8f7f5", text: "#121E6D" } },
            themes: ALL_THEMES,
            globalSections: {
                header: coachingHome.header?.structure || {},
                footer: coachingHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: coachingHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: coachingAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Courses",
                    path: "/courses",
                    name: "Courses",
                    isHomePage: false,
                    blocks: coachingCourses.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: coachingContact.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // TUTOR PROFILE TEMPLATE
    // =========================================================================
    {
        id: genId('tutor-tpl'),
        name: 'V&V Academy',
        slug: 'tutor-profile',
        description: 'Elite academic mentorship template with a high-energy, modern aesthetic.',
        category: 'education',
        industry: 'Education / Tutoring',
        thumbnail: 'assets/templates/tutor.png',
        siteSchema: {
            defaultTheme: { 
                name: "Emerald Neon", 
                colors: { 
                    primary: "#009C76", 
                    secondary: "#005E4E", 
                    accent: "#60FF54", 
                    background: "#ffffff", 
                    text: "#005E4E" 
                } 
            },
            themes: ALL_THEMES,
            globalSections: {
                header: tutorProfile.header?.structure || {},
                footer: tutorProfile.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: tutorProfile.sections?.map(s => s.structure) || []
                }
            ]
        }
    },

    // =========================================================================
    // NOVA ACADEMY TEMPLATE
    // =========================================================================
    {
        id: genId('nova-tpl'),
        name: 'Nova Academy',
        slug: 'nova-academy',
        description: 'Elite philosophy and leadership education template with deep, bold aesthetics.',
        category: 'education',
        industry: 'Higher Ed / Specialized Training',
        thumbnail: 'assets/templates/nova-academy.png',
        siteSchema: {
            defaultTheme: { 
                name: "Nova", 
                colors: { primary: "#ff3d6a", secondary: "#872897", accent: "#FF7130", background: "#FFFEE0", text: "#0f172a" } 
            },
            themes: ALL_THEMES,
            globalSections: {
                header: novaAcademyHome.header?.structure || {},
                footer: novaAcademyHome.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: novaAcademyHome.sections?.map(s => s.structure) || []
                },
                {
                    title: "About",
                    path: "/about",
                    name: "About",
                    isHomePage: false,
                    blocks: novaAcademyAbout.sections?.map(s => s.structure) || []
                },
                {
                    title: "Services",
                    path: "/services",
                    name: "Services",
                    isHomePage: false,
                    blocks: novaAcademyServices.sections?.map(s => s.structure) || []
                },
                {
                    title: "Contact",
                    path: "/contact",
                    name: "Contact",
                    isHomePage: false,
                    blocks: novaAcademyContact.sections?.map(s => s.structure) || []
                },
            ]
        }
    },
    // =========================================================================
    // TUTOR PROFILE TEMPLATE
    // =========================================================================
    {
        id: genId('agent-profile-tpl'),
        name: 'Local Scout Agent',
        slug: 'real-estate-agent',
        description: 'Elite real estate agent profile template with friendly, neighborhood-focused aesthetics.',
        category: 'real-estate',
        industry: 'Real Estate / Agent',
        thumbnail: 'assets/templates/real-estate-agent.png',
        siteSchema: {
            defaultTheme: { 
                name: "Local Scout", 
                colors: { primary: "#0094BA", secondary: "#00067A", accent: "#00AD81", background: "#E3FFFA", text: "#004A3C" } 
            },
            themes: ALL_THEMES,
            globalSections: {
                header: agentProfile.header?.structure || {},
                footer: agentProfile.footer?.structure || {}
            },
            pages: [
                {
                    title: "Home",
                    path: "/",
                    name: "Home",
                    isHomePage: true,
                    blocks: agentProfile.sections?.map(s => s.structure) || []
                }
            ]
        }
    }
];