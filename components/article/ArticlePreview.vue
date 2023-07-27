<script setup lang="ts">
import type { Article } from "@/types";

const props = defineProps<{ article: Article }>();
</script>
<template>
  <div class="article-preview">
    <div class="article-meta">
      <a :href="`/profile/${props.article.author.username}`">
        <img :src="props.article.author.image" />
      </a>
      <div class="info">
        <a :href="`/profile/${props.article.author.username}`" class="author">
          {{ props.article.author.username }}
        </a>
        <span class="date">{{ props.article.updatedAt }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ props.article.favoritesCount }}
      </button>
    </div>
    <a href="/article/how-to-build-webapps-that-scale" class="preview-link">
      <h1>{{ props.article.title }}</h1>
      <p>{{ props.article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li
          class="tag-default tag-pill tag-outline"
          v-for="tag of props.article.tagList"
        >
          {{ tag }}
        </li>
      </ul>
    </a>
  </div>
</template>
