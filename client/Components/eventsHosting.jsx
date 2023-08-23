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

  console.log('props', props)

  return (
    <Box flex="1" marginRight="1rem">
      <Typography variant="h5" marginBottom="1rem">
        Events you are hosting:
      </Typography>
      {props.eventsHosting.map((event) => (
        <Event />
      ))}
    </Box>
  );
};

export default EventsHosting;