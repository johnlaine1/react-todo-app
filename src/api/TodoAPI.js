import $ from 'jquery';

export const setTodos = (todos) => {
  if ($.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
};

export const getTodos =  () => {
  const stringTodos = localStorage.getItem('todos');
  let todos = [];
  
  try {
    todos = JSON.parse(stringTodos);
  } catch(e) {
    
  }
  return $.isArray(todos) ? todos : [];
};

export const filterTodos = (todos, showCompleted, searchText) => {
  let filteredTodos = todos;
  
  // Filter by showCompleted
  filteredTodos = filteredTodos.filter((todo) => {
    return !todo.completed || showCompleted;

  });
  
  // Filter by searchText
  filteredTodos = filteredTodos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchText);
  });
  
  // Order todos with completed todos last
  filteredTodos.sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    return 0;
  });
  
  return filteredTodos;

};
