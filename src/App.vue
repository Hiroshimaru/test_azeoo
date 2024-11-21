<template>
  <div class="row">
    <div class="col-4">
      <h3>First draggable with header</h3>

      <draggable
        v-model="list"
        group="a"
        :animation="150"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
      aze
      <draggable
        v-model="list2"
        group="a"
        :animation="150"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
    </div>
    <h3>Nested draggable</h3>
    <nested-draggable :tasks="tasks" />
  </div>
</template>
<style scoped lang="scss" src="./App.scss"></style>
<script src="./App.js"></script>
