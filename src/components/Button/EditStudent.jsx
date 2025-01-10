import React from 'react';
import './Button.css';

const EditStudent = ({ student, setEditingStudent, setFormData, setFormVisible }) => {
  const handleEdit = () => {
    console.log("Editing student:", student); // Debugging log
    setEditingStudent(student);
    setFormData({
      name: student.name,
      mobileNo: student.mobileNo,
      address: student.address,
    });
    setFormVisible(true); // Open the form when editing
  };

  return (
    <button onClick={handleEdit} className='update'>Edit</button>
  );
};

export default EditStudent;
