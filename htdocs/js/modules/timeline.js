// Timeline Module - Key Historical Events

window.renderTimeline = function(container) {
    container.innerHTML = '';

    const intro = createInfoBox(
        'Historical Timeline',
        'Key events in the evolution of Al-Qaeda and Taliban operations, from the Soviet-Afghan War to predicted 2025 attacks.',
        'info'
    );
    container.appendChild(intro);

    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline';

    const events = [
        {
            date: '1979-1989',
            title: 'Soviet-Afghan War',
            description: 'Foundation of the mujahideen network. Future Al-Qaeda leaders including Osama bin Laden, Ayman al-Zawahiri, and multiple Benghazi attackers fight together against Soviet occupation.'
        },
        {
            date: '1998',
            title: 'Embassy Bombings',
            description: 'Tanzania and Kenya U.S. Embassy bombings masterminded by Abu Anas al-Libi. This date (August 7) would later be used as the anniversary to start October 7th training in 2022.'
        },
        {
            date: 'September 11, 2001',
            title: '9/11 Attacks',
            description: 'Al-Qaeda attacks U.S. homeland. Date chosen for historical significance: September 11, 1922 was when the British Mandate began - the first time a Westerner was put in charge of Palestinian mandate.'
        },
        {
            date: 'October 7, 2001',
            title: 'Operation Enduring Freedom',
            description: 'U.S. begins carpet bombing Kandahar. This date becomes a key anniversary that terrorists commemorate - the direct reason October 7, 2023 was chosen for Hamas attacks.'
        },
        {
            date: 'November 2008',
            title: 'Mumbai Attacks',
            description: 'Lashkar-e-Taiba conducts coordinated attacks across Mumbai. The attack methodology becomes the template for future operations: swarming multiple locations, real-time intelligence, extended duration engagements.'
        },
        {
            date: 'January 2010',
            title: 'Mullah Baradar Captured',
            description: 'Sarah Adams leads operation to capture Taliban co-founder Mullah Baradar. Immediately becomes focus of reconciliation efforts. Adams regret: "If I went back in time I never would have captured him. He is the reason the whole country fell."'
        },
        {
            date: 'June 2011',
            title: 'Zawahiri Deputies Killed',
            description: 'Two of Zawahiri\'s last deputies killed in U.S. drone strikes in Pakistan. Zawahiri\'s response: "Enough\'s enough, we\'re going to take it to the Americans in Libya" - direct motivation for Benghazi attacks.'
        },
        {
            date: 'November 2011',
            title: 'Al-Qaeda Enters Benghazi',
            description: 'Just weeks after Gaddafi falls, Al-Qaeda establishes real base in Benghazi. Less than one year later: Benghazi attacks. This timeline becomes template for understanding Afghanistan regeneration.'
        },
        {
            date: 'September 11-12, 2012',
            title: 'Benghazi Attacks',
            description: '150 terrorists assault U.S. diplomatic compound in coordinated kidnapping operation. Directly orchestrated by Ayman al-Zawahiri in revenge for drone strikes. 17-minute delay by CIA chief allowed fire to start that killed Americans.'
        },
        {
            date: 'July 1, 2021',
            title: 'Bagram Abandoned',
            description: 'U.S. secretly abandons Bagram Air Base in the middle of night without telling Afghan commander. Abbey Gate bomber Abdul Rahim Sangari released. Chinese and Iranians help Taliban activate biometric systems to hunt U.S. allies.'
        },
        {
            date: 'August 26, 2021',
            title: 'Abbey Gate Attack',
            description: 'Joint ISIS-K and Haqqani Network attack kills 170+ Afghans and 13 U.S. service members. Bomber released from Bagram only 11 days earlier. Haqqani controlled all security and deliberately concentrated casualties. ISIS-K leader is actually Haqqani plant.'
        },
        {
            date: 'August 7, 2022',
            title: 'October 7th Training Begins',
            description: 'Training starts for Hamas October 7th attack in Afghanistan. Date chosen for significance: anniversary of 1998 embassy bombings. Originally 500 fighters for 2 months, expanded to 1,400-1,500 for over a year after Zawahiri strike delayed operation.'
        },
        {
            date: 'October 7, 2023',
            title: 'Hamas Attack on Israel',
            description: '1,400-1,500 attackers trained in Afghanistan execute coordinated attack. Based on Mumbai model. First in series targeting Israel, Europe, and United States. "That\'s just the test run" for tactics to be used against U.S.'
        },
        {
            date: '2024',
            title: 'Islamic Army Formation Complete',
            description: 'Al-Qaeda achieves unity across all terrorist groups. 10,000 fighters deployed to Syria (completed). Training center built in every Afghan province. More powerful than pre-9/11 levels. All U.S. homeland attackers trained and deployed.'
        },
        {
            date: '2025 (Predicted)',
            title: 'U.S. Homeland & Embassy Attacks',
            description: 'Adams: "I\'m certain we\'ll either have embassy attacks in 2025 or Homeland attack or both." 1,000+ trained terrorists. Multiple cities simultaneously. October 7th/Mumbai-style swarming. Predicted 50,000-60,000 American casualties. Attack will be falsely attributed to ISIS.'
        }
    ];

    events.forEach((event, index) => {
        const eventEl = createTimelineEvent(event, index);
        timelineContainer.appendChild(eventEl);
    });

    container.appendChild(timelineContainer);

    // Add prediction warning
    const warning = createInfoBox(
        'Critical Timeline Pattern',
        'Libya timeline after Gaddafi fell (Oct 2011): November 2011 - Al-Qaeda enters. September 2012 - Benghazi attacks (less than 1 year). 2014-2017 - War against them (powerful enough for 3-year war). <strong>This exact pattern is repeating in Afghanistan post-2021 withdrawal.</strong> Afghanistan is "a year away" from Libya levels. Already "probably bigger than 9/11" and will surpass Al-Qaeda in Iraq.',
        'warning'
    );
    container.appendChild(warning);

    // Add date significance note
    const dateNote = createInfoBox(
        'Understanding Date Selection',
        'Terrorists choose dates based on historical significance to them, not to us. September 11, 1922: British Mandate began. October 7, 2001: U.S. began bombing Kandahar. Most Americans and government officials don\'t recognize these connections. There are many potential attack dates from 20 years of Afghanistan/Iraq wars, Syria events, terrorist martyrs, and historical grievances going back 100+ years.',
        'info'
    );
    container.appendChild(dateNote);
};
