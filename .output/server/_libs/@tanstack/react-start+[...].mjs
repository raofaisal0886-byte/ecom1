import { n as __exportAll } from "../../_runtime.mjs";
import { n as require_react } from "../@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../radix-ui__react-context+react.mjs";
import { $ as SerovalSerializationError, A as PROMISE_CONSTRUCTOR, At as resolveManifestAssetLink, B as SYMBOL_STRING, Bt as dehydrateSsrMatchId, C as ARRAY_BUFFER_CONSTRUCTOR, D as ERROR_CONSTRUCTOR_STRING, Dt as createInlineCssStyleAsset, E as ERROR_CONSTRUCTOR, Et as createInlineCssPlaceholderAsset, F as SERIALIZED_PROMISE_CONSTRUCTOR, Ft as invariant, G as SerovalConflictedNodeIdError, H as SYM_IS_CONCAT_SPREADABLE, Ht as rootRouteId, I as SERIALIZED_PROMISE_FAILURE, It as createSieveCache, J as SerovalMalformedNodeError, K as SerovalDepthLimitError, L as SERIALIZED_PROMISE_SUCCESS, Lt as decodePath, M as SERIALIZED_ARRAY_BUFFER_CONSTRUCTOR, Mt as waitForReason, N as SERIALIZED_ASYNC_ITERATOR_CONSTRUCTOR, Nt as _getRenderedMatches, O as INV_SYMBOL_REF, Ot as getScriptPreloadAttrs, P as SERIALIZED_ITERATOR_CONSTRUCTOR, Pt as executeRewriteInput, Q as SerovalPluginValidationError, R as SERIALIZED_STREAM_CONSTRUCTOR, Rt as isDangerousProtocol, T as CONSTANT_VAL, U as SYM_ITERATOR, Ut as isNotFound, V as SYM_ASYNC_ITERATOR, Vt as isRedirect, W as SYM_TO_STRING_TAG, X as SerovalMissingPluginError, Y as SerovalMissingInstanceError, Z as SerovalParserError, _t as sequenceToIterator, a as isSsrResponse, at as createPlugin, c as stripSsrResponseBody, ct as createStream, dt as getReference, et as SerovalUnknownTypedArrayError, ft as getReferenceID, gt as resolvePlugins, ht as isStream, i as disposeSsrResponse, it as TEMPORAL_TYPE_NAME, j as REFERENCES_KEY, jt as resolveManifestCssLink, k as OpaqueReference, kt as getStylesheetHref, l as createHydrationScripts, lt as deserializeString, m as RouterProvider, mt as isSequence, n as bindSsrResponseToRequest, nt as SerovalUnsupportedTypeError, o as normalizeSsrResponse, ot as createSequence, pt as isLiveStream, q as SerovalDeserializationError, r as defineHandlerCallback, rt as Stream, s as replaceSsrResponse, st as createSequenceFromIterable, t as renderRouterToStream, tt as SerovalUnsupportedNodeError, u as GLOBAL_TSR, ut as getPlainObjectPlugins, vt as serializeString, w as CONSTANT_STRING, yt as streamToAsyncIterable, z as SYMBOL_REF, zt as isPromise } from "./react-router+[...].mjs";
import { n as createServerHistory } from "../tanstack__history.mjs";
import nodeHTTP from "node:http";
import { PassThrough, Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import nodeHTTPS from "node:https";
import nodeHTTP2 from "node:http2";
import { AsyncLocalStorage } from "node:async_hooks";
//#region node_modules/srvx/dist/_chunks/_url.mjs
function lazyInherit(target, source, sourceKey) {
	for (const key of [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]) {
		if (key === "constructor") continue;
		const targetDesc = Object.getOwnPropertyDescriptor(target, key);
		const desc = Object.getOwnPropertyDescriptor(source, key);
		let modified = false;
		if (desc.get) {
			modified = true;
			desc.get = targetDesc?.get || function() {
				return this[sourceKey][key];
			};
		}
		if (desc.set) {
			modified = true;
			desc.set = targetDesc?.set || function(value) {
				this[sourceKey][key] = value;
			};
		}
		if (!targetDesc?.value && typeof desc.value === "function") {
			modified = true;
			desc.value = function(...args) {
				return this[sourceKey][key](...args);
			};
		}
		if (modified) Object.defineProperty(target, key, desc);
	}
}
var _needsNormRE = /(?:(?:^|\/)(?:\.|\.\.|%2e|%2e\.|\.%2e|%2e%2e)(?:\/|$))|[\\^#"<>{}`\x80-\uffff]/i;
var _searchNeedsNormRE = /[#"'<>]/;
var FastURL = /* @__PURE__ */ (() => {
	const NativeURL = globalThis.URL;
	const FastURL = class URL {
		#url;
		#href;
		#protocol;
		#host;
		#pathname;
		#search;
		#searchParams;
		#pos;
		constructor(url) {
			if (typeof url === "string") {
				const isOriginForm = url[0] === "/";
				if (isOriginForm && !_searchNeedsNormRE.test(url)) this.#href = url;
				else this.#url = new NativeURL(isOriginForm ? `http://localhost${url}` : url);
			} else if (_needsNormRE.test(url.pathname) || url.search && _searchNeedsNormRE.test(url.search)) this.#url = new NativeURL(`${url.protocol || "http:"}//${url.host || "localhost"}${url.pathname}${url.search || ""}`);
			else {
				this.#protocol = url.protocol;
				this.#host = url.host;
				this.#pathname = url.pathname;
				this.#search = url.search;
			}
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeURL;
		}
		get _url() {
			if (this.#url) return this.#url;
			this.#url = new NativeURL(this.href);
			this.#href = void 0;
			this.#protocol = void 0;
			this.#host = void 0;
			this.#pathname = void 0;
			this.#search = void 0;
			this.#searchParams = void 0;
			this.#pos = void 0;
			return this.#url;
		}
		get href() {
			if (this.#url) return this.#url.href;
			if (!this.#href) this.#href = `${this.#protocol || "http:"}//${this.#host || "localhost"}${this.#pathname || "/"}${this.#search || ""}`;
			return this.#href;
		}
		#getPos() {
			if (!this.#pos) {
				const url = this.href;
				const protoIndex = url.indexOf("://");
				const pathnameIndex = protoIndex === -1 ? -1 : url.indexOf("/", protoIndex + 4);
				const qIndex = pathnameIndex === -1 ? -1 : url.indexOf("?", pathnameIndex);
				this.#pos = [
					protoIndex,
					pathnameIndex,
					qIndex
				];
			}
			return this.#pos;
		}
		get pathname() {
			if (this.#url) return this.#url.pathname;
			if (this.#pathname === void 0) {
				const [, pathnameIndex, queryIndex] = this.#getPos();
				if (pathnameIndex === -1) return this._url.pathname;
				this.#pathname = this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex);
			}
			return this.#pathname;
		}
		get search() {
			if (this.#url) return this.#url.search;
			if (this.#search === void 0) {
				const [, pathnameIndex, queryIndex] = this.#getPos();
				if (pathnameIndex === -1) return this._url.search;
				const url = this.href;
				this.#search = queryIndex === -1 || queryIndex === url.length - 1 ? "" : url.slice(queryIndex);
			}
			return this.#search;
		}
		get searchParams() {
			if (this.#url) return this.#url.searchParams;
			if (!this.#searchParams) this.#searchParams = new URLSearchParams(this.search);
			return this.#searchParams;
		}
		get protocol() {
			if (this.#url) return this.#url.protocol;
			if (this.#protocol === void 0) {
				const [protocolIndex] = this.#getPos();
				if (protocolIndex === -1) return this._url.protocol;
				const url = this.href;
				this.#protocol = url.slice(0, protocolIndex + 1);
			}
			return this.#protocol;
		}
		toString() {
			return this.href;
		}
		toJSON() {
			return this.href;
		}
	};
	lazyInherit(FastURL.prototype, NativeURL.prototype, "_url");
	Object.setPrototypeOf(FastURL.prototype, NativeURL.prototype);
	Object.setPrototypeOf(FastURL, NativeURL);
	return FastURL;
})();
//#endregion
//#region node_modules/srvx/dist/_chunks/_utils2.mjs
function resolvePortAndHost(opts) {
	const _port = opts.port ?? globalThis.process?.env.PORT ?? 3e3;
	const port = typeof _port === "number" ? _port : Number.parseInt(_port, 10);
	if (port < 0 || port > 65535) throw new RangeError(`Port must be between 0 and 65535 (got "${port}").`);
	return {
		port,
		hostname: opts.hostname ?? globalThis.process?.env.HOST
	};
}
function fmtURL(host, port, secure) {
	if (!host || !port) return;
	if (host.includes(":")) host = `[${host}]`;
	return `http${secure ? "s" : ""}://${host}:${port}/`;
}
function printListening(opts, url) {
	if (!url || (opts.silent ?? globalThis.process?.env?.TEST)) return;
	let additionalInfo = "";
	try {
		const _url = new URL(url);
		if (_url.hostname === "[::]" || _url.hostname === "0.0.0.0") {
			_url.hostname = "localhost";
			url = _url.href;
			additionalInfo = " (all interfaces)";
		}
	} catch {}
	let listeningOn = `➜ Listening on:`;
	if (globalThis.process.stdout?.isTTY) {
		listeningOn = `\u001B[32m${listeningOn}\u001B[0m`;
		url = `\u001B[36m${url}\u001B[0m`;
		additionalInfo = `\u001B[2m${additionalInfo}\u001B[0m`;
	}
	console.log(`${listeningOn} ${url}${additionalInfo}`);
}
function resolveTLSOptions(opts) {
	if (!opts.tls || opts.protocol === "http") return;
	const cert = resolveCertOrKey(opts.tls.cert);
	const key = resolveCertOrKey(opts.tls.key);
	if (!cert && !key) {
		if (opts.protocol === "https") throw new TypeError("TLS `cert` and `key` must be provided for `https` protocol.");
		return;
	}
	if (!cert || !key) throw new TypeError("TLS `cert` and `key` must be provided together.");
	return {
		cert,
		key,
		passphrase: opts.tls.passphrase
	};
}
function resolveCertOrKey(value) {
	if (!value) return;
	if (typeof value !== "string") throw new TypeError("TLS certificate and key must be strings in PEM format or file paths.");
	if (value.startsWith("-----BEGIN ")) return value;
	const { readFileSync } = process.getBuiltinModule("node:fs");
	return readFileSync(value, "utf8");
}
function createWaitUntil() {
	const promises = /* @__PURE__ */ new Set();
	return {
		waitUntil: (promise) => {
			if (typeof promise?.then !== "function") return;
			promises.add(Promise.resolve(promise).catch(console.error).finally(() => {
				promises.delete(promise);
			}));
		},
		wait: () => {
			return Promise.all(promises);
		}
	};
}
//#endregion
//#region node_modules/srvx/dist/_chunks/_utils.mjs
var noColor = /* @__PURE__ */ (() => {
	const env = globalThis.process?.env ?? {};
	return env.NO_COLOR === "1" || env.TERM === "dumb";
})();
var _c = (c, r = 39) => (t) => noColor ? t : `\u001B[${c}m${t}\u001B[${r}m`;
var bold = /* @__PURE__ */ _c(1, 22);
var red = /* @__PURE__ */ _c(31);
var green = /* @__PURE__ */ _c(32);
var gray = /* @__PURE__ */ _c(90);
//#endregion
//#region node_modules/srvx/dist/_chunks/_plugins.mjs
function wrapFetch(server) {
	const fetchHandler = server.options.fetch;
	const middleware = server.options.middleware || [];
	return middleware.length === 0 ? fetchHandler : (request) => callMiddleware(request, fetchHandler, middleware, 0);
}
function callMiddleware(request, fetchHandler, middleware, index) {
	if (index === middleware.length) return fetchHandler(request);
	return middleware[index](request, () => callMiddleware(request, fetchHandler, middleware, index + 1));
}
var errorPlugin = (server) => {
	const errorHandler = server.options.error;
	if (!errorHandler) return;
	server.options.middleware.unshift((_req, next) => {
		try {
			const res = next();
			return res instanceof Promise ? res.catch((error) => errorHandler(error)) : res;
		} catch (error) {
			return errorHandler(error);
		}
	});
};
var gracefulShutdownPlugin = (server) => {
	const config = server.options?.gracefulShutdown;
	if (!globalThis.process?.on || config === false || config === void 0 && (process.env.CI || process.env.TEST)) return;
	const gracefulTimeout = config === true || !config?.gracefulTimeout ? Number.parseInt(process.env.SERVER_SHUTDOWN_TIMEOUT || "") || 5 : config.gracefulTimeout;
	let isClosing = false;
	let isClosed = false;
	const w = server.options.silent ? () => {} : process.stderr.write.bind(process.stderr);
	const forceClose = async () => {
		if (isClosed) return;
		w(red("\x1B[2K\rForcibly closing connections...\n"));
		isClosed = true;
		await server.close(true);
	};
	const shutdown = async () => {
		if (isClosing || isClosed) return;
		setTimeout(() => {
			globalThis.process.once("SIGINT", forceClose);
		}, 100);
		isClosing = true;
		const closePromise = server.close();
		for (let remaining = gracefulTimeout; remaining > 0; remaining--) {
			w(gray(`\rStopping server gracefully (${remaining}s)... Press ${bold("Ctrl+C")} again to force close.`));
			if (await Promise.race([closePromise.then(() => true), new Promise((r) => setTimeout(() => r(false), 1e3))])) {
				w("\x1B[2K\r" + green("Server closed successfully.\n"));
				isClosed = true;
				return;
			}
		}
		w("\x1B[2K\rGraceful shutdown timed out.\n");
		await forceClose();
	};
	for (const sig of ["SIGINT", "SIGTERM"]) globalThis.process.on(sig, shutdown);
};
//#endregion
//#region node_modules/srvx/dist/_chunks/_trust-proxy.mjs
function isTrustedProxy(trustProxy, remoteAddress) {
	if (trustProxy === void 0 || trustProxy === false) return false;
	if (trustProxy === true) return true;
	if (trustProxy === "loopback") return isLoopbackAddress(remoteAddress);
	if (remoteAddress === void 0) return false;
	if (trustProxy.includes(remoteAddress)) return true;
	const mapped = ipv4FromMapped(remoteAddress);
	return mapped !== void 0 && trustProxy.includes(mapped);
}
function ipv4FromMapped(address) {
	return address.startsWith("::ffff:") && address.includes(".") ? address.slice(7) : void 0;
}
function isLoopbackAddress(address) {
	return !!address && (address === "::1" || address.startsWith("127.") || address.startsWith("::ffff:127."));
}
var HOST_RE = /^(\[(?:[A-Fa-f0-9:.]+)\]|(?:[A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+|(?:\d{1,3}\.){3}\d{1,3})(:\d{1,5})?$/;
function firstForwardedValue(value) {
	if (!value) return;
	return (Array.isArray(value) ? value[0] : value).split(",")[0].trim() || void 0;
}
//#endregion
//#region node_modules/srvx/dist/_chunks/_body-limit.mjs
function createBodyTooLargeError(maxRequestBodySize) {
	return Object.assign(/* @__PURE__ */ new Error(`Request body exceeds the maximum allowed size of ${maxRequestBodySize} bytes.`), {
		code: "ERR_BODY_TOO_LARGE",
		statusCode: 413,
		status: 413
	});
}
function limitBodyStream(stream, maxRequestBodySize) {
	const reader = stream.getReader();
	let size = 0;
	return new ReadableStream({
		async pull(controller) {
			const { done, value } = await reader.read();
			if (done) {
				controller.close();
				return;
			}
			size += value.byteLength;
			if (size > maxRequestBodySize) {
				const error = createBodyTooLargeError(maxRequestBodySize);
				reader.cancel(error).catch(() => {});
				controller.error(error);
				return;
			}
			controller.enqueue(value);
		},
		cancel(reason) {
			return reader.cancel(reason);
		}
	});
}
//#endregion
//#region node_modules/srvx/dist/adapters/node.mjs
function sendNodeResponseDetached(nodeRes, webRes) {
	try {
		return _sendNodeResponse(nodeRes, webRes, true);
	} catch (error) {
		handleSendError(nodeRes, error);
	}
}
function handleSendError(nodeRes, _error) {
	if (nodeRes.headersSent) nodeRes.destroy();
	else {
		nodeRes.statusCode = 500;
		nodeRes.end();
	}
}
function _sendNodeResponse(nodeRes, webRes, detached) {
	if (!webRes) {
		nodeRes.statusCode = 500;
		return endNodeResponse(nodeRes, detached);
	}
	if (webRes._toNodeResponse) {
		const res = webRes._toNodeResponse();
		if (res.body) {
			if (res.body instanceof ReadableStream) {
				writeHead(nodeRes, res.status, res.statusText, res.headers);
				return streamBody(res.body, nodeRes);
			} else if (typeof res.body?.pipe === "function") return pipeBody(res.body, nodeRes, res.status, res.statusText, res.headers);
			writeHead(nodeRes, res.status, res.statusText, res.headers);
			nodeRes.write(res.body);
		} else writeHead(nodeRes, res.status, res.statusText, res.headers);
		return endNodeResponse(nodeRes, detached);
	}
	const rawHeaders = [];
	for (const [key, value] of webRes.headers) rawHeaders.push(key, value);
	writeHead(nodeRes, webRes.status, webRes.statusText, rawHeaders);
	return webRes.body ? streamBody(webRes.body, nodeRes) : endNodeResponse(nodeRes, detached);
}
function writeHead(nodeRes, status, statusText, rawHeaders) {
	if (!nodeRes.headersSent) if (nodeRes.req?.httpVersion === "2.0") nodeRes.writeHead(status, rawHeaders);
	else nodeRes.writeHead(status, statusText, rawHeaders);
}
function endNodeResponse(nodeRes, detached) {
	if (detached) {
		nodeRes.end();
		return;
	}
	return new Promise((resolve) => nodeRes.end(resolve));
}
function pipeBody(stream, nodeRes, status, statusText, headers) {
	if (nodeRes.destroyed) {
		stream.destroy?.();
		return;
	}
	if (typeof stream.on !== "function" || typeof stream.destroy !== "function") {
		writeHead(nodeRes, status, statusText, headers);
		stream.pipe(nodeRes);
		return new Promise((resolve) => nodeRes.on("close", resolve));
	}
	if (stream.destroyed) {
		writeHead(nodeRes, 500, "Internal Server Error", []);
		return endNodeResponse(nodeRes);
	}
	return new Promise((resolve) => {
		function onEarlyError() {
			stream.off("readable", onReadable);
			stream.destroy();
			writeHead(nodeRes, 500, "Internal Server Error", []);
			endNodeResponse(nodeRes).then(resolve);
		}
		function onReadable() {
			stream.off("error", onEarlyError);
			if (nodeRes.destroyed) {
				stream.destroy();
				return resolve();
			}
			writeHead(nodeRes, status, statusText, headers);
			pipeline(stream, nodeRes).catch(() => {}).then(() => resolve());
		}
		stream.once("error", onEarlyError);
		stream.once("readable", onReadable);
	});
}
function streamBody(stream, nodeRes) {
	if (nodeRes.destroyed) {
		stream.cancel();
		return;
	}
	const reader = stream.getReader();
	function streamCancel(error) {
		reader.cancel(error).catch(() => {});
		if (error) nodeRes.destroy(error);
	}
	function streamHandle({ done, value }) {
		try {
			if (done) nodeRes.end();
			else if (nodeRes.write(value)) reader.read().then(streamHandle, streamCancel);
			else nodeRes.once("drain", () => reader.read().then(streamHandle, streamCancel));
		} catch (error) {
			streamCancel(error instanceof Error ? error : void 0);
		}
	}
	nodeRes.on("close", streamCancel);
	nodeRes.on("error", streamCancel);
	reader.read().then(streamHandle, streamCancel);
	return reader.closed.catch(streamCancel).finally(() => {
		nodeRes.off("close", streamCancel);
		nodeRes.off("error", streamCancel);
	});
}
var NodeRequestURL = class extends FastURL {
	constructor({ req, trusted = false }) {
		const path = req.url || "/";
		const forwardedHost = trusted ? firstForwardedValue(req.headers["x-forwarded-host"]) : void 0;
		let host = (forwardedHost && HOST_RE.test(forwardedHost) ? forwardedHost : void 0) || req.headers.host || req.headers[":authority"];
		if (host && !HOST_RE.test(host)) host = "_invalid_";
		else if (!host) if (req.socket) host = `${req.socket.localFamily === "IPv6" ? "[" + req.socket.localAddress + "]" : req.socket.localAddress}:${req.socket?.localPort || "80"}`;
		else host = "localhost";
		const forwardedProto = trusted ? firstForwardedValue(req.headers["x-forwarded-proto"]) : void 0;
		const protocol = req.socket?.encrypted || forwardedProto === "https" || trusted && req.headers[":scheme"] === "https" ? "https:" : "http:";
		if (path[0] === "/") {
			const qIndex = path.indexOf("?");
			super({
				protocol,
				host,
				pathname: qIndex === -1 ? path : path.slice(0, qIndex) || "/",
				search: qIndex === -1 ? "" : path.slice(qIndex) || ""
			});
		} else if (path === "*") super({
			protocol,
			host,
			pathname: "/*",
			search: ""
		});
		else super(path);
	}
};
var _nonJoinedHeaders = /* @__PURE__ */ new Set([
	"age",
	"authorization",
	"content-length",
	"content-type",
	"etag",
	"expires",
	"from",
	"host",
	"if-modified-since",
	"if-unmodified-since",
	"last-modified",
	"location",
	"max-forwards",
	"proxy-authorization",
	"referer",
	"retry-after",
	"server",
	"user-agent"
]);
var _validHeaderNameRE = /^[!#$%&'*+\-.^_`|~\dA-Za-z]+$/;
function _isRepeated(rawHeaders, lowerName) {
	let seen = false;
	for (let i = 0; i < rawHeaders.length; i += 2) {
		const key = rawHeaders[i];
		if (key.length === lowerName.length && key.toLowerCase() === lowerName) {
			if (seen) return true;
			seen = true;
		}
	}
	return false;
}
var NodeRequestHeaders = /* @__PURE__ */ (() => {
	const NativeHeaders = globalThis.Headers;
	class Headers {
		#req;
		#headers;
		constructor(req) {
			this.#req = req;
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeHeaders;
		}
		get _headers() {
			if (!this.#headers) {
				const headers = new NativeHeaders();
				const rawHeaders = this.#req.rawHeaders;
				const len = rawHeaders.length;
				for (let i = 0; i < len; i += 2) {
					const key = rawHeaders[i];
					if (key.charCodeAt(0) === 58) continue;
					const value = rawHeaders[i + 1];
					headers.append(key, value);
				}
				this.#headers = headers;
			}
			return this.#headers;
		}
		get(name) {
			if (this.#headers) return this.#headers.get(name);
			const lower = name.toLowerCase();
			if (lower.charCodeAt(0) === 58) return this._headers.get(name);
			const value = this.#req.headers[lower];
			if (typeof value === "string") return _nonJoinedHeaders.has(lower) && _isRepeated(this.#req.rawHeaders, lower) ? this._headers.get(name) : value;
			if (Array.isArray(value)) return value.join(", ");
			return lower !== "__proto__" && _validHeaderNameRE.test(name) ? null : this._headers.get(name);
		}
		has(name) {
			if (this.#headers) return this.#headers.has(name);
			const lower = name.toLowerCase();
			if (lower.charCodeAt(0) === 58) return this._headers.has(name);
			if (Object.hasOwn(this.#req.headers, lower)) return true;
			return lower !== "__proto__" && _validHeaderNameRE.test(name) ? false : this._headers.has(name);
		}
		getSetCookie() {
			if (this.#headers) return this.#headers.getSetCookie();
			const value = this.#req.headers["set-cookie"];
			return Array.isArray(value) ? value.slice() : value ? [value] : [];
		}
		entries() {
			return this._headers.entries();
		}
		[Symbol.iterator]() {
			return this.entries();
		}
	}
	lazyInherit(Headers.prototype, NativeHeaders.prototype, "_headers");
	Object.setPrototypeOf(Headers, NativeHeaders);
	Object.setPrototypeOf(Headers.prototype, NativeHeaders.prototype);
	return Headers;
})();
var kNativeRequest = /* @__PURE__ */ Symbol.for("srvx.nativeRequest");
var NodeRequest = /* @__PURE__ */ (() => {
	const NativeRequest = getNativeRequest();
	class Request {
		runtime;
		waitUntil;
		#req;
		#url;
		#bodyStream;
		#request;
		#headers;
		#abortController;
		#maxRequestBodySize;
		#trustProxy;
		#ip;
		#ipResolved = false;
		#remoteAddress;
		#trusted;
		constructor(ctx) {
			this.#req = ctx.req;
			this.#maxRequestBodySize = ctx.maxRequestBodySize;
			this.#trustProxy = ctx.trustProxy;
			this.runtime = {
				name: "node",
				node: ctx
			};
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeRequest;
		}
		#resolveTrusted() {
			if (this.#trusted === void 0) {
				this.#remoteAddress = this.#req.socket?.remoteAddress;
				this.#trusted = isTrustedProxy(this.#trustProxy, this.#remoteAddress);
			}
			return this.#trusted;
		}
		get ip() {
			if (this.#ipResolved) return this.#ip;
			this.#ipResolved = true;
			if (this.#resolveTrusted()) {
				const forwarded = firstForwardedValue(this.#req.headers["x-forwarded-for"]);
				if (forwarded) return this.#ip = forwarded;
			}
			return this.#ip = this.#remoteAddress;
		}
		get method() {
			if (this.#request) return this.#request.method;
			return this.#req.method || "GET";
		}
		get _url() {
			return this.#url ||= new NodeRequestURL({
				req: this.#req,
				trusted: this.#resolveTrusted()
			});
		}
		set _url(url) {
			this.#url = url;
		}
		get url() {
			if (this.#request) return this.#request.url;
			return this._url.href;
		}
		get headers() {
			if (this.#request) return this.#request.headers;
			return this.#headers ||= new NodeRequestHeaders(this.#req);
		}
		get _abortController() {
			if (!this.#abortController) {
				this.#abortController = new AbortController();
				const { req, res } = this.runtime.node;
				const abortController = this.#abortController;
				const abort = (err) => abortController.abort?.(err);
				if (res) res.once("close", () => {
					const reqError = req.errored;
					if (reqError) abort(reqError);
					else if (!res.writableEnded) abort();
				});
				else req.once("close", () => {
					if (!req.complete) abort();
				});
			}
			return this.#abortController;
		}
		get signal() {
			return this.#request ? this.#request.signal : this._abortController.signal;
		}
		get body() {
			if (this.#request) return this.#request.body;
			if (this.#bodyStream === void 0) {
				const method = this.method;
				let stream = !(method === "GET" || method === "HEAD") ? Readable.toWeb(this.#req) : null;
				if (stream && this.#maxRequestBodySize !== void 0) stream = limitBodyStream(stream, this.#maxRequestBodySize);
				this.#bodyStream = stream;
			}
			return this.#bodyStream;
		}
		#readBuffered() {
			return readBody(this.#req, this.#maxRequestBodySize);
		}
		text() {
			if (this.#request) return this.#request.text();
			if (this.#bodyStream !== void 0) return this.#bodyStream ? new Response(this.#bodyStream).text() : Promise.resolve("");
			return this.#readBuffered().then((buf) => buf.toString());
		}
		json() {
			if (this.#request) return this.#request.json();
			if (this.#bodyStream !== void 0) return this.text().then((text) => JSON.parse(text));
			return this.#readBuffered().then((buf) => JSON.parse(buf.toString()));
		}
		get _request() {
			if (!this.#request) {
				const body = this.body;
				this.#request = new NativeRequest(this.url, {
					method: this.method,
					headers: this.headers,
					signal: this._abortController.signal,
					body,
					duplex: body ? "half" : void 0
				});
				this.#headers = void 0;
				this.#bodyStream = void 0;
			}
			return this.#request;
		}
	}
	lazyInherit(Request.prototype, NativeRequest.prototype, "_request");
	Object.setPrototypeOf(Request.prototype, NativeRequest.prototype);
	return Request;
})();
function readBody(req, maxRequestBodySize) {
	if ("rawBody" in req && Buffer.isBuffer(req.rawBody)) {
		if (maxRequestBodySize !== void 0 && req.rawBody.length > maxRequestBodySize) return Promise.reject(createBodyTooLargeError(maxRequestBodySize));
		return Promise.resolve(req.rawBody);
	}
	return new Promise((resolve, reject) => {
		const chunks = [];
		let size = 0;
		const cleanup = () => {
			req.off("data", onData);
			req.off("end", onEnd);
			req.off("error", onError);
		};
		const onData = (chunk) => {
			if (maxRequestBodySize !== void 0) {
				size += chunk.length;
				if (size > maxRequestBodySize) {
					cleanup();
					req.pause?.();
					reject(createBodyTooLargeError(maxRequestBodySize));
					return;
				}
			}
			chunks.push(chunk);
		};
		const onError = (err) => {
			cleanup();
			reject(err);
		};
		const onEnd = () => {
			cleanup();
			resolve(chunks.length === 1 ? chunks[0] : Buffer.concat(chunks));
		};
		req.on("data", onData).once("end", onEnd).once("error", onError);
	});
}
function getNativeRequest() {
	let R = globalThis[kNativeRequest] || globalThis.Request;
	while (R?._srvx) R = Object.getPrototypeOf(R);
	return globalThis[kNativeRequest] ??= R;
}
var NodeResponse = /* @__PURE__ */ (() => {
	const NativeResponse = globalThis.Response;
	const STATUS_CODES = globalThis.process?.getBuiltinModule?.("node:http")?.STATUS_CODES || {};
	class NodeResponse {
		#body;
		#init;
		#headers;
		#response;
		constructor(body, init) {
			this.#body = body;
			this.#init = init;
		}
		static [Symbol.hasInstance](val) {
			return val instanceof NativeResponse;
		}
		get status() {
			return this.#response?.status || this.#init?.status || 200;
		}
		get statusText() {
			return this.#response?.statusText || this.#init?.statusText || STATUS_CODES[this.status] || "";
		}
		get headers() {
			if (this.#response) return this.#response.headers;
			if (this.#headers) return this.#headers;
			const initHeaders = this.#init?.headers;
			return this.#headers = initHeaders instanceof Headers ? initHeaders : new Headers(initHeaders);
		}
		get ok() {
			if (this.#response) return this.#response.ok;
			const status = this.status;
			return status >= 200 && status < 300;
		}
		get _response() {
			if (this.#response) return this.#response;
			let body = this.#body;
			if (body && typeof body.pipe === "function" && !(body instanceof Readable)) {
				const stream = new PassThrough();
				body.pipe(stream);
				const abort = body.abort;
				if (abort) stream.once("close", () => abort());
				body = stream;
			}
			this.#response = new NativeResponse(body, this.#headers ? {
				...this.#init,
				headers: this.#headers
			} : this.#init);
			this.#init = void 0;
			this.#headers = void 0;
			this.#body = void 0;
			return this.#response;
		}
		_toNodeResponse() {
			const status = this.status;
			const statusText = this.statusText;
			let body;
			let contentType;
			let contentLength;
			if (this.#response) body = this.#response.body;
			else if (this.#body) if (this.#body instanceof ReadableStream) body = this.#body;
			else if (typeof this.#body === "string") {
				body = this.#body;
				contentType = "text/plain; charset=UTF-8";
				contentLength = Buffer.byteLength(this.#body);
			} else if (this.#body instanceof ArrayBuffer) {
				body = Buffer.from(this.#body);
				contentLength = this.#body.byteLength;
			} else if (this.#body instanceof Uint8Array) {
				body = this.#body;
				contentLength = this.#body.byteLength;
			} else if (this.#body instanceof DataView) {
				body = Buffer.from(this.#body.buffer);
				contentLength = this.#body.byteLength;
			} else if (this.#body instanceof Blob) {
				body = this.#body.stream();
				contentType = this.#body.type;
				contentLength = this.#body.size;
			} else if (typeof this.#body.pipe === "function") body = this.#body;
			else body = this._response.body;
			const headers = [];
			const initHeaders = this.#init?.headers;
			const headerEntries = this.#response?.headers || this.#headers || (initHeaders ? Array.isArray(initHeaders) ? initHeaders : initHeaders?.entries ? initHeaders.entries() : Object.entries(initHeaders) : void 0);
			let hasContentTypeHeader;
			let hasContentLength;
			if (headerEntries) for (const [key, value] of headerEntries) {
				const lowerKey = typeof key === "string" ? key.toLowerCase() : String(key);
				if (Array.isArray(value)) for (const v of value) headers.push(lowerKey, v);
				else headers.push(lowerKey, value);
				if (lowerKey === "content-type") hasContentTypeHeader = true;
				else if (lowerKey === "content-length") hasContentLength = true;
			}
			if (contentType && !hasContentTypeHeader) headers.push("content-type", contentType);
			if (contentLength && !hasContentLength) headers.push("content-length", String(contentLength));
			this.#init = void 0;
			this.#headers = void 0;
			this.#response = void 0;
			this.#body = void 0;
			return {
				status,
				statusText,
				headers,
				body
			};
		}
	}
	lazyInherit(NodeResponse.prototype, NativeResponse.prototype, "_response");
	Object.setPrototypeOf(NodeResponse, NativeResponse);
	Object.setPrototypeOf(NodeResponse.prototype, NativeResponse.prototype);
	return NodeResponse;
})();
function serve(options) {
	return new NodeServer(options);
}
var NodeServer = class {
	runtime = "node";
	options;
	node;
	serveOptions;
	fetch;
	waitUntil;
	#isSecure;
	#listeningPromise;
	#listenError;
	#wait;
	constructor(options) {
		this.options = {
			...options,
			middleware: [...options.middleware || []]
		};
		for (const plugin of options.plugins || []) plugin(this);
		errorPlugin(this);
		const fetchHandler = this.fetch = wrapFetch(this);
		const handler = (nodeReq, nodeRes) => {
			const reqUrl = nodeReq.url;
			if (reqUrl && reqUrl[0] !== "/" && reqUrl !== "*" && !URL.canParse(reqUrl)) {
				nodeRes.statusCode = 400;
				nodeRes.end();
				return;
			}
			const request = new NodeRequest({
				req: nodeReq,
				res: nodeRes,
				maxRequestBodySize: this.options.maxRequestBodySize,
				trustProxy: this.options.trustProxy
			});
			request.waitUntil = this.#wait?.waitUntil;
			const res = fetchHandler(request);
			return res instanceof Promise ? res.then((resolvedRes) => sendNodeResponseDetached(nodeRes, resolvedRes)) : sendNodeResponseDetached(nodeRes, res);
		};
		this.node = {
			handler,
			server: void 0
		};
		const loader = globalThis.__srvxLoader__;
		if (loader) {
			loader({ server: this });
			return;
		}
		gracefulShutdownPlugin(this);
		this.#wait = createWaitUntil();
		this.waitUntil = this.#wait.waitUntil;
		const tls = resolveTLSOptions(this.options);
		const { port, hostname: host } = resolvePortAndHost(this.options);
		this.serveOptions = {
			port,
			host,
			exclusive: !this.options.reusePort,
			...tls,
			...this.options.node
		};
		let server;
		this.#isSecure = !!this.serveOptions.cert && this.options.protocol !== "http";
		if (this.options.node?.http2 ?? this.#isSecure) if (this.#isSecure) server = nodeHTTP2.createSecureServer({
			allowHTTP1: true,
			...this.serveOptions
		}, handler);
		else throw new Error("node.http2 option requires tls certificate!");
		else if (this.#isSecure) server = nodeHTTPS.createServer(this.serveOptions, handler);
		else server = nodeHTTP.createServer(this.serveOptions, handler);
		this.node.server = server;
		if (!options.manual) this.serve().catch(() => {});
	}
	serve() {
		if (this.#listeningPromise) return this.#listeningPromise.then(() => this);
		const server = this.node?.server;
		if (!server) return Promise.reject(/* @__PURE__ */ new Error("Server not initialized"));
		this.#listenError = void 0;
		this.#listeningPromise = new Promise((resolve, reject) => {
			const onError = (error) => {
				server.off("listening", onListening);
				this.#listenError = error;
				this.#listeningPromise = void 0;
				reject(error);
			};
			const onListening = () => {
				server.off("error", onError);
				printListening(this.options, this.url);
				resolve();
			};
			server.once("error", onError);
			server.once("listening", onListening);
			server.listen(this.serveOptions);
		});
		return this.#listeningPromise.then(() => this);
	}
	get url() {
		const addr = this.node?.server?.address();
		if (!addr) return;
		return typeof addr === "string" ? addr : fmtURL(addr.address, addr.port, this.#isSecure);
	}
	ready() {
		if (this.#listenError) return Promise.reject(this.#listenError);
		return Promise.resolve(this.#listeningPromise).then(() => this);
	}
	async close(closeAll) {
		await Promise.all([this.#wait?.wait(), new Promise((resolve, reject) => {
			const server = this.node?.server;
			if (server && closeAll && "closeAllConnections" in server) server.closeAllConnections();
			if (!server || !server.listening) return resolve();
			server.close((error) => error ? reject(error) : resolve());
		})]);
	}
};
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/transformer.js
/**
* Create a strongly-typed serialization adapter for SSR hydration.
* Use to register custom types with the router serializer.
*/
function createSerializationAdapter(opts) {
	return opts;
}
//#endregion
//#region node_modules/seroval/dist/typed-array-BWH0IKxT.js
function encodeArrayBuffer$1(current) {
	const bytes = new Uint8Array(current);
	if (typeof bytes.toBase64 === "function") return bytes.toBase64();
	let result = "";
	for (let i = 0, len = bytes.length; i < len; i++) result += String.fromCharCode(bytes[i]);
	return btoa(result);
}
var MIN_NATIVE_BASE64_LENGTH = 512;
function encodeArrayBuffer(current) {
	if (typeof Buffer !== "undefined") return Buffer.from(current).toString("base64");
	return encodeArrayBuffer$1(current);
}
function decodeArrayBuffer(source) {
	if (source.length < MIN_NATIVE_BASE64_LENGTH || typeof Buffer === "undefined") return ARRAY_BUFFER_CONSTRUCTOR(source);
	const decoded = atob(source);
	const buffer = new ArrayBuffer(decoded.length);
	Buffer.from(buffer).write(decoded, "latin1");
	return buffer;
}
function getTypedArrayConstructor(name) {
	switch (name) {
		case "Int8Array": return Int8Array;
		case "Int16Array": return Int16Array;
		case "Int32Array": return Int32Array;
		case "Uint8Array": return Uint8Array;
		case "Uint16Array": return Uint16Array;
		case "Uint32Array": return Uint32Array;
		case "Uint8ClampedArray": return Uint8ClampedArray;
		case "Float32Array": return Float32Array;
		case "Float64Array": return Float64Array;
		case "BigInt64Array": return BigInt64Array;
		case "BigUint64Array": return BigUint64Array;
		default: throw new SerovalUnknownTypedArrayError(name);
	}
}
var typedArrayNameGetter;
function getTypedArrayName(value) {
	if (!typedArrayNameGetter) typedArrayNameGetter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Int8Array.prototype), Symbol.toStringTag).get;
	return typedArrayNameGetter.call(value);
}
var typedArrayGetters;
var dataViewGetters;
function getAccessor(proto, key) {
	return Object.getOwnPropertyDescriptor(proto, key).get;
}
function getViewGetters(proto, lengthKey) {
	return {
		buffer: getAccessor(proto, "buffer"),
		byteOffset: getAccessor(proto, "byteOffset"),
		byteLength: getAccessor(proto, "byteLength"),
		length: getAccessor(proto, lengthKey)
	};
}
function readArrayBufferView(value, isDataView) {
	let getters;
	if (isDataView) getters = dataViewGetters ?? (dataViewGetters = getViewGetters(DataView.prototype, "byteLength"));
	else getters = typedArrayGetters ?? (typedArrayGetters = getViewGetters(Object.getPrototypeOf(Int8Array.prototype), "length"));
	return {
		buffer: getters.buffer.call(value),
		byteOffset: getters.byteOffset.call(value),
		byteLength: getters.byteLength.call(value),
		length: getters.length.call(value)
	};
}
//#endregion
//#region node_modules/seroval/dist/read-BSFu4fPn.js
function isValidKey(key) {
	switch (key) {
		case "constructor":
		case "__proto__":
		case "prototype":
		case "__defineGetter__":
		case "__defineSetter__":
		case "__lookupGetter__":
		case "__lookupSetter__": return false;
		default: return true;
	}
}
function isValidSymbol(symbol) {
	switch (symbol) {
		case SYM_ASYNC_ITERATOR:
		case SYM_IS_CONCAT_SPREADABLE:
		case SYM_TO_STRING_TAG:
		case SYM_ITERATOR: return true;
		default: return false;
	}
}
var DEFAULT_MAX_BASE64_LENGTH = 1e6;
var MAX_BIGINT_LENGTH = 1e4;
var MAX_REGEXP_SOURCE_LENGTH = 2e4;
function applyObjectFlag(obj, flag) {
	switch (flag) {
		case 3: return Object.freeze(obj);
		case 1: return Object.preventExtensions(obj);
		case 2: return Object.seal(obj);
		default: return obj;
	}
}
var DEFAULT_DEPTH_LIMIT = 1e3;
var MAX_REGEXP_PROPERTY_ESCAPES = 32;
var REGEXP_PROPERTY_ESCAPE = /\\[pP]\{/g;
function createBaseDeserializerContext(options) {
	const maxBase64Length = options.maxBase64Length ?? DEFAULT_MAX_BASE64_LENGTH;
	if (!Number.isSafeInteger(maxBase64Length) || maxBase64Length < 0) throw new RangeError("maxBase64Length must be a non-negative safe integer");
	const refs = options.refs ?? /* @__PURE__ */ new Map();
	if (!("types" in refs)) Object.assign(refs, { types: /* @__PURE__ */ new Map() });
	return {
		plugins: options.plugins,
		refs,
		features: options.features ?? 127 ^ (options.disabledFeatures ?? 0),
		depthLimit: options.depthLimit || DEFAULT_DEPTH_LIMIT,
		maxBase64Length,
		regexpPropertyEscapes: MAX_REGEXP_PROPERTY_ESCAPES
	};
}
function createVanillaDeserializerContext(options) {
	return {
		base: createBaseDeserializerContext(options),
		marked: new Set(options.markedRefs)
	};
}
function guardIndexedValue(ctx, id) {
	const node = {
		t: 4,
		i: id
	};
	if (id < 0 || !Number.isInteger(id)) throw new SerovalMalformedNodeError(node);
	if (ctx.refs.has(id)) throw new SerovalConflictedNodeIdError(node);
}
function isThennable(value) {
	return !!value && (typeof value === "object" || typeof value === "function") && "then" in value && typeof value.then === "function";
}
var ignoreRejection$1 = () => {};
function assignIndexedValue$1(ctx, id, value) {
	guardIndexedValue(ctx.base, id);
	if (value instanceof Promise) value.catch(ignoreRejection$1);
	const marked = ctx.marked;
	if (!marked || marked.has(id)) ctx.base.refs.set(id, value);
	return value;
}
function deserializeKnownValue(node, record, key) {
	if (Object.hasOwn(record, key)) return record[key];
	throw new SerovalMalformedNodeError(node);
}
function deserializeReference(ctx, node) {
	return assignIndexedValue$1(ctx, node.i, getReference(deserializeString(node.s)));
}
function validateNodeList(node, list) {
	if (!Array.isArray(list)) throw new SerovalMalformedNodeError(node);
}
function deserializeArray(ctx, depth, node) {
	const items = node.a;
	validateNodeList(node, items);
	const len = items.length;
	const result = assignIndexedValue$1(ctx, node.i, new Array(len));
	for (let i = 0, item; i < len; i++) {
		item = items[i];
		if (item) result[i] = deserialize$1(ctx, depth, item);
	}
	applyObjectFlag(result, node.o);
	return result;
}
function assignStringProperty(object, key, value) {
	if (isValidKey(key)) object[key] = value;
	else Object.defineProperty(object, key, {
		value,
		configurable: true,
		enumerable: true,
		writable: true
	});
}
function assignProperty(ctx, depth, object, key, value) {
	if (typeof key === "string") assignStringProperty(object, deserializeString(key), deserialize$1(ctx, depth, value));
	else {
		const actual = deserialize$1(ctx, depth, key);
		switch (typeof actual) {
			case "string":
				assignStringProperty(object, actual, deserialize$1(ctx, depth, value));
				break;
			case "symbol":
				if (isValidSymbol(actual)) object[actual] = deserialize$1(ctx, depth, value);
				break;
			default: throw new SerovalMalformedNodeError(key);
		}
	}
}
function assignNodeType(ctx, id, type) {
	ctx.base.refs.types.set(id, type);
}
function validateNodeType(ctx, node, id, type) {
	if (ctx.base.refs.types.get(id) !== type) throw new SerovalMalformedNodeError(node);
}
function deserializeProperties(ctx, depth, node, result) {
	const keys = node.k;
	validateNodeList(node, keys);
	validateNodeList(node, node.v);
	const len = keys.length;
	if (len > 0) for (let i = 0, vals = node.v; i < len; i++) assignProperty(ctx, depth, result, keys[i], vals[i]);
	return result;
}
function deserializeObject(ctx, depth, node) {
	const result = assignIndexedValue$1(ctx, node.i, node.t === 10 ? {} : Object.create(null));
	deserializeProperties(ctx, depth, node.p, result);
	applyObjectFlag(result, node.o);
	return result;
}
function deserializeDate(ctx, node) {
	return assignIndexedValue$1(ctx, node.i, new Date(node.s));
}
function deserializeTemporal(ctx, node) {
	if (!(ctx.base.features & 64)) throw new SerovalUnsupportedNodeError(node);
	const construct = Temporal[deserializeKnownValue(node, TEMPORAL_TYPE_NAME, node.c)];
	return assignIndexedValue$1(ctx, node.i, construct.from(node.s));
}
function deserializeRegExp(ctx, node) {
	if (ctx.base.features & 32) {
		const source = deserializeString(node.c);
		if (source.length > MAX_REGEXP_SOURCE_LENGTH) throw new SerovalMalformedNodeError(node);
		if (/[uv]/.test(String(node.m))) {
			const escapes = source.match(REGEXP_PROPERTY_ESCAPE);
			if (escapes) {
				ctx.base.regexpPropertyEscapes -= escapes.length;
				if (ctx.base.regexpPropertyEscapes < 0) throw new SerovalMalformedNodeError(node);
			}
		}
		return assignIndexedValue$1(ctx, node.i, new RegExp(source, node.m));
	}
	throw new SerovalUnsupportedNodeError(node);
}
function deserializeSet(ctx, depth, node) {
	const result = assignIndexedValue$1(ctx, node.i, /* @__PURE__ */ new Set());
	validateNodeList(node, node.a);
	for (let i = 0, items = node.a, len = items.length; i < len; i++) result.add(deserialize$1(ctx, depth, items[i]));
	return result;
}
function deserializeMap(ctx, depth, node) {
	const result = assignIndexedValue$1(ctx, node.i, /* @__PURE__ */ new Map());
	validateNodeList(node, node.e.k);
	validateNodeList(node, node.e.v);
	for (let i = 0, keys = node.e.k, vals = node.e.v, len = keys.length; i < len; i++) result.set(deserialize$1(ctx, depth, keys[i]), deserialize$1(ctx, depth, vals[i]));
	return result;
}
function deserializeArrayBuffer(ctx, node) {
	if (typeof node.s !== "string") throw new SerovalMalformedNodeError(node);
	if (node.s.length > ctx.base.maxBase64Length) throw new RangeError("ArrayBuffer exceeds maxBase64Length (" + ctx.base.maxBase64Length + ")");
	const buffer = decodeArrayBuffer(deserializeString(node.s));
	return assignIndexedValue$1(ctx, node.i, buffer);
}
function deserializeView(ctx, depth, node, construct) {
	const source = deserialize$1(ctx, depth, node.f);
	if (!(source instanceof ArrayBuffer)) throw new SerovalMalformedNodeError(node);
	const offset = node.b ?? 0;
	if (offset < 0 || offset > source.byteLength) throw new SerovalMalformedNodeError(node);
	return assignIndexedValue$1(ctx, node.i, construct ? new construct(source, offset, node.l) : new DataView(source, offset, node.l));
}
function deserializeDictionary(ctx, depth, node, result) {
	if (node.p) {
		const fields = deserializeProperties(ctx, depth, node.p, {});
		Object.defineProperties(result, Object.getOwnPropertyDescriptors(fields));
	}
	return result;
}
function deserializeAggregateError(ctx, depth, node) {
	return deserializeDictionary(ctx, depth, node, assignIndexedValue$1(ctx, node.i, new AggregateError([], deserializeString(node.m))));
}
function deserializeError(ctx, depth, node) {
	const construct = deserializeKnownValue(node, ERROR_CONSTRUCTOR, node.s);
	return deserializeDictionary(ctx, depth, node, assignIndexedValue$1(ctx, node.i, new construct(deserializeString(node.m))));
}
function deserializePromise(ctx, depth, node) {
	const deferred = PROMISE_CONSTRUCTOR();
	const result = assignIndexedValue$1(ctx, node.i, deferred.p);
	const deserialized = deserialize$1(ctx, depth, node.f);
	if (isThennable(deserialized)) throw new SerovalMalformedNodeError(node.f);
	if (node.s) deferred.s(deserialized);
	else deferred.f(deserialized);
	return result;
}
function deserializeBoxed(ctx, depth, node) {
	return assignIndexedValue$1(ctx, node.i, Object(deserialize$1(ctx, depth, node.f)));
}
function getPluginFieldChecks(node, validate) {
	const info = node.s;
	if (info == null || typeof info !== "object") throw new SerovalMalformedNodeError(node);
	const checks = [];
	for (const field of Object.keys(validate)) {
		const check = validate[field];
		if (check) checks.push([
			Reflect.get(info, field),
			field,
			check
		]);
	}
	return checks;
}
function deserializePlugin(ctx, depth, node) {
	const currentPlugins = ctx.base.plugins;
	if (currentPlugins) {
		const tag = deserializeString(node.c);
		for (let i = 0, len = currentPlugins.length; i < len; i++) {
			const plugin = currentPlugins[i];
			if (plugin.tag === tag) {
				const checks = plugin.validate ? getPluginFieldChecks(node, plugin.validate) : void 0;
				return assignIndexedValue$1(ctx, node.i, plugin.deserialize(node.s, { deserialize: (current) => {
					const value = deserialize$1(ctx, depth, current);
					if (checks) {
						for (const [fieldNode, field, check] of checks) if (fieldNode === current && !check(value)) throw new SerovalPluginValidationError(tag, field);
					}
					return value;
				} }, { id: node.i }));
			}
		}
	}
	throw new SerovalMissingPluginError(node.c);
}
function deserializePromiseConstructor(ctx, node) {
	const value = assignIndexedValue$1(ctx, node.i, assignIndexedValue$1(ctx, node.s, PROMISE_CONSTRUCTOR()).p);
	assignNodeType(ctx, node.s, 22);
	ctx.base.pending?.add(node.s);
	return value;
}
function deserializePromiseFulfill(ctx, depth, node) {
	const deferred = ctx.base.refs.get(node.i);
	if (deferred) {
		validateNodeType(ctx, node, node.i, 22);
		const deserialized = deserialize$1(ctx, depth, node.a[1]);
		if (isThennable(deserialized)) throw new SerovalMalformedNodeError(node.a[1]);
		if (node.t === 23) deferred.s(deserialized);
		else deferred.f(deserialized);
		ctx.base.pending?.delete(node.i);
		return;
	}
	throw new SerovalMissingInstanceError("Promise");
}
function deserializeIteratorFactoryInstance(ctx, depth, node) {
	deserialize$1(ctx, depth, node.a[0]);
	const source = deserialize$1(ctx, depth, node.a[1]);
	if (!isSequence(source)) throw new SerovalMalformedNodeError(node.a[1]);
	return sequenceToIterator(source);
}
function deserializeAsyncIteratorFactoryInstance(ctx, depth, node) {
	deserialize$1(ctx, depth, node.a[0]);
	const source = deserialize$1(ctx, depth, node.a[1]);
	if (!isStream(source)) throw new SerovalMalformedNodeError(node.a[1]);
	return streamToAsyncIterable(source);
}
function deserializeStreamConstructor(ctx, depth, node) {
	const result = assignIndexedValue$1(ctx, node.i, new Stream(node.l === 1 ? 1 : void 0));
	assignNodeType(ctx, node.i, 31);
	ctx.base.pending?.add(node.i);
	const items = node.a;
	validateNodeList(node, items);
	const len = items.length;
	if (len) for (let i = 0; i < len; i++) deserialize$1(ctx, depth, items[i]);
	return result;
}
function deserializeStreamCall(ctx, depth, node, method) {
	const deferred = ctx.base.refs.get(node.i);
	if (deferred) {
		validateNodeType(ctx, node, node.i, 31);
		deferred[method](deserialize$1(ctx, depth, node.f));
		if (method !== "next") ctx.base.pending?.delete(node.i);
		return;
	}
	throw new SerovalMissingInstanceError("Stream");
}
function deserializeIteratorFactory(ctx, depth, node) {
	deserialize$1(ctx, depth, node.f);
}
function deserializeAsyncIteratorFactory(ctx, depth, node) {
	deserialize$1(ctx, depth, node.a[1]);
}
function isSequenceIndex(value, size) {
	return Number.isInteger(value) && value >= -1 && value < size;
}
function deserializeSequence(ctx, depth, node) {
	validateNodeList(node, node.a);
	const size = node.a.length;
	if (!(isSequenceIndex(node.s, size) && isSequenceIndex(node.l, size))) throw new SerovalMalformedNodeError(node);
	const result = assignIndexedValue$1(ctx, node.i, createSequence([], node.s, node.l));
	assignNodeType(ctx, node.i, 35);
	for (let i = 0; i < size; i++) result.v[i] = deserialize$1(ctx, depth, node.a[i]);
	return result;
}
function deserialize$1(ctx, depth, node) {
	if (depth > ctx.base.depthLimit) throw new SerovalDepthLimitError(ctx.base.depthLimit);
	depth += 1;
	switch (node.t) {
		case 2: return deserializeKnownValue(node, CONSTANT_VAL, node.s);
		case 0: return Number(node.s);
		case 1: return deserializeString(String(node.s));
		case 3:
			if (String(node.s).length > MAX_BIGINT_LENGTH) throw new SerovalMalformedNodeError(node);
			return BigInt(node.s);
		case 4: return ctx.base.refs.get(node.i);
		case 18: return deserializeReference(ctx, node);
		case 9: return deserializeArray(ctx, depth, node);
		case 10:
		case 11: return deserializeObject(ctx, depth, node);
		case 5: return deserializeDate(ctx, node);
		case 6: return deserializeRegExp(ctx, node);
		case 7: return deserializeSet(ctx, depth, node);
		case 8: return deserializeMap(ctx, depth, node);
		case 19: return deserializeArrayBuffer(ctx, node);
		case 16:
		case 15: return deserializeView(ctx, depth, node, getTypedArrayConstructor(node.c));
		case 20: return deserializeView(ctx, depth, node);
		case 14: return deserializeAggregateError(ctx, depth, node);
		case 13: return deserializeError(ctx, depth, node);
		case 12: return deserializePromise(ctx, depth, node);
		case 17: return assignIndexedValue$1(ctx, node.i, deserializeKnownValue(node, SYMBOL_REF, node.s));
		case 21: return deserializeBoxed(ctx, depth, node);
		case 25: return deserializePlugin(ctx, depth, node);
		case 22: return deserializePromiseConstructor(ctx, node);
		case 23:
		case 24: return deserializePromiseFulfill(ctx, depth, node);
		case 28: return deserializeIteratorFactoryInstance(ctx, depth, node);
		case 30: return deserializeAsyncIteratorFactoryInstance(ctx, depth, node);
		case 31: return deserializeStreamConstructor(ctx, depth, node);
		case 32: return deserializeStreamCall(ctx, depth, node, "next");
		case 33: return deserializeStreamCall(ctx, depth, node, "throw");
		case 34: return deserializeStreamCall(ctx, depth, node, "return");
		case 27: return deserializeIteratorFactory(ctx, depth, node);
		case 29: return deserializeAsyncIteratorFactory(ctx, depth, node);
		case 35: return deserializeSequence(ctx, depth, node);
		case 36: return deserializeTemporal(ctx, node);
		default: throw new SerovalUnsupportedNodeError(node);
	}
}
function deserializeTop(ctx, node) {
	ctx.base.regexpPropertyEscapes = MAX_REGEXP_PROPERTY_ESCAPES;
	try {
		return deserialize$1(ctx, 0, node);
	} catch (error) {
		throw new SerovalDeserializationError(error);
	}
}
function fromJSON(source, options = {}) {
	const plugins = resolvePlugins(options.plugins);
	const disabledFeatures = options.disabledFeatures ?? 0;
	const sourceFeatures = source.f ?? 127;
	return deserializeTop(createVanillaDeserializerContext({
		depthLimit: options.depthLimit,
		maxBase64Length: options.maxBase64Length,
		plugins,
		markedRefs: source.m,
		features: sourceFeatures & ~disabledFeatures,
		disabledFeatures
	}), source.t);
}
//#endregion
//#region node_modules/seroval/dist/write-B_hZaAwC.js
function createSerovalNode(t, i, s, c, m, p, e, a, f, b, o, l) {
	if (c === void 0 && m === void 0 && p === void 0 && e === void 0 && a === void 0 && f === void 0 && b === void 0 && o === void 0 && l === void 0) return {
		t,
		i,
		s
	};
	return {
		t,
		i,
		s,
		c,
		m,
		p,
		e,
		a,
		f,
		b,
		o,
		l
	};
}
function createConstantNode(value) {
	return createSerovalNode(2, void 0, value);
}
var TRUE_NODE = /* @__PURE__ */ createConstantNode(2);
var FALSE_NODE = /* @__PURE__ */ createConstantNode(3);
var UNDEFINED_NODE = /* @__PURE__ */ createConstantNode(1);
var NULL_NODE = /* @__PURE__ */ createConstantNode(0);
var NEG_ZERO_NODE = /* @__PURE__ */ createConstantNode(4);
var INFINITY_NODE = /* @__PURE__ */ createConstantNode(5);
var NEG_INFINITY_NODE = /* @__PURE__ */ createConstantNode(6);
var NAN_NODE = /* @__PURE__ */ createConstantNode(7);
function getErrorConstructor(error) {
	for (let i = 1; i <= 6; i++) if (error instanceof ERROR_CONSTRUCTOR[i]) return i;
	return 0;
}
function getErrorOptions(error, features) {
	const options = Object.create(null);
	const construct = ERROR_CONSTRUCTOR_STRING[getErrorConstructor(error)];
	if (error.name !== construct) options.name = error.name;
	else if (error.constructor.name !== construct) options.name = error.constructor.name;
	for (const name of Object.getOwnPropertyNames(error)) if (name !== "name" && name !== "message" && (name !== "stack" || features & 4)) options[name] = error[name];
	return options;
}
function getObjectFlag(obj) {
	if (Object.isExtensible(obj)) return 0;
	if (Object.isFrozen(obj)) return 3;
	if (Object.isSealed(obj)) return 2;
	return 1;
}
function createNumberNode(value) {
	switch (value) {
		case Number.POSITIVE_INFINITY: return INFINITY_NODE;
		case Number.NEGATIVE_INFINITY: return NEG_INFINITY_NODE;
	}
	if (value !== value) return NAN_NODE;
	if (Object.is(value, -0)) return NEG_ZERO_NODE;
	return createSerovalNode(0, void 0, value);
}
function createStringNode(value) {
	return createSerovalNode(1, void 0, serializeString(value));
}
function createBigIntNode(current) {
	return createSerovalNode(3, void 0, "" + current);
}
function createIndexedValueNode(id) {
	return createSerovalNode(4, id);
}
var getDateTime = Date.prototype.getTime;
var getDateISOString = Date.prototype.toISOString;
function createDateNode(id, current) {
	const timestamp = getDateTime.call(current);
	return createSerovalNode(5, id, timestamp === timestamp ? getDateISOString.call(current) : "");
}
function createTemporalNode(id, type, temporalClass, current) {
	return createSerovalNode(36, id, temporalClass.prototype.toString.call(current), type);
}
var getRegExpSource = Object.getOwnPropertyDescriptor(RegExp.prototype, "source").get;
var getRegExpFlags = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get;
function createRegExpNode(id, current) {
	return createSerovalNode(6, id, void 0, serializeString(getRegExpSource.call(current)), getRegExpFlags.call(current));
}
function createWKSymbolNode(id, current) {
	return createSerovalNode(17, id, INV_SYMBOL_REF[current]);
}
function createReferenceNode(id, referenceId) {
	return createSerovalNode(18, id, serializeString(referenceId));
}
function createPluginNode(id, tag, value) {
	return createSerovalNode(25, id, value, serializeString(tag));
}
function createArrayNode(id, current, parsedItems) {
	return createSerovalNode(9, id, void 0, void 0, void 0, void 0, void 0, parsedItems, void 0, void 0, getObjectFlag(current));
}
function createBoxedNode(id, boxed) {
	return createSerovalNode(21, id, void 0, void 0, void 0, void 0, void 0, void 0, boxed);
}
var MAX_TYPED_ARRAY_LENGTH = 1e6;
/**
* Rejects a sparse array with more holes than the typed array limit. Each hole
* still costs a node and output, however few elements the array holds.
*/
function assertArrayHoles(current) {
	const len = current.length;
	if (len > MAX_TYPED_ARRAY_LENGTH && len - Object.keys(current).length > MAX_TYPED_ARRAY_LENGTH) throw new SerovalUnsupportedTypeError(current);
}
function createViewNode(type, id, current, view, buffer) {
	const isDataView = type === 20;
	const size = view.length;
	if (size > MAX_TYPED_ARRAY_LENGTH) throw new SerovalUnsupportedTypeError(current);
	return createSerovalNode(type, id, void 0, isDataView ? void 0 : getTypedArrayName(current), void 0, void 0, void 0, void 0, buffer, view.byteOffset, void 0, size);
}
function createErrorNode(type, id, current, options) {
	return createSerovalNode(type, id, getErrorConstructor(current), void 0, serializeString(current.message), options);
}
function createSetNode(id, items) {
	return createSerovalNode(7, id, void 0, void 0, void 0, void 0, void 0, items);
}
function createIteratorFactoryInstanceNode(type, factory, items) {
	return createSerovalNode(type, void 0, void 0, void 0, void 0, void 0, void 0, [factory, items]);
}
function createStreamConstructorNode(id, factory, sequence, live) {
	return createSerovalNode(31, id, void 0, void 0, void 0, void 0, void 0, sequence, factory, void 0, void 0, live);
}
function createStreamEventNode(type, id, parsed) {
	return createSerovalNode(type, id, void 0, void 0, void 0, void 0, void 0, void 0, parsed);
}
function createSequenceNode(id, sequence, throwAt, doneAt) {
	return createSerovalNode(35, id, throwAt, void 0, void 0, void 0, void 0, sequence, void 0, void 0, void 0, doneAt);
}
var ITERATOR = {};
var ASYNC_ITERATOR = {};
/**
* Placeholder references
*/
var SPECIAL_REFS = {
	[0]: {},
	[1]: {},
	[2]: {},
	[3]: {},
	[4]: {},
	[5]: {}
};
var SPECIAL_REF_STRING = {
	[0]: "[]",
	[1]: SERIALIZED_PROMISE_CONSTRUCTOR,
	[2]: SERIALIZED_PROMISE_SUCCESS,
	[3]: SERIALIZED_PROMISE_FAILURE,
	[4]: SERIALIZED_STREAM_CONSTRUCTOR,
	[5]: SERIALIZED_ARRAY_BUFFER_CONSTRUCTOR
};
async function promiseToResult(current) {
	try {
		return [1, await current];
	} catch (e) {
		return [0, e];
	}
}
function createBaseParserContext(options) {
	return {
		plugins: options.plugins,
		plainObjectPlugins: getPlainObjectPlugins(options.plugins),
		marked: /* @__PURE__ */ new Set(),
		features: 127 ^ (options.disabledFeatures ?? 0),
		refs: options.refs ?? /* @__PURE__ */ new Map(),
		depthLimit: options.depthLimit || 1e3,
		compactArrayBufferViews: options.compactArrayBufferViews ?? false
	};
}
/**
* Returns the plugins to test for an object. Plain objects, whose prototype is
* `Object.prototype`, skip the plugins that set `skipPlainObjects`. Checking
* the prototype as well as `constructor` keeps instances whose prototype has
* no own `constructor` property from skipping those plugins.
*/
function getObjectPlugins(ctx, current, currentClass) {
	return currentClass === Object && Object.getPrototypeOf(current) === Object.prototype ? ctx.plainObjectPlugins : ctx.plugins;
}
/**
* Ensures that the value (based on an identifier) has been visited by the parser.
* @param ctx
* @param id
*/
function markParserRef(ctx, id) {
	ctx.marked.add(id);
}
/**
* Creates an identifier for a value
* @param ctx
* @param current
*/
function createIndexForValue(ctx, current) {
	const id = ctx.refs.size;
	ctx.refs.set(current, id);
	return id;
}
/**
* Removes the ids registered from `size` on. A parse that fails emits none of
* them, so a caller-owned map must not keep them for later calls.
*/
function rollbackRefs(refs, size) {
	if (refs.size > size) {
		for (const [value, id] of refs) if (id >= size) refs.delete(value);
	}
}
function getNodeForIndexedValue(ctx, current) {
	const registeredId = ctx.refs.get(current);
	if (registeredId != null) {
		markParserRef(ctx, registeredId);
		return createIndexedValueNode(registeredId);
	}
	return createIndexForValue(ctx, current);
}
function getReferenceNode(ctx, current) {
	const indexed = getNodeForIndexedValue(ctx, current);
	if (typeof indexed !== "number") return indexed;
	const referenceId = getReferenceID(current);
	return referenceId === void 0 ? indexed : createReferenceNode(indexed, referenceId);
}
/**
* Parsing methods
*/
function parseWellKnownSymbol(ctx, current) {
	const ref = getReferenceNode(ctx, current);
	if (typeof ref !== "number") return ref;
	if (current in INV_SYMBOL_REF) return createWKSymbolNode(ref, current);
	throw new SerovalUnsupportedTypeError(current);
}
function parseSpecialReference(ctx, ref) {
	const result = getNodeForIndexedValue(ctx, SPECIAL_REFS[ref]);
	if (typeof result !== "number") return result;
	return createSerovalNode(26, result, ref);
}
function parseIteratorFactory(ctx) {
	const result = getNodeForIndexedValue(ctx, ITERATOR);
	if (typeof result !== "number") return result;
	return createSerovalNode(27, result, void 0, void 0, void 0, void 0, void 0, void 0, parseWellKnownSymbol(ctx, SYM_ITERATOR));
}
function parseAsyncIteratorFactory(ctx) {
	const result = getNodeForIndexedValue(ctx, ASYNC_ITERATOR);
	if (typeof result !== "number") return result;
	return createSerovalNode(29, result, void 0, void 0, void 0, void 0, void 0, [parseSpecialReference(ctx, 1), parseWellKnownSymbol(ctx, SYM_ASYNC_ITERATOR)]);
}
function getTemporalType(currentClass) {
	switch (currentClass) {
		case Temporal.Instant: return 0;
		case Temporal.Duration: return 1;
		case Temporal.PlainDate: return 2;
		case Temporal.PlainDateTime: return 3;
		case Temporal.PlainMonthDay: return 4;
		case Temporal.PlainTime: return 5;
		case Temporal.PlainYearMonth: return 6;
		case Temporal.ZonedDateTime: return 7;
		default: return;
	}
}
function getObjectClass(current) {
	const proto = Object.getPrototypeOf(current);
	if (proto === null) return void 0;
	if (proto === Object.prototype) return Object;
	const currentClass = proto.constructor;
	if (typeof currentClass !== "function" || currentClass === Object || currentClass.prototype === proto) return currentClass;
	return proto;
}
/**
* Decides how an object is parsed. Shared by the sync, stream and async
* parsers so the class checks and feature gates live in one place.
*/
function getObjectKind(current, currentClass, features) {
	switch (currentClass) {
		case Object: return 1;
		case void 0: return 2;
		case Date: return 3;
		case Error:
		case EvalError:
		case RangeError:
		case ReferenceError:
		case SyntaxError:
		case TypeError:
		case URIError: return 4;
		case Number:
		case Boolean:
		case String:
		case BigInt: return 6;
		case ArrayBuffer: return 7;
		case Int8Array:
		case Int16Array:
		case Int32Array:
		case Uint8Array:
		case Uint16Array:
		case Uint32Array:
		case Uint8ClampedArray:
		case Float32Array:
		case Float64Array: return 8;
		case DataView: return 10;
		case Map: return 11;
		case Set: return 12;
	}
	if (currentClass === Promise || current instanceof Promise) return 13;
	if (features & 32 && currentClass === RegExp) return 14;
	if (features & 16 && (currentClass === BigInt64Array || currentClass === BigUint64Array)) return 9;
	if (features & 1 && typeof AggregateError !== "undefined" && (currentClass === AggregateError || current instanceof AggregateError)) return 5;
	if (features & 64 && typeof Temporal !== "undefined" && getTemporalType(currentClass) != null) return 15;
	if (ArrayBuffer.isView(current)) {
		const name = getTypedArrayName(current);
		if (name === void 0) return 10;
		if (name !== "BigInt64Array" && name !== "BigUint64Array") return 8;
		if (features & 16) return 9;
	}
	if (current instanceof Error) return 4;
	if (SYM_ITERATOR in current || SYM_ASYNC_ITERATOR in current) return 16;
	return 0;
}
function createObjectNode(id, current, empty, record) {
	return createSerovalNode(empty ? 11 : 10, id, void 0, void 0, void 0, record, void 0, void 0, void 0, void 0, getObjectFlag(current));
}
/**
* Gets the sentinel node for a Map. Call it before parsing the entries, so
* that an outer Map declares the sentinel before any Map inside it uses it.
*/
function parseMapSentinel(ctx) {
	return parseSpecialReference(ctx, 0);
}
function createMapNode(id, sentinel, k, v) {
	return createSerovalNode(8, id, void 0, void 0, void 0, void 0, {
		k,
		v
	}, void 0, sentinel);
}
function createPromiseConstructorNode(ctx, id, resolver) {
	return createSerovalNode(22, id, resolver, void 0, void 0, void 0, void 0, void 0, parseSpecialReference(ctx, 1));
}
function getArrayBufferView(ctx, view) {
	if (!ctx.compactArrayBufferViews) return view;
	return {
		buffer: new Uint8Array(view.buffer, view.byteOffset, view.byteLength).slice().buffer,
		byteOffset: 0,
		byteLength: view.byteLength,
		length: view.length
	};
}
function createArrayBufferNode(ctx, id, current) {
	return createSerovalNode(19, id, encodeArrayBuffer(current), void 0, void 0, void 0, void 0, void 0, parseSpecialReference(ctx, 5));
}
function createAsyncParserContext(options) {
	return { base: createBaseParserContext(options) };
}
function ignoreRejection() {}
/**
* A promise gets its rejection handler only when the walk reaches it. While an
* earlier sibling is still pending, a later one that rejects would be an
* unhandled rejection, which ends a Node.js process by default. Mark the
* promises among the children as handled before walking them.
*/
function handleChildPromises(values) {
	for (const value of values) if (value instanceof Promise) Promise.prototype.then.call(value, void 0, ignoreRejection);
}
async function parseItems$1(ctx, depth, current) {
	assertArrayHoles(current);
	const len = current.length;
	const nodes = new Array(len);
	const values = new Array(len);
	const present = new Array(len);
	for (let i = 0; i < len; i++) {
		present[i] = i in current;
		if (present[i]) values[i] = current[i];
	}
	handleChildPromises(values);
	for (let i = 0, node; i < len; i++) if (present[i]) {
		node = parseValueAsync(ctx, depth, values[i]);
		nodes[i] = node instanceof Promise ? await node : node;
	} else nodes[i] = 0;
	return nodes;
}
async function parseArray$1(ctx, depth, id, current) {
	return createArrayNode(id, current, await parseItems$1(ctx, depth, current));
}
async function parseProperties$1(ctx, depth, properties) {
	const keys = Object.keys(properties);
	const len = keys.length;
	const keyNodes = new Array(len);
	const valueNodes = new Array(len);
	const values = new Array(len);
	for (let i = 0; i < len; i++) values[i] = properties[keys[i]];
	handleChildPromises(values);
	for (let i = 0, node; i < len; i++) {
		keyNodes[i] = serializeString(keys[i]);
		node = parseValueAsync(ctx, depth, values[i]);
		valueNodes[i] = node instanceof Promise ? await node : node;
	}
	if (SYM_ITERATOR in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_ITERATOR));
		valueNodes.push(createIteratorFactoryInstanceNode(28, parseIteratorFactory(ctx.base), await parseAsync(ctx, depth, createSequenceFromIterable(properties))));
	}
	if (SYM_ASYNC_ITERATOR in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_ASYNC_ITERATOR));
		valueNodes.push(createIteratorFactoryInstanceNode(30, parseAsyncIteratorFactory(ctx.base), await parseAsyncIterable$1(ctx, depth, properties)));
	}
	if (SYM_TO_STRING_TAG in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_TO_STRING_TAG));
		valueNodes.push(createStringNode(properties[SYM_TO_STRING_TAG]));
	}
	if (SYM_IS_CONCAT_SPREADABLE in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_IS_CONCAT_SPREADABLE));
		valueNodes.push(properties[SYM_IS_CONCAT_SPREADABLE] ? TRUE_NODE : FALSE_NODE);
	}
	return {
		k: keyNodes,
		v: valueNodes
	};
}
async function parsePlainObject$1(ctx, depth, id, current, empty) {
	return createObjectNode(id, current, empty, await parseProperties$1(ctx, depth, current));
}
async function parseBoxed$1(ctx, depth, id, current) {
	const node = parseValueAsync(ctx, depth, current.valueOf());
	return createBoxedNode(id, node instanceof Promise ? await node : node);
}
async function parseView$1(ctx, depth, type, id, current) {
	const view = getArrayBufferView(ctx.base, readArrayBufferView(current, type === 20));
	return createViewNode(type, id, current, view, await parseAsync(ctx, depth, view.buffer));
}
async function parseError$1(ctx, depth, type, id, current) {
	const options = getErrorOptions(current, ctx.base.features);
	return createErrorNode(type, id, current, options ? await parseProperties$1(ctx, depth, options) : void 0);
}
async function parseMap$1(ctx, depth, id, current) {
	const sentinel = parseMapSentinel(ctx.base);
	const entries = [...current.entries()];
	const keyNodes = new Array(entries.length);
	const valueNodes = new Array(entries.length);
	const keys = new Array(entries.length);
	const values = new Array(entries.length);
	for (let i = 0; i < entries.length; i++) {
		keys[i] = entries[i][0];
		values[i] = entries[i][1];
	}
	handleChildPromises(keys);
	handleChildPromises(values);
	for (let i = 0, node; i < entries.length; i++) {
		node = parseValueAsync(ctx, depth, keys[i]);
		keyNodes[i] = node instanceof Promise ? await node : node;
		node = parseValueAsync(ctx, depth, values[i]);
		valueNodes[i] = node instanceof Promise ? await node : node;
	}
	return createMapNode(id, sentinel, keyNodes, valueNodes);
}
async function parseSet$1(ctx, depth, id, current) {
	const values = [...current.keys()];
	const items = new Array(values.length);
	handleChildPromises(values);
	for (let i = 0, node; i < values.length; i++) {
		node = parseValueAsync(ctx, depth, values[i]);
		items[i] = node instanceof Promise ? await node : node;
	}
	return createSetNode(id, items);
}
async function parsePlugin$1(ctx, depth, id, current, currentPlugins) {
	if (currentPlugins) for (let i = 0, len = currentPlugins.length; i < len; i++) {
		const plugin = currentPlugins[i];
		if (plugin.parse.async && plugin.test(current)) return createPluginNode(id, plugin.tag, await plugin.parse.async(current, {
			parse: (value) => parseAsync(ctx, depth, value),
			parseStreamSource(source) {
				if (depth >= ctx.base.depthLimit) throw new SerovalDepthLimitError(ctx.base.depthLimit);
				return parseAsyncIterable$1(ctx, depth + 1, source);
			}
		}, { id }));
	}
}
async function parsePromise$1(ctx, depth, id, current) {
	const [status, result] = await promiseToResult(current);
	return createSerovalNode(12, id, status, void 0, void 0, void 0, void 0, void 0, await parseAsync(ctx, depth, result));
}
function parseStreamHandle(depth, id, current, resolve, reject) {
	const sequence = [];
	let unparsed = 0;
	let ended = false;
	let settled = false;
	const fail = (error) => {
		if (!settled) {
			settled = true;
			try {
				cleanup(error);
			} catch {}
			reject(error);
		}
	};
	const handle = (type) => (value, accept) => {
		if (settled) return;
		markParserRef(this.base, id);
		const slot = sequence.push(void 0) - 1;
		unparsed++;
		if (type !== 32) ended = true;
		parseAsync(this, depth, value).then((data) => {
			if (!settled) {
				sequence[slot] = createStreamEventNode(type, id, data);
				unparsed--;
				accept?.();
				if (ended && unparsed === 0) {
					settled = true;
					try {
						cleanup();
					} catch (error) {
						reject(error);
						return;
					}
					resolve(sequence);
				}
			}
		}, fail);
	};
	const listener = {
		next: handle(32),
		throw: handle(33),
		return: handle(34)
	};
	const cleanup = isLiveStream(current) ? current.pump(listener) : current.on(listener);
}
async function parseStream$1(ctx, depth, id, current) {
	return createStreamConstructorNode(id, parseSpecialReference(ctx.base, 4), await new Promise(parseStreamHandle.bind(ctx, depth, id, current)));
}
/**
* Collects an async iterable into a replay node, one value at a time.
*/
async function parseAsyncIterable$1(ctx, depth, current) {
	const id = createIndexForValue(ctx.base, {});
	const reference = parseSpecialReference(ctx.base, 4);
	const iterator = current[SYM_ASYNC_ITERATOR]();
	const sequence = [];
	for (;;) {
		let result;
		markParserRef(ctx.base, id);
		try {
			result = await iterator.next();
		} catch (error) {
			sequence.push(createStreamEventNode(33, id, await parseAsync(ctx, depth, error)));
			break;
		}
		let parsed;
		try {
			parsed = await parseAsync(ctx, depth, result.value);
		} catch (error) {
			Promise.resolve().then(() => iterator.return?.()).catch(() => {});
			throw error;
		}
		sequence.push(createStreamEventNode(result.done ? 34 : 32, id, parsed));
		if (result.done) break;
	}
	return createStreamConstructorNode(id, reference, sequence);
}
async function parseSequence$1(ctx, depth, id, current) {
	const len = current.v.length;
	const nodes = new Array(len);
	for (let i = 0, node; i < len; i++) {
		node = parseValueAsync(ctx, depth, current.v[i]);
		nodes[i] = node instanceof Promise ? await node : node;
	}
	return createSequenceNode(id, nodes, current.t, current.d);
}
async function parseObjectAsync(ctx, depth, id, current) {
	if (Array.isArray(current)) return parseArray$1(ctx, depth, id, current);
	if (isStream(current)) return parseStream$1(ctx, depth, id, current);
	if (isSequence(current)) return parseSequence$1(ctx, depth, id, current);
	const currentClass = getObjectClass(current);
	if (currentClass === OpaqueReference) return parseAsync(ctx, depth, current.replacement);
	const parsed = await parsePlugin$1(ctx, depth, id, current, getObjectPlugins(ctx.base, current, currentClass));
	if (parsed) return parsed;
	if (currentClass === Object) return parsePlainObject$1(ctx, depth, id, current, false);
	switch (getObjectKind(current, currentClass, ctx.base.features)) {
		case 2: return parsePlainObject$1(ctx, depth, id, current, true);
		case 3: return createDateNode(id, current);
		case 4: return parseError$1(ctx, depth, 13, id, current);
		case 5: return parseError$1(ctx, depth, 14, id, current);
		case 6: return parseBoxed$1(ctx, depth, id, current);
		case 7: return createArrayBufferNode(ctx.base, id, current);
		case 8: return parseView$1(ctx, depth, 15, id, current);
		case 9: return parseView$1(ctx, depth, 16, id, current);
		case 10: return parseView$1(ctx, depth, 20, id, current);
		case 11: return parseMap$1(ctx, depth, id, current);
		case 12: return parseSet$1(ctx, depth, id, current);
		case 13: return parsePromise$1(ctx, depth, id, current);
		case 14: return createRegExpNode(id, current);
		case 15: return createTemporalNode(id, getTemporalType(currentClass), currentClass, current);
		case 16: return parsePlainObject$1(ctx, depth, id, current, !!currentClass);
		default: throw new SerovalUnsupportedTypeError(current);
	}
}
async function parseFunctionAsync(ctx, depth, current) {
	const ref = getReferenceNode(ctx.base, current);
	if (typeof ref !== "number") return ref;
	const plugin = await parsePlugin$1(ctx, depth, ref, current, ctx.base.plugins);
	if (plugin) return plugin;
	throw new SerovalUnsupportedTypeError(current);
}
/**
* Parses primitives and already-seen values synchronously; only objects and
* functions come back as a Promise. Errors are thrown synchronously, which
* an async caller turns into a rejection as before.
*/
function parseValueAsync(ctx, depth, current) {
	if (depth >= ctx.base.depthLimit) throw new SerovalDepthLimitError(ctx.base.depthLimit);
	switch (typeof current) {
		case "boolean": return current ? TRUE_NODE : FALSE_NODE;
		case "undefined": return UNDEFINED_NODE;
		case "string": return createStringNode(current);
		case "number": return createNumberNode(current);
		case "bigint": return createBigIntNode(current);
		case "object":
			if (current) {
				const ref = getReferenceNode(ctx.base, current);
				return typeof ref === "number" ? parseObjectAsync(ctx, depth + 1, ref, current) : ref;
			}
			return NULL_NODE;
		case "symbol": return parseWellKnownSymbol(ctx.base, current);
		case "function": return parseFunctionAsync(ctx, depth, current);
		default: throw new SerovalUnsupportedTypeError(current);
	}
}
async function parseAsync(ctx, depth, current) {
	return await parseValueAsync(ctx, depth, current);
}
async function parseTopAsync(ctx, current) {
	const refs = ctx.base.refs;
	const size = refs.size;
	try {
		return await parseAsync(ctx, 0, current);
	} catch (error) {
		rollbackRefs(refs, size);
		throw error instanceof SerovalParserError ? error : new SerovalParserError(error);
	}
}
var RETURN = () => T;
var IS_MODERN = /* @__PURE__ */ (/* @__PURE__ */ RETURN.toString()).includes("=>");
function createFunction(parameters, body) {
	if (IS_MODERN) return (parameters.length === 1 ? parameters[0] : "(" + parameters.join(",") + ")") + "=>" + (body.startsWith("{") ? "(" + body + ")" : body);
	return "function(" + parameters.join(",") + "){return " + body + "}";
}
function createEffectfulFunction(parameters, body) {
	if (IS_MODERN) return (parameters.length === 1 ? parameters[0] : "(" + parameters.join(",") + ")") + "=>{" + body + "}";
	return "function(" + parameters.join(",") + "){" + body + "}";
}
var REF_START_CHARS = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_";
var REF_START_CHARS_LEN = 34;
var REF_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_";
var REF_CHARS_LEN = 64;
function getIdentifier(index) {
	let mod = index % REF_START_CHARS_LEN;
	let ref = REF_START_CHARS[mod];
	index = (index - mod) / REF_START_CHARS_LEN;
	while (index > 0) {
		mod = index % REF_CHARS_LEN;
		ref += REF_CHARS[mod];
		index = (index - mod) / REF_CHARS_LEN;
	}
	return ref;
}
function isValidIdentifier(name) {
	const len = name.length;
	for (let i = 0; i < len; i++) {
		const code = name.charCodeAt(i);
		if (!(code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57 && i > 0 || code === 95 || code === 36)) return false;
	}
	return len > 0;
}
function getAssignmentExpression(assignment) {
	switch (assignment.t) {
		case 0: return assignment.s + "=" + assignment.v;
		case 2: return assignment.s + ".set(" + assignment.k + "," + assignment.v + ")";
		case 1: return assignment.s + ".add(" + assignment.v + ")";
		case 3: return assignment.s + ".delete(" + assignment.k + ")";
		case 4: return "Object.defineProperty(" + assignment.s + ",\"__proto__\",{value:" + assignment.k + ",configurable:!0,enumerable:!0,writable:!0})";
	}
}
var MAX_ASSIGNMENT_CHAIN_LENGTH = 100;
function resolveAssignments(assignments, chainValues = true) {
	if (!assignments.length) return void 0;
	let previous = assignments[0];
	let expression = getAssignmentExpression(previous);
	let result = "";
	let chainLength = 1;
	for (let index = 1, length = assignments.length; index < length; index++) {
		const assignment = assignments[index];
		if (chainLength === MAX_ASSIGNMENT_CHAIN_LENGTH) {
			result += expression + ",";
			expression = getAssignmentExpression(assignment);
			chainLength = 0;
		} else if (chainValues && assignment.t === 0 && previous.t === 0 && assignment.v === previous.v) expression = assignment.s + "=" + expression;
		else if (assignment.t === 2 && previous.t === 2 && assignment.s === previous.s) expression += ".set(" + assignment.k + "," + assignment.v + ")";
		else if (assignment.t === 1 && previous.t === 1 && assignment.s === previous.s) expression += ".add(" + assignment.v + ")";
		else if (assignment.t === 3 && previous.t === 2 && assignment.s === previous.s) expression += ".delete(" + assignment.k + ")";
		else {
			result += expression + ",";
			expression = getAssignmentExpression(assignment);
			chainLength = 0;
		}
		chainLength++;
		previous = assignment;
	}
	return result + expression + ",";
}
var NULL_CONSTRUCTOR = "Object.create(null)";
var SET_CONSTRUCTOR = "new Set";
var MAP_CONSTRUCTOR = "new Map";
var PROMISE_RESOLVE = "Promise.resolve";
var PROMISE_REJECT = "Promise.reject";
var OBJECT_FLAG_CONSTRUCTOR = {
	[3]: "Object.freeze",
	[2]: "Object.seal",
	[1]: "Object.preventExtensions",
	[0]: void 0
};
function createBaseSerializerContext(mode, options) {
	return {
		mode,
		plugins: options.plugins,
		features: options.features,
		marked: Array.isArray(options.markedRefs) ? new Set(options.markedRefs) : options.markedRefs,
		stack: [],
		flags: [],
		assignments: [],
		assignAll: mode === 2 && !options.assignSharedRefsOnly
	};
}
function createCrossSerializerContext(options) {
	return {
		mode: 2,
		base: createBaseSerializerContext(2, options),
		state: options
	};
}
/**
* Creates the reference param (identifier) from the given reference ID
* Calling this function means the value has been referenced somewhere
*/
function getVanillaRefParam(state, index) {
	/**
	* Creates a new reference ID from a given reference ID
	* This new reference ID means that the reference itself
	* has been referenced at least once, and is used to generate
	* the variables
	*/
	let actualIndex = state.valid.get(index);
	if (actualIndex == null) {
		actualIndex = state.valid.size;
		state.valid.set(index, actualIndex);
	}
	let identifier = state.vars[actualIndex];
	if (identifier == null) {
		identifier = getIdentifier(actualIndex);
		state.vars[actualIndex] = identifier;
	}
	return identifier;
}
function getCrossRefParam(id) {
	return "$R[" + id + "]";
}
/**
* Converts the ID of a reference into a identifier string
* that is used to refer to the object instance in the
* generated script.
*/
function getRefParam(ctx, id) {
	return ctx.mode === 1 ? getVanillaRefParam(ctx.state, id) : getCrossRefParam(id);
}
function markSerializerRef(ctx, id) {
	ctx.marked.add(id);
}
function isSerializerRefMarked(ctx, id) {
	return ctx.marked.has(id);
}
function pushObjectFlag(ctx, flag, id) {
	if (flag !== 0) {
		markSerializerRef(ctx.base, id);
		ctx.base.flags.push({
			type: flag,
			value: getRefParam(ctx, id)
		});
	}
}
function resolveFlags(ctx) {
	let result = "";
	for (let i = 0, current = ctx.flags, len = current.length; i < len; i++) {
		const flag = current[i];
		result += OBJECT_FLAG_CONSTRUCTOR[flag.type] + "(" + flag.value + "),";
	}
	return result;
}
function resolvePatches(ctx) {
	const assignments = resolveAssignments(ctx.assignments);
	const flags = resolveFlags(ctx);
	if (assignments) {
		if (flags) return assignments + flags;
		return assignments;
	}
	return flags;
}
/**
* Generates the inlined assignment for the reference
* This is different from the assignments array as this one
* signifies creation rather than mutation
*/
function createAssignment(ctx, source, value) {
	ctx.assignments.push({
		t: 0,
		s: source,
		k: void 0,
		v: value
	});
}
function createAddAssignment(ctx, ref, value) {
	ctx.base.assignments.push({
		t: 1,
		s: getRefParam(ctx, ref),
		k: void 0,
		v: value
	});
}
function createSetAssignment(ctx, ref, key, value) {
	ctx.base.assignments.push({
		t: 2,
		s: getRefParam(ctx, ref),
		k: key,
		v: value
	});
}
function createDeleteAssignment(ctx, ref, key) {
	ctx.base.assignments.push({
		t: 3,
		s: getRefParam(ctx, ref),
		k: key,
		v: void 0
	});
}
function createArrayAssign(ctx, ref, index, value) {
	createAssignment(ctx.base, getRefParam(ctx, ref) + "[" + index + "]", value);
}
function createObjectAssign(ctx, ref, key, value) {
	if (key === "__proto__") {
		ctx.base.assignments.push({
			t: 4,
			s: getRefParam(ctx, ref),
			k: value,
			v: void 0
		});
		return;
	}
	createAssignment(ctx.base, getRefParam(ctx, ref) + "." + key, value);
}
function createSequenceAssign(ctx, ref, index, value) {
	createAssignment(ctx.base, getRefParam(ctx, ref) + ".v[" + index + "]", value);
}
function getKeyKind(key) {
	const first = key.charCodeAt(0);
	if (first >= 48 && first <= 57) {
		const check = Number(key);
		return check >= 0 && check.toString() === key ? 2 : 0;
	}
	if (key === "Infinity") return 2;
	return isValidIdentifier(key) ? 1 : 0;
}
/**
* Checks if the value is in the stack. Stack here is a reference
* structure to know if a object is to be accessed in a TDZ.
*/
function isIndexedValueInStack(ctx, node) {
	return node.t === 4 && ctx.stack.includes(node.i);
}
/**
* Checks if the node, or any node inside it, is read from more than one
* place. Such a node must not be created inside a deferred assignment,
* because the places that read it may run before the assignment does.
*/
function hasMarkedNode(ctx, node) {
	if (Array.isArray(node)) {
		for (let i = 0, len = node.length; i < len; i++) if (hasMarkedNode(ctx, node[i])) return true;
		return false;
	}
	if (node == null || typeof node !== "object") return false;
	const current = node;
	if (current.t !== 4 && typeof current.i === "number" && isSerializerRefMarked(ctx, current.i)) return true;
	for (const key in current) if (hasMarkedNode(ctx, current[key])) return true;
	return false;
}
/**
* Produces an assignment expression. `id` generates a reference
* parameter (through `getRefParam`) and has the option to
* return the reference parameter directly or assign a value to
* it.
*/
function assignIndexedValue(ctx, index, value) {
	if (!ctx.base.assignAll && !isSerializerRefMarked(ctx.base, index)) return value;
	/**
	* In cross-reference, we have to assume that
	* every reference are going to be referenced
	* in the future, and so we need to store
	* all of it into the reference array.
	*
	* otherwise in vanilla, we only do this if it
	* is actually referenced. `assignSharedRefsOnly` gives cross-reference
	* output the vanilla behavior.
	*/
	return getRefParam(ctx, index) + "=" + value;
}
function serializeReference(node) {
	return REFERENCES_KEY + ".get(\"" + node.s + "\")";
}
function serializeArrayItem(ctx, id, item, index) {
	if (item) {
		if (isIndexedValueInStack(ctx.base, item)) {
			markSerializerRef(ctx.base, id);
			createArrayAssign(ctx, id, index, getRefParam(ctx, item.i));
			return "";
		}
		return serialize$1(ctx, item);
	}
	return "";
}
function serializeArray(ctx, node) {
	const id = node.i;
	const list = node.a;
	const len = list.length;
	if (len > 0) {
		ctx.base.stack.push(id);
		let values = serializeArrayItem(ctx, id, list[0], 0);
		let isHoley = values === "";
		for (let i = 1, item; i < len; i++) {
			item = serializeArrayItem(ctx, id, list[i], i);
			values += "," + item;
			isHoley = item === "";
		}
		ctx.base.stack.pop();
		pushObjectFlag(ctx, node.o, node.i);
		return "[" + values + (isHoley ? ",]" : "]");
	}
	return "[]";
}
function serializeProperty(ctx, source, key, val) {
	if (typeof key === "string") {
		const kind = getKeyKind(key);
		if (isIndexedValueInStack(ctx.base, val)) {
			const refParam = getRefParam(ctx, val.i);
			markSerializerRef(ctx.base, source.i);
			createKeyAssign(ctx, source.i, kind, key, refParam);
			return "";
		}
		if (key !== "__proto__") return (kind === 0 ? "\"" + key + "\"" : key) + ":" + serialize$1(ctx, val);
		return "[\"" + key + "\"]:" + serialize$1(ctx, val);
	}
	return "[" + serialize$1(ctx, key) + "]:" + serialize$1(ctx, val);
}
function serializeProperties(ctx, source, record) {
	const keys = record.k;
	const len = keys.length;
	if (len > 0) {
		const values = record.v;
		ctx.base.stack.push(source.i);
		let result = serializeProperty(ctx, source, keys[0], values[0]);
		for (let i = 1, item; i < len; i++) {
			item = serializeProperty(ctx, source, keys[i], values[i]);
			result += (item && result && ",") + item;
		}
		ctx.base.stack.pop();
		return "{" + result + "}";
	}
	return "{}";
}
function serializeObject(ctx, node) {
	pushObjectFlag(ctx, node.o, node.i);
	return serializeProperties(ctx, node, node.p);
}
function serializeWithObjectAssign(ctx, source, value, serialized) {
	const fields = serializeProperties(ctx, source, value);
	if (fields !== "{}") return "Object.assign(" + serialized + "," + fields + ")";
	return serialized;
}
function serializeStringKeyAssignment(ctx, source, mainAssignments, key, value) {
	const base = ctx.base;
	const serialized = serialize$1(ctx, value);
	const parentAssignment = base.assignments;
	if (!isIndexedValueInStack(base, value)) base.assignments = mainAssignments;
	createKeyAssign(ctx, source.i, getKeyKind(key), key, serialized);
	base.assignments = parentAssignment;
}
function createKeyAssign(ctx, ref, kind, key, value) {
	if (kind === 1) createObjectAssign(ctx, ref, key, value);
	else createArrayAssign(ctx, ref, kind === 2 ? key : "\"" + key + "\"", value);
}
function serializeAssignment(ctx, source, mainAssignments, key, value) {
	if (typeof key === "string") serializeStringKeyAssignment(ctx, source, mainAssignments, key, value);
	else {
		const base = ctx.base;
		const parent = base.stack;
		base.stack = [];
		const serialized = serialize$1(ctx, value);
		base.stack = parent;
		const parentAssignment = base.assignments;
		base.assignments = mainAssignments;
		createArrayAssign(ctx, source.i, serialize$1(ctx, key), serialized);
		base.assignments = parentAssignment;
	}
}
function serializeAssignments(ctx, source, node) {
	const keys = node.k;
	const len = keys.length;
	if (len > 0) {
		const mainAssignments = [];
		const values = node.v;
		ctx.base.stack.push(source.i);
		for (let i = 0; i < len; i++) serializeAssignment(ctx, source, mainAssignments, keys[i], values[i]);
		ctx.base.stack.pop();
		return resolveAssignments(mainAssignments, false);
	}
}
function serializeDictionary(ctx, node, init) {
	if (node.p) {
		const base = ctx.base;
		if (base.features & 8 && !node.p.k.includes("__proto__")) init = serializeWithObjectAssign(ctx, node, node.p, init);
		else {
			markSerializerRef(base, node.i);
			const assignments = serializeAssignments(ctx, node, node.p);
			if (assignments) return "(" + assignIndexedValue(ctx, node.i, init) + "," + assignments + getRefParam(ctx, node.i) + ")";
		}
	}
	return init;
}
function serializeNullConstructor(ctx, node) {
	pushObjectFlag(ctx, node.o, node.i);
	return serializeDictionary(ctx, node, NULL_CONSTRUCTOR);
}
function serializeDate(node) {
	return "new Date(\"" + serializeString(node.s) + "\")";
}
function serializeTemporal(ctx, node) {
	if (ctx.base.features & 64) return "Temporal." + TEMPORAL_TYPE_NAME[node.c] + ".from(\"" + serializeString(node.s) + "\")";
	throw new SerovalUnsupportedNodeError(node);
}
function serializeRegExp(ctx, node) {
	if (ctx.base.features & 32) {
		if (node.c.includes("\\x3C")) return "new RegExp(\"" + node.c + "\",\"" + node.m + "\")";
		return "/" + deserializeString(node.c) + "/" + node.m;
	}
	throw new SerovalUnsupportedNodeError(node);
}
function serializeSetItem(ctx, id, item) {
	const base = ctx.base;
	if (isIndexedValueInStack(base, item)) {
		markSerializerRef(base, id);
		createAddAssignment(ctx, id, getRefParam(ctx, item.i));
		return "";
	}
	return serialize$1(ctx, item);
}
function serializeSet(ctx, node) {
	let serialized = SET_CONSTRUCTOR;
	const items = node.a;
	const size = items.length;
	const id = node.i;
	if (size > 0) {
		ctx.base.stack.push(id);
		let result = serializeSetItem(ctx, id, items[0]);
		for (let i = 1, item; i < size; i++) {
			item = serializeSetItem(ctx, id, items[i]);
			result += (item && result && ",") + item;
		}
		ctx.base.stack.pop();
		if (result) serialized += "([" + result + "])";
	}
	return serialized;
}
function serializeMapEntry(ctx, id, key, val, getSentinel) {
	const base = ctx.base;
	if (isIndexedValueInStack(base, key)) {
		const keyRef = getRefParam(ctx, key.i);
		markSerializerRef(base, id);
		if (isIndexedValueInStack(base, val)) {
			createSetAssignment(ctx, id, keyRef, getRefParam(ctx, val.i));
			return "";
		}
		if (val.t !== 4 && val.i != null && hasMarkedNode(base, val)) {
			markSerializerRef(base, val.i);
			const sentinel = getSentinel();
			const serialized = "(" + serialize$1(ctx, val) + ",[" + sentinel + "," + sentinel + "])";
			createSetAssignment(ctx, id, keyRef, getRefParam(ctx, val.i));
			createDeleteAssignment(ctx, id, sentinel);
			return serialized;
		}
		const parent = base.stack;
		base.stack = [];
		createSetAssignment(ctx, id, keyRef, serialize$1(ctx, val));
		base.stack = parent;
		return "";
	}
	if (isIndexedValueInStack(base, val)) {
		const valueRef = getRefParam(ctx, val.i);
		markSerializerRef(base, id);
		if (key.t !== 4 && key.i != null && hasMarkedNode(base, key)) {
			markSerializerRef(base, key.i);
			const sentinel = getSentinel();
			const serialized = "(" + serialize$1(ctx, key) + ",[" + sentinel + "," + sentinel + "])";
			createSetAssignment(ctx, id, getRefParam(ctx, key.i), valueRef);
			createDeleteAssignment(ctx, id, sentinel);
			return serialized;
		}
		const parent = base.stack;
		base.stack = [];
		createSetAssignment(ctx, id, serialize$1(ctx, key), valueRef);
		base.stack = parent;
		return "";
	}
	return "[" + serialize$1(ctx, key) + "," + serialize$1(ctx, val) + "]";
}
function serializeMap(ctx, node) {
	let serialized = MAP_CONSTRUCTOR;
	const keys = node.e.k;
	const size = keys.length;
	const id = node.i;
	const sentinel = node.f;
	let sentinelRef;
	const getSentinel = () => {
		if (sentinelRef == null) {
			sentinelRef = getRefParam(ctx, sentinel.i);
			if (ctx.mode === 1) ctx.state.sentinels.add(ctx.state.valid.get(sentinel.i));
		}
		return sentinelRef;
	};
	const base = ctx.base;
	if (size > 0) {
		const vals = node.e.v;
		base.stack.push(id);
		let result = serializeMapEntry(ctx, id, keys[0], vals[0], getSentinel);
		for (let i = 1, item; i < size; i++) {
			item = serializeMapEntry(ctx, id, keys[i], vals[i], getSentinel);
			result += (item && result && ",") + item;
		}
		base.stack.pop();
		if (result) serialized += "([" + result + "])";
	}
	if (ctx.mode === 2 && sentinel.t === 26) {
		markSerializerRef(base, sentinel.i);
		serialized = "(" + serialize$1(ctx, sentinel) + "," + serialized + ")";
	}
	return serialized;
}
function serializeArrayBuffer(ctx, node) {
	return getConstructor(ctx, node.f) + "(\"" + node.s + "\")";
}
function serializeView(ctx, node) {
	return "new " + (node.t === 20 ? "DataView" : node.c) + "(" + serialize$1(ctx, node.f) + "," + +node.b + "," + +node.l + ")";
}
function serializeAggregateError(ctx, node) {
	const id = node.i;
	ctx.base.stack.push(id);
	const serialized = serializeDictionary(ctx, node, "new AggregateError([],\"" + node.m + "\")");
	ctx.base.stack.pop();
	return serialized;
}
function serializeError(ctx, node) {
	return serializeDictionary(ctx, node, "new " + ERROR_CONSTRUCTOR_STRING[node.s] + "(\"" + node.m + "\")");
}
function serializePromise(ctx, node) {
	let serialized;
	const fulfilled = node.f;
	const id = node.i;
	const promiseConstructor = node.s ? PROMISE_RESOLVE : PROMISE_REJECT;
	const base = ctx.base;
	if (isIndexedValueInStack(base, fulfilled)) {
		const ref = getRefParam(ctx, fulfilled.i);
		serialized = promiseConstructor + (node.s ? "().then(" + createFunction([], ref) + ")" : "().catch(" + createEffectfulFunction([], "throw " + ref) + ")");
	} else {
		base.stack.push(id);
		const result = serialize$1(ctx, fulfilled);
		base.stack.pop();
		serialized = promiseConstructor + "(" + result + ")";
	}
	return serialized;
}
function serializeBoxed(ctx, node) {
	return "Object(" + serialize$1(ctx, node.f) + ")";
}
function getConstructor(ctx, node) {
	const current = serialize$1(ctx, node);
	return node.t === 4 ? current : "(" + current + ")";
}
function serializePromiseConstructor(ctx, node) {
	if (ctx.mode === 1) throw new SerovalUnsupportedNodeError(node);
	return "(" + assignIndexedValue(ctx, node.s, getConstructor(ctx, node.f) + "()") + ").p";
}
function serializePromiseResult(ctx, node) {
	if (ctx.mode === 1) throw new SerovalUnsupportedNodeError(node);
	return getConstructor(ctx, node.a[0]) + "(" + getRefParam(ctx, node.i) + "," + serialize$1(ctx, node.a[1]) + ")";
}
function serializePlugin(ctx, node) {
	const currentPlugins = ctx.base.plugins;
	if (currentPlugins) for (let i = 0, len = currentPlugins.length; i < len; i++) {
		const plugin = currentPlugins[i];
		if (plugin.tag === node.c) return plugin.serialize(node.s, { serialize: (current) => serialize$1(ctx, current) }, { id: node.i });
	}
	throw new SerovalMissingPluginError(node.c);
}
function serializeIteratorFactory(ctx, node) {
	let result = "";
	let initialized = false;
	if (node.f.t !== 4) {
		markSerializerRef(ctx.base, node.f.i);
		result = "(" + serialize$1(ctx, node.f) + ",";
		initialized = true;
	}
	result += assignIndexedValue(ctx, node.i, "(" + SERIALIZED_ITERATOR_CONSTRUCTOR + ")(" + getRefParam(ctx, node.f.i) + ")");
	if (initialized) result += ")";
	return result;
}
function serializeIteratorFactoryInstance(ctx, node) {
	return getConstructor(ctx, node.a[0]) + "(" + serialize$1(ctx, node.a[1]) + ")";
}
function serializeAsyncIteratorFactory(ctx, node) {
	const promise = node.a[0];
	const symbol = node.a[1];
	const base = ctx.base;
	let result = "";
	if (promise.t !== 4) {
		markSerializerRef(base, promise.i);
		result += "(" + serialize$1(ctx, promise);
	}
	if (symbol.t !== 4) {
		markSerializerRef(base, symbol.i);
		result += (result ? "," : "(") + serialize$1(ctx, symbol);
	}
	if (result) result += ",";
	const iterator = assignIndexedValue(ctx, node.i, "(" + SERIALIZED_ASYNC_ITERATOR_CONSTRUCTOR + ")(" + getRefParam(ctx, symbol.i) + "," + getRefParam(ctx, promise.i) + ")");
	if (result) return result + iterator + ")";
	return iterator;
}
function serializeStreamConstructor(ctx, node) {
	const result = assignIndexedValue(ctx, node.i, getConstructor(ctx, node.f) + (node.l === 1 ? "(1)" : "()"));
	const len = node.a.length;
	if (len) {
		let values = serialize$1(ctx, node.a[0]);
		for (let i = 1; i < len; i++) values += "," + serialize$1(ctx, node.a[i]);
		return "(" + result + "," + values + "," + getRefParam(ctx, node.i) + ")";
	}
	return result;
}
function serializeStreamCall(ctx, node, method) {
	return getRefParam(ctx, node.i) + "." + method + "(" + serialize$1(ctx, node.f) + ")";
}
function serializeSequenceItem(ctx, id, index, item) {
	const base = ctx.base;
	if (isIndexedValueInStack(base, item)) {
		markSerializerRef(base, id);
		createSequenceAssign(ctx, id, index, getRefParam(ctx, item.i));
		return "";
	}
	return serialize$1(ctx, item);
}
function serializeSequence(ctx, node) {
	const items = node.a;
	const size = items.length;
	const id = node.i;
	if (size > 0) {
		ctx.base.stack.push(id);
		let result = serializeSequenceItem(ctx, id, 0, items[0]);
		for (let i = 1, item; i < size; i++) {
			item = serializeSequenceItem(ctx, id, i, items[i]);
			result += (item && result && ",") + item;
		}
		ctx.base.stack.pop();
		if (result) return "{__SEROVAL_SEQUENCE__:!0,v:[" + result + "],t:" + +node.s + ",d:" + +node.l + "}";
	}
	return "{__SEROVAL_SEQUENCE__:!0,v:[],t:-1,d:0}";
}
function serializeAssignable(ctx, node) {
	switch (node.t) {
		case 17: return SYMBOL_STRING[node.s];
		case 18: return serializeReference(node);
		case 9: return serializeArray(ctx, node);
		case 10: return serializeObject(ctx, node);
		case 11: return serializeNullConstructor(ctx, node);
		case 5: return serializeDate(node);
		case 6: return serializeRegExp(ctx, node);
		case 7: return serializeSet(ctx, node);
		case 8: return serializeMap(ctx, node);
		case 19: return serializeArrayBuffer(ctx, node);
		case 16:
		case 15:
		case 20: return serializeView(ctx, node);
		case 14: return serializeAggregateError(ctx, node);
		case 13: return serializeError(ctx, node);
		case 12: return serializePromise(ctx, node);
		case 21: return serializeBoxed(ctx, node);
		case 22: return serializePromiseConstructor(ctx, node);
		case 25: return serializePlugin(ctx, node);
		case 26: return SPECIAL_REF_STRING[node.s];
		case 35: return serializeSequence(ctx, node);
		case 36: return serializeTemporal(ctx, node);
		default: throw new SerovalUnsupportedNodeError(node);
	}
}
function serialize$1(ctx, node) {
	switch (node.t) {
		case 2: return CONSTANT_STRING[node.s];
		case 0: return "" + node.s;
		case 1: return "\"" + node.s + "\"";
		case 3: return node.s + "n";
		case 4: return getRefParam(ctx, node.i);
		case 23:
		case 24: return serializePromiseResult(ctx, node);
		case 27: return serializeIteratorFactory(ctx, node);
		case 28:
		case 30: return serializeIteratorFactoryInstance(ctx, node);
		case 29: return serializeAsyncIteratorFactory(ctx, node);
		case 31: return serializeStreamConstructor(ctx, node);
		case 32: return serializeStreamCall(ctx, node, "next");
		case 33: return serializeStreamCall(ctx, node, "throw");
		case 34: return serializeStreamCall(ctx, node, "return");
		default: return assignIndexedValue(ctx, node.i, serializeAssignable(ctx, node));
	}
}
function serializeCross(ctx, tree) {
	const result = serialize$1(ctx, tree);
	const id = tree.i;
	if (id == null) return result;
	const patches = resolvePatches(ctx.base);
	const ref = getRefParam(ctx, id);
	let body = result;
	if (patches) {
		if (!ctx.base.assignAll && !result.startsWith(ref + "=")) body = ref + "=" + result;
		body = "(" + body + "," + patches + ref + ")";
	}
	const scopeId = ctx.state.scopeId;
	if (scopeId == null) {
		if (tree.t === 10 && !patches) return "(" + body + ")";
		return body;
	}
	return "(" + createFunction(["$R"], body) + ")($R[\"" + serializeString(scopeId) + "\"])";
}
function wrapSerializationError(error) {
	return error instanceof SerovalSerializationError ? error : new SerovalSerializationError(error);
}
function serializeTopCross(ctx, tree) {
	try {
		return serializeCross(ctx, tree);
	} catch (error) {
		throw wrapSerializationError(error);
	}
}
function parseItems(ctx, depth, current) {
	assertArrayHoles(current);
	const len = current.length;
	const nodes = new Array(len);
	for (let i = 0; i < len; i++) if (i in current) nodes[i] = parseSOS(ctx, depth, current[i]);
	else nodes[i] = 0;
	return nodes;
}
function parseArray(ctx, depth, id, current) {
	return createArrayNode(id, current, parseItems(ctx, depth, current));
}
function parseProperties(ctx, depth, properties) {
	const keys = Object.keys(properties);
	const len = keys.length;
	const keyNodes = new Array(len);
	const valueNodes = new Array(len);
	for (let i = 0, key; i < len; i++) {
		key = keys[i];
		keyNodes[i] = serializeString(key);
		valueNodes[i] = parseSOS(ctx, depth, properties[key]);
	}
	if (SYM_ITERATOR in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_ITERATOR));
		valueNodes.push(createIteratorFactoryInstanceNode(28, parseIteratorFactory(ctx.base), parseSOS(ctx, depth, createSequenceFromIterable(properties))));
	}
	if (SYM_ASYNC_ITERATOR in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_ASYNC_ITERATOR));
		valueNodes.push(createIteratorFactoryInstanceNode(30, parseAsyncIteratorFactory(ctx.base), parseAsyncIterable(ctx, depth, properties)));
	}
	if (SYM_TO_STRING_TAG in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_TO_STRING_TAG));
		valueNodes.push(createStringNode(properties[SYM_TO_STRING_TAG]));
	}
	if (SYM_IS_CONCAT_SPREADABLE in properties) {
		keyNodes.push(parseWellKnownSymbol(ctx.base, SYM_IS_CONCAT_SPREADABLE));
		valueNodes.push(properties[SYM_IS_CONCAT_SPREADABLE] ? TRUE_NODE : FALSE_NODE);
	}
	return {
		k: keyNodes,
		v: valueNodes
	};
}
function parseAsyncIterable(ctx, depth, current) {
	if (ctx.type !== 2) throw new SerovalUnsupportedTypeError(current);
	const id = createIndexForValue(ctx.base, {});
	const result = createStreamConstructorNode(id, parseSpecialReference(ctx.base, 4), []);
	ctx.state.iterable(ctx, depth, id, current);
	return result;
}
function parsePlainObject(ctx, depth, id, current, empty) {
	return createObjectNode(id, current, empty, parseProperties(ctx, depth, current));
}
function parseBoxed(ctx, depth, id, current) {
	return createBoxedNode(id, parseSOS(ctx, depth, current.valueOf()));
}
function parseView(ctx, depth, type, id, current) {
	const view = getArrayBufferView(ctx.base, readArrayBufferView(current, type === 20));
	return createViewNode(type, id, current, view, parseSOS(ctx, depth, view.buffer));
}
function parseError(ctx, depth, type, id, current) {
	const options = getErrorOptions(current, ctx.base.features);
	return createErrorNode(type, id, current, options ? parseProperties(ctx, depth, options) : void 0);
}
function parseMap(ctx, depth, id, current) {
	const sentinel = parseMapSentinel(ctx.base);
	const keyNodes = new Array(current.size);
	const valueNodes = new Array(current.size);
	let i = 0;
	for (const [key, value] of current.entries()) {
		keyNodes[i] = parseSOS(ctx, depth, key);
		valueNodes[i] = parseSOS(ctx, depth, value);
		i++;
	}
	return createMapNode(id, sentinel, keyNodes, valueNodes);
}
function parseSet(ctx, depth, id, current) {
	const items = new Array(current.size);
	let i = 0;
	for (const item of current.keys()) items[i++] = parseSOS(ctx, depth, item);
	return createSetNode(id, items);
}
/**
* Sends the events of a stream that has ended, so the copy gets all of them.
* A stream that is still open throws, because the other sync modes cannot
* send its later events.
*/
function parseEndedStream(ctx, depth, id, current) {
	const events = current.endedEvents();
	if (!events) throw new SerovalUnsupportedTypeError(current);
	const values = events.values;
	const last = values.length - 1;
	const sequence = new Array(values.length);
	if (last >= 0) markParserRef(ctx.base, id);
	for (let i = 0; i <= last; i++) sequence[i] = createStreamEventNode(i < last ? 32 : events.success ? 34 : 33, id, parseSOS(ctx, depth, values[i]));
	return sequence;
}
function parseStream(ctx, depth, id, current) {
	const reference = parseSpecialReference(ctx.base, 4);
	if (ctx.type === 2) {
		const result = createStreamConstructorNode(id, reference, []);
		ctx.state.stream(ctx, depth, id, current);
		return result;
	}
	return createStreamConstructorNode(id, reference, parseEndedStream(ctx, depth, id, current));
}
function parseLiveStream(ctx, depth, id, current) {
	if (ctx.type !== 2) throw new SerovalUnsupportedTypeError(current);
	const result = createStreamConstructorNode(id, parseSpecialReference(ctx.base, 4), [], 1);
	ctx.state.live(ctx, depth, id, current);
	return result;
}
function parsePromise(ctx, depth, id, current) {
	if (ctx.type !== 2) throw new SerovalUnsupportedTypeError(current);
	const resolver = createIndexForValue(ctx.base, {});
	ctx.state.promise(ctx, resolver, depth, current);
	return createPromiseConstructorNode(ctx.base, id, resolver);
}
function parsePluginSync(ctx, depth, id, current, currentPlugins) {
	for (let i = 0, len = currentPlugins.length; i < len; i++) {
		const plugin = currentPlugins[i];
		if (plugin.parse.sync && plugin.test(current)) return createPluginNode(id, plugin.tag, plugin.parse.sync(current, { parse: (value) => parseSOS(ctx, depth, value) }, { id }));
	}
}
function parsePlugin(ctx, depth, id, current, currentPlugins) {
	if (currentPlugins) return ctx.type === 1 ? parsePluginSync(ctx, depth, id, current, currentPlugins) : ctx.state.plugin(ctx, depth, id, current, currentPlugins);
}
function parseSequence(ctx, depth, id, current) {
	const len = current.v.length;
	const nodes = new Array(len);
	for (let i = 0; i < len; i++) nodes[i] = parseSOS(ctx, depth, current.v[i]);
	return createSequenceNode(id, nodes, current.t, current.d);
}
function parseObjectPhase2(ctx, depth, id, current, currentClass) {
	if (currentClass === Object) return parsePlainObject(ctx, depth, id, current, false);
	switch (getObjectKind(current, currentClass, ctx.base.features)) {
		case 2: return parsePlainObject(ctx, depth, id, current, true);
		case 3: return createDateNode(id, current);
		case 4: return parseError(ctx, depth, 13, id, current);
		case 5: return parseError(ctx, depth, 14, id, current);
		case 6: return parseBoxed(ctx, depth, id, current);
		case 7: return createArrayBufferNode(ctx.base, id, current);
		case 8: return parseView(ctx, depth, 15, id, current);
		case 9: return parseView(ctx, depth, 16, id, current);
		case 10: return parseView(ctx, depth, 20, id, current);
		case 11: return parseMap(ctx, depth, id, current);
		case 12: return parseSet(ctx, depth, id, current);
		case 13: return parsePromise(ctx, depth, id, current);
		case 14: return createRegExpNode(id, current);
		case 15: return createTemporalNode(id, getTemporalType(currentClass), currentClass, current);
		case 16: return parsePlainObject(ctx, depth, id, current, !!currentClass);
		default: throw new SerovalUnsupportedTypeError(current);
	}
}
function parseObject(ctx, depth, id, current) {
	if (Array.isArray(current)) return parseArray(ctx, depth, id, current);
	if (isLiveStream(current)) return parseLiveStream(ctx, depth, id, current);
	if (current instanceof Stream) return parseStream(ctx, depth, id, current);
	if (isSequence(current)) return parseSequence(ctx, depth, id, current);
	const currentClass = getObjectClass(current);
	if (currentClass === OpaqueReference) return parseSOS(ctx, depth, current.replacement);
	const parsed = parsePlugin(ctx, depth, id, current, getObjectPlugins(ctx.base, current, currentClass));
	if (parsed) return parsed;
	return parseObjectPhase2(ctx, depth, id, current, currentClass);
}
function parseFunction(ctx, depth, current) {
	const ref = getReferenceNode(ctx.base, current);
	if (typeof ref !== "number") return ref;
	const plugin = parsePlugin(ctx, depth, ref, current, ctx.base.plugins);
	if (plugin) return plugin;
	throw new SerovalUnsupportedTypeError(current);
}
function parseSOS(ctx, depth, current) {
	if (depth >= ctx.base.depthLimit) throw new SerovalDepthLimitError(ctx.base.depthLimit);
	switch (typeof current) {
		case "boolean": return current ? TRUE_NODE : FALSE_NODE;
		case "undefined": return UNDEFINED_NODE;
		case "string": return createStringNode(current);
		case "number": return createNumberNode(current);
		case "bigint": return createBigIntNode(current);
		case "object":
			if (current) {
				const ref = getReferenceNode(ctx.base, current);
				return typeof ref === "number" ? parseObject(ctx, depth + 1, ref, current) : ref;
			}
			return NULL_NODE;
		case "symbol": return parseWellKnownSymbol(ctx.base, current);
		case "function": return parseFunction(ctx, depth, current);
		default: throw new SerovalUnsupportedTypeError(current);
	}
}
/**
* Streaming parse mode. Everything here is reached through the function
* fields of the stream parser state, which only `createStreamParserContext`
* sets, so synchronous consumers (`serialize`, `toJSON`) never bundle it.
*/
function createStreamParsePluginContext(ctx, depth) {
	const state = ctx.state;
	function parse(current) {
		state.parsing++;
		try {
			return parseSOS(ctx, depth, current);
		} finally {
			state.parsing--;
			if (!state.alive) releaseParserValues(ctx);
		}
	}
	return {
		parse,
		parseStreamSource(current) {
			state.parsing++;
			try {
				if (depth >= ctx.base.depthLimit) throw new SerovalDepthLimitError(ctx.base.depthLimit);
				const id = createIndexForValue(ctx.base, {});
				const node = createStreamConstructorNode(id, parseSpecialReference(ctx.base, 4), [], 1);
				iterateAsync(ctx, depth + 1, id, current, true);
				return node;
			} finally {
				state.parsing--;
				if (!state.alive) releaseParserValues(ctx);
			}
		},
		parseWithError(current) {
			try {
				return parse(current);
			} catch (error) {
				stopStreamParse(ctx, 1, error);
				return;
			}
		},
		isAlive: () => state.alive,
		pushPendingState: () => {
			pushPendingState(ctx);
		},
		popPendingState: () => {
			popPendingState(ctx);
		},
		onParse(node) {
			if (state.alive) {
				state.queue.push({
					node,
					initial: false,
					accept: void 0,
					refs: ctx.base.refs.size
				});
				drainOutput(ctx);
			}
		},
		onError(error) {
			stopStreamParse(ctx, 1, error);
		},
		addCleanup(callback) {
			addCleanup(ctx, callback);
		}
	};
}
function getStreamParsePluginContext(ctx, depth) {
	const contexts = ctx.state.pluginContexts;
	return contexts[depth] ?? (contexts[depth] = createStreamParsePluginContext(ctx, depth));
}
function addCleanup(ctx, callback) {
	if (ctx.state.alive) ctx.state.cleanups.push(callback);
	else callback();
}
function parsePluginStream(ctx, depth, id, current, currentPlugins) {
	for (let i = 0, len = currentPlugins.length; i < len; i++) {
		const plugin = currentPlugins[i];
		if (plugin.parse.stream && plugin.test(current)) return createPluginNode(id, plugin.tag, plugin.parse.stream(current, getStreamParsePluginContext(ctx, depth), { id }));
	}
}
/**
* One listener shape serves both `Stream.on` (no accept) and
* `LiveStream.pump` (accept tied to record acceptance). Handlers return the
* parse error so the pump can stop the source.
*/
function streamListener(ctx, depth, id, subscription) {
	const handle = (type, terminal) => (value, accept) => {
		let failure = void 0;
		if (ctx.state.alive) try {
			failure = parseEvent(ctx, depth, value, createStreamEventNode.bind(null, type, id), accept);
		} catch (error) {
			if (!subscription?.active) throw error;
			subscription.failure ?? (subscription.failure = { value: error });
			failure = error;
		}
		if (terminal && !accept) popPendingState(ctx);
		return failure;
	};
	return {
		next: handle(32, false),
		throw: handle(33, true),
		return: handle(34, true),
		done() {
			popPendingState(ctx);
		},
		error(reason) {
			if (ctx.state.alive) stopStreamParse(ctx, 1, reason);
		}
	};
}
function subscribeStream(ctx, depth, id, current) {
	pushPendingState(ctx);
	const subscription = {
		active: true,
		failure: void 0
	};
	let cleanup;
	try {
		cleanup = current.on(streamListener(ctx, depth, id, subscription));
	} finally {
		subscription.active = false;
	}
	try {
		addCleanup(ctx, cleanup);
	} catch (error) {
		subscription.failure ?? (subscription.failure = { value: error });
	}
	const failure = subscription.failure;
	subscription.failure = void 0;
	if (failure) throw failure.value;
}
function consumeLiveStream(ctx, depth, id, current) {
	const cancel = current.pump(streamListener(ctx, depth, id));
	pushPendingState(ctx);
	addCleanup(ctx, () => {
		cancel(ctx.state.reason);
	});
}
function wrapPromiseResult(ctx, type, id, node) {
	return createSerovalNode(type, id, void 0, void 0, void 0, void 0, void 0, [parseSpecialReference(ctx.base, type === 23 ? 2 : 3), node]);
}
function handlePromise(type, id, depth, data) {
	if (this.state.alive) parseEvent(this, depth, data, wrapPromiseResult.bind(null, this, type, id), void 0);
	popPendingState(this);
}
function watchPromise(ctx, resolver, depth, current) {
	pushPendingState(ctx);
	let settled = false;
	current.then((data) => {
		if (!settled) {
			settled = true;
			handlePromise.call(ctx, 23, resolver, depth, data);
		}
	}, (data) => {
		if (!settled) {
			settled = true;
			handlePromise.call(ctx, 24, resolver, depth, data);
		}
	});
}
function returnIterator(iterator) {
	Promise.resolve().then(() => iterator.return?.()).catch(() => {});
}
/**
* Drives an async iterator directly. The next value is pulled only after the
* record for the previous one has been accepted, and cancellation returns
* the iterator once.
*/
function iterateAsync(ctx, depth, id, current, forwardReason) {
	const iterator = current[SYM_ASYNC_ITERATOR]();
	const listener = streamListener(ctx, depth, id);
	let active = true;
	function stop() {
		if (active) {
			active = false;
			if (forwardReason) try {
				Promise.resolve(iterator.return?.(ctx.state.reason)).catch(() => {});
			} catch {}
			else returnIterator(iterator);
		}
	}
	function pull() {
		if (active) iterator.next().then((result) => {
			if (active) {
				if (result.done) {
					active = false;
					listener.return(result.value, void 0);
				} else if (listener.next(result.value, pull) !== void 0) {
					stop();
					listener.done();
				}
			}
		}, (error) => {
			if (active) {
				active = false;
				listener.throw(error, void 0);
			}
		});
	}
	pushPendingState(ctx);
	addCleanup(ctx, stop);
	pull();
}
function createStreamParserState(options) {
	return {
		alive: true,
		pending: 0,
		parsing: 0,
		queue: [],
		head: 0,
		writing: false,
		inFlight: void 0,
		reason: void 0,
		starting: false,
		onParse: options.onParse,
		onError: options.onError,
		onDone: options.onDone,
		cleanups: [],
		pluginContexts: [],
		stream: subscribeStream,
		live: consumeLiveStream,
		promise: watchPromise,
		iterable: iterateAsync,
		plugin: parsePluginStream
	};
}
function createStreamParserContext(options) {
	return {
		type: 2,
		base: createBaseParserContext(options),
		state: createStreamParserState(options)
	};
}
function pushPendingState(ctx) {
	if (ctx.state.alive) ctx.state.pending++;
}
function popPendingState(ctx) {
	if (ctx.state.alive) {
		ctx.state.pending--;
		checkStreamParse(ctx);
	}
}
/**
* Parses a value that arrived after the root. Its record is queued before
* parsing starts so that records discovered inside it follow it, and it is
* dropped again if parsing fails. Returns the parse error after reporting
* it, or `undefined`.
*/
function parseEvent(ctx, depth, value, wrap, accept) {
	const state = ctx.state;
	const record = {
		node: void 0,
		initial: false,
		accept,
		refs: ctx.base.refs.size
	};
	let failure;
	state.queue.push(record);
	state.parsing++;
	try {
		record.node = wrap(parseSOS(ctx, depth, value));
	} catch (error) {
		failure = { value: error };
	} finally {
		state.parsing--;
		if (!state.alive) releaseParserValues(ctx);
	}
	if (failure) stopStreamParse(ctx, 1, failure.value);
	else drainOutput(ctx);
	return failure?.value;
}
function takeRecord(state) {
	const record = state.queue[state.head];
	state.queue[state.head++] = void 0;
	if (state.head === state.queue.length) {
		state.queue.length = 0;
		state.head = 0;
	} else if (state.head > 1024 && state.head * 2 > state.queue.length) {
		state.queue.splice(0, state.head);
		state.head = 0;
	}
	return record;
}
/**
* Emits queued records one at a time. A callback that returns a promise
* pauses emission until it settles; the source event behind the record is
* accepted only after that.
*/
function drainOutput(ctx) {
	const state = ctx.state;
	if (state.writing || state.parsing > 0) return;
	while (state.alive && state.head < state.queue.length) {
		const record = takeRecord(state);
		if (!record.node) continue;
		let pending;
		state.writing = true;
		state.inFlight = record;
		state.parsing++;
		try {
			if (!state.onParse) throw new Error("Stream output callback is unavailable");
			const result = state.onParse(record.node, record.initial);
			if (result !== null && (typeof result === "object" || typeof result === "function")) {
				const then = Reflect.get(result, "then");
				if (typeof then === "function") pending = new Promise((resolve, reject) => {
					Reflect.apply(then, result, [resolve, reject]);
				});
			}
		} catch (error) {
			releaseRecord(record);
			stopStreamParse(ctx, 1, error);
			return;
		} finally {
			state.parsing--;
			if (!state.alive) releaseParserValues(ctx);
		}
		record.node = void 0;
		if (pending) {
			if (!state.alive) releaseRecord(record);
			pending.then(() => {
				state.writing = false;
				state.inFlight = void 0;
				if (state.alive) {
					const accept = record.accept;
					releaseRecord(record);
					accept?.();
					drainOutput(ctx);
				}
			}, (error) => {
				state.writing = false;
				state.inFlight = void 0;
				releaseRecord(record);
				stopStreamParse(ctx, 1, error);
			});
			return;
		}
		if (!state.alive) {
			releaseRecord(record);
			return;
		}
		state.writing = false;
		state.inFlight = void 0;
		const accept = record.accept;
		releaseRecord(record);
		accept?.();
	}
	checkStreamParse(ctx);
}
function checkStreamParse(ctx) {
	const state = ctx.state;
	if (state.alive && state.parsing === 0 && state.pending <= 0 && state.head === state.queue.length && !state.writing) stopStreamParse(ctx, 0);
}
function startStreamParse(ctx, current) {
	const state = ctx.state;
	let parsed;
	let failure;
	const refs = ctx.base.refs;
	const size = refs.size;
	state.starting = true;
	try {
		state.parsing++;
		try {
			parsed = parseSOS(ctx, 0, current);
		} catch (error) {
			failure = { value: error };
		} finally {
			state.parsing--;
			if (!state.alive) releaseParserValues(ctx);
		}
		if (failure) {
			rollbackRefs(refs, size);
			if (state.alive) stopStreamParse(ctx, 1, failure.value);
			else throw failure.value;
		} else if (parsed && state.alive) {
			state.queue.unshift({
				node: parsed,
				initial: true,
				accept: void 0,
				refs: size
			});
			drainOutput(ctx);
		}
	} finally {
		state.starting = false;
	}
}
function runCleanups(state) {
	const cleanups = state.cleanups;
	let failure;
	state.cleanups = [];
	for (const record of state.queue) if (record) releaseRecord(record);
	state.queue.length = 0;
	state.head = 0;
	if (state.inFlight) releaseRecord(state.inFlight);
	state.inFlight = void 0;
	for (let i = 0, len = cleanups.length; i < len; i++) try {
		cleanups[i]();
	} catch (error) {
		failure ?? (failure = { value: error });
	}
	if (failure) throw failure.value;
}
function releaseRecord(record) {
	record.node = void 0;
	record.accept = void 0;
}
function releaseParserValues(ctx) {
	ctx.base.refs = /* @__PURE__ */ new Map();
	ctx.base.marked.clear();
	ctx.base.plugins = void 0;
	ctx.base.plainObjectPlugins = void 0;
	ctx.state.pluginContexts = [];
	if (ctx.state.parsing === 0) ctx.state.reason = void 0;
}
/**
* Ends the parse once: `onDone` on success, `onError` on failure, and every
* cleanup either way.
*/
function stopStreamParse(ctx, mode, reason) {
	const state = ctx.state;
	if (state.alive) {
		state.alive = false;
		const unsent = state.queue[state.head];
		if (mode !== 0 && unsent) rollbackRefs(ctx.base.refs, unsent.refs);
		const onError = state.onError;
		const onDone = state.onDone;
		if (mode === 1 && !onError && !(reason instanceof SerovalParserError)) reason = new SerovalParserError(reason);
		state.reason = reason;
		state.onParse = void 0;
		state.onError = void 0;
		state.onDone = void 0;
		state.writing = false;
		state.parsing++;
		let failure;
		try {
			if (mode === 1) {
				if (onError) onError(reason);
				else if (state.starting) throw reason;
			} else if (mode === 0) onDone?.();
		} catch (error) {
			failure = { value: error };
		}
		try {
			runCleanups(state);
		} catch (error) {
			failure ?? (failure = { value: error });
		} finally {
			state.parsing--;
			releaseParserValues(ctx);
			state.pending = 0;
		}
		if (failure) throw failure.value;
	}
}
function destroyStreamParse(ctx, reason) {
	stopStreamParse(ctx, 2, reason);
}
async function toCrossJSONAsync(source, options = {}) {
	const plugins = resolvePlugins(options.plugins);
	return await parseTopAsync(createAsyncParserContext({
		compactArrayBufferViews: options.compactArrayBufferViews,
		depthLimit: options.depthLimit,
		plugins,
		disabledFeatures: options.disabledFeatures,
		refs: options.refs
	}), source);
}
function crossSerializeStream(source, options) {
	const plugins = resolvePlugins(options.plugins);
	const onSerialize = options.onSerialize;
	const scopeId = options.scopeId;
	const ctx = createStreamParserContext({
		compactArrayBufferViews: options.compactArrayBufferViews,
		depthLimit: options.depthLimit,
		plugins,
		refs: options.refs,
		disabledFeatures: options.disabledFeatures,
		onParse(node, initial) {
			const serial = createCrossSerializerContext({
				plugins,
				features: ctx.base.features,
				scopeId,
				markedRefs: ctx.base.marked
			});
			return onSerialize(serializeTopCross(serial, node), initial);
		},
		onError: options.onError,
		onDone: options.onDone
	});
	startStreamParse(ctx, source);
	return destroyStreamParse.bind(null, ctx);
}
function toCrossJSONStream(source, options) {
	const plugins = resolvePlugins(options.plugins);
	const ctx = createStreamParserContext({
		compactArrayBufferViews: options.compactArrayBufferViews,
		plugins,
		refs: options.refs,
		disabledFeatures: options.disabledFeatures,
		depthLimit: options.depthLimit,
		onParse: options.onParse,
		onError: options.onError,
		onDone: options.onDone
	});
	startStreamParse(ctx, source);
	return destroyStreamParse.bind(null, ctx);
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/makeSerovalPlugin.js
/** Create a Seroval plugin for client/server symmetric (de)serialization. */
/* @__NO_SIDE_EFFECTS__ */
function makeSerovalPlugin(serializationAdapter) {
	return /* @__PURE__ */ createPlugin({
		tag: "$TSR/t/" + serializationAdapter.key,
		test: serializationAdapter.test,
		parse: {
			sync(value, ctx) {
				return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
			},
			async async(value, ctx) {
				return { v: await ctx.parse(serializationAdapter.toSerializable(value)) };
			},
			stream(value, ctx) {
				return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
			}
		},
		serialize: void 0,
		deserialize(node, ctx) {
			return serializationAdapter.fromSerializable(ctx.deserialize(node.v));
		}
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/RawStream.js
/**
* Marker class for ReadableStream<Uint8Array> that should be serialized
* with base64/text encoding (JSON and SSR) or binary framing
* (server-function responses).
*
* Wrap your binary streams with this to get efficient serialization:
* ```ts
* // For binary data (files, images, etc.)
* return { data: new RawStream(file.stream()) }
*
* // For text-heavy data (RSC payloads, etc.)
* return { data: new RawStream(rscStream, { hint: 'text' }) }
* ```
*
* RawStreams returned from one server function share one ordered response.
* Arbitrary or sequential consumption can require potentially unbounded client
* buffering for unread data. Cancelling one RawStream discards it locally;
* abort the whole server-function call to cancel the response and server work.
* Consume streams concurrently, cancel unused streams promptly, or use separate
* calls when independent backpressure is required.
*/
var RawStream = class {
	constructor(stream, options) {
		this.stream = stream;
		this.hint = options?.hint ?? "binary";
	}
};
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/ShallowErrorPlugin.js
/**
* this plugin serializes only the `message` part of an Error
* this helps with serializing e.g. a ZodError which has functions attached that cannot be serialized
*/
var ShallowErrorPlugin = /* @__PURE__ */ createPlugin({
	tag: "$TSR/Error",
	test(value) {
		return value instanceof Error;
	},
	parse: {
		sync(value, ctx) {
			return { message: ctx.parse(value.message) };
		},
		async async(value, ctx) {
			return { message: await ctx.parse(value.message) };
		},
		stream(value, ctx) {
			return { message: ctx.parse(value.message) };
		}
	},
	serialize(node, ctx) {
		return "new Error(" + ctx.serialize(node.message) + ")";
	},
	deserialize(node, ctx) {
		return new Error(ctx.deserialize(node.message));
	}
});
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/rawStreamCodec.js
function toBase64(bytes) {
	const chunks = [];
	for (let i = 0; i < bytes.length; i += 32768) chunks.push(String.fromCharCode.apply(null, bytes.subarray(i, i + 32768)));
	return btoa(chunks.join(""));
}
function fromBase64(value) {
	const binary = atob(value);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes;
}
var textDecoder = /* @__PURE__ */ new TextDecoder("utf-8", {
	fatal: true,
	ignoreBOM: true
});
/** `'t' + utf8` for a valid UTF-8 chunk, otherwise `'b' + base64`. */
function encodeText(value) {
	try {
		return "t" + textDecoder.decode(value);
	} catch {
		return "b" + toBase64(value);
	}
}
var textEncoder$2 = /* @__PURE__ */ new TextEncoder();
function decodeText(value) {
	const data = value.slice(1);
	return value[0] === "t" ? textEncoder$2.encode(data) : fromBase64(data);
}
/**
* Pump a byte stream into a Seroval stream, one encoded chunk per read.
* Returns the Seroval stream and a `stop` function that cancels the reader
* without signalling the Seroval stream; the abort signal and read failures
* stop the pump and throw through the Seroval stream.
*/
function pumpEncodedStream(readable, encode, signal) {
	signal?.throwIfAborted();
	const stream = createStream();
	const reader = readable.getReader();
	let active = true;
	const release = () => {
		active = false;
		signal?.removeEventListener("abort", abort);
		reader.releaseLock();
	};
	const stop = (reason) => {
		if (!active) return false;
		reader.cancel(reason).catch(() => {});
		release();
		return true;
	};
	const abort = () => {
		if (stop(signal.reason)) stream.throw(signal.reason);
	};
	signal?.addEventListener("abort", abort);
	(async () => {
		try {
			while (active) {
				const { done, value } = await reader.read();
				if (!active) return;
				if (done) {
					release();
					stream.return(void 0);
					return;
				}
				stream.next(encode(value));
			}
		} catch (error) {
			if (stop(error)) stream.throw(error);
		}
	})();
	return [stream, stop];
}
/** Rebuild a byte stream from encoded Seroval stream chunks. */
function fromEncodedStream(source, decode) {
	let unsubscribe;
	let done = false;
	return new ReadableStream({
		start(controller) {
			const dispose = source.on({
				next(value) {
					if (done) return;
					try {
						controller.enqueue(decode(value));
					} catch (error) {
						done = true;
						const stop = unsubscribe;
						unsubscribe = void 0;
						stop?.();
						controller.error(error);
					}
				},
				throw(error) {
					if (!done) {
						done = true;
						unsubscribe = void 0;
						controller.error(error);
					}
				},
				return() {
					if (!done) {
						done = true;
						unsubscribe = void 0;
						controller.close();
					}
				}
			});
			if (done) dispose();
			else unsubscribe = dispose;
		},
		cancel() {
			const dispose = unsubscribe;
			unsubscribe = void 0;
			dispose?.();
		}
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/RawStreamJSONPlugin.js
/**
* Serializes a RawStream into JSON requests and static-cache responses.
* The optional signal stops the source pump when the request is aborted.
*/
/* @__NO_SIDE_EFFECTS__ */
function createRawStreamJSONPlugin(signal) {
	return /* @__PURE__ */ createPlugin({
		tag: "tss/RawStream",
		test: (value) => value instanceof RawStream,
		parse: { async: async (value, ctx) => {
			const text = await ctx.parse(value.hint === "text");
			const [stream] = pumpEncodedStream(value.stream, value.hint === "text" ? encodeText : toBase64, signal);
			return {
				text,
				stream: await ctx.parse(stream)
			};
		} },
		serialize: void 0,
		deserialize: void 0
	});
}
var RawStreamJSONPlugin = /* @__PURE__ */ createRawStreamJSONPlugin();
/**
* Deserializes the JSON shape above back into a `ReadableStream<Uint8Array>`.
* `test` never matches, so this plugin is inert during serialization and can
* share a plugin list with `RawStreamJSONPlugin`.
*/
var RawStreamJSONDeserializePlugin = /* @__PURE__ */ createPlugin({
	tag: "tss/RawStream",
	test: () => false,
	parse: {},
	serialize: void 0,
	deserialize(node, ctx) {
		return fromEncodedStream(ctx.deserialize(node.stream), ctx.deserialize(node.text) ? decodeText : fromBase64);
	}
});
//#endregion
//#region node_modules/seroval-plugins/dist/web.js
var CLAIMED = /* @__PURE__ */ new WeakSet();
function claim(value) {
	if (typeof value === "object" && value !== null) {
		if (CLAIMED.has(value)) throw new Error("Expected a value used by one plugin value only.");
		CLAIMED.add(value);
	}
	return value;
}
var READABLE_STREAM_FACTORY = {};
var READABLE_STREAM_FACTORY_CONSTRUCTOR = (stream) => new ReadableStream({ start(controller) {
	stream.on({
		next(value) {
			try {
				controller.enqueue(value);
			} catch (_error) {}
		},
		throw(value) {
			controller.error(value);
		},
		return() {
			try {
				controller.close();
			} catch (_error) {}
		}
	});
} });
var ReadableStreamFactoryPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval-plugins/web/ReadableStreamFactory",
	test(value) {
		return value === READABLE_STREAM_FACTORY;
	},
	parse: {
		sync() {
			return READABLE_STREAM_FACTORY;
		},
		async async() {
			return await Promise.resolve(READABLE_STREAM_FACTORY);
		},
		stream() {
			return READABLE_STREAM_FACTORY;
		}
	},
	serialize() {
		return READABLE_STREAM_FACTORY_CONSTRUCTOR.toString();
	},
	deserialize() {
		return READABLE_STREAM_FACTORY;
	}
});
function toAsyncIterable(value) {
	return { [Symbol.asyncIterator]() {
		const reader = value.getReader();
		let active = true;
		let reading = false;
		const release = () => {
			try {
				reader.releaseLock();
			} catch {}
		};
		return {
			async next() {
				if (!active) return {
					done: true,
					value: void 0
				};
				reading = true;
				let result;
				try {
					result = await reader.read();
				} catch (error) {
					reading = false;
					release();
					if (!active) return {
						done: true,
						value: void 0
					};
					active = false;
					throw error;
				}
				reading = false;
				if (!active || result.done) {
					active = false;
					release();
					return {
						done: true,
						value: void 0
					};
				}
				return result;
			},
			return(reason) {
				if (active) {
					active = false;
					try {
						reader.cancel(reason).catch(() => {});
					} catch {}
					if (!reading) release();
				}
				return Promise.resolve({
					done: true,
					value: void 0
				});
			}
		};
	} };
}
var ReadableStreamPlugin = /* @__PURE__ */ createPlugin({
	tag: "seroval/plugins/web/ReadableStream",
	extends: [ReadableStreamFactoryPlugin],
	skipPlainObjects: true,
	test(value) {
		if (typeof ReadableStream === "undefined") return false;
		return value instanceof ReadableStream;
	},
	parse: {
		async async(value, ctx) {
			return {
				factory: await ctx.parse(READABLE_STREAM_FACTORY),
				stream: await ctx.parseStreamSource(toAsyncIterable(value))
			};
		},
		stream(value, ctx) {
			return {
				factory: ctx.parse(READABLE_STREAM_FACTORY),
				stream: ctx.parseStreamSource(toAsyncIterable(value))
			};
		}
	},
	serialize(node, ctx) {
		return "(" + ctx.serialize(node.factory) + ")(" + ctx.serialize(node.stream) + ")";
	},
	validate: { stream: isStream },
	deserialize(node, ctx) {
		return READABLE_STREAM_FACTORY_CONSTRUCTOR(claim(ctx.deserialize(node.stream)));
	}
});
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/seroval-plugins.js
/**
* Plugins for JSON transport from a client: serializes RawStream arguments
* and reads plain JSON responses, which never carry RawStream nodes.
*/
/* @__NO_SIDE_EFFECTS__ */
function createDefaultSerovalPlugins(signal) {
	return [
		ShallowErrorPlugin,
		signal ? /* @__PURE__ */ createRawStreamJSONPlugin(signal) : RawStreamJSONPlugin,
		ReadableStreamPlugin
	];
}
/**
* `defaultSerovalPlugins` plus RawStream deserialization, for JSON that may
* carry RawStream nodes: server-function request bodies and cached static
* responses. Seroval deserializes by first tag match, so the deserialize half
* precedes the serialize half; it never matches during serialization.
*/
var defaultSerovalDeserializerPlugins = [RawStreamJSONDeserializePlugin, .../* @__PURE__ */ createDefaultSerovalPlugins()];
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/RawStreamRPCPlugin.js
/**
* Server-side RawStream plugin for multiplexed server-function responses.
* The `hint` is ignored: framed responses always carry raw bytes.
*/
/* @__NO_SIDE_EFFECTS__ */
function createRawStreamRPCPlugin(onRawStream) {
	let nextStreamId = 1;
	return /* @__PURE__ */ createPlugin({
		tag: "tss/RawStream",
		test(value) {
			return value instanceof RawStream;
		},
		parse: { stream(value, ctx) {
			const streamId = nextStreamId++;
			onRawStream(streamId, value.stream);
			return { streamId: ctx.parse(streamId) };
		} },
		serialize: void 0,
		deserialize: void 0
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/makeSsrSerovalPlugin.js
/**
* Create a Seroval plugin for server-side serialization only. `tracker.didRun`
* becomes true once the plugin serialized a value.
*/
/* @__NO_SIDE_EFFECTS__ */
function makeSsrSerovalPlugin(serializationAdapter, tracker) {
	return /* @__PURE__ */ createPlugin({
		tag: "$TSR/t/" + serializationAdapter.key,
		test: serializationAdapter.test,
		parse: { stream(value, ctx) {
			return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
		} },
		serialize(node, ctx) {
			if (tracker) tracker.didRun = true;
			return GLOBAL_TSR + ".t.get(\"" + serializationAdapter.key + "\")(" + ctx.serialize(node.v) + ")";
		},
		deserialize: void 0
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/RawStreamSSRPlugin.js
var nodeBuffer = globalThis.Buffer;
var toBase64Fast = nodeBuffer ? (bytes) => nodeBuffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString("base64") : toBase64;
var BINARY_FACTORY = () => {};
var TEXT_FACTORY = () => {};
var FACTORY_BINARY = `((s,u=1)=>new ReadableStream({start(c,f){f=s.on({next(b){const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)},throw(e){s=u=0;c.error(e)},return(){s=u=0;c.close()}});u=u&&f},cancel(){u&&u()}}))`;
var FACTORY_TEXT = `((s,u=1,e=new TextEncoder)=>new ReadableStream({start(c,f){f=s.on({next(v){const x=v.slice(1);if(v[0]==='t')c.enqueue(e.encode(x));else{const d=atob(x),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}},throw(x){s=u=0;c.error(x)},return(){s=u=0;c.close()}});u=u&&f},cancel(){u&&u()}}))`;
function makeFactoryPlugin(tag, sentinel, source) {
	return createPlugin({
		tag,
		test(value) {
			return value === sentinel;
		},
		parse: { stream() {
			return {};
		} },
		serialize() {
			return source;
		},
		deserialize: void 0
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/seroval-plugins.ssr.js
/** Server-only plugins for streaming hydration data into HTML. */
var ssrSerovalPlugins = [
	ShallowErrorPlugin,
	/* @__PURE__ */ createPlugin({
		tag: "tss/RawStream",
		extends: [/* @__PURE__ */ makeFactoryPlugin("tss/RawStreamFactory", BINARY_FACTORY, FACTORY_BINARY), /* @__PURE__ */ makeFactoryPlugin("tss/RawStreamFactoryText", TEXT_FACTORY, FACTORY_TEXT)],
		test(value) {
			return value instanceof RawStream;
		},
		parse: { stream(value, ctx) {
			const text = value.hint === "text";
			const factory = ctx.parse(text ? TEXT_FACTORY : BINARY_FACTORY);
			const [stream, stop] = pumpEncodedStream(value.stream, text ? encodeText : toBase64Fast);
			ctx.addCleanup(stop);
			return {
				factory,
				stream: ctx.parse(stream)
			};
		} },
		serialize(node, ctx) {
			return "(" + ctx.serialize(node.factory) + ")(" + ctx.serialize(node.stream) + ")";
		},
		deserialize: void 0
	}),
	ReadableStreamPlugin
];
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/ssr-server.js
function dehydrateMatch(match) {
	const dehydratedMatch = {
		i: dehydrateSsrMatchId(match.id),
		u: match.updatedAt,
		s: match.status
	};
	for (const [key, shorthand] of [
		["__beforeLoadContext", "b"],
		["loaderData", "l"],
		["error", "e"],
		["ssr", "ssr"]
	]) if (match[key] !== void 0) dehydratedMatch[shorthand] = match[key];
	if (match._notFound) dehydratedMatch.g = true;
	return dehydratedMatch;
}
function disposeSerializationSafely(dispose) {
	try {
		dispose?.();
	} catch (err) {
		console.error("Error disposing SSR serialization:", err);
	}
}
function notifyAndClearListeners(listeners, errorMessage, arg) {
	const pending = listeners.slice();
	listeners.length = 0;
	for (const listener of pending) try {
		listener(arg);
	} catch (error) {
		console.error(errorMessage, error);
	}
}
var MANIFEST_CACHE_SIZE = 100;
var manifestCaches = /* @__PURE__ */ new WeakMap();
function getManifestCache(manifest) {
	const cache = manifestCaches.get(manifest);
	if (cache) return cache;
	const newCache = createSieveCache(MANIFEST_CACHE_SIZE);
	manifestCaches.set(manifest, newCache);
	return newCache;
}
function getInlineCssForPreparedRoutes(manifest, preparedRoutes) {
	const styles = manifest.inlineCss?.styles;
	const hrefs = preparedRoutes.inlineCssHrefs;
	if (!styles || !hrefs?.length) return;
	let css = "";
	for (const href of hrefs) css += styles[href];
	return css;
}
function getInlineCssAssetForPreparedRoutes(manifest, preparedRoutes) {
	const css = getInlineCssForPreparedRoutes(manifest, preparedRoutes);
	return css === void 0 ? void 0 : createInlineCssStyleAsset(css);
}
function getMatchedRoutesCacheKey(matches) {
	let cacheKey = "";
	for (let i = 0; i < matches.length; i++) cacheKey += (i === 0 ? "" : "\0") + matches[i].routeId;
	return cacheKey;
}
function getPreparedMatchedManifestRoutes(manifest, matches, cacheKey) {
	{
		const cached = getManifestCache(manifest).get(cacheKey);
		if (cached) return cached;
	}
	const preparedRoutes = prepareMatchedManifestRoutes(manifest, matches);
	getManifestCache(manifest).set(cacheKey, preparedRoutes);
	return preparedRoutes;
}
function prepareMatchedManifestRoutes(manifest, matches) {
	const inlineStyles = manifest.inlineCss?.styles;
	const routes = {};
	if (!inlineStyles) {
		for (const match of matches) {
			const route = manifest.routes[match.routeId];
			if (route) routes[match.routeId] = route;
		}
		return {
			routes,
			hasStrippedRoutes: false
		};
	}
	const inlineCssHrefs = [];
	const seenInlineCssHrefs = /* @__PURE__ */ new Set();
	let hasStrippedRoutes = false;
	for (const match of matches) {
		const routeId = match.routeId;
		const route = manifest.routes[routeId];
		if (!route) continue;
		const nextRoute = stripInlinedStylesheetAssetsFromRoute(inlineStyles, route, inlineCssHrefs, seenInlineCssHrefs);
		if (nextRoute !== route) hasStrippedRoutes = true;
		routes[routeId] = nextRoute;
	}
	return {
		routes,
		hasStrippedRoutes,
		...inlineCssHrefs.length ? { inlineCssHrefs } : {}
	};
}
function stripInlinedStylesheetAssetsFromRoute(inlineStyles, route, inlineCssHrefs, seenInlineCssHrefs) {
	const css = route.css;
	if (!css) return route;
	if (css.length === 0) {
		const nextRoute = { ...route };
		delete nextRoute.css;
		return nextRoute;
	}
	let cssLinks;
	for (let i = 0; i < css.length; i++) {
		const link = css[i];
		const href = getStylesheetHref(link);
		if (inlineStyles[href] === void 0) {
			if (cssLinks) cssLinks.push(link);
			continue;
		}
		if (!seenInlineCssHrefs.has(href)) {
			seenInlineCssHrefs.add(href);
			inlineCssHrefs.push(href);
		}
		if (!cssLinks) cssLinks = css.slice(0, i);
	}
	if (!cssLinks) return route;
	if (cssLinks.length > 0) return {
		...route,
		css: cssLinks
	};
	const nextRoute = { ...route };
	delete nextRoute.css;
	return nextRoute;
}
function hasRouteAssets(route) {
	return !!route.scripts?.length || !!route.css?.length;
}
function hasRequestAssets(assets) {
	return !!assets && (!!assets.preloads?.length || hasRouteAssets(assets));
}
function mergeRequestAssetsIntoRootRoute(rootRoute, requestAssets) {
	const preloads = requestAssets?.preloads?.length ? [...requestAssets.preloads, ...rootRoute?.preloads ?? []] : rootRoute?.preloads;
	const scripts = requestAssets?.scripts?.length ? [...requestAssets.scripts, ...rootRoute?.scripts ?? []] : rootRoute?.scripts;
	const cssLinks = requestAssets?.css?.length ? [...requestAssets.css, ...rootRoute?.css ?? []] : rootRoute?.css;
	return {
		...rootRoute ?? {},
		...preloads?.length ? { preloads } : {},
		...scripts?.length ? { scripts } : {},
		...cssLinks?.length ? { css: cssLinks } : {}
	};
}
/**
* Compose a client-facing manifest from prepared routes, an optional inline
* style, and optional request-scoped assets merged into the root route.
* Shared by the `router.ssr.manifest` getter and `dehydrate()` so the two
* compositions cannot drift.
*/
function composeManifest(scriptFormat, inlineStyle, routes, requestAssets) {
	const base = {
		...scriptFormat ? { scriptFormat } : {},
		...inlineStyle ? { inlineStyle } : {},
		routes
	};
	if (!hasRequestAssets(requestAssets)) return base;
	return {
		...base,
		routes: {
			...routes,
			[rootRouteId]: mergeRequestAssetsIntoRootRoute(routes[rootRouteId], requestAssets)
		}
	};
}
function attachRouterServerSsrUtils({ router, manifest, getRequestAssets }) {
	let memoizedPreparedManifest;
	router.ssr = { get manifest() {
		if (!manifest) return manifest;
		const requestAssets = getRequestAssets?.();
		const hasAssets = hasRequestAssets(requestAssets);
		if (!hasAssets && !manifest.inlineCss) return manifest;
		let inlineCssAsset;
		let routes = manifest.routes;
		if (manifest.inlineCss) {
			const matches = _getRenderedMatches(router.stores.matches.get());
			const cacheKey = getMatchedRoutesCacheKey(matches);
			if (memoizedPreparedManifest?.cacheKey === cacheKey) {
				inlineCssAsset = memoizedPreparedManifest.inlineCssAsset;
				routes = memoizedPreparedManifest.routes;
			} else {
				const preparedManifest = getPreparedMatchedManifestRoutes(manifest, matches, cacheKey);
				inlineCssAsset = getInlineCssAssetForPreparedRoutes(manifest, preparedManifest);
				if (preparedManifest.hasStrippedRoutes) routes = {
					...manifest.routes,
					...preparedManifest.routes
				};
				memoizedPreparedManifest = {
					cacheKey,
					inlineCssAsset,
					routes
				};
			}
		}
		return composeManifest(manifest.scriptFormat, inlineCssAsset, routes, hasAssets ? requestAssets : void 0);
	} };
	let dehydrationPhase = "idle";
	let renderFinished = false;
	const renderFinishedListeners = [];
	const cleanupListeners = [];
	let cleanupStarted = false;
	let settled = false;
	let disposeSerialization;
	const hydrationScripts = createHydrationScripts(router.options.ssr?.nonce);
	const serverSsr = {
		hydrationScripts,
		dehydrate: async (opts) => {
			if (dehydrationPhase !== "idle") invariant();
			opts?.signal?.throwIfAborted();
			dehydrationPhase = "started";
			let matchesToDehydrate = _getRenderedMatches(router.stores.matches.get());
			if (router.isShell()) matchesToDehydrate = matchesToDehydrate.slice(0, 1);
			const matches = matchesToDehydrate.map(dehydrateMatch);
			let manifestToDehydrate = void 0;
			if (manifest) {
				const cacheKey = getMatchedRoutesCacheKey(matchesToDehydrate);
				const preparedManifest = getPreparedMatchedManifestRoutes(manifest, matchesToDehydrate, cacheKey);
				manifestToDehydrate = composeManifest(manifest.scriptFormat, preparedManifest.inlineCssHrefs ? createInlineCssPlaceholderAsset() : void 0, preparedManifest.routes, opts?.requestAssets);
			}
			const dehydratedRouter = {
				manifest: manifestToDehydrate,
				matches
			};
			const dehydrate = router.options.dehydrate;
			const dehydratedData = dehydrate ? opts?.signal ? await waitForReason(dehydrate.call(router.options), opts.signal) : await dehydrate.call(router.options) : void 0;
			opts?.signal?.throwIfAborted();
			if (cleanupStarted) return;
			if (dehydratedData !== void 0) dehydratedRouter.dehydratedData = dehydratedData;
			const trackPlugins = { didRun: false };
			const serializationAdapters = router.options.serializationAdapters;
			const plugins = serializationAdapters ? [...serializationAdapters.map((adapter) => /* @__PURE__ */ makeSsrSerovalPlugin(adapter, trackPlugins)), ...ssrSerovalPlugins] : ssrSerovalPlugins;
			let serializationCompleteSignaled = false;
			let initialSerialized = false;
			const completeScriptSerialization = (result) => {
				if (serializationCompleteSignaled || cleanupStarted) return;
				serializationCompleteSignaled = true;
				const dispose = disposeSerialization;
				disposeSerialization = void 0;
				if (result === true) {
					settled = true;
					hydrationScripts.finish();
				} else if (result) hydrationScripts.fail(result.error);
				if (dispose) queueMicrotask(() => disposeSerializationSafely(dispose));
			};
			let synchronousFailure;
			const dispose = crossSerializeStream(dehydratedRouter, {
				refs: /* @__PURE__ */ new Map(),
				plugins,
				onSerialize: (data, initial) => {
					if (serializationCompleteSignaled || cleanupStarted) return;
					initialSerialized ||= initial;
					if (!hydrationScripts.pushSerializedSource(data, initial, trackPlugins.didRun)) completeScriptSerialization(false);
				},
				onError: (err) => {
					if (serializationCompleteSignaled || cleanupStarted) return;
					console.error("Serialization error:", err);
					synchronousFailure = { error: err };
					completeScriptSerialization({ error: err });
				},
				scopeId: "tsr",
				onDone: () => {
					if (initialSerialized) completeScriptSerialization(true);
				}
			});
			if (cleanupStarted || serializationCompleteSignaled) disposeSerializationSafely(dispose);
			else disposeSerialization = dispose;
			if (synchronousFailure) throw synchronousFailure.error;
		},
		onRenderFinished: (listener) => {
			if (cleanupStarted) return;
			if (renderFinished) {
				try {
					listener();
				} catch (error) {
					console.error("Error in render finished listener:", error);
				}
				return;
			}
			renderFinishedListeners.push(listener);
		},
		onCleanup: (listener) => {
			if (cleanupStarted) {
				try {
					listener(settled);
				} catch (error) {
					console.error("Error in SSR cleanup listener:", error);
				}
				return;
			}
			cleanupListeners.push(listener);
		},
		setRenderFinished: () => {
			if (cleanupStarted || renderFinished) return;
			renderFinished = true;
			hydrationScripts.liftBarrier();
			notifyAndClearListeners(renderFinishedListeners, "Error in render finished listener:", void 0);
		},
		disableHydration: () => {
			if (cleanupStarted || dehydrationPhase === "disabled") return;
			if (dehydrationPhase !== "idle") invariant();
			hydrationScripts.disableHydration();
			dehydrationPhase = "disabled";
		},
		takeInitialHydrationScriptTags: hydrationScripts.takeInitialHydrationScriptTags,
		cleanup() {
			if (cleanupStarted) return;
			cleanupStarted = true;
			hydrationScripts.cleanup();
			const dispose = disposeSerialization;
			disposeSerialization = void 0;
			disposeSerializationSafely(dispose);
			notifyAndClearListeners(cleanupListeners, "Error in SSR cleanup listener:", settled);
			renderFinishedListeners.length = 0;
			router.ssr = void 0;
			router.serverSsr = void 0;
		}
	};
	router.serverSsr = serverSsr;
	for (const listener of router.serverSsrLifecycle?.onServerSsrAttach ?? []) try {
		listener(serverSsr);
	} catch (err) {
		console.error("SSR attach listener error:", err);
	}
}
function getNormalizedURL(url, base) {
	if (typeof url === "string") url = url.replace("\\", "%5C");
	const rawUrl = new URL(url, base);
	const handledProtocolRelativeURL = rawUrl.pathname.startsWith("//");
	const decodedPathname = decodePath(handledProtocolRelativeURL ? rawUrl.pathname.replace(/^\/+/, "/") : rawUrl.pathname);
	const searchParams = new URLSearchParams(rawUrl.search);
	const normalizedHref = decodedPathname + (searchParams.size > 0 ? "?" : "") + searchParams.toString() + rawUrl.hash;
	return {
		url: new URL(normalizedHref, rawUrl.origin),
		handledProtocolRelativeURL
	};
}
//#endregion
//#region node_modules/cookie-es/dist/index.mjs
function splitSetCookieString(cookiesString) {
	if (Array.isArray(cookiesString)) return cookiesString.flatMap((c) => splitSetCookieString(c));
	if (typeof cookiesString !== "string") return [];
	const cookiesStrings = [];
	let pos = 0;
	let start;
	let ch;
	let lastComma;
	let nextStart;
	let cookiesSeparatorFound;
	const skipWhitespace = () => {
		while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) pos += 1;
		return pos < cookiesString.length;
	};
	const notSpecialChar = () => {
		ch = cookiesString.charAt(pos);
		return ch !== "=" && ch !== ";" && ch !== ",";
	};
	while (pos < cookiesString.length) {
		start = pos;
		cookiesSeparatorFound = false;
		while (skipWhitespace()) {
			ch = cookiesString.charAt(pos);
			if (ch === ",") {
				lastComma = pos;
				pos += 1;
				skipWhitespace();
				nextStart = pos;
				while (pos < cookiesString.length && notSpecialChar()) pos += 1;
				if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
					cookiesSeparatorFound = true;
					pos = nextStart;
					cookiesStrings.push(cookiesString.slice(start, lastComma));
					start = pos;
				} else pos = lastComma + 1;
			} else pos += 1;
		}
		if (!cookiesSeparatorFound || pos >= cookiesString.length) cookiesStrings.push(cookiesString.slice(start));
	}
	return cookiesStrings;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/headers.js
function toHeadersInstance(init) {
	if (init instanceof Headers) return init;
	else if (Array.isArray(init)) return new Headers(init);
	else if (typeof init === "object") return new Headers(init);
	else return null;
}
function mergeHeaders(...headers) {
	return headers.reduce((acc, header) => {
		const headersInstance = toHeadersInstance(header);
		if (!headersInstance) return acc;
		for (const [key, value] of headersInstance.entries()) if (key === "set-cookie") splitSetCookieString(value).forEach((cookie) => acc.append("set-cookie", cookie));
		else acc.set(key, value);
		return acc;
	}, new Headers());
}
//#endregion
//#region node_modules/rou3/dist/index.mjs
var NullProtoObj = /* @__PURE__ */ (() => {
	const e = function() {};
	return e.prototype = Object.create(null), Object.freeze(e.prototype), e;
})();
//#endregion
//#region node_modules/h3-v2/dist/h3-Bz4OPZv_.mjs
function decodePathname(pathname) {
	return decodeURI(pathname.includes("%25") ? pathname.replace(/%25/g, "%2525") : pathname);
}
var kEventNS = "h3.internal.event.";
var kEventRes = /* @__PURE__ */ Symbol.for(`${kEventNS}res`);
var kEventResHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.headers`);
var kEventResErrHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.err.headers`);
var H3Event = class {
	app;
	req;
	url;
	context;
	static __is_event__ = true;
	constructor(req, context, app) {
		this.context = context || req.context || new NullProtoObj();
		this.req = req;
		this.app = app;
		const _url = req._url;
		const url = _url && _url instanceof URL ? _url : new FastURL(req.url);
		if (url.pathname.includes("%")) url.pathname = decodePathname(url.pathname);
		this.url = url;
	}
	get res() {
		return this[kEventRes] ||= new H3EventResponse();
	}
	get runtime() {
		return this.req.runtime;
	}
	waitUntil(promise) {
		this.req.waitUntil?.(promise);
	}
	toString() {
		return `[${this.req.method}] ${this.req.url}`;
	}
	toJSON() {
		return this.toString();
	}
	get node() {
		return this.req.runtime?.node;
	}
	get headers() {
		return this.req.headers;
	}
	get path() {
		return this.url.pathname + this.url.search;
	}
	get method() {
		return this.req.method;
	}
};
var H3EventResponse = class {
	status;
	statusText;
	get headers() {
		return this[kEventResHeaders] ||= new Headers();
	}
	get errHeaders() {
		return this[kEventResErrHeaders] ||= new Headers();
	}
};
var DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
	return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
	if (!statusCode) return defaultStatusCode;
	if (typeof statusCode === "string") statusCode = +statusCode;
	if (statusCode < 100 || statusCode > 599) return defaultStatusCode;
	return statusCode;
}
var HTTPError = class HTTPError extends Error {
	get name() {
		return "HTTPError";
	}
	status;
	statusText;
	headers;
	cause;
	data;
	body;
	unhandled;
	static isError(input) {
		return input instanceof Error && input?.name === "HTTPError";
	}
	static status(status, statusText, details) {
		return new HTTPError({
			...details,
			statusText,
			status
		});
	}
	constructor(arg1, arg2) {
		let messageInput;
		let details;
		if (typeof arg1 === "string") {
			messageInput = arg1;
			details = arg2;
		} else details = arg1;
		const status = sanitizeStatusCode(details?.status || details?.statusCode || (details?.cause)?.status || (details?.cause)?.statusCode, 500);
		const statusText = sanitizeStatusMessage(details?.statusText || details?.statusMessage || (details?.cause)?.statusText || (details?.cause)?.statusMessage);
		const message = messageInput || details?.message || (details?.cause)?.message || details?.statusText || details?.statusMessage || [
			"HTTPError",
			status,
			statusText
		].filter(Boolean).join(" ");
		super(message, { cause: details });
		this.cause = details;
		this.status = status;
		this.statusText = statusText || void 0;
		const rawHeaders = details?.headers || (details?.cause)?.headers;
		this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
		this.unhandled = details?.unhandled ?? (details?.cause)?.unhandled ?? void 0;
		this.data = details?.data;
		this.body = details?.body;
	}
	get statusCode() {
		return this.status;
	}
	get statusMessage() {
		return this.statusText;
	}
	toJSON() {
		const unhandled = this.unhandled;
		return {
			status: this.status,
			statusText: this.statusText,
			unhandled,
			message: unhandled ? "HTTPError" : this.message,
			data: unhandled ? void 0 : this.data,
			...unhandled ? void 0 : this.body
		};
	}
};
function isJSONSerializable(value, _type) {
	if (value === null || value === void 0) return true;
	if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
	if (typeof value.toJSON === "function") return true;
	if (Array.isArray(value)) return true;
	if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
	if (value instanceof NullProtoObj) return true;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null;
}
var kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
var kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
function toResponse(val, event, config = {}) {
	if (typeof val?.then === "function") return (val.catch?.((error) => error) || Promise.resolve(val)).then((resolvedVal) => toResponse(resolvedVal, event, config));
	const response = prepareResponse(val, event, config);
	if (typeof response?.then === "function") return toResponse(response, event, config);
	const { onResponse } = config;
	return onResponse ? Promise.resolve(onResponse(response, event)).then(() => response) : response;
}
var HTTPResponse = class {
	#headers;
	#init;
	body;
	constructor(body, init) {
		this.body = body;
		this.#init = init;
	}
	get status() {
		return this.#init?.status || 200;
	}
	get statusText() {
		return this.#init?.statusText || "OK";
	}
	get headers() {
		return this.#headers ||= new Headers(this.#init?.headers);
	}
};
function prepareResponse(val, event, config, nested) {
	if (val === kHandled) return new NodeResponse(null);
	if (val === kNotFound) val = new HTTPError({
		status: 404,
		message: `Cannot find any route matching [${event.req.method}] ${event.url}`
	});
	if (val && val instanceof Error) {
		const isHTTPError = HTTPError.isError(val);
		const error = isHTTPError ? val : new HTTPError(val);
		if (!isHTTPError) {
			error.unhandled = true;
			if (val?.stack) error.stack = val.stack;
		}
		if (error.unhandled && !config.silent) console.error(error);
		const { onError } = config;
		const errHeaders = event[kEventRes]?.[kEventResErrHeaders];
		return onError && !nested ? Promise.resolve(onError(error, event)).catch((error) => error).then((newVal) => prepareResponse(newVal ?? val, event, config, true)) : errorResponse(error, config.debug, errHeaders);
	}
	const preparedRes = event[kEventRes];
	const preparedHeaders = preparedRes?.[kEventResHeaders];
	event[kEventRes] = void 0;
	if (!(val instanceof Response)) {
		const res = prepareResponseBody(val, event, config);
		const status = res.status || preparedRes?.status;
		return new NodeResponse(nullBody(event.req.method, status) ? null : res.body, {
			status,
			statusText: res.statusText || preparedRes?.statusText,
			headers: res.headers && preparedHeaders ? mergeHeaders$1(res.headers, preparedHeaders) : res.headers || preparedHeaders
		});
	}
	if (!preparedHeaders || nested || !val.ok) return val;
	try {
		mergeHeaders$1(val.headers, preparedHeaders, val.headers);
		return val;
	} catch {
		return new NodeResponse(nullBody(event.req.method, val.status) ? null : val.body, {
			status: val.status,
			statusText: val.statusText,
			headers: mergeHeaders$1(val.headers, preparedHeaders)
		});
	}
}
function mergeHeaders$1(base, overrides, target = new Headers(base)) {
	for (const [name, value] of overrides) if (name === "set-cookie") target.append(name, value);
	else target.set(name, value);
	return target;
}
var frozen = (name) => (...args) => {
	throw new Error(`Headers are frozen (${name} ${args.join(", ")})`);
};
var FrozenHeaders = class extends Headers {
	set = frozen("set");
	append = frozen("append");
	delete = frozen("delete");
};
var emptyHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-length": "0" });
var jsonHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-type": "application/json;charset=UTF-8" });
function prepareResponseBody(val, event, config) {
	if (val === null || val === void 0) return {
		body: "",
		headers: emptyHeaders
	};
	const valType = typeof val;
	if (valType === "string") return { body: val };
	if (val instanceof Uint8Array) {
		event.res.headers.set("content-length", val.byteLength.toString());
		return { body: val };
	}
	if (val instanceof HTTPResponse || val?.constructor?.name === "HTTPResponse") return val;
	if (isJSONSerializable(val, valType)) return {
		body: JSON.stringify(val, void 0, config.debug ? 2 : void 0),
		headers: jsonHeaders
	};
	if (valType === "bigint") return {
		body: val.toString(),
		headers: jsonHeaders
	};
	if (val instanceof Blob) {
		const headers = new Headers({
			"content-type": val.type,
			"content-length": val.size.toString()
		});
		let filename = val.name;
		if (filename) {
			filename = encodeURIComponent(filename);
			headers.set("content-disposition", `filename="${filename}"; filename*=UTF-8''${filename}`);
		}
		return {
			body: val.stream(),
			headers
		};
	}
	if (valType === "symbol") return { body: val.toString() };
	if (valType === "function") return { body: `${val.name}()` };
	return { body: val };
}
function nullBody(method, status) {
	return method === "HEAD" || status === 100 || status === 101 || status === 102 || status === 204 || status === 205 || status === 304;
}
function errorResponse(error, debug, errHeaders) {
	let headers = error.headers ? mergeHeaders$1(jsonHeaders, error.headers) : new Headers(jsonHeaders);
	if (errHeaders) headers = mergeHeaders$1(headers, errHeaders);
	return new NodeResponse(JSON.stringify({
		...error.toJSON(),
		stack: debug && error.stack ? error.stack.split("\n").map((l) => l.trim()) : void 0
	}, void 0, debug ? 2 : void 0), {
		status: error.status,
		statusText: error.statusText,
		headers
	});
}
require_react();
var import_jsx_runtime = require_jsx_runtime();
function StartServer(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterProvider, { router: props.router });
}
//#endregion
//#region node_modules/@tanstack/react-start-server/dist/esm/defaultStreamHandler.js
var defaultStreamHandler = defineHandlerCallback(({ request, router, responseHeaders }) => renderRouterToStream({
	request,
	router,
	responseHeaders,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartServer, { router })
}));
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/request-response.js
var GLOBAL_EVENT_STORAGE_KEY = Symbol.for("tanstack-start:event-storage");
var globalObj$1 = globalThis;
if (!globalObj$1[GLOBAL_EVENT_STORAGE_KEY]) globalObj$1[GLOBAL_EVENT_STORAGE_KEY] = new AsyncLocalStorage();
var eventStorage = globalObj$1[GLOBAL_EVENT_STORAGE_KEY];
function isPromiseLike(value) {
	return (typeof value === "object" || typeof value === "function") && value !== null && typeof value.then === "function";
}
function getSetCookieValues(headers) {
	const headersWithSetCookie = headers;
	if (typeof headersWithSetCookie.getSetCookie === "function") return headersWithSetCookie.getSetCookie();
	const value = headers.get("set-cookie");
	return value ? [value] : [];
}
function mergeEventResponseHeaders(response, event) {
	if (response.ok) return;
	const eventSetCookies = getSetCookieValues(event.res.headers);
	if (eventSetCookies.length === 0) return;
	const responseSetCookies = getSetCookieValues(response.headers);
	response.headers.delete("set-cookie");
	for (const cookie of responseSetCookies) response.headers.append("set-cookie", cookie);
	for (const cookie of eventSetCookies) response.headers.append("set-cookie", cookie);
}
function finalizeResponse(value, event) {
	const response = ensureResponse(value);
	mergeEventResponseHeaders(response, event);
	return response;
}
function finalizeMaybeResponse(value, event) {
	if (isPromiseLike(value)) return Promise.resolve(value).then((resolved) => finalizeResponse(resolved, event), (error) => finalizeResponse(handleResponseError(error), event));
	return finalizeResponse(value, event);
}
function ensureResponse(value) {
	if (value instanceof Response) return value;
	return new Response("Internal Server Error", { status: 500 });
}
function handleResponseError(error) {
	if (error instanceof Response) return error;
	if (error instanceof Error) throw error;
	return new Response("Internal Server Error", { status: 500 });
}
function requestHandler(handler) {
	return (request, requestOpts) => {
		let h3Event;
		try {
			h3Event = new H3Event(request);
		} catch (error) {
			if (error instanceof URIError) return new Response(null, {
				status: 400,
				statusText: "Bad Request"
			});
			throw error;
		}
		let response;
		try {
			response = eventStorage.run({ h3Event }, () => handler(request, requestOpts));
		} catch (error) {
			response = handleResponseError(error);
		}
		return toResponse(finalizeMaybeResponse(response, h3Event), h3Event);
	};
}
function getH3Event() {
	const event = eventStorage.getStore();
	if (!event) throw new Error(`No StartEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return event.h3Event;
}
function getResponse() {
	return getH3Event().res;
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/constants.js
var HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/router-manifest.js
/**
* @description Returns the router manifest data that should be sent to the client.
* This includes only the assets and preloads for the current route and any
* special assets that are needed for the client. It does not include relationships
* between routes or any other data that is not needed for the client.
*
* @param matchedRoutes - In dev mode, the matched routes are used to build
* the dev styles URL for route-scoped CSS collection.
*/
async function getStartManifest(matchedRoutes) {
	const { tsrStartManifest } = await import("../../_tanstack-start-manifest_v.mjs");
	const startManifest = tsrStartManifest();
	let routes = startManifest.routes;
	routes[rootRouteId];
	const manifestRoutes = {};
	for (const k in routes) {
		const v = routes[k];
		const result = {};
		if (v.preloads && v.preloads.length > 0) result.preloads = v.preloads;
		if (v.scripts && v.scripts.length > 0) result.scripts = v.scripts;
		if (v.css?.length) result.css = v.css;
		if (result.preloads || result.scripts || result.css) manifestRoutes[k] = result;
	}
	return {
		...startManifest.scriptFormat ? { scriptFormat: startManifest.scriptFormat } : {},
		...startManifest.inlineCss ? { inlineCss: startManifest.inlineCss } : {},
		routes: manifestRoutes
	};
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/fake-start-server-fn-resolver.js
async function getServerFnById(_id, _access) {}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/constants.js
var TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
var TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
var X_TSS_SERIALIZED = "x-tss-serialized";
var X_TSS_RAW_RESPONSE = "x-tss-raw";
/** Content-Type for multiplexed framed responses (RawStream support) */
var TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
/** Largest payload accepted by one framed-protocol record. */
var MAX_FRAME_PAYLOAD_SIZE = 16777216;
/** Largest number of raw streams accepted in one framed response. */
var MAX_FRAMED_STREAMS = 1024;
/** Full Content-Type header value with version parameter */
var TSS_CONTENT_TYPE_FRAMED_VERSIONED = `${TSS_CONTENT_TYPE_FRAMED}; v=1`;
//#endregion
//#region node_modules/@tanstack/start-fn-stubs/dist/esm/createIsomorphicFn.js
function createIsomorphicFn() {
	return createRuntimeFn(() => void 0);
}
function createRuntimeFn(fn, serverImpl) {
	return Object.assign(fn, {
		server: (nextServerImpl) => {
			return createRuntimeFn(nextServerImpl, nextServerImpl);
		},
		client: (clientImpl) => {
			return createRuntimeFn(serverImpl ?? clientImpl, serverImpl);
		}
	});
}
//#endregion
//#region node_modules/@tanstack/start-storage-context/dist/esm/async-local-storage.js
var GLOBAL_STORAGE_KEY = Symbol.for("tanstack-start:start-storage-context");
var globalObj = globalThis;
if (!globalObj[GLOBAL_STORAGE_KEY]) globalObj[GLOBAL_STORAGE_KEY] = new AsyncLocalStorage();
var startStorage = globalObj[GLOBAL_STORAGE_KEY];
async function runWithStartContext(context, fn) {
	return startStorage.run(context, fn);
}
function getStartContext(opts) {
	const context = startStorage.getStore();
	if (!context && opts?.throwIfNotFound !== false) throw new Error(`No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return context;
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/getStartOptions.js
var getStartOptions = createIsomorphicFn().client(() => window.__TSS_START_OPTIONS__).server(() => getStartContext().startOptions);
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/getDefaultSerovalPlugins.js
/** Start's serialization adapters followed by `routerPlugins`. */
function getSerovalPlugins(routerPlugins) {
	return [...(getStartOptions()?.serializationAdapters)?.map(makeSerovalPlugin) ?? [], ...routerPlugins];
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/frame-protocol.js
/**
* Binary frame protocol for multiplexing JSON and raw streams over HTTP.
*
* Frame format: [type:1][streamId:4][length:4][payload:length]
* - type: 1 byte - frame type (JSON, CHUNK, END, ERROR)
* - streamId: 4 bytes big-endian uint32 - stream identifier
* - length: 4 bytes big-endian uint32 - payload length
* - payload: variable length bytes
*/
/** Cached TextEncoder for frame encoding */
var textEncoder$1 = new TextEncoder();
/** Shared empty payload for END frames - avoids allocation per call */
var EMPTY_PAYLOAD = /* @__PURE__ */ new Uint8Array(0);
var MAX_ERROR_MESSAGE_CODE_UNITS = 4096;
/**
* Encodes a single frame with header and payload.
*/
function encodeFrame(type, streamId, payload) {
	if (payload.byteLength > 16777216) throw new RangeError(`Frame payload exceeds ${MAX_FRAME_PAYLOAD_SIZE} bytes`);
	const frame = new Uint8Array(9 + payload.length);
	frame[0] = type;
	frame[1] = streamId >>> 24 & 255;
	frame[2] = streamId >>> 16 & 255;
	frame[3] = streamId >>> 8 & 255;
	frame[4] = streamId & 255;
	frame[5] = payload.length >>> 24 & 255;
	frame[6] = payload.length >>> 16 & 255;
	frame[7] = payload.length >>> 8 & 255;
	frame[8] = payload.length & 255;
	frame.set(payload, 9);
	return frame;
}
/** Encodes an error message payload, truncated to a bounded length. */
function encodeErrorPayload(error) {
	const originalMessage = error instanceof Error ? error.message : String(error ?? "Unknown error");
	const message = originalMessage.length > MAX_ERROR_MESSAGE_CODE_UNITS ? `${originalMessage.slice(0, MAX_ERROR_MESSAGE_CODE_UNITS)}…` : originalMessage;
	return textEncoder$1.encode(message);
}
/**
* Creates a multiplexed ReadableStream from serialized response records.
*
* A record's JSON frame is admitted before any raw stream referenced by that
* record starts. Raw streams from admitted records are pumped concurrently.
* The caller bounds the stream count before records reach this function.
*/
function createMultiplexedStream(recordStream, options = {}) {
	let controller;
	let stopped = false;
	let activePumps = 0;
	let wakeDemand;
	let admission;
	const readers = /* @__PURE__ */ new Set();
	const pendingRawStreams = /* @__PURE__ */ new Set();
	const abortOutput = () => errorOutput(options.signal?.reason);
	const wakeAdmission = () => {
		const wake = wakeDemand;
		wakeDemand = void 0;
		wake?.();
	};
	const cancelReader = (reader, reason) => {
		reader.cancel(reason).catch(() => {});
	};
	const cancelStream = (stream, reason) => {
		stream.cancel(reason).catch(() => {});
	};
	const stop = (reason) => {
		if (stopped) return false;
		stopped = [reason];
		options.signal?.removeEventListener("abort", abortOutput);
		wakeAdmission();
		for (const reader of readers) cancelReader(reader, reason);
		for (const stream of pendingRawStreams) cancelStream(stream, reason);
		pendingRawStreams.clear();
		return true;
	};
	const errorOutput = (error) => {
		if (!stop(error)) return;
		try {
			controller.error(error);
		} catch {}
	};
	const waitForDemand = async () => {
		while (!stopped && (controller.desiredSize ?? 0) <= 0) await new Promise((resolve) => {
			wakeDemand = resolve;
		});
		return !stopped;
	};
	const admitFrame = (type, streamId, payload) => {
		if (stopped) return false;
		if (!admission && (controller.desiredSize ?? 0) > 0) {
			controller.enqueue(encodeFrame(type, streamId, payload));
			return true;
		}
		const runAdmission = async () => {
			if (!await waitForDemand()) return false;
			controller.enqueue(encodeFrame(type, streamId, payload));
			return true;
		};
		const result = admission ? admission.then(runAdmission) : runAdmission();
		const clearAdmission = () => {
			if (admission === tail) admission = void 0;
		};
		const tail = result.then(clearAdmission, clearAdmission);
		admission = tail;
		return result;
	};
	const maybeClose = () => {
		if (activePumps !== 0 || !stop()) return;
		try {
			controller.close();
		} catch {}
	};
	const startPump = (pump) => {
		activePumps++;
		pump().then(() => {
			activePumps--;
			maybeClose();
		}, (error) => {
			activePumps--;
			errorOutput(error);
		});
	};
	async function pumpRawStream(streamId, stream) {
		const reader = stream.getReader();
		readers.add(reader);
		try {
			while (!stopped) {
				const { done, value } = await reader.read();
				if (stopped) return;
				if (done) {
					const frameAdmission = admitFrame(2, streamId, EMPTY_PAYLOAD);
					if (frameAdmission !== true) await frameAdmission;
					return;
				}
				if (!(value instanceof Uint8Array)) throw new TypeError("RawStream chunks must be Uint8Array");
				let offset = 0;
				do {
					const frameAdmission = admitFrame(1, streamId, value.byteLength <= 16777216 ? value : value.subarray(offset, offset + MAX_FRAME_PAYLOAD_SIZE));
					if (frameAdmission !== true && (frameAdmission === false || !await frameAdmission)) return;
					offset += MAX_FRAME_PAYLOAD_SIZE;
				} while (offset < value.byteLength);
			}
		} catch (error) {
			if (!stopped) {
				const frameAdmission = admitFrame(3, streamId, encodeErrorPayload(error));
				if (frameAdmission !== true) await frameAdmission;
			}
		} finally {
			readers.delete(reader);
			reader.releaseLock();
		}
	}
	async function pumpRecords() {
		const reader = recordStream.getReader();
		readers.add(reader);
		try {
			while (!stopped) {
				const { done, value } = await reader.read();
				if (stopped) {
					if (!done) for (const registration of value.rawStreams) cancelStream(registration.stream, stopped[0]);
					return;
				}
				if (done) return;
				for (const registration of value.rawStreams) pendingRawStreams.add(registration.stream);
				const frameAdmission = admitFrame(0, 0, value.json);
				if (frameAdmission !== true && (frameAdmission === false || !await frameAdmission)) return;
				for (const registration of value.rawStreams) {
					pendingRawStreams.delete(registration.stream);
					startPump(pumpRawStream.bind(void 0, registration.id, registration.stream));
				}
			}
		} catch (error) {
			if (!stopped) errorOutput(error);
		} finally {
			readers.delete(reader);
			reader.releaseLock();
		}
	}
	return new ReadableStream({
		start(ctrl) {
			controller = ctrl;
			if (options.signal?.aborted) {
				cancelStream(recordStream, options.signal.reason);
				errorOutput(options.signal.reason);
				return;
			}
			options.signal?.addEventListener("abort", abortOutput, { once: true });
			startPump(pumpRecords);
		},
		pull() {
			wakeAdmission();
		},
		cancel(reason) {
			if (stop(reason)) options.onCancel?.(reason);
		}
	});
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/safeObjectMerge.js
function isSafeKey(key) {
	return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
/**
* Merge target and source into a new null-proto object, filtering dangerous keys.
*/
function safeObjectMerge(target, source) {
	const result = Object.create(null);
	if (target) {
		for (const key of Object.keys(target)) if (isSafeKey(key)) result[key] = target[key];
	}
	if (source && typeof source === "object") {
		for (const key of Object.keys(source)) if (isSafeKey(key)) result[key] = source[key];
	}
	return result;
}
/**
* Create a null-prototype object, optionally copying from source.
*/
function createNullProtoObject(source) {
	if (!source) return Object.create(null);
	const obj = Object.create(null);
	for (const key of Object.keys(source)) if (isSafeKey(key)) obj[key] = source[key];
	return obj;
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/createServerFn.js
function flattenMiddlewares(middlewares, maxDepth = 100) {
	const seen = /* @__PURE__ */ new Set();
	const flattened = [];
	const recurse = (middleware, depth) => {
		if (depth > maxDepth) throw new Error(`Middleware nesting depth exceeded maximum of ${maxDepth}. Check for circular references.`);
		middleware.forEach((m) => {
			if (m.options.middleware) recurse(m.options.middleware, depth + 1);
			if (!seen.has(m)) {
				seen.add(m);
				flattened.push(m);
			}
		});
	};
	recurse(middlewares, 0);
	return flattened;
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/createMiddleware.js
var createMiddleware = (options, __opts) => {
	const resolvedOptions = {
		type: "request",
		...__opts || options
	};
	const setValidator = (validator) => {
		return createMiddleware({}, Object.assign(resolvedOptions, {
			validator,
			inputValidator: validator
		}));
	};
	return {
		options: resolvedOptions,
		middleware: (middleware) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
		},
		validator: setValidator,
		inputValidator: setValidator,
		client: (client) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { client }));
		},
		server: (server) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { server }));
		}
	};
};
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/createCsrfMiddleware.js
var innerCreateCsrfMiddleware = (opts = {}) => {
	return createMiddleware().server(async (ctx) => {
		const csrfCtx = ctx;
		if (opts.filter && !await opts.filter(csrfCtx)) return ctx.next();
		if (await isCsrfRequestAllowed(opts, csrfCtx)) return ctx.next();
		return getFailureResponse(opts, csrfCtx);
	});
};
var createCsrfMiddleware = createIsomorphicFn().server(innerCreateCsrfMiddleware);
async function isCsrfRequestAllowed(opts, ctx) {
	const result = await getCsrfRequestValidationResult(opts, ctx);
	return result === true || result === void 0 && opts.allowRequestsWithoutOriginCheck === true;
}
async function getCsrfRequestValidationResult(opts, ctx) {
	const fetchSite = ctx.request.headers.get("Sec-Fetch-Site");
	if (fetchSite !== null) return matchValue(opts.secFetchSite ?? "same-origin", fetchSite, ctx);
	const origin = ctx.request.headers.get("Origin");
	if (origin !== null) {
		if (opts.origin) return matchValue(opts.origin, origin, ctx);
		return origin === new URL(ctx.request.url).origin;
	}
	const referer = ctx.request.headers.get("Referer");
	if (referer === null || opts.referer === false) return;
	if (typeof opts.referer === "function") return opts.referer(referer, ctx);
	if (opts.origin) {
		const refererOrigin = getOriginFromUrl(referer);
		return refererOrigin !== void 0 && matchValue(opts.origin, refererOrigin, ctx);
	}
	return isRefererSameOrigin(referer, new URL(ctx.request.url).origin);
}
async function matchValue(matcher, value, ctx) {
	if (typeof matcher === "function") return matcher(value, ctx);
	if (Array.isArray(matcher)) return matcher.includes(value);
	return value === matcher;
}
function getOriginFromUrl(url) {
	try {
		return new URL(url).origin;
	} catch {
		return;
	}
}
function isRefererSameOrigin(referer, requestOrigin) {
	if (referer === requestOrigin) return true;
	if (!referer.startsWith(requestOrigin)) return false;
	if (referer.length === requestOrigin.length) return true;
	const code = referer.charCodeAt(requestOrigin.length);
	return code === 47 || code === 63 || code === 35;
}
async function getFailureResponse(opts, ctx) {
	if (typeof opts.failureResponse === "function") return opts.failureResponse(ctx);
	return opts.failureResponse?.clone() ?? new Response("Forbidden", { status: 403 });
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/server-functions-handler.js
var serovalPlugins = void 0;
var FORM_DATA_CONTENT_TYPES = ["multipart/form-data", "application/x-www-form-urlencoded"];
var MAX_PAYLOAD_SIZE = 1e6;
var MAX_PENDING_SERIALIZATION_RECORDS = 1024;
var MAX_PENDING_SERIALIZATION_BYTES = 33554432;
var textEncoder = new TextEncoder();
function encodeSerializationRecord(value) {
	return textEncoder.encode(JSON.stringify(value));
}
function exceedsPendingSerializationLimit(record, recordCount, pendingBytes) {
	return recordCount >= MAX_PENDING_SERIALIZATION_RECORDS || pendingBytes + record.byteLength > MAX_PENDING_SERIALIZATION_BYTES;
}
function runSerializationCleanup(dispose) {
	try {
		dispose();
	} catch {}
}
function cancelRawStream(stream, reason) {
	stream.cancel(reason).catch(() => {});
}
var handleServerAction = async ({ request, context, serverFnId }) => {
	const methodUpper = request.method.toUpperCase();
	const url = new URL(request.url);
	const action = await getServerFnById(serverFnId, { origin: "client" });
	if (action.method && methodUpper !== action.method) return new Response(`expected ${action.method} method. Got ${methodUpper}`, {
		status: 405,
		headers: { Allow: action.method }
	});
	const isServerFn = request.headers.get("x-tsr-serverFn") === "true";
	serovalPlugins ??= getSerovalPlugins(defaultSerovalDeserializerPlugins);
	const contentType = request.headers.get("Content-Type");
	try {
		let res;
		if (FORM_DATA_CONTENT_TYPES.some((type) => contentType && contentType.includes(type))) {
			if (methodUpper === "GET") invariant();
			const formData = await request.formData();
			const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
			formData.delete(TSS_FORMDATA_CONTEXT);
			const params = {
				context,
				data: formData,
				method: methodUpper
			};
			if (typeof serializedContext === "string") try {
				const deserializedContext = fromJSON(JSON.parse(serializedContext), { plugins: serovalPlugins });
				if (typeof deserializedContext === "object" && deserializedContext) params.context = safeObjectMerge(deserializedContext, context);
			} catch (e) {}
			res = await action(params);
		} else if (methodUpper === "GET") {
			const payloadParam = url.searchParams.get("payload");
			if (payloadParam && payloadParam.length > MAX_PAYLOAD_SIZE) throw new Error("Payload too large");
			const payload = payloadParam ? fromJSON(JSON.parse(payloadParam), { plugins: serovalPlugins }) : void 0;
			res = await action({
				data: payload?.data,
				context: safeObjectMerge(payload?.context, context),
				method: methodUpper
			});
		} else {
			const payload = contentType?.includes("application/json") ? fromJSON(await request.json(), { plugins: serovalPlugins }) : void 0;
			res = await action({
				data: payload?.data,
				context: safeObjectMerge(payload?.context, context),
				method: methodUpper
			});
		}
		const unwrapped = res.error !== void 0 ? res.error : res.result;
		if (isNotFound(res)) res = isNotFoundResponse(res);
		if (!isServerFn && (unwrapped instanceof Response || unwrapped === null || typeof unwrapped !== "object")) return unwrapped;
		if (unwrapped instanceof Response) {
			if (isRedirect(unwrapped)) return unwrapped;
			unwrapped.headers.set(X_TSS_RAW_RESPONSE, "true");
			return unwrapped;
		}
		return serializeResult(res, request.signal, serovalPlugins);
	} catch (error) {
		if (error instanceof Response) return error;
		if (isNotFound(error)) return isNotFoundResponse(error);
		console.error("Server Fn Error!", error);
		const serializedError = JSON.stringify(await toCrossJSONAsync(error, {
			refs: /* @__PURE__ */ new Map(),
			plugins: serovalPlugins
		}));
		const response = getResponse();
		const headers = {
			"Content-Type": "application/json",
			[X_TSS_SERIALIZED]: "true"
		};
		try {
			return new Response(serializedError, {
				status: response.status ?? 500,
				statusText: response.statusText,
				headers
			});
		} catch {
			return new Response(serializedError, {
				status: 500,
				statusText: "",
				headers
			});
		}
	}
};
/**
* Serializes a server-function result. A result that Seroval completes
* synchronously without RawStreams becomes plain JSON; everything else is a
* framed response whose records and raw streams are multiplexed in order.
*/
function serializeResult(res, signal, plugins) {
	const alsResponse = getResponse();
	const initialRecords = [];
	let initialBytes = 0;
	const pendingRawStreams = [];
	let done = false;
	let initialParsed = false;
	let serializationFailure;
	let disposeSerialization;
	let onParse = (value, initial) => {
		if (serializationFailure) return;
		initialParsed ||= initial;
		const record = encodeSerializationRecord(value);
		if (exceedsPendingSerializationLimit(record, initialRecords.length, initialBytes)) {
			serializationFailure = [/* @__PURE__ */ new Error("Server function serialization exceeded its pending output limit")];
			return;
		}
		initialRecords.push(record);
		initialBytes += record.byteLength;
	};
	let onDone = () => {
		if (initialParsed) done = true;
	};
	let onError = (error) => {
		serializationFailure ??= [error];
	};
	const dispose = toCrossJSONStream(res, {
		refs: /* @__PURE__ */ new Map(),
		plugins: [/* @__PURE__ */ createRawStreamRPCPlugin((id, stream) => {
			if (serializationFailure) {
				cancelRawStream(stream, serializationFailure[0]);
				return;
			}
			if (id > 1024) {
				const error = /* @__PURE__ */ new Error(`Too many raw streams in framed response (max ${MAX_FRAMED_STREAMS})`);
				cancelRawStream(stream, error);
				onError(error);
				return;
			}
			pendingRawStreams.push({
				id,
				stream
			});
		}), ...plugins],
		onParse(value, initial) {
			onParse(value, initial);
		},
		onDone() {
			onDone();
		},
		onError: (error) => {
			onError(error);
		}
	});
	if (serializationFailure) {
		runSerializationCleanup(dispose);
		for (const registration of pendingRawStreams) cancelRawStream(registration.stream, serializationFailure[0]);
		throw serializationFailure[0];
	}
	if (!done) disposeSerialization = dispose;
	if (done && pendingRawStreams.length === 0 && initialRecords.length === 1) return new Response(initialRecords[0], {
		status: alsResponse.status,
		statusText: alsResponse.statusText,
		headers: {
			"Content-Type": "application/json",
			[X_TSS_SERIALIZED]: "true"
		}
	});
	if (done && initialRecords.length === 1) {
		const json = initialRecords[0];
		if (json.byteLength > 16777216) {
			const error = /* @__PURE__ */ new Error("Server function serialization exceeded its pending output limit");
			for (const registration of pendingRawStreams) cancelRawStream(registration.stream, error);
			throw error;
		}
		const rawStreams = pendingRawStreams.splice(0);
		initialRecords.length = 0;
		return createFramedResponse(new ReadableStream({
			start(controller) {
				controller.enqueue({
					json,
					rawStreams
				});
				controller.close();
			},
			cancel(reason) {
				for (const registration of rawStreams) cancelRawStream(registration.stream, reason);
			}
		}), { signal });
	}
	const { readable, writable } = new TransformStream();
	const writer = writable.getWriter();
	const recordAbortController = new AbortController();
	let pendingBytes = 0;
	const pendingRecords = /* @__PURE__ */ new Set();
	const abortRecordStream = (error) => {
		if (serializationFailure) return;
		serializationFailure = [error];
		const disposeCurrentSerialization = disposeSerialization;
		disposeSerialization = void 0;
		for (const registration of pendingRawStreams.splice(0)) cancelRawStream(registration.stream, error);
		for (const record of pendingRecords) for (const registration of record.rawStreams) cancelRawStream(registration.stream, error);
		pendingRecords.clear();
		recordAbortController.abort(error);
		writer.abort(error).catch(() => {});
		if (disposeCurrentSerialization) runSerializationCleanup(disposeCurrentSerialization);
	};
	const writeRecord = (json, rawStreams) => {
		if (serializationFailure) {
			for (const registration of rawStreams) cancelRawStream(registration.stream, serializationFailure[0]);
			return false;
		}
		if (json.byteLength > 16777216 || exceedsPendingSerializationLimit(json, pendingRecords.size, pendingBytes)) {
			const error = /* @__PURE__ */ new Error("Server function serialization exceeded its pending output limit");
			for (const registration of rawStreams) cancelRawStream(registration.stream, error);
			onError(error);
			return false;
		}
		pendingBytes += json.byteLength;
		const record = {
			json,
			rawStreams
		};
		pendingRecords.add(record);
		writer.write(record).then(() => {
			pendingRecords.delete(record);
			pendingBytes -= json.byteLength;
		}, (error) => {
			const stillOwned = pendingRecords.delete(record);
			pendingBytes -= json.byteLength;
			if (stillOwned) for (const registration of rawStreams) cancelRawStream(registration.stream, error);
		});
		return true;
	};
	onParse = (value) => {
		if (serializationFailure) return;
		writeRecord(encodeSerializationRecord(value), pendingRawStreams.splice(0));
	};
	onDone = () => {
		if (serializationFailure) return;
		disposeSerialization = void 0;
		writer.close().catch(() => {});
	};
	onError = (error) => {
		abortRecordStream(error);
	};
	const initialRawStreams = pendingRawStreams.splice(0);
	for (let index = 0; index < initialRecords.length; index++) {
		const isLast = index === initialRecords.length - 1;
		if (!writeRecord(initialRecords[index], isLast ? initialRawStreams : [])) {
			if (!isLast) for (const registration of initialRawStreams) cancelRawStream(registration.stream, serializationFailure[0]);
			initialRecords.length = 0;
			throw serializationFailure[0];
		}
	}
	initialRecords.length = 0;
	if (done) onDone();
	writer.closed.catch((error) => {
		abortRecordStream(error);
	});
	return createFramedResponse(readable, {
		signal: AbortSignal.any([recordAbortController.signal, signal]),
		onCancel: abortRecordStream
	});
	function createFramedResponse(records, options) {
		const multiplexedStream = createMultiplexedStream(records, options);
		try {
			return new Response(multiplexedStream, {
				status: alsResponse.status,
				statusText: alsResponse.statusText,
				headers: {
					"Content-Type": TSS_CONTENT_TYPE_FRAMED_VERSIONED,
					[X_TSS_SERIALIZED]: "true"
				}
			});
		} catch (error) {
			cancelRawStream(multiplexedStream, error);
			throw error;
		}
	}
}
function isNotFoundResponse(error) {
	const { headers, ...rest } = error;
	const response = new Response(JSON.stringify(rest), {
		status: 404,
		headers
	});
	response.headers.set("Content-Type", "application/json");
	return response;
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/early-hints.js
var LINK_PARAM_TOKEN_RE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
var PRELOAD_AS_VALUES = /* @__PURE__ */ new Set([
	"fetch",
	"font",
	"image",
	"script",
	"style",
	"track"
]);
function buildLinkParam(name, value) {
	if (value === void 0) return name;
	if (LINK_PARAM_TOKEN_RE.test(value)) return `${name}=${value}`;
	return `${name}=${JSON.stringify(value)}`;
}
function serializeEarlyHint(hint) {
	const parts = [`<${hint.href}>`, buildLinkParam("rel", hint.rel)];
	if (hint.as) parts.push(buildLinkParam("as", hint.as));
	if (hint.crossOrigin !== void 0) parts.push(buildLinkParam("crossorigin", hint.crossOrigin || void 0));
	if (hint.type) parts.push(buildLinkParam("type", hint.type));
	if (hint.integrity) parts.push(buildLinkParam("integrity", hint.integrity));
	if (hint.referrerPolicy) parts.push(buildLinkParam("referrerpolicy", hint.referrerPolicy));
	if (hint.fetchPriority) parts.push(buildLinkParam("fetchpriority", hint.fetchPriority));
	return parts.join("; ");
}
function getStringAttr(attrs, name, fallbackName) {
	const value = attrs?.[name] ?? (fallbackName ? attrs?.[fallbackName] : void 0);
	return typeof value === "string" ? value : void 0;
}
function getPreloadAs(attrs) {
	const as = getStringAttr(attrs, "as");
	return as && PRELOAD_AS_VALUES.has(as) ? as : void 0;
}
function addEarlyHintFetchAttrs(hint, attrs) {
	const crossOrigin = getStringAttr(attrs, "crossOrigin", "crossorigin");
	const type = getStringAttr(attrs, "type");
	const integrity = getStringAttr(attrs, "integrity");
	const referrerPolicy = getStringAttr(attrs, "referrerPolicy", "referrerpolicy");
	const fetchPriority = getStringAttr(attrs, "fetchPriority", "fetchpriority");
	if (crossOrigin !== void 0) hint.crossOrigin = crossOrigin;
	if (type) hint.type = type;
	if (integrity) hint.integrity = integrity;
	if (referrerPolicy) hint.referrerPolicy = referrerPolicy;
	if (fetchPriority) hint.fetchPriority = fetchPriority;
}
function linkAttrsToEarlyHint(attrs) {
	const href = getStringAttr(attrs, "href");
	const rel = getStringAttr(attrs, "rel");
	if (!href || !rel) return void 0;
	const relTokens = rel.split(/\s+/);
	let hintRel;
	let hintAs;
	if (relTokens.includes("modulepreload")) {
		hintRel = "modulepreload";
		hintAs = "script";
	} else if (relTokens.includes("stylesheet")) {
		hintRel = "preload";
		hintAs = "style";
	} else if (relTokens.includes("preload")) {
		hintAs = getPreloadAs(attrs);
		if (!hintAs) return void 0;
		hintRel = "preload";
	} else if (relTokens.includes("preconnect")) {
		hintRel = "preconnect";
		hintAs = void 0;
	} else if (relTokens.includes("dns-prefetch")) {
		hintRel = "dns-prefetch";
		hintAs = void 0;
	}
	if (!hintRel) return void 0;
	const hint = {
		href,
		rel: hintRel
	};
	if (hintAs) hint.as = hintAs;
	addEarlyHintFetchAttrs(hint, attrs);
	return hint;
}
function collectStaticHintsFromManifest(manifest, matchedRoutes) {
	const hints = [];
	for (const route of matchedRoutes) {
		const routeManifest = manifest.routes[route.id];
		if (!routeManifest) continue;
		for (const link of routeManifest.preloads ?? []) {
			const attrs = getScriptPreloadAttrs(manifest, link);
			const hint = {
				href: attrs.href,
				rel: attrs.rel,
				as: "script"
			};
			if (attrs.crossOrigin !== void 0) hint.crossOrigin = attrs.crossOrigin;
			hints.push(hint);
		}
		for (const link of routeManifest.css ?? []) {
			const stylesheetHref = getStylesheetHref(link);
			if (manifest.inlineCss?.styles[stylesheetHref] !== void 0) continue;
			const resolvedLink = resolveManifestCssLink(link);
			const hint = {
				href: stylesheetHref,
				rel: "preload",
				as: "style"
			};
			if (resolvedLink.crossOrigin !== void 0) hint.crossOrigin = resolvedLink.crossOrigin;
			hints.push(hint);
		}
	}
	return hints;
}
function collectDynamicHintsFromMatches(matches) {
	const hints = [];
	for (const match of matches) {
		const links = match.links;
		if (!Array.isArray(links)) continue;
		for (const link of links) {
			const hint = linkAttrsToEarlyHint(link);
			if (hint) hints.push(hint);
		}
	}
	return hints;
}
function createEarlyHintsEvent(opts) {
	const nextHints = [];
	const nextLinks = [];
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.sentHints.push(hint);
		nextHints.push(hint);
		nextLinks.push(link);
	}
	if (!nextHints.length && opts.phase !== "dynamic") return void 0;
	return {
		phase: opts.phase,
		hints: nextHints,
		links: nextLinks,
		allHints: opts.sentHints.slice(),
		allLinks: Array.from(opts.sentLinks)
	};
}
function createResponseLinkHeaderEntries(opts) {
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.entries.push({
			phase: opts.phase,
			hint,
			link
		});
	}
}
function getResponseLinkHeaderEntries(opts) {
	if (!opts.filter) return opts.entries.map((entry) => entry.link);
	try {
		const links = [];
		for (const entry of opts.entries) if (opts.filter(entry)) links.push(entry.link);
		return links;
	} catch (err) {
		console.error("Error filtering response Link headers:", err);
		return [];
	}
}
function notifyEarlyHints(phase, event, onEarlyHints) {
	try {
		const result = onEarlyHints(event);
		if (result) Promise.resolve(result).catch((err) => {
			console.error(`Error sending ${phase} early hints:`, err);
		});
	} catch (err) {
		console.error(`Error sending ${phase} early hints:`, err);
	}
}
function getResponseLinkHeaderFilter(responseLinkHeader) {
	if (typeof responseLinkHeader !== "object") return;
	return responseLinkHeader.filter;
}
function appendResponseLinkHeaders(opts) {
	for (const link of getResponseLinkHeaderEntries(opts)) opts.responseHeaders.append("Link", link);
}
function collectResponseLinkHeaderEntries(opts) {
	for (let index = 0; index < opts.event.hints.length; index++) opts.entries.push({
		phase: opts.phase,
		hint: opts.event.hints[index],
		link: opts.event.links[index]
	});
}
function collectEarlyHintsPhase(opts) {
	const event = opts.onEarlyHints ? createEarlyHintsEvent({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		sentHints: opts.sentHints
	}) : void 0;
	if (event) notifyEarlyHints(opts.phase, event, opts.onEarlyHints);
	if (!opts.responseLinkHeaderEntries) return;
	if (event) {
		collectResponseLinkHeaderEntries({
			phase: opts.phase,
			event,
			entries: opts.responseLinkHeaderEntries
		});
		return;
	}
	createResponseLinkHeaderEntries({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		entries: opts.responseLinkHeaderEntries
	});
}
function createEarlyHintsCollector(opts) {
	if (!opts?.onEarlyHints && !opts?.responseLinkHeader) return;
	const sentLinks = /* @__PURE__ */ new Set();
	const sentHints = opts.onEarlyHints ? new Array() : void 0;
	const responseLinkHeaderEntries = opts.responseLinkHeader ? new Array() : void 0;
	const responseLinkHeaderFilter = getResponseLinkHeaderFilter(opts.responseLinkHeader);
	return {
		collectStatic: ({ manifest, matchedRoutes }) => {
			if (!matchedRoutes?.length) return;
			collectEarlyHintsPhase({
				phase: "static",
				hints: collectStaticHintsFromManifest(manifest, matchedRoutes),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		collectDynamic: (matches) => {
			collectEarlyHintsPhase({
				phase: "dynamic",
				hints: collectDynamicHintsFromMatches(matches),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		appendResponseHeaders: (headers) => {
			if (!responseLinkHeaderEntries?.length) return;
			appendResponseLinkHeaders({
				responseHeaders: headers,
				entries: responseLinkHeaderEntries,
				filter: responseLinkHeaderFilter
			});
		}
	};
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/transformAssetUrls.js
function normalizeTransformAssetResult(result) {
	if (typeof result === "string") return { href: result };
	return result;
}
function escapeCssString(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\a ").replace(/\r/g, "\\d ").replace(/\f/g, "\\c ");
}
async function transformInlineCssTemplate(options) {
	const { strings, urls } = options.template;
	if (strings.length !== urls.length + 1) throw new Error(`TanStack Start inlineCss template for ${options.stylesheetHref} is invalid`);
	let css = strings[0];
	for (let index = 0; index < urls.length; index++) {
		const transformed = normalizeTransformAssetResult(await options.transformFn({
			kind: "css-url",
			url: urls[index],
			stylesheetHref: options.stylesheetHref
		}));
		css += escapeCssString(transformed.href) + strings[index + 1];
	}
	return css;
}
async function transformInlineCssStyles(inlineCss, transformFn) {
	const transformedStyles = {};
	const transformedEntries = await Promise.all(Object.entries(inlineCss.styles).map(async ([stylesheetHref, css]) => {
		const template = inlineCss.templates?.[stylesheetHref];
		return [stylesheetHref, template ? await transformInlineCssTemplate({
			stylesheetHref,
			template,
			transformFn
		}) : css];
	}));
	for (const [stylesheetHref, css] of transformedEntries) transformedStyles[stylesheetHref] = css;
	return {
		styles: transformedStyles,
		...inlineCss.templates ? { templates: inlineCss.templates } : {}
	};
}
function resolveTransformAssetsCrossOrigin(config, kind) {
	if (!config) return void 0;
	if (typeof config === "string") return config;
	return config[kind];
}
function isObjectShorthand(transform) {
	return "prefix" in transform;
}
function resolveTransformAssetsConfig(transform) {
	if (typeof transform === "string") {
		const prefix = transform;
		return {
			type: "transform",
			transformFn: ({ url }) => ({ href: `${prefix}${url}` }),
			cache: true
		};
	}
	if (typeof transform === "function") return {
		type: "transform",
		transformFn: transform,
		cache: true
	};
	if (isObjectShorthand(transform)) {
		const { prefix, crossOrigin } = transform;
		return {
			type: "transform",
			transformFn: ({ url, kind }) => {
				const href = `${prefix}${url}`;
				if (kind === "css-url") return { href };
				const co = resolveTransformAssetsCrossOrigin(crossOrigin, kind);
				return co ? {
					href,
					crossOrigin: co
				} : { href };
			},
			cache: true
		};
	}
	if ("createTransform" in transform && transform.createTransform) return {
		type: "createTransform",
		createTransform: transform.createTransform,
		cache: transform.cache !== false
	};
	return {
		type: "transform",
		transformFn: typeof transform.transform === "string" ? (({ url }) => ({ href: `${transform.transform}${url}` })) : transform.transform,
		cache: transform.cache !== false
	};
}
function assignManifestLink(link, next) {
	if (typeof link === "string") return next.crossOrigin ? next : next.href;
	const nextLink = {
		...link,
		href: next.href
	};
	if (next.crossOrigin) nextLink.crossOrigin = next.crossOrigin;
	else delete nextLink.crossOrigin;
	return nextLink;
}
async function transformManifestAssets(source, transformFn, _opts) {
	const manifest = structuredClone(source);
	const inlineCssEnabled = _opts?.inlineCss !== false;
	const scriptTransforms = /* @__PURE__ */ new Map();
	const transformScript = (url) => {
		const cached = scriptTransforms.get(url);
		if (cached) return cached;
		const transformed = Promise.resolve(transformFn({
			url,
			kind: "script"
		})).then(normalizeTransformAssetResult);
		scriptTransforms.set(url, transformed);
		return transformed;
	};
	if (!inlineCssEnabled) delete manifest.inlineCss;
	else if (manifest.inlineCss) manifest.inlineCss = await transformInlineCssStyles(manifest.inlineCss, transformFn);
	for (const route of Object.values(manifest.routes)) {
		if (route.preloads?.length) route.preloads = await Promise.all(route.preloads.map(async (link) => {
			const result = await transformScript(resolveManifestAssetLink(link).href);
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.css?.length && !manifest.inlineCss) route.css = await Promise.all(route.css.map(async (link) => {
			const result = normalizeTransformAssetResult(await transformFn({
				url: resolveManifestCssLink(link).href,
				kind: "stylesheet"
			}));
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.scripts?.length) for (const script of route.scripts) {
			const src = script.attrs?.src;
			if (typeof src !== "string") continue;
			const result = await transformScript(src);
			script.attrs = {
				...script.attrs,
				src: result.href
			};
			if (result.crossOrigin) script.attrs.crossOrigin = result.crossOrigin;
			else delete script.attrs.crossOrigin;
		}
	}
	return manifest;
}
/**
* Builds a final ServerManifest without URL transforms. Used when no
* transformAssets option is provided.
*
* Returns a new manifest object so the cached base manifest is never mutated.
*/
function buildManifest(source, opts) {
	return {
		...source.scriptFormat ? { scriptFormat: source.scriptFormat } : {},
		...opts?.inlineCss !== false && source.inlineCss ? { inlineCss: structuredClone(source.inlineCss) } : {},
		routes: { ...source.routes }
	};
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/inlineCss.js
function getStaticHandlerInlineCssDefault(handlerInlineCss) {
	if (typeof handlerInlineCss === "function") return;
	return handlerInlineCss ?? true;
}
async function resolveInlineCssForRequest(opts) {
	if (opts.requestInlineCss !== void 0) return opts.requestInlineCss;
	if (typeof opts.handlerInlineCss === "function") return await opts.handlerInlineCss({ request: opts.request });
	return opts.handlerInlineCss ?? true;
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/finalManifest.js
function createCachedBaseManifestLoader(loadBaseManifest) {
	let baseManifestPromise;
	return () => {
		if (!baseManifestPromise) baseManifestPromise = loadBaseManifest().catch((error) => {
			baseManifestPromise = void 0;
			throw error;
		});
		return baseManifestPromise;
	};
}
function createFinalManifestTransformResolver(transformAssets, opts) {
	const transformConfig = transformAssets !== void 0 ? resolveTransformAssetsConfig(transformAssets) : void 0;
	const cache = transformConfig ? transformConfig.cache : true;
	const warmup = !!transformAssets && typeof transformAssets === "object" && "warmup" in transformAssets && transformAssets.warmup === true;
	let cachedCreateTransformPromise;
	const clearCachedCreateTransform = () => {
		cachedCreateTransformPromise = void 0;
	};
	return {
		cache,
		warmup,
		clearCachedCreateTransform,
		getTransformFn: async (ctx) => {
			if (!transformConfig) return void 0;
			if (transformConfig.type !== "createTransform") return transformConfig.transformFn;
			if (!cache || !opts.cacheCreateTransform) return transformConfig.createTransform(ctx);
			if (!cachedCreateTransformPromise) cachedCreateTransformPromise = Promise.resolve(transformConfig.createTransform(ctx)).catch((error) => {
				clearCachedCreateTransform();
				throw error;
			});
			return cachedCreateTransformPromise;
		}
	};
}
function createFinalManifestResolver(opts) {
	const finalManifestCache = /* @__PURE__ */ new Map();
	const transformResolver = createFinalManifestTransformResolver(opts.transformAssets, { cacheCreateTransform: opts.cacheCreateTransform });
	const handlerDefaultInlineCss = getStaticHandlerInlineCssDefault(opts.inlineCss);
	const getRequestManifestOptions = async (requestOpts) => {
		const transformFn = await transformResolver.getTransformFn({
			warmup: false,
			request: requestOpts.request
		});
		const inlineCss = await resolveInlineCssForRequest({
			request: requestOpts.request,
			handlerInlineCss: opts.inlineCss,
			requestInlineCss: requestOpts.requestInlineCss
		});
		return {
			getBaseManifest: requestOpts.getBaseManifest,
			transformFn,
			cache: transformResolver.cache,
			inlineCss
		};
	};
	const resolveRequest = async (requestOpts, cache) => {
		return resolveFinalManifest({
			...await getRequestManifestOptions(requestOpts),
			finalManifestCache: cache
		});
	};
	return {
		warmup: ({ getBaseManifest }) => warmupFinalManifest({
			enabled: transformResolver.warmup,
			handlerDefaultInlineCss,
			cache: transformResolver.cache,
			finalManifestCache,
			getBaseManifest,
			getTransformFn: () => transformResolver.getTransformFn({ warmup: true }),
			onError: transformResolver.clearCachedCreateTransform
		}),
		resolveCached: (requestOpts) => resolveRequest(requestOpts, finalManifestCache),
		resolveUncached: (requestOpts) => resolveRequest(requestOpts, void 0)
	};
}
function getFinalManifestCacheKey(inlineCss) {
	return inlineCss ? "inline-css" : "linked-css";
}
function cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, promise) {
	const cachedFinalManifestPromise = promise.catch((error) => {
		if (cachedFinalManifestPromises.get(cacheKey) === cachedFinalManifestPromise) cachedFinalManifestPromises.delete(cacheKey);
		throw error;
	});
	cachedFinalManifestPromises.set(cacheKey, cachedFinalManifestPromise);
	return cachedFinalManifestPromise;
}
function getOrCreateCachedFinalManifestPromise(cachedFinalManifestPromises, cacheKey, computeFinalManifest) {
	const cachedFinalManifestPromise = cachedFinalManifestPromises.get(cacheKey);
	if (cachedFinalManifestPromise) return cachedFinalManifestPromise;
	return cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, Promise.resolve().then(computeFinalManifest));
}
async function buildFinalManifest(opts) {
	return opts.transformFn ? await transformManifestAssets(opts.base, opts.transformFn, { inlineCss: opts.inlineCss }) : buildManifest(opts.base, { inlineCss: opts.inlineCss });
}
async function resolveFinalManifest(opts) {
	const computeFinalManifest = async () => {
		return buildFinalManifest({
			base: await opts.getBaseManifest(),
			transformFn: opts.transformFn,
			inlineCss: opts.inlineCss
		});
	};
	if (opts.finalManifestCache && (!opts.transformFn || opts.cache)) return getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(opts.inlineCss), computeFinalManifest);
	return computeFinalManifest();
}
function warmupFinalManifest(opts) {
	if (!opts.enabled || opts.handlerDefaultInlineCss === void 0 || !opts.cache) return;
	const inlineCss = opts.handlerDefaultInlineCss;
	const warmupPromise = getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(inlineCss), async () => {
		const [base, transformFn] = await Promise.all([opts.getBaseManifest(), opts.getTransformFn()]);
		return buildFinalManifest({
			base,
			transformFn,
			inlineCss
		});
	});
	if (opts.onError) warmupPromise.catch(opts.onError);
	return warmupPromise;
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/serializer/ServerFunctionSerializationAdapter.js
var ServerFunctionSerializationAdapter = createSerializationAdapter({
	key: "$TSS/serverfn",
	test: (v) => {
		if (typeof v !== "function") return false;
		if (!(TSS_SERVER_FUNCTION in v)) return false;
		return !!v[TSS_SERVER_FUNCTION];
	},
	toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
	fromSerializable: ({ functionId }) => {
		const fn = async (opts, signal) => {
			const serverFn = await getServerFnById(functionId, { origin: "client" });
			const result = await serverFn({
				data: opts?.data,
				context: opts?.context,
				method: serverFn.method ?? "GET"
			}, signal);
			if (result.error !== void 0) throw result.error;
			return result.result;
		};
		return fn;
	}
});
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/createStartHandler.js
function getStartResponseHeaders(opts) {
	return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ..._getRenderedMatches(opts.router.stores.matches.get()).map((match) => {
		return match.headers;
	}));
}
var entriesPromise;
var defaultCsrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
var getCachedBaseManifest = createCachedBaseManifestLoader(() => getStartManifest());
var getProdBaseManifest = () => getCachedBaseManifest();
var getBaseManifest = getProdBaseManifest;
var createEarlyHintsForRequest = createEarlyHintsCollector;
async function loadEntries() {
	const [routerEntry, startEntry, pluginAdapters] = await Promise.all([
		import("../../_chunks/router.mjs"),
		import("../../_chunks/start.mjs"),
		import("../tanstack__start-server-core.mjs").then((n) => n.t)
	]);
	return {
		routerEntry,
		startEntry,
		pluginAdapters
	};
}
function getEntries() {
	if (!entriesPromise) entriesPromise = loadEntries();
	return entriesPromise;
}
var ROUTER_BASEPATH = "/";
var SERVER_FN_BASE = "/_serverFn/";
var IS_PRERENDERING = process.env.TSS_PRERENDERING === "true";
var IS_SHELL_ENV = process.env.TSS_SHELL === "true";
var IS_DEV = false;
var ERR_NO_RESPONSE = IS_DEV ? `It looks like you forgot to return a response from your server route handler. If you want to defer to the app router, make sure to have a component set in this route.` : "Internal Server Error";
var ERR_NO_DEFER = IS_DEV ? `You cannot defer to the app router if there is no component defined on this route.` : "Internal Server Error";
function throwRouteHandlerError() {
	throw new Error(ERR_NO_RESPONSE);
}
function throwIfMayNotDefer() {
	throw new Error(ERR_NO_DEFER);
}
function getResponseFromResult(result) {
	return isSsrResponse(result) || result instanceof Response ? result : result?.response;
}
var responseBodySources = /* @__PURE__ */ new WeakMap();
function disposeResponseResult(result, reason) {
	const response = getResponseFromResult(result);
	if (isSsrResponse(response) || response instanceof Response) disposeSsrResponse(response, reason);
}
function hasResponseBody(value) {
	return value instanceof Response && value.body !== null;
}
function inheritsResponseOwnership(ownership, candidate) {
	return hasResponseBody(candidate) && (candidate.body === ownership.response.body || responseBodySources.get(candidate) === ownership.response);
}
function disposeResponseOwnership(ownership, reason) {
	const { response, sourceBody, streamResponse } = ownership;
	streamResponse?.dispose(reason);
	if (!streamResponse || response.body !== sourceBody) response.body.cancel(reason).catch(() => {});
}
function getOwnedResponse(ownership) {
	const { response, sourceBody, streamResponse } = ownership;
	if (!streamResponse) return response;
	if (streamResponse.response === response && response.body === sourceBody) return streamResponse;
	if (response.body === sourceBody) return {
		...streamResponse,
		response
	};
	return {
		...streamResponse,
		response,
		dispose(reason) {
			disposeResponseOwnership(ownership, reason);
		}
	};
}
function createLateResponseDisposer(signal) {
	return (result) => disposeResponseResult(result, signal.reason);
}
/**
* Compose middleware around a terminal response handler. With no middleware
* the terminal runs directly.
*/
async function executeMiddleware(middlewares, terminal, ctx, signal, terminalNext) {
	let index = -1;
	let responseOwnership;
	let settled = false;
	const disposeAbandonedResult = createLateResponseDisposer(signal);
	const setResponse = (response) => {
		const ssrResponse = isSsrResponse(response) ? response : void 0;
		const streamResponse = ssrResponse?.serverSsrCleanup === "stream" ? ssrResponse : void 0;
		const exposed = ssrResponse ? ssrResponse.response : response;
		const current = responseOwnership;
		if (settled) {
			if (exposed !== ctx.response) disposeResponseResult(response, "late middleware response");
			return;
		}
		if (current && current.response === exposed) current.streamResponse ??= streamResponse;
		else if (current && inheritsResponseOwnership(current, exposed)) {
			current.response = exposed;
			current.streamResponse ??= streamResponse;
		} else {
			if (current) disposeResponseOwnership(current, "middleware response replaced");
			if (hasResponseBody(exposed)) responseOwnership = {
				response: exposed,
				sourceBody: exposed.body,
				streamResponse
			};
			else responseOwnership = void 0;
		}
		ctx.response = exposed;
	};
	const reconcileCtxResponse = () => {
		if (ctx.response !== responseOwnership?.response) setResponse(ctx.response);
	};
	let nextPromise;
	function next(nextCtx) {
		const result = runNext(nextCtx);
		nextPromise = result;
		return result;
	}
	async function runNext(nextCtx) {
		signal.throwIfAborted();
		if (nextCtx) {
			if (nextCtx.context) ctx.context = safeObjectMerge(ctx.context, nextCtx.context);
			for (const key of Object.keys(nextCtx)) if (key === "response") setResponse(nextCtx.response);
			else if (key !== "context") ctx[key] = nextCtx[key];
		}
		index++;
		const isTerminal = index === middlewares.length;
		const middleware = index < middlewares.length ? middlewares[index] : isTerminal ? terminal : void 0;
		const middlewareNext = isTerminal && terminalNext ? terminalNext : next;
		if (!middleware) return ctx;
		let result;
		try {
			const pending = middleware({
				...ctx,
				next: middlewareNext
			});
			if (nextPromise && pending === nextPromise) {
				nextPromise = void 0;
				await pending;
				if (signal.aborted) throw signal.reason;
				return ctx;
			} else if (!isPromise(pending)) {
				result = pending;
				signal.throwIfAborted();
			} else result = await waitForReason(pending, signal, disposeAbandonedResult, disposeAbandonedResult);
		} catch (err) {
			reconcileCtxResponse();
			if (signal.aborted) {
				if (result !== void 0) disposeAbandonedResult(result);
				if (err !== signal.reason) disposeAbandonedResult(err);
				throw signal.reason;
			}
			if (err instanceof Response) {
				setResponse(err);
				return ctx;
			}
			throw err;
		}
		if (isTerminal && terminalNext && !result) throwRouteHandlerError();
		reconcileCtxResponse();
		if (result && result !== ctx) {
			const response = getResponseFromResult(result);
			if (response !== void 0 && response !== ctx.response) setResponse(response);
			if (response !== result && result.context && result.context !== ctx.context) ctx.context = safeObjectMerge(ctx.context, result.context);
		}
		return ctx;
	}
	try {
		await runNext();
		const response = ctx.response;
		if (!response) throwRouteHandlerError();
		reconcileCtxResponse();
		if (signal.aborted) throw signal.reason;
		settled = true;
		return responseOwnership ? getOwnedResponse(responseOwnership) : response;
	} catch (err) {
		settled = true;
		if (responseOwnership) disposeResponseOwnership(responseOwnership, signal.aborted ? signal.reason : err);
		throw err;
	}
}
/**
* Creates the TanStack Start request handler.
*
* @example Backwards-compatible usage (handler callback only):
* ```ts
* export default createStartHandler(defaultStreamHandler)
* ```
*
* @example With CDN URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: 'https://cdn.example.com',
* })
* ```
*
* @example With per-request URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: {
*     transform: ({ url }) => {
*       const cdnBase = getRequest().headers.get('x-cdn-base') || ''
*       return { href: `${cdnBase}${url}` }
*     },
*     cache: false,
*   },
* })
* ```
*/
function createStartHandler(cbOrOptions) {
	const handlerOptions = typeof cbOrOptions === "function" ? {} : cbOrOptions;
	const cb = typeof cbOrOptions === "function" ? cbOrOptions : cbOrOptions.handler;
	const finalManifestResolver = createFinalManifestResolver({
		...handlerOptions,
		cacheCreateTransform: true
	});
	const resolveManifestForRequest = finalManifestResolver.resolveCached;
	finalManifestResolver.warmup({ getBaseManifest: () => getBaseManifest(void 0) });
	const startRequestResolver = async (request, requestOpts) => {
		const signal = request.signal;
		let router;
		let routerPromise;
		let responseOwnsCleanup = false;
		try {
			signal.throwIfAborted();
			const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);
			const href = url.pathname + url.search + url.hash;
			const origin = url.origin;
			if (handledProtocolRelativeURL) return Response.redirect(url, 308);
			const entries = await waitForReason(getEntries(), signal);
			const isServerFnRequest = !!SERVER_FN_BASE && url.pathname.startsWith(SERVER_FN_BASE);
			const startInstance = entries.startEntry.startInstance;
			let startOptions;
			if (startInstance) {
				const pendingStartOptions = startInstance.getOptions();
				startOptions = isPromise(pendingStartOptions) ? await waitForReason(pendingStartOptions, signal) : pendingStartOptions;
				signal.throwIfAborted();
			} else startOptions = {};
			const { hasPluginAdapters, pluginSerializationAdapters } = entries.pluginAdapters;
			const serializationAdapters = [
				...startOptions.serializationAdapters || [],
				...hasPluginAdapters ? pluginSerializationAdapters : [],
				ServerFunctionSerializationAdapter
			];
			const requestStartOptions = {
				...startOptions,
				requestMiddleware: startInstance ? startOptions.requestMiddleware : isServerFnRequest ? [defaultCsrfMiddleware] : void 0,
				serializationAdapters
			};
			const flattenedRequestMiddlewares = requestStartOptions.requestMiddleware ? flattenMiddlewares(requestStartOptions.requestMiddleware) : [];
			const executedRequestMiddlewares = new Set(flattenedRequestMiddlewares);
			const getRouter = () => {
				routerPromise ??= (async () => {
					signal.throwIfAborted();
					const requestRouter = await waitForReason(entries.routerEntry.getRouter(), signal);
					let isShell = IS_SHELL_ENV;
					if (IS_PRERENDERING && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
					const history = createServerHistory(href);
					requestRouter.update({
						history,
						isShell,
						isPrerendering: IS_PRERENDERING,
						origin: requestRouter.options.origin ?? origin,
						defaultSsr: requestStartOptions.defaultSsr,
						serializationAdapters: [...requestStartOptions.serializationAdapters, ...requestRouter.options.serializationAdapters || []],
						basepath: ROUTER_BASEPATH
					});
					router = requestRouter;
					return requestRouter;
				})();
				return routerPromise;
			};
			const handlerType = isServerFnRequest ? "serverFn" : "router";
			const startContext = {
				getRouter,
				startOptions: requestStartOptions,
				request,
				executedRequestMiddlewares,
				handlerType
			};
			let terminal;
			if (isServerFnRequest) {
				const serverFnId = url.pathname.slice(SERVER_FN_BASE.length).split("/")[0];
				if (!serverFnId) throw new Error("Invalid server action param for serverFnId");
				terminal = ({ context }) => runWithStartContext({
					...startContext,
					contextAfterGlobalMiddlewares: context
				}, () => handleServerAction({
					request,
					context: requestOpts?.context,
					serverFnId
				}));
			} else {
				const executeRouter = async (serverContext, matchedRoutes) => {
					if (!/(^|,)\s*(\*\/\*|text\/html)/.test(request.headers.get("Accept") || "*/*")) return normalizeSsrResponse(Response.json({ error: "Only HTML requests are supported here" }, { status: 406 }));
					const manifest = await waitForReason(resolveManifestForRequest({
						request,
						requestInlineCss: requestOpts?.inlineCss,
						getBaseManifest: () => getBaseManifest(matchedRoutes)
					}), signal);
					const earlyHints = createEarlyHintsForRequest({
						onEarlyHints: requestOpts?.onEarlyHints,
						responseLinkHeader: requestOpts?.responseLinkHeader
					});
					earlyHints?.collectStatic({
						manifest,
						matchedRoutes
					});
					const routerInstance = await getRouter();
					attachRouterServerSsrUtils({
						router: routerInstance,
						manifest,
						getRequestAssets: () => getStartContext({ throwIfNotFound: false })?.requestAssets
					});
					routerInstance.options.additionalContext = { serverContext };
					await routerInstance.load({ _signal: signal });
					signal.throwIfAborted();
					if (routerInstance._serverResult?.type === "redirect") return normalizeSsrResponse(routerInstance._serverResult.redirect);
					earlyHints?.collectDynamic(_getRenderedMatches(routerInstance.stores.matches.get()));
					const ctx = getStartContext({ throwIfNotFound: false });
					await routerInstance.serverSsr.dehydrate({
						requestAssets: ctx?.requestAssets,
						signal
					});
					signal.throwIfAborted();
					const responseHeaders = getStartResponseHeaders({ router: routerInstance });
					earlyHints?.appendResponseHeaders(responseHeaders);
					signal.throwIfAborted();
					const disposeLate = createLateResponseDisposer(signal);
					return normalizeSsrResponse(await waitForReason(cb({
						request,
						router: routerInstance,
						responseHeaders
					}), signal, disposeLate, disposeLate));
				};
				terminal = ({ context }) => runWithStartContext({
					...startContext,
					contextAfterGlobalMiddlewares: context
				}, () => handleServerRoutes({
					getRouter,
					request,
					url,
					executeRouter,
					context,
					executedRequestMiddlewares
				}));
			}
			const middlewareResponse = await executeMiddleware(flattenedRequestMiddlewares.map((d) => d.options.server), terminal, {
				request,
				pathname: url.pathname,
				handlerType,
				context: createNullProtoObject(requestOpts?.context)
			}, signal);
			let result;
			try {
				result = await handleRedirectResponse(middlewareResponse, getRouter, signal, isServerFnRequest && request.headers.get("x-tsr-serverFn") === "true");
				if (request.method === "HEAD") result = stripSsrResponseBody(result, "HEAD body stripped");
			} catch (error) {
				disposeResponseResult(middlewareResponse, signal.aborted ? signal.reason : error);
				throw error;
			}
			bindSsrResponseToRequest(router, result, signal);
			signal.throwIfAborted();
			responseOwnsCleanup = result.serverSsrCleanup === "stream";
			return result.response;
		} finally {
			if (router?.serverSsr && !responseOwnsCleanup) router.serverSsr.cleanup();
		}
	};
	return requestHandler(startRequestResolver);
}
var relativeRedirectProtocols = /* @__PURE__ */ new Set();
async function handleRedirectResponse(response, getRouter, signal, serializeRedirect) {
	signal.throwIfAborted();
	const ssrResponse = normalizeSsrResponse(response);
	const redirect = ssrResponse.response;
	if (!isRedirect(redirect)) return ssrResponse;
	const opts = redirect.options;
	const href = redirect.headers.get("Location") || opts.href;
	if (!href && opts.to && typeof opts.to === "string" && !opts.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(opts)}`);
	if (!href && [
		"params",
		"search",
		"hash"
	].some((d) => typeof opts[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(opts).filter((d) => typeof opts[d] === "function").map((d) => `"${d}"`).join(", ")}`);
	signal.throwIfAborted();
	if (href && !isDangerousProtocol(href, relativeRedirectProtocols)) {
		opts.href = href;
		redirect.headers.set("Location", href);
	} else {
		const router = await getRouter();
		signal.throwIfAborted();
		router.resolveRedirect(redirect);
	}
	if (serializeRedirect) {
		const redirectOptions = { ...opts };
		delete redirectOptions.headers;
		const responseHeaders = new Headers(redirect.headers);
		responseHeaders.set("content-type", "application/json");
		return replaceSsrResponse(ssrResponse, Response.json({
			...redirectOptions,
			isSerializedRedirect: true
		}, { headers: responseHeaders }), "redirect response replaced");
	}
	return ssrResponse;
}
function withParsedParams(handler, matchedRoutes) {
	if (!matchedRoutes.some((route) => route.options.params?.parse ?? route.options.parseParams)) return handler;
	return (ctx) => {
		const params = Object.assign(Object.create(null), ctx.params);
		for (const route of matchedRoutes) {
			const parse = route.options.params?.parse ?? route.options.parseParams;
			if (parse) Object.assign(params, parse(params));
		}
		return handler({
			...ctx,
			params
		});
	};
}
async function handleServerRoutes({ getRouter, request, url, executeRouter, context, executedRequestMiddlewares }) {
	const router = await getRouter();
	const pathname = executeRewriteInput(router.rewrite, url).pathname;
	const [matchedRoutes, rawParams, foundRoute] = router.getMatchedRoutes(pathname);
	const isExactMatch = foundRoute && rawParams["**"] === void 0;
	const routeMiddlewares = [];
	let terminalHandler = (ctx) => executeRouter(ctx.context, matchedRoutes);
	let terminalNext;
	for (const route of matchedRoutes) {
		const serverMiddleware = route.options.server?.middleware;
		if (serverMiddleware) {
			const flattened = flattenMiddlewares(serverMiddleware);
			for (const m of flattened) if (!executedRequestMiddlewares.has(m)) routeMiddlewares.push(m.options.server);
		}
	}
	const server = foundRoute?.options.server;
	if (server?.handlers && isExactMatch) {
		const handlers = typeof server.handlers === "function" ? server.handlers({ createHandlers: (d) => d }) : server.handlers;
		const requestMethod = request.method.toUpperCase();
		const handler = requestMethod === "HEAD" ? handlers["HEAD"] ?? handlers["GET"] ?? handlers["ANY"] : handlers[requestMethod] ?? handlers["ANY"];
		if (handler) {
			const mayDefer = !!foundRoute.options.component;
			if (typeof handler !== "function") {
				if (handler.middleware?.length) {
					const handlerMiddlewares = flattenMiddlewares(handler.middleware);
					for (const m of handlerMiddlewares) routeMiddlewares.push(m.options.server);
				}
			}
			const routeHandler = typeof handler === "function" ? handler : handler.handler;
			if (routeHandler) {
				const parsedHandler = withParsedParams(routeHandler, matchedRoutes);
				if (!mayDefer) {
					terminalHandler = parsedHandler;
					terminalNext = throwIfMayNotDefer;
				} else routeMiddlewares.push(parsedHandler);
			}
		}
	}
	return normalizeSsrResponse(await executeMiddleware(routeMiddlewares, terminalHandler, {
		request,
		context,
		params: rawParams,
		pathname,
		handlerType: "router"
	}, request.signal, terminalNext));
}
//#endregion
//#region node_modules/@tanstack/react-start/dist/default-entry/esm/server.js
var server_exports = /* @__PURE__ */ __exportAll({
	createServerEntry: () => createServerEntry,
	default: () => server_default
});
var fetch$1 = createStartHandler(defaultStreamHandler);
function createServerEntry(entry) {
	return { async fetch(...args) {
		return await entry.fetch(...args);
	} };
}
var server_default = createServerEntry({ fetch: fetch$1 });
//#endregion
export { serve as _, toResponse as a, getNormalizedURL as c, makeSerovalPlugin as d, toCrossJSONAsync as f, NodeResponse as g, createSerializationAdapter as h, H3Event as i, createRawStreamRPCPlugin as l, fromJSON as m, createCsrfMiddleware as n, mergeHeaders as o, toCrossJSONStream as p, createMiddleware as r, attachRouterServerSsrUtils as s, server_exports as t, defaultSerovalDeserializerPlugins as u };
