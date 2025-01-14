import { apiClient } from "../client";
import { healthRoutes } from "../route";

export const getHealth = async () => {
  try {
    const response = await apiClient.get(healthRoutes.all);

    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getResourceHealth = async () => {
  try {
    const response = await apiClient.get(healthRoutes.resources);

    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getWebsiteHealth = async () => {
  try {
    const response = await apiClient.get(healthRoutes.website);

    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};
