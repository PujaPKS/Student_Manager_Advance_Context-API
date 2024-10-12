import React from 'react';

const EditStudent = ({ student, setEditingStudent, setFormData }) => {
  const handleEdit = () => {
    setEditingStudent(student);
    setFormData({
      name: student.name,
      mobileNo: student.mobileNo,
      address: student.address,
    });
  };

  return (
    <button onClick={handleEdit}>Edit</button>
  );
};

export default EditStudent;