import React from 'react';
import TicketTable from './TicketTable';
import PerformanceCards from './PerformanceCards';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <PerformanceCards />
      </div>
      <div className="mb-8">
        <TicketTable />
      </div>
    </div>
  );
};

export default Dashboard;