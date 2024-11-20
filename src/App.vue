<template>
  <div class="app">
    <VueDraggable ref="el" :animation="150" v-model="list">
      <div v-for="item in list" :key="item.id" class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        {{ item.name }}
      </div>
    </VueDraggable>
  </div>
</template>

<style scoped lang="scss" src="./App.scss"></style>
<script setup lang="ts">
  import { ref } from 'vue'
  import { VueDraggable } from 'vue-draggable-plus'
  
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  const list = ref([
    {
      name: 'Joao',
      id: 1
    },
    {
      name: 'Jean',
      id: 2
    },
    {
      name: 'Johanna',
      id: 3
    },
    {
      name: 'Juan',
      id: 4
    }
  ])
</script>