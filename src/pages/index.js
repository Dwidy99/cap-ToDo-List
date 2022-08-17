import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./../components/Navbar";
import Container from "./../components/Container";
import TodoAdd from "./../components/TodoAdd";
import TodoList from "./../components/TodoList";

const Index = () => {
  const LOCAL_STORAGE_KEY = "list-todos";
  const [todos, setTodos] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [todo, setTodo] = useState({
    id: "",
    name: "",
    desc: "",
  });

  const addTodoHandler = (todo) => {
    const newTodo = [{ id: uuidv4(), name: todo.name, desc: todo.desc }];
    setTodos([...todos, ...newTodo]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...todos, ...newTodo])
    );
  };

  const editTodoHandler = (id) => {
    const newUpdateFind = todos.find((singleTodo) => singleTodo.id === id);
    setTodo({ id, name: newUpdateFind.name, desc: newUpdateFind.desc });
    setToggleSubmit(false);
  };

  const updateTodoHandler = (todo) => {
    let listTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    let taskObj = JSON.parse(listTodos);

    const dataUpdate = taskObj.map((obj) => {
      if (obj.id === todo.id) {
        obj.name = todo.name;
        obj.desc = todo.desc;
      }
      return obj;
    });
    setTodos(dataUpdate);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataUpdate));
    setToggleSubmit(true);
  };

  const deleteTodoHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    const listTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    listTodos && setTodos(listTodos);
  }, [setTodos]);

  return (
    <>
      <Navbar />
      <Container>
        <TodoAdd
          todo={todo}
          setTodo={setTodo}
          toggleSubmit={toggleSubmit}
          addHandler={addTodoHandler}
          updateHandler={updateTodoHandler}
        />
        <TodoList
          todos={todos}
          deleteTodos={deleteTodoHandler}
          editTodos={editTodoHandler}
        />
      </Container>
    </>
  );
};

export default Index;
