# Website UI kit

`index.html` is a full, self-contained recreation of the Unlock marketing **homepage**, composing
the design-system tokens and the component patterns (NavBar, hero with GridPulse + glow, DataTicker,
problem/process/features/why grids, stat row, bottom CTA, compliance footer).

- Links the real `../../styles.css`, so it tracks token changes.
- Icons via Lucide CDN (`data-lucide`), matching the site's icon set.
- Use it as the reference layout when building new landing pages: copy a section, swap the copy,
  keep the rhythm (112px section padding, alternating `#1f1f1f`/`#2b2b2b`, green-fade dividers).

The full multi-page interactive recreation (Platform, Pricing, EIS & SEIS, Advice Gap, About, Team,
Founding, Waiting List + the Asset Register app demo) lives in `Unlock.dc.html` at the project root.
