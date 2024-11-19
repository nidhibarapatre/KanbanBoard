// components/Column.js
import React from 'react';
import Card from '../card/Card';
import './Column.css';

const Column = ({ title, tickets, users, icon,grouping, priorityIcons, statusIcons,icons }) => {
  const getIcon = () => {
    if (grouping === 'status') {
      return statusIcons[`${title.toLowerCase()}Icon`];
    }
    return icon;
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return priorityIcons.urgentIcon;
      case 3: return priorityIcons.highIcon;
      case 1: return priorityIcons.lowIcon;
      case 2: return priorityIcons.mediumIcon;
      case 0: return priorityIcons.noPriorityIcon;
      default: return priorityIcons.noPriorityIcon;
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        <div className="header-left">
          {getIcon() && <img src={getIcon()} alt="" className="status-icon" />}
          <div className="column-title-wrapper" >
            {title !== 'Backlog' &&(
              <img 
                src={getPriorityIcon(title === 'Urgent' ? 4 : title === 'High' ? 3 : title === 'Low' ? 1 : tickets.priority===2?2:0)} 
                alt="" 
                className="priority-icon" 
              />
            )}
            <span className="column-title">{title}</span>
          </div>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="header-right">
          <button className="icon-button">
            <img src={icons.plusIcon} alt="Add" className="icon" />
          </button>
          <button className="icon-button">
            <img src={icons.optionsIcon} alt="Options" className="icon" />
          </button>
        </div>
      </div>
      <div className="tickets-container">
        {tickets.map(ticket => (
          <Card 
            key={ticket.id}
            ticket={ticket}
            user={users.find(u => u.id === ticket.userId)}
            priorityIcons={priorityIcons}
            icons={icons}
          />
        ))}
      </div>
    </div>
  );
};
export default Column