// import React from 'react';

// const EditStudent = ({ student, setEditingStudent, setFormData, toggleForm }) => {
//   const handleEdit = () => {
//     console.log("Editing student:", student); // Debugging log
//     setEditingStudent(student);
//     setFormData({
//       name: student.name,
//       mobileNo: student.mobileNo,
//       address: student.address,
//     });
//     // toggleForm(); //showing form for editing
//   };

//   return (
//     <button onClick={handleEdit}>Edit</button>
//   );
// };

// export default EditStudent;

import React from 'react';

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
    <button onClick={handleEdit}>Edit</button>
  );
};

export default EditStudent;
