The marketing chrome.

```jsx
<NavBar active="Pricing" onNavigate={go} onDemo={demo} onLogin={login} />
...
<Footer onNavigate={go} showDisclaimer />
```

- `NavBar` is sticky + frosted; the active link is green. Logo click sends `"home"`.
- `Footer` keeps the FCA/FP compliance disclaimer on by default — keep it on for any page that
  mentions EIS/SEIS, returns, or investment.
