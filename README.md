# Lokesh Jayachandran — Luxury Cinematic Portfolio

> *"Engineering Ideas Into Digital Experiences."*

A luxury, cinematic developer portfolio website crafted for **Lokesh Jayachandran** — Computer Science and Engineering student at Dhanalakshmi College of Engineering, Chennai, aspiring software engineer, and Artificial Intelligence enthusiast.

Designed with an aesthetic of deep obsidian black, antique gold accents, glassmorphic depth, and a full-screen ambient video background showcasing modern computational engineering.

---

## ✦ Table of Contents
1. [Personal Profile](#-personal-profile)
2. [Design Identity & Aesthetic](#-design-identity--aesthetic)
3. [Technical Skills Matrix](#-technical-skills-matrix)
4. [Featured Projects](#-featured-projects)
5. [Education & Academic Journey](#-education--academic-journey)
6. [Repository & File Structure](#-repository--file-structure)
7. [Local Setup & Running Instructions](#-local-setup--running-instructions)
8. [Deployment Guide](#-deployment-guide)
9. [Connect & Online Profiles](#-connect--online-profiles)

---

## ✦ Personal Profile

- **Full Name:** Lokesh Jayachandran
- **Profession:** Aspiring Software Engineer
- **Degree:** Bachelor of Engineering (B.E.) in Computer Science and Engineering
- **College:** Dhanalakshmi College of Engineering, Tambaram, Chennai
- **Current Standing:** 7th Semester Active
- **Expected Graduation:** May 2027

### Professional Introduction
> *"I am a Computer Science and Engineering student passionate about software development, problem-solving, Java programming and Artificial Intelligence. I enjoy building practical technology projects and continuously improving my technical skills. My goal is to become a skilled software engineer and contribute to meaningful technology innovations."*

---

## ✦ Design Identity & Aesthetic

- **Deep Obsidian Black Background:** `#050507` base with atmospheric radial lighting and ambient glow filters.
- **Antique Gold Metallics:** Multi-stop linear gradients (`#d4af37`, `#f6e6b4`, `#b8860b`) delivering high-contrast, prestigious accents.
- **Cinematic Video Atmosphere:** Fullscreen responsive HTML5 video (`assets/hero-video.mp4`) with autoplay, loop, mute, playsinline, multi-tier vignette, and contrast overlays.
- **Glassmorphism:** Frosted surfaces with `backdrop-filter: blur(20px)` and semi-translucent golden borders.
- **Refined Typography:** 
  - **Cinzel** for headings and monogram emblems.
  - **Plus Jakarta Sans** for readable body content.
  - **Space Grotesk** for engineering chips and technical data tags.
- **Fluid Micro-Interactions:**
  - Custom trailing starlight cursor ring with linear interpolation (LERP).
  - Scroll progress bar at the top of the viewport.
  - Dynamic category filtering for skills.
  - Modal breakdown dialogs for architectural inspection of projects.
  - One-click copy email button with instant toast notification.
  - Dynamic `mailto:` composer that launches pre-filled emails to `lokeshjai2005@gmail.com`.

---

## ✦ Technical Skills Matrix

| Domain | Technical Proficiencies & Focus |
| :--- | :--- |
| **Programming** | Java, Object-Oriented Programming (OOP), Modular Design |
| **Core CS** | Data Structures and Algorithms (DSA), Big-O Analysis, Problem Solving |
| **Web Development** | HTML5 (Semantic & Accessible), CSS3 (Glassmorphism & Grid), Modern JavaScript (ES6+) |
| **Database Systems** | SQL, Relational Schema Modeling, Query Optimization, Joins |
| **Research Interests** | Artificial Intelligence, Machine Learning, AI-Powered Applications (RAG) |

---

## ✦ Featured Projects

### 01. ClimateGuard-AI
- **Category:** AI & Environmental Risk Analytics
- **Description:** An AI-powered climate and environmental risk prediction project using weather data and machine learning.
- **Key Features:**
  - Weather data processing and feature engineering.
  - Environmental fire risk prediction modeling.
  - Interactive Streamlit dashboard for exploration and visualization.
  - Model evaluation metrics and diagnostic curves.
- **Technologies:** Python, Machine Learning, Streamlit, Weather Data Processing, Analytics

### 02. DocuMind AI
- **Category:** Generative AI & Retrieval-Augmented Generation (RAG)
- **Description:** An AI-powered document question-answering application using Retrieval-Augmented Generation (RAG).
- **Key Features:**
  - Automated PDF text ingestion and semantic chunking.
  - High-dimensional vector embeddings stored in ChromaDB.
  - Gemini API integration for hallucination-free, context-grounded response generation.
  - Natural language search across multi-page document archives.
- **Technologies:** Python, Gemini API, ChromaDB, PDF Processing, RAG Architecture

### 03. IoT Smart Home Water Leak Detection & Mobile Alert System
- **Category:** IoT Automation & Hardware Engineering
- **Description:** An IoT-based smart home solution designed to detect water leakage using moisture sensors and send mobile alerts.
- **Key Features:**
  - Physical moisture sensor array monitoring high-risk plumbing zones.
  - Threshold-based event detection logic.
  - Low-latency mobile alert dispatch to notify homeowners in real-time.
  - Proactive risk reduction preventing structural water damage.
- **Technologies:** IoT Sensors, Moisture Detection, Mobile Alerts, Hardware Automation

### 04. Habit Tracker
- **Category:** Productivity & Web Application
- **Description:** A simple productivity application designed to help users monitor habits and maintain consistency.
- **Key Features:**
  - Habit tracking routines with completion tracking and streaks.
  - Distraction-free, minimalist user experience.
  - Visual trend analysis over weekly and monthly cycles.
  - Local state persistence across user sessions.
- **Technologies:** JavaScript, HTML5, CSS3, State Management, UI/UX Design

---

## ✦ Education & Academic Journey

- **Degree:** Bachelor of Engineering (B.E.) in Computer Science and Engineering
- **Institution:** Dhanalakshmi College of Engineering, Tambaram, Chennai
- **Current Standing:** 7th Semester Active
- **Expected Graduation:** May 2027
- **Core Coursework:** Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (SQL), Artificial Intelligence, Machine Learning, Software Engineering.

---

## ✦ Repository & File Structure

```text
Lokesh-Portfolio/
├── assets/
│   └── hero-video.mp4        # Cinematic ambient hero video background
├── index.html                # Semantic HTML5 markup, accessibility tags & SEO metadata
├── style.css                 # Obsidian & antique gold design system, animations & responsive layout
├── script.js                 # Smooth scroll, video playback, modal windows, copy email & filter logic
└── README.md                 # Complete project documentation & setup guidelines
```

---

## ✦ Local Setup & Running Instructions

Since this portfolio is built with pure standards-based **HTML5**, **CSS3**, and **Vanilla JavaScript**, no compilation, package installs, or build pipelines are required.

### Option 1: Using Python Built-in Server (Recommended)
Open a terminal in the project directory and run:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to: `http://localhost:8000` in your web browser.

### Option 2: Using VS Code Live Server Extension
1. Open the `Lokesh-Portfolio` folder in Visual Studio Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Direct File Launch
Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

---

## ✦ Deployment Guide

### Deploying to GitHub Pages (Free & Instant)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit of Luxury Cinematic Portfolio"
   ```
2. Create a new repository on your GitHub account (`https://github.com/LokeshJ0018/portfolio` or `LokeshJ0018.github.io`).
3. Push your code:
   ```bash
   git remote add origin https://github.com/LokeshJ0018/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub, go to **Settings** > **Pages** > **Branch**: select `main` and root `/`, then save. Your website will be live in 60 seconds!

---

## ✦ Connect & Online Profiles

- **GitHub:** [github.com/LokeshJ0018](https://github.com/LokeshJ0018)
- **LinkedIn:** [linkedin.com/in/lokesh-j-5942a0298](https://www.linkedin.com/in/lokesh-j-5942a0298/)
- **Email:** [lokeshjai2005@gmail.com](mailto:lokeshjai2005@gmail.com)

---

*Crafted with precision & passion for Lokesh Jayachandran.*
