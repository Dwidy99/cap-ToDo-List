import TodoCard from "../TodoCard";
import styles from "./TodoList.module.css";

import classNames from "classnames";

const Index = ({ todos, deleteTodos, editTodos }) => {
  const _deleteTodoHandler = (id) => {
    deleteTodos(id);
  };

  const _editTodoHandler = (id) => {
    editTodos(id);
  };

  return (
    <div className={styles.todos}>
      {todos.length > 0
        ? todos.map((todo, index, arr) => {
            return (
              <div
                key={index}
                className={classNames(styles.todo, {
                  [styles.todoDivider]: !(arr.length === index + 1),
                })}
              >
                <TodoCard
                  key={todo.id}
                  name={todo.name}
                  desc={todo.desc}
                  editHandler={() => _editTodoHandler(todo.id)}
                  deleteHandler={() => _deleteTodoHandler(todo.id)}
                />
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Index;
