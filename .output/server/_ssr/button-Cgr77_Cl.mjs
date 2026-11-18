import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./format-DqyaZc8U.mjs";
import { l as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-Cgr77_Cl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/85",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:border-foreground hover:bg-accent/40",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent/60 hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			gold: "bg-gold-gradient text-gold-foreground shadow-gold hover:brightness-110 hover:-translate-y-0.5",
			ink: "bg-ink text-ink-foreground hover:bg-ink-soft",
			"outline-light": "border border-ink-foreground/50 text-ink-foreground bg-transparent hover:bg-ink-foreground hover:text-ink",
			whatsapp: "bg-whatsapp text-whatsapp-foreground shadow-sm hover:brightness-105 hover:-translate-y-0.5"
		},
		size: {
			default: "h-10 px-5 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-12 px-8 text-[0.8rem] uppercase tracking-[0.18em]",
			xl: "h-14 px-10 text-[0.8rem] uppercase tracking-[0.2em]",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as t };
