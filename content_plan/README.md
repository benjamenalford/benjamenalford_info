# Content Creation, Publishing, and Build Plan

## Overview
This document outlines the process for creating, publishing, and building the site using **Racket** and **YAML**. The goal is to use Racket for structured content generation, YAML for metadata and content organization, and a simple build process to generate the final site.

## Content Workflow
1. **Content Creation**:
   - Write content in YAML format.
   - Use Racket scripts to parse YAML and generate HTML.

2. **Publishing**:
   - Generated HTML files will be placed in the `site/` folder.
   - Static assets (CSS, JS) will be copied to the `site/` folder.

3. **Folder Structure**:
   - `source/`: Contains YAML content files.
   - `scripts/`: Contains Racket scripts for processing content.
   - `site/`: Contains the generated HTML files (final site).

## Build and Project Workflow

1. **Folder Structure**:
   - `source/`: Contains YAML content files.
   - `scripts/`: Contains Racket scripts for processing content.
   - `site/`: Contains the generated HTML files (final site).
   - `static/`: Contains static assets (CSS, JS, images).
   - `content_plan/`: Contains documentation and plans for the content creation process.

2. **Build Process**:
   - Use Racket scripts to parse YAML files and generate HTML.
   - Copy static assets (CSS, JS) to the `site/` folder.
   - Automate the process with a build script.

3. **Publishing**:
   - The `site/` folder will serve as the root for the live site.
   - Ensure all generated files are clean and optimized for performance.

## Next Steps for Content Creation
- Define the YAML schema for content.
- Write a Racket script to parse YAML and generate HTML.
- Test the workflow with sample content.
