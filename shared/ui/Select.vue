<template>
  <VSelect
    class="select"
    :class="[`select-size--${size}`]"
    menu-icon="mdi-chevron-down"
    variant="outlined"
    hide-details="auto"
  >
    <template v-if="$attrs.multiple !== undefined" #item="{ props }">
      <VListItem v-bind="props" class="select__item-checkbox">
        <template #prepend="{ isActive }">
          <VListItemAction start>
            <UICheckbox :model-value="isActive" />
          </VListItemAction>
        </template>
      </VListItem>
    </template>

    <template v-else #item="{ props }">
      <VListItem v-bind="props" class="select__item" />
    </template>
  </VSelect>
</template>

<script setup lang="ts">
import type { Select } from '@/shared/interfaces/Select'

withDefaults(defineProps<Select>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.select {
  :deep(.v-field__input) {
    opacity: 1;

    input {
      color: $text;

      &::placeholder {
        color: $text--lighten-2;
        opacity: 1;
      }

      &:disabled {
        color: $disabled;

        &::placeholder {
          color: $disabled;
        }
      }
    }
  }

  &.select-size--small {
    :deep(.v-field__input) {
      --v-input-control-height: 34px;
      --v-field-input-padding-top: 9px;
      --v-field-input-padding-bottom: 8px;
      min-height: 34px;

      .v-select__selection-text {
        @include form__text--sm;
        color: $text;
      }
    }

    :deep(.v-field) {
      --v-field-padding-start: 16px;
      --v-field-padding-end: 16px;
    }

    :deep(.v-field__input input) {
      @include form__text--sm;
    }
  }

  &.select-size--default {
    :deep(.v-field__input) {
      --v-input-control-height: 38px;
      --v-field-input-padding-top: 10px;
      --v-field-input-padding-bottom: 10px;
      min-height: 38px;

      .v-select__selection-text {
        @include form__text--md;
        color: $text;
      }
    }

    :deep(.v-field) {
      --v-field-padding-start: 16px;
      --v-field-padding-end: 16px;
    }

    :deep(.v-field__input input) {
      @include form__text--md;
    }
  }

  &.select-size--large {
    :deep(.v-field__input) {
      --v-input-control-height: 42px;
      --v-field-input-padding-top: 12px;
      --v-field-input-padding-bottom: 12px;
      min-height: 42px;

      .v-select__selection-text {
        @include form__text--lg;
        color: $text;
      }
    }

    :deep(.v-field) {
      --v-field-padding-start: 16px;
      --v-field-padding-end: 16px;
    }

    :deep(.v-field__input input) {
      @include form__text--lg;
    }
  }

  :deep(.v-select__menu-icon) {
    opacity: 1;
    font-size: 24px;
    color: $border-form;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :deep(.v-field:hover .v-select__menu-icon) {
    color: $primary--lighten-2;
  }

  :deep(.v-field.v-field--focused .v-select__menu-icon) {
    color: $primary;
  }

  :deep(.v-field.v-field--focused:hover .v-select__menu-icon) {
    color: $primary;
  }

  :deep(.v-field) {
    --v-disabled-opacity: 1;
    --v-field-padding-start: 16px;
    --v-field-padding-end: 16px;
    background-color: $white;
    border-radius: 0px;
  }

  :deep(.v-field--prepended) {
    padding-inline-start: 16px;
  }

  :deep(.v-field__outline) {
    --v-field-border-width: 1px;
    --v-field-border-opacity: 1;
    color: $border-form;
  }

  :deep(.v-field--disabled .v-field__outline) {
    color: $disabled;
  }

  :deep(.v-field--focused .v-field__outline) {
    --v-field-border-width: 1px;
    color: $primary;
  }

  :deep(.v-field.v-field--focused:hover .v-field__outline) {
    --v-field-border-width: 1px;
    color: $primary;
  }

  :deep(.v-field:hover .v-field__outline) {
    --v-field-border-width: 1px;
    color: $primary--lighten-2;
  }

  :deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
    color: $error;
  }

  &__item.v-list-item {
    padding: 6px 12px;
    min-height: initial;
    @include form__text--md;
    color: $text;

    &.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
      padding-inline: 12px;
    }

    &.v-list-item--active > :deep(.v-list-item__overlay),
    &.v-list-item--active:hover > :deep(.v-list-item__overlay) {
      background-color: $primary--lighten-7;
    }

    > :deep(.v-list-item__overlay) {
      opacity: 1;
      background-color: transparent;
    }

    > :deep(.v-list-item__content) {
      z-index: 1;
    }

    &:hover {
      > :deep(.v-list-item__overlay) {
        background-color: $hover-bg;
      }
    }
  }

  &__item-checkbox.v-list-item {
    padding: 2px 12px 2px 9px;
    min-height: initial;
    @include form__text--md;
    color: $text;

    &.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
      padding-inline-start: 9px;
      padding-inline-end: 12px;
    }

    &.v-list-item--active > :deep(.v-list-item__overlay),
    &.v-list-item--active:hover > :deep(.v-list-item__overlay) {
      background-color: $primary--lighten-7;
    }

    > :deep(.v-list-item__overlay) {
      opacity: 1;
      background-color: transparent;
    }

    > :deep(.v-list-item__content) {
      z-index: 1;
    }

    &:hover {
      > :deep(.v-list-item__overlay) {
        background-color: $hover-bg;
      }
    }

    .v-list-item-action--start {
      margin-inline-end: 5px;
    }

    .checkbox.checkbox-size--default :deep(.v-selection-control__wrapper) {
      margin-right: 0px;
    }
  }
}
</style>

<style lang="scss">
.v-menu > .v-overlay__content.v-select__content {
  border: 1px solid $border;
  border-radius: 0px 0px 6px 6px;
  box-shadow: none;

  .v-list {
    padding: 5px 0px;

    scrollbar-width: thin;
    scrollbar-color: $grey--darken-2 #fff;
  }

  .v-list-item-title {
    @include form__text--md;
    color: $text;
  }
}
</style>
