import React, { useState } from 'react';
import Header from './components/Header/Header';
import StudentForm from './components/Form/StudentForm';
import EditStudent from './components/Button/EditStudent';
import DeleteStudent from './components/Button/DeleteStudent';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    address: '',
  });
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
    if (!formVisible) {
      setEditingStudent(null);
      setFormData({
        name: '',
        mobileNo: '',
        address: '',
      });
    }
  };

  const closeForm = () => {
    setFormVisible(false);
    setEditingStudent(null);
    setFormData({ name: '', mobileNo: '', address: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      const updatedStudents = students.map((student) =>
        student.id === editingStudent.id ? { ...formData, id: student.id } : student
      );
      setStudents(updatedStudents);
      setEditingStudent(null);
    } else {
      const newStudent = { ...formData, id: students.length + 1 };
      setStudents([...students, newStudent]);
    }
    setFormData({ name: '', mobileNo: '', address: '' });
    setFormVisible(false);
  };

  return (
    <div>
      <Header toggleForm={toggleForm} />
      <div className="mid">All Students: {students.length}</div>
      {formVisible && (
        <StudentForm
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          editingStudent={editingStudent}
          closeForm={closeForm}
        />
      )}
      <h2>All Students</h2>
      <table className="students-table">
        {students.length > 0 && (
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
        )}
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.mobileNo}</td>
                <td>{student.address}</td>
                <td>
                  <EditStudent
                    student={student}
                    setEditingStudent={setEditingStudent}
                    setFormData={setFormData}
                    setFormVisible={setFormVisible}
                  />
                  <DeleteStudent student={student} setStudents={setStudents} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                No students added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

