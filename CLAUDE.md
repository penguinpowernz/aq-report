# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an intelligence visualization dashboard that presents detailed analysis from Sarah Adams (former CIA counterterrorism officer) interviews on the Shawn Ryan Show. The project transforms hours of podcast content into an interactive web-based knowledge graph covering Al-Qaeda operations, terrorist threats, the Benghazi attacks, and current national security concerns.

**Core Purpose:** Make complex intelligence information accessible and understandable through visual analysis, entity cross-referencing, and interactive navigation.

## Repository Structure

```
/
├── htdocs/                          # Web application (nginx served)
│   ├── index.html                   # Main SPA entry point
│   ├── css/
│   │   ├── main.css                 # Base layout and navigation styles
│   │   └── charts.css               # Component and visualization styles
│   ├── js/
│   │   ├── main.js                  # Navigation controller, routing, utilities
│   │   └── modules/                 # Independent section modules
│   │       ├── about.js             # About page
│   │       ├── locations.js         # Geographic intelligence
│   │       ├── hierarchy.js         # Organizational structures
│   │       ├── timeline.js          # Historical chronology
│   │       ├── attacks.js           # Attack analysis
│   │       ├── funding.js           # Financial flows
│   │       ├── propaganda.js        # Information warfare
│   │       ├── refugees.js          # Migration exploitation
│   │       ├── glossary.js          # Entity listing and filtering
│   │       └── entity.js            # Entity detail pages
│   ├── data/
│   │   └── entities.json            # Entity database (60+ entities)
│   └── images/diagrams/             # Graphviz-generated visualizations
├── transcripts/                     # Raw podcast transcripts (not in git)
├── DRILLDOWN-*.md                   # Detailed analytical reports by topic
├── REPORT.*.md                      # Episode-specific intelligence summaries
└── ENTITY-SYSTEM.md                 # Documentation of entity system architecture
```

## Technology Stack

- **Frontend:** Vanilla JavaScript (no frameworks), HTML5, CSS3
- **Architecture:** Single Page Application with hash-based routing
- **Data:** JSON entity store, lazy-loaded modules
- **Diagrams:** Graphviz (DOT format)
- **Server:** nginx (static file serving)

## Development Commands

### Running the Application

```bash
# Quick start (uses nginx)
cd htdocs
sudo ./START.sh
# Then open http://localhost

# Manual nginx setup
sudo ln -s $(pwd)/nginx.conf.example /etc/nginx/sites-available/aq-report
sudo ln -s /etc/nginx/sites-available/aq-report /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Regenerating Diagrams

```bash
cd htdocs/images/diagrams
dot -Tpng islamic-army-hierarchy.dot -o islamic-army-hierarchy.png
dot -Tpng funding-flow.dot -o funding-flow.png
dot -Tpng migration-routes.dot -o migration-routes.png
```

### Testing Changes

No build process required. Simply:
1. Edit files in `htdocs/`
2. Refresh browser
3. Changes appear immediately

## Architecture Patterns

### Modular Section System

Each section of the dashboard is an **independent module** in `htdocs/js/modules/`. Modules export a single render function:

```javascript
window.renderSectionName = function(container) {
    container.innerHTML = '';
    // Render section content into container
};
```

**Key principles:**
- Modules are **stateless** and re-renderable
- Modules use utility functions from `main.js` (createChartContainer, createInfoBox, etc.)
- Modules should use `linkifyEntities()` to auto-link entity mentions
- No dependencies between modules (fully independent)

### Routing System

Hash-based routing in `main.js` handles three URL patterns:

1. **Sections:** `#overview`, `#locations`, `#hierarchy`, etc.
   - Loads corresponding module from `js/modules/[section].js`

2. **Glossary:** `#glossary`
   - Shows all entities with type filters and alphabet navigation

3. **Entity Pages:** `#entity:hamza-bin-laden`
   - Dynamically renders entity detail page from `data/entities.json`

### Entity System

The **entity system** is a knowledge graph that cross-links people, organizations, locations, countries, operations, and programs throughout the site.

**Entity Data:** `htdocs/data/entities.json`
```json
{
  "id": "unique-slug",
  "name": "Display Name",
  "aliases": ["Alternative names"],
  "type": "person|organization|country|location|operation|program",
  "wikipediaUrl": "https://...",
  "role": "Brief description",
  "keyFacts": ["Fact 1", "Fact 2"],
  "relatedEntities": ["other-entity-id"],
  "threatLevel": "critical|high|historical|info|victim"
}
```

**Linking Entities:**

```javascript
// Automatic linking (recommended)
element.innerHTML = linkifyEntities("Text mentioning Hamza bin Laden and Al-Qaeda");

// Manual linking
element.innerHTML = '<a href="#entity:hamza-bin-laden" class="entity-link">Hamza bin Laden</a>';

// Programmatic linking
element.appendChild(createEntityLink('hamza-bin-laden', 'Hamza bin Laden'));
```

The `linkifyEntities()` function automatically detects and links 60+ entities from a comprehensive name-to-ID mapping in `main.js`.

### Utility Functions

`main.js` exports utility functions available to all modules:

- `createChartContainer(title, subtitle)` - Standard chart wrapper
- `createInfoBox(title, content, type)` - Info/warning/danger boxes
- `createBarChart(data, maxValue)` - Horizontal bar chart
- `createLocationCard(location)` - Geographic location card
- `createTimelineEvent(event, index)` - Timeline event item
- `createEntityLink(entityId, displayText)` - Entity hyperlink
- `linkifyEntities(text)` - Auto-link entity mentions in text

## Common Tasks

### Adding a New Entity

1. Edit `htdocs/data/entities.json`:
   ```json
   {
     "id": "new-entity-slug",
     "name": "Entity Name",
     "type": "person",
     "role": "Description",
     "keyFacts": ["Fact 1"],
     "relatedEntities": ["related-id"],
     "threatLevel": "critical"
   }
   ```

2. (Optional) Add to auto-linking map in `htdocs/js/main.js`:
   ```javascript
   const entityMap = {
     'Entity Name': 'new-entity-slug',
     // ...
   };
   ```

3. Entity appears in glossary automatically and can be linked from any module

### Modifying a Section

1. Open corresponding module: `htdocs/js/modules/[section].js`
2. Edit the render function
3. Refresh browser to see changes
4. **No other files need modification** (modules are independent)

### Adding a New Section

1. Create module: `htdocs/js/modules/newsection.js`
   ```javascript
   window.renderNewsection = function(container) {
       container.innerHTML = '<h2>New Section</h2>';
   };
   ```

2. Add nav link in `htdocs/index.html`:
   ```html
   <li><a href="#newsection" class="nav-link" data-section="newsection">New Section</a></li>
   ```

3. Add section container in `htdocs/index.html`:
   ```html
   <section id="newsection-section" class="content-section">
       <div class="loading">Loading...</div>
   </section>
   ```

4. Add script tag in `htdocs/index.html`:
   ```html
   <script src="js/modules/newsection.js"></script>
   ```

5. Add to module functions map in `htdocs/js/main.js`:
   ```javascript
   const moduleFunctions = {
       'newsection': window.renderNewsection,
       // ...
   };
   ```

### Creating Diagrams

1. Create DOT file in `htdocs/images/diagrams/newdiagram.dot`:
   ```dot
   digraph G {
       A -> B;
   }
   ```

2. Generate PNG:
   ```bash
   dot -Tpng htdocs/images/diagrams/newdiagram.dot -o htdocs/images/diagrams/newdiagram.png
   ```

3. Reference in module:
   ```javascript
   const img = document.createElement('img');
   img.src = 'images/diagrams/newdiagram.png';
   ```

## Code Style Guidelines

### Vanilla JavaScript Conventions

- Use `document.createElement()` for DOM construction (not string templates in modules)
- Use `innerHTML` only for final output with entity-linked text
- Export functions via `window.functionName`
- No jQuery, React, or other frameworks

### Entity Linking

**Always use entity links** when mentioning entities in new content:
- Use `linkifyEntities()` for automatic linking
- Ensure entity names match those in the `entityMap` in `main.js`
- Update `entityMap` when adding new entities that should auto-link

### CSS Naming

- Use kebab-case for class names: `entity-link`, `info-box`, `chart-container`
- Use semantic names: `alert-box critical` not `red-box`
- Threat level colors: `critical` (red), `high` (orange), `historical` (yellow), `info` (blue), `victim` (purple)

## Important Context

### Content Sensitivity

This repository analyzes **terrorist threat intelligence** from open-source interviews. Content includes:
- Terrorist organizations (Al-Qaeda, Taliban, ISIS, Hamas, Hezbollah)
- Attack planning and methods
- U.S. government intelligence failures
- Predicted future attacks on U.S. homeland

**All information is from public interviews** (Shawn Ryan Show episodes 81, 81.2, 116, 149).

### Data Sources

- `REPORT.*.md` files contain detailed summaries of each podcast episode
- `DRILLDOWN-*.md` files contain thematic analysis (locations, hierarchy, funding, etc.)
- `transcripts/` directory contains raw transcripts (not committed to git due to copyright)
- `htdocs/data/entities.json` is manually curated from the reports

### Design Philosophy

1. **Token Efficiency:** Modular architecture allows editing single files instead of reading/modifying entire codebase
2. **Progressive Disclosure:** Users navigate from overview → glossary → entities → related entities
3. **Visual Hierarchy:** Color-coding by threat level throughout
4. **No Frameworks:** Vanilla JS keeps bundle size minimal and performance fast
5. **Lazy Loading:** Sections load content on first view, not on page load

## Debugging

### Common Issues

**Section not loading:**
- Check module exports `window.renderSectionName` function
- Verify script tag added to `index.html`
- Check browser console for errors

**Entity link not working:**
- Verify entity ID exists in `data/entities.json`
- Check entity type is one of: person, organization, country, location, operation, program
- Ensure `relatedEntities` IDs are valid

**Diagram not showing:**
- Verify PNG exists in `htdocs/images/diagrams/`
- Check image path is relative to `index.html` location
- Regenerate from DOT file if needed

**nginx not serving:**
- Check `sudo nginx -t` for config errors
- Verify file permissions: `sudo chmod -R 755 htdocs/`
- Check logs: `sudo tail -f /var/log/nginx/error.log`

## File Conventions

### Markdown Reports

- `REPORT.[episode].md` - Episode-specific intelligence summaries
- `DRILLDOWN-[TOPIC].md` - Thematic analysis across episodes
- Use title case for filenames: `DRILLDOWN-LOCATIONS.md`

### JavaScript Modules

- One module per file in `htdocs/js/modules/`
- Filename matches section name: `locations.js` for `#locations`
- Each module exports exactly one function: `window.renderSectionName`

### Entity IDs

- Use kebab-case: `hamza-bin-laden`, `islamic-army`, `darien-gap`
- IDs must be unique across all entity types
- IDs should be memorable and match common names

## Git Workflow

**Not tracked:**
- `transcripts/` directory (copyright concerns)
- nginx logs
- Browser cache files

**Tracked:**
- All markdown reports
- All `htdocs/` files
- Entity data
- Diagram source files (DOT)
- Generated diagrams (PNG) - committed for convenience

## Performance Considerations

- Total CSS/JS: ~50KB (fast loading)
- Entity data: ~60KB (lazy loaded on first glossary/entity access)
- No external CDN dependencies (all assets local)
- Static file caching: 30 days for images/css/js
- No build process or transpilation needed

## Further Documentation

- `htdocs/README.md` - Web application architecture and installation
- `htdocs/QUICKSTART.md` - Quick start guide for nginx setup
- `ENTITY-SYSTEM.md` - Detailed entity system implementation guide
- `VISUALIZATION-SUMMARY.md` - Summary of dashboard features and visualizations
- `README.md` - Repository overview and source material listing
