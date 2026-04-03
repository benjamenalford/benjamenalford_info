# benjamenalford.info - Comprehensive Project Plan

## 1. Project Overview

**benjamenalford.info** is a personal website serving as a replacement for social media and traditional web presence. The site showcases a CV, writings, and other content while maintaining strict privacy and bot/AI protection.

### Core Principles
- Static HTML with no external dependencies (unless explicitly requested)
- Not crawled by bots or AI (no CAPTCHA/human verification needed)
- All content generated from Markdown files using Racket scripts
- Minimalist design (monospace font, 40 character width, dash-based lists)
- GitHub Pages deployment via GitHub Actions

---

## 2. Architecture & Components

### 2.1 Directory Structure
```
benjamenalford_info/
├── .github/
│   └── workflows/
│       └── static.yml              # GitHub Pages deployment workflow
├── .gitignore                       # Version control exclusions
├── LICENSE                          # Project license
├── README.md                        # High-level overview
├── PROJECT.md                       # This document (consolidated plan)
├── robots.txt                       # Bot crawling disallow
│
├── source/                          # Content source files (Markdown format)
│   └── content/                     # Public content files
│       ├── sample_public.md         # Example public content
│       └── private/                 # Private content (excluded from builds)
│           └── 2026-04-1-bike.yml   # Example private content
│
├── scripts/                         # Racket build automation scripts
│   └── parse_example.rkt            # POC Racket parser
│
└── site/                            # Generated HTML output (built by Racket scripts)
    ├── index.html                   # Main landing page
    ├── static/                      # Static assets (CSS, JS)
    │   ├── js/
    │   │   └── app.js               # Client-side application shell
    │   └── site/
    │       └── style.css            # Main stylesheet
    └── content/                     # Generated HTML content files
```

### 2.2 Core Components

#### Frontend (Static HTML/CSS/JS)
- **index.html**: Main landing page with header, content section, and footer navigation
- **style.css**: Minimalist monospace styling (Courier font, 40ch width)
  - Dash-based list styling (overrides default bullets)
  - Dotted section separators
  - Responsive footer with social links
- **app.js**: Client-side functionality
  - Email obfuscation for spam protection
  - Placeholder for future interactive features

#### Content Source (Markdown Format)
Content files are Markdown with optional front matter metadata at the top:
```markdown
---
date: YYYY-MM-DD
draft: boolean
private: boolean
tags:
  - tag1
  - tag2
title: "Content Title"
---
# Main content (markdown)
Content goes here...
```

Example files:
- `source/sample_public.md` - Published public content
- `source/sample_draft.md` - Draft content (draft: true)
- `source/private/sample_private.md` - Private content (private: true)

#### Build System (Racket Scripts - TBD)
- Parse Markdown files (with YAML front matter) from `source/` directory
- Exclude private files (source/private/)
- Filter out draft content (draft: true)
- Generate HTML files in `site/` directory
- Copy static assets to `site/` directory

#### Deployment
- GitHub Actions workflow (`.github/workflows/static.yml`)
- Deploys entire repo to GitHub Pages
- Triggered on pushes to main branch

---

## 3. Security & Bot Protection

All bot/AI protection measures are implemented:

### Client-Side Protection
- **Meta Tags** (index.html):
  - `<meta name="robots" content="noindex, nofollow" />`
  - Prevents search engine indexing

### Server-Side Protection (.htaccess)
- **X-Robots-Tag Header**: `noindex, nofollow` - Explicit crawler directives
- **X-Content-Type-Options Header**: `nosniff` - Prevents MIME type sniffing

### Crawler Blocking (robots.txt)
```
User-agent: *
Disallow: /
```
- Blocks all automated crawlers and bots

### Email Protection (app.js)
- Email address obfuscated in source code
- Assembled client-side to prevent email harvesting
- Original: `me@benjamenalford.com`

---

## 4. Content Workflow & Publishing

### 4.1 Content Creation Process
1. **Create Markdown File**: Write content in `source/` directory (or `source/private/` for private content)
2. **Add Metadata**: Include date, draft status, tags, title, body in YAML front matter
3. **Set Privacy Level**:
   - `private: false` - Published to site
   - `private: true` - Excluded from build, never published
4. **Set Draft Status**:
   - `draft: false` - Published when private: false
   - `draft: true` - Not published, excluded from build

### 4.2 Build Process (Implemented - Racket POC)
1. Scan `source/content/` directory for Markdown files
2. Filter out private files (source/content/private/)
3. Filter out draft files (draft: true in front matter)
4. Generate HTML files for remaining content using Racket parser
5. Copy static assets from `site/static/` to `site/`
6. Deploy `site/` directory contents

**Current POC**: `scripts/parse_example.rkt` parses Markdown using Racket's `markdown` library, wraps it in HTML template, and outputs to `site/`

### 4.3 Publishing
- Generated HTML files placed in `site/` directory
- Site becomes root for live website
- Content accessible at `/content/<filename>` (URL structure TBD)

---

## 5. Navigation & Content Structure (Planned)

### Current Structure
- **Main Page** (`index.html`): Landing page with site intro and footer links
- **Footer Links**: GitHub, LinkedIn, Email

### Planned Navigation
- [ ] Navigation system for content browsing
  - [ ] Add plain links for 'Writing', 'Projects', and 'About'
  - [ ] URLs will follow structure: `/writing`, `/projects`, `/random`
  - [ ] Default `/random` to serve as main page (for now)
- [ ] Populate content section from list of generated HTML files
- [ ] Set up content indexing/discovery mechanism

### Private/Admin Sections (Planned)
- [ ] Create private sections accessible only by URL (no navigation links)
- [ ] Add links to internal subdomains (accessible only by URL, no links)
- [ ] Display draft content in private sections only
- [ ] Implement access control for private sections (TBD)

---

## 6. Project Status & Tasks

### ✅ Completed Tasks
- [x] Remove bold from social link brackets, keep only link text bold
- [x] Create shell `static/js/app.js`
- [x] Add robots.txt to block bot crawling
- [x] Implement anti-AI scraping measures (meta tags, etc.)
- [x] Add `noindex` meta tag to prevent search engine indexing
- [x] Add `X-Robots-Tag` headers for server-side crawler directives
- [x] Block known AI User-Agents (via robots.txt)
- [x] Block known crawlers via `robots.txt`
- [x] Override default UL LI bullet with a dash using CSS
- [x] Create scaffold and folder structure
- [x] Create sample Markdown content files (public, draft, private)

### 🔄 In Progress / Blocked
- [ ] Enhance Racket script for production use
  - [ ] Error handling for missing or invalid content
  - [ ] Filter out private files (source/content/private/)
  - [ ] Filter out draft files (draft: true)
  - [ ] Support front matter fields (date, draft, private, tags, title)
- [ ] Automate build process with Makefile or shell script
  - [ ] Script to run Racket parser recursively on source/content/
  - [ ] Copy static assets from source/static/ to site/
  - [ ] Clean build process
  - [ ] Error checking and reporting

### ⏳ Not Started
- [ ] Test private content exclusion logic
- [ ] Test draft filtering
- [ ] Generate HTML template for content files
- [ ] Document the build process in detail
- [ ] Populate content section from list of HTML files
- [ ] Set up Pandoc workflow for content generation (TBD - Markdown vs HTML)
- [ ] Implement draft filtering UI/logic
- [ ] Create navigation system
- [ ] Implement private/admin sections
- [ ] Add links to internal subdomains
- [ ] Implement access control for private sections
- [ ] Create actual content (writings, projects, about pages)

---

## 7. Development Notes & Decisions

### Technology Choices
- **Language**: Racket (for content generation)
- **Content Format**: Markdown with YAML front matter (structured metadata + content)
- **CSS Framework**: None (hand-written, minimal CSS)
- **Deployment**: GitHub Pages
- **Build Tool**: Racket scripts + Makefile/Shell script (TBD)

### Design Decisions
- **Content Sources**: Markdown files in `source/content/` with optional front matter for metadata
- **No External Dependencies**: Ensures site remains lightweight and independent
- **Bot Protection**: Multiple layers (robots.txt, meta tags) to prevent crawling
- **Minimal Design**: Monospace font, fixed width (40 characters), dash-based lists for simplicity and readability

### Current State
+- **Static assets**: Located in `site/static/` directory
+- **Content location**: `source/content/*.md` (Markdown files)
+- **Private content**: `source/content/private/` (excluded from builds)
+- **Build system**: Racket POC script at `scripts/parse_example.rkt`
+- **Deployment**: GitHub Pages via `.github/workflows/static.yml` - deploys `site/` directory

### Cleanup Completed
- Removed `.htaccess` (not used by GitHub Pages)
- Removed `content_plan/` directory (documentation migrated)
- Removed PLAN.md reference from .gitignore
- Moved `static/` and `index.html` into `site/` directory
- Cleaned up duplicate file references in documentation

### Known Issues & Inconsistencies
1. **Empty Build Output**: `site/` directory is empty until build script runs
2. **POC Status**: Racket parser needs enhancement for production use (filtering, error handling)

---

## 8. Quick Reference: Next Steps

### Immediate (Critical Path)
1. Implement Racket Markdown parser script (with front matter support)
   - Parse Markdown files from source directory
   - Extract and validate front matter
   - Handle errors gracefully
2. Create build automation script (Makefile or shell script)
   - Run Racket parser
   - Copy static assets
   - Clean build output
3. Test with sample content files

### Short Term
4. Implement HTML template generation for parsed content
5. Create navigation system
6. Test private/draft filtering
7. Populate actual content

### Long Term
8. Implement private section functionality
9. Add content indexing/discovery
10. Implement access control (if needed)
11. Optimize site performance

---

## 9. File References

- **Deployment Config**: `.github/workflows/static.yml`
- **Crawler Blocking**: `robots.txt`
- **Frontend Code**: `site/static/js/app.js`, `site/static/site/style.css`
- **Content Samples**: `source/content/sample_public.md`, `source/content/private/2026-04-1-bike.yml`
- **Build Scripts**: `scripts/parse_example.rkt`
- **Deployment**: `site/` directory contains final generated site

---

## 10. Appendix: Markdown Front Matter Schema

```markdown
---
# Required fields
date: YYYY-MM-DD
draft: boolean (true|false)
private: boolean (true|false)
title: "string"
---

# Optional fields in front matter
tags:
  - tag1
  - tag2

# Main content (Markdown)
# Content goes here...
```

### Current Content Location
- **Public content**: `source/content/*.md`
- **Private content**: `source/content/private/` (excluded from builds)
- **Generated site**: `site/` (contains `index.html`, `static/`, and generated content)
