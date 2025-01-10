import React from 'react';
import './Button.css';

const DeleteStudent = ({ student, setStudents }) => {
  const handleDelete = () => {
    const filteredStudents = setStudents((prevStudents) => prevStudents.filter((prevStudent) => prevStudent.id !== student.id));
  };

  return (
    <button onClick={handleDelete} className='delete'>Delete</button>
  );
};

export default DeleteStudent;