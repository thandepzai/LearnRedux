import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) => state.filters.search;

export const statusFilterSelector = (state) => state.filters.status;

export const priorityFilterSelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  priorityFilterSelector,
  (todoList, searchText, status, priorities) => {
    const listAcceptPriority = priorities.length
      ? todoList.filter((todo) => priorities.includes(todo.priority))
      : todoList;

    if (status === "All") {
      return listAcceptPriority.filter((todo) =>
        todo.name.includes(searchText)
      );
    }

    return listAcceptPriority.filter(
      (todo) =>
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed)
    );
  }
);
