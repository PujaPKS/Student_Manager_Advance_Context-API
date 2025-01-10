import React, { useState } from 'react';
import './StudentForm.css'

const StudentForm = ({ handleSubmit, formData, setFormData, editingStudent, closeForm }) => {

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <form onSubmit={handleSubmit} className='title'>
          <h2>{editingStudent ? 'Edit Student' : 'Add Student'}</h2>
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
          <button type='button' className='close' onClick={closeForm}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;