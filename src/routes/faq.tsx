import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [
    { title: "FAQ — Blackwell BD" },
    { name: "description", content: "Answers to common questions about orders, delivery and returns." },
    { property: "og:title", content: "FAQ — Blackwell BD" },
    { property: "og:description", content: "Answers to common questions about orders, delivery and returns." },
  ] }),
  component: () => <InfoPage title="FAQ" intro="Answers to common questions about orders, delivery and returns." sections={[]} />,
});
