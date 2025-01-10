import React, { useState } from 'react';
import Header from './components/Header/Header';
import StudentForm from './components/Form/StudentForm';
import StudentList from './components/List/StudentList';
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
      <StudentList
        students={students}
        setEditingStudent={setEditingStudent}
        setFormData={setFormData}
        setFormVisible={setFormVisible}
        setStudents={setStudents}
      />
    </div>
  );
}

export default App;
