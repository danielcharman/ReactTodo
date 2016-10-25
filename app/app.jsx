let React = require('react');
let ReactDOM = require('react-dom');

let {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

let TodoApp = require('TodoApp');

//load foundation
$(document).foundation();

//app scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
