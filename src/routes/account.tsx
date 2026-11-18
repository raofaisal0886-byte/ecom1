import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [
    { title: "My Account — Blackwell BD" },
    { name: "description", content: "Your Blackwell BD profile and orders." },
    { property: "og:title", content: "My Account — Blackwell BD" },
    { property: "og:description", content: "Your Blackwell BD profile and orders." },
  ] }),
  component: () => <InfoPage title="My Account" intro="Your Blackwell BD profile and orders." sections={[]} />,
});
