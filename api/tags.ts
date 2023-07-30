import { useAPI } from '@/composables/useAPI'

export function getPopularTags() {
  return useAPI<{ tags: string[] }>('/tags')
}
