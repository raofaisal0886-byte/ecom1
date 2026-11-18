import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({ meta: [
    { title: "Shipping & Delivery Policy — Blackwell BD" },
    { name: "description", content: "Delivery times and charges across Bangladesh." },
    { property: "og:title", content: "Shipping & Delivery Policy — Blackwell BD" },
    { property: "og:description", content: "Delivery times and charges across Bangladesh." },
  ] }),
  component: () => <InfoPage title="Shipping & Delivery Policy" intro="Delivery times and charges across Bangladesh." sections={[]} />,
});
