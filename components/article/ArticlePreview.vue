<script setup lang="ts">
import type { Article } from '@/types'

const props = defineProps<{ article: Article }>()
</script>

<template>
  <div class="article-preview">
    <div class="article-meta">
      <NuxtLink :to="`/profile/${props.article.author.username}`">
        <img :src="props.article.author.image">
      </NuxtLink>
      <div class="info">
        <NuxtLink
          :to="`/profile/${props.article.author.username}`"
          class="author"
        >
          {{ props.article.author.username }}
        </NuxtLink>
        <span class="date">{{ props.article.updatedAt }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart" /> {{ props.article.favoritesCount }}
      </button>
    </div>
    <NuxtLink :to="`/article/${props.article.slug}`" class="preview-link">
      <h1>{{ props.article.title }}</h1>
      <p>{{ props.article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li
          v-for="tag of props.article.tagList"
          :key="tag"
          class="tag-default tag-pill tag-outline"
        >
          {{ tag }}
        </li>
      </ul>
    </NuxtLink>
  </div>
</template>
