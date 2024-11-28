import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      view: 'backoffice',
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
          content: [{ type: 'item', title: 'item' }],
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
    addSection(state) {
      state.customSections.push({
        name: 'Section',
        content: [],
      })
    },
    modifyComponent(state, el) {
      state.customSections[state.activeSection].content[state.activeComponent] = el
    },
    deleteComponent(state, el) {
      state.customSections[state.activeSection].content.splice(state.activeComponent, 1)
    },
    deleteSection(state, index) {
      state.customSections.splice(state.activeSection, 1)
    },
    changeView(state, el) {
      state.view = el
    },
  },
})

export default store
