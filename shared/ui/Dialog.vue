<template>
  <VDialog v-model="model" class="dialog" :fullscreen="xs">
    <div class="dialog__container">
      <UICloseButton class="dialog__close" :size="size" @click="close" />
      <div v-if="title" class="dialog__title">{{ title }}</div>
      <div class="dialog__content">
        <slot />
      </div>
    </div>
  </VDialog>
</template>

<script setup lang="ts">
import type { Dialog } from '@/shared/interfaces/Dialog'

withDefaults(defineProps<Dialog>(), {
  title: '',
})

const model = defineModel<boolean>({ default: false })

const { xs } = useDisplay()

const size = computed(() => {
  return xs.value ? 'small' : 'default'
})

function close() {
  model.value = false
}
</script>

<style scoped lang="scss">
.dialog {
  :deep(.v-overlay__content) {
    max-height: calc(100% - 0px);
    width: calc(100% - 0px);
    margin: 0px;
    max-width: 800px;

    @include breakpoint('sm') {
      max-width: 576px;
    }
  }

  &__container {
    position: relative;
    background-color: $white;
    border-radius: 10px;
    min-height: 100px;
    height: 100%;

    @include breakpoint('xs') {
      border-radius: 0px;
    }
  }

  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  &__title {
    margin: 16px 0px 0px 16px;
    @include text;
    line-height: 100%;
    font-size: 24px;
    font-weight: 500;
    color: $text;

    @include breakpoint('sm') {
      font-size: 22px;
    }

    @include breakpoint('xs') {
      margin: 14px 0px 0px 12px;
      font-size: 20px;
    }
  }

  &__content {
    margin-top: 12px;
  }
}
</style>
