// Hierarchy Visualization Module

window.renderHierarchy = function(container) {
    container.innerHTML = '';

    // Header
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <h2>Organizational Hierarchies and Command Structures</h2>
        <p class="section-subtitle">Mapping the Islamic Army - Unified Terrorist Command Network</p>
    `;
    container.appendChild(header);

    // Critical Alert - Islamic Army Formation
    const alertContent = `<strong>Supreme Commander:</strong> <a href="#entity:hamza-bin-laden" class="entity-link">Hamza bin Laden</a> (alive in <a href="#entity:afghanistan" class="entity-link">Afghanistan</a>, U.S. falsely lists as deceased)<br>
        <strong>Military Commander:</strong> <a href="#entity:hamza-al-ghamdi" class="entity-link">Hamza al-Ghamdi</a> (former <a href="#entity:osama-bin-laden" class="entity-link">Osama bin Laden</a> bodyguard)<br>
        <strong>Total Force:</strong> 120,000+ trained fighters (2024)<br>
        <strong>Innovation:</strong> First successful Sunni-Shia integration for operational purposes<br>
        <strong>State Support:</strong> <a href="#entity:iran" class="entity-link">Iran</a>, <a href="#entity:russia" class="entity-link">Russia</a>, <a href="#entity:china" class="entity-link">China</a>, North Korea coordination`;

    const alert = createInfoBox(
        '🚨 <a href="#entity:islamic-army" class="entity-link">Islamic Army</a> - Unified Command',
        alertContent,
        'danger'
    );
    container.appendChild(alert);

    // Overall Islamic Army Structure
    const structureChart = createChartContainer(
        'Islamic Army Structure',
        'Unified command integrating Al-Qaeda, ISIS, Taliban, Hamas, Hezbollah, and IRGC'
    );

    const orgFlow = document.createElement('div');
    orgFlow.className = 'flow-chart';
    orgFlow.innerHTML = `
        <div class="flow-row">
            <div class="flow-node red">
                <div class="flow-node-title"><a href="#entity:islamic-army" class="entity-link" style="color: inherit;">ISLAMIC ARMY</a></div>
                <div class="flow-node-detail">120,000+ trained fighters</div>
            </div>
        </div>
        <div class="flow-row">
            <div class="flow-node orange">
                <div class="flow-node-title"><a href="#entity:hamza-bin-laden" class="entity-link" style="color: inherit;">Hamza bin Laden</a></div>
                <div class="flow-node-detail">Supreme Commander</div>
            </div>
            <div class="flow-node orange">
                <div class="flow-node-title"><a href="#entity:hamza-al-ghamdi" class="entity-link" style="color: inherit;">Hamza al-Ghamdi</a></div>
                <div class="flow-node-detail">Military Commander</div>
            </div>
        </div>
        <div class="flow-row">
            <div class="flow-node blue">
                <div class="flow-node-title"><a href="#entity:al-qaeda" class="entity-link" style="color: inherit;">Al-Qaeda Core</a></div>
                <div class="flow-node-detail">Training & Operations</div>
            </div>
            <div class="flow-node blue">
                <div class="flow-node-title"><a href="#entity:taliban" class="entity-link" style="color: inherit;">Taliban</a></div>
                <div class="flow-node-detail">Safe Haven & Support</div>
            </div>
            <div class="flow-node blue">
                <div class="flow-node-title"><a href="#entity:isis-k" class="entity-link" style="color: inherit;">ISIS/ISIS-K</a></div>
                <div class="flow-node-detail">Territory Control</div>
            </div>
        </div>
        <div class="flow-row">
            <div class="flow-node green">
                <div class="flow-node-title"><a href="#entity:hamas" class="entity-link" style="color: inherit;">Hamas</a></div>
                <div class="flow-node-detail">Al-Qassam Brigades</div>
            </div>
            <div class="flow-node green">
                <div class="flow-node-title"><a href="#entity:hezbollah" class="entity-link" style="color: inherit;">Hezbollah</a></div>
                <div class="flow-node-detail">Military Wing</div>
            </div>
            <div class="flow-node green">
                <div class="flow-node-title"><a href="#entity:irgc" class="entity-link" style="color: inherit;">Iranian IRGC</a></div>
                <div class="flow-node-detail">Quds Force & Intel</div>
            </div>
        </div>
    `;
    structureChart.appendChild(orgFlow);
    container.appendChild(structureChart);

    // Al-Qaeda Core Leadership - "The Top Three"
    const aqLeadership = createChartContainer(
        'Al-Qaeda Core Leadership',
        'The Bin Laden family controls overall operations'
    );

    const leadershipGrid = document.createElement('div');
    leadershipGrid.className = 'location-grid';
    leadershipGrid.innerHTML = `
        <div class="location-card critical">
            <div class="location-name"><a href="#entity:hamza-bin-laden" class="entity-link" style="color: inherit;">Hamza bin Laden</a> - #1</div>
            <div class="location-region">Overall Leader</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Location:</strong> <a href="#entity:kandahar" class="entity-link">Kandahar</a>, <a href="#entity:afghanistan" class="entity-link">Afghanistan</a><br>
                <strong>Status:</strong> <a href="#entity:united-states" class="entity-link">U.S.</a> falsely claims deceased<br>
                <strong>Married to:</strong> Daughter of Mullah Omar & Zawahiri<br>
                <strong>Receives:</strong> U.S. weekly cash ($44-87M distributed)<br>
                <strong>FBI Reward:</strong> $1M (remarkably low)
            </p>
        </div>
        <div class="location-card critical">
            <div class="location-name">Saad bin Laden - #2</div>
            <div class="location-region">Deputy Leader</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Role:</strong> Second-in-command<br>
                <strong>Receives:</strong> U.S. weekly cash deliveries<br>
                <strong>Family:</strong> Brother of Hamza<br>
                <strong>Status:</strong> Designated terrorist
            </p>
        </div>
        <div class="location-card critical">
            <div class="location-name">Abdullah bin Laden - #3</div>
            <div class="location-region">COO - Chief Operating Officer</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Role:</strong> Training camp management (30+ camps)<br>
                <strong>Manages:</strong> 100,000+ fighter recruitment<br>
                <strong>Receives:</strong> U.S. weekly cash deliveries<br>
                <strong>Status:</strong> NOT designated (major intelligence failure)
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Saif al-Adel</div>
            <div class="location-region">Military Commission Commander</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Role:</strong> De facto head of external operations<br>
                <strong>Operations:</strong> October 7th planning, embassy attacks<br>
                <strong>Receives:</strong> U.S. weekly cash deliveries<br>
                <strong>U.S. Claim:</strong> Falsely stated as AQ head (he's not)
            </p>
        </div>
    `;
    aqLeadership.appendChild(leadershipGrid);
    container.appendChild(aqLeadership);

    // U.S. Weekly Funding Recipients
    const fundingChart = createChartContainer(
        'U.S. Weekly Cash Recipients',
        '$44-87 million per week distributed to designated terrorists'
    );

    const fundingBox = document.createElement('div');
    fundingBox.className = 'info-box danger';
    fundingBox.innerHTML = `
        <div class="info-box-title">Weekly U.S. Funding Recipients (All Designated Terrorists)</div>
        <div style="margin-top: 1rem;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Organization</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hamza bin Laden</td>
                        <td>Supreme Commander</td>
                        <td>Al-Qaeda #1</td>
                        <td>Designated</td>
                    </tr>
                    <tr>
                        <td>Saad bin Laden</td>
                        <td>Deputy Leader</td>
                        <td>Al-Qaeda #2</td>
                        <td>Designated</td>
                    </tr>
                    <tr>
                        <td>Abdullah bin Laden</td>
                        <td>COO</td>
                        <td>Al-Qaeda #3</td>
                        <td><strong style="color: var(--accent-red);">NOT Designated</strong></td>
                    </tr>
                    <tr>
                        <td>Saif al-Adel</td>
                        <td>Military Commission</td>
                        <td>Al-Qaeda</td>
                        <td>Designated</td>
                    </tr>
                    <tr>
                        <td>Sirajuddin Haqqani</td>
                        <td>Interior Minister</td>
                        <td>Taliban/Haqqani</td>
                        <td>Designated (~$15-18M/mo)</td>
                    </tr>
                    <tr>
                        <td>Mullah Baradar</td>
                        <td>Deputy PM</td>
                        <td>Taliban</td>
                        <td>Designated</td>
                    </tr>
                    <tr>
                        <td>Muhammad Hassan Akhund</td>
                        <td>Prime Minister</td>
                        <td>Taliban</td>
                        <td>Designated</td>
                    </tr>
                    <tr>
                        <td>Abdul Haq Wasiq</td>
                        <td>GDI Commander</td>
                        <td>Taliban Intel</td>
                        <td>Designated (holds 3 Americans)</td>
                    </tr>
                    <tr>
                        <td>Hibatullah Akhundzada</td>
                        <td>Supreme Leader</td>
                        <td>Taliban</td>
                        <td>~$3M/mo + $48M office budget</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    fundingChart.appendChild(fundingBox);
    container.appendChild(fundingChart);

    // Taliban Dual Faction Structure
    const talibanChart = createChartContainer(
        'Taliban Government - Dual Faction Structure',
        'Kandahari Taliban vs Haqqani Network (publicly unified, privately separate power bases)'
    );

    const talibanFlow = document.createElement('div');
    talibanFlow.className = 'flow-chart';
    talibanFlow.innerHTML = `
        <div class="flow-row">
            <div class="flow-node orange">
                <div class="flow-node-title">Kandahari Taliban Faction</div>
                <div class="flow-node-detail">Religious authority</div>
            </div>
            <div class="flow-node orange">
                <div class="flow-node-title">Haqqani Network Faction</div>
                <div class="flow-node-detail">Operational control</div>
            </div>
        </div>
        <div class="flow-row">
            <div class="flow-node blue">
                <div class="flow-node-title">Hibatullah Akhundzada</div>
                <div class="flow-node-detail">Supreme Leader (~$3M/mo)</div>
            </div>
            <div class="flow-node blue">
                <div class="flow-node-title">Mullah Yaqub</div>
                <div class="flow-node-detail">Military (Mullah Omar's son)</div>
            </div>
            <div class="flow-node blue">
                <div class="flow-node-title">Mullah Baradar</div>
                <div class="flow-node-detail">Deputy PM (China liaison)</div>
            </div>
        </div>
        <div class="flow-row">
            <div class="flow-node red">
                <div class="flow-node-title">Sirajuddin Haqqani</div>
                <div class="flow-node-detail">Interior Minister (~$15-18M/mo)</div>
            </div>
        </div>
        <div class="flow-row">
            <div class="flow-node green">
                <div class="flow-node-title">Ministry of Interior</div>
                <div class="flow-node-detail">Passports, borders, biometrics</div>
            </div>
            <div class="flow-node green">
                <div class="flow-node-title">Musa (Document Forger)</div>
                <div class="flow-node-detail">All fake Al-Qaeda passports</div>
            </div>
            <div class="flow-node green">
                <div class="flow-node-title">ISIS-K Control</div>
                <div class="flow-node-detail">Via Sanullah (Haqqani plant)</div>
            </div>
        </div>
    `;
    talibanChart.appendChild(talibanFlow);
    container.appendChild(talibanChart);

    // ISIS Structure - Dual Branch System
    const isisChart = createChartContainer(
        'ISIS and ISIS-K Structure',
        'Real ISIS relocated to Baluchistan, ISIS-K has two separate branches'
    );

    const isisInfo = document.createElement('div');
    isisInfo.className = 'location-grid';
    isisInfo.innerHTML = `
        <div class="location-card critical">
            <div class="location-name">Real ISIS Leadership</div>
            <div class="location-region">Panjgur, Baluchistan, Pakistan</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Relocated:</strong> 2020 from Syria/Iraq<br>
                <strong>All Committees:</strong> Shura, Operational, Leadership, Media<br>
                <strong>De Facto Head:</strong> Sanullah (Haqqani plant)<br>
                <strong>Fighters Remaining Syria/Iraq:</strong> ~5,000
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">ISIS-K Branch One</div>
            <div class="location-region">Pakistan-Afghanistan Border</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Leader:</strong> Sanullah (Haqqani plant since 2012)<br>
                <strong>HQ:</strong> Kunar Province, Afghanistan<br>
                <strong>Fighters:</strong> ~7,000<br>
                <strong>Operations:</strong> Abbey Gate, Moscow attacks
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">ISIS-K Branch Two</div>
            <div class="location-region">Northern Afghanistan</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Leader:</strong> Ghulam Kohistani (former Tajik SF)<br>
                <strong>Focus:</strong> Central Asian recruitment<br>
                <strong>Target:</strong> Russia (one of Russia's main enemies)<br>
                <strong>Backing:</strong> Sirajuddin Haqqani funding
            </p>
        </div>
    `;
    isisChart.appendChild(isisInfo);
    container.appendChild(isisChart);

    // Haqqani Network Control Structure
    const haqqaniChart = createChartContainer(
        'Haqqani Network - Ministry of Interior Operations',
        'Controls ISIS-K, passports, biometrics, and secret prisons'
    );

    const haqqaniBox = createInfoBox(
        'Sirajuddin Haqqani - Minister of Interior',
        `<strong>U.S. Funding:</strong> 5-6x more than Supreme Leader (~$15-18M/month)<br>
        <strong>Historical:</strong> Sent 1,500+ suicide bombers at U.S./NATO forces<br>
        <strong>Current Operations:</strong><br>
        • Abdul Azim Ali Musa Ben Ali works here making terrorist passports<br>
        • Uses U.S. biometrics to hunt Afghan allies (10,000+ killed, 30,000 captured)<br>
        • Controls all passport issuance (fake passports for Al-Qaeda terrorists)<br>
        • ISIS-K control through Sanullah Ghafari (his plant)<br>
        • Working with Boko Haram, Al-Qaeda Libya, TTP<br>
        <strong>U.S. Action:</strong> Dropping cash at his house weekly`,
        'danger'
    );
    haqqaniChart.appendChild(haqqaniBox);
    container.appendChild(haqqaniChart);

    // Iranian IRGC Integration
    const irgcChart = createChartContainer(
        'Iranian IRGC Relationships',
        'State-level coordination with Al-Qaeda and Taliban'
    );

    const irgcGrid = document.createElement('div');
    irgcGrid.className = 'location-grid';
    irgcGrid.innerHTML = `
        <div class="location-card critical">
            <div class="location-name">Mohammad Kazemi</div>
            <div class="location-region">IRGC Intelligence Organization Head</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Historical:</strong> Protected Hamza bin Laden, Saif al-Adel in Iran<br>
                <strong>October 7th:</strong> Co-plotter and operations coordinator<br>
                <strong>Soleimani Plot:</strong> Mastermind ($145M/month budget)<br>
                <strong>Current:</strong> Regular visits to Kandahar<br>
                <strong>FBI Status:</strong> NOT on Most Wanted List
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Intel Base in Kandahar</div>
            <div class="location-region">Inside Al-Qaeda Training Camp</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Location:</strong> Iranian government intel base inside AQ camp<br>
                <strong>Activities:</strong> Intelligence sharing, operational coordination<br>
                <strong>Visitors:</strong> Russians, Chinese, North Koreans<br>
                <strong>Joint Projects:</strong> Dirty bomb research (uranium mines)
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Uranium/Dirty Bomb Development</div>
            <div class="location-region">Chinese Mines, Southern Afghanistan</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Co-location:</strong> Chinese personnel, Al-Qaeda, IRGC<br>
                <strong>Same Building:</strong> All three together<br>
                <strong>Purpose:</strong> IRGC helping AQ explore dirty bomb applications<br>
                <strong>Chinese Role:</strong> Aware and allowing collaboration
            </p>
        </div>
    `;
    irgcChart.appendChild(irgcGrid);
    container.appendChild(irgcChart);

    // State Actor Coordination
    const stateChart = createChartContainer(
        'State Actor Coordination',
        'Russia, China, Iran, North Korea supporting terrorist operations'
    );

    const stateGrid = document.createElement('div');
    stateGrid.className = 'location-grid';
    stateGrid.innerHTML = `
        <div class="location-card critical">
            <div class="location-name">Russia</div>
            <div class="location-region">Direct Logistical Support</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>October 7th:</strong> Approved timing, wanted Ukraine distraction<br>
                <strong>U.S. Homeland:</strong> Supply chain support, moving resources into U.S.<br>
                <strong>Strategy:</strong> Using terrorists as proxies against U.S.<br>
                <strong>Attribution:</strong> Attack will be blamed on ISIS, not Russia
            </p>
        </div>
        <div class="location-card critical">
            <div class="location-name">China</div>
            <div class="location-region">Long-Term Infrastructure</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Funding:</strong> $10B investments in Afghanistan ($3B to AQ)<br>
                <strong>Resources:</strong> Uranium mines co-located with IRGC/AQ<br>
                <strong>Embassy:</strong> First/only official ambassador to Taliban<br>
                <strong>Bagram:</strong> Chinese PMCs now based there
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">North Korea</div>
            <div class="location-region">Anti-U.S. Coordination</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Kandahar:</strong> Regular visitors<br>
                <strong>Meetings:</strong> With Taliban, state actors, terrorists<br>
                <strong>Role:</strong> Part of broader anti-U.S. coordination<br>
                <strong>Details:</strong> Less disclosed but confirmed present
            </p>
        </div>
    `;
    stateChart.appendChild(stateGrid);
    container.appendChild(stateChart);

    // October 7th Command Structure - Case Study
    const oct7Chart = createChartContainer(
        'October 7th Attack - Command Structure Case Study',
        'Demonstrates Islamic Army coordination across all levels'
    );

    const oct7Flow = document.createElement('div');
    oct7Flow.className = 'flow-chart';
    oct7Flow.innerHTML = `
        <div class="info-box warning" style="margin-bottom: 2rem;">
            <div class="info-box-title">Strategic Level Coordination</div>
            <p><strong>Russia:</strong> Approved timing (wanted Ukraine distraction)<br>
            <strong>Planning Started:</strong> March 2022 (after Russia invaded Ukraine)<br>
            <strong>Original Date:</strong> October 7, 2022 (anniversary of Operation Enduring Freedom)<br>
            <strong>Delayed:</strong> To October 7, 2023 (Zawahiri killing caused reassessment)</p>
        </div>
        <div class="flow-row">
            <div class="flow-node red">
                <div class="flow-node-title">Al-Qaeda Planning</div>
                <div class="flow-node-detail">Saif al-Adel: Date selection</div>
            </div>
            <div class="flow-node orange">
                <div class="flow-node-title">Taliban Support</div>
                <div class="flow-node-detail">Hibatullah: Religious fatwa</div>
            </div>
            <div class="flow-node blue">
                <div class="flow-node-title">Iran IRGC</div>
                <div class="flow-node-detail">Kazemi: Operations coordinator</div>
            </div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-row">
            <div class="flow-node green">
                <div class="flow-node-title">Training</div>
                <div class="flow-node-detail">1,500 fighters, 14+ months<br>Uruzgan & Kandahar camps</div>
            </div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-row">
            <div class="flow-node green">
                <div class="flow-node-title">Hamas Execution</div>
                <div class="flow-node-detail">Al-Qassam Brigades<br>October 7, 2023</div>
            </div>
        </div>
    `;
    oct7Chart.appendChild(oct7Flow);
    container.appendChild(oct7Chart);

    // Training Camp Management
    const trainingChart = createChartContainer(
        'Training Camp Infrastructure',
        '30 camps producing Islamic Army fighters with multi-generational planning'
    );

    const trainingData = [
        { label: 'Suicide Bombing Camps', value: 7, valueLabel: '7 specialized camps' },
        { label: 'General Warfare Camps', value: 23, valueLabel: '23 camps' },
        { label: 'ISIS-K Camps (Pakistan)', value: 10, valueLabel: '10+ camps (Turbat largest)' }
    ];

    trainingChart.appendChild(createBarChart(trainingData, 40));

    const trainingBox = document.createElement('div');
    trainingBox.className = 'info-box warning';
    trainingBox.style.marginTop = '2rem';
    trainingBox.innerHTML = `
        <div class="info-box-title">Camp Management & Security</div>
        <p><strong>Overall Manager:</strong> Abdullah bin Laden (Al-Qaeda COO)<br>
        <strong>Security:</strong> GDI 12th Department (sole job: protect Al-Qaeda)<br>
        <strong>Funding:</strong> U.S. $44-87M/week + $5M/month refugee program fraud<br>
        <strong>Recent Training:</strong> Oct 7th (1,500), U.S. Homeland (1,000+), Europe (1,000), Syria (10,000)<br>
        <strong>Multi-Generational:</strong> Families now integrated, children trained from birth<br>
        <strong>Invisible Bomb Vest:</strong> AQAP developed, defeats magnetometers and K-9s (Dec 2023)</p>
    `;
    trainingChart.appendChild(trainingBox);
    container.appendChild(trainingChart);

    // Regional Al-Qaeda Branches
    const regionalChart = createChartContainer(
        'Al-Qaeda Regional Branch Leadership',
        'AQAP, AQIM, Libya operations integrated into Islamic Army'
    );

    const regionalGrid = document.createElement('div');
    regionalGrid.className = 'location-grid';
    regionalGrid.innerHTML = `
        <div class="location-card high">
            <div class="location-name">AQAP - Yemen</div>
            <div class="location-region">Al-Qaeda in Arabian Peninsula</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Innovation:</strong> Invisible bomb vest (defeats detection)<br>
                <strong>October 7th:</strong> Provided funding and religious fatwa<br>
                <strong>Role:</strong> Specialized expertise (bomb-making, religious justification)
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Abdul Hakim Belhaj - Libya</div>
            <div class="location-region">"Islamic Reform Movement"</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Cover:</strong> Political organization (actually AQ Libya head)<br>
                <strong>Deal:</strong> Won't attack inside Libya, operates as business<br>
                <strong>Funds:</strong> Al-Qaeda and ISIS operations worldwide<br>
                <strong>U.S. Status:</strong> May not be designated anymore
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Muhammad al-Gharabi</div>
            <div class="location-region">Benghazi Commander</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Background:</strong> Fought with AQ in Mujahedin Afghanistan<br>
                <strong>2012:</strong> Led Benghazi attacks (U.S. didn't know he was AQ)<br>
                <strong>Current:</strong> Top 10 in Benghazi investigation, travels Libya-Turkey
            </p>
        </div>
        <div class="location-card critical">
            <div class="location-name">Abdul Azim Ali Musa Ben Ali</div>
            <div class="location-region">Document Forger</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Role:</strong> AQ's SOLE document forger for external operations<br>
                <strong>Historical:</strong> Made docs for Benghazi, Manchester, Bataclan<br>
                <strong>Current:</strong> Works for Sirajuddin Haqqani in Ministry of Interior<br>
                <strong>Knowledge:</strong> Knows EVERY terrorist AQ deploys from Afghanistan
            </p>
        </div>
    `;
    regionalChart.appendChild(regionalGrid);
    container.appendChild(regionalChart);

    // GDI - Taliban Intelligence Structure
    const gdiChart = createChartContainer(
        'GDI - Taliban Intelligence (General Directorate of Intelligence)',
        'Commander holds 3 Americans hostage, protects Al-Qaeda camps'
    );

    const gdiBox = createInfoBox(
        'Abdul Haq Wasiq - GDI Commander',
        `<strong>Background:</strong> Released in Bowe Bergdahl exchange<br>
        <strong>Receives:</strong> U.S. weekly cash deliveries<br>
        <strong>American Hostages:</strong> Holds THREE Americans<br>
        • Ryan Corbett (publicly known) - severe health consequences<br>
        • Second American (name not public) - same cell as Corbett<br>
        • Third American (name not public) - held separately<br>
        <strong>State Dept:</strong> Told families "don't say publicly, we're negotiating"<br>
        <strong>Reality:</strong> U.S. paying organization holding Americans in basement`,
        'danger'
    );
    gdiChart.appendChild(gdiBox);

    const gdiStructure = document.createElement('div');
    gdiStructure.className = 'location-grid';
    gdiStructure.style.marginTop = '2rem';
    gdiStructure.innerHTML = `
        <div class="location-card critical">
            <div class="location-name">12th Department</div>
            <div class="location-region">"Most Important" Unit</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Sole Job:</strong> Protect Al-Qaeda in Afghanistan<br>
                <strong>Operations:</strong> Protect 30 camps, vet recruits, move trainees, move leadership<br>
                <strong>Protection:</strong> Harbor AQ leadership in their own houses<br>
                <strong>Control:</strong> All border movements for Al-Qaeda
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Immigrants Department</div>
            <div class="location-region">TTP Support Unit</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Sole Function:</strong> Fund and support Pakistani Taliban (TTP)<br>
                <strong>2023 Operations:</strong> 800 attacks in Pakistan<br>
                <strong>Strategy:</strong> Rotating Afghan Taliban units into TTP<br>
                <strong>Part of:</strong> Fat War plan
            </p>
        </div>
    `;
    gdiChart.appendChild(gdiStructure);
    container.appendChild(gdiChart);

    // Hamas and Hezbollah Integration
    const hamasChart = createChartContainer(
        'Hamas and Hezbollah Integration',
        'Sunni-Shia cooperation for operational purposes'
    );

    const hamasBox = document.createElement('div');
    hamasBox.className = 'location-grid';
    hamasBox.innerHTML = `
        <div class="location-card high">
            <div class="location-name">Hamas - Al-Qassam Brigades</div>
            <div class="location-region">October 7th Execution Force</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Training:</strong> 1,400-1,500 attackers trained in Afghanistan<br>
                <strong>Duration:</strong> 14+ months (Aug 2022 - Oct 2023)<br>
                <strong>Camps:</strong> Uruzgan and Kandahar provinces<br>
                <strong>Named After:</strong> Izz ad-Din al-Qassam (fought in Libya 1911)
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Hezbollah Military Wing</div>
            <div class="location-region">Lebanon Operations</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                <strong>Agreement:</strong> Joint AQ/Hezbollah plot against U.S. interests<br>
                <strong>Attribution:</strong> Only Hezbollah will claim (AQ hidden)<br>
                <strong>Model:</strong> "Hidden Hand" operational approach<br>
                <strong>Coordination:</strong> Through IRGC (Iran)
            </p>
        </div>
    `;
    hamasChart.appendChild(hamasBox);
    container.appendChild(hamasChart);

    // Key Strategic Shifts
    const shiftsChart = createChartContainer(
        'Key Strategic Shifts - Evolution to Islamic Army',
        'How the model changed from traditional Al-Qaeda'
    );

    const shiftsTable = document.createElement('table');
    shiftsTable.className = 'data-table';
    shiftsTable.innerHTML = `
        <thead>
            <tr>
                <th>Traditional Al-Qaeda Model</th>
                <th>Islamic Army Model</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sectarian division (Sunni only)</td>
                <td>Cross-sectarian (Sunni AND Shia cooperation)</td>
            </tr>
            <tr>
                <td>Public claims of responsibility</td>
                <td>"Hidden Hand" - no claims or false attribution</td>
            </tr>
            <tr>
                <td>Independent regional branches</td>
                <td>Unified command with coordinated branches</td>
            </tr>
            <tr>
                <td>Cell-based training and deployment</td>
                <td>Individual training, separate deployment, later coordination</td>
            </tr>
            <tr>
                <td>No state actor integration</td>
                <td>Multiple state actors (Iran, Russia, China, North Korea)</td>
            </tr>
            <tr>
                <td>Single organization identity</td>
                <td>Flexible identity (AQ, ISIS, Hamas, Hezbollah, etc.)</td>
            </tr>
            <tr>
                <td>Visible leadership</td>
                <td>Hidden leadership (Hamza - no public presence)</td>
            </tr>
            <tr>
                <td>Single-generation focus</td>
                <td>Multi-generational (families integrated, children trained)</td>
            </tr>
            <tr>
                <td>Territory not priority</td>
                <td>Territory managed (ISIS controls, AQ influences politically)</td>
            </tr>
        </tbody>
    `;
    shiftsChart.appendChild(shiftsTable);
    container.appendChild(shiftsChart);

    // Final Summary
    const summaryBox = createInfoBox(
        'Osama bin Laden\'s Vision - Fulfilled by Hamza',
        `<strong>Original Vision:</strong> Unity across Muslim terrorist groups, push U.S. out of Middle East,
        restore Islamic Caliphate, economic damage to West, homeland attacks<br><br>
        <strong>Current Status (2024):</strong><br>
        ✓ Islamic Army formed (120,000+ trained)<br>
        ✓ Sunni-Shia cooperation operational<br>
        ✓ State actor support secured (Iran, Russia, China, North Korea)<br>
        ✓ Multi-generational planning implemented<br>
        ✓ Wave-based operations executing (Oct 7th, embassies, Europe, U.S. planned)<br>
        ✓ Safe haven secured (Afghanistan)<br>
        ✓ Training infrastructure (30+ camps)<br>
        ✓ Funding secured (U.S. $44-87M/week + Chinese $3B + Iranian/Russian support)<br><br>
        <strong>Key Difference:</strong> Osama was patient (willing to take 1,000 years).
        Hamza wants everything in his lifetime with fast approvals. Vision being realized faster than planned.`,
        'danger'
    );
    container.appendChild(summaryBox);
};
