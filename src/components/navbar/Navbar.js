// components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ grouping, sorting, onGroupingChange, onSortingChange, displayIcon,icons }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={displayIcon} alt="Display" className="icon" />
        <span>Display</span>
        <span className="dropdown-arrow">
          <img alt='' src={icons.DownIcon} />
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span className="label">Grouping</span>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span className="label">Ordering</span>
            <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar




