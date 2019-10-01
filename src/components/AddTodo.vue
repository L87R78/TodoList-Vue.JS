<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo.." />
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
            title: ''
        }
    },
    methods: {
        addTodo(e){
            e.preventDefault();
            const newTodo = {
                //id: uuid.v4(),
                title: this.title,
                completed: false
            }
            
            //send up to parrent
            this.$emit('add-todo', newTodo);

            this.title = '';
        }
    },
   
}
</script>