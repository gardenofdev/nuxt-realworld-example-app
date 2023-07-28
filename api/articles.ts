import { useAPI } from "@/composables/useAPI";
import type { AllArticles } from "@/types";
import { PAGE_SIZE_LIMIT } from "@/constants";
import { Ref, computed } from "vue";

export function getArticles({
  page,
  pageSize,
}: {
  page?: Ref<number>;
  pageSize?: number;
}) {
  const query = computed(() => {
    return {
      offset: page?.value ?? 1,
      limit: pageSize ?? PAGE_SIZE_LIMIT,
    };
  });

  return useAPI<AllArticles>("/articles", {
    query,
    watch: [query],
  });
}
