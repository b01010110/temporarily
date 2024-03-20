<template>
  <EntityHeader class="header">
    <UIMenuButton class="header__menu-button" />
    <EntityHeaderLogo class="header__logo" />
    <EntityHeaderMenu class="header__menu" :items="menuItems" />
    <VSpacer />
    <EntityHeaderContactInfo class="header__contact-info" :phone="phone" :worktime="worktime" />
  </EntityHeader>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/shared/stores/menu'
import { useContactInfoStore } from '@/shared/stores/contactInfo'

const menuStore = useMenuStore()
const { menuItems } = storeToRefs(menuStore)

const contactInfoStore = useContactInfoStore()
const { phone, worktime } = storeToRefs(contactInfoStore)
</script>

<style scoped lang="scss">
.header {
  &__menu {
    margin-left: 60px;
  }

  &__menu-button {
    display: none;
    margin-right: 8px;
  }

  @include breakpoint('lg') {
    &__menu {
      margin-left: 40px;
    }
  }

  @include breakpoint('md-and-down') {
    &__menu {
      display: none;
    }

    &__menu-button {
      display: block;
    }
  }
}
</style>
