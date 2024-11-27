<template>
  <div class="p-2">
    <Modals />

    <h1>Test Azeoo</h1>
    <div class="row">
      <div class="col-6">
        <CustomSections :list="$store.state.customSections"></CustomSections>
      </div>
      <div class="col-6">
        <Preview />
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
  methods: {},
}
</script>
