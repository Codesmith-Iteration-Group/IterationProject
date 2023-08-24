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
import { blue } from '@mui/material/colors';

// NOTE:
// put button inside of this component for new event hosting

// {invitee, eventName, eventLocation, eventDetails, availableTimes, usernames, selectors}

const EventsHosting = (props) => {
  // return component render

  console.log('props in EventsHosting: ', props)

  return (
    <Box flex="1" marginRight="1rem">

      <div id="hostingCard">
        <h1>Events you are hosting</h1>
      <table>
        <tr>
          <th style={{paddingRight: '200px', fontSize: '26px'}}>Event Name</th>
          <th style={{paddingRight: '200px', fontSize: '26px'}}>Event Details</th>
          <th style={{paddingRight: '200px', fontSize: '26px'}}>Event Location</th>
        </tr>
        {props.eventsHosting.data.map((event) => (
          <Event eventDetails={event.details} eventLocation={event.location} eventName = {event.name} finalizedStartTime = {event.finalized_start_time} finalizedEndTime = {event.finalized_end_time} />
        ))}      
        </table>
      </div>
    </Box>
  );
};

export default EventsHosting;