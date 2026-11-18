import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [
    { title: "Store Admin — Blackwell BD" },
    { name: "description", content: "Manage Blackwell BD products, orders and settings." },
    { property: "og:title", content: "Store Admin — Blackwell BD" },
    { property: "og:description", content: "Manage Blackwell BD products, orders and settings." },
  ] }),
  component: () => <InfoPage title="Store Admin" intro="Manage Blackwell BD products, orders and settings." sections={[]} />,
});
