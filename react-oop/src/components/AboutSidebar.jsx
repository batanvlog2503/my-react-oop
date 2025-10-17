
import React, {useState} from 'react';
function AboutSidebar() {
  return (
    <div className="card border-0 shadow-sm" style={{ backgroundColor: '#fff5ed' }}>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#ff8c42' }}>Về Blog</h5>
        <p className="card-text">
          Nơi chia sẻ kiến thức lập trình, Spring Boot, và các mẹo vặt công nghệ hữu ích.
        </p>
      </div>
    </div>
  );
}

export default AboutSidebar;
