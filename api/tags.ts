import { useAPI } from "@/composables/useAPI";

export const getPopularTags = () => {
  return useAPI<{ tags: string[] }>("/tags");
};
