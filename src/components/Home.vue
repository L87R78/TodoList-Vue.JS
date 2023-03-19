<template>
  <div id="home">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos :todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import axios from "axios";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => console.error(err));
    }
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3", {
      method: "get"
    })
    .then(res => {
      return res.json();
    })
    .then((jsonData) => {
        this.todos = jsonData
    })
    .catch(err => console.error(err));
  }
};
</script>

<style lang="scss">
    #home {
        max-width: 500px;
        margin: auto;
    }
</style>
