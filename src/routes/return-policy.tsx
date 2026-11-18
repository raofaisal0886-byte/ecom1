import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/return-policy")({
  head: () => ({ meta: [
    { title: "Return & Refund Policy — Blackwell BD" },
    { name: "description", content: "How returns and refunds work at Blackwell BD." },
    { property: "og:title", content: "Return & Refund Policy — Blackwell BD" },
    { property: "og:description", content: "How returns and refunds work at Blackwell BD." },
  ] }),
  component: () => <InfoPage title="Return & Refund Policy" intro="How returns and refunds work at Blackwell BD." sections={[]} />,
});
