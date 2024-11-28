<template>
  <div>
    <draggable
      v-bind:mainType="brand.name"
      :list="brand.content"
      item-key="size-class"
      class="list-group"
      group="a"
      @start="dragging2 = true"
      @end="dragging2 = false"
      :animation="150"
    >
      <template #item="{ element: content, index, mainType }">
        <div class="component__container row handle drag-object">
          <!-- Drag icon -->
          <div class="component__dragIcon">
            <i class="bi bi-grip-vertical" />
          </div>

          <!-- Content -->
          <div class="d-flex align-items-center">
            <p class="mr-2">{{ content.title }}</p>
            <Badge
              v-if="content.type === 'tierlist'"
              value="Tier list"
              size="small"
              severity="warn"
            ></Badge>
            <Badge v-if="content.type === 'item'" value="Item" size="small" severity="info"></Badge>
          </div>

          <!-- Settings -->
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
import Badge from 'primevue/badge'

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
    Badge,
  },
  methods: {
    togglePopover(event, index) {
      this.$refs.op.toggle(event)
      this.$store.commit('updateActiveSection', this.indexSection)
      this.$store.commit('updateActiveComponent', index)
    },
    modifyComponent(content) {
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
</style>
