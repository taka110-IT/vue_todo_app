const TodoApp = {
  data() {
    return {
      todos: [],
      item: '',
      editIndex: '',
      edit: false
    }
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos))
      },
      deep: true
    }
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem('todos'))
  },
  methods: {
    addItem() {
      this.todos.push(this.item)
      this.item = ''
    },
    editItem(index) {
      this.item = this.todos[index]
      this.editIndex = index
      if (!this.edit) this.edit = !this.edit
    },
    setItem() {
      this.todos.splice(this.editIndex, 1, this.item)
      this.editIndex = ''
      this.edit = !this.edit
      this.item = ''
    },
    deleteItem(index) {
      if (confirm('Delete OK?')) {
        this.todos.splice(index, 1)
        if (this.edit) this.edit = !this.edit
        this.item = ''
      }
    }
  }
}

Vue.createApp(TodoApp).mount('#app')
