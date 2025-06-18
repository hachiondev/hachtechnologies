// BlogComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    axios.get('https://api.hachtechnologies.com/blog')
      .then(response => {
        setBlogs(response.data);
        setSelectedBlog(response.data[0]); // Default first blog
      })
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Left Sidebar */}
        <Col md={3} className="mb-3">
          <h5 className="mb-3">Related Blogs</h5>
          <ListGroup>
            {blogs.map((blog) => (
              <ListGroup.Item
                key={blog.id}
                action
                active={selectedBlog?.id === blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="text-truncate"
              >
                {blog.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Right Content */}
        <Col md={8}>
          {selectedBlog && (
            <div>
              <h4 className="fw-bold">{selectedBlog.title}</h4>
              <p className="text-muted">
                By {selectedBlog.author} | {new Date(selectedBlog.date).toDateString()}
              </p>
              <Image
             
            src={`https://api.hachtechnologies.com/uploads/blogs/${selectedBlog.blog_image}`}
            alt="blog"
          style={{width:"80%",height:"50vh"}}
          />
              <p dangerouslySetInnerHTML={{ __html: selectedBlog.description }}></p>

            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogSection;
