
import React, { useState } from 'react';
import Header from './components/Header/Header';
import StudentForm from './components/Form/StudentForm';
import EditStudent from './components/Button/EditStudent';
import DeleteStudent from './components/Button/DeleteStudent';
import './App.css'

function App() {
  // State to store the list of students
  const [students, setStudents] = useState([]);
  // State to store the current student being edited
  const [editingStudent, setEditingStudent] = useState(null);
  // State to store the form data
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    address: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      // Update the student if editing
      const updatedStudents = students.map((student) =>
        student.id === editingStudent.id ? { ...formData, id: student.id } : student
      );
      setStudents(updatedStudents);
      setEditingStudent(null);
    } else {
      // Add new student
      const newStudent = { ...formData, id: students.length + 1 };
      setStudents([...students, newStudent]);
    }
    // Reset form data
    setFormData({
      name: '',
      mobileNo: '',
      address: '',
    });
  };

  return (
    <div>
      <Header />
      <div className='mid'>All Students: {students.length}</div>
      <StudentForm
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        editingStudent={editingStudent}
      />
      <h2>All Students </h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.mobileNo} - {student.address}
            <EditStudent student={student} setEditingStudent={setEditingStudent} setFormData={setFormData} />
            <DeleteStudent student={student} setStudents={setStudents} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;