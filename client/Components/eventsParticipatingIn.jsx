import React from "react";
import Event from './Event.jsx';
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Notification,
} from '@mui/material';

const eventsParticipatingIn = (props) => {
  // destructure props for relevant data
  console.log('props in eventsParticipating in: ', props)
  // return component render
  return (

      <Box flex="1">
        <div> 
        <h1>Events you are participating in</h1>
        <table>
        <tr>
          <th style={{paddingRight: '200px', fontSize: '26px'}}>Event Name</th>
          <th style={{paddingRight: '200px', fontSize: '26px'}}>Event Details</th>
          <th style={{paddingRight: '200px', fontSize: '26px'}}>Event Location</th>
        </tr>
        {props.eventsParticipatingIn.data.map((event) => ( 
            <Event eventName={event.location}/> 
          ))}     
        </table>
        </div>
      </Box>
  );
};

export default eventsParticipatingIn;

/* !!OLD HOMEPAGE REFERENCE!! */

// {/* <Box flex='1'>
// <Typography variant='h5' marginBottom='1rem'>
//   Participating
// </Typography>
// {/* Render the participating events */}
// {pEvents.map((event) => (
//   <Container>
//     <Box key={event.event_id}>{event.event_name}</Box>
//     <Button
//       onClick={() => {
//         set(event);
//         navigate('/event/select-times');
//       }}
//     >
//       Set your availability
//     </Button>
//   </Container>
// ))}
// </Box> */}
