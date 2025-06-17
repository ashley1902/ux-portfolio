import React from 'react';
import './CaseStudy2.css';

function CaseStudy2() {
  return (
    <section className="cs2-hero">
      <div className="cs2-container">
        <h1 className="cs2-title">
          <span>Behavioral Clustering of Watchlist Users in a Stockbroking App</span><br />
        </h1>

        <div className="cs2-content-section">
          <h2 className="cs2-section-title">Executive Summary</h2>
          <p className="cs2-content-text">
            This research project aimed to decode how users interact with the Watchlist feature in a stockbroking application. With 60% daily usage and over 22% of trades originating from the Watchlist, it was a high-impact surface.
          </p>
          <p className="cs2-content-text">
            Using a 15-question survey distributed in-app, we gathered behavioral, transactional, and psychographic data. The cleaned dataset was analyzed using K-Prototypes clustering and correlation matrices, resulting in three distinct user personas:
          </p>
          <ol className="cs2-content-list">
            <li>Simplicity Seekers - prefer minimal interfaces and quick access.</li>
            <li>Balanced Tinkerers - want control through filters and alerts.</li>
            <li>Power Users - demand real-time analytics and news integrations.</li>
          </ol>
          <p className="cs2-content-text">
            The study helped reframe the watchlist as a personalized experience with multiple access paths based on behavior, not just usage count. Key insights are already shaping product decisions.
          </p>
        </div>

        <div className="cs2-content-section">
          <h2 className="cs2-section-title">SITUATION</h2>
          <p className="cs2-content-text">
            In Mid 2024, we began noticing a tension in one of the most heavily used features of our stockbroking app—the Watchlist. It was functionally popular, with more than 60% of daily active users engaging with it, and 22% of orders being routed directly from it.
          </p>
          <p className="cs2-content-text">
            Yet beneath this surface-level engagement, there was growing uncertainty. Were users truly finding value? Or were they simply defaulting to the watchlist because there wasn't a better alternative? The metrics told us where users were going, but not why they stayed—or more worryingly, why some didn't.
          </p>
          <p className="cs2-content-text">
            The product team came to research with a vision. They wanted to elevate the watchlist from a passive tracking tool to an active decision-support system. They had ideas—like price movement triggers, sector-based recommendations, and personalized discovery—but lacked the behavioral grounding to build with precision.
          </p>
          <p className="cs2-content-text">
            We needed to answer a fundamental question:<br />
            <em>"How do different types of users engage with their watchlists—and how can we make those experiences genuinely useful?"</em>
          </p>
        </div>

        <div className="cs2-content-section">
          <h2 className="cs2-section-title">TASK</h2>
          <p className="cs2-content-text">
            My role was to lead a research initiative that could turn scattered behavior into actionable personas—not fictional personas, but ones rooted in usage data, sentiment, and psychographic patterns.
          </p>
          <p className="cs2-content-text">
            The task wasn't to evaluate usability alone. We had to explore:
          </p>
          <ul className="cs2-content-list">
            <li>How users relate to their watchlists emotionally and functionally</li>
            <li>What behavioral markers define meaningful user clusters</li>
            <li>And which design directions would most likely satisfy real user intent</li>
          </ul>
          <p className="cs2-content-text">
            We wanted to move beyond intuition, toward insights that could confidently shape a roadmap, inform feature prioritization, and guide experimentation.
          </p>
        </div>

        <div className="cs2-content-section">
          <h2 className="cs2-section-title">ACTION</h2>
          
          <h3>1. Designing the Right Survey</h3>
          <p className="cs2-content-text">
            I designed a 15-question survey carefully constructed to capture both breadth and depth of user behavior. We weren't just asking users what they liked—we were probing how they act, how often, and why.
          </p>
          <p className="cs2-content-text">
            Each question mapped to one of four categories:
          </p>
          <ul className="cs2-content-list">
            <li><strong>Categorical:</strong> Type of investor, stock preference</li>
            <li><strong>Behavioral:</strong> Update frequency, list organization</li>
            <li><strong>Transactional:</strong> Use of filters, triggers, and feature engagement</li>
            <li><strong>Psychographic:</strong> Attitudes toward complexity and customization</li>
          </ul>
          
          <img src="/survey-ui-screenshot.png" alt="Survey UI screenshot" className="cs2-image" />
          <img src="/notification-banner.png" alt="Notification banner shown to users" className="cs2-image" />
          
          <p className="cs2-content-text">
            The survey was deployed in-app, targeted to users across three major cohorts, aligned with actual trading behavior. This helped ensure statistical coverage that approximated a Gaussian (normal) distribution—a critical detail for downstream clustering.
          </p>

          <h3>2. Cleaning and Preparing the Data</h3>
          <p className="cs2-content-text">
            Once the responses came in, I began cleaning the dataset for analysis. This required recoding categorical responses into numeric values, identifying outliers, and structuring the dataset so it would be compatible with clustering algorithms in Python.
          </p>
          
          <img src="/raw-data-table.png" alt="Raw data table" className="cs2-image" />
          <img src="/cleaned-recoded-data.png" alt="Cleaned and recoded survey data" className="cs2-image" />
          
          <p className="cs2-content-text">
            Each question was preserved as-is, but transformed for clarity. I also ran Cronbach's Alpha checks on scaled items to verify internal consistency—an important quality gate for survey-based behavioral research.
          </p>

          <h3>3. Exploring Correlations</h3>
          <p className="cs2-content-text">
            Before jumping into clustering, I ran a correlation matrix across the entire dataset. This helped me identify early behavioral relationships worth noting—and later validating through cluster analysis.
          </p>
          
          <img src="/correlation-matrix-heatmap.png" alt="Correlation Matrix Heatmap" className="cs2-image" />
          <img src="/top-4-behavioral-correlations.png" alt="Top 4 Behavioral Correlation Pairs" className="cs2-image" />
          
          <p className="cs2-content-text">
            Some early patterns stood out clearly:
          </p>
          <ul className="cs2-content-list">
            <li>Long-term investors (65%) placed high value on indice settings</li>
            <li>Users who updated their watchlists weekly or more strongly relied on filters</li>
            <li>Those with 1–6 watchlists showed a preference for financial metrics like market cap</li>
          </ul>
          <p className="cs2-content-text">
            These patterns became the basis for hypothesis generation: Could there be user segments defined not by surface demographics, but by behavioral signatures?
          </p>

          <h3>4. Identifying Clusters</h3>
          <p className="cs2-content-text">
            I used the K-Prototypes algorithm, which handles both numeric and categorical data types, to segment users. The Elbow Method suggested three optimal clusters—each showing a distinctive behavior fingerprint.
          </p>
          
          <img src="/cluster-behavior-summary.png" alt="Cluster Behavior Summary Table" className="cs2-image" />
          <img src="/fogg-behavior-model-mapping.png" alt="Fogg Behavior Model Mapping" className="cs2-image" />
          
          <p className="cs2-content-text">
            These weren't just clusters. They were personas shaped by data—deeply behavioral, functionally distinct, and ripe for targeted design strategies.
          </p>

          <h3>5. Profiling the Clusters</h3>
          
          <h4>Cluster 1: The Simplicity Seekers</h4>
          <ul className="cs2-content-list">
            <li><strong>Traits:</strong> Use 1–3 watchlists, update daily, dislike complexity</li>
            <li><strong>Needs:</strong> Quick views, fewer distractions, clean interfaces</li>
            <li><strong>Behavioral Marker:</strong> Only want essential metrics—LTP, quantity, exchange</li>
            <li><strong>Design Response:</strong> Create a "Basic View" with default filters and light UI</li>
            <li><strong>TPS Score:</strong> –7 (highest among groups)</li>
          </ul>

          <h4>Cluster 2: The Balanced Tinkerers</h4>
          <ul className="cs2-content-list">
            <li><strong>Traits:</strong> Maintain 4–6 lists, update daily/monthly, use filters strategically</li>
            <li><strong>Needs:</strong> More control without full complexity</li>
            <li><strong>Behavioral Marker:</strong> Want to toggle between views, apply market cap filters, set alerts</li>
            <li><strong>Design Response:</strong> Introduce modular watchlist layouts and custom alerts</li>
            <li><strong>TPS Score:</strong> –20</li>
          </ul>

          <h4>Cluster 3: The Power Users</h4>
          <ul className="cs2-content-list">
            <li><strong>Traits:</strong> Maintain 7–10 lists, seek real-time data, track high-value movements</li>
            <li><strong>Needs:</strong> Advanced tools, comparison charts, news integrations</li>
            <li><strong>Behavioral Marker:</strong> Actively monitor stock movement, sector shifts, and technical triggers</li>
            <li><strong>Design Response:</strong> Offer an "Analyst View" with dashboards, stock tags, news feeds</li>
            <li><strong>TPS Score:</strong> –36</li>
          </ul>
          
          <img src="/watchlist-feature-importance-bar.png" alt="Bar graph of watchlist feature importance" className="cs2-image" />
          <img src="/stock-info-preferences.png" alt="Stock info preferences across users" className="cs2-image" />
        </div>

        <div className="cs2-content-section">
          <h2 className="cs2-section-title">RESULT</h2>
          <p className="cs2-content-text">
            The research findings informed the creation of three tailored user modes:
          </p>
          <ul className="cs2-content-list">
            <li><strong>Essential Watchlist:</strong> Clean, no-frills view with key stats for Cluster 1</li>
            <li><strong>Custom Mode:</strong> Editable fields, alerts, and analytics for Cluster 2</li>
            <li><strong>Pro Watchlist:</strong> Integrated visualizations, corporate action indicators, news, and tags for Cluster 3</li>
          </ul>
          <p className="cs2-content-text">
            These modes aligned not with assumptions, but with clearly expressed user behaviors and motivations. The product team implemented prototypes that immediately showed improved engagement metrics across internal testing cohorts.
          </p>
          <p className="cs2-content-text">
            More importantly, we changed how the team thought about the watchlist—from a one-size-fits-all module to an adaptive, behavior-led system.
          </p>
        </div>

        <div className="cs2-content-section">
          <h2 className="cs2-section-title">WHAT I WOULD DO DIFFERENTLY NOW</h2>
          <p className="cs2-content-text">
            If I could enhance this study today, I'd add several new layers:
          </p>
          <ul className="cs2-content-list">
            <li><strong>Valence-Telemetry Mapping (VALTEX)</strong> to track emotional highs and lows during watchlist interactions</li>
            <li><strong>Bayesian Decision Trees</strong> to model next-best-feature recommendations for each cluster</li>
            <li><strong>CPM-GOMS</strong> to map the task flow cost and decision time for each action</li>
            <li><strong>Wald Confidence Intervals</strong> for evaluating task success and feature preference, especially for smaller sample groups</li>
            <li><strong>Follow-up Qual Interviews</strong> to deepen the narrative behind the numbers</li>
            <li><strong>Longitudinal Drift Analysis</strong> to monitor how watchlist usage changes over time or due to feature changes</li>
          </ul>
          <p className="cs2-content-text">
            These steps would help take a solid behavioral model and turn it into a continuous learning system for future releases.
          </p>
        </div>

        <div className="cs2-content-section">
          <h2 className="cs2-section-title">FINAL REFLECTION</h2>
          <p className="cs2-content-text">
            This was not just a research project—it was an intervention. We were able to step into the minds of users and see the patterns that product metrics alone couldn't reveal. Through the lens of mixed-methods research, we didn't just cluster users—we understood them.
          </p>
          <p className="cs2-content-text">
            That's what makes research transformative. It helps teams move from building for "users" to building for people.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy2;