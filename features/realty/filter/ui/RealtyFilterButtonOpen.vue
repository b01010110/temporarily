<template>
  <UIButtonIcon icon="filter" @click="open" />
</template>

<script setup lang="ts">
import { useRealtyFilterStore } from '@/entities/realty/stores/filter'

const realtyFilterStore = useRealtyFilterStore()
const { open } = realtyFilterStore
</script>

<style scoped lang="scss"></style>
