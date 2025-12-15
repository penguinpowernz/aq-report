// Glossary Module
// Displays alphabetical listing of all entities

window.renderGlossary = async function(container) {
    container.innerHTML = '<div class="loading">Loading glossary...</div>';

    // Load entities data
    await window.loadEntitiesData();
    const data = await window.loadEntitiesData();
    const entities = data.entities;

    container.innerHTML = '';

    // Header
    const header = document.createElement('div');
    header.className = 'chart-container';
    header.innerHTML = `
        <h2 class="chart-title">Intelligence Glossary</h2>
        <p class="chart-subtitle">Comprehensive index of people, organizations, locations, and operations referenced in the intelligence reports. Click any entity to view detailed information.</p>
    `;
    container.appendChild(header);

    // Filters
    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'glossary-filters';

    const filterTypes = [
        { value: 'all', label: 'All Entities' },
        { value: 'person', label: 'People' },
        { value: 'organization', label: 'Organizations' },
        { value: 'country', label: 'Countries' },
        { value: 'location', label: 'Locations' },
        { value: 'operation', label: 'Operations' },
        { value: 'program', label: 'Programs' }
    ];

    let activeFilter = 'all';

    filterTypes.forEach(filter => {
        const btn = document.createElement('button');
        btn.className = filter.value === 'all' ? 'filter-btn active' : 'filter-btn';
        btn.textContent = filter.label;
        btn.onclick = () => {
            activeFilter = filter.value;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderEntitiesList();
        };
        filtersContainer.appendChild(btn);
    });

    container.appendChild(filtersContainer);

    // Alphabet navigation
    const alphabetContainer = document.createElement('div');
    alphabetContainer.className = 'glossary-alphabet';

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let activeLetters = new Set();
    entities.forEach(entity => {
        const firstLetter = entity.name.charAt(0).toUpperCase();
        activeLetters.add(firstLetter);
    });

    let selectedLetter = null;

    alphabet.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'alphabet-btn';
        if (!activeLetters.has(letter)) {
            btn.classList.add('disabled');
            btn.disabled = true;
        }
        btn.textContent = letter;
        btn.onclick = () => {
            if (btn.classList.contains('disabled')) return;

            selectedLetter = selectedLetter === letter ? null : letter;
            document.querySelectorAll('.alphabet-btn').forEach(b => b.classList.remove('active'));
            if (selectedLetter) {
                btn.classList.add('active');
            }
            renderEntitiesList();
        };
        alphabetContainer.appendChild(btn);
    });

    container.appendChild(alphabetContainer);

    // Entities list container
    const listContainer = document.createElement('div');
    listContainer.id = 'entities-list-container';
    container.appendChild(listContainer);

    // Function to render entities list
    function renderEntitiesList() {
        listContainer.innerHTML = '';

        // Filter entities
        let filtered = entities;
        if (activeFilter !== 'all') {
            filtered = entities.filter(e => e.type === activeFilter);
        }
        if (selectedLetter) {
            filtered = filtered.filter(e => e.name.charAt(0).toUpperCase() === selectedLetter);
        }

        // Sort by name
        filtered.sort((a, b) => a.name.localeCompare(b.name));

        // Group by first letter
        const grouped = {};
        filtered.forEach(entity => {
            const firstLetter = entity.name.charAt(0).toUpperCase();
            if (!grouped[firstLetter]) {
                grouped[firstLetter] = [];
            }
            grouped[firstLetter].push(entity);
        });

        // Render grouped entities
        Object.keys(grouped).sort().forEach(letter => {
            const section = document.createElement('div');
            section.className = 'glossary-section';

            const letterHeading = document.createElement('h3');
            letterHeading.textContent = letter;
            section.appendChild(letterHeading);

            const grid = document.createElement('div');
            grid.className = 'glossary-grid';

            grouped[letter].forEach(entity => {
                const card = document.createElement('div');
                card.className = `glossary-card threat-${entity.threatLevel}`;
                card.onclick = () => {
                    window.location.hash = `entity:${entity.id}`;
                };

                const name = document.createElement('div');
                name.className = 'glossary-card-name';
                name.textContent = entity.name;
                card.appendChild(name);

                const role = document.createElement('div');
                role.className = 'glossary-card-role';
                role.textContent = entity.role;
                card.appendChild(role);

                const type = document.createElement('span');
                type.className = 'glossary-card-type';
                type.textContent = entity.type;
                card.appendChild(type);

                grid.appendChild(card);
            });

            section.appendChild(grid);
            listContainer.appendChild(section);
        });

        // Show count
        const countMsg = document.createElement('div');
        countMsg.style.textAlign = 'center';
        countMsg.style.color = 'var(--text-secondary)';
        countMsg.style.marginTop = '2rem';
        countMsg.style.fontSize = '0.9rem';
        countMsg.textContent = `Showing ${filtered.length} of ${entities.length} entities`;
        listContainer.appendChild(countMsg);
    }

    // Initial render
    renderEntitiesList();
};
