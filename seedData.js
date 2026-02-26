/**
 * Seed Script
 * Populates the database with section templates, component definitions, and full website templates
 * Run with: node src/seed/seedData.js
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { SectionTemplate } from '../models/SectionTemplate.js';
import { ComponentDefinition } from '../models/ComponentDefinition.js';
import { Template } from '../models/Template.js';

import { components } from './components.js';
import { sectionTemplates } from './sections.js';
import { productSectionTemplates } from './product-sections.js';
import { serviceSectionTemplates } from './service-sections.js';
import { socialProofSections } from './socialProof.js';
import { teamSections } from './team-sections.js';
import blogSections from './blog-sections.js';
import { utilitySections } from './utility-sections.js';
import { websiteTemplates } from './templates.js';
import { modernSaaSTemplate } from './templates/modern-saas/modern-saas-home.js';
import { modernSaaSAbout } from './templates/modern-saas/modern-saas-about.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

// ============================================================================
// HELPERS
// ============================================================================
const genId = (prefix) => `${prefix}_${Math.random().toString(36).substr(2, 9)}`;

// Recursively ensure all components in a structure have unique IDs
const ensureIds = (obj) => {
    if (!obj || typeof obj !== 'object') return obj;

    // If it's a section, column, or element, ensure it has an ID
    if (obj.type && !obj.id) {
        if (obj.type === 'Section') obj.id = genId('section');
        else if (obj.type === 'Header') obj.id = genId('header');
        else if (obj.type === 'Footer') obj.id = genId('footer');
        else if (obj.width && !obj.id) obj.id = genId('col'); // It's a column
        else obj.id = genId('el');
    }

    // Process nested columns
    if (obj.columns && Array.isArray(obj.columns)) {
        obj.columns.forEach(col => {
            if (!col.id) col.id = genId('col');
            ensureIds(col);
        });
    }

    // Process nested elements
    if (obj.elements && Array.isArray(obj.elements)) {
        obj.elements.forEach(el => {
            if (!el.id) el.id = genId('el');
            ensureIds(el);
        });
    }

    // Process zones (new schema)
    if (obj.zones && typeof obj.zones === 'object') {
        Object.keys(obj.zones).forEach(zone => {
            if (obj.zones[zone]) {
                if (!obj.zones[zone].id) obj.zones[zone].id = genId('zone');
                if (obj.zones[zone].elements) {
                    obj.zones[zone].elements.forEach(el => {
                        if (!el.id) el.id = genId('el');
                        ensureIds(el);
                    });
                }
            }
        });
    }

    return obj;
};

// ============================================================================
// SEED FUNCTION
// ============================================================================
const seedDatabase = async () => {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB.');

        // 1. Clear existing data
        console.log('Clearing existing data...');
        await ComponentDefinition.deleteMany({});
        await SectionTemplate.deleteMany({});
        await Template.deleteMany({});

        // 2. Seed Component Definitions
        console.log('Seeding component definitions...');
        await ComponentDefinition.insertMany(components);
        console.log(`✓ Inserted ${components.length} components`);

        // 3. Seed Section Templates (All from sections.js - includes base, textual, media)
        console.log('Seeding section templates...');
        const allSectionTemplates = [
            ...sectionTemplates,
            ...productSectionTemplates,
            ...serviceSectionTemplates,
            ...socialProofSections,
            ...teamSections,
            ...blogSections,
            ...utilitySections,
            // Modern SaaS template sections (only content sections, not header/footer)
            modernSaaSTemplate.features,
            modernSaaSTemplate.featuresGrid,
            modernSaaSTemplate.stats,
            modernSaaSTemplate.services,
            modernSaaSTemplate.cta,
            modernSaaSTemplate.hero
        ];

        // Include About page blocks as individual section templates
        if (modernSaaSAbout && modernSaaSAbout.structure && Array.isArray(modernSaaSAbout.structure.blocks)) {
            modernSaaSAbout.structure.blocks.forEach((blk) => {
                allSectionTemplates.push({
                    key: `modern-saas-about-${blk.id}`,
                    type: "SectionTemplate",
                    category: "content",
                    name: `About - ${blk.id}`,
                    description: `Modern SaaS About block: ${blk.id}`,
                    structure: blk
                });
            });
        }
        
        const processedSections = allSectionTemplates.map(template => {
            const structure = JSON.parse(JSON.stringify(template.structure));
            ensureIds(structure);
            return { ...template, structure };
        });
        await SectionTemplate.insertMany(processedSections);
        console.log(`✓ Inserted ${allSectionTemplates.length} section templates`);

        // 4. Seed Full Website Templates
        console.log('Seeding website templates...');
        // Process website templates to ensure IDs
        const processedSites = websiteTemplates.map(site => {
            const siteSchema = JSON.parse(JSON.stringify(site.siteSchema));

            // Process global sections
            if (siteSchema.globalSections) {
                if (siteSchema.globalSections.header) ensureIds(siteSchema.globalSections.header);
                if (siteSchema.globalSections.footer) ensureIds(siteSchema.globalSections.footer);
            }

            // Process pages
            if (siteSchema.pages) {
                siteSchema.pages.forEach(page => {
                    if (page.blocks) {
                        page.blocks.forEach(block => ensureIds(block));
                    }
                });
            }

            return { ...site, siteSchema };
        });
        await Template.insertMany(processedSites);
        console.log(`✓ Inserted ${websiteTemplates.length} website templates`);

        console.log(`Database seeded successfully! Total sections: ${allSectionTemplates.length}`);
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
