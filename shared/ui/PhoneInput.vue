<template>
  <ClientOnly>
    <MazPhoneNumberInput
      v-model="phone"
      class="phone-input"
      country-locale="ru-RU"
      :class="[`phone-input-size--${size}`]"
      :default-country-code="defaultCountryCode"
      :default-phone-number="phone"
      :translations="translations"
      :only-countries="onlyCountries"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import type { CountryCode } from 'maz-ui/components/MazPhoneNumberInput'
import type { PhoneInput } from '@/shared/interfaces/PhoneInput'

withDefaults(defineProps<PhoneInput>(), {
  size: 'default',
})

const defaultCountryCode = 'RU'

const onlyCountries: CountryCode[] = ['RU', 'BY', 'KZ', 'KG', 'TJ', 'UZ']

const translations = {
  countrySelector: {
    placeholder: 'Код страны',
    error: 'Выберите страну',
    searchPlaceholder: 'Поиск страны',
  },
  phoneInput: {
    placeholder: 'Номер телефона',
    example: 'Пример:',
  },
}

const phone = ref()
</script>

<style scoped lang="scss">
.phone-input {
  --maz-border-width: 1px;
  --maz-border-radius: 0px;

  &.phone-input-size--small :deep(.m-input) {
    height: 34px;
  }

  &.phone-input-size--default :deep(.m-input) {
    height: 38px;
  }

  &.phone-input-size--large :deep(.m-input) {
    height: 42px;
  }

  :deep(.m-phone-number-input__country-flag) {
    left: 6px;
  }

  :deep(.m-phone-number-input__select) {
    width: 100px !important;

    .m-select-list {
      min-width: 250px;
    }

    .m-select-list__scroll-wrapper {
      scrollbar-width: thin;
      scrollbar-color: $grey--darken-2 #fff;
    }

    & > .m-input > .m-input-wrapper {
      border-color: $border-form;

      .m-input-label {
        left: 6px;
        @include form__text--md;
        font-size: 12px;
        color: $text;
        transform: translateY(-0.65em);
      }

      .m-input-input {
        padding-left: 28px !important;
        padding-bottom: 4px;
        @include form__text--md;
        font-size: 14px;
        color: $text;
      }
    }

    .m-select-input__toggle-button svg {
      font-size: 20px;
      color: $border-form;
    }

    &:hover {
      & > .m-input > .m-input-wrapper {
        z-index: 3;
        border-color: $primary--lighten-2;
      }

      .m-select-input__toggle-button svg {
        color: $primary--lighten-2;
      }
    }

    &.--is-open {
      & > .m-input > .m-input-wrapper {
        border-color: $primary;
      }

      .m-select-input__toggle-button svg {
        color: $primary;
      }
    }
  }

  :deep(.m-phone-number-input__input) {
    .m-input-wrapper {
      margin-left: -1px;
      border-color: $border-form;

      .m-input-label {
        left: 16px;
        @include form__text--md;
        color: $text--lighten-2;
      }

      .m-input-input {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 4px;
        color: $text;
      }
    }

    &:hover {
      .m-input-wrapper {
        border-color: $primary--lighten-2;
      }
    }

    &.--focused .m-input-wrapper {
      border-color: $primary;
    }
  }

  &.phone-input-size--small :deep(.m-phone-number-input__input) {
    .m-input-wrapper .m-input-input {
      @include form__text--sm;
    }
  }

  &.phone-input-size--default :deep(.m-phone-number-input__input) {
    .m-input-wrapper .m-input-input {
      @include form__text--md;
    }
  }

  &.phone-input-size--large :deep(.m-phone-number-input__input) {
    .m-input-wrapper .m-input-input {
      @include form__text--lg;
    }
  }
}
</style>
