import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-DqyaZc8U.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatBDT(amount) {
	return `৳${Math.round(amount).toLocaleString("en-IN")}`;
}
//#endregion
export { formatBDT as n, cn as t };
