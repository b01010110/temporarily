<template>
  <div class="range-input">
    <UITextField v-model="valueFromInput" class="range-input__textfield" />
    <UITextField v-model="valueToInput" class="range-input__textfield" />
    <VRangeSlider
      :model-value="[valueFrom, valueTo]"
      :step="step"
      :min="min"
      :max="max"
      class="range-input__slider"
      :ripple="false"
      hide-details
      @update:model-value="updateRangeSlider"
    />
    <div class="range-input__labels">
      <div>{{ labelFrom }}</div>
      <div>{{ labelTo }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import numeral from 'numeral'
import { debounce } from 'lodash-es'
import type { RangeInput } from '@/shared/interfaces/RangeInput'

const valueFrom = defineModel<number>('valueFrom', { required: true })
const valueTo = defineModel<number>('valueTo', { required: true })

const props = withDefaults(defineProps<RangeInput>(), {
  size: 'default',
})

const valueFromCheckDebounced = debounce(valueFromCheck, 2000)
const valueToCheckDebounced = debounce(valueToCheck, 2000)

const valueFromInput = computed({
  get() {
    return format(valueFrom.value)
  },
  set(newValue) {
    valueFrom.value = unformat(newValue)
  },
})

const valueToInput = computed({
  get() {
    return format(valueTo.value)
  },
  set(newValue) {
    valueTo.value = unformat(newValue)
  },
})

watch(valueFrom, () => {
  valueFromCheckDebounced()

  if (valueFrom.value > valueTo.value) {
    valueTo.value = valueFrom.value
  }
})

watch(valueTo, () => {
  valueToCheckDebounced()

  if (valueTo.value < valueFrom.value) {
    valueFrom.value = valueTo.value
  }
})

function updateRangeSlider(value: [number, number]) {
  valueFrom.value = value[0]
  valueTo.value = value[1]
}

function valueFromCheck() {
  if (valueFrom.value > props.max) valueFrom.value = props.max
  if (valueFrom.value < props.min) valueFrom.value = props.min
}

function valueToCheck() {
  if (valueTo.value > props.max) valueTo.value = props.max
  if (valueTo.value < props.min) valueTo.value = props.min
}

function format(value: number) {
  const val = value.toString().replace(/[^\d]/g, '')
  return numeral(val).format('0,0').replaceAll(',', ' ')
}

function unformat(value: string) {
  let val = value.replace(/[^\d]/g, '')
  val = val === '' ? '0' : val
  return parseInt(val)
}
</script>

<style scoped lang="scss">
.range-input {
  display: flex;
  position: relative;

  &__textfield {
    position: relative;

    &:nth-of-type(2) {
      margin-left: -1px;
    }

    &:hover {
      z-index: 1;
    }
  }

  &__slider {
    position: absolute;
    bottom: 0;
    left: -8px;
    right: -8px;
    translate: 0px calc(50% - 1px);
    z-index: 2;

    &.v-input :deep(.v-input__control) {
      min-height: 12px;
    }

    &.v-slider {
      :deep(.v-slider-track) {
        height: 2px;
        --v-slider-track-size: 2px !important;
      }

      :deep(.v-slider-track__background) {
        background-color: $border-form;
        opacity: 1;
      }

      :deep(.v-slider-track__fill) {
        background-color: $primary--lighten-1;
      }

      :deep(.v-slider-thumb) {
        --v-slider-thumb-size: 12px !important;
        color: $primary;

        .v-slider-thumb__surface::after {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  &__labels {
    position: absolute;
    bottom: -17px;
    left: 0px;
    right: 0px;
    display: flex;
    justify-content: space-between;
    @include form__text--md;
    font-size: 12px;
    color: $text--lighten-2;
  }
}
</style>
