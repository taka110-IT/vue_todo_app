const TodoApp = {
  data() {
    return {
      todos: [],
      item: '',
      editIndex: '',
    }
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    addItem() {
      const newItem = {id: Date.now(), item: this.item}
      this.todos.push(newItem)
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.item = ''
    },
      editItem(index) {
        this.item = this.todos[index].item
        this.editIndex = index
    },
    setItem() {
      this.todos[this.editIndex].item = this.item
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.editIndex = ''
      this.item = ''
    },
    deleteItem(index) {
      if (confirm('Delete OK?')) {
        this.todos.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(this.todos))
        this.editIndex = ''
        this.item = ''
      }
    }
  },
  computed: {
    edit() {
      return this.editIndex === ''
    }
  }
}

Vue.createApp(TodoApp).mount('#app')
