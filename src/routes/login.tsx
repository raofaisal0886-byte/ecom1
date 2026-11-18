import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [
    { title: "Customer Login — Blackwell BD" },
    { name: "description", content: "Sign in to your Blackwell BD account." },
    { property: "og:title", content: "Customer Login — Blackwell BD" },
    { property: "og:description", content: "Sign in to your Blackwell BD account." },
  ] }),
  component: () => <InfoPage title="Customer Login" intro="Sign in to your Blackwell BD account." sections={[]} />,
});
