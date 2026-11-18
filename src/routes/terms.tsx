import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms & Conditions — Blackwell BD" },
    { name: "description", content: "The terms for shopping at Blackwell BD." },
    { property: "og:title", content: "Terms & Conditions — Blackwell BD" },
    { property: "og:description", content: "The terms for shopping at Blackwell BD." },
  ] }),
  component: () => <InfoPage title="Terms & Conditions" intro="The terms for shopping at Blackwell BD." sections={[]} />,
});
