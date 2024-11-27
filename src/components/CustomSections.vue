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
          <!-- Dragdrop icon -->
          <span class="section__title" v-html="type" />
          <div class="section__dragIcon">
            <i class="bi bi-grip-vertical" />
          </div>

          <!-- Settings icon -->
          <i
            class="bi bi-three-dots-vertical section__deleteIcon"
            @click="(event) => togglePopover(event, index)"
          ></i>
          <Popover ref="op" class="p-0">
            <div class="row px-3 p-0 popover__btn" @click="deleteSection(index)">Supprimer</div>
          </Popover>

          <!-- Content -->
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
import Popover from 'primevue/popover'

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
    Popover,
    draggable,
    CustomComponent,
  },
  methods: {
    togglePopover(event, index) {
      this.$store.commit('updateActiveSection', index)
      this.$refs.op.toggle(event)
    },
    activeModal(index) {
      this.$store.commit('updateActiveSection', index)
      this.$store.commit('updateModalType', 'create')
    },
    deleteSection() {
      this.$store.commit('deleteSection')
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

  &__deleteIcon {
    position: absolute;
    cursor: pointer;
    top: 0.5vw;
    right: 0vw;

    @media (min-width: 767px) {
      top: 4px;
      right: 4px;
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
