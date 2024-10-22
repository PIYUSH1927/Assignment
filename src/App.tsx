import { useState, useEffect, useCallback } from 'react';
import { loadGrid, mapUsersByUserId } from './utils';
import Layout from './components/Layout';
import { Ticket, User } from './interfaces';
import Top from './components/Top';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [userDetails, setUserDetails] = useState<Record<string, User>>({});
  const [gridContent, setGridContent] = useState<Record<string, Ticket[]>>({});
  const [groupBy, setGroupBy] = useState<string>("status");
  const [orderBy, setOrderBy] = useState<string>("priority");

  useEffect(() => {
    fetchData();
    loadPreviousSettings();
  }, []);

  const fetchData = () => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUserDetails(mapUsersByUserId(data.users));
      });
  };

  useEffect(() => {
    if (tickets.length > 0) {
      setGridContent(loadGrid(tickets, groupBy, orderBy));
    }
  }, [groupBy, orderBy, tickets]);

  const handleGroupingChange = useCallback((newGroup: string) => {
    setGroupBy(newGroup);
    localStorage.setItem("grouping", newGroup);
  }, []);

  const handleOrderingChange = useCallback((newOrder: string) => {
    setOrderBy(newOrder);
    localStorage.setItem("ordering", newOrder);
  }, []);

  const loadPreviousSettings = () => {
    const savedGroup = localStorage.getItem("grouping") || "status";
    const savedOrder = localStorage.getItem("ordering") || "priority";
    setGroupBy(savedGroup);
    setOrderBy(savedOrder);
  };

  return (
    <div className="App">
      <Top grouping={groupBy} setGrouping={handleGroupingChange} ordering={orderBy} setOrdering={handleOrderingChange} />
      <Layout gridData={gridContent} grouping={groupBy} userIdToData={userDetails} />
    </div>
  );
};

export default App;
