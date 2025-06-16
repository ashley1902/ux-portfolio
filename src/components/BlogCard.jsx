import React from 'react';
import './BlogCard.css';
import { useNavigate } from 'react-router-dom';

function BlogCard({ title, subtitle, category, route }) {
  const navigate = useNavigate();

  return (
    <div className="blog-card" onClick={() => navigate(route)}>
      <div className="blog-content">
        <span className="blog-category">{category}</span>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default BlogCard;
