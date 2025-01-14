import { Button } from "@repo/ui/components/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Files, LayoutPanelTop, Server } from "lucide-react";
import HealthCard from "~admin/components/health/card";
import {
  useHealth,
  useResourceHealth,
  useWebsiteHealth,
} from "~admin/hooks/api/health";

export const Route = createLazyFileRoute("/health/")({
  component: HealthPage,
});

function HealthPage() {
  // constants
  const healthCards = [
    {
      Icon: Server,
      title: "API Services",
      useQueryFunction: useHealth,
    },
    {
      Icon: Files,
      title: "Resource Services",
      useQueryFunction: useResourceHealth,
    },
    {
      Icon: LayoutPanelTop,
      title: "Website Services",
      useQueryFunction: useWebsiteHealth,
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {healthCards.map((card) => (
          <HealthCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
