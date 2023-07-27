import { useFetch, useRuntimeConfig, type UseFetchOptions } from "nuxt/app";

export function useAPI<T = unknown>(
  url: string,
  userOptions: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: `${config.public.baseUrl}`,
  };

  return useFetch(url, Object.assign(defaults, userOptions));
}
