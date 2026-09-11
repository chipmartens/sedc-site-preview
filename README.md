# SEDC site preview

Static preview of the Southeast Manitoba Economic Development website.

**Not approved. Not for distribution beyond the review group.**
`noindex` plus a `robots.txt` disallow, so the URL is public to anyone who has
it but will not appear in search.

Source of truth is the brain repo at
`projects/personal/sedc/website/`. This repo is build output only.

    python3 _build/build.py                     staging, internal notes visible
    python3 _build/build.py --public --noindex  what is deployed here
    python3 _build/check.py                     pre-flight

## Open before this can go anywhere real

1. Registered legal name. Footer says Group; the brain says Corporation; every
   public record still says Steinbach Economic Development Corporation.
2. Board approval on which live opportunities go public.
3. Serviced-land contradiction with steinbachedc.com, and the mill-rate one.
4. Water substantiation document before any spring-water claim ships.
5. Real photography. Every image is generated art direction except the twelve
   team headshots, which are SEDC's own. See `assets/img/SOURCES.md`.
6. A native French review of /francophone/, and accents restored.
7. Form wired to a real inbox.
