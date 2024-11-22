<template>
  <div>
    <draggable
      :list="list"
      item-key="name"
      group="b"
      @start="dragging = true"
      @end="dragging = false"
      :animation="150"
    >
      <template #item="{ element: brand, index }">
        <div class="section__container">
          <span class="section__title" v-html="type" />
          <div class="section__dragIcon">
            <i class="bi bi-grip-vertical" />
          </div>
          <span class="section__title" v-html="brand.name" />
          <div class="row handle drag-object">
            <div class="row">
              <Component :brand="brand" />
            </div>
          </div>
          <div class="position-absolute" @click="addComponent()">
            <i class="bi bi-plus"></i>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Component from './Component.vue'

export default {
  name: 'section',
  props: {
    list: {
      type: Array,
    },
    type: {
      type: String,
    },
  },
  components: {
    draggable,
    Component,
  },
  methods: {
    addComponent() {
      this.$store.commit('updateSection', 10)
      console.log(this.$store.state.count)
    },
  },
}
</script>

<style scoped lang="scss">
.section {
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

  &__title {
    position: absolute;
    top: 2px;
    left: 2.4vw;
  }
}
</style>
