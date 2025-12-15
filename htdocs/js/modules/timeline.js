// Timeline Module - Comprehensive Historical Events

window.renderTimeline = function(container) {
    container.innerHTML = '';

    const intro = createInfoBox(
        'Comprehensive Historical Timeline',
        'Detailed chronological analysis of Al-Qaeda, Taliban, and global terrorism events from 1979-2025. Based on CIA operational intelligence and "Know Thy Enemy" investigations.',
        'info'
    );
    container.appendChild(intro);

    // Create period sections
    const periods = [
        {
            id: 'pre-911',
            title: 'Pre-9/11 Historical Context (1979-2001)',
            events: [
                {
                    date: '1979-1989',
                    title: 'Soviet-Afghan War (Mujahideen Era)',
                    description: linkifyEntities('Foundation of the mujahideen network. Soviet Union invades Afghanistan (1979). Future Al-Qaeda leaders including Osama bin Laden, Ayman al-Zawahiri fight together. Mullah Omar and Mullah Abdul Ghani Baradar fight alongside each other. Multiple Benghazi attackers participate. Mokhtar Belmokhtar (MBM) fights in Afghanistan before moving to Algeria. U.S. provides Stinger missiles (Charlie Wilson\'s War). Soviet withdrawal (1989) creates pool of battle-hardened fighters.')
                },
                {
                    date: 'Early 1990s-2000',
                    title: 'Algerian Civil War',
                    description: linkifyEntities('<strong>200,000 civilians killed</strong> in this often-forgotten conflict. Mokhtar Belmokhtar (MBM) leaves Afghanistan for Algeria, gaining most credentials and kidnapping expertise here. Multiple future Benghazi attackers fight in Algeria. Sarah Adams: "Insane jihad thing that always gets ignored."')
                },
                {
                    date: '1990s',
                    title: 'Taliban Formation & Osama Returns',
                    description: linkifyEntities('Six men including Mullah Omar and Muhammad Hassan Akhund create Taliban to bring law and order to post-Soviet Afghanistan. Taliban rapidly takes control. Osama bin Laden returns to Afghanistan (1996), Taliban provides refuge. Al-Qaeda establishes training infrastructure: Tarnak Farms (Kandahar), Sarobi camp (outside Kabul), various small training locations.')
                },
                {
                    date: 'August 7, 1998',
                    title: 'Tanzania & Kenya Embassy Bombings',
                    description: linkifyEntities('U.S. Embassy bombings masterminded by Abu Anas al-Libi. Large number killed. Date chosen has significance - this anniversary used for October 7th training start in 2022. Establishes pattern of embassy targeting.')
                },
                {
                    date: 'September 9, 2001',
                    title: 'Ahmad Shah Massoud Assassinated',
                    description: linkifyEntities('<strong>Two days before 9/11</strong> - Northern Alliance leader killed by two Tunisian suicide bombers. Individual who provided the Tunisians would later provide attackers to Zawahiri for Benghazi and remains active as of 2023. His son now leads Northern Alliance resistance.')
                },
                {
                    date: 'September 11, 2001',
                    title: '9/11 Attacks',
                    description: linkifyEntities('Al-Qaeda attacks U.S. homeland. Planned from Afghanistan. Khalid Sheikh Mohammed (KSM) mastermind. 3,000+ killed. <strong>Date significance:</strong> September 11, 1922 - British Mandate began, first time Westerner put in charge of Palestinian mandate. NOT about "school starting" or "9-1-1" or "Allah".')
                },
                {
                    date: 'October 7, 2001',
                    title: 'Operation Enduring Freedom Announced',
                    description: linkifyEntities('George Bush announces operation. <strong>U.S. begins carpet bombing Kandahar.</strong> THIS DATE becomes anniversary terrorists commemorate. <strong>Direct reason October 7, 2023 chosen for Hamas attacks.</strong> Most Americans and government don\'t recognize this Afghanistan connection.')
                },
                {
                    date: 'October-December 2001',
                    title: 'U.S. Invasion & Taliban Defeat',
                    description: linkifyEntities('U.S. enters Afghanistan. <strong>Taliban defeated in approximately 5 weeks.</strong> "Amazing, like raw USA. They really kicked ass." Taliban go home, view conflict as finished. Mullah Baradar takes Mullah Omar to hide in Waziristan. Bin Laden escapes Tora Bora into Pakistan. Al-Qaeda senior leaders flee to Iran and Pakistan.')
                }
            ]
        },
        {
            id: 'war-on-terror',
            title: 'War on Terror Operations (2002-2008)',
            events: [
                {
                    date: '2002-2003',
                    title: 'Taliban Resurgence Triggered - Baradar\'s House Bombed',
                    description: linkifyEntities('<strong>Several months after Taliban defeat</strong>, U.S. bombs Mullah Baradar\'s father\'s house, injuring his father. Baradar\'s response: "Screw this, I\'m going on offense. You beat us and then you come back here months later and you bomb my house." <strong>"That\'s when he triggered over and said okay, game\'s on, Taliban\'s back."</strong> Taliban insurgency restarts from this single provocation.')
                },
                {
                    date: '2003-2004 onward',
                    title: 'Iraq Wars - Future Benghazi Attackers',
                    description: linkifyEntities('Multiple future Benghazi attackers fight in Iraq, gaining urban warfare experience. Adel al-Shalali (Libyan) becomes very close friend of Abu Musab al-Zarqawi. After Zarqawi\'s death, returns to Iraq as terrorist. Plans post-death attack honoring Zarqawi. Captured and jailed (later becomes target for Benghazi prisoner swap).')
                },
                {
                    date: '2006',
                    title: 'Sarah Adams Joins CIA',
                    description: linkifyEntities('Applied online night before defending thesis on Kashmir region. First interview 5 weeks later. Position: Analyst and Targeter (newly created role ~2006).')
                },
                {
                    date: 'November 2008',
                    title: 'Mumbai Attacks - Attack Model Created',
                    description: linkifyEntities('Lashkar-e-Taiba (Pakistani group) conducts attack killing large number. <strong>Attack methodology becomes template for future operations:</strong> Swarming multiple locations, real-time intelligence to attackers, operational flexibility (change targets during attack), extended duration (multiple days), fedayeen fighters (fight to death). <strong>This model used for October 7, 2023 Hamas attacks and planned U.S. homeland attacks.</strong>')
                }
            ]
        },
        {
            id: 'baradar-reconciliation',
            title: 'Taliban Reconciliation Era (2009-2010)',
            events: [
                {
                    date: '2009',
                    title: 'Obama Appoints Special Envoy for Taliban Peace',
                    description: linkifyEntities('Richard Holbrooke appointed for Taliban reconciliation. Goal: Make peace deal with Taliban. Assessment: Can only reconcile using Mullah Baradar. Sarah Adams begins targeting Mullah Baradar who has "really good OpSec" - only on phone about one minute at a time.')
                },
                {
                    date: 'December 2009',
                    title: 'Camp Chapman Attack',
                    description: linkifyEntities('Khost Province, Afghanistan. Double/triple agent suicide bombing. <strong>Seven CIA personnel killed.</strong> Joint Al-Qaeda and TTP operation. Originally planned for Peshawar, Pakistan. Ruse: Doctor treating Ayman al-Zawahiri (who was directly involved in planning). Jordanian agent actually working for Al-Qaeda/TTP.')
                },
                {
                    date: 'Late 2009',
                    title: 'Baradar-China Liaison Established',
                    description: linkifyEntities('Mullah Baradar serves as Taliban liaison to Chinese government. Travels to China for meetings. Chinese priorities: Taliban collect intelligence on Uighurs, pass info to China, support domestic oppression. Taliban requests: Weapons and funds. <strong>Relationship established that continues to present.</strong>')
                },
                {
                    date: 'January 2010',
                    title: 'Capture of Mullah Baradar',
                    description: linkifyEntities('Sarah Adams leads operation. Phone activated while Adams flying to Islamabad (entire flight - highly unusual). Leadership at COSOS conference. Adams didn\'t wait for authorization. Phone moving Quetta to Karachi. Adams\' insight: "This is his kid" who stole his old phone. <strong>"We just got really lucky his kid stole his old phone out of closet and brought on trip."</strong> Immediately becomes White House\'s #1 focus. All questions about reconciliation, not operations. Adams\' realization: "Oh my gosh, they only want this guy for reconciliation. That\'s when I saw we\'re going to make a deal with the Taliban." <strong>Adams\' regret: "If I went back in time I never would have captured him. He is the reason the whole country fell."</strong>')
                }
            ]
        },
        {
            id: 'libya-benghazi',
            title: 'Libya Revolution & Benghazi Attacks (2011-2012)',
            events: [
                {
                    date: 'Early 2011',
                    title: 'Libyan Revolution Begins',
                    description: linkifyEntities('<strong>Reality:</strong> "The Libyan Revolution was not some democratic movement. It was terrorists taking it to Gaddafi because he locked them up forever." "Most of the people fighting it or at least leading militias were terrorists." Al-Qaeda brought in lots of terrorists to fight. U.S. provides air support only. Common misconception: MANPADs in Libya are NOT U.S.-provided Stingers but Russian SA-7s, SA-9s from Gaddafi stockpiles.')
                },
                {
                    date: 'June 2011',
                    title: 'Drone Strikes on Zawahiri\'s Deputies',
                    description: linkifyEntities('Two of Zawahiri\'s last deputies killed in U.S. strikes in Pakistan, including Abu Yahya al-Libi. Both died within one year. <strong>Zawahiri\'s response: "Enough\'s enough, we\'re going to take it to the Americans in Libya."</strong> This becomes direct motivation for Benghazi attacks.')
                },
                {
                    date: 'End of October 2011',
                    title: 'Gaddafi Falls',
                    description: linkifyEntities('Gaddafi killed. No intelligence service when Arab Spring kicked off. Two competing governments form: East (General Haftar, LNA) and West (U.S. ally). <strong>"Government in Libya stayed with the terrorists because the terrorists kept them in power."</strong> Old LIFG, Al-Qaeda remain aligned with western government. "The US Ally in Libya is the same side al-Qaeda is on" (continues 10+ years).')
                },
                {
                    date: 'Beginning November 2011',
                    title: 'Al-Qaeda Enters Benghazi',
                    description: linkifyEntities('<strong>Just weeks after Gaddafi\'s death</strong>, Al-Qaeda starts setting up real base in Benghazi. Building toward September 2012 attacks. Recruiting, organizing, planning operations. Less than one year later: Benghazi attacks. 2014-2017: War against them (powerful enough to require 3-year war). <strong>This timeline becomes template for understanding Afghanistan regeneration.</strong>')
                },
                {
                    date: '2011 Post-UBL Raid',
                    title: 'Younis Al-Mauritani Capture',
                    description: linkifyEntities('Pakistan stops issuing visas after Bin Laden raid. Sarah Adams and one other woman deployed (had valid visas). Al-Mauritani is Al-Qaeda external operations commander (equivalent to KSM). CIA-ISI relations crisis - station "like a ghost town." Chief of Liaison: "I don\'t talk to ISI. I don\'t have their phone number. <strong>I\'m only here to play tennis.</strong>" Adams calls ISI directly from old notebook. ISI officer makes deal: Tell us if going after Zawahiri in Pakistan. <strong>Adams shakes hand (had no authority).</strong> Operation successful - Younis captured at location verified using decade-old CIA debriefing intelligence from 2002-2003.')
                },
                {
                    date: 'September 9, 2012',
                    title: 'Militia Security Withdrawal - Critical Warning',
                    description: linkifyEntities('<strong>Two days before attack:</strong> Three most powerful militias in Benghazi withdraw security: 17th February Brigade (U.S. paying them for protection), Rafallah al-Sahati (Ansar al-Sharia Benghazi commander), and third militia. All explicitly state won\'t protect consulate anymore. <strong>"Nobody pieced it together."</strong> Ambassador Stevens\' trip should have been canceled.')
                },
                {
                    date: 'September 11-12, 2012',
                    title: 'Benghazi Attacks',
                    description: linkifyEntities('<strong>150 terrorists</strong> (75 direct assault, 75 cordon) assault diplomatic compound. Directly orchestrated by Ayman al-Zawahiri for revenge. PRIMARY GOAL: Kidnapping operation for prisoner swaps (Adel al-Shalali, Blind Sheikh, Abu Faraj al-Libi, Aafia Siddiqui). <strong>THE 17-MINUTE DELAY:</strong> CIA Chief "Bob" calls 17th February (who sent ~25 terrorists to attack), lies to GRS team claiming waiting for their help. GRS ready to leave 9:48 PM. Fire on villa started ~10:10 PM. GRS finally leaves ~10:05 PM. "Mathematically they would have been there before the fire started." Deaths: Ambassador Chris Stevens (smoke inhalation), Sean Smith. <strong>SEPARATE CIA ANNEX ATTACK:</strong> Wasam bin Hamid (opportunist, not Al-Qaeda plan) overhears call about Team Tripoli coming. Quote: "I\'m going to kill all the Americans tonight." Holds Team Tripoli at airport 1:30-5:05 AM. Releases them at 5:05 AM. First mortar hits 5:17 AM (12 minutes later). Deaths: Tyrone Woods, Glen Doherty. <strong>MILITARY RESPONSE FAILURES:</strong> DOD not positioned despite Sept 11 being known high-risk date. EUCOM CIF on training mission in Croatia without airplane. Two teams deployed - both to Italy, not Libya. 5:00 AM directive sends nothing to Benghazi. Hillary Clinton changed FAST team four times (uniforms, aircraft, clearances) - all debates unnecessary as General Housi gave blanket authority immediately. Fighter jets never even considered. Obama told SecDef "use all means" then got on plane to Las Vegas to see Beyoncé and Jay-Z. <strong>THE VIDEO LIE:</strong> Jake Sullivan (current NSA 2023) created false video narrative. Video came out Spring 2011, translated August 2012. Egypt protest organizers were Benghazi planners (Al-Zawahiri\'s brother, Mokhtar Salem). Video went viral Sept 13 (two days AFTER attack) only because policymakers used it. NSA cut-and-pasted press comment, marked Top Secret SCI. Hillary Clinton emailed daughter stating it was Al-Qaeda in real time. <strong>BOB\'S CONSEQUENCES:</strong> Given "most senior award in CIA." Sent back to farm as trainer. Never held accountable.')
                }
            ]
        },
        {
            id: 'post-benghazi',
            title: 'Post-Benghazi & Building Toward 2021 (2013-2020)',
            events: [
                {
                    date: '2013',
                    title: 'Taliban Political Office Established',
                    description: linkifyEntities('Taliban political office established in Qatar. <strong>U.S. funding begins: At least $10 million per month.</strong> Operating expenses paid by U.S. Continuous funding from 2013 to present (11+ years). Separate from weekly Kabul deliveries.')
                },
                {
                    date: '2014-2017',
                    title: 'Benghazi War',
                    description: linkifyEntities('Wasam bin Hamid takes over al-Qaeda Benghazi (late 2014/early 2015). General Haftar leads LNA against terrorists. AQIM head issues call: "Go to Benghazi and fight with Wasam." It worked - survived 14+ months from international reinforcements. <strong>Casualties: 8,000 soldiers killed, 20,000 civilians killed.</strong> Demonstrates Al-Qaeda power level reached from late 2011 to 2014.')
                },
                {
                    date: '2015-2016',
                    title: 'Sarah Adams Joins Benghazi Committee',
                    description: linkifyEntities('Trey Gowdy recruits Adams from CIA. Adams initially: "Hell no." Gowdy: "I\'ll let you live in Tampa." Adams: "Okay, now we\'re speaking." On paper Adams registered Democrat. Democrats discovered this, "came at me like there\'s no tomorrow." Theory: Trey hired Democrat to cover up Benghazi Annex moving weapons to Syria. Adams: Zero Stingers in Libya - only Russian SA-7s, SA-9s. Democrats barred her from working first two months, tried CIA removal, threatened report release. Elijah Cummings intervened, stopped attacks. <strong>THE ELEVATOR MOMENT:</strong> Month three, analyst in shop that should work Benghazi: "I wouldn\'t touch that with a 10-foot pole." Adams realization: <strong>"The CIA is not going after the Benghazi attackers. That\'s the day we decided to do our own investigation and track them down ourselves."</strong>')
                },
                {
                    date: 'January 2017',
                    title: 'Benghazi War Ends',
                    description: linkifyEntities('Wasam bin Hamid killed in LNA/UAE mortar strike. Suffered ~10 days before dying. Al-Qaeda lied about death for weeks. Once truth known: Benghazi fell. Al-Qaeda lost base, haven\'t regained. When Wasam died, head of Hamas called family. Abdullah Azzam\'s son ("Godfather of al-Qaeda") called.')
                },
                {
                    date: 'July 2018',
                    title: 'Visa Scandal - Wasam\'s Brother',
                    description: linkifyEntities('<strong>Wasam bin Hamid\'s brother</strong> applied for U.S. visa. Multimillionaire terrorist financier in Turkey. Profile stated joined ISIS in 2015. Known al-Qaeda and ISIS affiliated. <strong>Visa was GRANTED.</strong> Went to airport to fly to America. Turkish authorities stopped him (on Turkish list). U.S. didn\'t stop him, Turkey did. Adams: "Are you serious? This wasn\'t some long time ago. 2018."')
                },
                {
                    date: '2019',
                    title: 'Hamza bin Laden "Death"',
                    description: linkifyEntities('Hamza bin Laden reported dead in strike. U.S. maintains this position. Five months later: Afghan officials reportedly found he didn\'t die, provided picture to U.S. government. Where picture went: unknown. September 2021: Person ensuring information got out that Hamza alive <strong>"captured, tortured, and killed by Taliban."</strong> "People are dying trying to tell us."')
                },
                {
                    date: 'January 2020',
                    title: 'Qasem Soleimani Killed',
                    description: linkifyEntities('Iraq. U.S. drone strike ordered by President Trump. IRGC General, head of Quds Force. <strong>Personally oversaw Al-Qaeda protection.</strong> Protected: Hamza bin Laden, Saif al-Adel, Benghazi plotters. "Symbol of the Iranian Revolution - like our Capitol or Statue of Liberty." Iranian response planning begins. <strong>Hamza bin Laden\'s response:</strong> Left Iran after Soleimani\'s death. Reasoning: If Iran couldn\'t keep Soleimani safe, couldn\'t keep him safe. Moved to Pakistan (Waziristan).')
                },
                {
                    date: 'March 2020',
                    title: 'ISIS-KP Shura Meeting Raided',
                    description: linkifyEntities('Kandahar. Conducted by Commando Sami Sadat. Result: 38 arrested (all senior ISIS-KP leadership). Four Russian women captured.')
                },
                {
                    date: '2020',
                    title: 'ISIS Real Leadership Relocates to Pakistan',
                    description: linkifyEntities('Test: Sent 200 to Panjgur, Beluchistan, Pakistan. Declared safe. <strong>Moved all senior ISIS leadership to Beluchistan</strong> (Panjgur area). Strategic reasons: Access to sea, Balochi support attacks on Iran, Balochi have Iranian/Pakistani/Afghan citizenship (move freely), run all routes. All ISIS committees now based in Panjgur: Shura, Operational, Leadership, Media. De facto head: Sanullah Ghafari (Haqqani plant).')
                }
            ]
        },
        {
            id: 'afghanistan-withdrawal',
            title: 'Afghanistan Withdrawal Crisis (2021)',
            events: [
                {
                    date: 'July 1, 2021',
                    title: 'Bagram Abandoned',
                    description: linkifyEntities('<strong>U.S. snuck out of Bagram Air Base in middle of night.</strong> Did not tell commander of Bagram. Commander arrived in morning - Taliban and terrorists breaking prisoners out. <strong>Abbey Gate bomber Abdul Rahim Sangari released.</strong> Background: 2017 ISIS deployed him to New Delhi as engineering student to case targets (airport, shopping mall). 2017 captured by Indians or CIA. 2017-2021 held in Bagram prison. <strong>Chinese and Iranian assistance:</strong> Help Taliban get biometric systems working, deploy on mobile devices at borders and checkpoints.')
                },
                {
                    date: 'August 13, 2021',
                    title: 'NEO Announced',
                    description: linkifyEntities('U.S. announces Non-Combatant Evacuation Operation. Taliban and ISIS-K leadership learn timeline.')
                },
                {
                    date: 'August 15, 2021',
                    title: 'Kabul Falls to Taliban',
                    description: linkifyEntities('Taliban takes control of Kabul. Two days after NEO announcement.')
                },
                {
                    date: 'August 18, 2021',
                    title: 'Abbey Gate Planning Meeting',
                    description: linkifyEntities('Kandahar, Afghanistan. <strong>3 days after Sangari\'s release.</strong> Senior ISIS-K and Haqqani leadership present. Attack planned in this meeting. Same location later used for October 7th planning.')
                },
                {
                    date: 'August 21, 2021',
                    title: 'Gate Security Arranged',
                    description: linkifyEntities('Haqqani Network chooses three senior commanders. Their role: Man gates and allow bomber through.')
                },
                {
                    date: 'August 23, 2021',
                    title: 'Security Forces Shifted',
                    description: linkifyEntities('Taliban shift security from North Gate to Abbey Gate. Deliberately concentrating forces where bombing planned. Goal: Maximize casualties.')
                },
                {
                    date: 'August 26, 2021',
                    title: 'Abbey Gate Attack',
                    description: linkifyEntities('<strong>Over 170 Afghans killed. 13 U.S. service members killed.</strong> Tyler Vargas Andrews (Marine) had bomber in sights. Haqqani Network controlled all external security. ISIS-KP leader: Shahab al-Muhajir (later captured). New leader: Sultan Aziz Azam (aka "Sanaullah"/"Sa\'ad") - Haqqani Network member since 2012, was head of Haqqani in Kabul. <strong>Demonstrates Haqqani control of ISIS-K.</strong> Haqqani overall leader Sirajuddin Haqqani approved operation. Hafiz Zahir Hamidi told bomber "you\'re in good spot now, blow." 12 terrorists identified total: 7 Haqqani Network, 5 ISIS. Timeline: Aug 13 NEO announced, Aug 15 bomber released, Aug 18 bomber in planning meeting (3 days after release), Aug 26 attack executed. <strong>Only 11 days from release to attack.</strong> CENTCOM investigation (3.5 years, released April 2024): Never identified bomber\'s true name, stated "Abdul Rahman al-Logari - that\'s a Kunya or alias." Sarah Adams investigation (April-August 2024, 4 months): Found true name - Abdul Rahim Sangari.')
                },
                {
                    date: 'Post-Withdrawal',
                    title: 'Afghan Allies - The Numbers (as of late 2023)',
                    description: linkifyEntities('<strong>Total: 200,000</strong> Afghan military and police worked with U.S. <strong>Killed: Just over 10,000</strong> (in 2.5 years). Context: Under 2,500 Americans died in 20+ years. <strong>Captured: 30,000</strong> (18,000 went through Taliban Sharia Court, 12,000 completely missing). <strong>Total Missing Afghans: 70,000</strong> (disappeared when Taliban came, never seen again). Secret prisons: GDI, Ministry of Interior, Ministry of Defense, Bagram base, Helmand. <strong>Women casualties (last 2.5 years): 880,000 reported rapes, 15,000 children reported rapes.</strong> Most "prisoners in own house, can\'t report." When Afghanistan fell: 27% of Parliament was women. U.S.: 29%. "Got to equal par to us in 20 years." Current status: Zero rights, living in prison.')
                },
                {
                    date: 'Post-Withdrawal',
                    title: 'Biometric Systems - Hunting Allies',
                    description: linkifyEntities('U.S. left complete biometric database at Ministry of Interior. Taliban strategy: Take property, homes, businesses, land. Cut power (some cut 2 years ago, refuse restore). First year Taliban didn\'t have biometrics working, faked it. <strong>Chinese and Iranian help: Got system working, deploy on mobile devices.</strong> Current deployment: Border crossings, checkpoints. Databases working: Entire passport database, entire criminal database, entire police system (Ministry of Interior and Army), entire pay system for NDS (Afghan CIA), entire pay system for Supreme Court. Targeting method: Using pay systems to find allies. "They know they have right guy because tied to payroll." Can change name but fingerprint reveals identity. "Greatest case of targeting I\'ve ever seen." Fully running for at least 6 months. <strong>"These guys don\'t have a chance. We left them for slaughter."</strong>')
                },
                {
                    date: 'Post-Withdrawal',
                    title: 'Intelligence Asset Betrayal',
                    description: linkifyEntities('CIA gave asset a phone number, told to call when reaching Kabul airport: "We\'ll get you evacuated." What happened: <strong>One-way number to voicemail answering service. No human ever answers.</strong> Asset called repeatedly. No one ever called back. "Then one day they turned it off." No way to ever re-contact. Result: Asset stranded, CIA has no way to reconnect. Former assets collecting information, won\'t share with U.S. <strong>Will share with Israel instead.</strong> "We\'ll never pass it to the United States." Scott Mann: "Allies we abandoned hate the CIA." Collection loss: "99% of intelligence collection" lost. Rely on Taliban for information (enemies). Cannot verify anything. No independent sources.')
                }
            ]
        },
        {
            id: 'oct7-planning',
            title: 'October 7th Planning & Islamic Army (2022-2024)',
            events: [
                {
                    date: 'March 2022',
                    title: 'October 7th Planning Begins',
                    description: linkifyEntities('Russia invaded Ukraine (February 2022). Terrorists believe world focus on Ukraine creates opportunity. Terrorists contact Russia: "Is timing okay?" <strong>Russia response: "Go for it, go for it, go for it."</strong> Russia wanted distraction from Ukraine war. Original target date: October 7, 2022 (one year earlier than actual attack).')
                },
                {
                    date: 'July 31, 2022',
                    title: 'Zawahiri Killed - Attack Delayed',
                    description: linkifyEntities('U.S. drone strike killed Ayman al-Zawahiri in Kabul. Staying at house owned by Sirajuddin Haqqani. Al-Qaeda feared U.S. would bomb all Afghanistan locations. Reached out to Russia requesting continued pressure for 2022 attack. Russia: "No, do it in 2022, don\'t wait. I need pressure off me for Ukraine." Al-Qaeda decision: Delayed to 2023 anyway. <strong>Attack delayed exactly one year.</strong> Gave attackers additional year of training. <strong>Zawahiri death questions:</strong> 14 months after reported death (as of Oct 2023), Al-Qaeda has not officially eulogized him. Al-Qaeda never fakes eulogies. Adams: <strong>"Until I see Al-Qaeda eulogize him I\'m having a hard time believing he\'s dead."</strong>')
                },
                {
                    date: 'August 7, 2022',
                    title: 'October 7th Training Begins',
                    description: linkifyEntities('<strong>Date significance:</strong> Anniversary of 1998 Tanzania/Kenya embassy bombings. Originally planned: 500 fighters, 2 months training (Aug 7 - Oct 7, 2022). Actually occurred: 1,500 fighters, over 1 year training (Aug 2022 - Oct 2023). Delay improved training quality. Training location: Afghanistan camps (30 Al-Qaeda training camps total, 7 suicide bomber specific).')
                },
                {
                    date: '2022-2024',
                    title: 'Islamic Army Formation',
                    description: linkifyEntities('Created under Hamza bin Laden\'s leadership. Fulfills Osama bin Laden\'s original vision. <strong>Overall Leader: Hamza bin Laden</strong> (currently Afghanistan, U.S. falsely claims dead, $1M reward). <strong>Military Commander: Hamza al-Ghamdi</strong> (former Osama bodyguard, $5M reward). Brothers: Abdullah bin Laden (operations/training camps), Saad bin Laden (deputy leader Al-Qaeda). <strong>Revolutionary: Sunni AND Shia.</strong> Members: Al-Qaeda, ISIS (including ISIS-K), Taliban, Hamas, Hezbollah, Iranian IRGC, any group willing. <strong>120,000 people trained under Islamic Army umbrella.</strong> New recruits emerge identified as "Islamic Army." Strategic advantage: Confuses intelligence collection, prevents accurate attribution. <strong>Territorial agreements:</strong> Al-Qaeda gave up desire to directly control territory, seeks political power instead. ISIS can run parts of Syria and Iraq. Lebanon ops: Al-Qaeda/Hezbollah joint plot, only Hezbollah will claim. Syria ops: Al-Qaeda supported Jolani\'s blitz with 10,000 fighters, Taliban provided training, no public acknowledgment.')
                },
                {
                    date: 'October 7, 2023',
                    title: 'Hamas Attack on Israel',
                    description: linkifyEntities('1,400-1,500 attackers trained in Afghanistan execute coordinated attack. Based on Mumbai model. <strong>Planning locations:</strong> First meeting Kandahar (Saif al-Adel chose date Oct 7th for Afghanistan connection), second meeting Kabul, subsequent via Telegram. <strong>Key participants:</strong> Al-Qaeda (overall planning, Saif al-Adel), Taliban (Hibatullah Akhundzada issued fatwa authorizing attack, provided camps), Iran/IRGC (Mohammad Kazemi key plotter/operations coordinator, not on FBI Most Wanted List - major failure), Hamas (ground execution). <strong>Tactics:</strong> Swarming attacks (multiple simultaneous targets), suicide bombers and fedayeen fighters, real-time intelligence/coordination, target changes during operation, extended engagement (fight to death). First in series targeting Israel, Europe, United States. <strong>"That\'s just the test run"</strong> for tactics to be used against U.S.')
                },
                {
                    date: '2023-2024',
                    title: 'Training & Preparation for U.S. Attacks',
                    description: linkifyEntities('<strong>Camp network:</strong> 30 Al-Qaeda training camps in Afghanistan (7 suicide bomber training exclusively, 23 general training). Some segregated by ethnicity. <strong>Training numbers:</strong> Oct 7th (Israel): 1,500 fighters, 14+ months. Syria deployment: 10,000 fighters. U.S. homeland attack: 1,000 fighters claimed by Al-Qaeda (Adams believes higher). Europe attack: Separate 1,000 fighters. Total recent: ~13,500 trained. Islamic Army total: ~120,000 overall. <strong>Training types for U.S.:</strong> (1) Advanced urban warfare - extended program, high proficiency, team coordination. (2) Suicide bombing - specialized camps, "invisible bomb vest" defeats magnetometers and K-9 detection. (3) Cover and covert operations - don\'t mention Afghanistan/Al-Qaeda, use fake names even in training, terrorists don\'t know each other\'s real names. Taliban posted professional training video that "scared the shit out of" Shawn Ryan - and that was Taliban, not Al-Qaeda (phones banned, even higher level).')
                },
                {
                    date: 'December 2023',
                    title: 'Invisible Bomb Vest Highlighted',
                    description: linkifyEntities('Developed by Al-Qaeda in Arabian Peninsula (Yemen branch). Capabilities: Passes through standard airport magnetometers, components not detectable by trained explosive-sniffing dogs, worn concealed under clothing, terrorist can enter secure facilities undetected. Video demonstration released December 2023, quickly removed. <strong>TSA ignored demonstration\'s implications.</strong> Significance: Most U.S. buildings unprepared, standard security ineffective, increases vulnerability of all soft targets. "We have not had a man walk up to a building with a suicide vest on in the United States. Americans don\'t understand this. Al-Qaeda knows this. New and innovative for American context. Can walk inside buildings now (not just outside)."')
                },
                {
                    date: '2024',
                    title: 'All Deployments Complete',
                    description: linkifyEntities('Al-Qaeda achieves unity across all terrorist groups. 10,000 fighters deployed to Syria (completed). Training center built in every Afghan province. More powerful than pre-9/11 levels. <strong>All U.S. homeland attackers trained and deployed.</strong>')
                }
            ]
        },
        {
            id: 'predictions-2025',
            title: 'Current Status & 2025 Predictions',
            events: [
                {
                    date: '2025 (Predicted)',
                    title: 'U.S. Homeland & Embassy Attacks',
                    description: linkifyEntities('<strong>Adams: "I\'m certain we\'ll either have embassy attacks in 2025 or Homeland attack or both."</strong> 1,000+ trained terrorists. Multiple cities simultaneously. October 7th/Mumbai-style swarming. <strong>Predicted 50,000-60,000 American casualties.</strong> Attack will be falsely attributed to ISIS. <strong>Entry methods:</strong> Southern border (primary - through Darien Gap, fake Afghan/Syrian/Turkish passports, U.S. Border Patrol can\'t identify fake docs). Legal immigration (Al-Qaeda preference - "clean" terrorists from Saudi/Kuwait/Jordan with tourist visas, goal: "embarrass system again like 9/11 attackers"). Refugee pipeline ("very dangerous" - Afghan passport now "extremely powerful," terrorists given official passports with fake names like Libya precedent). Testing the system: "Some still doing border to see if they can do it and test it." <strong>Warning signs ignored:</strong> People observed Hamas training in Afghanistan, reports provided to Israeli government before attack, no action taken. Adams: "I worry because same things being passed to our government. They\'re not taking it serious." Foreign intelligence confirmation: European service contacted Adams - "Your report is spot-on. That\'s what we have." <strong>Governor Ron DeSantis: "I\'ve received no threat reporting at all on terrorism from federal government."</strong> First responders unprepared for tactics, no training for Oct 7th-style attacks.')
                }
            ]
        }
    ];

    // Create main timeline container with center line
    const timelineWrapper = document.createElement('div');
    timelineWrapper.className = 'vertical-timeline-wrapper';

    // Add center line
    const centerLine = document.createElement('div');
    centerLine.className = 'timeline-center-line';
    timelineWrapper.appendChild(centerLine);

    let eventIndex = 0;

    // Render each period
    periods.forEach(period => {
        // Period marker on the timeline
        const periodMarker = document.createElement('div');
        periodMarker.className = 'period-marker';
        periodMarker.innerHTML = `
            <div class="period-marker-dot"></div>
            <div class="period-marker-label">${period.title}</div>
        `;
        timelineWrapper.appendChild(periodMarker);

        // Render events alternating left/right
        period.events.forEach((event) => {
            const side = eventIndex % 2 === 0 ? 'left' : 'right';
            const severity = getSeverityClass(event.title, event.description);

            const eventElement = document.createElement('div');
            eventElement.className = `timeline-item timeline-item-${side} ${severity}`;

            eventElement.innerHTML = `
                <div class="timeline-content-box">
                    <div class="timeline-date-badge">${event.date}</div>
                    <h4 class="timeline-event-title">${event.title}</h4>
                    <div class="timeline-event-text">${event.description}</div>
                </div>
                <div class="timeline-dot"></div>
            `;

            timelineWrapper.appendChild(eventElement);
            eventIndex++;
        });
    });

    container.appendChild(timelineWrapper);

    // Add critical warnings
    const patternWarning = createInfoBox(
        'Critical Timeline Pattern - Libya Model Repeating',
        linkifyEntities('Libya timeline after Gaddafi fell (Oct 2011): <strong>November 2011</strong> - Al-Qaeda enters. <strong>September 2012</strong> - Benghazi attacks (less than 1 year). <strong>2014-2017</strong> - War against them (powerful enough for 3-year war, 28,000 killed). <strong>This exact pattern is repeating in Afghanistan post-2021 withdrawal.</strong> Afghanistan is "a year away" from Libya levels. Already "probably bigger than 9/11" and will surpass Al-Qaeda in Iraq.'),
        'warning'
    );
    container.appendChild(patternWarning);

    const dateNote = createInfoBox(
        'Understanding Date Selection',
        linkifyEntities('Terrorists choose dates based on historical significance to them, not to us. <strong>September 11, 1922:</strong> British Mandate began. <strong>October 7, 2001:</strong> U.S. began bombing Kandahar. Most Americans and government officials don\'t recognize these connections. There are many potential attack dates from 20 years of Afghanistan/Iraq wars, Syria events, terrorist martyrs, and historical grievances going back 100+ years.'),
        'info'
    );
    container.appendChild(dateNote);
};

// Helper function to determine severity class based on event content
function getSeverityClass(title, description) {
    const lowerTitle = title.toLowerCase();
    const lowerDesc = description.toLowerCase();

    // Critical events (attacks, deaths, failures)
    if (lowerTitle.includes('attack') || lowerTitle.includes('killed') ||
        lowerTitle.includes('bombing') || lowerTitle.includes('death') ||
        lowerDesc.includes('killed') || lowerTitle.includes('abandoned')) {
        return 'severity-critical';
    }

    // High severity (warnings, formations, captures)
    if (lowerTitle.includes('warning') || lowerTitle.includes('formation') ||
        lowerTitle.includes('planning') || lowerTitle.includes('training') ||
        lowerTitle.includes('deployed')) {
        return 'severity-high';
    }

    // Medium severity (political events, transitions)
    if (lowerTitle.includes('reconciliation') || lowerTitle.includes('office') ||
        lowerTitle.includes('capture') || lowerTitle.includes('joins')) {
        return 'severity-medium';
    }

    // Default
    return 'severity-default';
}
