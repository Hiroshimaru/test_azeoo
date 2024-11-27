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
      modalType: 'create',
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
    updateModalType(state, type) {
      state.modalType = type
    },
    addComponent(state, el) {
      state.customSections[state.activeSection].content.push(el)
    },
    modifyComponent(state, el) {
      state.customSections[state.activeSection].content[state.activeComponent] = el
    },
    deleteComponent(state, el) {
      state.customSections[state.activeSection].content.splice(state.activeComponent, 1)
    },
  },
})

export default store
