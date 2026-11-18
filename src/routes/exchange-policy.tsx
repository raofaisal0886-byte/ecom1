import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/exchange-policy")({
  head: () => ({ meta: [
    { title: "Exchange Policy — Blackwell BD" },
    { name: "description", content: "How to exchange a product at Blackwell BD." },
    { property: "og:title", content: "Exchange Policy — Blackwell BD" },
    { property: "og:description", content: "How to exchange a product at Blackwell BD." },
  ] }),
  component: () => <InfoPage title="Exchange Policy" intro="How to exchange a product at Blackwell BD." sections={[]} />,
});
