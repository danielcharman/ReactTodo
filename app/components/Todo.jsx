let React = require('react');

let Todo = React.createClass({
  render: function() {
    let {id, text, completed} = this.props;
    return (
      <label onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} onChange={()=>{}}/>
        {text}
      </label>
    );
  }
});

module.exports = Todo;
