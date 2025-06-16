// src/components/BlogCard.jsx
import React from 'react';
import './BlogCard.css';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Clock } from 'lucide-react';

function BlogCard({ title, subtitle, category, route, date, readTime }) {
  const navigate = useNavigate();

  return (
    <div className="blog-card" onClick={() => navigate(route)}>
      <div className="blog-content">
        <span className="blog-category">{category}</span>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-subtitle">{subtitle}</p>
        <div className="blog-meta">
          <span className="meta-item">
            <CalendarDays size={16} strokeWidth={1.5} /> {date}
          </span>
          <span className="meta-item">
            <Clock size={16} strokeWidth={1.5} /> {readTime}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
