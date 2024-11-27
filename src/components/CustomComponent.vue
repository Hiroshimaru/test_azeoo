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
        <div class="component__container row handle drag-object">
          <div class="component__dragIcon">
            <i class="bi bi-grip-vertical" />
          </div>
          <p v-if="content.type === 'tierlist'">{{ content.title }}</p>
          <i
            class="bi bi-three-dots-vertical component__modifyIcon"
            @click="(event) => togglePopover(event, index)"
          ></i>
          <Popover ref="op" class="p-0">
            <div
              class="row px-3 pt-0 pb-2 border-bottom popover__btn"
              data-toggle="modal"
              data-target="#componentModal"
              @click="modifyComponent(content, index)"
            >
              Modifier
            </div>
            <div class="row px-3 pb-0 pt-2 popover__btn" @click="deleteComponent(content, index)">
              Supprimer
            </div>
          </Popover>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Popover from 'primevue/popover'

export default {
  name: 'customComponent',
  props: {
    brand: {
      type: Object,
    },
    type: {
      type: String,
    },
    indexSection: {
      type: Number,
    },
  },
  components: {
    Popover,
    draggable,
  },
  methods: {
    togglePopover(event, index) {
      this.$refs.op.toggle(event)
      this.$store.commit('updateActiveSection', this.indexSection)
      this.$store.commit('updateActiveComponent', index)
    },
    modifyComponent(content) {
      console.log(this.$store.state.activeSection)
      console.log(this.$store.state.activeComponent)
      this.$store.commit(
        'updateActiveModal',
        this.$store.state.customSections[this.$store.state.activeSection].content[
          this.$store.state.activeComponent
        ],
      )
      this.$store.commit('updateModalType', 'modify')
    },
    deleteComponent(content, index) {
      this.$store.commit('deleteComponent', content)
    },
  },
}
</script>

<style scoped lang="scss">
.component {
  &__container {
    background: rgb(255, 255, 255);
    position: relative;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 4px 0;

    &:hover {
      cursor: grab;
    }
  }

  &__dragIcon {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 2px;
  }

  &__modifyIcon {
    cursor: pointer;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 2px;
  }
}

.popover {
  &__btn {
    cursor: pointer;
  }
}
</style>
