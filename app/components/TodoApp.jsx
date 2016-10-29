let React = require('react');
let uuid = require('node-uuid');

let TodoList = require('TodoList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let TodoAPI = require('TodoAPI');

let TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  _handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  _handleToggle: function(id) {
    let updatedTodos = this.state.todos.map((todo)=> {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  _handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  render: function() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h1 className="page-title">Todo App</h1>
            <TodoSearch onSearch={this._handleSearch}/>
            <TodoList todos={filteredTodos} onToggle={this._handleToggle}/>
            <AddTodo onAddTodo={this._handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
