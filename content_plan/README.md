# Content Creation, Publishing, and Build Plan

## Overview
This document outlines the process for creating, publishing, and building the site using **Racket** and **YAML**. The goal is to use Racket for structured content generation, YAML for metadata and content organization, and a simple build process to generate the final site.

The root folder files (`index.html`, `static/site/style.css`, `static/js/app.js`) and their respective folders represent the core destination site format. These files should be considered the base for all UI planning. If needed, copy them to a separate folder or project for further experimentation or development.

## Content Workflow
1. **Content Creation**:
   - Write content in YAML format.
   - Each content file will include:
     - `private`: A boolean tag (`true` or `false`) to indicate if the content is private. Private content will be excluded from the build and remain in the source folder.
     - `date`: The creation or publication date of the content.
     - `draft`: A boolean tag (`true` or `false`) to indicate if the content is a draft. Drafts will not be published.
     - `tags`: A list of tags for categorization and future builds.
   - Use Racket scripts to parse YAML and generate HTML.

2. **Publishing**:
   - Generated HTML files will be placed in the `site/` folder.
   - Static assets (CSS, JS) will be copied to the `site/` folder.

3. **Folder Structure**:
   - `source/`: Contains YAML content files.
     - Example YAML file structure:
       ```yaml
       date: 2026-03-31
       draft: false
       tags:
         - writing
         - projects
       private: false
       title: "Sample Content"
       body: |
         This is the main content of the file.
       ```
   - `source/private/`: Contains private YAML content files.
     - Files in this folder will have UNIX permissions set for read/write access only.
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
- Define the YAML schema for content:
  - `date`: The creation or publication date of the content.
  - `draft`: A boolean tag (`true` or `false`) to indicate if the content is a draft.
  - `tags`: A list of tags for categorization.
  +  - `private`: A boolean tag (`true` or `false`) to indicate if the content is private. Private content will be excluded from the build and remain in the source folder.
  +  - `title`: The title of the content.
  - `body`: The main content of the file.
- Write a Racket script to parse YAML and generate HTML.
- Test the workflow with sample content.

## TODO List
- [ ] Create scaffold and folder structure:
  - `source/`: Contains YAML content files.
  - `source/private/`: Contains private YAML content files.
  - `scripts/`: Contains Racket scripts for processing content.
  - `site/`: Contains the generated HTML files (final site).
  - `static/`: Contains static assets (CSS, JS, images).
  - `content_plan/`: Contains documentation and plans for the content creation process.
- [ ] Implement Racket script for YAML parsing
- [ ] Add error handling for missing or invalid YAML fields
- [ ] Automate build process with a Makefile or shell script
- [ ] Test private content exclusion logic
- [ ] Document the build process in detail
