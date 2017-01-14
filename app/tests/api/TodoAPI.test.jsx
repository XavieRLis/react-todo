const expect  = require('expect');

const TodoAPI = require("TodoAPI");

describe('TodoAPI', () => {

    beforeEach(()=>{
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [{
                id: 23,
                text: 'text all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });
        it('should not set invalid todos array', () => {
            let badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return emty array for bad localStorage data', () => {
            let todos = TodoAPI.getTodos();
            expect(todos).toEqual([]);
        });
        it('should return valid todos array', () => {
            let todos = [{
                id: 23,
                text: 'text all files',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });
    describe('filterTodos', () => {
        let todos = [
            {
                id: 1,
                text: 'some text here',
                completed: true
            },
            {
                id: 2,
                text: 'other text here',
                completed: false
            },
            {
                id: 3,
                text: 'third text here',
                completed: true
            }
        ];

        it('should return all items if showCompleted is true', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return non-completed todos if showCompleted is false', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });
        it('should sort by completed status', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by seacrh text', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'other');
            expect(filteredTodos.length).toBe(1);
            expect(filteredTodos[0].id).toBe(2);
        });
        it('should return all todos if searchText is empty', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});