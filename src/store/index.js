import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      sections: [
        {
          id: 0,
          order: 0,
          name: 'Section example',
          content: [
            { id: 0, order: 0, name: 'UK Shoe Size' },
            { id: 1, order: 1, name: 'US Shoe Size' },
          ],
        },
        { id: 1, order: 1, name: 'Fila', content: [{ id: 0, order: 0, name: 'US Shoe Size' }] },
        {
          id: 2,
          order: 2,
          name: 'K-Swiss',
          content: [
            { id: 0, order: 0, name: 'UK Shoe Size' },
            { id: 1, order: 1, name: 'US Shoe Size' },
            { id: 2, order: 2, name: 'Eur Shoe Size' },
          ],
        },
      ],
    }
  },
  mutations: {
    updateSection(state, el) {
      console.log(state.sections)
    },
  },
})

export default store
