<template>
  <UIButton nuxt-icon="filter" @click="close">Применить</UIButton>
</template>

<script setup lang="ts">
import { useRealtyFilterStore } from '@/entities/realty/stores/filter'

const realtyFilterStore = useRealtyFilterStore()
const { close } = realtyFilterStore
</script>

<style scoped lang="scss"></style>
