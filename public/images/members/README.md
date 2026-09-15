# Member logos

Real logos supplied by the client, matched to entries in the `members`
array in `src/lib/data.ts`:

| Filename                | Member                                                   |
|--------------------------|-----------------------------------------------------------|
| `narcl.png`              | National Asset Reconstruction Company Ltd (NARCL) — flagship |
| `arcil.png`              | Asset Reconstruction Company (India) Ltd (ARCIL)          |
| `edelweiss-arc.png`      | Edelweiss Asset Reconstruction Company Ltd                |
| `jm-financial-arc.png`   | JM Financial Asset Reconstruction Company Ltd             |
| `indiabulls-arc.png`     | Indiabulls Asset Reconstruction Company Ltd               |
| `aditya-birla-arc.png`   | Aditya Birla ARC Ltd                                      |
| `phoenix-arc.png`        | Phoenix ARC Pvt Ltd                                       |
| `international-arc.png`  | International Asset Reconstruction Company Pvt Ltd        |
| `asrec.png`              | ASREC (India) Ltd                                         |
| `alchemist-arc.png`      | Alchemist Asset Reconstruction Company Ltd                |
| `invent-assets.png`      | Invent Assets Securitisation & Reconstruction Pvt Ltd     |
| `pegasus-arc.png`        | Pegasus Assets Reconstruction Pvt Ltd                     |
| `omkara-arc.png`         | Omkara Assets Reconstruction Pvt Ltd                      |
| `encore-arc.png`         | Encore Asset Reconstruction Company Pvt Ltd               |
| `isarc.png`              | India SME Asset Reconstruction Company Ltd (ISARC)        |
| `prudent-arc.png`        | Prudent ARC Ltd                                           |
| `rare-arc.png`           | Rare Asset Reconstruction Ltd                             |
| `acre-arc.png`           | ACRE ARC                                                  |
| `ana-arc.png`            | ANA ARC Pvt Ltd                                           |
| `cfm-arc.png`            | CFM Asset Reconstruction Pvt Ltd                          |
| `jc-flowers-arc.png`     | J.C. Flowers Asset Reconstruction Pvt Ltd                 |
| `maximus-arc.png`        | Maximus ARC Ltd                                           |
| `reliance-arc.png`       | Reliance Asset Reconstruction                             |

This is the confirmed, complete member list (23 companies) as supplied by
the client. If a new company joins later: add an entry to the `members`
array in `src/lib/data.ts` with a `logo` path, then drop a same-named
file here. If a logo isn't available yet, the card automatically shows a
lettermark badge instead — nothing breaks in the meantime.

Files originally arrived named after the full company name (e.g.
`"National Asset Reconstruction Company Ltd (NARCL).png"`) and were
renamed to the short slugs above to keep filenames URL-safe and avoid
spaces/parentheses in paths.
