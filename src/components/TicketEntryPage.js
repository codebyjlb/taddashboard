import React from 'react';
import { Container, Typography } from '@mui/material';
import TicketEntryForm from './TicketEntryForm';

const TicketEntryPage = () => {
  const handleSubmit = (newTicket) => {
    // Here you would typically send the new ticket data to your backend
    console.log('New ticket submitted:', newTicket);
    // You might want to show a success message or redirect the user
    alert('Ticket created successfully!');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create New Ticket
      </Typography>
      <TicketEntryForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default TicketEntryPage;