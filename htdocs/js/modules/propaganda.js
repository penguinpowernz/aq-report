// Propaganda Module - Information Warfare and Attribution Strategy

window.renderPropaganda = function(container) {
    container.innerHTML = '';

    const intro = createInfoBox(
        'Propaganda and Attribution Strategy',
        'Al-Qaeda\'s sophisticated information warfare campaign designed to manipulate American public opinion, misdirect attribution, and exploit conspiracy theories.',
        'warning'
    );
    container.appendChild(intro);

    // Inside Job Narrative
    const insideJob = createChartContainer('U.S. Funded Its Own Attack Narrative', 'Exploiting humanitarian aid fraud');

    const fundingIrony = createInfoBox(
        'The Ultimate Propaganda Angle',
        '<strong>The Reality:</strong> U.S. humanitarian aid being siphoned to Al-Qaeda training camps<br>' +
        '• $5 million per month going to Al-Qaeda camps training homeland attackers<br>' +
        '• Run by Khalil Haqqani (Head of refugees for Taliban)<br>' +
        '• Delivered by Abdulaziz Haqqani to camps with Libyan fighters<br>' +
        '• 70% of humanitarian aid siphoned to Taliban military causes<br>' +
        '• U.S. paying welfare to Taliban martyr families (fighters who died killing Americans)<br><br>' +
        '<strong>Al-Qaeda\'s Messaging:</strong><br>' +
        '• Makes jokes about U.S. funding going to camps training homeland attackers<br>' +
        '• Insider joke: "America funding its own attack"<br>' +
        '• <strong>Will portray attack as "inside job" by U.S. government</strong><br>' +
        '• Goal: Make Americans distrust their government<br>' +
        '• Plays into existing conspiracy theories<br><br>' +
        '<strong>Impact:</strong> After attack, conspiracy theorists will cite this as "proof" of government complicity. Reality is bureaucratic incompetence allowing terrorist exploitation of aid systems.',
        'danger'
    );
    insideJob.appendChild(fundingIrony);

    container.appendChild(insideJob);

    // Building Seven Fascination
    const buildingSeven = createChartContainer('Building Seven and Conspiracy Theory Exploitation', 'Weaponizing American distrust');

    const conspiracy = createInfoBox(
        'Al-Qaeda Studies American Conspiracy Communities',
        '<strong>9/11 Conspiracy Theories:</strong><br>' +
        '• Al-Qaeda found 9/11 conspiracy theories "fascinating"<br>' +
        '• Actively studies American conspiracy theory communities<br>' +
        '• Building Seven becomes symbol of distrust<br><br>' +
        '<strong>Strategic Application:</strong><br>' +
        '• Plans to incorporate conspiracy theory elements into attacks<br>' +
        '• Goal: Make conspiracy theorists view Al-Qaeda as "revolutionaries and rebels"<br>' +
        '• Similar to Hamas supporter dynamics<br>' +
        '• Convert Americans into unwitting Al-Qaeda sympathizers<br><br>' +
        '<strong>The Irony:</strong> Al-Qaeda committed 9/11 but benefits from Americans believing their own government did it. Same strategy planned for future attacks - create circumstances that feed conspiracy narratives.',
        'warning'
    );
    buildingSeven.appendChild(conspiracy);

    container.appendChild(buildingSeven);

    // Attribution Strategy
    const attribution = createChartContainer('ISIS Attribution Strategy', 'Years of intelligence pre-planting');

    const isisBlame = createInfoBox(
        'The Sophisticated False Attribution Plan',
        '<strong>Intelligence Pre-Planting (Multi-Year Operation):</strong><br>' +
        '• Taliban has been feeding information to U.S. for years<br>' +
        '• Small pieces on individual ISIS-K terrorists<br>' +
        '• Information entering U.S. intelligence databases<br>' +
        '• Creating extensive paper trail<br>' +
        '• Each attacker has prior intelligence entries<br>' +
        '• All pointing to ISIS affiliation<br><br>' +
        '<strong>After the Attack:</strong><br>' +
        '• U.S. intelligence will search databases<br>' +
        '• Will find: "Yeah we had piece on this attacker, he\'s ISIS"<br>' +
        '• Multiple attackers have similar database entries<br>' +
        '• <strong>U.S. intelligence will CONFIRM "It\'s ISIS attack"</strong><br>' +
        '• Won\'t recognize Al-Qaeda involvement<br>' +
        '• Won\'t recognize Taliban involvement<br>' +
        '• Won\'t recognize state actors (Russia, Iran, China)<br>' +
        '• Attribution will be completely wrong<br>' +
        '• Supported by YEARS of planted intelligence<br><br>' +
        'Adams: <strong>"That\'s how well they\'ve planned this"</strong>',
        'danger'
    );
    attribution.appendChild(isisBlame);

    const mixedForce = createInfoBox(
        'Mixed Force Composition for Attribution',
        '<strong>Deliberate Force Mixing:</strong><br>' +
        '• 1,000 total attackers<br>' +
        '• Mix of Al-Qaeda and ISIS fighters<br>' +
        '• ISIS deliberately included for attribution purposes<br><br>' +
        '<strong>Theory on Breakdown:</strong><br>' +
        '• <strong>More fighter types: ISIS</strong><br>' +
        '  - If caught alive: "I\'m ISIS"<br>' +
        '  - Directs attention away from Al-Qaeda<br>' +
        '  - Can be interrogated (controlled narrative)<br>' +
        '• <strong>More suicide bombers: Al-Qaeda</strong><br>' +
        '  - Cannot be interrogated after detonation<br>' +
        '  - Protects organizational security<br>' +
        '  - No live captures to reveal Al-Qaeda role<br><br>' +
        '<strong>ISIS Will Claim Responsibility:</strong> ISIS-K (which is actually Haqqani-controlled) will claim attack, directing all attribution away from Al-Qaeda, Taliban, and state sponsors.',
        'warning'
    );
    attribution.appendChild(mixedForce);

    const haqqaniControl = createInfoBox(
        'ISIS-K Leadership is Haqqani Plant',
        '<strong>Sanullah Ghafari Sarajai (aka Sa\'ad, Sultan Aziz Azam):</strong><br>' +
        '• Member of Haqqani Network since 2012<br>' +
        '• 2018-2019: Ran 1,000-member Haqqani cell in Kabul<br>' +
        '• Very close to Sirajuddin Haqqani<br><br>' +
        '<strong>The Deal (Doha Agreement Context):</strong><br>' +
        '• Sirajuddin to Sanullah: "When Doha deal in place, as Haqqani I can no longer do suicide attacks per agreement. I need way to still commit attacks. Will you join ISIS?"<br>' +
        '• Sanullah agreed and became "plant in ISIS"<br>' +
        '• Rose to become leader of ISIS-KP after March 2020 shura raid<br>' +
        '• <strong>Current ISIS-KP leader is a Haqqani Network plant</strong><br>' +
        '• De facto head of ALL ISIS (real ISIS deferred to him)<br><br>' +
        '<strong>Implication:</strong> When ISIS claims responsibility for U.S. attacks, it\'s actually Haqqani/Taliban/Al-Qaeda claiming through controlled proxy.',
        'danger'
    );
    attribution.appendChild(mixedForce);

    container.appendChild(attribution);

    // Social Media Operations
    const socialMedia = createChartContainer('Social Media and Information Operations', 'Exploiting American divisions');

    const operations = createInfoBox(
        'Information Warfare Tactics',
        '<strong>Conspiracy Theory Exploitation:</strong><br>' +
        '• Target Americans already distrustful of government<br>' +
        '• Provide "evidence" of inside job through aid fraud<br>' +
        '• Use Building Seven-style arguments<br>' +
        '• Convert skeptics into Al-Qaeda sympathizers<br><br>' +
        '<strong>Hamas Supporter Model:</strong><br>' +
        '• Successfully portrayed Hamas as "resistance fighters"<br>' +
        '• Many Americans support Hamas without understanding terror ties<br>' +
        '• Same strategy for Al-Qaeda: rebrand as "revolutionaries"<br>' +
        '• Exploit anti-government sentiment<br><br>' +
        '<strong>Divide and Conquer:</strong><br>' +
        '• Increase distrust between Americans and government<br>' +
        '• Paralyze response by creating internal conflict<br>' +
        '• Make accurate attribution politically controversial<br>' +
        '• Prevent unified national response',
        'warning'
    );
    socialMedia.appendChild(operations);

    container.appendChild(socialMedia);

    // State Actor Concealment
    const stateActors = createChartContainer('Concealing State Sponsorship', 'Russia, Iran, and China involvement');

    const sponsors = createInfoBox(
        'State Actor Roles Being Hidden',
        '<strong>Russia:</strong><br>' +
        '• Encouraged October 7th attack: "Go for it, go for it, go for it"<br>' +
        '• Wanted distraction from Ukraine war<br>' +
        '• Pushed for 2022 timing (AQ delayed to 2023)<br>' +
        '• Relationship with Taliban and Al-Qaeda leadership<br><br>' +
        '<strong>Iran:</strong><br>' +
        '• Mohammad Kazemi: Co-plotter of October 7th<br>' +
        '• Protected Al-Qaeda leaders for years (Qasem Soleimani personally oversaw)<br>' +
        '• Soleimani revenge plot: $145 million per month budget<br>' +
        '• Travels regularly to Afghanistan coordinating with Taliban and Al-Qaeda<br>' +
        '• Kazemi not even on FBI Most Wanted List<br><br>' +
        '<strong>China:</strong><br>' +
        '• Mullah Baradar serves as Taliban liaison to Chinese government since 2010<br>' +
        '• Chinese help Taliban with biometric systems to hunt U.S. allies<br>' +
        '• Helped activate systems after Bagram abandonment<br>' +
        '• Taliban collects intelligence on Uighurs for China<br>' +
        '• Provides weapons and funds<br><br>' +
        '<strong>Attribution Impact:</strong> If attack blamed solely on ISIS, all state actor involvement remains hidden. No diplomatic consequences. No military response. State sponsors operate freely.',
        'danger'
    );
    stateActors.appendChild(sponsors);

    container.appendChild(stateActors);

    // Counter-Narrative Challenge
    const challenge = createChartContainer('The Attribution Challenge', 'Why the truth won\'t be believed');

    const problem = createInfoBox(
        'Barriers to Accurate Attribution',
        '<strong>Years of Intelligence Pre-Planting:</strong> U.S. databases contain planted ISIS connections. Official intelligence will "confirm" ISIS attribution.<br><br>' +
        '<strong>Conspiracy Theory Exploitation:</strong> Americans who correctly identify government failures will be dismissed as conspiracy theorists.<br><br>' +
        '<strong>Aid Fraud Reality:</strong> U.S. did fund camps (through exploited humanitarian aid). Technically true but misunderstood cause.<br><br>' +
        '<strong>Media Narrative:</strong> Will follow ISIS attribution. Correcting it will seem like conspiracy theory.<br><br>' +
        '<strong>Political Polarization:</strong> Attribution debate will become partisan issue. Truth becomes politically inconvenient.<br><br>' +
        '<strong>Complexity:</strong> Real story (Al-Qaeda + Taliban + Haqqani + ISIS-K plant + Russia + Iran + China) too complex for public narrative. Simple "ISIS attack" will dominate.<br><br>' +
        '<strong>Adams\' Assessment:</strong> "That\'s how well they\'ve planned this" - Years of preparation to ensure misattribution.',
        'danger'
    );
    challenge.appendChild(problem);

    container.appendChild(challenge);

    // Jake Sullivan's Role
    const sullivan = createChartContainer('Historical Propaganda Precedent: Benghazi Video Lie', 'Jake Sullivan and false narratives');

    const videoLie = createInfoBox(
        'Jake Sullivan\'s False Video Narrative',
        '<strong>Current Position (2023):</strong> National Security Advisor<br><br>' +
        '<strong>Benghazi False Narrative:</strong><br>' +
        '• Created false video narrative for Benghazi attacks<br>' +
        '• Video: "Innocence of Muslims" (anti-Islamic video)<br>' +
        '• Originally came out Spring 2011<br>' +
        '• Translated version: August 2012<br>' +
        '• Egypt protest organizers mentioned it peripherally<br>' +
        '• Sullivan made it central explanation for Benghazi attack<br>' +
        '• Reality: Coordinated Al-Qaeda kidnapping operation planned by Zawahiri<br>' +
        '• 150 terrorists, months of planning, had nothing to do with video<br><br>' +
        '<strong>Implication:</strong> Same person who created false Benghazi narrative is currently National Security Advisor. Pattern of prioritizing politically convenient narratives over accurate attribution.',
        'warning'
    );
    sullivan.appendChild(videoLie);

    container.appendChild(sullivan);

    // Final Warning
    const finalWarning = createInfoBox(
        'The Perfect Information Warfare Storm',
        'Al-Qaeda has created conditions where:<br><br>' +
        '1. <strong>Official intelligence will confirm false attribution</strong> (years of planted data)<br>' +
        '2. <strong>Conspiracy theorists will be technically correct about some facts</strong> (U.S. did fund camps) <strong>but wrong about causation</strong><br>' +
        '3. <strong>Truth-tellers will be dismissed as conspiracy theorists</strong><br>' +
        '4. <strong>State sponsors will remain hidden</strong><br>' +
        '5. <strong>Real perpetrators (Al-Qaeda/Taliban) won\'t be recognized</strong><br>' +
        '6. <strong>Americans will be divided against each other</strong> instead of unified against actual enemy<br>' +
        '7. <strong>No appropriate response will be possible</strong> because enemy is misidentified<br><br>' +
        'This isn\'t accidental. This is decades of planning. "That\'s how well they\'ve planned this."',
        'danger'
    );
    container.appendChild(finalWarning);
};
