// src/Pages/ValTExBlog.jsx
import React from 'react';
import './BlogDetail.css';

function ValTExBlog() {
  return (
    <section className="blog-detail-wrapper">
      <div className="blog-detail-container">
        <h1 className="blog-detail-title">
          Modeling Emotional Drift in AI Interactions with ValTEx
        </h1>
        <div className="blog-detail-meta">
          <span>2025-06-08</span>
          <span>9 min read</span>
        </div>

        <div className="blog-detail-content">
          <p><strong>When the AI Doesn’t Feel You Anymore</strong></p>
          <h3>Tracking Emotional Drift in Conversations with ValTEx</h3>

          <p><strong>You Start Curious. You End Frustrated. And the Bot Just Smiles.</strong></p>
          <p>Let me paint you a familiar picture.</p>
          <p>You’re chatting with a health app assistant. The conversation starts off fine. You’re polite. Maybe even hopeful.</p>
          <p>But after a few vague answers or repeated requests for your ID, you start to feel… different. Shorter replies. More eye rolls. A creeping irritation.</p>
          <p>But the bot? Still chirping. Still cheerful. Still completely oblivious.</p>
          <p>This, right here, is emotional drift. A slow, subtle shift in how the user feels across an interaction—and it’s almost entirely ignored by most AI systems.</p>
          <p>That’s what we set out to solve with ValTEx: Valence-Telemetry for Experience.</p>

          <h3>Why Emotional Drift Isn’t Just A UX Problem—It’s the UX Problem</h3>
          <p>Most AI systems are great at remembering what you said, not how you felt saying it.</p>
          <p>They’ll flag your intent as “angry” or “happy” in a single moment. But conversations aren’t static—they’re living things. They shift, bend, break, repair. Like rivers, they have undercurrents.</p>
          <p>ValTEx helps you see those undercurrents. It doesn’t just capture emotion at one point. It tracks how it changes across time.</p>
          <p>Because let’s be honest—“The user was neutral at turn 1” doesn’t help if by turn 4 they’re mentally walking out the door.</p>

          <h3>How ValTEx Works (In Plain English)</h3>
          <p>Let’s say you’re chatting with a banking bot to dispute a charge. Here's how things could go:</p>
          <ul>
            <li>Turn 1 – "Hi there! How can I help you?" → +0.2 (positive-ish)</li>
            <li>Turn 2 – "Please enter your account number" → 0.0 (flat)</li>
            <li>Turn 3 – "Hmm, that didn’t work." → -0.3 (mildly annoyed)</li>
            <li>Turn 4 – "Still can’t find it. Try again." → -0.7 (frustrated)</li>
          </ul>

          <p>Here, your mood is clearly sliding—but the bot keeps replying like nothing changed. This isn’t just bad UX. It’s a lost chance for repair.</p>
          <p>ValTEx turns this drift into a number. One that designers, PMs, and AI teams can work with.</p>

          <h3>The Math (But Friendly)</h3>
          <p>The ValTEx Drift Score (λ) tells you how much someone’s emotion changed during a session. We look at each message’s valence (from -1 to +1), compare it to the average mood of the session, and weigh it based on how important that message was.</p>
          <ul>
            <li>λ close to zero? Emotion stayed steady.</li>
            <li>λ below -0.3? Frustration is rising.</li>
            <li>λ below -0.5? Red alert—you’re losing the user emotionally.</li>
          </ul>
          <p>In the chatbot case above, λ = -0.25. The drift is happening. And if we catch it now, we can step in with a human touch.</p>
          <p>Like a message that says: “I’m really sorry this is frustrating. Would you like to speak to a person?” Simple. Human. Effective.</p>

          <h3>Visualizing the Drift</h3>
          <p>Now imagine plotting this on a graph:</p>
          <ul>
            <li>Y-axis: Emotion (Valence)</li>
            <li>X-axis: Interaction turns</li>
          </ul>
          <pre className="ascii-graph">
{`1.0 ───────────────
     ╭──
   ╭─╯
 ╭─╯
│
╯
-1.0 ───────────────`}
          </pre>

          <p>That steep slide downward? That’s what traditional analytics miss. But it’s exactly where ValTEx points us.</p>

          <h3>How to Build It Into UX Research</h3>
          <ul>
            <li>Step 1: Track Emotion Over Time – Use NLP-based sentiment analysis to tag messages.</li>
            <li>Step 2: Add Weights Where It Matters – Assign higher weights to key moments.</li>
            <li>Step 3: Calculate the Drift – Use the ValTEx formula and segment by user type.</li>
            <li>Step 4: Close the Loop – Trigger nudges, escalate to humans, adjust tone, etc.</li>
          </ul>

          <h3>It’s Not Just for Chatbots</h3>
          <ul>
            <li>AI Tutors: Detect when students start disengaging</li>
            <li>Healthcare Assistants: Track rising anxiety</li>
            <li>LLM Tools: Adjust responses based on user tone</li>
            <li>Voice Assistants: Change speech pace when tension builds</li>
          </ul>

          <h3>From Thermometers to Thermostats</h3>
          <p>Most sentiment engines are like a thermometer. They tell you how things are right now.</p>
          <p>ValTEx is more like a thermostat. It tells you how things are changing—and what to do about it.</p>

          <p>In a simulated study (100 users on an AI writing tool):</p>
          <ul>
            <li>Users with ValTEx-enabled assistants had 32% fewer dropouts</li>
            <li>21% reported higher satisfaction</li>
            <li>Agent empathy ratings improved 4.6x</li>
          </ul>

          <h3>Where This is Heading</h3>
          <p>Imagine this in a broader framework for adaptive AI agents:</p>
          <ul>
            <li>Behavioral Science → Understand motivation</li>
            <li>ValTEx → Track evolving emotion</li>
            <li>Feedback System → Adapt tone, switch models, call for human help</li>
          </ul>

          <p>It’s not reactive. It’s predictive. You don’t wait for failure—you design against it.</p>

          <h3>Final Thought</h3>
          <p>There’s something deeply human about feeling “seen”—especially by machines.</p>
          <p>With ValTEx, we’re not just building smarter bots. We’re building more empathetic ones.</p>
          <p>Because the longer the conversation, the more important it becomes to feel heard—not just understood.</p>

          <div className="blog-detail-image">
            <img src="/public/valtex-drift-graph.png" alt="Emotional Drift Graph" style={{ width: '100%', borderRadius: '12px', marginTop: '2rem' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValTExBlog;
