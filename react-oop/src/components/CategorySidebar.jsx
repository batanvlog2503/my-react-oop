
import React, {useState} from 'react';
function CategorySidebar({ categories }) {
  return (
    <div className="card border-0 shadow-sm mb-4" style={{ borderLeft: '4px solid #ff8c42' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#ff8c42' }}>Danh Mục</h5>
        <ul className="list-group list-group-flush">
          {categories.map(cat => (
            <li key={cat.categoryId} className="list-group-item border-0 ps-0">
              <a href="#" className="text-decoration-none" style={{ color: '#333' }}>
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategorySidebar;