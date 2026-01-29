import styles from "../styles/AddEmployeeButton.module.css";

const AddEmployeeButton = ({ onClick }) => {
  return (
    <div className={styles.add_employee_container}>
      <button 
        className={styles.add_employee_button} 
        onClick={onClick}
      >
        Додати
      </button>
    </div>
  );
};

export default AddEmployeeButton;
