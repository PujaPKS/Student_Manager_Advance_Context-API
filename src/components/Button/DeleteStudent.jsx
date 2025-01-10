import React, { useContext } from 'react';
import './Button.css';
import StudentContext from '../../context/StudentContext';

const DeleteStudent = ({ student }) => {
  const { students, setStudents } = useContext(StudentContext);
  const handleDelete = () => {
    // Removing the student from the state
    const updatedStudents = students.filter((s) => s.id !== student.id);
    setStudents(updatedStudents);

    // Updating the localStorage after removal
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  return (
    <button onClick={handleDelete} className='delete'>Delete</button>
  );
};

export default DeleteStudent;