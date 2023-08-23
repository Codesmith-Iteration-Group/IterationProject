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

// NOTE:
// put button inside of this component for new event hosting


const eventsHosting = ({invitee, eventName, eventLocation, eventDetails, availableTimes, usernames, selectors}) => {
  // return component render
  return (
    <Box flex="1" marginRight="1rem">
      <Typography variant="h5" marginBottom="1rem">
        Events you are hosting:
      </Typography>
      {hEvents.map((event) => (
        <Event />
      ))}
    </Box>
  );
};

export default eventsHosting;
