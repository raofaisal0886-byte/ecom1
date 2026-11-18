import { useStore } from "@/lib/store";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  const { settings } = useStore();
  const href = whatsappUrl(settings.whatsappNumber, `Hello ${settings.storeName}! I have a question about your products.`);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-3.5 text-whatsapp-foreground shadow-luxe animate-pulse-ring transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 group-hover:max-w-40 group-hover:pr-2 sm:inline">
        Order on WhatsApp
      </span>
    </a>
  );
}
