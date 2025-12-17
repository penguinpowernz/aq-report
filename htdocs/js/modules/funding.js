// Funding Visualization Module

window.renderFunding = function(container) {
    container.innerHTML = '';

    // Header
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <h2>Money Flows to Terrorist Organizations</h2>
        <p class="section-subtitle">Financial Intelligence - U.S. and State Actor Funding of Taliban & Al-Qaeda</p>
    `;
    container.appendChild(header);

    // Critical Alert - The Central Irony
    const alert = createInfoBox(
        '⚠️ Critical Finding: U.S. Funding Its Own Attackers',
        linkifyEntities(`<strong>$2.3-4.7 billion annually</strong> from U.S. to Taliban/Al-Qaeda<br>
        <strong>Seven of eight</strong> weekly delivery stops to designated terrorists<br>
        <strong>1,000+ terrorists</strong> trained for U.S. homeland attack with American money<br>
        <strong>382,000 petition signatures</strong> to Congress - ZERO ACTION TAKEN<br>
        <strong>The Irony:</strong> U.S. taxpayers funding the organization training their attackers`),
        'danger'
    );
    container.appendChild(alert);

    // Total Annual U.S. Funding Stats Cards
    const statsGrid = document.createElement('div');
    statsGrid.className = 'findings-grid';
    statsGrid.innerHTML = linkifyEntities(`
        <div class="finding-card">
            <h4>Weekly Cash Deliveries</h4>
            <p style="font-size: 2rem; font-weight: bold; color: var(--danger);">$44-87M</p>
            <p>$2.3-4.7 billion annually to Afghanistan International Bank, 70% diverted to Taliban military operations</p>
        </div>
        <div class="finding-card">
            <h4>Total U.S. Funding (Annual)</h4>
            <p style="font-size: 2rem; font-weight: bold; color: var(--danger);">$2.8B+</p>
            <p>Known direct funding to Taliban/Al-Qaeda from U.S. government sources (excludes classified amounts)</p>
        </div>
        <div class="finding-card">
            <h4>Swiss Bank Account</h4>
            <p style="font-size: 2rem; font-weight: bold; color: var(--danger);">$3.5B</p>
            <p>Afghan government reserves given to Taliban, earning $180M+ in interest</p>
        </div>
        <div class="finding-card">
            <h4>Chinese Investment</h4>
            <p style="font-size: 2rem; font-weight: bold; color: var(--danger);">$10B</p>
            <p>$3 billion directly allocated to Al-Qaeda for operations and affiliates</p>
        </div>
    `);
    container.appendChild(statsGrid);

    // Graphviz diagram of funding flow
    const fundingDiagram = document.createElement('div');
    fundingDiagram.className = 'funding-diagram';
    fundingDiagram.innerHTML = "<div class='diagram-container'><img src='images/diagrams/funding-flow.png' alt='Funding Diagram'></div>";
    container.appendChild(fundingDiagram);


    // U.S. Weekly Cash Deliveries Breakdown
    const weeklyChart = createChartContainer(
        'U.S. Weekly Cash Deliveries to Afghanistan',
        'Eight delivery stops - seven to designated terrorists (illegal under U.S. law)'
    );

    const weeklyData = [
        { label: 'Low Estimate', value: 40, valueLabel: '$40M/week ($2.1B/year)' },
        { label: 'Mid Estimate', value: 87, valueLabel: '$87M/week ($4.5B/year)' },
        { label: 'High Estimate', value: 105, valueLabel: '$105M/week ($5.5B/year)' }
    ];

    weeklyChart.appendChild(createBarChart(weeklyData, 110));

    const weeklyNote = document.createElement('p');
    weeklyNote.style.marginTop = '1rem';
    weeklyNote.style.color = 'var(--text-secondary)';
    weeklyNote.innerHTML = linkifyEntities('<strong>Source:</strong> U.S. State Department via NGOs. Amount varies by week: $40-105M. <strong>January 2025:</strong> Third week delivered $105M. 70% diverted to Taliban-only causes through systematic money laundering.');
    weeklyChart.appendChild(weeklyNote);
    container.appendChild(weeklyChart);

    // 10-Step Money Laundering Process
    const launderingSection = createChartContainer(
        'Complete 10-Step Money Laundering Process',
        'How U.S. dollars are systematically laundered through Taliban-controlled financial system'
    );

    const processSteps = [
        {
            step: 1,
            title: 'Physical Cash Delivery',
            description: 'U.S. sends $40-105M weekly by charter plane to Afghanistan. Physical dollars, not wire transfers.',
            taliban_cut: false
        },
        {
            step: 2,
            title: 'Afghanistan International Bank (AIB)',
            description: 'Cash delivered to AIB which does NOT have authorization to convert dollars to Afghanis.',
            taliban_cut: false
        },
        {
            step: 3,
            title: 'Central Bank of Afghanistan',
            description: 'AIB transfers money to Taliban-controlled Central Bank managed by Haji Muhammad Idris - a sanctioned terrorist who financed bomb attacks killing Americans.',
            taliban_cut: false
        },
        {
            step: 4,
            title: 'Currency Exchange Bidding',
            description: 'Central Bank invites money exchangers to bid. Taliban/Haqqani-affiliated exchangers always win.',
            taliban_cut: true,
            cut_description: 'First Taliban Cut: Exchange rate manipulation'
        },
        {
            step: 5,
            title: 'First Conversion (Dollars → Afghanis)',
            description: 'Taliban-affiliated exchangers convert dollars to Afghanis, taking cut on exchange rate.',
            taliban_cut: true,
            cut_description: 'Taliban Profit: Rate manipulation and conversion fees'
        },
        {
            step: 6,
            title: 'NGO Account Deposits',
            description: 'Afghanis deposited into NGO accounts. Every NGO must have Taliban representative on board approving all spending.',
            taliban_cut: false
        },
        {
            step: 7,
            title: 'Taliban-Approved Vendor Purchases',
            description: 'NGOs must buy from Taliban-approved vendors only. Example: Habib Group (owned by brother of Taliban Foreign Minister).',
            taliban_cut: true,
            cut_description: 'Second Taliban Cut: Vendor fees, transportation charges, service costs'
        },
        {
            step: 8,
            title: 'Taliban Taxes and Fees',
            description: 'Every transaction subject to: customs fees, transportation fees, security fees, "taxes", storage fees, handling fees.',
            taliban_cut: true,
            cut_description: 'Third Taliban Cut: Multiple fees at every transaction point'
        },
        {
            step: 9,
            title: 'Aid Distribution (Taliban Propaganda)',
            description: 'NGOs distribute aid alongside Taliban commanders. Recipients told: "This is from Mullah Hibatullah, not America." USAID logos visible but Taliban takes credit.',
            taliban_cut: true,
            cut_description: 'Fourth Taliban Cut: Political capital, propaganda value, population control'
        },
        {
            step: 10,
            title: 'Foreign Purchases (Second Conversion)',
            description: 'For foreign goods, Afghanis converted BACK to dollars through Central Bank. Taliban exchangers win bid AGAIN. Money moved through Azizi Bank to Dubai ("not even a bank, it\'s a Ponzi scheme").',
            taliban_cut: true,
            cut_description: 'Fifth Taliban Cut: Second exchange rate manipulation plus foreign intermediary fees'
        }
    ];

    const processContainer = document.createElement('div');
    processContainer.style.display = 'flex';
    processContainer.style.flexDirection = 'column';
    processContainer.style.gap = '1rem';

    processSteps.forEach(step => {
        const stepCard = document.createElement('div');
        stepCard.className = 'location-card low';
        if (step.taliban_cut) {
            stepCard.classList.add('critical');
            stepCard.classList.remove('low');
        }
        stepCard.style.backgroundColor = "#505050ff"

        const stepBadgeColor = step.taliban_cut ? 'var(--danger)' : 'var(--accent-blue)';

        const headerDiv = document.createElement('div');
        headerDiv.style.display = 'flex';
        headerDiv.style.alignItems = 'center';
        headerDiv.style.gap = '1rem';
        headerDiv.style.marginBottom = '0.75rem';

        const badge = document.createElement('div');
        badge.style.background = stepBadgeColor;
        badge.style.color = 'white';
        badge.style.fontWeight = 'bold';
        badge.style.padding = '0.5rem 0.75rem';
        badge.style.borderRadius = '4px';
        badge.style.minWidth = '50px';
        badge.style.textAlign = 'center';
        badge.textContent = `STEP ${step.step}`;

        const titleDiv = document.createElement('div');
        titleDiv.className = 'location-name';
        titleDiv.style.fontSize = '1rem';
        titleDiv.style.flex = '1';
        titleDiv.textContent = step.title;

        headerDiv.appendChild(badge);
        headerDiv.appendChild(titleDiv);
        stepCard.appendChild(headerDiv);

        const descP = document.createElement('p');
        descP.style.color = 'var(--text-secondary)';
        descP.style.fontSize = '0.9rem';
        descP.style.marginBottom = '0.5rem';
        descP.innerHTML = linkifyEntities(step.description);
        stepCard.appendChild(descP);

        if (step.taliban_cut) {
            const cutBox = document.createElement('div');
            cutBox.style.background = 'rgba(239, 68, 68, 0.1)';
            cutBox.style.border = '1px solid var(--danger)';
            cutBox.style.borderRadius = '4px';
            cutBox.style.padding = '0.75rem';
            cutBox.style.marginTop = '0.75rem';

            const cutText = document.createElement('strong');
            cutText.textContent = `💰 ${step.cut_description}`;
            cutBox.appendChild(cutText);

            stepCard.appendChild(cutBox);
        }

        processContainer.appendChild(stepCard);
    });

    launderingSection.appendChild(processContainer);

    const launderingNote = document.createElement('div');
    launderingNote.className = 'info-box danger';
    launderingNote.innerHTML = linkifyEntities(`
        <div class="info-box-title">Result: At Least 70% to Taliban</div>
        <p style="margin-bottom: 1rem;"><strong>Total Taliban Cuts:</strong></p>
        <ol style="margin-left: 1.5rem; color: var(--text-secondary);">
            <li style="margin: 0.5rem 0;">First currency exchange (dollars → Afghanis) - Rate manipulation</li>
            <li style="margin: 0.5rem 0;">Vendor fees (Habib Group and others) - Service charges</li>
            <li style="margin: 0.5rem 0;">Taxes, customs, fees (at every transaction) - Multiple charges</li>
            <li style="margin: 0.5rem 0;">Second currency exchange (Afghanis → dollars for foreign purchases) - Rate manipulation again</li>
            <li style="margin: 0.5rem 0;">Foreign intermediary fees (Dubai, Azizi Bank) - Additional cuts</li>
        </ol>
        <p style="margin-top: 1rem;"><strong>Embassy Plots Funded:</strong> Using these exact U.S. dollars:</p>
        <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
            <li style="margin: 0.5rem 0;">U.S. Embassy Bamako, Mali under threat</li>
            <li style="margin: 0.5rem 0;">U.S. Embassy Mogadishu, Somalia under threat</li>
        </ul>
        <p style="margin-top: 1rem; font-weight: bold; color: var(--danger);">
            "It's YOUR money, American tax dollars, being used to fund plots against YOUR embassies" — Legend
        </p>
    `);
    launderingSection.appendChild(launderingNote);

    container.appendChild(launderingSection);

    // The Eight Delivery Stops
    const stopsSection = createChartContainer(
        'The Eight Weekly Delivery Stops',
        'U.S. cash delivered directly to terrorist leaders and Al-Qaeda command'
    );

    const stops = [
        {
            name: 'Stop 1: Prime Minister Mohammad Hassan Akhund',
            status: 'Designated Terrorist',
            description: 'Taliban PM, co-founder, cancer patient with heavy investments in Pakistan',
            amount: 'Unknown'
        },
        {
            name: 'Stop 2: Deputy PM Mullah Baradar',
            status: 'Designated Terrorist',
            description: 'Taliban co-founder, made peace deal, sent Al-Qaeda to attack U.S. in Iraq/Syria, China liaison since 2009',
            amount: 'Unknown'
        },
        {
            name: 'Stop 3: GDI Head Abdul Haq Wasiq',
            status: 'Designated Terrorist',
            description: 'Taliban intelligence chief, holds 3 Americans hostage, runs 12th Dept protecting all 30 Al-Qaeda camps',
            amount: 'Unknown'
        },
        {
            name: 'Stop 4: Interior Ministry (Sirajuddin Haqqani)',
            status: 'Designated Terrorist',
            description: 'Sent 1,500+ suicide bombers at U.S. forces, controls passport system and biometrics',
            amount: 'Est. $5-6M/month'
        },
        {
            name: 'Stop 5: Sirajuddin Haqqani\'s House',
            status: 'Designated Terrorist',
            description: 'Direct personal payment to house of man who sent 1,000+ suicide bombers to kill Americans',
            amount: 'Est. $10-12M/month'
        },
        {
            name: 'Stop 6: Supreme Leader Hibatullah Akhundzada',
            status: 'Designated Terrorist',
            description: 'Taliban Supreme Leader, issued fatwa authorizing Oct 7th, Fat War architect',
            amount: '$3M/month ($36M/year)'
        },
        {
            name: 'Stop 7: Saif al-Adel (Al-Qaeda Military)',
            status: 'Designated Terrorist',
            description: 'Runs Al-Qaeda military commission, de facto head of external operations planning U.S. attacks',
            amount: 'Unknown'
        },
        {
            name: 'Stop 8: The Bin Laden Brothers',
            status: 'Hamza & Saad: Designated; Abdullah: NOT DESIGNATED',
            description: 'Hamza (overall leader married to Mullah Omar\'s daughter), Saad (deputy), Abdullah (runs 30 training camps)',
            amount: 'Unknown'
        }
    ];

    const stopsGrid = document.createElement('div');
    stopsGrid.className = 'location-grid';
    stops.forEach(stop => {
        const card = document.createElement('div');
        card.className = 'location-card critical';
        card.innerHTML = linkifyEntities(`
            <div class="location-name" style="font-size: 0.95rem;">${stop.name}</div>
            <div class="location-region">${stop.status}</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary); font-size: 0.9rem;">
                ${stop.description}
            </p>
            ${stop.amount !== 'Unknown' ? `<p style="margin-top: 0.5rem; font-weight: bold; color: var(--danger);">Amount: ${stop.amount}</p>` : ''}
        `);
        stopsGrid.appendChild(card);
    });
    stopsSection.appendChild(stopsGrid);

    const stopsNote = document.createElement('div');
    stopsNote.className = 'info-box warning';
    stopsNote.innerHTML = linkifyEntities(`
        <div class="info-box-title">Legal Status</div>
        <p><strong>7 out of 8 stops:</strong> Designated terrorists - every delivery violates U.S. and international law</p>
        <p><strong>1 out of 8 stops:</strong> Abdullah Bin Laden NOT designated (runs all training camps, should be designated)</p>
        <p style="margin-top: 0.5rem;"><strong>Sarah Adams:</strong> "Every single delivery except one was a building, every single one of those terrorists are sanctioned, every delivery is against U.S. law"</p>
    `);
    stopsSection.appendChild(stopsNote);
    container.appendChild(stopsSection);

    // Additional U.S. Funding Streams
    const additionalChart = createChartContainer(
        'Additional U.S. Funding Streams',
        'Beyond the weekly cash deliveries'
    );

    const additionalData = [
        { label: 'Taliban Political Office Qatar (monthly)', value: 10, valueLabel: '$10M ($120M/year since 2013)' },
        { label: 'Supreme Leader Office (monthly)', value: 3, valueLabel: '$3M ($36M/year, 75% of budget)' },
        { label: 'Refugee Program Fraud (monthly)', value: 5, valueLabel: '$5M ($60M/year to Al-Qaeda camps)' },
    ];

    additionalChart.appendChild(createBarChart(additionalData, 12));

    const refugeeNote = document.createElement('div');
    refugeeNote.className = 'info-box danger';
    refugeeNote.style.marginTop = '1rem';
    refugeeNote.innerHTML = linkifyEntities(`
        <div class="info-box-title">Refugee Program Fraud</div>
        <p>Official program: Resettling Afghan refugees returning from Pakistan</p>
        <p><strong>Run by:</strong> Khalil Haqqani (uncle of Sirajuddin)</p>
        <p><strong>Actual use:</strong> $5M/month goes directly to Al-Qaeda training camps in Nangarhar</p>
        <p><strong>What's at camps:</strong> Libyan fighters, foreign nationals, Al-Qaeda trainees - NOT refugees</p>
    `);
    additionalChart.appendChild(refugeeNote);
    container.appendChild(additionalChart);

    // Money Flow Diagram - U.S. to Terrorists to Attackers
    const flowSection = createChartContainer(
        'Money Flow: U.S. Taxpayers → Taliban → Al-Qaeda → Attackers',
        'Following the money from source to destination'
    );

    const flowDiagram = document.createElement('div');
    flowDiagram.style.background = 'var(--surface)';
    flowDiagram.style.padding = '2rem';
    flowDiagram.style.borderRadius = '8px';
    flowDiagram.style.marginTop = '1rem';
    flowDiagram.innerHTML = linkifyEntities(`
        <div style="display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; justify-content: center;">
            <div style="text-align: center; padding: 1.5rem; background: var(--background); border-radius: 8px; flex: 1; min-width: 200px;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🇺🇸</div>
                <div style="font-weight: bold;">U.S. Taxpayers</div>
                <div style="color: var(--text-secondary); margin-top: 0.5rem;">$2.8B+ annually</div>
            </div>
            <div style="font-size: 2rem; color: var(--danger);">→</div>
            <div style="text-align: center; padding: 1.5rem; background: var(--background); border-radius: 8px; flex: 1; min-width: 200px;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏴</div>
                <div style="font-weight: bold;">Taliban Leadership</div>
                <div style="color: var(--text-secondary); margin-top: 0.5rem;">8 delivery stops (7 terrorists)</div>
            </div>
            <div style="font-size: 2rem; color: var(--danger);">→</div>
            <div style="text-align: center; padding: 1.5rem; background: var(--background); border-radius: 8px; flex: 1; min-width: 200px;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚠️</div>
                <div style="font-weight: bold;">Al-Qaeda Camps</div>
                <div style="color: var(--text-secondary); margin-top: 0.5rem;">30 camps, 120,000 trained</div>
            </div>
            <div style="font-size: 2rem; color: var(--danger);">→</div>
            <div style="text-align: center; padding: 1.5rem; background: var(--danger); color: white; border-radius: 8px; flex: 1; min-width: 200px;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">💀</div>
                <div style="font-weight: bold;">1,000+ Attackers</div>
                <div style="opacity: 0.9; margin-top: 0.5rem;">Trained for U.S. homeland attack</div>
            </div>
        </div>
        <div style="margin-top: 2rem; padding: 1rem; background: var(--warning); color: var(--background); border-radius: 4px; text-align: center; font-weight: bold;">
            THE IRONY: Americans funding the training of their own attackers
        </div>
    `);
    flowSection.appendChild(flowDiagram);
    container.appendChild(flowSection);

    // Money Siphoning - The 70% Diversion
    const siphonChart = createChartContainer(
        'Money Siphoning: The 70% Diversion',
        'How humanitarian aid becomes terrorist funding'
    );

    const diversionData = [
        { label: 'Humanitarian Aid (Official)', value: 30, valueLabel: '30%' },
        { label: 'Taliban Military & Operations', value: 70, valueLabel: '70% ($1.6-3.2B/year)' }
    ];

    siphonChart.appendChild(createBarChart(diversionData, 100));

    const siphonMethods = document.createElement('div');
    siphonMethods.className = 'findings-grid';
    siphonMethods.style.marginTop = '1.5rem';
    siphonMethods.innerHTML = linkifyEntities(`
        <div class="finding-card">
            <h4>Method 1: Board Membership</h4>
            <p>Every NGO must have Taliban representative on board. Taliban vote controls all spending and directs funds to Taliban priorities.</p>
        </div>
        <div class="finding-card">
            <h4>Method 2: NGO Takeover</h4>
            <p>Taliban "gutted" established NGOs "completely" and "put all Taliban in them." State Department maintains fiction of legitimacy.</p>
        </div>
        <div class="finding-card">
            <h4>Method 3: Bank Control</h4>
            <p>Afghanistan International Bank receives weekly delivery, makes "huge money" on exchange, facilitates Taliban diversions.</p>
        </div>
        <div class="finding-card">
            <h4>Result: Perfect Money Laundering</h4>
            <p>Money flows to same NGO names, actually to Taliban. Humanitarian cover for terrorist funding. State Department pretends not to notice.</p>
        </div>
    `);
    siphonChart.appendChild(siphonMethods);
    container.appendChild(siphonChart);

    // Other State Actor Funding
    const stateActorChart = createChartContainer(
        'Other State Actor Funding',
        'Multi-state coordination supporting terrorism'
    );

    const stateActorGrid = document.createElement('div');
    stateActorGrid.className = 'location-grid';
    stateActorGrid.innerHTML = linkifyEntities(`
        <div class="location-card critical">
            <div class="location-name">China: $10 Billion Investment</div>
            <div class="location-region">$3 Billion to Al-Qaeda</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                $3 of every $10 allocated to Al-Qaeda and affiliates (TTP, IMU). Chinese PMCs at Bagram.
                Uranium mines co-located with IRGC and Al-Qaeda for dirty bomb research. First and only
                country with official ambassador to Taliban.
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Iran: Intelligence & Stipends</div>
            <div class="location-region">Ongoing Support</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                Stipends to Hibatullah and Taliban leadership. Harbored Al-Qaeda after 9/11. Intelligence
                base inside Al-Qaeda camp in Kandahar. Co-planned October 7th attacks. 100% confirmed
                intelligence sharing.
            </p>
        </div>
        <div class="location-card high">
            <div class="location-name">Russia: Supply Chain Support</div>
            <div class="location-region">Operational Support</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                Approved October 7th timing (March 2022 after Ukraine invasion). Pipeline bringing
                supplies into U.S. for homeland attack. Using terrorists as proxies against U.S.
                support for Ukraine.
            </p>
        </div>
        <div class="location-card medium">
            <div class="location-name">India: $10 Million</div>
            <div class="location-region">Bagram Base Funding</div>
            <p style="margin-top: 0.75rem; color: var(--text-secondary);">
                Paid Mullah Yaqub $10M for Hibatullah's personal security at Bagram. Using Taliban
                networks to assassinate Kashmir militants in Pakistan. Creating new Kashmir landscape
                for future war.
            </p>
        </div>
    `);
    stateActorChart.appendChild(stateActorGrid);
    container.appendChild(stateActorChart);

    // Congressional Inaction
    const congressChart = createChartContainer(
        'Congressional Inaction: 382,000 Signatures Ignored',
        'Democratic mandate completely ignored by elected representatives'
    );

    const congressInfo = document.createElement('div');
    congressInfo.className = 'info-box danger';
    congressInfo.innerHTML = linkifyEntities(`
        <div class="info-box-title">Three Legislative Failures</div>
        <ul style="margin-left: 2rem; margin-top: 1rem; color: var(--text-secondary);">
            <li><strong>382,000 Petition Signatures:</strong> Stop Taliban funding - ZERO ACTION TAKEN by Congress</li>
            <li><strong>House Bill (Rep. Burchett):</strong> Stop Taliban funding - sitting in Senate with no sponsor, no progress</li>
            <li><strong>Terrorist Designation Bill (Rep. Nancy Mace):</strong> Designate Taliban as terrorists - KILLED by Republican opposition from her own party</li>
        </ul>
        <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border); font-weight: bold;">
            Result: Cannot even get Congress to call Taliban terrorists, despite them killing U.S. soldiers,
            harboring Al-Qaeda, training 1,000+ for U.S. attacks, and holding 3 Americans hostage.
        </p>
    `);
    congressChart.appendChild(congressInfo);

    const congressTheory = document.createElement('div');
    congressTheory.className = 'findings-grid';
    congressTheory.style.marginTop = '1.5rem';
    congressTheory.innerHTML = `
        <div class="finding-card">
            <h4>Theory 1: Terror Sympathizing</h4>
            <p>Some members genuinely support Taliban or believe they can be used as proxy against Russia/China</p>
        </div>
        <div class="finding-card">
            <h4>Theory 2: Financial Incentive</h4>
            <p>"People make money off of it" - Insider trading, defense contracts, lobbying. Money more important than security.</p>
        </div>
        <div class="finding-card">
            <h4>Theory 3: Bipartisan Failure</h4>
            <p>Both parties benefit from status quo. Democrats started funding, Republicans block designation. Both avoid accountability.</p>
        </div>
        <div class="finding-card">
            <h4>Theory 4: Incompetence</h4>
            <p>Don't understand what they're doing. Believe fake Taliban internal conflicts. Waste resources on non-existent political crisis.</p>
        </div>
    `;
    congressChart.appendChild(congressTheory);
    container.appendChild(congressChart);

    // Financial Scale Comparisons
    const scaleChart = createChartContainer(
        'Financial Scale: Putting The Numbers In Perspective',
        'Comparison to other U.S. government spending'
    );

    const scaleData = [
        { label: 'U.S. Homeland Security Budget (2024)', value: 60, valueLabel: '$60B total' },
        { label: 'Taliban Funding (Annual)', value: 4.7, valueLabel: '$4.7B (8% of DHS budget)' }
    ];

    scaleChart.appendChild(createBarChart(scaleData, 60));

    const scaleComparisons = document.createElement('div');
    scaleComparisons.style.marginTop = '1.5rem';
    scaleComparisons.className = 'info-box warning';
    scaleComparisons.innerHTML = `
        <div class="info-box-title">Funding Context</div>
        <ul style="margin-left: 2rem; margin-top: 1rem; color: var(--text-secondary);">
            <li><strong>State Department Budget:</strong> Taliban funding = 4-8% of entire State Department budget</li>
            <li><strong>Defense Budget:</strong> 0.3-0.6% of $850B budget funding organization that killed U.S. soldiers</li>
            <li><strong>Congressional Salaries:</strong> Taliban funding = 14,368-26,896 Congressional salaries annually</li>
            <li><strong>Cost Per Terrorist Trained:</strong> $60M/year ÷ 12,000 trainees = $5,000 per terrorist</li>
            <li><strong>Cost to Stop Funding:</strong> $0 - just vote to stop it</li>
        </ul>
    `;
    scaleChart.appendChild(scaleComparisons);
    container.appendChild(scaleChart);

    // Martyr Family Payments - The Ultimate Insult
    const martyrChart = createChartContainer(
        'Martyr Family Payments: The Ultimate Insult',
        'U.S. paying Taliban families, ignoring American Gold Star families'
    );

    const martyrInfo = document.createElement('div');
    martyrInfo.className = 'info-box danger';
    martyrInfo.innerHTML = `
        <div class="info-box-title">The Absurd Policy</div>
        <p style="margin-top: 1rem;"><strong>Policy:</strong> U.S. government paying welfare to Taliban martyr families</p>
        <p style="margin-top: 0.5rem;"><strong>Who Gets Paid:</strong> Every Taliban member who died fighting U.S. forces - family receives ongoing monthly stipend</p>
        <p style="margin-top: 0.5rem;"><strong>Justification:</strong> "It'll stop them from joining ISIS"</p>
        <p style="margin-top: 0.5rem;"><strong>Sarah Adams:</strong> "The Taliban guy is already dead"</p>
        <hr style="margin: 1rem 0; border-color: var(--border);">
        <p style="font-weight: bold; color: var(--danger);"><strong>American Gold Star Families:</strong> "Aren't getting squat"</p>
        <p style="margin-top: 0.5rem;">Enemy families treated better than American families who lost loved ones to Taliban attacks</p>
    `;
    martyrChart.appendChild(martyrInfo);

    const martyrLogic = document.createElement('div');
    martyrLogic.style.marginTop = '1.5rem';
    martyrLogic.style.background = 'var(--surface)';
    martyrLogic.style.padding = '1.5rem';
    martyrLogic.style.borderRadius = '8px';
    martyrLogic.innerHTML = `
        <h4 style="margin-bottom: 1rem;">The Absurd Logic:</h4>
        <ol style="margin-left: 2rem; color: var(--text-secondary); line-height: 1.8;">
            <li>Taliban fighter kills Americans</li>
            <li>Americans kill Taliban fighter</li>
            <li>U.S. pays Taliban fighter's family monthly stipend</li>
            <li>U.S. doesn't adequately support American Gold Star families</li>
            <li>Justification: Prevent family from joining ISIS</li>
            <li>Reality: Fighter already dead, can't join ISIS</li>
        </ol>
        <p style="margin-top: 1rem; font-weight: bold; color: var(--warning);">
            What it actually funds: Taliban recruitment ("we take care of families"), incentive for suicide bombers,
            more attacks on Americans
        </p>
    `;
    martyrChart.appendChild(martyrLogic);
    container.appendChild(martyrChart);

    // The Coming Attack Attribution
    const attributionChart = createChartContainer(
        'Al-Qaeda\'s Inside Joke: America Funding Its Own Attack',
        'Propaganda strategy to divide Americans and destroy trust'
    );

    const attributionInfo = document.createElement('div');
    attributionInfo.className = 'info-box danger';
    attributionInfo.innerHTML = `
        <div class="info-box-title">The Propaganda Plan</div>
        <p style="margin-top: 1rem;"><strong>Current Joke:</strong> Al-Qaeda makes jokes about U.S. funding going to camps training homeland attackers</p>
        <p style="margin-top: 0.5rem;"><strong>After Attack:</strong> Will portray as "inside job" by U.S. government to make Americans distrust their government</p>
        <p style="margin-top: 0.5rem;"><strong>Strategy:</strong> Incorporate conspiracy theory elements, make conspiracy theorists view Al-Qaeda as "revolutionaries and rebels"</p>
        <p style="margin-top: 0.5rem; font-weight: bold; color: var(--danger);">Goal: Divide Americans against each other, destroy trust in government, use America's own money against itself</p>
    `;
    attributionChart.appendChild(attributionInfo);

    const attributionFlow = document.createElement('div');
    attributionFlow.style.marginTop = '1.5rem';
    attributionFlow.className = 'findings-grid';
    attributionFlow.innerHTML = `
        <div class="finding-card">
            <h4>Setup Phase (Current)</h4>
            <p>Taliban feeding information to U.S. for years. Small pieces on individual ISIS-K terrorists entering databases. Creating paper trail.</p>
        </div>
        <div class="finding-card">
            <h4>Attack Phase</h4>
            <p>1,000+ attackers execute multi-city Mumbai/October 7th style attack. Thousands of American deaths.</p>
        </div>
        <div class="finding-card">
            <h4>Attribution Phase</h4>
            <p>U.S. searches databases, finds prior intelligence, confirms "It's ISIS." Media reports ISIS attack. Public believes ISIS.</p>
        </div>
        <div class="finding-card">
            <h4>Nobody Gets Blamed</h4>
            <p>Actually responsible: Al-Qaeda, Taliban, Iran, Russia, China. None implicated. U.S. continues funding Taliban.</p>
        </div>
    `;
    attributionChart.appendChild(attributionFlow);
    container.appendChild(attributionChart);

    // Final Summary
    const summary = createInfoBox(
        'Summary: Unprecedented Financial Network Supporting Terrorism',
        linkifyEntities(`<p><strong>Direct U.S. Funding:</strong> $2.5-4.7 billion annually to Taliban, majority diverted to terrorist operations</p>
        <p style="margin-top: 0.5rem;"><strong>Multi-State Support:</strong> China ($10B), Iran (intelligence), Russia (supplies), India ($10M)</p>
        <p style="margin-top: 0.5rem;"><strong>Total Scale:</strong> Over $13 billion in confirmed funding - largest state-sponsored terrorism financing in history</p>
        <p style="margin-top: 0.5rem;"><strong>Legal Violations:</strong> Every delivery to designated terrorists violates U.S. law - no accountability, no prosecution</p>
        <p style="margin-top: 0.5rem;"><strong>Congressional Response:</strong> 382,000 signatures ignored, two bills killed/stalled, bipartisan protection of terrorist funding</p>
        <p style="margin-top: 0.5rem;"><strong>The Result:</strong> 1,000+ terrorists trained for U.S. homeland attack with American taxpayer money</p>
        <hr style="margin: 1rem 0; border-color: var(--border);">
        <p style="font-weight: bold; font-size: 1.1rem; color: var(--danger); margin-top: 1rem;">
            THE CENTRAL IRONY: U.S. taxpayers funding the organization training attackers who will kill them,
            while Congress ignores 382,000 petition signatures and kills bills to stop it.
        </p>`),
        'danger'
    );
    container.appendChild(summary);
};
