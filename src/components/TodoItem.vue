<template>
  <div class="textBoxs">
    <p :class="{'is_comlete': todo.completed}">
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
    </p>
    <button @click="$emit('del-todo', todo.id)" class="delete"><i class="fas fa-trash"></i></button>
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
  
  background: rgba(158, 173, 177, 0.678);
  //max-width: 500px;
  //margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  .delete {
    margin: 15px 5px;
    cursor: pointer;
    border: none;
    background: rgba(158, 173, 177, 0);
    .fas {
      font-size: 18px;
      color: rgba(255, 0, 0, 0.555);
    }
  }
  .is_comlete {
    text-decoration: line-through;
  }
}
</style>