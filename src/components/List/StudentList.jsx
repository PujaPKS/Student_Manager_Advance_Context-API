import React from 'react';
import './StudentList.css';
import EditStudent from '../Button/EditStudent';
import DeleteStudent from '../Button/DeleteStudent';

function StudentList({ students, setEditingStudent, setFormData, setFormVisible, setStudents }) {
  return (
    <div>
      <h2>All Students</h2>
      <table className="students-table">
        {students.length > 0 && (
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
        )}
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.mobileNo}</td>
                <td>{student.address}</td>
                <td className="actions">
                  <EditStudent
                    student={student}
                    setEditingStudent={setEditingStudent}
                    setFormData={setFormData}
                    setFormVisible={setFormVisible}
                  />
                  <DeleteStudent student={student} setStudents={setStudents} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-students-message">
                No students added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
