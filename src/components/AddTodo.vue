<template>
  <div class="formBox">
    <form @submit="addTodo">
      <input class="inputText" type="text" v-model="title" name="title" placeholder="Add todo..." />
      <input type="submit" name="Submit" class="btn_submit" />
    </form>
  </div>
</template>>

<script>
//import uuid from 'uuid';
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        //id: uuid.v4(),
        title: this.title,
        completed: false
      };

      //send up to parrent
      this.$emit("add-todo", newTodo);

      this.title = "";
    }
  }
};
</script>

<style lang="scss">
.formBox {
  margin: 0.5rem auto;
  text-align: center;
  max-width: 500px;
  position: relative;
  .inputText {
    width: 70%;
    padding-left: 10px;
  }
  .btn_submit {
    background: rgba(0, 128, 0, 0.493);
    border: none;
    height: 21px;
    cursor: pointer;
  }
}
</style>