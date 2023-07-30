<script setup lang="ts">
import { computed, ref } from 'vue'
import ArticlePreview from './ArticlePreview.vue'
import ArticlePagination from './ArticlePagination.vue'
import { getArticles } from '@/api'

import { PAGE_SIZE_LIMIT } from '@/constants'

const currentPage = ref(1)

const { data } = getArticles({ page: currentPage })

const total = computed(() => {
  if (!data.value)
    return 0

  return Math.ceil(data.value.articlesCount / PAGE_SIZE_LIMIT)
})
</script>

<template>
  <template v-if="data">
    <ArticlePreview
      v-for="item of data.articles"
      :key="item.slug"
      :article="item"
    />
    <ArticlePagination v-model:current="currentPage" :total="total" />
  </template>
</template>
