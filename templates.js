
import { sectionTemplates } from './sections.js';
import { modernSaaSTemplate } from './templates/modern-saas/modern-saas-home.js';
import { modernSaaSAbout } from './templates/modern-saas/modern-saas-about.js';
import { modernSaaSPricing } from './templates/modern-saas/modern-saas-pricing.js';
import { modernSaaSResources } from './templates/modern-saas/modern-saas-resources.js';
import { modernSaaSContact } from './templates/modern-saas/modern-saas-contact.js';
import { portfolioHome } from './templates/portfolio/portfolio-home.js';
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
    }
];

// ============================================================================
// FULL WEBSITE TEMPLATES
// ============================================================================
export const websiteTemplates = [
    {
        name: "Modern SaaS",
        slug: "modern-saas",
        description: "Vibrant blue/purple SaaS template with hero, features, and social proof",
        category: "saas",
        thumbnail: "assets/templates/modern-saas.png",
        siteSchema: {
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
        category: "tech-innovation",
        thumbnail: "assets/templates/tech-innovation.png",
        siteSchema: {
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
        category: 'tech-innovation',
        industry: 'Technology / IT Solutions',
        thumbnail: 'assets/templates/tech-company.png',
        siteSchema: {
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
        category: 'tech-innovation',
        industry: 'Technology / AI Solutions',
        siteSchema: {
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
        category: 'travel',
        industry: 'Travel / Tourism',
        siteSchema: {
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
        category: 'food',
        industry: 'Food / Culinary',
        siteSchema: {
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
        category: 'ecommerce',
        industry: 'Fashion / E-Commerce',
        siteSchema: {
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
        category: 'construction',
        industry: 'Construction / Architecture',
        thumbnail: 'assets/templates/construction.png', // Placeholder
        siteSchema: {
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
        category: 'business',
        industry: 'Services / Construction',
        siteSchema: {
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
    }
];