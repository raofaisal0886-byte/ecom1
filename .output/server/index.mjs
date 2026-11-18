globalThis.__nitro_main__ = import.meta.url;
import { _ as serve, g as NodeResponse } from "./_libs/@tanstack/react-start+[...].mjs";
import { c as HTTPError, i as toEventHandler, n as defineHandler, o as callMiddleware, r as defineLazyEventHandler, s as toMiddleware, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region src/lib/error-capture.ts
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
//#endregion
//#region src/lib/error-page.ts
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
//#endregion
//#region server.ts
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./_libs/@tanstack/react-start+[...].mjs").then((n) => n.t).then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"99db-2fXileBBSVoPK2s2TrsCx2h8P84\"",
		"mtime": "2026-11-12T13:21:28.972Z",
		"size": 39387,
		"path": "../public/apple-touch-icon.png"
	},
	"/assets/account-D7Ohlo60.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc-ARMaZXVLRLIN2ZpRqqq/AzTm/pU\"",
		"mtime": "2026-11-13T10:09:25.506Z",
		"size": 220,
		"path": "../public/assets/account-D7Ohlo60.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"2c56-9ZNb9LBV+YtMDQIn2h7SQysI3BU\"",
		"mtime": "2026-11-12T13:21:32.532Z",
		"size": 11350,
		"path": "../public/favicon.ico"
	},
	"/assets/admin-DedRf7kt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-rDWc/U2Sb/9hg0RD4vXpDLIFVWE\"",
		"mtime": "2026-11-13T10:09:25.506Z",
		"size": 234,
		"path": "../public/assets/admin-DedRf7kt.js"
	},
	"/assets/about-DllGppmT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23fd-4ZdqKfAgishw0cJtU+j1GQYhV6k\"",
		"mtime": "2026-11-13T10:09:25.506Z",
		"size": 9213,
		"path": "../public/assets/about-DllGppmT.js"
	},
	"/assets/badge-check-BXyHDg5W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c-XgTTMx2A/sEnXsOqB3yFPkm83AI\"",
		"mtime": "2026-11-13T10:09:25.507Z",
		"size": 316,
		"path": "../public/assets/badge-check-BXyHDg5W.js"
	},
	"/assets/button-BrT1Zv8Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1573-te3EmALfHG7MImzrQKgQjmRGG1E\"",
		"mtime": "2026-11-13T10:09:25.507Z",
		"size": 5491,
		"path": "../public/assets/button-BrT1Zv8Z.js"
	},
	"/assets/blackwell-mark-light-B6MePFec.png": {
		"type": "image/png",
		"etag": "\"107cc-1cMMR6YpsxhKahOBo7Oq2xJv72I\"",
		"mtime": "2026-11-13T10:09:25.513Z",
		"size": 67532,
		"path": "../public/assets/blackwell-mark-light-B6MePFec.png"
	},
	"/assets/cancellation-policy-D9nXw1NP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e3-6La+n+3Z0aPYxBLkbO0xUbChy/o\"",
		"mtime": "2026-11-13T10:09:25.507Z",
		"size": 227,
		"path": "../public/assets/cancellation-policy-D9nXw1NP.js"
	},
	"/assets/blackwell-wordmark-Dlzt4CqS.png": {
		"type": "image/png",
		"etag": "\"c62d-fNel4OLET4wJycXMsak4blhWv+8\"",
		"mtime": "2026-11-13T10:09:25.513Z",
		"size": 50733,
		"path": "../public/assets/blackwell-wordmark-Dlzt4CqS.png"
	},
	"/assets/blackwell-mark-DyHjCu84.png": {
		"type": "image/png",
		"etag": "\"118b6-j2npveCDAads1knXm60BQnutmvY\"",
		"mtime": "2026-11-13T10:09:25.513Z",
		"size": 71862,
		"path": "../public/assets/blackwell-mark-DyHjCu84.png"
	},
	"/assets/blackwell-wordmark-light-5yk-ysqt.png": {
		"type": "image/png",
		"etag": "\"c3b3-v2UFIOvv9h5v8n2/d2NwQT7FEfU\"",
		"mtime": "2026-11-13T10:09:25.513Z",
		"size": 50099,
		"path": "../public/assets/blackwell-wordmark-light-5yk-ysqt.png"
	},
	"/assets/cart-BXIELSF-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"829-yLhdo97vv6M2M/QmdVf+MWhbK9I\"",
		"mtime": "2026-11-13T10:09:25.507Z",
		"size": 2089,
		"path": "../public/assets/cart-BXIELSF-.js"
	},
	"/assets/cat-bags-DhuEyN8s.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b3bc-oqOI7pyeJD+xt0vs9OWCjOefHX8\"",
		"mtime": "2026-11-13T10:09:25.514Z",
		"size": 111548,
		"path": "../public/assets/cat-bags-DhuEyN8s.jpg"
	},
	"/assets/blackwell-stacked-light-YHMHX08o.png": {
		"type": "image/png",
		"etag": "\"30726-ig0OECBSienV1BIJV261bUZGYts\"",
		"mtime": "2026-11-13T10:09:25.513Z",
		"size": 198438,
		"path": "../public/assets/blackwell-stacked-light-YHMHX08o.png"
	},
	"/assets/cat-beauty-DVtXOXCN.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ed0c-S9VGAi7kqY6kvVjFokYdMff3Xyw\"",
		"mtime": "2026-11-13T10:09:25.514Z",
		"size": 126220,
		"path": "../public/assets/cat-beauty-DVtXOXCN.jpg"
	},
	"/assets/cat-home-DtrIVdaQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"208b5-uRheyVBJBsurisfm/ToMPbSmrhI\"",
		"mtime": "2026-11-13T10:09:25.514Z",
		"size": 133301,
		"path": "../public/assets/cat-home-DtrIVdaQ.jpg"
	},
	"/assets/cat-men-CbRYd4JF.jpg": {
		"type": "image/jpeg",
		"etag": "\"1585c-a9eS7tIQZFKvl9cN1TnFraubs40\"",
		"mtime": "2026-11-13T10:09:25.514Z",
		"size": 88156,
		"path": "../public/assets/cat-men-CbRYd4JF.jpg"
	},
	"/assets/categories-BeZ6QSkm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bb-6HGYnDXtO8hOg3k5C1lTiWCiSxI\"",
		"mtime": "2026-11-13T10:09:25.508Z",
		"size": 699,
		"path": "../public/assets/categories-BeZ6QSkm.js"
	},
	"/assets/checkout-D8Lu1UKJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7d8-DIW/f3+ibWi9XZM59juY8XhxncI\"",
		"mtime": "2026-11-13T10:09:25.508Z",
		"size": 2008,
		"path": "../public/assets/checkout-D8Lu1UKJ.js"
	},
	"/assets/category._slug-BDMNEasi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"392-gkP1P6Bp8qA+x2ISm60yJpLBKsY\"",
		"mtime": "2026-11-13T10:09:25.508Z",
		"size": 914,
		"path": "../public/assets/category._slug-BDMNEasi.js"
	},
	"/assets/category._slug-Dohvc004.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26c-Wu9sDoylrDdHTrpZCito9tS4Lsc\"",
		"mtime": "2026-11-13T10:09:25.508Z",
		"size": 620,
		"path": "../public/assets/category._slug-Dohvc004.js"
	},
	"/assets/cat-jewelry-mzyZk8vX.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e92a-lCzJxTPZtH39QcPfUnDEUbcHM7M\"",
		"mtime": "2026-11-13T10:09:25.514Z",
		"size": 125226,
		"path": "../public/assets/cat-jewelry-mzyZk8vX.jpg"
	},
	"/assets/chevron-right-CsCh50Qe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-FCFDFMJtNhNKjcJdjwn2YqxDNbc\"",
		"mtime": "2026-11-13T10:09:25.508Z",
		"size": 130,
		"path": "../public/assets/chevron-right-CsCh50Qe.js"
	},
	"/assets/cat-women-D7tHftms.jpg": {
		"type": "image/jpeg",
		"etag": "\"1953d-dC8bOTiwRt+MowNVLp7BkemqpFU\"",
		"mtime": "2026-11-13T10:09:25.514Z",
		"size": 103741,
		"path": "../public/assets/cat-women-D7tHftms.jpg"
	},
	"/assets/createLucideIcon-CPqeLbuJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"52ab-R4upjnAAEul0QW0zuVtl91KrRhw\"",
		"mtime": "2026-11-13T10:09:25.509Z",
		"size": 21163,
		"path": "../public/assets/createLucideIcon-CPqeLbuJ.js"
	},
	"/assets/contact-EDfBqCrw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21fc-LxaaPprAOn0CTxXmkbs07ueaiMY\"",
		"mtime": "2026-11-13T10:09:25.508Z",
		"size": 8700,
		"path": "../public/assets/contact-EDfBqCrw.js"
	},
	"/assets/exchange-policy-qj0XsdlX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-1vU439nW232FPAzHjWbVuKkd2u8\"",
		"mtime": "2026-11-13T10:09:25.509Z",
		"size": 230,
		"path": "../public/assets/exchange-policy-qj0XsdlX.js"
	},
	"/assets/faq-D6HpnbYL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-k53fwayF48HNP35eNJkzdmF9FoM\"",
		"mtime": "2026-11-13T10:09:25.509Z",
		"size": 239,
		"path": "../public/assets/faq-D6HpnbYL.js"
	},
	"/assets/dist-D2M8EZN6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91c6-6IsVbkL7BUmGEUMHQDzSuWta+Sc\"",
		"mtime": "2026-11-13T10:09:25.509Z",
		"size": 37318,
		"path": "../public/assets/dist-D2M8EZN6.js"
	},
	"/assets/format-Dk2QP86Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c38-kQ9XXr0Xz93LCKdfUhnjkv4no38\"",
		"mtime": "2026-11-13T10:09:25.509Z",
		"size": 27704,
		"path": "../public/assets/format-Dk2QP86Y.js"
	},
	"/assets/InfoPage-D7qQiHEt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"212-HQgSDpNxNUe/QoohflI1XexOe+Y\"",
		"mtime": "2026-11-13T10:09:25.504Z",
		"size": 530,
		"path": "../public/assets/InfoPage-D7qQiHEt.js"
	},
	"/assets/login-CdCUlUuf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e0-V1P3L6+v01r9T97fPI0kdUJOcVs\"",
		"mtime": "2026-11-13T10:09:25.509Z",
		"size": 224,
		"path": "../public/assets/login-CdCUlUuf.js"
	},
	"/assets/p-boots-DD8rKNy0.jpg": {
		"type": "image/jpeg",
		"etag": "\"fc59-0zoulalhjRmnr6S1NqEoM97bmdo\"",
		"mtime": "2026-11-13T10:09:25.515Z",
		"size": 64601,
		"path": "../public/assets/p-boots-DD8rKNy0.jpg"
	},
	"/assets/hero-accessories-DleghcOM.jpg": {
		"type": "image/jpeg",
		"etag": "\"31496-hNBVhfdODq/upxbUwyVRZbqXVtA\"",
		"mtime": "2026-11-13T10:09:25.515Z",
		"size": 201878,
		"path": "../public/assets/hero-accessories-DleghcOM.jpg"
	},
	"/assets/hero-women-CETMPS1r.jpg": {
		"type": "image/jpeg",
		"etag": "\"2927f-fevNSmaT/Cl2Bmp8FhfEHuG6sH0\"",
		"mtime": "2026-11-13T10:09:25.515Z",
		"size": 168575,
		"path": "../public/assets/hero-women-CETMPS1r.jpg"
	},
	"/assets/p-bangles-Ba0FJ3Cq.jpg": {
		"type": "image/jpeg",
		"etag": "\"19af7-ys1KtleRazTqp5dtIZO1jQVil2o\"",
		"mtime": "2026-11-13T10:09:25.515Z",
		"size": 105207,
		"path": "../public/assets/p-bangles-Ba0FJ3Cq.jpg"
	},
	"/assets/p-candles-CrtCxO1o.jpg": {
		"type": "image/jpeg",
		"etag": "\"12911-Rk+sCBw1simI6ysYMv5GoV1V4EM\"",
		"mtime": "2026-11-13T10:09:25.515Z",
		"size": 76049,
		"path": "../public/assets/p-candles-CrtCxO1o.jpg"
	},
	"/assets/index-CnxlZrmj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6583d-9IcMCjyMfahifOVE0DatPhFYCvQ\"",
		"mtime": "2026-11-13T10:09:25.504Z",
		"size": 415805,
		"path": "../public/assets/index-CnxlZrmj.js"
	},
	"/assets/p-coord-BZD3NVvj.jpg": {
		"type": "image/jpeg",
		"etag": "\"fb5d-mQok1AWewV6b6wlVOygnACc0owI\"",
		"mtime": "2026-11-13T10:09:25.516Z",
		"size": 64349,
		"path": "../public/assets/p-coord-BZD3NVvj.jpg"
	},
	"/assets/p-diffuser-7pCslfWt.jpg": {
		"type": "image/jpeg",
		"etag": "\"11d49-zYO7HKoCdZpAkLiiF4ynhdfnO/s\"",
		"mtime": "2026-11-13T10:09:25.516Z",
		"size": 73033,
		"path": "../public/assets/p-diffuser-7pCslfWt.jpg"
	},
	"/assets/p-cushion-Dr9Yreq1.jpg": {
		"type": "image/jpeg",
		"etag": "\"22551-POHamK4Tbjuulf2Jd3zJAi106vI\"",
		"mtime": "2026-11-13T10:09:25.516Z",
		"size": 140625,
		"path": "../public/assets/p-cushion-Dr9Yreq1.jpg"
	},
	"/assets/p-crossbody-CyLX2u4D.jpg": {
		"type": "image/jpeg",
		"etag": "\"e130-0CJFDfmANf0wxvkQIvIrKmxWyBQ\"",
		"mtime": "2026-11-13T10:09:25.516Z",
		"size": 57648,
		"path": "../public/assets/p-crossbody-CyLX2u4D.jpg"
	},
	"/assets/p-hijab-BukQUT_K.jpg": {
		"type": "image/jpeg",
		"etag": "\"11440-Tdf6ngJwX6plX1wRK9Ap085MNDY\"",
		"mtime": "2026-11-13T10:09:25.517Z",
		"size": 70720,
		"path": "../public/assets/p-hijab-BukQUT_K.jpg"
	},
	"/assets/p-giftbox-Cio5_LzG.jpg": {
		"type": "image/jpeg",
		"etag": "\"14597-X1RStjFakAQTOiEOzf7paoFTrtk\"",
		"mtime": "2026-11-13T10:09:25.516Z",
		"size": 83351,
		"path": "../public/assets/p-giftbox-Cio5_LzG.jpg"
	},
	"/assets/p-earrings-Bg-UNRcR.jpg": {
		"type": "image/jpeg",
		"etag": "\"124df-WDMReRLnaOVN6PElZ4m1O20kHFI\"",
		"mtime": "2026-11-13T10:09:25.516Z",
		"size": 74975,
		"path": "../public/assets/p-earrings-Bg-UNRcR.jpg"
	},
	"/assets/p-lipstick-CfpGZqeI.jpg": {
		"type": "image/jpeg",
		"etag": "\"1364f-4pdlRkfPwKs5sOmsgj79sxk5LZs\"",
		"mtime": "2026-11-13T10:09:25.517Z",
		"size": 79439,
		"path": "../public/assets/p-lipstick-CfpGZqeI.jpg"
	},
	"/assets/p-perfume-Dooeuh9e.jpg": {
		"type": "image/jpeg",
		"etag": "\"161f2-ibMAI9rqSf1KFbrZu8YTU7+FGTE\"",
		"mtime": "2026-11-13T10:09:25.517Z",
		"size": 90610,
		"path": "../public/assets/p-perfume-Dooeuh9e.jpg"
	},
	"/assets/p-saree-DxhwWCVb.jpg": {
		"type": "image/jpeg",
		"etag": "\"18ac9-8kFl8pvLqpHzsZPQjL8SOZGpDJY\"",
		"mtime": "2026-11-13T10:09:25.517Z",
		"size": 101065,
		"path": "../public/assets/p-saree-DxhwWCVb.jpg"
	},
	"/assets/p-polo-FYBFS7US.jpg": {
		"type": "image/jpeg",
		"etag": "\"18018-X4uIA9DGDHqwcE8BKtL01Gok8kI\"",
		"mtime": "2026-11-13T10:09:25.517Z",
		"size": 98328,
		"path": "../public/assets/p-polo-FYBFS7US.jpg"
	},
	"/assets/p-serum-Bx55fH0v.jpg": {
		"type": "image/jpeg",
		"etag": "\"14bc2-szbx1bfclaGFUh0e2k+JVWcYn68\"",
		"mtime": "2026-11-13T10:09:25.517Z",
		"size": 84930,
		"path": "../public/assets/p-serum-Bx55fH0v.jpg"
	},
	"/assets/p-shirt-DiedzJFF.jpg": {
		"type": "image/jpeg",
		"etag": "\"12059-UDVAxf4BVHrE57YDYEFnzOwLPuc\"",
		"mtime": "2026-11-13T10:09:25.518Z",
		"size": 73817,
		"path": "../public/assets/p-shirt-DiedzJFF.jpg"
	},
	"/assets/p-sunglasses-Dk_MfAw9.jpg": {
		"type": "image/jpeg",
		"etag": "\"b63a-F5IxBDG550D2gGO2+hRO5QfzuG8\"",
		"mtime": "2026-11-13T10:09:25.518Z",
		"size": 46650,
		"path": "../public/assets/p-sunglasses-Dk_MfAw9.jpg"
	},
	"/assets/p-teaset-DQjndP4q.jpg": {
		"type": "image/jpeg",
		"etag": "\"1100c-+rQ6s0Xnc33mDXhtWxVdiZA9GNw\"",
		"mtime": "2026-11-13T10:09:25.518Z",
		"size": 69644,
		"path": "../public/assets/p-teaset-DQjndP4q.jpg"
	},
	"/assets/p-tote-BsCx_B7h.jpg": {
		"type": "image/jpeg",
		"etag": "\"1400c-xSBNipeen5NCy74D9QVfhbmno/s\"",
		"mtime": "2026-11-13T10:09:25.518Z",
		"size": 81932,
		"path": "../public/assets/p-tote-BsCx_B7h.jpg"
	},
	"/assets/p-wallet-BHLMZye5.jpg": {
		"type": "image/jpeg",
		"etag": "\"10955-B7g8s3Yc9B8BHwqXDbbSP9ALyZc\"",
		"mtime": "2026-11-13T10:09:25.518Z",
		"size": 67925,
		"path": "../public/assets/p-wallet-BHLMZye5.jpg"
	},
	"/assets/PageHeader-DXvd-deS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41b-u43DRCOHyz63lGgca4t6Z7mcMJk\"",
		"mtime": "2026-11-13T10:09:25.504Z",
		"size": 1051,
		"path": "../public/assets/PageHeader-DXvd-deS.js"
	},
	"/assets/phone-SNlykvvx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a6-TDM77OYMF9yo5X/iIbUTJq5aKjI\"",
		"mtime": "2026-11-13T10:09:25.509Z",
		"size": 678,
		"path": "../public/assets/phone-SNlykvvx.js"
	},
	"/assets/privacy-policy-CGd5vne6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e5-XIsKmd8qNm5WaPP6lcym2shLgD8\"",
		"mtime": "2026-11-13T10:09:25.510Z",
		"size": 229,
		"path": "../public/assets/privacy-policy-CGd5vne6.js"
	},
	"/assets/preload-helper-CsbKfap8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1632-+lue3/ezRXwk4CvIg3n5M6B5Hk4\"",
		"mtime": "2026-11-13T10:09:25.509Z",
		"size": 5682,
		"path": "../public/assets/preload-helper-CsbKfap8.js"
	},
	"/assets/p-watch-men-gAWrrq9c.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a599-qHlwZNJYSpBJWg1JyR8UlGB4350\"",
		"mtime": "2026-11-13T10:09:25.518Z",
		"size": 107929,
		"path": "../public/assets/p-watch-men-gAWrrq9c.jpg"
	},
	"/assets/p-watch-women-DpMhjbzr.jpg": {
		"type": "image/jpeg",
		"etag": "\"170ea-4nrAH3yZJYD10lcK8PFdIg8r4Rs\"",
		"mtime": "2026-11-13T10:09:25.519Z",
		"size": 94442,
		"path": "../public/assets/p-watch-women-DpMhjbzr.jpg"
	},
	"/assets/product._slug-C2oSmKKc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"373-plO7iUh5CQA1+xs0XeLAIAZ/2pE\"",
		"mtime": "2026-11-13T10:09:25.510Z",
		"size": 883,
		"path": "../public/assets/product._slug-C2oSmKKc.js"
	},
	"/assets/product._slug-DTmT88IW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b14-V+Qcncf79tyO/1blsX80mWJlj5k\"",
		"mtime": "2026-11-13T10:09:25.510Z",
		"size": 2836,
		"path": "../public/assets/product._slug-DTmT88IW.js"
	},
	"/assets/ProductCard-D7rIuYSi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10e5-rJOMiJ8DHdcVPB9g/GbIllZgEFY\"",
		"mtime": "2026-11-13T10:09:25.504Z",
		"size": 4325,
		"path": "../public/assets/ProductCard-D7rIuYSi.js"
	},
	"/assets/ProductList-DHs_9cyC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"191-yFZCAi4crO3OskYDHW5Nb0wb+bk\"",
		"mtime": "2026-11-13T10:09:25.504Z",
		"size": 401,
		"path": "../public/assets/ProductList-DHs_9cyC.js"
	},
	"/assets/QuantitySelector-B4UFCJGJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"495-gmpnW0g+lXxjFWGuEDoR9tPNN30\"",
		"mtime": "2026-11-13T10:09:25.506Z",
		"size": 1173,
		"path": "../public/assets/QuantitySelector-B4UFCJGJ.js"
	},
	"/assets/Rating-BQvcOIl-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e1-FL+qwAawPxXQqxBpmEUQr3kkaPg\"",
		"mtime": "2026-11-13T10:09:25.506Z",
		"size": 993,
		"path": "../public/assets/Rating-BQvcOIl-.js"
	},
	"/assets/register-DlAiAG8b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d6-Ta4Rg8iC9mEZbvjY44ehEw1kafc\"",
		"mtime": "2026-11-13T10:09:25.510Z",
		"size": 214,
		"path": "../public/assets/register-DlAiAG8b.js"
	},
	"/assets/return-policy-CfyHTJNm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-wH26e4nJqHIuPvv/fn0FzlFSu2E\"",
		"mtime": "2026-11-13T10:09:25.510Z",
		"size": 240,
		"path": "../public/assets/return-policy-CfyHTJNm.js"
	},
	"/assets/shipping-policy-D1N731Nc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f4-T2XIXZOJyNZBJcl0+HoYHajpO9Y\"",
		"mtime": "2026-11-13T10:09:25.511Z",
		"size": 244,
		"path": "../public/assets/shipping-policy-D1N731Nc.js"
	},
	"/assets/shop-CIuBggWF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"333-Ms1bOdn6vHViqNF9rM/Gx+S+bvY\"",
		"mtime": "2026-11-13T10:09:25.511Z",
		"size": 819,
		"path": "../public/assets/shop-CIuBggWF.js"
	},
	"/assets/shop-DrA9D2iY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"472-MndtZgcGmwzzeWmWxnXtS14wEGE\"",
		"mtime": "2026-11-13T10:09:25.511Z",
		"size": 1138,
		"path": "../public/assets/shop-DrA9D2iY.js"
	},
	"/assets/routes-W8oH7BVP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1334e-Nsam5yxQMcjAGQYMQ5GW1SjjEt0\"",
		"mtime": "2026-11-13T10:09:25.511Z",
		"size": 78670,
		"path": "../public/assets/routes-W8oH7BVP.js"
	},
	"/assets/shopping-bag-BmlRotEP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"221-dn1qz/sp8I/aS/8SzQejEP5Jix4\"",
		"mtime": "2026-11-13T10:09:25.511Z",
		"size": 545,
		"path": "../public/assets/shopping-bag-BmlRotEP.js"
	},
	"/assets/track-order-Br5RPUw_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-/pYe/A9UJMFqOlErgg5jum0gLbo\"",
		"mtime": "2026-11-13T10:09:25.512Z",
		"size": 231,
		"path": "../public/assets/track-order-Br5RPUw_.js"
	},
	"/assets/terms-CaiZu6Fg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-FZq30D7Dqibrj3pek/nlA9Mqu10\"",
		"mtime": "2026-11-13T10:09:25.512Z",
		"size": 230,
		"path": "../public/assets/terms-CaiZu6Fg.js"
	},
	"/assets/store-CwXNe4wV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"93b5-r1RUX3gz4xgj7BoyjualKNAeGyc\"",
		"mtime": "2026-11-13T10:09:25.511Z",
		"size": 37813,
		"path": "../public/assets/store-CwXNe4wV.js"
	},
	"/assets/styles-0hknGw4e.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18b7c-Bn8oe+9owtWylbNvpws3x3Breng\"",
		"mtime": "2026-11-13T10:09:25.519Z",
		"size": 101244,
		"path": "../public/assets/styles-0hknGw4e.css"
	},
	"/assets/truck-DdGMjNjW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"196-/jvbwTWJsP7SLnHIj0/4skx2xjQ\"",
		"mtime": "2026-11-13T10:09:25.512Z",
		"size": 406,
		"path": "../public/assets/truck-DdGMjNjW.js"
	},
	"/assets/wishlist-Ddt50TEg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d7-/zzZm2OG9MCxyX+B+YYeAhXQ5vo\"",
		"mtime": "2026-11-13T10:09:25.512Z",
		"size": 471,
		"path": "../public/assets/wishlist-Ddt50TEg.js"
	},
	"/assets/use-whatsapp-checkout-DLokxj0o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7761-5YbDe+b+GylZgaBTWedQCGryxIE\"",
		"mtime": "2026-11-13T10:09:25.512Z",
		"size": 30561,
		"path": "../public/assets/use-whatsapp-checkout-DLokxj0o.js"
	},
	"/assets/WhatsAppIcon-BkOW540I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e13-dgO4sa9iuvb+8mA52G2/CDVd4PI\"",
		"mtime": "2026-11-13T10:09:25.506Z",
		"size": 3603,
		"path": "../public/assets/WhatsAppIcon-BkOW540I.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var multiHandler = (...handlers) => {
	const final = handlers.pop();
	const middleware = handlers.filter(Boolean).map((h) => toMiddleware(h));
	return (ev) => callMiddleware(ev, middleware, final);
};
var _lazy_JVDINq = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const $0 = {
		route: "/**",
		handler: multiHandler(toEventHandler(server_default), _lazy_JVDINq)
	};
	return (m, p) => {
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		s.length;
		return {
			data: $0,
			params: { "_": s.slice(1).join("/") }
		};
	};
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default, renderErrorPage as t };
