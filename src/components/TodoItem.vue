<template>
  <div class="textBoxs">
    <p :class="{'is_comlete': todo.completed}">
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
    </p>
    <button @click="$emit('del-todo', todo.id)" class="delete">X</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style lang="scss">
.textBoxs {
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  .delete {
   margin: 15px 5px;
   cursor: pointer;
  }
  .is_comlete {
  //border: 1px solid green;
  text-decoration: line-through;
}
}


</style>