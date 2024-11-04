(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "15-minutes-pour-discuter-de-votre-projet-web-ou-mobile", { origin: "https://cal.com" });

Cal.ns["15-minutes-pour-discuter-de-votre-projet-web-ou-mobile"]("inline", {
  elementOrSelector: "#my-cal-inline",
  config: { "layout": "month_view" },
  calLink: "olaf-marie-sergent/15-minutes-pour-discuter-de-votre-projet-web-ou-mobile",
});

Cal.ns["15-minutes-pour-discuter-de-votre-projet-web-ou-mobile"]("ui", { "styles": { "branding": { "brandColor": "#ffffff" } }, "hideEventTypeDetails": false, "layout": "month_view" });