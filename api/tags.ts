export const getPopularTags = () => {
  return useAPI<{ tags: string[] }>("/tags");
};
