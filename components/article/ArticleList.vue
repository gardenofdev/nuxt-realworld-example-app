<script setup lang="ts">
import { getArticles } from "@/api/articles";
</script>
<template>
  <ArticlePreview :article="item" v-for="item of data.articles" />
  <ArticlePagination />
</template>
