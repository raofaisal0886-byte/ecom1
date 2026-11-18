import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/store/InfoPage";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [
    { title: "Register — Blackwell BD" },
    { name: "description", content: "Create your Blackwell BD account." },
    { property: "og:title", content: "Register — Blackwell BD" },
    { property: "og:description", content: "Create your Blackwell BD account." },
  ] }),
  component: () => <InfoPage title="Register" intro="Create your Blackwell BD account." sections={[]} />,
});
