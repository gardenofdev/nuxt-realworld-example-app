<script setup lang="ts">
import { getArticles } from "@/api/articles";

const { data } = getArticles();
</script>
<template>
  <ArticlePreview :article="item" v-for="item of data.articles" />
  <ArticlePagination />
</template>
