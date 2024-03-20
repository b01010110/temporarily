<template>
  <UILabel label="Площадь, м²">
    <UIRangeInput
      :value-from="valueFrom"
      :value-to="valueTo"
      :min="0"
      :max="200"
      :step="1"
      label-from="0м²"
      label-to="200м²"
    />
  </UILabel>
</template>

<script setup lang="ts">
const valueFrom = ref(0)
const valueTo = ref(200)
</script>

<style scoped lang="scss"></style>
