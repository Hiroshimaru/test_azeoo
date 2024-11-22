<template>
  <div>
    <draggable
      v-bind:mainType="brand.name"
      :list="brand.content"
      item-key="size-class"
      class="list-group"
      ghost-class="ghost"
      handle=".handle"
      group="a"
      @start="dragging2 = true"
      @end="dragging2 = false"
      :animation="150"
    >
      <template #item="{ element: content, index, mainType }">
        <div class="list-group-item size-classes-bar">
          <div class="row handle drag-object">
            inform: {{ mainType }} ,ID: {{ content.id }} , Name: {{ content.name }}
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'section',
  props: {
    brand: {
      type: Object,
    },
    type: {
      type: String,
    },
  },
  components: {
    draggable,
  },
}
</script>

<style scoped lang="scss">
.component {
  &__container {
    background: rgb(235, 235, 235);
    position: relative;
    padding: 3vw;
    margin: 10px 0;
    border-radius: 10px;
  }

  &__dragIcon {
    position: absolute;
    top: 0.5vw;
    left: 0vw;
  }
}
</style>
