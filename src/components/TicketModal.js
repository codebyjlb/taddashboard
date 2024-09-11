import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const TicketModal = ({ open, handleClose, ticket, mode, handleSave }) => {
  const [editedTicket, setEditedTicket] = React.useState(ticket);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedTicket((prev) => ({ ...prev, [name]: value }));
  };

  const onSave = () => {
    handleSave(editedTicket);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{mode === 'read' ? 'Ticket Details' : 'Edit Ticket'}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Ticket No"
          type="text"
          fullWidth
          name="ticketNo"
          value={editedTicket.ticketNo}
          onChange={handleChange}
          disabled={mode === 'read'}
        />
        <TextField
          margin="dense"
          label="Department"
          type="text"
          fullWidth
          name="department"
          value={editedTicket.department}
          onChange={handleChange}
          disabled={mode === 'read'}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel>Status</InputLabel>
          <Select
            value={editedTicket.status}
            label="Status"
            name="status"
            onChange={handleChange}
            disabled={mode === 'read'}
          >
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Remarks"
          type="text"
          fullWidth
          multiline
          rows={4}
          name="remarks"
          value={editedTicket.remarks}
          onChange={handleChange}
          disabled={mode === 'read'}
        />
        <TextField
          margin="dense"
          label="Assignee"
          type="text"
          fullWidth
          name="assignee"
          value={editedTicket.assignee}
          onChange={handleChange}
          disabled={mode === 'read'}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {mode === 'update' && <Button onClick={onSave}>Save</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default TicketModal;