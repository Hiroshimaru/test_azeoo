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
          <CustomComponent :brand="brand" :indexSection="index" />

          <button
            class="section__plus"
            type="button"
            data-toggle="modal"
            data-target="#componentModal"
            @click="activeModal(index)"
          >
            <i class="bi bi-plus"></i>
            Ajouter un composant
          </button>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CustomComponent from './CustomComponent.vue'

export default {
  name: 'customSections',
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
    CustomComponent,
  },
  methods: {
    activeModal(index) {
      this.$store.commit('updateActiveSection', index)
      this.$store.commit('updateModalType', 'create')
    },
  },
}
</script>

<style scoped lang="scss">
.section {
  &__container {
    background: rgb(235, 235, 235);
    position: relative;
    padding: vw(30px) vw(12px) vw(15px);
    margin: vw(10px) 0;
    border-radius: vw(10px);

    @media (min-width: 767px) {
      padding: 30px 12px 15px;
      margin: 10px 0;
      border-radius: 10px;
    }

    &:hover {
      cursor: grab;
    }
  }

  &__dragIcon {
    position: absolute;
    top: 0.5vw;
    left: 0vw;

    @media (min-width: 767px) {
      top: 4px;
      left: 4px;
    }
  }

  &__title {
    position: absolute;
    top: vw(3px);
    left: vw(16px);

    @media (min-width: 767px) {
      top: 3px;
      left: 16px;
    }
  }

  &__plus {
    margin: vw(10px) 0 0 auto;
    border: none;
    font-size: vw(12px);
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: vw(4px);
    color: white;
    background-color: rgb(39, 177, 219);

    @media (min-width: 767px) {
      font-size: 12px;
      margin: 10px 0 0 auto;
      border-radius: 4px;
    }
  }
}
</style>
