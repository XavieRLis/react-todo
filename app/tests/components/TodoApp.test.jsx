const React = require('react');
const ReactDOM = require('react-dom');
const expect  = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const TodoApp = require("TodoApp");

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        let todoText = 'test text';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);

        // Expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        let todoData = { id: 11, text: 'test feachures', completed:false, createdAt: 0, completedAt: undefined};
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[todoData]});
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(true);
        // CompletedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should toggle completedAt to undefined when todo is non-completed', () => {
        let todoData = { id: 11, text: 'test feachures', completed:true, createdAt: 0, completedAt: undefined};
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[todoData]});
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(false);
        // CompletedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
    });
});