The UNLOCK wordmark (the "O" is a padlock glyph). Inherits `currentColor`.

```jsx
<div style={{ color: "var(--u-green)" }}><UnlockLogo height={22} /></div>   {/* nav */}
<div style={{ color: "#555" }}><UnlockLogo height={18} /></div>             {/* footer */}
```
The notch in the padlock is filled with the page background (`--u-bg-deepest`); on a different
background, override that path's fill to match.
