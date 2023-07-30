<script setup lang="ts">
import { getPopularTags } from '@/api'

const { data } = await getPopularTags()
</script>

<template>
  <div class="sidebar">
    <p>Popular Tags</p>

    <div v-if="data && data.tags" class="tag-list">
      <NuxtLink
        v-for="(item, index) in data.tags"
        :key="index"
        :to="`/tag/${item}`"
        class="tag-pill tag-default"
      >
        {{ item }}
      </NuxtLink>
    </div>
  </div>
</template>
