<template>
  <nav class="header-menu">
    <NuxtLink v-for="item in items" :key="item.id" class="header-menu__link" :to="item.link">
      {{ item.text }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import type { HeaderMenu } from '@/entities/header/interfaces/HeaderMenu'
import type { MenuItem } from '@/shared/interfaces/Menu'

withDefaults(defineProps<HeaderMenu>(), {
  items: (): MenuItem[] => [],
})
</script>

<style scoped lang="scss">
.header-menu {
  display: flex;

  &__link {
    margin-right: 24px;
    @include menu-header;
    color: $text;
    text-decoration: none;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
