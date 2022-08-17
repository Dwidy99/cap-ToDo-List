import styles from "./TodoAdd.module.css";

const Index = (props) => {
  const { addHandler, updateHandler, todo, setTodo, toggleSubmit } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name || !todo.desc) {
      alert("Please fill in all fields");
      return;
    }

    if (toggleSubmit) {
      addHandler(todo);
    } else {
      updateHandler(todo);
    }

    setTodo({
      id: "",
      name: "",
      desc: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder="What your plan?"
          className={styles.input}
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
      </div>
      <div className="form-field">
        <input
          type="text"
          name="description"
          placeholder="How it will goin?"
          className={styles.input}
          value={todo.desc}
          onChange={(e) => setTodo({ ...todo, desc: e.target.value })}
        />
      </div>

      {toggleSubmit ? (
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      ) : (
        <button type="submit" className={styles.addButton}>
          Edit
        </button>
      )}
    </form>
  );
};

export default Index;
