import React from 'react';

const StudentContext = React.createContext({
  students: [],  // Default value for students
  setStudents: () => {}, // Placeholder function for updating students
  editingStudent: null,  // Default value for editingStudent
  setEditingStudent: () => {}, // Placeholder function for setting editingStudent
  formData: {
    name: '',
    mobileNo: '',
    address: '',
  }, // Default form data
  setFormData: () => {}, // Placeholder function for setting formData
  formVisible: false, // Default form visibility
  toggleForm: () => {}, // Placeholder function for toggling form visibility
  closeForm: () => {}, // Placeholder function for closing the form
  handleSubmit: () => {}, // Placeholder function for handling form submission
  setFormVisible: () => {}, // Placeholder function for setting form visibility
});

export default StudentContext;
