// import React from "react";
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Notification,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Event from './Event.jsx';

// NOTE:
// put button inside of this component for new event hosting

// {invitee, eventName, eventLocation, eventDetails, availableTimes, usernames, selectors}

const EventsHosting = (props) => {
  // return component render

  console.log('props in EventsHosting: ', props)

  return (
    <Box flex="1" marginRight="1rem">
      <Typography variant="h5" marginBottom="1rem">
        Events you are hosting:
        {/* {props.eventsHosting} */}
      </Typography>
      <Container>
        {props.eventsHosting.data.map((event) => (
          <Event eventDetails={event.details} eventLocation={event.location} />
        ))}
      </Container>
    </Box>
  );
};

export default EventsHosting;