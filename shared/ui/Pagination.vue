<template>
  <VPagination class="pagination" />
</template>

<script setup lang="ts">
import type { Pagination } from '@/shared/interfaces/Pagination'

defineProps<Pagination>()
</script>

<style scoped lang="scss">
.pagination {
  :deep(.v-pagination__list) {
    .v-pagination__item,
    .v-pagination__first,
    .v-pagination__prev,
    .v-pagination__next,
    .v-pagination__last {
      margin: 0px 6px;
    }

    .v-pagination__item,
    .v-pagination__prev,
    .v-pagination__next {
      .v-btn {
        --v-btn-height: 20px;
        background-color: $white;
        border: 1px solid $border-form;
        border-radius: 6px;
        @include form__page;
        color: $text;
        text-transform: none;
        text-indent: initial;
        transition: none;

        &:hover {
          background-color: $primary--lighten-8;
        }

        &:active {
          box-shadow: inset 0px 4px 8px 0px rgba(0, 0, 0, 0.4);

          .v-btn__content {
            position: relative;
            top: -1px;
          }
        }

        .v-btn__overlay {
          display: none;
        }

        &.v-btn--disabled {
          opacity: 1;
          color: $disabled;
          border: 1px solid $disabled;
        }
      }

      &.v-pagination__item--is-active {
        .v-btn {
          background-color: $primary;
          color: $white;
        }
      }
    }

    .v-pagination__item .v-btn.v-btn--disabled {
      border: none;
    }
  }
}
</style>
