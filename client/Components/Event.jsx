import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Notification,
} from "@mui/material";
// this is where all of a user's events would be populated

// this file is a strech feature

const Event = ({ eventDetails, eventLocation }) => {
  return (
      <table>
        <tr>
          <td>{eventDetails}</td>
          <td>{eventLocation}</td>
        </tr>
      </table>
  );
};

export default Event;

{/* <Typography>Event Details: {eventDetails} Location: {eventLocation}</Typography> */}