// About Module - Explains the purpose and context of this site

window.renderAbout = function(container) {
    container.innerHTML = '';

    const section = document.createElement('div');
    section.className = 'about-page';

    section.innerHTML = `
        <div class="section-header">
            <h2>About This Site</h2>
            <p class="section-subtitle">Understanding the Purpose and Context</p>
        </div>

        <div class="about-content">
            <div class="info-box">
                <div class="info-box-title">Why This Site Exists</div>
                <p>
                    This website serves as a comprehensive visual analysis and reference tool for understanding
                    the current terrorist threat landscape facing the United States and its allies. It transforms
                    hours of detailed intelligence testimony into an accessible, interconnected knowledge base.
                </p>
                <p>
                    The information presented here is drawn entirely from <strong>open-source interviews</strong>
                    with Sarah Adams, a former CIA counterterrorism officer and targeter, during her appearances
                    on the Shawn Ryan Show. These interviews represent one of the most detailed public disclosures
                    of current terrorist operations, networks, and threats ever provided.
                </p>
            </div>

            <div class="info-box warning">
                <div class="info-box-title">The Critical Problem</div>
                <p>
                    Despite the detailed intelligence warnings provided by experts like Sarah Adams, there is a
                    <strong>critical disconnect</strong> between what intelligence professionals know and what
                    the American public—and even many government officials—understand about current threats.
                </p>
                <p>Key issues this site addresses:</p>
                <ul style="margin-left: 2rem; color: var(--text-secondary);">
                    <li style="margin: 0.5rem 0;">Information is scattered across hours of podcast interviews</li>
                    <li style="margin: 0.5rem 0;">Complex relationships and timelines are difficult to visualize</li>
                    <li style="margin: 0.5rem 0;">Critical details are lost in the volume of information</li>
                    <li style="margin: 0.5rem 0;">First responders lack training on these specific threats</li>
                    <li style="margin: 0.5rem 0;">State and local officials receive no threat briefings from federal government</li>
                </ul>
            </div>

            <div class="key-findings">
                <h3>What This Site Provides</h3>
                <div class="findings-grid">
                    <div class="finding-card">
                        <h4>Visual Timeline</h4>
                        <p>
                            A comprehensive chronological view of events from 1979 to present, showing how
                            today's threats evolved from decades of policy decisions, intelligence failures,
                            and terrorist adaptation.
                        </p>
                    </div>
                    <div class="finding-card">
                        <h4>Network Mapping</h4>
                        <p>
                            Clear visualization of terrorist organizational structures, leadership hierarchies,
                            and the unprecedented unification of Al-Qaeda, Taliban, ISIS, Hamas, and Hezbollah
                            under the Islamic Army.
                        </p>
                    </div>
                    <div class="finding-card">
                        <h4>Financial Flows</h4>
                        <p>
                            Documentation of how U.S. taxpayer money flows directly to terrorist organizations,
                            including $44-87 million weekly payments and the mechanisms by which this funding
                            continues despite designation as terrorist entities.
                        </p>
                    </div>
                    <div class="finding-card">
                        <h4>Geographic Analysis</h4>
                        <p>
                            Mapping of training camps, safe havens, operational zones, and the specific locations
                            where threats to the U.S. homeland are being prepared.
                        </p>
                    </div>
                    <div class="finding-card">
                        <h4>Entity Glossary</h4>
                        <p>
                            Detailed profiles of key individuals, organizations, locations, and events with
                            cross-referenced connections to understand the full picture.
                        </p>
                    </div>
                    <div class="finding-card">
                        <h4>Attack Analysis</h4>
                        <p>
                            Case studies of past operations (Benghazi, Abbey Gate, October 7th) that reveal
                            patterns, methods, and the template for future attacks.
                        </p>
                    </div>
                </div>
            </div>

            <div class="data-sources">
                <h3>Primary Sources</h3>
                <p>All information on this site is derived from the following open-source interviews:</p>
                <ul>
                    <li><strong>Episode 81</strong> (October 2023) - Initial threat assessment and October 7th analysis</li>
                    <li><strong>Episode 81.2</strong> (November 2023) - Extended discussion of Islamic Army formation</li>
                    <li><strong>Episode 116</strong> - Benghazi detailed investigation and intelligence failures</li>
                    <li><strong>Episode 149</strong> (December 2024) - Current status and 2025 predictions</li>
                </ul>
                <p style="margin-top: 1rem;">
                    <strong>Sarah Adams</strong> is a former CIA counterterrorism officer who specialized in
                    targeting terrorist networks. Her work includes the capture of Mullah Baradar, investigations
                    into Benghazi attacks, and ongoing independent tracking of threats that U.S. intelligence
                    agencies are not pursuing.
                </p>
            </div>

            <div class="info-box danger">
                <div class="info-box-title">The Urgency</div>
                <p>
                    According to the intelligence presented here, <strong>1,000+ trained terrorists</strong>
                    have been deployed for attacks on U.S. soil. The predicted casualty count is
                    <strong>50,000-60,000 Americans</strong>, with attacks expected in <strong>2025</strong>.
                </p>
                <p>
                    These warnings mirror those ignored before October 7th attacks on Israel—where people
                    reported seeing Hamas training in Afghanistan, and Israeli government took no action.
                    The same intelligence is being provided to U.S. government with the same lack of response.
                </p>
                <p style="margin-top: 1rem; font-weight: bold;">
                    "I'm certain we'll either have embassy attacks in 2025 or Homeland attack or both."
                    <br><span style="font-weight: normal; font-style: italic;">— Sarah Adams, December 2024</span>
                </p>
            </div>

            <div class="about-content">
                <h3>Methodology</h3>
                <p>This site organizes the information using the following approach:</p>
                <ul style="margin-left: 2rem; color: var(--text-secondary); line-height: 1.8;">
                    <li style="margin: 0.75rem 0;">
                        <strong style="color: var(--text-primary);">Comprehensive transcription:</strong>
                        All claims and details from source interviews are documented
                    </li>
                    <li style="margin: 0.75rem 0;">
                        <strong style="color: var(--text-primary);">Chronological organization:</strong>
                        Events are placed in historical context to show cause and effect
                    </li>
                    <li style="margin: 0.75rem 0;">
                        <strong style="color: var(--text-primary);">Entity linking:</strong>
                        People, places, organizations, and events are cross-referenced
                    </li>
                    <li style="margin: 0.75rem 0;">
                        <strong style="color: var(--text-primary);">Visual presentation:</strong>
                        Complex information is presented through timelines, charts, and maps
                    </li>
                    <li style="margin: 0.75rem 0;">
                        <strong style="color: var(--text-primary);">Direct quotes:</strong>
                        Key statements are preserved verbatim to maintain accuracy
                    </li>
                </ul>
            </div>

            <div class="info-box">
                <div class="info-box-title">What This Site Is NOT</div>
                <ul style="margin-left: 2rem; color: var(--text-secondary); line-height: 1.8;">
                    <li style="margin: 0.75rem 0;">
                        <strong style="color: var(--text-primary);">Not classified information:</strong>
                        Everything here is from public interviews
                    </li>
                    <li style="margin: 0.75rem 0;">
                        <strong style="color: var(--text-primary);">Not independent analysis:</strong>
                        This site organizes and visualizes Sarah Adams' testimony, not original research
                    </li>
                    <li style="margin: 0.75rem 0;">
                        <strong style="color: var(--text-primary);">Not fear-mongering:</strong>
                        The purpose is informed awareness, not panic
                    </li>
                    <li style="margin: 0.75rem 0;">
                        <strong style="color: var(--text-primary);">Not political advocacy:</strong>
                        The focus is intelligence accuracy, not partisan positions
                    </li>
                </ul>
            </div>

            <div class="about-content">
                <h3>Who Should Use This Site</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
                    <div style="background: var(--card-bg); padding: 1rem; border-radius: 6px; border-left: 3px solid var(--accent-orange);">
                        <strong style="color: var(--accent-orange);">First Responders</strong>
                        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                            Police, fire, EMS who need to understand October 7th-style attack patterns
                        </p>
                    </div>
                    <div style="background: var(--card-bg); padding: 1rem; border-radius: 6px; border-left: 3px solid var(--accent-orange);">
                        <strong style="color: var(--accent-orange);">Local Officials</strong>
                        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                            Mayors, city councils, state officials receiving no federal threat briefings
                        </p>
                    </div>
                    <div style="background: var(--card-bg); padding: 1rem; border-radius: 6px; border-left: 3px solid var(--accent-orange);">
                        <strong style="color: var(--accent-orange);">Journalists</strong>
                        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                            Reporters covering national security who need detailed source material
                        </p>
                    </div>
                    <div style="background: var(--card-bg); padding: 1rem; border-radius: 6px; border-left: 3px solid var(--accent-orange);">
                        <strong style="color: var(--accent-orange);">Concerned Citizens</strong>
                        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                            Americans who want to understand current threats beyond mainstream coverage
                        </p>
                    </div>
                    <div style="background: var(--card-bg); padding: 1rem; border-radius: 6px; border-left: 3px solid var(--accent-orange);">
                        <strong style="color: var(--accent-orange);">Researchers</strong>
                        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                            Academics and analysts studying terrorism, intelligence, and national security
                        </p>
                    </div>
                    <div style="background: var(--card-bg); padding: 1rem; border-radius: 6px; border-left: 3px solid var(--accent-orange);">
                        <strong style="color: var(--accent-orange);">Policy Makers</strong>
                        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                            Congressional staff and officials seeking detailed intelligence context
                        </p>
                    </div>
                </div>
            </div>

            <div class="info-box">
                <div class="info-box-title">Contributing & Contact</div>
                <p>
                    This is an ongoing project to organize and present publicly available intelligence.
                    If you notice errors, have suggestions for better visualization, or want to contribute
                    additional analysis, please reach out through the project repository.
                </p>
                <p style="margin-top: 1rem;">
                    The goal is accuracy and accessibility. This information is too important to remain
                    buried in hours of podcast audio.
                </p>
            </div>

            <div class="alert-box critical" style="margin-top: 2rem;">
                <h3>Final Note</h3>
                <p>
                    The information on this site represents <strong>the most detailed public disclosure of
                    current terrorist threats to the U.S. homeland</strong> available from credible intelligence
                    sources. Whether these warnings are acted upon may determine whether we repeat the failures
                    that led to 9/11, Benghazi, Abbey Gate, and October 7th.
                </p>
                <p style="margin-top: 1rem; font-weight: bold;">
                    The intelligence is available. The question is whether anyone will act on it.
                </p>
            </div>
        </div>
    `;

    container.appendChild(section);
};
