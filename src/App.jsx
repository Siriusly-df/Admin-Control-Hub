import { useState } from "react";
import Header from "./components/Header";
import EmployeeCard from "./components/EmployeeCard";
import { EMPLOYEES } from "./employee.data";
import SearchBar from "./components/SearchBar";
import AddEmployeeButton from "./components/AddEmployeeButton";
import EmployeeForm from "./components/EmployeeForm"; 
import ProfileEditor from "./components/ProfileEditor"; 
import "./App.css";
import Login from "./components/Login";

function App() {
  const [employees, setEmployees] = useState(EMPLOYEES);
  const [showForm, setShowForm] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);

  const [editingEmployee, setEditingEmployee] = useState(null);
  const [closingEditor, setClosingEditor] = useState(false);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
    handleCloseForm();
  };

  const handleEditEmployee = (id) => {
    const employee = employees.find(emp => emp.id === id);
    setEditingEmployee(employee);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
    setActiveCardId(null);
  };

  const handleCloseForm = () => {
    setClosing(true);
    setTimeout(() => {
      setShowForm(false);
      setClosing(false);
    }, 200);
  };

  const handleCloseEditor = () => {
    setClosingEditor(true);
    setTimeout(() => {
      setEditingEmployee(null);
      setClosingEditor(false);
    }, 200);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <SearchBar />
        <div className="section_employee">
          <section className="employee_container">
            {employees.length ? (
              employees.map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  {...employee}
                  isActive={activeCardId === employee.id}
                  onOpen={setActiveCardId}
                  onEdit={handleEditEmployee}
                  onDelete={handleDeleteEmployee}
                />
              ))
            ) : (
              <p>Employees not found!</p>
            )}
          </section>
        </div>

        <AddEmployeeButton onClick={() => setShowForm(true)} />

        {showForm && (
          <div className="modal-overlay" onClick={handleCloseForm}>
            <div
              className={`modal-content ${closing ? "close" : "open"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <EmployeeForm onClose={handleCloseForm} onSave={handleAddEmployee} />
            </div>
          </div>
        )}

        {editingEmployee && (
          <div className="profile-modal-overlay" onClick={handleCloseEditor}>
            <div
              className={`profile-modal-content ${closingEditor ? "close" : "open"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <ProfileEditor
                employee={editingEmployee}
                onClose={handleCloseEditor}
                onSave={(updatedEmployee) => {
                  setEmployees(employees.map(emp =>
                    emp.id === updatedEmployee.id ? updatedEmployee : emp
                  ));
                  handleCloseEditor();
                }}
              />
            </div>
          </div>
        )}

        {activeCardId && (
          <div className="overlay" onClick={() => setActiveCardId(null)} />
        )}
      </main>
    </div>
  );
}

export default App;
