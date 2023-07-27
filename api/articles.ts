import type { AllArticles } from "types";

export function getArticles() {
  return useAPI<AllArticles>("/articles", { query: { limit: 10, offset: 0 } });
}
