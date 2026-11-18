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
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"2c56-9ZNb9LBV+YtMDQIn2h7SQysI3BU\"",
		"mtime": "2026-11-12T13:21:32.532Z",
		"size": 11350,
		"path": "../public/favicon.ico"
	},
	"/assets/about-_82bcj_6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23fd-QwiTotFmxuDK7JwBJ2VZJwIO4xI\"",
		"mtime": "2026-11-18T15:42:02.150Z",
		"size": 9213,
		"path": "../public/assets/about-_82bcj_6.js"
	},
	"/assets/account-D7Ohlo60.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc-ARMaZXVLRLIN2ZpRqqq/AzTm/pU\"",
		"mtime": "2026-11-18T15:42:02.150Z",
		"size": 220,
		"path": "../public/assets/account-D7Ohlo60.js"
	},
	"/assets/admin-DedRf7kt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-rDWc/U2Sb/9hg0RD4vXpDLIFVWE\"",
		"mtime": "2026-11-18T15:42:02.150Z",
		"size": 234,
		"path": "../public/assets/admin-DedRf7kt.js"
	},
	"/assets/badge-check-BXyHDg5W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c-XgTTMx2A/sEnXsOqB3yFPkm83AI\"",
		"mtime": "2026-11-18T15:42:02.150Z",
		"size": 316,
		"path": "../public/assets/badge-check-BXyHDg5W.js"
	},
	"/assets/blackwell-mark-light-B6MePFec.png": {
		"type": "image/png",
		"etag": "\"107cc-1cMMR6YpsxhKahOBo7Oq2xJv72I\"",
		"mtime": "2026-11-18T15:42:02.156Z",
		"size": 67532,
		"path": "../public/assets/blackwell-mark-light-B6MePFec.png"
	},
	"/assets/blackwell-mark-DyHjCu84.png": {
		"type": "image/png",
		"etag": "\"118b6-j2npveCDAads1knXm60BQnutmvY\"",
		"mtime": "2026-11-18T15:42:02.156Z",
		"size": 71862,
		"path": "../public/assets/blackwell-mark-DyHjCu84.png"
	},
	"/assets/blackwell-wordmark-Dlzt4CqS.png": {
		"type": "image/png",
		"etag": "\"c62d-fNel4OLET4wJycXMsak4blhWv+8\"",
		"mtime": "2026-11-18T15:42:02.157Z",
		"size": 50733,
		"path": "../public/assets/blackwell-wordmark-Dlzt4CqS.png"
	},
	"/assets/blackwell-wordmark-light-5yk-ysqt.png": {
		"type": "image/png",
		"etag": "\"c3b3-v2UFIOvv9h5v8n2/d2NwQT7FEfU\"",
		"mtime": "2026-11-18T15:42:02.157Z",
		"size": 50099,
		"path": "../public/assets/blackwell-wordmark-light-5yk-ysqt.png"
	},
	"/assets/button-BOsIWx5_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15e3-rLwS8+EFhUamLZutf/gETHty/fI\"",
		"mtime": "2026-11-18T15:42:02.150Z",
		"size": 5603,
		"path": "../public/assets/button-BOsIWx5_.js"
	},
	"/assets/cancellation-policy-D9nXw1NP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e3-6La+n+3Z0aPYxBLkbO0xUbChy/o\"",
		"mtime": "2026-11-18T15:42:02.151Z",
		"size": 227,
		"path": "../public/assets/cancellation-policy-D9nXw1NP.js"
	},
	"/assets/cart-QWlGFGVT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"866-XlK5RNfz+KoKk74GMSl+fpdNalc\"",
		"mtime": "2026-11-18T15:42:02.151Z",
		"size": 2150,
		"path": "../public/assets/cart-QWlGFGVT.js"
	},
	"/assets/blackwell-stacked-light-YHMHX08o.png": {
		"type": "image/png",
		"etag": "\"30726-ig0OECBSienV1BIJV261bUZGYts\"",
		"mtime": "2026-11-18T15:42:02.156Z",
		"size": 198438,
		"path": "../public/assets/blackwell-stacked-light-YHMHX08o.png"
	},
	"/assets/cat-bags-DhuEyN8s.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b3bc-oqOI7pyeJD+xt0vs9OWCjOefHX8\"",
		"mtime": "2026-11-18T15:42:02.157Z",
		"size": 111548,
		"path": "../public/assets/cat-bags-DhuEyN8s.jpg"
	},
	"/assets/cat-beauty-DVtXOXCN.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ed0c-S9VGAi7kqY6kvVjFokYdMff3Xyw\"",
		"mtime": "2026-11-18T15:42:02.157Z",
		"size": 126220,
		"path": "../public/assets/cat-beauty-DVtXOXCN.jpg"
	},
	"/assets/cat-men-CbRYd4JF.jpg": {
		"type": "image/jpeg",
		"etag": "\"1585c-a9eS7tIQZFKvl9cN1TnFraubs40\"",
		"mtime": "2026-11-18T15:42:02.158Z",
		"size": 88156,
		"path": "../public/assets/cat-men-CbRYd4JF.jpg"
	},
	"/assets/categories-Buo4jp1X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bb-sCRDCqHXjmjeXe+SGAjXPGB5PlY\"",
		"mtime": "2026-11-18T15:42:02.151Z",
		"size": 699,
		"path": "../public/assets/categories-Buo4jp1X.js"
	},
	"/assets/category._slug-CfnoIxTu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3af-usw63akpkkNCAC382RLvVbcOuWA\"",
		"mtime": "2026-11-18T15:42:02.151Z",
		"size": 943,
		"path": "../public/assets/category._slug-CfnoIxTu.js"
	},
	"/assets/cat-jewelry-mzyZk8vX.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e92a-lCzJxTPZtH39QcPfUnDEUbcHM7M\"",
		"mtime": "2026-11-18T15:42:02.157Z",
		"size": 125226,
		"path": "../public/assets/cat-jewelry-mzyZk8vX.jpg"
	},
	"/assets/cat-home-DtrIVdaQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"208b5-uRheyVBJBsurisfm/ToMPbSmrhI\"",
		"mtime": "2026-11-18T15:42:02.157Z",
		"size": 133301,
		"path": "../public/assets/cat-home-DtrIVdaQ.jpg"
	},
	"/assets/cat-women-D7tHftms.jpg": {
		"type": "image/jpeg",
		"etag": "\"1953d-dC8bOTiwRt+MowNVLp7BkemqpFU\"",
		"mtime": "2026-11-18T15:42:02.158Z",
		"size": 103741,
		"path": "../public/assets/cat-women-D7tHftms.jpg"
	},
	"/assets/category._slug-Dayh_uX2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26c-yD3/Xkn/Mt/t2zLSrDHYh4zxoUA\"",
		"mtime": "2026-11-18T15:42:02.151Z",
		"size": 620,
		"path": "../public/assets/category._slug-Dayh_uX2.js"
	},
	"/assets/checkout-ChAQvOlR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a3-FEO+N2w5SI06smNcXLbcXkXCnyY\"",
		"mtime": "2026-11-18T15:42:02.151Z",
		"size": 1955,
		"path": "../public/assets/checkout-ChAQvOlR.js"
	},
	"/assets/chevron-right-CsCh50Qe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-FCFDFMJtNhNKjcJdjwn2YqxDNbc\"",
		"mtime": "2026-11-18T15:42:02.151Z",
		"size": 130,
		"path": "../public/assets/chevron-right-CsCh50Qe.js"
	},
	"/assets/contact-Bd7bHW-l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21fc-/3I0qOdebXfDt7YdsiItF9Pvy+Y\"",
		"mtime": "2026-11-18T15:42:02.151Z",
		"size": 8700,
		"path": "../public/assets/contact-Bd7bHW-l.js"
	},
	"/assets/createLucideIcon-CPqeLbuJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"52ab-R4upjnAAEul0QW0zuVtl91KrRhw\"",
		"mtime": "2026-11-18T15:42:02.152Z",
		"size": 21163,
		"path": "../public/assets/createLucideIcon-CPqeLbuJ.js"
	},
	"/assets/exchange-policy-qj0XsdlX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-1vU439nW232FPAzHjWbVuKkd2u8\"",
		"mtime": "2026-11-18T15:42:02.152Z",
		"size": 230,
		"path": "../public/assets/exchange-policy-qj0XsdlX.js"
	},
	"/assets/dist-D2M8EZN6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91c6-6IsVbkL7BUmGEUMHQDzSuWta+Sc\"",
		"mtime": "2026-11-18T15:42:02.152Z",
		"size": 37318,
		"path": "../public/assets/dist-D2M8EZN6.js"
	},
	"/assets/faq-D6HpnbYL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-k53fwayF48HNP35eNJkzdmF9FoM\"",
		"mtime": "2026-11-18T15:42:02.152Z",
		"size": 239,
		"path": "../public/assets/faq-D6HpnbYL.js"
	},
	"/assets/format-Dk2QP86Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c38-kQ9XXr0Xz93LCKdfUhnjkv4no38\"",
		"mtime": "2026-11-18T15:42:02.152Z",
		"size": 27704,
		"path": "../public/assets/format-Dk2QP86Y.js"
	},
	"/assets/hero-accessories-DleghcOM.jpg": {
		"type": "image/jpeg",
		"etag": "\"31496-hNBVhfdODq/upxbUwyVRZbqXVtA\"",
		"mtime": "2026-11-18T15:42:02.158Z",
		"size": 201878,
		"path": "../public/assets/hero-accessories-DleghcOM.jpg"
	},
	"/assets/i18n-Or_hBZjq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7658-Go8qfD6wCd0jZfNUTnbdJZ0OpeA\"",
		"mtime": "2026-11-18T15:42:02.152Z",
		"size": 30296,
		"path": "../public/assets/i18n-Or_hBZjq.js"
	},
	"/assets/InfoPage-D7qQiHEt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"212-HQgSDpNxNUe/QoohflI1XexOe+Y\"",
		"mtime": "2026-11-18T15:42:02.149Z",
		"size": 530,
		"path": "../public/assets/InfoPage-D7qQiHEt.js"
	},
	"/assets/login-CdCUlUuf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e0-V1P3L6+v01r9T97fPI0kdUJOcVs\"",
		"mtime": "2026-11-18T15:42:02.152Z",
		"size": 224,
		"path": "../public/assets/login-CdCUlUuf.js"
	},
	"/assets/hero-women-CETMPS1r.jpg": {
		"type": "image/jpeg",
		"etag": "\"2927f-fevNSmaT/Cl2Bmp8FhfEHuG6sH0\"",
		"mtime": "2026-11-18T15:42:02.158Z",
		"size": 168575,
		"path": "../public/assets/hero-women-CETMPS1r.jpg"
	},
	"/assets/p-boots-DD8rKNy0.jpg": {
		"type": "image/jpeg",
		"etag": "\"fc59-0zoulalhjRmnr6S1NqEoM97bmdo\"",
		"mtime": "2026-11-18T15:42:02.160Z",
		"size": 64601,
		"path": "../public/assets/p-boots-DD8rKNy0.jpg"
	},
	"/assets/index-6o0RTcEY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65a5a-OSqddSk0mD6xS/JeZRHGh96pJZU\"",
		"mtime": "2026-11-18T15:42:02.148Z",
		"size": 416346,
		"path": "../public/assets/index-6o0RTcEY.js"
	},
	"/assets/p-bangles-Ba0FJ3Cq.jpg": {
		"type": "image/jpeg",
		"etag": "\"19af7-ys1KtleRazTqp5dtIZO1jQVil2o\"",
		"mtime": "2026-11-18T15:42:02.158Z",
		"size": 105207,
		"path": "../public/assets/p-bangles-Ba0FJ3Cq.jpg"
	},
	"/assets/p-coord-BZD3NVvj.jpg": {
		"type": "image/jpeg",
		"etag": "\"fb5d-mQok1AWewV6b6wlVOygnACc0owI\"",
		"mtime": "2026-11-18T15:42:02.160Z",
		"size": 64349,
		"path": "../public/assets/p-coord-BZD3NVvj.jpg"
	},
	"/assets/p-crossbody-CyLX2u4D.jpg": {
		"type": "image/jpeg",
		"etag": "\"e130-0CJFDfmANf0wxvkQIvIrKmxWyBQ\"",
		"mtime": "2026-11-18T15:42:02.160Z",
		"size": 57648,
		"path": "../public/assets/p-crossbody-CyLX2u4D.jpg"
	},
	"/assets/p-candles-CrtCxO1o.jpg": {
		"type": "image/jpeg",
		"etag": "\"12911-Rk+sCBw1simI6ysYMv5GoV1V4EM\"",
		"mtime": "2026-11-18T15:42:02.160Z",
		"size": 76049,
		"path": "../public/assets/p-candles-CrtCxO1o.jpg"
	},
	"/assets/p-diffuser-7pCslfWt.jpg": {
		"type": "image/jpeg",
		"etag": "\"11d49-zYO7HKoCdZpAkLiiF4ynhdfnO/s\"",
		"mtime": "2026-11-18T15:42:02.160Z",
		"size": 73033,
		"path": "../public/assets/p-diffuser-7pCslfWt.jpg"
	},
	"/assets/p-cushion-Dr9Yreq1.jpg": {
		"type": "image/jpeg",
		"etag": "\"22551-POHamK4Tbjuulf2Jd3zJAi106vI\"",
		"mtime": "2026-11-18T15:42:02.160Z",
		"size": 140625,
		"path": "../public/assets/p-cushion-Dr9Yreq1.jpg"
	},
	"/assets/p-earrings-Bg-UNRcR.jpg": {
		"type": "image/jpeg",
		"etag": "\"124df-WDMReRLnaOVN6PElZ4m1O20kHFI\"",
		"mtime": "2026-11-18T15:42:02.161Z",
		"size": 74975,
		"path": "../public/assets/p-earrings-Bg-UNRcR.jpg"
	},
	"/assets/p-giftbox-Cio5_LzG.jpg": {
		"type": "image/jpeg",
		"etag": "\"14597-X1RStjFakAQTOiEOzf7paoFTrtk\"",
		"mtime": "2026-11-18T15:42:02.161Z",
		"size": 83351,
		"path": "../public/assets/p-giftbox-Cio5_LzG.jpg"
	},
	"/assets/p-lipstick-COjUxCTv.jpg": {
		"type": "image/jpeg",
		"etag": "\"69b0-dbFJVldM2bUAsoxwFcbkIfUgHAw\"",
		"mtime": "2026-11-18T15:42:02.161Z",
		"size": 27056,
		"path": "../public/assets/p-lipstick-COjUxCTv.jpg"
	},
	"/assets/p-hijab-BukQUT_K.jpg": {
		"type": "image/jpeg",
		"etag": "\"11440-Tdf6ngJwX6plX1wRK9Ap085MNDY\"",
		"mtime": "2026-11-18T15:42:02.161Z",
		"size": 70720,
		"path": "../public/assets/p-hijab-BukQUT_K.jpg"
	},
	"/assets/p-perfume-Dooeuh9e.jpg": {
		"type": "image/jpeg",
		"etag": "\"161f2-ibMAI9rqSf1KFbrZu8YTU7+FGTE\"",
		"mtime": "2026-11-18T15:42:02.161Z",
		"size": 90610,
		"path": "../public/assets/p-perfume-Dooeuh9e.jpg"
	},
	"/assets/p-polo-FYBFS7US.jpg": {
		"type": "image/jpeg",
		"etag": "\"18018-X4uIA9DGDHqwcE8BKtL01Gok8kI\"",
		"mtime": "2026-11-18T15:42:02.161Z",
		"size": 98328,
		"path": "../public/assets/p-polo-FYBFS7US.jpg"
	},
	"/assets/p-sunglasses-Dk_MfAw9.jpg": {
		"type": "image/jpeg",
		"etag": "\"b63a-F5IxBDG550D2gGO2+hRO5QfzuG8\"",
		"mtime": "2026-11-18T15:42:02.162Z",
		"size": 46650,
		"path": "../public/assets/p-sunglasses-Dk_MfAw9.jpg"
	},
	"/assets/p-saree-DxhwWCVb.jpg": {
		"type": "image/jpeg",
		"etag": "\"18ac9-8kFl8pvLqpHzsZPQjL8SOZGpDJY\"",
		"mtime": "2026-11-18T15:42:02.162Z",
		"size": 101065,
		"path": "../public/assets/p-saree-DxhwWCVb.jpg"
	},
	"/assets/p-shirt-DiedzJFF.jpg": {
		"type": "image/jpeg",
		"etag": "\"12059-UDVAxf4BVHrE57YDYEFnzOwLPuc\"",
		"mtime": "2026-11-18T15:42:02.162Z",
		"size": 73817,
		"path": "../public/assets/p-shirt-DiedzJFF.jpg"
	},
	"/assets/p-serum-Bx55fH0v.jpg": {
		"type": "image/jpeg",
		"etag": "\"14bc2-szbx1bfclaGFUh0e2k+JVWcYn68\"",
		"mtime": "2026-11-18T15:42:02.162Z",
		"size": 84930,
		"path": "../public/assets/p-serum-Bx55fH0v.jpg"
	},
	"/assets/p-teaset-DQjndP4q.jpg": {
		"type": "image/jpeg",
		"etag": "\"1100c-+rQ6s0Xnc33mDXhtWxVdiZA9GNw\"",
		"mtime": "2026-11-18T15:42:02.163Z",
		"size": 69644,
		"path": "../public/assets/p-teaset-DQjndP4q.jpg"
	},
	"/assets/p-wallet-BHLMZye5.jpg": {
		"type": "image/jpeg",
		"etag": "\"10955-B7g8s3Yc9B8BHwqXDbbSP9ALyZc\"",
		"mtime": "2026-11-18T15:42:02.163Z",
		"size": 67925,
		"path": "../public/assets/p-wallet-BHLMZye5.jpg"
	},
	"/assets/p-tote-BsCx_B7h.jpg": {
		"type": "image/jpeg",
		"etag": "\"1400c-xSBNipeen5NCy74D9QVfhbmno/s\"",
		"mtime": "2026-11-18T15:42:02.163Z",
		"size": 81932,
		"path": "../public/assets/p-tote-BsCx_B7h.jpg"
	},
	"/assets/p-watch-men-gAWrrq9c.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a599-qHlwZNJYSpBJWg1JyR8UlGB4350\"",
		"mtime": "2026-11-18T15:42:02.163Z",
		"size": 107929,
		"path": "../public/assets/p-watch-men-gAWrrq9c.jpg"
	},
	"/assets/PageHeader-DXvd-deS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41b-u43DRCOHyz63lGgca4t6Z7mcMJk\"",
		"mtime": "2026-11-18T15:42:02.149Z",
		"size": 1051,
		"path": "../public/assets/PageHeader-DXvd-deS.js"
	},
	"/assets/phone-SNlykvvx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a6-TDM77OYMF9yo5X/iIbUTJq5aKjI\"",
		"mtime": "2026-11-18T15:42:02.153Z",
		"size": 678,
		"path": "../public/assets/phone-SNlykvvx.js"
	},
	"/assets/preload-helper-CsbKfap8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1632-+lue3/ezRXwk4CvIg3n5M6B5Hk4\"",
		"mtime": "2026-11-18T15:42:02.153Z",
		"size": 5682,
		"path": "../public/assets/preload-helper-CsbKfap8.js"
	},
	"/assets/privacy-policy-CGd5vne6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e5-XIsKmd8qNm5WaPP6lcym2shLgD8\"",
		"mtime": "2026-11-18T15:42:02.153Z",
		"size": 229,
		"path": "../public/assets/privacy-policy-CGd5vne6.js"
	},
	"/assets/p-watch-women-DpMhjbzr.jpg": {
		"type": "image/jpeg",
		"etag": "\"170ea-4nrAH3yZJYD10lcK8PFdIg8r4Rs\"",
		"mtime": "2026-11-18T15:42:02.163Z",
		"size": 94442,
		"path": "../public/assets/p-watch-women-DpMhjbzr.jpg"
	},
	"/assets/product._slug-BdRuDRfz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38f-upM+uGfmo9E/vA/MEIvaY7y4Im0\"",
		"mtime": "2026-11-18T15:42:02.154Z",
		"size": 911,
		"path": "../public/assets/product._slug-BdRuDRfz.js"
	},
	"/assets/product._slug-C15TUXv6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6b-Qscfslv9b4A+AqXg2vROA75FCB8\"",
		"mtime": "2026-11-18T15:42:02.154Z",
		"size": 3691,
		"path": "../public/assets/product._slug-C15TUXv6.js"
	},
	"/assets/ProductCard-DuixD3jt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fcc-egWo2LnWIqFWUCqtjayDx3S8BV8\"",
		"mtime": "2026-11-18T15:42:02.149Z",
		"size": 4044,
		"path": "../public/assets/ProductCard-DuixD3jt.js"
	},
	"/assets/ProductList-Y4jqswhY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"191-rJ677sa5EtVb8g2w5iUx2c83S3g\"",
		"mtime": "2026-11-18T15:42:02.149Z",
		"size": 401,
		"path": "../public/assets/ProductList-Y4jqswhY.js"
	},
	"/assets/QuantitySelector-B4UFCJGJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"495-gmpnW0g+lXxjFWGuEDoR9tPNN30\"",
		"mtime": "2026-11-18T15:42:02.149Z",
		"size": 1173,
		"path": "../public/assets/QuantitySelector-B4UFCJGJ.js"
	},
	"/assets/Rating-BQvcOIl-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e1-FL+qwAawPxXQqxBpmEUQr3kkaPg\"",
		"mtime": "2026-11-18T15:42:02.149Z",
		"size": 993,
		"path": "../public/assets/Rating-BQvcOIl-.js"
	},
	"/assets/register-DlAiAG8b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d6-Ta4Rg8iC9mEZbvjY44ehEw1kafc\"",
		"mtime": "2026-11-18T15:42:02.154Z",
		"size": 214,
		"path": "../public/assets/register-DlAiAG8b.js"
	},
	"/assets/return-policy-CfyHTJNm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-wH26e4nJqHIuPvv/fn0FzlFSu2E\"",
		"mtime": "2026-11-18T15:42:02.154Z",
		"size": 240,
		"path": "../public/assets/return-policy-CfyHTJNm.js"
	},
	"/assets/shipping-policy-D1N731Nc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f4-T2XIXZOJyNZBJcl0+HoYHajpO9Y\"",
		"mtime": "2026-11-18T15:42:02.155Z",
		"size": 244,
		"path": "../public/assets/shipping-policy-D1N731Nc.js"
	},
	"/assets/routes-DhxxoDM6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1334e-jpAHpYLYRyX3jpSAplG51ROpwhA\"",
		"mtime": "2026-11-18T15:42:02.154Z",
		"size": 78670,
		"path": "../public/assets/routes-DhxxoDM6.js"
	},
	"/assets/shop-BHMudH03.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"333-hvzT5y0u3gVwv+UqeoBxCyOb2h4\"",
		"mtime": "2026-11-18T15:42:02.155Z",
		"size": 819,
		"path": "../public/assets/shop-BHMudH03.js"
	},
	"/assets/shop-CEswnLtZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48f-NRvKOPIoGebArvIv/HtmMpvENE8\"",
		"mtime": "2026-11-18T15:42:02.155Z",
		"size": 1167,
		"path": "../public/assets/shop-CEswnLtZ.js"
	},
	"/assets/shopping-bag-BmlRotEP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"221-dn1qz/sp8I/aS/8SzQejEP5Jix4\"",
		"mtime": "2026-11-18T15:42:02.155Z",
		"size": 545,
		"path": "../public/assets/shopping-bag-BmlRotEP.js"
	},
	"/assets/store--drzXfPH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97e8-AcxgsR84LUPrvroaiaRS6MnT3Vk\"",
		"mtime": "2026-11-18T15:42:02.155Z",
		"size": 38888,
		"path": "../public/assets/store--drzXfPH.js"
	},
	"/assets/terms-CaiZu6Fg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-FZq30D7Dqibrj3pek/nlA9Mqu10\"",
		"mtime": "2026-11-18T15:42:02.155Z",
		"size": 230,
		"path": "../public/assets/terms-CaiZu6Fg.js"
	},
	"/assets/truck-DdGMjNjW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"196-/jvbwTWJsP7SLnHIj0/4skx2xjQ\"",
		"mtime": "2026-11-18T15:42:02.156Z",
		"size": 406,
		"path": "../public/assets/truck-DdGMjNjW.js"
	},
	"/assets/use-whatsapp-checkout-DF7iuTu6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e9-nsIdAcB05K+mtem0HSykTePQvdM\"",
		"mtime": "2026-11-18T15:42:02.156Z",
		"size": 745,
		"path": "../public/assets/use-whatsapp-checkout-DF7iuTu6.js"
	},
	"/assets/track-order-Br5RPUw_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-/pYe/A9UJMFqOlErgg5jum0gLbo\"",
		"mtime": "2026-11-18T15:42:02.155Z",
		"size": 231,
		"path": "../public/assets/track-order-Br5RPUw_.js"
	},
	"/assets/WhatsAppIcon-CJnnI_fx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec1-J1D50B5eXBKmRD0TIXmquO5lKd8\"",
		"mtime": "2026-11-18T15:42:02.150Z",
		"size": 3777,
		"path": "../public/assets/WhatsAppIcon-CJnnI_fx.js"
	},
	"/assets/styles-D6LY18nK.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18a43-1uPTdrJwJ0Hzz+brqIsYaVJbLIs\"",
		"mtime": "2026-11-18T15:42:02.163Z",
		"size": 100931,
		"path": "../public/assets/styles-D6LY18nK.css"
	},
	"/assets/wishlist-B-bsznlo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d7-GPI5pXD46DmtOOQChPiN0f4x4ww\"",
		"mtime": "2026-11-18T15:42:02.156Z",
		"size": 471,
		"path": "../public/assets/wishlist-B-bsznlo.js"
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
