let expect = require('expect');

let TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [
        {
          id: 23,
          text: 'Write todo test',
          completed: false
        }
      ];
      TodoAPI.setTodos(todos);
      let actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set valid todos array', () => {
      let badTodos = {
        id: 23,
        text: 'Write todo test',
        completed: false
      };
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      let actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      let todos = [
        {
          id: 23,
          text: 'Write todo test',
          completed: false
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      let actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filteredTodos', () => {
    let todos = [
      {
        id: 1,
        text: 'Some thext here',
        completed: true
      },
      {
        id: 2,
        text: 'Other thext here',
        completed: false
      },
      {
        id: 3,
        text: 'Yo bitch',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return non completed todos when showCompleted is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

  });

});
