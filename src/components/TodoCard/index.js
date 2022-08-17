import styles from "./TodoCard.module.css";

const Index = (props) => {
  const { name, desc, id } = props;
  return (
    <div className={styles.todoIconWrapper}>
      <div className={styles.cardField}>
        <div>{name}</div>
        <div>{desc}</div>
      </div>

      <div className={styles.cardButton}>
        <button
          className={styles.todoActionButton}
          onClick={() => props.editHandler(id)}
        >
          Edit
        </button>
        <button
          className={styles.todoActionButton}
          onClick={() => props.deleteHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Index;
