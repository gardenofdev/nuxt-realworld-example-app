<script setup lang="ts">
import { getPopularTags } from "@/api";

const { data } = await getPopularTags();
</script>
<template>
  <div class="sidebar">
    <p>Popular Tags</p>

    <div class="tag-list" v-if="data && data.tags">
      <NuxtLink
        :to="`/tag/${item}`"
        class="tag-pill tag-default"
        v-for="(item, index) in data.tags"
        :key="index"
      >
        {{ item }}
      </NuxtLink>
    </div>
  </div>
</template>
