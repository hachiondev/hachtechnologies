import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const Contact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    fetch('https://api.hachtechnologies.com/contactus')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched registrations:', data);
        setContact(data);
      })
      .catch(err => console.error('Error fetching data:', err));
  };

  const handleDelete = (id) => {
 
    if (window.confirm('Are you sure you want to delete this record?')) {
      fetch(`https://api.hachtechnologies.com/contactus/delete/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (res.ok) {
            // Remove deleted item from the state
            setContact((prev) => prev.filter(item => item.id !== id));
          } else {
            console.error('Failed to delete contact.');
          }
        })
        .catch((err) => console.error('Error deleting contact:', err));
    }
  };

  return (
    <div className='admin'>
      <Sidebar />
      <div className="container mt-4">
        <h4>Contact Us List</h4>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Date</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.date}</td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {contact.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-muted">No records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
