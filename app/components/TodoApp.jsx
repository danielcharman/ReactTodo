let React = require('react');

let TodoList = require('TodoList');
let AddTodo = require('AddTodo');

let TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Eat a dick'
        },
        {
          id: 4,
          text: 'Lick some balls'
        }
      ]
    };
  },
  _handleAddTodo: function(text) {
    alert(text);
    // this.setState({

    // })
  },
  render: function() {
    let {todos} = this.state;
    return (
      <div>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h1 className="page-title">Todo App</h1>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this._handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
