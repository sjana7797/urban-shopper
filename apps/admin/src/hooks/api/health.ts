import { useQuery } from "@tanstack/react-query";
import {
  getHealth,
  getResourceHealth,
  getWebsiteHealth,
} from "~admin/api/functions/health";
import { healthRoutes } from "~admin/api/route";

export const useHealth = () => {
  return useQuery({
    queryKey: [healthRoutes.all],
    queryFn: getHealth,
  });
};

export const useResourceHealth = () => {
  return useQuery({
    queryKey: [healthRoutes.resources],
    queryFn: getResourceHealth,
  });
};

export const useWebsiteHealth = () => {
  return useQuery({
    queryKey: [healthRoutes.website],
    queryFn: getWebsiteHealth,
  });
};
