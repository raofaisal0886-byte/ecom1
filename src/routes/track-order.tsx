import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/track-order")({
  head: () => ({ meta: [
    { title: "Track My Order — Blackwell BD" },
    { name: "description", content: "Check the status of your Blackwell BD order." },
    { property: "og:title", content: "Track My Order — Blackwell BD" },
    { property: "og:description", content: "Check the status of your Blackwell BD order." },
  ] }),
  component: () => <InfoPage title="Track My Order" intro="Check the status of your Blackwell BD order." sections={[]} />,
});
