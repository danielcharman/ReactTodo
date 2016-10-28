let React = require('react');

let TodoList = require('TodoList');

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
  render: function() {
    let {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
