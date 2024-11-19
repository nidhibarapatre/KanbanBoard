// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Board from './components/kanbanBoard/KanbanBoard';
import todoIcon from './assests/status/To-do.svg';
import DownIcon from './assests/down.svg'
import inProgressIcon from './assests/status/in-progress.svg';
import doneIcon from './assests/status/Done.svg';
import canceledIcon from './assests/status/Cancelled.svg';
import backlogIcon from './assests/status/Backlog.svg';

import urgentIcon from './assests/priority/SVG - Urgent Priority colour.svg';
import highIcon from './assests/priority/Img - High Priority.svg';
import mediumIcon from './assests/priority/Img - Medium Priority.svg';
import lowIcon from './assests/priority/Img - Low Priority.svg';
import noPriorityIcon from './assests/priority/No-priority.svg';

import displayIcon from './assests/Display.svg';
import plusIcon from './assests/add.svg';
import optionsIcon from './assests/3 dot menu.svg';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleGroupingChange = (value) => {
    setGrouping(value);
    localStorage.setItem('grouping', value);
  };

  const handleSortingChange = (value) => {
    setSorting(value);
    localStorage.setItem('sorting', value);
  };

  return (
    <div className="app">
      <Navbar
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={handleGroupingChange}
        onSortingChange={handleSortingChange}
        displayIcon={displayIcon}
        icons={{DownIcon,optionsIcon,plusIcon}}
      />
      <Board 
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
        statusIcons={{ todoIcon, inProgressIcon, doneIcon, canceledIcon, backlogIcon }}
        priorityIcons={{ urgentIcon, highIcon, mediumIcon, lowIcon, noPriorityIcon }}
        icons={{DownIcon,optionsIcon,plusIcon}}
      />
    </div>
  );
};

export default App;