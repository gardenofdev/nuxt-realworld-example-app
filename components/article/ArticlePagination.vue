<script setup lang="ts">
const props = defineProps<{
  total: number;
  current: number;
}>();

const emit = defineEmits<{
  (e: "update:current", value: number): void;
}>();
</script>
<template>
  <ul class="pagination">
    <li
      class="page-item"
      :class="{ active: props.current === i }"
      v-for="i in props.total"
    >
      <a
        class="page-link"
        href=""
        @click.prevent="() => emit('update:current', i)"
      >
        {{ i }}
      </a>
    </li>
  </ul>
</template>
