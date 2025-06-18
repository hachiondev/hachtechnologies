import React from 'react'
import Sidebar from './Sidebar'

const PartnerList = () => {
  return (
    <>
     <div className='admin'>
    <Sidebar/>
    <div className="container mt-4">
        <h4>Partner List</h4>
    <table class="table table-striped table-bordered table-hover">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Company Name</th>
      <th scope="col">Company Website</th>
      <th scope="col">Location</th>
      <th scope="col">Logo</th>
      <th scope="col">Created Date</th>
      <th scope="col">Approval</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Monika</td>
      <td>monikahachion@gmail.com</td>
      <td>9999999999</td>
      <td>Hachion</td>
      <td>Hachion.co</td>
      <td>India</td>
      <td>Logo</td>
      <td>2023-05-05</td>
      <td>Approved</td>
      <td><button className="btn btn-danger btn-sm">Delete</button></td>
    </tr>

  </tbody>
  </table>
  </div>
  </div>
  </> 
  )
}

export default PartnerList
