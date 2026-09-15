# Member logos

Drop each company's logo here using the exact filename below (PNG with a
transparent background works best; `.jpg`/`.webp` also work — just update
the matching `logo` path in `src/lib/data.ts` if you use a different
extension).

Until a file exists, that member automatically shows a lettermark badge
instead — nothing breaks, so logos can be added incrementally.

| Filename                     | Member                                                        |
|-------------------------------|----------------------------------------------------------------|
| `narcl.png`                  | National Asset Reconstruction Company Ltd (NARCL) — flagship  |
| `arcil.png`                  | Asset Reconstruction Company (India) Ltd (ARCIL)               |
| `edelweiss-arc.png`          | Edelweiss Asset Reconstruction Company Ltd                     |
| `jm-financial-arc.png`       | JM Financial Asset Reconstruction Company Ltd                  |
| `indiabulls-arc.png`         | Indiabulls Asset Reconstruction Company Ltd                    |
| `aditya-birla-arc.png`       | Aditya Birla ARC Ltd                                           |
| `phoenix-arc.png`            | Phoenix ARC Pvt Ltd                                            |
| `international-arc.png`      | International Asset Reconstruction Company Pvt Ltd             |
| `asrec.png`                  | ASREC (India) Ltd                                              |
| `alchemist-arc.png`          | Alchemist Asset Reconstruction Company Ltd                     |
| `invent-assets.png`          | Invent Assets Securitisation & Reconstruction Pvt Ltd          |
| `pegasus-arc.png`            | Pegasus Assets Reconstruction Pvt Ltd                           |
| `uv-arc.png`                 | UV Asset Reconstruction Company Ltd                             |
| `omkara-arc.png`             | Omkara Assets Reconstruction Pvt Ltd                            |
| `encore-arc.png`             | Encore Asset Reconstruction Company Pvt Ltd                     |
| `isarc.png`                  | India SME Asset Reconstruction Company Ltd (ISARC)              |
| `suraksha-arc.png`           | Suraksha Asset Reconstruction Ltd                               |
| `prudent-arc.png`            | Prudent ARC Ltd                                                 |
| `rare-arc.png`               | Rare Asset Reconstruction Ltd                                   |
| `pridhvi-arc.png`            | Pridhvi Asset Reconstruction & Securitisation Company Ltd       |

Recommended size: roughly 400×200px (landscape) or 300×300px (square),
logo mark filling most of the frame with a small margin. Files are shown
at a small size (about 48–110px tall depending on placement), so they
don't need to be large — a few hundred KB each is plenty.

If the final confirmed member list differs from the 20 above (the
association states 27 registered members), add the new entries to the
`members` array in `src/lib/data.ts` first, then drop in logos using
whatever filename you choose there.
