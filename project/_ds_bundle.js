/* @ds-bundle: {"format":3,"namespace":"UnlockDesignSystem_b8131f","components":[{"name":"UnlockLogo","sourcePath":"components/brand/UnlockLogo.jsx"},{"name":"ArcButton","sourcePath":"components/buttons/ArcButton.jsx"},{"name":"ComparisonTable","sourcePath":"components/data/ComparisonTable.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/disclosure/Tabs.jsx"},{"name":"DataTicker","sourcePath":"components/effects/DataTicker.jsx"},{"name":"GridPulse","sourcePath":"components/effects/GridPulse.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"LeadCaptureInline","sourcePath":"components/forms/LeadCaptureInline.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"InsightCallout","sourcePath":"components/surfaces/InsightCallout.jsx"},{"name":"PricingTier","sourcePath":"components/surfaces/PricingTier.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"},{"name":"TeamCard","sourcePath":"components/surfaces/TeamCard.jsx"},{"name":"Badge","sourcePath":"components/text/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/text/Eyebrow.jsx"},{"name":"PullQuote","sourcePath":"components/text/PullQuote.jsx"},{"name":"SectionHeader","sourcePath":"components/text/SectionHeader.jsx"},{"name":"SectionHeading","sourcePath":"components/text/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/text/StatBlock.jsx"}],"sourceHashes":{"components/brand/UnlockLogo.jsx":"1d722274a61d","components/buttons/ArcButton.jsx":"f86502af8cb6","components/data/ComparisonTable.jsx":"d5af25984e1d","components/disclosure/Accordion.jsx":"197f091f1d52","components/disclosure/Tabs.jsx":"a7b08eceb03c","components/effects/DataTicker.jsx":"8b7f0b4c5d0a","components/effects/GridPulse.jsx":"6f219ccc1966","components/feedback/Toast.jsx":"6f4e6a4bcf0f","components/forms/Field.jsx":"4d97121387ee","components/forms/LeadCaptureInline.jsx":"9cd26a58b654","components/navigation/Footer.jsx":"e468bc2dd33f","components/navigation/NavBar.jsx":"fb729a0b3586","components/surfaces/Card.jsx":"12126e59753a","components/surfaces/FeatureCard.jsx":"e0674f4d716e","components/surfaces/InsightCallout.jsx":"7137e65a32bd","components/surfaces/PricingTier.jsx":"bfa8af5058e7","components/surfaces/StatCard.jsx":"14ed808d467a","components/surfaces/TeamCard.jsx":"fe50e2dea735","components/text/Badge.jsx":"d7363a39c07e","components/text/Eyebrow.jsx":"fa3105ac8660","components/text/PullQuote.jsx":"652a5bd5f270","components/text/SectionHeader.jsx":"4336e19319a5","components/text/SectionHeading.jsx":"98ca6a8da1e1","components/text/StatBlock.jsx":"5c52f331ce6e","ui_kits/website/deck-stage.js":"0cc26af2402a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UnlockDesignSystem_b8131f = window.UnlockDesignSystem_b8131f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/UnlockLogo.jsx
try { (() => {
/**
 * UnlockLogo — the UNLOCK wordmark (the "O" is a padlock). Renders in currentColor,
 * so set `color` on a wrapper (green in nav, #555 in footer). Width derives from height.
 */
function UnlockLogo({
  height = 22,
  style = {}
}) {
  const w = 1910 / 502 * height;
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: height,
    viewBox: "0 0 1910 502",
    fill: "none",
    "aria-label": "UNLOCK",
    style: style
  }, /*#__PURE__*/React.createElement("path", {
    d: "M186.058 376.199C186.058 408.759 169.987 423.926 135.449 423.926C100.91 423.926 84.8396 408.759 84.8396 376.199V6.84961H0V378.288C0 455.664 50.6433 501.85 135.483 501.85C220.322 501.85 271 455.698 271 378.356V6.84961H186.092V376.199H186.058Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M542.16 219.372C542.16 255.112 542.81 284.245 543.735 307.558C536.1 286.915 526.583 261.822 514.977 232.21L426.034 6.84966H339.625V494.815H423.741V279.486C423.741 245.287 422.885 216.394 421.687 192.772C429.8 214.271 439.592 239.707 450.958 268.086L539.935 494.747H625.625V6.81543H542.194V219.372H542.16Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M782.589 6.91797H697.852V494.918H915.852V418.493H782.589V6.91797Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M970.284 251V378.452C970.284 455.828 1020.62 502 1104.9 502C1189.18 502 1240.23 455.828 1240.23 378.452V251H970.284Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1104.97 423.46C1070.95 423.46 1054.43 408.081 1054.43 376.431V251H1156.16V376.431C1156.16 408.081 1139.39 423.46 1104.97 423.46Z",
    fill: "var(--u-bg-deepest)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1198.18 250.966V123.548C1198.18 46.1719 1147.57 0 1062.84 0C978.12 0 928.23 46.1719 928.23 123.548V251H1012.37V125.637C1012.37 93.0632 1028.42 77.8895 1062.91 77.8895C1097.4 77.8895 1114.1 93.0632 1114.1 125.637V251H1198.18V250.966Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1426.68 0C1342.38 0 1292.04 46.1719 1292.04 123.548V378.452C1292.04 455.828 1342.38 502 1426.68 502C1510.98 502 1562.04 455.828 1562.04 378.452V327.417H1477.95V376.363C1477.95 408.046 1461.18 423.46 1426.75 423.46C1392.32 423.46 1376.2 408.492 1376.2 376.363V125.637C1376.2 93.0632 1392.25 77.8895 1426.75 77.8895C1461.25 77.8895 1477.95 93.0632 1477.95 125.637V175.988H1562.04V123.548C1562.04 46.1719 1511.45 0 1426.68 0Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1795.51 243.626L1902.99 6.84961H1810.68L1706.17 244.927L1814.1 494.85H1909.17L1795.51 243.626Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1703.51 6.84961H1618.51V494.85H1703.51V6.84961Z",
    fill: "currentColor"
  }));
}
Object.assign(__ds_scope, { UnlockLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/UnlockLogo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ArcButton.jsx
try { (() => {
/**
 * ArcButton — the Unlock primary/outline CTA with the signature "arc-hover" ring
 * that sweeps ~270° around the button on hover (the unlock gesture).
 */
function ArcButton({
  children,
  onClick,
  variant = "primary",
  type = "button",
  full = false,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    position: "relative",
    fontFamily: "var(--u-font-body)",
    fontSize: "14px",
    fontWeight: 600,
    padding: "13px 26px",
    borderRadius: "var(--u-radius-s)",
    cursor: "pointer",
    transition: "all .2s var(--u-ease)",
    width: full ? "100%" : "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    ...style
  };
  const variants = {
    primary: {
      background: "var(--u-green)",
      color: "var(--u-on-green)",
      border: "none",
      boxShadow: hover ? "var(--u-shadow-cta)" : "none"
    },
    outline: {
      background: hover ? "rgba(255,255,255,0.08)" : "transparent",
      color: hover ? "var(--u-text)" : "var(--u-text-muted)",
      border: `1px solid ${hover ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)"}`
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant]
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: "-4px",
      width: "calc(100% + 8px)",
      height: "calc(100% + 8px)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "45",
    fill: "none",
    stroke: "var(--u-green)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeDasharray: "283",
    strokeDashoffset: hover ? 71 : 283,
    style: {
      transition: "stroke-dashoffset .5s var(--u-ease)"
    }
  })), children);
}
Object.assign(__ds_scope, { ArcButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ArcButton.jsx", error: String((e && e.message) || e) }); }

// components/data/ComparisonTable.jsx
try { (() => {
/**
 * ComparisonTable — the "Unlock vs incumbents" matrix. The first value column is
 * emphasised (green), the rest are muted — the brand's fee-comparison motif.
 * `columns` are the column headers; `rows` are { label, values: [] } in column order.
 * A value of `true` renders a green check, `false` a muted dash; strings render as-is.
 */
function ComparisonTable({
  columns = [],
  rows = []
}) {
  const check = /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
  const cell = (v, emphasised) => {
    const color = emphasised ? "var(--u-green)" : "var(--u-text-faint)";
    if (v === true) return /*#__PURE__*/React.createElement("span", {
      style: {
        color
      }
    }, check);
    if (v === false || v == null) return /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--u-text-faint)"
      }
    }, "\u2014");
    return /*#__PURE__*/React.createElement("span", {
      style: {
        color: emphasised ? "var(--u-green)" : "var(--u-text-muted)",
        fontWeight: emphasised ? 600 : 400
      }
    }, v);
  };
  const grid = `1.4fr repeat(${columns.length}, 1fr)`;
  const hcell = {
    padding: "12px 10px",
    fontSize: "11px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--u-text-faint)",
    borderBottom: "1px solid var(--u-border)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--u-border)",
      borderRadius: "var(--u-radius-l)",
      overflow: "hidden",
      background: "rgba(255,255,255,0.02)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: grid
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: hcell
  }), columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      ...hcell,
      color: i === 0 ? "var(--u-green)" : "var(--u-text-faint)",
      fontWeight: i === 0 ? 700 : 500
    }
  }, c)), rows.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 10px",
      fontSize: "14px",
      color: "var(--u-text)",
      borderBottom: "1px solid var(--u-border)"
    }
  }, r.label), r.values.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "14px 10px",
      fontSize: "14px",
      borderBottom: "1px solid var(--u-border)",
      background: i === 0 ? "rgba(0,187,119,0.04)" : "transparent"
    }
  }, cell(v, i === 0)))))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
/**
 * Accordion — Unlock's FAQ / disclosure list. Hairline-divided rows; the open
 * row reveals its answer with a gentle height/transform settle and turns its
 * chevron green. Single-open by default (set `multi` to allow many open).
 */
function Accordion({
  items = [],
  multi = false,
  defaultOpen = [],
  style = {}
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(multi ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--u-font-body)",
      borderTop: "1px solid var(--u-border)",
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--u-border)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        padding: "22px 4px",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        color: "var(--u-text)",
        fontFamily: "inherit",
        fontSize: "17px",
        fontWeight: 400,
        letterSpacing: "-0.01em"
      }
    }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: isOpen ? "var(--u-green)" : "var(--u-text-faint)",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flexShrink: 0,
        transition: "transform .4s var(--u-ease), stroke .2s var(--u-ease)",
        transform: isOpen ? "rotate(180deg)" : "none"
      }
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows .4s var(--u-ease)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 4px 24px",
        maxWidth: "62ch",
        color: "var(--u-text-muted)",
        fontSize: "15px",
        lineHeight: 1.65
      }
    }, item.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Tabs.jsx
try { (() => {
/**
 * Tabs — Unlock's content switcher. Underline style that reuses the nav-link
 * motif: a green underline grows under the active tab; inactive labels sit muted.
 * Controlled internally; renders the active tab's panel below the rail.
 */
function Tabs({
  tabs = [],
  defaultIndex = 0,
  style = {}
}) {
  const [active, setActive] = React.useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--u-font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "32px",
      borderBottom: "1px solid var(--u-border)"
    }
  }, tabs.map((t, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => setActive(i),
      style: {
        position: "relative",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 14px",
        fontFamily: "inherit",
        fontSize: "14px",
        fontWeight: 500,
        letterSpacing: "0.01em",
        color: on ? "var(--u-text)" : "var(--u-text-muted)",
        transition: "color .2s var(--u-ease)"
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        bottom: "-1px",
        height: "1.5px",
        width: on ? "100%" : "0%",
        background: "var(--u-green)",
        transition: "width .3s var(--u-ease)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: {
      paddingTop: "28px"
    }
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/effects/DataTicker.jsx
try { (() => {
const DEFAULT = [{
  label: "FTSE 250",
  value: "20,412",
  change: "+0.34%"
}, {
  label: "AIM All-Share",
  value: "731.2",
  change: "-0.12%"
}, {
  label: "GBP/USD",
  value: "1.2714",
  change: "+0.08%"
}, {
  label: "Gold",
  value: "$2,341",
  change: "+0.42%"
}, {
  label: "10Y Gilt",
  value: "4.28%",
  change: "+2bp"
}, {
  label: "BTC/GBP",
  value: "£54,210",
  change: "+1.2%"
}];

/**
 * DataTicker — the scrolling market strip under the hero. Up changes are green, down are red.
 */
function DataTicker({
  items = DEFAULT
}) {
  const loop = [...items, ...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      overflow: "hidden",
      background: "rgba(31,31,31,0.8)",
      borderBottom: "1px solid var(--u-hairline)",
      padding: "9px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      whiteSpace: "nowrap",
      width: "max-content",
      animation: "u-ticker 40s linear infinite"
    }
  }, loop.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      margin: "0 24px",
      fontSize: "12px",
      color: "var(--u-text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--u-text-muted)"
    }
  }, t.label), /*#__PURE__*/React.createElement("span", null, t.value), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.change.startsWith("+") ? "var(--u-green)" : "#f87171"
    }
  }, t.change)))));
}
Object.assign(__ds_scope, { DataTicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/effects/DataTicker.jsx", error: String((e && e.message) || e) }); }

// components/effects/GridPulse.jsx
try { (() => {
/* The hero "green squares" pattern — a 12x8 grid where flagged cells pulse. */
const HERO = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/**
 * GridPulse — the faint pulsing green-square grid behind hero sections. Absolutely
 * positioned; place inside a `position:relative; overflow:hidden` section.
 */
function GridPulse({
  pattern = HERO
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.03,
      pointerEvents: "none",
      display: "grid",
      gridTemplateColumns: "repeat(12,1fr)",
      gridTemplateRows: "repeat(8,1fr)",
      gap: "1px"
    }
  }, pattern.map((on, i) => on ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--u-green)",
      borderRadius: "2px",
      animation: "u-gridpulse 4s ease-in-out infinite",
      animationDelay: `${i % 7 * 0.4}s`
    }
  }) : /*#__PURE__*/React.createElement("div", {
    key: i
  })));
}
Object.assign(__ds_scope, { GridPulse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/effects/GridPulse.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Toast — Unlock's transient confirmation, sized for lead-capture flows
 * ("You're on the list"). Dark raised surface, hairline border, a coloured
 * status dot (green / amber / red / info), slides up on mount via transform.
 * Pass `open` to control visibility; calls `onClose` after `duration` ms.
 */
function Toast({
  open = true,
  variant = "success",
  title,
  message,
  duration = 4000,
  onClose,
  style = {}
}) {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!open) return setShown(false);
    const r = requestAnimationFrame(() => setShown(true));
    if (duration && onClose) {
      const t = setTimeout(onClose, duration);
      return () => {
        cancelAnimationFrame(r);
        clearTimeout(t);
      };
    }
    return () => cancelAnimationFrame(r);
  }, [open, duration, onClose]);
  if (!open) return null;
  const dot = {
    success: "var(--u-green)",
    info: "var(--u-info)",
    warning: "var(--u-amber)",
    error: "var(--u-red)"
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      maxWidth: "380px",
      padding: "16px 18px",
      background: "var(--u-surface)",
      border: "1px solid var(--u-border)",
      borderRadius: "var(--u-radius-m)",
      boxShadow: "0 12px 32px -8px rgba(0,0,0,0.5)",
      fontFamily: "var(--u-font-body)",
      transform: shown ? "translateY(0)" : "translateY(16px)",
      opacity: shown ? 1 : 0,
      transition: "transform .5s var(--u-ease), opacity .35s var(--u-ease)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: "8px",
      height: "8px",
      marginTop: "6px",
      borderRadius: "50%",
      background: dot,
      boxShadow: variant === "success" ? "0 0 10px 1px rgba(0,187,119,0.5)" : "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--u-text)",
      fontSize: "14px",
      fontWeight: 500
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--u-text-muted)",
      fontSize: "13px",
      lineHeight: 1.5,
      marginTop: title ? "3px" : 0
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      flexShrink: 0,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--u-text-faint)",
      fontSize: "16px",
      lineHeight: 1,
      padding: "2px"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — a labelled input or select in the Unlock dark style. Pass `as="select"`
 * with `options` for a dropdown, otherwise it renders an <input>.
 */
function Field({
  label,
  type = "text",
  placeholder,
  as = "input",
  options = [],
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const control = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "var(--u-radius-m)",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${focus ? "rgba(0,187,119,0.5)" : "rgba(255,255,255,0.12)"}`,
    color: "var(--u-text)",
    fontSize: "14px",
    fontFamily: "var(--u-font-body)",
    outline: "none",
    transition: "border-color .2s var(--u-ease)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "12px",
      color: "var(--u-text-muted)",
      marginBottom: "6px"
    }
  }, label) : null, as === "select" ? /*#__PURE__*/React.createElement("select", _extends({
    style: control,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    style: {
      background: "#222"
    }
  }, o))) : /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    style: control,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/LeadCaptureInline.jsx
try { (() => {
/**
 * LeadCaptureInline — a compact email + button band for mid-page conversion. Lighter than
 * the full waiting-list form. Calls onSubmit(email).
 */
function LeadCaptureInline({
  heading = "Join the waiting list",
  placeholder = "you@example.com",
  cta = "Join",
  note = "No commitment — priority access at launch.",
  onSubmit
}) {
  const [email, setEmail] = React.useState("");
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, heading ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--u-font-heading)",
      fontWeight: 300,
      fontSize: "var(--u-type-section-sm)",
      letterSpacing: "-0.01em",
      color: "var(--u-text)",
      marginBottom: "16px"
    }
  }, heading) : null, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(email);
    },
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: email,
    placeholder: placeholder,
    onChange: e => setEmail(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: "1 1 220px",
      padding: "13px 16px",
      borderRadius: "var(--u-radius-s)",
      background: "rgba(255,255,255,0.05)",
      border: `1px solid ${focus ? "rgba(0,187,119,0.5)" : "rgba(255,255,255,0.14)"}`,
      color: "var(--u-text)",
      fontSize: "14px",
      fontFamily: "var(--u-font-body)",
      outline: "none",
      transition: "border-color .2s var(--u-ease)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ArcButton, {
    type: "submit"
  }, cta)), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "var(--u-text-faint)",
      margin: "10px 0 0"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { LeadCaptureInline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/LeadCaptureInline.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/**
 * Footer — logo + tagline, link row, copyright, and the optional FP compliance disclaimer.
 */
function Footer({
  tagline = "Portfolio intelligence and investment access for UK investors managing £1M+. Subscription only.",
  links = ["About", "Team", "EIS & SEIS", "The Advice Gap", "Data Policy", "Privacy Policy", "Contact"],
  onNavigate = () => {},
  showDisclaimer = true,
  disclaimer = "This page contains financial promotion approved by Unlock Services Limited. Capital is at risk. EIS/SEIS eligibility and tax treatment depend on individual circumstances and may change. Intended for sophisticated and high-net-worth investors only as defined by the Financial Services and Markets Act 2000 (Financial Promotion) Order 2005. Unlock Services Limited. Registered in England and Wales."
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--u-bg-deepest)",
      padding: "32px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "24px",
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      maxWidth: "420px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#555",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.UnlockLogo, {
    height: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "#555",
      lineHeight: 1.5
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    onClick: () => onNavigate(l),
    style: {
      fontSize: "12px",
      color: "#555",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid #333",
      paddingTop: "16px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: "#444",
      lineHeight: 1.5,
      margin: 0
    }
  }, "\xA9 2026 Unlock Services Limited. Registered in England and Wales. Company No. 15610723."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: "#444",
      lineHeight: 1.5,
      margin: 0,
      textAlign: "right",
      maxWidth: "480px"
    }
  }, "This website is for information purposes only and does not constitute financial advice. Capital at risk.")), showDisclaimer ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid #333",
      marginTop: "16px",
      paddingTop: "16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: "#444",
      lineHeight: 1.6,
      margin: 0
    }
  }, disclaimer)) : null));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * NavBar — sticky frosted top bar: logo, center links, "Try a demo" (outline) + "Log in" (green).
 * Pass `items` (with optional `active`) and click handlers.
 */
function NavBar({
  items = ["Platform", "Pricing", "EIS & SEIS", "The Advice Gap", "About"],
  active,
  onNavigate = () => {},
  onDemo = () => {},
  onLogin = () => {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(31,31,31,0.94)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--u-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      height: "var(--u-nav-height)",
      maxWidth: "1320px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "42px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--u-green)",
      cursor: "pointer",
      display: "flex"
    },
    onClick: () => onNavigate("home")
  }, /*#__PURE__*/React.createElement(__ds_scope.UnlockLogo, {
    height: 22
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "28px",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map(label => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("span", {
    className: "u-navlink",
    onClick: () => onNavigate(label),
    style: {
      fontSize: "13.5px",
      cursor: "pointer",
      color: active === label ? "var(--u-green)" : "var(--u-text-muted)",
      transition: "color .2s"
    }
  }, label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onDemo,
    style: {
      fontSize: "13.5px",
      whiteSpace: "nowrap",
      color: "var(--u-text-muted)",
      padding: "8px 16px",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "var(--u-radius-s)",
      background: "transparent",
      fontFamily: "inherit",
      cursor: "pointer"
    }
  }, "Try a demo"), /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    style: {
      fontSize: "13.5px",
      whiteSpace: "nowrap",
      fontWeight: 600,
      color: "var(--u-on-green)",
      padding: "9px 20px",
      border: "none",
      borderRadius: "var(--u-radius-s)",
      background: "var(--u-green)",
      fontFamily: "inherit",
      cursor: "pointer"
    }
  }, "Log in"))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base Unlock surface on dark: hairline border, faint fill, small radius.
 * Set `hover` for the feature/tool lift+green-border interaction, or `highlighted`
 * for the green-tinted "most popular" treatment.
 */
function Card({
  children,
  hover = false,
  highlighted = false,
  radius = "m",
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const radii = {
    m: "var(--u-radius-m)",
    l: "var(--u-radius-l)"
  };
  const fill = highlighted ? "var(--u-green-fill)" : hover && h ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)";
  const border = highlighted ? "1px solid rgba(0,187,119,0.3)" : `1px solid ${hover && h ? "rgba(0,187,119,0.25)" : "var(--u-border)"}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => hover && setH(false),
    style: {
      padding: "26px",
      borderRadius: radii[radius] || radii.m,
      border,
      background: fill,
      transition: "background .3s var(--u-ease), border-color .3s var(--u-ease)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
/**
 * FeatureCard — icon-over-title-over-body card used in Features / Tools / Why / Platform
 * grids. Pass a Lucide icon (or any node) as `icon`; it renders green at 20px.
 */
function FeatureCard({
  icon,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    hover: true
  }, icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--u-green)",
      marginBottom: "16px",
      display: "flex"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "16px",
      fontWeight: 500,
      margin: "0 0 8px",
      color: "var(--u-text)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--u-text-muted)",
      lineHeight: 1.6,
      margin: 0
    }
  }, desc));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/InsightCallout.jsx
try { (() => {
/**
 * InsightCallout — the green left-border notice (app "insight"). Optional dismiss ×.
 * `label` is the small green uppercase kicker; children are the body (HTML allowed).
 */
function InsightCallout({
  label = "Your first insight",
  children,
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      border: "1px solid var(--u-border)",
      borderLeft: "3px solid var(--u-green)",
      background: "rgba(255,255,255,0.03)",
      borderRadius: "var(--u-radius-m)",
      padding: "16px 20px"
    }
  }, onDismiss ? /*#__PURE__*/React.createElement("div", {
    onClick: onDismiss,
    style: {
      position: "absolute",
      top: "12px",
      right: "14px",
      color: "var(--u-text-faint)",
      fontSize: "16px",
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--u-green)",
      marginBottom: "7px"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14.5px",
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.9)"
    }
  }, children));
}
Object.assign(__ds_scope, { InsightCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/InsightCallout.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PricingTier.jsx
try { (() => {
/**
 * PricingTier — a subscription tier card. `highlighted` gives the green "most popular"
 * treatment (tinted fill, green border, primary CTA). Pass `features` as strings.
 */
function PricingTier({
  name,
  price,
  period = "",
  desc,
  features = [],
  cta = "Join waiting list",
  highlighted = false,
  onCta
}) {
  const check = /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      marginTop: "2px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--u-radius-l)",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      border: highlighted ? "1px solid rgba(0,187,119,0.3)" : "1px solid var(--u-border)",
      background: highlighted ? "var(--u-green-fill)" : "rgba(255,255,255,0.03)"
    }
  }, highlighted ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--u-green)",
      marginBottom: "12px"
    }
  }, "Most popular") : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "20px",
      fontWeight: 500,
      margin: "0 0 4px",
      color: "var(--u-text)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "4px",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "32px",
      fontWeight: 300,
      color: "var(--u-text)"
    }
  }, price), period ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--u-text-faint)"
    }
  }, period) : null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--u-text-muted)",
      lineHeight: 1.6,
      margin: "0 0 24px"
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginBottom: "32px",
      flex: 1
    }
  }, features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      fontSize: "14px",
      color: "var(--u-text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--u-green)"
    }
  }, check), f))), /*#__PURE__*/React.createElement(__ds_scope.ArcButton, {
    variant: highlighted ? "primary" : "outline",
    full: true,
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { PricingTier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PricingTier.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
/**
 * StatCard — the KPI row used in the app: a muted label on the left, a big tabular
 * number on the right. For marketing "big number over label", use StatBlock instead.
 */
function StatCard({
  label,
  value,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid var(--u-border)",
      background: "rgba(255,255,255,0.03)",
      borderRadius: "var(--u-radius-m)",
      padding: "16px 20px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13.5px",
      color: "var(--u-text-muted)",
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "26px",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      fontVariantNumeric: "tabular-nums",
      color: "var(--u-text)"
    }
  }, value));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/TeamCard.jsx
try { (() => {
/**
 * TeamCard — initials avatar + name + green role + bio. `initials` auto-derives from
 * the name (dropping a leading "Dr.") if not supplied.
 */
function TeamCard({
  name,
  role,
  bio,
  initials
}) {
  const auto = name.replace(/^Dr\.\s*/, "").split(" ").map(n => n[0]).join("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px",
      borderRadius: "var(--u-radius-l)",
      border: "1px solid var(--u-border)",
      background: "rgba(255,255,255,0.03)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: "var(--u-green-fill-strong)",
      border: "1px solid rgba(0,187,119,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--u-green)",
      fontSize: "16px",
      fontWeight: 600,
      marginBottom: "16px"
    }
  }, initials || auto), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "16px",
      fontWeight: 500,
      margin: "0 0 2px",
      color: "var(--u-text)"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "var(--u-green)",
      margin: "0 0 12px"
    }
  }, role), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--u-text-muted)",
      lineHeight: 1.6,
      margin: 0
    }
  }, bio));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/text/Badge.jsx
try { (() => {
/**
 * Badge — small pill label. `tone` sets the colour: green (default), amber, red, neutral.
 * Use for status chips like "Most popular" or the dot-prefixed "live" pill.
 */
function Badge({
  children,
  tone = "green",
  dot = false,
  style = {}
}) {
  const tones = {
    green: {
      color: "var(--u-green)",
      bg: "var(--u-green-fill-strong)",
      border: "rgba(0,187,119,0.3)"
    },
    amber: {
      color: "var(--u-amber)",
      bg: "rgba(245,158,11,0.12)",
      border: "rgba(245,158,11,0.3)"
    },
    red: {
      color: "var(--u-red)",
      bg: "rgba(239,68,68,0.12)",
      border: "rgba(239,68,68,0.3)"
    },
    neutral: {
      color: "var(--u-text-muted)",
      bg: "rgba(255,255,255,0.06)",
      border: "rgba(255,255,255,0.15)"
    }
  };
  const t = tones[tone] || tones.green;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "0.04em",
      color: t.color,
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: "var(--u-radius-pill)",
      padding: "6px 14px",
      fontFamily: "var(--u-font-body)",
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: t.color,
      flex: "none"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/Badge.jsx", error: String((e && e.message) || e) }); }

// components/text/Eyebrow.jsx
try { (() => {
/**
 * Eyebrow — the green UPPERCASE kicker that sits above every section heading.
 */
function Eyebrow({
  children,
  hero = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--u-green)",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: hero ? "0.3em" : "0.25em",
      textTransform: "uppercase",
      margin: "0 0 16px",
      fontFamily: "var(--u-font-body)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/text/PullQuote.jsx
try { (() => {
/**
 * PullQuote — the one place Noto Serif appears: an italic testimonial/quote with an
 * optional initials avatar + attribution.
 */
function PullQuote({
  quote,
  name,
  role,
  initials
}) {
  const auto = name ? name.replace(/^Dr\.\s*/, "").split(" ").map(n => n[0]).join("") : "";
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--u-font-serif)",
      fontStyle: "italic",
      fontSize: "var(--u-type-lead)",
      lineHeight: 1.5,
      color: "var(--u-text)"
    }
  }, "\u201C", quote, "\u201D"), name ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "18px",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: "var(--u-green-fill-strong)",
      border: "1px solid rgba(0,187,119,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--u-green)",
      fontSize: "13px",
      fontWeight: 600
    }
  }, initials || auto), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--u-text)"
    }
  }, name), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "12px",
      color: "var(--u-text-faint)"
    }
  }, role) : null)) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/text/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — light-weight Inter display heading. `as` picks the tag;
 * `size` picks the fluid scale step. Use `<br/>` in children for two-part headlines.
 */
function SectionHeading({
  children,
  as = "h2",
  size = "section",
  style = {}
}) {
  const Tag = as;
  const sizes = {
    hero: {
      fontSize: "var(--u-type-hero)",
      lineHeight: 1.08,
      letterSpacing: "-0.015em"
    },
    display: {
      fontSize: "var(--u-type-display)",
      lineHeight: 1.1,
      letterSpacing: "-0.015em"
    },
    section: {
      fontSize: "var(--u-type-section)",
      lineHeight: 1.15,
      letterSpacing: "-0.01em"
    },
    sectionSm: {
      fontSize: "var(--u-type-section-sm)",
      lineHeight: 1.15,
      letterSpacing: "-0.01em"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--u-font-heading)",
      fontWeight: 300,
      color: "var(--u-text)",
      margin: 0,
      textWrap: "balance",
      ...(sizes[size] || sizes.section),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/text/SectionHeader.jsx
try { (() => {
/**
 * SectionHeader — the standard eyebrow + heading + lead block. `align="center"` for hero
 * intros, "left" for content sections. Optional `divider` draws the green hairline.
 * Pass `actions` (e.g. ArcButtons) to render a button row.
 */
function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  size = "section",
  divider = false,
  actions,
  maxWidth = 640
}) {
  const center = align === "center";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: center ? "center" : "left",
      maxWidth: center ? `${maxWidth}px` : "none",
      marginLeft: center ? "auto" : 0,
      marginRight: center ? "auto" : 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    hero: size === "hero"
  }, eyebrow) : null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    as: size === "section" || size === "sectionSm" ? "h2" : "h1",
    size: size,
    style: {
      maxWidth: center ? "none" : `${maxWidth}px`
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--u-type-lead)",
      color: "var(--u-text-muted)",
      lineHeight: 1.6,
      margin: "24px 0 0",
      maxWidth: center ? "none" : "600px"
    }
  }, lead) : null, divider ? /*#__PURE__*/React.createElement("div", {
    className: "u-divider",
    style: {
      marginTop: "20px",
      maxWidth: "60px",
      marginLeft: center ? "auto" : 0,
      marginRight: center ? "auto" : 0
    }
  }) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginTop: "32px",
      justifyContent: center ? "center" : "flex-start",
      flexWrap: "wrap"
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/text/StatBlock.jsx
try { (() => {
/**
 * StatBlock — a big light-green number over a muted label, with a green top hairline.
 * Used in the Aspiration / Advice-Gap stat rows.
 */
function StatBlock({
  value,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--u-green-line)",
      paddingTop: "24px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--u-type-stat)",
      fontWeight: 300,
      color: "var(--u-green)",
      letterSpacing: "-0.01em",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--u-text-muted)",
      margin: "8px 0 0"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    _emitDcOp(op, slide, lock, newIndex) {
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      if (this._emitDcOp({
        op: 'duplicate'
      }, slide, true, i + 1)) return;
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/deck-stage.js", error: String((e && e.message) || e) }); }

__ds_ns.UnlockLogo = __ds_scope.UnlockLogo;

__ds_ns.ArcButton = __ds_scope.ArcButton;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.DataTicker = __ds_scope.DataTicker;

__ds_ns.GridPulse = __ds_scope.GridPulse;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.LeadCaptureInline = __ds_scope.LeadCaptureInline;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.InsightCallout = __ds_scope.InsightCallout;

__ds_ns.PricingTier = __ds_scope.PricingTier;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
