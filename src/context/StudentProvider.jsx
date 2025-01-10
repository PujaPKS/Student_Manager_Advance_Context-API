import React, { useState, useEffect } from 'react'
import StudentContext from './StudentContext';

const StudentProvider = ({ children }) => {

    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [formData, setFormData] = useState({
      name: '',
      mobileNo: '',
      address: '',
    });
    const [formVisible, setFormVisible] = useState(false);

    // Load students from localStorage on component mount
    useEffect(() => {
      const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
      setStudents(storedStudents);
    }, []);

    // Save students to localStorage whenever the students array changes
    useEffect(() => {
      if (students.length > 0) {
        localStorage.setItem('students', JSON.stringify(students));
      }
    }, [students]);

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
        } 
        else {
          const newStudent = { ...formData, id: students.length + 1 };
          setStudents([...students, newStudent]);
        }
        setFormData({ name: '', mobileNo: '', address: '' });
        setFormVisible(false);
    };

    
  return (
    <StudentContext.Provider 
        value={{ 
            students, 
            setStudents, 
            editingStudent, 
            setEditingStudent, 
            formData, 
            setFormData, 
            formVisible,
            toggleForm,
            closeForm,
            handleSubmit,
            setFormVisible,
        }}
    >
        { children } 
    </StudentContext.Provider>
  )
}

export default StudentProvider