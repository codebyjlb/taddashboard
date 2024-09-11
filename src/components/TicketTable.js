import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketTable = () => {
  const [timeFilter, setTimeFilter] = useState('daily');
  const navigate = useNavigate();

  const tickets = [
    { id: 'DE32313139', department: 'Newsletter', status: 'In Progress', assignee: 'John', timeEffort: 3, hoursSpend: 2, remarks: 'Content review in progress' },
    { id: 'DE32313140', department: 'FS', status: 'New', assignee: 'Glen', timeEffort: 4, hoursSpend: 0, remarks: 'Awaiting initial assessment' },
    { id: 'DE32313141', department: 'Designer', status: 'In Approval', assignee: 'Ken', timeEffort: 2, hoursSpend: 1.5, remarks: 'Mockups sent for client approval' },
    { id: 'DE32313142', department: 'Newsletter', status: 'Completed', assignee: 'Romeo', timeEffort: 1, hoursSpend: 1, remarks: 'Newsletter sent successfully' },
    { id: 'DE32313143', department: 'FS', status: 'In Execution', assignee: 'Jason', timeEffort: 4, hoursSpend: 3, remarks: 'Implementing new feature' },
    { id: 'DE32313144', department: 'Designer', status: 'Cancelled', assignee: 'Dexter', timeEffort: 3, hoursSpend: 0.5, remarks: 'Project cancelled by client' },
  ];

  const departmentStats = [
    { 
      name: 'John', 
      department: 'Newsletter', 
      daily: { tickets: 2, hours: 4 },
      weekly: { tickets: 10, hours: 20 },
      monthly: { tickets: 40, hours: 80 }
    },
    { 
      name: 'Romeo', 
      department: 'Newsletter', 
      daily: { tickets: 1, hours: 3 },
      weekly: { tickets: 8, hours: 18 },
      monthly: { tickets: 35, hours: 75 }
    },
    { 
      name: 'Glen', 
      department: 'FS', 
      daily: { tickets: 3, hours: 5 },
      weekly: { tickets: 12, hours: 22 },
      monthly: { tickets: 45, hours: 90 }
    },
    { 
      name: 'Jason', 
      department: 'FS', 
      daily: { tickets: 2, hours: 4 },
      weekly: { tickets: 11, hours: 20 },
      monthly: { tickets: 42, hours: 85 }
    },
    { 
      name: 'Ken', 
      department: 'Designer', 
      daily: { tickets: 2, hours: 4 },
      weekly: { tickets: 9, hours: 19 },
      monthly: { tickets: 38, hours: 78 }
    },
    { 
      name: 'Dexter', 
      department: 'Designer', 
      daily: { tickets: 1, hours: 3 },
      weekly: { tickets: 7, hours: 17 },
      monthly: { tickets: 32, hours: 70 }
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
      'In Approval': 'bg-purple-100 text-purple-800',
      'In Execution': 'bg-indigo-100 text-indigo-800',
      'Completed': 'bg-green-100 text-green-800',
      'Cancelled': 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusDot = (department) => {
    const colors = {
      'Newsletter': 'bg-green-500',
      'FS': 'bg-yellow-500',
      'Designer': 'bg-blue-500',
    };
    return colors[department] || 'bg-gray-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <div className="lg:w-3/4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Ticket Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="px-3 py-2 bg-gray-50">ID Number</th>
                  <th className="px-3 py-2 bg-gray-50">Department</th>
                  <th className="px-3 py-2 bg-gray-50">Status</th>
                  <th className="px-3 py-2 bg-gray-50">Assignee</th>
                  <th className="px-3 py-2 bg-gray-50">Time Effort</th>
                  <th className="px-3 py-2 bg-gray-50">Hours Spend</th>
                  <th className="px-3 py-2 bg-gray-50">Remarks</th>
                  <th className="px-3 py-2 bg-gray-50">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="text-xs">
                    <td className="px-3 py-2 whitespace-nowrap font-medium text-gray-900">{ticket.id}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-500">{ticket.department}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-500">{ticket.assignee}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-500">{ticket.timeEffort}hrs</td>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-500">{ticket.hoursSpend}hrs</td>
                    <td className="px-3 py-2 text-gray-500">{ticket.remarks}</td>
                    <td className="px-3 py-2 whitespace-nowrap font-medium">
                      <button 
                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                        onClick={() => navigate(`/ticket/${ticket.id}`)}
                      >
                        View
                      </button>
                      <button className="text-green-600 hover:text-green-900 mr-2">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="lg:w-1/4 mt-4 lg:mt-0">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-800">Member Stats</h2>
            <select 
              className="text-sm border-gray-300 rounded-md"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="space-y-2">
            {departmentStats.map((member, index) => (
              <div key={index} className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${getStatusDot(member.department)} mr-3`}></div>
                <div className="flex-grow">
                  <h3 className="text-sm font-medium text-gray-900">{member.name}</h3>
                  <p className="text-xs text-gray-500">{member.department}</p>
                </div>
                <div className="text-xs text-right">
                  <p className="font-medium text-gray-900">{member[timeFilter].tickets} tickets</p>
                  <p className="text-gray-500">{member[timeFilter].hours} hours</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketTable;