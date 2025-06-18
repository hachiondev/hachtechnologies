import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Blogs = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
const [formData, setFormData] = useState({
  id:'',
  category_name: '',
  title: '',
  author: '',
  blog_image: null, // file upload
  description: '',
  date: ''
});


const fetchBlogs = async () => {
  const response = await axios.get('https://api.hachtechnologies.com/blog');
  setJobs(response.data);
};


  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleShow = () => {
    setFormData({
     category_name: '',
  title: '',
  author: '',
  blog_image: null, // file upload
  description: '',
  date: ''
    });
    setIsEdit(false);
    setShowModal(true);
  };

const handleEdit = (blog) => {
  console.log('Editing blog:', blog); // check this
  setSelectedJob(blog); // contains the id
  setFormData({
    category_name: blog.category_name,
    title: blog.title,
    author: blog.author,
    blog_image: null, // reset image input
    description: blog.description,
    date: blog.date,
  });
  setIsEdit(true);
  setShowModal(true);
};




  const handleDelete = async (id) => {
  await axios.delete(`https://api.hachtechnologies.com/blog/delete/${id}`);
  fetchBlogs();
};


const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === 'blog_image') {
    setFormData((prev) => ({ ...prev, blog_image: files[0] }));
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();

  console.log('Submitting blog:', formData);
  console.log('Is edit mode:', isEdit);
  console.log('Selected job:', selectedJob);

  const data = new FormData();
  data.append(
    'blogData',
    JSON.stringify({
      category_name: formData.category_name,
      title: formData.title,
      author: formData.author,
      description: formData.description,
      date: new Date().toISOString().split('T')[0],
    })
  );

  if (formData.blog_image) {
    data.append('blogImage', formData.blog_image);
  }

  try {
    if (isEdit) {
      // 🔧 Use POST instead of PUT
      await axios.post(`https://api.hachtechnologies.com/blog/update/${selectedJob.id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } else {
      await axios.post('https://api.hachtechnologies.com/blog/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }

    setShowModal(false);
    fetchBlogs();
  } catch (err) {
    console.error('Error:', err);
  }
};



  return (
    <>
      <div className="admin">
        <Sidebar />
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Blogs</h4>
            <button className="btn btn-primary" onClick={handleShow}>
              Add Blog
            </button>
          </div>

          <table className="table table-striped table-bordered table-hover">
           <thead>
  <tr>
    <th>Category</th>
    <th>Title</th>
    <th>Author</th>
    <th>Description</th>
    <th>Date</th>
    <th>Image</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  {jobs.map((blog) => (
    <tr key={blog.id}>
      <td>{blog.category_name}</td>
      <td>{blog.title}</td>
      <td>{blog.author}</td>
      <td dangerouslySetInnerHTML={{ __html: blog.description }}></td>

      <td>{blog.date}</td>
      <td>
        {blog.blog_image && (
          <img
            src={`https://api.hachtechnologies.com/uploads/blogs/${blog.blog_image}`}
            alt="blog"
            style={{ width: '50px' }}
          />
        )}
      </td>
      <td>
        <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(blog)}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(blog.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{isEdit ? 'Edit Job' : 'Add Job'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-2">
    <Form.Label>Category Name</Form.Label>
    <Form.Control
      type="text"
      name="category_name"
      value={formData.category_name}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group className="mb-2">
    <Form.Label>Title</Form.Label>
    <Form.Control
      type="text"
      name="title"
      value={formData.title}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group className="mb-2">
    <Form.Label>Author</Form.Label>
    <Form.Control
      type="text"
      name="author"
      value={formData.author}
      onChange={handleChange}
    />
  </Form.Group>
<Form.Group className="mb-2">
  <Form.Label>Description</Form.Label>
  <ReactQuill
    value={formData.description}
    onChange={(value) =>
      setFormData((prev) => ({ ...prev, description: value }))
    }
    modules={{
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
    }}
    theme="snow"
  />
</Form.Group>
  <Form.Group className="mb-2">
    <Form.Label>Blog Image</Form.Label>
    <Form.Control
      type="file"
      name="blog_image"
      accept="image/*"
      onChange={handleChange}
    />
  </Form.Group>
  <Button variant="primary" type="submit" className="mt-2 w-100">
    {isEdit ? 'Update Blog' : 'Add Blog'}
  </Button>
</Form>

          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Blogs;
