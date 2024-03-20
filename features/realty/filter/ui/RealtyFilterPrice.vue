<template>
  <UILabel label="Стоимость, ₽">
    <UIRangeInput
      :value-from="valueFrom"
      :value-to="valueTo"
      :min="900000"
      :max="54400000"
      :step="100000"
      label-from="0.9 млн. ₽"
      label-to="54.4 млн. ₽"
    />
  </UILabel>
</template>

<script setup lang="ts">
const valueFrom = ref(900000)
const valueTo = ref(54400000)
</script>

<style scoped lang="scss"></style>
