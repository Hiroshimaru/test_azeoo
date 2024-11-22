<template>
  <div class="p-2">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <h3>First draggable with header</h3>
    <Sections :list="$store.state.sections"></Sections>
  </div>
</template>
<style scoped lang="scss" src="./App.scss"></style>
<script>
import draggable from 'vuedraggable'
import Sections from './components/Sections.vue'
import nestedDraggable from './components/nested.vue'

export default {
  name: 'two-list-headerslots',
  order: 14,
  components: {
    Sections,
    draggable,
    nestedDraggable,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
