// components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ ticket, user, priorityIcons,icons }) => {

  return (
    <div className="ticket-card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            <img src={user.avatar} alt={user.name} />
            <span className={`availability-indicator ${user.available ? 'available' : ''}`}></span>
          </div>
        )}
      </div>
      <div className="card-title">
        {/* <img 
          src={getPriorityIcon(ticket.priority)} 
          alt="" 
          className="priority-icon"
        /> */}
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-tags">
        <div className="feature-tag">
          <img src={icons.optionsIcon} alt="" className="tag-icon" />
          <span className="tag-text">Feature Request</span>
        </div>
      </div>
    </div>
  );
};
export default Card