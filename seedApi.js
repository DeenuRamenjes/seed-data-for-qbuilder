/**
 * Seed Script (API-based)
 * 
 * Populates the database with section templates, component definitions, and full website templates
 * using the same entity API endpoints that qadmin uses.
 * 
 * This ensures data goes to the CORRECT database — the same one the app connects to.
 * 
 * Usage:
 *   node seed/seedApi.js                          # Seed all (sections + components + templates)
 *   node seed/seedApi.js --only sections           # Seed only section templates
 *   node seed/seedApi.js --only components         # Seed only components
 *   node seed/seedApi.js --only templates          # Seed only website templates
 *   node seed/seedApi.js --no-clear                # Seed without deleting existing data
 * 
 * Environment:
 *   Set API_BASE_URL and AUTH_TOKEN in a .env file in the project root, or pass as env vars:
 *   API_BASE_URL=https://api.qadmin.quantzi.in AUTH_TOKEN=your_jwt_token node seed/seedApi.js
 */

import dotenv from 'dotenv';
import { components } from './components.js';
import { sectionTemplates } from './sections.js';
import { productSectionTemplates } from './product-sections.js';
import { serviceSectionTemplates } from './service-sections.js';
import { socialProofSections } from './socialProof.js';
import { teamSections } from './team-sections.js';
import { blogSections } from './blog-sections.js';
import { utilitySections } from './utility-sections.js';
import { featureSectionTemplates } from './feature-sections.js';
import { heroTemplates } from './heroes.js';
import { mediaSectionTemplates } from './media-sections.js';
import { textualSectionTemplates } from './textual-sections.js';
import { websiteTemplates } from './templates.js';
import { modernSaaSTemplate } from './templates/modern-saas/modern-saas-home.js';
import { modernSaaSAbout } from './templates/modern-saas/modern-saas-about.js';

dotenv.config();

// ============================================================================
// CONFIG
// ============================================================================
const API_BASE_URL = process.env.API_BASE_URL || 'https://api.qadmin.quantzi.in';
const API_BASE = '/v1';
const AUTH_TOKEN = process.env.AUTH_TOKEN || '';

// Module codes (same as qadmin's api.ts)
const MC = {
    SECTION: 'qbuilder_section',
    COMPONENT: 'qbuilder_component',
    TEMPLATE: 'qbuilder_template',
};

// ============================================================================
// HTTP HELPERS
// ============================================================================
async function apiGet(moduleCode, params = {}) {
    const url = new URL(`${API_BASE_URL}${API_BASE}/entity/${moduleCode}/get_by_filter`);
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    
    const res = await fetch(url.toString(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(AUTH_TOKEN ? { 'Authorization': `Bearer ${AUTH_TOKEN}` } : {}),
        },
    });
    if (!res.ok) throw new Error(`GET ${moduleCode} failed: ${res.status} ${await res.text()}`);
    return res.json();
}

async function apiCreate(moduleCode, data) {
    const res = await fetch(`${API_BASE_URL}${API_BASE}/entity/${moduleCode}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(AUTH_TOKEN ? { 'Authorization': `Bearer ${AUTH_TOKEN}` } : {}),
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`CREATE ${moduleCode} failed: ${res.status} ${await res.text()}`);
    return res.json();
}

async function apiDelete(moduleCode, _id) {
    const url = new URL(`${API_BASE_URL}${API_BASE}/entity/${moduleCode}/delete`);
    url.searchParams.set('_id', _id);
    
    const res = await fetch(url.toString(), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...(AUTH_TOKEN ? { 'Authorization': `Bearer ${AUTH_TOKEN}` } : {}),
        },
    });
    if (!res.ok) throw new Error(`DELETE ${moduleCode}/${_id} failed: ${res.status} ${await res.text()}`);
    return res.json();
}

function extractArray(result) {
    if (Array.isArray(result)) return result;
    if (result?.data && Array.isArray(result.data)) return result.data;
    if (result?.data?.data && Array.isArray(result.data.data)) return result.data.data;
    return [];
}

// ============================================================================
// HELPERS
// ============================================================================
const genId = (prefix) => `${prefix}_${Math.random().toString(36).substr(2, 9)}`;

const ensureIds = (obj) => {
    if (!obj || typeof obj !== 'object') return obj;

    if (obj.type && !obj.id) {
        if (obj.type === 'Section') obj.id = genId('section');
        else if (obj.type === 'Header') obj.id = genId('header');
        else if (obj.type === 'Footer') obj.id = genId('footer');
        else if (obj.width && !obj.id) obj.id = genId('col');
        else obj.id = genId('el');
    }

    if (obj.columns && Array.isArray(obj.columns)) {
        obj.columns.forEach(col => {
            if (!col.id) col.id = genId('col');
            ensureIds(col);
        });
    }

    if (obj.elements && Array.isArray(obj.elements)) {
        obj.elements.forEach(el => {
            if (!el.id) el.id = genId('el');
            ensureIds(el);
        });
    }

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
// CLEAR FUNCTIONS
// ============================================================================
async function clearCollection(moduleCode, label) {
    console.log(`  Clearing ${label}...`);
    const result = await apiGet(moduleCode);
    const items = extractArray(result);
    
    if (items.length === 0) {
        console.log(`  ✓ ${label} already empty`);
        return;
    }
    
    let deleted = 0;
    for (const item of items) {
        if (item._id) {
            try {
                await apiDelete(moduleCode, item._id);
                deleted++;
            } catch (e) {
                console.warn(`  ⚠ Failed to delete ${label} ${item._id}: ${e.message}`);
            }
        }
    }
    console.log(`  ✓ Deleted ${deleted}/${items.length} ${label}`);
}

// ============================================================================
// SEED FUNCTIONS
// ============================================================================
async function seedComponents() {
    console.log('\n📦 Seeding component definitions...');
    let inserted = 0;
    for (const comp of components) {
        try {
            await apiCreate(MC.COMPONENT, comp);
            inserted++;
        } catch (e) {
            console.warn(`  ⚠ Failed to insert component "${comp.type}": ${e.message}`);
        }
    }
    console.log(`  ✓ Inserted ${inserted}/${components.length} components`);
}

async function seedSections() {
    console.log('\n📐 Seeding section templates...');
    const allSectionTemplates = [
        ...sectionTemplates,
        ...productSectionTemplates,
        ...serviceSectionTemplates,
        ...socialProofSections,
        ...teamSections,
        ...blogSections,
        ...utilitySections,
        ...featureSectionTemplates,
        ...heroTemplates,
        ...mediaSectionTemplates,
        ...textualSectionTemplates,
        modernSaaSTemplate.features,
        modernSaaSTemplate.featuresGrid,
        modernSaaSTemplate.stats,
        modernSaaSTemplate.services,
        modernSaaSTemplate.cta,
        modernSaaSTemplate.hero
    ];

    // Include About page blocks as individual section templates
    if (modernSaaSAbout?.structure?.blocks && Array.isArray(modernSaaSAbout.structure.blocks)) {
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

    let inserted = 0;
    for (const section of processedSections) {
        try {
            await apiCreate(MC.SECTION, section);
            inserted++;
        } catch (e) {
            console.warn(`  ⚠ Failed to insert section "${section.key || section.name}": ${e.message}`);
        }
    }
    console.log(`  ✓ Inserted ${inserted}/${processedSections.length} section templates`);
}

async function seedTemplates() {
    console.log('\n🎨 Seeding website templates...');
    const processedSites = websiteTemplates.map(site => {
        const siteSchema = JSON.parse(JSON.stringify(site.siteSchema));

        if (siteSchema.globalSections) {
            if (siteSchema.globalSections.header) ensureIds(siteSchema.globalSections.header);
            if (siteSchema.globalSections.footer) ensureIds(siteSchema.globalSections.footer);
        }

        if (siteSchema.pages) {
            siteSchema.pages.forEach(page => {
                if (page.blocks) {
                    page.blocks.forEach(block => ensureIds(block));
                }
            });
        }

        return { ...site, siteSchema };
    });

    let inserted = 0;
    for (const template of processedSites) {
        try {
            await apiCreate(MC.TEMPLATE, template);
            inserted++;
        } catch (e) {
            console.warn(`  ⚠ Failed to insert template "${template.name}": ${e.message}`);
        }
    }
    console.log(`  ✓ Inserted ${inserted}/${processedSites.length} website templates`);
}

// ============================================================================
// MAIN
// ============================================================================
const main = async () => {
    const args = process.argv.slice(2);
    const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
    const noClear = args.includes('--no-clear');

    console.log('═══════════════════════════════════════════════════');
    console.log('  QBuilder Seed Script (API-based)');
    console.log('═══════════════════════════════════════════════════');
    console.log(`  API: ${API_BASE_URL}${API_BASE}`);
    console.log(`  Auth: ${AUTH_TOKEN ? '✓ Token provided' : '✗ No token (set AUTH_TOKEN)'}`);
    console.log(`  Mode: ${only ? `Only ${only}` : 'All'} ${noClear ? '(no-clear)' : '(clear + seed)'}`);
    console.log('═══════════════════════════════════════════════════');

    if (!AUTH_TOKEN) {
        console.error('\n❌ AUTH_TOKEN is required. Get your JWT token from the browser:');
        console.error('   1. Open qadmin in browser → F12 → Application → Local Storage');
        console.error('   2. Find the auth/JWT token');
        console.error('   3. Run: AUTH_TOKEN=your_token node seed/seedApi.js');
        process.exit(1);
    }

    try {
        // Test connection
        console.log('\nTesting API connection...');
        await apiGet(MC.COMPONENT);
        console.log('✓ API connection successful!\n');

        const shouldSeed = (type) => !only || only === type;

        // Clear existing data
        if (!noClear) {
            console.log('🗑️  Clearing existing data...');
            if (shouldSeed('components')) await clearCollection(MC.COMPONENT, 'components');
            if (shouldSeed('sections')) await clearCollection(MC.SECTION, 'sections');
            if (shouldSeed('templates')) await clearCollection(MC.TEMPLATE, 'templates');
        }

        // Seed data
        if (shouldSeed('components')) await seedComponents();
        if (shouldSeed('sections')) await seedSections();
        if (shouldSeed('templates')) await seedTemplates();

        console.log('\n═══════════════════════════════════════════════════');
        console.log('  ✅ Database seeded successfully!');
        console.log('═══════════════════════════════════════════════════\n');
        process.exit(0);
    } catch (error) {
        console.error('\n❌ Seed failed:', error.message);
        process.exit(1);
    }
};

main();
