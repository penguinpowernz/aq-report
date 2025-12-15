// Main Navigation and Section Controller

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    loadInitialSection();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.dataset.section;
            loadSection(sectionName);

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Update URL hash
            window.location.hash = sectionName;
        });
    });

    // Handle back/forward navigation
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1) || 'overview';
        handleHashChange(hash);
    });
}

function handleHashChange(hash) {
    // Check if it's an entity page
    if (hash.startsWith('entity:')) {
        const entityId = hash.substring(7); // Remove 'entity:' prefix
        loadEntityPage(entityId);
    } else {
        loadSection(hash);
    }
}

function loadInitialSection() {
    const hash = window.location.hash.substring(1) || 'overview';
    handleHashChange(hash);
}

function loadEntityPage(entityId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Remove active state from nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => l.classList.remove('active'));

    // Show entity section
    const entitySection = document.getElementById('entity-section');
    if (entitySection) {
        entitySection.classList.add('active');

        // Render entity
        if (window.renderEntity && typeof window.renderEntity === 'function') {
            window.renderEntity(entitySection, entityId);
        }
    }
}

function loadSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show requested section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');

        // Load section content if not already loaded
        if (!targetSection.dataset.loaded && sectionName !== 'overview') {
            loadSectionContent(sectionName, targetSection);
        }
    }
}

function loadSectionContent(sectionName, targetElement) {
    // Call the appropriate module's render function
    const moduleFunctions = {
        'locations': window.renderLocations,
        'hierarchy': window.renderHierarchy,
        'timeline': window.renderTimeline,
        'attacks': window.renderAttacks,
        'funding': window.renderFunding,
        'propaganda': window.renderPropaganda,
        'refugees': window.renderRefugees,
        'glossary': window.renderGlossary
    };

    const renderFunction = moduleFunctions[sectionName];
    if (renderFunction && typeof renderFunction === 'function') {
        renderFunction(targetElement);
        targetElement.dataset.loaded = 'true';
    }
}

// Utility Functions

function createChartContainer(title, subtitle) {
    const container = document.createElement('div');
    container.className = 'chart-container';

    if (title) {
        const titleEl = document.createElement('h3');
        titleEl.className = 'chart-title';
        titleEl.textContent = title;
        container.appendChild(titleEl);
    }

    if (subtitle) {
        const subtitleEl = document.createElement('p');
        subtitleEl.className = 'chart-subtitle';
        subtitleEl.textContent = subtitle;
        container.appendChild(subtitleEl);
    }

    return container;
}

function createInfoBox(title, content, type = 'info') {
    const box = document.createElement('div');
    box.className = `info-box ${type}`;

    if (title) {
        const titleEl = document.createElement('div');
        titleEl.className = 'info-box-title';
        titleEl.textContent = title;
        box.appendChild(titleEl);
    }

    const contentEl = document.createElement('div');
    contentEl.innerHTML = content;
    box.appendChild(contentEl);

    return box;
}

function createBarChart(data, maxValue) {
    const container = document.createElement('div');
    container.className = 'bar-chart';

    data.forEach(item => {
        const barItem = document.createElement('div');
        barItem.className = 'bar-item';

        const label = document.createElement('div');
        label.className = 'bar-label';
        label.textContent = item.label;

        const track = document.createElement('div');
        track.className = 'bar-track';

        const fill = document.createElement('div');
        fill.className = 'bar-fill';
        const percentage = (item.value / maxValue) * 100;
        fill.style.width = `${percentage}%`;

        const valueEl = document.createElement('span');
        valueEl.className = 'bar-value';
        valueEl.textContent = item.valueLabel || item.value;
        fill.appendChild(valueEl);

        track.appendChild(fill);
        barItem.appendChild(label);
        barItem.appendChild(track);
        container.appendChild(barItem);
    });

    return container;
}

function createLocationCard(location) {
    const card = document.createElement('div');
    card.className = `location-card ${location.priority || 'medium'}`;

    const name = document.createElement('div');
    name.className = 'location-name';
    name.textContent = location.name;
    card.appendChild(name);

    const region = document.createElement('div');
    region.className = 'location-region';
    region.textContent = location.region;
    card.appendChild(region);

    if (location.description) {
        const desc = document.createElement('p');
        desc.style.marginTop = '0.75rem';
        desc.style.color = 'var(--text-secondary)';
        desc.textContent = location.description;
        card.appendChild(desc);
    }

    if (location.details) {
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'location-details';

        Object.entries(location.details).forEach(([key, value]) => {
            const row = document.createElement('div');
            row.className = 'detail-row';

            const labelEl = document.createElement('span');
            labelEl.className = 'detail-label';
            labelEl.textContent = key;

            const valueEl = document.createElement('span');
            valueEl.className = 'detail-value';
            valueEl.textContent = value;

            row.appendChild(labelEl);
            row.appendChild(valueEl);
            detailsContainer.appendChild(row);
        });

        card.appendChild(detailsContainer);
    }

    return card;
}

function createTimelineEvent(event, index) {
    const item = document.createElement('div');
    item.className = `timeline-event ${index % 2 === 0 ? 'left' : 'right'}`;

    const marker = document.createElement('div');
    marker.className = 'timeline-marker';
    item.appendChild(marker);

    const content = document.createElement('div');
    content.className = 'timeline-content';

    const date = document.createElement('div');
    date.className = 'timeline-date';
    date.textContent = event.date;
    content.appendChild(date);

    const title = document.createElement('div');
    title.className = 'timeline-title';
    title.textContent = event.title;
    content.appendChild(title);

    if (event.description) {
        const desc = document.createElement('div');
        desc.className = 'timeline-description';
        desc.textContent = event.description;
        content.appendChild(desc);
    }

    item.appendChild(content);
    return item;
}

// Entity linking utility
function createEntityLink(entityId, displayText) {
    const link = document.createElement('a');
    link.href = `#entity:${entityId}`;
    link.className = 'entity-link';
    link.textContent = displayText;
    return link;
}

// Replace entity mentions in text with links
function linkifyEntities(text) {
    // Entity name to ID mapping (most common names)
    const entityMap = {
        'Hamza bin Laden': 'hamza-bin-laden',
        'Hamza': 'hamza-bin-laden',
        'Sirajuddin Haqqani': 'sirajuddin-haqqani',
        'Mohammad Kazemi': 'mohammad-kazemi',
        'Sarah Adams': 'sarah-adams',
        'Islamic Army': 'islamic-army',
        'Al-Qaeda': 'al-qaeda',
        'Taliban': 'taliban',
        'Haqqani Network': 'haqqani-network',
        'ISIS-K': 'isis-k',
        'Kandahar': 'kandahar',
        'China': 'china',
        'Iran': 'iran',
        'Russia': 'russia',
        'Afghanistan': 'afghanistan',
        'Benghazi': 'benghazi',
        'October 7': 'october-7',
        'October 7th': 'october-7',
        'Abbey Gate': 'abbey-gate',
        'Darien Gap': 'darien-gap',
        'GDI': 'gdi',
        'Hamas': 'hamas',
        'Hezbollah': 'hezbollah',
        'IRGC': 'irgc',
        'Saif al-Adel': 'saif-al-adel',
        'Hibatullah Akhundzada': 'hibatullah-akhundzada',
        'Abdul Haq Wasiq': 'abdul-haq-wasiq',
        'Musa': 'musa',
        'Bagram': 'bagram',
        'Kabul': 'kabul',
        'Pakistan': 'pakistan',
        'United States': 'united-states',
        'U.S.': 'united-states'
    };

    let linkedText = text;
    Object.entries(entityMap).forEach(([name, id]) => {
        // Use word boundaries to avoid partial matches
        const regex = new RegExp(`\\b${name}\\b`, 'g');
        linkedText = linkedText.replace(regex, `<a href="#entity:${id}" class="entity-link">${name}</a>`);
    });

    return linkedText;
}

// Export utility functions
window.createChartContainer = createChartContainer;
window.createInfoBox = createInfoBox;
window.createBarChart = createBarChart;
window.createLocationCard = createLocationCard;
window.createTimelineEvent = createTimelineEvent;
window.createEntityLink = createEntityLink;
window.linkifyEntities = linkifyEntities;
