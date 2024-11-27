<template>
  <div v-for="section in $store.state.customSections" class="my-2">
    <div v-for="component in section.content">
      <div v-if="component.type === 'tierlist'" class="tierList__container">
        <div class="tierList__rank__container">
          <div class="tierList__rank__rank" :class="component.rank">
            {{ component.rank }}
          </div>
          <div class="tierList__rank__title">{{ component.title }}</div>
        </div>
        <div class="tierList__content"></div>
      </div>
      <div v-if="component.type === 'item'" class="item__container"></div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Component from './CustomComponent.vue'

export default {
  name: 'preview',
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
}
</script>

<style scoped lang="scss">
.tierList {
  &__container {
    position: relative;
  }

  &__rank {
    &__container {
      position: relative;
      width: 75px;
      height: 75px;
    }
    &__rank {
      color: rgba(0, 0, 0, 0.137);
      font-weight: bold;
      font-size: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      &.S {
        background: rgb(230, 64, 64);
      }
      &.A {
        background: rgb(230, 158, 64);
      }
      &.B {
        background: rgb(172, 230, 64);
      }
      &.C {
        background: rgb(64, 230, 119);
      }
      &.D {
        background: rgb(64, 230, 194);
      }
      &.E {
        background: rgb(64, 141, 230);
      }
    }

    &__title {
      position: absolute;
      font-weight: bold;
      color: white;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
