<template>
  <draggable
    :list="lists"
    item-key="title"
    group="c"
    @start="dragging = true"
    @end="dragging = false"
  >
    <template #item="{ element: el, index }">
      <div class="tierList__container">
        <div class="tierList__rank__container">
          <div class="tierList__rank__rank" :class="el.rank">{{ el.rank }}</div>
          <div class="tierList__rank__title">{{ el.title }}</div>
        </div>
        <draggable
          :list="el.content"
          item-key="title"
          group="d"
          @start="dragging = true"
          @end="dragging = false"
        >
          <template #item="{ element: item, index }">
            <div class="item__container item__left">{{ item.title }}</div>
          </template>
        </draggable>
      </div>
    </template>
  </draggable>

  <div class="mt-2">
    <draggable
      :list="items"
      item-key="title"
      group="d"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element: item, index }">
        <div class="item__container">{{ item.title }}</div>
      </template>
    </draggable>
  </div>

  <button
    v-if="$store.state.view === 'backoffice'"
    class="seeFullView"
    @click="changeView('client')"
  >
    Voir page complète
  </button>
  <button v-else class="seeFullView" @click="changeView('backoffice')">
    Retourner sur le backoffice
  </button>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'preview',
  data() {
    return {
      lists: [],
      items: [],
    }
  },
  props: {
    type: {
      type: String,
    },
  },
  components: {
    draggable,
  },
  mounted() {
    let lists = localStorage.getItem('lists')
    if (lists) this.lists = JSON.parse(lists)
    let items = localStorage.getItem('items')
    if (items) this.items = JSON.parse(items)
    let customSections = localStorage.getItem('customSections')
    if (customSections) this.$store.state.customSections = JSON.parse(customSections)

    if (!lists && !items && !customSections) {
      this.getData(this.$store.state.customSections)
    }
  },
  computed: {
    customSections() {
      return this.$store.state.customSections
    },
  },
  watch: {
    customSections: {
      handler(newVal, oldVal) {
        localStorage.customSections = JSON.stringify(newVal)
        this.getData(newVal)
      },
      deep: true,
    },
  },
  methods: {
    getData(data) {
      this.lists = []
      this.items = []
      data.forEach((section) => {
        section.content.forEach((content) => {
          if (content.type === 'tierlist') {
            this.lists.push({
              type: 'tierlist',
              title: content.title,
              rank: content.rank,
              content: [],
            })
          }
          if (content.type === 'item') {
            this.items.push({
              type: 'item',
              title: content.title,
            })
          }
        })
      })
      localStorage.lists = JSON.stringify(this.lists)
      localStorage.items = JSON.stringify(this.items)
    },
    changeView(el) {
      this.$store.commit('changeView', el)
    },
  },
}
</script>

<style scoped lang="scss">
.tierList {
  &__container {
    position: relative;
    z-index: 1;
    background: rgb(231, 231, 231);
    width: 100%;
    height: 75px;
    border-top: 1px solid rgb(182, 182, 182);
  }

  &__rank {
    &__container {
      position: absolute;
      pointer-events: none;
      z-index: 1;
      width: 75px;
      height: 75px;
    }
    &__rank {
      color: rgba(0, 0, 0, 0.137);
      font-weight: bold;
      font-size: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      &.S {
        background: rgb(230, 64, 64);
      }
      &.A {
        background: rgb(230, 158, 64);
      }
      &.B {
        background: rgb(172, 230, 64);
      }
      &.C {
        background: rgb(64, 230, 119);
      }
      &.D {
        background: rgb(64, 230, 194);
      }
      &.E {
        background: rgb(64, 141, 230);
      }
    }

    &__title {
      position: absolute;
      font-weight: bold;
      color: white;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.item {
  &__container {
    background: rgb(139, 139, 139);
    border-radius: 5px;
    margin: 0 2px;
    cursor: pointer;
    position: relative;
    z-index: 10;
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  &__item {
    position: relative;
    width: 75px;
    height: 75px;
    background: rgb(226, 226, 226);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__left {
    left: 75px;
  }
}

.seeFullView {
  position: absolute;
  right: 50px;
  bottom: 50px;
  margin: 0;
  border: none;
  font-size: vw(12px);
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: vw(4px);
  color: white;
  background-color: rgb(39, 177, 219);

  @media (min-width: 767px) {
    font-size: 12px;
    margin: 10px 0 0 auto;
    border-radius: 4px;
  }
}
</style>
