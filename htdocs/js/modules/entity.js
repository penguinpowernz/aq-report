// Entity Page Module
// Renders individual entity pages dynamically

let entitiesData = null;

// Load entities data
async function loadEntitiesData() {
    if (entitiesData) return entitiesData;

    try {
        const response = await fetch('data/entities.json');
        entitiesData = await response.json();
        return entitiesData;
    } catch (error) {
        console.error('Error loading entities data:', error);
        return { entities: [] };
    }
}

// Find entity by ID
function findEntityById(entityId) {
    if (!entitiesData) return null;
    return entitiesData.entities.find(e => e.id === entityId);
}

// Find entity name by ID (for related entities)
function getEntityName(entityId) {
    const entity = findEntityById(entityId);
    return entity ? entity.name : entityId;
}

// Render entity page
window.renderEntity = async function(container, entityId) {
    container.innerHTML = '<div class="loading">Loading entity data...</div>';

    await loadEntitiesData();
    const entity = findEntityById(entityId);

    if (!entity) {
        container.innerHTML = `
            <div class="entity-page">
                <a href="#glossary" class="back-to-glossary">Back to Glossary</a>
                <div class="chart-container">
                    <h2>Entity Not Found</h2>
                    <p>The entity "${entityId}" could not be found.</p>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    const page = document.createElement('div');
    page.className = 'entity-page';

    // Back button
    const backButton = document.createElement('a');
    backButton.href = '#glossary';
    backButton.className = 'back-to-glossary';
    backButton.textContent = 'Back to Glossary';
    page.appendChild(backButton);

    // Entity header
    const header = document.createElement('div');
    header.className = `entity-header threat-${entity.threatLevel}`;

    const name = document.createElement('h1');
    name.className = 'entity-name';
    name.textContent = entity.name;
    header.appendChild(name);

    const role = document.createElement('div');
    role.className = 'entity-role';
    role.textContent = entity.role;
    header.appendChild(role);

    const typeBadge = document.createElement('span');
    typeBadge.className = 'entity-type-badge';
    typeBadge.textContent = entity.type.toUpperCase();
    header.appendChild(typeBadge);

    const threatBadge = document.createElement('span');
    threatBadge.className = 'entity-type-badge';
    threatBadge.textContent = `Threat: ${entity.threatLevel.toUpperCase()}`;
    header.appendChild(threatBadge);

    if (entity.aliases && entity.aliases.length > 0) {
        const aliases = document.createElement('div');
        aliases.className = 'entity-aliases';
        aliases.innerHTML = `<strong>Also known as:</strong> ${entity.aliases.join(', ')}`;
        header.appendChild(aliases);
    }

    page.appendChild(header);

    // Key Facts section
    if (entity.keyFacts && entity.keyFacts.length > 0) {
        const factsSection = document.createElement('div');
        factsSection.className = 'entity-section';

        const factsTitle = document.createElement('h3');
        factsTitle.textContent = 'Key Intelligence';
        factsSection.appendChild(factsTitle);

        const factsList = document.createElement('ul');
        factsList.className = 'key-facts-list';

        entity.keyFacts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            factsList.appendChild(li);
        });

        factsSection.appendChild(factsList);
        page.appendChild(factsSection);
    }

    // Related Entities section
    if (entity.relatedEntities && entity.relatedEntities.length > 0) {
        const relatedSection = document.createElement('div');
        relatedSection.className = 'entity-section';

        const relatedTitle = document.createElement('h3');
        relatedTitle.textContent = 'Related Entities';
        relatedSection.appendChild(relatedTitle);

        const relatedGrid = document.createElement('div');
        relatedGrid.className = 'related-entities-grid';

        entity.relatedEntities.forEach(relatedId => {
            const relatedEntity = findEntityById(relatedId);
            if (relatedEntity) {
                const link = document.createElement('a');
                link.href = `#entity:${relatedId}`;
                link.className = 'related-entity-link';
                link.textContent = relatedEntity.name;
                relatedGrid.appendChild(link);
            }
        });

        relatedSection.appendChild(relatedGrid);
        page.appendChild(relatedSection);
    }

    // Wikipedia section
    if (entity.wikipediaUrl) {
        const wikiSection = document.createElement('div');
        wikiSection.className = 'entity-section';

        const wikiTitle = document.createElement('h3');
        wikiTitle.textContent = 'Additional Information';
        wikiSection.appendChild(wikiTitle);

        const wikiLink = document.createElement('a');
        wikiLink.href = entity.wikipediaUrl;
        wikiLink.className = 'wikipedia-link';
        wikiLink.target = '_blank';
        wikiLink.rel = 'noopener noreferrer';
        wikiLink.textContent = 'View on Wikipedia';
        wikiSection.appendChild(wikiLink);

        page.appendChild(wikiSection);
    }

    // Source attribution
    const attribution = document.createElement('div');
    attribution.className = 'entity-section';
    attribution.style.background = 'var(--secondary-bg)';
    attribution.style.fontSize = '0.9rem';
    attribution.style.color = 'var(--text-secondary)';
    attribution.innerHTML = `
        <p><strong>Intelligence Source:</strong> All information on this page is derived from Sarah Adams' interviews on the Shawn Ryan Show, based on her work as a former CIA counterterrorism officer.</p>
    `;
    page.appendChild(attribution);

    container.appendChild(page);
};

// Export for use in main.js
window.loadEntitiesData = loadEntitiesData;
window.findEntityById = findEntityById;
window.getEntityName = getEntityName;
