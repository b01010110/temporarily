<template>
  <VAppBar class="e-header" flat height="72">
    <VContainer class="e-header__contaier">
      <slot />
    </VContainer>
  </VAppBar>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.e-header {
  &.v-app-bar {
    background-color: $primary--lighten-7;
  }

  :deep(.v-toolbar__content) {
    padding-top: 12px;

    &::before {
      position: absolute;
      top: 0px;
      content: '';
      display: block;
      width: 100%;
      height: 12px;
      background-color: $white;
    }
  }

  &__contaier {
    display: flex;
    align-items: center;
    padding: 0px 12px;
  }
}
</style>
