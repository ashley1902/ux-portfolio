import React from 'react';
import './CaseStudy3.css';

function CaseStudy3() {
  return (
    <section className="cs3-hero">
      <div className="cs3-container">
        <h1 className="cs3-title">
          <span>Bas Ek Min — Behaviorally Redesigning an OTT Aggregator</span><br />
        </h1>

        <div className="cs3-metrics">
          <div className="cs3-metric-card">
            <div className="cs3-icon">⏱️</div>
            <div className="cs3-text-content">
              <div className="cs3-label">Duration</div>
              <div className="cs3-value">6 months</div>
            </div>
          </div>
          <div className="cs3-metric-card">
            <div className="cs3-icon">👥</div>
            <div className="cs3-text-content">
              <div className="cs3-label">Team Size</div>
              <div className="cs3-value">Myself (Lead UX Researcher), 1 Designer, 1 PM</div>
            </div>
          </div>
          <div className="cs3-metric-card">
            <div className="cs3-icon">🎯</div>
            <div className="cs3-text-content">
              <div className="cs3-label">Role</div>
              <div className="cs3-value">End-to-end UX research (mixed methods, quant/qual integration, usability testing, clustering)</div>
            </div>
          </div>
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">The Story Behind Bas Ek Min</h2>
          <img src="/all-ss.png" alt="What kind of people" className="cs3-image" />
          <p className="cs3-content-text">
            This project started with a feeling, not a feature.
          </p>
          <p className="cs3-content-text">
            Users were opening the OTT aggregator app, scrolling for a while, and closing it — without watching anything. The metric sheets showed engagement drop-offs. The product team had a simple hypothesis: if people could find something to watch in under a minute, they'd stay.
          </p>
          <p className="cs3-content-text">
            But as I delved into interviews and looked deeper into logs and survey results, the story became more complex — and more human.
          </p>

          <div className="cs3-quote-section">
            <p className="cs3-quote">"I scroll till I find something familiar... or I just close it."</p>
            <p className="cs3-quote-attribution">— User, late 20s, Bangalore</p>
            
            <p className="cs3-quote">"I don't trust the suggestions. I ask my cousin what to watch."</p>
            <p className="cs3-quote-attribution">— User, 34, Ahmedabad</p>
            
            <p className="cs3-quote">"Too many options. I end up watching nothing."</p>
            <p className="cs3-quote-attribution">— User, 21, hostel resident, Mumbai</p>
          </div>

          <p className="cs3-content-text">
            Indu from Ahmedabad said she watches shows while preparing dinner. But if the show is unfamiliar or the title sounds strange, she simply replays old favorites.
          </p>
          <p className="cs3-quote">"I don't want to waste time. I want something I know I'll like."</p>
          
          <p className="cs3-content-text">
            Sameer, a college student in Bangalore, admitted that he rarely uses the watchlist.
          </p>
          <p className="cs3-quote">"I forget what I saved. I just scroll till I give up or find something funny."</p>

          <p className="cs3-content-text">
            This wasn't just a problem of design. This was a problem of decision-making confidence. We needed to reduce emotional friction, not just UI friction.
          </p>
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">Context & Initial Signals</h2>
          <p className="cs3-content-text">
            The app targeted Indian users across metros, tier-2 cities, and towns, offering curated access to streaming content. We began with an exploratory field study across:
          </p>
          <ul className="cs3-content-list">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Ahmedabad</li>
          </ul>

          <img src="/user-types.png" alt="What kind of people" className="cs3-image" />

          <p className="cs3-content-text">
            Users consumed content on phones, shared smart TVs, and second-hand tablets. Many used the app post-10 PM, after work or dinner, often while multitasking. Despite a sleek interface, something wasn't working.
          </p>
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">Session Drop-Off: The Silent Failure</h2>
          <p className="cs3-content-text">
            The first major clue came from usage analytics.
          </p>

          <img src="/engagement.png" alt="Engagement" className="cs3-image" />

          <ul className="cs3-content-list">
            <li>Session 1: 100%</li>
            <li>Session 2: 82%</li>
            <li>By Session 6: Just 4% remained</li>
          </ul>

          <p className="cs3-content-text">
            This was not immediate churn. It was slow erosion — a sign of cognitive fatigue or loss of trust. This became a north star metric: if we could fix retention beyond Session 6, we were winning.
          </p>
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">Deep Qualitative Immersion (25 Users)</h2>
          <p className="cs3-content-text">
            We conducted 25 cognitive walkthroughs and contextual interviews. I visited users in their homes, shared TV setups, and tiny hostels. I observed them as they used the app — watching where they paused, hesitated, hovered, or abandoned.
          </p>
          <p className="cs3-content-text">
            Through reflexive thematic analysis, I open-coded over 350 fragments using a grounded approach, then axially linked them into higher-order constructs.
          </p>

          <table className="cs3-theme-table">
            <thead>
              <tr>
                <th>Theme</th>
                <th>Mentions</th>
                <th>Example Insight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Choice Paralysis</td>
                <td>62</td>
                <td>"There's too much content. I get confused and end up closing it."</td>
              </tr>
              <tr>
                <td>Trust Issues</td>
                <td>49</td>
                <td>"I don't trust the app's recommendations anymore. It feels random."</td>
              </tr>
              <tr>
                <td>Social Influence</td>
                <td>40</td>
                <td>"I usually ask my brother or check what's trending on Instagram."</td>
              </tr>
              <tr>
                <td>Content Familiarity</td>
                <td>36</td>
                <td>"I prefer watching things I've already seen or heard about."</td>
              </tr>
              <tr>
                <td>Engagement Motivation</td>
                <td>71</td>
                <td>"I only logged in because I got 2000 points for the survey."</td>
              </tr>
            </tbody>
          </table>

          <img src="/thematic.png" alt="Thematic Analysis" className="cs3-image" />

          <h3>Cognitive walkthrough</h3>
          <p className="cs3-content-text">Cognitive Walkthrough Video</p>
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">Usability Testing: Task Time & Behavioral Metrics</h2>
          <p className="cs3-content-text">
            We designed five representative tasks across the funnel (discovery, add to watchlist, explore by genre, play trailer, continue watching).
          </p>
          <p className="cs3-content-text">
            25 participants performed these tasks using both the old and new prototype designs.
          </p>

          <h3>Metrics Used:</h3>
          <ul className="cs3-content-list">
            <li>Geometric Mean for task completion times (to reduce skew)</li>
            <li>Adjusted Wald CI for confidence bounds</li>
            <li>Mann-Whitney U test to compare time improvements</li>
            <li>Task Success Score (binary + error analysis)</li>
          </ul>

          <img src="/success-score.png" alt="Success Score" className="cs3-image" />
          <img src="/statistical-tests.png" alt="Statistical tests" className="cs3-image" />
          <img src="/mann-whitney.png" alt="Mann Whitney" className="cs3-image" />

          <h3>Result:</h3>
          <ul className="cs3-content-list">
            <li>Average time to find something to watch: ↓ 52%</li>
            <li>Task success rate: ↑ from 64% to 92%</li>
            <li>Mean decision latency dropped significantly in key flows</li>
          </ul>
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">Quantitative Arm: 271 User Survey</h2>
          <p className="cs3-content-text">Final cleaned dataset: 271 real users</p>
          
          <h3>Survey covered:</h3>
          <ul className="cs3-content-list">
            <li>Discovery behaviors</li>
            <li>Genre preferences</li>
            <li>Watchlist usage</li>
            <li>Trust sources (friends vs app)</li>
            <li>Friction points in UI</li>
          </ul>

          <h3>Quantitative Highlights</h3>
          
          <h4>Trust is Social</h4>
          <img src="/social.png" alt="Social" className="cs3-image" />
          <ul className="cs3-content-list">
            <li>Friend/family recording → longer sessions</li>
            <li>AI suggestions → skepticism</li>
            <li>Trending banners → worked only if backed by peer context</li>
          </ul>

          <h4>Watchlist = Retention</h4>
          <p className="cs3-content-text">Watchlist users were 2.3x more likely to return next session</p>

          <h4>Genre Loyalty Drives Completion</h4>
          <img src="/genre-loyalty.png" alt="Genre Loyalty" className="cs3-image" />
          <ul className="cs3-content-list">
            <li>Users often completed shows only within 2–3 genres</li>
            <li>Comedy, Horror, and Action topped the chart</li>
          </ul>
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">Quantitative Insights: A Survey Within a Study</h2>
          <p className="cs3-content-text">
            To complement our ethnographic findings, we designed and distributed a structured survey to Frenzi users. The goal was to validate behavioral patterns, understand decision dynamics at scale, and explore trust, personalization, and friction points.
          </p>
          <p className="cs3-content-text">
            We offered 2000 Frenzi points as an incentive — and it worked. Over 400 users initiated the survey, and after careful cleaning and validation across 7 data sheets, we retained 271 serious responses. These respondents weren't just hunting for points; their sessions aligned with meaningful engagement patterns.
          </p>
          <p className="cs3-content-text">
            We explored over 120 variables: trust in recommendations, favorite genres, session durations, platform preferences, watchlist behavior, decision confidence, and more.
          </p>

          <div className="cs3-quote-section">
            <p className="cs3-quote">"If my friend says it's good, I'll watch. Not if the app does."</p>
            <p className="cs3-quote">"I save shows... but never go back to them."</p>
            <p className="cs3-quote">"There's too much clutter — too many sliders, too many choices."</p>
          </div>

          <p className="cs3-content-text">
            These echoed what we heard qualitatively — but now, we could see their shape in the data.
          </p>

          <h3>Our Process</h3>
          <p className="cs3-content-text">We started by:</p>
          <ul className="cs3-content-list">
            <li>Cleaning and merging 7 sheets of data into a structured dataset.</li>
            <li>Filtering incomplete and "point-only" respondents by cross-checking open text answers, session logs, and behavioral inconsistencies.</li>
            <li>Visualizing genre preferences, platform usage, watchlist adoption, and trust behaviors.</li>
            <li>Identifying correlations and user clusters based on key decision triggers.</li>
          </ul>

          <p className="cs3-content-text">We filtered out these drop-offs by checking:</p>
          <ul className="cs3-content-list">
            <li>Post-survey login patterns</li>
            <li>Absence of watchlist adds</li>
            <li>Engagement - sessions</li>
          </ul>

          <h3>Key Insights</h3>
          
          <h4>Trust and Social Influence</h4>
          <p className="cs3-content-text">
            When asked if they trusted the app's recommendations, a majority expressed hesitation. But those who marked "Yes" or "Sometimes" tended to watch more and reported higher satisfaction.
          </p>

          <h4>Watchlist as a Proxy for Intent</h4>
          <p className="cs3-content-text">
            Users who actively used the Watchlist feature were 2.3x more likely to return to the app within 48 hours. Interestingly, many still didn't trust it to surface content at the right time.
          </p>

          <h4>Platform and Genre Preferences</h4>
          <p className="cs3-content-text">
            Mobile usage dominated. Comedy, Horror, and action topped the genre charts. Users with strong genre preferences were less likely to feel overwhelmed, suggesting familiarity reduces friction.
          </p>

          <h4>Decision-Making is Social</h4>
          <p className="cs3-content-text">
            A standout stat: Nearly 50% said their decision to watch was influenced more by friends or family than app recommendations or trailers.
          </p>

          <h4>Frenzi Point False Positives</h4>
          <p className="cs3-content-text">
            During synthesis, we noticed a strange skew: high engagement followed by abrupt drop-offs — but after triangulating with behavior logs, we found a major false positive. Digging deeper, we realized many users came only for the 2000-point incentive. We filtered these out — but it was a humbling reminder that not all data is real data.
          </p>

          <p className="cs3-quote">"I just came for the points."</p>
          <p className="cs3-quote-attribution">— multiple users in open comments</p>

          <img src="/user-intent.png" alt="User Intent" className="cs3-image" />
          
          <h4>Hesitation Mapped to Scroll Time</h4>
          <ul className="cs3-content-list">
            <li>Users with longest scroll times in carousels had lowest clickthroughs</li>
            <li>Matched with interview quotes on "scroll fatigue"</li>
          </ul>
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">Redesign Process</h2>
          <p className="cs3-content-text">
            From the insights, we sketched first on paper, then on Figma. Three pillars guided our solution:
          </p>

          <h3>Reduce Cognitive Load</h3>
          <ul className="cs3-content-list">
            <li>Simplified home layout</li>
            <li>One-click filters</li>
          </ul>

          <h3>Boost Social Proof</h3>
          <ul className="cs3-content-list">
            <li>"What your friends are watching" shelf</li>
            <li>Community badges</li>
          </ul>

          <h3>Personalize Just Enough</h3>
          <ul className="cs3-content-list">
            <li>Recent genres</li>
            <li>Watch Again section</li>
            <li>Smart shortlists</li>
          </ul>

          <h3>Prioritization & Behavioral Design Mapping</h3>
          <p className="cs3-content-text">
            We combined the qualitative themes and survey patterns into a MoSCoW matrix for feature prioritization.
          </p>

          <img src="/moscow-matrix.png" alt="MoSCoW Matrix" className="cs3-image" />

          <h4>Must-Have Needs:</h4>
          <ul className="cs3-content-list">
            <li>Clear “Continue Watching” section</li>
            <li>Contextual “Friends Are Watching” module</li>
            <li>One-tap access to comfort genres</li>
          </ul>

          <h4>Scenario Mapping & JTBD Flow:</h4>
          <ul className="cs3-content-list">
            <li>You’re commuting with earphones—find something light in 30 sec.</li>
            <li>You want to watch something while cooking.</li>
            <li>You’re alone at night and want to try something new.</li>
          </ul>

          <img src="/scenario-map-1.png" alt="Scenario Map 1" className="cs3-image" />
          <img src="/scenario-map-2.png" alt="Scenario Map 2" className="cs3-image" />
          
          <img src="/written-ui.png" alt="Written UI" className="cs3-image" />
          <img src="/final-app-mockup.png" alt="Final App Mockup" style={{ maxWidth: '300px', height: 'auto' }} />
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">Post-Redesign Outcomes</h2>
          
          <table className="cs3-outcome-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Before</th>
                <th>After</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Avg. Time to Decision</td>
                <td>61 sec</td>
                <td>29 sec</td>
                <td>↓ 52.4%</td>
              </tr>
              <tr>
                <td>Task Success (Usability Test)</td>
                <td>64%</td>
                <td>92%</td>
                <td>↑</td>
              </tr>
            </tbody>
          </table>

          <img src="/heatmap-after-study.png" alt="Heatmap after study" className="cs3-image" />
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">Reflection</h2>
          <p className="cs3-content-text">
            This was not just a research project — it was an emotional audit of decision-making.
          </p>
          <p className="cs3-content-text">
            The false positives in the survey taught me to validate behavior, not just ask opinions. Thematic coding helped surface hesitation not as a usability issue, but a trust and confidence issue. The neuroscience experiment revealed subtle signs of mental fatigue. The quant side triangulated everything — from watchlist as a retention predictor to genre loyalty shaping behavior.
          </p>
          <p className="cs3-content-text">
            Had I not approached this with an ethnographer's eye and a behavioral scientist's rigor, we might have just tweaked banners and colors — instead, we redesigned for decision certainty.
          </p>
          <p className="cs3-content-text">
            And that made all the difference.
          </p>

          <p className="cs3-quote">"This time, I didn't feel lost. I felt like the app got me."</p>
          <p className="cs3-quote-attribution">— User, pilot test, post-launch</p>
        </div>

        <div className="cs3-content-section">
          <h2 className="cs3-section-title">What I could have also done: (A Speculative Pathway Inspired by Neuroscience)</h2>
          <p className="cs3-content-text">
            While our behavioral and survey data painted a compelling picture of user hesitation, I kept wondering—what if we could go one step deeper? What if we could track not just what users clicked or said, but how they felt—moment to moment—when using the app?
          </p>
          <p className="cs3-content-text">
            I revisited a tool I had experimented with in a previous project: NeuroSky EEG headbands, a lightweight consumer-grade brainwave tracker. These devices detect electrical patterns from the scalp, measuring mental states like attention, meditation, and frustration using frequency bands (alpha, beta, theta, delta, gamma).
          </p>

          <table className="cs3-brainwave-table">
            <thead>
              <tr>
                <th>Brainwave Type</th>
                <th>Frequency</th>
                <th>State Measured</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delta</td>
                <td>0.5 – 4 Hz</td>
                <td>Deep sleep, unconscious</td>
              </tr>
              <tr>
                <td>Theta</td>
                <td>4 – 8 Hz</td>
                <td>Drowsiness, inattention</td>
              </tr>
              <tr>
                <td>Alpha</td>
                <td>8 – 12 Hz</td>
                <td>Calm, relaxed alertness</td>
              </tr>
              <tr>
                <td>Beta</td>
                <td>12 – 30 Hz</td>
                <td>Active focus, engagement</td>
              </tr>
              <tr>
                <td>Gamma</td>
                <td>30 – 100 Hz</td>
                <td>Cognitive load, processing</td>
              </tr>
            </tbody>
          </table>

          <img src="/brainwave-frequency-chart.png" alt="Brainwave Frequency Chart" className="cs3-image" />

          <p className="cs3-content-text">
            In my earlier work, I had run live EEG tests during user walkthroughs. What I discovered was fascinating—users' attention scores dropped sharply during repetitive carousel scrolling and rose only during moments of recognition or peer-based cues (like "Friends Are Watching").
          </p>

          <img src="/eeg-heatmap-1.png" alt="EEG Heatmap Image 1" className="cs3-image" />
          <img src="/eeg-heatmap-2.png" alt="EEG Heatmap Image 2" className="cs3-image" />

          <p className="cs3-content-text">
            For the OTT app, we didn't integrate live EEG testing. But the principle influenced our thinking. If we could access such data, we would:
          </p>
          <ul className="cs3-content-list">
            <li>Track micro-hesitation points using momentary drops in attention.</li>
            <li>Tag emotional drift over the course of discovery journeys.</li>
            <li>Build a valence-emotion mapping system (similar to the ValTEx prototype I developed) to personalize flows in real-time.</li>
          </ul>

          <p className="cs3-content-text">Imagine this:</p>
          <ul className="cs3-content-list">
            <li><strong>IF</strong> user's EEG shows rising theta (indecision) for 12+ seconds in one section → collapse that section and surface simpler options.</li>
            <li><strong>IF</strong> user maintains beta state (high focus) for multiple genre tiles → infer genre curiosity, and expand that category.</li>
            <li><strong>IF</strong> user shows alpha (relaxed but alert) while watching peer-based recommendations → raise priority for "Friends Are Watching" feed.</li>
          </ul>

          <p className="cs3-content-text">
            These aren't just science-fiction possibilities. With the rise of affective computing and emotion-aware UX, these techniques are already piloted in advanced usability labs.
          </p>
          <p className="cs3-content-text">
            While we didn't use EEG in the final rollout for the OTT app, I'd strongly advocate for its inclusion in future discovery-driven media platforms, especially when personalization is the battleground.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy3;