module.exports = {

"[next]/internal/font/google/inter_9e72d27f.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "inter_9e72d27f-module__JKMi0a__className",
  "variable": "inter_9e72d27f-module__JKMi0a__variable",
});
}}),
"[next]/internal/font/google/inter_9e72d27f.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_9e72d27f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_9e72d27f.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_9e72d27f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_9e72d27f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_9e72d27f$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/data/contact.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "businessInfo": (()=>businessInfo),
    "contactInfo": (()=>contactInfo),
    "navigation": (()=>navigation)
});
const contactInfo = {
    businessName: "Auto Checkpoint Garage Ali",
    phone: "032 530 39 99",
    email: "info@autocheckpoint-ali.ch",
    address: {
        street: "Solothurnstrasse 92",
        city: "Lengnau",
        state: "BE",
        zipCode: "2543"
    },
    hours: {
        "Montag": "08:00 - 18:00",
        "Dienstag": "08:00 - 18:00",
        "Mittwoch": "08:00 - 18:00",
        "Donnerstag": "08:00 - 18:00",
        "Freitag": "08:00 - 18:00",
        "Samstag": "09:00 - 16:00",
        "Sonntag": "Geschlossen"
    },
    socialMedia: {
        facebook: "https://facebook.com/alisautogarage",
        instagram: "https://instagram.com/alisautogarage",
        google: "https://maps.google.com"
    }
};
const navigation = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Fahrzeuge",
        href: "/cars"
    },
    {
        label: "Service",
        href: "/service"
    },
    {
        label: "Über uns",
        href: "/about"
    },
    {
        label: "Kontakt",
        href: "/contact"
    }
];
const businessInfo = {
    established: "2015",
    experience: "9+ Jahre Erfahrung",
    vehiclesSold: "500+",
    certification: "Lizenzierter Autohändler",
    specialties: [
        "Gebrauchtwagen Verkauf",
        "Fahrzeugbewertung",
        "Finanzierung & Leasing",
        "Wartung & Service",
        "Ankauf & Inzahlungnahme"
    ],
    values: [
        "Ehrliche & Transparente Preise",
        "Qualitätsfahrzeuge",
        "Umfassender Service",
        "Faire Finanzierung"
    ]
};
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_9e72d27f$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_9e72d27f.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/contact.ts [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactInfo"].businessName} - Professionelle Autowerkstatt in Lengnau`,
    description: "Expertenwartung und Autoreparaturen in Lengnau. Qualifizierte Mechaniker, transparente Preise und Qualitätsarbeit. Ölwechsel, Bremsenservice, Diagnose und mehr.",
    keywords: "Autowerkstatt, Autoreparatur, Ölwechsel, Bremsenservice, Getriebe, Motorreparatur, Diagnose, Auto, Mechaniker, Lengnau, Schweiz",
    authors: [
        {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactInfo"].businessName
        }
    ],
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1
    },
    openGraph: {
        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactInfo"].businessName} - Professionelle Autowerkstatt in Lengnau`,
        description: "Expertenwartung und Autoreparaturen mit transparenten Preisen und Qualitätsarbeit.",
        type: "website",
        locale: "de_CH"
    },
    twitter: {
        card: "summary_large_image",
        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactInfo"].businessName} - Professionelle Autowerkstatt in Lengnau`,
        description: "Expertenwartung und Autoreparaturen mit transparenten Preisen und Qualitätsarbeit."
    },
    robots: {
        index: true,
        follow: true
    },
    verification: {
        google: "your-google-verification-code"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: "scroll-smooth",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_9e72d27f$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} antialiased font-sans`,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__17a55979._.js.map