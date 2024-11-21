import draggable from 'vuedraggable'
import nestedDraggable from './components/nested.vue'

let id = 1

export default {
  name: 'two-list-headerslots',
  order: 14,
  components: {
    draggable,
    nestedDraggable,
  },
  data() {
    return {
      list: [
        {
          name: 'John 1',
          id: 0,
        },
        {
          name: 'Joao 2',
          id: 1,
        },
        {
          name: 'Jean 3',
          id: 2,
        },
      ],
      list2: [
        {
          name: 'Jonny 4',
          id: 3,
        },
        {
          name: 'Guisepe 5',
          id: 4,
        },
      ],
      tasks: [
        {
          name: 'task 1',
          tasks: [
            {
              name: 'task 2',
              tasks: [],
            },
          ],
        },
        {
          name: 'task 3',
          tasks: [
            {
              name: 'task 4',
              tasks: [],
            },
          ],
        },
      ],
    }
  },
  methods: {},
}
