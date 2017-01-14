const React = require('react');
const ReactDOM = require('react-dom');
const expect  = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require("AddTodo");

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onSubmit prop with valid data', () => {
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));
        let text = 'Check mail';

        addTodo.refs.text.value = text;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(text);
    });
    it('should not call onSubmit prop with invalid data', () => {
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.text.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});