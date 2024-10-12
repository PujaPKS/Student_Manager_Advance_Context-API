import React, { useState } from 'react';
import './StudentForm.css'

const StudentForm = ({ handleSubmit, formData, setFormData, editingStudent }) => {
  return (
    <form onSubmit={handleSubmit} className='title'>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Mobile No.:
        <input
          type="number"
          value={formData.mobileNo}
          onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </label>
      <br />
      <button type="submit" className='btn'>{editingStudent ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default StudentForm;