import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const AdminRegisterList = () => {
  const [registrations, setRegistrations] = useState([]);

  // Fetch registration list on mount
 useEffect(() => {
  fetch('https://api.hachtechnologies.com/api/v1/user/students')
    .then(res => res.json())
    .then(data => {
      console.log('Fetched registrations:', data); // <-- Check structure
      setRegistrations(data);
    })
    .catch(err => console.error('Error fetching data:', err));
}, []);


  return (
    <>
      <div className='admin'>
        <Sidebar />
        <div className="container mt-4">
          <h4>Registration List</h4>
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
             
              </tr>
            </thead>
            <tbody>
             {registrations.map((item) => (
  <tr key={item.id}>
    <td>{item.userName}</td>  {/* userName matches JSON */}
    <td>{item.email}</td>     {/* email matches JSON */}
    <td>{item.mobile}</td>    {/* mobile matches JSON */}
    
    <td>{item.otpstatus ? 'Verified' : 'Unverified'}</td>
    <td>Website</td>
  </tr>
))}
              {registrations.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center text-muted">No records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminRegisterList;
