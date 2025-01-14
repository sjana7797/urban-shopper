import Render from "@repo/ui/components/render";
import { cn } from "@repo/ui/lib/utils";
import { UseQueryResult } from "@tanstack/react-query";
import type { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  title: string;
  useQueryFunction: () => UseQueryResult<boolean, Error>;
};

function HealthCard({ Icon, title, useQueryFunction }: Props) {
  const { data, isLoading } = useQueryFunction();

  return (
    <div
      className={cn(
        "flex items-center bg-gray-50 rounded-lg shadow-sm border p-4 gap-x-4 justify-between text-gray-700",
        isLoading && "animate-pulse",
        data && "bg-green-50 border-green-200 text-green-800",
        !data && !isLoading && "bg-red-50 border-red-200 text-red-800",
      )}
    >
      <h2 className="text-lg font-medium gap-x-2 flex items-center">
        <Icon className="w-5 h-5" />
        <span>{title}</span>
      </h2>
      <div className="flex items-center gap-x-2">
        <div
          className={cn(
            "w-4 h-4 bg-gray-400 rounded-full",
            data ? "bg-green-500" : "bg-red-500",
          )}
        />
        <Render renderIf={isLoading}>
          <span>Loading</span>
        </Render>
        <Render renderIf={!!data}>
          <span className="text-green-600">Running</span>
        </Render>
        <Render renderIf={!data && !isLoading}>
          <span className="text-red-600">Not Running</span>
        </Render>
      </div>
    </div>
  );
}

export default HealthCard;
