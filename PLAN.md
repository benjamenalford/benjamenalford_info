# benjamenalford.info - Development Plan

## Project Overview
Personal website serving as a replacement for social media and traditional web presence. Showcase CV, writings, and other content.

## Core Principles
- Static HTML with no external dependencies (unless explicitly requested)
- Not crawled by bots or AI (no CAPTCHA/human verification needed)
- All content generated from Markdown files using Pandoc

## Features & Tasks

### Quick Kills (Easy/Quick Tasks)
- [x] Remove bold from social link brackets, keep only link text bold
- [x] Create shell `static/js/app.js`

### Content Structure (Long-term)
- [ ] Populate content section from list of `.html` files
- [ ] Set up Pandoc workflow to convert `.md` → `.html`
- [ ] Implement draft filtering (drafts tagged in `.md` files)

### Bot/AI Protection
- [x] Add robots.txt to block bot crawling
- [x] Implement anti-AI scraping measures (meta tags, etc.)
- [x] No CAPTCHA or human verification required
- [x] Add `noindex` meta tag to prevent search engine indexing
- [x] Add `X-Robots-Tag` headers for server-side crawler directives
- [x] Block known AI User-Agents (e.g., GPTBot, CCBot, Anthropic-ai)
- [x] Add `X-Content-Type-Options: nosniff` header to prevent MIME type sniffing

### Private Sections
- [ ] Create private/admin sections
- [ ] Add links to internal subdomains
- [ ] Display draft content in private sections only
- [ ] Implement access control for private sections

### Future Enhancements
- [ ] Navigation system for content browsing
- [ ] Search functionality (optional)
- [ ] Analytics tracking (privacy-respecting)
