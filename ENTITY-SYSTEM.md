# Entity System - Implementation Summary

## Overview

A comprehensive entity knowledge graph system has been added to the AQ Intelligence Dashboard, allowing users to explore relationships between people, organizations, locations, countries, operations, and programs mentioned in the intelligence reports.

## What Was Built

### 1. Entity Data Store

**File:** `htdocs/data/entities.json`

**Contains:** 60+ curated entities with:
- **People:** Hamza bin Laden, Sirajuddin Haqqani, Mohammad Kazemi, Sarah Adams, Saif al-Adel, Abdul Haq Wasiq, and more
- **Organizations:** Islamic Army, Al-Qaeda, Taliban, Haqqani Network, ISIS-K, Hamas, Hezbollah, GDI, IRGC, ISI
- **Countries:** Afghanistan, China, Iran, Russia, Pakistan, United States, Libya, Yemen, Turkey, Brazil, Panama
- **Locations:** Kandahar, Kabul, Bagram, Panjgur, Darien Gap, Benghazi, Nangarhar, Turbat, Baluchistan
- **Operations:** October 7th, Abbey Gate
- **Programs:** HIDE/SEEK/BAT Systems

Each entity includes:
```json
{
  "id": "hamza-bin-laden",
  "name": "Hamza bin Laden",
  "aliases": ["Hamza", "Supreme Commander"],
  "type": "person",
  "wikipediaUrl": "https://en.wikipedia.org/wiki/Hamza_bin_Laden",
  "role": "Supreme Commander, Islamic Army",
  "keyFacts": [
    "Son of Osama bin Laden",
    "Supreme Commander of 120,000+ fighter Islamic Army",
    "..."
  ],
  "relatedEntities": ["osama-bin-laden", "islamic-army", "al-qaeda"],
  "threatLevel": "critical"
}
```

### 2. Entity Page Module

**File:** `htdocs/js/modules/entity.js`

**Features:**
- Dynamic entity page rendering
- Shows all key intelligence about the entity
- Related entities grid with hyperlinks
- Wikipedia link for additional information
- Color-coded threat level badges (critical/high/historical/info/victim)
- Back to glossary navigation

**URL Format:** `#entity:hamza-bin-laden`

### 3. Glossary Module

**File:** `htdocs/js/modules/glossary.js`

**Features:**
- Alphabetical listing of all entities
- Filter by type (People, Organizations, Countries, Locations, Operations, Programs)
- Alphabet navigation (A-Z with disabled letters for missing entries)
- Color-coded cards by threat level
- Click any card to view entity details
- Shows count of filtered entities

**URL:** `#glossary`

### 4. Entity CSS Styles

**File:** `htdocs/css/charts.css` (additions)

**Includes:**
- Entity page header with threat-level color coding
- Key facts list with custom styling
- Related entities grid
- Wikipedia link styling
- Glossary filter buttons
- Alphabet navigation
- Glossary cards with hover effects
- Inline entity link styling (dotted underline, blue color)

### 5. Navigation Updates

**Files Modified:**
- `htdocs/index.html` - Added glossary nav link, entity/glossary sections, module script tags
- `htdocs/js/main.js` - Added entity routing, `handleHashChange()`, `loadEntityPage()`, `createEntityLink()`, `linkifyEntities()`

### 6. Entity Linking Utilities

**Location:** `htdocs/js/main.js`

**Functions:**

```javascript
// Create an entity link programmatically
window.createEntityLink(entityId, displayText)

// Replace entity mentions in text with links
window.linkifyEntities(text)
```

**Example Usage:**
```javascript
const link = createEntityLink('hamza-bin-laden', 'Hamza bin Laden');

const text = "Taliban and Al-Qaeda coordinate in Kandahar";
const linkedText = linkifyEntities(text); // Auto-links known entities
```

### 7. Sample Entity Links

**File:** `htdocs/index.html` (Overview section)

Entity links have been added to the overview page's key findings section as examples, linking to:
- Islamic Army
- Al-Qaeda
- Taliban
- ISIS-K
- Hamas
- Hezbollah
- Hamza bin Laden
- Iran
- Russia
- China
- Darien Gap
- United States

## How to Use

### As a User

1. **Browse Glossary**
   - Click "Glossary" in left sidebar
   - Filter by entity type (People, Organizations, etc.)
   - Click any letter A-Z to jump to that section
   - Click any entity card to view details

2. **View Entity Details**
   - Click any entity link throughout the site
   - Read key intelligence facts
   - Click related entities to explore connections
   - Click Wikipedia link for additional background

3. **Follow Entity Links**
   - Entity names throughout the site are clickable
   - Blue text with dotted underline = entity link
   - Hover shows orange color
   - Click to navigate to entity page

### As a Developer

**Adding Entity Links to Modules:**

Option 1 - Manual Links:
```javascript
const text = document.createElement('p');
text.innerHTML = `<a href="#entity:hamza-bin-laden" class="entity-link">Hamza bin Laden</a> commands the Islamic Army`;
```

Option 2 - Auto-linking:
```javascript
const text = document.createElement('p');
const rawText = "Hamza bin Laden commands the Islamic Army";
text.innerHTML = linkifyEntities(rawText); // Auto-links both entities
```

Option 3 - Programmatic:
```javascript
const container = document.createElement('div');
container.appendChild(document.createTextNode('Commander: '));
container.appendChild(createEntityLink('hamza-bin-laden', 'Hamza bin Laden'));
```

**Adding New Entities:**

Edit `htdocs/data/entities.json`:

```json
{
  "id": "new-entity-slug",
  "name": "Entity Name",
  "aliases": ["Alternative Name"],
  "type": "person|organization|country|location|operation|program",
  "wikipediaUrl": "https://en.wikipedia.org/wiki/Entity_Name",
  "role": "Brief description",
  "keyFacts": [
    "Important fact 1",
    "Important fact 2"
  ],
  "relatedEntities": ["other-entity-id", "another-entity-id"],
  "threatLevel": "critical|high|historical|info|victim"
}
```

Then add to entity map in `main.js` if you want auto-linking:

```javascript
const entityMap = {
  'Entity Name': 'new-entity-slug',
  // ...
};
```

## Architecture Benefits

### Token Efficiency
- Entities data in single JSON file (~60KB)
- To add entity, edit just entities.json
- To add links to a module, edit just that module file
- No need to touch all files

### Maintainability
- Centralized entity data source
- Consistent entity pages (single template)
- Easy to add new entities
- Easy to update entity information

### User Experience
- Progressive disclosure (Glossary → Entity → Related Entities)
- Multiple navigation paths (sidebar, filters, alphabet, links)
- Visual hierarchy (threat-level color coding)
- Cross-referencing creates knowledge graph
- Wikipedia links for context

### Performance
- Lazy loading (entities.json loaded on first use)
- No external dependencies
- Fast JSON parsing
- Client-side rendering

## Entity Statistics

**Total Entities:** 60+

**By Type:**
- People: 15+ (terrorists, intelligence officers, victims)
- Organizations: 16+ (terrorist groups, intelligence agencies, government)
- Countries: 10+ (state actors, transit routes, targets)
- Locations: 10+ (camps, cities, bases, routes)
- Operations: 2 (historical attacks)
- Programs: 1 (biometric systems)

**By Threat Level:**
- Critical: 30+ (active threats, terrorist leaders, state actors)
- High: 15+ (regional branches, transit countries)
- Historical: 5+ (past events, deceased persons)
- Info: 3 (intelligence agencies)
- Victim: 3 (hostages, casualties)

## Future Enhancements

### Easy Additions

1. **Search Function**
   - Add search box to glossary
   - Filter entities by name/role
   - Highlight matching text

2. **Entity Relationships Visualization**
   - D3.js or Cytoscape.js graph
   - Show connections between entities
   - Interactive network diagram

3. **Entity Mentions Counter**
   - Track how often entity is mentioned
   - Show "hotness" metric
   - Sort by relevance

4. **Timeline Integration**
   - Show entities on timeline
   - Filter timeline by entity
   - Entity-specific chronology

5. **Export Functions**
   - Export entity as PDF
   - Print-friendly entity pages
   - Entity dossier generation

### Medium Effort

1. **Smart Auto-linking**
   - Parse all module content
   - Automatically detect entities
   - No manual linking needed

2. **Entity Images**
   - Add photos where available
   - Organization logos
   - Location maps

3. **Source Citations**
   - Link facts to specific interviews
   - Timestamp references
   - Quote extraction

4. **Entity History**
   - Show evolution over time
   - Status changes
   - Historical context

## Usage Examples

### Example 1: Understanding the Islamic Army

1. Go to Glossary
2. Filter by "Organizations"
3. Click "Islamic Army" card
4. Read key facts about 120,000 fighters
5. Click "Hamza bin Laden" in related entities
6. Understand command structure
7. Click "Al-Qaeda" to see parent organization
8. Follow connections through entire network

### Example 2: Tracing U.S. Funding

1. Go to Glossary
2. Click "United States"
3. See key fact: "$44-87 million weekly to Taliban/Al-Qaeda"
4. Click "Taliban" in related entities
5. See Taliban receives payments
6. Click "Sirajuddin Haqqani"
7. See he receives $15-18M monthly
8. Click "Haqqani Network"
9. Understand how money flows to terrorists

### Example 3: Following Terrorist Routes

1. Click "Darien Gap" link in overview
2. See 40% mortality rate
3. Click "Panama" in related entities
4. Click "Brazil" in related entities
5. Click "Turkey" in related entities
6. Click "Iran" in related entities
7. Click "Afghanistan" in related entities
8. Understand complete route: Afghanistan → Iran → Turkey → Brazil → Darien Gap → U.S.

## Technical Details

### Routing

Hash-based routing handles three types of URLs:

1. **Section:** `#overview`, `#locations`, `#hierarchy`, etc.
   - Loads report section module
   - Updates navigation state

2. **Glossary:** `#glossary`
   - Loads glossary with all entities
   - Shows filters and alphabet nav

3. **Entity:** `#entity:hamza-bin-laden`
   - Loads specific entity page
   - Fetches data from entities.json
   - Renders template

### Data Loading

```javascript
// First access to any entity page or glossary
loadEntitiesData() // Fetches entities.json once

// Subsequent entity pages
findEntityById(entityId) // Searches cached data

// Related entities
getEntityName(entityId) // Returns entity name for display
```

### Threat Level Color Scheme

```css
critical:   #dc2626 (red)    - Active threats, terrorist leaders
high:       #ea580c (orange) - Regional actors, secondary threats
historical: #eab308 (yellow) - Past events
info:       #3b82f6 (blue)   - Intelligence agencies, sources
victim:     #7c3aed (purple) - Hostages, casualties
```

## Files Created

```
htdocs/
├── data/
│   └── entities.json           # 60+ entities with full metadata
├── js/modules/
│   ├── entity.js               # Entity page rendering
│   └── glossary.js             # Glossary with filters
└── css/
    └── charts.css              # Entity styles (additions)
```

## Files Modified

```
htdocs/
├── index.html                  # Added glossary nav, sections, scripts
└── js/
    └── main.js                 # Added routing, utility functions
```

## Success Metrics

✅ **Comprehensive Coverage** - 60+ key entities from intelligence reports
✅ **Multiple Access Paths** - Glossary, filters, alphabet, inline links, related entities
✅ **Visual Hierarchy** - Threat-level color coding throughout
✅ **Cross-referencing** - Related entities create navigable knowledge graph
✅ **External Context** - Wikipedia links for additional information
✅ **Token Efficient** - Modular architecture, single data source
✅ **User Friendly** - Progressive disclosure, clear navigation
✅ **Maintainable** - Easy to add entities, update information
✅ **Fast** - Client-side rendering, lazy loading, cached data

## Conclusion

The entity system transforms the AQ Intelligence Dashboard from a set of separate reports into an interconnected knowledge graph. Users can now:

1. **Explore** - Browse all entities alphabetically or by type
2. **Learn** - Read key intelligence about each entity
3. **Connect** - Follow relationships between entities
4. **Contextualize** - Access Wikipedia for background
5. **Navigate** - Jump between related entities seamlessly

This creates a Wikipedia-like experience specifically for the intelligence data, making complex relationships and connections easy to understand and explore.

---

**Created:** December 15, 2024
**Status:** Complete and functional
**Next Steps:** Consider adding entity links to existing module content (locations, hierarchy, timeline, attacks, funding, propaganda, refugees)
