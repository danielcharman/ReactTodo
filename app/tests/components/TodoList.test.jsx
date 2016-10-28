let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let TodoList = require('TodoList');
let Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each Todo item', () => {
    let todos = [
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'Clean the yard'
      }
    ];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });


});
