# Drop images here

The homepage hero banner currently uses stock photography (Unsplash) — the
client liked how it looked, so it's staying as-is rather than being swapped
for local placeholders. To replace a slide with real photography later,
add a file here and point that slide's `image` field in
`src/lib/data.ts` (`heroSlides`) at `/images/<filename>` instead of its
Unsplash URL.

The About page and Gallery page still use local file placeholders. Add
files using these exact names (extension can be `.jpg`, `.jpeg`, `.png`,
or `.webp` — just keep the name before the dot the same, or update the
matching path in `src/lib/data.ts` / `src/app/about/page.tsx`):

| Filename          | Used for                         |
|-------------------|-----------------------------------|
| `about.jpg`       | About Us page feature image       |
| `gallery-1.jpg` … `gallery-6.jpg` | Gallery page photos |

See the root `README.md` for suggested dimensions and more detail.
Member logos go in `members/` — see that folder's `README.md`.

## Brand logo assets

Cropped from the client-supplied `logo-original.png` and used across the
site — no need to re-add these:

| File               | Contains                          | Used in                     |
|---------------------|------------------------------------|-------------------------------|
| `logo-mark.png`     | Icon only, transparent background  | Header and footer brand mark |
| `logo-full.png`     | Icon + wordmark, transparent bg    | Available for light-background placements (the wordmark renders in dark charcoal, so it isn't used on the navy header/footer — it would be illegible there) |
| `logo-original.png` | Uncropped source file              | Kept as the master copy       |

