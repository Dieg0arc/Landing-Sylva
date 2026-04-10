# landing-sylva

Plant-themed landing page with scroll-driven animations and a compostable bag product showcase.

## Stack

- [Astro](https://astro.build/) — component-based static site framework
- [Motion One](https://motion.dev/) — scroll-triggered reveal animations
- Canvas API — scroll-driven frame-by-frame product animation (173 frames)

## Sections

| Section | Description |
|---|---|
| Hero | Typewriter headline with 120-frame scroll canvas |
| Growth Stages | 4-stage plant lifecycle cards |
| Product Showcase | 173-frame scroll animation with 4 scroll phases |
| Ecosystems | 4 biome cards with stats |
| Process | Step-by-step plant growth process |
| Photosynthesis | Visual breakdown of photosynthesis |
| Stats | Animated counters with botanical data |
| Curiosities | Quote cards with plant facts |
| Tips | Cultivation guide with animated progress bars |
| Conservation | Endangered plant species statistics |

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/     # Astro components (one per section)
├── data/           # Typed content (content.ts)
├── layouts/        # Base HTML layout
├── scripts/        # TypeScript modules (canvas, reveal, navbar…)
└── styles/         # tokens.css + global.css
public/
├── 3d/             # Product frame sequence (frame_001.jpg … frame_173.jpg)
└── frames/         # Hero frame sequence
```
