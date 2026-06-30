Unlock's transient confirmation — a dark raised toast with a coloured status dot, sized for lead-capture and form flows. Slides up on mount; auto-dismisses.

```jsx
const [open, setOpen] = React.useState(false);
// after a successful "Join the waiting list" submit:
setOpen(true);

<Toast
  open={open}
  variant="success"
  title="You're on the list"
  message="We'll email you priority access when we launch."
  onClose={() => setOpen(false)}
/>
```

- `variant` sets the dot colour: `success` (green, default), `info` (blue), `warning` (amber), `error` (red).
- The green dot carries a faint glow — reserve it for genuine confirmations.
- Position it yourself (e.g. `style={{ position: "fixed", bottom: 24, right: 24 }}`).
