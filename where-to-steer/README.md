# Where to Steer project page

A self-contained adaptation of https://github.com/eliahuhorwitz/Academic-project-page-template for the supplied paper. Template styling and attribution are retained; unused video/carousel dependencies are omitted.

## Preview

From the repository root, run `python3 -m http.server 8000`, then visit http://localhost:8000/where-to-steer/.

## Edit

- Content, authors, result table and provisional BibTeX: `index.html`.
- Local adjustments: `static/css/project.css`.
- PDF: `static/pdfs/paper.pdf`.
- Figures 1 and 2: `static/images/`, rendered from pages 5 and 6 of the supplied PDF.

## Publish

Review the draft and replace the provisional citation with the official BibTeX. Confirm the code repository URL is public. Commit the `where-to-steer/` folder and push to the branch used by your existing GitHub Pages deployment. If that deployment serves the repository root, this page will appear at https://www.sohamgadgil.com/where-to-steer/. No npm build is required for this page. If Pages uses a generated artifact instead, include this folder in that artifact.

The draft intentionally does not infer conference acceptance or publication metadata from the PDF filename.

Template website license: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). This does not assert a license for the research paper or figures.
