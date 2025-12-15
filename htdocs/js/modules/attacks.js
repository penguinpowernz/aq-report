// Attacks Module - Past and Predicted Attacks

window.renderAttacks = function(container) {
    container.innerHTML = '';

    const intro = createInfoBox(
        'Attack Analysis',
        linkifyEntities('Detailed breakdown of past attacks and predicted 2025 operations. All follow the Mumbai model: swarming multiple locations, real-time intelligence, extended duration engagements.'),
        'warning'
    );
    container.appendChild(intro);

    // Past Attacks Section
    const pastSection = createChartContainer('Historical Attacks', 'Attack patterns and methodologies');

    const benghazi = createInfoBox(
        linkifyEntities('Benghazi - September 11-12, 2012'),
        linkifyEntities('<strong>Force:</strong> 150 terrorists (75 assault, 75 cordon)<br>' +
        '<strong>Type:</strong> Kidnapping operation (NOT killing operation)<br>' +
        '<strong>Command:</strong> Ayman al-Zawahiri directly orchestrated<br>' +
        '<strong>Experience:</strong> Soviet-Afghan War, Algerian Civil War (200,000 killed), Iraq Wars, Libyan Revolution<br>' +
        '<strong>Key Failure:</strong> 17-minute delay by CIA chief Bob allowed fire to start<br>' +
        '<strong>Bob\'s Lie:</strong> Called 17th February Brigade (who sent 25 terrorists to attack), claimed waiting for their response<br>' +
        '<strong>Objective:</strong> Exchange Ambassador Stevens for terrorists including Adel al-Shalali, Blind Sheikh, Abu Faraj al-Libi'),
        'info'
    );
    pastSection.appendChild(benghazi);

    const abbey = createInfoBox(
        linkifyEntities('Abbey Gate - August 26, 2021'),
        linkifyEntities('<strong>Casualties:</strong> 170+ Afghans, 13 U.S. service members<br>' +
        '<strong>Command:</strong> Joint ISIS-K and Haqqani Network<br>' +
        '<strong>Bomber:</strong> Abdul Rahim Sangari (NOT al-Logari as CENTCOM stated after 3.5 years)<br>' +
        '<strong>Timeline:</strong> Released from Bagram July 1 → Planning meeting Aug 18 (3 days after release) → Attack Aug 26 (11 days total)<br>' +
        '<strong>Key Fact:</strong> ISIS-K leader Sanullah is actually Haqqani Network plant since 2012. Sirajuddin asked him to join ISIS to circumvent Doha Agreement.<br>' +
        '<strong>Control:</strong> Haqqani controlled all external security, deliberately concentrated casualties<br>' +
        '<strong>Investigation:</strong> Sarah Adams identified true bomber in 4 months. CENTCOM took 3.5 years and failed.'),
        'info'
    );
    pastSection.appendChild(abbey);

    const october7 = createInfoBox(
        linkifyEntities('October 7th - 2023'),
        linkifyEntities('<strong>Force:</strong> 1,400-1,500 attackers<br>' +
        '<strong>Training:</strong> Afghanistan (August 7, 2022 - October 2023)<br>' +
        '<strong>Date Significance:</strong> October 7, 2001 - U.S. began bombing Kandahar<br>' +
        '<strong>Model:</strong> Mumbai 2008 template - swarming, real-time intel, extended duration<br>' +
        '<strong>Planning:</strong> Started March 2022 at Kandahar meeting, delayed one year after Zawahiri strike<br>' +
        '<strong>Russia Role:</strong> Russia encouraged attack saying "go for it" - wanted distraction from Ukraine<br>' +
        '<strong>Warning Ignored:</strong> Israel informed Hamas training in Afghanistan, knew of "big plot," took no action<br>' +
        '<strong>Significance:</strong> "First in series targeting Israel, Europe, United States" - Adams calls it "test run" for U.S. attacks'),
        'info'
    );
    pastSection.appendChild(october7);

    container.appendChild(pastSection);

    // Mumbai Model Explanation
    const mumbaiModel = createChartContainer('Mumbai Attack Model', 'Template for all modern coordinated attacks');
    const modelBox = createInfoBox(
        '2008 Mumbai Attack Methodology',
        '<strong>Core Tactics:</strong><br>' +
        '• Swarming multiple locations simultaneously<br>' +
        '• Real-time intelligence provided to attackers<br>' +
        '• Operational flexibility (change targets during attack)<br>' +
        '• Extended duration engagements (multiple days)<br>' +
        '• Fedayeen fighters (fight to death, not traditional suicide bombers)<br>' +
        '• Maximum casualties over time<br>' +
        '• Maximum media coverage<br>' +
        '• Maximum terror impact<br><br>' +
        '<strong>Applications:</strong> October 7, 2023 Hamas attacks and all planned U.S./European attacks',
        'info'
    );
    mumbaiModel.appendChild(modelBox);
    container.appendChild(mumbaiModel);

    // Predicted 2025 Attacks
    const predicted = createChartContainer('Predicted 2025 Wave Attacks', 'Multi-phase coordinated global operations');

    const wave2 = createInfoBox(
        'Wave 2: Embassy Attacks',
        '<strong>Middle East Embassies:</strong> Push U.S. out for caliphate expansion (Baghdad specifically mentioned)<br>' +
        '<strong>African Embassies:</strong> Push U.S. out (Bamako, Mali and others)<br>' +
        '<strong>European Embassies:</strong> Target U.S. for Middle East involvement<br><br>' +
        'Adams: "I\'m certain we\'ll either have embassy attacks in 2025 or Homeland attack or both"',
        'warning'
    );
    predicted.appendChild(wave2);

    const wave3 = createInfoBox(
        'Wave 3: European Attacks',
        '<strong>Force:</strong> 1,000 trained terrorists (separate from U.S. force)<br>' +
        '<strong>Type:</strong> October 7th-style coordinated attacks<br>' +
        '<strong>Targets:</strong> Both embassy and mass casualty attacks<br>' +
        '<strong>Timing:</strong> Coordinated with U.S. homeland attacks',
        'warning'
    );
    predicted.appendChild(wave3);

    const wave4 = createInfoBox(
        linkifyEntities('Wave 4: U.S. Homeland Attacks'),
        linkifyEntities('<strong>Force:</strong> 1,000+ trained terrorists deployed<br>' +
        '<strong>Actual Number:</strong> Adams believes "more than a thousand Al-Qaeda members in United States"<br>' +
        '<strong>Style:</strong> October 7th/Mumbai-style swarming<br>' +
        '<strong>Scope:</strong> Multiple cities simultaneously<br>' +
        '<strong>Casualties:</strong> Al-Qaeda predicting 50,000-60,000 American deaths<br>' +
        '<strong>Duration:</strong> Extended engagements over days<br>' +
        '<strong>Status:</strong> All training completed, attackers deployed<br>' +
        '<strong>Attribution:</strong> Will be falsely blamed on ISIS (Taliban has pre-planted intelligence in U.S. databases for years)'),
        'danger'
    );
    predicted.appendChild(wave4);

    container.appendChild(predicted);

    // Attack Innovations
    const innovations = createChartContainer('New Tactics and Innovations', 'What makes these attacks different');

    const tacticsList = createInfoBox(
        'Novel Threat Elements',
        '<strong>1. Invisible Bomb Vests:</strong> Defeating standard security measures<br><br>' +
        '<strong>2. Fedayeen Fighters:</strong> "We haven\'t had fedayeen attackers in United States." Fighters who fight to death (not traditional suicide bombers). Will continue until they or all enemies dead. U.S. first responders not trained for this concept.<br><br>' +
        '<strong>3. Surrender Deception:</strong> Battle ongoing, attacker appears to surrender, might have suicide vest. First responders let guard down. "That man came to die" - will fight until death or detonation. Second and third order casualties.<br><br>' +
        '<strong>4. Mixed Force:</strong> Deliberately includes ISIS fighters. If caught: "I\'m ISIS" - directs attention from Al-Qaeda. More suicide bombers are Al-Qaeda (can\'t be interrogated). More fighter types are ISIS (for attribution).<br><br>' +
        '<strong>5. Real-time Intelligence:</strong> Attackers can change targets during operation<br><br>' +
        '<strong>6. Strategic Deception:</strong> Years of pre-planted intelligence in U.S. databases. After attack, U.S. will search and find: "Yeah we had pieces on this attacker, he\'s ISIS." "That\'s how well they\'ve planned this."',
        'danger'
    );
    innovations.appendChild(tacticsList);

    container.appendChild(innovations);

    // Target Types
    const targets = createChartContainer('Target Selection', 'Al-Qaeda vs ISIS preferences');

    const targetTypes = createInfoBox(
        'Target Categories',
        '<strong>Al-Qaeda Preferences:</strong><br>' +
        '• Symbolic Targets: U.S. Capitol (in AQ propaganda since 9/11), national monuments, government buildings<br>' +
        '• Economic Targets: Bridges, public transportation, metro systems, infrastructure causing economic damage<br>' +
        '• Mass Casualty Locations: Places causing fear and economic impact<br><br>' +
        '<strong>ISIS Preferences:</strong><br>' +
        '• "Just wants mass casualty"<br>' +
        '• Softer targets<br>' +
        '• Wherever most people are<br>' +
        '• Opportunity-driven',
        'info'
    );
    targets.appendChild(targetTypes);

    container.appendChild(targets);

    // Warning
    const warning = createInfoBox(
        'Critical Warning - Information Being Ignored',
        '<strong>Israel Pattern:</strong> People passed information about Hamas training in Afghanistan to Israeli government. Israel knew Hamas planning "some big plot" in Afghanistan. Israel took no action. October 7th happened.<br><br>' +
        '<strong>Current U.S. Situation:</strong> "Same types of reports being passed to U.S. government. They\'re not taking it serious." Florida Governor Ron DeSantis: "I\'ve received no threat reporting at all on terrorism from federal government." Zero federal information sharing to state level.<br><br>' +
        '<strong>Adams:</strong> "I don\'t know how what happened in Israel doesn\'t make you think twice. We\'re making the same mistake." "I really just get \'thanks for your info.\' Nothing happens."<br><br>' +
        '<strong>Preparation Gap:</strong> No preparation by federal government. State/local law enforcement uninformed. First responders untrained for fedayeen fighters or surrender deception. Public completely unaware.',
        'danger'
    );
    container.appendChild(warning);

    // Timeline caveat
    const caveat = createInfoBox(
        'Timeline Uncertainty',
        'Israel attack was planned for October 7, 2022 but executed October 7, 2023 (delayed one year due to Zawahiri strike). If U.S. attack doesn\'t happen in 2025, doesn\'t mean intelligence is wrong - could be delayed. Risk: People let guard down if doesn\'t happen on expected timeline.',
        'warning'
    );
    container.appendChild(caveat);
};
