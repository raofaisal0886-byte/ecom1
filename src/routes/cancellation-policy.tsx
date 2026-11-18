import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({ meta: [
    { title: "Cancellation Policy — Blackwell BD" },
    { name: "description", content: "How to cancel a Blackwell BD order." },
    { property: "og:title", content: "Cancellation Policy — Blackwell BD" },
    { property: "og:description", content: "How to cancel a Blackwell BD order." },
  ] }),
  component: () => <InfoPage title="Cancellation Policy" intro="How to cancel a Blackwell BD order." sections={[]} />,
});
