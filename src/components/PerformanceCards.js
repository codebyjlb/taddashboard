import React from 'react';

const PerformanceCards = () => {
  const data = {
    weekly: {
      totalTickets: 120,
      totalEffortHours: 480,
      expectedTickets: 100,
      expectedHours: 400,
      percentageToTarget: 85,
      teams: {
        Designer: { tickets: 40, hours: 160 },
        FS: { tickets: 50, hours: 200 },
        Newsletter: { tickets: 30, hours: 120 }
      }
    },
    monthly: {
      totalTickets: 500,
      totalEffortHours: 2000,
      expectedTickets: 450,
      expectedHours: 1800,
      percentageToTarget: 92,
      teams: {
        Designer: { tickets: 150, hours: 600 },
        FS: { tickets: 220, hours: 880 },
        Newsletter: { tickets: 130, hours: 520 }
      }
    }
  };

  const MetricCard = ({ icon, title, value }) => (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <span className="text-lg">{icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{value}</h3>
          <p className="text-xs text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );

  const DepartmentCard = ({ icon, title, tickets, hours }) => (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <span className="text-lg">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm">Tickets: <span className="font-semibold">{tickets}</span></p>
      <p className="text-sm">Hours: <span className="font-semibold">{hours}</span></p>
    </div>
  );

  const PerformanceSection = ({ title, data }) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
        <MetricCard icon="🎟️" title="Total Tickets" value={data.totalTickets} />
        <MetricCard icon="⏱️" title="Total Effort Hours" value={`${data.totalEffortHours}h`} />
        <MetricCard icon="🎯" title="Expected Tickets" value={data.expectedTickets} />
        <MetricCard icon="⏳" title="Expected Hours" value={`${data.expectedHours}h`} />
        <MetricCard icon="📊" title="% to Target" value={`${data.percentageToTarget}%`} />
      </div>
      <h3 className="text-sm font-semibold text-gray-700 mb-2">By Department</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <DepartmentCard icon="🎨" title="Designer" tickets={data.teams.Designer.tickets} hours={data.teams.Designer.hours} />
        <DepartmentCard icon="💻" title="FS" tickets={data.teams.FS.tickets} hours={data.teams.FS.hours} />
        <DepartmentCard icon="📰" title="Newsletter" tickets={data.teams.Newsletter.tickets} hours={data.teams.Newsletter.hours} />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <PerformanceSection title="Weekly Performance" data={data.weekly} />
      <PerformanceSection title="Monthly Performance" data={data.monthly} />
    </div>
  );
};

export default PerformanceCards;