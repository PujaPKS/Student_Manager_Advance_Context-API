import React from 'react';

const DeleteStudent = ({ student, setStudents }) => {
  const handleDelete = () => {
    const filteredStudents = setStudents((prevStudents) => prevStudents.filter((prevStudent) => prevStudent.id !== student.id));
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteStudent;