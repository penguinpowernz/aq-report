// Locations Visualization Module

window.renderLocations = function(container) {
    container.innerHTML = '';

    // Header
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <h2>Locations of Interest</h2>
        <p class="section-subtitle">Geographic Intelligence - Training Camps, Safe Havens, Attack Sites</p>
    `;
    container.appendChild(header);

    // Critical Alert
    const alert = createInfoBox(
        '⚠️ Afghanistan - Central Hub',
        `<strong>30 Al-Qaeda training camps</strong> (7 suicide bombing, 23 general warfare)<br>
        <strong>120,000 trained</strong> under Islamic Army by end of 2024<br>
        <strong>Kandahar:</strong> International coordination hub (Iranian, Russian, Chinese, North Korean reps)<br>
        <strong>Iranian intelligence base</strong> inside Al-Qaeda camp`,
        'danger'
    );
    container.appendChild(alert);

    // Regional Breakdown
    const regions = [
        {
            name: 'Afghanistan',
            priority: 'critical',
            region: 'Central Asia',
            description: 'Primary terrorist safe haven and training hub',
            details: {
                'Training Camps': '30 total',
                'Trained Fighters': '120,000+',
                'Key Locations': 'Kandahar, Kabul, Nangarhar',
                'Threat Level': 'CRITICAL'
            }
        },
        {
            name: 'Pakistan',
            priority: 'critical',
            region: 'South Asia',
            description: 'ISIS-K headquarters and safe haven',
            details: {
                'TTP Attacks (2023)': '800+',
                'ISIS-K Camp': 'Turbat (protected by military)',
                'Real ISIS HQ': 'Panjgur, Baluchistan',
                'Threat Level': 'CRITICAL'
            }
        },
        {
            name: 'Libya',
            priority: 'high',
            region: 'North Africa',
            description: 'Weapons market and Benghazi attack site',
            details: {
                'Benghazi Attack': 'Sep 11-12, 2012',
                'Terrorists Involved': '150',
                'At-Large Rate': '75% in Tripoli',
                'Threat Level': 'HIGH'
            }
        },
        {
            name: 'Iran',
            priority: 'critical',
            region: 'Middle East',
            description: 'Safe harbor and coordination hub',
            details: {
                'Al-Qaeda Harbored': '2001-2021',
                'Intel Base': 'Kandahar, Afghanistan',
                'Joint Operations': 'October 7th planning',
                'Threat Level': 'CRITICAL'
            }
        },
        {
            name: 'Darien Gap, Panama',
            priority: 'critical',
            region: 'Central America',
            description: 'Primary terrorist infiltration route to U.S.',
            details: {
                'Route': 'Afghanistan → Iran → Turkey → Brazil → Darien',
                'Mortality Rate': '40%',
                'Confirmed Groups': 'ISIS (8), Haqqani (25-50)',
                'Threat Level': 'CRITICAL'
            }
        }
    ];

    // Regions Grid
    const regionsGrid = document.createElement('div');
    regionsGrid.className = 'location-grid';
    regions.forEach(location => {
        regionsGrid.appendChild(createLocationCard(location));
    });
    container.appendChild(regionsGrid);

    // Training Camps Detail
    const campsChart = createChartContainer(
        'Afghanistan Training Infrastructure',
        '30 operational camps producing Islamic Army fighters'
    );

    const campsData = [
        { label: 'Suicide Bombing Camps', value: 7, valueLabel: '7 camps' },
        { label: 'General Warfare Camps', value: 23, valueLabel: '23 camps' }
    ];

    campsChart.appendChild(createBarChart(campsData, 30));
    container.appendChild(campsChart);

    // Attack Planning Locations
    const attacksChart = createChartContainer(
        'Key Attack Planning Locations',
        'Where major operations were coordinated'
    );

    const attackLocations = document.createElement('div');
    attackLocations.className = 'info-box warning';
    attackLocations.innerHTML = `
        <div class="info-box-title">Major Attack Coordination Sites</div>
        <ul style="margin-left: 2rem; margin-top: 1rem; color: var(--text-secondary);">
            <li><strong>Kandahar, Afghanistan:</strong> October 7th planned (March 2022), Abbey Gate planned (Aug 18, 2021)</li>
            <li><strong>Kabul, Afghanistan:</strong> Secondary October 7th planning, ISIS-K coordination</li>
            <li><strong>Benghazi, Libya:</strong> 2012 attacks (150 terrorists, 4 Americans killed)</li>
            <li><strong>Baghdad, Iraq:</strong> 1,500 fighters positioned for embassy attack</li>
        </ul>
    `;
    attacksChart.appendChild(attackLocations);
    container.appendChild(attacksChart);

    // Future Attack Targets
    const targetsChart = createChartContainer(
        'Predicted U.S. Attack Targets (2025)',
        'Cities and locations at highest risk'
    );

    const targetInfo = document.createElement('div');
    targetInfo.innerHTML = `
        <div class="findings-grid" style="margin-top: 1rem;">
            <div class="finding-card">
                <h4>Tier 1 Cities (Highest Priority)</h4>
                <p>New York, Washington DC, Los Angeles, Chicago - Symbolic targets with maximum impact</p>
            </div>
            <div class="finding-card">
                <h4>Tier 2 Cities (High Priority)</h4>
                <p>Houston, Miami, San Francisco, Seattle, Boston, Atlanta - Economic and cultural centers</p>
            </div>
            <div class="finding-card">
                <h4>Target Types</h4>
                <p>Shopping malls, schools, transit hubs, entertainment venues, residential areas - Soft targets following October 7th/Mumbai models</p>
            </div>
        </div>
    `;
    targetsChart.appendChild(targetInfo);
    container.appendChild(targetsChart);

    // International Coordination
    const coordChart = createChartContainer(
        'International Coordination Network',
        'State actors supporting terrorist operations'
    );

    const coordInfo = document.createElement('div');
    coordInfo.className = 'location-grid';
    coordInfo.innerHTML = `
        <div class="location-card critical">
            <div class="location-name">Kandahar Meeting Hub</div>
            <div class="location-region">Afghanistan</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                Regular meetings between: Russian representatives, Chinese officials, Iranian IRGC,
                North Korean contacts, and terrorist leadership. Unprecedented state-level coordination.
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">China - Uranium Mines</div>
            <div class="location-region">Afghanistan</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                Chinese-operated uranium mines co-located with IRGC and Al-Qaeda conducting
                dirty bomb research. State-level expertise transfer.
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Turkey - Transit Hub</div>
            <div class="location-region">Middle East</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                Major transit point for terrorists. Medical treatment destination. Document procurement.
                Wasam's brother (terrorist financier, multimillionaire) lives here.
            </p>
        </div>
    `;
    coordChart.appendChild(coordInfo);
    container.appendChild(coordChart);
};
