import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      activeSection: 0,
      activeComponent: 0,
      customSections: [
        {
          name: 'Section',
          content: [
            { type: 'tierlist', rank: 'S', title: 'S tier' },
            { type: 'tierlist', rank: 'A', title: 'A tier' },
            { type: 'tierlist', rank: 'B', title: 'B tier' },
          ],
        },
        {
          name: 'Section',
          content: [],
        },
      ],
      modal: {},
    }
  },
  mutations: {
    updateActiveSection(state, index) {
      state.activeSection = index
    },
    updateActiveComponent(state, index) {
      state.activeComponent = index
    },
    updateActiveModal(state, content) {
      state.modal = content
    },
    addComponent(state, el) {
      state.customSections[state.activeSection].content.push(el)
    },
    deleteComponent(state, el) {
      console.log(state.customSections[state.activeSection].content)
      state.customSections[state.activeSection].content.splice(state.activeComponent, 1)
      console.log(state.customSections[state.activeSection].content)
    },
  },
})

export default store