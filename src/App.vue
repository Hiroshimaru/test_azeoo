<template>
  <div class="p-2">
    <Modals />
    <div class="p-0 px-md-3 d-flex align-items-center justify-content-between col-md-6">
      <h1 class="app__title">Test Azeoo</h1>
      <button class="addSection" type="button" @click="addSection()">
        <i class="bi bi-plus"></i>
        Ajouter une section
      </button>
    </div>
    <div class="row">
      <div class="col-md-6">
        <CustomSections :list="$store.state.customSections" />
      </div>
      <div class="preview__container">
        <div class="preview__content">
          <Preview />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./App.scss"></style>
<script>
import draggable from 'vuedraggable'
import CustomSections from './components/CustomSections.vue'
import Preview from './components/Preview.vue'
import nestedDraggable from './components/nested.vue'
import Modals from './components/Modals.vue'

export default {
  name: 'app',
  components: {
    CustomSections,
    Preview,
    draggable,
    nestedDraggable,
    Modals,
  },
  data() {
    return {}
  },
  methods: {
    addSection() {
      this.$store.commit('addSection')
    },
  },
}
</script>
