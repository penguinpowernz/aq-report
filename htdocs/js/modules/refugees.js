// Refugees Module - Migration Routes and Document Fraud

window.renderRefugees = function(container) {
    container.innerHTML = '';

    const intro = createInfoBox(
        'Migration Routes and Infiltration',
        'How Al-Qaeda exploits refugee systems, humanitarian aid, and border vulnerabilities to deploy trained terrorists into the United States and other Western nations.',
        'danger'
    );
    container.appendChild(intro);

    // Afghan Passport Transformation
    const passportSection = createChartContainer('Afghan Passport Transformation', 'From weakness to weapon');

    const passportPower = createInfoBox(
        'The Afghan Passport is Now "Extremely Powerful"',
        '<strong>Historical Status:</strong> Afghan passport historically weak and undesirable<br><br>' +
        '<strong>Post-2021 Transformation:</strong><br>' +
        '• Humanitarians worldwide: "We need to save these Afghans from terrorists"<br>' +
        '• <strong>"Afghans being brought in all over world"</strong><br>' +
        '• Afghan passport now grants access previously impossible<br>' +
        '• <strong>Al-Qaeda reaction: "Holy crap" (opportunity recognition)</strong><br><br>' +
        '<strong>Taliban Control of Passport Issuance:</strong><br>' +
        '• Haqqani Network runs Ministry of Interior<br>' +
        '• Controls all passport issuance<br>' +
        '• Abdul Azim Ali Musa Ben Ali ("Musa") makes terrorist passports<br>' +
        '• Document forgery expert since 1980s mujahideen days<br>' +
        '• Can issue passports with fake names and clean backgrounds<br><br>' +
        '<strong>Libya Precedent:</strong><br>' +
        '• "Our terrorists in Libya were given official Libyan passports and fake names"<br>' +
        '• <strong>"Exact same thing Taliban\'s doing"</strong><br>' +
        '• Official government documents with false identities<br>' +
        '• Terrorists can also get passports for other countries',
        'danger'
    );
    passportSection.appendChild(passportPower);

    container.appendChild(passportSection);

    // Humanitarian Aid Fraud
    const fraudSection = createChartContainer('$5 Million Per Month Fraud to Al-Qaeda Camps', 'Humanitarian aid exploitation');

    const campFunding = createInfoBox(
        'Refugee Program Directly Funding Al-Qaeda Training',
        '<strong>The Operation:</strong><br>' +
        '• Run by: Khalil Haqqani (uncle of Sirajuddin, Head of refugees for Taliban)<br>' +
        '• Claimed purpose: Resettling Afghan refugees from Pakistan to Nangarhar<br>' +
        '• <strong>Actual use: Funding Al-Qaeda training camps</strong><br>' +
        '• Amount: <strong>$5 million per month</strong><br>' +
        '• Delivered by: Abdulaziz Haqqani directly to camps<br>' +
        '• Source: U.S. humanitarian aid dollars<br>' +
        '• Camps contain: Libyan fighters and other foreign nationals training for homeland attacks<br><br>' +
        '<strong>The Irony Al-Qaeda Exploits:</strong><br>' +
        '• Makes jokes about U.S. funding camps training homeland attackers<br>' +
        '• "America funding its own attack"<br>' +
        '• Will use this as propaganda after attacks<br>' +
        '• Perfect "inside job" narrative (technically true but bureaucratic incompetence, not conspiracy)',
        'danger'
    );
    fraudSection.appendChild(campFunding);

    const aidSiphoning = createInfoBox(
        'Broader Humanitarian Aid Exploitation - 70% to Taliban Military',
        '<strong>Three Buckets of Money:</strong><br><br>' +
        '<strong>1. Bank Reserves ($7 Billion):</strong> Afghan government reserves when it fell (held offshore in U.S.)<br><br>' +
        '<strong>2. Humanitarian Aid (Largest):</strong><br>' +
        '• Source: U.S. State Department via NGOs<br>' +
        '• Weekly cash deliveries on planes to Afghanistan<br>' +
        '• <strong>70% siphoned off to Taliban-only causes</strong><br>' +
        '• Majority goes to Taliban military<br><br>' +
        '<strong>Taliban Siphoning Methods:</strong><br>' +
        '1. Basic Bribes (doesn\'t account for 70%)<br>' +
        '2. <strong>Board Membership Requirement:</strong> Every NGO collecting from fund must have Taliban representative on board - complete control of money distribution<br>' +
        '3. <strong>NGO Infiltration:</strong> Long-standing NGOs with State Department relationships - Taliban "gutted them completely, put all Taliban in them." State Department thinks "12-year relationship, good record" but "None of them work there anymore, it\'s all now just Taliban"<br><br>' +
        '<strong>3. Doha Agreement Weekly Payments:</strong> Secret annexes never released, include funding commitments<br><br>' +
        '<strong>Critical Issue - Taliban Martyr Payments:</strong><br>' +
        '• <strong>U.S. paying welfare to Taliban martyr families</strong><br>' +
        '• Every Taliban member who died fighting U.S. forces<br>' +
        '• U.S. government paying stipend to family<br>' +
        '• American Gold Star families "aren\'t getting squat"<br>' +
        '• Justification given: "It\'ll stop them from joining ISIS"<br>' +
        '• Adams\' response: <strong>"The Taliban guy is already dead"</strong>',
        'danger'
    );
    fraudSection.appendChild(aidSiphoning);

    container.appendChild(fraudSection);

    // Migration Routes
    const routesSection = createChartContainer('Migration Routes to United States', 'Two primary pathways');

    const darienGap = createInfoBox(
        'Route 1: Darien Gap - The Deadly Southern Route',
        '<strong>The Route:</strong><br>' +
        '• Start: Afghanistan<br>' +
        '• Through: Darien Gap (Panama)<br>' +
        '• Up through: South and Central America<br>' +
        '• Entry: U.S. southern border<br><br>' +
        '<strong>Darien Gap Mortality:</strong><br>' +
        '• <strong>40% mortality rate</strong><br>' +
        '• Extremely dangerous jungle crossing<br>' +
        '• Many don\'t survive the journey<br><br>' +
        '<strong>Document Methods:</strong><br>' +
        '• Afghan passports (easiest to get from Taliban)<br>' +
        '• Syrian passports (fake)<br>' +
        '• Turkish passports (fake)<br><br>' +
        '<strong>Speed Examples:</strong><br>' +
        '• Fastest seen: Afghanistan to U.S. border in 3 weeks<br>' +
        '• Speed depends on method and passport used<br><br>' +
        '<strong>Border Challenge:</strong><br>' +
        '• U.S. Border Patrol agents mostly haven\'t been overseas<br>' +
        '• Can\'t identify fake documents or wrong nationalities<br>' +
        '• Example: Egyptian with Syrian passport - will agent know?<br>' +
        '• "Passport says Syrian" - passes through<br>' +
        '• <strong>"Our southern border is probably our biggest weakness right now"</strong><br><br>' +
        '<strong>Testing Operations:</strong><br>' +
        '• <strong>"Some still doing border to see if they can do it and test it"</strong><br>' +
        '• Purpose: <strong>"Learn about our weaknesses"</strong><br>' +
        '• Adams from detainee debriefing experience: "Pay attention to what they\'re trying to learn about you"<br>' +
        '• <strong>"They are going to find our weaknesses"</strong>',
        'danger'
    );
    routesSection.appendChild(darienGap);

    const legalRoute = createInfoBox(
        'Route 2: Legal Immigration - Al-Qaeda Preference',
        '<strong>Why Al-Qaeda Prefers Legal Entry:</strong><br>' +
        '• Goal: <strong>"Embarrass system again like 9/11 attackers"</strong><br>' +
        '• 9/11 attackers entered legally on valid visas<br>' +
        '• Can fly directly to U.S.<br>' +
        '• Legal status means less scrutiny<br>' +
        '• Can wait indefinitely without raising suspicion<br>' +
        '• No dangerous border crossing<br>' +
        '• No mortality risk<br><br>' +
        '<strong>Source Countries for "Clean" Terrorists:</strong><br>' +
        '• Saudi Arabia<br>' +
        '• Kuwait<br>' +
        '• Jordan<br>' +
        '• Other allied nations<br><br>' +
        '<strong>Method:</strong><br>' +
        '• Apply for legitimate tourist/travel visas<br>' +
        '• No criminal record in databases<br>' +
        '• Appear as normal travelers<br>' +
        '• Activate only when attack is ordered<br><br>' +
        '<strong>2018 Visa Scandal Example:</strong><br>' +
        '• Wasam bin Hamid\'s brother applied for U.S. visa<br>' +
        '• Multimillionaire terrorist financier in Turkey<br>' +
        '• Profile stated joined ISIS in 2015<br>' +
        '• Known al-Qaeda and ISIS affiliated<br>' +
        '• <strong>Visa was GRANTED by U.S.</strong><br>' +
        '• Went to airport to fly to America<br>' +
        '• Turkish authorities stopped him (on Turkish terrorist list)<br>' +
        '• U.S. didn\'t stop him, Turkey did<br>' +
        '• Adams: "Are you serious? This wasn\'t some long time ago. 2018."',
        'warning'
    );
    routesSection.appendChild(legalRoute);

    container.appendChild(routesSection);

    // NGO Infiltration
    const ngoSection = createChartContainer('NGO Infiltration and Manipulation', 'Exploiting humanitarian organizations');

    const infiltration = createInfoBox(
        'Taliban Takeover of NGO Infrastructure',
        '<strong>The Takeover:</strong><br>' +
        '• Long-standing NGOs with State Department relationships<br>' +
        '• Taliban "gutted them completely, put all Taliban in them"<br>' +
        '• State Department believes: "12-year relationship, good record"<br>' +
        '• State Department not being honest: "None of them work there anymore, it\'s all now just Taliban"<br>' +
        '• Board membership requirement: Every NGO must have Taliban representative on board<br>' +
        '• Complete Taliban control of money distribution<br><br>' +
        '<strong>Task Force Pineapple / Moral Compass Federation Issues:</strong><br>' +
        '• Partnership between government and NGOs for evacuations<br>' +
        '• "Not all of us are part of it"<br>' +
        '• Must sign "tons of NDAs"<br>' +
        '• Adams left after third NDA<br>' +
        '• Purpose: "Keep volunteer groups in line, make them mentally happy"<br>' +
        '• "Cover to drag out the evac 100%"<br>' +
        '• Two years later (2023): Still meeting monthly but evacuations minimal<br><br>' +
        '<strong>Biometric Hunting:</strong><br>' +
        '• U.S. left complete biometric database in Ministry of Interior building<br>' +
        '• Chinese and Iranians helped Taliban activate systems<br>' +
        '• Deployed on mobile devices at borders and checkpoints<br>' +
        '• Used to hunt U.S. allies trying to evacuate<br>' +
        '• NGOs unknowingly funnel refugees through Taliban checkpoints<br>' +
        '• Some evacuees are actually terrorists with clean fake identities',
        'warning'
    );
    ngoSection.appendChild(infiltration);

    container.appendChild(ngoSection);

    // Casualty Statistics
    const casualties = createChartContainer('Post-Withdrawal Afghan Casualties', 'The cost of abandonment');

    const afghanAllies = createInfoBox(
        'Afghan Allies - The Numbers (as of late 2023)',
        '<strong>Total:</strong> 200,000 Afghan military and police worked with U.S.<br><br>' +
        '<strong>Killed:</strong> Just over 10,000 (in 2.5 years)<br>' +
        '• Context: Under 2,500 Americans died in 20+ years<br>' +
        '• 10,000 Afghan allies killed in just 2.5 years<br><br>' +
        '<strong>Captured:</strong> 30,000<br>' +
        '• 18,000 went through "fake justice system" (Taliban Sharia Court)<br>' +
        '• Prison sentence or executed<br>' +
        '• <strong>12,000 completely missing from capture</strong><br><br>' +
        '<strong>Missing Status Unknown:</strong> 12,000 (dead, tortured, secret prisons)<br><br>' +
        '<strong>Total Missing Afghans:</strong> 70,000 (including non-allies)<br>' +
        '• Disappeared when Taliban came<br>' +
        '• Never seen again<br>' +
        '• Families never notified',
        'danger'
    );
    casualties.appendChild(afghanAllies);

    const womenChildren = createInfoBox(
        'Women and Children Casualties',
        '<strong>Women\'s Rights Destroyed:</strong><br>' +
        '• When Afghanistan fell: 27% of Parliament was women<br>' +
        '• United States: 29%<br>' +
        '• "Got to equal par to us in 20 years"<br>' +
        '• Current status: Zero rights, living in prison<br><br>' +
        '<strong>Women Casualties (last 2.5 years):</strong><br>' +
        '• <strong>880,000 women reported rapes</strong><br>' +
        '• <strong>15,000 children reported rapes</strong><br>' +
        '• Note: Most "prisoners in own house, can\'t report"<br>' +
        '• Actual numbers likely much higher',
        'danger'
    );
    casualties.appendChild(womenChildren);

    container.appendChild(casualties);

    // Entry Status
    const statusSection = createChartContainer('Current Infiltration Status', 'Attackers already deployed');

    const deployed = createInfoBox(
        'Training Complete - Attackers Deployed',
        '<strong>All Training Completed:</strong><br>' +
        '• Won\'t see new training information<br>' +
        '• "Next week you\'re not going to get info of homeland attacker at terrorist camp"<br>' +
        '• "It\'s already done"<br><br>' +
        '<strong>Current Phase:</strong><br>' +
        '• Movement and positioning<br>' +
        '• Operational planning<br>' +
        '• Target selection<br>' +
        '• Timing decisions<br><br>' +
        '<strong>Entry Timeline:</strong><br>' +
        '• "Depending how they come through it could take different times"<br>' +
        '• Southern border: 3 weeks to months<br>' +
        '• Legal visa: Direct flights, already in country<br>' +
        '• <strong>Many likely already in United States</strong><br><br>' +
        '<strong>Adams\' Assessment:</strong><br>' +
        '• "Al-Qaeda says they trained and deployed a thousand"<br>' +
        '• <strong>"I think there\'s more than a thousand Al-Qaeda members in United States"</strong>',
        'danger'
    );
    statusSection.appendChild(deployed);

    container.appendChild(statusSection);

    // Congressional Inaction
    const congressSection = createChartContainer('Congressional Inaction', 'Ignored warnings and failed legislation');

    const petition = createInfoBox(
        'Zero Action Despite Public Pressure',
        '<strong>Petition Results:</strong><br>' +
        '• 382,000+ signatures collected<br>' +
        '• Submitted to Congress<br>' +
        '• <strong>Result: Zero action taken</strong><br><br>' +
        '<strong>Legislative Efforts:</strong><br><br>' +
        '<strong>1. House Bill - Congressman Burchett:</strong><br>' +
        '• Bill introduced to stop Taliban funding<br>' +
        '• No action taken<br><br>' +
        '<strong>2. Senate Efforts:</strong><br>' +
        '• Various attempts to halt aid to Taliban<br>' +
        '• All failed or stalled<br><br>' +
        '<strong>State Department Response:</strong><br>' +
        '• Continues weekly cash deliveries<br>' +
        '• No acknowledgment of fraud<br>' +
        '• No audits of NGO Taliban infiltration<br>' +
        '• No investigation of $5M/month to Al-Qaeda camps',
        'warning'
    );
    congressSection.appendChild(petition);

    container.appendChild(congressSection);

    // Visualization of Routes
    const visualization = createChartContainer('Migration Route Comparison', 'Risk vs Speed vs Detection');

    const routeData = [
        {
            label: 'Southern Border (Darien Gap)',
            value: 85,
            valueLabel: 'High Risk / Medium Speed'
        },
        {
            label: 'Legal Visa Entry',
            value: 95,
            valueLabel: 'Low Risk / High Speed'
        },
        {
            label: 'Refugee Resettlement',
            value: 75,
            valueLabel: 'Medium Risk / Slow Speed'
        }
    ];

    const chart = createBarChart(routeData, 100);
    visualization.appendChild(chart);

    const routeNote = document.createElement('p');
    routeNote.style.marginTop = '1rem';
    routeNote.style.color = 'var(--text-secondary)';
    routeNote.textContent = 'Al-Qaeda prefers legal visa entry to "embarrass system again like 9/11 attackers" but uses all routes. Southern border used for "testing" to learn weaknesses.';
    visualization.appendChild(routeNote);

    container.appendChild(visualization);

    // Final Warning
    const finalWarning = createInfoBox(
        'The System is Compromised at Every Level',
        '<strong>Document Fraud:</strong> Taliban controls passport issuance, creates clean identities for terrorists<br><br>' +
        '<strong>Financial Systems:</strong> U.S. humanitarian aid funding Al-Qaeda training camps ($5M/month confirmed)<br><br>' +
        '<strong>NGO Infrastructure:</strong> Legitimate organizations gutted and replaced with Taliban operatives<br><br>' +
        '<strong>Border Security:</strong> Agents can\'t identify fake documents or nationalities, "biggest weakness"<br><br>' +
        '<strong>Visa System:</strong> Known terrorists granted visas (2018 example), Al-Qaeda exploiting for "clean" entry<br><br>' +
        '<strong>Congressional Oversight:</strong> 382,000 signatures, multiple bills - zero action<br><br>' +
        '<strong>Biometric Systems:</strong> U.S. database left behind, used against allies, some evacuees are actually terrorists<br><br>' +
        '<strong>Training Complete:</strong> Won\'t see advance warning, attackers already deployed and positioning<br><br>' +
        '<strong>Scale:</strong> "More than a thousand Al-Qaeda members in United States" per Adams assessment<br><br>' +
        'Every system designed to protect America has been compromised or is being actively exploited. And after the attack, it will be blamed on ISIS.',
        'danger'
    );
    container.appendChild(finalWarning);
};
