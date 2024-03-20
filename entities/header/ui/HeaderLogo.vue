<template>
  <div class="header-logo">
    <NuxtLink to="/">
      <UILogo class="header-logo__logo" variation="dark" />
      <div class="header-logo__text">официальный партнёр</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header-logo {
  width: 150px;

  a {
    text-decoration: none;
  }

  &__text {
    margin-top: 4px;
    @include text;
    line-height: 100%;
    font-size: 14px;
    color: $text;
    text-align: center;
  }

  @include breakpoint('xs') {
    width: 130px;

    &__logo {
      width: 130px;
      height: 28px;
    }

    &__text {
      font-size: 12px;
    }
  }
}
</style>
