<script setup lang="ts">
import { getArticles } from "@/api/articles";

import ArticlePreview from "./ArticlePreview.vue";
import ArticlePagination from "./ArticlePagination.vue";
import { computed, ref } from "vue";
import { PAGE_SIZE_LIMIT } from "@/constants";

const currentPage = ref(1);

const { data } = getArticles({ page: currentPage });

const total = computed(() => {
  if (!data.value) {
    return 0;
  }
  return Math.ceil(data.value.articlesCount / PAGE_SIZE_LIMIT);
});
</script>
<template>
  <template v-if="data">
    <ArticlePreview :article="item" v-for="item of data.articles" />
    <ArticlePagination v-model:current="currentPage" :total="total" />
  </template>
</template>
