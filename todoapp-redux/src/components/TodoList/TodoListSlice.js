const initState = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, priority: "High" },
  { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/changeCompleted":
      const { id, completed } = action.payload;
      return state.map((item) => {
        if (item.id === id) item.completed = completed;
        return item;
      });

    default:
      return state;
  }
};

export default todoListReducer;
