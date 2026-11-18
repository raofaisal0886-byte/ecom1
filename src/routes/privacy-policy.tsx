import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — Blackwell BD" },
    { name: "description", content: "How Blackwell BD handles your information." },
    { property: "og:title", content: "Privacy Policy — Blackwell BD" },
    { property: "og:description", content: "How Blackwell BD handles your information." },
  ] }),
  component: () => <InfoPage title="Privacy Policy" intro="How Blackwell BD handles your information." sections={[]} />,
});
