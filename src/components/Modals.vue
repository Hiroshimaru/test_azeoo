<template>
  <div
    class="modal fade"
    id="componentModal"
    tabindex="-1"
    aria-labelledby="componentModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Section</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label>Type de composant</label>
          <Select
            v-model="selectedType"
            :options="type"
            option-label="name"
            option-value="code"
            placeholder="Selectionner un type"
            class="w-full md:w-56"
            fluid
          />
          <div v-if="selectedType === 'tierlist'">
            <label class="mt-2">Rang</label>
            <Select
              v-model="selectedRank"
              :options="rank"
              option-label="name"
              option-value="code"
              placeholder="Selectionner un rang"
              class="w-100 md:w-56"
              fluid
            />
            <label class="mt-2 d-block">Texte</label>
            <InputText class="w-100 md:w-56" type="text" v-model="tierlistText" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn border border-2" data-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
            @click="addComponent()"
          >
            Ajouter composant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../../node_modules/bootstrap-vue/src/index.scss';

.select {
  &__container {
    border: none;
  }
}
.p-select-overlay {
  z-index: 100000 !important;
}
</style>
<script>
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'

export default {
  name: 'modals',
  components: {
    Select,
    InputText,
  },
  data() {
    return {
      tierlistText: '',
      selectedType: null,
      type: [
        { name: 'Tier list', code: 'tierlist' },
        { name: 'Content', code: 'content' },
      ],
      selectedRank: null,
      rank: [
        { name: 'S tier', code: 'S' },
        { name: 'A tier', code: 'A' },
        { name: 'B tier', code: 'B' },
        { name: 'C tier', code: 'C' },
        { name: 'D tier', code: 'D' },
        { name: 'E tier', code: 'E' },
      ],
    }
  },
  props: {},
  methods: {
    addComponent() {
      this.$store.commit('addComponent', {
        type: this.selectedType,
        rank: this.selectedRank,
        title: this.tierlistText,
      })
    },
  },
}
</script>
