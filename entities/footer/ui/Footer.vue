<template>
  <VFooter class="e-footer" app absolute style="z-index: 1006">
    <div class="e-footer__copyright">Проверенные Новостройки «Новосел» © 2023 г.</div>
    <div class="e-footer__policy">
      <NuxtLink to="/policy">Политика конфиденциальности</NuxtLink>
    </div>
  </VFooter>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.e-footer {
  flex-direction: column;
  padding: 8px 12px;
  background-color: $primary--lighten-7;

  &__copyright {
    @include text;
    line-height: 100%;
    font-size: 14px;
    color: $text;
  }

  &__policy {
    margin-top: 4px;
    @include text;
    line-height: 100%;
    font-size: 14px;
    color: $text;

    a {
      color: $text;
    }
  }
}
</style>
