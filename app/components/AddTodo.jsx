const React = require('react');

const AddTodo = React.createClass({
    propTypes: {
        onAddTodo: React.PropTypes.func.isRequired
    },
    handleSubmit: function (e) {
        e.preventDefault();
        let text = this.refs.text.value;

        if (text.length > 0) {
            this.refs.text.value = '';
            this.props.onAddTodo(text);
        } else {
            this.refs.text.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="text" placeholder="What do you need to do?" />
                    <button className="button expanded">Add</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;