import React from 'react';
import './WhisperPipelineBlog.css';

function WhisperPipelineBlog() {
  return (
    <section className="blog-post-section">
      <div className="blog-post-container">
        <h1 className="blog-post-title">Automated Qualitative Research Workflow Using Whisper, NLP, and Monte Carlo: A Guide for UX Researchers</h1>

        <div className="blog-post-content">
          <h2>Introduction:</h2>
          <p>This document is for UX researchers, design strategists, or behavioral scientists who are conducting semi-structured interviews and want to take their qualitative analysis further—automatically, efficiently, and with scientific depth. You may be sitting with 30 recorded interviews and wondering:</p>
          <ul>
            <li>How do I transcribe this efficiently?</li>
            <li>How do I ensure I'm not missing any emerging themes?</li>
            <li>Can I track emotional tones and sentiment shifts?</li>
            <li>Can I confidently say I've reached theme saturation?</li>
          </ul>
          <p>The answer: Yes. With just your terminal, Whisper CLI, Python scripts, and free tools like VADER and gensim, you can build a full workflow that does transcription, thematic discovery, tone and sentiment analysis, and valence trajectory modeling.</p>
          <p>This guide assumes you know nothing about programming or statistical modeling. Don’t worry—each step is explained like a story, written for someone who just wants to do good research. You're not replacing human insight. You're scaling your own thinking.</p>
          <p>Let me walk you through each step—as though I'm working alongside you.</p>

          <h3>Step-by-Step Workflow Summary</h3>
          <ul>
            <li>Prepare your interview audio files</li>
            <li>Transcribe using Whisper from terminal</li>
            <li>Structure and clean transcripts</li>
            <li>Split into sentences and tag speakers</li>
            <li>Apply sentiment analysis using VADER</li>
            <li>Detect tone/emotion using pre-trained classifiers</li>
            <li>Discover themes using topic modeling (LDA or BERTopic)</li>
            <li>Simulate theme saturation with Monte Carlo</li>
            <li>Model emotional recovery/dips (ValTEx)</li>
            <li>Export for refinement and reporting</li>
          </ul>

          <h3>Step 1: Preparing Your Interview Audio Files</h3>
          <p>What is happening here? You’re organizing your raw data. This is like laying your notes on a table before reading them. You want to make sure all your audio files are in one place and in a format that Whisper (the transcription tool) understands.</p>
          <pre>{`mkdir interviews  # This creates a folder named 'interviews'
mv *.wav interviews/  # This moves all .wav files into that folder`}</pre>
          <p>Why split long files? Whisper struggles with very long recordings. If your interviews are 1 hour+, split them into 15-minute chunks:</p>
          <pre>{`ffmpeg -i longfile.wav -f segment -segment_time 900 -c copy interview_%03d.wav`}</pre>

          <h3>Step 2: Transcribing with Whisper CLI (Offline)</h3>
          <p>What are we doing? Turning voice into text. Whisper is an AI that listens to audio and writes down what it hears.</p>
          <pre>{`pip install git+https://github.com/openai/whisper.git
whisper interviews/interview_001.wav --model medium --output_format txt --output_dir transcripts/

for f in interviews/*.wav; do whisper "$f" --model medium --output_format txt --output_dir transcripts/; done`}</pre>
          <p>This saves you hours of typing. Still, always skim the results to catch mishearings.</p>

          <h3>Step 3: Cleaning and Structuring Transcripts</h3>
          <p>Why this matters: You want clean, structured text so you can analyze it later. Think of this as turning raw transcripts into a spreadsheet format.</p>
          <p>Goal: Create a table like:</p>
          <pre>{`filename | timestamp | speaker | sentence`}</pre>
          <p>Use simple Python or bash scripting to clean up the text output into rows.</p>

          <h3>Step 4: Sentence Splitting and Speaker Tagging</h3>
          <p>What are we doing? Instead of analyzing huge paragraphs, we’re breaking the text into bite-sized thoughts: individual sentences.</p>
          <pre>{`from nltk.tokenize import sent_tokenize
with open("transcripts/interview_001.txt") as f:
    text = f.read()
sentences = sent_tokenize(text)
for s in sentences:
    print(s)`}</pre>
          <p>Why? It lets you look at how emotions or themes change sentence by sentence. Tag speakers manually if needed, especially if it’s a back-and-forth interview.</p>

          <h3>Step 5: Sentiment Analysis (VADER)</h3>
          <p>What is sentiment? Sentiment is how positive, negative, or neutral a sentence feels. VADER is a simple tool trained to score that.</p>
          <pre>{`pip install vaderSentiment
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
analyzer = SentimentIntensityAnalyzer()
print(analyzer.polarity_scores("I usually binge at night."))`}</pre>
          <p>The output will show whether this sentence feels positive, neutral, or negative. Great for spotting frustration or delight.</p>

          <h3>Step 6: Tone Detection (Emotion Models)</h3>
          <p>What is tone detection? Beyond sentiment, tone tells you the emotional color: joy, sadness, anger, fear. It helps you understand emotional nuance.</p>
          <pre>{`from transformers import pipeline
classifier = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base")
print(classifier("I feel overwhelmed by suggestions."))`}</pre>
          <p>You’ll get output like: <code>{`{ label: "anxiety", score: 0.85 }`}</code></p>

          <h3>Step 7: Theme Discovery with Topic Modeling (LDA)</h3>
          <p>What are we doing? We’re looking for repeating themes or topics in your data. LDA (Latent Dirichlet Allocation) groups words that often appear together.</p>
          <pre>{`pip install gensim
from gensim import corpora, models
texts = [line.split() for line in open("cleaned_sentences.txt")]
dictionary = corpora.Dictionary(texts)
corpus = [dictionary.doc2bow(text) for text in texts]
lda = models.LdaModel(corpus, num_topics=6, id2word=dictionary, passes=15)
lda.print_topics()`}</pre>
          <p>This gives you sets of keywords that hint at topics like "recommendations," "family watching," or "confusion."</p>

          <h3>Step 8: Monte Carlo Simulation for Theme Saturation</h3>
          <p>What is this? It helps you estimate how many interviews you needed to reach most of your themes. It's like asking:</p>
          <blockquote>If I had just 10 interviews, would I have found 80% of the patterns?</blockquote>
          <pre>{`import random
samples = [["theme1", "theme2"], ["theme2", "theme3"], ...]
for n in range(1, 30):
    unique_sets = []
    for _ in range(1000):
        subset = random.sample(samples, n)
        unique = set([t for group in subset for t in group])
        unique_sets.append(len(unique))
    print(n, sum(unique_sets)/len(unique_sets))`}</pre>
          <p>Why? This lets you defend your sample size to stakeholders.</p>

          <h3>Step 9: ValTEx Emotional Modeling</h3>
          <p>What is ValTEx? ValTEx (Valence-Telemetry Exploration) helps you track emotional arcs: when users become confused, recover, or disengage emotionally.</p>
          <pre>{`import pandas as pd
sentiment_scores = pd.read_csv("sentiments.csv")
sentiment_scores["rolling"] = sentiment_scores["compound"].rolling(5).mean()
sentiment_scores["delta"] = sentiment_scores["compound"].diff()`}</pre>
          <p>Plot to see dips, peaks, and plateaus in emotional engagement.</p>

          <h3>Step 10: Export to Word or CSV for Final Analysis</h3>
          <pre>{`cat transcripts/*.txt > all_transcripts.txt
python format_to_csv.py > output.csv`}</pre>
          <p>Open in Excel or Word. Read through and refine your themes. Automation gives you the map. You still walk the terrain.</p>

          <h3>Final Thoughts</h3>
          <p>You don’t need to be a coder to be a modern researcher. This guide helps you get started with reproducible, scalable, human-first UX research.</p>
        </div>
      </div>
    </section>
  );
}

export default WhisperPipelineBlog;
