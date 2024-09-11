import React, { useState } from 'react';

const DetailedTicketView = ({ ticketId }) => {
  // In a real application, you would fetch the ticket data based on the ticketId
  // For this example, we'll use mock data
  const [ticket, setTicket] = useState({
    id: 'DE32313139',
    department: 'Newsletter',
    status: 'In Progress',
    assignee: 'John',
    timeEffort: 3,
    hoursSpend: 2,
    remarks: 'Content review in progress',
    dateCreated: '2024-09-08',
    deadline: '2024-09-15',
    files: [],
    changeLog: [
      { date: '2024-09-08 09:00', user: 'System', action: 'Ticket created' },
      { date: '2024-09-09 14:30', user: 'John', action: 'Status changed to In Progress' },
    ]
  });

  const [newFile, setNewFile] = useState(null);

  const handleStatusChange = (newStatus) => {
    setTicket(prev => ({
      ...prev,
      status: newStatus,
      changeLog: [...prev.changeLog, {
        date: new Date().toLocaleString(),
        user: 'Current User', // In a real app, you'd get this from authentication
        action: `Status changed to ${newStatus}`
      }]
    }));
  };

  const handleFileUpload = () => {
    if (newFile) {
      setTicket(prev => ({
        ...prev,
        files: [...prev.files, newFile.name],
        changeLog: [...prev.changeLog, {
          date: new Date().toLocaleString(),
          user: 'Current User',
          action: `File uploaded: ${newFile.name}`
        }]
      }));
      setNewFile(null);
    }
  };

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

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ticket Details: {ticket.id}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm font-medium text-gray-500">Department</p>
          <p className="mt-1 text-sm text-gray-900">{ticket.department}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Status</p>
          <div className="mt-1 flex items-center">
            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
              {ticket.status}
            </span>
            <select
              className="ml-2 text-sm border-gray-300 rounded-md"
              value={ticket.status}
              onChange={(e) => handleStatusChange(e.target.value)}
            >
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="In Approval">In Approval</option>
              <option value="In Execution">In Execution</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Assignee</p>
          <p className="mt-1 text-sm text-gray-900">{ticket.assignee}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Time Effort</p>
          <p className="mt-1 text-sm text-gray-900">{ticket.timeEffort} hrs</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Hours Spent</p>
          <p className="mt-1 text-sm text-gray-900">{ticket.hoursSpend} hrs</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Date Created</p>
          <p className="mt-1 text-sm text-gray-900">{ticket.dateCreated}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Deadline</p>
          <p className="mt-1 text-sm text-gray-900">{ticket.deadline}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-sm font-medium text-gray-500">Remarks</p>
          <p className="mt-1 text-sm text-gray-900">{ticket.remarks}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Files</h3>
        <ul className="list-disc pl-5 mb-2">
          {ticket.files.map((file, index) => (
            <li key={index} className="text-sm text-gray-600">{file}</li>
          ))}
        </ul>
        <div className="flex items-center">
          <input
            type="file"
            onChange={(e) => setNewFile(e.target.files[0])}
            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            onClick={handleFileUpload}
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
          >
            Upload
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Change Log</h3>
        <ul className="space-y-2">
          {ticket.changeLog.map((change, index) => (
            <li key={index} className="text-sm">
              <span className="font-medium">{change.date}</span> - {change.user}: {change.action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailedTicketView;